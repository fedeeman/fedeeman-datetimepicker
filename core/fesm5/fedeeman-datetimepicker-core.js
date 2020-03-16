import { __extends, __decorate, __param, __metadata } from 'tslib';
import { InjectionToken, Optional, Inject, Injectable, NgModule, EventEmitter, ElementRef, NgZone, ChangeDetectorRef, Output, Input, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ViewContainerRef, forwardRef, Directive } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, NativeDateModule, MatNativeDateModule } from '@angular/material/core';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { DOCUMENT, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ENTER, PAGE_DOWN, PAGE_UP, END, HOME, DOWN_ARROW, UP_ARROW, RIGHT_ARROW, LEFT_ARROW, ESCAPE } from '@angular/cdk/keycodes';
import { MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import { first } from 'rxjs/operators';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription, Subject, of, merge } from 'rxjs';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

var DatetimeAdapter = /** @class */ (function (_super) {
    __extends(DatetimeAdapter, _super);
    function DatetimeAdapter(_delegate) {
        var _this = _super.call(this) || this;
        _this._delegate = _delegate;
        return _this;
    }
    DatetimeAdapter.prototype.getValidDateOrNull = function (obj) {
        return (this.isDateInstance(obj) && this.isValid(obj)) ? obj : null;
    };
    DatetimeAdapter.prototype.compareDatetime = function (first, second) {
        return this.compareDate(first, second) ||
            this.getHour(first) - this.getHour(second) ||
            this.getMinute(first) - this.getMinute(second);
    };
    DatetimeAdapter.prototype.sameDatetime = function (first, second) {
        if (first && second) {
            var firstValid = this.isValid(first);
            var secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDatetime(first, second);
            }
            return firstValid === secondValid;
        }
        return first === second;
    };
    DatetimeAdapter.prototype.sameYear = function (first, second) {
        return first && second && this.getYear(first) === this.getYear(second);
    };
    DatetimeAdapter.prototype.sameDay = function (first, second) {
        return first && second && this.getDate(first) === this.getDate(second) && this.sameMonthAndYear(first, second);
    };
    DatetimeAdapter.prototype.sameHour = function (first, second) {
        return first && second && this.getHour(first) === this.getHour(second) && this.sameDay(first, second);
    };
    DatetimeAdapter.prototype.sameMinute = function (first, second) {
        return first && second && this.getMinute(first) === this.getMinute(second) && this.sameHour(first, second);
    };
    DatetimeAdapter.prototype.sameMonthAndYear = function (first, second) {
        if (first && second) {
            var firstValid = this.isValid(first);
            var secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !(this.getYear(first) - this.getYear(second) ||
                    this.getMonth(first) - this.getMonth(second));
            }
            return firstValid === secondValid;
        }
        return first === second;
    };
    // delegate
    DatetimeAdapter.prototype.clone = function (date) {
        return this._delegate.clone(date);
    };
    DatetimeAdapter.prototype.addCalendarYears = function (date, years) {
        return this._delegate.addCalendarYears(date, years);
    };
    DatetimeAdapter.prototype.addCalendarMonths = function (date, months) {
        return this._delegate.addCalendarMonths(date, months);
    };
    DatetimeAdapter.prototype.addCalendarDays = function (date, days) {
        return this._delegate.addCalendarDays(date, days);
    };
    DatetimeAdapter.prototype.getYear = function (date) {
        return this._delegate.getYear(date);
    };
    DatetimeAdapter.prototype.getMonth = function (date) {
        return this._delegate.getMonth(date);
    };
    DatetimeAdapter.prototype.getDate = function (date) {
        return this._delegate.getDate(date);
    };
    DatetimeAdapter.prototype.getDayOfWeek = function (date) {
        return this._delegate.getDayOfWeek(date);
    };
    DatetimeAdapter.prototype.getMonthNames = function (style) {
        return this._delegate.getMonthNames(style);
    };
    DatetimeAdapter.prototype.getDateNames = function () {
        return this._delegate.getDateNames();
    };
    DatetimeAdapter.prototype.getDayOfWeekNames = function (style) {
        return this._delegate.getDayOfWeekNames(style);
    };
    DatetimeAdapter.prototype.getYearName = function (date) {
        return this._delegate.getYearName(date);
    };
    DatetimeAdapter.prototype.getFirstDayOfWeek = function () {
        return this._delegate.getFirstDayOfWeek();
    };
    DatetimeAdapter.prototype.getNumDaysInMonth = function (date) {
        return this._delegate.getNumDaysInMonth(date);
    };
    DatetimeAdapter.prototype.createDate = function (year, month, date) {
        return this._delegate.createDate(year, month, date);
    };
    DatetimeAdapter.prototype.today = function () {
        return this._delegate.today();
    };
    DatetimeAdapter.prototype.parse = function (value, parseFormat) {
        return this._delegate.parse(value, parseFormat);
    };
    DatetimeAdapter.prototype.format = function (date, displayFormat) {
        return this._delegate.format(date, displayFormat);
    };
    DatetimeAdapter.prototype.toIso8601 = function (date) {
        return this._delegate.toIso8601(date);
    };
    DatetimeAdapter.prototype.isDateInstance = function (obj) {
        return this._delegate.isDateInstance(obj);
    };
    DatetimeAdapter.prototype.isValid = function (date) {
        return this._delegate.isValid(date);
    };
    DatetimeAdapter.prototype.invalid = function () {
        return this._delegate.invalid();
    };
    DatetimeAdapter.prototype.clampDate = function (date, min, max) {
        if (min && this.compareDatetime(date, min) < 0) {
            return min;
        }
        if (max && this.compareDatetime(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DatetimeAdapter;
}(DateAdapter));

var MAT_DATETIME_FORMATS = new InjectionToken("mat-datetime-formats");

var ɵ0 = function (i) { return String(i); };
/** The default hour names to use if Intl API is not available. */
var DEFAULT_HOUR_NAMES = range(24, ɵ0);
var ɵ1 = function (i) { return String(i); };
/** The default minute names to use if Intl API is not available. */
var DEFAULT_MINUTE_NAMES = range(60, ɵ1);
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var NativeDatetimeAdapter = /** @class */ (function (_super) {
    __extends(NativeDatetimeAdapter, _super);
    function NativeDatetimeAdapter(matDateLocale, _delegate) {
        var _this = _super.call(this, _delegate) || this;
        _this.setLocale(matDateLocale);
        return _this;
    }
    NativeDatetimeAdapter.prototype.clone = function (date) {
        return this.createDatetime(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date));
    };
    NativeDatetimeAdapter.prototype.getHour = function (date) {
        return date.getHours();
    };
    NativeDatetimeAdapter.prototype.getMinute = function (date) {
        return date.getMinutes();
    };
    NativeDatetimeAdapter.prototype.isInNextMonth = function (startDate, endDate) {
        var nextMonth = this.getDateInNextMonth(startDate);
        return this.sameMonthAndYear(nextMonth, endDate);
    };
    NativeDatetimeAdapter.prototype.createDatetime = function (year, month, date, hour, minute) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        if (hour < 0 || hour > 23) {
            throw Error("Invalid hour \"" + hour + "\". Hour has to be between 0 and 23.");
        }
        if (minute < 0 || minute > 59) {
            throw Error("Invalid minute \"" + minute + "\". Minute has to be between 0 and 59.");
        }
        var result = this._createDateWithOverflow(year, month, date, hour, minute);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() !== month) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    NativeDatetimeAdapter.prototype.getDateInNextMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
    };
    NativeDatetimeAdapter.prototype.getFirstDateOfMonth = function (date) {
        var result = new Date();
        result.setFullYear(date.getFullYear(), date.getMonth(), 1);
        return result;
    };
    NativeDatetimeAdapter.prototype.getHourNames = function () {
        return DEFAULT_HOUR_NAMES;
    };
    NativeDatetimeAdapter.prototype.getMinuteNames = function () {
        return DEFAULT_MINUTE_NAMES;
    };
    NativeDatetimeAdapter.prototype.addCalendarYears = function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    NativeDatetimeAdapter.prototype.addCalendarMonths = function (date, months) {
        var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date), this.getHour(date), this.getMinute(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) !== ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0, this.getHour(date), this.getMinute(date));
        }
        return newDate;
    };
    NativeDatetimeAdapter.prototype.addCalendarDays = function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days, this.getHour(date), this.getMinute(date));
    };
    NativeDatetimeAdapter.prototype.addCalendarHours = function (date, hours) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date) + hours, this.getMinute(date));
    };
    NativeDatetimeAdapter.prototype.addCalendarMinutes = function (date, minutes) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date) + minutes);
    };
    NativeDatetimeAdapter.prototype.toIso8601 = function (date) {
        return _super.prototype.toIso8601.call(this, date) + "T" + [
            this._2digit(date.getUTCHours()),
            this._2digit(date.getUTCMinutes())
        ].join(":");
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param str The string to strip direction characters from.
     * @returns The stripped string.
     */
    NativeDatetimeAdapter.prototype._stripDirectionalityCharacters = function (str) {
        return str.replace(/[\u200e\u200f]/g, "");
    };
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    NativeDatetimeAdapter.prototype._2digit = function (n) {
        return ("00" + n).slice(-2);
    };
    /** Creates a date but allows the month and date to overflow. */
    NativeDatetimeAdapter.prototype._createDateWithOverflow = function (year, month, date, hours, minutes) {
        var result = new Date(year, month, date, hours, minutes);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    NativeDatetimeAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
        { type: DateAdapter }
    ]; };
    NativeDatetimeAdapter = __decorate([
        Injectable(),
        __param(0, Optional()), __param(0, Inject(MAT_DATE_LOCALE)),
        __metadata("design:paramtypes", [String, DateAdapter])
    ], NativeDatetimeAdapter);
    return NativeDatetimeAdapter;
}(DatetimeAdapter));

var MAT_NATIVE_DATETIME_FORMATS = {
    parse: {},
    display: {
        dateInput: { year: "numeric", month: "2-digit", day: "2-digit" },
        monthInput: { month: "long" },
        datetimeInput: { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" },
        timeInput: { hour: "2-digit", minute: "2-digit" },
        monthYearLabel: { year: "numeric", month: "short" },
        dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
        monthYearA11yLabel: { year: "numeric", month: "long" },
        popupHeaderDateLabel: { weekday: "short", month: "short", day: "2-digit" }
    }
};

// tslint:disable max-classes-per-file
var NativeDatetimeModule = /** @class */ (function () {
    function NativeDatetimeModule() {
    }
    NativeDatetimeModule = __decorate([
        NgModule({
            imports: [NativeDateModule],
            providers: [
                {
                    provide: DatetimeAdapter,
                    useClass: NativeDatetimeAdapter
                }
            ]
        })
    ], NativeDatetimeModule);
    return NativeDatetimeModule;
}());
var ɵ0$1 = MAT_NATIVE_DATETIME_FORMATS;
var MatNativeDatetimeModule = /** @class */ (function () {
    function MatNativeDatetimeModule() {
    }
    MatNativeDatetimeModule = __decorate([
        NgModule({
            imports: [
                NativeDatetimeModule,
                MatNativeDateModule
            ],
            providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0$1 }]
        })
    ], MatNativeDatetimeModule);
    return MatNativeDatetimeModule;
}());

/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
var fadeInContent = trigger("fadeInContent", [
    state("showing", style({ opacity: 1 })),
    transition("void => showing", [
        style({ opacity: 0 }),
        animate("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
var slideCalendar = trigger("slideCalendar", [
    transition("* => left", [
        animate(180, keyframes([
            style({ transform: "translateX(100%)", offset: 0.5 }),
            style({ transform: "translateX(-100%)", offset: 0.51 }),
            style({ transform: "translateX(0)", offset: 1 })
        ]))
    ]),
    transition("* => right", [
        animate(180, keyframes([
            style({ transform: "translateX(-100%)", offset: 0.5 }),
            style({ transform: "translateX(100%)", offset: 0.51 }),
            style({ transform: "translateX(0)", offset: 1 })
        ]))
    ])
]);

/** @docs-private */
function createMissingDateImplError(provider) {
    return Error("MatDatetimepicker: No provider found for " + provider + ". You must import one of the following " +
        "modules at your application root: MatNativeDatetimeModule, MatMomentDatetimeModule, or provide a " +
        "custom implementation.");
}

var MatDatetimepickerFilterType;
(function (MatDatetimepickerFilterType) {
    MatDatetimepickerFilterType[MatDatetimepickerFilterType["DATE"] = 0] = "DATE";
    MatDatetimepickerFilterType[MatDatetimepickerFilterType["HOUR"] = 1] = "HOUR";
    MatDatetimepickerFilterType[MatDatetimepickerFilterType["MINUTE"] = 2] = "MINUTE";
})(MatDatetimepickerFilterType || (MatDatetimepickerFilterType = {}));

/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */
var MatDatetimepickerCalendar = /** @class */ (function () {
    function MatDatetimepickerCalendar(_elementRef, _intl, _ngZone, _adapter, _dateFormats, changeDetectorRef) {
        var _this = this;
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
        this._dateFilterForViews = function (date) {
            return !!date &&
                (!_this.dateFilter || _this.dateFilter(date, MatDatetimepickerFilterType.DATE)) &&
                (!_this.minDate || _this._adapter.compareDate(date, _this.minDate) >= 0) &&
                (!_this.maxDate || _this._adapter.compareDate(date, _this.maxDate) <= 0);
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
        this._intlChanges = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "startAt", {
        /** A date representing the period (month or year) to start the calendar in. */
        get: function () {
            return this._startAt;
        },
        set: function (value) {
            this._startAt = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "selected", {
        /** The currently selected date. */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "minDate", {
        /** The minimum selectable date. */
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            this._minDate = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            this._maxDate = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_activeDate", {
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         */
        get: function () {
            return this._clampedActiveDate;
        },
        set: function (value) {
            var oldActiveDate = this._clampedActiveDate;
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
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerCalendar.prototype._userSelected = function () {
        this._userSelection.emit();
    };
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_yearLabel", {
        /** The label for the current calendar view. */
        get: function () {
            return this._adapter.getYearName(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_monthYearLabel", {
        get: function () {
            return this._currentView === "month" ? this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)] :
                this._adapter.getYearName(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_dateLabel", {
        get: function () {
            if (this.type === "month") {
                return this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)];
            }
            return this._adapter.format(this._activeDate, this._dateFormats.display.popupHeaderDateLabel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_hoursLabel", {
        get: function () {
            return this._2digit(this._adapter.getHour(this._activeDate));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_minutesLabel", {
        get: function () {
            return this._2digit(this._adapter.getMinute(this._activeDate));
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerCalendar.prototype.ngAfterContentInit = function () {
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
    };
    MatDatetimepickerCalendar.prototype.ngOnDestroy = function () {
        this._intlChanges.unsubscribe();
    };
    /** Handles date selection in the month view. */
    MatDatetimepickerCalendar.prototype._dateSelected = function (date) {
        this._activeDate = date;
        if (this.type !== "date") {
            this._currentView = "clock";
        }
    };
    /** Handles month selection in the year view. */
    MatDatetimepickerCalendar.prototype._monthSelected = function (month) {
        this._activeDate = month;
        if (this.type !== 'month') {
            this._currentView = "month";
            this._clockView = "hour";
        }
    };
    MatDatetimepickerCalendar.prototype._timeSelected = function (date) {
        this._activeDate = date;
        this._clockView = "minute";
    };
    MatDatetimepickerCalendar.prototype._handleConfirmButton = function (event) {
        this.selectedChange.emit(this._activeDate);
        this._userSelected();
    };
    MatDatetimepickerCalendar.prototype._handleCancelButton = function (event) {
        // Close dialog (datetimepicker.close())
        this._userSelection.emit();
    };
    MatDatetimepickerCalendar.prototype._onActiveDateChange = function (date) {
        this._activeDate = date;
    };
    MatDatetimepickerCalendar.prototype._yearClicked = function () {
        this._currentView = "year";
    };
    MatDatetimepickerCalendar.prototype._dateClicked = function () {
        if (this.type !== 'month') {
            this._currentView = "month";
        }
    };
    MatDatetimepickerCalendar.prototype._hoursClicked = function () {
        this._currentView = "clock";
        this._clockView = "hour";
    };
    MatDatetimepickerCalendar.prototype._minutesClicked = function () {
        this._currentView = "clock";
        this._clockView = "minute";
    };
    /** Handles user clicks on the previous button. */
    MatDatetimepickerCalendar.prototype._previousClicked = function () {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, -1) :
            this._adapter.addCalendarYears(this._activeDate, -1);
    };
    /** Handles user clicks on the next button. */
    MatDatetimepickerCalendar.prototype._nextClicked = function () {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, 1) :
            this._adapter.addCalendarYears(this._activeDate, 1);
    };
    /** Whether the previous period button is enabled. */
    MatDatetimepickerCalendar.prototype._previousEnabled = function () {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
    };
    /** Whether the next period button is enabled. */
    MatDatetimepickerCalendar.prototype._nextEnabled = function () {
        return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
    };
    /** Handles keydown events on the calendar body. */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydown = function (event) {
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
    };
    MatDatetimepickerCalendar.prototype._focusActiveCell = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable.asObservable().pipe(first()).subscribe(function () {
                _this._elementRef.nativeElement.focus();
            });
        });
    };
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    MatDatetimepickerCalendar.prototype._isSameView = function (date1, date2) {
        return this._currentView === "month" ?
            this._adapter.getYear(date1) == this._adapter.getYear(date2) &&
                this._adapter.getMonth(date1) == this._adapter.getMonth(date2) :
            this._adapter.getYear(date1) == this._adapter.getYear(date2);
    };
    /** Handles keydown events on the calendar body when calendar is in month view. */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInMonthView = function (event) {
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
    };
    /** Handles keydown events on the calendar body when calendar is in year view. */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInYearView = function (event) {
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
    };
    /** Handles keydown events on the calendar body when calendar is in month view. */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInClockView = function (event) {
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
    };
    /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     */
    MatDatetimepickerCalendar.prototype._prevMonthInSameCol = function (date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        var increment = this._adapter.getMonth(date) <= 4 ? -5 :
            (this._adapter.getMonth(date) >= 7 ? -7 : -12);
        return this._adapter.addCalendarMonths(date, increment);
    };
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     */
    MatDatetimepickerCalendar.prototype._nextMonthInSameCol = function (date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        var increment = this._adapter.getMonth(date) <= 4 ? 7 :
            (this._adapter.getMonth(date) >= 7 ? 5 : 12);
        return this._adapter.addCalendarMonths(date, increment);
    };
    MatDatetimepickerCalendar.prototype.calendarState = function (direction) {
        this._calendarState = direction;
    };
    MatDatetimepickerCalendar.prototype._calendarStateDone = function () {
        this._calendarState = "";
    };
    MatDatetimepickerCalendar.prototype._2digit = function (n) {
        return ("00" + n).slice(-2);
    };
    MatDatetimepickerCalendar.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MatDatepickerIntl },
        { type: NgZone },
        { type: DatetimeAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] },
        { type: ChangeDetectorRef }
    ]; };
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
    return MatDatetimepickerCalendar;
}());

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
var MatDatetimepickerCalendarCell = /** @class */ (function () {
    function MatDatetimepickerCalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return MatDatetimepickerCalendarCell;
}());
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
var MatDatetimepickerCalendarBody = /** @class */ (function () {
    function MatDatetimepickerCalendarBody() {
        /** The number of columns in the table. */
        this.numCols = 7;
        /** Whether to allow selection of disabled cells. */
        this.allowDisabledSelection = false;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new EventEmitter();
    }
    MatDatetimepickerCalendarBody.prototype._cellClicked = function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(MatDatetimepickerCalendarBody.prototype, "_firstRowOffset", {
        /** The number of blank cells to put at the beginning for the first row. */
        get: function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerCalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber === this.activeCell;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatDatetimepickerCalendarBody.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MatDatetimepickerCalendarBody.prototype, "rows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatDatetimepickerCalendarBody.prototype, "todayValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatDatetimepickerCalendarBody.prototype, "selectedValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatDatetimepickerCalendarBody.prototype, "labelMinRequiredCells", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "numCols", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "allowDisabledSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "activeCell", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "selectedValueChange", void 0);
    MatDatetimepickerCalendarBody = __decorate([
        Component({
            selector: "[mat-datetimepicker-calendar-body]",
            template: "<!--\r\n  If there's not enough space in the first row, create a separate label row. We mark this row as\r\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\r\n-->\r\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\r\n  <td class=\"mat-datetimepicker-calendar-body-label\" [attr.colspan]=\"numCols\" >{{ label }}</td>\r\n</tr>\r\n\r\n<!-- Create the first row separately so we can include a special spacer cell. -->\r\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\r\n  <!--\r\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\r\n  -->\r\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\r\n      aria-hidden=\"true\"\r\n      class=\"mat-datetimepicker-calendar-body-label\"\r\n      [attr.colspan]=\"_firstRowOffset\">\r\n    {{ _firstRowOffset >= labelMinRequiredCells ? label : '' }}\r\n  </td>\r\n  <td *ngFor=\"let item of row; let colIndex = index\"\r\n      role=\"gridcell\"\r\n      class=\"mat-datetimepicker-calendar-body-cell\"\r\n      [class.mat-datetimepicker-calendar-body-disabled]=\"!item.enabled\"\r\n      [class.mat-datetimepicker-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\r\n      [attr.aria-label]=\"item.ariaLabel\"\r\n      [attr.aria-disabled]=\"!item.enabled || null\"\r\n      (click)=\"_cellClicked(item)\">\r\n    <div class=\"mat-datetimepicker-calendar-body-cell-content\"\r\n         [class.mat-datetimepicker-calendar-body-selected]=\"selectedValue === item.value\"\r\n         [class.mat-datetimepicker-calendar-body-today]=\"todayValue === item.value\">\r\n      {{ item.displayValue }}\r\n    </div>\r\n  </td>\r\n</tr>\r\n",
            host: {
                "class": "mat-datetimepicker-calendar-body"
            },
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".mat-datetimepicker-calendar-body{font-size:13px;min-width:224px}.mat-datetimepicker-calendar-body-label{padding:7.1428571429% 0 7.1428571429% 7.1428571429%;height:0;line-height:0;color:rgba(0,0,0,.54);transform:translateX(-6px);text-align:left}.mat-datetimepicker-calendar-body-cell{position:relative;width:14.2857142857%;height:0;line-height:0;padding:7.1428571429% 0;text-align:center;outline:0;cursor:pointer}.mat-datetimepicker-calendar-body-disabled{cursor:default;pointer-events:none}.mat-datetimepicker-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border:1px solid transparent;border-radius:50%}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar:focus .mat-datetimepicker-calendar-body-active>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected),:not(.mat-datetimepicker-calendar-body-disabled):hover>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){background-color:rgba(0,0,0,.12)}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-today:not(.mat-datetimepicker-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .mat-datetimepicker-calendar-body-label{padding:0 7.1428571429% 0 0;transform:translateX(6px);text-align:right}"]
        })
    ], MatDatetimepickerCalendarBody);
    return MatDatetimepickerCalendarBody;
}());

var CLOCK_RADIUS = 50;
var CLOCK_INNER_RADIUS = 27.5;
var CLOCK_OUTER_RADIUS = 41.25;
var CLOCK_TICK_RADIUS = 7.0833;
/**
 * A clock that is used as part of the datepicker.
 * @docs-private
 */
var MatDatetimepickerClock = /** @class */ (function () {
    function MatDatetimepickerClock(_element, _adapter) {
        var _this = this;
        this._element = _element;
        this._adapter = _adapter;
        this._userSelection = new EventEmitter();
        this._timeChanged = false;
        this.interval = 1;
        this.twelvehour = false;
        /** Emits when the currently selected date changes. */
        this.selectedChange = new EventEmitter();
        this.activeDateChange = new EventEmitter();
        /** Hours and Minutes representing the clock view. */
        this._hours = [];
        this._minutes = [];
        /** Whether the clock is in hour view. */
        this._hourView = true;
        this.mouseMoveListener = function (event) {
            _this._handleMousemove(event);
        };
        this.mouseUpListener = function () {
            _this._handleMouseup();
        };
    }
    Object.defineProperty(MatDatetimepickerClock.prototype, "activeDate", {
        /**
         * The date to display in this clock view.
         */
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
            var oldActiveDate = this._activeDate;
            this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
            if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "selected", {
        /** The currently selected date. */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
            if (this._selected) {
                this.activeDate = this._selected;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "minDate", {
        /** The minimum selectable date. */
        get: function () {
            return this._minDate;
        },
        set: function (value) {
            this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: function () {
            return this._maxDate;
        },
        set: function (value) {
            this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "startView", {
        /** Whether the clock should be started in hour or minute view. */
        set: function (value) {
            this._hourView = value != "minute";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "_hand", {
        get: function () {
            this._selectedHour = this._adapter.getHour(this.activeDate);
            this._selectedMinute = this._adapter.getMinute(this.activeDate);
            var deg = 0;
            var radius = CLOCK_OUTER_RADIUS;
            if (this._hourView) {
                var outer = this._selectedHour > 0 && this._selectedHour < 13;
                radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                if (this.twelvehour) {
                    radius = CLOCK_OUTER_RADIUS;
                }
                deg = Math.round(this._selectedHour * (360 / (24 / 2)));
            }
            else {
                deg = Math.round(this._selectedMinute * (360 / 60));
            }
            return {
                "transform": "rotate(" + deg + "deg)",
                "height": radius + "%",
                "margin-top": 50 - radius + "%"
            };
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerClock.prototype.ngAfterContentInit = function () {
        this.activeDate = this._activeDate || this._adapter.today();
        this._init();
    };
    /** Handles mousedown events on the clock body. */
    MatDatetimepickerClock.prototype._handleMousedown = function (event) {
        this._timeChanged = false;
        this.setTime(event);
        document.addEventListener("mousemove", this.mouseMoveListener);
        document.addEventListener("touchmove", this.mouseMoveListener);
        document.addEventListener("mouseup", this.mouseUpListener);
        document.addEventListener("touchend", this.mouseUpListener);
    };
    MatDatetimepickerClock.prototype._handleMousemove = function (event) {
        event.preventDefault();
        this.setTime(event);
    };
    MatDatetimepickerClock.prototype._handleMouseup = function () {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        document.removeEventListener("touchmove", this.mouseMoveListener);
        document.removeEventListener("mouseup", this.mouseUpListener);
        document.removeEventListener("touchend", this.mouseUpListener);
        if (this._timeChanged) {
            this.selectedChange.emit(this.activeDate);
        }
    };
    /** Initializes this clock view. */
    MatDatetimepickerClock.prototype._init = function () {
        this._hours.length = 0;
        this._minutes.length = 0;
        var hourNames = this._adapter.getHourNames();
        var minuteNames = this._adapter.getMinuteNames();
        if (this.twelvehour) {
            for (var i = 1; i < (hourNames.length / 2) + 1; i++) {
                var radian = i / 6 * Math.PI;
                var radius = CLOCK_OUTER_RADIUS;
                var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i + 1, 0);
                var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0);
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS
                });
            }
        }
        else {
            for (var i = 0; i < hourNames.length; i++) {
                var radian = i / 6 * Math.PI;
                var outer = i > 0 && i < 13, radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i, 0);
                var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                    (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.HOUR));
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
                    fontSize: i > 0 && i < 13 ? "" : "80%"
                });
            }
        }
        for (var i = 0; i < minuteNames.length; i += 5) {
            var radian = i / 30 * Math.PI;
            var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), i);
            var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.MINUTE));
            this._minutes.push({
                value: i,
                displayValue: i === 0 ? "00" : minuteNames[i],
                enabled: enabled,
                top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
                left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS
            });
        }
    };
    /**
     * Set Time
     * @param event
     */
    MatDatetimepickerClock.prototype.setTime = function (event) {
        var trigger = this._element.nativeElement;
        var triggerRect = trigger.getBoundingClientRect();
        var width = trigger.offsetWidth;
        var height = trigger.offsetHeight;
        var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
        var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
        var x = (width / 2) - (pageX - triggerRect.left - window.pageXOffset);
        var y = (height / 2) - (pageY - triggerRect.top - window.pageYOffset);
        var radian = Math.atan2(-x, y);
        var unit = Math.PI / (this._hourView ? 6 : (this.interval ? (30 / this.interval) : 30));
        var z = Math.sqrt(x * x + y * y);
        var outer = this._hourView && z > ((width * (CLOCK_OUTER_RADIUS / 100)) +
            (width * (CLOCK_INNER_RADIUS / 100))) / 2;
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        var value = Math.round(radian / unit);
        var date;
        if (this._hourView) {
            if (this.twelvehour) {
                value = value === 0 ? 12 : value;
            }
            else {
                if (value === 12) {
                    value = 0;
                }
                value = outer ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), value, this._adapter.getMinute(this.activeDate));
        }
        else {
            if (this.interval) {
                value *= this.interval;
            }
            if (value === 60) {
                value = 0;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), value);
        }
        var clamped = this._adapter.clampDate(date, this.minDate, this.maxDate);
        if (date === clamped) {
            this._timeChanged = true;
            this.activeDate = clamped;
            this.activeDateChange.emit(this.activeDate);
        }
    };
    MatDatetimepickerClock.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DatetimeAdapter }
    ]; };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatDatetimepickerClock.prototype, "_userSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerClock.prototype, "activeDate", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerClock.prototype, "selected", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerClock.prototype, "minDate", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerClock.prototype, "maxDate", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MatDatetimepickerClock.prototype, "startView", null);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], MatDatetimepickerClock.prototype, "dateFilter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatDatetimepickerClock.prototype, "interval", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatDatetimepickerClock.prototype, "twelvehour", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatDatetimepickerClock.prototype, "selectedChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatDatetimepickerClock.prototype, "activeDateChange", void 0);
    MatDatetimepickerClock = __decorate([
        Component({
            selector: "mat-datetimepicker-clock",
            template: "<div class=\"mat-datetimepicker-clock\">\r\n  <div class=\"mat-datetimepicker-clock-center\"></div>\r\n  <div class=\"mat-datetimepicker-clock-hand\" [ngStyle]=\"_hand\"></div>\r\n  <div class=\"mat-datetimepicker-clock-hours\" [class.active]=\"_hourView\">\r\n    <div *ngFor=\"let item of _hours\"\r\n         class=\"mat-datetimepicker-clock-cell\"\r\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedHour == item.value\"\r\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\r\n         [style.top]=\"item.top+'%'\"\r\n         [style.left]=\"item.left+'%'\"\r\n         [style.fontSize]=\"item.fontSize\">{{ item.displayValue }}</div>\r\n  </div>\r\n  <div class=\"mat-datetimepicker-clock-minutes\" [class.active]=\"!_hourView\">\r\n    <div *ngFor=\"let item of _minutes\"\r\n         class=\"mat-datetimepicker-clock-cell\"\r\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedMinute == item.value\"\r\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\r\n         [style.top]=\"item.top+'%'\"\r\n         [style.left]=\"item.left+'%'\">{{ item.displayValue }}</div>\r\n  </div>\r\n</div>\r\n",
            host: {
                "role": "clock",
                "(mousedown)": "_handleMousedown($event)"
            },
            styles: [":host{position:relative;display:block;min-width:224px;margin:8px;font-size:14px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mat-datetimepicker-clock{position:relative;width:100%;height:0;padding-top:100%;background-color:#e0e0e0;border-radius:50%}.mat-datetimepicker-clock-center{position:absolute;top:50%;left:50%;width:2%;height:2%;margin:-1%;border-radius:50%}.mat-datetimepicker-clock-hand{position:absolute;top:0;right:0;bottom:0;left:0;width:1px;margin:0 auto;transform-origin:bottom}.mat-datetimepicker-clock-hand::before{content:\"\";position:absolute;top:-4px;left:-4px;width:8px;height:8px;border-radius:50%}.mat-datetimepicker-clock-hours,.mat-datetimepicker-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:350ms;transform:scale(1.2)}.mat-datetimepicker-clock-hours.active,.mat-datetimepicker-clock-minutes.active{opacity:1;visibility:visible;transform:scale(1)}.mat-datetimepicker-clock-minutes{transform:scale(.8)}.mat-datetimepicker-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;color:rgba(0,0,0,.87);justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer}.mat-datetimepicker-clock-cell:not(.mat-datetimepicker-clock-cell-selected):not(.mat-datetimepicker-clock-cell-disabled):hover{background-color:rgba(0,0,0,.1)}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected{color:#fff}"]
        }),
        __metadata("design:paramtypes", [ElementRef,
            DatetimeAdapter])
    ], MatDatetimepickerClock);
    return MatDatetimepickerClock;
}());

/** Used to generate a unique ID for each datepicker instance. */
var datetimepickerUid = 0;
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
var MatDatetimepickerContent = /** @class */ (function () {
    function MatDatetimepickerContent() {
    }
    MatDatetimepickerContent.prototype.ngAfterContentInit = function () {
        this._calendar._focusActiveCell();
    };
    /**
     * Handles keydown event on datepicker content.
     * @param event The event.
     */
    MatDatetimepickerContent.prototype._handleKeydown = function (event) {
        if (event.keyCode === ESCAPE) {
            this.datetimepicker.close();
            event.preventDefault();
            event.stopPropagation();
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
    return MatDatetimepickerContent;
}());
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
        get: function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: function (date) {
            this._startAt = this._dateAdapter.getValidDateOrNull(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "openOnFocus", {
        get: function () { return this._openOnFocus; },
        set: function (value) { this._openOnFocus = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MatDatetimepicker.prototype._handleFocus = function () {
        if (!this.opened && this.openOnFocus) {
            this.open();
        }
    };
    Object.defineProperty(MatDatetimepicker.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
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
        get: function () {
            return this._touchUi;
        },
        set: function (value) {
            this._touchUi = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "disabled", {
        /** Whether the datepicker pop-up should be disabled. */
        get: function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: function (value) {
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
        get: function () {
            return this._validSelected;
        },
        set: function (value) {
            this._validSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_dateFilter", {
        get: function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
        }
    };
    /** Selects the given date */
    MatDatetimepicker.prototype._select = function (date) {
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
    MatDatetimepicker.prototype._registerInput = function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error("A MatDatepicker can only be associated with a single input.");
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
    };
    /** Open the calendar. */
    MatDatetimepicker.prototype.open = function () {
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
    MatDatetimepicker.prototype.close = function () {
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
    MatDatetimepicker.prototype._openAsDialog = function () {
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
    MatDatetimepicker.prototype._openAsPopup = function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new ComponentPortal(MatDatetimepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
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
    MatDatetimepicker.prototype._createPopup = function () {
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
    MatDatetimepicker.prototype._createPopupPositionStrategy = function () {
        return this._overlay.position()
            .connectedTo(this._datepickerInput.getPopupConnectionElementRef(), { originX: "start", originY: "bottom" }, { overlayX: "start", overlayY: "top" })
            .withFallbackPosition({ originX: "start", originY: "top" }, { overlayX: "start", overlayY: "bottom" })
            .withFallbackPosition({ originX: "end", originY: "bottom" }, { overlayX: "end", overlayY: "top" })
            .withFallbackPosition({ originX: "end", originY: "top" }, { overlayX: "end", overlayY: "bottom" });
    };
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
    return MatDatetimepicker;
}());

// tslint:disable no-use-before-declare
var MAT_DATETIMEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MatDatetimepickerInput; }),
    multi: true
};
var MAT_DATETIMEPICKER_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return MatDatetimepickerInput; }),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
var MatDatetimepickerInputEvent = /** @class */ (function () {
    function MatDatetimepickerInputEvent(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
    return MatDatetimepickerInputEvent;
}());
/** Directive used to connect an input to a MatDatepicker. */
var MatDatetimepickerInput = /** @class */ (function () {
    function MatDatetimepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this = this;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /** Emits when a `change` event is fired on this `<input>`. */
        this.dateChange = new EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.dateInput = new EventEmitter();
        /** Emits when the value changes (either due to user input or programmatic change). */
        this._valueChange = new EventEmitter();
        /** Emits when the disabled state has changed */
        this._disabledChange = new EventEmitter();
        this._onTouched = function () {
        };
        this._cvaOnChange = function () {
        };
        this._validatorOnChange = function () {
        };
        this._datepickerSubscription = Subscription.EMPTY;
        this._localeSubscription = Subscription.EMPTY;
        /** The form control validator for whether the input parses. */
        this._parseValidator = function () {
            return _this._lastValueValid ?
                null : { "matDatepickerParse": { "text": _this._elementRef.nativeElement.value } };
        };
        /** The form control validator for the min date. */
        this._minValidator = function (control) {
            var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.min || !controlValue ||
                _this._dateAdapter.compareDatetime(_this.min, controlValue) <= 0) ?
                null : { "matDatepickerMin": { "min": _this.min, "actual": controlValue } };
        };
        /** The form control validator for the max date. */
        this._maxValidator = function (control) {
            var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.max || !controlValue ||
                _this._dateAdapter.compareDatetime(_this.max, controlValue) >= 0) ?
                null : { "matDatepickerMax": { "max": _this.max, "actual": controlValue } };
        };
        /** The form control validator for the date filter. */
        this._filterValidator = function (control) {
            var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue, MatDatetimepickerFilterType.DATE) ?
                null : { "matDatepickerFilter": true };
        };
        /** The combined form control validator for this input. */
        this._validator = Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /** Whether the last value set on the input was valid. */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this.value = _this.value;
        });
    }
    MatDatetimepickerInput_1 = MatDatetimepickerInput;
    Object.defineProperty(MatDatetimepickerInput.prototype, "matDatetimepicker", {
        /** The datepicker that this input is associated with. */
        set: function (value) {
            this.registerDatepicker(value);
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerInput.prototype.registerDatepicker = function (value) {
        if (value) {
            this._datepicker = value;
            this._datepicker._registerInput(this);
        }
    };
    Object.defineProperty(MatDatetimepickerInput.prototype, "matDatepickerFilter", {
        set: function (filter) {
            this._dateFilter = filter;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerInput.prototype, "value", {
        /** The value of the input. */
        get: function () {
            return this._value;
        },
        set: function (value) {
            var _this = this;
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = !value || this._dateAdapter.isValid(value);
            value = this._dateAdapter.getValidDateOrNull(value);
            var oldDate = this.value;
            this._value = value;
            this._formatValue(value);
            // use timeout to ensure the datetimepicker is instantiated and we get the correct format
            setTimeout(function () {
                if (!_this._dateAdapter.sameDatetime(oldDate, value)) {
                    _this._valueChange.emit(value);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerInput.prototype.getDisplayFormat = function () {
        switch (this._datepicker.type) {
            case "date":
                return this._dateFormats.display.dateInput;
            case "datetime":
                return this._dateFormats.display.datetimeInput;
            case "time":
                return this._dateFormats.display.timeInput;
            case "month":
                return this._dateFormats.display.monthInput;
        }
    };
    MatDatetimepickerInput.prototype.getParseFormat = function () {
        var parseFormat;
        switch (this._datepicker.type) {
            case "date":
                parseFormat = this._dateFormats.parse.dateInput;
                break;
            case "datetime":
                parseFormat = this._dateFormats.parse.datetimeInput;
                break;
            case "time":
                parseFormat = this._dateFormats.parse.timeInput;
                break;
            case "month":
                parseFormat = this._dateFormats.parse.monthInput;
                break;
        }
        if (!parseFormat) {
            parseFormat = this._dateFormats.parse.dateInput;
        }
        return parseFormat;
    };
    Object.defineProperty(MatDatetimepickerInput.prototype, "min", {
        /** The minimum valid date. */
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerInput.prototype, "max", {
        /** The maximum valid date. */
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerInput.prototype, "disabled", {
        /** Whether the datepicker-input is disabled. */
        get: function () {
            return !!this._disabled;
        },
        set: function (value) {
            var newValue = coerceBooleanProperty(value);
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disabledChange.emit(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerInput.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._datepicker) {
            // tslint:disable-next-line deprecation
            this._datepickerSubscription = this._datepicker.selectedChanged.subscribe(function (selected) {
                _this.value = selected;
                _this._cvaOnChange(selected);
                _this._onTouched();
                _this.dateInput.emit(new MatDatetimepickerInputEvent(_this, _this._elementRef.nativeElement));
                _this.dateChange.emit(new MatDatetimepickerInputEvent(_this, _this._elementRef.nativeElement));
            });
        }
    };
    MatDatetimepickerInput.prototype.ngOnDestroy = function () {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    };
    MatDatetimepickerInput.prototype.registerOnValidatorChange = function (fn) {
        this._validatorOnChange = fn;
    };
    MatDatetimepickerInput.prototype.validate = function (c) {
        return this._validator ? this._validator(c) : null;
    };
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    MatDatetimepickerInput.prototype.getPopupConnectionElementRef = function () {
        return this._formField ? this._formField.underlineRef : this._elementRef;
    };
    // Implemented as part of ControlValueAccessor
    MatDatetimepickerInput.prototype.writeValue = function (value) {
        this.value = value;
    };
    // Implemented as part of ControlValueAccessor
    MatDatetimepickerInput.prototype.registerOnChange = function (fn) {
        this._cvaOnChange = fn;
    };
    // Implemented as part of ControlValueAccessor
    MatDatetimepickerInput.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor
    MatDatetimepickerInput.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    MatDatetimepickerInput.prototype._onKeydown = function (event) {
        if (event.altKey && event.keyCode === DOWN_ARROW) {
            this._datepicker.open();
            event.preventDefault();
        }
    };
    MatDatetimepickerInput.prototype._onInput = function (value) {
        var date = this._dateAdapter.parse(value, this.getParseFormat());
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._dateAdapter.getValidDateOrNull(date);
        this._value = date;
        this._cvaOnChange(date);
        this._valueChange.emit(date);
        this.dateInput.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
    };
    MatDatetimepickerInput.prototype._onChange = function () {
        this.dateChange.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /** Handles blur events on the input. */
    MatDatetimepickerInput.prototype._onBlur = function () {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    };
    /** Formats a value and sets it on the input element. */
    MatDatetimepickerInput.prototype._formatValue = function (value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this.getDisplayFormat()) : "";
    };
    var MatDatetimepickerInput_1;
    MatDatetimepickerInput.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DatetimeAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] },
        { type: MatFormField, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", MatDatetimepicker),
        __metadata("design:paramtypes", [MatDatetimepicker])
    ], MatDatetimepickerInput.prototype, "matDatetimepicker", null);
    __decorate([
        Input(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], MatDatetimepickerInput.prototype, "matDatepickerFilter", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerInput.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerInput.prototype, "min", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerInput.prototype, "max", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatDatetimepickerInput.prototype, "disabled", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatDatetimepickerInput.prototype, "dateChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatDatetimepickerInput.prototype, "dateInput", void 0);
    MatDatetimepickerInput = MatDatetimepickerInput_1 = __decorate([
        Directive({
            selector: "input[matDatetimepicker]",
            providers: [
                MAT_DATETIMEPICKER_VALUE_ACCESSOR,
                MAT_DATETIMEPICKER_VALIDATORS,
                { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatetimepickerInput_1 },
            ],
            host: {
                "[attr.aria-haspopup]": "true",
                "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
                "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
                "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
                "[disabled]": "disabled",
                "(focus)": "_datepicker._handleFocus()",
                "(input)": "_onInput($event.target.value)",
                "(change)": "_onChange()",
                "(blur)": "_onBlur()",
                "(keydown)": "_onKeydown($event)"
            },
            exportAs: "matDatepickerInput"
        }),
        __param(1, Optional()),
        __param(2, Optional()), __param(2, Inject(MAT_DATETIME_FORMATS)),
        __param(3, Optional()),
        __metadata("design:paramtypes", [ElementRef,
            DatetimeAdapter, Object, MatFormField])
    ], MatDatetimepickerInput);
    return MatDatetimepickerInput;
}());

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
        var datepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : of();
        var inputDisabled = this.datetimepicker && this.datetimepicker._datepickerInput ?
            this.datetimepicker._datepickerInput._disabledChange : of();
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

var DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
var MatDatetimepickerMonthView = /** @class */ (function () {
    function MatDatetimepickerMonthView(_adapter, _dateFormats) {
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
        var firstDayOfWeek = this._adapter.getFirstDayOfWeek();
        var narrowWeekdays = this._adapter.getDayOfWeekNames("narrow");
        var longWeekdays = this._adapter.getDayOfWeekNames("long");
        // Rotate the labels for days of the week based on the configured first day of the week.
        var weekdays = longWeekdays.map(function (long, i) {
            return { long: long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._adapter.today();
    }
    Object.defineProperty(MatDatetimepickerMonthView.prototype, "activeDate", {
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
            var oldActiveDate = this._activeDate;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerMonthView.prototype, "selected", {
        /** The currently selected date. */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this._selectedDate = this._getDateInCurrentMonth(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerMonthView.prototype.ngAfterContentInit = function () {
        this._init();
    };
    /** Handles when a new date is selected. */
    MatDatetimepickerMonthView.prototype._dateSelected = function (date) {
        var userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), date, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this.selected = userSelected;
        this.selectedChange.emit(userSelected);
    };
    /** Initializes this month view. */
    MatDatetimepickerMonthView.prototype._init = function () {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._adapter.today());
        var firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._adapter.getDayOfWeek(firstOfMonth) -
                this._adapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._createWeekCells();
    };
    /** Creates MdCalendarCells for the dates in this month. */
    MatDatetimepickerMonthView.prototype._createWeekCells = function () {
        var daysInMonth = this._adapter.getNumDaysInMonth(this.activeDate);
        var dateNames = this._adapter.getDateNames();
        this._weeks = [[]];
        for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), i + 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
            var enabled = !this.dateFilter ||
                this.dateFilter(date);
            var ariaLabel = this._adapter.format(date, this._dateFormats.display.dateA11yLabel);
            this._weeks[this._weeks.length - 1]
                .push(new MatDatetimepickerCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
        }
    };
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    MatDatetimepickerMonthView.prototype._getDateInCurrentMonth = function (date) {
        return this._adapter.sameMonthAndYear(date, this.activeDate) ?
            this._adapter.getDate(date) : null;
    };
    MatDatetimepickerMonthView.prototype.calendarState = function (direction) {
        this._calendarState = direction;
    };
    MatDatetimepickerMonthView.prototype._calendarStateDone = function () {
        this._calendarState = "";
    };
    MatDatetimepickerMonthView.ctorParameters = function () { return [
        { type: DatetimeAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] }
    ]; };
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
    return MatDatetimepickerMonthView;
}());

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
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
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
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
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerYearView.prototype.ngAfterContentInit = function () {
        this._init();
    };
    /** Handles when a new month is selected. */
    MatDatetimepickerYearView.prototype._monthSelected = function (month) {
        var userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this.selectedChange.emit(userSelected);
        this.selected = userSelected;
        this._selectedMonth = month;
    };
    /** Initializes this month view. */
    MatDatetimepickerYearView.prototype._init = function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._adapter.today());
        this._yearLabel = this._adapter.getYearName(this.activeDate);
        var monthNames = this._adapter.getMonthNames("short");
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]].map(function (row) { return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); }); });
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    MatDatetimepickerYearView.prototype._getMonthInCurrentYear = function (date) {
        return this._adapter.sameYear(date, this.activeDate) ?
            this._adapter.getMonth(date) : null;
    };
    /** Creates an MdCalendarCell for the given month. */
    MatDatetimepickerYearView.prototype._createCellForMonth = function (month, monthName) {
        var ariaLabel = this._adapter.format(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)), this._dateFormats.display.monthYearA11yLabel);
        return new MatDatetimepickerCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
    };
    /** Whether the given month is enabled. */
    MatDatetimepickerYearView.prototype._isMonthEnabled = function (month) {
        if (!this.dateFilter) {
            return true;
        }
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
    MatDatetimepickerYearView.prototype._calendarStateDone = function () {
        this._calendarState = "";
    };
    MatDatetimepickerYearView.ctorParameters = function () { return [
        { type: DatetimeAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] }
    ]; };
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
    return MatDatetimepickerYearView;
}());

var MatDatetimepickerModule = /** @class */ (function () {
    function MatDatetimepickerModule() {
    }
    MatDatetimepickerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MatButtonModule,
                MatDialogModule,
                MatIconModule,
                OverlayModule,
                A11yModule
            ],
            entryComponents: [
                MatDatetimepickerContent
            ],
            declarations: [
                MatDatetimepickerCalendar,
                MatDatetimepickerCalendarBody,
                MatDatetimepickerClock,
                MatDatetimepicker,
                MatDatetimepickerToggle,
                MatDatetimepickerInput,
                MatDatetimepickerContent,
                MatDatetimepickerMonthView,
                MatDatetimepickerYearView
            ],
            exports: [
                MatDatetimepickerCalendar,
                MatDatetimepickerCalendarBody,
                MatDatetimepickerClock,
                MatDatetimepicker,
                MatDatetimepickerToggle,
                MatDatetimepickerInput,
                MatDatetimepickerContent,
                MatDatetimepickerMonthView,
                MatDatetimepickerYearView
            ]
        })
    ], MatDatetimepickerModule);
    return MatDatetimepickerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CLOCK_INNER_RADIUS, CLOCK_OUTER_RADIUS, CLOCK_RADIUS, CLOCK_TICK_RADIUS, DatetimeAdapter, MAT_DATETIMEPICKER_VALIDATORS, MAT_DATETIMEPICKER_VALUE_ACCESSOR, MAT_DATETIME_FORMATS, MAT_NATIVE_DATETIME_FORMATS, MatDatetimepicker, MatDatetimepickerCalendar, MatDatetimepickerCalendarBody, MatDatetimepickerCalendarCell, MatDatetimepickerClock, MatDatetimepickerContent, MatDatetimepickerFilterType, MatDatetimepickerInput, MatDatetimepickerInputEvent, MatDatetimepickerModule, MatDatetimepickerMonthView, MatDatetimepickerToggle, MatDatetimepickerYearView, MatNativeDatetimeModule, NativeDatetimeAdapter, NativeDatetimeModule, ɵ0$1 as ɵ0, ɵ1, slideCalendar as ɵa };
//# sourceMappingURL=fedeeman-datetimepicker-core.js.map
