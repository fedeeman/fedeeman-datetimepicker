/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from "@angular/core";
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material";
import { DatetimeAdapter } from "fedeeman-datetimepicker/core";
import * as moment_ from "moment";
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
    tslib_1.__extends(MomentDatetimeAdapter, _super);
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
        { type: Injectable },
    ];
    MomentDatetimeAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
        { type: DateAdapter }
    ]; };
    return MomentDatetimeAdapter;
}(DatetimeAdapter));
export { MomentDatetimeAdapter };
if (false) {
    /** @type {?} */
    MomentDatetimeAdapter.prototype._localeData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGV0aW1lLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9tb21lbnQvIiwic291cmNlcyI6WyJhZGFwdGVyL21vbWVudC1kYXRldGltZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7SUFFNUIsTUFBTSxHQUFHLE9BQU87Ozs7Ozs7QUFFdEIsZUFBa0IsTUFBYyxFQUFFLGFBQW1DOztRQUM3RCxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkM7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBRUQ7SUFDMkMsaURBQXVCO0lBY2hFLCtCQUFpRCxhQUFxQixFQUFFLFNBQThCO1FBQXRHLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBRWpCO1FBREMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7O0lBQ25ELENBQUM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFBeEIsaUJBZUM7UUFkQyxpQkFBTSxTQUFTLFlBQUMsTUFBTSxDQUFDLENBQUM7O1lBRWxCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxVQUFV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QyxDQUFDO0lBQzNDLENBQUM7O2dCQTFHSCxVQUFVOzs7NkNBZUksUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlO2dCQWhDL0MsV0FBVzs7SUE0SGIsNEJBQUM7Q0FBQSxBQTNHRCxDQUMyQyxlQUFlLEdBMEd6RDtTQTFHWSxxQkFBcUI7OztJQUVoQyw0Q0FVRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFX0xPQ0FMRVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmZ1bmN0aW9uIHJhbmdlPFQ+KGxlbmd0aDogbnVtYmVyLCB2YWx1ZUZ1bmN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSB7XHJcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhbHVlc0FycmF5W2ldID0gdmFsdWVGdW5jdGlvbihpKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlc0FycmF5O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb21lbnREYXRldGltZUFkYXB0ZXIgZXh0ZW5kcyBEYXRldGltZUFkYXB0ZXI8TW9tZW50PiB7XHJcblxyXG4gIHByaXZhdGUgX2xvY2FsZURhdGE6IHtcclxuICAgIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIsXHJcbiAgICBsb25nTW9udGhzOiBzdHJpbmdbXSxcclxuICAgIHNob3J0TW9udGhzOiBzdHJpbmdbXSxcclxuICAgIGRhdGVzOiBzdHJpbmdbXSxcclxuICAgIGhvdXJzOiBzdHJpbmdbXSxcclxuICAgIG1pbnV0ZXM6IHN0cmluZ1tdLFxyXG4gICAgbG9uZ0RheXNPZldlZWs6IHN0cmluZ1tdLFxyXG4gICAgc2hvcnREYXlzT2ZXZWVrOiBzdHJpbmdbXSxcclxuICAgIG5hcnJvd0RheXNPZldlZWs6IHN0cmluZ1tdXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURV9MT0NBTEUpIG1hdERhdGVMb2NhbGU6IHN0cmluZywgX2RlbGVnYXRlOiBEYXRlQWRhcHRlcjxNb21lbnQ+KSB7XHJcbiAgICBzdXBlcihfZGVsZWdhdGUpO1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobWF0RGF0ZUxvY2FsZSB8fCBtb21lbnQubG9jYWxlKCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlci5zZXRMb2NhbGUobG9jYWxlKTtcclxuXHJcbiAgICBjb25zdCBtb21lbnRMb2NhbGVEYXRhID0gbW9tZW50LmxvY2FsZURhdGEobG9jYWxlKTtcclxuICAgIHRoaXMuX2xvY2FsZURhdGEgPSB7XHJcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLmZpcnN0RGF5T2ZXZWVrKCksXHJcbiAgICAgIGxvbmdNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzKCksXHJcbiAgICAgIHNob3J0TW9udGhzOiBtb21lbnRMb2NhbGVEYXRhLm1vbnRoc1Nob3J0KCksXHJcbiAgICAgIGRhdGVzOiByYW5nZSgzMSwgKGkpID0+IHN1cGVyLmNyZWF0ZURhdGUoMjAxNywgMCwgaSArIDEpLmZvcm1hdChcIkRcIikpLFxyXG4gICAgICBob3VyczogcmFuZ2UoMjQsIChpKSA9PiB0aGlzLmNyZWF0ZURhdGV0aW1lKDIwMTcsIDAsIDEsIGksIDApLmZvcm1hdChcIkhcIikpLFxyXG4gICAgICBtaW51dGVzOiByYW5nZSg2MCwgKGkpID0+IHRoaXMuY3JlYXRlRGF0ZXRpbWUoMjAxNywgMCwgMSwgMSwgaSkuZm9ybWF0KFwibVwiKSksXHJcbiAgICAgIGxvbmdEYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzKCksXHJcbiAgICAgIHNob3J0RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c1Nob3J0KCksXHJcbiAgICAgIG5hcnJvd0RheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXNNaW4oKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldEhvdXIoZGF0ZTogTW9tZW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5ob3VyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGUoZGF0ZTogTW9tZW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5taW51dGUoKTtcclxuICB9XHJcblxyXG4gIGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBNb21lbnQsIGVuZERhdGU6IE1vbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgbmV4dE1vbnRoID0gdGhpcy5nZXREYXRlSW5OZXh0TW9udGgoc3RhcnREYXRlKTtcclxuICAgIHJldHVybiBzdXBlci5zYW1lTW9udGhBbmRZZWFyKG5leHRNb250aCwgZW5kRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEYXRldGltZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IE1vbWVudCB7XHJcbiAgICAvLyBDaGVjayBmb3IgaW52YWxpZCBtb250aCBhbmQgZGF0ZSAoZXhjZXB0IHVwcGVyIGJvdW5kIG9uIGRhdGUgd2hpY2ggd2UgaGF2ZSB0byBjaGVjayBhZnRlclxyXG4gICAgLy8gY3JlYXRpbmcgdGhlIERhdGUpLlxyXG4gICAgaWYgKG1vbnRoIDwgMCB8fCBtb250aCA+IDExKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1vbnRoIGluZGV4IFwiJHttb250aH1cIi4gTW9udGggaW5kZXggaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMTEuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGUgPCAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChob3VyIDwgMCB8fCBob3VyID4gMjMpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgaG91ciBcIiR7aG91cn1cIi4gSG91ciBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyMy5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWludXRlIDwgMCB8fCBtaW51dGUgPiA1OSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBtaW51dGUgXCIke21pbnV0ZX1cIi4gTWludXRlIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDU5LmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IG1vbWVudCh7eWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBtb21lbnQoe3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGV9KTtcclxuXHJcbiAgICAvLyBJZiB0aGUgcmVzdWx0IGlzbid0IHZhbGlkLCB0aGUgZGF0ZSBtdXN0IGhhdmUgYmVlbiBvdXQgb2YgYm91bmRzIGZvciB0aGlzIG1vbnRoLlxyXG4gICAgaWYgKCFyZXN1bHQuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGVJbk5leHRNb250aChkYXRlOiBNb21lbnQpIHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5kYXRlKDEpLmFkZCh7bW9udGg6IDF9KTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RGF0ZU9mTW9udGgoZGF0ZTogTW9tZW50KTogTW9tZW50IHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5zdGFydE9mKFwibW9udGhcIik7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZURhdGEuaG91cnM7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF0YS5taW51dGVzO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBNb21lbnQsIGhvdXJzOiBudW1iZXIpOiBNb21lbnQge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmFkZCh7aG91cnN9KTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBNb21lbnQsIG1pbnV0ZXM6IG51bWJlcik6IE1vbWVudCB7XHJcbiAgICByZXR1cm4gc3VwZXIuY2xvbmUoZGF0ZSkuYWRkKHttaW51dGVzfSk7XHJcbiAgfVxyXG5cclxuICBkZXNlcmlhbGl6ZSh2YWx1ZTogYW55KTogTW9tZW50IHwgbnVsbCB7XHJcbiAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgfVxyXG59XHJcbiJdfQ==