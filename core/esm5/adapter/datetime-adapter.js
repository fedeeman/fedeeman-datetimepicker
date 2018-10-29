/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DateAdapter } from "@angular/material/core";
/**
 * @abstract
 * @template D
 */
var /**
 * @abstract
 * @template D
 */
DatetimeAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(DatetimeAdapter, _super);
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
}(DateAdapter));
/**
 * @abstract
 * @template D
 */
export { DatetimeAdapter };
if (false) {
    /** @type {?} */
    DatetimeAdapter.prototype._delegate;
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getHour = function (date) { };
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getMinute = function (date) { };
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getFirstDateOfMonth = function (date) { };
    /**
     * @abstract
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    DatetimeAdapter.prototype.isInNextMonth = function (startDate, endDate) { };
    /**
     * @abstract
     * @return {?}
     */
    DatetimeAdapter.prototype.getHourNames = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DatetimeAdapter.prototype.getMinuteNames = function () { };
    /**
     * @abstract
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    DatetimeAdapter.prototype.addCalendarHours = function (date, months) { };
    /**
     * @abstract
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    DatetimeAdapter.prototype.addCalendarMinutes = function (date, months) { };
    /**
     * @abstract
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    DatetimeAdapter.prototype.createDatetime = function (year, month, date, hour, minute) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJhZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRXJEOzs7OztJQUFpRCwyQ0FBYztJQUU3RCx5QkFBc0IsU0FBeUI7UUFBL0MsWUFDRSxpQkFBTyxTQUNSO1FBRnFCLGVBQVMsR0FBVCxTQUFTLENBQWdCOztJQUUvQyxDQUFDOzs7OztJQW9CRCw0Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsR0FBUTtRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVELHlDQUFlOzs7OztJQUFmLFVBQWdCLEtBQVEsRUFBRSxNQUFTO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVELHNDQUFZOzs7OztJQUFaLFVBQWEsS0FBZSxFQUFFLE1BQWdCO1FBQzVDLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTs7Z0JBQ2IsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztnQkFDaEMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFP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QU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsaUNBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7SUFFRCxtQ0FBUzs7Ozs7O0lBQVQsVUFBVSxJQUFPLEVBQUUsR0FBYyxFQUFFLEdBQWM7UUFDL0MsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTdLRCxDQUFpRCxXQUFXLEdBNkszRDs7Ozs7Ozs7SUEzS2Esb0NBQW1DOzs7Ozs7SUFJL0Msd0RBQWtDOzs7Ozs7SUFFbEMsMERBQW9DOzs7Ozs7SUFFcEMsb0VBQXlDOzs7Ozs7O0lBRXpDLDRFQUEwRDs7Ozs7SUFFMUQseURBQWtDOzs7OztJQUVsQywyREFBb0M7Ozs7Ozs7SUFFcEMseUVBQXNEOzs7Ozs7O0lBRXRELDJFQUF3RDs7Ozs7Ozs7OztJQUV4RCwwRkFBb0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZXRpbWVBZGFwdGVyPEQ+IGV4dGVuZHMgRGF0ZUFkYXB0ZXI8RD4ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2RlbGVnYXRlOiBEYXRlQWRhcHRlcjxEPikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGdldEhvdXIoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0TWludXRlKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gIGFic3RyYWN0IGdldEZpcnN0RGF0ZU9mTW9udGgoZGF0ZTogRCk6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBELCBlbmREYXRlOiBEKTogYm9vbGVhbjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0SG91ck5hbWVzKCk6IHN0cmluZ1tdO1xyXG5cclxuICBhYnN0cmFjdCBnZXRNaW51dGVOYW1lcygpOiBzdHJpbmdbXTtcclxuXHJcbiAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGNyZWF0ZURhdGV0aW1lKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogRDtcclxuXHJcbiAgZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuICh0aGlzLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5pc1ZhbGlkKG9iaikpID8gb2JqIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVEYXRldGltZShmaXJzdDogRCwgc2Vjb25kOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVEYXRlKGZpcnN0LCBzZWNvbmQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0SG91cihmaXJzdCkgLSB0aGlzLmdldEhvdXIoc2Vjb25kKSB8fFxyXG4gICAgICB0aGlzLmdldE1pbnV0ZShmaXJzdCkgLSB0aGlzLmdldE1pbnV0ZShzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZURhdGV0aW1lKGZpcnN0OiBEIHwgbnVsbCwgc2Vjb25kOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpcnN0ICYmIHNlY29uZCkge1xyXG4gICAgICBjb25zdCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcclxuICAgICAgY29uc3Qgc2Vjb25kVmFsaWQgPSB0aGlzLmlzVmFsaWQoc2Vjb25kKTtcclxuICAgICAgaWYgKGZpcnN0VmFsaWQgJiYgc2Vjb25kVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuY29tcGFyZURhdGV0aW1lKGZpcnN0LCBzZWNvbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaXJzdFZhbGlkID09PSBzZWNvbmRWYWxpZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG4gIH1cclxuXHJcbiAgc2FtZVllYXIoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldFllYXIoZmlyc3QpID09PSB0aGlzLmdldFllYXIoc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVEYXkoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldERhdGUoZmlyc3QpID09PSB0aGlzLmdldERhdGUoc2Vjb25kKSAmJiB0aGlzLnNhbWVNb250aEFuZFllYXIoZmlyc3QsIHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lSG91cihmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0SG91cihmaXJzdCkgPT09IHRoaXMuZ2V0SG91cihzZWNvbmQpICYmIHRoaXMuc2FtZURheShmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVNaW51dGUoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldE1pbnV0ZShmaXJzdCkgPT09IHRoaXMuZ2V0TWludXRlKHNlY29uZCkgJiYgdGhpcy5zYW1lSG91cihmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVNb250aEFuZFllYXIoZmlyc3Q6IEQgfCBudWxsLCBzZWNvbmQ6IEQgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0VmFsaWQgPSB0aGlzLmlzVmFsaWQoZmlyc3QpO1xyXG4gICAgICBjb25zdCBzZWNvbmRWYWxpZCA9IHRoaXMuaXNWYWxpZChzZWNvbmQpO1xyXG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xyXG4gICAgICAgIHJldHVybiAhKHRoaXMuZ2V0WWVhcihmaXJzdCkgLSB0aGlzLmdldFllYXIoc2Vjb25kKSB8fFxyXG4gICAgICAgICAgdGhpcy5nZXRNb250aChmaXJzdCkgLSB0aGlzLmdldE1vbnRoKHNlY29uZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaXJzdFZhbGlkID09PSBzZWNvbmRWYWxpZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZWdhdGVcclxuICBjbG9uZShkYXRlOiBEKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY2xvbmUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhclllYXJzKGRhdGU6IEQsIHllYXJzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhclllYXJzKGRhdGUsIHllYXJzKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgbW9udGhzKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyRGF5cyhkYXRlOiBELCBkYXlzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhckRheXMoZGF0ZSwgZGF5cyk7XHJcbiAgfVxyXG5cclxuICBnZXRZZWFyKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFllYXIoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aChkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRNb250aChkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldERheU9mV2VlayhkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXlPZldlZWsoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aE5hbWVzKHN0eWxlKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldE1vbnRoTmFtZXMoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXRlTmFtZXMoKTtcclxuICB9XHJcblxyXG4gIGdldERheU9mV2Vla05hbWVzKHN0eWxlKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERheU9mV2Vla05hbWVzKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFllYXJOYW1lKGRhdGU6IEQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFllYXJOYW1lKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRGaXJzdERheU9mV2VlaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtRGF5c0luTW9udGgoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TnVtRGF5c0luTW9udGgoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY3JlYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgfVxyXG5cclxuICB0b2RheSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS50b2RheSgpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2UodmFsdWU6IGFueSwgcGFyc2VGb3JtYXQ6IGFueSk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5wYXJzZSh2YWx1ZSwgcGFyc2VGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGRhdGU6IEQsIGRpc3BsYXlGb3JtYXQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZm9ybWF0KGRhdGUsIGRpc3BsYXlGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgdG9Jc284NjAxKGRhdGU6IEQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnRvSXNvODYwMShkYXRlKTtcclxuICB9XHJcblxyXG4gIGlzRGF0ZUluc3RhbmNlKG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaXNEYXRlSW5zdGFuY2Uob2JqKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoZGF0ZTogRCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmlzVmFsaWQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpbnZhbGlkKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmludmFsaWQoKTtcclxuICB9XHJcblxyXG4gIGNsYW1wRGF0ZShkYXRlOiBELCBtaW4/OiBEIHwgbnVsbCwgbWF4PzogRCB8IG51bGwpOiBEIHtcclxuICAgIGlmIChtaW4gJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWluKSA8IDApIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH1cclxuICAgIGlmIChtYXggJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWF4KSA+IDApIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxufVxyXG4iXX0=