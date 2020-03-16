import { __decorate, __metadata } from "tslib";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material/datepicker";
import { merge, of as observableOf, Subscription } from "rxjs";
import { MatDatetimepicker } from "./datetimepicker";
let MatDatetimepickerToggle = class MatDatetimepickerToggle {
    constructor(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    ngOnChanges(changes) {
        if (changes.datepicker) {
            this._watchStateChanges();
        }
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    _open(event) {
        if (this.datetimepicker && !this.disabled) {
            this.datetimepicker.open();
            event.stopPropagation();
        }
    }
    _watchStateChanges() {
        const datepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : observableOf();
        const inputDisabled = this.datetimepicker && this.datetimepicker._datepickerInput ?
            this.datetimepicker._datepickerInput._disabledChange : observableOf();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, datepickerDisabled, inputDisabled)
            .subscribe(() => this._changeDetectorRef.markForCheck());
    }
};
MatDatetimepickerToggle.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: ChangeDetectorRef }
];
__decorate([
    Input("for"),
    __metadata("design:type", MatDatetimepicker)
], MatDatetimepickerToggle.prototype, "datetimepicker", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MatDatetimepickerToggle.prototype, "disabled", null);
MatDatetimepickerToggle = __decorate([
    Component({
        selector: "mat-datetimepicker-toggle",
        template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\"\r\n        [disabled]=\"disabled\" (click)=\"_open($event)\">\r\n  <mat-icon [ngSwitch]=\"datetimepicker.type\">\r\n    <svg *ngSwitchCase=\"'time'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\r\n            style=\"vertical-align: top\" focusable=\"false\">\r\n      <path d=\"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z\"></path>\r\n    </svg>\r\n    <svg *ngSwitchCase=\"'datetime'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\r\n            style=\"vertical-align: top\" focusable=\"false\">\r\n      <path d=\"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z\"></path>\r\n    </svg>\r\n    <svg *ngSwitchDefault viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\r\n        style=\"vertical-align: top\" focusable=\"false\">\r\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n      <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\r\n    </svg>\r\n  </mat-icon>\r\n</button>\r\n",
        host: {
            "class": "mat-datetimepicker-toggle"
        },
        exportAs: "matDatetimepickerToggle",
        encapsulation: ViewEncapsulation.None,
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [MatDatepickerIntl, ChangeDetectorRef])
], MatDatetimepickerToggle);
export { MatDatetimepickerToggle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXItdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLXRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxhQUFhLEVBQ2IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFhckQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFnQmxDLFlBQW1CLEtBQXdCLEVBQVUsa0JBQXFDO1FBQXZFLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWZsRixrQkFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFla0QsQ0FBQztJQVY5Riw2Q0FBNkM7SUFFN0MsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUtELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQVk7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEcsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO2FBQzVFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0YsQ0FBQTs7WUFoQzJCLGlCQUFpQjtZQUE4QixpQkFBaUI7O0FBWjVFO0lBQWIsS0FBSyxDQUFDLEtBQUssQ0FBQzs4QkFBaUIsaUJBQWlCOytEQUFJO0FBSW5EO0lBREMsS0FBSyxFQUFFOzs7dURBR1A7QUFWVSx1QkFBdUI7SUFYbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyw4cERBQXlDO1FBQ3pDLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSwyQkFBMkI7U0FDckM7UUFDRCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FpQjBCLGlCQUFpQixFQUE4QixpQkFBaUI7R0FoQi9FLHVCQUF1QixDQWdEbkM7U0FoRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2VyY2lvblwiO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnRsIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLXRvZ2dsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImRhdGV0aW1lcGlja2VyLXRvZ2dsZS5odG1sXCIsXHJcbiAgaG9zdDoge1xyXG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci10b2dnbGVcIlxyXG4gIH0sXHJcbiAgZXhwb3J0QXM6IFwibWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGVcIixcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlclRvZ2dsZTxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9zdGF0ZUNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBEYXRlcGlja2VyIGluc3RhbmNlIHRoYXQgdGhlIGJ1dHRvbiB3aWxsIHRvZ2dsZS4gKi9cclxuICBASW5wdXQoXCJmb3JcIikgZGF0ZXRpbWVwaWNrZXI6IE1hdERhdGV0aW1lcGlja2VyPEQ+O1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5kYXRldGltZXBpY2tlci5kaXNhYmxlZCA6ICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRlcGlja2VyKSB7XHJcbiAgICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIF9vcGVuKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGF0ZXRpbWVwaWNrZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5vcGVuKCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfd2F0Y2hTdGF0ZUNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBkYXRlcGlja2VyRGlzYWJsZWQgPSB0aGlzLmRhdGV0aW1lcGlja2VyID8gdGhpcy5kYXRldGltZXBpY2tlci5fZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcclxuICAgIGNvbnN0IGlucHV0RGlzYWJsZWQgPSB0aGlzLmRhdGV0aW1lcGlja2VyICYmIHRoaXMuZGF0ZXRpbWVwaWNrZXIuX2RhdGVwaWNrZXJJbnB1dCA/XHJcbiAgICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5fZGF0ZXBpY2tlcklucHV0Ll9kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzID0gbWVyZ2UodGhpcy5faW50bC5jaGFuZ2VzLCBkYXRlcGlja2VyRGlzYWJsZWQsIGlucHV0RGlzYWJsZWQpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==