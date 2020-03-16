import { __decorate, __metadata, __param } from "tslib";
/* tslint:disable */
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from "@angular/core";
import { MAT_DATETIME_FORMATS } from "../adapter/datetime-formats";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimepickerCalendarCell } from "./calendar-body";
import { slideCalendar } from "./datetimepicker-animations";
import { createMissingDateImplError } from "./datetimepicker-errors";
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
let MatDatetimepickerMonthView = class MatDatetimepickerMonthView {
    constructor(_adapter, _dateFormats) {
        this._adapter = _adapter;
        this._dateFormats = _dateFormats;
        this.type = "date";
        this._userSelection = new EventEmitter();
        /** Emits when a new date is selected. */
        this.selectedChange = new EventEmitter();
        if (!this._adapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        const firstDayOfWeek = this._adapter.getFirstDayOfWeek();
        const narrowWeekdays = this._adapter.getDayOfWeekNames("narrow");
        const longWeekdays = this._adapter.getDayOfWeekNames("long");
        // Rotate the labels for days of the week based on the configured first day of the week.
        let weekdays = longWeekdays.map((long, i) => {
            return { long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._adapter.today();
    }
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        this._activeDate = value || this._adapter.today();
        if (oldActiveDate && this._activeDate &&
            !this._adapter.sameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
            if (this._adapter.isInNextMonth(oldActiveDate, this._activeDate)) {
                this.calendarState("right");
            }
            else {
                this.calendarState("left");
            }
        }
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
    }
    ngAfterContentInit() {
        this._init();
    }
    /** Handles when a new date is selected. */
    _dateSelected(date) {
        const userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), date, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this.selected = userSelected;
        this.selectedChange.emit(userSelected);
    }
    /** Initializes this month view. */
    _init() {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._adapter.today());
        let firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._adapter.getDayOfWeek(firstOfMonth) -
                this._adapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._createWeekCells();
    }
    /** Creates MdCalendarCells for the dates in this month. */
    _createWeekCells() {
        let daysInMonth = this._adapter.getNumDaysInMonth(this.activeDate);
        let dateNames = this._adapter.getDateNames();
        this._weeks = [[]];
        for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            let date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), i + 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
            let enabled = !this.dateFilter ||
                this.dateFilter(date);
            let ariaLabel = this._adapter.format(date, this._dateFormats.display.dateA11yLabel);
            this._weeks[this._weeks.length - 1]
                .push(new MatDatetimepickerCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
        }
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    _getDateInCurrentMonth(date) {
        return this._adapter.sameMonthAndYear(date, this.activeDate) ?
            this._adapter.getDate(date) : null;
    }
    calendarState(direction) {
        this._calendarState = direction;
    }
    _calendarStateDone() {
        this._calendarState = "";
    }
};
MatDatetimepickerMonthView.ctorParameters = () => [
    { type: DatetimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepickerMonthView.prototype, "type", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerMonthView.prototype, "_userSelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerMonthView.prototype, "activeDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerMonthView.prototype, "selected", null);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MatDatetimepickerMonthView.prototype, "dateFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerMonthView.prototype, "selectedChange", void 0);
MatDatetimepickerMonthView = __decorate([
    Component({
        selector: "mat-datetimepicker-month-view",
        template: "<table class=\"mat-datetimepicker-calendar-table\">\r\n  <thead class=\"mat-datetimepicker-calendar-table-header\">\r\n    <tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr>\r\n  </thead>\r\n  <tbody [@slideCalendar]=\"_calendarState\"\r\n         (@slideCalendar.done)=\"_calendarStateDone()\"\r\n         mat-datetimepicker-calendar-body\r\n         role=\"grid\"\r\n         [rows]=\"_weeks\"\r\n         [todayValue]=\"_todayDate\"\r\n         [selectedValue]=\"_selectedDate\"\r\n         [activeCell]=\"_adapter.getDate(activeDate) - 1\"\r\n         (selectedValueChange)=\"_dateSelected($event)\"></tbody>\r\n</table>\r\n",
        animations: [slideCalendar],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(0, Optional()),
    __param(1, Optional()), __param(1, Inject(MAT_DATETIME_FORMATS)),
    __metadata("design:paramtypes", [DatetimeAdapter, Object])
], MatDatetimepickerMonthView);
export { MatDatetimepickerMonthView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9tb250aC12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLG9CQUFvQixFQUVyQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFDTCxlQUFlLEVBQ2hCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJFLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUV4Qjs7O0dBR0c7QUFRSCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQXFFckMsWUFBK0IsUUFBNEIsRUFDRyxZQUFnQztRQUQvRCxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUNHLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQXBFckYsU0FBSSxHQUEyQyxNQUFNLENBQUM7UUFFckQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBMENwRCx5Q0FBeUM7UUFDL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBd0IvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixNQUFNLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFB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dCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBNQVRfREFURVRJTUVfRk9STUFUUyxcclxuICBNYXREYXRldGltZUZvcm1hdHNcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZXRpbWVBZGFwdGVyXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCB9IGZyb20gXCIuL2NhbGVuZGFyLWJvZHlcIjtcclxuaW1wb3J0IHsgc2xpZGVDYWxlbmRhciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcclxuXHJcbmNvbnN0IERBWVNfUEVSX1dFRUsgPSA3O1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgYSBzaW5nbGUgbW9udGggaW4gdGhlIGRhdGVwaWNrZXIuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci1tb250aC12aWV3XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwibW9udGgtdmlldy5odG1sXCIsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcclxuXHJcbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgbW9udGggdmlldyAoZXZlcnl0aGluZyBvdGhlciB0aGFuIHRoZSBtb250aCBhbmQgeWVhciBpcyBpZ25vcmVkKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBhY3RpdmVEYXRlKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRCkge1xyXG4gICAgbGV0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlIHx8IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICAgIGlmIChvbGRBY3RpdmVEYXRlICYmIHRoaXMuX2FjdGl2ZURhdGUgJiZcclxuICAgICAgIXRoaXMuX2FkYXB0ZXIuc2FtZU1vbnRoQW5kWWVhcihvbGRBY3RpdmVEYXRlLCB0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgIGlmICh0aGlzLl9hZGFwdGVyLmlzSW5OZXh0TW9udGgob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyU3RhdGUoXCJyaWdodFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyU3RhdGUoXCJsZWZ0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hY3RpdmVEYXRlOiBEO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gdGhpcy5fZ2V0RGF0ZUluQ3VycmVudE1vbnRoKHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQ7XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBEKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyBkYXRlIGlzIHNlbGVjdGVkLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIEdyaWQgb2YgY2FsZW5kYXIgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBkYXRlcyBvZiB0aGUgbW9udGguICovXHJcbiAgX3dlZWtzOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbFtdW107XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIGluIHRoZSBmaXJzdCByb3cgYmVmb3JlIHRoZSAxc3Qgb2YgdGhlIG1vbnRoLiAqL1xyXG4gIF9maXJzdFdlZWtPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgb2YgdGhlIG1vbnRoIHRoYXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBEYXRlIGZhbGxzIG9uLlxyXG4gICAqIE51bGwgaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBEYXRlIGlzIGluIGFub3RoZXIgbW9udGguXHJcbiAgICovXHJcbiAgX3NlbGVjdGVkRGF0ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIGRhdGUgb2YgdGhlIG1vbnRoIHRoYXQgdG9kYXkgZmFsbHMgb24uIE51bGwgaWYgdG9kYXkgaXMgaW4gYW5vdGhlciBtb250aC4gKi9cclxuICBfdG9kYXlEYXRlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbmFtZXMgb2YgdGhlIHdlZWtkYXlzLiAqL1xyXG4gIF93ZWVrZGF5czogeyBsb25nOiBzdHJpbmcsIG5hcnJvdzogc3RyaW5nIH1bXTtcclxuXHJcbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cykge1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHRoaXMuX2FkYXB0ZXIuZ2V0Rmlyc3REYXlPZldlZWsoKTtcclxuICAgIGNvbnN0IG5hcnJvd1dlZWtkYXlzID0gdGhpcy5fYWRhcHRlci5nZXREYXlPZldlZWtOYW1lcyhcIm5hcnJvd1wiKTtcclxuICAgIGNvbnN0IGxvbmdXZWVrZGF5cyA9IHRoaXMuX2FkYXB0ZXIuZ2V0RGF5T2ZXZWVrTmFtZXMoXCJsb25nXCIpO1xyXG5cclxuICAgIC8vIFJvdGF0ZSB0aGUgbGFiZWxzIGZvciBkYXlzIG9mIHRoZSB3ZWVrIGJhc2VkIG9uIHRoZSBjb25maWd1cmVkIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGxldCB3ZWVrZGF5cyA9IGxvbmdXZWVrZGF5cy5tYXAoKGxvbmcsIGkpID0+IHtcclxuICAgICAgcmV0dXJuIHtsb25nLCBuYXJyb3c6IG5hcnJvd1dlZWtkYXlzW2ldfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fd2Vla2RheXMgPSB3ZWVrZGF5cy5zbGljZShmaXJzdERheU9mV2VlaykuY29uY2F0KHdlZWtkYXlzLnNsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSk7XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHdoZW4gYSBuZXcgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cclxuICBfZGF0ZVNlbGVjdGVkKGRhdGU6IG51bWJlcikge1xyXG4gICAgY29uc3QgdXNlclNlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgZGF0ZSwgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB1c2VyU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodXNlclNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIC8qKiBJbml0aWFsaXplcyB0aGlzIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHRoaXMuX2dldERhdGVJbkN1cnJlbnRNb250aCh0aGlzLnNlbGVjdGVkKTtcclxuICAgIHRoaXMuX3RvZGF5RGF0ZSA9IHRoaXMuX2dldERhdGVJbkN1cnJlbnRNb250aCh0aGlzLl9hZGFwdGVyLnRvZGF5KCkpO1xyXG5cclxuICAgIGxldCBmaXJzdE9mTW9udGggPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIDEsXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuICAgIHRoaXMuX2ZpcnN0V2Vla09mZnNldCA9XHJcbiAgICAgIChEQVlTX1BFUl9XRUVLICsgdGhpcy5fYWRhcHRlci5nZXREYXlPZldlZWsoZmlyc3RPZk1vbnRoKSAtXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRGaXJzdERheU9mV2VlaygpKSAlIERBWVNfUEVSX1dFRUs7XHJcblxyXG4gICAgdGhpcy5fY3JlYXRlV2Vla0NlbGxzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlcyBNZENhbGVuZGFyQ2VsbHMgZm9yIHRoZSBkYXRlcyBpbiB0aGlzIG1vbnRoLiAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVdlZWtDZWxscygpIHtcclxuICAgIGxldCBkYXlzSW5Nb250aCA9IHRoaXMuX2FkYXB0ZXIuZ2V0TnVtRGF5c0luTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGxldCBkYXRlTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldERhdGVOYW1lcygpO1xyXG4gICAgdGhpcy5fd2Vla3MgPSBbW11dO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGNlbGwgPSB0aGlzLl9maXJzdFdlZWtPZmZzZXQ7IGkgPCBkYXlzSW5Nb250aDsgaSsrICwgY2VsbCsrKSB7XHJcbiAgICAgIGlmIChjZWxsID09IERBWVNfUEVSX1dFRUspIHtcclxuICAgICAgICB0aGlzLl93ZWVrcy5wdXNoKFtdKTtcclxuICAgICAgICBjZWxsID0gMDtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLCBpICsgMSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuICAgICAgbGV0IGVuYWJsZWQgPSAhdGhpcy5kYXRlRmlsdGVyIHx8XHJcbiAgICAgICAgdGhpcy5kYXRlRmlsdGVyKGRhdGUpO1xyXG4gICAgICBsZXQgYXJpYUxhYmVsID0gdGhpcy5fYWRhcHRlci5mb3JtYXQoZGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlQTExeUxhYmVsKTtcclxuICAgICAgdGhpcy5fd2Vla3NbdGhpcy5fd2Vla3MubGVuZ3RoIC0gMV1cclxuICAgICAgICAucHVzaChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwoaSArIDEsIGRhdGVOYW1lc1tpXSwgYXJpYUxhYmVsLCBlbmFibGVkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBkYXRlIGluIHRoaXMgbW9udGggdGhhdCB0aGUgZ2l2ZW4gRGF0ZSBmYWxscyBvbi5cclxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIERhdGUgaXMgaW4gYW5vdGhlciBtb250aC5cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXREYXRlSW5DdXJyZW50TW9udGgoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUoZGF0ZSkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxlbmRhclN0YXRlKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGVEb25lKCkge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=