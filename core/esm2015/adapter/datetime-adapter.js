/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DateAdapter } from "@angular/material/core";
/**
 * @abstract
 * @template D
 */
export class DatetimeAdapter extends DateAdapter {
    /**
     * @param {?} _delegate
     */
    constructor(_delegate) {
        super();
        this._delegate = _delegate;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getValidDateOrNull(obj) {
        return (this.isDateInstance(obj) && this.isValid(obj)) ? obj : null;
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    compareDatetime(first, second) {
        return this.compareDate(first, second) ||
            this.getHour(first) - this.getHour(second) ||
            this.getMinute(first) - this.getMinute(second);
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    sameDatetime(first, second) {
        if (first && second) {
            /** @type {?} */
            const firstValid = this.isValid(first);
            /** @type {?} */
            const secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDatetime(first, second);
            }
            return firstValid === secondValid;
        }
        return first === second;
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    sameYear(first, second) {
        return first && second && this.getYear(first) === this.getYear(second);
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    sameDay(first, second) {
        return first && second && this.getDate(first) === this.getDate(second) && this.sameMonthAndYear(first, second);
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    sameHour(first, second) {
        return first && second && this.getHour(first) === this.getHour(second) && this.sameDay(first, second);
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    sameMinute(first, second) {
        return first && second && this.getMinute(first) === this.getMinute(second) && this.sameHour(first, second);
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    sameMonthAndYear(first, second) {
        if (first && second) {
            /** @type {?} */
            const firstValid = this.isValid(first);
            /** @type {?} */
            const secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !(this.getYear(first) - this.getYear(second) ||
                    this.getMonth(first) - this.getMonth(second));
            }
            return firstValid === secondValid;
        }
        return first === second;
    }
    // delegate
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return this._delegate.clone(date);
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this._delegate.addCalendarYears(date, years);
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        return this._delegate.addCalendarMonths(date, months);
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this._delegate.addCalendarDays(date, days);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return this._delegate.getYear(date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return this._delegate.getMonth(date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return this._delegate.getDate(date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayOfWeek(date) {
        return this._delegate.getDayOfWeek(date);
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        return this._delegate.getMonthNames(style);
    }
    /**
     * @return {?}
     */
    getDateNames() {
        return this._delegate.getDateNames();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        return this._delegate.getDayOfWeekNames(style);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        return this._delegate.getYearName(date);
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this._delegate.getFirstDayOfWeek();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        return this._delegate.getNumDaysInMonth(date);
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    createDate(year, month, date) {
        return this._delegate.createDate(year, month, date);
    }
    /**
     * @return {?}
     */
    today() {
        return this._delegate.today();
    }
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    parse(value, parseFormat) {
        return this._delegate.parse(value, parseFormat);
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
        return this._delegate.format(date, displayFormat);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return this._delegate.toIso8601(date);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return this._delegate.isDateInstance(obj);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return this._delegate.isValid(date);
    }
    /**
     * @return {?}
     */
    invalid() {
        return this._delegate.invalid();
    }
    /**
     * @param {?} date
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    clampDate(date, min, max) {
        if (min && this.compareDatetime(date, min) < 0) {
            return min;
        }
        if (max && this.compareDatetime(date, max) > 0) {
            return max;
        }
        return date;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJhZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFckQsTUFBTSxzQkFBbUMsU0FBUSxXQUFjOzs7O0lBRTdELFlBQXNCLFNBQXlCO1FBQzdDLEtBQUssRUFBRSxDQUFDO1FBRFksY0FBUyxHQUFULFNBQVMsQ0FBZ0I7SUFFL0MsQ0FBQzs7Ozs7SUFvQkQsa0JBQWtCLENBQUMsR0FBUTtRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxLQUFRLEVBQUUsTUFBUztRQUNqQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBZSxFQUFFLE1BQWdCO1FBQzVDLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTs7a0JBQ2IsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztrQkFDaEMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3hDLElBQUks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QUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QyxPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7OztJQTNLYSxvQ0FBbUM7Ozs7OztJQUkvQyx3REFBa0M7Ozs7OztJQUVsQywwREFBb0M7Ozs7OztJQUVwQyxvRUFBeUM7Ozs7Ozs7SUFFekMsNEVBQTBEOzs7OztJQUUxRCx5REFBa0M7Ozs7O0lBRWxDLDJEQUFvQzs7Ozs7OztJQUVwQyx5RUFBc0Q7Ozs7Ozs7SUFFdEQsMkVBQXdEOzs7Ozs7Ozs7O0lBRXhELDBGQUFvRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRldGltZUFkYXB0ZXI8RD4gZXh0ZW5kcyBEYXRlQWRhcHRlcjxEPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPEQ+KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ2V0SG91cihkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICBhYnN0cmFjdCBnZXRNaW51dGUoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBEKTogRDtcclxuXHJcbiAgYWJzdHJhY3QgaXNJbk5leHRNb250aChzdGFydERhdGU6IEQsIGVuZERhdGU6IEQpOiBib29sZWFuO1xyXG5cclxuICBhYnN0cmFjdCBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW107XHJcblxyXG4gIGFic3RyYWN0IGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdO1xyXG5cclxuICBhYnN0cmFjdCBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRDtcclxuXHJcbiAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJNaW51dGVzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRDtcclxuXHJcbiAgYWJzdHJhY3QgY3JlYXRlRGF0ZXRpbWUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBEO1xyXG5cclxuICBnZXRWYWxpZERhdGVPck51bGwob2JqOiBhbnkpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gKHRoaXMuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJiB0aGlzLmlzVmFsaWQob2JqKSkgPyBvYmogOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZURhdGV0aW1lKGZpcnN0OiBELCBzZWNvbmQ6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZURhdGUoZmlyc3QsIHNlY29uZCkgfHxcclxuICAgICAgdGhpcy5nZXRIb3VyKGZpcnN0KSAtIHRoaXMuZ2V0SG91cihzZWNvbmQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0TWludXRlKGZpcnN0KSAtIHRoaXMuZ2V0TWludXRlKHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lRGF0ZXRpbWUoZmlyc3Q6IEQgfCBudWxsLCBzZWNvbmQ6IEQgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0VmFsaWQgPSB0aGlzLmlzVmFsaWQoZmlyc3QpO1xyXG4gICAgICBjb25zdCBzZWNvbmRWYWxpZCA9IHRoaXMuaXNWYWxpZChzZWNvbmQpO1xyXG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5jb21wYXJlRGF0ZXRpbWUoZmlyc3QsIHNlY29uZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpcnN0VmFsaWQgPT09IHNlY29uZFZhbGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcbiAgfVxyXG5cclxuICBzYW1lWWVhcihmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0WWVhcihmaXJzdCkgPT09IHRoaXMuZ2V0WWVhcihzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZURheShmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0RGF0ZShmaXJzdCkgPT09IHRoaXMuZ2V0RGF0ZShzZWNvbmQpICYmIHRoaXMuc2FtZU1vbnRoQW5kWWVhcihmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVIb3VyKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXRIb3VyKGZpcnN0KSA9PT0gdGhpcy5nZXRIb3VyKHNlY29uZCkgJiYgdGhpcy5zYW1lRGF5KGZpcnN0LCBzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZU1pbnV0ZShmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0TWludXRlKGZpcnN0KSA9PT0gdGhpcy5nZXRNaW51dGUoc2Vjb25kKSAmJiB0aGlzLnNhbWVIb3VyKGZpcnN0LCBzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZU1vbnRoQW5kWWVhcihmaXJzdDogRCB8IG51bGwsIHNlY29uZDogRCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmIChmaXJzdCAmJiBzZWNvbmQpIHtcclxuICAgICAgY29uc3QgZmlyc3RWYWxpZCA9IHRoaXMuaXNWYWxpZChmaXJzdCk7XHJcbiAgICAgIGNvbnN0IHNlY29uZFZhbGlkID0gdGhpcy5pc1ZhbGlkKHNlY29uZCk7XHJcbiAgICAgIGlmIChmaXJzdFZhbGlkICYmIHNlY29uZFZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5nZXRZZWFyKGZpcnN0KSAtIHRoaXMuZ2V0WWVhcihzZWNvbmQpIHx8XHJcbiAgICAgICAgICB0aGlzLmdldE1vbnRoKGZpcnN0KSAtIHRoaXMuZ2V0TW9udGgoc2Vjb25kKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpcnN0VmFsaWQgPT09IHNlY29uZFZhbGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcbiAgfVxyXG5cclxuICAvLyBkZWxlZ2F0ZVxyXG4gIGNsb25lKGRhdGU6IEQpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jbG9uZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRCwgeWVhcnM6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyWWVhcnMoZGF0ZSwgeWVhcnMpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJNb250aHMoZGF0ZTogRCwgbW9udGhzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhck1vbnRocyhkYXRlLCBtb250aHMpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJEYXlzKGRhdGU6IEQsIGRheXM6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyRGF5cyhkYXRlLCBkYXlzKTtcclxuICB9XHJcblxyXG4gIGdldFllYXIoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0WWVhcihkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldE1vbnRoKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZShkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5T2ZXZWVrKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERheU9mV2VlayhkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoTmFtZXMoc3R5bGUpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TW9udGhOYW1lcyhzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERhdGVOYW1lcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGUpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0WWVhck5hbWUoZGF0ZTogRCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0WWVhck5hbWUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldEZpcnN0RGF5T2ZXZWVrKCk7XHJcbiAgfVxyXG5cclxuICBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXROdW1EYXlzSW5Nb250aChkYXRlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jcmVhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZGF5KCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZSh2YWx1ZTogYW55LCBwYXJzZUZvcm1hdDogYW55KTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnBhcnNlKHZhbHVlLCBwYXJzZUZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoZGF0ZTogRCwgZGlzcGxheUZvcm1hdDogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5mb3JtYXQoZGF0ZSwgZGlzcGxheUZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICB0b0lzbzg2MDEoZGF0ZTogRCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUudG9Jc284NjAxKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgaXNEYXRlSW5zdGFuY2Uob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5pc0RhdGVJbnN0YW5jZShvYmopO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZChkYXRlOiBEKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaXNWYWxpZChkYXRlKTtcclxuICB9XHJcblxyXG4gIGludmFsaWQoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaW52YWxpZCgpO1xyXG4gIH1cclxuXHJcbiAgY2xhbXBEYXRlKGRhdGU6IEQsIG1pbj86IEQgfCBudWxsLCBtYXg/OiBEIHwgbnVsbCk6IEQge1xyXG4gICAgaWYgKG1pbiAmJiB0aGlzLmNvbXBhcmVEYXRldGltZShkYXRlLCBtaW4pIDwgMCkge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heCAmJiB0aGlzLmNvbXBhcmVEYXRldGltZShkYXRlLCBtYXgpID4gMCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==