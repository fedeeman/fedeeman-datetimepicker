import { __decorate, __metadata, __param } from "tslib";
import { Directionality } from "@angular/cdk/bidi";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { ESCAPE } from "@angular/cdk/keycodes";
import { Overlay, OverlayConfig, OverlayRef, PositionStrategy } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { DOCUMENT } from "@angular/common";
import { AfterContentInit, ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, Inject, Input, NgZone, OnDestroy, Optional, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { MAT_DATEPICKER_SCROLL_STRATEGY } from "@angular/material/datepicker";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Subject, Subscription } from "rxjs";
import { first } from "rxjs/operators";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimepickerCalendar } from "./calendar";
import { createMissingDateImplError } from "./datetimepicker-errors";
/** Used to generate a unique ID for each datepicker instance. */
let datetimepickerUid = 0;
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
let MatDatetimepickerContent = class MatDatetimepickerContent {
    ngAfterContentInit() {
        this._calendar._focusActiveCell();
    }
    /**
     * Handles keydown event on datepicker content.
     * @param event The event.
     */
    _handleKeydown(event) {
        if (event.keyCode === ESCAPE) {
            this.datetimepicker.close();
            event.preventDefault();
            event.stopPropagation();
        }
    }
};
__decorate([
    ViewChild(MatDatetimepickerCalendar, { static: true }),
    __metadata("design:type", MatDatetimepickerCalendar)
], MatDatetimepickerContent.prototype, "_calendar", void 0);
MatDatetimepickerContent = __decorate([
    Component({
        selector: "mat-datetimepicker-content",
        template: "<mat-datetimepicker-calendar class=\"mat-typography\" cdkTrapFocus\r\n              [id]=\"datetimepicker.id\"\r\n              [attr.mode]=\"datetimepicker.mode\"\r\n              [startView]=\"datetimepicker.startView\"\r\n              [type]=\"datetimepicker.type\"\r\n              [timeInterval]=\"datetimepicker.timeInterval\"\r\n              [minDate]=\"datetimepicker._minDate\"\r\n              [maxDate]=\"datetimepicker._maxDate\"\r\n              [dateFilter]=\"datetimepicker._dateFilter\"\r\n              [selected]=\"datetimepicker._selected\"\r\n              [startAt]=\"datetimepicker.startAt\"\r\n              [confirmButtonLabel]=\"datetimepicker.confirmButtonLabel\"\r\n              [cancelButtonLabel]=\"datetimepicker.cancelButtonLabel\"\r\n              (selectedChange)=\"datetimepicker._select($event)\"\r\n              (_userSelection)=\"datetimepicker.close()\">\r\n</mat-datetimepicker-calendar>\r\n",
        host: {
            "class": "mat-datetimepicker-content",
            "[class.mat-datetimepicker-content-touch]": "datetimepicker?.touchUi",
            "(keydown)": "_handleKeydown($event)"
        },
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".mat-datetimepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;background-color:#fff;border-radius:2px;overflow:hidden}.mat-datetimepicker-calendar{width:296px;height:auto}.mat-datetimepicker-calendar[mode=landscape]{width:446px;height:auto}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{width:446px;height:auto}}.mat-datetimepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.mat-datetimepicker-dialog .mat-dialog-container{padding:0}"]
    })
], MatDatetimepickerContent);
export { MatDatetimepickerContent };
let MatDatetimepicker = class MatDatetimepicker {
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._scrollStrategy = _scrollStrategy;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /** The view that the calendar should start in. */
        this.startView = "month";
        this.mode = "auto";
        this.timeInterval = 1;
        this._type = "date";
        this._touchUi = false;
        /**
         * Emits new selected date when selected date changes.
         * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
         */
        this.selectedChanged = new EventEmitter();
        this.confirmButtonLabel = 'Confirm';
        this.cancelButtonLabel = 'Cancel';
        /** Emits when the datepicker has been opened. */
        this.openedStream = new EventEmitter();
        /** Emits when the datepicker has been closed. */
        this.closedStream = new EventEmitter();
        /** Whether the calendar is open. */
        this.opened = false;
        /** The id for the datepicker calendar. */
        this.id = `mat-datetimepicker-${datetimepickerUid++}`;
        this._validSelected = null;
        /** The element that was focused before the datepicker was opened. */
        this._focusedElementBeforeOpen = null;
        this._inputSubscription = Subscription.EMPTY;
        /** Emits when the datepicker is disabled. */
        this._disabledChange = new Subject();
        if (!this._dateAdapter) {
            throw createMissingDateImplError("DateAdapter");
        }
    }
    /** The date to open the calendar to initially. */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
    }
    set startAt(date) {
        this._startAt = this._dateAdapter.getValidDateOrNull(date);
    }
    get openOnFocus() { return this._openOnFocus; }
    set openOnFocus(value) { this._openOnFocus = coerceBooleanProperty(value); }
    _handleFocus() {
        if (!this.opened && this.openOnFocus) {
            this.open();
        }
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value || "date";
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    get touchUi() {
        return this._touchUi;
    }
    set touchUi(value) {
        this._touchUi = coerceBooleanProperty(value);
    }
    /** Whether the datepicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this._datepickerInput ?
            this._datepickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._disabledChange.next(newValue);
        }
    }
    /** The currently selected date. */
    get _selected() {
        return this._validSelected;
    }
    set _selected(value) {
        this._validSelected = value;
    }
    /** The minimum selectable date. */
    get _minDate() {
        return this._datepickerInput && this._datepickerInput.min;
    }
    /** The maximum selectable date. */
    get _maxDate() {
        return this._datepickerInput && this._datepickerInput.max;
    }
    get _dateFilter() {
        return this._datepickerInput && this._datepickerInput._dateFilter;
    }
    ngOnDestroy() {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
        }
    }
    /** Selects the given date */
    _select(date) {
        const oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDatetime(oldValue, this._selected)) {
            // tslint:disable-next-line deprecation
            this.selectedChanged.emit(date);
        }
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    _registerInput(input) {
        if (this._datepickerInput) {
            throw Error("A MatDatepicker can only be associated with a single input.");
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe((value) => this._selected = value);
    }
    /** Open the calendar. */
    open() {
        if (this.opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error("Attempted to open an MatDatepicker with no associated input.");
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this.opened = true;
        this.openedStream.emit();
    }
    /** Close the calendar. */
    close() {
        if (!this.opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        const completeClose = () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this.opened) {
                this.opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        };
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === "function") {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /** Open the calendar as a dialog. */
    _openAsDialog() {
        this._dialogRef = this._dialog.open(MatDatetimepickerContent, {
            direction: this._dir ? this._dir.value : "ltr",
            viewContainerRef: this._viewContainerRef,
            panelClass: "mat-datetimepicker-dialog"
        });
        this._dialogRef.afterClosed().subscribe(() => this.close());
        this._dialogRef.componentInstance.datetimepicker = this;
    }
    /** Open the calendar as a popup. */
    _openAsPopup() {
        if (!this._calendarPortal) {
            this._calendarPortal = new ComponentPortal(MatDatetimepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            const componentRef = this._popupRef.attach(this._calendarPortal);
            componentRef.instance.datetimepicker = this;
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(first()).subscribe(() => {
                this._popupRef.updatePosition();
            });
        }
        this._popupRef.backdropClick().subscribe(() => this.close());
    }
    /** Create the popup. */
    _createPopup() {
        const overlayConfig = new OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: "mat-overlay-transparent-backdrop",
            direction: this._dir ? this._dir.value : "ltr",
            scrollStrategy: this._scrollStrategy(),
            panelClass: "mat-datetimepicker-popup"
        });
        this._popupRef = this._overlay.create(overlayConfig);
    }
    /** Create the popup PositionStrategy. */
    _createPopupPositionStrategy() {
        return this._overlay.position()
            .connectedTo(this._datepickerInput.getPopupConnectionElementRef(), { originX: "start", originY: "bottom" }, { overlayX: "start", overlayY: "top" })
            .withFallbackPosition({ originX: "start", originY: "top" }, { overlayX: "start", overlayY: "bottom" })
            .withFallbackPosition({ originX: "end", originY: "bottom" }, { overlayX: "end", overlayY: "top" })
            .withFallbackPosition({ originX: "end", originY: "top" }, { overlayX: "end", overlayY: "bottom" });
    }
};
MatDatetimepicker.ctorParameters = () => [
    { type: MatDialog },
    { type: Overlay },
    { type: NgZone },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: DatetimeAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepicker.prototype, "startAt", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepicker.prototype, "startView", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepicker.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatDatetimepicker.prototype, "timeInterval", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MatDatetimepicker.prototype, "openOnFocus", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MatDatetimepicker.prototype, "type", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MatDatetimepicker.prototype, "touchUi", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MatDatetimepicker.prototype, "disabled", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepicker.prototype, "selectedChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatDatetimepicker.prototype, "panelClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatDatetimepicker.prototype, "confirmButtonLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatDatetimepicker.prototype, "cancelButtonLabel", void 0);
__decorate([
    Output("opened"),
    __metadata("design:type", EventEmitter)
], MatDatetimepicker.prototype, "openedStream", void 0);
__decorate([
    Output("closed"),
    __metadata("design:type", EventEmitter)
], MatDatetimepicker.prototype, "closedStream", void 0);
MatDatetimepicker = __decorate([
    Component({
        selector: "mat-datetimepicker",
        exportAs: "matDatetimepicker",
        template: "",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        preserveWhitespaces: false
    }),
    __param(4, Inject(MAT_DATEPICKER_SCROLL_STRATEGY)),
    __param(5, Optional()),
    __param(6, Optional()),
    __param(7, Optional()), __param(7, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [MatDialog,
        Overlay,
        NgZone,
        ViewContainerRef, Object, DatetimeAdapter,
        Directionality, Object])
], MatDatetimepicker);
export { MatDatetimepicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxhQUFhLEVBQ2IsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxN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aURBSVA7QUFpQlM7SUFBVCxNQUFNLEVBQUU7OzBEQUF5QztBQUd6QztJQUFSLEtBQUssRUFBRTs7cURBQStCO0FBRTlCO0lBQVIsS0FBSyxFQUFFOzs2REFBZ0M7QUFDL0I7SUFBUixLQUFLLEVBQUU7OzREQUE4QjtBQUdwQjtJQUFqQixNQUFNLENBQUMsUUFBUSxDQUFDOzhCQUFlLFlBQVk7dURBQWtDO0FBRzVEO0lBQWpCLE1BQU0sQ0FBQyxRQUFRLENBQUM7OEJBQWUsWUFBWTt1REFBa0M7QUEzRm5FLGlCQUFpQjtJQVI3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLEVBQUU7UUFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxtQkFBbUIsRUFBRSxLQUFLO0tBQzNCLENBQUM7SUFxSmEsV0FBQSxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUN0QyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FQWixTQUFTO1FBQ1IsT0FBTztRQUNSLE1BQU07UUFDSSxnQkFBZ0IsVUFFVCxlQUFlO1FBQ3ZCLGNBQWM7R0F0SnpDLGlCQUFpQixDQTRUN0I7U0E1VFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2JpZGlcIjtcclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2VyY2lvblwiO1xyXG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgUG9zaXRpb25TdHJhdGVneVxyXG59IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BvcnRhbFwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0RGlhbG9nLFxyXG4gIE1hdERpYWxvZ1JlZlxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlcklucHV0IH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItaW5wdXRcIjtcclxuXHJcbi8qKiBVc2VkIHRvIGdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBlYWNoIGRhdGVwaWNrZXIgaW5zdGFuY2UuICovXHJcbmxldCBkYXRldGltZXBpY2tlclVpZCA9IDA7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHVzZWQgYXMgdGhlIGNvbnRlbnQgZm9yIHRoZSBkYXRlcGlja2VyIGRpYWxvZyBhbmQgcG9wdXAuIFdlIHVzZSB0aGlzIGluc3RlYWQgb2YgdXNpbmdcclxuICogTWF0Q2FsZW5kYXIgZGlyZWN0bHkgYXMgdGhlIGNvbnRlbnQgc28gd2UgY2FuIGNvbnRyb2wgdGhlIGluaXRpYWwgZm9jdXMuIFRoaXMgYWxzbyBnaXZlcyB1cyBhXHJcbiAqIHBsYWNlIHRvIHB1dCBhZGRpdGlvbmFsIGZlYXR1cmVzIG9mIHRoZSBwb3B1cCB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgY2FsZW5kYXIgaXRzZWxmIGluIHRoZVxyXG4gKiBmdXR1cmUuIChlLmcuIGNvbmZpcm1hdGlvbiBidXR0b25zKS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnRcIixcclxuICB0ZW1wbGF0ZVVybDogXCJkYXRldGltZXBpY2tlci1jb250ZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImRhdGV0aW1lcGlja2VyLWNvbnRlbnQuc2Nzc1wiXSxcclxuICBob3N0OiB7XHJcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnRcIixcclxuICAgIFwiW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50LXRvdWNoXVwiOiBcImRhdGV0aW1lcGlja2VyPy50b3VjaFVpXCIsXHJcbiAgICBcIihrZXlkb3duKVwiOiBcIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgZGF0ZXRpbWVwaWNrZXI6IE1hdERhdGV0aW1lcGlja2VyPEQ+O1xyXG5cclxuICBAVmlld0NoaWxkKE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIsIHsgc3RhdGljOiB0cnVlIH0pIF9jYWxlbmRhcjogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcjxEPjtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fY2FsZW5kYXIuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBrZXlkb3duIGV2ZW50IG9uIGRhdGVwaWNrZXIgY29udGVudC5cclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgIHRoaXMuZGF0ZXRpbWVwaWNrZXIuY2xvc2UoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXJcIixcclxuICBleHBvcnRBczogXCJtYXREYXRldGltZXBpY2tlclwiLFxyXG4gIHRlbXBsYXRlOiBcIlwiLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyPEQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogVGhlIGRhdGUgdG8gb3BlbiB0aGUgY2FsZW5kYXIgdG8gaW5pdGlhbGx5LiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN0YXJ0QXQoKTogRCB8IG51bGwge1xyXG4gICAgLy8gSWYgYW4gZXhwbGljaXQgc3RhcnRBdCBpcyBzZXQgd2Ugc3RhcnQgdGhlcmUsIG90aGVyd2lzZSB3ZSBzdGFydCBhdCB3aGF0ZXZlciB0aGUgY3VycmVudGx5XHJcbiAgICAvLyBzZWxlY3RlZCB2YWx1ZSBpcy5cclxuICAgIHJldHVybiB0aGlzLl9zdGFydEF0IHx8ICh0aGlzLl9kYXRlcGlja2VySW5wdXQgPyB0aGlzLl9kYXRlcGlja2VySW5wdXQudmFsdWUgOiBudWxsKTtcclxuICB9XHJcblxyXG4gIHNldCBzdGFydEF0KGRhdGU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9zdGFydEF0ID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RhcnRBdDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgdmlldyB0aGF0IHRoZSBjYWxlbmRhciBzaG91bGQgc3RhcnQgaW4uICovXHJcbiAgQElucHV0KCkgc3RhcnRWaWV3OiBcImNsb2NrXCIgfCBcIm1vbnRoXCIgfCBcInllYXJcIiA9IFwibW9udGhcIjtcclxuICBASW5wdXQoKSBtb2RlOiBcImF1dG9cIiB8IFwicG9ydHJhaXRcIiB8IFwibGFuZHNjYXBlXCIgPSBcImF1dG9cIjtcclxuICBASW5wdXQoKSB0aW1lSW50ZXJ2YWw6IG51bWJlciA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG9wZW5PbkZvY3VzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3Blbk9uRm9jdXM7IH1cclxuICBzZXQgb3Blbk9uRm9jdXModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fb3Blbk9uRm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XHJcbiAgcHJpdmF0ZSBfb3Blbk9uRm9jdXM6IGJvb2xlYW47XHJcblxyXG4gIF9oYW5kbGVGb2N1cygpIHtcclxuICAgIGlmICghdGhpcy5vcGVuZWQgJiYgdGhpcy5vcGVuT25Gb2N1cykge1xyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHNldCB0eXBlKHZhbHVlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWUgfHwgXCJkYXRlXCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIFVJIGlzIGluIHRvdWNoIG1vZGUuIEluIHRvdWNoIG1vZGUgdGhlIGNhbGVuZGFyIG9wZW5zIGluIGEgZGlhbG9nIHJhdGhlclxyXG4gICAqIHRoYW4gYSBwb3B1cCBhbmQgZWxlbWVudHMgaGF2ZSBtb3JlIHBhZGRpbmcgdG8gYWxsb3cgZm9yIGJpZ2dlciB0b3VjaCB0YXJnZXRzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvdWNoVWkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hVaTtcclxuICB9XHJcblxyXG4gIHNldCB0b3VjaFVpKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl90b3VjaFVpID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RvdWNoVWkgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGRhdGVwaWNrZXIgcG9wLXVwIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA/XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5kaXNhYmxlZCA6ICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuXHJcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX2Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLm5leHQobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIG5ldyBzZWxlY3RlZCBkYXRlIHdoZW4gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLlxyXG4gICAqIEBkZXByZWNhdGVkIFN3aXRjaCB0byB0aGUgYGRhdGVDaGFuZ2VgIGFuZCBgZGF0ZUlucHV0YCBiaW5kaW5nIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBDbGFzc2VzIHRvIGJlIHBhc3NlZCB0byB0aGUgZGF0ZSBwaWNrZXIgcGFuZWwuIFN1cHBvcnRzIHRoZSBzYW1lIHN5bnRheCBhcyBgbmdDbGFzc2AuICovXHJcbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25MYWJlbCA9ICdDb25maXJtJztcclxuICBASW5wdXQoKSBjYW5jZWxCdXR0b25MYWJlbCA9ICdDYW5jZWwnO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBoYXMgYmVlbiBvcGVuZWQuICovXHJcbiAgQE91dHB1dChcIm9wZW5lZFwiKSBvcGVuZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaGFzIGJlZW4gY2xvc2VkLiAqL1xyXG4gIEBPdXRwdXQoXCJjbG9zZWRcIikgY2xvc2VkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBpcyBvcGVuLiAqL1xyXG4gIG9wZW5lZCA9IGZhbHNlO1xyXG5cclxuICAvKiogVGhlIGlkIGZvciB0aGUgZGF0ZXBpY2tlciBjYWxlbmRhci4gKi9cclxuICBpZCA9IGBtYXQtZGF0ZXRpbWVwaWNrZXItJHtkYXRldGltZXBpY2tlclVpZCsrfWA7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgZ2V0IF9zZWxlY3RlZCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBfc2VsZWN0ZWQodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl92YWxpZFNlbGVjdGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF92YWxpZFNlbGVjdGVkOiBEIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgZ2V0IF9taW5EYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1pbjtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgZ2V0IF9tYXhEYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1heDtcclxuICB9XHJcblxyXG4gIGdldCBfZGF0ZUZpbHRlcigpOiAoZGF0ZTogRCB8IG51bGwsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fZGF0ZUZpbHRlcjtcclxuICB9XHJcblxyXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBwb3B1cC4gKi9cclxuICBwcml2YXRlIF9wb3B1cFJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBkaWFsb2cgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkIGFzIGEgZGlhbG9nLiAqL1xyXG4gIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4gfCBudWxsO1xyXG5cclxuICAvKiogQSBwb3J0YWwgY29udGFpbmluZyB0aGUgY2FsZW5kYXIgZm9yIHRoaXMgZGF0ZXBpY2tlci4gKi9cclxuICBwcml2YXRlIF9jYWxlbmRhclBvcnRhbDogQ29tcG9uZW50UG9ydGFsPE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPj47XHJcblxyXG4gIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgZGF0ZXBpY2tlciB3YXMgb3BlbmVkLiAqL1xyXG4gIHByaXZhdGUgX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB0aGlzIGRhdGVwaWNrZXIgaXMgYXNzb2NpYXRlZCB3aXRoLiAqL1xyXG4gIF9kYXRlcGlja2VySW5wdXQ6IE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGRpc2FibGVkLiAqL1xyXG4gIF9kaXNhYmxlZENoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICBASW5qZWN0KE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSkgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRlQWRhcHRlclwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgdGhpcy5faW5wdXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3BvcHVwUmVmKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBTZWxlY3RzIHRoZSBnaXZlbiBkYXRlICovXHJcbiAgX3NlbGVjdChkYXRlOiBEKTogdm9pZCB7XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBkYXRlO1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZXRpbWUob2xkVmFsdWUsIHRoaXMuX3NlbGVjdGVkKSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb25cclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZWQuZW1pdChkYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyBkYXRlcGlja2VyLlxyXG4gICAqIEBwYXJhbSBpbnB1dCBUaGUgZGF0ZXBpY2tlciBpbnB1dCB0byByZWdpc3RlciB3aXRoIHRoaXMgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICBfcmVnaXN0ZXJJbnB1dChpbnB1dDogTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXJJbnB1dCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkEgTWF0RGF0ZXBpY2tlciBjYW4gb25seSBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgaW5wdXQuXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0ID0gaW5wdXQ7XHJcbiAgICB0aGlzLl9pbnB1dFN1YnNjcmlwdGlvbiA9XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fdmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRCB8IG51bGwpID0+IHRoaXMuX3NlbGVjdGVkID0gdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyLiAqL1xyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcGVuZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJJbnB1dCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkF0dGVtcHRlZCB0byBvcGVuIGFuIE1hdERhdGVwaWNrZXIgd2l0aCBubyBhc3NvY2lhdGVkIGlucHV0LlwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG91Y2hVaSA/IHRoaXMuX29wZW5Bc0RpYWxvZygpIDogdGhpcy5fb3BlbkFzUG9wdXAoKTtcclxuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcclxuICAgIHRoaXMub3BlbmVkU3RyZWFtLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBDbG9zZSB0aGUgY2FsZW5kYXIuICovXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9wb3B1cFJlZiAmJiB0aGlzLl9wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRldGFjaCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2RpYWxvZ1JlZikge1xyXG4gICAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgdGhpcy5fZGlhbG9nUmVmID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9jYWxlbmRhclBvcnRhbCAmJiB0aGlzLl9jYWxlbmRhclBvcnRhbC5pc0F0dGFjaGVkKSB7XHJcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmRldGFjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIC8vIFRoZSBgX29wZW5lZGAgY291bGQndmUgYmVlbiByZXNldCBhbHJlYWR5IGlmXHJcbiAgICAgIC8vIHdlIGdvdCB0d28gZXZlbnRzIGluIHF1aWNrIHN1Y2Nlc3Npb24uXHJcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbG9zZWRTdHJlYW0uZW1pdCgpO1xyXG4gICAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiAmJlxyXG4gICAgICB0eXBlb2YgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgLy8gQmVjYXVzZSBJRSBtb3ZlcyBmb2N1cyBhc3luY2hyb25vdXNseSwgd2UgY2FuJ3QgY291bnQgb24gaXQgYmVpbmcgcmVzdG9yZWQgYmVmb3JlIHdlJ3ZlXHJcbiAgICAgIC8vIG1hcmtlZCB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQuIElmIHRoZSBldmVudCBmaXJlcyBvdXQgb2Ygc2VxdWVuY2UgYW5kIHRoZSBlbGVtZW50IHRoYXRcclxuICAgICAgLy8gd2UncmUgcmVmb2N1c2luZyBvcGVucyB0aGUgZGF0ZXBpY2tlciBvbiBmb2N1cywgdGhlIHVzZXIgY291bGQgYmUgc3R1Y2sgd2l0aCBub3QgYmVpbmdcclxuICAgICAgLy8gYWJsZSB0byBjbG9zZSB0aGUgY2FsZW5kYXIgYXQgYWxsLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBtYWtpbmcgdGhlIGxvZ2ljLCB0aGF0IG1hcmtzXHJcbiAgICAgIC8vIHRoZSBkYXRlcGlja2VyIGFzIGNsb3NlZCwgYXN5bmMgYXMgd2VsbC5cclxuICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoY29tcGxldGVDbG9zZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wbGV0ZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBkaWFsb2cuICovXHJcbiAgcHJpdmF0ZSBfb3BlbkFzRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGlhbG9nUmVmID0gdGhpcy5fZGlhbG9nLm9wZW4oTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LCB7XHJcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogXCJsdHJcIixcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgcGFuZWxDbGFzczogXCJtYXQtZGF0ZXRpbWVwaWNrZXItZGlhbG9nXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgICB0aGlzLl9kaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0ZXRpbWVwaWNrZXIgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyIGFzIGEgcG9wdXAuICovXHJcbiAgcHJpdmF0ZSBfb3BlbkFzUG9wdXAoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2NhbGVuZGFyUG9ydGFsKSB7XHJcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4+KE1hdERhdGV0aW1lcGlja2VyQ29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9wb3B1cFJlZikge1xyXG4gICAgICB0aGlzLl9jcmVhdGVQb3B1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4+ID1cclxuICAgICAgICB0aGlzLl9wb3B1cFJlZi5hdHRhY2godGhpcy5fY2FsZW5kYXJQb3J0YWwpO1xyXG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0ZXRpbWVwaWNrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbiBvbmNlIHRoZSBjYWxlbmRhciBoYXMgcmVuZGVyZWQuXHJcbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcG9wdXBSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSB0aGUgcG9wdXAuICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9jcmVhdGVQb3B1cFBvc2l0aW9uU3RyYXRlZ3koKSxcclxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IFwibWF0LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3BcIixcclxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiBcImx0clwiLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fc2Nyb2xsU3RyYXRlZ3koKSxcclxuICAgICAgcGFuZWxDbGFzczogXCJtYXQtZGF0ZXRpbWVwaWNrZXItcG9wdXBcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGUgdGhlIHBvcHVwIFBvc2l0aW9uU3RyYXRlZ3kuICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkucG9zaXRpb24oKVxyXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5fZGF0ZXBpY2tlcklucHV0LmdldFBvcHVwQ29ubmVjdGlvbkVsZW1lbnRSZWYoKSxcclxuICAgICAgICB7b3JpZ2luWDogXCJzdGFydFwiLCBvcmlnaW5ZOiBcImJvdHRvbVwifSxcclxuICAgICAgICB7b3ZlcmxheVg6IFwic3RhcnRcIiwgb3ZlcmxheVk6IFwidG9wXCJ9XHJcbiAgICAgIClcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHtvcmlnaW5YOiBcInN0YXJ0XCIsIG9yaWdpblk6IFwidG9wXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJzdGFydFwiLCBvdmVybGF5WTogXCJib3R0b21cIn1cclxuICAgICAgKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAge29yaWdpblg6IFwiZW5kXCIsIG9yaWdpblk6IFwiYm90dG9tXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJlbmRcIiwgb3ZlcmxheVk6IFwidG9wXCJ9XHJcbiAgICAgIClcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHtvcmlnaW5YOiBcImVuZFwiLCBvcmlnaW5ZOiBcInRvcFwifSxcclxuICAgICAgICB7b3ZlcmxheVg6IFwiZW5kXCIsIG92ZXJsYXlZOiBcImJvdHRvbVwifVxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=