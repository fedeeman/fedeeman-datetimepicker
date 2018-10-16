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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiYWRhcHRlci9kYXRldGltZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRXJELE1BQU0sc0JBQW1DLFNBQVEsV0FBYzs7OztJQUU3RCxZQUFzQixTQUF5QjtRQUM3QyxLQUFLLEVBQUUsQ0FBQztRQURZLGNBQVMsR0FBVCxTQUFTLENBQWdCO0lBRS9DLENBQUM7Ozs7O0lBb0JELGtCQUFrQixDQUFDLEdBQVE7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBUSxFQUFFLE1BQVM7UUFDakMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWUsRUFBRSxNQUFnQjtRQUM1QyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7O2tCQUNiLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7a0JBQ2hDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLFVBQVUsSUFBSSxXQUFXLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM3QztZQUNELE9BQU8sVUFBVSxLQUFLLFdBQVcsQ0FBQztTQUNuQztRQUNELE9BQU8sS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBUSxFQUFFLE1BQVM7UUFDMUIsT0FBTyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBUSxFQUFFLE1BQVM7UUFDekIsT0FBTyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pILENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFRLEVBQUUsTUFBUztRQUMxQixPQUFPLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFRLEVBQUUsTUFBUztRQUM1QixPQUFPLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdHLENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFDLEtBQWUsRUFBRSxNQUFnQjtRQUNoRCxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7O2tCQUNiLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7a0JBQ2hDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLFVBQVUsSUFBSSxXQUFXLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxVQUFVLEtBQUssV0FBVyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUdELEtBQUssQ0FBQyxJQUFPO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFPLEVBQUUsS0FBYTtRQUNyQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLElBQU8sRUFBRSxNQUFjO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQU8sRUFBRSxJQUFZO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQU87UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQU87UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQU87UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQU87UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFPO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsSUFBTztRQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQUVELFVBQVUsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDbEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELEtBQUssQ0FBQyxLQUFVLEVBQUUsV0FBZ0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQU8sRUFBRSxhQUFrQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFPO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxHQUFRO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBTztRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFPLEVBQUUsR0FBYyxFQUFFLEdBQWM7UUFDL0MsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGOzs7SUEzS2Esb0NBQW1DOzs7Ozs7SUFJL0Msd0RBQWtDOzs7Ozs7SUFFbEMsMERBQW9DOzs7Ozs7SUFFcEMsb0VBQXlDOzs7Ozs7O0lBRXpDLDRFQUEwRDs7Ozs7SUFFMUQseURBQWtDOzs7OztJQUVsQywyREFBb0M7Ozs7Ozs7SUFFcEMseUVBQXNEOzs7Ozs7O0lBRXRELDJFQUF3RDs7Ozs7Ozs7OztJQUV4RCwwRkFBb0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZXRpbWVBZGFwdGVyPEQ+IGV4dGVuZHMgRGF0ZUFkYXB0ZXI8RD4ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2RlbGVnYXRlOiBEYXRlQWRhcHRlcjxEPikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGdldEhvdXIoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0TWludXRlKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gIGFic3RyYWN0IGdldEZpcnN0RGF0ZU9mTW9udGgoZGF0ZTogRCk6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBELCBlbmREYXRlOiBEKTogYm9vbGVhbjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0SG91ck5hbWVzKCk6IHN0cmluZ1tdO1xyXG5cclxuICBhYnN0cmFjdCBnZXRNaW51dGVOYW1lcygpOiBzdHJpbmdbXTtcclxuXHJcbiAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XHJcblxyXG4gIGFic3RyYWN0IGNyZWF0ZURhdGV0aW1lKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogRDtcclxuXHJcbiAgZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuICh0aGlzLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5pc1ZhbGlkKG9iaikpID8gb2JqIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVEYXRldGltZShmaXJzdDogRCwgc2Vjb25kOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVEYXRlKGZpcnN0LCBzZWNvbmQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0SG91cihmaXJzdCkgLSB0aGlzLmdldEhvdXIoc2Vjb25kKSB8fFxyXG4gICAgICB0aGlzLmdldE1pbnV0ZShmaXJzdCkgLSB0aGlzLmdldE1pbnV0ZShzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZURhdGV0aW1lKGZpcnN0OiBEIHwgbnVsbCwgc2Vjb25kOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpcnN0ICYmIHNlY29uZCkge1xyXG4gICAgICBjb25zdCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcclxuICAgICAgY29uc3Qgc2Vjb25kVmFsaWQgPSB0aGlzLmlzVmFsaWQoc2Vjb25kKTtcclxuICAgICAgaWYgKGZpcnN0VmFsaWQgJiYgc2Vjb25kVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuY29tcGFyZURhdGV0aW1lKGZpcnN0LCBzZWNvbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaXJzdFZhbGlkID09PSBzZWNvbmRWYWxpZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG4gIH1cclxuXHJcbiAgc2FtZVllYXIoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldFllYXIoZmlyc3QpID09PSB0aGlzLmdldFllYXIoc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVEYXkoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldERhdGUoZmlyc3QpID09PSB0aGlzLmdldERhdGUoc2Vjb25kKSAmJiB0aGlzLnNhbWVNb250aEFuZFllYXIoZmlyc3QsIHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lSG91cihmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0SG91cihmaXJzdCkgPT09IHRoaXMuZ2V0SG91cihzZWNvbmQpICYmIHRoaXMuc2FtZURheShmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVNaW51dGUoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldE1pbnV0ZShmaXJzdCkgPT09IHRoaXMuZ2V0TWludXRlKHNlY29uZCkgJiYgdGhpcy5zYW1lSG91cihmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVNb250aEFuZFllYXIoZmlyc3Q6IEQgfCBudWxsLCBzZWNvbmQ6IEQgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0VmFsaWQgPSB0aGlzLmlzVmFsaWQoZmlyc3QpO1xyXG4gICAgICBjb25zdCBzZWNvbmRWYWxpZCA9IHRoaXMuaXNWYWxpZChzZWNvbmQpO1xyXG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xyXG4gICAgICAgIHJldHVybiAhKHRoaXMuZ2V0WWVhcihmaXJzdCkgLSB0aGlzLmdldFllYXIoc2Vjb25kKSB8fFxyXG4gICAgICAgICAgdGhpcy5nZXRNb250aChmaXJzdCkgLSB0aGlzLmdldE1vbnRoKHNlY29uZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaXJzdFZhbGlkID09PSBzZWNvbmRWYWxpZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZWdhdGVcclxuICBjbG9uZShkYXRlOiBEKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY2xvbmUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhclllYXJzKGRhdGU6IEQsIHllYXJzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhclllYXJzKGRhdGUsIHllYXJzKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgbW9udGhzKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyRGF5cyhkYXRlOiBELCBkYXlzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhckRheXMoZGF0ZSwgZGF5cyk7XHJcbiAgfVxyXG5cclxuICBnZXRZZWFyKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFllYXIoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aChkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRNb250aChkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldERheU9mV2VlayhkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXlPZldlZWsoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aE5hbWVzKHN0eWxlKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldE1vbnRoTmFtZXMoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXRlTmFtZXMoKTtcclxuICB9XHJcblxyXG4gIGdldERheU9mV2Vla05hbWVzKHN0eWxlKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERheU9mV2Vla05hbWVzKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFllYXJOYW1lKGRhdGU6IEQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFllYXJOYW1lKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRGaXJzdERheU9mV2VlaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtRGF5c0luTW9udGgoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TnVtRGF5c0luTW9udGgoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY3JlYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgfVxyXG5cclxuICB0b2RheSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS50b2RheSgpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2UodmFsdWU6IGFueSwgcGFyc2VGb3JtYXQ6IGFueSk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5wYXJzZSh2YWx1ZSwgcGFyc2VGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGRhdGU6IEQsIGRpc3BsYXlGb3JtYXQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZm9ybWF0KGRhdGUsIGRpc3BsYXlGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgdG9Jc284NjAxKGRhdGU6IEQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnRvSXNvODYwMShkYXRlKTtcclxuICB9XHJcblxyXG4gIGlzRGF0ZUluc3RhbmNlKG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaXNEYXRlSW5zdGFuY2Uob2JqKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoZGF0ZTogRCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmlzVmFsaWQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpbnZhbGlkKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmludmFsaWQoKTtcclxuICB9XHJcblxyXG4gIGNsYW1wRGF0ZShkYXRlOiBELCBtaW4/OiBEIHwgbnVsbCwgbWF4PzogRCB8IG51bGwpOiBEIHtcclxuICAgIGlmIChtaW4gJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWluKSA8IDApIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH1cclxuICAgIGlmIChtYXggJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWF4KSA+IDApIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxufVxyXG4iXX0=