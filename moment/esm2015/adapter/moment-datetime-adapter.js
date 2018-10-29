/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from "@angular/core";
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material";
import { DatetimeAdapter } from "fedeeman-datetimepicker/core";
import * as moment_ from "moment";
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
export class MomentDatetimeAdapter extends DatetimeAdapter {
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
if (false) {
    /** @type {?} */
    MomentDatetimeAdapter.prototype._localeData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGV0aW1lLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9tb21lbnQvIiwic291cmNlcyI6WyJhZGFwdGVyL21vbWVudC1kYXRldGltZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUU1QixNQUFNLEdBQUcsT0FBTzs7Ozs7OztBQUV0QixlQUFrQixNQUFjLEVBQUUsYUFBbUM7O1VBQzdELFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQztJQUNELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFHRCxNQUFNLDRCQUE2QixTQUFRLGVBQXVCOzs7OztJQWNoRSxZQUFpRCxhQUFxQixFQUFFLFNBQThCO1FBQ3BHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7O2NBRWxCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMs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SW5qZWN0YWJsZSxcclxuICBPcHRpb25hbFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZUFkYXB0ZXIsXHJcbiAgTUFUX0RBVEVfTE9DQUxFXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCJmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcclxuICBjb25zdCB2YWx1ZXNBcnJheSA9IEFycmF5KGxlbmd0aCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWVzQXJyYXk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vbWVudERhdGV0aW1lQWRhcHRlciBleHRlbmRzIERhdGV0aW1lQWRhcHRlcjxNb21lbnQ+IHtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxlRGF0YToge1xyXG4gICAgZmlyc3REYXlPZldlZWs6IG51bWJlcixcclxuICAgIGxvbmdNb250aHM6IHN0cmluZ1tdLFxyXG4gICAgc2hvcnRNb250aHM6IHN0cmluZ1tdLFxyXG4gICAgZGF0ZXM6IHN0cmluZ1tdLFxyXG4gICAgaG91cnM6IHN0cmluZ1tdLFxyXG4gICAgbWludXRlczogc3RyaW5nW10sXHJcbiAgICBsb25nRGF5c09mV2Vlazogc3RyaW5nW10sXHJcbiAgICBzaG9ydERheXNPZldlZWs6IHN0cmluZ1tdLFxyXG4gICAgbmFycm93RGF5c09mV2Vlazogc3RyaW5nW11cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPE1vbWVudD4pIHtcclxuICAgIHN1cGVyKF9kZWxlZ2F0ZSk7XHJcbiAgICB0aGlzLnNldExvY2FsZShtYXREYXRlTG9jYWxlIHx8IG1vbWVudC5sb2NhbGUoKSk7XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnNldExvY2FsZShsb2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IG1vbWVudExvY2FsZURhdGEgPSBtb21lbnQubG9jYWxlRGF0YShsb2NhbGUpO1xyXG4gICAgdGhpcy5fbG9jYWxlRGF0YSA9IHtcclxuICAgICAgZmlyc3REYXlPZldlZWs6IG1vbWVudExvY2FsZURhdGEuZmlyc3REYXlPZldlZWsoKSxcclxuICAgICAgbG9uZ01vbnRoczogbW9tZW50TG9jYWxlRGF0YS5tb250aHMoKSxcclxuICAgICAgc2hvcnRNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzU2hvcnQoKSxcclxuICAgICAgZGF0ZXM6IHJhbmdlKDMxLCAoaSkgPT4gc3VwZXIuY3JlYXRlRGF0ZSgyMDE3LCAwLCBpICsgMSkuZm9ybWF0KFwiRFwiKSksXHJcbiAgICAgIGhvdXJzOiByYW5nZSgyNCwgKGkpID0+IHRoaXMuY3JlYXRlRGF0ZXRpbWUoMjAxNywgMCwgMSwgaSwgMCkuZm9ybWF0KFwiSFwiKSksXHJcbiAgICAgIG1pbnV0ZXM6IHJhbmdlKDYwLCAoaSkgPT4gdGhpcy5jcmVhdGVEYXRldGltZSgyMDE3LCAwLCAxLCAxLCBpKS5mb3JtYXQoXCJtXCIpKSxcclxuICAgICAgbG9uZ0RheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXMoKSxcclxuICAgICAgc2hvcnREYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzU2hvcnQoKSxcclxuICAgICAgbmFycm93RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c01pbigpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cihkYXRlOiBNb21lbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmhvdXIoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZShkYXRlOiBNb21lbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLm1pbnV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNJbk5leHRNb250aChzdGFydERhdGU6IE1vbWVudCwgZW5kRGF0ZTogTW9tZW50KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmdldERhdGVJbk5leHRNb250aChzdGFydERhdGUpO1xyXG4gICAgcmV0dXJuIHN1cGVyLnNhbWVNb250aEFuZFllYXIobmV4dE1vbnRoLCBlbmREYXRlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURhdGV0aW1lKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogTW9tZW50IHtcclxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXHJcbiAgICAvLyBjcmVhdGluZyB0aGUgRGF0ZSkuXHJcbiAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZSA8IDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvdXIgPCAwIHx8IGhvdXIgPiAyMykge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBob3VyIFwiJHtob3VyfVwiLiBIb3VyIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDIzLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IDU5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gbW9tZW50KHt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlfSkubG9jYWxlKHRoaXMubG9jYWxlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbWVudCh7eWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZX0pO1xyXG5cclxuICAgIC8vIElmIHRoZSByZXN1bHQgaXNuJ3QgdmFsaWQsIHRoZSBkYXRlIG11c3QgaGF2ZSBiZWVuIG91dCBvZiBib3VuZHMgZm9yIHRoaXMgbW9udGguXHJcbiAgICBpZiAoIXJlc3VsdC5pc1ZhbGlkKCkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIiBmb3IgbW9udGggd2l0aCBpbmRleCBcIiR7bW9udGh9XCIuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZUluTmV4dE1vbnRoKGRhdGU6IE1vbWVudCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmRhdGUoMSkuYWRkKHttb250aDogMX0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBNb21lbnQpOiBNb21lbnQge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLnN0YXJ0T2YoXCJtb250aFwiKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXJOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF0YS5ob3VycztcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLm1pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IE1vbWVudCwgaG91cnM6IG51bWJlcik6IE1vbWVudCB7XHJcbiAgICByZXR1cm4gc3VwZXIuY2xvbmUoZGF0ZSkuYWRkKHtob3Vyc30pO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJNaW51dGVzKGRhdGU6IE1vbWVudCwgbWludXRlczogbnVtYmVyKTogTW9tZW50IHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5hZGQoe21pbnV0ZXN9KTtcclxuICB9XHJcblxyXG4gIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBNb21lbnQgfCBudWxsIHtcclxuICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICB9XHJcbn1cclxuIl19