import { __decorate, __metadata, __param } from "tslib";
import { DOWN_ARROW, END, ENTER, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from "@angular/cdk/keycodes";
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, OnDestroy, Optional, Output, ViewEncapsulation } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material/datepicker";
import { first } from "rxjs/operators";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MAT_DATETIME_FORMATS } from "../adapter/datetime-formats";
import { slideCalendar } from "./datetimepicker-animations";
import { createMissingDateImplError } from "./datetimepicker-errors";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */
let MatDatetimepickerCalendar = class MatDatetimepickerCalendar {
    constructor(_elementRef, _intl, _ngZone, _adapter, _dateFormats, changeDetectorRef) {
        this._elementRef = _elementRef;
        this._intl = _intl;
        this._ngZone = _ngZone;
        this._adapter = _adapter;
        this._dateFormats = _dateFormats;
        this.changeDetectorRef = changeDetectorRef;
        this._userSelection = new EventEmitter();
        this.type = "date";
        /** Whether the calendar should be started in month or year view. */
        this.startView = "month";
        this.timeInterval = 1;
        /** Emits when the currently selected date changes. */
        this.selectedChange = new EventEmitter();
        /** Date filter for the month and year views. */
        this._dateFilterForViews = (date) => {
            return !!date &&
                (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.DATE)) &&
                (!this.minDate || this._adapter.compareDate(date, this.minDate) >= 0) &&
                (!this.maxDate || this._adapter.compareDate(date, this.maxDate) <= 0);
        };
        /** Whether the calendar is in month view. */
        this._currentView = "month";
        this._clockView = "hour";
        if (!this._adapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        this._intlChanges = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt() {
        return this._startAt;
    }
    set startAt(value) {
        this._startAt = this._adapter.getValidDateOrNull(value);
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this._adapter.getValidDateOrNull(value);
    }
    /** The minimum selectable date. */
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        this._minDate = this._adapter.getValidDateOrNull(value);
    }
    /** The maximum selectable date. */
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        this._maxDate = this._adapter.getValidDateOrNull(value);
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get _activeDate() {
        return this._clampedActiveDate;
    }
    set _activeDate(value) {
        const oldActiveDate = this._clampedActiveDate;
        this._clampedActiveDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
        if (oldActiveDate && this._clampedActiveDate && this._currentView === "month" &&
            !this._adapter.sameMonthAndYear(oldActiveDate, this._clampedActiveDate)) {
            if (this._adapter.isInNextMonth(oldActiveDate, this._clampedActiveDate)) {
                this.calendarState("right");
            }
            else {
                this.calendarState("left");
            }
            this.changeDetectorRef.detectChanges();
        }
    }
    _userSelected() {
        this._userSelection.emit();
    }
    /** The label for the current calendar view. */
    get _yearLabel() {
        return this._adapter.getYearName(this._activeDate);
    }
    get _monthYearLabel() {
        return this._currentView === "month" ? this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)] :
            this._adapter.getYearName(this._activeDate);
    }
    get _dateLabel() {
        if (this.type === "month") {
            return this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)];
        }
        return this._adapter.format(this._activeDate, this._dateFormats.display.popupHeaderDateLabel);
    }
    get _hoursLabel() {
        return this._2digit(this._adapter.getHour(this._activeDate));
    }
    get _minutesLabel() {
        return this._2digit(this._adapter.getMinute(this._activeDate));
    }
    ngAfterContentInit() {
        this._activeDate = this.startAt || this._adapter.today();
        this._focusActiveCell();
        if (this.type === "month") {
            this._currentView = "year";
        }
        else if (this.type === "time") {
            this._currentView = "clock";
        }
        else {
            this._currentView = this.startView || "month";
        }
    }
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
    }
    /** Handles date selection in the month view. */
    _dateSelected(date) {
        this._activeDate = date;
        if (this.type !== "date") {
            this._currentView = "clock";
        }
    }
    /** Handles month selection in the year view. */
    _monthSelected(month) {
        this._activeDate = month;
        if (this.type !== 'month') {
            this._currentView = "month";
            this._clockView = "hour";
        }
    }
    _timeSelected(date) {
        this._activeDate = date;
        this._clockView = "minute";
    }
    _handleConfirmButton(event) {
        this.selectedChange.emit(this._activeDate);
        this._userSelected();
    }
    _handleCancelButton(event) {
        // Close dialog (datetimepicker.close())
        this._userSelection.emit();
    }
    _onActiveDateChange(date) {
        this._activeDate = date;
    }
    _yearClicked() {
        this._currentView = "year";
    }
    _dateClicked() {
        if (this.type !== 'month') {
            this._currentView = "month";
        }
    }
    _hoursClicked() {
        this._currentView = "clock";
        this._clockView = "hour";
    }
    _minutesClicked() {
        this._currentView = "clock";
        this._clockView = "minute";
    }
    /** Handles user clicks on the previous button. */
    _previousClicked() {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, -1) :
            this._adapter.addCalendarYears(this._activeDate, -1);
    }
    /** Handles user clicks on the next button. */
    _nextClicked() {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, 1) :
            this._adapter.addCalendarYears(this._activeDate, 1);
    }
    /** Whether the previous period button is enabled. */
    _previousEnabled() {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
    }
    /** Whether the next period button is enabled. */
    _nextEnabled() {
        return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
    }
    /** Handles keydown events on the calendar body. */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        if (this._currentView === "month") {
            this._handleCalendarBodyKeydownInMonthView(event);
        }
        else if (this._currentView === "year") {
            this._handleCalendarBodyKeydownInYearView(event);
        }
        else {
            this._handleCalendarBodyKeydownInClockView(event);
        }
    }
    _focusActiveCell() {
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.asObservable().pipe(first()).subscribe(() => {
                this._elementRef.nativeElement.focus();
            });
        });
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    _isSameView(date1, date2) {
        return this._currentView === "month" ?
            this._adapter.getYear(date1) == this._adapter.getYear(date2) &&
                this._adapter.getMonth(date1) == this._adapter.getMonth(date2) :
            this._adapter.getYear(date1) == this._adapter.getYear(date2);
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydownInMonthView(event) {
        switch (event.keyCode) {
            case LEFT_ARROW:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, -1);
                break;
            case RIGHT_ARROW:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1);
                break;
            case UP_ARROW:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, -7);
                break;
            case DOWN_ARROW:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, 7);
                break;
            case HOME:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1 - this._adapter.getDate(this._activeDate));
                break;
            case END:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, (this._adapter.getNumDaysInMonth(this._activeDate) -
                    this._adapter.getDate(this._activeDate)));
                break;
            case PAGE_UP:
                this._activeDate = event.altKey ?
                    this._adapter.addCalendarYears(this._activeDate, -1) :
                    this._adapter.addCalendarMonths(this._activeDate, -1);
                break;
            case PAGE_DOWN:
                this._activeDate = event.altKey ?
                    this._adapter.addCalendarYears(this._activeDate, 1) :
                    this._adapter.addCalendarMonths(this._activeDate, 1);
                break;
            case ENTER:
                if (this._dateFilterForViews(this._activeDate)) {
                    this._dateSelected(this._activeDate);
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeydownInYearView(event) {
        switch (event.keyCode) {
            case LEFT_ARROW:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -1);
                break;
            case RIGHT_ARROW:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 1);
                break;
            case UP_ARROW:
                this._activeDate = this._prevMonthInSameCol(this._activeDate);
                break;
            case DOWN_ARROW:
                this._activeDate = this._nextMonthInSameCol(this._activeDate);
                break;
            case HOME:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -this._adapter.getMonth(this._activeDate));
                break;
            case END:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 11 - this._adapter.getMonth(this._activeDate));
                break;
            case PAGE_UP:
                this._activeDate =
                    this._adapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case PAGE_DOWN:
                this._activeDate =
                    this._adapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case ENTER:
                this._monthSelected(this._activeDate);
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydownInClockView(event) {
        switch (event.keyCode) {
            case UP_ARROW:
                this._activeDate = this._clockView == "hour" ?
                    this._adapter.addCalendarHours(this._activeDate, 1) :
                    this._adapter.addCalendarMinutes(this._activeDate, 1);
                break;
            case DOWN_ARROW:
                this._activeDate = this._clockView == "hour" ?
                    this._adapter.addCalendarHours(this._activeDate, -1) :
                    this._adapter.addCalendarMinutes(this._activeDate, -1);
                break;
            case ENTER:
                this._timeSelected(this._activeDate);
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     */
    _prevMonthInSameCol(date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        const increment = this._adapter.getMonth(date) <= 4 ? -5 :
            (this._adapter.getMonth(date) >= 7 ? -7 : -12);
        return this._adapter.addCalendarMonths(date, increment);
    }
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     */
    _nextMonthInSameCol(date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        const increment = this._adapter.getMonth(date) <= 4 ? 7 :
            (this._adapter.getMonth(date) >= 7 ? 5 : 12);
        return this._adapter.addCalendarMonths(date, increment);
    }
    calendarState(direction) {
        this._calendarState = direction;
    }
    _calendarStateDone() {
        this._calendarState = "";
    }
    _2digit(n) {
        return ("00" + n).slice(-2);
    }
};
MatDatetimepickerCalendar.ctorParameters = () => [
    { type: ElementRef },
    { type: MatDatepickerIntl },
    { type: NgZone },
    { type: DatetimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerCalendar.prototype, "_userSelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepickerCalendar.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerCalendar.prototype, "startAt", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepickerCalendar.prototype, "startView", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerCalendar.prototype, "selected", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerCalendar.prototype, "minDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerCalendar.prototype, "maxDate", null);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatDatetimepickerCalendar.prototype, "timeInterval", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MatDatetimepickerCalendar.prototype, "dateFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerCalendar.prototype, "selectedChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepickerCalendar.prototype, "confirmButtonLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDatetimepickerCalendar.prototype, "cancelButtonLabel", void 0);
MatDatetimepickerCalendar = __decorate([
    Component({
        selector: "mat-datetimepicker-calendar",
        template: "<div class=\"mat-datetimepicker-calendar-header\">\r\n  <div *ngIf=\"type !== 'time'\"\r\n       class=\"mat-datetimepicker-calendar-header-year\"\r\n       [class.active]=\"_currentView == 'year'\"\r\n       (click)=\"_yearClicked()\">{{ _yearLabel }}\r\n  </div>\r\n  <div class=\"mat-datetimepicker-calendar-header-date-time\">\r\n    <span *ngIf=\"type !== 'time'\"\r\n          class=\"mat-datetimepicker-calendar-header-date\"\r\n          [class.active]=\"_currentView == 'month'\"\r\n          [class.not-clickable]=\"type === 'month'\"\r\n          (click)=\"_dateClicked()\" style=\"font-size: 0.7em;\">{{ _dateLabel }}</span>\r\n    <span *ngIf=\"type.endsWith('time')\"\r\n          class=\"mat-datetimepicker-calendar-header-time\"\r\n          [class.active]=\"_currentView == 'clock'\">\r\n      <span class=\"mat-datetimepicker-calendar-header-hours\"\r\n            [class.active]=\"_clockView == 'hour'\"\r\n            (click)=\"_hoursClicked()\">{{ _hoursLabel }}</span>:<span class=\"mat-datetimepicker-calendar-header-minutes\"\r\n                                                                     [class.active]=\"_clockView == 'minute'\"\r\n                                                                     (click)=\"_minutesClicked()\">{{ _minutesLabel }}</span>\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"mat-datetimepicker-calendar-content\" [ngSwitch]=\"_currentView\">\r\n  <div class=\"mat-month-content\" *ngIf=\"_currentView === 'month' || _currentView === 'year'\">\r\n    <div class=\"mat-datetimepicker-calendar-controls\">\r\n      <div class=\"mat-datetimepicker-calendar-previous-button\"\r\n           [class.disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\"\r\n           aria-label=\"Previous month\">\r\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>\r\n        </svg>\r\n      </div>\r\n      <div class=\"mat-datetimepicker-calendar-period-button\" [@slideCalendar]=\"_calendarState\"\r\n           (@slideCalendar.done)=\"_calendarStateDone()\">\r\n        <strong>{{ _monthYearLabel }}</strong>\r\n      </div>\r\n      <div class=\"mat-datetimepicker-calendar-next-button\"\r\n           [class.disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\"\r\n           aria-label=\"Next month\">\r\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <mat-datetimepicker-month-view *ngSwitchCase=\"'month'\"\r\n                                 [activeDate]=\"_activeDate\"\r\n                                 [type]=\"type\"\r\n                                 [selected]=\"_activeDate\"\r\n                                 [dateFilter]=\"_dateFilterForViews\"\r\n                                 (selectedChange)=\"_dateSelected($event)\"\r\n                                 (_userSelection)=\"_userSelected()\">\r\n  </mat-datetimepicker-month-view>\r\n  <mat-datetimepicker-year-view *ngSwitchCase=\"'year'\"\r\n                                [activeDate]=\"_activeDate\"\r\n                                [type]=\"type\"\r\n                                [selected]=\"_activeDate\"\r\n                                [dateFilter]=\"_dateFilterForViews\"\r\n                                (selectedChange)=\"_monthSelected($event)\"\r\n                                (_userSelection)=\"_userSelected()\">\r\n  </mat-datetimepicker-year-view>\r\n  <mat-datetimepicker-clock *ngSwitchDefault\r\n                            [startView]=\"_clockView\"\r\n                            [interval]=\"timeInterval\"\r\n                            [minDate]=\"minDate\"\r\n                            [maxDate]=\"maxDate\"\r\n                            [dateFilter]=\"dateFilter\"\r\n                            [selected]=\"_activeDate\"\r\n                            (activeDateChange)=\"_onActiveDateChange($event)\"\r\n                            (selectedChange)=\"_timeSelected($event)\"\r\n                            (_userSelection)=\"_userSelected()\">\r\n  </mat-datetimepicker-clock>\r\n  <div class=\"mat-datetimepicker-calendar-footer\">\r\n    <button mat-button color=\"primary\" (click)=\"_handleCancelButton($event)\">{{ cancelButtonLabel }}</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"_handleConfirmButton($event)\">{{ confirmButtonLabel }}</button>\r\n  </div>\r\n</div>\r\n",
        host: {
            "[class.mat-datetimepicker-calendar]": "true",
            "tabindex": "0",
            "(keydown)": "_handleCalendarBodyKeydown($event)"
        },
        animations: [slideCalendar],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".mat-datetimepicker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;outline:0}.mat-datetimepicker-calendar[mode=landscape]{display:flex}.mat-datetimepicker-calendar-header{padding:16px;font-size:14px;color:#fff;box-sizing:border-box}[mode=landscape] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar-header-date-time,.mat-datetimepicker-calendar-header-year{width:100%;font-weight:500;white-space:nowrap}.mat-datetimepicker-calendar-header-date-time{font-size:30px;line-height:30px}[mode=landscape] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar-header-date:not(.active),.mat-datetimepicker-calendar-header-hours:not(.active),.mat-datetimepicker-calendar-header-minutes:not(.active),.mat-datetimepicker-calendar-header-year:not(.active){cursor:pointer;opacity:.6}.mat-datetimepicker-calendar-header-date.not-clickable,.mat-datetimepicker-calendar-header-hours.not-clickable,.mat-datetimepicker-calendar-header-minutes.not-clickable,.mat-datetimepicker-calendar-header-year.not-clickable{cursor:initial}.mat-datetimepicker-calendar-header-time{padding-left:8px;padding-top:5px}.mat-datetimepicker-calendar-header-time:not(.active){opacity:.6}.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-hours,.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-minutes{cursor:pointer;opacity:1}[mode=landscape] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar-content{width:100%;padding:0 8px 8px;outline:0;box-sizing:border-box;overflow:hidden}[mode=landscape] .mat-datetimepicker-calendar-content{padding-top:8px}.mat-datetimepicker-calendar-content>.mat-datetimepicker-calendar-footer{padding:12px;text-align:right}.mat-datetimepicker-calendar-controls{display:flex;justify-content:space-between}.mat-datetimepicker-calendar-period-button{display:inline-block;height:48px;padding:12px;outline:0;border:0;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button,.mat-datetimepicker-calendar-previous-button{display:inline-block;width:48px;height:48px;padding:12px;outline:0;border:0;cursor:pointer;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button.disabled,.mat-datetimepicker-calendar-previous-button.disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-calendar-next-button svg,.mat-datetimepicker-calendar-previous-button svg{fill:currentColor;vertical-align:top}.mat-datetimepicker-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-datetimepicker-calendar-table-header{color:rgba(0,0,0,.38)}.mat-datetimepicker-calendar-table-header th{text-align:center;font-size:11px;padding:0 0 8px}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{display:flex}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-content{padding-top:8px}}"]
    }),
    __param(3, Optional()),
    __param(4, Optional()), __param(4, Inject(MAT_DATETIME_FORMATS)),
    __metadata("design:paramtypes", [ElementRef,
        MatDatepickerIntl,
        NgZone,
        DatetimeAdapter, Object, ChangeDetectorRef])
], MatDatetimepickerCalendar);
export { MatDatetimepickerCalendar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsR0FBRyxFQUNILEtBQUssRUFDTCxJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFDVCxPQUFPLEVBQ1AsV0FBVyxFQUNYLFFBQVEsRUFDVCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsb0JBQW9CLEVBRXJCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFFOzs7R0FHRztBQWNILElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBdUlwQyxZQUFvQixXQUF1QixFQUN2QixLQUF3QixFQUN4QixPQUFlLEVBQ0gsUUFBNEIsRUFDRSxZQUFnQyxFQUMxRSxpQkFBb0M7UUFMcEMsZ0JBQVcsR0FBWCxXQUFX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QURDLEtBQUssRUFBRTs7O3lEQUdQO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozt3REFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7d0RBR1A7QUFRUTtJQUFSLEtBQUssRUFBRTs7K0RBQTBCO0FBR3pCO0lBQVIsS0FBSyxFQUFFOzs2REFBcUU7QUFHbkU7SUFBVCxNQUFNLEVBQUU7O2lFQUF3QztBQTZIeEM7SUFBUixLQUFLLEVBQUU7O3FFQUE0QjtBQU0zQjtJQUFSLEtBQUssRUFBRTs7b0VBQTJCO0FBcE14Qix5QkFBeUI7SUFickMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDZCQUE2QjtRQUN2Qyw2OElBQTRCO1FBRTVCLElBQUksRUFBRTtZQUNKLHFDQUFxQyxFQUFFLE1BQU07WUFDN0MsVUFBVSxFQUFFLEdBQUc7WUFDZixXQUFXLEVBQUUsb0NBQW9DO1NBQ2xEO1FBQ0QsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO0lBMklhLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtxQ0FKcEIsVUFBVTtRQUNoQixpQkFBaUI7UUFDZixNQUFNO1FBQ08sZUFBZSxVQUVsQixpQkFBaUI7R0E1STdDLHlCQUF5QixDQXFickM7U0FyYlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBET1dOX0FSUk9XLFxyXG4gIEVORCxcclxuICBFTlRFUixcclxuICBIT01FLFxyXG4gIExFRlRfQVJST1csXHJcbiAgUEFHRV9ET1dOLFxyXG4gIFBBR0VfVVAsXHJcbiAgUklHSFRfQVJST1csXHJcbiAgVVBfQVJST1dcclxufSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlckludGwgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBzbGlkZUNhbGVuZGFyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcblxyXG4vKipcclxuICogQSBjYWxlbmRhciB0aGF0IGlzIHVzZWQgYXMgcGFydCBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiY2FsZW5kYXIuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiY2FsZW5kYXIuc2Nzc1wiXSxcclxuICBob3N0OiB7XHJcbiAgICBcIltjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJdXCI6IFwidHJ1ZVwiLFxyXG4gICAgXCJ0YWJpbmRleFwiOiBcIjBcIixcclxuICAgIFwiKGtleWRvd24pXCI6IFwiX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd24oJGV2ZW50KVwiXHJcbiAgfSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVDYWxlbmRhcl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcjxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX2ludGxDaGFuZ2VzOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQElucHV0KCkgdHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIiA9IFwiZGF0ZVwiO1xyXG5cclxuICAvKiogQSBkYXRlIHJlcHJlc2VudGluZyB0aGUgcGVyaW9kIChtb250aCBvciB5ZWFyKSB0byBzdGFydCB0aGUgY2FsZW5kYXIgaW4uICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc3RhcnRBdCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRBdDtcclxuICB9XHJcblxyXG4gIHNldCBzdGFydEF0KHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc3RhcnRBdCA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0YXJ0QXQ6IEQgfCBudWxsO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgc2hvdWxkIGJlIHN0YXJ0ZWQgaW4gbW9udGggb3IgeWVhciB2aWV3LiAqL1xyXG4gIEBJbnB1dCgpIHN0YXJ0VmlldzogXCJjbG9ja1wiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgPSBcIm1vbnRoXCI7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWluRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21pbkRhdGU6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1heERhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heERhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgQElucHV0KCkgdGltZUludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICAvKiogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cclxuICBASW5wdXQoKSBkYXRlRmlsdGVyOiAoZGF0ZTogRCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUgY2hhbmdlcy4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBEYXRlIGZpbHRlciBmb3IgdGhlIG1vbnRoIGFuZCB5ZWFyIHZpZXdzLiAqL1xyXG4gIF9kYXRlRmlsdGVyRm9yVmlld3MgPSAoZGF0ZTogRCkgPT4ge1xyXG4gICAgcmV0dXJuICEhZGF0ZSAmJlxyXG4gICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlLkRBVEUpKSAmJlxyXG4gICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRlKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgKCF0aGlzLm1heERhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjdXJyZW50IGFjdGl2ZSBkYXRlLiBUaGlzIGRldGVybWluZXMgd2hpY2ggdGltZSBwZXJpb2QgaXMgc2hvd24gYW5kIHdoaWNoIGRhdGUgaXNcclxuICAgKiBoaWdobGlnaHRlZCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICovXHJcbiAgZ2V0IF9hY3RpdmVEYXRlKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IF9hY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICBjb25zdCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGU7XHJcbiAgICB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY2xhbXBEYXRlKHZhbHVlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XHJcbiAgICBpZiAob2xkQWN0aXZlRGF0ZSAmJiB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSAmJiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiICYmXHJcbiAgICAgICF0aGlzLl9hZGFwdGVyLnNhbWVNb250aEFuZFllYXIob2xkQWN0aXZlRGF0ZSwgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUpKSB7XHJcbiAgICAgIGlmICh0aGlzLl9hZGFwdGVyLmlzSW5OZXh0TW9udGgob2xkQWN0aXZlRGF0ZSwgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwicmlnaHRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwibGVmdFwiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsYW1wZWRBY3RpdmVEYXRlOiBEO1xyXG5cclxuICBfdXNlclNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cclxuICBfY3VycmVudFZpZXc6IFwiY2xvY2tcIiB8IFwibW9udGhcIiB8IFwieWVhclwiID0gXCJtb250aFwiO1xyXG4gIF9jbG9ja1ZpZXc6IFwiaG91clwiIHwgXCJtaW51dGVcIiA9IFwiaG91clwiO1xyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY3VycmVudCBjYWxlbmRhciB2aWV3LiAqL1xyXG4gIGdldCBfeWVhckxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIGdldCBfbW9udGhZZWFyTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID8gdGhpcy5fYWRhcHRlci5nZXRNb250aE5hbWVzKFwibG9uZ1wiKVt0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpXSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgX2RhdGVMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmdldE1vbnRoTmFtZXMoXCJsb25nXCIpW3RoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuZm9ybWF0KHRoaXMuX2FjdGl2ZURhdGUsIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkucG9wdXBIZWFkZXJEYXRlTGFiZWwpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCBfaG91cnNMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuXzJkaWdpdCh0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9taW51dGVzTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl8yZGlnaXQodGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cyxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9pbnRsQ2hhbmdlcyA9IF9pbnRsLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLnN0YXJ0QXQgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gICAgdGhpcy5fZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcInllYXJcIjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBcInRpbWVcIikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdGhpcy5zdGFydFZpZXcgfHwgXCJtb250aFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9pbnRsQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgZGF0ZSBzZWxlY3Rpb24gaW4gdGhlIG1vbnRoIHZpZXcuICovXHJcbiAgX2RhdGVTZWxlY3RlZChkYXRlOiBEKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gZGF0ZTtcclxuICAgIGlmICh0aGlzLnR5cGUgIT09IFwiZGF0ZVwiKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJjbG9ja1wiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgbW9udGggc2VsZWN0aW9uIGluIHRoZSB5ZWFyIHZpZXcuICovXHJcbiAgX21vbnRoU2VsZWN0ZWQobW9udGg6IEQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBtb250aDtcclxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcIm1vbnRoXCI7XHJcbiAgICAgIHRoaXMuX2Nsb2NrVmlldyA9IFwiaG91clwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3RpbWVTZWxlY3RlZChkYXRlOiBEKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuX2Nsb2NrVmlldyA9IFwibWludXRlXCI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjb25maXJtQnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBfaGFuZGxlQ29uZmlybUJ1dHRvbihldmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgdGhpcy5fdXNlclNlbGVjdGVkKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjYW5jZWxCdXR0b25MYWJlbDogc3RyaW5nO1xyXG4gIF9oYW5kbGVDYW5jZWxCdXR0b24oZXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIENsb3NlIGRpYWxvZyAoZGF0ZXRpbWVwaWNrZXIuY2xvc2UoKSlcclxuICAgIHRoaXMuX3VzZXJTZWxlY3Rpb24uZW1pdCgpO1xyXG5cclxuICB9XHJcblxyXG4gIF9vbkFjdGl2ZURhdGVDaGFuZ2UoZGF0ZTogRCkge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICBfeWVhckNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwieWVhclwiO1xyXG4gIH1cclxuXHJcbiAgX2RhdGVDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gJ21vbnRoJykge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwibW9udGhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9ob3Vyc0NsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcclxuICAgIHRoaXMuX2Nsb2NrVmlldyA9IFwiaG91clwiO1xyXG4gIH1cclxuXHJcbiAgX21pbnV0ZXNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XHJcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcIm1pbnV0ZVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIHByZXZpb3VzIGJ1dHRvbi4gKi9cclxuICBfcHJldmlvdXNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyB1c2VyIGNsaWNrcyBvbiB0aGUgbmV4dCBidXR0b24uICovXHJcbiAgX25leHRDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIDEpIDpcclxuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHByZXZpb3VzIHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBfcHJldmlvdXNFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLm1pbkRhdGUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIXRoaXMubWluRGF0ZSB8fCAhdGhpcy5faXNTYW1lVmlldyh0aGlzLl9hY3RpdmVEYXRlLCB0aGlzLm1pbkRhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIG5leHQgcGVyaW9kIGJ1dHRvbiBpcyBlbmFibGVkLiAqL1xyXG4gIF9uZXh0RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5tYXhEYXRlIHx8ICF0aGlzLl9pc1NhbWVWaWV3KHRoaXMuX2FjdGl2ZURhdGUsIHRoaXMubWF4RGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keS4gKi9cclxuICBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gVE9ETyhtbWFsZXJiYSk6IFdlIGN1cnJlbnRseSBhbGxvdyBrZXlib2FyZCBuYXZpZ2F0aW9uIHRvIGRpc2FibGVkIGRhdGVzLCBidXQganVzdCBwcmV2ZW50XHJcbiAgICAvLyBkaXNhYmxlZCBvbmVzIGZyb20gYmVpbmcgc2VsZWN0ZWQuIFRoaXMgbWF5IG5vdCBiZSBpZGVhbCwgd2Ugc2hvdWxkIGxvb2sgaW50byB3aGV0aGVyXHJcbiAgICAvLyBuYXZpZ2F0aW9uIHNob3VsZCBza2lwIG92ZXIgZGlzYWJsZWQgZGF0ZXMsIGFuZCBpZiBzbywgaG93IHRvIGltcGxlbWVudCB0aGF0IGVmZmljaWVudGx5LlxyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluTW9udGhWaWV3KGV2ZW50KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09IFwieWVhclwiKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JblllYXJWaWV3KGV2ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JbkNsb2NrVmlldyhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZm9jdXNBY3RpdmVDZWxsKCkge1xyXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSB0d28gZGF0ZXMgcmVwcmVzZW50IHRoZSBzYW1lIHZpZXcgaW4gdGhlIGN1cnJlbnQgdmlldyBtb2RlIChtb250aCBvciB5ZWFyKS4gKi9cclxuICBwcml2YXRlIF9pc1NhbWVWaWV3KGRhdGUxOiBELCBkYXRlMjogRCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTEpID09IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcihkYXRlMikgJiZcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlMSkgPT0gdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlMikgOlxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTEpID09IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcihkYXRlMik7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluTW9udGhWaWV3KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCAtNyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgNyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgSE9NRTpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSxcclxuICAgICAgICAgIDEgLSB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVORDpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSxcclxuICAgICAgICAgICh0aGlzLl9hZGFwdGVyLmdldE51bURheXNJbk1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpIC1cclxuICAgICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuX2FjdGl2ZURhdGUpKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUEFHRV9VUDpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gZXZlbnQuYWx0S2V5ID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAtMSkgOlxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUEFHRV9ET1dOOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBldmVudC5hbHRLZXkgP1xyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIDEpIDpcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVGaWx0ZXJGb3JWaWV3cyh0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICAgICAgdGhpcy5fZGF0ZVNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBEb24ndCBwcmV2ZW50IGRlZmF1bHQgb3IgZm9jdXMgYWN0aXZlIGNlbGwgb24ga2V5cyB0aGF0IHdlIGRvbid0IGV4cGxpY2l0bHkgaGFuZGxlLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzIG9uIHRoZSBjYWxlbmRhciBib2R5IHdoZW4gY2FsZW5kYXIgaXMgaW4geWVhciB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JblllYXJWaWV3KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fcHJldk1vbnRoSW5TYW1lQ29sKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX25leHRNb250aEluU2FtZUNvbCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBIT01FOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAtdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5EOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAxMSAtIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgZXZlbnQuYWx0S2V5ID8gLTEwIDogLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID1cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCBldmVudC5hbHRLZXkgPyAxMCA6IDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIHRoaXMuX21vbnRoU2VsZWN0ZWQodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gRG9uJ3QgcHJldmVudCBkZWZhdWx0IG9yIGZvY3VzIGFjdGl2ZSBjZWxsIG9uIGtleXMgdGhhdCB3ZSBkb24ndCBleHBsaWNpdGx5IGhhbmRsZS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluQ2xvY2tWaWV3KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fY2xvY2tWaWV3ID09IFwiaG91clwiID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJIb3Vycyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTWludXRlcyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jbG9ja1ZpZXcgPT0gXCJob3VyXCIgP1xyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckhvdXJzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTWludXRlcyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgdGhpcy5fdGltZVNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBEb24ndCBwcmV2ZW50IGRlZmF1bHQgb3IgZm9jdXMgYWN0aXZlIGNlbGwgb24ga2V5cyB0aGF0IHdlIGRvbid0IGV4cGxpY2l0bHkgaGFuZGxlLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB0aGUgZGF0ZSBmb3IgdGhlIG1vbnRoIHRoYXQgY29tZXMgYmVmb3JlIHRoZSBnaXZlbiBtb250aCBpbiB0aGUgc2FtZSBjb2x1bW4gaW4gdGhlXHJcbiAgICogY2FsZW5kYXIgdGFibGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfcHJldk1vbnRoSW5TYW1lQ29sKGRhdGU6IEQpOiBEIHtcclxuICAgIC8vIERldGVybWluZSBob3cgbWFueSBtb250aHMgdG8ganVtcCBmb3J3YXJkIGdpdmVuIHRoYXQgdGhlcmUgYXJlIDIgZW1wdHkgc2xvdHMgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgLy8gb2YgZWFjaCB5ZWFyLlxyXG4gICAgY29uc3QgaW5jcmVtZW50ID0gdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA8PSA0ID8gLTUgOlxyXG4gICAgICAodGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA+PSA3ID8gLTcgOiAtMTIpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgaW5jcmVtZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB0aGUgZGF0ZSBmb3IgdGhlIG1vbnRoIHRoYXQgY29tZXMgYWZ0ZXIgdGhlIGdpdmVuIG1vbnRoIGluIHRoZSBzYW1lIGNvbHVtbiBpbiB0aGVcclxuICAgKiBjYWxlbmRhciB0YWJsZS5cclxuICAgKi9cclxuICBwcml2YXRlIF9uZXh0TW9udGhJblNhbWVDb2woZGF0ZTogRCk6IEQge1xyXG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IG1vbnRocyB0byBqdW1wIGZvcndhcmQgZ2l2ZW4gdGhhdCB0aGVyZSBhcmUgMiBlbXB0eSBzbG90cyBhdCB0aGUgYmVnaW5uaW5nXHJcbiAgICAvLyBvZiBlYWNoIHllYXIuXHJcbiAgICBjb25zdCBpbmNyZW1lbnQgPSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpIDw9IDQgPyA3IDpcclxuICAgICAgKHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPj0gNyA/IDUgOiAxMik7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyhkYXRlLCBpbmNyZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxlbmRhclN0YXRlKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGVEb25lKCkge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF8yZGlnaXQobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMDBcIiArIG4pLnNsaWNlKC0yKTtcclxuICB9XHJcbn1cclxuIl19