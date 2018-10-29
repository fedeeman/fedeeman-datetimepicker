(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('fedeeman-datetimepicker/core'), require('moment'), require('@angular/material-moment-adapter')) :
    typeof define === 'function' && define.amd ? define('fedeeman-datetimepicker/moment', ['exports', '@angular/core', '@angular/material', 'fedeeman-datetimepicker/core', 'moment', '@angular/material-moment-adapter'], factory) :
    (factory((global['fedeeman-datetimepicker'] = global['fedeeman-datetimepicker'] || {}, global['fedeeman-datetimepicker'].moment = {}),global.ng.core,global.ng.material,null,null,global.ng['material-moment-adapter']));
}(this, (function (exports,core,material,core$1,moment_,materialMomentAdapter) { 'use strict';

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
    /** @type {?} */
    var moment = moment_;
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
    var MomentDatetimeAdapter = /** @class */ (function (_super) {
        __extends(MomentDatetimeAdapter, _super);
        function MomentDatetimeAdapter(matDateLocale, _delegate) {
            var _this = _super.call(this, _delegate) || this;
            _this.setLocale(matDateLocale || moment.locale());
            return _this;
        }
        /**
         * @param {?} locale
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.setLocale = /**
         * @param {?} locale
         * @return {?}
         */
            function (locale) {
                var _this = this;
                _super.prototype.setLocale.call(this, locale);
                /** @type {?} */
                var momentLocaleData = moment.localeData(locale);
                this._localeData = {
                    firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
                    longMonths: momentLocaleData.months(),
                    shortMonths: momentLocaleData.monthsShort(),
                    dates: range(31, function (i) { return _super.prototype.createDate.call(_this, 2017, 0, i + 1).format("D"); }),
                    hours: range(24, function (i) { return _this.createDatetime(2017, 0, 1, i, 0).format("H"); }),
                    minutes: range(60, function (i) { return _this.createDatetime(2017, 0, 1, 1, i).format("m"); }),
                    longDaysOfWeek: momentLocaleData.weekdays(),
                    shortDaysOfWeek: momentLocaleData.weekdaysShort(),
                    narrowDaysOfWeek: momentLocaleData.weekdaysMin()
                };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.getHour = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return _super.prototype.clone.call(this, date).hour();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.getMinute = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return _super.prototype.clone.call(this, date).minute();
            };
        /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.isInNextMonth = /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
            function (startDate, endDate) {
                /** @type {?} */
                var nextMonth = this.getDateInNextMonth(startDate);
                return _super.prototype.sameMonthAndYear.call(this, nextMonth, endDate);
            };
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hour
         * @param {?} minute
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.createDatetime = /**
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
                // const result = moment({year, month, date, hour, minute}).locale(this.locale);
                /** @type {?} */
                var result = moment({ year: year, month: month, date: date, hour: hour, minute: minute });
                // If the result isn't valid, the date must have been out of bounds for this month.
                if (!result.isValid()) {
                    throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
                }
                return result;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.getDateInNextMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return _super.prototype.clone.call(this, date).date(1).add({ month: 1 });
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.getFirstDateOfMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return _super.prototype.clone.call(this, date).startOf("month");
            };
        /**
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.getHourNames = /**
         * @return {?}
         */
            function () {
                return this._localeData.hours;
            };
        /**
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.getMinuteNames = /**
         * @return {?}
         */
            function () {
                return this._localeData.minutes;
            };
        /**
         * @param {?} date
         * @param {?} hours
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.addCalendarHours = /**
         * @param {?} date
         * @param {?} hours
         * @return {?}
         */
            function (date, hours) {
                return _super.prototype.clone.call(this, date).add({ hours: hours });
            };
        /**
         * @param {?} date
         * @param {?} minutes
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.addCalendarMinutes = /**
         * @param {?} date
         * @param {?} minutes
         * @return {?}
         */
            function (date, minutes) {
                return _super.prototype.clone.call(this, date).add({ minutes: minutes });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        MomentDatetimeAdapter.prototype.deserialize = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this._delegate.deserialize(value);
            };
        MomentDatetimeAdapter.decorators = [
            { type: core.Injectable },
        ];
        MomentDatetimeAdapter.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DATE_LOCALE,] }] },
                { type: material.DateAdapter }
            ];
        };
        return MomentDatetimeAdapter;
    }(core$1.DatetimeAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAT_MOMENT_DATETIME_FORMATS = {
        parse: {
            dateInput: "L",
            monthInput: "MMMM",
            timeInput: "LT",
            datetimeInput: "L LT"
        },
        display: {
            dateInput: "L",
            monthInput: "MMMM",
            datetimeInput: "L LT",
            timeInput: "LT",
            monthYearLabel: "MMM YYYY",
            dateA11yLabel: "LL",
            monthYearA11yLabel: "MMMM YYYY",
            popupHeaderDateLabel: "ddd, DD MMM"
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MomentDatetimeModule = /** @class */ (function () {
        function MomentDatetimeModule() {
        }
        MomentDatetimeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [materialMomentAdapter.MomentDateModule],
                        providers: [
                            {
                                provide: core$1.DatetimeAdapter,
                                useClass: MomentDatetimeAdapter
                            }
                        ]
                    },] },
        ];
        return MomentDatetimeModule;
    }());
    var ɵ0 = MAT_MOMENT_DATETIME_FORMATS;
    var MatMomentDatetimeModule = /** @class */ (function () {
        function MatMomentDatetimeModule() {
        }
        MatMomentDatetimeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [MomentDatetimeModule, materialMomentAdapter.MatMomentDateModule],
                        providers: [{ provide: core$1.MAT_DATETIME_FORMATS, useValue: ɵ0 }]
                    },] },
        ];
        return MatMomentDatetimeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MomentDatetimeModule = MomentDatetimeModule;
    exports.MatMomentDatetimeModule = MatMomentDatetimeModule;
    exports.MomentDatetimeAdapter = MomentDatetimeAdapter;
    exports.MAT_MOMENT_DATETIME_FORMATS = MAT_MOMENT_DATETIME_FORMATS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXItbW9tZW50LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9tb21lbnQvYWRhcHRlci9tb21lbnQtZGF0ZXRpbWUtYWRhcHRlci50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvbW9tZW50L2FkYXB0ZXIvbW9tZW50LWRhdGV0aW1lLWZvcm1hdHMudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL21vbWVudC9hZGFwdGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBPcHRpb25hbFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZUFkYXB0ZXIsXHJcbiAgTUFUX0RBVEVfTE9DQUxFXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCJmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcclxuICBjb25zdCB2YWx1ZXNBcnJheSA9IEFycmF5KGxlbmd0aCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWVzQXJyYXk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vbWVudERhdGV0aW1lQWRhcHRlciBleHRlbmRzIERhdGV0aW1lQWRhcHRlcjxNb21lbnQ+IHtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxlRGF0YToge1xyXG4gICAgZmlyc3REYXlPZldlZWs6IG51bWJlcixcclxuICAgIGxvbmdNb250aHM6IHN0cmluZ1tdLFxyXG4gICAgc2hvcnRNb250aHM6IHN0cmluZ1tdLFxyXG4gICAgZGF0ZXM6IHN0cmluZ1tdLFxyXG4gICAgaG91cnM6IHN0cmluZ1tdLFxyXG4gICAgbWludXRlczogc3RyaW5nW10sXHJcbiAgICBsb25nRGF5c09mV2Vlazogc3RyaW5nW10sXHJcbiAgICBzaG9ydERheXNPZldlZWs6IHN0cmluZ1tdLFxyXG4gICAgbmFycm93RGF5c09mV2Vlazogc3RyaW5nW11cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPE1vbWVudD4pIHtcclxuICAgIHN1cGVyKF9kZWxlZ2F0ZSk7XHJcbiAgICB0aGlzLnNldExvY2FsZShtYXREYXRlTG9jYWxlIHx8IG1vbWVudC5sb2NhbGUoKSk7XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnNldExvY2FsZShsb2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IG1vbWVudExvY2FsZURhdGEgPSBtb21lbnQubG9jYWxlRGF0YShsb2NhbGUpO1xyXG4gICAgdGhpcy5fbG9jYWxlRGF0YSA9IHtcclxuICAgICAgZmlyc3REYXlPZldlZWs6IG1vbWVudExvY2FsZURhdGEuZmlyc3REYXlPZldlZWsoKSxcclxuICAgICAgbG9uZ01vbnRoczogbW9tZW50TG9jYWxlRGF0YS5tb250aHMoKSxcclxuICAgICAgc2hvcnRNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzU2hvcnQoKSxcclxuICAgICAgZGF0ZXM6IHJhbmdlKDMxLCAoaSkgPT4gc3VwZXIuY3JlYXRlRGF0ZSgyMDE3LCAwLCBpICsgMSkuZm9ybWF0KFwiRFwiKSksXHJcbiAgICAgIGhvdXJzOiByYW5nZSgyNCwgKGkpID0+IHRoaXMuY3JlYXRlRGF0ZXRpbWUoMjAxNywgMCwgMSwgaSwgMCkuZm9ybWF0KFwiSFwiKSksXHJcbiAgICAgIG1pbnV0ZXM6IHJhbmdlKDYwLCAoaSkgPT4gdGhpcy5jcmVhdGVEYXRldGltZSgyMDE3LCAwLCAxLCAxLCBpKS5mb3JtYXQoXCJtXCIpKSxcclxuICAgICAgbG9uZ0RheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXMoKSxcclxuICAgICAgc2hvcnREYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzU2hvcnQoKSxcclxuICAgICAgbmFycm93RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c01pbigpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cihkYXRlOiBNb21lbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmhvdXIoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZShkYXRlOiBNb21lbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLm1pbnV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNJbk5leHRNb250aChzdGFydERhdGU6IE1vbWVudCwgZW5kRGF0ZTogTW9tZW50KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmdldERhdGVJbk5leHRNb250aChzdGFydERhdGUpO1xyXG4gICAgcmV0dXJuIHN1cGVyLnNhbWVNb250aEFuZFllYXIobmV4dE1vbnRoLCBlbmREYXRlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURhdGV0aW1lKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogTW9tZW50IHtcclxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXHJcbiAgICAvLyBjcmVhdGluZyB0aGUgRGF0ZSkuXHJcbiAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZSA8IDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvdXIgPCAwIHx8IGhvdXIgPiAyMykge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBob3VyIFwiJHtob3VyfVwiLiBIb3VyIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDIzLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IDU5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gbW9tZW50KHt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlfSkubG9jYWxlKHRoaXMubG9jYWxlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbWVudCh7eWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZX0pO1xyXG5cclxuICAgIC8vIElmIHRoZSByZXN1bHQgaXNuJ3QgdmFsaWQsIHRoZSBkYXRlIG11c3QgaGF2ZSBiZWVuIG91dCBvZiBib3VuZHMgZm9yIHRoaXMgbW9udGguXHJcbiAgICBpZiAoIXJlc3VsdC5pc1ZhbGlkKCkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIiBmb3IgbW9udGggd2l0aCBpbmRleCBcIiR7bW9udGh9XCIuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZUluTmV4dE1vbnRoKGRhdGU6IE1vbWVudCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmRhdGUoMSkuYWRkKHttb250aDogMX0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBNb21lbnQpOiBNb21lbnQge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLnN0YXJ0T2YoXCJtb250aFwiKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXJOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF0YS5ob3VycztcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLm1pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IE1vbWVudCwgaG91cnM6IG51bWJlcik6IE1vbWVudCB7XHJcbiAgICByZXR1cm4gc3VwZXIuY2xvbmUoZGF0ZSkuYWRkKHtob3Vyc30pO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJNaW51dGVzKGRhdGU6IE1vbWVudCwgbWludXRlczogbnVtYmVyKTogTW9tZW50IHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5hZGQoe21pbnV0ZXN9KTtcclxuICB9XHJcblxyXG4gIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBNb21lbnQgfCBudWxsIHtcclxuICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0RGF0ZXRpbWVGb3JtYXRzIH0gZnJvbSBcImZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfTU9NRU5UX0RBVEVUSU1FX0ZPUk1BVFM6IE1hdERhdGV0aW1lRm9ybWF0cyA9IHtcclxuICBwYXJzZToge1xyXG4gICAgZGF0ZUlucHV0OiBcIkxcIixcclxuICAgIG1vbnRoSW5wdXQ6IFwiTU1NTVwiLFxyXG4gICAgdGltZUlucHV0OiBcIkxUXCIsXHJcbiAgICBkYXRldGltZUlucHV0OiBcIkwgTFRcIlxyXG4gIH0sXHJcbiAgZGlzcGxheToge1xyXG4gICAgZGF0ZUlucHV0OiBcIkxcIixcclxuICAgIG1vbnRoSW5wdXQ6IFwiTU1NTVwiLFxyXG4gICAgZGF0ZXRpbWVJbnB1dDogXCJMIExUXCIsXHJcbiAgICB0aW1lSW5wdXQ6IFwiTFRcIixcclxuICAgIG1vbnRoWWVhckxhYmVsOiBcIk1NTSBZWVlZXCIsXHJcbiAgICBkYXRlQTExeUxhYmVsOiBcIkxMXCIsXHJcbiAgICBtb250aFllYXJBMTF5TGFiZWw6IFwiTU1NTSBZWVlZXCIsXHJcbiAgICBwb3B1cEhlYWRlckRhdGVMYWJlbDogXCJkZGQsIEREIE1NTVwiXHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0TW9tZW50RGF0ZU1vZHVsZSxcclxuICBNb21lbnREYXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZXRpbWVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTXHJcbn0gZnJvbSBcImZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9tZW50RGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vbW9tZW50LWRhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTUFUX01PTUVOVF9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSBcIi4vbW9tZW50LWRhdGV0aW1lLWZvcm1hdHNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21vbWVudC1kYXRldGltZS1hZGFwdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21vbWVudC1kYXRldGltZS1mb3JtYXRzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtNb21lbnREYXRlTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogRGF0ZXRpbWVBZGFwdGVyLFxyXG4gICAgICB1c2VDbGFzczogTW9tZW50RGF0ZXRpbWVBZGFwdGVyXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9tZW50RGF0ZXRpbWVNb2R1bGUge1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtNb21lbnREYXRldGltZU1vZHVsZSwgTWF0TW9tZW50RGF0ZU1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1BVF9EQVRFVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogTUFUX01PTUVOVF9EQVRFVElNRV9GT1JNQVRTfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE1vbWVudERhdGV0aW1lTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJJbmplY3RhYmxlIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJNQVRfREFURV9MT0NBTEUiLCJEYXRlQWRhcHRlciIsIkRhdGV0aW1lQWRhcHRlciIsIk5nTW9kdWxlIiwiTW9tZW50RGF0ZU1vZHVsZSIsIk1hdE1vbWVudERhdGVNb2R1bGUiLCJNQVRfREFURVRJTUVfRk9STUFUUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFF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