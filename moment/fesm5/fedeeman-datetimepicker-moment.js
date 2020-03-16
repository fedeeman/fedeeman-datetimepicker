import { __extends, __decorate, __param, __metadata } from 'tslib';
import { Optional, Inject, Injectable, NgModule } from '@angular/core';
import { MomentDateModule, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from 'fedeeman-datetimepicker/core';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import * as moment_ from 'moment';

var moment = moment_;
function range(length, valueFunction) {
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
    MomentDatetimeAdapter.prototype.setLocale = function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
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
    MomentDatetimeAdapter.prototype.getHour = function (date) {
        return _super.prototype.clone.call(this, date).hour();
    };
    MomentDatetimeAdapter.prototype.getMinute = function (date) {
        return _super.prototype.clone.call(this, date).minute();
    };
    MomentDatetimeAdapter.prototype.isInNextMonth = function (startDate, endDate) {
        var nextMonth = this.getDateInNextMonth(startDate);
        return _super.prototype.sameMonthAndYear.call(this, nextMonth, endDate);
    };
    MomentDatetimeAdapter.prototype.createDatetime = function (year, month, date, hour, minute) {
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
        var result = moment({ year: year, month: month, date: date, hour: hour, minute: minute });
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    MomentDatetimeAdapter.prototype.getDateInNextMonth = function (date) {
        return _super.prototype.clone.call(this, date).date(1).add({ month: 1 });
    };
    MomentDatetimeAdapter.prototype.getFirstDateOfMonth = function (date) {
        return _super.prototype.clone.call(this, date).startOf("month");
    };
    MomentDatetimeAdapter.prototype.getHourNames = function () {
        return this._localeData.hours;
    };
    MomentDatetimeAdapter.prototype.getMinuteNames = function () {
        return this._localeData.minutes;
    };
    MomentDatetimeAdapter.prototype.addCalendarHours = function (date, hours) {
        return _super.prototype.clone.call(this, date).add({ hours: hours });
    };
    MomentDatetimeAdapter.prototype.addCalendarMinutes = function (date, minutes) {
        return _super.prototype.clone.call(this, date).add({ minutes: minutes });
    };
    MomentDatetimeAdapter.prototype.deserialize = function (value) {
        return this._delegate.deserialize(value);
    };
    MomentDatetimeAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
        { type: DateAdapter }
    ]; };
    MomentDatetimeAdapter = __decorate([
        Injectable(),
        __param(0, Optional()), __param(0, Inject(MAT_DATE_LOCALE)),
        __metadata("design:paramtypes", [String, DateAdapter])
    ], MomentDatetimeAdapter);
    return MomentDatetimeAdapter;
}(DatetimeAdapter));

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

var MomentDatetimeModule = /** @class */ (function () {
    function MomentDatetimeModule() {
    }
    MomentDatetimeModule = __decorate([
        NgModule({
            imports: [MomentDateModule],
            providers: [
                {
                    provide: DatetimeAdapter,
                    useClass: MomentDatetimeAdapter
                }
            ]
        })
    ], MomentDatetimeModule);
    return MomentDatetimeModule;
}());
var ɵ0 = MAT_MOMENT_DATETIME_FORMATS;
var MatMomentDatetimeModule = /** @class */ (function () {
    function MatMomentDatetimeModule() {
    }
    MatMomentDatetimeModule = __decorate([
        NgModule({
            imports: [MomentDatetimeModule, MatMomentDateModule],
            providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0 }]
        })
    ], MatMomentDatetimeModule);
    return MatMomentDatetimeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { MAT_MOMENT_DATETIME_FORMATS, MatMomentDatetimeModule, MomentDatetimeAdapter, MomentDatetimeModule, ɵ0 };
//# sourceMappingURL=fedeeman-datetimepicker-moment.js.map
