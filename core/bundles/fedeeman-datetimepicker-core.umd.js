(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/core'), require('@angular/core'), require('@angular/material'), require('@angular/animations'), require('@angular/cdk/keycodes'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/material/dialog'), require('rxjs'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/cdk/a11y')) :
    typeof define === 'function' && define.amd ? define('@fedeeman-datetimepicker/core', ['exports', '@angular/material/core', '@angular/core', '@angular/material', '@angular/animations', '@angular/cdk/keycodes', 'rxjs/operators', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/material/dialog', 'rxjs', '@angular/forms', '@angular/material/form-field', '@angular/cdk/a11y'], factory) :
    (factory((global['fedeeman-datetimepicker'] = global['fedeeman-datetimepicker'] || {}, global['fedeeman-datetimepicker'].core = {}),global.ng.material.core,global.ng.core,global.ng.material,global.ng.animations,global.ng.cdk.keycodes,global.rxjs.operators,global.ng.cdk.bidi,global.ng.cdk.coercion,global.ng.cdk.overlay,global.ng.cdk.portal,global.ng.common,global.ng.material.dialog,global.rxjs,global.ng.forms,global.ng.material['form-field'],global.ng.cdk.a11y));
}(this, (function (exports,core,core$1,material,animations,keycodes,operators,bidi,coercion,overlay,portal,common,dialog,rxjs,forms,formField,a11y) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template D
     */
    var /**
     * @abstract
     * @template D
     */ DatetimeAdapter = /** @class */ (function (_super) {
        __extends(DatetimeAdapter, _super);
        function DatetimeAdapter(_delegate) {
            var _this = _super.call(this) || this;
            _this._delegate = _delegate;
            return _this;
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        DatetimeAdapter.prototype.getValidDateOrNull = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                return (this.isDateInstance(obj) && this.isValid(obj)) ? obj : null;
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.compareDatetime = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return this.compareDate(first, second) ||
                    this.getHour(first) - this.getHour(second) ||
                    this.getMinute(first) - this.getMinute(second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameDatetime = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                if (first && second) {
                    /** @type {?} */
                    var firstValid = this.isValid(first);
                    /** @type {?} */
                    var secondValid = this.isValid(second);
                    if (firstValid && secondValid) {
                        return !this.compareDatetime(first, second);
                    }
                    return firstValid === secondValid;
                }
                return first === second;
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameYear = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getYear(first) === this.getYear(second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameDay = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getDate(first) === this.getDate(second) && this.sameMonthAndYear(first, second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameHour = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getHour(first) === this.getHour(second) && this.sameDay(first, second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameMinute = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getMinute(first) === this.getMinute(second) && this.sameHour(first, second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameMonthAndYear = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                if (first && second) {
                    /** @type {?} */
                    var firstValid = this.isValid(first);
                    /** @type {?} */
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
        // delegate
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.clone =
            // delegate
            /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                return this._delegate.clone(date);
            };
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
        DatetimeAdapter.prototype.addCalendarYears = /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
            function (date, years) {
                return this._delegate.addCalendarYears(date, years);
            };
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
        DatetimeAdapter.prototype.addCalendarMonths = /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
            function (date, months) {
                return this._delegate.addCalendarMonths(date, months);
            };
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
        DatetimeAdapter.prototype.addCalendarDays = /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
            function (date, days) {
                return this._delegate.addCalendarDays(date, days);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getYear = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getYear(date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getMonth(date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getDate(date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getDayOfWeek = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getDayOfWeek(date);
            };
        /**
         * @param {?} style
         * @return {?}
         */
        DatetimeAdapter.prototype.getMonthNames = /**
         * @param {?} style
         * @return {?}
         */
            function (style) {
                return this._delegate.getMonthNames(style);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.getDateNames = /**
         * @return {?}
         */
            function () {
                return this._delegate.getDateNames();
            };
        /**
         * @param {?} style
         * @return {?}
         */
        DatetimeAdapter.prototype.getDayOfWeekNames = /**
         * @param {?} style
         * @return {?}
         */
            function (style) {
                return this._delegate.getDayOfWeekNames(style);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getYearName = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getYearName(date);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.getFirstDayOfWeek = /**
         * @return {?}
         */
            function () {
                return this._delegate.getFirstDayOfWeek();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getNumDaysInMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getNumDaysInMonth(date);
            };
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.createDate = /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
            function (year, month, date) {
                return this._delegate.createDate(year, month, date);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.today = /**
         * @return {?}
         */
            function () {
                return this._delegate.today();
            };
        /**
         * @param {?} value
         * @param {?} parseFormat
         * @return {?}
         */
        DatetimeAdapter.prototype.parse = /**
         * @param {?} value
         * @param {?} parseFormat
         * @return {?}
         */
            function (value, parseFormat) {
                return this._delegate.parse(value, parseFormat);
            };
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */
        DatetimeAdapter.prototype.format = /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */
            function (date, displayFormat) {
                return this._delegate.format(date, displayFormat);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.toIso8601 = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.toIso8601(date);
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        DatetimeAdapter.prototype.isDateInstance = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                return this._delegate.isDateInstance(obj);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.isValid = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.isValid(date);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.invalid = /**
         * @return {?}
         */
            function () {
                return this._delegate.invalid();
            };
        /**
         * @param {?} date
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */
        DatetimeAdapter.prototype.clampDate = /**
         * @param {?} date
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */
            function (date, min, max) {
                if (min && this.compareDatetime(date, min) < 0) {
                    return min;
                }
                if (max && this.compareDatetime(date, max) > 0) {
                    return max;
                }
                return date;
            };
        return DatetimeAdapter;
    }(core.DateAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAT_DATETIME_FORMATS = new core$1.InjectionToken("mat-datetime-formats");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ɵ0 = function (i) { return String(i); };
    /**
     * The default hour names to use if Intl API is not available.
     * @type {?}
     */
    var DEFAULT_HOUR_NAMES = range(24, ɵ0);
    var ɵ1 = function (i) { return String(i); };
    /**
     * The default minute names to use if Intl API is not available.
     * @type {?}
     */
    var DEFAULT_MINUTE_NAMES = range(60, ɵ1);
    /**
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */
    function range(length, valueFunction) {
        /** @type {?} */
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
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.clone = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this.createDatetime(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date));
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getHour = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date.getHours();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getMinute = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date.getMinutes();
            };
        /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.isInNextMonth = /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
            function (startDate, endDate) {
                /** @type {?} */
                var nextMonth = this.getDateInNextMonth(startDate);
                return this.sameMonthAndYear(nextMonth, endDate);
            };
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hour
         * @param {?} minute
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.createDatetime = /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hour
         * @param {?} minute
         * @return {?}
         */
            function (year, month, date, hour, minute) {
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
                /** @type {?} */
                var result = this._createDateWithOverflow(year, month, date, hour, minute);
                // Check that the date wasn't above the upper bound for the month, causing the month to overflow
                if (result.getMonth() !== month) {
                    throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
                }
                return result;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getDateInNextMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getFirstDateOfMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var result = new Date();
                result.setFullYear(date.getFullYear(), date.getMonth(), 1);
                return result;
            };
        /**
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getHourNames = /**
         * @return {?}
         */
            function () {
                return DEFAULT_HOUR_NAMES;
            };
        /**
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getMinuteNames = /**
         * @return {?}
         */
            function () {
                return DEFAULT_MINUTE_NAMES;
            };
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarYears = /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
            function (date, years) {
                return this.addCalendarMonths(date, years * 12);
            };
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarMonths = /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
            function (date, months) {
                /** @type {?} */
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
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarDays = /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
            function (date, days) {
                return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days, this.getHour(date), this.getMinute(date));
            };
        /**
         * @param {?} date
         * @param {?} hours
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarHours = /**
         * @param {?} date
         * @param {?} hours
         * @return {?}
         */
            function (date, hours) {
                return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date) + hours, this.getMinute(date));
            };
        /**
         * @param {?} date
         * @param {?} minutes
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarMinutes = /**
         * @param {?} date
         * @param {?} minutes
         * @return {?}
         */
            function (date, minutes) {
                return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date) + minutes);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.toIso8601 = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
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
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */
        NativeDatetimeAdapter.prototype._stripDirectionalityCharacters = /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */
            function (str) {
                return str.replace(/[\u200e\u200f]/g, "");
            };
        /**
         * Pads a number to make it two digits.
         * @param n The number to pad.
         * @returns The padded number.
         */
        /**
         * Pads a number to make it two digits.
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */
        NativeDatetimeAdapter.prototype._2digit = /**
         * Pads a number to make it two digits.
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */
            function (n) {
                return ("00" + n).slice(-2);
            };
        /** Creates a date but allows the month and date to overflow. */
        /**
         * Creates a date but allows the month and date to overflow.
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hours
         * @param {?} minutes
         * @return {?}
         */
        NativeDatetimeAdapter.prototype._createDateWithOverflow = /**
         * Creates a date but allows the month and date to overflow.
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hours
         * @param {?} minutes
         * @return {?}
         */
            function (year, month, date, hours, minutes) {
                /** @type {?} */
                var result = new Date(year, month, date, hours, minutes);
                // We need to correct for the fact that JS native Date treats years in range [0, 99] as
                // abbreviations for 19xx.
                if (year >= 0 && year < 100) {
                    result.setFullYear(this.getYear(result) - 1900);
                }
                return result;
            };
        NativeDatetimeAdapter.decorators = [
            { type: core$1.Injectable },
        ];
        NativeDatetimeAdapter.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [material.MAT_DATE_LOCALE,] }] },
                { type: material.DateAdapter }
            ];
        };
        return NativeDatetimeAdapter;
    }(DatetimeAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // tslint:disable max-classes-per-file
    var NativeDatetimeModule = /** @class */ (function () {
        // tslint:disable max-classes-per-file
        function NativeDatetimeModule() {
        }
        NativeDatetimeModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [material.NativeDateModule],
                        providers: [
                            {
                                provide: DatetimeAdapter,
                                useClass: NativeDatetimeAdapter
                            }
                        ]
                    },] },
        ];
        return NativeDatetimeModule;
    }());
    var ɵ0$1 = MAT_NATIVE_DATETIME_FORMATS;
    var MatNativeDatetimeModule = /** @class */ (function () {
        function MatNativeDatetimeModule() {
        }
        MatNativeDatetimeModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            NativeDatetimeModule,
                            material.MatNativeDateModule
                        ],
                        providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0$1 }]
                    },] },
        ];
        return MatNativeDatetimeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * This animation fades in the background color and text content of the
     * select's options. It is time delayed to occur 100ms after the overlay
     * panel has transformed in.
     * @type {?}
     */
    var fadeInContent = animations.trigger("fadeInContent", [
        animations.state("showing", animations.style({ opacity: 1 })),
        animations.transition("void => showing", [
            animations.style({ opacity: 0 }),
            animations.animate("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
        ])
    ]);
    /** @type {?} */
    var slideCalendar = animations.trigger("slideCalendar", [
        animations.transition("* => left", [
            animations.animate(180, animations.keyframes([
                animations.style({ transform: "translateX(100%)", offset: 0.5 }),
                animations.style({ transform: "translateX(-100%)", offset: 0.51 }),
                animations.style({ transform: "translateX(0)", offset: 1 })
            ]))
        ]),
        animations.transition("* => right", [
            animations.animate(180, animations.keyframes([
                animations.style({ transform: "translateX(-100%)", offset: 0.5 }),
                animations.style({ transform: "translateX(100%)", offset: 0.51 }),
                animations.style({ transform: "translateX(0)", offset: 1 })
            ]))
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * \@docs-private
     * @param {?} provider
     * @return {?}
     */
    function createMissingDateImplError(provider) {
        return Error("MatDatetimepicker: No provider found for " + provider + ". You must import one of the following " +
            "modules at your application root: MatNativeDatetimeModule, MatMomentDatetimeModule, or provide a " +
            "custom implementation.");
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var MatDatetimepickerFilterType = {
        DATE: 0, HOUR: 1, MINUTE: 2,
    };
    MatDatetimepickerFilterType[MatDatetimepickerFilterType.DATE] = 'DATE';
    MatDatetimepickerFilterType[MatDatetimepickerFilterType.HOUR] = 'HOUR';
    MatDatetimepickerFilterType[MatDatetimepickerFilterType.MINUTE] = 'MINUTE';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A calendar that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerCalendar = /** @class */ (function () {
        function MatDatetimepickerCalendar(_elementRef, _intl, _ngZone, _adapter, _dateFormats, changeDetectorRef) {
            var _this = this;
            this._elementRef = _elementRef;
            this._intl = _intl;
            this._ngZone = _ngZone;
            this._adapter = _adapter;
            this._dateFormats = _dateFormats;
            this._userSelection = new core$1.EventEmitter();
            this.type = "date";
            /** Whether the calendar should be started in month or year view. */
            this.startView = "month";
            this.timeInterval = 1;
            /** Emits when the currently selected date changes. */
            this.selectedChange = new core$1.EventEmitter();
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
            get: /**
             * A date representing the period (month or year) to start the calendar in.
             * @return {?}
             */ function () {
                return this._startAt;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._startAt = this._adapter.getValidDateOrNull(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "selected", {
            /** The currently selected date. */
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._selected = this._adapter.getValidDateOrNull(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "minDate", {
            /** The minimum selectable date. */
            get: /**
             * The minimum selectable date.
             * @return {?}
             */ function () {
                return this._minDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._minDate = this._adapter.getValidDateOrNull(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "maxDate", {
            /** The maximum selectable date. */
            get: /**
             * The maximum selectable date.
             * @return {?}
             */ function () {
                return this._maxDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            get: /**
             * The current active date. This determines which time period is shown and which date is
             * highlighted when using keyboard navigation.
             * @return {?}
             */ function () {
                return this._clampedActiveDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
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
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._userSelected = /**
         * @return {?}
         */
            function () {
                this._userSelection.emit();
            };
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_yearLabel", {
            /** The label for the current calendar view. */
            get: /**
             * The label for the current calendar view.
             * @return {?}
             */ function () {
                return this._adapter.getYearName(this._activeDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_monthYearLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentView === "month" ? this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)] :
                    this._adapter.getYearName(this._activeDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_dateLabel", {
            get: /**
             * @return {?}
             */ function () {
                if (this.type === "month") {
                    return this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)];
                }
                return this._adapter.format(this._activeDate, this._dateFormats.display.popupHeaderDateLabel);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_hoursLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._2digit(this._adapter.getHour(this._activeDate));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_minutesLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._2digit(this._adapter.getMinute(this._activeDate));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
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
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._intlChanges.unsubscribe();
            };
        /** Handles date selection in the month view. */
        /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._dateSelected = /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this._activeDate = date;
                if (this.type !== "date") {
                    this._currentView = "clock";
                }
            };
        /** Handles month selection in the year view. */
        /**
         * Handles month selection in the year view.
         * @param {?} month
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._monthSelected = /**
         * Handles month selection in the year view.
         * @param {?} month
         * @return {?}
         */
            function (month) {
                this._activeDate = month;
                if (this.type !== 'month') {
                    this._currentView = "month";
                    this._clockView = "hour";
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._timeSelected = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this._activeDate = date;
                this._clockView = "minute";
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleConfirmButton = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectedChange.emit(this._activeDate);
                this._userSelected();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCancelButton = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // Close dialog (datetimepicker.close())
                this._userSelection.emit();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._onActiveDateChange = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this._activeDate = date;
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._yearClicked = /**
         * @return {?}
         */
            function () {
                this._currentView = "year";
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._dateClicked = /**
         * @return {?}
         */
            function () {
                if (this.type !== 'month') {
                    this._currentView = "month";
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._hoursClicked = /**
         * @return {?}
         */
            function () {
                this._currentView = "clock";
                this._clockView = "hour";
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._minutesClicked = /**
         * @return {?}
         */
            function () {
                this._currentView = "clock";
                this._clockView = "minute";
            };
        /** Handles user clicks on the previous button. */
        /**
         * Handles user clicks on the previous button.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._previousClicked = /**
         * Handles user clicks on the previous button.
         * @return {?}
         */
            function () {
                this._activeDate = this._currentView === "month" ?
                    this._adapter.addCalendarMonths(this._activeDate, -1) :
                    this._adapter.addCalendarYears(this._activeDate, -1);
            };
        /** Handles user clicks on the next button. */
        /**
         * Handles user clicks on the next button.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._nextClicked = /**
         * Handles user clicks on the next button.
         * @return {?}
         */
            function () {
                this._activeDate = this._currentView === "month" ?
                    this._adapter.addCalendarMonths(this._activeDate, 1) :
                    this._adapter.addCalendarYears(this._activeDate, 1);
            };
        /** Whether the previous period button is enabled. */
        /**
         * Whether the previous period button is enabled.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._previousEnabled = /**
         * Whether the previous period button is enabled.
         * @return {?}
         */
            function () {
                if (!this.minDate) {
                    return true;
                }
                return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
            };
        /** Whether the next period button is enabled. */
        /**
         * Whether the next period button is enabled.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._nextEnabled = /**
         * Whether the next period button is enabled.
         * @return {?}
         */
            function () {
                return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
            };
        /** Handles keydown events on the calendar body. */
        /**
         * Handles keydown events on the calendar body.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydown = /**
         * Handles keydown events on the calendar body.
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._focusActiveCell = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._ngZone.runOutsideAngular(function () {
                    _this._ngZone.onStable.asObservable().pipe(operators.first()).subscribe(function () {
                        _this._elementRef.nativeElement.focus();
                    });
                });
            };
        /** Whether the two dates represent the same view in the current view mode (month or year). */
        /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._isSameView = /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
            function (date1, date2) {
                return this._currentView === "month" ?
                    this._adapter.getYear(date1) == this._adapter.getYear(date2) &&
                        this._adapter.getMonth(date1) == this._adapter.getMonth(date2) :
                    this._adapter.getYear(date1) == this._adapter.getYear(date2);
            };
        /** Handles keydown events on the calendar body when calendar is in month view. */
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInMonthView = /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.LEFT_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, -1);
                        break;
                    case keycodes.RIGHT_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1);
                        break;
                    case keycodes.UP_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, -7);
                        break;
                    case keycodes.DOWN_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 7);
                        break;
                    case keycodes.HOME:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1 - this._adapter.getDate(this._activeDate));
                        break;
                    case keycodes.END:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, (this._adapter.getNumDaysInMonth(this._activeDate) -
                            this._adapter.getDate(this._activeDate)));
                        break;
                    case keycodes.PAGE_UP:
                        this._activeDate = event.altKey ?
                            this._adapter.addCalendarYears(this._activeDate, -1) :
                            this._adapter.addCalendarMonths(this._activeDate, -1);
                        break;
                    case keycodes.PAGE_DOWN:
                        this._activeDate = event.altKey ?
                            this._adapter.addCalendarYears(this._activeDate, 1) :
                            this._adapter.addCalendarMonths(this._activeDate, 1);
                        break;
                    case keycodes.ENTER:
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
        /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInYearView = /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.LEFT_ARROW:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -1);
                        break;
                    case keycodes.RIGHT_ARROW:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 1);
                        break;
                    case keycodes.UP_ARROW:
                        this._activeDate = this._prevMonthInSameCol(this._activeDate);
                        break;
                    case keycodes.DOWN_ARROW:
                        this._activeDate = this._nextMonthInSameCol(this._activeDate);
                        break;
                    case keycodes.HOME:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -this._adapter.getMonth(this._activeDate));
                        break;
                    case keycodes.END:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 11 - this._adapter.getMonth(this._activeDate));
                        break;
                    case keycodes.PAGE_UP:
                        this._activeDate =
                            this._adapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                        break;
                    case keycodes.PAGE_DOWN:
                        this._activeDate =
                            this._adapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                        break;
                    case keycodes.ENTER:
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
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInClockView = /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.UP_ARROW:
                        this._activeDate = this._clockView == "hour" ?
                            this._adapter.addCalendarHours(this._activeDate, 1) :
                            this._adapter.addCalendarMinutes(this._activeDate, 1);
                        break;
                    case keycodes.DOWN_ARROW:
                        this._activeDate = this._clockView == "hour" ?
                            this._adapter.addCalendarHours(this._activeDate, -1) :
                            this._adapter.addCalendarMinutes(this._activeDate, -1);
                        break;
                    case keycodes.ENTER:
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
        /**
         * Determine the date for the month that comes before the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._prevMonthInSameCol = /**
         * Determine the date for the month that comes before the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                // Determine how many months to jump forward given that there are 2 empty slots at the beginning
                // of each year.
                /** @type {?} */
                var increment = this._adapter.getMonth(date) <= 4 ? -5 :
                    (this._adapter.getMonth(date) >= 7 ? -7 : -12);
                return this._adapter.addCalendarMonths(date, increment);
            };
        /**
         * Determine the date for the month that comes after the given month in the same column in the
         * calendar table.
         */
        /**
         * Determine the date for the month that comes after the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._nextMonthInSameCol = /**
         * Determine the date for the month that comes after the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                // Determine how many months to jump forward given that there are 2 empty slots at the beginning
                // of each year.
                /** @type {?} */
                var increment = this._adapter.getMonth(date) <= 4 ? 7 :
                    (this._adapter.getMonth(date) >= 7 ? 5 : 12);
                return this._adapter.addCalendarMonths(date, increment);
            };
        /**
         * @param {?} direction
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype.calendarState = /**
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                this._calendarState = direction;
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._calendarStateDone = /**
         * @return {?}
         */
            function () {
                this._calendarState = "";
            };
        /**
         * @param {?} n
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._2digit = /**
         * @param {?} n
         * @return {?}
         */
            function (n) {
                return ("00" + n).slice(-2);
            };
        MatDatetimepickerCalendar.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-calendar",
                        template: "<div class=\"mat-datetimepicker-calendar-header\">\n  <div *ngIf=\"type !== 'time'\"\n       class=\"mat-datetimepicker-calendar-header-year\"\n       [class.active]=\"_currentView == 'year'\"\n       (click)=\"_yearClicked()\">{{ _yearLabel }}</div>\n  <div class=\"mat-datetimepicker-calendar-header-date-time\">\n    <span *ngIf=\"type !== 'time'\"\n          class=\"mat-datetimepicker-calendar-header-date\"\n          [class.active]=\"_currentView == 'month'\"\n          [class.not-clickable]=\"type === 'month'\"\n          (click)=\"_dateClicked()\">{{ _dateLabel }}</span>\n    <span *ngIf=\"type.endsWith('time')\"\n          class=\"mat-datetimepicker-calendar-header-time\"\n          [class.active]=\"_currentView == 'clock'\">\n      <span class=\"mat-datetimepicker-calendar-header-hours\"\n            [class.active]=\"_clockView == 'hour'\"\n            (click)=\"_hoursClicked()\">{{ _hoursLabel }}</span>:<span class=\"mat-datetimepicker-calendar-header-minutes\"\n                                                                     [class.active]=\"_clockView == 'minute'\"\n                                                                     (click)=\"_minutesClicked()\">{{ _minutesLabel }}</span>\n    </span>\n  </div>\n</div>\n<div class=\"mat-datetimepicker-calendar-content\" [ngSwitch]=\"_currentView\">\n  <div class=\"mat-month-content\" *ngIf=\"_currentView === 'month' || _currentView === 'year'\">\n    <div class=\"mat-datetimepicker-calendar-controls\">\n      <div class=\"mat-datetimepicker-calendar-previous-button\"\n           [class.disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\"\n           aria-label=\"Previous month\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>\n        </svg>\n      </div>\n      <div class=\"mat-datetimepicker-calendar-period-button\" [@slideCalendar]=\"_calendarState\" (@slideCalendar.done)=\"_calendarStateDone()\">\n        <strong>{{ _monthYearLabel }}</strong>\n      </div>\n      <div class=\"mat-datetimepicker-calendar-next-button\"\n           [class.disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\"\n           aria-label=\"Next month\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n  <mat-datetimepicker-month-view *ngSwitchCase=\"'month'\"\n                  [activeDate]=\"_activeDate\"\n                  [type]=\"type\"\n                  [selected]=\"_activeDate\"\n                  [dateFilter]=\"_dateFilterForViews\"\n                  (selectedChange)=\"_dateSelected($event)\"\n                  (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-month-view>\n  <mat-datetimepicker-year-view *ngSwitchCase=\"'year'\"\n                 [activeDate]=\"_activeDate\"\n                 [type]=\"type\"\n                 [selected]=\"_activeDate\"\n                 [dateFilter]=\"_dateFilterForViews\"\n                 (selectedChange)=\"_monthSelected($event)\"\n                 (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-year-view>\n  <mat-datetimepicker-clock *ngSwitchDefault\n             [startView]=\"_clockView\"\n             [interval]=\"timeInterval\"\n             [minDate]=\"minDate\"\n             [maxDate]=\"maxDate\"\n             [dateFilter]=\"dateFilter\"\n             [selected]=\"_activeDate\"\n             (activeDateChange)=\"_onActiveDateChange($event)\"\n             (selectedChange)=\"_timeSelected($event)\"\n             (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-clock>\n  <div class=\"mat-datetimepicker-calendar-footer\">\n    <button mat-button color=\"primary\" (click)=\"_handleCancelButton($event)\">{{ cancelButtonLabel }}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"_handleConfirmButton($event)\">{{ confirmButtonLabel }}</button>\n  </div>\n</div>\n",
                        styles: [".mat-datetimepicker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;outline:0}.mat-datetimepicker-calendar[mode=landscape]{display:flex}.mat-datetimepicker-calendar-header{padding:16px;font-size:14px;color:#fff;box-sizing:border-box}[mode=landscape] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar-header-date-time,.mat-datetimepicker-calendar-header-year{width:100%;font-weight:500;white-space:nowrap}.mat-datetimepicker-calendar-header-date-time{font-size:30px;line-height:34px}[mode=landscape] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar-header-date:not(.active),.mat-datetimepicker-calendar-header-hours:not(.active),.mat-datetimepicker-calendar-header-minutes:not(.active),.mat-datetimepicker-calendar-header-year:not(.active){cursor:pointer;opacity:.6}.mat-datetimepicker-calendar-header-date.not-clickable,.mat-datetimepicker-calendar-header-hours.not-clickable,.mat-datetimepicker-calendar-header-minutes.not-clickable,.mat-datetimepicker-calendar-header-year.not-clickable{cursor:initial}.mat-datetimepicker-calendar-header-time{padding-left:8px}.mat-datetimepicker-calendar-header-time:not(.active){opacity:.6}.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-hours,.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-minutes{cursor:pointer;opacity:1}[mode=landscape] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar-content{width:100%;padding:0 8px 8px;outline:0;box-sizing:border-box;overflow:hidden}[mode=landscape] .mat-datetimepicker-calendar-content{padding-top:8px}.mat-datetimepicker-calendar-content>.mat-datetimepicker-calendar-footer{padding:12px;text-align:right}.mat-datetimepicker-calendar-controls{display:flex;justify-content:space-between}.mat-datetimepicker-calendar-period-button{display:inline-block;height:48px;padding:12px;outline:0;border:0;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button,.mat-datetimepicker-calendar-previous-button{display:inline-block;width:48px;height:48px;padding:12px;outline:0;border:0;cursor:pointer;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button.disabled,.mat-datetimepicker-calendar-previous-button.disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-calendar-next-button svg,.mat-datetimepicker-calendar-previous-button svg{fill:currentColor;vertical-align:top}.mat-datetimepicker-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-datetimepicker-calendar-table-header{color:rgba(0,0,0,.38)}.mat-datetimepicker-calendar-table-header th{text-align:center;font-size:11px;padding:0 0 8px}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{display:flex}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-content{padding-top:8px}}"],
                        host: {
                            "[class.mat-datetimepicker-calendar]": "true",
                            "tabindex": "0",
                            "(keydown)": "_handleCalendarBodyKeydown($event)"
                        },
                        animations: [slideCalendar],
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerCalendar.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: material.MatDatepickerIntl },
                { type: core$1.NgZone },
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        MatDatetimepickerCalendar.propDecorators = {
            _userSelection: [{ type: core$1.Output }],
            type: [{ type: core$1.Input }],
            startAt: [{ type: core$1.Input }],
            startView: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }],
            timeInterval: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }],
            confirmButtonLabel: [{ type: core$1.Input }],
            cancelButtonLabel: [{ type: core$1.Input }]
        };
        return MatDatetimepickerCalendar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     */
    var /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     */ MatDatetimepickerCalendarCell = /** @class */ (function () {
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
     * \@docs-private
     */
    var MatDatetimepickerCalendarBody = /** @class */ (function () {
        /**
         * An internal component used to display calendar data in a table.
         * @docs-private
         */
        function MatDatetimepickerCalendarBody() {
            /** The number of columns in the table. */
            this.numCols = 7;
            /** Whether to allow selection of disabled cells. */
            this.allowDisabledSelection = false;
            /** The cell number of the active cell in the table. */
            this.activeCell = 0;
            /** Emits when a new value is selected. */
            this.selectedValueChange = new core$1.EventEmitter();
        }
        /**
         * @param {?} cell
         * @return {?}
         */
        MatDatetimepickerCalendarBody.prototype._cellClicked = /**
         * @param {?} cell
         * @return {?}
         */
            function (cell) {
                if (!this.allowDisabledSelection && !cell.enabled) {
                    return;
                }
                this.selectedValueChange.emit(cell.value);
            };
        Object.defineProperty(MatDatetimepickerCalendarBody.prototype, "_firstRowOffset", {
            /** The number of blank cells to put at the beginning for the first row. */
            get: /**
             * The number of blank cells to put at the beginning for the first row.
             * @return {?}
             */ function () {
                return this.rows && this.rows.length && this.rows[0].length ?
                    this.numCols - this.rows[0].length : 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
        MatDatetimepickerCalendarBody.prototype._isActiveCell = /**
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
            function (rowIndex, colIndex) {
                /** @type {?} */
                var cellNumber = rowIndex * this.numCols + colIndex;
                // Account for the fact that the first row may not have as many cells.
                if (rowIndex) {
                    cellNumber -= this._firstRowOffset;
                }
                return cellNumber === this.activeCell;
            };
        MatDatetimepickerCalendarBody.decorators = [
            { type: core$1.Component, args: [{
                        selector: "[mat-datetimepicker-calendar-body]",
                        template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-datetimepicker-calendar-body-label\" [attr.colspan]=\"numCols\" >{{ label }}</td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-datetimepicker-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\">\n    {{ _firstRowOffset >= labelMinRequiredCells ? label : '' }}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-datetimepicker-calendar-body-cell\"\n      [class.mat-datetimepicker-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-datetimepicker-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      (click)=\"_cellClicked(item)\">\n    <div class=\"mat-datetimepicker-calendar-body-cell-content\"\n         [class.mat-datetimepicker-calendar-body-selected]=\"selectedValue === item.value\"\n         [class.mat-datetimepicker-calendar-body-today]=\"todayValue === item.value\">\n      {{ item.displayValue }}\n    </div>\n  </td>\n</tr>\n",
                        styles: [".mat-datetimepicker-calendar-body{font-size:13px;min-width:224px}.mat-datetimepicker-calendar-body-label{padding:7.14286% 0 7.14286% 7.14286%;height:0;line-height:0;color:rgba(0,0,0,.54);-webkit-transform:translateX(-6px);transform:translateX(-6px);text-align:left}.mat-datetimepicker-calendar-body-cell{position:relative;width:14.28571%;height:0;line-height:0;padding:7.14286% 0;text-align:center;outline:0;cursor:pointer}.mat-datetimepicker-calendar-body-disabled{cursor:default;pointer-events:none}.mat-datetimepicker-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border:1px solid transparent;border-radius:50%}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar:focus .mat-datetimepicker-calendar-body-active>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected),:not(.mat-datetimepicker-calendar-body-disabled):hover>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){background-color:rgba(0,0,0,.12)}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-today:not(.mat-datetimepicker-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .mat-datetimepicker-calendar-body-label{padding:0 7.14286% 0 0;-webkit-transform:translateX(6px);transform:translateX(6px);text-align:right}"],
                        host: {
                            "class": "mat-datetimepicker-calendar-body"
                        },
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerCalendarBody.propDecorators = {
            label: [{ type: core$1.Input }],
            rows: [{ type: core$1.Input }],
            todayValue: [{ type: core$1.Input }],
            selectedValue: [{ type: core$1.Input }],
            labelMinRequiredCells: [{ type: core$1.Input }],
            numCols: [{ type: core$1.Input }],
            allowDisabledSelection: [{ type: core$1.Input }],
            activeCell: [{ type: core$1.Input }],
            selectedValueChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerCalendarBody;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CLOCK_RADIUS = 50;
    /** @type {?} */
    var CLOCK_INNER_RADIUS = 27.5;
    /** @type {?} */
    var CLOCK_OUTER_RADIUS = 41.25;
    /** @type {?} */
    var CLOCK_TICK_RADIUS = 7.0833;
    /**
     * A clock that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerClock = /** @class */ (function () {
        function MatDatetimepickerClock(_element, _adapter) {
            var _this = this;
            this._element = _element;
            this._adapter = _adapter;
            this._userSelection = new core$1.EventEmitter();
            this._timeChanged = false;
            this.interval = 1;
            this.twelvehour = false;
            /** Emits when the currently selected date changes. */
            this.selectedChange = new core$1.EventEmitter();
            this.activeDateChange = new core$1.EventEmitter();
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
            get: /**
             * The date to display in this clock view.
             * @return {?}
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
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
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            get: /**
             * The minimum selectable date.
             * @return {?}
             */ function () {
                return this._minDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "maxDate", {
            /** The maximum selectable date. */
            get: /**
             * The maximum selectable date.
             * @return {?}
             */ function () {
                return this._maxDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "startView", {
            /** Whether the clock should be started in hour or minute view. */
            set: /**
             * Whether the clock should be started in hour or minute view.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._hourView = value != "minute";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "_hand", {
            get: /**
             * @return {?}
             */ function () {
                this._selectedHour = this._adapter.getHour(this.activeDate);
                this._selectedMinute = this._adapter.getMinute(this.activeDate);
                /** @type {?} */
                var deg = 0;
                /** @type {?} */
                var radius = CLOCK_OUTER_RADIUS;
                if (this._hourView) {
                    /** @type {?} */
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
        /**
         * @return {?}
         */
        MatDatetimepickerClock.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.activeDate = this._activeDate || this._adapter.today();
                this._init();
            };
        /** Handles mousedown events on the clock body. */
        /**
         * Handles mousedown events on the clock body.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerClock.prototype._handleMousedown = /**
         * Handles mousedown events on the clock body.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this._timeChanged = false;
                this.setTime(event);
                document.addEventListener("mousemove", this.mouseMoveListener);
                document.addEventListener("touchmove", this.mouseMoveListener);
                document.addEventListener("mouseup", this.mouseUpListener);
                document.addEventListener("touchend", this.mouseUpListener);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerClock.prototype._handleMousemove = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                this.setTime(event);
            };
        /**
         * @return {?}
         */
        MatDatetimepickerClock.prototype._handleMouseup = /**
         * @return {?}
         */
            function () {
                document.removeEventListener("mousemove", this.mouseMoveListener);
                document.removeEventListener("touchmove", this.mouseMoveListener);
                document.removeEventListener("mouseup", this.mouseUpListener);
                document.removeEventListener("touchend", this.mouseUpListener);
                if (this._timeChanged) {
                    this.selectedChange.emit(this.activeDate);
                }
            };
        /** Initializes this clock view. */
        /**
         * Initializes this clock view.
         * @return {?}
         */
        MatDatetimepickerClock.prototype._init = /**
         * Initializes this clock view.
         * @return {?}
         */
            function () {
                this._hours.length = 0;
                this._minutes.length = 0;
                /** @type {?} */
                var hourNames = this._adapter.getHourNames();
                /** @type {?} */
                var minuteNames = this._adapter.getMinuteNames();
                if (this.twelvehour) {
                    for (var i = 1; i < (hourNames.length / 2) + 1; i++) {
                        /** @type {?} */
                        var radian = i / 6 * Math.PI;
                        /** @type {?} */
                        var radius = CLOCK_OUTER_RADIUS;
                        /** @type {?} */
                        var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i + 1, 0);
                        /** @type {?} */
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
                        /** @type {?} */
                        var radian = i / 6 * Math.PI;
                        /** @type {?} */
                        var outer = i > 0 && i < 13;
                        /** @type {?} */
                        var radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                        /** @type {?} */
                        var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i, 0);
                        /** @type {?} */
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
                    /** @type {?} */
                    var radian = i / 30 * Math.PI;
                    /** @type {?} */
                    var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), i);
                    /** @type {?} */
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
        /**
         * Set Time
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerClock.prototype.setTime = /**
         * Set Time
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var trigger = this._element.nativeElement;
                /** @type {?} */
                var triggerRect = trigger.getBoundingClientRect();
                /** @type {?} */
                var width = trigger.offsetWidth;
                /** @type {?} */
                var height = trigger.offsetHeight;
                /** @type {?} */
                var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
                /** @type {?} */
                var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
                /** @type {?} */
                var x = (width / 2) - (pageX - triggerRect.left - window.pageXOffset);
                /** @type {?} */
                var y = (height / 2) - (pageY - triggerRect.top - window.pageYOffset);
                /** @type {?} */
                var radian = Math.atan2(-x, y);
                /** @type {?} */
                var unit = Math.PI / (this._hourView ? 6 : (this.interval ? (30 / this.interval) : 30));
                /** @type {?} */
                var z = Math.sqrt(x * x + y * y);
                /** @type {?} */
                var outer = this._hourView && z > ((width * (CLOCK_OUTER_RADIUS / 100)) +
                    (width * (CLOCK_INNER_RADIUS / 100))) / 2;
                if (radian < 0) {
                    radian = Math.PI * 2 + radian;
                }
                /** @type {?} */
                var value = Math.round(radian / unit);
                /** @type {?} */
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
                /** @type {?} */
                var clamped = this._adapter.clampDate(date, this.minDate, this.maxDate);
                if (date === clamped) {
                    this._timeChanged = true;
                    this.activeDate = clamped;
                    this.activeDateChange.emit(this.activeDate);
                }
            };
        MatDatetimepickerClock.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-clock",
                        template: "<div class=\"mat-datetimepicker-clock\">\n  <div class=\"mat-datetimepicker-clock-center\"></div>\n  <div class=\"mat-datetimepicker-clock-hand\" [ngStyle]=\"_hand\"></div>\n  <div class=\"mat-datetimepicker-clock-hours\" [class.active]=\"_hourView\">\n    <div *ngFor=\"let item of _hours\"\n         class=\"mat-datetimepicker-clock-cell\"\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedHour == item.value\"\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\n         [style.top]=\"item.top+'%'\"\n         [style.left]=\"item.left+'%'\"\n         [style.fontSize]=\"item.fontSize\">{{ item.displayValue }}</div>\n  </div>\n  <div class=\"mat-datetimepicker-clock-minutes\" [class.active]=\"!_hourView\">\n    <div *ngFor=\"let item of _minutes\"\n         class=\"mat-datetimepicker-clock-cell\"\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedMinute == item.value\"\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\n         [style.top]=\"item.top+'%'\"\n         [style.left]=\"item.left+'%'\">{{ item.displayValue }}</div>\n  </div>\n</div>\n",
                        styles: [":host{position:relative;display:block;min-width:224px;margin:8px;font-size:14px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mat-datetimepicker-clock{position:relative;width:100%;height:0;padding-top:100%;background-color:#e0e0e0;border-radius:50%}.mat-datetimepicker-clock-center{position:absolute;top:50%;left:50%;width:2%;height:2%;margin:-1%;border-radius:50%}.mat-datetimepicker-clock-hand{position:absolute;top:0;right:0;bottom:0;left:0;width:1px;margin:0 auto;-webkit-transform-origin:bottom;transform-origin:bottom}.mat-datetimepicker-clock-hand::before{content:'';position:absolute;top:-4px;left:-4px;width:8px;height:8px;border-radius:50%}.mat-datetimepicker-clock-hours,.mat-datetimepicker-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:350ms;-webkit-transform:scale(1.2);transform:scale(1.2)}.mat-datetimepicker-clock-hours.active,.mat-datetimepicker-clock-minutes.active{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1)}.mat-datetimepicker-clock-minutes{-webkit-transform:scale(.8);transform:scale(.8)}.mat-datetimepicker-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;color:rgba(0,0,0,.87);justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer}.mat-datetimepicker-clock-cell:not(.mat-datetimepicker-clock-cell-selected):not(.mat-datetimepicker-clock-cell-disabled):hover{background-color:rgba(0,0,0,.1)}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected{color:#fff}"],
                        host: {
                            "role": "clock",
                            "(mousedown)": "_handleMousedown($event)"
                        }
                    },] },
        ];
        MatDatetimepickerClock.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: DatetimeAdapter }
            ];
        };
        MatDatetimepickerClock.propDecorators = {
            _userSelection: [{ type: core$1.Output }],
            activeDate: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }],
            startView: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            interval: [{ type: core$1.Input }],
            twelvehour: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }],
            activeDateChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerClock;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
                if (event.keyCode === keycodes.ESCAPE) {
                    this.datetimepicker.close();
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
        MatDatetimepickerContent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-content",
                        template: "<mat-datetimepicker-calendar class=\"mat-typography\" cdkTrapFocus\n              [id]=\"datetimepicker.id\"\n              [attr.mode]=\"datetimepicker.mode\"\n              [startView]=\"datetimepicker.startView\"\n              [type]=\"datetimepicker.type\"\n              [timeInterval]=\"datetimepicker.timeInterval\"\n              [minDate]=\"datetimepicker._minDate\"\n              [maxDate]=\"datetimepicker._maxDate\"\n              [dateFilter]=\"datetimepicker._dateFilter\"\n              [selected]=\"datetimepicker._selected\"\n              [startAt]=\"datetimepicker.startAt\"\n              [confirmButtonLabel]=\"datetimepicker.confirmButtonLabel\"\n              [cancelButtonLabel]=\"datetimepicker.cancelButtonLabel\"\n              (selectedChange)=\"datetimepicker._select($event)\"\n              (_userSelection)=\"datetimepicker.close()\">\n</mat-datetimepicker-calendar>\n",
                        styles: [".mat-datetimepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;background-color:#fff;border-radius:2px;overflow:hidden}.mat-datetimepicker-calendar{width:296px;height:auto}.mat-datetimepicker-calendar[mode=landscape]{width:446px;height:auto}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{width:446px;height:auto}}.mat-datetimepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.mat-datetimepicker-dialog .mat-dialog-container{padding:0}"],
                        host: {
                            "class": "mat-datetimepicker-content",
                            "[class.mat-datetimepicker-content-touch]": "datetimepicker?.touchUi",
                            "(keydown)": "_handleKeydown($event)"
                        },
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerContent.propDecorators = {
            _calendar: [{ type: core$1.ViewChild, args: [MatDatetimepickerCalendar,] }]
        };
        return MatDatetimepickerContent;
    }());
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
            this.selectedChanged = new core$1.EventEmitter();
            this.confirmButtonLabel = 'Confirm';
            this.cancelButtonLabel = 'Cancel';
            /** Emits when the datepicker has been opened. */
            this.openedStream = new core$1.EventEmitter();
            /** Emits when the datepicker has been closed. */
            this.closedStream = new core$1.EventEmitter();
            /** Whether the calendar is open. */
            this.opened = false;
            /** The id for the datepicker calendar. */
            this.id = "mat-datetimepicker-" + datetimepickerUid++;
            this._validSelected = null;
            /** The element that was focused before the datepicker was opened. */
            this._focusedElementBeforeOpen = null;
            this._inputSubscription = rxjs.Subscription.EMPTY;
            /** Emits when the datepicker is disabled. */
            this._disabledChange = new rxjs.Subject();
            if (!this._dateAdapter) {
                throw createMissingDateImplError("DateAdapter");
            }
        }
        Object.defineProperty(MatDatetimepicker.prototype, "startAt", {
            /** The date to open the calendar to initially. */
            get: /**
             * The date to open the calendar to initially.
             * @return {?}
             */ function () {
                // If an explicit startAt is set we start there, otherwise we start at whatever the currently
                // selected value is.
                return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
            },
            set: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                this._startAt = this._dateAdapter.getValidDateOrNull(date);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "openOnFocus", {
            get: /**
             * @return {?}
             */ function () { return this._openOnFocus; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._openOnFocus = coercion.coerceBooleanProperty(value); },
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
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._touchUi;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._touchUi = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "disabled", {
            /** Whether the datepicker pop-up should be disabled. */
            get: /**
             * Whether the datepicker pop-up should be disabled.
             * @return {?}
             */ function () {
                return this._disabled === undefined && this._datepickerInput ?
                    this._datepickerInput.disabled : !!this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var newValue = coercion.coerceBooleanProperty(value);
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
             */ function () {
                return this._validSelected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
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
             */ function () {
                return this._datepickerInput && this._datepickerInput.max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "_dateFilter", {
            get: /**
             * @return {?}
             */ function () {
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
                    this._calendarPortal = new portal.ComponentPortal(MatDatetimepickerContent, this._viewContainerRef);
                }
                if (!this._popupRef) {
                    this._createPopup();
                }
                if (!this._popupRef.hasAttached()) {
                    /** @type {?} */
                    var componentRef = this._popupRef.attach(this._calendarPortal);
                    componentRef.instance.datetimepicker = this;
                    // Update the position once the calendar has rendered.
                    this._ngZone.onStable.asObservable().pipe(operators.first()).subscribe(function () {
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
                var overlayConfig = new overlay.OverlayConfig({
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
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker",
                        exportAs: "matDatetimepicker",
                        template: "",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        preserveWhitespaces: false
                    },] },
        ];
        MatDatetimepicker.ctorParameters = function () {
            return [
                { type: dialog.MatDialog },
                { type: overlay.Overlay },
                { type: core$1.NgZone },
                { type: core$1.ViewContainerRef },
                { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: bidi.Directionality, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        MatDatetimepicker.propDecorators = {
            startAt: [{ type: core$1.Input }],
            startView: [{ type: core$1.Input }],
            mode: [{ type: core$1.Input }],
            timeInterval: [{ type: core$1.Input }],
            openOnFocus: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            touchUi: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            selectedChanged: [{ type: core$1.Output }],
            panelClass: [{ type: core$1.Input }],
            confirmButtonLabel: [{ type: core$1.Input }],
            cancelButtonLabel: [{ type: core$1.Input }],
            openedStream: [{ type: core$1.Output, args: ["opened",] }],
            closedStream: [{ type: core$1.Output, args: ["closed",] }]
        };
        return MatDatetimepicker;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // tslint:disable no-use-before-declare
    /** @type {?} */
    var MAT_DATETIMEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core$1.forwardRef(function () { return MatDatetimepickerInput; }),
        multi: true
    };
    /** @type {?} */
    var MAT_DATETIMEPICKER_VALIDATORS = {
        provide: forms.NG_VALIDATORS,
        useExisting: core$1.forwardRef(function () { return MatDatetimepickerInput; }),
        multi: true
    };
    /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
     * @template D
     */
    var /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
     * @template D
     */ MatDatetimepickerInputEvent = /** @class */ (function () {
        function MatDatetimepickerInputEvent(target, targetElement) {
            this.target = target;
            this.targetElement = targetElement;
            this.value = this.target.value;
        }
        return MatDatetimepickerInputEvent;
    }());
    /**
     * Directive used to connect an input to a MatDatepicker.
     * @template D
     */
    var MatDatetimepickerInput = /** @class */ (function () {
        function MatDatetimepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
            var _this = this;
            this._elementRef = _elementRef;
            this._dateAdapter = _dateAdapter;
            this._dateFormats = _dateFormats;
            this._formField = _formField;
            /** Emits when a `change` event is fired on this `<input>`. */
            this.dateChange = new core$1.EventEmitter();
            /** Emits when an `input` event is fired on this `<input>`. */
            this.dateInput = new core$1.EventEmitter();
            /** Emits when the value changes (either due to user input or programmatic change). */
            this._valueChange = new core$1.EventEmitter();
            /** Emits when the disabled state has changed */
            this._disabledChange = new core$1.EventEmitter();
            this._onTouched = function () {
            };
            this._cvaOnChange = function () {
            };
            this._validatorOnChange = function () {
            };
            this._datepickerSubscription = rxjs.Subscription.EMPTY;
            this._localeSubscription = rxjs.Subscription.EMPTY;
            /** The form control validator for whether the input parses. */
            this._parseValidator = function () {
                return _this._lastValueValid ?
                    null : { "matDatepickerParse": { "text": _this._elementRef.nativeElement.value } };
            };
            /** The form control validator for the min date. */
            this._minValidator = function (control) {
                /** @type {?} */
                var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return (!_this.min || !controlValue ||
                    _this._dateAdapter.compareDatetime(_this.min, controlValue) <= 0) ?
                    null : { "matDatepickerMin": { "min": _this.min, "actual": controlValue } };
            };
            /** The form control validator for the max date. */
            this._maxValidator = function (control) {
                /** @type {?} */
                var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return (!_this.max || !controlValue ||
                    _this._dateAdapter.compareDatetime(_this.max, controlValue) >= 0) ?
                    null : { "matDatepickerMax": { "max": _this.max, "actual": controlValue } };
            };
            /** The form control validator for the date filter. */
            this._filterValidator = function (control) {
                /** @type {?} */
                var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue, MatDatetimepickerFilterType.DATE) ?
                    null : { "matDatepickerFilter": true };
            };
            /** The combined form control validator for this input. */
            this._validator = forms.Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
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
        Object.defineProperty(MatDatetimepickerInput.prototype, "matDatetimepicker", {
            /** The datepicker that this input is associated with. */
            set: /**
             * The datepicker that this input is associated with.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.registerDatepicker(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerDatepicker = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value) {
                    this._datepicker = value;
                    this._datepicker._registerInput(this);
                }
            };
        Object.defineProperty(MatDatetimepickerInput.prototype, "matDatepickerFilter", {
            set: /**
             * @param {?} filter
             * @return {?}
             */ function (filter) {
                this._dateFilter = filter;
                this._validatorOnChange();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerInput.prototype, "value", {
            /** The value of the input. */
            get: /**
             * The value of the input.
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var _this = this;
                value = this._dateAdapter.deserialize(value);
                this._lastValueValid = !value || this._dateAdapter.isValid(value);
                value = this._dateAdapter.getValidDateOrNull(value);
                /** @type {?} */
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
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.getDisplayFormat = /**
         * @return {?}
         */
            function () {
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
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.getParseFormat = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
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
            get: /**
             * The minimum valid date.
             * @return {?}
             */ function () {
                return this._min;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
                this._validatorOnChange();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerInput.prototype, "max", {
            /** The maximum valid date. */
            get: /**
             * The maximum valid date.
             * @return {?}
             */ function () {
                return this._max;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
                this._validatorOnChange();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerInput.prototype, "disabled", {
            /** Whether the datepicker-input is disabled. */
            get: /**
             * Whether the datepicker-input is disabled.
             * @return {?}
             */ function () {
                return !!this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var newValue = coercion.coerceBooleanProperty(value);
                if (this._disabled !== newValue) {
                    this._disabled = newValue;
                    this._disabledChange.emit(newValue);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
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
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._datepickerSubscription.unsubscribe();
                this._localeSubscription.unsubscribe();
                this._valueChange.complete();
                this._disabledChange.complete();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._validatorOnChange = fn;
            };
        /**
         * @param {?} c
         * @return {?}
         */
        MatDatetimepickerInput.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                return this._validator ? this._validator(c) : null;
            };
        /**
         * Gets the element that the datepicker popup should be connected to.
         * @return The element to connect the popup to.
         */
        /**
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */
        MatDatetimepickerInput.prototype.getPopupConnectionElementRef = /**
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */
            function () {
                return this._formField ? this._formField.underlineRef : this._elementRef;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype.writeValue =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.value = value;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} fn
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerOnChange =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this._cvaOnChange = fn;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} fn
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerOnTouched =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this._onTouched = fn;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} disabled
         * @return {?}
         */
        MatDatetimepickerInput.prototype.setDisabledState =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} disabled
             * @return {?}
             */
            function (disabled) {
                this.disabled = disabled;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onKeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.altKey && event.keyCode === keycodes.DOWN_ARROW) {
                    this._datepicker.open();
                    event.preventDefault();
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var date = this._dateAdapter.parse(value, this.getParseFormat());
                this._lastValueValid = !date || this._dateAdapter.isValid(date);
                date = this._dateAdapter.getValidDateOrNull(date);
                this._value = date;
                this._cvaOnChange(date);
                this._valueChange.emit(date);
                this.dateInput.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
            };
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onChange = /**
         * @return {?}
         */
            function () {
                this.dateChange.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
            };
        /** Handles blur events on the input. */
        /**
         * Handles blur events on the input.
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onBlur = /**
         * Handles blur events on the input.
         * @return {?}
         */
            function () {
                // Reformat the input only if we have a valid value.
                if (this.value) {
                    this._formatValue(this.value);
                }
                this._onTouched();
            };
        /** Formats a value and sets it on the input element. */
        /**
         * Formats a value and sets it on the input element.
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype._formatValue = /**
         * Formats a value and sets it on the input element.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._elementRef.nativeElement.value =
                    value ? this._dateAdapter.format(value, this.getDisplayFormat()) : "";
            };
        MatDatetimepickerInput.decorators = [
            { type: core$1.Directive, args: [{
                        selector: "input[matDatetimepicker]",
                        providers: [
                            MAT_DATETIMEPICKER_VALUE_ACCESSOR,
                            MAT_DATETIMEPICKER_VALIDATORS,
                            { provide: material.MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatetimepickerInput },
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
                    },] },
        ];
        MatDatetimepickerInput.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] },
                { type: formField.MatFormField, decorators: [{ type: core$1.Optional }] }
            ];
        };
        MatDatetimepickerInput.propDecorators = {
            matDatetimepicker: [{ type: core$1.Input }],
            matDatepickerFilter: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            min: [{ type: core$1.Input }],
            max: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            dateChange: [{ type: core$1.Output }],
            dateInput: [{ type: core$1.Output }]
        };
        return MatDatetimepickerInput;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template D
     */
    var MatDatetimepickerToggle = /** @class */ (function () {
        function MatDatetimepickerToggle(_intl, _changeDetectorRef) {
            this._intl = _intl;
            this._changeDetectorRef = _changeDetectorRef;
            this._stateChanges = rxjs.Subscription.EMPTY;
        }
        Object.defineProperty(MatDatetimepickerToggle.prototype, "disabled", {
            /** Whether the toggle button is disabled. */
            get: /**
             * Whether the toggle button is disabled.
             * @return {?}
             */ function () {
                return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        MatDatetimepickerToggle.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.datepicker) {
                    this._watchStateChanges();
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerToggle.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._stateChanges.unsubscribe();
            };
        /**
         * @return {?}
         */
        MatDatetimepickerToggle.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._watchStateChanges();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerToggle.prototype._open = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.datetimepicker && !this.disabled) {
                    this.datetimepicker.open();
                    event.stopPropagation();
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerToggle.prototype._watchStateChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var datepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : rxjs.of();
                /** @type {?} */
                var inputDisabled = this.datetimepicker && this.datetimepicker._datepickerInput ?
                    this.datetimepicker._datepickerInput._disabledChange : rxjs.of();
                this._stateChanges.unsubscribe();
                this._stateChanges = rxjs.merge(this._intl.changes, datepickerDisabled, inputDisabled)
                    .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
            };
        MatDatetimepickerToggle.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-toggle",
                        template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\"\n        [disabled]=\"disabled\" (click)=\"_open($event)\">\n  <mat-icon [ngSwitch]=\"datetimepicker.type\">\n    <svg *ngSwitchCase=\"'time'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n            style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z\"></path>\n    </svg>\n    <svg *ngSwitchCase=\"'datetime'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n            style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z\"></path>\n    </svg>\n    <svg *ngSwitchDefault viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n        style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n    </svg>\n  </mat-icon>\n</button>\n",
                        host: {
                            "class": "mat-datetimepicker-toggle"
                        },
                        exportAs: "matDatetimepickerToggle",
                        encapsulation: core$1.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerToggle.ctorParameters = function () {
            return [
                { type: material.MatDatepickerIntl },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        MatDatetimepickerToggle.propDecorators = {
            datetimepicker: [{ type: core$1.Input, args: ["for",] }],
            disabled: [{ type: core$1.Input }]
        };
        return MatDatetimepickerToggle;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAYS_PER_WEEK = 7;
    /**
     * An internal component used to display a single month in the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerMonthView = /** @class */ (function () {
        function MatDatetimepickerMonthView(_adapter, _dateFormats) {
            this._adapter = _adapter;
            this._dateFormats = _dateFormats;
            this.type = "date";
            this._userSelection = new core$1.EventEmitter();
            /** Emits when a new date is selected. */
            this.selectedChange = new core$1.EventEmitter();
            if (!this._adapter) {
                throw createMissingDateImplError("DatetimeAdapter");
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError("MAT_DATETIME_FORMATS");
            }
            /** @type {?} */
            var firstDayOfWeek = this._adapter.getFirstDayOfWeek();
            /** @type {?} */
            var narrowWeekdays = this._adapter.getDayOfWeekNames("narrow");
            /** @type {?} */
            var longWeekdays = this._adapter.getDayOfWeekNames("long");
            // Rotate the labels for days of the week based on the configured first day of the week.
            /** @type {?} */
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
            get: /**
             * The date to display in this month view (everything other than the month and year is ignored).
             * @return {?}
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
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
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._selected = value;
                this._selectedDate = this._getDateInCurrentMonth(this.selected);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._init();
            };
        /** Handles when a new date is selected. */
        /**
         * Handles when a new date is selected.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._dateSelected = /**
         * Handles when a new date is selected.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), date, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                this.selected = userSelected;
                this.selectedChange.emit(userSelected);
            };
        /** Initializes this month view. */
        /**
         * Initializes this month view.
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._init = /**
         * Initializes this month view.
         * @return {?}
         */
            function () {
                this._selectedDate = this._getDateInCurrentMonth(this.selected);
                this._todayDate = this._getDateInCurrentMonth(this._adapter.today());
                /** @type {?} */
                var firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                this._firstWeekOffset =
                    (DAYS_PER_WEEK + this._adapter.getDayOfWeek(firstOfMonth) -
                        this._adapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
                this._createWeekCells();
            };
        /** Creates MdCalendarCells for the dates in this month. */
        /**
         * Creates MdCalendarCells for the dates in this month.
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._createWeekCells = /**
         * Creates MdCalendarCells for the dates in this month.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var daysInMonth = this._adapter.getNumDaysInMonth(this.activeDate);
                /** @type {?} */
                var dateNames = this._adapter.getDateNames();
                this._weeks = [[]];
                for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
                    if (cell == DAYS_PER_WEEK) {
                        this._weeks.push([]);
                        cell = 0;
                    }
                    /** @type {?} */
                    var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), i + 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                    /** @type {?} */
                    var enabled = !this.dateFilter ||
                        this.dateFilter(date);
                    /** @type {?} */
                    var ariaLabel = this._adapter.format(date, this._dateFormats.display.dateA11yLabel);
                    this._weeks[this._weeks.length - 1]
                        .push(new MatDatetimepickerCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
                }
            };
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         */
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._getDateInCurrentMonth = /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._adapter.sameMonthAndYear(date, this.activeDate) ?
                    this._adapter.getDate(date) : null;
            };
        /**
         * @param {?} direction
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype.calendarState = /**
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                this._calendarState = direction;
            };
        /**
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._calendarStateDone = /**
         * @return {?}
         */
            function () {
                this._calendarState = "";
            };
        MatDatetimepickerMonthView.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-month-view",
                        template: "<table class=\"mat-datetimepicker-calendar-table\">\n  <thead class=\"mat-datetimepicker-calendar-table-header\">\n    <tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr>\n  </thead>\n  <tbody [@slideCalendar]=\"_calendarState\"\n         (@slideCalendar.done)=\"_calendarStateDone()\"\n         mat-datetimepicker-calendar-body\n         role=\"grid\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate\"\n         [selectedValue]=\"_selectedDate\"\n         [activeCell]=\"_adapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"></tbody>\n</table>\n",
                        animations: [slideCalendar],
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerMonthView.ctorParameters = function () {
            return [
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] }
            ];
        };
        MatDatetimepickerMonthView.propDecorators = {
            type: [{ type: core$1.Input }],
            _userSelection: [{ type: core$1.Output }],
            activeDate: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerMonthView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * An internal component used to display a single year in the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerYearView = /** @class */ (function () {
        function MatDatetimepickerYearView(_adapter, _dateFormats) {
            this._adapter = _adapter;
            this._dateFormats = _dateFormats;
            this._userSelection = new core$1.EventEmitter();
            this.type = "date";
            /** Emits when a new month is selected. */
            this.selectedChange = new core$1.EventEmitter();
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
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-year-view",
                        template: "<table class=\"mat-datetimepicker-calendar-table\">\n  <thead class=\"mat-datetimepicker-calendar-table-header\"></thead>\n  <tbody [@slideCalendar]=\"_calendarState\"\n         (@slideCalendar.done)=\"_calendarStateDone()\"\n         mat-datetimepicker-calendar-body\n         role=\"grid\"\n         allowDisabledSelection=\"true\"\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth\"\n         [selectedValue]=\"_selectedMonth\"\n         [labelMinRequiredCells]=\"2\"\n         [activeCell]=\"_adapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"></tbody>\n</table>\n",
                        animations: [slideCalendar],
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerYearView.ctorParameters = function () {
            return [
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] }
            ];
        };
        MatDatetimepickerYearView.propDecorators = {
            _userSelection: [{ type: core$1.Output }],
            type: [{ type: core$1.Input }],
            activeDate: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerYearView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MatDatetimepickerModule = /** @class */ (function () {
        function MatDatetimepickerModule() {
        }
        MatDatetimepickerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatButtonModule,
                            material.MatDialogModule,
                            material.MatIconModule,
                            overlay.OverlayModule,
                            a11y.A11yModule
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
                    },] },
        ];
        return MatDatetimepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NativeDatetimeModule = NativeDatetimeModule;
    exports.MatNativeDatetimeModule = MatNativeDatetimeModule;
    exports.DatetimeAdapter = DatetimeAdapter;
    exports.MAT_DATETIME_FORMATS = MAT_DATETIME_FORMATS;
    exports.NativeDatetimeAdapter = NativeDatetimeAdapter;
    exports.MAT_NATIVE_DATETIME_FORMATS = MAT_NATIVE_DATETIME_FORMATS;
    exports.MatDatetimepickerModule = MatDatetimepickerModule;
    exports.MatDatetimepickerCalendar = MatDatetimepickerCalendar;
    exports.MatDatetimepickerCalendarCell = MatDatetimepickerCalendarCell;
    exports.MatDatetimepickerCalendarBody = MatDatetimepickerCalendarBody;
    exports.MatDatetimepickerFilterType = MatDatetimepickerFilterType;
    exports.MAT_DATETIMEPICKER_VALUE_ACCESSOR = MAT_DATETIMEPICKER_VALUE_ACCESSOR;
    exports.MAT_DATETIMEPICKER_VALIDATORS = MAT_DATETIMEPICKER_VALIDATORS;
    exports.MatDatetimepickerInputEvent = MatDatetimepickerInputEvent;
    exports.MatDatetimepickerInput = MatDatetimepickerInput;
    exports.MatDatetimepickerToggle = MatDatetimepickerToggle;
    exports.MatDatetimepickerMonthView = MatDatetimepickerMonthView;
    exports.MatDatetimepickerYearView = MatDatetimepickerYearView;
    exports.MatDatetimepickerContent = MatDatetimepickerContent;
    exports.MatDatetimepicker = MatDatetimepicker;
    exports.ɵb = MatDatetimepickerClock;
    exports.ɵa = slideCalendar;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXItY29yZS51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQGZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvYWRhcHRlci9kYXRldGltZS1hZGFwdGVyLnRzIiwibmc6Ly9AZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL2RhdGV0aW1lLWZvcm1hdHMudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2FkYXB0ZXIvbmF0aXZlLWRhdGV0aW1lLWFkYXB0ZXIudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2FkYXB0ZXIvbmF0aXZlLWRhdGV0aW1lLWZvcm1hdHMudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2FkYXB0ZXIvYWRhcHRlci5tb2R1bGUudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnMudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLWVycm9ycy50cyIsIm5nOi8vQGZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZS50cyIsIm5nOi8vQGZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXIudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2NhbGVuZGFyLWJvZHkudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2Nsb2NrLnRzIiwibmc6Ly9AZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci50cyIsIm5nOi8vQGZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItaW5wdXQudHMiLCJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLXRvZ2dsZS50cyIsIm5nOi8vQGZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvbW9udGgtdmlldy50cyIsIm5nOi8vQGZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIveWVhci12aWV3LnRzIiwibmc6Ly9AZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZXRpbWVBZGFwdGVyPEQ+IGV4dGVuZHMgRGF0ZUFkYXB0ZXI8RD4ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2RlbGVnYXRlOiBEYXRlQWRhcHRlcjxEPikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGdldEhvdXIoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0TWludXRlKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gIGFic3RyYWN0IGdldEZpcnN0RGF0ZU9mTW9udGgoZGF0ZTogRCk6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBELCBlbmREYXRlOiBEKTogYm9vbGVhbjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0SG91ck5hbWVzKCk6IHN0cmluZ1tdO1xyXG5cclxuICBhYnN0cmFjdCBnZXRNaW51dGVOYW1lcygpOiBzdHJpbmdbXTtcclxuXHJcbiAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGNyZWF0ZURhdGV0aW1lKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogRDtcclxuXHJcbiAgZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuICh0aGlzLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5pc1ZhbGlkKG9iaikpID8gb2JqIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVEYXRldGltZShmaXJzdDogRCwgc2Vjb25kOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVEYXRlKGZpcnN0LCBzZWNvbmQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0SG91cihmaXJzdCkgLSB0aGlzLmdldEhvdXIoc2Vjb25kKSB8fFxyXG4gICAgICB0aGlzLmdldE1pbnV0ZShmaXJzdCkgLSB0aGlzLmdldE1pbnV0ZShzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZURhdGV0aW1lKGZpcnN0OiBEIHwgbnVsbCwgc2Vjb25kOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpcnN0ICYmIHNlY29uZCkge1xyXG4gICAgICBjb25zdCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcclxuICAgICAgY29uc3Qgc2Vjb25kVmFsaWQgPSB0aGlzLmlzVmFsaWQoc2Vjb25kKTtcclxuICAgICAgaWYgKGZpcnN0VmFsaWQgJiYgc2Vjb25kVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuY29tcGFyZURhdGV0aW1lKGZpcnN0LCBzZWNvbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaXJzdFZhbGlkID09PSBzZWNvbmRWYWxpZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG4gIH1cclxuXHJcbiAgc2FtZVllYXIoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldFllYXIoZmlyc3QpID09PSB0aGlzLmdldFllYXIoc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVEYXkoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldERhdGUoZmlyc3QpID09PSB0aGlzLmdldERhdGUoc2Vjb25kKSAmJiB0aGlzLnNhbWVNb250aEFuZFllYXIoZmlyc3QsIHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lSG91cihmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0SG91cihmaXJzdCkgPT09IHRoaXMuZ2V0SG91cihzZWNvbmQpICYmIHRoaXMuc2FtZURheShmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVNaW51dGUoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldE1pbnV0ZShmaXJzdCkgPT09IHRoaXMuZ2V0TWludXRlKHNlY29uZCkgJiYgdGhpcy5zYW1lSG91cihmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVNb250aEFuZFllYXIoZmlyc3Q6IEQgfCBudWxsLCBzZWNvbmQ6IEQgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0VmFsaWQgPSB0aGlzLmlzVmFsaWQoZmlyc3QpO1xyXG4gICAgICBjb25zdCBzZWNvbmRWYWxpZCA9IHRoaXMuaXNWYWxpZChzZWNvbmQpO1xyXG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xyXG4gICAgICAgIHJldHVybiAhKHRoaXMuZ2V0WWVhcihmaXJzdCkgLSB0aGlzLmdldFllYXIoc2Vjb25kKSB8fFxyXG4gICAgICAgICAgdGhpcy5nZXRNb250aChmaXJzdCkgLSB0aGlzLmdldE1vbnRoKHNlY29uZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaXJzdFZhbGlkID09PSBzZWNvbmRWYWxpZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZWdhdGVcclxuICBjbG9uZShkYXRlOiBEKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY2xvbmUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhclllYXJzKGRhdGU6IEQsIHllYXJzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhclllYXJzKGRhdGUsIHllYXJzKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgbW9udGhzKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyRGF5cyhkYXRlOiBELCBkYXlzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhckRheXMoZGF0ZSwgZGF5cyk7XHJcbiAgfVxyXG5cclxuICBnZXRZZWFyKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFllYXIoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aChkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRNb250aChkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldERheU9mV2VlayhkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXlPZldlZWsoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aE5hbWVzKHN0eWxlKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldE1vbnRoTmFtZXMoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXRlTmFtZXMoKTtcclxuICB9XHJcblxyXG4gIGdldERheU9mV2Vla05hbWVzKHN0eWxlKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERheU9mV2Vla05hbWVzKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFllYXJOYW1lKGRhdGU6IEQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFllYXJOYW1lKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRGaXJzdERheU9mV2VlaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtRGF5c0luTW9udGgoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TnVtRGF5c0luTW9udGgoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY3JlYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgfVxyXG5cclxuICB0b2RheSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS50b2RheSgpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2UodmFsdWU6IGFueSwgcGFyc2VGb3JtYXQ6IGFueSk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5wYXJzZSh2YWx1ZSwgcGFyc2VGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGRhdGU6IEQsIGRpc3BsYXlGb3JtYXQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZm9ybWF0KGRhdGUsIGRpc3BsYXlGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgdG9Jc284NjAxKGRhdGU6IEQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnRvSXNvODYwMShkYXRlKTtcclxuICB9XHJcblxyXG4gIGlzRGF0ZUluc3RhbmNlKG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaXNEYXRlSW5zdGFuY2Uob2JqKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoZGF0ZTogRCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmlzVmFsaWQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpbnZhbGlkKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmludmFsaWQoKTtcclxuICB9XHJcblxyXG4gIGNsYW1wRGF0ZShkYXRlOiBELCBtaW4/OiBEIHwgbnVsbCwgbWF4PzogRCB8IG51bGwpOiBEIHtcclxuICAgIGlmIChtaW4gJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWluKSA8IDApIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH1cclxuICAgIGlmIChtYXggJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWF4KSA+IDApIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hdERhdGV0aW1lRm9ybWF0cyB7XHJcbiAgcGFyc2U6IHtcclxuICAgIGRhdGVJbnB1dD86IGFueTtcclxuICAgIG1vbnRoSW5wdXQ/OiBhbnk7XHJcbiAgICB0aW1lSW5wdXQ/OiBhbnk7XHJcbiAgICBkYXRldGltZUlucHV0PzogYW55O1xyXG4gIH07XHJcbiAgZGlzcGxheToge1xyXG4gICAgZGF0ZUlucHV0OiBhbnk7XHJcbiAgICBtb250aElucHV0OiBhbnk7XHJcbiAgICB0aW1lSW5wdXQ6IGFueTtcclxuICAgIGRhdGV0aW1lSW5wdXQ6IGFueTtcclxuICAgIG1vbnRoWWVhckxhYmVsOiBhbnk7XHJcbiAgICBkYXRlQTExeUxhYmVsOiBhbnk7XHJcbiAgICBtb250aFllYXJBMTF5TGFiZWw6IGFueTtcclxuICAgIHBvcHVwSGVhZGVyRGF0ZUxhYmVsOiBhbnk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9EQVRFVElNRV9GT1JNQVRTID0gbmV3IEluamVjdGlvblRva2VuPE1hdERhdGV0aW1lRm9ybWF0cz4oXCJtYXQtZGF0ZXRpbWUtZm9ybWF0c1wiKTtcclxuIiwiaW1wb3J0IHtcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBPcHRpb25hbFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZUFkYXB0ZXIsXHJcbiAgTUFUX0RBVEVfTE9DQUxFXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuXHJcbi8qKiBUaGUgZGVmYXVsdCBob3VyIG5hbWVzIHRvIHVzZSBpZiBJbnRsIEFQSSBpcyBub3QgYXZhaWxhYmxlLiAqL1xyXG5jb25zdCBERUZBVUxUX0hPVVJfTkFNRVMgPSByYW5nZSgyNCwgaSA9PiBTdHJpbmcoaSkpO1xyXG5cclxuLyoqIFRoZSBkZWZhdWx0IG1pbnV0ZSBuYW1lcyB0byB1c2UgaWYgSW50bCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gKi9cclxuY29uc3QgREVGQVVMVF9NSU5VVEVfTkFNRVMgPSByYW5nZSg2MCwgaSA9PiBTdHJpbmcoaSkpO1xyXG5cclxuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcclxuICBjb25zdCB2YWx1ZXNBcnJheSA9IEFycmF5KGxlbmd0aCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWVzQXJyYXk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdGl2ZURhdGV0aW1lQWRhcHRlciBleHRlbmRzIERhdGV0aW1lQWRhcHRlcjxEYXRlPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RBVEVfTE9DQUxFKSBtYXREYXRlTG9jYWxlOiBzdHJpbmcsIF9kZWxlZ2F0ZTogRGF0ZUFkYXB0ZXI8RGF0ZT4pIHtcclxuICAgIHN1cGVyKF9kZWxlZ2F0ZSk7XHJcbiAgICB0aGlzLnNldExvY2FsZShtYXREYXRlTG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGNsb25lKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZURhdGV0aW1lKHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSwgdGhpcy5nZXREYXRlKGRhdGUpLCB0aGlzLmdldEhvdXIoZGF0ZSksIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXIoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWludXRlKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgaXNJbk5leHRNb250aChzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG5leHRNb250aCA9IHRoaXMuZ2V0RGF0ZUluTmV4dE1vbnRoKHN0YXJ0RGF0ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5zYW1lTW9udGhBbmRZZWFyKG5leHRNb250aCwgZW5kRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEYXRldGltZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IERhdGUge1xyXG4gICAgLy8gQ2hlY2sgZm9yIGludmFsaWQgbW9udGggYW5kIGRhdGUgKGV4Y2VwdCB1cHBlciBib3VuZCBvbiBkYXRlIHdoaWNoIHdlIGhhdmUgdG8gY2hlY2sgYWZ0ZXJcclxuICAgIC8vIGNyZWF0aW5nIHRoZSBEYXRlKS5cclxuICAgIGlmIChtb250aCA8IDAgfHwgbW9udGggPiAxMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBtb250aCBpbmRleCBcIiR7bW9udGh9XCIuIE1vbnRoIGluZGV4IGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDExLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRlIDwgMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBkYXRlIFwiJHtkYXRlfVwiLiBEYXRlIGhhcyB0byBiZSBncmVhdGVyIHRoYW4gMC5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaG91ciA8IDAgfHwgaG91ciA+IDIzKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGhvdXIgXCIke2hvdXJ9XCIuIEhvdXIgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjMuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pbnV0ZSA8IDAgfHwgbWludXRlID4gNTkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbWludXRlIFwiJHttaW51dGV9XCIuIE1pbnV0ZSBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCA1OS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHllYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUpO1xyXG5cclxuICAgIC8vIENoZWNrIHRoYXQgdGhlIGRhdGUgd2Fzbid0IGFib3ZlIHRoZSB1cHBlciBib3VuZCBmb3IgdGhlIG1vbnRoLCBjYXVzaW5nIHRoZSBtb250aCB0byBvdmVyZmxvd1xyXG4gICAgaWYgKHJlc3VsdC5nZXRNb250aCgpICE9PSBtb250aCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBkYXRlIFwiJHtkYXRlfVwiIGZvciBtb250aCB3aXRoIGluZGV4IFwiJHttb250aH1cIi5gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRlSW5OZXh0TW9udGgoZGF0ZTogRGF0ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMSxcclxuICAgICAgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdERhdGVPZk1vbnRoKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldEhvdXJOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gREVGQVVMVF9IT1VSX05BTUVTO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWludXRlTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIERFRkFVTFRfTUlOVVRFX05BTUVTO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJZZWFycyhkYXRlOiBEYXRlLCB5ZWFyczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGRDYWxlbmRhck1vbnRocyhkYXRlLCB5ZWFycyAqIDEyKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IERhdGUsIG1vbnRoczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICBsZXQgbmV3RGF0ZSA9IHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXHJcbiAgICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpICsgbW9udGhzLCB0aGlzLmdldERhdGUoZGF0ZSksIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xyXG5cclxuICAgIC8vIEl0J3MgcG9zc2libGUgdG8gd2luZCB1cCBpbiB0aGUgd3JvbmcgbW9udGggaWYgdGhlIG9yaWdpbmFsIG1vbnRoIGhhcyBtb3JlIGRheXMgdGhhbiB0aGUgbmV3XHJcbiAgICAvLyBtb250aC4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gZ28gdG8gdGhlIGxhc3QgZGF5IG9mIHRoZSBkZXNpcmVkIG1vbnRoLlxyXG4gICAgLy8gTm90ZTogdGhlIGFkZGl0aW9uYWwgKyAxMiAlIDEyIGVuc3VyZXMgd2UgZW5kIHVwIHdpdGggYSBwb3NpdGl2ZSBudW1iZXIsIHNpbmNlIEpTICUgZG9lc24ndFxyXG4gICAgLy8gZ3VhcmFudGVlIHRoaXMuXHJcbiAgICBpZiAodGhpcy5nZXRNb250aChuZXdEYXRlKSAhPT0gKCh0aGlzLmdldE1vbnRoKGRhdGUpICsgbW9udGhzKSAlIDEyICsgMTIpICUgMTIpIHtcclxuICAgICAgbmV3RGF0ZSA9IHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3codGhpcy5nZXRZZWFyKG5ld0RhdGUpLCB0aGlzLmdldE1vbnRoKG5ld0RhdGUpLCAwLCB0aGlzLmdldEhvdXIoZGF0ZSksIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3RGF0ZTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyRGF5cyhkYXRlOiBEYXRlLCBkYXlzOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxyXG4gICAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSwgdGhpcy5nZXREYXRlKGRhdGUpICsgZGF5cywgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IERhdGUsIGhvdXJzOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxyXG4gICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSxcclxuICAgICAgdGhpcy5nZXRIb3VyKGRhdGUpICsgaG91cnMsIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBEYXRlLCBtaW51dGVzOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxyXG4gICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSxcclxuICAgICAgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSArIG1pbnV0ZXMpO1xyXG4gIH1cclxuXHJcbiAgdG9Jc284NjAxKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN1cGVyLnRvSXNvODYwMShkYXRlKSArIFwiVFwiICsgW1xyXG4gICAgICB0aGlzLl8yZGlnaXQoZGF0ZS5nZXRVVENIb3VycygpKSxcclxuICAgICAgdGhpcy5fMmRpZ2l0KGRhdGUuZ2V0VVRDTWludXRlcygpKVxyXG4gICAgXS5qb2luKFwiOlwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0cmlwIG91dCB1bmljb2RlIExUUiBhbmQgUlRMIGNoYXJhY3RlcnMuIEVkZ2UgYW5kIElFIGluc2VydCB0aGVzZSBpbnRvIGZvcm1hdHRlZCBkYXRlcyB3aGlsZVxyXG4gICAqIG90aGVyIGJyb3dzZXJzIGRvIG5vdC4gV2UgcmVtb3ZlIHRoZW0gdG8gbWFrZSBvdXRwdXQgY29uc2lzdGVudCBhbmQgYmVjYXVzZSB0aGV5IGludGVyZmVyZSB3aXRoXHJcbiAgICogZGF0ZSBwYXJzaW5nLlxyXG4gICAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyB0byBzdHJpcCBkaXJlY3Rpb24gY2hhcmFjdGVycyBmcm9tLlxyXG4gICAqIEByZXR1cm5zIFRoZSBzdHJpcHBlZCBzdHJpbmcuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc3RyaXBEaXJlY3Rpb25hbGl0eUNoYXJhY3RlcnMoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcdTIwMGVcXHUyMDBmXS9nLCBcIlwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhZHMgYSBudW1iZXIgdG8gbWFrZSBpdCB0d28gZGlnaXRzLlxyXG4gICAqIEBwYXJhbSBuIFRoZSBudW1iZXIgdG8gcGFkLlxyXG4gICAqIEByZXR1cm5zIFRoZSBwYWRkZWQgbnVtYmVyLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgXzJkaWdpdChuOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoXCIwMFwiICsgbikuc2xpY2UoLTIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZXMgYSBkYXRlIGJ1dCBhbGxvd3MgdGhlIG1vbnRoIGFuZCBkYXRlIHRvIG92ZXJmbG93LiAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlLCBob3VycywgbWludXRlcyk7XHJcblxyXG4gICAgLy8gV2UgbmVlZCB0byBjb3JyZWN0IGZvciB0aGUgZmFjdCB0aGF0IEpTIG5hdGl2ZSBEYXRlIHRyZWF0cyB5ZWFycyBpbiByYW5nZSBbMCwgOTldIGFzXHJcbiAgICAvLyBhYmJyZXZpYXRpb25zIGZvciAxOXh4LlxyXG4gICAgaWYgKHllYXIgPj0gMCAmJiB5ZWFyIDwgMTAwKSB7XHJcbiAgICAgIHJlc3VsdC5zZXRGdWxsWWVhcih0aGlzLmdldFllYXIocmVzdWx0KSAtIDE5MDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0RGF0ZXRpbWVGb3JtYXRzIH0gZnJvbSBcIi4vZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9OQVRJVkVfREFURVRJTUVfRk9STUFUUzogTWF0RGF0ZXRpbWVGb3JtYXRzID0ge1xyXG4gIHBhcnNlOiB7fSxcclxuICBkaXNwbGF5OiB7XHJcbiAgICBkYXRlSW5wdXQ6IHt5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwifSxcclxuICAgIG1vbnRoSW5wdXQ6IHttb250aDogXCJsb25nXCJ9LFxyXG4gICAgZGF0ZXRpbWVJbnB1dDoge3llYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCIyLWRpZ2l0XCIsIGhvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwifSxcclxuICAgIHRpbWVJbnB1dDoge2hvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwifSxcclxuICAgIG1vbnRoWWVhckxhYmVsOiB7eWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcInNob3J0XCJ9LFxyXG4gICAgZGF0ZUExMXlMYWJlbDoge3llYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCJ9LFxyXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiB7eWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcImxvbmdcIn0sXHJcbiAgICBwb3B1cEhlYWRlckRhdGVMYWJlbDoge3dlZWtkYXk6IFwic2hvcnRcIiwgbW9udGg6IFwic2hvcnRcIiwgZGF5OiBcIjItZGlnaXRcIn1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gIE5hdGl2ZURhdGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNQVRfREFURVRJTUVfRk9STUFUUyB9IGZyb20gXCIuL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuaW1wb3J0IHsgTmF0aXZlRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vbmF0aXZlLWRhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTUFUX05BVElWRV9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSBcIi4vbmF0aXZlLWRhdGV0aW1lLWZvcm1hdHNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZURhdGVNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBEYXRldGltZUFkYXB0ZXIsXHJcbiAgICAgIHVzZUNsYXNzOiBOYXRpdmVEYXRldGltZUFkYXB0ZXJcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRldGltZU1vZHVsZSB7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlRGF0ZXRpbWVNb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTUFUX0RBVEVUSU1FX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTkFUSVZFX0RBVEVUSU1FX0ZPUk1BVFN9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUge1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlclxyXG59IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBhbmltYXRpb24gZmFkZXMgaW4gdGhlIGJhY2tncm91bmQgY29sb3IgYW5kIHRleHQgY29udGVudCBvZiB0aGVcclxuICogc2VsZWN0J3Mgb3B0aW9ucy4gSXQgaXMgdGltZSBkZWxheWVkIHRvIG9jY3VyIDEwMG1zIGFmdGVyIHRoZSBvdmVybGF5XHJcbiAqIHBhbmVsIGhhcyB0cmFuc2Zvcm1lZCBpbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5Db250ZW50OiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFwiZmFkZUluQ29udGVudFwiLCBbXHJcbiAgc3RhdGUoXCJzaG93aW5nXCIsIHN0eWxlKHtvcGFjaXR5OiAxfSkpLFxyXG4gIHRyYW5zaXRpb24oXCJ2b2lkID0+IHNob3dpbmdcIiwgW1xyXG4gICAgc3R5bGUoe29wYWNpdHk6IDB9KSxcclxuICAgIGFuaW1hdGUoYDE1MG1zIDEwMG1zIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpYClcclxuICBdKVxyXG5dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUNhbGVuZGFyOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFwic2xpZGVDYWxlbmRhclwiLCBbXHJcbiAgdHJhbnNpdGlvbihcIiogPT4gbGVmdFwiLCBbXHJcbiAgICBhbmltYXRlKDE4MCwga2V5ZnJhbWVzKFtcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDEwMCUpXCIsIG9mZnNldDogMC41fSksXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMTAwJSlcIiwgb2Zmc2V0OiAwLjUxfSksXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLCBvZmZzZXQ6IDF9KVxyXG4gICAgXSkpXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbihcIiogPT4gcmlnaHRcIiwgW1xyXG4gICAgYW5pbWF0ZSgxODAsIGtleWZyYW1lcyhbXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMTAwJSlcIiwgb2Zmc2V0OiAwLjV9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDEwMCUpXCIsIG9mZnNldDogMC41MX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiwgb2Zmc2V0OiAxfSlcclxuICAgIF0pKVxyXG4gIF0pXHJcbl0pO1xyXG4iLCIvKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IocHJvdmlkZXI6IHN0cmluZykge1xyXG4gIHJldHVybiBFcnJvcihcclxuICAgICAgYE1hdERhdGV0aW1lcGlja2VyOiBObyBwcm92aWRlciBmb3VuZCBmb3IgJHtwcm92aWRlcn0uIFlvdSBtdXN0IGltcG9ydCBvbmUgb2YgdGhlIGZvbGxvd2luZyBgICtcclxuICAgICAgYG1vZHVsZXMgYXQgeW91ciBhcHBsaWNhdGlvbiByb290OiBNYXROYXRpdmVEYXRldGltZU1vZHVsZSwgTWF0TW9tZW50RGF0ZXRpbWVNb2R1bGUsIG9yIHByb3ZpZGUgYSBgICtcclxuICAgICAgYGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5gKTtcclxufVxyXG4iLCJleHBvcnQgZW51bSBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUge1xyXG4gIERBVEUsIEhPVVIsIE1JTlVURVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRE9XTl9BUlJPVyxcclxuICBFTkQsXHJcbiAgRU5URVIsXHJcbiAgSE9NRSxcclxuICBMRUZUX0FSUk9XLFxyXG4gIFBBR0VfRE9XTixcclxuICBQQUdFX1VQLFxyXG4gIFJJR0hUX0FSUk9XLFxyXG4gIFVQX0FSUk9XXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnRsIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBNQVRfREFURVRJTUVfRk9STUFUUyxcclxuICBNYXREYXRldGltZUZvcm1hdHNcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7IHNsaWRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNhbGVuZGFyIHRoYXQgaXMgdXNlZCBhcyBwYXJ0IG9mIHRoZSBkYXRlcGlja2VyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJcIixcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyXCI+XHJcbiAgPGRpdiAqbmdJZj1cInR5cGUgIT09ICd0aW1lJ1wiXHJcbiAgICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXIteWVhclwiXHJcbiAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jdXJyZW50VmlldyA9PSAneWVhcidcIlxyXG4gICAgICAgKGNsaWNrKT1cIl95ZWFyQ2xpY2tlZCgpXCI+e3sgX3llYXJMYWJlbCB9fTwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZVwiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJ0eXBlICE9PSAndGltZSdcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGVcIlxyXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY3VycmVudFZpZXcgPT0gJ21vbnRoJ1wiXHJcbiAgICAgICAgICBbY2xhc3Mubm90LWNsaWNrYWJsZV09XCJ0eXBlID09PSAnbW9udGgnXCJcclxuICAgICAgICAgIChjbGljayk9XCJfZGF0ZUNsaWNrZWQoKVwiPnt7IF9kYXRlTGFiZWwgfX08L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cInR5cGUuZW5kc1dpdGgoJ3RpbWUnKVwiXHJcbiAgICAgICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZVwiXHJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jdXJyZW50VmlldyA9PSAnY2xvY2snXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1ob3Vyc1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiX2Nsb2NrVmlldyA9PSAnaG91cidcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiX2hvdXJzQ2xpY2tlZCgpXCI+e3sgX2hvdXJzTGFiZWwgfX08L3NwYW4+OjxzcGFuIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1taW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY2xvY2tWaWV3ID09ICdtaW51dGUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9taW51dGVzQ2xpY2tlZCgpXCI+e3sgX21pbnV0ZXNMYWJlbCB9fTwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udGVudFwiIFtuZ1N3aXRjaF09XCJfY3VycmVudFZpZXdcIj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LW1vbnRoLWNvbnRlbnRcIiAqbmdJZj1cIl9jdXJyZW50VmlldyA9PT0gJ21vbnRoJyB8fCBfY3VycmVudFZpZXcgPT09ICd5ZWFyJ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250cm9sc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvblwiXHJcbiAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiFfcHJldmlvdXNFbmFibGVkKClcIiAoY2xpY2spPVwiX3ByZXZpb3VzQ2xpY2tlZCgpXCJcclxuICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgbW9udGhcIj5cclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXBlcmlvZC1idXR0b25cIiBbQHNsaWRlQ2FsZW5kYXJdPVwiX2NhbGVuZGFyU3RhdGVcIiAoQHNsaWRlQ2FsZW5kYXIuZG9uZSk9XCJfY2FsZW5kYXJTdGF0ZURvbmUoKVwiPlxyXG4gICAgICAgIDxzdHJvbmc+e3sgX21vbnRoWWVhckxhYmVsIH19PC9zdHJvbmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uXCJcclxuICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIV9uZXh0RW5hYmxlZCgpXCIgKGNsaWNrKT1cIl9uZXh0Q2xpY2tlZCgpXCJcclxuICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCBtb250aFwiPlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1kYXRldGltZXBpY2tlci1tb250aC12aWV3ICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcclxuICAgICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiX2FjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIl9hY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiX2RhdGVGaWx0ZXJGb3JWaWV3c1wiXHJcbiAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJfZGF0ZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAoX3VzZXJTZWxlY3Rpb24pPVwiX3VzZXJTZWxlY3RlZCgpXCI+XHJcbiAgPC9tYXQtZGF0ZXRpbWVwaWNrZXItbW9udGgtdmlldz5cclxuICA8bWF0LWRhdGV0aW1lcGlja2VyLXllYXItdmlldyAqbmdTd2l0Y2hDYXNlPVwiJ3llYXInXCJcclxuICAgICAgICAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIl9hY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJfZGF0ZUZpbHRlckZvclZpZXdzXCJcclxuICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiX21vbnRoU2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cIl91c2VyU2VsZWN0ZWQoKVwiPlxyXG4gIDwvbWF0LWRhdGV0aW1lcGlja2VyLXllYXItdmlldz5cclxuICA8bWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgICAgIFtzdGFydFZpZXddPVwiX2Nsb2NrVmlld1wiXHJcbiAgICAgICAgICAgICBbaW50ZXJ2YWxdPVwidGltZUludGVydmFsXCJcclxuICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXHJcbiAgICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJkYXRlRmlsdGVyXCJcclxuICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAoYWN0aXZlRGF0ZUNoYW5nZSk9XCJfb25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIl90aW1lU2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAoX3VzZXJTZWxlY3Rpb24pPVwiX3VzZXJTZWxlY3RlZCgpXCI+XHJcbiAgPC9tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2s+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1mb290ZXJcIj5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiX2hhbmRsZUNhbmNlbEJ1dHRvbigkZXZlbnQpXCI+e3sgY2FuY2VsQnV0dG9uTGFiZWwgfX08L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIl9oYW5kbGVDb25maXJtQnV0dG9uKCRldmVudClcIj57eyBjb25maXJtQnV0dG9uTGFiZWwgfX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2Rpc3BsYXk6YmxvY2s7b3V0bGluZTowfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1sYW5kc2NhcGVde2Rpc3BsYXk6ZmxleH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlcntwYWRkaW5nOjE2cHg7Zm9udC1zaXplOjE0cHg7Y29sb3I6I2ZmZjtib3gtc2l6aW5nOmJvcmRlci1ib3h9W21vZGU9bGFuZHNjYXBlXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlcnt3aWR0aDoxNTBweDttaW4td2lkdGg6MTUwcHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS10aW1lLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXJ7d2lkdGg6MTAwJTtmb250LXdlaWdodDo1MDA7d2hpdGUtc3BhY2U6bm93cmFwfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZXtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDozNHB4fVttb2RlPWxhbmRzY2FwZV0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS10aW1le3doaXRlLXNwYWNlOm5vcm1hbDt3b3JkLXdyYXA6YnJlYWstd29yZH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlOm5vdCguYWN0aXZlKSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1ob3Vyczpub3QoLmFjdGl2ZSksLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlczpub3QoLmFjdGl2ZSksLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXIteWVhcjpub3QoLmFjdGl2ZSl7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouNn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLm5vdC1jbGlja2FibGUsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnMubm90LWNsaWNrYWJsZSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1taW51dGVzLm5vdC1jbGlja2FibGUsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXIteWVhci5ub3QtY2xpY2thYmxle2N1cnNvcjppbml0aWFsfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWV7cGFkZGluZy1sZWZ0OjhweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1lOm5vdCguYWN0aXZlKXtvcGFjaXR5Oi42fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWU6bm90KC5hY3RpdmUpIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWhvdXJzLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWU6bm90KC5hY3RpdmUpIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLW1pbnV0ZXN7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eToxfVttb2RlPWxhbmRzY2FwZV0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZXtkaXNwbGF5OmJsb2NrO3BhZGRpbmctbGVmdDowfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udGVudHt3aWR0aDoxMDAlO3BhZGRpbmc6MCA4cHggOHB4O291dGxpbmU6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6aGlkZGVufVttb2RlPWxhbmRzY2FwZV0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50e3BhZGRpbmctdG9wOjhweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnQ+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1mb290ZXJ7cGFkZGluZzoxMnB4O3RleHQtYWxpZ246cmlnaHR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250cm9sc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wZXJpb2QtYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDo0OHB4O3BhZGRpbmc6MTJweDtvdXRsaW5lOjA7Ym9yZGVyOjA7YmFja2dyb3VuZDowIDA7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wcmV2aW91cy1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6NDhweDtoZWlnaHQ6NDhweDtwYWRkaW5nOjEycHg7b3V0bGluZTowO2JvcmRlcjowO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6MCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uLmRpc2FibGVkLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uLmRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KTtwb2ludGVyLWV2ZW50czpub25lfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItbmV4dC1idXR0b24gc3ZnLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHN2Z3tmaWxsOmN1cnJlbnRDb2xvcjt2ZXJ0aWNhbC1hbGlnbjp0b3B9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZXtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt3aWR0aDoxMDAlfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGUtaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aHt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTFweDtwYWRkaW5nOjAgMCA4cHh9QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpey5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXXtkaXNwbGF5OmZsZXh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVye3dpZHRoOjE1MHB4O21pbi13aWR0aDoxNTBweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b10gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS10aW1le3doaXRlLXNwYWNlOm5vcm1hbDt3b3JkLXdyYXA6YnJlYWstd29yZH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b10gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZXtkaXNwbGF5OmJsb2NrO3BhZGRpbmctbGVmdDowfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnR7cGFkZGluZy10b3A6OHB4fX1gXSxcclxuICBob3N0OiB7XHJcbiAgICBcIltjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJdXCI6IFwidHJ1ZVwiLFxyXG4gICAgXCJ0YWJpbmRleFwiOiBcIjBcIixcclxuICAgIFwiKGtleWRvd24pXCI6IFwiX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd24oJGV2ZW50KVwiXHJcbiAgfSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVDYWxlbmRhcl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcjxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX2ludGxDaGFuZ2VzOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQElucHV0KCkgdHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIiA9IFwiZGF0ZVwiO1xyXG5cclxuICAvKiogQSBkYXRlIHJlcHJlc2VudGluZyB0aGUgcGVyaW9kIChtb250aCBvciB5ZWFyKSB0byBzdGFydCB0aGUgY2FsZW5kYXIgaW4uICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc3RhcnRBdCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRBdDtcclxuICB9XHJcblxyXG4gIHNldCBzdGFydEF0KHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc3RhcnRBdCA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0YXJ0QXQ6IEQgfCBudWxsO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgc2hvdWxkIGJlIHN0YXJ0ZWQgaW4gbW9udGggb3IgeWVhciB2aWV3LiAqL1xyXG4gIEBJbnB1dCgpIHN0YXJ0VmlldzogXCJjbG9ja1wiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgPSBcIm1vbnRoXCI7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWluRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21pbkRhdGU6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1heERhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heERhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgQElucHV0KCkgdGltZUludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICAvKiogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cclxuICBASW5wdXQoKSBkYXRlRmlsdGVyOiAoZGF0ZTogRCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUgY2hhbmdlcy4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBEYXRlIGZpbHRlciBmb3IgdGhlIG1vbnRoIGFuZCB5ZWFyIHZpZXdzLiAqL1xyXG4gIF9kYXRlRmlsdGVyRm9yVmlld3MgPSAoZGF0ZTogRCkgPT4ge1xyXG4gICAgcmV0dXJuICEhZGF0ZSAmJlxyXG4gICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlLkRBVEUpKSAmJlxyXG4gICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRlKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgKCF0aGlzLm1heERhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjdXJyZW50IGFjdGl2ZSBkYXRlLiBUaGlzIGRldGVybWluZXMgd2hpY2ggdGltZSBwZXJpb2QgaXMgc2hvd24gYW5kIHdoaWNoIGRhdGUgaXNcclxuICAgKiBoaWdobGlnaHRlZCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICovXHJcbiAgZ2V0IF9hY3RpdmVEYXRlKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IF9hY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICBjb25zdCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGU7XHJcbiAgICB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY2xhbXBEYXRlKHZhbHVlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XHJcbiAgICBpZiAob2xkQWN0aXZlRGF0ZSAmJiB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSAmJiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiICYmXHJcbiAgICAgICF0aGlzLl9hZGFwdGVyLnNhbWVNb250aEFuZFllYXIob2xkQWN0aXZlRGF0ZSwgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUpKSB7XHJcbiAgICAgIGlmICh0aGlzLl9hZGFwdGVyLmlzSW5OZXh0TW9udGgob2xkQWN0aXZlRGF0ZSwgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwicmlnaHRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwibGVmdFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xhbXBlZEFjdGl2ZURhdGU6IEQ7XHJcblxyXG4gIF91c2VyU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl91c2VyU2VsZWN0aW9uLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBpcyBpbiBtb250aCB2aWV3LiAqL1xyXG4gIF9jdXJyZW50VmlldzogXCJjbG9ja1wiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgPSBcIm1vbnRoXCI7XHJcbiAgX2Nsb2NrVmlldzogXCJob3VyXCIgfCBcIm1pbnV0ZVwiID0gXCJob3VyXCI7XHJcblxyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBjdXJyZW50IGNhbGVuZGFyIHZpZXcuICovXHJcbiAgZ2V0IF95ZWFyTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmdldFllYXJOYW1lKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9tb250aFllYXJMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgPyB0aGlzLl9hZGFwdGVyLmdldE1vbnRoTmFtZXMoXCJsb25nXCIpW3RoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSldIDpcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIGdldCBfZGF0ZUxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGhOYW1lcyhcImxvbmdcIilbdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLl9hY3RpdmVEYXRlKV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5mb3JtYXQodGhpcy5fYWN0aXZlRGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5wb3B1cEhlYWRlckRhdGVMYWJlbCk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0IF9ob3Vyc0xhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fMmRpZ2l0KHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgX21pbnV0ZXNMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuXzJkaWdpdCh0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBfY2FsZW5kYXJTdGF0ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ludGw6IE1hdERhdGVwaWNrZXJJbnRsLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFVElNRV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZXRpbWVGb3JtYXRzLFxyXG4gICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9pbnRsQ2hhbmdlcyA9IF9pbnRsLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLnN0YXJ0QXQgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gICAgdGhpcy5fZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcInllYXJcIjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBcInRpbWVcIikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdGhpcy5zdGFydFZpZXcgfHwgXCJtb250aFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9pbnRsQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgZGF0ZSBzZWxlY3Rpb24gaW4gdGhlIG1vbnRoIHZpZXcuICovXHJcbiAgX2RhdGVTZWxlY3RlZChkYXRlOiBEKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gZGF0ZTtcclxuICAgIGlmICh0aGlzLnR5cGUgIT09IFwiZGF0ZVwiKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJjbG9ja1wiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgbW9udGggc2VsZWN0aW9uIGluIHRoZSB5ZWFyIHZpZXcuICovXHJcbiAgX21vbnRoU2VsZWN0ZWQobW9udGg6IEQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBtb250aDtcclxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcIm1vbnRoXCI7XHJcbiAgICAgIHRoaXMuX2Nsb2NrVmlldyA9IFwiaG91clwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3RpbWVTZWxlY3RlZChkYXRlOiBEKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuX2Nsb2NrVmlldyA9IFwibWludXRlXCI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjb25maXJtQnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBfaGFuZGxlQ29uZmlybUJ1dHRvbihldmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgdGhpcy5fdXNlclNlbGVjdGVkKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjYW5jZWxCdXR0b25MYWJlbDogc3RyaW5nO1xyXG4gIF9oYW5kbGVDYW5jZWxCdXR0b24oZXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIENsb3NlIGRpYWxvZyAoZGF0ZXRpbWVwaWNrZXIuY2xvc2UoKSlcclxuICAgIHRoaXMuX3VzZXJTZWxlY3Rpb24uZW1pdCgpO1xyXG5cclxuICB9XHJcblxyXG4gIF9vbkFjdGl2ZURhdGVDaGFuZ2UoZGF0ZTogRCkge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICBfeWVhckNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwieWVhclwiO1xyXG4gIH1cclxuXHJcbiAgX2RhdGVDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gJ21vbnRoJykge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwibW9udGhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9ob3Vyc0NsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcclxuICAgIHRoaXMuX2Nsb2NrVmlldyA9IFwiaG91clwiO1xyXG4gIH1cclxuXHJcbiAgX21pbnV0ZXNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XHJcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcIm1pbnV0ZVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIHByZXZpb3VzIGJ1dHRvbi4gKi9cclxuICBfcHJldmlvdXNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyB1c2VyIGNsaWNrcyBvbiB0aGUgbmV4dCBidXR0b24uICovXHJcbiAgX25leHRDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIDEpIDpcclxuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHByZXZpb3VzIHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBfcHJldmlvdXNFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLm1pbkRhdGUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIXRoaXMubWluRGF0ZSB8fCAhdGhpcy5faXNTYW1lVmlldyh0aGlzLl9hY3RpdmVEYXRlLCB0aGlzLm1pbkRhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIG5leHQgcGVyaW9kIGJ1dHRvbiBpcyBlbmFibGVkLiAqL1xyXG4gIF9uZXh0RW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5tYXhEYXRlIHx8ICF0aGlzLl9pc1NhbWVWaWV3KHRoaXMuX2FjdGl2ZURhdGUsIHRoaXMubWF4RGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keS4gKi9cclxuICBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gVE9ETyhtbWFsZXJiYSk6IFdlIGN1cnJlbnRseSBhbGxvdyBrZXlib2FyZCBuYXZpZ2F0aW9uIHRvIGRpc2FibGVkIGRhdGVzLCBidXQganVzdCBwcmV2ZW50XHJcbiAgICAvLyBkaXNhYmxlZCBvbmVzIGZyb20gYmVpbmcgc2VsZWN0ZWQuIFRoaXMgbWF5IG5vdCBiZSBpZGVhbCwgd2Ugc2hvdWxkIGxvb2sgaW50byB3aGV0aGVyXHJcbiAgICAvLyBuYXZpZ2F0aW9uIHNob3VsZCBza2lwIG92ZXIgZGlzYWJsZWQgZGF0ZXMsIGFuZCBpZiBzbywgaG93IHRvIGltcGxlbWVudCB0aGF0IGVmZmljaWVudGx5LlxyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluTW9udGhWaWV3KGV2ZW50KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09IFwieWVhclwiKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JblllYXJWaWV3KGV2ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JbkNsb2NrVmlldyhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZm9jdXNBY3RpdmVDZWxsKCkge1xyXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSB0d28gZGF0ZXMgcmVwcmVzZW50IHRoZSBzYW1lIHZpZXcgaW4gdGhlIGN1cnJlbnQgdmlldyBtb2RlIChtb250aCBvciB5ZWFyKS4gKi9cclxuICBwcml2YXRlIF9pc1NhbWVWaWV3KGRhdGUxOiBELCBkYXRlMjogRCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTEpID09IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcihkYXRlMikgJiZcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlMSkgPT0gdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlMikgOlxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTEpID09IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcihkYXRlMik7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluTW9udGhWaWV3KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCAtNyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgNyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgSE9NRTpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSxcclxuICAgICAgICAgIDEgLSB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVORDpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSxcclxuICAgICAgICAgICh0aGlzLl9hZGFwdGVyLmdldE51bURheXNJbk1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpIC1cclxuICAgICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuX2FjdGl2ZURhdGUpKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUEFHRV9VUDpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gZXZlbnQuYWx0S2V5ID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAtMSkgOlxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUEFHRV9ET1dOOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBldmVudC5hbHRLZXkgP1xyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIDEpIDpcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVGaWx0ZXJGb3JWaWV3cyh0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICAgICAgdGhpcy5fZGF0ZVNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBEb24ndCBwcmV2ZW50IGRlZmF1bHQgb3IgZm9jdXMgYWN0aXZlIGNlbGwgb24ga2V5cyB0aGF0IHdlIGRvbid0IGV4cGxpY2l0bHkgaGFuZGxlLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzIG9uIHRoZSBjYWxlbmRhciBib2R5IHdoZW4gY2FsZW5kYXIgaXMgaW4geWVhciB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JblllYXJWaWV3KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fcHJldk1vbnRoSW5TYW1lQ29sKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX25leHRNb250aEluU2FtZUNvbCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBIT01FOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAtdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5EOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAxMSAtIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgZXZlbnQuYWx0S2V5ID8gLTEwIDogLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID1cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCBldmVudC5hbHRLZXkgPyAxMCA6IDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIHRoaXMuX21vbnRoU2VsZWN0ZWQodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gRG9uJ3QgcHJldmVudCBkZWZhdWx0IG9yIGZvY3VzIGFjdGl2ZSBjZWxsIG9uIGtleXMgdGhhdCB3ZSBkb24ndCBleHBsaWNpdGx5IGhhbmRsZS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluQ2xvY2tWaWV3KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fY2xvY2tWaWV3ID09IFwiaG91clwiID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJIb3Vycyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTWludXRlcyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jbG9ja1ZpZXcgPT0gXCJob3VyXCIgP1xyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckhvdXJzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTWludXRlcyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgdGhpcy5fdGltZVNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBEb24ndCBwcmV2ZW50IGRlZmF1bHQgb3IgZm9jdXMgYWN0aXZlIGNlbGwgb24ga2V5cyB0aGF0IHdlIGRvbid0IGV4cGxpY2l0bHkgaGFuZGxlLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB0aGUgZGF0ZSBmb3IgdGhlIG1vbnRoIHRoYXQgY29tZXMgYmVmb3JlIHRoZSBnaXZlbiBtb250aCBpbiB0aGUgc2FtZSBjb2x1bW4gaW4gdGhlXHJcbiAgICogY2FsZW5kYXIgdGFibGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfcHJldk1vbnRoSW5TYW1lQ29sKGRhdGU6IEQpOiBEIHtcclxuICAgIC8vIERldGVybWluZSBob3cgbWFueSBtb250aHMgdG8ganVtcCBmb3J3YXJkIGdpdmVuIHRoYXQgdGhlcmUgYXJlIDIgZW1wdHkgc2xvdHMgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgLy8gb2YgZWFjaCB5ZWFyLlxyXG4gICAgY29uc3QgaW5jcmVtZW50ID0gdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA8PSA0ID8gLTUgOlxyXG4gICAgICAodGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA+PSA3ID8gLTcgOiAtMTIpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgaW5jcmVtZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB0aGUgZGF0ZSBmb3IgdGhlIG1vbnRoIHRoYXQgY29tZXMgYWZ0ZXIgdGhlIGdpdmVuIG1vbnRoIGluIHRoZSBzYW1lIGNvbHVtbiBpbiB0aGVcclxuICAgKiBjYWxlbmRhciB0YWJsZS5cclxuICAgKi9cclxuICBwcml2YXRlIF9uZXh0TW9udGhJblNhbWVDb2woZGF0ZTogRCk6IEQge1xyXG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IG1vbnRocyB0byBqdW1wIGZvcndhcmQgZ2l2ZW4gdGhhdCB0aGVyZSBhcmUgMiBlbXB0eSBzbG90cyBhdCB0aGUgYmVnaW5uaW5nXHJcbiAgICAvLyBvZiBlYWNoIHllYXIuXHJcbiAgICBjb25zdCBpbmNyZW1lbnQgPSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpIDw9IDQgPyA3IDpcclxuICAgICAgKHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPj0gNyA/IDUgOiAxMik7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyhkYXRlLCBpbmNyZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxlbmRhclN0YXRlKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGVEb25lKCkge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF8yZGlnaXQobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMDBcIiArIG4pLnNsaWNlKC0yKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gYSBzaW5nbGUgY2FsZW5kYXIgY2VsbC5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgICBwdWJsaWMgZGlzcGxheVZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBjYWxlbmRhciBkYXRhIGluIGEgdGFibGUuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIlttYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keV1cIixcclxuICB0ZW1wbGF0ZTogYDwhLS1cclxuICBJZiB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2UgaW4gdGhlIGZpcnN0IHJvdywgY3JlYXRlIGEgc2VwYXJhdGUgbGFiZWwgcm93LiBXZSBtYXJrIHRoaXMgcm93IGFzXHJcbiAgYXJpYS1oaWRkZW4gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGl0IHRvIGJlIHJlYWQgb3V0IGFzIG9uZSBvZiB0aGUgd2Vla3MgaW4gdGhlIG1vbnRoLlxyXG4tLT5cclxuPHRyICpuZ0lmPVwiX2ZpcnN0Um93T2Zmc2V0IDwgbGFiZWxNaW5SZXF1aXJlZENlbGxzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgPHRkIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWxcIiBbYXR0ci5jb2xzcGFuXT1cIm51bUNvbHNcIiA+e3sgbGFiZWwgfX08L3RkPlxyXG48L3RyPlxyXG5cclxuPCEtLSBDcmVhdGUgdGhlIGZpcnN0IHJvdyBzZXBhcmF0ZWx5IHNvIHdlIGNhbiBpbmNsdWRlIGEgc3BlY2lhbCBzcGFjZXIgY2VsbC4gLS0+XHJcbjx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3M7IGxldCByb3dJbmRleCA9IGluZGV4XCIgcm9sZT1cInJvd1wiPlxyXG4gIDwhLS1cclxuICAgIFdlIG1hcmsgdGhpcyBjZWxsIGFzIGFyaWEtaGlkZGVuIHNvIGl0IGRvZXNuJ3QgZ2V0IHJlYWQgb3V0IGFzIG9uZSBvZiB0aGUgZGF5cyBpbiB0aGUgd2Vlay5cclxuICAtLT5cclxuICA8dGQgKm5nSWY9XCJyb3dJbmRleCA9PT0gMCAmJiBfZmlyc3RSb3dPZmZzZXRcIlxyXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVsXCJcclxuICAgICAgW2F0dHIuY29sc3Bhbl09XCJfZmlyc3RSb3dPZmZzZXRcIj5cclxuICAgIHt7IF9maXJzdFJvd09mZnNldCA+PSBsYWJlbE1pblJlcXVpcmVkQ2VsbHMgPyBsYWJlbCA6ICcnIH19XHJcbiAgPC90ZD5cclxuICA8dGQgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93OyBsZXQgY29sSW5kZXggPSBpbmRleFwiXHJcbiAgICAgIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbFwiXHJcbiAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkXCJcclxuICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWFjdGl2ZV09XCJfaXNBY3RpdmVDZWxsKHJvd0luZGV4LCBjb2xJbmRleClcIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIml0ZW0uYXJpYUxhYmVsXCJcclxuICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkIHx8IG51bGxcIlxyXG4gICAgICAoY2xpY2spPVwiX2NlbGxDbGlja2VkKGl0ZW0pXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50XCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkXT1cInNlbGVjdGVkVmFsdWUgPT09IGl0ZW0udmFsdWVcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktdG9kYXldPVwidG9kYXlWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiPlxyXG4gICAgICB7eyBpdGVtLmRpc3BsYXlWYWx1ZSB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC90ZD5cclxuPC90cj5cclxuYCxcclxuICBzdHlsZXM6IFtgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4O21pbi13aWR0aDoyMjRweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWx7cGFkZGluZzo3LjE0Mjg2JSAwIDcuMTQyODYlIDcuMTQyODYlO2hlaWdodDowO2xpbmUtaGVpZ2h0OjA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCk7dGV4dC1hbGlnbjpsZWZ0fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxse3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE0LjI4NTcxJTtoZWlnaHQ6MDtsaW5lLWhlaWdodDowO3BhZGRpbmc6Ny4xNDI4NiUgMDt0ZXh0LWFsaWduOmNlbnRlcjtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVke2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NSU7bGVmdDo1JTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjkwJTtoZWlnaHQ6OTAlO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyOmZvY3VzIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSw6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xOCl9W2Rpcj1ydGxdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbHtwYWRkaW5nOjAgNy4xNDI4NiUgMCAwOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg2cHgpO3RleHQtYWxpZ246cmlnaHR9YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5XCJcclxuICB9LFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5IHtcclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgdGFibGUuIChlLmcuIFwiSmFuIDIwMTdcIikuICovXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBjZWxscyB0byBkaXNwbGF5IGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSByb3dzOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbFtdW107XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgY29ycmVzcG9uZHMgdG8gdG9kYXkuICovXHJcbiAgQElucHV0KCkgdG9kYXlWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC4gKi9cclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBudW1iZXIgb2YgZnJlZSBjZWxscyBuZWVkZWQgdG8gZml0IHRoZSBsYWJlbCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsTWluUmVxdWlyZWRDZWxsczogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSBudW1Db2xzID0gNztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdG8gYWxsb3cgc2VsZWN0aW9uIG9mIGRpc2FibGVkIGNlbGxzLiAqL1xyXG4gIEBJbnB1dCgpIGFsbG93RGlzYWJsZWRTZWxlY3Rpb24gPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRoZSBjZWxsIG51bWJlciBvZiB0aGUgYWN0aXZlIGNlbGwgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUNlbGwgPSAwO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZC4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBfY2VsbENsaWNrZWQoY2VsbDogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbGxvd0Rpc2FibGVkU2VsZWN0aW9uICYmICFjZWxsLmVuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQoY2VsbC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIG51bWJlciBvZiBibGFuayBjZWxscyB0byBwdXQgYXQgdGhlIGJlZ2lubmluZyBmb3IgdGhlIGZpcnN0IHJvdy4gKi9cclxuICBnZXQgX2ZpcnN0Um93T2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzICYmIHRoaXMucm93cy5sZW5ndGggJiYgdGhpcy5yb3dzWzBdLmxlbmd0aCA/XHJcbiAgICAgIHRoaXMubnVtQ29scyAtIHRoaXMucm93c1swXS5sZW5ndGggOiAwO1xyXG4gIH1cclxuXHJcbiAgX2lzQWN0aXZlQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY2VsbE51bWJlciA9IHJvd0luZGV4ICogdGhpcy5udW1Db2xzICsgY29sSW5kZXg7XHJcblxyXG4gICAgLy8gQWNjb3VudCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgZmlyc3Qgcm93IG1heSBub3QgaGF2ZSBhcyBtYW55IGNlbGxzLlxyXG4gICAgaWYgKHJvd0luZGV4KSB7XHJcbiAgICAgIGNlbGxOdW1iZXIgLT0gdGhpcy5fZmlyc3RSb3dPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNlbGxOdW1iZXIgPT09IHRoaXMuYWN0aXZlQ2VsbDtcclxuICB9XHJcbn1cclxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDTE9DS19SQURJVVMgPSA1MDtcclxuZXhwb3J0IGNvbnN0IENMT0NLX0lOTkVSX1JBRElVUyA9IDI3LjU7XHJcbmV4cG9ydCBjb25zdCBDTE9DS19PVVRFUl9SQURJVVMgPSA0MS4yNTtcclxuZXhwb3J0IGNvbnN0IENMT0NLX1RJQ0tfUkFESVVTID0gNy4wODMzO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2xvY2tWaWV3ID0gXCJob3VyXCIgfCBcIm1pbnV0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY2xvY2sgdGhhdCBpcyB1c2VkIGFzIHBhcnQgb2YgdGhlIGRhdGVwaWNrZXIuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci1jbG9ja1wiLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9ja1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VudGVyXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1oYW5kXCIgW25nU3R5bGVdPVwiX2hhbmRcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhvdXJzXCIgW2NsYXNzLmFjdGl2ZV09XCJfaG91clZpZXdcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2hvdXJzXCJcclxuICAgICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbFwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZF09XCJfc2VsZWN0ZWRIb3VyID09IGl0ZW0udmFsdWVcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtZGlzYWJsZWRdPVwiIWl0ZW0uZW5hYmxlZFwiXHJcbiAgICAgICAgIFtzdHlsZS50b3BdPVwiaXRlbS50b3ArJyUnXCJcclxuICAgICAgICAgW3N0eWxlLmxlZnRdPVwiaXRlbS5sZWZ0KyclJ1wiXHJcbiAgICAgICAgIFtzdHlsZS5mb250U2l6ZV09XCJpdGVtLmZvbnRTaXplXCI+e3sgaXRlbS5kaXNwbGF5VmFsdWUgfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLW1pbnV0ZXNcIiBbY2xhc3MuYWN0aXZlXT1cIiFfaG91clZpZXdcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX21pbnV0ZXNcIlxyXG4gICAgICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsXCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLXNlbGVjdGVkXT1cIl9zZWxlY3RlZE1pbnV0ZSA9PSBpdGVtLnZhbHVlXCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxyXG4gICAgICAgICBbc3R5bGUudG9wXT1cIml0ZW0udG9wKyclJ1wiXHJcbiAgICAgICAgIFtzdHlsZS5sZWZ0XT1cIml0ZW0ubGVmdCsnJSdcIj57eyBpdGVtLmRpc3BsYXlWYWx1ZSB9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttaW4td2lkdGg6MjI0cHg7bWFyZ2luOjhweDtmb250LXNpemU6MTRweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2t7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MDtwYWRkaW5nLXRvcDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjIlO2hlaWdodDoyJTttYXJnaW46LTElO2JvcmRlci1yYWRpdXM6NTAlfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staGFuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxcHg7bWFyZ2luOjAgYXV0bzstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Ym90dG9tO3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staGFuZDo6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOi00cHg7bGVmdDotNHB4O3dpZHRoOjhweDtoZWlnaHQ6OHB4O2JvcmRlci1yYWRpdXM6NTAlfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staG91cnMsLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1taW51dGVze3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2l0aW9uOjM1MG1zOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMik7dHJhbnNmb3JtOnNjYWxlKDEuMil9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1ob3Vycy5hY3RpdmUsLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1taW51dGVzLmFjdGl2ZXtvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLW1pbnV0ZXN7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjgpO3RyYW5zZm9ybTpzY2FsZSguOCl9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxse3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDt3aWR0aDoxNC4xNjY2JTtoZWlnaHQ6MTQuMTY2NiU7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlci1yYWRpdXM6NTAlO2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcn0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGw6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZCk6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1kaXNhYmxlZCk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLXNlbGVjdGVke2NvbG9yOiNmZmZ9YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJyb2xlXCI6IFwiY2xvY2tcIixcclxuICAgIFwiKG1vdXNlZG93bilcIjogXCJfaGFuZGxlTW91c2Vkb3duKCRldmVudClcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2xvY2s8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgY2xvY2sgdmlldy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBhY3RpdmVEYXRlKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRCkge1xyXG4gICAgbGV0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY2xhbXBEYXRlKHZhbHVlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XHJcbiAgICBpZiAoIXRoaXMuX2FkYXB0ZXIuc2FtZU1pbnV0ZShvbGRBY3RpdmVEYXRlLCB0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hY3RpdmVEYXRlOiBEO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fYWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1pbkRhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbkRhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9hZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfdGltZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXhEYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1heERhdGUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9tYXhEYXRlID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fYWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWF4RGF0ZTogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjbG9jayBzaG91bGQgYmUgc3RhcnRlZCBpbiBob3VyIG9yIG1pbnV0ZSB2aWV3LiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN0YXJ0Vmlldyh2YWx1ZTogQ2xvY2tWaWV3KSB7XHJcbiAgICB0aGlzLl9ob3VyVmlldyA9IHZhbHVlICE9IFwibWludXRlXCI7XHJcbiAgfVxyXG5cclxuICAvKiogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cclxuICBASW5wdXQoKSBkYXRlRmlsdGVyOiAoZGF0ZTogRCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBpbnRlcnZhbDogbnVtYmVyID0gMTtcclxuXHJcbiAgQElucHV0KCkgdHdlbHZlaG91cjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUgY2hhbmdlcy4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBhY3RpdmVEYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICAvKiogSG91cnMgYW5kIE1pbnV0ZXMgcmVwcmVzZW50aW5nIHRoZSBjbG9jayB2aWV3LiAqL1xyXG4gIF9ob3VyczogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gIF9taW51dGVzOiBBcnJheTxPYmplY3Q+ID0gW107XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjbG9jayBpcyBpbiBob3VyIHZpZXcuICovXHJcbiAgX2hvdXJWaWV3OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgX3NlbGVjdGVkSG91cjogbnVtYmVyO1xyXG4gIF9zZWxlY3RlZE1pbnV0ZTogbnVtYmVyO1xyXG5cclxuICBnZXQgX2hhbmQoKTogYW55IHtcclxuICAgIHRoaXMuX3NlbGVjdGVkSG91ciA9IHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRNaW51dGUgPSB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgbGV0IGRlZyA9IDA7XHJcbiAgICBsZXQgcmFkaXVzID0gQ0xPQ0tfT1VURVJfUkFESVVTO1xyXG4gICAgaWYgKHRoaXMuX2hvdXJWaWV3KSB7XHJcbiAgICAgIGxldCBvdXRlciA9IHRoaXMuX3NlbGVjdGVkSG91ciA+IDAgJiYgdGhpcy5fc2VsZWN0ZWRIb3VyIDwgMTM7XHJcbiAgICAgIHJhZGl1cyA9IG91dGVyID8gQ0xPQ0tfT1VURVJfUkFESVVTIDogQ0xPQ0tfSU5ORVJfUkFESVVTO1xyXG4gICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgICAgcmFkaXVzID0gQ0xPQ0tfT1VURVJfUkFESVVTO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZyA9IE1hdGgucm91bmQodGhpcy5fc2VsZWN0ZWRIb3VyICogKDM2MCAvICgyNCAvIDIpKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWcgPSBNYXRoLnJvdW5kKHRoaXMuX3NlbGVjdGVkTWludXRlICogKDM2MCAvIDYwKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBcInRyYW5zZm9ybVwiOiBgcm90YXRlKCR7ZGVnfWRlZylgLFxyXG4gICAgICBcImhlaWdodFwiOiBgJHtyYWRpdXN9JWAsXHJcbiAgICAgIFwibWFyZ2luLXRvcFwiOiBgJHs1MCAtIHJhZGl1c30lYFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW91c2VNb3ZlTGlzdGVuZXI6IGFueTtcclxuICBwcml2YXRlIG1vdXNlVXBMaXN0ZW5lcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPikge1xyXG4gICAgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZU1vdXNlbW92ZShldmVudCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5tb3VzZVVwTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZU1vdXNldXAoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlIHx8IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIG1vdXNlZG93biBldmVudHMgb24gdGhlIGNsb2NrIGJvZHkuICovXHJcbiAgX2hhbmRsZU1vdXNlZG93bihldmVudDogYW55KSB7XHJcbiAgICB0aGlzLl90aW1lQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRUaW1lKGV2ZW50KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVNb3VzZW1vdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0VGltZShldmVudCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTW91c2V1cCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcclxuICAgIGlmICh0aGlzLl90aW1lQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBJbml0aWFsaXplcyB0aGlzIGNsb2NrIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgIHRoaXMuX2hvdXJzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLl9taW51dGVzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgbGV0IGhvdXJOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0SG91ck5hbWVzKCk7XHJcbiAgICBsZXQgbWludXRlTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZU5hbWVzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IChob3VyTmFtZXMubGVuZ3RoIC8gMikgKyAxOyBpKyspIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gaSAvIDYgKiBNYXRoLlBJO1xyXG4gICAgICAgIGxldCByYWRpdXMgPSBDTE9DS19PVVRFUl9SQURJVVM7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCBpICsgMSwgMCk7XHJcbiAgICAgICAgbGV0IGVuYWJsZWQgPVxyXG4gICAgICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxyXG4gICAgICAgICAgKCF0aGlzLm1heERhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKTtcclxuICAgICAgICB0aGlzLl9ob3Vycy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiBpLFxyXG4gICAgICAgICAgZGlzcGxheVZhbHVlOiBpID09PSAwID8gXCIwMFwiIDogaG91ck5hbWVzW2ldLFxyXG4gICAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcclxuICAgICAgICAgIHRvcDogQ0xPQ0tfUkFESVVTIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIENMT0NLX1RJQ0tfUkFESVVTLFxyXG4gICAgICAgICAgbGVmdDogQ0xPQ0tfUkFESVVTICsgTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyAtIENMT0NLX1RJQ0tfUkFESVVTXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91ck5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGkgLyA2ICogTWF0aC5QSTtcclxuICAgICAgICBsZXQgb3V0ZXIgPSBpID4gMCAmJiBpIDwgMTMsXHJcbiAgICAgICAgICByYWRpdXMgPSBvdXRlciA/IENMT0NLX09VVEVSX1JBRElVUyA6IENMT0NLX0lOTkVSX1JBRElVUztcclxuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIGksIDApO1xyXG4gICAgICAgIGxldCBlbmFibGVkID1cclxuICAgICAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgICAgICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMCkgJiZcclxuICAgICAgICAgICghdGhpcy5kYXRlRmlsdGVyIHx8IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUuSE9VUikpO1xyXG4gICAgICAgIHRoaXMuX2hvdXJzLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IGksXHJcbiAgICAgICAgICBkaXNwbGF5VmFsdWU6IGkgPT09IDAgPyBcIjAwXCIgOiBob3VyTmFtZXNbaV0sXHJcbiAgICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxyXG4gICAgICAgICAgdG9wOiBDTE9DS19SQURJVVMgLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzIC0gQ0xPQ0tfVElDS19SQURJVVMsXHJcbiAgICAgICAgICBsZWZ0OiBDTE9DS19SQURJVVMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gQ0xPQ0tfVElDS19SQURJVVMsXHJcbiAgICAgICAgICBmb250U2l6ZTogaSA+IDAgJiYgaSA8IDEzID8gXCJcIiA6IFwiODAlXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWludXRlTmFtZXMubGVuZ3RoOyBpICs9IDUpIHtcclxuICAgICAgbGV0IHJhZGlhbiA9IGkgLyAzMCAqIE1hdGguUEk7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksIGkpO1xyXG4gICAgICBsZXQgZW5hYmxlZCA9XHJcbiAgICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxyXG4gICAgICAgICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMCkgJiZcclxuICAgICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlLk1JTlVURSkpO1xyXG4gICAgICB0aGlzLl9taW51dGVzLnB1c2goe1xyXG4gICAgICAgIHZhbHVlOiBpLFxyXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogaSA9PT0gMCA/IFwiMDBcIiA6IG1pbnV0ZU5hbWVzW2ldLFxyXG4gICAgICAgIGVuYWJsZWQ6IGVuYWJsZWQsXHJcbiAgICAgICAgdG9wOiBDTE9DS19SQURJVVMgLSBNYXRoLmNvcyhyYWRpYW4pICogQ0xPQ0tfT1VURVJfUkFESVVTIC0gQ0xPQ0tfVElDS19SQURJVVMsXHJcbiAgICAgICAgbGVmdDogQ0xPQ0tfUkFESVVTICsgTWF0aC5zaW4ocmFkaWFuKSAqIENMT0NLX09VVEVSX1JBRElVUyAtIENMT0NLX1RJQ0tfUkFESVVTXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IFRpbWVcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBwcml2YXRlIHNldFRpbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgbGV0IHRyaWdnZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgdHJpZ2dlclJlY3QgPSB0cmlnZ2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHdpZHRoID0gdHJpZ2dlci5vZmZzZXRXaWR0aDtcclxuICAgIGxldCBoZWlnaHQgPSB0cmlnZ2VyLm9mZnNldEhlaWdodDtcclxuICAgIGxldCBwYWdlWCA9IGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQgPyBldmVudC5wYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICBsZXQgcGFnZVkgPSBldmVudC5wYWdlWSAhPT0gdW5kZWZpbmVkID8gZXZlbnQucGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xyXG4gICAgbGV0IHggPSAod2lkdGggLyAyKSAtIChwYWdlWCAtIHRyaWdnZXJSZWN0LmxlZnQgLSB3aW5kb3cucGFnZVhPZmZzZXQpO1xyXG4gICAgbGV0IHkgPSAoaGVpZ2h0IC8gMikgLSAocGFnZVkgLSB0cmlnZ2VyUmVjdC50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQpO1xyXG4gICAgbGV0IHJhZGlhbiA9IE1hdGguYXRhbjIoLXgsIHkpO1xyXG4gICAgbGV0IHVuaXQgPSBNYXRoLlBJIC8gKHRoaXMuX2hvdXJWaWV3ID8gNiA6ICh0aGlzLmludGVydmFsID8gKDMwIC8gdGhpcy5pbnRlcnZhbCkgOiAzMCkpO1xyXG4gICAgbGV0IHogPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XHJcbiAgICBsZXQgb3V0ZXIgPSB0aGlzLl9ob3VyVmlldyAmJiB6ID4gKCh3aWR0aCAqIChDTE9DS19PVVRFUl9SQURJVVMgLyAxMDApKSArXHJcbiAgICAgICh3aWR0aCAqIChDTE9DS19JTk5FUl9SQURJVVMgLyAxMDApKSkgLyAyO1xyXG5cclxuICAgIGlmIChyYWRpYW4gPCAwKSB7XHJcbiAgICAgIHJhZGlhbiA9IE1hdGguUEkgKiAyICsgcmFkaWFuO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlID0gTWF0aC5yb3VuZChyYWRpYW4gLyB1bml0KTtcclxuXHJcbiAgICBsZXQgZGF0ZTtcclxuICAgIGlmICh0aGlzLl9ob3VyVmlldykge1xyXG4gICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDEyIDogdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMikge1xyXG4gICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWx1ZSA9IG91dGVyID8gKHZhbHVlID09PSAwID8gMTIgOiB2YWx1ZSkgOiB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSArIDEyO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgdmFsdWUsIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgICB2YWx1ZSAqPSB0aGlzLmludGVydmFsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gNjApIHtcclxuICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsYW1wZWQgPSB0aGlzLl9hZGFwdGVyLmNsYW1wRGF0ZShkYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XHJcbiAgICBpZiAoZGF0ZSA9PT0gY2xhbXBlZCkge1xyXG4gICAgICB0aGlzLl90aW1lQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGNsYW1wZWQ7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9iaWRpXCI7XHJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gXCJAYW5ndWxhci9jZGsvY29lcmNpb25cIjtcclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xyXG5pbXBvcnQge1xyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFBvc2l0aW9uU3RyYXRlZ3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9wb3J0YWxcIjtcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHtcclxuICBNYXREaWFsb2csXHJcbiAgTWF0RGlhbG9nUmVmXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIgfSBmcm9tIFwiLi9jYWxlbmRhclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VySW5wdXQgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1pbnB1dFwiO1xyXG5cclxuLyoqIFVzZWQgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGVhY2ggZGF0ZXBpY2tlciBpbnN0YW5jZS4gKi9cclxubGV0IGRhdGV0aW1lcGlja2VyVWlkID0gMDtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdXNlZCBhcyB0aGUgY29udGVudCBmb3IgdGhlIGRhdGVwaWNrZXIgZGlhbG9nIGFuZCBwb3B1cC4gV2UgdXNlIHRoaXMgaW5zdGVhZCBvZiB1c2luZ1xyXG4gKiBNYXRDYWxlbmRhciBkaXJlY3RseSBhcyB0aGUgY29udGVudCBzbyB3ZSBjYW4gY29udHJvbCB0aGUgaW5pdGlhbCBmb2N1cy4gVGhpcyBhbHNvIGdpdmVzIHVzIGFcclxuICogcGxhY2UgdG8gcHV0IGFkZGl0aW9uYWwgZmVhdHVyZXMgb2YgdGhlIHBvcHVwIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBjYWxlbmRhciBpdHNlbGYgaW4gdGhlXHJcbiAqIGZ1dHVyZS4gKGUuZy4gY29uZmlybWF0aW9uIGJ1dHRvbnMpLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudFwiLFxyXG4gIHRlbXBsYXRlOiBgPG1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhciBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCIgY2RrVHJhcEZvY3VzXHJcbiAgICAgICAgICAgICAgW2lkXT1cImRhdGV0aW1lcGlja2VyLmlkXCJcclxuICAgICAgICAgICAgICBbYXR0ci5tb2RlXT1cImRhdGV0aW1lcGlja2VyLm1vZGVcIlxyXG4gICAgICAgICAgICAgIFtzdGFydFZpZXddPVwiZGF0ZXRpbWVwaWNrZXIuc3RhcnRWaWV3XCJcclxuICAgICAgICAgICAgICBbdHlwZV09XCJkYXRldGltZXBpY2tlci50eXBlXCJcclxuICAgICAgICAgICAgICBbdGltZUludGVydmFsXT1cImRhdGV0aW1lcGlja2VyLnRpbWVJbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICAgW21pbkRhdGVdPVwiZGF0ZXRpbWVwaWNrZXIuX21pbkRhdGVcIlxyXG4gICAgICAgICAgICAgIFttYXhEYXRlXT1cImRhdGV0aW1lcGlja2VyLl9tYXhEYXRlXCJcclxuICAgICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJkYXRldGltZXBpY2tlci5fZGF0ZUZpbHRlclwiXHJcbiAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cImRhdGV0aW1lcGlja2VyLl9zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgW3N0YXJ0QXRdPVwiZGF0ZXRpbWVwaWNrZXIuc3RhcnRBdFwiXHJcbiAgICAgICAgICAgICAgW2NvbmZpcm1CdXR0b25MYWJlbF09XCJkYXRldGltZXBpY2tlci5jb25maXJtQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgICAgICAgIFtjYW5jZWxCdXR0b25MYWJlbF09XCJkYXRldGltZXBpY2tlci5jYW5jZWxCdXR0b25MYWJlbFwiXHJcbiAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cImRhdGV0aW1lcGlja2VyLl9zZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cImRhdGV0aW1lcGlja2VyLmNsb3NlKClcIj5cclxuPC9tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXI+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoycHg7b3ZlcmZsb3c6aGlkZGVufS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJ7d2lkdGg6Mjk2cHg7aGVpZ2h0OmF1dG99Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWxhbmRzY2FwZV17d2lkdGg6NDQ2cHg7aGVpZ2h0OmF1dG99QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpey5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXXt3aWR0aDo0NDZweDtoZWlnaHQ6YXV0b319Lm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmJsb2NrO2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsLmNkay1vdmVybGF5LWNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTouNDh9LmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC42KX0ubWF0LWRhdGV0aW1lcGlja2VyLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXJ7cGFkZGluZzowfWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiY2xhc3NcIjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudFwiLFxyXG4gICAgXCJbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnQtdG91Y2hdXCI6IFwiZGF0ZXRpbWVwaWNrZXI/LnRvdWNoVWlcIixcclxuICAgIFwiKGtleWRvd24pXCI6IFwiX2hhbmRsZUtleWRvd24oJGV2ZW50KVwiXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBkYXRldGltZXBpY2tlcjogTWF0RGF0ZXRpbWVwaWNrZXI8RD47XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcikgX2NhbGVuZGFyOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyPEQ+O1xyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhci5fZm9jdXNBY3RpdmVDZWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGtleWRvd24gZXZlbnQgb24gZGF0ZXBpY2tlciBjb250ZW50LlxyXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQuXHJcbiAgICovXHJcbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUpIHtcclxuICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5jbG9zZSgpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlclwiLFxyXG4gIGV4cG9ydEFzOiBcIm1hdERhdGV0aW1lcGlja2VyXCIsXHJcbiAgdGVtcGxhdGU6IFwiXCIsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKiBUaGUgZGF0ZSB0byBvcGVuIHRoZSBjYWxlbmRhciB0byBpbml0aWFsbHkuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc3RhcnRBdCgpOiBEIHwgbnVsbCB7XHJcbiAgICAvLyBJZiBhbiBleHBsaWNpdCBzdGFydEF0IGlzIHNldCB3ZSBzdGFydCB0aGVyZSwgb3RoZXJ3aXNlIHdlIHN0YXJ0IGF0IHdoYXRldmVyIHRoZSBjdXJyZW50bHlcclxuICAgIC8vIHNlbGVjdGVkIHZhbHVlIGlzLlxyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQgfHwgKHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA/IHRoaXMuX2RhdGVwaWNrZXJJbnB1dC52YWx1ZSA6IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXJ0QXQoZGF0ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydEF0OiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSB2aWV3IHRoYXQgdGhlIGNhbGVuZGFyIHNob3VsZCBzdGFydCBpbi4gKi9cclxuICBASW5wdXQoKSBzdGFydFZpZXc6IFwiY2xvY2tcIiB8IFwibW9udGhcIiB8IFwieWVhclwiID0gXCJtb250aFwiO1xyXG4gIEBJbnB1dCgpIG1vZGU6IFwiYXV0b1wiIHwgXCJwb3J0cmFpdFwiIHwgXCJsYW5kc2NhcGVcIiA9IFwiYXV0b1wiO1xyXG4gIEBJbnB1dCgpIHRpbWVJbnRlcnZhbDogbnVtYmVyID0gMTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgb3Blbk9uRm9jdXMoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vcGVuT25Gb2N1czsgfVxyXG4gIHNldCBvcGVuT25Gb2N1cyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9vcGVuT25Gb2N1cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cclxuICBwcml2YXRlIF9vcGVuT25Gb2N1czogYm9vbGVhbjtcclxuXHJcbiAgX2hhbmRsZUZvY3VzKCkge1xyXG4gICAgaWYgKCF0aGlzLm9wZW5lZCAmJiB0aGlzLm9wZW5PbkZvY3VzKSB7XHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHR5cGUodmFsdWU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCBcImRhdGVcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3R5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgY2FsZW5kYXIgVUkgaXMgaW4gdG91Y2ggbW9kZS4gSW4gdG91Y2ggbW9kZSB0aGUgY2FsZW5kYXIgb3BlbnMgaW4gYSBkaWFsb2cgcmF0aGVyXHJcbiAgICogdGhhbiBhIHBvcHVwIGFuZCBlbGVtZW50cyBoYXZlIG1vcmUgcGFkZGluZyB0byBhbGxvdyBmb3IgYmlnZ2VyIHRvdWNoIHRhcmdldHMuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdG91Y2hVaSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b3VjaFVpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdWNoVWkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3RvdWNoVWkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdG91Y2hVaSA9IGZhbHNlO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlciBwb3AtdXAgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0ID9cclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0LmRpc2FibGVkIDogISF0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG5cclxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UubmV4dChuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgbmV3IHNlbGVjdGVkIGRhdGUgd2hlbiBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuXHJcbiAgICogQGRlcHJlY2F0ZWQgU3dpdGNoIHRvIHRoZSBgZGF0ZUNoYW5nZWAgYW5kIGBkYXRlSW5wdXRgIGJpbmRpbmcgb24gdGhlIGlucHV0IGVsZW1lbnQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIENsYXNzZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBkYXRlIHBpY2tlciBwYW5lbC4gU3VwcG9ydHMgdGhlIHNhbWUgc3ludGF4IGFzIGBuZ0NsYXNzYC4gKi9cclxuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgQElucHV0KCkgY29uZmlybUJ1dHRvbkxhYmVsID0gJ0NvbmZpcm0nO1xyXG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvbkxhYmVsID0gJ0NhbmNlbCc7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGhhcyBiZWVuIG9wZW5lZC4gKi9cclxuICBAT3V0cHV0KFwib3BlbmVkXCIpIG9wZW5lZFN0cmVhbTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBoYXMgYmVlbiBjbG9zZWQuICovXHJcbiAgQE91dHB1dChcImNsb3NlZFwiKSBjbG9zZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIGlzIG9wZW4uICovXHJcbiAgb3BlbmVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgaWQgZm9yIHRoZSBkYXRlcGlja2VyIGNhbGVuZGFyLiAqL1xyXG4gIGlkID0gYG1hdC1kYXRldGltZXBpY2tlci0ke2RhdGV0aW1lcGlja2VyVWlkKyt9YDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBnZXQgX3NlbGVjdGVkKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWxpZFNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IF9zZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3ZhbGlkU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ZhbGlkU2VsZWN0ZWQ6IEQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBnZXQgX21pbkRhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWluO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBnZXQgX21heERhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9kYXRlRmlsdGVyKCk6IChkYXRlOiBEIHwgbnVsbCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Ll9kYXRlRmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IHdoZW4gdGhlIGNhbGVuZGFyIGlzIG9wZW5lZCBhcyBhIHBvcHVwLiAqL1xyXG4gIHByaXZhdGUgX3BvcHVwUmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIGRpYWxvZyB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBkaWFsb2cuICovXHJcbiAgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PiB8IG51bGw7XHJcblxyXG4gIC8qKiBBIHBvcnRhbCBjb250YWluaW5nIHRoZSBjYWxlbmRhciBmb3IgdGhpcyBkYXRlcGlja2VyLiAqL1xyXG4gIHByaXZhdGUgX2NhbGVuZGFyUG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+PjtcclxuXHJcbiAgLyoqIFRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBkYXRlcGlja2VyIHdhcyBvcGVuZWQuICovXHJcbiAgcHJpdmF0ZSBfZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9pbnB1dFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHRoaXMgZGF0ZXBpY2tlciBpcyBhc3NvY2lhdGVkIHdpdGguICovXHJcbiAgX2RhdGVwaWNrZXJJbnB1dDogTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgZGlzYWJsZWQuICovXHJcbiAgX2Rpc2FibGVkQ2hhbmdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZKSBwcml2YXRlIF9zY3JvbGxTdHJhdGVneSxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9pbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuY29tcGxldGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5fcG9wdXBSZWYpIHtcclxuICAgICAgdGhpcy5fcG9wdXBSZWYuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFNlbGVjdHMgdGhlIGdpdmVuIGRhdGUgKi9cclxuICBfc2VsZWN0KGRhdGU6IEQpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IGRhdGU7XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRldGltZShvbGRWYWx1ZSwgdGhpcy5fc2VsZWN0ZWQpKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvblxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlZC5lbWl0KGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYW4gaW5wdXQgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXHJcbiAgICogQHBhcmFtIGlucHV0IFRoZSBkYXRlcGlja2VyIGlucHV0IHRvIHJlZ2lzdGVyIHdpdGggdGhpcyBkYXRlcGlja2VyLlxyXG4gICAqL1xyXG4gIF9yZWdpc3RlcklucHV0KGlucHV0OiBNYXREYXRldGltZXBpY2tlcklucHV0PEQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiQSBNYXREYXRlcGlja2VyIGNhbiBvbmx5IGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBpbnB1dC5cIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQgPSBpbnB1dDtcclxuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uID1cclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0Ll92YWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEIHwgbnVsbCkgPT4gdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIuICovXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiQXR0ZW1wdGVkIHRvIG9wZW4gYW4gTWF0RGF0ZXBpY2tlciB3aXRoIG5vIGFzc29jaWF0ZWQgaW5wdXQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b3VjaFVpID8gdGhpcy5fb3BlbkFzRGlhbG9nKCkgOiB0aGlzLl9vcGVuQXNQb3B1cCgpO1xyXG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVuZWRTdHJlYW0uZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsb3NlIHRoZSBjYWxlbmRhci4gKi9cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3BvcHVwUmVmICYmIHRoaXMuX3BvcHVwUmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XHJcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICB0aGlzLl9kaWFsb2dSZWYgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2NhbGVuZGFyUG9ydGFsICYmIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmlzQXR0YWNoZWQpIHtcclxuICAgICAgdGhpcy5fY2FsZW5kYXJQb3J0YWwuZGV0YWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgLy8gVGhlIGBfb3BlbmVkYCBjb3VsZCd2ZSBiZWVuIHJlc2V0IGFscmVhZHkgaWZcclxuICAgICAgLy8gd2UgZ290IHR3byBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbi5cclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsb3NlZFN0cmVhbS5lbWl0KCk7XHJcbiAgICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuICYmXHJcbiAgICAgIHR5cGVvZiB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAvLyBCZWNhdXNlIElFIG1vdmVzIGZvY3VzIGFzeW5jaHJvbm91c2x5LCB3ZSBjYW4ndCBjb3VudCBvbiBpdCBiZWluZyByZXN0b3JlZCBiZWZvcmUgd2UndmVcclxuICAgICAgLy8gbWFya2VkIHRoZSBkYXRlcGlja2VyIGFzIGNsb3NlZC4gSWYgdGhlIGV2ZW50IGZpcmVzIG91dCBvZiBzZXF1ZW5jZSBhbmQgdGhlIGVsZW1lbnQgdGhhdFxyXG4gICAgICAvLyB3ZSdyZSByZWZvY3VzaW5nIG9wZW5zIHRoZSBkYXRlcGlja2VyIG9uIGZvY3VzLCB0aGUgdXNlciBjb3VsZCBiZSBzdHVjayB3aXRoIG5vdCBiZWluZ1xyXG4gICAgICAvLyBhYmxlIHRvIGNsb3NlIHRoZSBjYWxlbmRhciBhdCBhbGwuIFdlIHdvcmsgYXJvdW5kIGl0IGJ5IG1ha2luZyB0aGUgbG9naWMsIHRoYXQgbWFya3NcclxuICAgICAgLy8gdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLCBhc3luYyBhcyB3ZWxsLlxyXG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMoKTtcclxuICAgICAgc2V0VGltZW91dChjb21wbGV0ZUNsb3NlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXBsZXRlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhciBhcyBhIGRpYWxvZy4gKi9cclxuICBwcml2YXRlIF9vcGVuQXNEaWFsb2coKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kaWFsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbihNYXREYXRldGltZXBpY2tlckNvbnRlbnQsIHtcclxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiBcImx0clwiLFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBwYW5lbENsYXNzOiBcIm1hdC1kYXRldGltZXBpY2tlci1kaWFsb2dcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRldGltZXBpY2tlciA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBwb3B1cC4gKi9cclxuICBwcml2YXRlIF9vcGVuQXNQb3B1cCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fY2FsZW5kYXJQb3J0YWwpIHtcclxuICAgICAgdGhpcy5fY2FsZW5kYXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsPE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPj4oTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3BvcHVwUmVmKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZVBvcHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPj4gPVxyXG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLmF0dGFjaCh0aGlzLl9jYWxlbmRhclBvcnRhbCk7XHJcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRldGltZXBpY2tlciA9IHRoaXM7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9uY2UgdGhlIGNhbGVuZGFyIGhhcyByZW5kZXJlZC5cclxuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9wb3B1cFJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9wb3B1cFJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cC4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVQb3B1cCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX2NyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpLFxyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYmFja2Ryb3BDbGFzczogXCJtYXQtb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6IFwibHRyXCIsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9zY3JvbGxTdHJhdGVneSgpLFxyXG4gICAgICBwYW5lbENsYXNzOiBcIm1hdC1kYXRldGltZXBpY2tlci1wb3B1cFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9wb3B1cFJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSB0aGUgcG9wdXAgUG9zaXRpb25TdHJhdGVneS4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVQb3B1cFBvc2l0aW9uU3RyYXRlZ3koKTogUG9zaXRpb25TdHJhdGVneSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLl9kYXRlcGlja2VySW5wdXQuZ2V0UG9wdXBDb25uZWN0aW9uRWxlbWVudFJlZigpLFxyXG4gICAgICAgIHtvcmlnaW5YOiBcInN0YXJ0XCIsIG9yaWdpblk6IFwiYm90dG9tXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJzdGFydFwiLCBvdmVybGF5WTogXCJ0b3BcIn1cclxuICAgICAgKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAge29yaWdpblg6IFwic3RhcnRcIiwgb3JpZ2luWTogXCJ0b3BcIn0sXHJcbiAgICAgICAge292ZXJsYXlYOiBcInN0YXJ0XCIsIG92ZXJsYXlZOiBcImJvdHRvbVwifVxyXG4gICAgICApXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcclxuICAgICAgICB7b3JpZ2luWDogXCJlbmRcIiwgb3JpZ2luWTogXCJib3R0b21cIn0sXHJcbiAgICAgICAge292ZXJsYXlYOiBcImVuZFwiLCBvdmVybGF5WTogXCJ0b3BcIn1cclxuICAgICAgKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAge29yaWdpblg6IFwiZW5kXCIsIG9yaWdpblk6IFwidG9wXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJlbmRcIiwgb3ZlcmxheVk6IFwiYm90dG9tXCJ9XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gXCJAYW5ndWxhci9jZGsvY29lcmNpb25cIjtcclxuaW1wb3J0IHsgRE9XTl9BUlJPVyB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgTkdfVkFMSURBVE9SUyxcclxuICBOR19WQUxVRV9BQ0NFU1NPUixcclxuICBWYWxpZGF0aW9uRXJyb3JzLFxyXG4gIFZhbGlkYXRvcixcclxuICBWYWxpZGF0b3JGbixcclxuICBWYWxpZGF0b3JzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdERhdGV0aW1lcGlja2VySW5wdXQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTUFUX0RBVEVUSU1FUElDS0VSX1ZBTElEQVRPUlM6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdERhdGV0aW1lcGlja2VySW5wdXQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdXNlZCBmb3IgZGF0ZXBpY2tlciBpbnB1dCBhbmQgY2hhbmdlIGV2ZW50cy4gV2UgZG9uJ3QgYWx3YXlzIGhhdmUgYWNjZXNzIHRvIGEgbmF0aXZlXHJcbiAqIGlucHV0IG9yIGNoYW5nZSBldmVudCBiZWNhdXNlIHRoZSBldmVudCBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBieSB0aGUgdXNlciBjbGlja2luZyBvbiB0aGVcclxuICogY2FsZW5kYXIgcG9wdXAuIEZvciBjb25zaXN0ZW5jeSwgd2UgYWx3YXlzIHVzZSBNYXREYXRlcGlja2VySW5wdXRFdmVudCBpbnN0ZWFkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudDxEPiB7XHJcbiAgLyoqIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSB0YXJnZXQgZGF0ZXBpY2tlciBpbnB1dC4gKi9cclxuICB2YWx1ZTogRCB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0YXJnZXQ6IE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD4sIHB1YmxpYyB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudGFyZ2V0LnZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIERpcmVjdGl2ZSB1c2VkIHRvIGNvbm5lY3QgYW4gaW5wdXQgdG8gYSBNYXREYXRlcGlja2VyLiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJpbnB1dFttYXREYXRldGltZXBpY2tlcl1cIixcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUixcclxuICAgIE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxJREFUT1JTLFxyXG4gICAge3Byb3ZpZGU6IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE1hdERhdGV0aW1lcGlja2VySW5wdXR9LFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbYXR0ci5hcmlhLWhhc3BvcHVwXVwiOiBcInRydWVcIixcclxuICAgIFwiW2F0dHIuYXJpYS1vd25zXVwiOiBcIihfZGF0ZXBpY2tlcj8ub3BlbmVkICYmIF9kYXRlcGlja2VyLmlkKSB8fCBudWxsXCIsXHJcbiAgICBcIlthdHRyLm1pbl1cIjogXCJtaW4gPyBfZGF0ZUFkYXB0ZXIudG9Jc284NjAxKG1pbikgOiBudWxsXCIsXHJcbiAgICBcIlthdHRyLm1heF1cIjogXCJtYXggPyBfZGF0ZUFkYXB0ZXIudG9Jc284NjAxKG1heCkgOiBudWxsXCIsXHJcbiAgICBcIltkaXNhYmxlZF1cIjogXCJkaXNhYmxlZFwiLFxyXG4gICAgXCIoZm9jdXMpXCI6IFwiX2RhdGVwaWNrZXIuX2hhbmRsZUZvY3VzKClcIixcclxuICAgIFwiKGlucHV0KVwiOiBcIl9vbklucHV0KCRldmVudC50YXJnZXQudmFsdWUpXCIsXHJcbiAgICBcIihjaGFuZ2UpXCI6IFwiX29uQ2hhbmdlKClcIixcclxuICAgIFwiKGJsdXIpXCI6IFwiX29uQmx1cigpXCIsXHJcbiAgICBcIihrZXlkb3duKVwiOiBcIl9vbktleWRvd24oJGV2ZW50KVwiXHJcbiAgfSxcclxuICBleHBvcnRBczogXCJtYXREYXRlcGlja2VySW5wdXRcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksXHJcbiAgVmFsaWRhdG9yIHtcclxuICAvKiogVGhlIGRhdGVwaWNrZXIgdGhhdCB0aGlzIGlucHV0IGlzIGFzc29jaWF0ZWQgd2l0aC4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXREYXRldGltZXBpY2tlcih2YWx1ZTogTWF0RGF0ZXRpbWVwaWNrZXI8RD4pIHtcclxuICAgIHRoaXMucmVnaXN0ZXJEYXRlcGlja2VyKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIF9kYXRlcGlja2VyOiBNYXREYXRldGltZXBpY2tlcjxEPjtcclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckRhdGVwaWNrZXIodmFsdWU6IE1hdERhdGV0aW1lcGlja2VyPEQ+KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyLl9yZWdpc3RlcklucHV0KHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IG1hdERhdGVwaWNrZXJGaWx0ZXIoZmlsdGVyOiAoZGF0ZTogRCB8IG51bGwsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGF0ZUZpbHRlciA9IGZpbHRlcjtcclxuICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBfZGF0ZUZpbHRlcjogKGRhdGU6IEQgfCBudWxsLCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGlucHV0LiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgdGhpcy5fbGFzdFZhbHVlVmFsaWQgPSAhdmFsdWUgfHwgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZCh2YWx1ZSk7XHJcbiAgICB2YWx1ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgICBjb25zdCBvbGREYXRlID0gdGhpcy52YWx1ZTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLl9mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgLy8gdXNlIHRpbWVvdXQgdG8gZW5zdXJlIHRoZSBkYXRldGltZXBpY2tlciBpcyBpbnN0YW50aWF0ZWQgYW5kIHdlIGdldCB0aGUgY29ycmVjdCBmb3JtYXRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRldGltZShvbGREYXRlLCB2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERpc3BsYXlGb3JtYXQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGVwaWNrZXIudHlwZSkge1xyXG4gICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVJbnB1dDtcclxuICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZXRpbWVJbnB1dDtcclxuICAgICAgY2FzZSBcInRpbWVcIjpcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS50aW1lSW5wdXQ7XHJcbiAgICAgIGNhc2UgXCJtb250aFwiOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoSW5wdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcnNlRm9ybWF0KCkge1xyXG4gICAgbGV0IHBhcnNlRm9ybWF0O1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5fZGF0ZXBpY2tlci50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5kYXRlSW5wdXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkYXRldGltZVwiOlxyXG4gICAgICAgIHBhcnNlRm9ybWF0ID0gdGhpcy5fZGF0ZUZvcm1hdHMucGFyc2UuZGF0ZXRpbWVJbnB1dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInRpbWVcIjpcclxuICAgICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLnRpbWVJbnB1dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1vbnRoXCI6XHJcbiAgICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5tb250aElucHV0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXJzZUZvcm1hdCkge1xyXG4gICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyc2VGb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF92YWx1ZTogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSB2YWxpZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1pbigpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1pbih2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21pbiA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21pbjogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWF4aW11bSB2YWxpZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1heCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xyXG4gIH1cclxuXHJcbiAgc2V0IG1heCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21heCA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21heDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBkYXRlcGlja2VyLWlucHV0IGlzIGRpc2FibGVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG5cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYSBgY2hhbmdlYCBldmVudCBpcyBmaXJlZCBvbiB0aGlzIGA8aW5wdXQ+YC4gKi9cclxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50PEQ+PigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhbiBgaW5wdXRgIGV2ZW50IGlzIGZpcmVkIG9uIHRoaXMgYDxpbnB1dD5gLiAqL1xyXG4gIEBPdXRwdXQoKSBkYXRlSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudDxEPj4oKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKGVpdGhlciBkdWUgdG8gdXNlciBpbnB1dCBvciBwcm9ncmFtbWF0aWMgY2hhbmdlKS4gKi9cclxuICBfdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQgfCBudWxsPigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGlzYWJsZWQgc3RhdGUgaGFzIGNoYW5nZWQgKi9cclxuICBfZGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jdmFPbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF92YWxpZGF0b3JPbkNoYW5nZSA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIHByaXZhdGUgX2xvY2FsZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB3aGV0aGVyIHRoZSBpbnB1dCBwYXJzZXMuICovXHJcbiAgcHJpdmF0ZSBfcGFyc2VWYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiB0aGlzLl9sYXN0VmFsdWVWYWxpZCA/XHJcbiAgICAgIG51bGwgOiB7XCJtYXREYXRlcGlja2VyUGFyc2VcIjoge1widGV4dFwiOiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWV9fTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIG1pbiBkYXRlLiAqL1xyXG4gIHByaXZhdGUgX21pblZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcclxuICAgIHJldHVybiAoIXRoaXMubWluIHx8ICFjb250cm9sVmFsdWUgfHxcclxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGV0aW1lKHRoaXMubWluLCBjb250cm9sVmFsdWUpIDw9IDApID9cclxuICAgICAgbnVsbCA6IHtcIm1hdERhdGVwaWNrZXJNaW5cIjoge1wibWluXCI6IHRoaXMubWluLCBcImFjdHVhbFwiOiBjb250cm9sVmFsdWV9fTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIG1heCBkYXRlLiAqL1xyXG4gIHByaXZhdGUgX21heFZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcclxuICAgIHJldHVybiAoIXRoaXMubWF4IHx8ICFjb250cm9sVmFsdWUgfHxcclxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGV0aW1lKHRoaXMubWF4LCBjb250cm9sVmFsdWUpID49IDApID9cclxuICAgICAgbnVsbCA6IHtcIm1hdERhdGVwaWNrZXJNYXhcIjoge1wibWF4XCI6IHRoaXMubWF4LCBcImFjdHVhbFwiOiBjb250cm9sVmFsdWV9fTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIGRhdGUgZmlsdGVyLiAqL1xyXG4gIHByaXZhdGUgX2ZpbHRlclZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcclxuICAgIHJldHVybiAhdGhpcy5fZGF0ZUZpbHRlciB8fCAhY29udHJvbFZhbHVlIHx8IHRoaXMuX2RhdGVGaWx0ZXIoY29udHJvbFZhbHVlLCBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUuREFURSkgP1xyXG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlckZpbHRlclwiOiB0cnVlfTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgY29tYmluZWQgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhpcyBpbnB1dC4gKi9cclxuICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgbnVsbCA9XHJcbiAgICBWYWxpZGF0b3JzLmNvbXBvc2UoXHJcbiAgICAgIFt0aGlzLl9wYXJzZVZhbGlkYXRvciwgdGhpcy5fbWluVmFsaWRhdG9yLCB0aGlzLl9tYXhWYWxpZGF0b3IsIHRoaXMuX2ZpbHRlclZhbGlkYXRvcl0pO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgbGFzdCB2YWx1ZSBzZXQgb24gdGhlIGlucHV0IHdhcyB2YWxpZC4gKi9cclxuICBwcml2YXRlIF9sYXN0VmFsdWVWYWxpZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfZGF0ZUFkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFVElNRV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZXRpbWVGb3JtYXRzLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2Zvcm1GaWVsZDogTWF0Rm9ybUZpZWxkKSB7XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIk1BVF9EQVRFVElNRV9GT1JNQVRTXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGRhdGUgd2hlbiB0aGUgbG9jYWxlIGNoYW5nZXMuXHJcbiAgICB0aGlzLl9sb2NhbGVTdWJzY3JpcHRpb24gPSBfZGF0ZUFkYXB0ZXIubG9jYWxlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uXHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRlcGlja2VyLnNlbGVjdGVkQ2hhbmdlZC5zdWJzY3JpYmUoKHNlbGVjdGVkOiBEKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICB0aGlzLl9jdmFPbkNoYW5nZShzZWxlY3RlZCk7XHJcbiAgICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZUlucHV0LmVtaXQobmV3IE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2xvY2FsZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fdmFsdWVDaGFuZ2UuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvciA/IHRoaXMuX3ZhbGlkYXRvcihjKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGRhdGVwaWNrZXIgcG9wdXAgc2hvdWxkIGJlIGNvbm5lY3RlZCB0by5cclxuICAgKiBAcmV0dXJuIFRoZSBlbGVtZW50IHRvIGNvbm5lY3QgdGhlIHBvcHVwIHRvLlxyXG4gICAqL1xyXG4gIGdldFBvcHVwQ29ubmVjdGlvbkVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybUZpZWxkID8gdGhpcy5fZm9ybUZpZWxkLnVuZGVybGluZVJlZiA6IHRoaXMuX2VsZW1lbnRSZWY7XHJcbiAgfVxyXG5cclxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdmFPbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBfb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuYWx0S2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlci5vcGVuKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25JbnB1dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgZGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLnBhcnNlKHZhbHVlLCB0aGlzLmdldFBhcnNlRm9ybWF0KCkpO1xyXG4gICAgdGhpcy5fbGFzdFZhbHVlVmFsaWQgPSAhZGF0ZSB8fCB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKGRhdGUpO1xyXG4gICAgZGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbChkYXRlKTtcclxuICAgIHRoaXMuX3ZhbHVlID0gZGF0ZTtcclxuICAgIHRoaXMuX2N2YU9uQ2hhbmdlKGRhdGUpO1xyXG4gICAgdGhpcy5fdmFsdWVDaGFuZ2UuZW1pdChkYXRlKTtcclxuICAgIHRoaXMuZGF0ZUlucHV0LmVtaXQobmV3IE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZSgpIHtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBibHVyIGV2ZW50cyBvbiB0aGUgaW5wdXQuICovXHJcbiAgX29uQmx1cigpIHtcclxuICAgIC8vIFJlZm9ybWF0IHRoZSBpbnB1dCBvbmx5IGlmIHdlIGhhdmUgYSB2YWxpZCB2YWx1ZS5cclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Zvcm1hdFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgIC8qKiBGb3JtYXRzIGEgdmFsdWUgYW5kIHNldHMgaXQgb24gdGhlIGlucHV0IGVsZW1lbnQuICovXHJcbiAgIHByaXZhdGUgX2Zvcm1hdFZhbHVlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9XHJcbiAgICAgICB2YWx1ZSA/IHRoaXMuX2RhdGVBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5nZXREaXNwbGF5Rm9ybWF0KCkpIDogXCJcIjtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gXCJAYW5ndWxhci9jZGsvY29lcmNpb25cIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW50bCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCIsXHJcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJfaW50bC5vcGVuQ2FsZW5kYXJMYWJlbFwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIl9vcGVuKCRldmVudClcIj5cclxuICA8bWF0LWljb24gW25nU3dpdGNoXT1cImRhdGV0aW1lcGlja2VyLnR5cGVcIj5cclxuICAgIDxzdmcgKm5nU3dpdGNoQ2FzZT1cIid0aW1lJ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwwIDIwLDEyQTgsOCAwIDAsMCAxMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQzYuNDcsMjIgMiwxNy41IDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMi41LDdWMTIuMjVMMTcsMTQuOTJMMTYuMjUsMTYuMTVMMTEsMTNWN0gxMi41WlwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHN2ZyAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGV0aW1lJ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUsMTNIMTYuNVYxNS44MkwxOC45NCwxNy4yM0wxOC4xOSwxOC41M0wxNSwxNi42OVYxM00xOSw4SDVWMTlIOS42N0M5LjI0LDE4LjA5IDksMTcuMDcgOSwxNkE3LDcgMCAwLDEgMTYsOUMxNy4wNyw5IDE4LjA5LDkuMjQgMTksOS42N1Y4TTUsMjFDMy44OSwyMSAzLDIwLjEgMywxOVY1QzMsMy44OSAzLjg5LDMgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5QTIsMiAwIDAsMSAyMSw1VjExLjFDMjIuMjQsMTIuMzYgMjMsMTQuMDkgMjMsMTZBNyw3IDAgMCwxIDE2LDIzQzE0LjA5LDIzIDEyLjM2LDIyLjI0IDExLjEsMjFINU0xNiwxMS4xNUE0Ljg1LDQuODUgMCAwLDAgMTEuMTUsMTZDMTEuMTUsMTguNjggMTMuMzIsMjAuODUgMTYsMjAuODVBNC44NSw0Ljg1IDAgMCwwIDIwLjg1LDE2QzIwLjg1LDEzLjMyIDE4LjY4LDExLjE1IDE2LDExLjE1WlwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHN2ZyAqbmdTd2l0Y2hEZWZhdWx0IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cclxuICAgICAgPHBhdGggZD1cIk0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjhoMTR2MTF6TTcgMTBoNXY1SDd6XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9tYXQtaWNvbj5cclxuPC9idXR0b24+XHJcbmAsXHJcbiAgaG9zdDoge1xyXG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci10b2dnbGVcIlxyXG4gIH0sXHJcbiAgZXhwb3J0QXM6IFwibWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGVcIixcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlclRvZ2dsZTxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9zdGF0ZUNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBEYXRlcGlja2VyIGluc3RhbmNlIHRoYXQgdGhlIGJ1dHRvbiB3aWxsIHRvZ2dsZS4gKi9cclxuICBASW5wdXQoXCJmb3JcIikgZGF0ZXRpbWVwaWNrZXI6IE1hdERhdGV0aW1lcGlja2VyPEQ+O1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5kYXRldGltZXBpY2tlci5kaXNhYmxlZCA6ICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRlcGlja2VyKSB7XHJcbiAgICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIF9vcGVuKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGF0ZXRpbWVwaWNrZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5vcGVuKCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfd2F0Y2hTdGF0ZUNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBkYXRlcGlja2VyRGlzYWJsZWQgPSB0aGlzLmRhdGV0aW1lcGlja2VyID8gdGhpcy5kYXRldGltZXBpY2tlci5fZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcclxuICAgIGNvbnN0IGlucHV0RGlzYWJsZWQgPSB0aGlzLmRhdGV0aW1lcGlja2VyICYmIHRoaXMuZGF0ZXRpbWVwaWNrZXIuX2RhdGVwaWNrZXJJbnB1dCA/XHJcbiAgICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5fZGF0ZXBpY2tlcklucHV0Ll9kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzID0gbWVyZ2UodGhpcy5faW50bC5jaGFuZ2VzLCBkYXRlcGlja2VyRGlzYWJsZWQsIGlucHV0RGlzYWJsZWQpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTLFxyXG4gIE1hdERhdGV0aW1lRm9ybWF0c1xyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuaW1wb3J0IHtcclxuICBEYXRldGltZUFkYXB0ZXJcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsIH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xyXG5pbXBvcnQgeyBzbGlkZUNhbGVuZGFyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5cclxuY29uc3QgREFZU19QRVJfV0VFSyA9IDc7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBhIHNpbmdsZSBtb250aCBpbiB0aGUgZGF0ZXBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLW1vbnRoLXZpZXdcIixcclxuICB0ZW1wbGF0ZTogYDx0YWJsZSBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZVwiPlxyXG4gIDx0aGVhZCBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZS1oZWFkZXJcIj5cclxuICAgIDx0cj48dGggKm5nRm9yPVwibGV0IGRheSBvZiBfd2Vla2RheXNcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImRheS5sb25nXCI+e3tkYXkubmFycm93fX08L3RoPjwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHkgW0BzbGlkZUNhbGVuZGFyXT1cIl9jYWxlbmRhclN0YXRlXCJcclxuICAgICAgICAgKEBzbGlkZUNhbGVuZGFyLmRvbmUpPVwiX2NhbGVuZGFyU3RhdGVEb25lKClcIlxyXG4gICAgICAgICBtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keVxyXG4gICAgICAgICByb2xlPVwiZ3JpZFwiXHJcbiAgICAgICAgIFtyb3dzXT1cIl93ZWVrc1wiXHJcbiAgICAgICAgIFt0b2RheVZhbHVlXT1cIl90b2RheURhdGVcIlxyXG4gICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJfc2VsZWN0ZWREYXRlXCJcclxuICAgICAgICAgW2FjdGl2ZUNlbGxdPVwiX2FkYXB0ZXIuZ2V0RGF0ZShhY3RpdmVEYXRlKSAtIDFcIlxyXG4gICAgICAgICAoc2VsZWN0ZWRWYWx1ZUNoYW5nZSk9XCJfZGF0ZVNlbGVjdGVkKCRldmVudClcIj48L3Rib2R5PlxyXG48L3RhYmxlPlxyXG5gLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUNhbGVuZGFyXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldzxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBASW5wdXQoKSB0eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XHJcblxyXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdG8gZGlzcGxheSBpbiB0aGlzIG1vbnRoIHZpZXcgKGV2ZXJ5dGhpbmcgb3RoZXIgdGhhbiB0aGUgbW9udGggYW5kIHllYXIgaXMgaWdub3JlZCkuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IEQpIHtcclxuICAgIGxldCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZSB8fCB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgICBpZiAob2xkQWN0aXZlRGF0ZSAmJiB0aGlzLl9hY3RpdmVEYXRlICYmXHJcbiAgICAgICF0aGlzLl9hZGFwdGVyLnNhbWVNb250aEFuZFllYXIob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgICBpZiAodGhpcy5fYWRhcHRlci5pc0luTmV4dE1vbnRoKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwicmlnaHRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwibGVmdFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYWN0aXZlRGF0ZTogRDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzZWxlY3RlZCgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHRoaXMuX2dldERhdGVJbkN1cnJlbnRNb250aCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEO1xyXG5cclxuICAvKiogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cclxuICBASW5wdXQoKSBkYXRlRmlsdGVyOiAoZGF0ZTogRCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBHcmlkIG9mIGNhbGVuZGFyIGNlbGxzIHJlcHJlc2VudGluZyB0aGUgZGF0ZXMgb2YgdGhlIG1vbnRoLiAqL1xyXG4gIF93ZWVrczogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGxbXVtdO1xyXG5cclxuICAvKiogVGhlIG51bWJlciBvZiBibGFuayBjZWxscyBpbiB0aGUgZmlyc3Qgcm93IGJlZm9yZSB0aGUgMXN0IG9mIHRoZSBtb250aC4gKi9cclxuICBfZmlyc3RXZWVrT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIG9mIHRoZSBtb250aCB0aGF0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgRGF0ZSBmYWxscyBvbi5cclxuICAgKiBOdWxsIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgRGF0ZSBpcyBpbiBhbm90aGVyIG1vbnRoLlxyXG4gICAqL1xyXG4gIF9zZWxlY3RlZERhdGU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBkYXRlIG9mIHRoZSBtb250aCB0aGF0IHRvZGF5IGZhbGxzIG9uLiBOdWxsIGlmIHRvZGF5IGlzIGluIGFub3RoZXIgbW9udGguICovXHJcbiAgX3RvZGF5RGF0ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIG5hbWVzIG9mIHRoZSB3ZWVrZGF5cy4gKi9cclxuICBfd2Vla2RheXM6IHsgbG9uZzogc3RyaW5nLCBuYXJyb3c6IHN0cmluZyB9W107XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBfYWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RBVEVUSU1FX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBNYXREYXRldGltZUZvcm1hdHMpIHtcclxuICAgIGlmICghdGhpcy5fYWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiTUFUX0RBVEVUSU1FX0ZPUk1BVFNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLl9hZGFwdGVyLmdldEZpcnN0RGF5T2ZXZWVrKCk7XHJcbiAgICBjb25zdCBuYXJyb3dXZWVrZGF5cyA9IHRoaXMuX2FkYXB0ZXIuZ2V0RGF5T2ZXZWVrTmFtZXMoXCJuYXJyb3dcIik7XHJcbiAgICBjb25zdCBsb25nV2Vla2RheXMgPSB0aGlzLl9hZGFwdGVyLmdldERheU9mV2Vla05hbWVzKFwibG9uZ1wiKTtcclxuXHJcbiAgICAvLyBSb3RhdGUgdGhlIGxhYmVscyBmb3IgZGF5cyBvZiB0aGUgd2VlayBiYXNlZCBvbiB0aGUgY29uZmlndXJlZCBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBsZXQgd2Vla2RheXMgPSBsb25nV2Vla2RheXMubWFwKChsb25nLCBpKSA9PiB7XHJcbiAgICAgIHJldHVybiB7bG9uZywgbmFycm93OiBuYXJyb3dXZWVrZGF5c1tpXX07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3dlZWtkYXlzID0gd2Vla2RheXMuc2xpY2UoZmlyc3REYXlPZldlZWspLmNvbmNhdCh3ZWVrZGF5cy5zbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xyXG5cclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyB3aGVuIGEgbmV3IGRhdGUgaXMgc2VsZWN0ZWQuICovXHJcbiAgX2RhdGVTZWxlY3RlZChkYXRlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHVzZXJTZWxlY3RlZCA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLCB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIGRhdGUsIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdXNlclNlbGVjdGVkO1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHVzZXJTZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBtb250aCB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9nZXREYXRlSW5DdXJyZW50TW9udGgodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB0aGlzLl90b2RheURhdGUgPSB0aGlzLl9nZXREYXRlSW5DdXJyZW50TW9udGgodGhpcy5fYWRhcHRlci50b2RheSgpKTtcclxuXHJcbiAgICBsZXQgZmlyc3RPZk1vbnRoID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZSh0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLCAxLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcbiAgICB0aGlzLl9maXJzdFdlZWtPZmZzZXQgPVxyXG4gICAgICAoREFZU19QRVJfV0VFSyArIHRoaXMuX2FkYXB0ZXIuZ2V0RGF5T2ZXZWVrKGZpcnN0T2ZNb250aCkgLVxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSkgJSBEQVlTX1BFUl9XRUVLO1xyXG5cclxuICAgIHRoaXMuX2NyZWF0ZVdlZWtDZWxscygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZXMgTWRDYWxlbmRhckNlbGxzIGZvciB0aGUgZGF0ZXMgaW4gdGhpcyBtb250aC4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVXZWVrQ2VsbHMoKSB7XHJcbiAgICBsZXQgZGF5c0luTW9udGggPSB0aGlzLl9hZGFwdGVyLmdldE51bURheXNJbk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBsZXQgZGF0ZU5hbWVzID0gdGhpcy5fYWRhcHRlci5nZXREYXRlTmFtZXMoKTtcclxuICAgIHRoaXMuX3dlZWtzID0gW1tdXTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBjZWxsID0gdGhpcy5fZmlyc3RXZWVrT2Zmc2V0OyBpIDwgZGF5c0luTW9udGg7IGkrKyAsIGNlbGwrKykge1xyXG4gICAgICBpZiAoY2VsbCA9PSBEQVlTX1BFUl9XRUVLKSB7XHJcbiAgICAgICAgdGhpcy5fd2Vla3MucHVzaChbXSk7XHJcbiAgICAgICAgY2VsbCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSwgaSArIDEsXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcbiAgICAgIGxldCBlbmFibGVkID0gIXRoaXMuZGF0ZUZpbHRlciB8fFxyXG4gICAgICAgIHRoaXMuZGF0ZUZpbHRlcihkYXRlKTtcclxuICAgICAgbGV0IGFyaWFMYWJlbCA9IHRoaXMuX2FkYXB0ZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUExMXlMYWJlbCk7XHJcbiAgICAgIHRoaXMuX3dlZWtzW3RoaXMuX3dlZWtzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgLnB1c2gobmV3IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsKGkgKyAxLCBkYXRlTmFtZXNbaV0sIGFyaWFMYWJlbCwgZW5hYmxlZCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZGF0ZSBpbiB0aGlzIG1vbnRoIHRoYXQgdGhlIGdpdmVuIERhdGUgZmFsbHMgb24uXHJcbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBnaXZlbiBEYXRlIGlzIGluIGFub3RoZXIgbW9udGguXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZ2V0RGF0ZUluQ3VycmVudE1vbnRoKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuc2FtZU1vbnRoQW5kWWVhcihkYXRlLCB0aGlzLmFjdGl2ZURhdGUpID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKGRhdGUpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsZW5kYXJTdGF0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlRG9uZSgpIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsIH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xyXG5pbXBvcnQgeyBzbGlkZUNhbGVuZGFyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTLFxyXG4gIE1hdERhdGV0aW1lRm9ybWF0c1xyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuaW1wb3J0IHtcclxuICBEYXRldGltZUFkYXB0ZXJcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBhIHNpbmdsZSB5ZWFyIGluIHRoZSBkYXRlcGlja2VyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXIteWVhci12aWV3XCIsXHJcbiAgdGVtcGxhdGU6IGA8dGFibGUgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGVcIj5cclxuICA8dGhlYWQgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGUtaGVhZGVyXCI+PC90aGVhZD5cclxuICA8dGJvZHkgW0BzbGlkZUNhbGVuZGFyXT1cIl9jYWxlbmRhclN0YXRlXCJcclxuICAgICAgICAgKEBzbGlkZUNhbGVuZGFyLmRvbmUpPVwiX2NhbGVuZGFyU3RhdGVEb25lKClcIlxyXG4gICAgICAgICBtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keVxyXG4gICAgICAgICByb2xlPVwiZ3JpZFwiXHJcbiAgICAgICAgIGFsbG93RGlzYWJsZWRTZWxlY3Rpb249XCJ0cnVlXCJcclxuICAgICAgICAgW2xhYmVsXT1cIl95ZWFyTGFiZWxcIlxyXG4gICAgICAgICBbcm93c109XCJfbW9udGhzXCJcclxuICAgICAgICAgW3RvZGF5VmFsdWVdPVwiX3RvZGF5TW9udGhcIlxyXG4gICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJfc2VsZWN0ZWRNb250aFwiXHJcbiAgICAgICAgIFtsYWJlbE1pblJlcXVpcmVkQ2VsbHNdPVwiMlwiXHJcbiAgICAgICAgIFthY3RpdmVDZWxsXT1cIl9hZGFwdGVyLmdldE1vbnRoKGFjdGl2ZURhdGUpXCJcclxuICAgICAgICAgKHNlbGVjdGVkVmFsdWVDaGFuZ2UpPVwiX21vbnRoU2VsZWN0ZWQoJGV2ZW50KVwiPjwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbmAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXc8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBASW5wdXQoKSB0eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XHJcblxyXG4gIC8qKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgeWVhciB2aWV3IChldmVyeXRoaW5nIG90aGVyIHRoYW4gdGhlIHllYXIgaXMgaWdub3JlZCkuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IEQpIHtcclxuICAgIGxldCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZSB8fCB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgICBpZiAob2xkQWN0aXZlRGF0ZSAmJiB0aGlzLl9hY3RpdmVEYXRlICYmXHJcbiAgICAgICF0aGlzLl9hZGFwdGVyLnNhbWVZZWFyKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgLy8gaWYgKG9sZEFjdGl2ZURhdGUgPCB0aGlzLl9hY3RpdmVEYXRlKSB7XHJcbiAgICAgIC8vICB0aGlzLmNhbGVuZGFyU3RhdGUoJ3JpZ2h0Jyk7XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICB0aGlzLmNhbGVuZGFyU3RhdGUoJ2xlZnQnKTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYWN0aXZlRGF0ZTogRDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzZWxlY3RlZCgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB0aGlzLl9nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZDogRDtcclxuXHJcbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXHJcbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IG1vbnRoIGlzIHNlbGVjdGVkLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIEdyaWQgb2YgY2FsZW5kYXIgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBtb250aHMgb2YgdGhlIHllYXIuICovXHJcbiAgX21vbnRoczogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGxbXVtdO1xyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGlzIHllYXIgKGUuZy4gXCIyMDE3XCIpLiAqL1xyXG4gIF95ZWFyTGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBtb250aCBpbiB0aGlzIHllYXIgdGhhdCB0b2RheSBmYWxscyBvbi4gTnVsbCBpZiB0b2RheSBpcyBpbiBhIGRpZmZlcmVudCB5ZWFyLiAqL1xyXG4gIF90b2RheU1vbnRoOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtb250aCBpbiB0aGlzIHllYXIgdGhhdCB0aGUgc2VsZWN0ZWQgRGF0ZSBmYWxscyBvbi5cclxuICAgKiBOdWxsIGlmIHRoZSBzZWxlY3RlZCBEYXRlIGlzIGluIGEgZGlmZmVyZW50IHllYXIuXHJcbiAgICovXHJcbiAgX3NlbGVjdGVkTW9udGg6IG51bWJlcjtcclxuXHJcbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cykge1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgd2hlbiBhIG5ldyBtb250aCBpcyBzZWxlY3RlZC4gKi9cclxuICBfbW9udGhTZWxlY3RlZChtb250aDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB1c2VyU2VsZWN0ZWQgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSwgbW9udGgsXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHVzZXJTZWxlY3RlZCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdXNlclNlbGVjdGVkO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IG1vbnRoO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXRpYWxpemVzIHRoaXMgbW9udGggdmlldy4gKi9cclxuICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHRoaXMuX2dldE1vbnRoSW5DdXJyZW50WWVhcih0aGlzLnNlbGVjdGVkKTtcclxuICAgIHRoaXMuX3RvZGF5TW9udGggPSB0aGlzLl9nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5fYWRhcHRlci50b2RheSgpKTtcclxuICAgIHRoaXMuX3llYXJMYWJlbCA9IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5hY3RpdmVEYXRlKTtcclxuXHJcbiAgICBsZXQgbW9udGhOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGhOYW1lcyhcInNob3J0XCIpO1xyXG4gICAgLy8gRmlyc3Qgcm93IG9mIG1vbnRocyBvbmx5IGNvbnRhaW5zIDUgZWxlbWVudHMgc28gd2UgY2FuIGZpdCB0aGUgeWVhciBsYWJlbCBvbiB0aGUgc2FtZSByb3cuXHJcbiAgICB0aGlzLl9tb250aHMgPSBbWzAsIDEsIDIsIDMsIDRdLCBbNSwgNiwgNywgOCwgOSwgMTAsIDExXV0ubWFwKHJvdyA9PiByb3cubWFwKFxyXG4gICAgICBtb250aCA9PiB0aGlzLl9jcmVhdGVDZWxsRm9yTW9udGgobW9udGgsIG1vbnRoTmFtZXNbbW9udGhdKSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdGhlIGdpdmVuIERhdGUgZmFsbHMgb24uXHJcbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBnaXZlbiBEYXRlIGlzIGluIGFub3RoZXIgeWVhci5cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXRNb250aEluQ3VycmVudFllYXIoZGF0ZTogRCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuc2FtZVllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSA/XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZXMgYW4gTWRDYWxlbmRhckNlbGwgZm9yIHRoZSBnaXZlbiBtb250aC4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVDZWxsRm9yTW9udGgobW9udGg6IG51bWJlciwgbW9udGhOYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBhcmlhTGFiZWwgPSB0aGlzLl9hZGFwdGVyLmZvcm1hdChcclxuICAgICAgdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZSh0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSwgbW9udGgsIDEsXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSksXHJcbiAgICAgIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyQTExeUxhYmVsKTtcclxuICAgIHJldHVybiBuZXcgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwoXHJcbiAgICAgIG1vbnRoLCBtb250aE5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKSwgYXJpYUxhYmVsLCB0aGlzLl9pc01vbnRoRW5hYmxlZChtb250aCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIG1vbnRoIGlzIGVuYWJsZWQuICovXHJcbiAgcHJpdmF0ZSBfaXNNb250aEVuYWJsZWQobW9udGg6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmRhdGVGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpcnN0T2ZNb250aCA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLCBtb250aCwgMSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG5cclxuICAgIC8vIElmIGFueSBkYXRlIGluIHRoZSBtb250aCBpcyBlbmFibGVkIGNvdW50IHRoZSBtb250aCBhcyBlbmFibGVkLlxyXG4gICAgZm9yIChsZXQgZGF0ZSA9IGZpcnN0T2ZNb250aDsgdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA9PSBtb250aDtcclxuICAgICAgICAgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIDEpKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgY2FsZW5kYXJTdGF0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IGRpcmVjdGlvbjtcclxuICAvLyB9XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlRG9uZSgpIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBcIlwiO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9hMTF5XCI7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gIE1hdERpYWxvZ01vZHVsZSxcclxuICBNYXRJY29uTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIgfSBmcm9tIFwiLi9jYWxlbmRhclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSB9IGZyb20gXCIuL2NhbGVuZGFyLWJvZHlcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jayB9IGZyb20gXCIuL2Nsb2NrXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0RGF0ZXRpbWVwaWNrZXIsXHJcbiAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50XHJcbn0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWlucHV0XCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3IH0gZnJvbSBcIi4vbW9udGgtdmlld1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlclllYXJWaWV3IH0gZnJvbSBcIi4veWVhci12aWV3XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgQTExeU1vZHVsZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jayxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUsXHJcbiAgICBNYXREYXRldGltZXBpY2tlcklucHV0LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclllYXJWaWV3XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHksXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNsb2NrLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclRvZ2dsZSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VySW5wdXQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXdcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlck1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiRGF0ZUFkYXB0ZXIiLCJJbmplY3Rpb25Ub2tlbiIsIkluamVjdGFibGUiLCJPcHRpb25hbCIsIkluamVjdCIsIk1BVF9EQVRFX0xPQ0FMRSIsIk5nTW9kdWxlIiwiTmF0aXZlRGF0ZU1vZHVsZSIsIk1hdE5hdGl2ZURhdGVNb2R1bGUiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwia2V5ZnJhbWVzIiwiRXZlbnRFbWl0dGVyIiwiZmlyc3QiLCJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJVUF9BUlJPVyIsIkRPV05fQVJST1ciLCJIT01FIiwiRU5EIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVOVEVSIiwiQ29tcG9uZW50IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkVsZW1lbnRSZWYiLCJNYXREYXRlcGlja2VySW50bCIsIk5nWm9uZSIsIkNoYW5nZURldGVjdG9yUmVmIiwiT3V0cHV0IiwiSW5wdXQiLCJFU0NBUEUiLCJWaWV3Q2hpbGQiLCJTdWJzY3JpcHRpb24iLCJTdWJqZWN0IiwiY29lcmNlQm9vbGVhblByb3BlcnR5IiwiQ29tcG9uZW50UG9ydGFsIiwiT3ZlcmxheUNvbmZpZyIsIk1hdERpYWxvZyIsIk92ZXJsYXkiLCJWaWV3Q29udGFpbmVyUmVmIiwiTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZIiwiRGlyZWN0aW9uYWxpdHkiLCJET0NVTUVOVCIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIk5HX1ZBTElEQVRPUlMiLCJWYWxpZGF0b3JzIiwiRGlyZWN0aXZlIiwiTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SIiwiTWF0Rm9ybUZpZWxkIiwib2JzZXJ2YWJsZU9mIiwibWVyZ2UiLCJDb21tb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiT3ZlcmxheU1vZHVsZSIsIkExMXlNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFFRix1QkFBMEIsQ0FBQyxFQUFFLENB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