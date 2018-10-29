(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/core'), require('@angular/core'), require('@angular/material'), require('@angular/animations'), require('@angular/cdk/keycodes'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/material/dialog'), require('rxjs'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/cdk/a11y')) :
    typeof define === 'function' && define.amd ? define('fedeeman-datetimepicker/core', ['exports', '@angular/material/core', '@angular/core', '@angular/material', '@angular/animations', '@angular/cdk/keycodes', 'rxjs/operators', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/material/dialog', 'rxjs', '@angular/forms', '@angular/material/form-field', '@angular/cdk/a11y'], factory) :
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXItY29yZS51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXIudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvYWRhcHRlci9kYXRldGltZS1mb3JtYXRzLnRzIiwibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2FkYXB0ZXIvbmF0aXZlLWRhdGV0aW1lLWFkYXB0ZXIudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvYWRhcHRlci9uYXRpdmUtZGF0ZXRpbWUtZm9ybWF0cy50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL2FkYXB0ZXIubW9kdWxlLnRzIiwibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnMudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItZXJyb3JzLnRzIiwibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGUudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXIudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXItYm9keS50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9jbG9jay50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci1pbnB1dC50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci10b2dnbGUudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvbW9udGgtdmlldy50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci95ZWFyLXZpZXcudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGV0aW1lQWRhcHRlcjxEPiBleHRlbmRzIERhdGVBZGFwdGVyPEQ+IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9kZWxlZ2F0ZTogRGF0ZUFkYXB0ZXI8RD4pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBnZXRIb3VyKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gIGFic3RyYWN0IGdldE1pbnV0ZShkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICBhYnN0cmFjdCBnZXRGaXJzdERhdGVPZk1vbnRoKGRhdGU6IEQpOiBEO1xyXG5cclxuICBhYnN0cmFjdCBpc0luTmV4dE1vbnRoKHN0YXJ0RGF0ZTogRCwgZW5kRGF0ZTogRCk6IGJvb2xlYW47XHJcblxyXG4gIGFic3RyYWN0IGdldEhvdXJOYW1lcygpOiBzdHJpbmdbXTtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0TWludXRlTmFtZXMoKTogc3RyaW5nW107XHJcblxyXG4gIGFic3RyYWN0IGFkZENhbGVuZGFySG91cnMoZGF0ZTogRCwgbW9udGhzOiBudW1iZXIpOiBEO1xyXG5cclxuICBhYnN0cmFjdCBhZGRDYWxlbmRhck1pbnV0ZXMoZGF0ZTogRCwgbW9udGhzOiBudW1iZXIpOiBEO1xyXG5cclxuICBhYnN0cmFjdCBjcmVhdGVEYXRldGltZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IEQ7XHJcblxyXG4gIGdldFZhbGlkRGF0ZU9yTnVsbChvYmo6IGFueSk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiAodGhpcy5pc0RhdGVJbnN0YW5jZShvYmopICYmIHRoaXMuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlRGF0ZXRpbWUoZmlyc3Q6IEQsIHNlY29uZDogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlRGF0ZShmaXJzdCwgc2Vjb25kKSB8fFxyXG4gICAgICB0aGlzLmdldEhvdXIoZmlyc3QpIC0gdGhpcy5nZXRIb3VyKHNlY29uZCkgfHxcclxuICAgICAgdGhpcy5nZXRNaW51dGUoZmlyc3QpIC0gdGhpcy5nZXRNaW51dGUoc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVEYXRldGltZShmaXJzdDogRCB8IG51bGwsIHNlY29uZDogRCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmIChmaXJzdCAmJiBzZWNvbmQpIHtcclxuICAgICAgY29uc3QgZmlyc3RWYWxpZCA9IHRoaXMuaXNWYWxpZChmaXJzdCk7XHJcbiAgICAgIGNvbnN0IHNlY29uZFZhbGlkID0gdGhpcy5pc1ZhbGlkKHNlY29uZCk7XHJcbiAgICAgIGlmIChmaXJzdFZhbGlkICYmIHNlY29uZFZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbXBhcmVEYXRldGltZShmaXJzdCwgc2Vjb25kKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmlyc3RWYWxpZCA9PT0gc2Vjb25kVmFsaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuICB9XHJcblxyXG4gIHNhbWVZZWFyKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXRZZWFyKGZpcnN0KSA9PT0gdGhpcy5nZXRZZWFyKHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lRGF5KGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXREYXRlKGZpcnN0KSA9PT0gdGhpcy5nZXREYXRlKHNlY29uZCkgJiYgdGhpcy5zYW1lTW9udGhBbmRZZWFyKGZpcnN0LCBzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZUhvdXIoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldEhvdXIoZmlyc3QpID09PSB0aGlzLmdldEhvdXIoc2Vjb25kKSAmJiB0aGlzLnNhbWVEYXkoZmlyc3QsIHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lTWludXRlKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXRNaW51dGUoZmlyc3QpID09PSB0aGlzLmdldE1pbnV0ZShzZWNvbmQpICYmIHRoaXMuc2FtZUhvdXIoZmlyc3QsIHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lTW9udGhBbmRZZWFyKGZpcnN0OiBEIHwgbnVsbCwgc2Vjb25kOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpcnN0ICYmIHNlY29uZCkge1xyXG4gICAgICBjb25zdCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcclxuICAgICAgY29uc3Qgc2Vjb25kVmFsaWQgPSB0aGlzLmlzVmFsaWQoc2Vjb25kKTtcclxuICAgICAgaWYgKGZpcnN0VmFsaWQgJiYgc2Vjb25kVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gISh0aGlzLmdldFllYXIoZmlyc3QpIC0gdGhpcy5nZXRZZWFyKHNlY29uZCkgfHxcclxuICAgICAgICAgIHRoaXMuZ2V0TW9udGgoZmlyc3QpIC0gdGhpcy5nZXRNb250aChzZWNvbmQpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmlyc3RWYWxpZCA9PT0gc2Vjb25kVmFsaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuICB9XHJcblxyXG4gIC8vIGRlbGVnYXRlXHJcbiAgY2xvbmUoZGF0ZTogRCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNsb25lKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJZZWFycyhkYXRlOiBELCB5ZWFyczogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYWRkQ2FsZW5kYXJZZWFycyhkYXRlLCB5ZWFycyk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIG1vbnRocyk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckRheXMoZGF0ZTogRCwgZGF5czogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIGRheXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0WWVhcihkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRZZWFyKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TW9udGgoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXlPZldlZWsoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF5T2ZXZWVrKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhOYW1lcyhzdHlsZSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRNb250aE5hbWVzKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldERhdGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF0ZU5hbWVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXlPZldlZWtOYW1lcyhzdHlsZSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXlPZldlZWtOYW1lcyhzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRZZWFyTmFtZShkYXRlOiBEKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRZZWFyTmFtZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0Rmlyc3REYXlPZldlZWsoKTtcclxuICB9XHJcblxyXG4gIGdldE51bURheXNJbk1vbnRoKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldE51bURheXNJbk1vbnRoKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNyZWF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgdG9kYXkoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUudG9kYXkoKTtcclxuICB9XHJcblxyXG4gIHBhcnNlKHZhbHVlOiBhbnksIHBhcnNlRm9ybWF0OiBhbnkpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUucGFyc2UodmFsdWUsIHBhcnNlRm9ybWF0KTtcclxuICB9XHJcblxyXG4gIGZvcm1hdChkYXRlOiBELCBkaXNwbGF5Rm9ybWF0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmZvcm1hdChkYXRlLCBkaXNwbGF5Rm9ybWF0KTtcclxuICB9XHJcblxyXG4gIHRvSXNvODYwMShkYXRlOiBEKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS50b0lzbzg2MDEoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpc0RhdGVJbnN0YW5jZShvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmlzRGF0ZUluc3RhbmNlKG9iaik7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKGRhdGU6IEQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5pc1ZhbGlkKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgaW52YWxpZCgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5pbnZhbGlkKCk7XHJcbiAgfVxyXG5cclxuICBjbGFtcERhdGUoZGF0ZTogRCwgbWluPzogRCB8IG51bGwsIG1heD86IEQgfCBudWxsKTogRCB7XHJcbiAgICBpZiAobWluICYmIHRoaXMuY29tcGFyZURhdGV0aW1lKGRhdGUsIG1pbikgPCAwKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgICB9XHJcbiAgICBpZiAobWF4ICYmIHRoaXMuY29tcGFyZURhdGV0aW1lKGRhdGUsIG1heCkgPiAwKSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXREYXRldGltZUZvcm1hdHMge1xyXG4gIHBhcnNlOiB7XHJcbiAgICBkYXRlSW5wdXQ/OiBhbnk7XHJcbiAgICBtb250aElucHV0PzogYW55O1xyXG4gICAgdGltZUlucHV0PzogYW55O1xyXG4gICAgZGF0ZXRpbWVJbnB1dD86IGFueTtcclxuICB9O1xyXG4gIGRpc3BsYXk6IHtcclxuICAgIGRhdGVJbnB1dDogYW55O1xyXG4gICAgbW9udGhJbnB1dDogYW55O1xyXG4gICAgdGltZUlucHV0OiBhbnk7XHJcbiAgICBkYXRldGltZUlucHV0OiBhbnk7XHJcbiAgICBtb250aFllYXJMYWJlbDogYW55O1xyXG4gICAgZGF0ZUExMXlMYWJlbDogYW55O1xyXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiBhbnk7XHJcbiAgICBwb3B1cEhlYWRlckRhdGVMYWJlbDogYW55O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfREFURVRJTUVfRk9STUFUUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNYXREYXRldGltZUZvcm1hdHM+KFwibWF0LWRhdGV0aW1lLWZvcm1hdHNcIik7XHJcbiIsImltcG9ydCB7XHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFX0xPQ0FMRVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi9kYXRldGltZS1hZGFwdGVyXCI7XHJcblxyXG4vKiogVGhlIGRlZmF1bHQgaG91ciBuYW1lcyB0byB1c2UgaWYgSW50bCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gKi9cclxuY29uc3QgREVGQVVMVF9IT1VSX05BTUVTID0gcmFuZ2UoMjQsIGkgPT4gU3RyaW5nKGkpKTtcclxuXHJcbi8qKiBUaGUgZGVmYXVsdCBtaW51dGUgbmFtZXMgdG8gdXNlIGlmIEludGwgQVBJIGlzIG5vdCBhdmFpbGFibGUuICovXHJcbmNvbnN0IERFRkFVTFRfTUlOVVRFX05BTUVTID0gcmFuZ2UoNjAsIGkgPT4gU3RyaW5nKGkpKTtcclxuXHJcbmZ1bmN0aW9uIHJhbmdlPFQ+KGxlbmd0aDogbnVtYmVyLCB2YWx1ZUZ1bmN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSB7XHJcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhbHVlc0FycmF5W2ldID0gdmFsdWVGdW5jdGlvbihpKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlc0FycmF5O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRldGltZUFkYXB0ZXIgZXh0ZW5kcyBEYXRldGltZUFkYXB0ZXI8RGF0ZT4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPERhdGU+KSB7XHJcbiAgICBzdXBlcihfZGVsZWdhdGUpO1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobWF0RGF0ZUxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBjbG9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVEYXRldGltZSh0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmdldERhdGVJbk5leHRNb250aChzdGFydERhdGUpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2FtZU1vbnRoQW5kWWVhcihuZXh0TW9udGgsIGVuZERhdGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGF0ZXRpbWUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXHJcbiAgICAvLyBjcmVhdGluZyB0aGUgRGF0ZSkuXHJcbiAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZSA8IDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvdXIgPCAwIHx8IGhvdXIgPiAyMykge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBob3VyIFwiJHtob3VyfVwiLiBIb3VyIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDIzLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IDU5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyh5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlKTtcclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHRoZSBkYXRlIHdhc24ndCBhYm92ZSB0aGUgdXBwZXIgYm91bmQgZm9yIHRoZSBtb250aCwgY2F1c2luZyB0aGUgbW9udGggdG8gb3ZlcmZsb3dcclxuICAgIGlmIChyZXN1bHQuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIiBmb3IgbW9udGggd2l0aCBpbmRleCBcIiR7bW9udGh9XCIuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZUluTmV4dE1vbnRoKGRhdGU6IERhdGUpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEsXHJcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIERFRkFVTFRfSE9VUl9OQU1FUztcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBERUZBVUxUX01JTlVURV9OQU1FUztcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRGF0ZSwgeWVhcnM6IG51bWJlcik6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgeWVhcnMgKiAxMik7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBEYXRlLCBtb250aHM6IG51bWJlcik6IERhdGUge1xyXG4gICAgbGV0IG5ld0RhdGUgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxyXG4gICAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSArIG1vbnRocywgdGhpcy5nZXREYXRlKGRhdGUpLCB0aGlzLmdldEhvdXIoZGF0ZSksIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcclxuXHJcbiAgICAvLyBJdCdzIHBvc3NpYmxlIHRvIHdpbmQgdXAgaW4gdGhlIHdyb25nIG1vbnRoIGlmIHRoZSBvcmlnaW5hbCBtb250aCBoYXMgbW9yZSBkYXlzIHRoYW4gdGhlIG5ld1xyXG4gICAgLy8gbW9udGguIEluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGdvIHRvIHRoZSBsYXN0IGRheSBvZiB0aGUgZGVzaXJlZCBtb250aC5cclxuICAgIC8vIE5vdGU6IHRoZSBhZGRpdGlvbmFsICsgMTIgJSAxMiBlbnN1cmVzIHdlIGVuZCB1cCB3aXRoIGEgcG9zaXRpdmUgbnVtYmVyLCBzaW5jZSBKUyAlIGRvZXNuJ3RcclxuICAgIC8vIGd1YXJhbnRlZSB0aGlzLlxyXG4gICAgaWYgKHRoaXMuZ2V0TW9udGgobmV3RGF0ZSkgIT09ICgodGhpcy5nZXRNb250aChkYXRlKSArIG1vbnRocykgJSAxMiArIDEyKSAlIDEyKSB7XHJcbiAgICAgIG5ld0RhdGUgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHRoaXMuZ2V0WWVhcihuZXdEYXRlKSwgdGhpcy5nZXRNb250aChuZXdEYXRlKSwgMCwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0RhdGU7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckRheXMoZGF0ZTogRGF0ZSwgZGF5czogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSArIGRheXMsIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBEYXRlLCBob3VyczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksXHJcbiAgICAgIHRoaXMuZ2V0SG91cihkYXRlKSArIGhvdXJzLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1pbnV0ZXMoZGF0ZTogRGF0ZSwgbWludXRlczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksXHJcbiAgICAgIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkgKyBtaW51dGVzKTtcclxuICB9XHJcblxyXG4gIHRvSXNvODYwMShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdXBlci50b0lzbzg2MDEoZGF0ZSkgKyBcIlRcIiArIFtcclxuICAgICAgdGhpcy5fMmRpZ2l0KGRhdGUuZ2V0VVRDSG91cnMoKSksXHJcbiAgICAgIHRoaXMuXzJkaWdpdChkYXRlLmdldFVUQ01pbnV0ZXMoKSlcclxuICAgIF0uam9pbihcIjpcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdHJpcCBvdXQgdW5pY29kZSBMVFIgYW5kIFJUTCBjaGFyYWN0ZXJzLiBFZGdlIGFuZCBJRSBpbnNlcnQgdGhlc2UgaW50byBmb3JtYXR0ZWQgZGF0ZXMgd2hpbGVcclxuICAgKiBvdGhlciBicm93c2VycyBkbyBub3QuIFdlIHJlbW92ZSB0aGVtIHRvIG1ha2Ugb3V0cHV0IGNvbnNpc3RlbnQgYW5kIGJlY2F1c2UgdGhleSBpbnRlcmZlcmUgd2l0aFxyXG4gICAqIGRhdGUgcGFyc2luZy5cclxuICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgdG8gc3RyaXAgZGlyZWN0aW9uIGNoYXJhY3RlcnMgZnJvbS5cclxuICAgKiBAcmV0dXJucyBUaGUgc3RyaXBwZWQgc3RyaW5nLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3N0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHUyMDBlXFx1MjAwZl0vZywgXCJcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYWRzIGEgbnVtYmVyIHRvIG1ha2UgaXQgdHdvIGRpZ2l0cy5cclxuICAgKiBAcGFyYW0gbiBUaGUgbnVtYmVyIHRvIHBhZC5cclxuICAgKiBAcmV0dXJucyBUaGUgcGFkZGVkIG51bWJlci5cclxuICAgKi9cclxuICBwcml2YXRlIF8yZGlnaXQobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMDBcIiArIG4pLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIGEgZGF0ZSBidXQgYWxsb3dzIHRoZSBtb250aCBhbmQgZGF0ZSB0byBvdmVyZmxvdy4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSwgaG91cnMsIG1pbnV0ZXMpO1xyXG5cclxuICAgIC8vIFdlIG5lZWQgdG8gY29ycmVjdCBmb3IgdGhlIGZhY3QgdGhhdCBKUyBuYXRpdmUgRGF0ZSB0cmVhdHMgeWVhcnMgaW4gcmFuZ2UgWzAsIDk5XSBhc1xyXG4gICAgLy8gYWJicmV2aWF0aW9ucyBmb3IgMTl4eC5cclxuICAgIGlmICh5ZWFyID49IDAgJiYgeWVhciA8IDEwMCkge1xyXG4gICAgICByZXN1bHQuc2V0RnVsbFllYXIodGhpcy5nZXRZZWFyKHJlc3VsdCkgLSAxOTAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdERhdGV0aW1lRm9ybWF0cyB9IGZyb20gXCIuL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfTkFUSVZFX0RBVEVUSU1FX0ZPUk1BVFM6IE1hdERhdGV0aW1lRm9ybWF0cyA9IHtcclxuICBwYXJzZToge30sXHJcbiAgZGlzcGxheToge1xyXG4gICAgZGF0ZUlucHV0OiB7eWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIjItZGlnaXRcIn0sXHJcbiAgICBtb250aElucHV0OiB7bW9udGg6IFwibG9uZ1wifSxcclxuICAgIGRhdGV0aW1lSW5wdXQ6IHt5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwiLCBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIn0sXHJcbiAgICB0aW1lSW5wdXQ6IHtob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIn0sXHJcbiAgICBtb250aFllYXJMYWJlbDoge3llYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwifSxcclxuICAgIGRhdGVBMTF5TGFiZWw6IHt5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wifSxcclxuICAgIG1vbnRoWWVhckExMXlMYWJlbDoge3llYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCJ9LFxyXG4gICAgcG9wdXBIZWFkZXJEYXRlTGFiZWw6IHt3ZWVrZGF5OiBcInNob3J0XCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCJ9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICBOYXRpdmVEYXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTUFUX0RBVEVUSU1FX0ZPUk1BVFMgfSBmcm9tIFwiLi9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7IE5hdGl2ZURhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuL25hdGl2ZS1kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1BVF9OQVRJVkVfREFURVRJTUVfRk9STUFUUyB9IGZyb20gXCIuL25hdGl2ZS1kYXRldGltZS1mb3JtYXRzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZVxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVEYXRlTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogRGF0ZXRpbWVBZGFwdGVyLFxyXG4gICAgICB1c2VDbGFzczogTmF0aXZlRGF0ZXRpbWVBZGFwdGVyXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlRGF0ZXRpbWVNb2R1bGUge1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZURhdGV0aW1lTW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1BVF9EQVRFVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogTUFUX05BVElWRV9EQVRFVElNRV9GT1JNQVRTfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE5hdGl2ZURhdGV0aW1lTW9kdWxlIHtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgYW5pbWF0aW9uIGZhZGVzIGluIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCB0ZXh0IGNvbnRlbnQgb2YgdGhlXHJcbiAqIHNlbGVjdCdzIG9wdGlvbnMuIEl0IGlzIHRpbWUgZGVsYXllZCB0byBvY2N1ciAxMDBtcyBhZnRlciB0aGUgb3ZlcmxheVxyXG4gKiBwYW5lbCBoYXMgdHJhbnNmb3JtZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFkZUluQ29udGVudDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcImZhZGVJbkNvbnRlbnRcIiwgW1xyXG4gIHN0YXRlKFwic2hvd2luZ1wiLCBzdHlsZSh7b3BhY2l0eTogMX0pKSxcclxuICB0cmFuc2l0aW9uKFwidm9pZCA9PiBzaG93aW5nXCIsIFtcclxuICAgIHN0eWxlKHtvcGFjaXR5OiAwfSksXHJcbiAgICBhbmltYXRlKGAxNTBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKWApXHJcbiAgXSlcclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVDYWxlbmRhcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcInNsaWRlQ2FsZW5kYXJcIiwgW1xyXG4gIHRyYW5zaXRpb24oXCIqID0+IGxlZnRcIiwgW1xyXG4gICAgYW5pbWF0ZSgxODAsIGtleWZyYW1lcyhbXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiLCBvZmZzZXQ6IDAuNX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIsIG9mZnNldDogMC41MX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiwgb2Zmc2V0OiAxfSlcclxuICAgIF0pKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oXCIqID0+IHJpZ2h0XCIsIFtcclxuICAgIGFuaW1hdGUoMTgwLCBrZXlmcmFtZXMoW1xyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIsIG9mZnNldDogMC41fSksXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiLCBvZmZzZXQ6IDAuNTF9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsIG9mZnNldDogMX0pXHJcbiAgICBdKSlcclxuICBdKVxyXG5dKTtcclxuIiwiLyoqIEBkb2NzLXByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKHByb3ZpZGVyOiBzdHJpbmcpIHtcclxuICByZXR1cm4gRXJyb3IoXHJcbiAgICAgIGBNYXREYXRldGltZXBpY2tlcjogTm8gcHJvdmlkZXIgZm91bmQgZm9yICR7cHJvdmlkZXJ9LiBZb3UgbXVzdCBpbXBvcnQgb25lIG9mIHRoZSBmb2xsb3dpbmcgYCArXHJcbiAgICAgIGBtb2R1bGVzIGF0IHlvdXIgYXBwbGljYXRpb24gcm9vdDogTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUsIE1hdE1vbWVudERhdGV0aW1lTW9kdWxlLCBvciBwcm92aWRlIGEgYCArXHJcbiAgICAgIGBjdXN0b20gaW1wbGVtZW50YXRpb24uYCk7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIHtcclxuICBEQVRFLCBIT1VSLCBNSU5VVEVcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERPV05fQVJST1csXHJcbiAgRU5ELFxyXG4gIEVOVEVSLFxyXG4gIEhPTUUsXHJcbiAgTEVGVF9BUlJPVyxcclxuICBQQUdFX0RPV04sXHJcbiAgUEFHRV9VUCxcclxuICBSSUdIVF9BUlJPVyxcclxuICBVUF9BUlJPV1xyXG59IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW50bCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBzbGlkZUNhbGVuZGFyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcblxyXG4vKipcclxuICogQSBjYWxlbmRhciB0aGF0IGlzIHVzZWQgYXMgcGFydCBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyXCIsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlclwiPlxyXG4gIDxkaXYgKm5nSWY9XCJ0eXBlICE9PSAndGltZSdcIlxyXG4gICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXJcIlxyXG4gICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY3VycmVudFZpZXcgPT0gJ3llYXInXCJcclxuICAgICAgIChjbGljayk9XCJfeWVhckNsaWNrZWQoKVwiPnt7IF95ZWFyTGFiZWwgfX08L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLXRpbWVcIj5cclxuICAgIDxzcGFuICpuZ0lmPVwidHlwZSAhPT0gJ3RpbWUnXCJcclxuICAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlXCJcclxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiX2N1cnJlbnRWaWV3ID09ICdtb250aCdcIlxyXG4gICAgICAgICAgW2NsYXNzLm5vdC1jbGlja2FibGVdPVwidHlwZSA9PT0gJ21vbnRoJ1wiXHJcbiAgICAgICAgICAoY2xpY2spPVwiX2RhdGVDbGlja2VkKClcIj57eyBfZGF0ZUxhYmVsIH19PC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJ0eXBlLmVuZHNXaXRoKCd0aW1lJylcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWVcIlxyXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY3VycmVudFZpZXcgPT0gJ2Nsb2NrJ1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnNcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jbG9ja1ZpZXcgPT0gJ2hvdXInXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIl9ob3Vyc0NsaWNrZWQoKVwiPnt7IF9ob3Vyc0xhYmVsIH19PC9zcGFuPjo8c3BhbiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiX2Nsb2NrVmlldyA9PSAnbWludXRlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfbWludXRlc0NsaWNrZWQoKVwiPnt7IF9taW51dGVzTGFiZWwgfX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnRcIiBbbmdTd2l0Y2hdPVwiX2N1cnJlbnRWaWV3XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1tb250aC1jb250ZW50XCIgKm5nSWY9XCJfY3VycmVudFZpZXcgPT09ICdtb250aCcgfHwgX2N1cnJlbnRWaWV3ID09PSAneWVhcidcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udHJvbHNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wcmV2aW91cy1idXR0b25cIlxyXG4gICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCIhX3ByZXZpb3VzRW5hYmxlZCgpXCIgKGNsaWNrKT1cIl9wcmV2aW91c0NsaWNrZWQoKVwiXHJcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIG1vbnRoXCI+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wZXJpb2QtYnV0dG9uXCIgW0BzbGlkZUNhbGVuZGFyXT1cIl9jYWxlbmRhclN0YXRlXCIgKEBzbGlkZUNhbGVuZGFyLmRvbmUpPVwiX2NhbGVuZGFyU3RhdGVEb25lKClcIj5cclxuICAgICAgICA8c3Ryb25nPnt7IF9tb250aFllYXJMYWJlbCB9fTwvc3Ryb25nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1uZXh0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiFfbmV4dEVuYWJsZWQoKVwiIChjbGljayk9XCJfbmV4dENsaWNrZWQoKVwiXHJcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgbW9udGhcIj5cclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxtYXQtZGF0ZXRpbWVwaWNrZXItbW9udGgtdmlldyAqbmdTd2l0Y2hDYXNlPVwiJ21vbnRoJ1wiXHJcbiAgICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cIl9hY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cIl9kYXRlRmlsdGVyRm9yVmlld3NcIlxyXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiX2RhdGVTZWxlY3RlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cIl91c2VyU2VsZWN0ZWQoKVwiPlxyXG4gIDwvbWF0LWRhdGV0aW1lcGlja2VyLW1vbnRoLXZpZXc+XHJcbiAgPG1hdC1kYXRldGltZXBpY2tlci15ZWFyLXZpZXcgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiXHJcbiAgICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiX2FjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiX2RhdGVGaWx0ZXJGb3JWaWV3c1wiXHJcbiAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIl9tb250aFNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgIChfdXNlclNlbGVjdGlvbik9XCJfdXNlclNlbGVjdGVkKClcIj5cclxuICA8L21hdC1kYXRldGltZXBpY2tlci15ZWFyLXZpZXc+XHJcbiAgPG1hdC1kYXRldGltZXBpY2tlci1jbG9jayAqbmdTd2l0Y2hEZWZhdWx0XHJcbiAgICAgICAgICAgICBbc3RhcnRWaWV3XT1cIl9jbG9ja1ZpZXdcIlxyXG4gICAgICAgICAgICAgW2ludGVydmFsXT1cInRpbWVJbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcclxuICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxyXG4gICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiZGF0ZUZpbHRlclwiXHJcbiAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiX2FjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgKGFjdGl2ZURhdGVDaGFuZ2UpPVwiX29uQWN0aXZlRGF0ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJfdGltZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cIl91c2VyU2VsZWN0ZWQoKVwiPlxyXG4gIDwvbWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItZm9vdGVyXCI+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIl9oYW5kbGVDYW5jZWxCdXR0b24oJGV2ZW50KVwiPnt7IGNhbmNlbEJ1dHRvbkxhYmVsIH19PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJfaGFuZGxlQ29uZmlybUJ1dHRvbigkZXZlbnQpXCI+e3sgY29uZmlybUJ1dHRvbkxhYmVsIH19PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmJsb2NrO291dGxpbmU6MH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9bGFuZHNjYXBlXXtkaXNwbGF5OmZsZXh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXJ7cGFkZGluZzoxNnB4O2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiNmZmY7Ym94LXNpemluZzpib3JkZXItYm94fVttb2RlPWxhbmRzY2FwZV0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXJ7d2lkdGg6MTUwcHg7bWluLXdpZHRoOjE1MHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci15ZWFye3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NTAwO3doaXRlLXNwYWNlOm5vd3JhcH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLXRpbWV7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzRweH1bbW9kZT1sYW5kc2NhcGVdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZXt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC13cmFwOmJyZWFrLXdvcmR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZTpub3QoLmFjdGl2ZSksLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnM6bm90KC5hY3RpdmUpLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLW1pbnV0ZXM6bm90KC5hY3RpdmUpLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXI6bm90KC5hY3RpdmUpe2N1cnNvcjpwb2ludGVyO29wYWNpdHk6LjZ9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS5ub3QtY2xpY2thYmxlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWhvdXJzLm5vdC1jbGlja2FibGUsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlcy5ub3QtY2xpY2thYmxlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXIubm90LWNsaWNrYWJsZXtjdXJzb3I6aW5pdGlhbH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1le3BhZGRpbmctbGVmdDo4cHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZTpub3QoLmFjdGl2ZSl7b3BhY2l0eTouNn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1lOm5vdCguYWN0aXZlKSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1ob3VycywubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1lOm5vdCguYWN0aXZlKSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1taW51dGVze2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MX1bbW9kZT1sYW5kc2NhcGVdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWV7ZGlzcGxheTpibG9jaztwYWRkaW5nLWxlZnQ6MH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnR7d2lkdGg6MTAwJTtwYWRkaW5nOjAgOHB4IDhweDtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbn1bbW9kZT1sYW5kc2NhcGVdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udGVudHtwYWRkaW5nLXRvcDo4cHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50Pi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItZm9vdGVye3BhZGRpbmc6MTJweDt0ZXh0LWFsaWduOnJpZ2h0fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udHJvbHN7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6NDhweDtwYWRkaW5nOjEycHg7b3V0bGluZTowO2JvcmRlcjowO2JhY2tncm91bmQ6MCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcHJldmlvdXMtYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7cGFkZGluZzoxMnB4O291dGxpbmU6MDtib3JkZXI6MDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOjAgMDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1uZXh0LWJ1dHRvbi5kaXNhYmxlZCwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbi5kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCk7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uIHN2ZywubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiBzdmd7ZmlsbDpjdXJyZW50Q29sb3I7dmVydGljYWwtYWxpZ246dG9wfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGV7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7d2lkdGg6MTAwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGh7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjExcHg7cGFkZGluZzowIDAgOHB4fUBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KXsubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b117ZGlzcGxheTpmbGV4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlcnt3aWR0aDoxNTBweDttaW4td2lkdGg6MTUwcHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZXt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC13cmFwOmJyZWFrLXdvcmR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWV7ZGlzcGxheTpibG9jaztwYWRkaW5nLWxlZnQ6MH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b10gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50e3BhZGRpbmctdG9wOjhweH19YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyXVwiOiBcInRydWVcIixcclxuICAgIFwidGFiaW5kZXhcIjogXCIwXCIsXHJcbiAgICBcIihrZXlkb3duKVwiOiBcIl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duKCRldmVudClcIlxyXG4gIH0sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXI8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9pbnRsQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgX3VzZXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcclxuXHJcbiAgLyoqIEEgZGF0ZSByZXByZXNlbnRpbmcgdGhlIHBlcmlvZCAobW9udGggb3IgeWVhcikgdG8gc3RhcnQgdGhlIGNhbGVuZGFyIGluLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN0YXJ0QXQoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc3RhcnRBdCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydEF0OiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIHNob3VsZCBiZSBzdGFydGVkIGluIG1vbnRoIG9yIHllYXIgdmlldy4gKi9cclxuICBASW5wdXQoKSBzdGFydFZpZXc6IFwiY2xvY2tcIiB8IFwibW9udGhcIiB8IFwieWVhclwiID0gXCJtb250aFwiO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1pbkRhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbkRhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXhEYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1heERhdGUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9tYXhEYXRlID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWF4RGF0ZTogRCB8IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpIHRpbWVJbnRlcnZhbDogbnVtYmVyID0gMTtcclxuXHJcbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXHJcbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICAvKiogRGF0ZSBmaWx0ZXIgZm9yIHRoZSBtb250aCBhbmQgeWVhciB2aWV3cy4gKi9cclxuICBfZGF0ZUZpbHRlckZvclZpZXdzID0gKGRhdGU6IEQpID0+IHtcclxuICAgIHJldHVybiAhIWRhdGUgJiZcclxuICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5EQVRFKSkgJiZcclxuICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY3VycmVudCBhY3RpdmUgZGF0ZS4gVGhpcyBkZXRlcm1pbmVzIHdoaWNoIHRpbWUgcGVyaW9kIGlzIHNob3duIGFuZCB3aGljaCBkYXRlIGlzXHJcbiAgICogaGlnaGxpZ2h0ZWQgd2hlbiB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAqL1xyXG4gIGdldCBfYWN0aXZlRGF0ZSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBfYWN0aXZlRGF0ZSh2YWx1ZTogRCkge1xyXG4gICAgY29uc3Qgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlO1xyXG4gICAgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmNsYW1wRGF0ZSh2YWx1ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gICAgaWYgKG9sZEFjdGl2ZURhdGUgJiYgdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGUgJiYgdGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIiAmJlxyXG4gICAgICAhdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlKSkge1xyXG4gICAgICBpZiAodGhpcy5fYWRhcHRlci5pc0luTmV4dE1vbnRoKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlKSkge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTdGF0ZShcInJpZ2h0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTdGF0ZShcImxlZnRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsYW1wZWRBY3RpdmVEYXRlOiBEO1xyXG5cclxuICBfdXNlclNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cclxuICBfY3VycmVudFZpZXc6IFwiY2xvY2tcIiB8IFwibW9udGhcIiB8IFwieWVhclwiID0gXCJtb250aFwiO1xyXG4gIF9jbG9ja1ZpZXc6IFwiaG91clwiIHwgXCJtaW51dGVcIiA9IFwiaG91clwiO1xyXG5cclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY3VycmVudCBjYWxlbmRhciB2aWV3LiAqL1xyXG4gIGdldCBfeWVhckxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIGdldCBfbW9udGhZZWFyTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID8gdGhpcy5fYWRhcHRlci5nZXRNb250aE5hbWVzKFwibG9uZ1wiKVt0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpXSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgX2RhdGVMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmdldE1vbnRoTmFtZXMoXCJsb25nXCIpW3RoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuZm9ybWF0KHRoaXMuX2FjdGl2ZURhdGUsIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkucG9wdXBIZWFkZXJEYXRlTGFiZWwpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCBfaG91cnNMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuXzJkaWdpdCh0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9taW51dGVzTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl8yZGlnaXQodGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cyxcclxuICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIGlmICghdGhpcy5fYWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiTUFUX0RBVEVUSU1FX0ZPUk1BVFNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faW50bENoYW5nZXMgPSBfaW50bC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiBjaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5zdGFydEF0IHx8IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICAgIHRoaXMuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJ5ZWFyXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gXCJ0aW1lXCIpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IHRoaXMuc3RhcnRWaWV3IHx8IFwibW9udGhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5faW50bENoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGRhdGUgc2VsZWN0aW9uIGluIHRoZSBtb250aCB2aWV3LiAqL1xyXG4gIF9kYXRlU2VsZWN0ZWQoZGF0ZTogRCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGRhdGU7XHJcbiAgICBpZiAodGhpcy50eXBlICE9PSBcImRhdGVcIikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIG1vbnRoIHNlbGVjdGlvbiBpbiB0aGUgeWVhciB2aWV3LiAqL1xyXG4gIF9tb250aFNlbGVjdGVkKG1vbnRoOiBEKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gbW9udGg7XHJcbiAgICBpZiAodGhpcy50eXBlICE9PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJtb250aFwiO1xyXG4gICAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcImhvdXJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF90aW1lU2VsZWN0ZWQoZGF0ZTogRCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcIm1pbnV0ZVwiO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY29uZmlybUJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgX2hhbmRsZUNvbmZpcm1CdXR0b24oZXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgIHRoaXMuX3VzZXJTZWxlY3RlZCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBfaGFuZGxlQ2FuY2VsQnV0dG9uKGV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBDbG9zZSBkaWFsb2cgKGRhdGV0aW1lcGlja2VyLmNsb3NlKCkpXHJcbiAgICB0aGlzLl91c2VyU2VsZWN0aW9uLmVtaXQoKTtcclxuXHJcbiAgfVxyXG5cclxuICBfb25BY3RpdmVEYXRlQ2hhbmdlKGRhdGU6IEQpIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBkYXRlO1xyXG4gIH1cclxuXHJcbiAgX3llYXJDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBcInllYXJcIjtcclxuICB9XHJcblxyXG4gIF9kYXRlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnR5cGUgIT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcIm1vbnRoXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaG91cnNDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XHJcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcImhvdXJcIjtcclxuICB9XHJcblxyXG4gIF9taW51dGVzQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJjbG9ja1wiO1xyXG4gICAgdGhpcy5fY2xvY2tWaWV3ID0gXCJtaW51dGVcIjtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHVzZXIgY2xpY2tzIG9uIHRoZSBwcmV2aW91cyBidXR0b24uICovXHJcbiAgX3ByZXZpb3VzQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSkgOlxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLiAqL1xyXG4gIF9uZXh0Q2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBwcmV2aW91cyBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuICovXHJcbiAgX3ByZXZpb3VzRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5taW5EYXRlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICF0aGlzLm1pbkRhdGUgfHwgIXRoaXMuX2lzU2FtZVZpZXcodGhpcy5fYWN0aXZlRGF0ZSwgdGhpcy5taW5EYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBuZXh0IHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cclxuICBfbmV4dEVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubWF4RGF0ZSB8fCAhdGhpcy5faXNTYW1lVmlldyh0aGlzLl9hY3RpdmVEYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkuICovXHJcbiAgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIFRPRE8obW1hbGVyYmEpOiBXZSBjdXJyZW50bHkgYWxsb3cga2V5Ym9hcmQgbmF2aWdhdGlvbiB0byBkaXNhYmxlZCBkYXRlcywgYnV0IGp1c3QgcHJldmVudFxyXG4gICAgLy8gZGlzYWJsZWQgb25lcyBmcm9tIGJlaW5nIHNlbGVjdGVkLiBUaGlzIG1heSBub3QgYmUgaWRlYWwsIHdlIHNob3VsZCBsb29rIGludG8gd2hldGhlclxyXG4gICAgLy8gbmF2aWdhdGlvbiBzaG91bGQgc2tpcCBvdmVyIGRpc2FibGVkIGRhdGVzLCBhbmQgaWYgc28sIGhvdyB0byBpbXBsZW1lbnQgdGhhdCBlZmZpY2llbnRseS5cclxuICAgIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25Jbk1vbnRoVmlldyhldmVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcInllYXJcIikge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5ZZWFyVmlldyhldmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5DbG9ja1ZpZXcoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2ZvY3VzQWN0aXZlQ2VsbCgpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgdHdvIGRhdGVzIHJlcHJlc2VudCB0aGUgc2FtZSB2aWV3IGluIHRoZSBjdXJyZW50IHZpZXcgbW9kZSAobW9udGggb3IgeWVhcikuICovXHJcbiAgcHJpdmF0ZSBfaXNTYW1lVmlldyhkYXRlMTogRCwgZGF0ZTI6IEQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PSB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTIpICYmXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZTEpID09IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZTIpIDpcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PSB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkgd2hlbiBjYWxlbmRhciBpcyBpbiBtb250aCB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25Jbk1vbnRoVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgLTcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIDcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEhPTUU6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAxIC0gdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuX2FjdGl2ZURhdGUpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTkQ6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsXHJcbiAgICAgICAgICAodGhpcy5fYWRhcHRlci5nZXROdW1EYXlzSW5Nb250aCh0aGlzLl9hY3RpdmVEYXRlKSAtXHJcbiAgICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLl9hY3RpdmVEYXRlKSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfVVA6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGV2ZW50LmFsdEtleSA/XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgLTEpIDpcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBBR0VfRE9XTjpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gZXZlbnQuYWx0S2V5ID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIGlmICh0aGlzLl9kYXRlRmlsdGVyRm9yVmlld3ModGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgICAgIHRoaXMuX2RhdGVTZWxlY3RlZCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gRG9uJ3QgcHJldmVudCBkZWZhdWx0IG9yIGZvY3VzIGFjdGl2ZSBjZWxsIG9uIGtleXMgdGhhdCB3ZSBkb24ndCBleHBsaWNpdGx5IGhhbmRsZS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIHllYXIgdmlldy4gKi9cclxuICBwcml2YXRlIF9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5ZZWFyVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX3ByZXZNb250aEluU2FtZUNvbCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9uZXh0TW9udGhJblNhbWVDb2wodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgSE9NRTpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLFxyXG4gICAgICAgICAgLXRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVORDpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLFxyXG4gICAgICAgICAgMTEgLSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQQUdFX1VQOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPVxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIGV2ZW50LmFsdEtleSA/IC0xMCA6IC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQQUdFX0RPV046XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgZXZlbnQuYWx0S2V5ID8gMTAgOiAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgICB0aGlzLl9tb250aFNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIERvbid0IHByZXZlbnQgZGVmYXVsdCBvciBmb2N1cyBhY3RpdmUgY2VsbCBvbiBrZXlzIHRoYXQgd2UgZG9uJ3QgZXhwbGljaXRseSBoYW5kbGUuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkgd2hlbiBjYWxlbmRhciBpcyBpbiBtb250aCB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JbkNsb2NrVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2Nsb2NrVmlldyA9PSBcImhvdXJcIiA/XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFySG91cnModGhpcy5fYWN0aXZlRGF0ZSwgMSkgOlxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1pbnV0ZXModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fY2xvY2tWaWV3ID09IFwiaG91clwiID9cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJIb3Vycyh0aGlzLl9hY3RpdmVEYXRlLCAtMSkgOlxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1pbnV0ZXModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIHRoaXMuX3RpbWVTZWxlY3RlZCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gRG9uJ3QgcHJldmVudCBkZWZhdWx0IG9yIGZvY3VzIGFjdGl2ZSBjZWxsIG9uIGtleXMgdGhhdCB3ZSBkb24ndCBleHBsaWNpdGx5IGhhbmRsZS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgdGhlIGRhdGUgZm9yIHRoZSBtb250aCB0aGF0IGNvbWVzIGJlZm9yZSB0aGUgZ2l2ZW4gbW9udGggaW4gdGhlIHNhbWUgY29sdW1uIGluIHRoZVxyXG4gICAqIGNhbGVuZGFyIHRhYmxlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3ByZXZNb250aEluU2FtZUNvbChkYXRlOiBEKTogRCB7XHJcbiAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgbW9udGhzIHRvIGp1bXAgZm9yd2FyZCBnaXZlbiB0aGF0IHRoZXJlIGFyZSAyIGVtcHR5IHNsb3RzIGF0IHRoZSBiZWdpbm5pbmdcclxuICAgIC8vIG9mIGVhY2ggeWVhci5cclxuICAgIGNvbnN0IGluY3JlbWVudCA9IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPD0gNCA/IC01IDpcclxuICAgICAgKHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPj0gNyA/IC03IDogLTEyKTtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIGluY3JlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgdGhlIGRhdGUgZm9yIHRoZSBtb250aCB0aGF0IGNvbWVzIGFmdGVyIHRoZSBnaXZlbiBtb250aCBpbiB0aGUgc2FtZSBjb2x1bW4gaW4gdGhlXHJcbiAgICogY2FsZW5kYXIgdGFibGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbmV4dE1vbnRoSW5TYW1lQ29sKGRhdGU6IEQpOiBEIHtcclxuICAgIC8vIERldGVybWluZSBob3cgbWFueSBtb250aHMgdG8ganVtcCBmb3J3YXJkIGdpdmVuIHRoYXQgdGhlcmUgYXJlIDIgZW1wdHkgc2xvdHMgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgLy8gb2YgZWFjaCB5ZWFyLlxyXG4gICAgY29uc3QgaW5jcmVtZW50ID0gdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA8PSA0ID8gNyA6XHJcbiAgICAgICh0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpID49IDcgPyA1IDogMTIpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgaW5jcmVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsZW5kYXJTdGF0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlRG9uZSgpIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfMmRpZ2l0KG46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjAwXCIgKyBuKS5zbGljZSgtMik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGEgc2luZ2xlIGNhbGVuZGFyIGNlbGwuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGRpc3BsYXlWYWx1ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbikge1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgY2FsZW5kYXIgZGF0YSBpbiBhIHRhYmxlLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJbbWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHldXCIsXHJcbiAgdGVtcGxhdGU6IGA8IS0tXHJcbiAgSWYgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIGluIHRoZSBmaXJzdCByb3csIGNyZWF0ZSBhIHNlcGFyYXRlIGxhYmVsIHJvdy4gV2UgbWFyayB0aGlzIHJvdyBhc1xyXG4gIGFyaWEtaGlkZGVuIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBpdCB0byBiZSByZWFkIG91dCBhcyBvbmUgb2YgdGhlIHdlZWtzIGluIHRoZSBtb250aC5cclxuLS0+XHJcbjx0ciAqbmdJZj1cIl9maXJzdFJvd09mZnNldCA8IGxhYmVsTWluUmVxdWlyZWRDZWxsc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gIDx0ZCBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVsXCIgW2F0dHIuY29sc3Bhbl09XCJudW1Db2xzXCIgPnt7IGxhYmVsIH19PC90ZD5cclxuPC90cj5cclxuXHJcbjwhLS0gQ3JlYXRlIHRoZSBmaXJzdCByb3cgc2VwYXJhdGVseSBzbyB3ZSBjYW4gaW5jbHVkZSBhIHNwZWNpYWwgc3BhY2VyIGNlbGwuIC0tPlxyXG48dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzOyBsZXQgcm93SW5kZXggPSBpbmRleFwiIHJvbGU9XCJyb3dcIj5cclxuICA8IS0tXHJcbiAgICBXZSBtYXJrIHRoaXMgY2VsbCBhcyBhcmlhLWhpZGRlbiBzbyBpdCBkb2Vzbid0IGdldCByZWFkIG91dCBhcyBvbmUgb2YgdGhlIGRheXMgaW4gdGhlIHdlZWsuXHJcbiAgLS0+XHJcbiAgPHRkICpuZ0lmPVwicm93SW5kZXggPT09IDAgJiYgX2ZpcnN0Um93T2Zmc2V0XCJcclxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbFwiXHJcbiAgICAgIFthdHRyLmNvbHNwYW5dPVwiX2ZpcnN0Um93T2Zmc2V0XCI+XHJcbiAgICB7eyBfZmlyc3RSb3dPZmZzZXQgPj0gbGFiZWxNaW5SZXF1aXJlZENlbGxzID8gbGFiZWwgOiAnJyB9fVxyXG4gIDwvdGQ+XHJcbiAgPHRkICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGNvbEluZGV4ID0gaW5kZXhcIlxyXG4gICAgICByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGxcIlxyXG4gICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWRdPVwiIWl0ZW0uZW5hYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1hY3RpdmVdPVwiX2lzQWN0aXZlQ2VsbChyb3dJbmRleCwgY29sSW5kZXgpXCJcclxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJpdGVtLmFyaWFMYWJlbFwiXHJcbiAgICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiIWl0ZW0uZW5hYmxlZCB8fCBudWxsXCJcclxuICAgICAgKGNsaWNrKT1cIl9jZWxsQ2xpY2tlZChpdGVtKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudFwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZF09XCJzZWxlY3RlZFZhbHVlID09PSBpdGVtLnZhbHVlXCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXRvZGF5XT1cInRvZGF5VmFsdWUgPT09IGl0ZW0udmFsdWVcIj5cclxuICAgICAge3sgaXRlbS5kaXNwbGF5VmFsdWUgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvdGQ+XHJcbjwvdHI+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweDttaW4td2lkdGg6MjI0cHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVse3BhZGRpbmc6Ny4xNDI4NiUgMCA3LjE0Mjg2JSA3LjE0Mjg2JTtoZWlnaHQ6MDtsaW5lLWhlaWdodDowO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpO3RleHQtYWxpZ246bGVmdH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxNC4yODU3MSU7aGVpZ2h0OjA7bGluZS1oZWlnaHQ6MDtwYWRkaW5nOjcuMTQyODYlIDA7dGV4dC1hbGlnbjpjZW50ZXI7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUlO2xlZnQ6NSU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDo5MCU7aGVpZ2h0OjkwJTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhcjpmb2N1cyAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCksOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfVtkaXI9cnRsXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWx7cGFkZGluZzowIDcuMTQyODYlIDAgMDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNnB4KTt0ZXh0LWFsaWduOnJpZ2h0fWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiY2xhc3NcIjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keVwiXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSB7XHJcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIHRhYmxlLiAoZS5nLiBcIkphbiAyMDE3XCIpLiAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgY2VsbHMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgcm93czogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGxbXVtdO1xyXG5cclxuICAvKiogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRvZGF5LiAqL1xyXG4gIEBJbnB1dCgpIHRvZGF5VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuICovXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGZyZWUgY2VsbHMgbmVlZGVkIHRvIGZpdCB0aGUgbGFiZWwgaW4gdGhlIGZpcnN0IHJvdy4gKi9cclxuICBASW5wdXQoKSBsYWJlbE1pblJlcXVpcmVkQ2VsbHM6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgbnVtQ29scyA9IDc7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRvIGFsbG93IHNlbGVjdGlvbiBvZiBkaXNhYmxlZCBjZWxscy4gKi9cclxuICBASW5wdXQoKSBhbGxvd0Rpc2FibGVkU2VsZWN0aW9uID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgY2VsbCBudW1iZXIgb2YgdGhlIGFjdGl2ZSBjZWxsIGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSBhY3RpdmVDZWxsID0gMDtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgdmFsdWUgaXMgc2VsZWN0ZWQuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgX2NlbGxDbGlja2VkKGNlbGw6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYWxsb3dEaXNhYmxlZFNlbGVjdGlvbiAmJiAhY2VsbC5lbmFibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KGNlbGwudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBudW1iZXIgb2YgYmxhbmsgY2VsbHMgdG8gcHV0IGF0IHRoZSBiZWdpbm5pbmcgZm9yIHRoZSBmaXJzdCByb3cuICovXHJcbiAgZ2V0IF9maXJzdFJvd09mZnNldCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucm93cyAmJiB0aGlzLnJvd3MubGVuZ3RoICYmIHRoaXMucm93c1swXS5sZW5ndGggP1xyXG4gICAgICB0aGlzLm51bUNvbHMgLSB0aGlzLnJvd3NbMF0ubGVuZ3RoIDogMDtcclxuICB9XHJcblxyXG4gIF9pc0FjdGl2ZUNlbGwocm93SW5kZXg6IG51bWJlciwgY29sSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNlbGxOdW1iZXIgPSByb3dJbmRleCAqIHRoaXMubnVtQ29scyArIGNvbEluZGV4O1xyXG5cclxuICAgIC8vIEFjY291bnQgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGZpcnN0IHJvdyBtYXkgbm90IGhhdmUgYXMgbWFueSBjZWxscy5cclxuICAgIGlmIChyb3dJbmRleCkge1xyXG4gICAgICBjZWxsTnVtYmVyIC09IHRoaXMuX2ZpcnN0Um93T2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjZWxsTnVtYmVyID09PSB0aGlzLmFjdGl2ZUNlbGw7XHJcbiAgfVxyXG59XHJcbiIsIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xPQ0tfUkFESVVTID0gNTA7XHJcbmV4cG9ydCBjb25zdCBDTE9DS19JTk5FUl9SQURJVVMgPSAyNy41O1xyXG5leHBvcnQgY29uc3QgQ0xPQ0tfT1VURVJfUkFESVVTID0gNDEuMjU7XHJcbmV4cG9ydCBjb25zdCBDTE9DS19USUNLX1JBRElVUyA9IDcuMDgzMztcclxuXHJcbmV4cG9ydCB0eXBlIENsb2NrVmlldyA9IFwiaG91clwiIHwgXCJtaW51dGVcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNsb2NrIHRoYXQgaXMgdXNlZCBhcyBwYXJ0IG9mIHRoZSBkYXRlcGlja2VyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2tcIixcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2tcIj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbnRlclwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staGFuZFwiIFtuZ1N0eWxlXT1cIl9oYW5kXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1ob3Vyc1wiIFtjbGFzcy5hY3RpdmVdPVwiX2hvdXJWaWV3XCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9ob3Vyc1wiXHJcbiAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGxcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtc2VsZWN0ZWRdPVwiX3NlbGVjdGVkSG91ciA9PSBpdGVtLnZhbHVlXCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxyXG4gICAgICAgICBbc3R5bGUudG9wXT1cIml0ZW0udG9wKyclJ1wiXHJcbiAgICAgICAgIFtzdHlsZS5sZWZ0XT1cIml0ZW0ubGVmdCsnJSdcIlxyXG4gICAgICAgICBbc3R5bGUuZm9udFNpemVdPVwiaXRlbS5mb250U2l6ZVwiPnt7IGl0ZW0uZGlzcGxheVZhbHVlIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1taW51dGVzXCIgW2NsYXNzLmFjdGl2ZV09XCIhX2hvdXJWaWV3XCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9taW51dGVzXCJcclxuICAgICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbFwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZF09XCJfc2VsZWN0ZWRNaW51dGUgPT0gaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkXCJcclxuICAgICAgICAgW3N0eWxlLnRvcF09XCJpdGVtLnRvcCsnJSdcIlxyXG4gICAgICAgICBbc3R5bGUubGVmdF09XCJpdGVtLmxlZnQrJyUnXCI+e3sgaXRlbS5kaXNwbGF5VmFsdWUgfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWluLXdpZHRoOjIyNHB4O21hcmdpbjo4cHg7Zm9udC1zaXplOjE0cHg7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2Nre3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjA7cGFkZGluZy10b3A6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Ym9yZGVyLXJhZGl1czo1MCV9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoyJTtoZWlnaHQ6MiU7bWFyZ2luOi0xJTtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MXB4O21hcmdpbjowIGF1dG87LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmQ6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotNHB4O2xlZnQ6LTRweDt3aWR0aDo4cHg7aGVpZ2h0OjhweDtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhvdXJzLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNpdGlvbjozNTBtczstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjIpO3RyYW5zZm9ybTpzY2FsZSgxLjIpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staG91cnMuYWN0aXZlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlcy5hY3RpdmV7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1taW51dGVzey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm06c2NhbGUoLjgpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbHtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7d2lkdGg6MTQuMTY2NiU7aGVpZ2h0OjE0LjE2NjYlO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItcmFkaXVzOjUwJTthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtc2VsZWN0ZWQpOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtZGlzYWJsZWQpOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KTtwb2ludGVyLWV2ZW50czpub25lfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZHtjb2xvcjojZmZmfWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwicm9sZVwiOiBcImNsb2NrXCIsXHJcbiAgICBcIihtb3VzZWRvd24pXCI6IFwiX2hhbmRsZU1vdXNlZG93bigkZXZlbnQpXCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNsb2NrPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdG8gZGlzcGxheSBpbiB0aGlzIGNsb2NrIHZpZXcuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IEQpIHtcclxuICAgIGxldCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmNsYW1wRGF0ZSh2YWx1ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyLnNhbWVNaW51dGUob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYWN0aXZlRGF0ZTogRDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzZWxlY3RlZCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2FkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtaW5EYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1pbkRhdGUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9taW5EYXRlID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fYWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWluRGF0ZTogRCB8IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX3RpbWVDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWF4RGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWF4RGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2FkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21heERhdGU6IEQgfCBudWxsO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2xvY2sgc2hvdWxkIGJlIHN0YXJ0ZWQgaW4gaG91ciBvciBtaW51dGUgdmlldy4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzdGFydFZpZXcodmFsdWU6IENsb2NrVmlldykge1xyXG4gICAgdGhpcy5faG91clZpZXcgPSB2YWx1ZSAhPSBcIm1pbnV0ZVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXHJcbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgaW50ZXJ2YWw6IG51bWJlciA9IDE7XHJcblxyXG4gIEBJbnB1dCgpIHR3ZWx2ZWhvdXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICBAT3V0cHV0KCkgYWN0aXZlRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIEhvdXJzIGFuZCBNaW51dGVzIHJlcHJlc2VudGluZyB0aGUgY2xvY2sgdmlldy4gKi9cclxuICBfaG91cnM6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICBfbWludXRlczogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2xvY2sgaXMgaW4gaG91ciB2aWV3LiAqL1xyXG4gIF9ob3VyVmlldzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIF9zZWxlY3RlZEhvdXI6IG51bWJlcjtcclxuICBfc2VsZWN0ZWRNaW51dGU6IG51bWJlcjtcclxuXHJcbiAgZ2V0IF9oYW5kKCk6IGFueSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEhvdXIgPSB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIHRoaXMuX3NlbGVjdGVkTWludXRlID0gdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGxldCBkZWcgPSAwO1xyXG4gICAgbGV0IHJhZGl1cyA9IENMT0NLX09VVEVSX1JBRElVUztcclxuICAgIGlmICh0aGlzLl9ob3VyVmlldykge1xyXG4gICAgICBsZXQgb3V0ZXIgPSB0aGlzLl9zZWxlY3RlZEhvdXIgPiAwICYmIHRoaXMuX3NlbGVjdGVkSG91ciA8IDEzO1xyXG4gICAgICByYWRpdXMgPSBvdXRlciA/IENMT0NLX09VVEVSX1JBRElVUyA6IENMT0NLX0lOTkVSX1JBRElVUztcclxuICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICAgIHJhZGl1cyA9IENMT0NLX09VVEVSX1JBRElVUztcclxuICAgICAgfVxyXG4gICAgICBkZWcgPSBNYXRoLnJvdW5kKHRoaXMuX3NlbGVjdGVkSG91ciAqICgzNjAgLyAoMjQgLyAyKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVnID0gTWF0aC5yb3VuZCh0aGlzLl9zZWxlY3RlZE1pbnV0ZSAqICgzNjAgLyA2MCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJ0cmFuc2Zvcm1cIjogYHJvdGF0ZSgke2RlZ31kZWcpYCxcclxuICAgICAgXCJoZWlnaHRcIjogYCR7cmFkaXVzfSVgLFxyXG4gICAgICBcIm1hcmdpbi10b3BcIjogYCR7NTAgLSByYWRpdXN9JWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdXNlTW92ZUxpc3RlbmVyOiBhbnk7XHJcbiAgcHJpdmF0ZSBtb3VzZVVwTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4pIHtcclxuICAgIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVNb3VzZW1vdmUoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIHRoaXMubW91c2VVcExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVNb3VzZXVwKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBtb3VzZWRvd24gZXZlbnRzIG9uIHRoZSBjbG9jayBib2R5LiAqL1xyXG4gIF9oYW5kbGVNb3VzZWRvd24oZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fdGltZUNoYW5nZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0VGltZShldmVudCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTW91c2Vtb3ZlKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFRpbWUoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZU1vdXNldXAoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICBpZiAodGhpcy5fdGltZUNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBjbG9jayB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICB0aGlzLl9ob3Vycy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5fbWludXRlcy5sZW5ndGggPSAwO1xyXG5cclxuICAgIGxldCBob3VyTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldEhvdXJOYW1lcygpO1xyXG4gICAgbGV0IG1pbnV0ZU5hbWVzID0gdGhpcy5fYWRhcHRlci5nZXRNaW51dGVOYW1lcygpO1xyXG5cclxuICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAoaG91ck5hbWVzLmxlbmd0aCAvIDIpICsgMTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGkgLyA2ICogTWF0aC5QSTtcclxuICAgICAgICBsZXQgcmFkaXVzID0gQ0xPQ0tfT1VURVJfUkFESVVTO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgaSArIDEsIDApO1xyXG4gICAgICAgIGxldCBlbmFibGVkID1cclxuICAgICAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgICAgICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMCk7XHJcbiAgICAgICAgdGhpcy5faG91cnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogaSxcclxuICAgICAgICAgIGRpc3BsYXlWYWx1ZTogaSA9PT0gMCA/IFwiMDBcIiA6IGhvdXJOYW1lc1tpXSxcclxuICAgICAgICAgIGVuYWJsZWQ6IGVuYWJsZWQsXHJcbiAgICAgICAgICB0b3A6IENMT0NLX1JBRElVUyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICAgIGxlZnQ6IENMT0NLX1JBRElVUyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XHJcbiAgICAgICAgbGV0IG91dGVyID0gaSA+IDAgJiYgaSA8IDEzLFxyXG4gICAgICAgICAgcmFkaXVzID0gb3V0ZXIgPyBDTE9DS19PVVRFUl9SQURJVVMgOiBDTE9DS19JTk5FUl9SQURJVVM7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCBpLCAwKTtcclxuICAgICAgICBsZXQgZW5hYmxlZCA9XHJcbiAgICAgICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApICYmXHJcbiAgICAgICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlLkhPVVIpKTtcclxuICAgICAgICB0aGlzLl9ob3Vycy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiBpLFxyXG4gICAgICAgICAgZGlzcGxheVZhbHVlOiBpID09PSAwID8gXCIwMFwiIDogaG91ck5hbWVzW2ldLFxyXG4gICAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcclxuICAgICAgICAgIHRvcDogQ0xPQ0tfUkFESVVTIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIENMT0NLX1RJQ0tfUkFESVVTLFxyXG4gICAgICAgICAgbGVmdDogQ0xPQ0tfUkFESVVTICsgTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyAtIENMT0NLX1RJQ0tfUkFESVVTLFxyXG4gICAgICAgICAgZm9udFNpemU6IGkgPiAwICYmIGkgPCAxMyA/IFwiXCIgOiBcIjgwJVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbnV0ZU5hbWVzLmxlbmd0aDsgaSArPSA1KSB7XHJcbiAgICAgIGxldCByYWRpYW4gPSBpIC8gMzAgKiBNYXRoLlBJO1xyXG4gICAgICBjb25zdCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLCBpKTtcclxuICAgICAgbGV0IGVuYWJsZWQgPVxyXG4gICAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApICYmXHJcbiAgICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5NSU5VVEUpKTtcclxuICAgICAgdGhpcy5fbWludXRlcy5wdXNoKHtcclxuICAgICAgICB2YWx1ZTogaSxcclxuICAgICAgICBkaXNwbGF5VmFsdWU6IGkgPT09IDAgPyBcIjAwXCIgOiBtaW51dGVOYW1lc1tpXSxcclxuICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxyXG4gICAgICAgIHRvcDogQ0xPQ0tfUkFESVVTIC0gTWF0aC5jb3MocmFkaWFuKSAqIENMT0NLX09VVEVSX1JBRElVUyAtIENMT0NLX1RJQ0tfUkFESVVTLFxyXG4gICAgICAgIGxlZnQ6IENMT0NLX1JBRElVUyArIE1hdGguc2luKHJhZGlhbikgKiBDTE9DS19PVVRFUl9SQURJVVMgLSBDTE9DS19USUNLX1JBRElVU1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBUaW1lXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRUaW1lKGV2ZW50OiBhbnkpIHtcclxuICAgIGxldCB0cmlnZ2VyID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHRyaWdnZXJSZWN0ID0gdHJpZ2dlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCB3aWR0aCA9IHRyaWdnZXIub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdHJpZ2dlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgcGFnZVggPSBldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkID8gZXZlbnQucGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgbGV0IHBhZ2VZID0gZXZlbnQucGFnZVkgIT09IHVuZGVmaW5lZCA/IGV2ZW50LnBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcclxuICAgIGxldCB4ID0gKHdpZHRoIC8gMikgLSAocGFnZVggLSB0cmlnZ2VyUmVjdC5sZWZ0IC0gd2luZG93LnBhZ2VYT2Zmc2V0KTtcclxuICAgIGxldCB5ID0gKGhlaWdodCAvIDIpIC0gKHBhZ2VZIC0gdHJpZ2dlclJlY3QudG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0KTtcclxuICAgIGxldCByYWRpYW4gPSBNYXRoLmF0YW4yKC14LCB5KTtcclxuICAgIGxldCB1bml0ID0gTWF0aC5QSSAvICh0aGlzLl9ob3VyVmlldyA/IDYgOiAodGhpcy5pbnRlcnZhbCA/ICgzMCAvIHRoaXMuaW50ZXJ2YWwpIDogMzApKTtcclxuICAgIGxldCB6ID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xyXG4gICAgbGV0IG91dGVyID0gdGhpcy5faG91clZpZXcgJiYgeiA+ICgod2lkdGggKiAoQ0xPQ0tfT1VURVJfUkFESVVTIC8gMTAwKSkgK1xyXG4gICAgICAod2lkdGggKiAoQ0xPQ0tfSU5ORVJfUkFESVVTIC8gMTAwKSkpIC8gMjtcclxuXHJcbiAgICBpZiAocmFkaWFuIDwgMCkge1xyXG4gICAgICByYWRpYW4gPSBNYXRoLlBJICogMiArIHJhZGlhbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQocmFkaWFuIC8gdW5pdCk7XHJcblxyXG4gICAgbGV0IGRhdGU7XHJcbiAgICBpZiAodGhpcy5faG91clZpZXcpIHtcclxuICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT09IDAgPyAxMiA6IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMTIpIHtcclxuICAgICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsdWUgPSBvdXRlciA/ICh2YWx1ZSA9PT0gMCA/IDEyIDogdmFsdWUpIDogdmFsdWUgPT09IDAgPyAwIDogdmFsdWUgKyAxMjtcclxuICAgICAgfVxyXG4gICAgICBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIHZhbHVlLCB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmludGVydmFsKSB7XHJcbiAgICAgICAgdmFsdWUgKj0gdGhpcy5pbnRlcnZhbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsdWUgPT09IDYwKSB7XHJcbiAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGFtcGVkID0gdGhpcy5fYWRhcHRlci5jbGFtcERhdGUoZGF0ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gICAgaWYgKGRhdGUgPT09IGNsYW1wZWQpIHtcclxuICAgICAgdGhpcy5fdGltZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBjbGFtcGVkO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gXCJAYW5ndWxhci9jZGsvYmlkaVwiO1xyXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvZXJjaW9uXCI7XHJcbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IHtcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZixcclxuICBQb3NpdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gXCJAYW5ndWxhci9jZGsvcG9ydGFsXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0RGlhbG9nLFxyXG4gIE1hdERpYWxvZ1JlZlxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlcklucHV0IH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItaW5wdXRcIjtcclxuXHJcbi8qKiBVc2VkIHRvIGdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBlYWNoIGRhdGVwaWNrZXIgaW5zdGFuY2UuICovXHJcbmxldCBkYXRldGltZXBpY2tlclVpZCA9IDA7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHVzZWQgYXMgdGhlIGNvbnRlbnQgZm9yIHRoZSBkYXRlcGlja2VyIGRpYWxvZyBhbmQgcG9wdXAuIFdlIHVzZSB0aGlzIGluc3RlYWQgb2YgdXNpbmdcclxuICogTWF0Q2FsZW5kYXIgZGlyZWN0bHkgYXMgdGhlIGNvbnRlbnQgc28gd2UgY2FuIGNvbnRyb2wgdGhlIGluaXRpYWwgZm9jdXMuIFRoaXMgYWxzbyBnaXZlcyB1cyBhXHJcbiAqIHBsYWNlIHRvIHB1dCBhZGRpdGlvbmFsIGZlYXR1cmVzIG9mIHRoZSBwb3B1cCB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgY2FsZW5kYXIgaXRzZWxmIGluIHRoZVxyXG4gKiBmdXR1cmUuIChlLmcuIGNvbmZpcm1hdGlvbiBidXR0b25zKS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnRcIixcclxuICB0ZW1wbGF0ZTogYDxtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXIgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiIGNka1RyYXBGb2N1c1xyXG4gICAgICAgICAgICAgIFtpZF09XCJkYXRldGltZXBpY2tlci5pZFwiXHJcbiAgICAgICAgICAgICAgW2F0dHIubW9kZV09XCJkYXRldGltZXBpY2tlci5tb2RlXCJcclxuICAgICAgICAgICAgICBbc3RhcnRWaWV3XT1cImRhdGV0aW1lcGlja2VyLnN0YXJ0Vmlld1wiXHJcbiAgICAgICAgICAgICAgW3R5cGVdPVwiZGF0ZXRpbWVwaWNrZXIudHlwZVwiXHJcbiAgICAgICAgICAgICAgW3RpbWVJbnRlcnZhbF09XCJkYXRldGltZXBpY2tlci50aW1lSW50ZXJ2YWxcIlxyXG4gICAgICAgICAgICAgIFttaW5EYXRlXT1cImRhdGV0aW1lcGlja2VyLl9taW5EYXRlXCJcclxuICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJkYXRldGltZXBpY2tlci5fbWF4RGF0ZVwiXHJcbiAgICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiZGF0ZXRpbWVwaWNrZXIuX2RhdGVGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJkYXRldGltZXBpY2tlci5fc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgIFtzdGFydEF0XT1cImRhdGV0aW1lcGlja2VyLnN0YXJ0QXRcIlxyXG4gICAgICAgICAgICAgIFtjb25maXJtQnV0dG9uTGFiZWxdPVwiZGF0ZXRpbWVwaWNrZXIuY29uZmlybUJ1dHRvbkxhYmVsXCJcclxuICAgICAgICAgICAgICBbY2FuY2VsQnV0dG9uTGFiZWxdPVwiZGF0ZXRpbWVwaWNrZXIuY2FuY2VsQnV0dG9uTGFiZWxcIlxyXG4gICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJkYXRldGltZXBpY2tlci5fc2VsZWN0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgIChfdXNlclNlbGVjdGlvbik9XCJkYXRldGltZXBpY2tlci5jbG9zZSgpXCI+XHJcbjwvbWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyPlxyXG5gLFxyXG4gIHN0eWxlczogW2AubWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnR7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MnB4O292ZXJmbG93OmhpZGRlbn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFye3dpZHRoOjI5NnB4O2hlaWdodDphdXRvfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1sYW5kc2NhcGVde3dpZHRoOjQ0NnB4O2hlaWdodDphdXRvfUBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KXsubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b117d2lkdGg6NDQ2cHg7aGVpZ2h0OmF1dG99fS5tYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudC10b3VjaHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMik7ZGlzcGxheTpibG9jaztib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLC5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MTAwMDtwb2ludGVyLWV2ZW50czphdXRvO3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjQ4fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNil9Lm1hdC1kYXRldGltZXBpY2tlci1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVye3BhZGRpbmc6MH1gXSxcclxuICBob3N0OiB7XHJcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnRcIixcclxuICAgIFwiW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50LXRvdWNoXVwiOiBcImRhdGV0aW1lcGlja2VyPy50b3VjaFVpXCIsXHJcbiAgICBcIihrZXlkb3duKVwiOiBcIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgZGF0ZXRpbWVwaWNrZXI6IE1hdERhdGV0aW1lcGlja2VyPEQ+O1xyXG5cclxuICBAVmlld0NoaWxkKE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIpIF9jYWxlbmRhcjogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcjxEPjtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fY2FsZW5kYXIuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBrZXlkb3duIGV2ZW50IG9uIGRhdGVwaWNrZXIgY29udGVudC5cclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgIHRoaXMuZGF0ZXRpbWVwaWNrZXIuY2xvc2UoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXJcIixcclxuICBleHBvcnRBczogXCJtYXREYXRldGltZXBpY2tlclwiLFxyXG4gIHRlbXBsYXRlOiBcIlwiLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyPEQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogVGhlIGRhdGUgdG8gb3BlbiB0aGUgY2FsZW5kYXIgdG8gaW5pdGlhbGx5LiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN0YXJ0QXQoKTogRCB8IG51bGwge1xyXG4gICAgLy8gSWYgYW4gZXhwbGljaXQgc3RhcnRBdCBpcyBzZXQgd2Ugc3RhcnQgdGhlcmUsIG90aGVyd2lzZSB3ZSBzdGFydCBhdCB3aGF0ZXZlciB0aGUgY3VycmVudGx5XHJcbiAgICAvLyBzZWxlY3RlZCB2YWx1ZSBpcy5cclxuICAgIHJldHVybiB0aGlzLl9zdGFydEF0IHx8ICh0aGlzLl9kYXRlcGlja2VySW5wdXQgPyB0aGlzLl9kYXRlcGlja2VySW5wdXQudmFsdWUgOiBudWxsKTtcclxuICB9XHJcblxyXG4gIHNldCBzdGFydEF0KGRhdGU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9zdGFydEF0ID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RhcnRBdDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgdmlldyB0aGF0IHRoZSBjYWxlbmRhciBzaG91bGQgc3RhcnQgaW4uICovXHJcbiAgQElucHV0KCkgc3RhcnRWaWV3OiBcImNsb2NrXCIgfCBcIm1vbnRoXCIgfCBcInllYXJcIiA9IFwibW9udGhcIjtcclxuICBASW5wdXQoKSBtb2RlOiBcImF1dG9cIiB8IFwicG9ydHJhaXRcIiB8IFwibGFuZHNjYXBlXCIgPSBcImF1dG9cIjtcclxuICBASW5wdXQoKSB0aW1lSW50ZXJ2YWw6IG51bWJlciA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG9wZW5PbkZvY3VzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3Blbk9uRm9jdXM7IH1cclxuICBzZXQgb3Blbk9uRm9jdXModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fb3Blbk9uRm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XHJcbiAgcHJpdmF0ZSBfb3Blbk9uRm9jdXM6IGJvb2xlYW47XHJcblxyXG4gIF9oYW5kbGVGb2N1cygpIHtcclxuICAgIGlmICghdGhpcy5vcGVuZWQgJiYgdGhpcy5vcGVuT25Gb2N1cykge1xyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHNldCB0eXBlKHZhbHVlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWUgfHwgXCJkYXRlXCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIFVJIGlzIGluIHRvdWNoIG1vZGUuIEluIHRvdWNoIG1vZGUgdGhlIGNhbGVuZGFyIG9wZW5zIGluIGEgZGlhbG9nIHJhdGhlclxyXG4gICAqIHRoYW4gYSBwb3B1cCBhbmQgZWxlbWVudHMgaGF2ZSBtb3JlIHBhZGRpbmcgdG8gYWxsb3cgZm9yIGJpZ2dlciB0b3VjaCB0YXJnZXRzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvdWNoVWkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hVaTtcclxuICB9XHJcblxyXG4gIHNldCB0b3VjaFVpKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl90b3VjaFVpID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RvdWNoVWkgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGRhdGVwaWNrZXIgcG9wLXVwIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA/XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5kaXNhYmxlZCA6ICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuXHJcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX2Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLm5leHQobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIG5ldyBzZWxlY3RlZCBkYXRlIHdoZW4gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLlxyXG4gICAqIEBkZXByZWNhdGVkIFN3aXRjaCB0byB0aGUgYGRhdGVDaGFuZ2VgIGFuZCBgZGF0ZUlucHV0YCBiaW5kaW5nIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBDbGFzc2VzIHRvIGJlIHBhc3NlZCB0byB0aGUgZGF0ZSBwaWNrZXIgcGFuZWwuIFN1cHBvcnRzIHRoZSBzYW1lIHN5bnRheCBhcyBgbmdDbGFzc2AuICovXHJcbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25MYWJlbCA9ICdDb25maXJtJztcclxuICBASW5wdXQoKSBjYW5jZWxCdXR0b25MYWJlbCA9ICdDYW5jZWwnO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBoYXMgYmVlbiBvcGVuZWQuICovXHJcbiAgQE91dHB1dChcIm9wZW5lZFwiKSBvcGVuZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaGFzIGJlZW4gY2xvc2VkLiAqL1xyXG4gIEBPdXRwdXQoXCJjbG9zZWRcIikgY2xvc2VkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBpcyBvcGVuLiAqL1xyXG4gIG9wZW5lZCA9IGZhbHNlO1xyXG5cclxuICAvKiogVGhlIGlkIGZvciB0aGUgZGF0ZXBpY2tlciBjYWxlbmRhci4gKi9cclxuICBpZCA9IGBtYXQtZGF0ZXRpbWVwaWNrZXItJHtkYXRldGltZXBpY2tlclVpZCsrfWA7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgZ2V0IF9zZWxlY3RlZCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBfc2VsZWN0ZWQodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl92YWxpZFNlbGVjdGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF92YWxpZFNlbGVjdGVkOiBEIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgZ2V0IF9taW5EYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1pbjtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgZ2V0IF9tYXhEYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1heDtcclxuICB9XHJcblxyXG4gIGdldCBfZGF0ZUZpbHRlcigpOiAoZGF0ZTogRCB8IG51bGwsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fZGF0ZUZpbHRlcjtcclxuICB9XHJcblxyXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBwb3B1cC4gKi9cclxuICBwcml2YXRlIF9wb3B1cFJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBkaWFsb2cgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkIGFzIGEgZGlhbG9nLiAqL1xyXG4gIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4gfCBudWxsO1xyXG5cclxuICAvKiogQSBwb3J0YWwgY29udGFpbmluZyB0aGUgY2FsZW5kYXIgZm9yIHRoaXMgZGF0ZXBpY2tlci4gKi9cclxuICBwcml2YXRlIF9jYWxlbmRhclBvcnRhbDogQ29tcG9uZW50UG9ydGFsPE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPj47XHJcblxyXG4gIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgZGF0ZXBpY2tlciB3YXMgb3BlbmVkLiAqL1xyXG4gIHByaXZhdGUgX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB0aGlzIGRhdGVwaWNrZXIgaXMgYXNzb2NpYXRlZCB3aXRoLiAqL1xyXG4gIF9kYXRlcGlja2VySW5wdXQ6IE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGRpc2FibGVkLiAqL1xyXG4gIF9kaXNhYmxlZENoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICBASW5qZWN0KE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSkgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRlQWRhcHRlclwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgdGhpcy5faW5wdXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3BvcHVwUmVmKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBTZWxlY3RzIHRoZSBnaXZlbiBkYXRlICovXHJcbiAgX3NlbGVjdChkYXRlOiBEKTogdm9pZCB7XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBkYXRlO1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZXRpbWUob2xkVmFsdWUsIHRoaXMuX3NlbGVjdGVkKSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb25cclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZWQuZW1pdChkYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyBkYXRlcGlja2VyLlxyXG4gICAqIEBwYXJhbSBpbnB1dCBUaGUgZGF0ZXBpY2tlciBpbnB1dCB0byByZWdpc3RlciB3aXRoIHRoaXMgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICBfcmVnaXN0ZXJJbnB1dChpbnB1dDogTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXJJbnB1dCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkEgTWF0RGF0ZXBpY2tlciBjYW4gb25seSBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgaW5wdXQuXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0ID0gaW5wdXQ7XHJcbiAgICB0aGlzLl9pbnB1dFN1YnNjcmlwdGlvbiA9XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fdmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRCB8IG51bGwpID0+IHRoaXMuX3NlbGVjdGVkID0gdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyLiAqL1xyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcGVuZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJJbnB1dCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkF0dGVtcHRlZCB0byBvcGVuIGFuIE1hdERhdGVwaWNrZXIgd2l0aCBubyBhc3NvY2lhdGVkIGlucHV0LlwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG91Y2hVaSA/IHRoaXMuX29wZW5Bc0RpYWxvZygpIDogdGhpcy5fb3BlbkFzUG9wdXAoKTtcclxuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcclxuICAgIHRoaXMub3BlbmVkU3RyZWFtLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBDbG9zZSB0aGUgY2FsZW5kYXIuICovXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9wb3B1cFJlZiAmJiB0aGlzLl9wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRldGFjaCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2RpYWxvZ1JlZikge1xyXG4gICAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgdGhpcy5fZGlhbG9nUmVmID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9jYWxlbmRhclBvcnRhbCAmJiB0aGlzLl9jYWxlbmRhclBvcnRhbC5pc0F0dGFjaGVkKSB7XHJcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmRldGFjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIC8vIFRoZSBgX29wZW5lZGAgY291bGQndmUgYmVlbiByZXNldCBhbHJlYWR5IGlmXHJcbiAgICAgIC8vIHdlIGdvdCB0d28gZXZlbnRzIGluIHF1aWNrIHN1Y2Nlc3Npb24uXHJcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbG9zZWRTdHJlYW0uZW1pdCgpO1xyXG4gICAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiAmJlxyXG4gICAgICB0eXBlb2YgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgLy8gQmVjYXVzZSBJRSBtb3ZlcyBmb2N1cyBhc3luY2hyb25vdXNseSwgd2UgY2FuJ3QgY291bnQgb24gaXQgYmVpbmcgcmVzdG9yZWQgYmVmb3JlIHdlJ3ZlXHJcbiAgICAgIC8vIG1hcmtlZCB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQuIElmIHRoZSBldmVudCBmaXJlcyBvdXQgb2Ygc2VxdWVuY2UgYW5kIHRoZSBlbGVtZW50IHRoYXRcclxuICAgICAgLy8gd2UncmUgcmVmb2N1c2luZyBvcGVucyB0aGUgZGF0ZXBpY2tlciBvbiBmb2N1cywgdGhlIHVzZXIgY291bGQgYmUgc3R1Y2sgd2l0aCBub3QgYmVpbmdcclxuICAgICAgLy8gYWJsZSB0byBjbG9zZSB0aGUgY2FsZW5kYXIgYXQgYWxsLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBtYWtpbmcgdGhlIGxvZ2ljLCB0aGF0IG1hcmtzXHJcbiAgICAgIC8vIHRoZSBkYXRlcGlja2VyIGFzIGNsb3NlZCwgYXN5bmMgYXMgd2VsbC5cclxuICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoY29tcGxldGVDbG9zZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wbGV0ZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBkaWFsb2cuICovXHJcbiAgcHJpdmF0ZSBfb3BlbkFzRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGlhbG9nUmVmID0gdGhpcy5fZGlhbG9nLm9wZW4oTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LCB7XHJcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogXCJsdHJcIixcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgcGFuZWxDbGFzczogXCJtYXQtZGF0ZXRpbWVwaWNrZXItZGlhbG9nXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgICB0aGlzLl9kaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0ZXRpbWVwaWNrZXIgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyIGFzIGEgcG9wdXAuICovXHJcbiAgcHJpdmF0ZSBfb3BlbkFzUG9wdXAoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2NhbGVuZGFyUG9ydGFsKSB7XHJcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4+KE1hdERhdGV0aW1lcGlja2VyQ29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9wb3B1cFJlZikge1xyXG4gICAgICB0aGlzLl9jcmVhdGVQb3B1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4+ID1cclxuICAgICAgICB0aGlzLl9wb3B1cFJlZi5hdHRhY2godGhpcy5fY2FsZW5kYXJQb3J0YWwpO1xyXG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0ZXRpbWVwaWNrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbiBvbmNlIHRoZSBjYWxlbmRhciBoYXMgcmVuZGVyZWQuXHJcbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcG9wdXBSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSB0aGUgcG9wdXAuICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9jcmVhdGVQb3B1cFBvc2l0aW9uU3RyYXRlZ3koKSxcclxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IFwibWF0LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3BcIixcclxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiBcImx0clwiLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fc2Nyb2xsU3RyYXRlZ3koKSxcclxuICAgICAgcGFuZWxDbGFzczogXCJtYXQtZGF0ZXRpbWVwaWNrZXItcG9wdXBcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGUgdGhlIHBvcHVwIFBvc2l0aW9uU3RyYXRlZ3kuICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkucG9zaXRpb24oKVxyXG4gICAgICAuY29ubmVjdGVkVG8odGhpcy5fZGF0ZXBpY2tlcklucHV0LmdldFBvcHVwQ29ubmVjdGlvbkVsZW1lbnRSZWYoKSxcclxuICAgICAgICB7b3JpZ2luWDogXCJzdGFydFwiLCBvcmlnaW5ZOiBcImJvdHRvbVwifSxcclxuICAgICAgICB7b3ZlcmxheVg6IFwic3RhcnRcIiwgb3ZlcmxheVk6IFwidG9wXCJ9XHJcbiAgICAgIClcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHtvcmlnaW5YOiBcInN0YXJ0XCIsIG9yaWdpblk6IFwidG9wXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJzdGFydFwiLCBvdmVybGF5WTogXCJib3R0b21cIn1cclxuICAgICAgKVxyXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXHJcbiAgICAgICAge29yaWdpblg6IFwiZW5kXCIsIG9yaWdpblk6IFwiYm90dG9tXCJ9LFxyXG4gICAgICAgIHtvdmVybGF5WDogXCJlbmRcIiwgb3ZlcmxheVk6IFwidG9wXCJ9XHJcbiAgICAgIClcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHtvcmlnaW5YOiBcImVuZFwiLCBvcmlnaW5ZOiBcInRvcFwifSxcclxuICAgICAgICB7b3ZlcmxheVg6IFwiZW5kXCIsIG92ZXJsYXlZOiBcImJvdHRvbVwifVxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvZXJjaW9uXCI7XHJcbmltcG9ydCB7IERPV05fQVJST1cgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3IsXHJcbiAgVmFsaWRhdG9yRm4sXHJcbiAgVmFsaWRhdG9yc1xyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNQVRfSU5QVVRfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQge1xyXG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTLFxyXG4gIE1hdERhdGV0aW1lRm9ybWF0c1xyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlY2xhcmVcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfREFURVRJTUVQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXREYXRldGltZXBpY2tlcklucHV0KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxJREFUT1JTOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXREYXRldGltZXBpY2tlcklucHV0KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHVzZWQgZm9yIGRhdGVwaWNrZXIgaW5wdXQgYW5kIGNoYW5nZSBldmVudHMuIFdlIGRvbid0IGFsd2F5cyBoYXZlIGFjY2VzcyB0byBhIG5hdGl2ZVxyXG4gKiBpbnB1dCBvciBjaGFuZ2UgZXZlbnQgYmVjYXVzZSB0aGUgZXZlbnQgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgdGhlIHVzZXIgY2xpY2tpbmcgb24gdGhlXHJcbiAqIGNhbGVuZGFyIHBvcHVwLiBGb3IgY29uc2lzdGVuY3ksIHdlIGFsd2F5cyB1c2UgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQgaW5zdGVhZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQ8RD4ge1xyXG4gIC8qKiBUaGUgbmV3IHZhbHVlIGZvciB0aGUgdGFyZ2V0IGRhdGVwaWNrZXIgaW5wdXQuICovXHJcbiAgdmFsdWU6IEQgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFyZ2V0OiBNYXREYXRldGltZXBpY2tlcklucHV0PEQ+LCBwdWJsaWMgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnRhcmdldC52YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBEaXJlY3RpdmUgdXNlZCB0byBjb25uZWN0IGFuIGlucHV0IHRvIGEgTWF0RGF0ZXBpY2tlci4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiaW5wdXRbbWF0RGF0ZXRpbWVwaWNrZXJdXCIsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBNQVRfREFURVRJTUVQSUNLRVJfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICBNQVRfREFURVRJTUVQSUNLRVJfVkFMSURBVE9SUyxcclxuICAgIHtwcm92aWRlOiBNQVRfSU5QVVRfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBNYXREYXRldGltZXBpY2tlcklucHV0fSxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiW2F0dHIuYXJpYS1oYXNwb3B1cF1cIjogXCJ0cnVlXCIsXHJcbiAgICBcIlthdHRyLmFyaWEtb3duc11cIjogXCIoX2RhdGVwaWNrZXI/Lm9wZW5lZCAmJiBfZGF0ZXBpY2tlci5pZCkgfHwgbnVsbFwiLFxyXG4gICAgXCJbYXR0ci5taW5dXCI6IFwibWluID8gX2RhdGVBZGFwdGVyLnRvSXNvODYwMShtaW4pIDogbnVsbFwiLFxyXG4gICAgXCJbYXR0ci5tYXhdXCI6IFwibWF4ID8gX2RhdGVBZGFwdGVyLnRvSXNvODYwMShtYXgpIDogbnVsbFwiLFxyXG4gICAgXCJbZGlzYWJsZWRdXCI6IFwiZGlzYWJsZWRcIixcclxuICAgIFwiKGZvY3VzKVwiOiBcIl9kYXRlcGlja2VyLl9oYW5kbGVGb2N1cygpXCIsXHJcbiAgICBcIihpbnB1dClcIjogXCJfb25JbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLFxyXG4gICAgXCIoY2hhbmdlKVwiOiBcIl9vbkNoYW5nZSgpXCIsXHJcbiAgICBcIihibHVyKVwiOiBcIl9vbkJsdXIoKVwiLFxyXG4gICAgXCIoa2V5ZG93bilcIjogXCJfb25LZXlkb3duKCRldmVudClcIlxyXG4gIH0sXHJcbiAgZXhwb3J0QXM6IFwibWF0RGF0ZXBpY2tlcklucHV0XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LFxyXG4gIFZhbGlkYXRvciB7XHJcbiAgLyoqIFRoZSBkYXRlcGlja2VyIHRoYXQgdGhpcyBpbnB1dCBpcyBhc3NvY2lhdGVkIHdpdGguICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbWF0RGF0ZXRpbWVwaWNrZXIodmFsdWU6IE1hdERhdGV0aW1lcGlja2VyPEQ+KSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRGF0ZXBpY2tlcih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBfZGF0ZXBpY2tlcjogTWF0RGF0ZXRpbWVwaWNrZXI8RD47XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJEYXRlcGlja2VyKHZhbHVlOiBNYXREYXRldGltZXBpY2tlcjxEPikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlci5fcmVnaXN0ZXJJbnB1dCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBtYXREYXRlcGlja2VyRmlsdGVyKGZpbHRlcjogKGRhdGU6IEQgfCBudWxsLCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RhdGVGaWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgX2RhdGVGaWx0ZXI6IChkYXRlOiBEIHwgbnVsbCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB2YWx1ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgIHRoaXMuX2xhc3RWYWx1ZVZhbGlkID0gIXZhbHVlIHx8IHRoaXMuX2RhdGVBZGFwdGVyLmlzVmFsaWQodmFsdWUpO1xyXG4gICAgdmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xyXG4gICAgY29uc3Qgb2xkRGF0ZSA9IHRoaXMudmFsdWU7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5fZm9ybWF0VmFsdWUodmFsdWUpO1xyXG5cclxuICAgIC8vIHVzZSB0aW1lb3V0IHRvIGVuc3VyZSB0aGUgZGF0ZXRpbWVwaWNrZXIgaXMgaW5zdGFudGlhdGVkIGFuZCB3ZSBnZXQgdGhlIGNvcnJlY3QgZm9ybWF0XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZXRpbWUob2xkRGF0ZSwgdmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREaXNwbGF5Rm9ybWF0KCkge1xyXG4gICAgc3dpdGNoICh0aGlzLl9kYXRlcGlja2VyLnR5cGUpIHtcclxuICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlSW5wdXQ7XHJcbiAgICAgIGNhc2UgXCJkYXRldGltZVwiOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGV0aW1lSW5wdXQ7XHJcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkudGltZUlucHV0O1xyXG4gICAgICBjYXNlIFwibW9udGhcIjpcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aElucHV0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXJzZUZvcm1hdCgpIHtcclxuICAgIGxldCBwYXJzZUZvcm1hdDtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGVwaWNrZXIudHlwZSkge1xyXG4gICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgIHBhcnNlRm9ybWF0ID0gdGhpcy5fZGF0ZUZvcm1hdHMucGFyc2UuZGF0ZUlucHV0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcclxuICAgICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLmRhdGV0aW1lSW5wdXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XHJcbiAgICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS50aW1lSW5wdXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtb250aFwiOlxyXG4gICAgICAgIHBhcnNlRm9ybWF0ID0gdGhpcy5fZGF0ZUZvcm1hdHMucGFyc2UubW9udGhJbnB1dDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmICghcGFyc2VGb3JtYXQpIHtcclxuICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5kYXRlSW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlRm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdmFsdWU6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gdmFsaWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtaW4oKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbjtcclxuICB9XHJcblxyXG4gIHNldCBtaW4odmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9taW4gPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9taW46IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIG1heGltdW0gdmFsaWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXgoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heDtcclxuICB9XHJcblxyXG4gIHNldCBtYXgodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9tYXggPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9tYXg6IEQgfCBudWxsO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlci1pbnB1dCBpcyBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiAhIXRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgYGNoYW5nZWAgZXZlbnQgaXMgZmlyZWQgb24gdGhpcyBgPGlucHV0PmAuICovXHJcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudDxEPj4oKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYW4gYGlucHV0YCBldmVudCBpcyBmaXJlZCBvbiB0aGlzIGA8aW5wdXQ+YC4gKi9cclxuICBAT3V0cHV0KCkgZGF0ZUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQ8RD4+KCk7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChlaXRoZXIgZHVlIHRvIHVzZXIgaW5wdXQgb3IgcHJvZ3JhbW1hdGljIGNoYW5nZSkuICovXHJcbiAgX3ZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEIHwgbnVsbD4oKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRpc2FibGVkIHN0YXRlIGhhcyBjaGFuZ2VkICovXHJcbiAgX2Rpc2FibGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBfb25Ub3VjaGVkID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3ZhT25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdmFsaWRhdG9yT25DaGFuZ2UgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kYXRlcGlja2VyU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBwcml2YXRlIF9sb2NhbGVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3Igd2hldGhlciB0aGUgaW5wdXQgcGFyc2VzLiAqL1xyXG4gIHByaXZhdGUgX3BhcnNlVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9ICgpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFzdFZhbHVlVmFsaWQgP1xyXG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlclBhcnNlXCI6IHtcInRleHRcIjogdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlfX07XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHRoZSBtaW4gZGF0ZS4gKi9cclxuICBwcml2YXRlIF9taW5WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZShjb250cm9sLnZhbHVlKSk7XHJcbiAgICByZXR1cm4gKCF0aGlzLm1pbiB8fCAhY29udHJvbFZhbHVlIHx8XHJcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmNvbXBhcmVEYXRldGltZSh0aGlzLm1pbiwgY29udHJvbFZhbHVlKSA8PSAwKSA/XHJcbiAgICAgIG51bGwgOiB7XCJtYXREYXRlcGlja2VyTWluXCI6IHtcIm1pblwiOiB0aGlzLm1pbiwgXCJhY3R1YWxcIjogY29udHJvbFZhbHVlfX07XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHRoZSBtYXggZGF0ZS4gKi9cclxuICBwcml2YXRlIF9tYXhWYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZShjb250cm9sLnZhbHVlKSk7XHJcbiAgICByZXR1cm4gKCF0aGlzLm1heCB8fCAhY29udHJvbFZhbHVlIHx8XHJcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmNvbXBhcmVEYXRldGltZSh0aGlzLm1heCwgY29udHJvbFZhbHVlKSA+PSAwKSA/XHJcbiAgICAgIG51bGwgOiB7XCJtYXREYXRlcGlja2VyTWF4XCI6IHtcIm1heFwiOiB0aGlzLm1heCwgXCJhY3R1YWxcIjogY29udHJvbFZhbHVlfX07XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHRoZSBkYXRlIGZpbHRlci4gKi9cclxuICBwcml2YXRlIF9maWx0ZXJWYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZShjb250cm9sLnZhbHVlKSk7XHJcbiAgICByZXR1cm4gIXRoaXMuX2RhdGVGaWx0ZXIgfHwgIWNvbnRyb2xWYWx1ZSB8fCB0aGlzLl9kYXRlRmlsdGVyKGNvbnRyb2xWYWx1ZSwgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlLkRBVEUpID9cclxuICAgICAgbnVsbCA6IHtcIm1hdERhdGVwaWNrZXJGaWx0ZXJcIjogdHJ1ZX07XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIGNvbWJpbmVkIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHRoaXMgaW5wdXQuICovXHJcbiAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IG51bGwgPVxyXG4gICAgVmFsaWRhdG9ycy5jb21wb3NlKFxyXG4gICAgICBbdGhpcy5fcGFyc2VWYWxpZGF0b3IsIHRoaXMuX21pblZhbGlkYXRvciwgdGhpcy5fbWF4VmFsaWRhdG9yLCB0aGlzLl9maWx0ZXJWYWxpZGF0b3JdKTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGxhc3QgdmFsdWUgc2V0IG9uIHRoZSBpbnB1dCB3YXMgdmFsaWQuICovXHJcbiAgcHJpdmF0ZSBfbGFzdFZhbHVlVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2RhdGVBZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cyxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9mb3JtRmllbGQ6IE1hdEZvcm1GaWVsZCkge1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBkYXRlIHdoZW4gdGhlIGxvY2FsZSBjaGFuZ2VzLlxyXG4gICAgdGhpcy5fbG9jYWxlU3Vic2NyaXB0aW9uID0gX2RhdGVBZGFwdGVyLmxvY2FsZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLl9kYXRlcGlja2VyKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvblxyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyU3Vic2NyaXB0aW9uID0gdGhpcy5fZGF0ZXBpY2tlci5zZWxlY3RlZENoYW5nZWQuc3Vic2NyaWJlKChzZWxlY3RlZDogRCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkO1xyXG4gICAgICAgICAgdGhpcy5fY3ZhT25DaGFuZ2Uoc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGVJbnB1dC5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9sb2NhbGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX3ZhbHVlQ2hhbmdlLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLl9kaXNhYmxlZENoYW5nZS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IgPyB0aGlzLl92YWxpZGF0b3IoYykgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZWxlbWVudCB0aGF0IHRoZSBkYXRlcGlja2VyIHBvcHVwIHNob3VsZCBiZSBjb25uZWN0ZWQgdG8uXHJcbiAgICogQHJldHVybiBUaGUgZWxlbWVudCB0byBjb25uZWN0IHRoZSBwb3B1cCB0by5cclxuICAgKi9cclxuICBnZXRQb3B1cENvbm5lY3Rpb25FbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1GaWVsZCA/IHRoaXMuX2Zvcm1GaWVsZC51bmRlcmxpbmVSZWYgOiB0aGlzLl9lbGVtZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IEQpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3ZhT25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgX29uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmFsdEtleSAmJiBldmVudC5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIub3BlbigpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uSW5wdXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgbGV0IGRhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5wYXJzZSh2YWx1ZSwgdGhpcy5nZXRQYXJzZUZvcm1hdCgpKTtcclxuICAgIHRoaXMuX2xhc3RWYWx1ZVZhbGlkID0gIWRhdGUgfHwgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZChkYXRlKTtcclxuICAgIGRhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwoZGF0ZSk7XHJcbiAgICB0aGlzLl92YWx1ZSA9IGRhdGU7XHJcbiAgICB0aGlzLl9jdmFPbkNoYW5nZShkYXRlKTtcclxuICAgIHRoaXMuX3ZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgICB0aGlzLmRhdGVJbnB1dC5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgYmx1ciBldmVudHMgb24gdGhlIGlucHV0LiAqL1xyXG4gIF9vbkJsdXIoKSB7XHJcbiAgICAvLyBSZWZvcm1hdCB0aGUgaW5wdXQgb25seSBpZiB3ZSBoYXZlIGEgdmFsaWQgdmFsdWUuXHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLl9mb3JtYXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gICAvKiogRm9ybWF0cyBhIHZhbHVlIGFuZCBzZXRzIGl0IG9uIHRoZSBpbnB1dCBlbGVtZW50LiAqL1xyXG4gICBwcml2YXRlIF9mb3JtYXRWYWx1ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPVxyXG4gICAgICAgdmFsdWUgPyB0aGlzLl9kYXRlQWRhcHRlci5mb3JtYXQodmFsdWUsIHRoaXMuZ2V0RGlzcGxheUZvcm1hdCgpKSA6IFwiXCI7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvZXJjaW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlckludGwgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLXRvZ2dsZVwiLFxyXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIFthdHRyLmFyaWEtbGFiZWxdPVwiX2ludGwub3BlbkNhbGVuZGFyTGFiZWxcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjbGljayk9XCJfb3BlbigkZXZlbnQpXCI+XHJcbiAgPG1hdC1pY29uIFtuZ1N3aXRjaF09XCJkYXRldGltZXBpY2tlci50eXBlXCI+XHJcbiAgICA8c3ZnICpuZ1N3aXRjaENhc2U9XCIndGltZSdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiB0b3BcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyLDIwQTgsOCAwIDAsMCAyMCwxMkE4LDggMCAwLDAgMTIsNEE4LDggMCAwLDAgNCwxMkE4LDggMCAwLDAgMTIsMjBNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkM2LjQ3LDIyIDIsMTcuNSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJNMTIuNSw3VjEyLjI1TDE3LDE0LjkyTDE2LjI1LDE2LjE1TDExLDEzVjdIMTIuNVpcIj48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxzdmcgKm5nU3dpdGNoQ2FzZT1cIidkYXRldGltZSdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiB0b3BcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1LDEzSDE2LjVWMTUuODJMMTguOTQsMTcuMjNMMTguMTksMTguNTNMMTUsMTYuNjlWMTNNMTksOEg1VjE5SDkuNjdDOS4yNCwxOC4wOSA5LDE3LjA3IDksMTZBNyw3IDAgMCwxIDE2LDlDMTcuMDcsOSAxOC4wOSw5LjI0IDE5LDkuNjdWOE01LDIxQzMuODksMjEgMywyMC4xIDMsMTlWNUMzLDMuODkgMy44OSwzIDUsM0g2VjFIOFYzSDE2VjFIMThWM0gxOUEyLDIgMCAwLDEgMjEsNVYxMS4xQzIyLjI0LDEyLjM2IDIzLDE0LjA5IDIzLDE2QTcsNyAwIDAsMSAxNiwyM0MxNC4wOSwyMyAxMi4zNiwyMi4yNCAxMS4xLDIxSDVNMTYsMTEuMTVBNC44NSw0Ljg1IDAgMCwwIDExLjE1LDE2QzExLjE1LDE4LjY4IDEzLjMyLDIwLjg1IDE2LDIwLjg1QTQuODUsNC44NSAwIDAsMCAyMC44NSwxNkMyMC44NSwxMy4zMiAxOC42OCwxMS4xNSAxNiwxMS4xNVpcIj48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxzdmcgKm5nU3dpdGNoRGVmYXVsdCB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3elwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIDwvbWF0LWljb24+XHJcbjwvYnV0dG9uPlxyXG5gLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiY2xhc3NcIjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCJcclxuICB9LFxyXG4gIGV4cG9ydEFzOiBcIm1hdERhdGV0aW1lcGlja2VyVG9nZ2xlXCIsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGU8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfc3RhdGVDaGFuZ2VzID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICAvKiogRGF0ZXBpY2tlciBpbnN0YW5jZSB0aGF0IHRoZSBidXR0b24gd2lsbCB0b2dnbGUuICovXHJcbiAgQElucHV0KFwiZm9yXCIpIGRhdGV0aW1lcGlja2VyOiBNYXREYXRldGltZXBpY2tlcjxEPjtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHRvZ2dsZSBidXR0b24gaXMgZGlzYWJsZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGF0ZXRpbWVwaWNrZXIuZGlzYWJsZWQgOiAhIXRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfaW50bDogTWF0RGF0ZXBpY2tlckludGwsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXBpY2tlcikge1xyXG4gICAgICB0aGlzLl93YXRjaFN0YXRlQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBfb3BlbihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRhdGV0aW1lcGlja2VyICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZGF0ZXRpbWVwaWNrZXIub3BlbigpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3dhdGNoU3RhdGVDaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlckRpc2FibGVkID0gdGhpcy5kYXRldGltZXBpY2tlciA/IHRoaXMuZGF0ZXRpbWVwaWNrZXIuX2Rpc2FibGVkQ2hhbmdlIDogb2JzZXJ2YWJsZU9mKCk7XHJcbiAgICBjb25zdCBpbnB1dERpc2FibGVkID0gdGhpcy5kYXRldGltZXBpY2tlciAmJiB0aGlzLmRhdGV0aW1lcGlja2VyLl9kYXRlcGlja2VySW5wdXQgP1xyXG4gICAgICAgIHRoaXMuZGF0ZXRpbWVwaWNrZXIuX2RhdGVwaWNrZXJJbnB1dC5fZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcclxuXHJcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcyA9IG1lcmdlKHRoaXMuX2ludGwuY2hhbmdlcywgZGF0ZXBpY2tlckRpc2FibGVkLCBpbnB1dERpc2FibGVkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xyXG4gIH1cclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBNQVRfREFURVRJTUVfRk9STUFUUyxcclxuICBNYXREYXRldGltZUZvcm1hdHNcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZXRpbWVBZGFwdGVyXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCB9IGZyb20gXCIuL2NhbGVuZGFyLWJvZHlcIjtcclxuaW1wb3J0IHsgc2xpZGVDYWxlbmRhciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcclxuXHJcbmNvbnN0IERBWVNfUEVSX1dFRUsgPSA3O1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgYSBzaW5nbGUgbW9udGggaW4gdGhlIGRhdGVwaWNrZXIuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci1tb250aC12aWV3XCIsXHJcbiAgdGVtcGxhdGU6IGA8dGFibGUgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGVcIj5cclxuICA8dGhlYWQgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGUtaGVhZGVyXCI+XHJcbiAgICA8dHI+PHRoICpuZ0Zvcj1cImxldCBkYXkgb2YgX3dlZWtkYXlzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJkYXkubG9uZ1wiPnt7ZGF5Lm5hcnJvd319PC90aD48L3RyPlxyXG4gIDwvdGhlYWQ+XHJcbiAgPHRib2R5IFtAc2xpZGVDYWxlbmRhcl09XCJfY2FsZW5kYXJTdGF0ZVwiXHJcbiAgICAgICAgIChAc2xpZGVDYWxlbmRhci5kb25lKT1cIl9jYWxlbmRhclN0YXRlRG9uZSgpXCJcclxuICAgICAgICAgbWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHlcclxuICAgICAgICAgcm9sZT1cImdyaWRcIlxyXG4gICAgICAgICBbcm93c109XCJfd2Vla3NcIlxyXG4gICAgICAgICBbdG9kYXlWYWx1ZV09XCJfdG9kYXlEYXRlXCJcclxuICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwiX3NlbGVjdGVkRGF0ZVwiXHJcbiAgICAgICAgIFthY3RpdmVDZWxsXT1cIl9hZGFwdGVyLmdldERhdGUoYWN0aXZlRGF0ZSkgLSAxXCJcclxuICAgICAgICAgKHNlbGVjdGVkVmFsdWVDaGFuZ2UpPVwiX2RhdGVTZWxlY3RlZCgkZXZlbnQpXCI+PC90Ym9keT5cclxuPC90YWJsZT5cclxuYCxcclxuICBhbmltYXRpb25zOiBbc2xpZGVDYWxlbmRhcl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXc8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQElucHV0KCkgdHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIiA9IFwiZGF0ZVwiO1xyXG5cclxuICBAT3V0cHV0KCkgX3VzZXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRvIGRpc3BsYXkgaW4gdGhpcyBtb250aCB2aWV3IChldmVyeXRoaW5nIG90aGVyIHRoYW4gdGhlIG1vbnRoIGFuZCB5ZWFyIGlzIGlnbm9yZWQpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICBsZXQgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWUgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gICAgaWYgKG9sZEFjdGl2ZURhdGUgJiYgdGhpcy5fYWN0aXZlRGF0ZSAmJlxyXG4gICAgICAhdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgaWYgKHRoaXMuX2FkYXB0ZXIuaXNJbk5leHRNb250aChvbGRBY3RpdmVEYXRlLCB0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTdGF0ZShcInJpZ2h0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTdGF0ZShcImxlZnRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FjdGl2ZURhdGU6IEQ7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9nZXREYXRlSW5DdXJyZW50TW9udGgodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZDogRDtcclxuXHJcbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXHJcbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IGRhdGUgaXMgc2VsZWN0ZWQuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICAvKiogR3JpZCBvZiBjYWxlbmRhciBjZWxscyByZXByZXNlbnRpbmcgdGhlIGRhdGVzIG9mIHRoZSBtb250aC4gKi9cclxuICBfd2Vla3M6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsW11bXTtcclxuXHJcbiAgLyoqIFRoZSBudW1iZXIgb2YgYmxhbmsgY2VsbHMgaW4gdGhlIGZpcnN0IHJvdyBiZWZvcmUgdGhlIDFzdCBvZiB0aGUgbW9udGguICovXHJcbiAgX2ZpcnN0V2Vla09mZnNldDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSBvZiB0aGUgbW9udGggdGhhdCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIERhdGUgZmFsbHMgb24uXHJcbiAgICogTnVsbCBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIERhdGUgaXMgaW4gYW5vdGhlciBtb250aC5cclxuICAgKi9cclxuICBfc2VsZWN0ZWREYXRlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgZGF0ZSBvZiB0aGUgbW9udGggdGhhdCB0b2RheSBmYWxscyBvbi4gTnVsbCBpZiB0b2RheSBpcyBpbiBhbm90aGVyIG1vbnRoLiAqL1xyXG4gIF90b2RheURhdGU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBuYW1lcyBvZiB0aGUgd2Vla2RheXMuICovXHJcbiAgX3dlZWtkYXlzOiB7IGxvbmc6IHN0cmluZywgbmFycm93OiBzdHJpbmcgfVtdO1xyXG5cclxuICBfY2FsZW5kYXJTdGF0ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFVElNRV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZXRpbWVGb3JtYXRzKSB7XHJcbiAgICBpZiAoIXRoaXMuX2FkYXB0ZXIpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRldGltZUFkYXB0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIk1BVF9EQVRFVElNRV9GT1JNQVRTXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gdGhpcy5fYWRhcHRlci5nZXRGaXJzdERheU9mV2VlaygpO1xyXG4gICAgY29uc3QgbmFycm93V2Vla2RheXMgPSB0aGlzLl9hZGFwdGVyLmdldERheU9mV2Vla05hbWVzKFwibmFycm93XCIpO1xyXG4gICAgY29uc3QgbG9uZ1dlZWtkYXlzID0gdGhpcy5fYWRhcHRlci5nZXREYXlPZldlZWtOYW1lcyhcImxvbmdcIik7XHJcblxyXG4gICAgLy8gUm90YXRlIHRoZSBsYWJlbHMgZm9yIGRheXMgb2YgdGhlIHdlZWsgYmFzZWQgb24gdGhlIGNvbmZpZ3VyZWQgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgbGV0IHdlZWtkYXlzID0gbG9uZ1dlZWtkYXlzLm1hcCgobG9uZywgaSkgPT4ge1xyXG4gICAgICByZXR1cm4ge2xvbmcsIG5hcnJvdzogbmFycm93V2Vla2RheXNbaV19O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl93ZWVrZGF5cyA9IHdlZWtkYXlzLnNsaWNlKGZpcnN0RGF5T2ZXZWVrKS5jb25jYXQod2Vla2RheXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcclxuXHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgd2hlbiBhIG5ldyBkYXRlIGlzIHNlbGVjdGVkLiAqL1xyXG4gIF9kYXRlU2VsZWN0ZWQoZGF0ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB1c2VyU2VsZWN0ZWQgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSwgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICBkYXRlLCB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHVzZXJTZWxlY3RlZDtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh1c2VyU2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXRpYWxpemVzIHRoaXMgbW9udGggdmlldy4gKi9cclxuICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gdGhpcy5fZ2V0RGF0ZUluQ3VycmVudE1vbnRoKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5fdG9kYXlEYXRlID0gdGhpcy5fZ2V0RGF0ZUluQ3VycmVudE1vbnRoKHRoaXMuX2FkYXB0ZXIudG9kYXkoKSk7XHJcblxyXG4gICAgbGV0IGZpcnN0T2ZNb250aCA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUodGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSwgMSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG4gICAgdGhpcy5fZmlyc3RXZWVrT2Zmc2V0ID1cclxuICAgICAgKERBWVNfUEVSX1dFRUsgKyB0aGlzLl9hZGFwdGVyLmdldERheU9mV2VlayhmaXJzdE9mTW9udGgpIC1cclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkpICUgREFZU19QRVJfV0VFSztcclxuXHJcbiAgICB0aGlzLl9jcmVhdGVXZWVrQ2VsbHMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIE1kQ2FsZW5kYXJDZWxscyBmb3IgdGhlIGRhdGVzIGluIHRoaXMgbW9udGguICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlV2Vla0NlbGxzKCkge1xyXG4gICAgbGV0IGRheXNJbk1vbnRoID0gdGhpcy5fYWRhcHRlci5nZXROdW1EYXlzSW5Nb250aCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgbGV0IGRhdGVOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZU5hbWVzKCk7XHJcbiAgICB0aGlzLl93ZWVrcyA9IFtbXV07XHJcbiAgICBmb3IgKGxldCBpID0gMCwgY2VsbCA9IHRoaXMuX2ZpcnN0V2Vla09mZnNldDsgaSA8IGRheXNJbk1vbnRoOyBpKysgLCBjZWxsKyspIHtcclxuICAgICAgaWYgKGNlbGwgPT0gREFZU19QRVJfV0VFSykge1xyXG4gICAgICAgIHRoaXMuX3dlZWtzLnB1c2goW10pO1xyXG4gICAgICAgIGNlbGwgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIGkgKyAxLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG4gICAgICBsZXQgZW5hYmxlZCA9ICF0aGlzLmRhdGVGaWx0ZXIgfHxcclxuICAgICAgICB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSk7XHJcbiAgICAgIGxldCBhcmlhTGFiZWwgPSB0aGlzLl9hZGFwdGVyLmZvcm1hdChkYXRlLCB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVBMTF5TGFiZWwpO1xyXG4gICAgICB0aGlzLl93ZWVrc1t0aGlzLl93ZWVrcy5sZW5ndGggLSAxXVxyXG4gICAgICAgIC5wdXNoKG5ldyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbChpICsgMSwgZGF0ZU5hbWVzW2ldLCBhcmlhTGFiZWwsIGVuYWJsZWQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGRhdGUgaW4gdGhpcyBtb250aCB0aGF0IHRoZSBnaXZlbiBEYXRlIGZhbGxzIG9uLlxyXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZ2l2ZW4gRGF0ZSBpcyBpbiBhbm90aGVyIG1vbnRoLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2dldERhdGVJbkN1cnJlbnRNb250aChkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLnNhbWVNb250aEFuZFllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSA/XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZShkYXRlKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGVuZGFyU3RhdGUoZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBkaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBfY2FsZW5kYXJTdGF0ZURvbmUoKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gXCJcIjtcclxuICB9XHJcblxyXG59XHJcbiIsIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCB9IGZyb20gXCIuL2NhbGVuZGFyLWJvZHlcIjtcclxuaW1wb3J0IHsgc2xpZGVDYWxlbmRhciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBNQVRfREFURVRJTUVfRk9STUFUUyxcclxuICBNYXREYXRldGltZUZvcm1hdHNcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZXRpbWVBZGFwdGVyXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgYSBzaW5nbGUgeWVhciBpbiB0aGUgZGF0ZXBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLXllYXItdmlld1wiLFxyXG4gIHRlbXBsYXRlOiBgPHRhYmxlIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlXCI+XHJcbiAgPHRoZWFkIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlLWhlYWRlclwiPjwvdGhlYWQ+XHJcbiAgPHRib2R5IFtAc2xpZGVDYWxlbmRhcl09XCJfY2FsZW5kYXJTdGF0ZVwiXHJcbiAgICAgICAgIChAc2xpZGVDYWxlbmRhci5kb25lKT1cIl9jYWxlbmRhclN0YXRlRG9uZSgpXCJcclxuICAgICAgICAgbWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHlcclxuICAgICAgICAgcm9sZT1cImdyaWRcIlxyXG4gICAgICAgICBhbGxvd0Rpc2FibGVkU2VsZWN0aW9uPVwidHJ1ZVwiXHJcbiAgICAgICAgIFtsYWJlbF09XCJfeWVhckxhYmVsXCJcclxuICAgICAgICAgW3Jvd3NdPVwiX21vbnRoc1wiXHJcbiAgICAgICAgIFt0b2RheVZhbHVlXT1cIl90b2RheU1vbnRoXCJcclxuICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwiX3NlbGVjdGVkTW9udGhcIlxyXG4gICAgICAgICBbbGFiZWxNaW5SZXF1aXJlZENlbGxzXT1cIjJcIlxyXG4gICAgICAgICBbYWN0aXZlQ2VsbF09XCJfYWRhcHRlci5nZXRNb250aChhY3RpdmVEYXRlKVwiXHJcbiAgICAgICAgIChzZWxlY3RlZFZhbHVlQ2hhbmdlKT1cIl9tb250aFNlbGVjdGVkKCRldmVudClcIj48L3Rib2R5PlxyXG48L3RhYmxlPlxyXG5gLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUNhbGVuZGFyXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlclllYXJWaWV3PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQElucHV0KCkgdHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIiA9IFwiZGF0ZVwiO1xyXG5cclxuICAvKiogVGhlIGRhdGUgdG8gZGlzcGxheSBpbiB0aGlzIHllYXIgdmlldyAoZXZlcnl0aGluZyBvdGhlciB0aGFuIHRoZSB5ZWFyIGlzIGlnbm9yZWQpLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICBsZXQgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWUgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gICAgaWYgKG9sZEFjdGl2ZURhdGUgJiYgdGhpcy5fYWN0aXZlRGF0ZSAmJlxyXG4gICAgICAhdGhpcy5fYWRhcHRlci5zYW1lWWVhcihvbGRBY3RpdmVEYXRlLCB0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgIC8vIGlmIChvbGRBY3RpdmVEYXRlIDwgdGhpcy5fYWN0aXZlRGF0ZSkge1xyXG4gICAgICAvLyAgdGhpcy5jYWxlbmRhclN0YXRlKCdyaWdodCcpO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgdGhpcy5jYWxlbmRhclN0YXRlKCdsZWZ0Jyk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FjdGl2ZURhdGU6IEQ7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gdGhpcy5fZ2V0TW9udGhJbkN1cnJlbnRZZWFyKHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQ7XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBEKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyBtb250aCBpcyBzZWxlY3RlZC4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBHcmlkIG9mIGNhbGVuZGFyIGNlbGxzIHJlcHJlc2VudGluZyB0aGUgbW9udGhzIG9mIHRoZSB5ZWFyLiAqL1xyXG4gIF9tb250aHM6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsW11bXTtcclxuXHJcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhpcyB5ZWFyIChlLmcuIFwiMjAxN1wiKS4gKi9cclxuICBfeWVhckxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdG9kYXkgZmFsbHMgb24uIE51bGwgaWYgdG9kYXkgaXMgaW4gYSBkaWZmZXJlbnQgeWVhci4gKi9cclxuICBfdG9kYXlNb250aDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdGhlIHNlbGVjdGVkIERhdGUgZmFsbHMgb24uXHJcbiAgICogTnVsbCBpZiB0aGUgc2VsZWN0ZWQgRGF0ZSBpcyBpbiBhIGRpZmZlcmVudCB5ZWFyLlxyXG4gICAqL1xyXG4gIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XHJcblxyXG4gIF9jYWxlbmRhclN0YXRlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBfYWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RBVEVUSU1FX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBNYXREYXRldGltZUZvcm1hdHMpIHtcclxuICAgIGlmICghdGhpcy5fYWRhcHRlcikge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiTUFUX0RBVEVUSU1FX0ZPUk1BVFNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHdoZW4gYSBuZXcgbW9udGggaXMgc2VsZWN0ZWQuICovXHJcbiAgX21vbnRoU2VsZWN0ZWQobW9udGg6IG51bWJlcikge1xyXG4gICAgY29uc3QgdXNlclNlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIG1vbnRoLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh1c2VyU2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHVzZXJTZWxlY3RlZDtcclxuICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSBtb250aDtcclxuICB9XHJcblxyXG4gIC8qKiBJbml0aWFsaXplcyB0aGlzIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB0aGlzLl9nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB0aGlzLl90b2RheU1vbnRoID0gdGhpcy5fZ2V0TW9udGhJbkN1cnJlbnRZZWFyKHRoaXMuX2FkYXB0ZXIudG9kYXkoKSk7XHJcbiAgICB0aGlzLl95ZWFyTGFiZWwgPSB0aGlzLl9hZGFwdGVyLmdldFllYXJOYW1lKHRoaXMuYWN0aXZlRGF0ZSk7XHJcblxyXG4gICAgbGV0IG1vbnRoTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoTmFtZXMoXCJzaG9ydFwiKTtcclxuICAgIC8vIEZpcnN0IHJvdyBvZiBtb250aHMgb25seSBjb250YWlucyA1IGVsZW1lbnRzIHNvIHdlIGNhbiBmaXQgdGhlIHllYXIgbGFiZWwgb24gdGhlIHNhbWUgcm93LlxyXG4gICAgdGhpcy5fbW9udGhzID0gW1swLCAxLCAyLCAzLCA0XSwgWzUsIDYsIDcsIDgsIDksIDEwLCAxMV1dLm1hcChyb3cgPT4gcm93Lm1hcChcclxuICAgICAgbW9udGggPT4gdGhpcy5fY3JlYXRlQ2VsbEZvck1vbnRoKG1vbnRoLCBtb250aE5hbWVzW21vbnRoXSkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIG1vbnRoIGluIHRoaXMgeWVhciB0aGF0IHRoZSBnaXZlbiBEYXRlIGZhbGxzIG9uLlxyXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZ2l2ZW4gRGF0ZSBpcyBpbiBhbm90aGVyIHllYXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZ2V0TW9udGhJbkN1cnJlbnRZZWFyKGRhdGU6IEQpIHtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLnNhbWVZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIGFuIE1kQ2FsZW5kYXJDZWxsIGZvciB0aGUgZ2l2ZW4gbW9udGguICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlQ2VsbEZvck1vbnRoKG1vbnRoOiBudW1iZXIsIG1vbnRoTmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgYXJpYUxhYmVsID0gdGhpcy5fYWRhcHRlci5mb3JtYXQoXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUodGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIG1vbnRoLCAxLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpLFxyXG4gICAgICB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckExMXlMYWJlbCk7XHJcbiAgICByZXR1cm4gbmV3IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsKFxyXG4gICAgICBtb250aCwgbW9udGhOYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCksIGFyaWFMYWJlbCwgdGhpcy5faXNNb250aEVuYWJsZWQobW9udGgpKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBtb250aCBpcyBlbmFibGVkLiAqL1xyXG4gIHByaXZhdGUgX2lzTW9udGhFbmFibGVkKG1vbnRoOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5kYXRlRmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaXJzdE9mTW9udGggPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSwgbW9udGgsIDEsXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuXHJcbiAgICAvLyBJZiBhbnkgZGF0ZSBpbiB0aGUgbW9udGggaXMgZW5hYmxlZCBjb3VudCB0aGUgbW9udGggYXMgZW5hYmxlZC5cclxuICAgIGZvciAobGV0IGRhdGUgPSBmaXJzdE9mTW9udGg7IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPT0gbW9udGg7XHJcbiAgICAgICAgIGRhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhkYXRlLCAxKSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRlRmlsdGVyKGRhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGNhbGVuZGFyU3RhdGUoZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBkaXJlY3Rpb247XHJcbiAgLy8gfVxyXG5cclxuICBfY2FsZW5kYXJTdGF0ZURvbmUoKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gXCJcIjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5XCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1hdEJ1dHRvbk1vZHVsZSxcclxuICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgTWF0SWNvbk1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHkgfSBmcm9tIFwiLi9jYWxlbmRhci1ib2R5XCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2xvY2sgfSBmcm9tIFwiLi9jbG9ja1wiO1xyXG5pbXBvcnQge1xyXG4gIE1hdERhdGV0aW1lcGlja2VyLFxyXG4gIE1hdERhdGV0aW1lcGlja2VyQ29udGVudFxyXG59IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VySW5wdXQgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1pbnB1dFwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlclRvZ2dsZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLXRvZ2dsZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyB9IGZyb20gXCIuL21vbnRoLXZpZXdcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlldyB9IGZyb20gXCIuL3llYXItdmlld1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIEExMXlNb2R1bGVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2xvY2ssXHJcbiAgICBNYXREYXRldGltZXBpY2tlcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlld1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jayxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUsXHJcbiAgICBNYXREYXRldGltZXBpY2tlcklucHV0LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclllYXJWaWV3XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJNb2R1bGUge1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRhdGVBZGFwdGVyIiwiSW5qZWN0aW9uVG9rZW4iLCJJbmplY3RhYmxlIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJNQVRfREFURV9MT0NBTEUiLCJOZ01vZHVsZSIsIk5hdGl2ZURhdGVNb2R1bGUiLCJNYXROYXRpdmVEYXRlTW9kdWxlIiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsImtleWZyYW1lcyIsIkV2ZW50RW1pdHRlciIsImZpcnN0IiwiTEVGVF9BUlJPVyIsIlJJR0hUX0FSUk9XIiwiVVBfQVJST1ciLCJET1dOX0FSUk9XIiwiSE9NRSIsIkVORCIsIlBBR0VfVVAiLCJQQUdFX0RPV04iLCJFTlRFUiIsIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiTWF0RGF0ZXBpY2tlckludGwiLCJOZ1pvbmUiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk91dHB1dCIsIklucHV0IiwiRVNDQVBFIiwiVmlld0NoaWxkIiwiU3Vic2NyaXB0aW9uIiwiU3ViamVjdCIsImNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSIsIkNvbXBvbmVudFBvcnRhbCIsIk92ZXJsYXlDb25maWciLCJNYXREaWFsb2ciLCJPdmVybGF5IiwiVmlld0NvbnRhaW5lclJlZiIsIk1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSIsIkRpcmVjdGlvbmFsaXR5IiwiRE9DVU1FTlQiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJOR19WQUxJREFUT1JTIiwiVmFsaWRhdG9ycyIsIkRpcmVjdGl2ZSIsIk1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiIsIk1hdEZvcm1GaWVsZCIsIm9ic2VydmFibGVPZiIsIm1lcmdlIiwiQ29tbW9uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0RGlhbG9nTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk92ZXJsYXlNb2R1bGUiLCJBMTF5TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7Ozs7O0FDekJEOzs7O1FBQWlEQSxtQ0FBYztRQUU3RCx5QkFBc0IsU0FBeUI7WUFBL0MsWUFDRSxpQkFBTyxTQUNSO1lBRnFCLGVBQVMsR0FBVCxTQUFTLENBQWdCOztTQUU5Qzs7Ozs7UUFvQkQsNENBQWtCOzs7O1lBQWxCLFVBQW1CLEdBQVE7Z0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQzthQUNyRTs7Ozs7O1FBRUQseUNBQWU7Ozs7O1lBQWYsVUFBZ0IsS0FBUSxFQUFFLE1BQVM7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO29CQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEQ7Ozs7OztRQUVELHNDQUFZOzs7OztZQUFaLFVBQWEsS0FBZSxFQUFFLE1BQWdCO2dCQUM1QyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7O3dCQUNiLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7d0JBQ2hDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxVQUFVLElBQUksV0FBVyxFQUFFO3dCQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQzdDO29CQUNELE9BQU8sVUFBVSxLQUFLLFdBQVcsQ0FBQztpQkFDbkM7Z0JBQ0QsT0FBTyxLQUFLLEtBQUssTUFBTSxDQUFDO2FBQ3pCOzs7Ozs7UUFFRCxrQ0FBUTs7Ozs7WUFBUixVQUFTLEtBQVEsRUFBRSxNQUFTO2dCQUMxQixPQUFPLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hFOzs7Ozs7UUFFRCxpQ0FBTzs7Ozs7WUFBUCxVQUFRLEtBQVEsRUFBRSxNQUFTO2dCQUN6QixPQUFPLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEg7Ozs7OztRQUVELGtDQUFROzs7OztZQUFSLFVBQVMsS0FBUSxFQUFFLE1BQVM7Z0JBQzFCLE9BQU8sS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdkc7Ozs7OztRQUVELG9DQUFVOzs7OztZQUFWLFVBQVcsS0FBUSxFQUFFLE1BQVM7Z0JBQzVCLE9BQU8sS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUc7Ozs7OztRQUVELDBDQUFnQjs7Ozs7WUFBaEIsVUFBaUIsS0FBZSxFQUFFLE1BQWdCO2dCQUNoRCxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7O3dCQUNiLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7d0JBQ2hDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxVQUFVLElBQUksV0FBVyxFQUFFO3dCQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ2pEO29CQUNELE9BQU8sVUFBVSxLQUFLLFdBQVcsQ0FBQztpQkFDbkM7Z0JBQ0QsT0FBTyxLQUFLLEtBQUssTUFBTSxDQUFDO2FBQ3pCOzs7Ozs7O1FBR0QsK0JBQUs7Ozs7OztZQUFMLFVBQU0sSUFBTztnQkFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DOzs7Ozs7UUFFRCwwQ0FBZ0I7Ozs7O1lBQWhCLFVBQWlCLElBQU8sRUFBRSxLQUFhO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JEOzs7Ozs7UUFFRCwyQ0FBaUI7Ozs7O1lBQWpCLFVBQWtCLElBQU8sRUFBRSxNQUFjO2dCQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZEOzs7Ozs7UUFFRCx5Q0FBZTs7Ozs7WUFBZixVQUFnQixJQUFPLEVBQUUsSUFBWTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbkQ7Ozs7O1FBRUQsaUNBQU87Ozs7WUFBUCxVQUFRLElBQU87Z0JBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQzs7Ozs7UUFFRCxrQ0FBUTs7OztZQUFSLFVBQVMsSUFBTztnQkFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RDOzs7OztRQUVELGlDQUFPOzs7O1lBQVAsVUFBUSxJQUFPO2dCQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7Ozs7O1FBRUQsc0NBQVk7Ozs7WUFBWixVQUFhLElBQU87Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUM7Ozs7O1FBRUQsdUNBQWE7Ozs7WUFBYixVQUFjLEtBQUs7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUM7Ozs7UUFFRCxzQ0FBWTs7O1lBQVo7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3RDOzs7OztRQUVELDJDQUFpQjs7OztZQUFqQixVQUFrQixLQUFLO2dCQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEQ7Ozs7O1FBRUQscUNBQVc7Ozs7WUFBWCxVQUFZLElBQU87Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekM7Ozs7UUFFRCwyQ0FBaUI7OztZQUFqQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMzQzs7Ozs7UUFFRCwyQ0FBaUI7Ozs7WUFBakIsVUFBa0IsSUFBTztnQkFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DOzs7Ozs7O1FBRUQsb0NBQVU7Ozs7OztZQUFWLFVBQVcsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckQ7Ozs7UUFFRCwrQkFBSzs7O1lBQUw7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQy9COzs7Ozs7UUFFRCwrQkFBSzs7Ozs7WUFBTCxVQUFNLEtBQVUsRUFBRSxXQUFnQjtnQkFDaEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDakQ7Ozs7OztRQUVELGdDQUFNOzs7OztZQUFOLFVBQU8sSUFBTyxFQUFFLGFBQWtCO2dCQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNuRDs7Ozs7UUFFRCxtQ0FBUzs7OztZQUFULFVBQVUsSUFBTztnQkFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDOzs7OztRQUVELHdDQUFjOzs7O1lBQWQsVUFBZSxHQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNDOzs7OztRQUVELGlDQUFPOzs7O1lBQVAsVUFBUSxJQUFPO2dCQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7Ozs7UUFFRCxpQ0FBTzs7O1lBQVA7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2pDOzs7Ozs7O1FBRUQsbUNBQVM7Ozs7OztZQUFULFVBQVUsSUFBTyxFQUFFLEdBQWMsRUFBRSxHQUFjO2dCQUMvQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzlDLE9BQU8sR0FBRyxDQUFDO2lCQUNaO2dCQUNELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDOUMsT0FBTyxHQUFHLENBQUM7aUJBQ1o7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILHNCQUFDO0lBQUQsQ0FBQyxDQTdLZ0RDLGdCQUFXOzs7Ozs7QUNGNUQ7QUFxQkEsUUFBYSxvQkFBb0IsR0FBRyxJQUFJQyxxQkFBYyxDQUFxQixzQkFBc0IsQ0FBQzs7Ozs7O2FDVDdELFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFBOzs7OztRQUE3QyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFpQjthQUdiLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFBOzs7OztRQUEvQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFpQjs7Ozs7OztJQUV0RCxlQUFrQixNQUFjLEVBQUUsYUFBbUM7O1lBQzdELFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7QUFFRDtRQUMyQ0YseUNBQXFCO1FBRTlELCtCQUFpRCxhQUFxQixFQUFFLFNBQTRCO1lBQXBHLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBRWpCO1lBREMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7U0FDL0I7Ozs7O1FBRUQscUNBQUs7Ozs7WUFBTCxVQUFNLElBQVU7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ25JOzs7OztRQUVELHVDQUFPOzs7O1lBQVAsVUFBUSxJQUFVO2dCQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4Qjs7Ozs7UUFFRCx5Q0FBUzs7OztZQUFULFVBQVUsSUFBVTtnQkFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDMUI7Ozs7OztRQUVELDZDQUFhOzs7OztZQUFiLFVBQWMsU0FBZSxFQUFFLE9BQWE7O29CQUNwQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2xEOzs7Ozs7Ozs7UUFFRCw4Q0FBYzs7Ozs7Ozs7WUFBZCxVQUFlLElBQVksRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxNQUFjOzs7Z0JBR3BGLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO29CQUMzQixNQUFNLEtBQUssQ0FBQywyQkFBd0IsS0FBSyxnREFBNEMsQ0FBQyxDQUFDO2lCQUN4RjtnQkFFRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7b0JBQ1osTUFBTSxLQUFLLENBQUMsb0JBQWlCLElBQUksdUNBQW1DLENBQUMsQ0FBQztpQkFDdkU7Z0JBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7b0JBQ3pCLE1BQU0sS0FBSyxDQUFDLG9CQUFpQixJQUFJLHlDQUFxQyxDQUFDLENBQUM7aUJBQ3pFO2dCQUVELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFO29CQUM3QixNQUFNLEtBQUssQ0FBQyxzQkFBbUIsTUFBTSwyQ0FBdUMsQ0FBQyxDQUFDO2lCQUMvRTs7b0JBRUssTUFBTSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDOztnQkFHNUUsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxFQUFFO29CQUMvQixNQUFNLEtBQUssQ0FBQyxvQkFBaUIsSUFBSSxrQ0FBMkIsS0FBSyxRQUFJLENBQUMsQ0FBQztpQkFDeEU7Z0JBRUQsT0FBTyxNQUFNLENBQUM7YUFDZjs7Ozs7UUFFTyxrREFBa0I7Ozs7WUFBMUIsVUFBMkIsSUFBVTtnQkFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQ3hELElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUN2Qzs7Ozs7UUFFRCxtREFBbUI7Ozs7WUFBbkIsVUFBb0IsSUFBVTs7b0JBQ3RCLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLE1BQU0sQ0FBQzthQUNmOzs7O1FBRUQsNENBQVk7OztZQUFaO2dCQUNFLE9BQU8sa0JBQWtCLENBQUM7YUFDM0I7Ozs7UUFFRCw4Q0FBYzs7O1lBQWQ7Z0JBQ0UsT0FBTyxvQkFBb0IsQ0FBQzthQUM3Qjs7Ozs7O1FBRUQsZ0RBQWdCOzs7OztZQUFoQixVQUFpQixJQUFVLEVBQUUsS0FBYTtnQkFDeEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNqRDs7Ozs7O1FBRUQsaURBQWlCOzs7OztZQUFqQixVQUFrQixJQUFVLEVBQUUsTUFBYzs7b0JBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O2dCQU1uSCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO29CQUM5RSxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3BJO2dCQUVELE9BQU8sT0FBTyxDQUFDO2FBQ2hCOzs7Ozs7UUFFRCwrQ0FBZTs7Ozs7WUFBZixVQUFnQixJQUFVLEVBQUUsSUFBWTtnQkFDdEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNuSDs7Ozs7O1FBRUQsZ0RBQWdCOzs7OztZQUFoQixVQUFpQixJQUFVLEVBQUUsS0FBYTtnQkFDeEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDckQ7Ozs7OztRQUVELGtEQUFrQjs7Ozs7WUFBbEIsVUFBbUIsSUFBVSxFQUFFLE9BQWU7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZEOzs7OztRQUVELHlDQUFTOzs7O1lBQVQsVUFBVSxJQUFVO2dCQUNsQixPQUFPLGlCQUFNLFNBQVMsWUFBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7b0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDbkMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDYjs7Ozs7Ozs7Ozs7Ozs7O1FBU08sOERBQThCOzs7Ozs7O1lBQXRDLFVBQXVDLEdBQVc7Z0JBQ2hELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMzQzs7Ozs7Ozs7Ozs7UUFPTyx1Q0FBTzs7Ozs7WUFBZixVQUFnQixDQUFTO2dCQUN2QixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3Qjs7Ozs7Ozs7Ozs7UUFHTyx1REFBdUI7Ozs7Ozs7OztZQUEvQixVQUFnQyxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQVksRUFDekMsS0FBYSxFQUFFLE9BQWU7O29CQUN0RCxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQzs7O2dCQUkxRCxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtvQkFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxPQUFPLE1BQU0sQ0FBQzthQUNmOztvQkFuSkZHLGlCQUFVOzs7O3FEQUdJQyxlQUFRLFlBQUlDLGFBQU0sU0FBQ0Msd0JBQWU7d0JBdEIvQ0wsb0JBQVc7OztRQXVLYiw0QkFBQztLQUFBLENBbkowQyxlQUFlOzs7Ozs7O0FDeEIxRCxRQUFhLDJCQUEyQixHQUF1QjtRQUM3RCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO1lBQzlELFVBQVUsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUM7WUFDM0IsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDO1lBQ3RHLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQztZQUMvQyxjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7WUFDakQsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7WUFDL0Qsa0JBQWtCLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7WUFDcEQsb0JBQW9CLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztTQUN6RTtLQUNGOzs7Ozs7QUNkRDtBQVdBOztRQUFBO1NBVUM7O29CQVZBTSxlQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLHlCQUFnQixDQUFDO3dCQUMzQixTQUFTLEVBQUU7NEJBQ1Q7Z0NBQ0UsT0FBTyxFQUFFLGVBQWU7Z0NBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7NkJBQ2hDO3lCQUNGO3FCQUNGOztRQUVELDJCQUFDO0tBQUEsSUFBQTtlQU91RCwyQkFBMkI7QUFMbkY7UUFBQTtTQVFDOztvQkFSQUQsZUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUCxvQkFBb0I7NEJBQ3BCRSw0QkFBbUI7eUJBQ3BCO3dCQUNELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsTUFBNkIsRUFBQyxDQUFDO3FCQUNwRjs7UUFFRCw4QkFBQztLQUFBOzs7Ozs7Ozs7OztBQy9CRDs7Ozs7O0FBZUEsUUFBYSxhQUFhLEdBQTZCQyxrQkFBTyxDQUFDLGVBQWUsRUFBRTtRQUM5RUMsZ0JBQUssQ0FBQyxTQUFTLEVBQUVDLGdCQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNyQ0MscUJBQVUsQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QkQsZ0JBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUNuQkUsa0JBQU8sQ0FBQyw4Q0FBOEMsQ0FBQztTQUN4RCxDQUFDO0tBQ0gsQ0FBQzs7QUFFRixRQUFhLGFBQWEsR0FBNkJKLGtCQUFPLENBQUMsZUFBZSxFQUFFO1FBQzlFRyxxQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUN0QkMsa0JBQU8sQ0FBQyxHQUFHLEVBQUVDLG9CQUFTLENBQUM7Z0JBQ3JCSCxnQkFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDbkRBLGdCQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO2dCQUNyREEsZ0JBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO2FBQy9DLENBQUMsQ0FBQztTQUNKLENBQUM7UUFDRkMscUJBQVUsQ0FBQyxZQUFZLEVBQUU7WUFDdkJDLGtCQUFPLENBQUMsR0FBRyxFQUFFQyxvQkFBUyxDQUFDO2dCQUNyQkgsZ0JBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ3BEQSxnQkFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztnQkFDcERBLGdCQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7U0FDSixDQUFDO0tBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7QUNyQ0Ysd0NBQTJDLFFBQWdCO1FBQ3pELE9BQU8sS0FBSyxDQUNSLDhDQUE0QyxRQUFRLDRDQUF5QztZQUM3RixtR0FBbUc7WUFDbkcsd0JBQXdCLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7OztRQ0xDLE9BQUksRUFBRSxPQUFJLEVBQUUsU0FBTTs7Ozs7Ozs7OztBQ0RwQjs7Ozs7QUEwQ0E7UUErTkUsbUNBQW9CLFdBQXVCLEVBQ3ZCLEtBQXdCLEVBQ3hCLE9BQWUsRUFDSCxRQUE0QixFQUNFLFlBQWdDLEVBQ2xGLGlCQUFvQztZQUxoRCxpQkFlQztZQWZtQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtZQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtZQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBQ0gsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7WUFDRSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7WUF0SXBGLG1CQUFjLEdBQUcsSUFBSUksbUJBQVksRUFBUSxDQUFDO1lBRTNDLFNBQUksR0FBMkMsTUFBTSxDQUFDOztZQWV0RCxjQUFTLEdBQStCLE9BQU8sQ0FBQztZQXNDaEQsaUJBQVksR0FBVyxDQUFDLENBQUM7O1lBTXhCLG1CQUFjLEdBQUcsSUFBSUEsbUJBQVksRUFBSyxDQUFDOztZQUdqRCx3QkFBbUIsR0FBRyxVQUFDLElBQU87Z0JBQzVCLE9BQU8sQ0FBQyxDQUFDLElBQUk7cUJBQ1YsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM1RSxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3BFLENBQUMsS0FBSSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3pFLENBQUM7O1lBOEJGLGlCQUFZLEdBQStCLE9BQU8sQ0FBQztZQUNuRCxlQUFVLEdBQXNCLE1BQU0sQ0FBQztZQW9DckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE1BQU0sMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNyRDtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixNQUFNLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDMUQ7WUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBQSxDQUFDLENBQUM7U0FDckY7UUE1SUQsc0JBQ0ksOENBQU87Ozs7O2dCQURYO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7OztnQkFFRCxVQUFZLEtBQWU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RDs7O1dBSkE7UUFZRCxzQkFDSSwrQ0FBUTs7Ozs7Z0JBRFo7Z0JBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCOzs7O2dCQUVELFVBQWEsS0FBZTtnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFEOzs7V0FKQTtRQVNELHNCQUNJLDhDQUFPOzs7OztnQkFEWDtnQkFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7Z0JBRUQsVUFBWSxLQUFlO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekQ7OztXQUpBO1FBU0Qsc0JBQ0ksOENBQU87Ozs7O2dCQURYO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7OztnQkFFRCxVQUFZLEtBQWU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RDs7O1dBSkE7UUE0QkQsc0JBQUksa0RBQVc7Ozs7Ozs7OztnQkFBZjtnQkFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzs7OztnQkFFRCxVQUFnQixLQUFROztvQkFDaEIsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0I7Z0JBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JGLElBQUksYUFBYSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU87b0JBQzNFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ3pFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO3dCQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM1QjtpQkFDRjthQUNGOzs7V0FiQTs7OztRQWlCRCxpREFBYTs7O1lBQWI7Z0JBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1QjtRQU9ELHNCQUFJLGlEQUFVOzs7OztnQkFBZDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRDs7O1dBQUE7UUFFRCxzQkFBSSxzREFBZTs7O2dCQUFuQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDbEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9DOzs7V0FBQTtRQUVELHNCQUFJLGlEQUFVOzs7Z0JBQWQ7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDekIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDdEY7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFFL0Y7OztXQUFBO1FBRUQsc0JBQUksa0RBQVc7OztnQkFBZjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDOUQ7OztXQUFBO1FBRUQsc0JBQUksb0RBQWE7OztnQkFBakI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ2hFOzs7V0FBQTs7OztRQXFCRCxzREFBa0I7OztZQUFsQjtnQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDekQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2lCQUM1QjtxQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztpQkFDN0I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQztpQkFDL0M7YUFDRjs7OztRQUVELCtDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ2pDOzs7Ozs7O1FBR0QsaURBQWE7Ozs7O1lBQWIsVUFBYyxJQUFPO2dCQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7aUJBQzdCO2FBQ0Y7Ozs7Ozs7UUFHRCxrREFBYzs7Ozs7WUFBZCxVQUFlLEtBQVE7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7aUJBQzFCO2FBQ0Y7Ozs7O1FBRUQsaURBQWE7Ozs7WUFBYixVQUFjLElBQU87Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQzthQUM1Qjs7Ozs7UUFHRCx3REFBb0I7Ozs7WUFBcEIsVUFBcUIsS0FBSztnQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7Ozs7O1FBR0QsdURBQW1COzs7O1lBQW5CLFVBQW9CLEtBQUs7O2dCQUV2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2FBRTVCOzs7OztRQUVELHVEQUFtQjs7OztZQUFuQixVQUFvQixJQUFPO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6Qjs7OztRQUVELGdEQUFZOzs7WUFBWjtnQkFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQzthQUM1Qjs7OztRQUVELGdEQUFZOzs7WUFBWjtnQkFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztpQkFDN0I7YUFDRjs7OztRQUVELGlEQUFhOzs7WUFBYjtnQkFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDMUI7Ozs7UUFFRCxtREFBZTs7O1lBQWY7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVCOzs7Ozs7UUFHRCxvREFBZ0I7Ozs7WUFBaEI7Z0JBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU87b0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7Ozs7OztRQUdELGdEQUFZOzs7O1lBQVo7Z0JBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU87b0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RDs7Ozs7O1FBR0Qsb0RBQWdCOzs7O1lBQWhCO2dCQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNqQixPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0U7Ozs7OztRQUdELGdEQUFZOzs7O1lBQVo7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNFOzs7Ozs7O1FBR0QsOERBQTBCOzs7OztZQUExQixVQUEyQixLQUFvQjs7OztnQkFJN0MsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sRUFBRTtvQkFDakMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuRDtxQkFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxFQUFFO29CQUN2QyxJQUFJLENBQUMsb0NBQW9DLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkQ7YUFDRjs7OztRQUVELG9EQUFnQjs7O1lBQWhCO2dCQUFBLGlCQU1DO2dCQUxDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQ0MsZUFBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7d0JBQzNELEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUN4QyxDQUFDLENBQUM7aUJBQ0osQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O1FBR08sK0NBQVc7Ozs7OztZQUFuQixVQUFvQixLQUFRLEVBQUUsS0FBUTtnQkFDcEMsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU87b0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO29CQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRTs7Ozs7OztRQUdPLHlFQUFxQzs7Ozs7WUFBN0MsVUFBOEMsS0FBb0I7Z0JBQ2hFLFFBQVEsS0FBSyxDQUFDLE9BQU87b0JBQ25CLEtBQUtDLG1CQUFVO3dCQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2RSxNQUFNO29CQUNSLEtBQUtDLG9CQUFXO3dCQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEUsTUFBTTtvQkFDUixLQUFLQyxpQkFBUTt3QkFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkUsTUFBTTtvQkFDUixLQUFLQyxtQkFBVTt3QkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RFLE1BQU07b0JBQ1IsS0FBS0MsYUFBSTt3QkFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQy9ELENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsTUFBTTtvQkFDUixLQUFLQyxZQUFHO3dCQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzRCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTTtvQkFDUixLQUFLQyxnQkFBTzt3QkFDVixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNOzRCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxNQUFNO29CQUNSLEtBQUtDLGtCQUFTO3dCQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU07NEJBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7NEJBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsTUFBTTtvQkFDUixLQUFLQyxjQUFLO3dCQUNSLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTs0QkFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7OzRCQUVyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7eUJBQ3hCO3dCQUNELE9BQU87b0JBQ1Q7O3dCQUVFLE9BQU87aUJBQ1Y7O2dCQUdELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4Qjs7Ozs7OztRQUdPLHdFQUFvQzs7Ozs7WUFBNUMsVUFBNkMsS0FBb0I7Z0JBQy9ELFFBQVEsS0FBSyxDQUFDLE9BQU87b0JBQ25CLEtBQUtSLG1CQUFVO3dCQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pFLE1BQU07b0JBQ1IsS0FBS0Msb0JBQVc7d0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hFLE1BQU07b0JBQ1IsS0FBS0MsaUJBQVE7d0JBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM5RCxNQUFNO29CQUNSLEtBQUtDLG1CQUFVO3dCQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDOUQsTUFBTTtvQkFDUixLQUFLQyxhQUFJO3dCQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUNqRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO29CQUNSLEtBQUtDLFlBQUc7d0JBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ2pFLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsTUFBTTtvQkFDUixLQUFLQyxnQkFBTzt3QkFDVixJQUFJLENBQUMsV0FBVzs0QkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1RSxNQUFNO29CQUNSLEtBQUtDLGtCQUFTO3dCQUNaLElBQUksQ0FBQyxXQUFXOzRCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDMUUsTUFBTTtvQkFDUixLQUFLQyxjQUFLO3dCQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNO29CQUNSOzt3QkFFRSxPQUFPO2lCQUNWOztnQkFHRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7Ozs7Ozs7UUFHTyx5RUFBcUM7Ozs7O1lBQTdDLFVBQThDLEtBQW9CO2dCQUNoRSxRQUFRLEtBQUssQ0FBQyxPQUFPO29CQUNuQixLQUFLTixpQkFBUTt3QkFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTTs0QkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs0QkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxNQUFNO29CQUNSLEtBQUtDLG1CQUFVO3dCQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNOzRCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUtLLGNBQUs7d0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3JDLE9BQU87b0JBQ1Q7O3dCQUVFLE9BQU87aUJBQ1Y7O2dCQUdELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4Qjs7Ozs7Ozs7Ozs7UUFNTyx1REFBbUI7Ozs7OztZQUEzQixVQUE0QixJQUFPOzs7O29CQUczQixTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNoRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3pEOzs7Ozs7Ozs7OztRQU1PLHVEQUFtQjs7Ozs7O1lBQTNCLFVBQTRCLElBQU87Ozs7b0JBRzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztxQkFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDekQ7Ozs7O1FBRU8saURBQWE7Ozs7WUFBckIsVUFBc0IsU0FBaUI7Z0JBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO2FBQ2pDOzs7O1FBRUQsc0RBQWtCOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7YUFDMUI7Ozs7O1FBRU8sMkNBQU87Ozs7WUFBZixVQUFnQixDQUFTO2dCQUN2QixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3Qjs7b0JBNWdCRkMsZ0JBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsNkJBQTZCO3dCQUN2QyxRQUFRLEVBQUUsZzhIQTRFWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxzeUdBQXN5RyxDQUFDO3dCQUNoekcsSUFBSSxFQUFFOzRCQUNKLHFDQUFxQyxFQUFFLE1BQU07NEJBQzdDLFVBQVUsRUFBRSxHQUFHOzRCQUNmLFdBQVcsRUFBRSxvQ0FBb0M7eUJBQ2xEO3dCQUNELFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQzt3QkFDM0IsYUFBYSxFQUFFQyx3QkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxlQUFlLEVBQUVDLDhCQUF1QixDQUFDLE1BQU07cUJBQ2hEOzs7O3dCQWxIQ0MsaUJBQVU7d0JBVUhDLDBCQUFpQjt3QkFOeEJDLGFBQU07d0JBU0MsZUFBZSx1QkErT1Q1QixlQUFRO3dEQUNSQSxlQUFRLFlBQUlDLGFBQU0sU0FBQyxvQkFBb0I7d0JBL1BwRDRCLHdCQUFpQjs7OztxQ0F5SGhCQyxhQUFNOzJCQUVOQyxZQUFLOzhCQUdMQSxZQUFLO2dDQVlMQSxZQUFLOytCQUdMQSxZQUFLOzhCQVlMQSxZQUFLOzhCQVlMQSxZQUFLO21DQVdMQSxZQUFLO2lDQUdMQSxZQUFLO3FDQUdMRCxhQUFNO3lDQTRITkMsWUFBSzt3Q0FNTEEsWUFBSzs7UUFpUFIsZ0NBQUM7S0FBQTs7Ozs7O0FDdmpCRDs7OztBQWFBOzs7O1FBQ0UsdUNBQW1CLEtBQWEsRUFDYixZQUFvQixFQUNwQixTQUFpQixFQUNqQixPQUFnQjtZQUhoQixVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQ2IsaUJBQVksR0FBWixZQUFZLENBQVE7WUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtZQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFTO1NBQ2xDO1FBQ0gsb0NBQUM7SUFBRCxDQUFDLElBQUE7Ozs7O0FBTUQ7Ozs7O1FBQUE7O1lBNkRXLFlBQU8sR0FBRyxDQUFDLENBQUM7O1lBR1osMkJBQXNCLEdBQUcsS0FBSyxDQUFDOztZQUcvQixlQUFVLEdBQUcsQ0FBQyxDQUFDOztZQUdkLHdCQUFtQixHQUFHLElBQUluQixtQkFBWSxFQUFVLENBQUM7U0F5QjVEOzs7OztRQXZCQyxvREFBWTs7OztZQUFaLFVBQWEsSUFBbUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNqRCxPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1FBR0Qsc0JBQUksMERBQWU7Ozs7O2dCQUFuQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO29CQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUMxQzs7O1dBQUE7Ozs7OztRQUVELHFEQUFhOzs7OztZQUFiLFVBQWMsUUFBZ0IsRUFBRSxRQUFnQjs7b0JBQzFDLFVBQVUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFROztnQkFHbkQsSUFBSSxRQUFRLEVBQUU7b0JBQ1osVUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ3BDO2dCQUVELE9BQU8sVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdkM7O29CQTlGRlcsZ0JBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsb0NBQW9DO3dCQUM5QyxRQUFRLEVBQUUsaW5EQWtDWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyx1aERBQXVoRCxDQUFDO3dCQUNqaUQsSUFBSSxFQUFFOzRCQUNKLE9BQU8sRUFBRSxrQ0FBa0M7eUJBQzVDO3dCQUNELGFBQWEsRUFBRUMsd0JBQWlCLENBQUMsSUFBSTt3QkFDckMsZUFBZSxFQUFFQyw4QkFBdUIsQ0FBQyxNQUFNO3FCQUNoRDs7OzRCQUdFTSxZQUFLOzJCQUdMQSxZQUFLO2lDQUdMQSxZQUFLO29DQUdMQSxZQUFLOzRDQUdMQSxZQUFLOzhCQUdMQSxZQUFLOzZDQUdMQSxZQUFLO2lDQUdMQSxZQUFLOzBDQUdMRCxhQUFNOztRQXlCVCxvQ0FBQztLQUFBOzs7Ozs7O0FDNUdELFFBQWEsWUFBWSxHQUFHLEVBQUU7O0FBQzlCLFFBQWEsa0JBQWtCLEdBQUcsSUFBSTs7QUFDdEMsUUFBYSxrQkFBa0IsR0FBRyxLQUFLOztBQUN2QyxRQUFhLGlCQUFpQixHQUFHLE1BQU07Ozs7OztBQVF2QztRQWtKRSxnQ0FBb0IsUUFBb0IsRUFDcEIsUUFBNEI7WUFEaEQsaUJBUUM7WUFSbUIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtZQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFvQjtZQW5IdEMsbUJBQWMsR0FBRyxJQUFJbEIsbUJBQVksRUFBUSxDQUFDO1lBK0M1QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztZQXVCcEIsYUFBUSxHQUFXLENBQUMsQ0FBQztZQUVyQixlQUFVLEdBQVksS0FBSyxDQUFDOztZQUczQixtQkFBYyxHQUFHLElBQUlBLG1CQUFZLEVBQUssQ0FBQztZQUV2QyxxQkFBZ0IsR0FBRyxJQUFJQSxtQkFBWSxFQUFLLENBQUM7O1lBR25ELFdBQU0sR0FBa0IsRUFBRSxDQUFDO1lBQzNCLGFBQVEsR0FBa0IsRUFBRSxDQUFDOztZQUc3QixjQUFTLEdBQVksSUFBSSxDQUFDO1lBZ0N4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBQyxLQUFVO2dCQUNsQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUIsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUc7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QixDQUFDO1NBQ0g7UUFySEQsc0JBQ0ksOENBQVU7Ozs7Ozs7Z0JBRGQ7Z0JBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7O2dCQUVELFVBQWUsS0FBUTs7b0JBQ2pCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUM5RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2Q7YUFDRjs7O1dBUkE7UUFhRCxzQkFDSSw0Q0FBUTs7Ozs7Z0JBRFo7Z0JBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCOzs7O2dCQUVELFVBQWEsS0FBZTtnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUNsQzthQUNGOzs7V0FQQTtRQVlELHNCQUNJLDJDQUFPOzs7OztnQkFEWDtnQkFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7Z0JBRUQsVUFBWSxLQUFlO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwRjs7O1dBSkE7UUFXRCxzQkFDSSwyQ0FBTzs7Ozs7Z0JBRFg7Z0JBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7O2dCQUVELFVBQVksS0FBZTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDcEY7OztXQUpBO1FBU0Qsc0JBQ0ksNkNBQVM7Ozs7OztnQkFEYixVQUNjLEtBQWdCO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxRQUFRLENBQUM7YUFDcEM7OztXQUFBO1FBd0JELHNCQUFJLHlDQUFLOzs7Z0JBQVQ7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztvQkFDNUQsR0FBRyxHQUFHLENBQUM7O29CQUNQLE1BQU0sR0FBRyxrQkFBa0I7Z0JBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7d0JBQ2QsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtvQkFDN0QsTUFBTSxHQUFHLEtBQUssR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztvQkFDekQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNuQixNQUFNLEdBQUcsa0JBQWtCLENBQUM7cUJBQzdCO29CQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pEO3FCQUFNO29CQUNMLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE9BQU87b0JBQ0wsV0FBVyxFQUFFLFlBQVUsR0FBRyxTQUFNO29CQUNoQyxRQUFRLEVBQUssTUFBTSxNQUFHO29CQUN0QixZQUFZLEVBQUssRUFBRSxHQUFHLE1BQU0sTUFBRztpQkFDaEMsQ0FBQzthQUNIOzs7V0FBQTs7OztRQWVELG1EQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDs7Ozs7OztRQUdELGlEQUFnQjs7Ozs7WUFBaEIsVUFBaUIsS0FBVTtnQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQy9ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQy9ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM3RDs7Ozs7UUFFRCxpREFBZ0I7Ozs7WUFBaEIsVUFBaUIsS0FBVTtnQkFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCOzs7O1FBRUQsK0NBQWM7OztZQUFkO2dCQUNFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM5RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzNDO2FBQ0Y7Ozs7OztRQUdPLHNDQUFLOzs7O1lBQWI7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O29CQUVyQixTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7O29CQUN4QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBRWhELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOzs0QkFDL0MsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7OzRCQUN4QixNQUFNLEdBQUcsa0JBQWtCOzs0QkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs0QkFDL0MsT0FBTyxHQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs2QkFDdkUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDZixLQUFLLEVBQUUsQ0FBQzs0QkFDUixZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDM0MsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLEdBQUcsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsaUJBQWlCOzRCQUNqRSxJQUFJLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLGlCQUFpQjt5QkFDbkUsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO3FCQUFNO29CQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzs0QkFDckMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7OzRCQUN4QixLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs7NEJBQ3pCLE1BQU0sR0FBRyxLQUFLLEdBQUcsa0JBQWtCLEdBQUcsa0JBQWtCOzs0QkFDcEQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7OzRCQUMzQyxPQUFPLEdBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzZCQUN2RSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ3hFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2YsS0FBSyxFQUFFLENBQUM7NEJBQ1IsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQzNDLE9BQU8sRUFBRSxPQUFPOzRCQUNoQixHQUFHLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLGlCQUFpQjs0QkFDakUsSUFBSSxFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxpQkFBaUI7NEJBQ2xFLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUs7eUJBQ3ZDLENBQUMsQ0FBQztxQkFDSjtpQkFDRjtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzt3QkFDMUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7O3dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7d0JBQ2hGLE9BQU8sR0FDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7eUJBQ3ZFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDeEUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsS0FBSyxFQUFFLENBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzdDLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixHQUFHLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsaUJBQWlCO3dCQUM3RSxJQUFJLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsaUJBQWlCO3FCQUMvRSxDQUFDLENBQUM7aUJBQ0o7YUFDRjs7Ozs7Ozs7OztRQU1PLHdDQUFPOzs7OztZQUFmLFVBQWdCLEtBQVU7O29CQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhOztvQkFDckMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTs7b0JBQzdDLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVzs7b0JBQzNCLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWTs7b0JBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzs7b0JBQ3hFLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzs7b0JBQ3hFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7b0JBQ2pFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7b0JBQ2pFLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7b0JBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7O29CQUNuRixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUM1QixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7cUJBQ25FLEtBQUssSUFBSSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBRTNDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO2lCQUMvQjs7b0JBQ0csS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs7b0JBRWpDLElBQUk7Z0JBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ25CLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7cUJBQ2xDO3lCQUFNO3dCQUNMLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTs0QkFDaEIsS0FBSyxHQUFHLENBQUMsQ0FBQzt5QkFDWDt3QkFDRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO3FCQUMzRTtvQkFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUM1RjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO3FCQUN4QjtvQkFDRCxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7d0JBQ2hCLEtBQUssR0FBRyxDQUFDLENBQUM7cUJBQ1g7b0JBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDMUY7O29CQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN6RSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzdDO2FBQ0Y7O29CQTFURlcsZ0JBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsc25DQXFCWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxrc0RBQWtzRCxDQUFDO3dCQUM1c0QsSUFBSSxFQUFFOzRCQUNKLE1BQU0sRUFBRSxPQUFPOzRCQUNmLGFBQWEsRUFBRSwwQkFBMEI7eUJBQzFDO3FCQUNGOzs7O3dCQWhEQ0csaUJBQVU7d0JBS0gsZUFBZTs7OztxQ0E4Q3JCSSxhQUFNO2lDQUtOQyxZQUFLOytCQWdCTEEsWUFBSzs4QkFlTEEsWUFBSzs4QkFjTEEsWUFBSztnQ0FZTEEsWUFBSztpQ0FNTEEsWUFBSzsrQkFFTEEsWUFBSztpQ0FFTEEsWUFBSztxQ0FHTEQsYUFBTTt1Q0FFTkEsYUFBTTs7UUE4TVQsNkJBQUM7S0FBQTs7Ozs7O0FDbFZEOzs7O1FBeUNJLGlCQUFpQixHQUFHLENBQUM7Ozs7Ozs7OztBQVN6Qjs7Ozs7Ozs7UUFBQTtTQWdEQzs7OztRQWZDLHFEQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUNuQzs7Ozs7Ozs7OztRQU1ELGlEQUFjOzs7OztZQUFkLFVBQWUsS0FBb0I7Z0JBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBS0UsZUFBTSxFQUFFO29CQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDekI7YUFDRjs7b0JBL0NGVCxnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSw0QkFBNEI7d0JBQ3RDLFFBQVEsRUFBRSx3NEJBZ0JYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLDh4Q0FBOHhDLENBQUM7d0JBQ3h5QyxJQUFJLEVBQUU7NEJBQ0osT0FBTyxFQUFFLDRCQUE0Qjs0QkFDckMsMENBQTBDLEVBQUUseUJBQXlCOzRCQUNyRSxXQUFXLEVBQUUsd0JBQXdCO3lCQUN0Qzt3QkFDRCxhQUFhLEVBQUVDLHdCQUFpQixDQUFDLElBQUk7d0JBQ3JDLGVBQWUsRUFBRUMsOEJBQXVCLENBQUMsTUFBTTtxQkFDaEQ7OztnQ0FJRVEsZ0JBQVMsU0FBQyx5QkFBeUI7O1FBaUJ0QywrQkFBQztLQUFBLElBQUE7Ozs7QUFFRDtRQXdKRSwyQkFBb0IsT0FBa0IsRUFDbEIsUUFBaUIsRUFDakIsT0FBZSxFQUNmLGlCQUFtQyxFQUNLLGVBQWUsRUFDM0MsWUFBZ0MsRUFDaEMsSUFBb0IsRUFDRixTQUFjO1lBUDVDLFlBQU8sR0FBUCxPQUFPLENBQVc7WUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztZQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtZQUNLLG9CQUFlLEdBQWYsZUFBZSxDQUFBO1lBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtZQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtZQUNGLGNBQVMsR0FBVCxTQUFTLENBQUs7O1lBdkl2RCxjQUFTLEdBQStCLE9BQU8sQ0FBQztZQUNoRCxTQUFJLEdBQXNDLE1BQU0sQ0FBQztZQUNqRCxpQkFBWSxHQUFXLENBQUMsQ0FBQztZQXNCMUIsVUFBSyxHQUEyQyxNQUFNLENBQUM7WUFldkQsYUFBUSxHQUFHLEtBQUssQ0FBQzs7Ozs7WUF3QmYsb0JBQWUsR0FBRyxJQUFJckIsbUJBQVksRUFBSyxDQUFDO1lBS3pDLHVCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUMvQixzQkFBaUIsR0FBRyxRQUFRLENBQUM7O1lBR3BCLGlCQUFZLEdBQXVCLElBQUlBLG1CQUFZLEVBQVEsQ0FBQzs7WUFHNUQsaUJBQVksR0FBdUIsSUFBSUEsbUJBQVksRUFBUSxDQUFDOztZQUc5RSxXQUFNLEdBQUcsS0FBSyxDQUFDOztZQUdmLE9BQUUsR0FBRyx3QkFBc0IsaUJBQWlCLEVBQUksQ0FBQztZQVd6QyxtQkFBYyxHQUFhLElBQUksQ0FBQzs7WUEwQmhDLDhCQUF5QixHQUF1QixJQUFJLENBQUM7WUFFckQsdUJBQWtCLEdBQUdzQixpQkFBWSxDQUFDLEtBQUssQ0FBQzs7WUFNaEQsb0JBQWUsR0FBRyxJQUFJQyxZQUFPLEVBQVcsQ0FBQztZQVV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsTUFBTSwwQkFBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNqRDtTQUNGO1FBekpELHNCQUNJLHNDQUFPOzs7OztnQkFEWDs7O2dCQUlFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQzthQUN0Rjs7OztnQkFFRCxVQUFZLElBQWM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDs7O1dBSkE7UUFhRCxzQkFDSSwwQ0FBVzs7O2dCQURmLGNBQzZCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFOzs7O2dCQUN4RCxVQUFnQixLQUFjLElBQUksSUFBSSxDQUFDLFlBQVksR0FBR0MsOEJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7O1dBRDdCOzs7O1FBSXhELHdDQUFZOzs7WUFBWjtnQkFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2I7YUFDRjtRQUVELHNCQUNJLG1DQUFJOzs7Z0JBRFI7Z0JBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25COzs7O2dCQUVELFVBQVMsS0FBNkM7Z0JBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzthQUM5Qjs7O1dBSkE7UUFZRCxzQkFDSSxzQ0FBTzs7Ozs7Ozs7O2dCQURYO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7OztnQkFFRCxVQUFZLEtBQWM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUdBLDhCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlDOzs7V0FKQTtRQVNELHNCQUNJLHVDQUFROzs7OztnQkFEWjtnQkFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7b0JBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDckQ7Ozs7Z0JBRUQsVUFBYSxLQUFjOztvQkFDbkIsUUFBUSxHQUFHQSw4QkFBcUIsQ0FBQyxLQUFLLENBQUM7Z0JBRTdDLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDckM7YUFDRjs7O1dBVEE7UUFzQ0Qsc0JBQUksd0NBQVM7Ozs7O2dCQUFiO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUM1Qjs7OztnQkFFRCxVQUFjLEtBQWU7Z0JBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzdCOzs7V0FKQTtRQVNELHNCQUFJLHVDQUFROzs7OztnQkFBWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQzNEOzs7V0FBQTtRQUdELHNCQUFJLHVDQUFROzs7OztnQkFBWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQzNEOzs7V0FBQTtRQUVELHNCQUFJLDBDQUFXOzs7Z0JBQWY7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzthQUNuRTs7O1dBQUE7Ozs7UUFtQ0QsdUNBQVc7OztZQUFYO2dCQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRWhDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDMUI7YUFDRjs7Ozs7OztRQUdELG1DQUFPOzs7OztZQUFQLFVBQVEsSUFBTzs7b0JBQ1AsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTO2dCQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7O29CQUU3RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7YUFDRjs7Ozs7Ozs7OztRQU1ELDBDQUFjOzs7OztZQUFkLFVBQWUsS0FBZ0M7Z0JBQS9DLGlCQU9DO2dCQU5DLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixNQUFNLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO2lCQUM1RTtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCO29CQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWUsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFBLENBQUMsQ0FBQzthQUM3Rjs7Ozs7O1FBR0QsZ0NBQUk7Ozs7WUFBSjtnQkFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDaEMsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUMxQixNQUFNLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO2lCQUM3RTtnQkFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztpQkFDL0Q7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQjs7Ozs7O1FBR0QsaUNBQUs7Ozs7WUFBTDtnQkFBQSxpQkFxQ0M7Z0JBcENDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNoQixPQUFPO2lCQUNSO2dCQUNELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUU7b0JBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQy9COztvQkFFSyxhQUFhLEdBQUc7OztvQkFHcEIsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNwQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN6QixLQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO3FCQUN2QztpQkFDRjtnQkFFRCxJQUFJLElBQUksQ0FBQyx5QkFBeUI7b0JBQ2hDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7Ozs7OztvQkFNNUQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN2QyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzNCO3FCQUFNO29CQUNMLGFBQWEsRUFBRSxDQUFDO2lCQUNqQjthQUNGOzs7Ozs7UUFHTyx5Q0FBYTs7OztZQUFyQjtnQkFBQSxpQkFRQztnQkFQQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFO29CQUM1RCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO29CQUM5QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCO29CQUN4QyxVQUFVLEVBQUUsMkJBQTJCO2lCQUN4QyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQUUsR0FBQSxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUN6RDs7Ozs7O1FBR08sd0NBQVk7Ozs7WUFBcEI7Z0JBQUEsaUJBcUJDO2dCQXBCQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJQyxzQkFBZSxDQUE4Qix3QkFBd0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDM0g7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUU7O3dCQUMzQixZQUFZLEdBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7b0JBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzs7b0JBRzVDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQ3hCLGVBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUMzRCxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUNqQyxDQUFDLENBQUM7aUJBQ0o7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQUUsR0FBQSxDQUFDLENBQUM7YUFDOUQ7Ozs7OztRQUdPLHdDQUFZOzs7O1lBQXBCOztvQkFDUSxhQUFhLEdBQUcsSUFBSXlCLHFCQUFhLENBQUM7b0JBQ3RDLGdCQUFnQixFQUFFLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtvQkFDckQsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLGFBQWEsRUFBRSxrQ0FBa0M7b0JBQ2pELFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7b0JBQzlDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN0QyxVQUFVLEVBQUUsMEJBQTBCO2lCQUN2QyxDQUFDO2dCQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdEQ7Ozs7OztRQUdPLHdEQUE0Qjs7OztZQUFwQztnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO3FCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixFQUFFLEVBQy9ELEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLEVBQ3JDLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQ3JDO3FCQUNBLG9CQUFvQixDQUNuQixFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxFQUNsQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUN4QztxQkFDQSxvQkFBb0IsQ0FDbkIsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsRUFDbkMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FDbkM7cUJBQ0Esb0JBQW9CLENBQ25CLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEVBQ2hDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQ3RDLENBQUM7YUFDTDs7b0JBblVGZixnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxFQUFFO3dCQUNaLGVBQWUsRUFBRUUsOEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsYUFBYSxFQUFFRCx3QkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7Ozt3QkE5RUNlLGdCQUFTO3dCQXpCVEMsZUFBTzt3QkFlUFosYUFBTTt3QkFLTmEsdUJBQWdCO3dEQXdPSHhDLGFBQU0sU0FBQ3lDLHVDQUE4Qjt3QkE5TjNDLGVBQWUsdUJBK05UMUMsZUFBUTt3QkFqUWQyQyxtQkFBYyx1QkFrUVIzQyxlQUFRO3dEQUNSQSxlQUFRLFlBQUlDLGFBQU0sU0FBQzJDLGVBQVE7Ozs7OEJBckp2Q2IsWUFBSztnQ0FjTEEsWUFBSzsyQkFDTEEsWUFBSzttQ0FDTEEsWUFBSztrQ0FFTEEsWUFBSzsyQkFXTEEsWUFBSzs4QkFlTEEsWUFBSzsrQkFZTEEsWUFBSztzQ0FxQkxELGFBQU07aUNBR05DLFlBQUs7eUNBRUxBLFlBQUs7d0NBQ0xBLFlBQUs7bUNBR0xELGFBQU0sU0FBQyxRQUFRO21DQUdmQSxhQUFNLFNBQUMsUUFBUTs7UUFpT2xCLHdCQUFDO0tBQUE7Ozs7OztBQ3hhRDs7QUFzQ0EsUUFBYSxpQ0FBaUMsR0FBUTtRQUNwRCxPQUFPLEVBQUVlLHVCQUFpQjtRQUMxQixXQUFXLEVBQUVDLGlCQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixHQUFBLENBQUM7UUFDckQsS0FBSyxFQUFFLElBQUk7S0FDWjs7QUFFRCxRQUFhLDZCQUE2QixHQUFRO1FBQ2hELE9BQU8sRUFBRUMsbUJBQWE7UUFDdEIsV0FBVyxFQUFFRCxpQkFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsR0FBQSxDQUFDO1FBQ3JELEtBQUssRUFBRSxJQUFJO0tBQ1o7Ozs7Ozs7QUFPRDs7Ozs7O1FBSUUscUNBQW1CLE1BQWlDLEVBQVMsYUFBMEI7WUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7WUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtZQUNyRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2hDO1FBQ0gsa0NBQUM7SUFBRCxDQUFDLElBQUE7Ozs7O0FBR0Q7UUFtTkUsZ0NBQW9CLFdBQXVCLEVBQ1osWUFBZ0MsRUFDRCxZQUFnQyxFQUM5RCxVQUF3QjtZQUh4RCxpQkFlQztZQWZtQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtZQUNaLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtZQUNELGlCQUFZLEdBQVosWUFBWSxDQUFvQjtZQUM5RCxlQUFVLEdBQVYsVUFBVSxDQUFjOztZQWhFOUMsZUFBVSxHQUFHLElBQUlsQyxtQkFBWSxFQUFrQyxDQUFDOztZQUdoRSxjQUFTLEdBQUcsSUFBSUEsbUJBQVksRUFBa0MsQ0FBQzs7WUFHekUsaUJBQVksR0FBRyxJQUFJQSxtQkFBWSxFQUFZLENBQUM7O1lBRzVDLG9CQUFlLEdBQUcsSUFBSUEsbUJBQVksRUFBVyxDQUFDO1lBRTlDLGVBQVUsR0FBRzthQUNaLENBQUE7WUFFTyxpQkFBWSxHQUF5QjthQUM1QyxDQUFBO1lBRU8sdUJBQWtCLEdBQUc7YUFDNUIsQ0FBQTtZQUVPLDRCQUF1QixHQUFHc0IsaUJBQVksQ0FBQyxLQUFLLENBQUM7WUFFN0Msd0JBQW1CLEdBQUdBLGlCQUFZLENBQUMsS0FBSyxDQUFDOztZQUd6QyxvQkFBZSxHQUFnQjtnQkFDckMsT0FBTyxLQUFJLENBQUMsZUFBZTtvQkFDekIsSUFBSSxHQUFHLEVBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLEVBQUMsQ0FBQzthQUNqRixDQUFBOztZQUdPLGtCQUFhLEdBQWdCLFVBQUMsT0FBd0I7O29CQUN0RCxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZHLE9BQU8sQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZO29CQUNoQyxLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQzlELElBQUksR0FBRyxFQUFDLGtCQUFrQixFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxFQUFDLENBQUM7YUFDMUUsQ0FBQTs7WUFHTyxrQkFBYSxHQUFnQixVQUFDLE9BQXdCOztvQkFDdEQsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2RyxPQUFPLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWTtvQkFDaEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUM5RCxJQUFJLEdBQUcsRUFBQyxrQkFBa0IsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsRUFBQyxDQUFDO2FBQzFFLENBQUE7O1lBR08scUJBQWdCLEdBQWdCLFVBQUMsT0FBd0I7O29CQUN6RCxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZHLE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLDJCQUEyQixDQUFDLElBQUksQ0FBQztvQkFDM0csSUFBSSxHQUFHLEVBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFDLENBQUM7YUFDeEMsQ0FBQTs7WUFHTyxlQUFVLEdBQ2hCYyxnQkFBVSxDQUFDLE9BQU8sQ0FDaEIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOztZQUduRixvQkFBZSxHQUFHLEtBQUssQ0FBQztZQU05QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsTUFBTSwwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLE1BQU0sMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUMxRDs7WUFHRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQzthQUN6QixDQUFDLENBQUM7U0FDSjtRQTFNRCxzQkFDSSxxREFBaUI7Ozs7OztnQkFEckIsVUFDc0IsS0FBMkI7Z0JBQy9DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQzs7O1dBQUE7Ozs7O1FBSU8sbURBQWtCOzs7O1lBQTFCLFVBQTJCLEtBQTJCO2dCQUNwRCxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0Y7UUFFRCxzQkFBYSx1REFBbUI7Ozs7Z0JBQWhDLFVBQWlDLE1BQXNFO2dCQUNyRyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7OztXQUFBO1FBS0Qsc0JBQ0kseUNBQUs7Ozs7O2dCQURUO2dCQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQjs7OztnQkFFRCxVQUFVLEtBQWU7Z0JBQXpCLGlCQWNDO2dCQWJDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEUsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7O29CQUM5QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFHekIsVUFBVSxDQUFDO29CQUNULElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ25ELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMvQjtpQkFDRixDQUFDLENBQUM7YUFDSjs7O1dBaEJBOzs7O1FBa0JPLGlEQUFnQjs7O1lBQXhCO2dCQUNFLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJO29CQUMzQixLQUFLLE1BQU07d0JBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQzdDLEtBQUssVUFBVTt3QkFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDakQsS0FBSyxNQUFNO3dCQUNULE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUM3QyxLQUFLLE9BQU87d0JBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7aUJBQy9DO2FBQ0Y7Ozs7UUFFTywrQ0FBYzs7O1lBQXRCOztvQkFDTSxXQUFXO2dCQUVmLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJO29CQUMzQixLQUFLLE1BQU07d0JBQ1QsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzt3QkFDaEQsTUFBTTtvQkFDUixLQUFLLFVBQVU7d0JBQ2IsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzt3QkFDcEQsTUFBTTtvQkFDUixLQUFLLE1BQU07d0JBQ1QsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzt3QkFDaEQsTUFBTTtvQkFDUixLQUFLLE9BQU87d0JBQ1YsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3QkFDakQsTUFBTTtpQkFDVDtnQkFDRCxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO2lCQUNqRDtnQkFFRCxPQUFPLFdBQVcsQ0FBQzthQUNwQjtRQUtELHNCQUNJLHVDQUFHOzs7OztnQkFEUDtnQkFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEI7Ozs7Z0JBRUQsVUFBUSxLQUFlO2dCQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7OztXQUxBO1FBVUQsc0JBQ0ksdUNBQUc7Ozs7O2dCQURQO2dCQUVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQjs7OztnQkFFRCxVQUFRLEtBQWU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjs7O1dBTEE7UUFVRCxzQkFDSSw0Q0FBUTs7Ozs7Z0JBRFo7Z0JBRUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6Qjs7OztnQkFFRCxVQUFhLEtBQVU7O29CQUNmLFFBQVEsR0FBR1osOEJBQXFCLENBQUMsS0FBSyxDQUFDO2dCQUU3QyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO29CQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3JDO2FBQ0Y7OztXQVRBOzs7O1FBNEZELG1EQUFrQjs7O1lBQWxCO2dCQUFBLGlCQVdDO2dCQVZDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTs7b0JBRXBCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFXO3dCQUNsRixLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDNUIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUEyQixDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQzNGLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQTJCLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztxQkFDN0YsQ0FBQyxDQUFDO2lCQUNOO2FBQ0Y7Ozs7UUFFRCw0Q0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakM7Ozs7O1FBRUQsMERBQXlCOzs7O1lBQXpCLFVBQTBCLEVBQWM7Z0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7YUFDOUI7Ozs7O1FBRUQseUNBQVE7Ozs7WUFBUixVQUFTLENBQWtCO2dCQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDcEQ7Ozs7Ozs7OztRQU1ELDZEQUE0Qjs7OztZQUE1QjtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMxRTs7Ozs7OztRQUdELDJDQUFVOzs7Ozs7WUFBVixVQUFXLEtBQVE7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCOzs7Ozs7O1FBR0QsaURBQWdCOzs7Ozs7WUFBaEIsVUFBaUIsRUFBd0I7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2FBQ3hCOzs7Ozs7O1FBR0Qsa0RBQWlCOzs7Ozs7WUFBakIsVUFBa0IsRUFBYztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7YUFDdEI7Ozs7Ozs7UUFHRCxpREFBZ0I7Ozs7OztZQUFoQixVQUFpQixRQUFpQjtnQkFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7YUFDMUI7Ozs7O1FBRUQsMkNBQVU7Ozs7WUFBVixVQUFXLEtBQW9CO2dCQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBS25CLG1CQUFVLEVBQUU7b0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjs7Ozs7UUFFRCx5Q0FBUTs7OztZQUFSLFVBQVMsS0FBYTs7b0JBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUEyQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDNUY7Ozs7UUFFRCwwQ0FBUzs7O1lBQVQ7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2FBQzdGOzs7Ozs7UUFHRCx3Q0FBTzs7OztZQUFQOztnQkFFRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQy9CO2dCQUVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjs7Ozs7OztRQUdRLDZDQUFZOzs7OztZQUFwQixVQUFxQixLQUFlO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLO29CQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3pFOztvQkEvVEhnQyxnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFNBQVMsRUFBRTs0QkFDVCxpQ0FBaUM7NEJBQ2pDLDZCQUE2Qjs0QkFDN0IsRUFBQyxPQUFPLEVBQUVDLGlDQUF3QixFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBQzt5QkFDekU7d0JBQ0QsSUFBSSxFQUFFOzRCQUNKLHNCQUFzQixFQUFFLE1BQU07NEJBQzlCLGtCQUFrQixFQUFFLGlEQUFpRDs0QkFDckUsWUFBWSxFQUFFLDBDQUEwQzs0QkFDeEQsWUFBWSxFQUFFLDBDQUEwQzs0QkFDeEQsWUFBWSxFQUFFLFVBQVU7NEJBQ3hCLFNBQVMsRUFBRSw0QkFBNEI7NEJBQ3ZDLFNBQVMsRUFBRSwrQkFBK0I7NEJBQzFDLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixRQUFRLEVBQUUsV0FBVzs0QkFDckIsV0FBVyxFQUFFLG9CQUFvQjt5QkFDbEM7d0JBQ0QsUUFBUSxFQUFFLG9CQUFvQjtxQkFDL0I7Ozs7d0JBaEZDeEIsaUJBQVU7d0JBc0JILGVBQWUsdUJBMFBUMUIsZUFBUTt3REFDUkEsZUFBUSxZQUFJQyxhQUFNLFNBQUMsb0JBQW9CO3dCQTdQN0NrRCxzQkFBWSx1QkE4UE5uRCxlQUFROzs7O3dDQTlMcEIrQixZQUFLOzBDQWNMQSxZQUFLOzRCQVFMQSxZQUFLOzBCQTZETEEsWUFBSzswQkFhTEEsWUFBSzsrQkFhTEEsWUFBSztpQ0FpQkxELGFBQU07Z0NBR05BLGFBQU07O1FBdUtULDZCQUFDO0tBQUE7Ozs7OztBQ2pZRDs7O0FBZ0JBO1FBNkNFLGlDQUFtQixLQUF3QixFQUFVLGtCQUFxQztZQUF2RSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtZQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7WUFmbEYsa0JBQWEsR0FBR0ksaUJBQVksQ0FBQyxLQUFLLENBQUM7U0FlbUQ7UUFUOUYsc0JBQ0ksNkNBQVE7Ozs7O2dCQURaO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkY7Ozs7Z0JBQ0QsVUFBYSxLQUFjO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHRSw4QkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQzs7O1dBSEE7Ozs7O1FBUUQsNkNBQVc7Ozs7WUFBWCxVQUFZLE9BQXNCO2dCQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2lCQUMzQjthQUNGOzs7O1FBRUQsNkNBQVc7OztZQUFYO2dCQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbEM7Ozs7UUFFRCxvREFBa0I7OztZQUFsQjtnQkFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjs7Ozs7UUFFRCx1Q0FBSzs7OztZQUFMLFVBQU0sS0FBWTtnQkFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUN6QjthQUNGOzs7O1FBRU8sb0RBQWtCOzs7WUFBMUI7Z0JBQUEsaUJBUUM7O29CQVBPLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUdnQixPQUFZLEVBQUU7O29CQUMvRixhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQjtvQkFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEdBQUdBLE9BQVksRUFBRTtnQkFFekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBR0MsVUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztxQkFDNUUsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLEdBQUEsQ0FBQyxDQUFDO2FBQzlEOztvQkE1RUY5QixnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSwyQkFBMkI7d0JBQ3JDLFFBQVEsRUFBRSxnbkRBa0JYO3dCQUNDLElBQUksRUFBRTs0QkFDSixPQUFPLEVBQUUsMkJBQTJCO3lCQUNyQzt3QkFDRCxRQUFRLEVBQUUseUJBQXlCO3dCQUNuQyxhQUFhLEVBQUVDLHdCQUFpQixDQUFDLElBQUk7d0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7d0JBQzFCLGVBQWUsRUFBRUMsOEJBQXVCLENBQUMsTUFBTTtxQkFDaEQ7Ozs7d0JBaENRRSwwQkFBaUI7d0JBUnhCRSx3QkFBaUI7Ozs7cUNBNkNoQkUsWUFBSyxTQUFDLEtBQUs7K0JBR1hBLFlBQUs7O1FBeUNSLDhCQUFDO0tBQUE7Ozs7Ozs7UUN0RUssYUFBYSxHQUFHLENBQUM7Ozs7OztBQU12QjtRQTBGRSxvQ0FBK0IsUUFBNEIsRUFDRyxZQUFnQztZQUQvRCxhQUFRLEdBQVIsUUFBUSxDQUFvQjtZQUNHLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtZQXBFckYsU0FBSSxHQUEyQyxNQUFNLENBQUM7WUFFckQsbUJBQWMsR0FBRyxJQUFJbkIsbUJBQVksRUFBUSxDQUFDOztZQTJDMUMsbUJBQWMsR0FBRyxJQUFJQSxtQkFBWSxFQUFLLENBQUM7WUF3Qi9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixNQUFNLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDckQ7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsTUFBTSwwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQzFEOztnQkFFSyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTs7Z0JBQ2xELGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQzs7Z0JBQzFELFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQzs7O2dCQUd4RCxRQUFRLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QyxPQUFPLEVBQUMsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQzFDLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFFMUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFDO1FBakZELHNCQUNJLGtEQUFVOzs7Ozs7O2dCQURkO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6Qjs7OztnQkFFRCxVQUFlLEtBQVE7O29CQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVc7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xELElBQUksYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXO29CQUNuQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDbEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7YUFDRjs7O1dBZEE7UUFtQkQsc0JBQ0ksZ0RBQVE7Ozs7O2dCQURaO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2Qjs7OztnQkFFRCxVQUFhLEtBQVE7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakU7OztXQUxBOzs7O1FBMERELHVEQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkOzs7Ozs7O1FBR0Qsa0RBQWE7Ozs7O1lBQWIsVUFBYyxJQUFZOztvQkFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUMvRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4Qzs7Ozs7O1FBR08sMENBQUs7Ozs7WUFBYjtnQkFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs7b0JBRWpFLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsZ0JBQWdCO29CQUNuQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7d0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxhQUFhLENBQUM7Z0JBRXZELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCOzs7Ozs7UUFHTyxxREFBZ0I7Ozs7WUFBeEI7O29CQUNNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7O29CQUM5RCxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFHLElBQUksRUFBRSxFQUFFO29CQUMzRSxJQUFJLElBQUksSUFBSSxhQUFhLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLEdBQUcsQ0FBQyxDQUFDO3FCQUNWOzt3QkFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzt3QkFDdkMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7d0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOzt3QkFDbkIsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3lCQUNoQyxJQUFJLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDckY7YUFDRjs7Ozs7Ozs7Ozs7UUFNTywyREFBc0I7Ozs7OztZQUE5QixVQUErQixJQUFPO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN0Qzs7Ozs7UUFFTyxrREFBYTs7OztZQUFyQixVQUFzQixTQUFpQjtnQkFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7YUFDakM7Ozs7UUFFRCx1REFBa0I7OztZQUFsQjtnQkFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQzthQUMxQjs7b0JBdExGVyxnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSwrQkFBK0I7d0JBQ3pDLFFBQVEsRUFBRSx1b0JBY1g7d0JBQ0MsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUMzQixhQUFhLEVBQUVDLHdCQUFpQixDQUFDLElBQUk7d0JBQ3JDLGVBQWUsRUFBRUMsOEJBQXVCLENBQUMsTUFBTTtxQkFDaEQ7Ozs7d0JBaENDLGVBQWUsdUJBc0dGekIsZUFBUTt3REFDUkEsZUFBUSxZQUFJQyxhQUFNLFNBQUMsb0JBQW9COzs7OzJCQXBFbkQ4QixZQUFLO3FDQUVMRCxhQUFNO2lDQUtOQyxZQUFLOytCQXNCTEEsWUFBSztpQ0FhTEEsWUFBSztxQ0FHTEQsYUFBTTs7UUFvSFQsaUNBQUM7S0FBQTs7Ozs7Ozs7Ozs7QUMxTEQ7UUFzRkUsbUNBQStCLFFBQTRCLEVBQ0csWUFBZ0M7WUFEL0QsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7WUFDRyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7WUEvRHBGLG1CQUFjLEdBQUcsSUFBSWxCLG1CQUFZLEVBQVEsQ0FBQztZQUUzQyxTQUFJLEdBQTJDLE1BQU0sQ0FBQzs7WUF5Q3JELG1CQUFjLEdBQUcsSUFBSUEsbUJBQVksRUFBSyxDQUFDO1lBcUIvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsTUFBTSwwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3JEO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLE1BQU0sMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUMxRDtZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQztRQXBFRCxzQkFDSSxpREFBVTs7Ozs7Z0JBRGQ7Z0JBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7O2dCQUVELFVBQWUsS0FBUTs7b0JBQ2pCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVc7b0JBQ25DLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7aUJBTWQ7YUFDRjs7O1dBZEE7UUFtQkQsc0JBQ0ksK0NBQVE7Ozs7O2dCQURaO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2Qjs7OztnQkFFRCxVQUFhLEtBQVE7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEU7OztXQUxBOzs7O1FBNkNELHNEQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkOzs7Ozs7O1FBR0Qsa0RBQWM7Ozs7O1lBQWQsVUFBZSxLQUFhOztvQkFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUUzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzdCOzs7Ozs7UUFHTyx5Q0FBSzs7OztZQUFiO2dCQUFBLGlCQVNDO2dCQVJDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7b0JBRXpELFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O2dCQUVyRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQzFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ2pFOzs7Ozs7Ozs7OztRQU1PLDBEQUFzQjs7Ozs7O1lBQTlCLFVBQStCLElBQU87Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN2Qzs7Ozs7Ozs7UUFHTyx1REFBbUI7Ozs7OztZQUEzQixVQUE0QixLQUFhLEVBQUUsU0FBaUI7O29CQUN0RCxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0MsT0FBTyxJQUFJLDZCQUE2QixDQUN0QyxLQUFLLEVBQUUsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNqRjs7Ozs7OztRQUdPLG1EQUFlOzs7OztZQUF2QixVQUF3QixLQUFhO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDcEIsT0FBTyxJQUFJLENBQUM7aUJBQ2I7O29CQUVHLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztnQkFHM0MsS0FBSyxJQUFJLElBQUksR0FBRyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUM5RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUNsRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3pCLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO2dCQUVELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7Ozs7Ozs7Ozs7UUFNRCxzREFBa0I7Ozs7Ozs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7YUFDMUI7O29CQWhMRlcsZ0JBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsOEJBQThCO3dCQUN4QyxRQUFRLEVBQUUsa3BCQWVYO3dCQUNDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQzt3QkFDM0IsYUFBYSxFQUFFQyx3QkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxlQUFlLEVBQUVDLDhCQUF1QixDQUFDLE1BQU07cUJBQ2hEOzs7O3dCQTVCQyxlQUFlLHVCQTZGRnpCLGVBQVE7d0RBQ1JBLGVBQVEsWUFBSUMsYUFBTSxTQUFDLG9CQUFvQjs7OztxQ0EvRG5ENkIsYUFBTTsyQkFFTkMsWUFBSztpQ0FHTEEsWUFBSzsrQkFzQkxBLFlBQUs7aUNBYUxBLFlBQUs7cUNBR0xELGFBQU07O1FBOEdULGdDQUFDO0tBQUE7Ozs7OztBQzVNRDtRQXFCQTtTQW9DQzs7b0JBcENBM0IsZUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUG1ELG1CQUFZOzRCQUNaQyx3QkFBZTs0QkFDZkMsd0JBQWU7NEJBQ2ZDLHNCQUFhOzRCQUNiQyxxQkFBYTs0QkFDYkMsZUFBVTt5QkFDWDt3QkFDRCxlQUFlLEVBQUU7NEJBQ2Ysd0JBQXdCO3lCQUN6Qjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1oseUJBQXlCOzRCQUN6Qiw2QkFBNkI7NEJBQzdCLHNCQUFzQjs0QkFDdEIsaUJBQWlCOzRCQUNqQix1QkFBdUI7NEJBQ3ZCLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4QiwwQkFBMEI7NEJBQzFCLHlCQUF5Qjt5QkFDMUI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLHlCQUF5Qjs0QkFDekIsNkJBQTZCOzRCQUM3QixzQkFBc0I7NEJBQ3RCLGlCQUFpQjs0QkFDakIsdUJBQXVCOzRCQUN2QixzQkFBc0I7NEJBQ3RCLHdCQUF3Qjs0QkFDeEIsMEJBQTBCOzRCQUMxQix5QkFBeUI7eUJBQzFCO3FCQUNGOztRQUVELDhCQUFDO0tBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==