import { __decorate, __param, __metadata } from 'tslib';
import { Optional, Inject, Injectable, NgModule } from '@angular/core';
import { MomentDateModule, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from 'fedeeman-datetimepicker/core';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import * as moment_ from 'moment';

const moment = moment_;
function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
let MomentDatetimeAdapter = class MomentDatetimeAdapter extends DatetimeAdapter {
    constructor(matDateLocale, _delegate) {
        super(_delegate);
        this.setLocale(matDateLocale || moment.locale());
    }
    setLocale(locale) {
        super.setLocale(locale);
        const momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, (i) => super.createDate(2017, 0, i + 1).format("D")),
            hours: range(24, (i) => this.createDatetime(2017, 0, 1, i, 0).format("H")),
            minutes: range(60, (i) => this.createDatetime(2017, 0, 1, 1, i).format("m")),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin()
        };
    }
    getHour(date) {
        return super.clone(date).hour();
    }
    getMinute(date) {
        return super.clone(date).minute();
    }
    isInNextMonth(startDate, endDate) {
        const nextMonth = this.getDateInNextMonth(startDate);
        return super.sameMonthAndYear(nextMonth, endDate);
    }
    createDatetime(year, month, date, hour, minute) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        if (hour < 0 || hour > 23) {
            throw Error(`Invalid hour "${hour}". Hour has to be between 0 and 23.`);
        }
        if (minute < 0 || minute > 59) {
            throw Error(`Invalid minute "${minute}". Minute has to be between 0 and 59.`);
        }
        // const result = moment({year, month, date, hour, minute}).locale(this.locale);
        const result = moment({ year, month, date, hour, minute });
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    getDateInNextMonth(date) {
        return super.clone(date).date(1).add({ month: 1 });
    }
    getFirstDateOfMonth(date) {
        return super.clone(date).startOf("month");
    }
    getHourNames() {
        return this._localeData.hours;
    }
    getMinuteNames() {
        return this._localeData.minutes;
    }
    addCalendarHours(date, hours) {
        return super.clone(date).add({ hours });
    }
    addCalendarMinutes(date, minutes) {
        return super.clone(date).add({ minutes });
    }
    deserialize(value) {
        return this._delegate.deserialize(value);
    }
};
MomentDatetimeAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
    { type: DateAdapter }
];
MomentDatetimeAdapter = __decorate([
    Injectable(),
    __param(0, Optional()), __param(0, Inject(MAT_DATE_LOCALE)),
    __metadata("design:paramtypes", [String, DateAdapter])
], MomentDatetimeAdapter);

const MAT_MOMENT_DATETIME_FORMATS = {
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

let MomentDatetimeModule = class MomentDatetimeModule {
};
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
const ɵ0 = MAT_MOMENT_DATETIME_FORMATS;
let MatMomentDatetimeModule = class MatMomentDatetimeModule {
};
MatMomentDatetimeModule = __decorate([
    NgModule({
        imports: [MomentDatetimeModule, MatMomentDateModule],
        providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0 }]
    })
], MatMomentDatetimeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { MAT_MOMENT_DATETIME_FORMATS, MatMomentDatetimeModule, MomentDatetimeAdapter, MomentDatetimeModule, ɵ0 };
//# sourceMappingURL=fedeeman-datetimepicker-moment.js.map
