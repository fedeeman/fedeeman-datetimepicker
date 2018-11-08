/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DOWN_ARROW, END, ENTER, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from "@angular/cdk/keycodes";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewEncapsulation } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material";
import { first } from "rxjs/operators";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MAT_DATETIME_FORMATS } from "../adapter/datetime-formats";
import { slideCalendar } from "./datetimepicker-animations";
import { createMissingDateImplError } from "./datetimepicker-errors";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
/**
 * A calendar that is used as part of the datepicker.
 * \@docs-private
 * @template D
 */
export class MatDatetimepickerCalendar {
    /**
     * @param {?} _elementRef
     * @param {?} _intl
     * @param {?} _ngZone
     * @param {?} _adapter
     * @param {?} _dateFormats
     * @param {?} changeDetectorRef
     */
    constructor(_elementRef, _intl, _ngZone, _adapter, _dateFormats, changeDetectorRef) {
        this._elementRef = _elementRef;
        this._intl = _intl;
        this._ngZone = _ngZone;
        this._adapter = _adapter;
        this._dateFormats = _dateFormats;
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
    /**
     * A date representing the period (month or year) to start the calendar in.
     * @return {?}
     */
    get startAt() {
        return this._startAt;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startAt(value) {
        this._startAt = this._adapter.getValidDateOrNull(value);
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this._selected = this._adapter.getValidDateOrNull(value);
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() {
        return this._minDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._adapter.getValidDateOrNull(value);
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() {
        return this._maxDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._adapter.getValidDateOrNull(value);
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     * @return {?}
     */
    get _activeDate() {
        return this._clampedActiveDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _activeDate(value) {
        /** @type {?} */
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
        }
    }
    /**
     * @return {?}
     */
    _userSelected() {
        this._userSelection.emit();
    }
    /**
     * The label for the current calendar view.
     * @return {?}
     */
    get _yearLabel() {
        return this._adapter.getYearName(this._activeDate);
    }
    /**
     * @return {?}
     */
    get _monthYearLabel() {
        return this._currentView === "month" ? this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)] :
            this._adapter.getYearName(this._activeDate);
    }
    /**
     * @return {?}
     */
    get _dateLabel() {
        if (this.type === "month") {
            return this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)];
        }
        return this._adapter.format(this._activeDate, this._dateFormats.display.popupHeaderDateLabel);
    }
    /**
     * @return {?}
     */
    get _hoursLabel() {
        return this._2digit(this._adapter.getHour(this._activeDate));
    }
    /**
     * @return {?}
     */
    get _minutesLabel() {
        return this._2digit(this._adapter.getMinute(this._activeDate));
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
    }
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    _dateSelected(date) {
        this._activeDate = date;
        if (this.type !== "date") {
            this._currentView = "clock";
        }
    }
    /**
     * Handles month selection in the year view.
     * @param {?} month
     * @return {?}
     */
    _monthSelected(month) {
        this._activeDate = month;
        if (this.type !== 'month') {
            this._currentView = "month";
            this._clockView = "hour";
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    _timeSelected(date) {
        this._activeDate = date;
        this._clockView = "minute";
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleConfirmButton(event) {
        this.selectedChange.emit(this._activeDate);
        this._userSelected();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleCancelButton(event) {
        // Close dialog (datetimepicker.close())
        this._userSelection.emit();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    _onActiveDateChange(date) {
        this._activeDate = date;
    }
    /**
     * @return {?}
     */
    _yearClicked() {
        this._currentView = "year";
    }
    /**
     * @return {?}
     */
    _dateClicked() {
        if (this.type !== 'month') {
            this._currentView = "month";
        }
    }
    /**
     * @return {?}
     */
    _hoursClicked() {
        this._currentView = "clock";
        this._clockView = "hour";
    }
    /**
     * @return {?}
     */
    _minutesClicked() {
        this._currentView = "clock";
        this._clockView = "minute";
    }
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    _previousClicked() {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, -1) :
            this._adapter.addCalendarYears(this._activeDate, -1);
    }
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    _nextClicked() {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, 1) :
            this._adapter.addCalendarYears(this._activeDate, 1);
    }
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    _previousEnabled() {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
    }
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    _nextEnabled() {
        return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
    }
    /**
     * Handles keydown events on the calendar body.
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    _focusActiveCell() {
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.asObservable().pipe(first()).subscribe(() => {
                this._elementRef.nativeElement.focus();
            });
        });
    }
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    _isSameView(date1, date2) {
        return this._currentView === "month" ?
            this._adapter.getYear(date1) == this._adapter.getYear(date2) &&
                this._adapter.getMonth(date1) == this._adapter.getMonth(date2) :
            this._adapter.getYear(date1) == this._adapter.getYear(date2);
    }
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
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
    /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
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
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
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
     * @param {?} date
     * @return {?}
     */
    _prevMonthInSameCol(date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        /** @type {?} */
        const increment = this._adapter.getMonth(date) <= 4 ? -5 :
            (this._adapter.getMonth(date) >= 7 ? -7 : -12);
        return this._adapter.addCalendarMonths(date, increment);
    }
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     * @param {?} date
     * @return {?}
     */
    _nextMonthInSameCol(date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        /** @type {?} */
        const increment = this._adapter.getMonth(date) <= 4 ? 7 :
            (this._adapter.getMonth(date) >= 7 ? 5 : 12);
        return this._adapter.addCalendarMonths(date, increment);
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    calendarState(direction) {
        this._calendarState = direction;
    }
    /**
     * @return {?}
     */
    _calendarStateDone() {
        this._calendarState = "";
    }
    /**
     * @param {?} n
     * @return {?}
     */
    _2digit(n) {
        return ("00" + n).slice(-2);
    }
}
MatDatetimepickerCalendar.decorators = [
    { type: Component, args: [{
                selector: "mat-datetimepicker-calendar",
                template: `<div class="mat-datetimepicker-calendar-header">
  <div *ngIf="type !== 'time'"
       class="mat-datetimepicker-calendar-header-year"
       [class.active]="_currentView == 'year'"
       (click)="_yearClicked()">{{ _yearLabel }}
  </div>
  <div class="mat-datetimepicker-calendar-header-date-time">
    <span *ngIf="type !== 'time'"
          class="mat-datetimepicker-calendar-header-date"
          [class.active]="_currentView == 'month'"
          [class.not-clickable]="type === 'month'"
          (click)="_dateClicked()" style="font-size: 0.7em;">{{ _dateLabel }}</span>
    <span *ngIf="type.endsWith('time')"
          class="mat-datetimepicker-calendar-header-time"
          [class.active]="_currentView == 'clock'">
      <span class="mat-datetimepicker-calendar-header-hours"
            [class.active]="_clockView == 'hour'"
            (click)="_hoursClicked()">{{ _hoursLabel }}</span>:<span class="mat-datetimepicker-calendar-header-minutes"
                                                                     [class.active]="_clockView == 'minute'"
                                                                     (click)="_minutesClicked()">{{ _minutesLabel }}</span>
    </span>
  </div>
</div>
<div class="mat-datetimepicker-calendar-content" [ngSwitch]="_currentView">
  <div class="mat-month-content" *ngIf="_currentView === 'month' || _currentView === 'year'">
    <div class="mat-datetimepicker-calendar-controls">
      <div class="mat-datetimepicker-calendar-previous-button"
           [class.disabled]="!_previousEnabled()" (click)="_previousClicked()"
           aria-label="Previous month">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
      </div>
      <div class="mat-datetimepicker-calendar-period-button" [@slideCalendar]="_calendarState"
           (@slideCalendar.done)="_calendarStateDone()">
        <strong>{{ _monthYearLabel }}</strong>
      </div>
      <div class="mat-datetimepicker-calendar-next-button"
           [class.disabled]="!_nextEnabled()" (click)="_nextClicked()"
           aria-label="Next month">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      </div>
    </div>
  </div>
  <mat-datetimepicker-month-view *ngSwitchCase="'month'"
                                 [activeDate]="_activeDate"
                                 [type]="type"
                                 [selected]="_activeDate"
                                 [dateFilter]="_dateFilterForViews"
                                 (selectedChange)="_dateSelected($event)"
                                 (_userSelection)="_userSelected()">
  </mat-datetimepicker-month-view>
  <mat-datetimepicker-year-view *ngSwitchCase="'year'"
                                [activeDate]="_activeDate"
                                [type]="type"
                                [selected]="_activeDate"
                                [dateFilter]="_dateFilterForViews"
                                (selectedChange)="_monthSelected($event)"
                                (_userSelection)="_userSelected()">
  </mat-datetimepicker-year-view>
  <mat-datetimepicker-clock *ngSwitchDefault
                            [startView]="_clockView"
                            [interval]="timeInterval"
                            [minDate]="minDate"
                            [maxDate]="maxDate"
                            [dateFilter]="dateFilter"
                            [selected]="_activeDate"
                            (activeDateChange)="_onActiveDateChange($event)"
                            (selectedChange)="_timeSelected($event)"
                            (_userSelection)="_userSelected()">
  </mat-datetimepicker-clock>
  <div class="mat-datetimepicker-calendar-footer">
    <button mat-button color="primary" (click)="_handleCancelButton($event)">{{ cancelButtonLabel }}</button>
    <button mat-raised-button color="primary" (click)="_handleConfirmButton($event)">{{ confirmButtonLabel }}</button>
  </div>
</div>
`,
                styles: [`.mat-datetimepicker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;outline:0}.mat-datetimepicker-calendar[mode=landscape]{display:flex}.mat-datetimepicker-calendar-header{padding:16px;font-size:14px;color:#fff;box-sizing:border-box}[mode=landscape] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar-header-date-time,.mat-datetimepicker-calendar-header-year{width:100%;font-weight:500;white-space:nowrap}.mat-datetimepicker-calendar-header-date-time{font-size:30px;line-height:30px}[mode=landscape] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar-header-date:not(.active),.mat-datetimepicker-calendar-header-hours:not(.active),.mat-datetimepicker-calendar-header-minutes:not(.active),.mat-datetimepicker-calendar-header-year:not(.active){cursor:pointer;opacity:.6}.mat-datetimepicker-calendar-header-date.not-clickable,.mat-datetimepicker-calendar-header-hours.not-clickable,.mat-datetimepicker-calendar-header-minutes.not-clickable,.mat-datetimepicker-calendar-header-year.not-clickable{cursor:initial}.mat-datetimepicker-calendar-header-time{padding-left:8px;padding-top:5px}.mat-datetimepicker-calendar-header-time:not(.active){opacity:.6}.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-hours,.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-minutes{cursor:pointer;opacity:1}[mode=landscape] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar-content{width:100%;padding:0 8px 8px;outline:0;box-sizing:border-box;overflow:hidden}[mode=landscape] .mat-datetimepicker-calendar-content{padding-top:8px}.mat-datetimepicker-calendar-content>.mat-datetimepicker-calendar-footer{padding:12px;text-align:right}.mat-datetimepicker-calendar-controls{display:flex;justify-content:space-between}.mat-datetimepicker-calendar-period-button{display:inline-block;height:48px;padding:12px;outline:0;border:0;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button,.mat-datetimepicker-calendar-previous-button{display:inline-block;width:48px;height:48px;padding:12px;outline:0;border:0;cursor:pointer;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button.disabled,.mat-datetimepicker-calendar-previous-button.disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-calendar-next-button svg,.mat-datetimepicker-calendar-previous-button svg{fill:currentColor;vertical-align:top}.mat-datetimepicker-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-datetimepicker-calendar-table-header{color:rgba(0,0,0,.38)}.mat-datetimepicker-calendar-table-header th{text-align:center;font-size:11px;padding:0 0 8px}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{display:flex}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-content{padding-top:8px}}`],
                host: {
                    "[class.mat-datetimepicker-calendar]": "true",
                    "tabindex": "0",
                    "(keydown)": "_handleCalendarBodyKeydown($event)"
                },
                animations: [slideCalendar],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
MatDatetimepickerCalendar.ctorParameters = () => [
    { type: ElementRef },
    { type: MatDatepickerIntl },
    { type: NgZone },
    { type: DatetimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
MatDatetimepickerCalendar.propDecorators = {
    _userSelection: [{ type: Output }],
    type: [{ type: Input }],
    startAt: [{ type: Input }],
    startView: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    timeInterval: [{ type: Input }],
    dateFilter: [{ type: Input }],
    selectedChange: [{ type: Output }],
    confirmButtonLabel: [{ type: Input }],
    cancelButtonLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._intlChanges;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._userSelection;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype.type;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._startAt;
    /**
     * Whether the calendar should be started in month or year view.
     * @type {?}
     */
    MatDatetimepickerCalendar.prototype.startView;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._selected;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._minDate;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._maxDate;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype.timeInterval;
    /**
     * A function used to filter which dates are selectable.
     * @type {?}
     */
    MatDatetimepickerCalendar.prototype.dateFilter;
    /**
     * Emits when the currently selected date changes.
     * @type {?}
     */
    MatDatetimepickerCalendar.prototype.selectedChange;
    /**
     * Date filter for the month and year views.
     * @type {?}
     */
    MatDatetimepickerCalendar.prototype._dateFilterForViews;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._clampedActiveDate;
    /**
     * Whether the calendar is in month view.
     * @type {?}
     */
    MatDatetimepickerCalendar.prototype._currentView;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._clockView;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._calendarState;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype.confirmButtonLabel;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype.cancelButtonLabel;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._elementRef;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._intl;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._ngZone;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._adapter;
    /** @type {?} */
    MatDatetimepickerCalendar.prototype._dateFormats;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsR0FBRyxFQUNILEtBQUssRUFDTCxJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFDVCxPQUFPLEVBQ1AsV0FBVyxFQUNYLFFBQVEsRUFDVCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXRELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG9CQUFvQixFQUVyQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7O0FBaUcxRSxNQUFNOzs7Ozs7Ozs7SUFzSUosWUFBb0IsV0FBdUIsRUFDdkIsS0FBd0IsRUFDeEIsT0FBZSxFQUNILFFBQTRCLEVBQ0UsWUFBZ0MsRUFDbEYsaUJBQW9DO1FBTDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFlBQU8s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QUs7c0JBR0wsS0FBSzt3QkFZTCxLQUFLO3VCQUdMLEtBQUs7c0JBWUwsS0FBSztzQkFZTCxLQUFLOzJCQVdMLEtBQUs7eUJBR0wsS0FBSzs2QkFHTCxNQUFNO2lDQTRITixLQUFLO2dDQU1MLEtBQUs7Ozs7SUFqTU4saURBQW1DOztJQUVuQyxtREFBb0Q7O0lBRXBELHlDQUErRDs7SUFZL0QsNkNBQTJCOzs7OztJQUczQiw4Q0FBeUQ7O0lBWXpELDhDQUE0Qjs7SUFZNUIsNkNBQTJCOztJQVkzQiw2Q0FBMkI7O0lBRTNCLGlEQUFrQzs7Ozs7SUFHbEMsK0NBQTZFOzs7OztJQUc3RSxtREFBaUQ7Ozs7O0lBR2pELHdEQUtFOztJQXVCRix1REFBOEI7Ozs7O0lBTzlCLGlEQUFtRDs7SUFDbkQsK0NBQXVDOztJQTRCdkMsbURBQXVCOztJQXlEdkIsdURBQW9DOztJQU1wQyxzREFBbUM7O0lBN0R2QixnREFBK0I7O0lBQy9CLDBDQUFnQzs7SUFDaEMsNENBQXVCOztJQUN2Qiw2Q0FBZ0Q7O0lBQ2hELGlEQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRE9XTl9BUlJPVyxcclxuICBFTkQsXHJcbiAgRU5URVIsXHJcbiAgSE9NRSxcclxuICBMRUZUX0FSUk9XLFxyXG4gIFBBR0VfRE9XTixcclxuICBQQUdFX1VQLFxyXG4gIFJJR0hUX0FSUk9XLFxyXG4gIFVQX0FSUk9XXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnRsIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBNQVRfREFURVRJTUVfRk9STUFUUyxcclxuICBNYXREYXRldGltZUZvcm1hdHNcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7IHNsaWRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNhbGVuZGFyIHRoYXQgaXMgdXNlZCBhcyBwYXJ0IG9mIHRoZSBkYXRlcGlja2VyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJcIixcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyXCI+XHJcbiAgPGRpdiAqbmdJZj1cInR5cGUgIT09ICd0aW1lJ1wiXHJcbiAgICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXIteWVhclwiXHJcbiAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jdXJyZW50VmlldyA9PSAneWVhcidcIlxyXG4gICAgICAgKGNsaWNrKT1cIl95ZWFyQ2xpY2tlZCgpXCI+e3sgX3llYXJMYWJlbCB9fVxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZVwiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJ0eXBlICE9PSAndGltZSdcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY3VycmVudFZpZXcgPT0gJ21vbnRoJ1wiXHJcbiAgICAgICAgICBbY2xhc3Mubm90LWNsaWNrYWJsZV09XCJ0eXBlID09PSAnbW9udGgnXCJcclxuICAgICAgICAgIChjbGljayk9XCJfZGF0ZUNsaWNrZWQoKVwiIHN0eWxlPVwiZm9udC1zaXplOiAwLjdlbTtcIj57eyBfZGF0ZUxhYmVsIH19PC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJ0eXBlLmVuZHNXaXRoKCd0aW1lJylcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWVcIlxyXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY3VycmVudFZpZXcgPT0gJ2Nsb2NrJ1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnNcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jbG9ja1ZpZXcgPT0gJ2hvdXInXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIl9ob3Vyc0NsaWNrZWQoKVwiPnt7IF9ob3Vyc0xhYmVsIH19PC9zcGFuPjo8c3BhbiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiX2Nsb2NrVmlldyA9PSAnbWludXRlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfbWludXRlc0NsaWNrZWQoKVwiPnt7IF9taW51dGVzTGFiZWwgfX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnRcIiBbbmdTd2l0Y2hdPVwiX2N1cnJlbnRWaWV3XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1tb250aC1jb250ZW50XCIgKm5nSWY9XCJfY3VycmVudFZpZXcgPT09ICdtb250aCcgfHwgX2N1cnJlbnRWaWV3ID09PSAneWVhcidcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udHJvbHNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wcmV2aW91cy1idXR0b25cIlxyXG4gICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCIhX3ByZXZpb3VzRW5hYmxlZCgpXCIgKGNsaWNrKT1cIl9wcmV2aW91c0NsaWNrZWQoKVwiXHJcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIG1vbnRoXCI+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wZXJpb2QtYnV0dG9uXCIgW0BzbGlkZUNhbGVuZGFyXT1cIl9jYWxlbmRhclN0YXRlXCJcclxuICAgICAgICAgICAoQHNsaWRlQ2FsZW5kYXIuZG9uZSk9XCJfY2FsZW5kYXJTdGF0ZURvbmUoKVwiPlxyXG4gICAgICAgIDxzdHJvbmc+e3sgX21vbnRoWWVhckxhYmVsIH19PC9zdHJvbmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uXCJcclxuICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIV9uZXh0RW5hYmxlZCgpXCIgKGNsaWNrKT1cIl9uZXh0Q2xpY2tlZCgpXCJcclxuICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCBtb250aFwiPlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1kYXRldGltZXBpY2tlci1tb250aC12aWV3ICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiX2FjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIl9hY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiX2RhdGVGaWx0ZXJGb3JWaWV3c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJfZGF0ZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3VzZXJTZWxlY3Rpb24pPVwiX3VzZXJTZWxlY3RlZCgpXCI+XHJcbiAgPC9tYXQtZGF0ZXRpbWVwaWNrZXItbW9udGgtdmlldz5cclxuICA8bWF0LWRhdGV0aW1lcGlja2VyLXllYXItdmlldyAqbmdTd2l0Y2hDYXNlPVwiJ3llYXInXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIl9hY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJfZGF0ZUZpbHRlckZvclZpZXdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiX21vbnRoU2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cIl91c2VyU2VsZWN0ZWQoKVwiPlxyXG4gIDwvbWF0LWRhdGV0aW1lcGlja2VyLXllYXItdmlldz5cclxuICA8bWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGFydFZpZXddPVwiX2Nsb2NrVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW50ZXJ2YWxdPVwidGltZUludGVydmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJkYXRlRmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlRGF0ZUNoYW5nZSk9XCJfb25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIl90aW1lU2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3VzZXJTZWxlY3Rpb24pPVwiX3VzZXJTZWxlY3RlZCgpXCI+XHJcbiAgPC9tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2s+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1mb290ZXJcIj5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiX2hhbmRsZUNhbmNlbEJ1dHRvbigkZXZlbnQpXCI+e3sgY2FuY2VsQnV0dG9uTGFiZWwgfX08L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIl9oYW5kbGVDb25maXJtQnV0dG9uKCRldmVudClcIj57eyBjb25maXJtQnV0dG9uTGFiZWwgfX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2Rpc3BsYXk6YmxvY2s7b3V0bGluZTowfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1sYW5kc2NhcGVde2Rpc3BsYXk6ZmxleH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlcntwYWRkaW5nOjE2cHg7Zm9udC1zaXplOjE0cHg7Y29sb3I6I2ZmZjtib3gtc2l6aW5nOmJvcmRlci1ib3h9W21vZGU9bGFuZHNjYXBlXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlcnt3aWR0aDoxNTBweDttaW4td2lkdGg6MTUwcHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS10aW1lLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXJ7d2lkdGg6MTAwJTtmb250LXdlaWdodDo1MDA7d2hpdGUtc3BhY2U6bm93cmFwfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZXtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozMHB4fVttb2RlPWxhbmRzY2FwZV0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS10aW1le3doaXRlLXNwYWNlOm5vcm1hbDt3b3JkLXdyYXA6YnJlYWstd29yZH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlOm5vdCguYWN0aXZlKSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1ob3Vyczpub3QoLmFjdGl2ZSksLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlczpub3QoLmFjdGl2ZSksLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXIteWVhcjpub3QoLmFjdGl2ZSl7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouNn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLm5vdC1jbGlja2FibGUsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnMubm90LWNsaWNrYWJsZSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1taW51dGVzLm5vdC1jbGlja2FibGUsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXIteWVhci5ub3QtY2xpY2thYmxle2N1cnNvcjppbml0aWFsfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWV7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXRvcDo1cHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZTpub3QoLmFjdGl2ZSl7b3BhY2l0eTouNn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1lOm5vdCguYWN0aXZlKSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1ob3VycywubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1lOm5vdCguYWN0aXZlKSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1taW51dGVze2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MX1bbW9kZT1sYW5kc2NhcGVdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWV7ZGlzcGxheTpibG9jaztwYWRkaW5nLWxlZnQ6MH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnR7d2lkdGg6MTAwJTtwYWRkaW5nOjAgOHB4IDhweDtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbn1bbW9kZT1sYW5kc2NhcGVdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udGVudHtwYWRkaW5nLXRvcDo4cHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50Pi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItZm9vdGVye3BhZGRpbmc6MTJweDt0ZXh0LWFsaWduOnJpZ2h0fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udHJvbHN7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6NDhweDtwYWRkaW5nOjEycHg7b3V0bGluZTowO2JvcmRlcjowO2JhY2tncm91bmQ6MCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcHJldmlvdXMtYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7cGFkZGluZzoxMnB4O291dGxpbmU6MDtib3JkZXI6MDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOjAgMDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1uZXh0LWJ1dHRvbi5kaXNhYmxlZCwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbi5kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCk7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uIHN2ZywubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiBzdmd7ZmlsbDpjdXJyZW50Q29sb3I7dmVydGljYWwtYWxpZ246dG9wfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGV7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7d2lkdGg6MTAwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGh7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjExcHg7cGFkZGluZzowIDAgOHB4fUBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KXsubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b117ZGlzcGxheTpmbGV4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlcnt3aWR0aDoxNTBweDttaW4td2lkdGg6MTUwcHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZXt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC13cmFwOmJyZWFrLXdvcmR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWV7ZGlzcGxheTpibG9jaztwYWRkaW5nLWxlZnQ6MH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b10gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50e3BhZGRpbmctdG9wOjhweH19YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyXVwiOiBcInRydWVcIixcclxuICAgIFwidGFiaW5kZXhcIjogXCIwXCIsXHJcbiAgICBcIihrZXlkb3duKVwiOiBcIl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duKCRldmVudClcIlxyXG4gIH0sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXI8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9pbnRsQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgX3VzZXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcclxuXHJcbiAgLyoqIEEgZGF0ZSByZXByZXNlbnRpbmcgdGhlIHBlcmlvZCAobW9udGggb3IgeWVhcikgdG8gc3RhcnQgdGhlIGNhbGVuZGFyIGluLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN0YXJ0QXQoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc3RhcnRBdCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydEF0OiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIHNob3VsZCBiZSBzdGFydGVkIGluIG1vbnRoIG9yIHllYXIgdmlldy4gKi9cclxuICBASW5wdXQoKSBzdGFydFZpZXc6IFwiY2xvY2tcIiB8IFwibW9udGhcIiB8IFwieWVhclwiID0gXCJtb250aFwiO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1pbkRhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbkRhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXhEYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1heERhdGUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9tYXhEYXRlID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWF4RGF0ZTogRCB8IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpIHRpbWVJbnRlcnZhbDogbnVtYmVyID0gMTtcclxuXHJcbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXHJcbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICAvKiogRGF0ZSBmaWx0ZXIgZm9yIHRoZSBtb250aCBhbmQgeWVhciB2aWV3cy4gKi9cclxuICBfZGF0ZUZpbHRlckZvclZpZXdzID0gKGRhdGU6IEQpID0+IHtcclxuICAgIHJldHVybiAhIWRhdGUgJiZcclxuICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5EQVRFKSkgJiZcclxuICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY3VycmVudCBhY3RpdmUgZGF0ZS4gVGhpcyBkZXRlcm1pbmVzIHdoaWNoIHRpbWUgcGVyaW9kIGlzIHNob3duIGFuZCB3aGljaCBkYXRlIGlzXHJcbiAgICogaGlnaGxpZ2h0ZWQgd2hlbiB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAqL1xyXG4gIGdldCBfYWN0aXZlRGF0ZSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBfYWN0aXZlRGF0ZSh2YWx1ZTogRCkge1xyXG4gICAgY29uc3Qgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlO1xyXG4gICAgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmNsYW1wRGF0ZSh2YWx1ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gICAgaWYgKG9sZEFjdGl2ZURhdGUgJiYgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUgJiYgdGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIiAmJlxyXG4gICAgICAhdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlKSkge1xyXG4gICAgICBpZiAodGhpcy5fYWRhcHRlci5pc0luTmV4dE1vbnRoKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlKSkge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTdGF0ZShcInJpZ2h0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTdGF0ZShcImxlZnRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsYW1wZWRBY3RpdmVEYXRlOiBEO1xyXG5cclxuICBfdXNlclNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cclxuICBfY3VycmVudFZpZXc6IFwiY2xvY2tcIiB8IFwibW9udGhcIiB8IFwieWVhclwiID0gXCJtb250aFwiO1xyXG4gIF9jbG9ja1ZpZXc6IFwiaG91clwiIHwgXCJtaW51dGVcIiA9IFwiaG91clwiO1xyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY3VycmVudCBjYWxlbmRhciB2aWV3LiAqL1xyXG4gIGdldCBfeWVhckxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIGdldCBfbW9udGhZZWFyTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID8gdGhpcy5fYWRhcHRlci5nZXRNb250aE5hbWVzKFwibG9uZ1wiKVt0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpXSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgX2RhdGVMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmdldE1vbnRoTmFtZXMoXCJsb25nXCIpW3RoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuZm9ybWF0KHRoaXMuX2FjdGl2ZURhdGUsIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkucG9wdXBIZWFkZXJEYXRlTGFiZWwpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCBfaG91cnNMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuXzJkaWdpdCh0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9taW51dGVzTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl8yZGlnaXQodGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cyxcclxuICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIGlmICghdGhpcy5fYWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiTUFUX0RBVEVUSU1FX0ZPUk1BVFNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faW50bENoYW5nZXMgPSBfaW50bC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiBjaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5zdGFydEF0IHx8IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICAgIHRoaXMuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJ5ZWFyXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gXCJ0aW1lXCIpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IHRoaXMuc3RhcnRWaWV3IHx8IFwibW9udGhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5faW50bENoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGRhdGUgc2VsZWN0aW9uIGluIHRoZSBtb250aCB2aWV3LiAqL1xyXG4gIF9kYXRlU2VsZWN0ZWQoZGF0ZTogRCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGRhdGU7XHJcbiAgICBpZiAodGhpcy50eXBlICE9PSBcImRhdGVcIikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIG1vbnRoIHNlbGVjdGlvbiBpbiB0aGUgeWVhciB2aWV3LiAqL1xyXG4gIF9tb250aFNlbGVjdGVkKG1vbnRoOiBEKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gbW9udGg7XHJcbiAgICBpZiAodGhpcy50eXBlICE9PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJtb250aFwiO1xyXG4gICAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcImhvdXJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF90aW1lU2VsZWN0ZWQoZGF0ZTogRCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcIm1pbnV0ZVwiO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY29uZmlybUJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgX2hhbmRsZUNvbmZpcm1CdXR0b24oZXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgIHRoaXMuX3VzZXJTZWxlY3RlZCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBfaGFuZGxlQ2FuY2VsQnV0dG9uKGV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBDbG9zZSBkaWFsb2cgKGRhdGV0aW1lcGlja2VyLmNsb3NlKCkpXHJcbiAgICB0aGlzLl91c2VyU2VsZWN0aW9uLmVtaXQoKTtcclxuXHJcbiAgfVxyXG5cclxuICBfb25BY3RpdmVEYXRlQ2hhbmdlKGRhdGU6IEQpIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBkYXRlO1xyXG4gIH1cclxuXHJcbiAgX3llYXJDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBcInllYXJcIjtcclxuICB9XHJcblxyXG4gIF9kYXRlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcIm1vbnRoXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaG91cnNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XHJcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcImhvdXJcIjtcclxuICB9XHJcblxyXG4gIF9taW51dGVzQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJjbG9ja1wiO1xyXG4gICAgdGhpcy5fY2xvY2tWaWV3ID0gXCJtaW51dGVcIjtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHVzZXIgY2xpY2tzIG9uIHRoZSBwcmV2aW91cyBidXR0b24uICovXHJcbiAgX3ByZXZpb3VzQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSkgOlxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLiAqL1xyXG4gIF9uZXh0Q2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBwcmV2aW91cyBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuICovXHJcbiAgX3ByZXZpb3VzRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5taW5EYXRlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICF0aGlzLm1pbkRhdGUgfHwgIXRoaXMuX2lzU2FtZVZpZXcodGhpcy5fYWN0aXZlRGF0ZSwgdGhpcy5taW5EYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBuZXh0IHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBfbmV4dEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubWF4RGF0ZSB8fCAhdGhpcy5faXNTYW1lVmlldyh0aGlzLl9hY3RpdmVEYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkuICovXHJcbiAgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIFRPRE8obW1hbGVyYmEpOiBXZSBjdXJyZW50bHkgYWxsb3cga2V5Ym9hcmQgbmF2aWdhdGlvbiB0byBkaXNhYmxlZCBkYXRlcywgYnV0IGp1c3QgcHJldmVudFxyXG4gICAgLy8gZGlzYWJsZWQgb25lcyBmcm9tIGJlaW5nIHNlbGVjdGVkLiBUaGlzIG1heSBub3QgYmUgaWRlYWwsIHdlIHNob3VsZCBsb29rIGludG8gd2hldGhlclxyXG4gICAgLy8gbmF2aWdhdGlvbiBzaG91bGQgc2tpcCBvdmVyIGRpc2FibGVkIGRhdGVzLCBhbmQgaWYgc28sIGhvdyB0byBpbXBsZW1lbnQgdGhhdCBlZmZpY2llbnRseS5cclxuICAgIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25Jbk1vbnRoVmlldyhldmVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcInllYXJcIikge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5ZZWFyVmlldyhldmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5DbG9ja1ZpZXcoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2ZvY3VzQWN0aXZlQ2VsbCgpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgdHdvIGRhdGVzIHJlcHJlc2VudCB0aGUgc2FtZSB2aWV3IGluIHRoZSBjdXJyZW50IHZpZXcgbW9kZSAobW9udGggb3IgeWVhcikuICovXHJcbiAgcHJpdmF0ZSBfaXNTYW1lVmlldyhkYXRlMTogRCwgZGF0ZTI6IEQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PSB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTIpICYmXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZTEpID09IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZTIpIDpcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PSB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkgd2hlbiBjYWxlbmRhciBpcyBpbiBtb250aCB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25Jbk1vbnRoVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgLTcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIDcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEhPTUU6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAxIC0gdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuX2FjdGl2ZURhdGUpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTkQ6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAodGhpcy5fYWRhcHRlci5nZXROdW1EYXlzSW5Nb250aCh0aGlzLl9hY3RpdmVEYXRlKSAtXHJcbiAgICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLl9hY3RpdmVEYXRlKSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGV2ZW50LmFsdEtleSA/XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgLTEpIDpcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gZXZlbnQuYWx0S2V5ID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIGlmICh0aGlzLl9kYXRlRmlsdGVyRm9yVmlld3ModGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgICAgIHRoaXMuX2RhdGVTZWxlY3RlZCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gRG9uJ3QgcHJldmVudCBkZWZhdWx0IG9yIGZvY3VzIGFjdGl2ZSBjZWxsIG9uIGtleXMgdGhhdCB3ZSBkb24ndCBleHBsaWNpdGx5IGhhbmRsZS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIHllYXIgdmlldy4gKi9cclxuICBwcml2YXRlIF9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5ZZWFyVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX3ByZXZNb250aEluU2FtZUNvbCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9uZXh0TW9udGhJblNhbWVDb2wodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgSE9NRTpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLFxyXG4gICAgICAgICAgLXRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVORDpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLFxyXG4gICAgICAgICAgMTEgLSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQQUdFX1VQOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPVxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIGV2ZW50LmFsdEtleSA/IC0xMCA6IC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQQUdFX0RPV046XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgZXZlbnQuYWx0S2V5ID8gMTAgOiAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgICB0aGlzLl9tb250aFNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIERvbid0IHByZXZlbnQgZGVmYXVsdCBvciBmb2N1cyBhY3RpdmUgY2VsbCBvbiBrZXlzIHRoYXQgd2UgZG9uJ3QgZXhwbGljaXRseSBoYW5kbGUuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkgd2hlbiBjYWxlbmRhciBpcyBpbiBtb250aCB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JbkNsb2NrVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2Nsb2NrVmlldyA9PSBcImhvdXJcIiA/XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFySG91cnModGhpcy5fYWN0aXZlRGF0ZSwgMSkgOlxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1pbnV0ZXModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fY2xvY2tWaWV3ID09IFwiaG91clwiID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJIb3Vycyh0aGlzLl9hY3RpdmVEYXRlLCAtMSkgOlxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1pbnV0ZXModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIHRoaXMuX3RpbWVTZWxlY3RlZCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gRG9uJ3QgcHJldmVudCBkZWZhdWx0IG9yIGZvY3VzIGFjdGl2ZSBjZWxsIG9uIGtleXMgdGhhdCB3ZSBkb24ndCBleHBsaWNpdGx5IGhhbmRsZS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgdGhlIGRhdGUgZm9yIHRoZSBtb250aCB0aGF0IGNvbWVzIGJlZm9yZSB0aGUgZ2l2ZW4gbW9udGggaW4gdGhlIHNhbWUgY29sdW1uIGluIHRoZVxyXG4gICAqIGNhbGVuZGFyIHRhYmxlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3ByZXZNb250aEluU2FtZUNvbChkYXRlOiBEKTogRCB7XHJcbiAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgbW9udGhzIHRvIGp1bXAgZm9yd2FyZCBnaXZlbiB0aGF0IHRoZXJlIGFyZSAyIGVtcHR5IHNsb3RzIGF0IHRoZSBiZWdpbm5pbmdcclxuICAgIC8vIG9mIGVhY2ggeWVhci5cclxuICAgIGNvbnN0IGluY3JlbWVudCA9IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPD0gNCA/IC01IDpcclxuICAgICAgKHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPj0gNyA/IC03IDogLTEyKTtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIGluY3JlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgdGhlIGRhdGUgZm9yIHRoZSBtb250aCB0aGF0IGNvbWVzIGFmdGVyIHRoZSBnaXZlbiBtb250aCBpbiB0aGUgc2FtZSBjb2x1bW4gaW4gdGhlXHJcbiAgICogY2FsZW5kYXIgdGFibGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbmV4dE1vbnRoSW5TYW1lQ29sKGRhdGU6IEQpOiBEIHtcclxuICAgIC8vIERldGVybWluZSBob3cgbWFueSBtb250aHMgdG8ganVtcCBmb3J3YXJkIGdpdmVuIHRoYXQgdGhlcmUgYXJlIDIgZW1wdHkgc2xvdHMgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgLy8gb2YgZWFjaCB5ZWFyLlxyXG4gICAgY29uc3QgaW5jcmVtZW50ID0gdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA8PSA0ID8gNyA6XHJcbiAgICAgICh0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpID49IDcgPyA1IDogMTIpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgaW5jcmVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsZW5kYXJTdGF0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlRG9uZSgpIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfMmRpZ2l0KG46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjAwXCIgKyBuKS5zbGljZSgtMik7XHJcbiAgfVxyXG59XHJcbiJdfQ==