import { __decorate, __metadata } from "tslib";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material/datepicker";
import { merge, of as observableOf, Subscription } from "rxjs";
import { MatDatetimepicker } from "./datetimepicker";
var MatDatetimepickerToggle = /** @class */ (function () {
    function MatDatetimepickerToggle(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
    }
    Object.defineProperty(MatDatetimepickerToggle.prototype, "disabled", {
        /** Whether the toggle button is disabled. */
        get: function () {
            return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerToggle.prototype.ngOnChanges = function (changes) {
        if (changes.datepicker) {
            this._watchStateChanges();
        }
    };
    MatDatetimepickerToggle.prototype.ngOnDestroy = function () {
        this._stateChanges.unsubscribe();
    };
    MatDatetimepickerToggle.prototype.ngAfterContentInit = function () {
        this._watchStateChanges();
    };
    MatDatetimepickerToggle.prototype._open = function (event) {
        if (this.datetimepicker && !this.disabled) {
            this.datetimepicker.open();
            event.stopPropagation();
        }
    };
    MatDatetimepickerToggle.prototype._watchStateChanges = function () {
        var _this = this;
        var datepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : observableOf();
        var inputDisabled = this.datetimepicker && this.datetimepicker._datepickerInput ?
            this.datetimepicker._datepickerInput._disabledChange : observableOf();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, datepickerDisabled, inputDisabled)
            .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    };
    MatDatetimepickerToggle.ctorParameters = function () { return [
        { type: MatDatepickerIntl },
        { type: ChangeDetectorRef }
    ]; };
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
    return MatDatetimepickerToggle;
}());
export { MatDatetimepickerToggle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXItdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLXRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxhQUFhLEVBQ2IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFhckQ7SUFnQkUsaUNBQW1CLEtBQXdCLEVBQVUsa0JBQXFDO1FBQXZFLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWZsRixrQkFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFla0QsQ0FBQztJQVI5RixzQkFBSSw2Q0FBUTtRQUZaLDZDQUE2QzthQUU3QztZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4RixDQUFDO2FBQ0QsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BSEE7SUFRRCw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxvREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQUssR0FBTCxVQUFNLEtBQVk7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTyxvREFBa0IsR0FBMUI7UUFBQSxpQkFRQztRQVBDLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RHLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUxRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsQ0FBQzthQUM1RSxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQS9CeUIsaUJBQWlCO2dCQUE4QixpQkFBaUI7O0lBWjVFO1FBQWIsS0FBSyxDQUFDLEtBQUssQ0FBQztrQ0FBaUIsaUJBQWlCO21FQUFJO0lBSW5EO1FBREMsS0FBSyxFQUFFOzs7MkRBR1A7SUFWVSx1QkFBdUI7UUFYbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyw4cERBQXlDO1lBQ3pDLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsMkJBQTJCO2FBQ3JDO1lBQ0QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBaUIwQixpQkFBaUIsRUFBOEIsaUJBQWlCO09BaEIvRSx1QkFBdUIsQ0FnRG5DO0lBQUQsOEJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQWhEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvZXJjaW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlckludGwgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiZGF0ZXRpbWVwaWNrZXItdG9nZ2xlLmh0bWxcIixcclxuICBob3N0OiB7XHJcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLXRvZ2dsZVwiXHJcbiAgfSxcclxuICBleHBvcnRBczogXCJtYXREYXRldGltZXBpY2tlclRvZ2dsZVwiLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3N0YXRlQ2hhbmdlcyA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgLyoqIERhdGVwaWNrZXIgaW5zdGFuY2UgdGhhdCB0aGUgYnV0dG9uIHdpbGwgdG9nZ2xlLiAqL1xyXG4gIEBJbnB1dChcImZvclwiKSBkYXRldGltZXBpY2tlcjogTWF0RGF0ZXRpbWVwaWNrZXI8RD47XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSB0b2dnbGUgYnV0dG9uIGlzIGRpc2FibGVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgPyB0aGlzLmRhdGV0aW1lcGlja2VyLmRpc2FibGVkIDogISF0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2ludGw6IE1hdERhdGVwaWNrZXJJbnRsLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGVwaWNrZXIpIHtcclxuICAgICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl93YXRjaFN0YXRlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgX29wZW4oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kYXRldGltZXBpY2tlciAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmRhdGV0aW1lcGlja2VyLm9wZW4oKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF93YXRjaFN0YXRlQ2hhbmdlcygpIHtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXJEaXNhYmxlZCA9IHRoaXMuZGF0ZXRpbWVwaWNrZXIgPyB0aGlzLmRhdGV0aW1lcGlja2VyLl9kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xyXG4gICAgY29uc3QgaW5wdXREaXNhYmxlZCA9IHRoaXMuZGF0ZXRpbWVwaWNrZXIgJiYgdGhpcy5kYXRldGltZXBpY2tlci5fZGF0ZXBpY2tlcklucHV0ID9cclxuICAgICAgICB0aGlzLmRhdGV0aW1lcGlja2VyLl9kYXRlcGlja2VySW5wdXQuX2Rpc2FibGVkQ2hhbmdlIDogb2JzZXJ2YWJsZU9mKCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMgPSBtZXJnZSh0aGlzLl9pbnRsLmNoYW5nZXMsIGRhdGVwaWNrZXJEaXNhYmxlZCwgaW5wdXREaXNhYmxlZClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcbn1cclxuIl19