import { __decorate, __metadata, __param } from "tslib";
/* tslint:disable */
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from "@angular/core";
import { createMissingDateImplError } from "./datetimepicker-errors";
import { MatDatetimepickerCalendarCell } from "./calendar-body";
import { slideCalendar } from "./datetimepicker-animations";
import { MAT_DATETIME_FORMATS } from "../adapter/datetime-formats";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
let MatDatetimepickerYearView = class MatDatetimepickerYearView {
    constructor(_adapter, _dateFormats) {
        this._adapter = _adapter;
        this._dateFormats = _dateFormats;
        this._userSelection = new EventEmitter();
        this.type = "date";
        /** Emits when a new month is selected. */
        this.selectedChange = new EventEmitter();
        if (!this._adapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        this._activeDate = this._adapter.today();
    }
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        this._activeDate = value || this._adapter.today();
        if (oldActiveDate && this._activeDate &&
            !this._adapter.sameYear(oldActiveDate, this._activeDate)) {
            this._init();
            // if (oldActiveDate < this._activeDate) {
            //  this.calendarState('right');
            // } else {
            //  this.calendarState('left');
            // }
        }
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
    }
    ngAfterContentInit() {
        this._init();
    }
    /** Handles when a new month is selected. */
    _monthSelected(month) {
        const userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this.selectedChange.emit(userSelected);
        this.selected = userSelected;
        this._selectedMonth = month;
    }
    /** Initializes this month view. */
    _init() {
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._adapter.today());
        this._yearLabel = this._adapter.getYearName(this.activeDate);
        let monthNames = this._adapter.getMonthNames("short");
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    _getMonthInCurrentYear(date) {
        return this._adapter.sameYear(date, this.activeDate) ?
            this._adapter.getMonth(date) : null;
    }
    /** Creates an MdCalendarCell for the given month. */
    _createCellForMonth(month, monthName) {
        let ariaLabel = this._adapter.format(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)), this._dateFormats.display.monthYearA11yLabel);
        return new MatDatetimepickerCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
    }
    /** Whether the given month is enabled. */
    _isMonthEnabled(month) {
        if (!this.dateFilter) {
            return true;
        }
        let firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        // If any date in the month is enabled count the month as enabled.
        for (let date = firstOfMonth; this._adapter.getMonth(date) == month; date = this._adapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    // private calendarState(direction: string): void {
    //   this._calendarState = direction;
    // }
    _calendarStateDone() {
        this._calendarState = "";
    }
};
MatDatetimepickerYearView.ctorParameters = () => [
    { type: DatetimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] }
];
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerYearView.prototype, "_userSelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepickerYearView.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerYearView.prototype, "activeDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerYearView.prototype, "selected", null);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MatDatetimepickerYearView.prototype, "dateFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerYearView.prototype, "selectedChange", void 0);
MatDatetimepickerYearView = __decorate([
    Component({
        selector: "mat-datetimepicker-year-view",
        template: "<table class=\"mat-datetimepicker-calendar-table\">\r\n  <thead class=\"mat-datetimepicker-calendar-table-header\"></thead>\r\n  <tbody [@slideCalendar]=\"_calendarState\"\r\n         (@slideCalendar.done)=\"_calendarStateDone()\"\r\n         mat-datetimepicker-calendar-body\r\n         role=\"grid\"\r\n         allowDisabledSelection=\"true\"\r\n         [label]=\"_yearLabel\"\r\n         [rows]=\"_months\"\r\n         [todayValue]=\"_todayMonth\"\r\n         [selectedValue]=\"_selectedMonth\"\r\n         [labelMinRequiredCells]=\"2\"\r\n         [activeCell]=\"_adapter.getMonth(activeDate)\"\r\n         (selectedValueChange)=\"_monthSelected($event)\"></tbody>\r\n</table>\r\n",
        animations: [slideCalendar],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(0, Optional()),
    __param(1, Optional()), __param(1, Inject(MAT_DATETIME_FORMATS)),
    __metadata("design:paramtypes", [DatetimeAdapter, Object])
], MatDatetimepickerYearView);
export { MatDatetimepickerYearView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL3llYXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsb0JBQW9CLEVBRXJCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUNMLGVBQWUsRUFDaEIsTUFBTSw2QkFBNkIsQ0FBQztBQUVyQzs7O0dBR0c7QUFRSCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQWdFcEMsWUFBK0IsUUFBNEIsRUFDRyxZQUFnQztRQUQvRCxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUNHLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQS9EcEYsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTNDLFNBQUksR0FBMkMsTUFBTSxDQUFDO1FBd0MvRCwwQ0FBMEM7UUFDaEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBcUIvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixNQUFNLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixNQUFNLDBCQUEwQixDQUFDLHNCQUFzQixD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QkFBOEI7UUFDeEMsMHJCQUE2QjtRQUM3QixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztJQWlFYSxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7cUNBRFosZUFBZTtHQWhFN0MseUJBQXlCLENBMkpyQztTQTNKWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwgfSBmcm9tIFwiLi9jYWxlbmRhci1ib2R5XCI7XHJcbmltcG9ydCB7IHNsaWRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQge1xyXG4gIERhdGV0aW1lQWRhcHRlclxyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGEgc2luZ2xlIHllYXIgaW4gdGhlIGRhdGVwaWNrZXIuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci15ZWFyLXZpZXdcIixcclxuICB0ZW1wbGF0ZVVybDogXCJ5ZWFyLXZpZXcuaHRtbFwiLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUNhbGVuZGFyXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlclllYXJWaWV3PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQElucHV0KCkgdHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIiA9IFwiZGF0ZVwiO1xyXG5cclxuICAvKiogVGhlIGRhdGUgdG8gZGlzcGxheSBpbiB0aGlzIHllYXIgdmlldyAoZXZlcnl0aGluZyBvdGhlciB0aGFuIHRoZSB5ZWFyIGlzIGlnbm9yZWQpLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICBsZXQgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWUgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gICAgaWYgKG9sZEFjdGl2ZURhdGUgJiYgdGhpcy5fYWN0aXZlRGF0ZSAmJlxyXG4gICAgICAhdGhpcy5fYWRhcHRlci5zYW1lWWVhcihvbGRBY3RpdmVEYXRlLCB0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgIC8vIGlmIChvbGRBY3RpdmVEYXRlIDwgdGhpcy5fYWN0aXZlRGF0ZSkge1xyXG4gICAgICAvLyAgdGhpcy5jYWxlbmRhclN0YXRlKCdyaWdodCcpO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgdGhpcy5jYWxlbmRhclN0YXRlKCdsZWZ0Jyk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FjdGl2ZURhdGU6IEQ7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gdGhpcy5fZ2V0TW9udGhJbkN1cnJlbnRZZWFyKHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQ7XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBEKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyBtb250aCBpcyBzZWxlY3RlZC4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBHcmlkIG9mIGNhbGVuZGFyIGNlbGxzIHJlcHJlc2VudGluZyB0aGUgbW9udGhzIG9mIHRoZSB5ZWFyLiAqL1xyXG4gIF9tb250aHM6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsW11bXTtcclxuXHJcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhpcyB5ZWFyIChlLmcuIFwiMjAxN1wiKS4gKi9cclxuICBfeWVhckxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdG9kYXkgZmFsbHMgb24uIE51bGwgaWYgdG9kYXkgaXMgaW4gYSBkaWZmZXJlbnQgeWVhci4gKi9cclxuICBfdG9kYXlNb250aDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdGhlIHNlbGVjdGVkIERhdGUgZmFsbHMgb24uXHJcbiAgICogTnVsbCBpZiB0aGUgc2VsZWN0ZWQgRGF0ZSBpcyBpbiBhIGRpZmZlcmVudCB5ZWFyLlxyXG4gICAqL1xyXG4gIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBfYWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RBVEVUSU1FX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBNYXREYXRldGltZUZvcm1hdHMpIHtcclxuICAgIGlmICghdGhpcy5fYWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiTUFUX0RBVEVUSU1FX0ZPUk1BVFNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHdoZW4gYSBuZXcgbW9udGggaXMgc2VsZWN0ZWQuICovXHJcbiAgX21vbnRoU2VsZWN0ZWQobW9udGg6IG51bWJlcikge1xyXG4gICAgY29uc3QgdXNlclNlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIG1vbnRoLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh1c2VyU2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHVzZXJTZWxlY3RlZDtcclxuICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSBtb250aDtcclxuICB9XHJcblxyXG4gIC8qKiBJbml0aWFsaXplcyB0aGlzIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB0aGlzLl9nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB0aGlzLl90b2RheU1vbnRoID0gdGhpcy5fZ2V0TW9udGhJbkN1cnJlbnRZZWFyKHRoaXMuX2FkYXB0ZXIudG9kYXkoKSk7XHJcbiAgICB0aGlzLl95ZWFyTGFiZWwgPSB0aGlzLl9hZGFwdGVyLmdldFllYXJOYW1lKHRoaXMuYWN0aXZlRGF0ZSk7XHJcblxyXG4gICAgbGV0IG1vbnRoTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoTmFtZXMoXCJzaG9ydFwiKTtcclxuICAgIC8vIEZpcnN0IHJvdyBvZiBtb250aHMgb25seSBjb250YWlucyA1IGVsZW1lbnRzIHNvIHdlIGNhbiBmaXQgdGhlIHllYXIgbGFiZWwgb24gdGhlIHNhbWUgcm93LlxyXG4gICAgdGhpcy5fbW9udGhzID0gW1swLCAxLCAyLCAzLCA0XSwgWzUsIDYsIDcsIDgsIDksIDEwLCAxMV1dLm1hcChyb3cgPT4gcm93Lm1hcChcclxuICAgICAgbW9udGggPT4gdGhpcy5fY3JlYXRlQ2VsbEZvck1vbnRoKG1vbnRoLCBtb250aE5hbWVzW21vbnRoXSkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIG1vbnRoIGluIHRoaXMgeWVhciB0aGF0IHRoZSBnaXZlbiBEYXRlIGZhbGxzIG9uLlxyXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZ2l2ZW4gRGF0ZSBpcyBpbiBhbm90aGVyIHllYXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZ2V0TW9udGhJbkN1cnJlbnRZZWFyKGRhdGU6IEQpIHtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLnNhbWVZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIGFuIE1kQ2FsZW5kYXJDZWxsIGZvciB0aGUgZ2l2ZW4gbW9udGguICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlQ2VsbEZvck1vbnRoKG1vbnRoOiBudW1iZXIsIG1vbnRoTmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgYXJpYUxhYmVsID0gdGhpcy5fYWRhcHRlci5mb3JtYXQoXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUodGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIG1vbnRoLCAxLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpLFxyXG4gICAgICB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckExMXlMYWJlbCk7XHJcbiAgICByZXR1cm4gbmV3IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsKFxyXG4gICAgICBtb250aCwgbW9udGhOYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCksIGFyaWFMYWJlbCwgdGhpcy5faXNNb250aEVuYWJsZWQobW9udGgpKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBtb250aCBpcyBlbmFibGVkLiAqL1xyXG4gIHByaXZhdGUgX2lzTW9udGhFbmFibGVkKG1vbnRoOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5kYXRlRmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaXJzdE9mTW9udGggPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSwgbW9udGgsIDEsXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuXHJcbiAgICAvLyBJZiBhbnkgZGF0ZSBpbiB0aGUgbW9udGggaXMgZW5hYmxlZCBjb3VudCB0aGUgbW9udGggYXMgZW5hYmxlZC5cclxuICAgIGZvciAobGV0IGRhdGUgPSBmaXJzdE9mTW9udGg7IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPT0gbW9udGg7XHJcbiAgICAgICAgIGRhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhkYXRlLCAxKSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRlRmlsdGVyKGRhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGNhbGVuZGFyU3RhdGUoZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBkaXJlY3Rpb247XHJcbiAgLy8gfVxyXG5cclxuICBfY2FsZW5kYXJTdGF0ZURvbmUoKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gXCJcIjtcclxuICB9XHJcbn1cclxuIl19