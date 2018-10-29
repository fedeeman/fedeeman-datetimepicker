import { Inject, Injectable, Optional, NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { DatetimeAdapter, MAT_DATETIME_FORMATS } from 'fedeeman-datetimepicker/core';
import * as moment_ from 'moment';
import { MatMomentDateModule, MomentDateModule } from '@angular/material-moment-adapter';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
/**
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
class MomentDatetimeAdapter extends DatetimeAdapter {
    /**
     * @param {?} matDateLocale
     * @param {?} _delegate
     */
    constructor(matDateLocale, _delegate) {
        super(_delegate);
        this.setLocale(matDateLocale || moment.locale());
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        super.setLocale(locale);
        /** @type {?} */
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
    /**
     * @param {?} date
     * @return {?}
     */
    getHour(date) {
        return super.clone(date).hour();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMinute(date) {
        return super.clone(date).minute();
    }
    /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    isInNextMonth(startDate, endDate) {
        /** @type {?} */
        const nextMonth = this.getDateInNextMonth(startDate);
        return super.sameMonthAndYear(nextMonth, endDate);
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
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
        /** @type {?} */
        const result = moment({ year, month, date, hour, minute });
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateInNextMonth(date) {
        return super.clone(date).date(1).add({ month: 1 });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getFirstDateOfMonth(date) {
        return super.clone(date).startOf("month");
    }
    /**
     * @return {?}
     */
    getHourNames() {
        return this._localeData.hours;
    }
    /**
     * @return {?}
     */
    getMinuteNames() {
        return this._localeData.minutes;
    }
    /**
     * @param {?} date
     * @param {?} hours
     * @return {?}
     */
    addCalendarHours(date, hours) {
        return super.clone(date).add({ hours });
    }
    /**
     * @param {?} date
     * @param {?} minutes
     * @return {?}
     */
    addCalendarMinutes(date, minutes) {
        return super.clone(date).add({ minutes });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        return this._delegate.deserialize(value);
    }
}
MomentDatetimeAdapter.decorators = [
    { type: Injectable },
];
MomentDatetimeAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
    { type: DateAdapter }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MomentDatetimeModule {
}
MomentDatetimeModule.decorators = [
    { type: NgModule, args: [{
                imports: [MomentDateModule],
                providers: [
                    {
                        provide: DatetimeAdapter,
                        useClass: MomentDatetimeAdapter
                    }
                ]
            },] },
];
const ɵ0 = MAT_MOMENT_DATETIME_FORMATS;
class MatMomentDatetimeModule {
}
MatMomentDatetimeModule.decorators = [
    { type: NgModule, args: [{
                imports: [MomentDatetimeModule, MatMomentDateModule],
                providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0 }]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MomentDatetimeModule, MatMomentDatetimeModule, MomentDatetimeAdapter, MAT_MOMENT_DATETIME_FORMATS };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXItbW9tZW50LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9tb21lbnQvYWRhcHRlci9tb21lbnQtZGF0ZXRpbWUtYWRhcHRlci50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvbW9tZW50L2FkYXB0ZXIvbW9tZW50LWRhdGV0aW1lLWZvcm1hdHMudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL21vbWVudC9hZGFwdGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFX0xPQ0FMRVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmZ1bmN0aW9uIHJhbmdlPFQ+KGxlbmd0aDogbnVtYmVyLCB2YWx1ZUZ1bmN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSB7XHJcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhbHVlc0FycmF5W2ldID0gdmFsdWVGdW5jdGlvbihpKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlc0FycmF5O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb21lbnREYXRldGltZUFkYXB0ZXIgZXh0ZW5kcyBEYXRldGltZUFkYXB0ZXI8TW9tZW50PiB7XHJcblxyXG4gIHByaXZhdGUgX2xvY2FsZURhdGE6IHtcclxuICAgIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIsXHJcbiAgICBsb25nTW9udGhzOiBzdHJpbmdbXSxcclxuICAgIHNob3J0TW9udGhzOiBzdHJpbmdbXSxcclxuICAgIGRhdGVzOiBzdHJpbmdbXSxcclxuICAgIGhvdXJzOiBzdHJpbmdbXSxcclxuICAgIG1pbnV0ZXM6IHN0cmluZ1tdLFxyXG4gICAgbG9uZ0RheXNPZldlZWs6IHN0cmluZ1tdLFxyXG4gICAgc2hvcnREYXlzT2ZXZWVrOiBzdHJpbmdbXSxcclxuICAgIG5hcnJvd0RheXNPZldlZWs6IHN0cmluZ1tdXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURV9MT0NBTEUpIG1hdERhdGVMb2NhbGU6IHN0cmluZywgX2RlbGVnYXRlOiBEYXRlQWRhcHRlcjxNb21lbnQ+KSB7XHJcbiAgICBzdXBlcihfZGVsZWdhdGUpO1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobWF0RGF0ZUxvY2FsZSB8fCBtb21lbnQubG9jYWxlKCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlci5zZXRMb2NhbGUobG9jYWxlKTtcclxuXHJcbiAgICBjb25zdCBtb21lbnRMb2NhbGVEYXRhID0gbW9tZW50LmxvY2FsZURhdGEobG9jYWxlKTtcclxuICAgIHRoaXMuX2xvY2FsZURhdGEgPSB7XHJcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLmZpcnN0RGF5T2ZXZWVrKCksXHJcbiAgICAgIGxvbmdNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzKCksXHJcbiAgICAgIHNob3J0TW9udGhzOiBtb21lbnRMb2NhbGVEYXRhLm1vbnRoc1Nob3J0KCksXHJcbiAgICAgIGRhdGVzOiByYW5nZSgzMSwgKGkpID0+IHN1cGVyLmNyZWF0ZURhdGUoMjAxNywgMCwgaSArIDEpLmZvcm1hdChcIkRcIikpLFxyXG4gICAgICBob3VyczogcmFuZ2UoMjQsIChpKSA9PiB0aGlzLmNyZWF0ZURhdGV0aW1lKDIwMTcsIDAsIDEsIGksIDApLmZvcm1hdChcIkhcIikpLFxyXG4gICAgICBtaW51dGVzOiByYW5nZSg2MCwgKGkpID0+IHRoaXMuY3JlYXRlRGF0ZXRpbWUoMjAxNywgMCwgMSwgMSwgaSkuZm9ybWF0KFwibVwiKSksXHJcbiAgICAgIGxvbmdEYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzKCksXHJcbiAgICAgIHNob3J0RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c1Nob3J0KCksXHJcbiAgICAgIG5hcnJvd0RheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXNNaW4oKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldEhvdXIoZGF0ZTogTW9tZW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5ob3VyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGUoZGF0ZTogTW9tZW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5taW51dGUoKTtcclxuICB9XHJcblxyXG4gIGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBNb21lbnQsIGVuZERhdGU6IE1vbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgbmV4dE1vbnRoID0gdGhpcy5nZXREYXRlSW5OZXh0TW9udGgoc3RhcnREYXRlKTtcclxuICAgIHJldHVybiBzdXBlci5zYW1lTW9udGhBbmRZZWFyKG5leHRNb250aCwgZW5kRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEYXRldGltZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IE1vbWVudCB7XHJcbiAgICAvLyBDaGVjayBmb3IgaW52YWxpZCBtb250aCBhbmQgZGF0ZSAoZXhjZXB0IHVwcGVyIGJvdW5kIG9uIGRhdGUgd2hpY2ggd2UgaGF2ZSB0byBjaGVjayBhZnRlclxyXG4gICAgLy8gY3JlYXRpbmcgdGhlIERhdGUpLlxyXG4gICAgaWYgKG1vbnRoIDwgMCB8fCBtb250aCA+IDExKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1vbnRoIGluZGV4IFwiJHttb250aH1cIi4gTW9udGggaW5kZXggaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMTEuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGUgPCAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChob3VyIDwgMCB8fCBob3VyID4gMjMpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgaG91ciBcIiR7aG91cn1cIi4gSG91ciBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyMy5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWludXRlIDwgMCB8fCBtaW51dGUgPiA1OSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBtaW51dGUgXCIke21pbnV0ZX1cIi4gTWludXRlIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDU5LmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IG1vbWVudCh7eWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBtb21lbnQoe3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGV9KTtcclxuXHJcbiAgICAvLyBJZiB0aGUgcmVzdWx0IGlzbid0IHZhbGlkLCB0aGUgZGF0ZSBtdXN0IGhhdmUgYmVlbiBvdXQgb2YgYm91bmRzIGZvciB0aGlzIG1vbnRoLlxyXG4gICAgaWYgKCFyZXN1bHQuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGVJbk5leHRNb250aChkYXRlOiBNb21lbnQpIHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5kYXRlKDEpLmFkZCh7bW9udGg6IDF9KTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RGF0ZU9mTW9udGgoZGF0ZTogTW9tZW50KTogTW9tZW50IHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5zdGFydE9mKFwibW9udGhcIik7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZURhdGEuaG91cnM7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF0YS5taW51dGVzO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBNb21lbnQsIGhvdXJzOiBudW1iZXIpOiBNb21lbnQge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmFkZCh7aG91cnN9KTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBNb21lbnQsIG1pbnV0ZXM6IG51bWJlcik6IE1vbWVudCB7XHJcbiAgICByZXR1cm4gc3VwZXIuY2xvbmUoZGF0ZSkuYWRkKHttaW51dGVzfSk7XHJcbiAgfVxyXG5cclxuICBkZXNlcmlhbGl6ZSh2YWx1ZTogYW55KTogTW9tZW50IHwgbnVsbCB7XHJcbiAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdERhdGV0aW1lRm9ybWF0cyB9IGZyb20gXCJmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFUX01PTUVOVF9EQVRFVElNRV9GT1JNQVRTOiBNYXREYXRldGltZUZvcm1hdHMgPSB7XHJcbiAgcGFyc2U6IHtcclxuICAgIGRhdGVJbnB1dDogXCJMXCIsXHJcbiAgICBtb250aElucHV0OiBcIk1NTU1cIixcclxuICAgIHRpbWVJbnB1dDogXCJMVFwiLFxyXG4gICAgZGF0ZXRpbWVJbnB1dDogXCJMIExUXCJcclxuICB9LFxyXG4gIGRpc3BsYXk6IHtcclxuICAgIGRhdGVJbnB1dDogXCJMXCIsXHJcbiAgICBtb250aElucHV0OiBcIk1NTU1cIixcclxuICAgIGRhdGV0aW1lSW5wdXQ6IFwiTCBMVFwiLFxyXG4gICAgdGltZUlucHV0OiBcIkxUXCIsXHJcbiAgICBtb250aFllYXJMYWJlbDogXCJNTU0gWVlZWVwiLFxyXG4gICAgZGF0ZUExMXlMYWJlbDogXCJMTFwiLFxyXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiBcIk1NTU0gWVlZWVwiLFxyXG4gICAgcG9wdXBIZWFkZXJEYXRlTGFiZWw6IFwiZGRkLCBERCBNTU1cIlxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1hdE1vbWVudERhdGVNb2R1bGUsXHJcbiAgTW9tZW50RGF0ZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlclwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGV0aW1lQWRhcHRlcixcclxuICBNQVRfREFURVRJTUVfRk9STUFUU1xyXG59IGZyb20gXCJmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vbWVudERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuL21vbWVudC1kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURVRJTUVfRk9STUFUUyB9IGZyb20gXCIuL21vbWVudC1kYXRldGltZS1mb3JtYXRzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tb21lbnQtZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tb21lbnQtZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTW9tZW50RGF0ZU1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IERhdGV0aW1lQWRhcHRlcixcclxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGV0aW1lQWRhcHRlclxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vbWVudERhdGV0aW1lTW9kdWxlIHtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTW9tZW50RGF0ZXRpbWVNb2R1bGUsIE1hdE1vbWVudERhdGVNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRfREFURVRJTUVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURVRJTUVfRk9STUFUU31dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRNb21lbnREYXRldGltZU1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtNQWFNLE1BQU0sR0FBRyxPQUFPOzs7Ozs7O0FBRXRCLGVBQWtCLE1BQWMsRUFBRSxhQUFtQzs7VUFDN0QsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtR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