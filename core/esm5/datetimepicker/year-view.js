/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/* tslint:disable */
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from "@angular/core";
import { createMissingDateImplError } from "./datetimepicker-errors";
import { MatDatetimepickerCalendarCell } from "./calendar-body";
import { slideCalendar } from "./datetimepicker-animations";
import { MAT_DATETIME_FORMATS } from "../adapter/datetime-formats";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
/**
 * An internal component used to display a single year in the datepicker.
 * \@docs-private
 * @template D
 */
var MatDatetimepickerYearView = /** @class */ (function () {
    function MatDatetimepickerYearView(_adapter, _dateFormats) {
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
    Object.defineProperty(MatDatetimepickerYearView.prototype, "activeDate", {
        /** The date to display in this year view (everything other than the year is ignored). */
        get: /**
         * The date to display in this year view (everything other than the year is ignored).
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerYearView.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = value;
            this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new month is selected. */
    /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._monthSelected = /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this.selectedChange.emit(userSelected);
        this.selected = userSelected;
        this._selectedMonth = month;
    };
    /** Initializes this month view. */
    /**
     * Initializes this month view.
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._init = /**
     * Initializes this month view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._adapter.today());
        this._yearLabel = this._adapter.getYearName(this.activeDate);
        /** @type {?} */
        var monthNames = this._adapter.getMonthNames("short");
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]].map(function (row) { return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); }); });
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._getMonthInCurrentYear = /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._adapter.sameYear(date, this.activeDate) ?
            this._adapter.getMonth(date) : null;
    };
    /** Creates an MdCalendarCell for the given month. */
    /**
     * Creates an MdCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._createCellForMonth = /**
     * Creates an MdCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    function (month, monthName) {
        /** @type {?} */
        var ariaLabel = this._adapter.format(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)), this._dateFormats.display.monthYearA11yLabel);
        return new MatDatetimepickerCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
    };
    /** Whether the given month is enabled. */
    /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._isMonthEnabled = /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        if (!this.dateFilter) {
            return true;
        }
        /** @type {?} */
        var firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        // If any date in the month is enabled count the month as enabled.
        for (var date = firstOfMonth; this._adapter.getMonth(date) == month; date = this._adapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    // private calendarState(direction: string): void {
    //   this._calendarState = direction;
    // }
    // private calendarState(direction: string): void {
    //   this._calendarState = direction;
    // }
    /**
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._calendarStateDone = 
    // private calendarState(direction: string): void {
    //   this._calendarState = direction;
    // }
    /**
     * @return {?}
     */
    function () {
        this._calendarState = "";
    };
    MatDatetimepickerYearView.decorators = [
        { type: Component, args: [{
                    selector: "mat-datetimepicker-year-view",
                    template: "<table class=\"mat-datetimepicker-calendar-table\">\n  <thead class=\"mat-datetimepicker-calendar-table-header\"></thead>\n  <tbody [@slideCalendar]=\"_calendarState\"\n         (@slideCalendar.done)=\"_calendarStateDone()\"\n         mat-datetimepicker-calendar-body\n         role=\"grid\"\n         allowDisabledSelection=\"true\"\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth\"\n         [selectedValue]=\"_selectedMonth\"\n         [labelMinRequiredCells]=\"2\"\n         [activeCell]=\"_adapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"></tbody>\n</table>\n",
                    animations: [slideCalendar],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    MatDatetimepickerYearView.ctorParameters = function () { return [
        { type: DatetimeAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] }
    ]; };
    MatDatetimepickerYearView.propDecorators = {
        _userSelection: [{ type: Output }],
        type: [{ type: Input }],
        activeDate: [{ type: Input }],
        selected: [{ type: Input }],
        dateFilter: [{ type: Input }],
        selectedChange: [{ type: Output }]
    };
    return MatDatetimepickerYearView;
}());
export { MatDatetimepickerYearView };
if (false) {
    /** @type {?} */
    MatDatetimepickerYearView.prototype._userSelection;
    /** @type {?} */
    MatDatetimepickerYearView.prototype.type;
    /** @type {?} */
    MatDatetimepickerYearView.prototype._activeDate;
    /** @type {?} */
    MatDatetimepickerYearView.prototype._selected;
    /**
     * A function used to filter which dates are selectable.
     * @type {?}
     */
    MatDatetimepickerYearView.prototype.dateFilter;
    /**
     * Emits when a new month is selected.
     * @type {?}
     */
    MatDatetimepickerYearView.prototype.selectedChange;
    /**
     * Grid of calendar cells representing the months of the year.
     * @type {?}
     */
    MatDatetimepickerYearView.prototype._months;
    /**
     * The label for this year (e.g. "2017").
     * @type {?}
     */
    MatDatetimepickerYearView.prototype._yearLabel;
    /**
     * The month in this year that today falls on. Null if today is in a different year.
     * @type {?}
     */
    MatDatetimepickerYearView.prototype._todayMonth;
    /**
     * The month in this year that the selected Date falls on.
     * Null if the selected Date is in a different year.
     * @type {?}
     */
    MatDatetimepickerYearView.prototype._selectedMonth;
    /** @type {?} */
    MatDatetimepickerYearView.prototype._calendarState;
    /** @type {?} */
    MatDatetimepickerYearView.prototype._adapter;
    /** @type {?} */
    MatDatetimepickerYearView.prototype._dateFormats;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL3llYXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsb0JBQW9CLEVBRXJCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUNMLGVBQWUsRUFDaEIsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7O0FBTXJDO0lBc0ZFLG1DQUErQixRQUE0QixFQUNHLFlBQWdDO1FBRC9ELGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQ0csaUJBQVksR0FBWixZQUFZLENBQW9CO1FBL0RwRixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFM0MsU0FBSSxHQUEyQyxNQUFNLENBQUM7UUF3Qy9ELDBDQUEwQztRQUNoQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFxQi9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLE1BQU0sMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUMxRDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxD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USxZQUFJLE1BQU0sU0FBQyxvQkFBb0I7OztpQ0EvRG5ELE1BQU07dUJBRU4sS0FBSzs2QkFHTCxLQUFLOzJCQXNCTCxLQUFLOzZCQWFMLEtBQUs7aUNBR0wsTUFBTTs7SUE4R1QsZ0NBQUM7Q0FBQSxBQWpMRCxJQWlMQztTQTNKWSx5QkFBeUI7OztJQUVwQyxtREFBb0Q7O0lBRXBELHlDQUErRDs7SUFzQi9ELGdEQUF1Qjs7SUFhdkIsOENBQXFCOzs7OztJQUdyQiwrQ0FBMEM7Ozs7O0lBRzFDLG1EQUFpRDs7Ozs7SUFHakQsNENBQTJDOzs7OztJQUczQywrQ0FBbUI7Ozs7O0lBR25CLGdEQUFvQjs7Ozs7O0lBTXBCLG1EQUF1Qjs7SUFFdkIsbURBQXVCOztJQUVYLDZDQUErQzs7SUFDL0MsaURBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsIH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xyXG5pbXBvcnQgeyBzbGlkZUNhbGVuZGFyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTLFxyXG4gIE1hdERhdGV0aW1lRm9ybWF0c1xyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuaW1wb3J0IHtcclxuICBEYXRldGltZUFkYXB0ZXJcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBhIHNpbmdsZSB5ZWFyIGluIHRoZSBkYXRlcGlja2VyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXIteWVhci12aWV3XCIsXHJcbiAgdGVtcGxhdGU6IGA8dGFibGUgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGVcIj5cclxuICA8dGhlYWQgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGUtaGVhZGVyXCI+PC90aGVhZD5cclxuICA8dGJvZHkgW0BzbGlkZUNhbGVuZGFyXT1cIl9jYWxlbmRhclN0YXRlXCJcclxuICAgICAgICAgKEBzbGlkZUNhbGVuZGFyLmRvbmUpPVwiX2NhbGVuZGFyU3RhdGVEb25lKClcIlxyXG4gICAgICAgICBtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keVxyXG4gICAgICAgICByb2xlPVwiZ3JpZFwiXHJcbiAgICAgICAgIGFsbG93RGlzYWJsZWRTZWxlY3Rpb249XCJ0cnVlXCJcclxuICAgICAgICAgW2xhYmVsXT1cIl95ZWFyTGFiZWxcIlxyXG4gICAgICAgICBbcm93c109XCJfbW9udGhzXCJcclxuICAgICAgICAgW3RvZGF5VmFsdWVdPVwiX3RvZGF5TW9udGhcIlxyXG4gICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJfc2VsZWN0ZWRNb250aFwiXHJcbiAgICAgICAgIFtsYWJlbE1pblJlcXVpcmVkQ2VsbHNdPVwiMlwiXHJcbiAgICAgICAgIFthY3RpdmVDZWxsXT1cIl9hZGFwdGVyLmdldE1vbnRoKGFjdGl2ZURhdGUpXCJcclxuICAgICAgICAgKHNlbGVjdGVkVmFsdWVDaGFuZ2UpPVwiX21vbnRoU2VsZWN0ZWQoJGV2ZW50KVwiPjwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbmAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXc8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBASW5wdXQoKSB0eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XHJcblxyXG4gIC8qKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgeWVhciB2aWV3IChldmVyeXRoaW5nIG90aGVyIHRoYW4gdGhlIHllYXIgaXMgaWdub3JlZCkuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IEQpIHtcclxuICAgIGxldCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZSB8fCB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgICBpZiAob2xkQWN0aXZlRGF0ZSAmJiB0aGlzLl9hY3RpdmVEYXRlICYmXHJcbiAgICAgICF0aGlzLl9hZGFwdGVyLnNhbWVZZWFyKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgLy8gaWYgKG9sZEFjdGl2ZURhdGUgPCB0aGlzLl9hY3RpdmVEYXRlKSB7XHJcbiAgICAgIC8vICB0aGlzLmNhbGVuZGFyU3RhdGUoJ3JpZ2h0Jyk7XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICB0aGlzLmNhbGVuZGFyU3RhdGUoJ2xlZnQnKTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYWN0aXZlRGF0ZTogRDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzZWxlY3RlZCgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB0aGlzLl9nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZDogRDtcclxuXHJcbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXHJcbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IG1vbnRoIGlzIHNlbGVjdGVkLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIEdyaWQgb2YgY2FsZW5kYXIgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBtb250aHMgb2YgdGhlIHllYXIuICovXHJcbiAgX21vbnRoczogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGxbXVtdO1xyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGlzIHllYXIgKGUuZy4gXCIyMDE3XCIpLiAqL1xyXG4gIF95ZWFyTGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBtb250aCBpbiB0aGlzIHllYXIgdGhhdCB0b2RheSBmYWxscyBvbi4gTnVsbCBpZiB0b2RheSBpcyBpbiBhIGRpZmZlcmVudCB5ZWFyLiAqL1xyXG4gIF90b2RheU1vbnRoOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtb250aCBpbiB0aGlzIHllYXIgdGhhdCB0aGUgc2VsZWN0ZWQgRGF0ZSBmYWxscyBvbi5cclxuICAgKiBOdWxsIGlmIHRoZSBzZWxlY3RlZCBEYXRlIGlzIGluIGEgZGlmZmVyZW50IHllYXIuXHJcbiAgICovXHJcbiAgX3NlbGVjdGVkTW9udGg6IG51bWJlcjtcclxuXHJcbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cykge1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgd2hlbiBhIG5ldyBtb250aCBpcyBzZWxlY3RlZC4gKi9cclxuICBfbW9udGhTZWxlY3RlZChtb250aDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB1c2VyU2VsZWN0ZWQgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSwgbW9udGgsXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHVzZXJTZWxlY3RlZCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdXNlclNlbGVjdGVkO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IG1vbnRoO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXRpYWxpemVzIHRoaXMgbW9udGggdmlldy4gKi9cclxuICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHRoaXMuX2dldE1vbnRoSW5DdXJyZW50WWVhcih0aGlzLnNlbGVjdGVkKTtcclxuICAgIHRoaXMuX3RvZGF5TW9udGggPSB0aGlzLl9nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5fYWRhcHRlci50b2RheSgpKTtcclxuICAgIHRoaXMuX3llYXJMYWJlbCA9IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5hY3RpdmVEYXRlKTtcclxuXHJcbiAgICBsZXQgbW9udGhOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGhOYW1lcyhcInNob3J0XCIpO1xyXG4gICAgLy8gRmlyc3Qgcm93IG9mIG1vbnRocyBvbmx5IGNvbnRhaW5zIDUgZWxlbWVudHMgc28gd2UgY2FuIGZpdCB0aGUgeWVhciBsYWJlbCBvbiB0aGUgc2FtZSByb3cuXHJcbiAgICB0aGlzLl9tb250aHMgPSBbWzAsIDEsIDIsIDMsIDRdLCBbNSwgNiwgNywgOCwgOSwgMTAsIDExXV0ubWFwKHJvdyA9PiByb3cubWFwKFxyXG4gICAgICBtb250aCA9PiB0aGlzLl9jcmVhdGVDZWxsRm9yTW9udGgobW9udGgsIG1vbnRoTmFtZXNbbW9udGhdKSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdGhlIGdpdmVuIERhdGUgZmFsbHMgb24uXHJcbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBnaXZlbiBEYXRlIGlzIGluIGFub3RoZXIgeWVhci5cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXRNb250aEluQ3VycmVudFllYXIoZGF0ZTogRCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuc2FtZVllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSA/XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZXMgYW4gTWRDYWxlbmRhckNlbGwgZm9yIHRoZSBnaXZlbiBtb250aC4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVDZWxsRm9yTW9udGgobW9udGg6IG51bWJlciwgbW9udGhOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBhcmlhTGFiZWwgPSB0aGlzLl9hZGFwdGVyLmZvcm1hdChcclxuICAgICAgdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZSh0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSwgbW9udGgsIDEsXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSksXHJcbiAgICAgIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyQTExeUxhYmVsKTtcclxuICAgIHJldHVybiBuZXcgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwoXHJcbiAgICAgIG1vbnRoLCBtb250aE5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKSwgYXJpYUxhYmVsLCB0aGlzLl9pc01vbnRoRW5hYmxlZChtb250aCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIG1vbnRoIGlzIGVuYWJsZWQuICovXHJcbiAgcHJpdmF0ZSBfaXNNb250aEVuYWJsZWQobW9udGg6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmRhdGVGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpcnN0T2ZNb250aCA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLCBtb250aCwgMSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG5cclxuICAgIC8vIElmIGFueSBkYXRlIGluIHRoZSBtb250aCBpcyBlbmFibGVkIGNvdW50IHRoZSBtb250aCBhcyBlbmFibGVkLlxyXG4gICAgZm9yIChsZXQgZGF0ZSA9IGZpcnN0T2ZNb250aDsgdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA9PSBtb250aDtcclxuICAgICAgICAgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIDEpKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgY2FsZW5kYXJTdGF0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IGRpcmVjdGlvbjtcclxuICAvLyB9XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlRG9uZSgpIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBcIlwiO1xyXG4gIH1cclxufVxyXG4iXX0=