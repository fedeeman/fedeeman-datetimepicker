import { __decorate, __extends, __metadata, __param } from "tslib";
import { Inject, Injectable, Optional } from "@angular/core";
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material/core";
import { DatetimeAdapter } from "fedeeman-datetimepicker/core";
import * as moment_ from "moment";
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
export { MomentDatetimeAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGV0aW1lLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9tb21lbnQvIiwic291cmNlcyI6WyJhZGFwdGVyL21vbWVudC1kYXRldGltZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2hCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBRWxDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUV2QixTQUFTLEtBQUssQ0FBSSxNQUFjLEVBQUUsYUFBbUM7SUFDbkUsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQztJQUNELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFHRDtJQUEyQyx5Q0FBdUI7SUFjaEUsK0JBQWlELGFBQXFCLEVBQUUsU0FBOEI7UUFBdEcsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FFakI7UUFEQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzs7SUFDbkQsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQWVDO1FBZEMsaUJBQU0sU0FBUyxZQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhCLElBQU0sZ0JBQWdCLEdBQUcs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QU0sU0FBQyxlQUFlO2dCQUFvQyxXQUFXOztJQWRuRixxQkFBcUI7UUFEakMsVUFBVSxFQUFFO1FBZUUsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO2lEQUFtQyxXQUFXO09BZG5GLHFCQUFxQixDQTBHakM7SUFBRCw0QkFBQztDQUFBLEFBMUdELENBQTJDLGVBQWUsR0EwR3pEO1NBMUdZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFX0xPQ0FMRVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCJmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcclxuICBjb25zdCB2YWx1ZXNBcnJheSA9IEFycmF5KGxlbmd0aCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWVzQXJyYXk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vbWVudERhdGV0aW1lQWRhcHRlciBleHRlbmRzIERhdGV0aW1lQWRhcHRlcjxNb21lbnQ+IHtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxlRGF0YToge1xyXG4gICAgZmlyc3REYXlPZldlZWs6IG51bWJlcixcclxuICAgIGxvbmdNb250aHM6IHN0cmluZ1tdLFxyXG4gICAgc2hvcnRNb250aHM6IHN0cmluZ1tdLFxyXG4gICAgZGF0ZXM6IHN0cmluZ1tdLFxyXG4gICAgaG91cnM6IHN0cmluZ1tdLFxyXG4gICAgbWludXRlczogc3RyaW5nW10sXHJcbiAgICBsb25nRGF5c09mV2Vlazogc3RyaW5nW10sXHJcbiAgICBzaG9ydERheXNPZldlZWs6IHN0cmluZ1tdLFxyXG4gICAgbmFycm93RGF5c09mV2Vlazogc3RyaW5nW11cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPE1vbWVudD4pIHtcclxuICAgIHN1cGVyKF9kZWxlZ2F0ZSk7XHJcbiAgICB0aGlzLnNldExvY2FsZShtYXREYXRlTG9jYWxlIHx8IG1vbWVudC5sb2NhbGUoKSk7XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnNldExvY2FsZShsb2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IG1vbWVudExvY2FsZURhdGEgPSBtb21lbnQubG9jYWxlRGF0YShsb2NhbGUpO1xyXG4gICAgdGhpcy5fbG9jYWxlRGF0YSA9IHtcclxuICAgICAgZmlyc3REYXlPZldlZWs6IG1vbWVudExvY2FsZURhdGEuZmlyc3REYXlPZldlZWsoKSxcclxuICAgICAgbG9uZ01vbnRoczogbW9tZW50TG9jYWxlRGF0YS5tb250aHMoKSxcclxuICAgICAgc2hvcnRNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzU2hvcnQoKSxcclxuICAgICAgZGF0ZXM6IHJhbmdlKDMxLCAoaSkgPT4gc3VwZXIuY3JlYXRlRGF0ZSgyMDE3LCAwLCBpICsgMSkuZm9ybWF0KFwiRFwiKSksXHJcbiAgICAgIGhvdXJzOiByYW5nZSgyNCwgKGkpID0+IHRoaXMuY3JlYXRlRGF0ZXRpbWUoMjAxNywgMCwgMSwgaSwgMCkuZm9ybWF0KFwiSFwiKSksXHJcbiAgICAgIG1pbnV0ZXM6IHJhbmdlKDYwLCAoaSkgPT4gdGhpcy5jcmVhdGVEYXRldGltZSgyMDE3LCAwLCAxLCAxLCBpKS5mb3JtYXQoXCJtXCIpKSxcclxuICAgICAgbG9uZ0RheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXMoKSxcclxuICAgICAgc2hvcnREYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzU2hvcnQoKSxcclxuICAgICAgbmFycm93RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c01pbigpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cihkYXRlOiBNb21lbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmhvdXIoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZShkYXRlOiBNb21lbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLm1pbnV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNJbk5leHRNb250aChzdGFydERhdGU6IE1vbWVudCwgZW5kRGF0ZTogTW9tZW50KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmdldERhdGVJbk5leHRNb250aChzdGFydERhdGUpO1xyXG4gICAgcmV0dXJuIHN1cGVyLnNhbWVNb250aEFuZFllYXIobmV4dE1vbnRoLCBlbmREYXRlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURhdGV0aW1lKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogTW9tZW50IHtcclxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXHJcbiAgICAvLyBjcmVhdGluZyB0aGUgRGF0ZSkuXHJcbiAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZSA8IDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvdXIgPCAwIHx8IGhvdXIgPiAyMykge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBob3VyIFwiJHtob3VyfVwiLiBIb3VyIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDIzLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IDU5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gbW9tZW50KHt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlfSkubG9jYWxlKHRoaXMubG9jYWxlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbWVudCh7eWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZX0pO1xyXG5cclxuICAgIC8vIElmIHRoZSByZXN1bHQgaXNuJ3QgdmFsaWQsIHRoZSBkYXRlIG11c3QgaGF2ZSBiZWVuIG91dCBvZiBib3VuZHMgZm9yIHRoaXMgbW9udGguXHJcbiAgICBpZiAoIXJlc3VsdC5pc1ZhbGlkKCkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIiBmb3IgbW9udGggd2l0aCBpbmRleCBcIiR7bW9udGh9XCIuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZUluTmV4dE1vbnRoKGRhdGU6IE1vbWVudCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmRhdGUoMSkuYWRkKHttb250aDogMX0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBNb21lbnQpOiBNb21lbnQge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLnN0YXJ0T2YoXCJtb250aFwiKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXJOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF0YS5ob3VycztcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLm1pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IE1vbWVudCwgaG91cnM6IG51bWJlcik6IE1vbWVudCB7XHJcbiAgICByZXR1cm4gc3VwZXIuY2xvbmUoZGF0ZSkuYWRkKHtob3Vyc30pO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJNaW51dGVzKGRhdGU6IE1vbWVudCwgbWludXRlczogbnVtYmVyKTogTW9tZW50IHtcclxuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5hZGQoe21pbnV0ZXN9KTtcclxuICB9XHJcblxyXG4gIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBNb21lbnQgfCBudWxsIHtcclxuICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICB9XHJcbn1cclxuIl19