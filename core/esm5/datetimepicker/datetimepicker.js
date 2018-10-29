/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directionality } from "@angular/cdk/bidi";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { ESCAPE } from "@angular/cdk/keycodes";
import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { MAT_DATEPICKER_SCROLL_STRATEGY } from "@angular/material";
import { MatDialog } from "@angular/material/dialog";
import { Subject, Subscription } from "rxjs";
import { first } from "rxjs/operators";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimepickerCalendar } from "./calendar";
import { createMissingDateImplError } from "./datetimepicker-errors";
/**
 * Used to generate a unique ID for each datepicker instance.
 * @type {?}
 */
var datetimepickerUid = 0;
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
var MatDatetimepickerContent = /** @class */ (function () {
    /**
     * Component used as the content for the datepicker dialog and popup. We use this instead of using
     * MatCalendar directly as the content so we can control the initial focus. This also gives us a
     * place to put additional features of the popup that are not part of the calendar itself in the
     * future. (e.g. confirmation buttons).
     * @docs-private
     */
    function MatDatetimepickerContent() {
    }
    /**
     * @return {?}
     */
    MatDatetimepickerContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._calendar._focusActiveCell();
    };
    /**
     * Handles keydown event on datepicker content.
     * @param event The event.
     */
    /**
     * Handles keydown event on datepicker content.
     * @param {?} event The event.
     * @return {?}
     */
    MatDatetimepickerContent.prototype._handleKeydown = /**
     * Handles keydown event on datepicker content.
     * @param {?} event The event.
     * @return {?}
     */
    function (event) {
        if (event.keyCode === ESCAPE) {
            this.datetimepicker.close();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    MatDatetimepickerContent.decorators = [
        { type: Component, args: [{
                    selector: "mat-datetimepicker-content",
                    template: "<mat-datetimepicker-calendar class=\"mat-typography\" cdkTrapFocus\n              [id]=\"datetimepicker.id\"\n              [attr.mode]=\"datetimepicker.mode\"\n              [startView]=\"datetimepicker.startView\"\n              [type]=\"datetimepicker.type\"\n              [timeInterval]=\"datetimepicker.timeInterval\"\n              [minDate]=\"datetimepicker._minDate\"\n              [maxDate]=\"datetimepicker._maxDate\"\n              [dateFilter]=\"datetimepicker._dateFilter\"\n              [selected]=\"datetimepicker._selected\"\n              [startAt]=\"datetimepicker.startAt\"\n              [confirmButtonLabel]=\"datetimepicker.confirmButtonLabel\"\n              [cancelButtonLabel]=\"datetimepicker.cancelButtonLabel\"\n              (selectedChange)=\"datetimepicker._select($event)\"\n              (_userSelection)=\"datetimepicker.close()\">\n</mat-datetimepicker-calendar>\n",
                    styles: [".mat-datetimepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;background-color:#fff;border-radius:2px;overflow:hidden}.mat-datetimepicker-calendar{width:296px;height:auto}.mat-datetimepicker-calendar[mode=landscape]{width:446px;height:auto}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{width:446px;height:auto}}.mat-datetimepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.mat-datetimepicker-dialog .mat-dialog-container{padding:0}"],
                    host: {
                        "class": "mat-datetimepicker-content",
                        "[class.mat-datetimepicker-content-touch]": "datetimepicker?.touchUi",
                        "(keydown)": "_handleKeydown($event)"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    MatDatetimepickerContent.propDecorators = {
        _calendar: [{ type: ViewChild, args: [MatDatetimepickerCalendar,] }]
    };
    return MatDatetimepickerContent;
}());
export { MatDatetimepickerContent };
if (false) {
    /** @type {?} */
    MatDatetimepickerContent.prototype.datetimepicker;
    /** @type {?} */
    MatDatetimepickerContent.prototype._calendar;
}
/**
 * @template D
 */
var MatDatetimepicker = /** @class */ (function () {
    function MatDatetimepicker(_dialog, _overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
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
        this.id = "mat-datetimepicker-" + datetimepickerUid++;
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
    Object.defineProperty(MatDatetimepicker.prototype, "startAt", {
        /** The date to open the calendar to initially. */
        get: /**
         * The date to open the calendar to initially.
         * @return {?}
         */
        function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._startAt = this._dateAdapter.getValidDateOrNull(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "openOnFocus", {
        get: /**
         * @return {?}
         */
        function () { return this._openOnFocus; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._openOnFocus = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepicker.prototype._handleFocus = /**
     * @return {?}
     */
    function () {
        if (!this.opened && this.openOnFocus) {
            this.open();
        }
    };
    Object.defineProperty(MatDatetimepicker.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value || "date";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "touchUi", {
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         */
        get: /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */
        function () {
            return this._touchUi;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._touchUi = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "disabled", {
        /** Whether the datepicker pop-up should be disabled. */
        get: /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = coerceBooleanProperty(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () {
            return this._validSelected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_dateFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
        }
    };
    /** Selects the given date */
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    MatDatetimepicker.prototype._select = /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDatetime(oldValue, this._selected)) {
            // tslint:disable-next-line deprecation
            this.selectedChanged.emit(date);
        }
    };
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    MatDatetimepicker.prototype._registerInput = /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error("A MatDatepicker can only be associated with a single input.");
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
    };
    /** Open the calendar. */
    /**
     * Open the calendar.
     * @return {?}
     */
    MatDatetimepicker.prototype.open = /**
     * Open the calendar.
     * @return {?}
     */
    function () {
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
    };
    /** Close the calendar. */
    /**
     * Close the calendar.
     * @return {?}
     */
    MatDatetimepicker.prototype.close = /**
     * Close the calendar.
     * @return {?}
     */
    function () {
        var _this = this;
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
        /** @type {?} */
        var completeClose = function () {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this.opened) {
                _this.opened = false;
                _this.closedStream.emit();
                _this._focusedElementBeforeOpen = null;
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
    };
    /** Open the calendar as a dialog. */
    /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    MatDatetimepicker.prototype._openAsDialog = /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    function () {
        var _this = this;
        this._dialogRef = this._dialog.open(MatDatetimepickerContent, {
            direction: this._dir ? this._dir.value : "ltr",
            viewContainerRef: this._viewContainerRef,
            panelClass: "mat-datetimepicker-dialog"
        });
        this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
        this._dialogRef.componentInstance.datetimepicker = this;
    };
    /** Open the calendar as a popup. */
    /**
     * Open the calendar as a popup.
     * @return {?}
     */
    MatDatetimepicker.prototype._openAsPopup = /**
     * Open the calendar as a popup.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new ComponentPortal(MatDatetimepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            /** @type {?} */
            var componentRef = this._popupRef.attach(this._calendarPortal);
            componentRef.instance.datetimepicker = this;
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(first()).subscribe(function () {
                _this._popupRef.updatePosition();
            });
        }
        this._popupRef.backdropClick().subscribe(function () { return _this.close(); });
    };
    /** Create the popup. */
    /**
     * Create the popup.
     * @return {?}
     */
    MatDatetimepicker.prototype._createPopup = /**
     * Create the popup.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: "mat-overlay-transparent-backdrop",
            direction: this._dir ? this._dir.value : "ltr",
            scrollStrategy: this._scrollStrategy(),
            panelClass: "mat-datetimepicker-popup"
        });
        this._popupRef = this._overlay.create(overlayConfig);
    };
    /** Create the popup PositionStrategy. */
    /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    MatDatetimepicker.prototype._createPopupPositionStrategy = /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    function () {
        return this._overlay.position()
            .connectedTo(this._datepickerInput.getPopupConnectionElementRef(), { originX: "start", originY: "bottom" }, { overlayX: "start", overlayY: "top" })
            .withFallbackPosition({ originX: "start", originY: "top" }, { overlayX: "start", overlayY: "bottom" })
            .withFallbackPosition({ originX: "end", originY: "bottom" }, { overlayX: "end", overlayY: "top" })
            .withFallbackPosition({ originX: "end", originY: "top" }, { overlayX: "end", overlayY: "bottom" });
    };
    MatDatetimepicker.decorators = [
        { type: Component, args: [{
                    selector: "mat-datetimepicker",
                    exportAs: "matDatetimepicker",
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                },] },
    ];
    MatDatetimepicker.ctorParameters = function () { return [
        { type: MatDialog },
        { type: Overlay },
        { type: NgZone },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
        { type: DatetimeAdapter, decorators: [{ type: Optional }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MatDatetimepicker.propDecorators = {
        startAt: [{ type: Input }],
        startView: [{ type: Input }],
        mode: [{ type: Input }],
        timeInterval: [{ type: Input }],
        openOnFocus: [{ type: Input }],
        type: [{ type: Input }],
        touchUi: [{ type: Input }],
        disabled: [{ type: Input }],
        selectedChanged: [{ type: Output }],
        panelClass: [{ type: Input }],
        confirmButtonLabel: [{ type: Input }],
        cancelButtonLabel: [{ type: Input }],
        openedStream: [{ type: Output, args: ["opened",] }],
        closedStream: [{ type: Output, args: ["closed",] }]
    };
    return MatDatetimepicker;
}());
export { MatDatetimepicker };
if (false) {
    /** @type {?} */
    MatDatetimepicker.prototype._startAt;
    /**
     * The view that the calendar should start in.
     * @type {?}
     */
    MatDatetimepicker.prototype.startView;
    /** @type {?} */
    MatDatetimepicker.prototype.mode;
    /** @type {?} */
    MatDatetimepicker.prototype.timeInterval;
    /** @type {?} */
    MatDatetimepicker.prototype._openOnFocus;
    /** @type {?} */
    MatDatetimepicker.prototype._type;
    /** @type {?} */
    MatDatetimepicker.prototype._touchUi;
    /** @type {?} */
    MatDatetimepicker.prototype._disabled;
    /**
     * Emits new selected date when selected date changes.
     * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
     * @type {?}
     */
    MatDatetimepicker.prototype.selectedChanged;
    /**
     * Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`.
     * @type {?}
     */
    MatDatetimepicker.prototype.panelClass;
    /** @type {?} */
    MatDatetimepicker.prototype.confirmButtonLabel;
    /** @type {?} */
    MatDatetimepicker.prototype.cancelButtonLabel;
    /**
     * Emits when the datepicker has been opened.
     * @type {?}
     */
    MatDatetimepicker.prototype.openedStream;
    /**
     * Emits when the datepicker has been closed.
     * @type {?}
     */
    MatDatetimepicker.prototype.closedStream;
    /**
     * Whether the calendar is open.
     * @type {?}
     */
    MatDatetimepicker.prototype.opened;
    /**
     * The id for the datepicker calendar.
     * @type {?}
     */
    MatDatetimepicker.prototype.id;
    /** @type {?} */
    MatDatetimepicker.prototype._validSelected;
    /**
     * A reference to the overlay when the calendar is opened as a popup.
     * @type {?}
     */
    MatDatetimepicker.prototype._popupRef;
    /**
     * A reference to the dialog when the calendar is opened as a dialog.
     * @type {?}
     */
    MatDatetimepicker.prototype._dialogRef;
    /**
     * A portal containing the calendar for this datepicker.
     * @type {?}
     */
    MatDatetimepicker.prototype._calendarPortal;
    /**
     * The element that was focused before the datepicker was opened.
     * @type {?}
     */
    MatDatetimepicker.prototype._focusedElementBeforeOpen;
    /** @type {?} */
    MatDatetimepicker.prototype._inputSubscription;
    /**
     * The input element this datepicker is associated with.
     * @type {?}
     */
    MatDatetimepicker.prototype._datepickerInput;
    /**
     * Emits when the datepicker is disabled.
     * @type {?}
     */
    MatDatetimepicker.prototype._disabledChange;
    /** @type {?} */
    MatDatetimepicker.prototype._dialog;
    /** @type {?} */
    MatDatetimepicker.prototype._overlay;
    /** @type {?} */
    MatDatetimepicker.prototype._ngZone;
    /** @type {?} */
    MatDatetimepicker.prototype._viewContainerRef;
    /** @type {?} */
    MatDatetimepicker.prototype._scrollStrategy;
    /** @type {?} */
    MatDatetimepicker.prototype._dateAdapter;
    /** @type {?} */
    MatDatetimepicker.prototype._dir;
    /** @type {?} */
    MatDatetimepicker.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxTQUFTLEVBRVYsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7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IkBhbmd1bGFyL2Nkay9iaWRpXCI7XHJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gXCJAYW5ndWxhci9jZGsvY29lcmNpb25cIjtcclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xyXG5pbXBvcnQge1xyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFBvc2l0aW9uU3RyYXRlZ3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9wb3J0YWxcIjtcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHtcclxuICBNYXREaWFsb2csXHJcbiAgTWF0RGlhbG9nUmVmXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIgfSBmcm9tIFwiLi9jYWxlbmRhclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VySW5wdXQgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1pbnB1dFwiO1xyXG5cclxuLyoqIFVzZWQgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGVhY2ggZGF0ZXBpY2tlciBpbnN0YW5jZS4gKi9cclxubGV0IGRhdGV0aW1lcGlja2VyVWlkID0gMDtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdXNlZCBhcyB0aGUgY29udGVudCBmb3IgdGhlIGRhdGVwaWNrZXIgZGlhbG9nIGFuZCBwb3B1cC4gV2UgdXNlIHRoaXMgaW5zdGVhZCBvZiB1c2luZ1xyXG4gKiBNYXRDYWxlbmRhciBkaXJlY3RseSBhcyB0aGUgY29udGVudCBzbyB3ZSBjYW4gY29udHJvbCB0aGUgaW5pdGlhbCBmb2N1cy4gVGhpcyBhbHNvIGdpdmVzIHVzIGFcclxuICogcGxhY2UgdG8gcHV0IGFkZGl0aW9uYWwgZmVhdHVyZXMgb2YgdGhlIHBvcHVwIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBjYWxlbmRhciBpdHNlbGYgaW4gdGhlXHJcbiAqIGZ1dHVyZS4gKGUuZy4gY29uZmlybWF0aW9uIGJ1dHRvbnMpLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudFwiLFxyXG4gIHRlbXBsYXRlOiBgPG1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhciBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCIgY2RrVHJhcEZvY3VzXHJcbiAgICAgICAgICAgICAgW2lkXT1cImRhdGV0aW1lcGlja2VyLmlkXCJcclxuICAgICAgICAgICAgICBbYXR0ci5tb2RlXT1cImRhdGV0aW1lcGlja2VyLm1vZGVcIlxyXG4gICAgICAgICAgICAgIFtzdGFydFZpZXddPVwiZGF0ZXRpbWVwaWNrZXIuc3RhcnRWaWV3XCJcclxuICAgICAgICAgICAgICBbdHlwZV09XCJkYXRldGltZXBpY2tlci50eXBlXCJcclxuICAgICAgICAgICAgICBbdGltZUludGVydmFsXT1cImRhdGV0aW1lcGlja2VyLnRpbWVJbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICAgW21pbkRhdGVdPVwiZGF0ZXRpbWVwaWNrZXIuX21pbkRhdGVcIlxyXG4gICAgICAgICAgICAgIFttYXhEYXRlXT1cImRhdGV0aW1lcGlja2VyLl9tYXhEYXRlXCJcclxuICAgICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJkYXRldGltZXBpY2tlci5fZGF0ZUZpbHRlclwiXHJcbiAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cImRhdGV0aW1lcGlja2VyLl9zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgW3N0YXJ0QXRdPVwiZGF0ZXRpbWVwaWNrZXIuc3RhcnRBdFwiXHJcbiAgICAgICAgICAgICAgW2NvbmZpcm1CdXR0b25MYWJlbF09XCJkYXRldGltZXBpY2tlci5jb25maXJtQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgICAgICAgIFtjYW5jZWxCdXR0b25MYWJlbF09XCJkYXRldGltZXBpY2tlci5jYW5jZWxCdXR0b25MYWJlbFwiXHJcbiAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cImRhdGV0aW1lcGlja2VyLl9zZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cImRhdGV0aW1lcGlja2VyLmNsb3NlKClcIj5cclxuPC9tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXI+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoycHg7b3ZlcmZsb3c6aGlkZGVufS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJ7d2lkdGg6Mjk2cHg7aGVpZ2h0OmF1dG99Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWxhbmRzY2FwZV17d2lkdGg6NDQ2cHg7aGVpZ2h0OmF1dG99QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpey5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXXt3aWR0aDo0NDZweDtoZWlnaHQ6YXV0b319Lm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmJsb2NrO2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsLmNkay1vdmVybGF5LWNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTouNDh9LmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC42KX0ubWF0LWRhdGV0aW1lcGlja2VyLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXJ7cGFkZGluZzowfWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiY2xhc3NcIjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudFwiLFxyXG4gICAgXCJbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnQtdG91Y2hdXCI6IFwiZGF0ZXRpbWVwaWNrZXI/LnRvdWNoVWlcIixcclxuICAgIFwiKGtleWRvd24pXCI6IFwiX2hhbmRsZUtleWRvd24oJGV2ZW50KVwiXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBkYXRldGltZXBpY2tlcjogTWF0RGF0ZXRpbWVwaWNrZXI8RD47XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcikgX2NhbGVuZGFyOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyPEQ+O1xyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhci5fZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGtleWRvd24gZXZlbnQgb24gZGF0ZXBpY2tlciBjb250ZW50LlxyXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQuXHJcbiAgICovXHJcbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUpIHtcclxuICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5jbG9zZSgpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlclwiLFxyXG4gIGV4cG9ydEFzOiBcIm1hdERhdGV0aW1lcGlja2VyXCIsXHJcbiAgdGVtcGxhdGU6IFwiXCIsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKiBUaGUgZGF0ZSB0byBvcGVuIHRoZSBjYWxlbmRhciB0byBpbml0aWFsbHkuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc3RhcnRBdCgpOiBEIHwgbnVsbCB7XHJcbiAgICAvLyBJZiBhbiBleHBsaWNpdCBzdGFydEF0IGlzIHNldCB3ZSBzdGFydCB0aGVyZSwgb3RoZXJ3aXNlIHdlIHN0YXJ0IGF0IHdoYXRldmVyIHRoZSBjdXJyZW50bHlcclxuICAgIC8vIHNlbGVjdGVkIHZhbHVlIGlzLlxyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQgfHwgKHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA/IHRoaXMuX2RhdGVwaWNrZXJJbnB1dC52YWx1ZSA6IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXJ0QXQoZGF0ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydEF0OiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSB2aWV3IHRoYXQgdGhlIGNhbGVuZGFyIHNob3VsZCBzdGFydCBpbi4gKi9cclxuICBASW5wdXQoKSBzdGFydFZpZXc6IFwiY2xvY2tcIiB8IFwibW9udGhcIiB8IFwieWVhclwiID0gXCJtb250aFwiO1xyXG4gIEBJbnB1dCgpIG1vZGU6IFwiYXV0b1wiIHwgXCJwb3J0cmFpdFwiIHwgXCJsYW5kc2NhcGVcIiA9IFwiYXV0b1wiO1xyXG4gIEBJbnB1dCgpIHRpbWVJbnRlcnZhbDogbnVtYmVyID0gMTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgb3Blbk9uRm9jdXMoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vcGVuT25Gb2N1czsgfVxyXG4gIHNldCBvcGVuT25Gb2N1cyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9vcGVuT25Gb2N1cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cclxuICBwcml2YXRlIF9vcGVuT25Gb2N1czogYm9vbGVhbjtcclxuXHJcbiAgX2hhbmRsZUZvY3VzKCkge1xyXG4gICAgaWYgKCF0aGlzLm9wZW5lZCAmJiB0aGlzLm9wZW5PbkZvY3VzKSB7XHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHR5cGUodmFsdWU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCBcImRhdGVcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3R5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgY2FsZW5kYXIgVUkgaXMgaW4gdG91Y2ggbW9kZS4gSW4gdG91Y2ggbW9kZSB0aGUgY2FsZW5kYXIgb3BlbnMgaW4gYSBkaWFsb2cgcmF0aGVyXHJcbiAgICogdGhhbiBhIHBvcHVwIGFuZCBlbGVtZW50cyBoYXZlIG1vcmUgcGFkZGluZyB0byBhbGxvdyBmb3IgYmlnZ2VyIHRvdWNoIHRhcmdldHMuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdG91Y2hVaSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b3VjaFVpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdWNoVWkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3RvdWNoVWkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdG91Y2hVaSA9IGZhbHNlO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlciBwb3AtdXAgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0ID9cclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0LmRpc2FibGVkIDogISF0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG5cclxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UubmV4dChuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgbmV3IHNlbGVjdGVkIGRhdGUgd2hlbiBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuXHJcbiAgICogQGRlcHJlY2F0ZWQgU3dpdGNoIHRvIHRoZSBgZGF0ZUNoYW5nZWAgYW5kIGBkYXRlSW5wdXRgIGJpbmRpbmcgb24gdGhlIGlucHV0IGVsZW1lbnQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIENsYXNzZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBkYXRlIHBpY2tlciBwYW5lbC4gU3VwcG9ydHMgdGhlIHNhbWUgc3ludGF4IGFzIGBuZ0NsYXNzYC4gKi9cclxuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgQElucHV0KCkgY29uZmlybUJ1dHRvbkxhYmVsID0gJ0NvbmZpcm0nO1xyXG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvbkxhYmVsID0gJ0NhbmNlbCc7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGhhcyBiZWVuIG9wZW5lZC4gKi9cclxuICBAT3V0cHV0KFwib3BlbmVkXCIpIG9wZW5lZFN0cmVhbTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBoYXMgYmVlbiBjbG9zZWQuICovXHJcbiAgQE91dHB1dChcImNsb3NlZFwiKSBjbG9zZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIGlzIG9wZW4uICovXHJcbiAgb3BlbmVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgaWQgZm9yIHRoZSBkYXRlcGlja2VyIGNhbGVuZGFyLiAqL1xyXG4gIGlkID0gYG1hdC1kYXRldGltZXBpY2tlci0ke2RhdGV0aW1lcGlja2VyVWlkKyt9YDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBnZXQgX3NlbGVjdGVkKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWxpZFNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IF9zZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3ZhbGlkU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ZhbGlkU2VsZWN0ZWQ6IEQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBnZXQgX21pbkRhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWluO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBnZXQgX21heERhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9kYXRlRmlsdGVyKCk6IChkYXRlOiBEIHwgbnVsbCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Ll9kYXRlRmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IHdoZW4gdGhlIGNhbGVuZGFyIGlzIG9wZW5lZCBhcyBhIHBvcHVwLiAqL1xyXG4gIHByaXZhdGUgX3BvcHVwUmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIGRpYWxvZyB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBkaWFsb2cuICovXHJcbiAgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PiB8IG51bGw7XHJcblxyXG4gIC8qKiBBIHBvcnRhbCBjb250YWluaW5nIHRoZSBjYWxlbmRhciBmb3IgdGhpcyBkYXRlcGlja2VyLiAqL1xyXG4gIHByaXZhdGUgX2NhbGVuZGFyUG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+PjtcclxuXHJcbiAgLyoqIFRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBkYXRlcGlja2VyIHdhcyBvcGVuZWQuICovXHJcbiAgcHJpdmF0ZSBfZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9pbnB1dFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHRoaXMgZGF0ZXBpY2tlciBpcyBhc3NvY2lhdGVkIHdpdGguICovXHJcbiAgX2RhdGVwaWNrZXJJbnB1dDogTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgZGlzYWJsZWQuICovXHJcbiAgX2Rpc2FibGVkQ2hhbmdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZKSBwcml2YXRlIF9zY3JvbGxTdHJhdGVneSxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9pbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuY29tcGxldGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5fcG9wdXBSZWYpIHtcclxuICAgICAgdGhpcy5fcG9wdXBSZWYuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFNlbGVjdHMgdGhlIGdpdmVuIGRhdGUgKi9cclxuICBfc2VsZWN0KGRhdGU6IEQpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IGRhdGU7XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRldGltZShvbGRWYWx1ZSwgdGhpcy5fc2VsZWN0ZWQpKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvblxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlZC5lbWl0KGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYW4gaW5wdXQgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXHJcbiAgICogQHBhcmFtIGlucHV0IFRoZSBkYXRlcGlja2VyIGlucHV0IHRvIHJlZ2lzdGVyIHdpdGggdGhpcyBkYXRlcGlja2VyLlxyXG4gICAqL1xyXG4gIF9yZWdpc3RlcklucHV0KGlucHV0OiBNYXREYXRldGltZXBpY2tlcklucHV0PEQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiQSBNYXREYXRlcGlja2VyIGNhbiBvbmx5IGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBpbnB1dC5cIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQgPSBpbnB1dDtcclxuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uID1cclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0Ll92YWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEIHwgbnVsbCkgPT4gdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIuICovXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiQXR0ZW1wdGVkIHRvIG9wZW4gYW4gTWF0RGF0ZXBpY2tlciB3aXRoIG5vIGFzc29jaWF0ZWQgaW5wdXQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b3VjaFVpID8gdGhpcy5fb3BlbkFzRGlhbG9nKCkgOiB0aGlzLl9vcGVuQXNQb3B1cCgpO1xyXG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVuZWRTdHJlYW0uZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsb3NlIHRoZSBjYWxlbmRhci4gKi9cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3BvcHVwUmVmICYmIHRoaXMuX3BvcHVwUmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XHJcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICB0aGlzLl9kaWFsb2dSZWYgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2NhbGVuZGFyUG9ydGFsICYmIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmlzQXR0YWNoZWQpIHtcclxuICAgICAgdGhpcy5fY2FsZW5kYXJQb3J0YWwuZGV0YWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgLy8gVGhlIGBfb3BlbmVkYCBjb3VsZCd2ZSBiZWVuIHJlc2V0IGFscmVhZHkgaWZcclxuICAgICAgLy8gd2UgZ290IHR3byBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbi5cclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsb3NlZFN0cmVhbS5lbWl0KCk7XHJcbiAgICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuICYmXHJcbiAgICAgIHR5cGVvZiB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAvLyBCZWNhdXNlIElFIG1vdmVzIGZvY3VzIGFzeW5jaHJvbm91c2x5LCB3ZSBjYW4ndCBjb3VudCBvbiBpdCBiZWluZyByZXN0b3JlZCBiZWZvcmUgd2UndmVcclxuICAgICAgLy8gbWFya2VkIHRoZSBkYXRlcGlja2VyIGFzIGNsb3NlZC4gSWYgdGhlIGV2ZW50IGZpcmVzIG91dCBvZiBzZXF1ZW5jZSBhbmQgdGhlIGVsZW1lbnQgdGhhdFxyXG4gICAgICAvLyB3ZSdyZSByZWZvY3VzaW5nIG9wZW5zIHRoZSBkYXRlcGlja2VyIG9uIGZvY3VzLCB0aGUgdXNlciBjb3VsZCBiZSBzdHVjayB3aXRoIG5vdCBiZWluZ1xyXG4gICAgICAvLyBhYmxlIHRvIGNsb3NlIHRoZSBjYWxlbmRhciBhdCBhbGwuIFdlIHdvcmsgYXJvdW5kIGl0IGJ5IG1ha2luZyB0aGUgbG9naWMsIHRoYXQgbWFya3NcclxuICAgICAgLy8gdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLCBhc3luYyBhcyB3ZWxsLlxyXG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMoKTtcclxuICAgICAgc2V0VGltZW91dChjb21wbGV0ZUNsb3NlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXBsZXRlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhciBhcyBhIGRpYWxvZy4gKi9cclxuICBwcml2YXRlIF9vcGVuQXNEaWFsb2coKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kaWFsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbihNYXREYXRldGltZXBpY2tlckNvbnRlbnQsIHtcclxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiBcImx0clwiLFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBwYW5lbENsYXNzOiBcIm1hdC1kYXRldGltZXBpY2tlci1kaWFsb2dcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRldGltZXBpY2tlciA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBwb3B1cC4gKi9cclxuICBwcml2YXRlIF9vcGVuQXNQb3B1cCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fY2FsZW5kYXJQb3J0YWwpIHtcclxuICAgICAgdGhpcy5fY2FsZW5kYXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsPE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPj4oTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3BvcHVwUmVmKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZVBvcHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPj4gPVxyXG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLmF0dGFjaCh0aGlzLl9jYWxlbmRhclBvcnRhbCk7XHJcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRldGltZXBpY2tlciA9IHRoaXM7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9uY2UgdGhlIGNhbGVuZGFyIGhhcyByZW5kZXJlZC5cclxuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9wb3B1cFJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9wb3B1cFJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cC4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVQb3B1cCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX2NyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpLFxyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYmFja2Ryb3BDbGFzczogXCJtYXQtb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6IFwibHRyXCIsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9zY3JvbGxTdHJhdGVneSgpLFxyXG4gICAgICBwYW5lbENsYXNzOiBcIm1hdC1kYXRldGltZXBpY2tlci1wb3B1cFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9wb3B1cFJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSB0aGUgcG9wdXAgUG9zaXRpb25TdHJhdGVneS4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVQb3B1cFBvc2l0aW9uU3RyYXRlZ3koKTogUG9zaXRpb25TdHJhdGVneSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLl9kYXRlcGlja2VySW5wdXQuZ2V0UG9wdXBDb25uZWN0aW9uRWxlbWVudFJlZigpLFxyXG4gICAgICAgIHtvcmlnaW5YOiBcInN0YXJ0XCIsIG9yaWdpblk6IFwiYm90dG9tXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJzdGFydFwiLCBvdmVybGF5WTogXCJ0b3BcIn1cclxuICAgICAgKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAge29yaWdpblg6IFwic3RhcnRcIiwgb3JpZ2luWTogXCJ0b3BcIn0sXHJcbiAgICAgICAge292ZXJsYXlYOiBcInN0YXJ0XCIsIG92ZXJsYXlZOiBcImJvdHRvbVwifVxyXG4gICAgICApXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcclxuICAgICAgICB7b3JpZ2luWDogXCJlbmRcIiwgb3JpZ2luWTogXCJib3R0b21cIn0sXHJcbiAgICAgICAge292ZXJsYXlYOiBcImVuZFwiLCBvdmVybGF5WTogXCJ0b3BcIn1cclxuICAgICAgKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAge29yaWdpblg6IFwiZW5kXCIsIG9yaWdpblk6IFwidG9wXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJlbmRcIiwgb3ZlcmxheVk6IFwiYm90dG9tXCJ9XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==