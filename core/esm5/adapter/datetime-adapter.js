import { __extends } from "tslib";
import { DateAdapter } from "@angular/material/core";
var DatetimeAdapter = /** @class */ (function (_super) {
    __extends(DatetimeAdapter, _super);
    function DatetimeAdapter(_delegate) {
        var _this = _super.call(this) || this;
        _this._delegate = _delegate;
        return _this;
    }
    DatetimeAdapter.prototype.getValidDateOrNull = function (obj) {
        return (this.isDateInstance(obj) && this.isValid(obj)) ? obj : null;
    };
    DatetimeAdapter.prototype.compareDatetime = function (first, second) {
        return this.compareDate(first, second) ||
            this.getHour(first) - this.getHour(second) ||
            this.getMinute(first) - this.getMinute(second);
    };
    DatetimeAdapter.prototype.sameDatetime = function (first, second) {
        if (first && second) {
            var firstValid = this.isValid(first);
            var secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDatetime(first, second);
            }
            return firstValid === secondValid;
        }
        return first === second;
    };
    DatetimeAdapter.prototype.sameYear = function (first, second) {
        return first && second && this.getYear(first) === this.getYear(second);
    };
    DatetimeAdapter.prototype.sameDay = function (first, second) {
        return first && second && this.getDate(first) === this.getDate(second) && this.sameMonthAndYear(first, second);
    };
    DatetimeAdapter.prototype.sameHour = function (first, second) {
        return first && second && this.getHour(first) === this.getHour(second) && this.sameDay(first, second);
    };
    DatetimeAdapter.prototype.sameMinute = function (first, second) {
        return first && second && this.getMinute(first) === this.getMinute(second) && this.sameHour(first, second);
    };
    DatetimeAdapter.prototype.sameMonthAndYear = function (first, second) {
        if (first && second) {
            var firstValid = this.isValid(first);
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
    DatetimeAdapter.prototype.clone = function (date) {
        return this._delegate.clone(date);
    };
    DatetimeAdapter.prototype.addCalendarYears = function (date, years) {
        return this._delegate.addCalendarYears(date, years);
    };
    DatetimeAdapter.prototype.addCalendarMonths = function (date, months) {
        return this._delegate.addCalendarMonths(date, months);
    };
    DatetimeAdapter.prototype.addCalendarDays = function (date, days) {
        return this._delegate.addCalendarDays(date, days);
    };
    DatetimeAdapter.prototype.getYear = function (date) {
        return this._delegate.getYear(date);
    };
    DatetimeAdapter.prototype.getMonth = function (date) {
        return this._delegate.getMonth(date);
    };
    DatetimeAdapter.prototype.getDate = function (date) {
        return this._delegate.getDate(date);
    };
    DatetimeAdapter.prototype.getDayOfWeek = function (date) {
        return this._delegate.getDayOfWeek(date);
    };
    DatetimeAdapter.prototype.getMonthNames = function (style) {
        return this._delegate.getMonthNames(style);
    };
    DatetimeAdapter.prototype.getDateNames = function () {
        return this._delegate.getDateNames();
    };
    DatetimeAdapter.prototype.getDayOfWeekNames = function (style) {
        return this._delegate.getDayOfWeekNames(style);
    };
    DatetimeAdapter.prototype.getYearName = function (date) {
        return this._delegate.getYearName(date);
    };
    DatetimeAdapter.prototype.getFirstDayOfWeek = function () {
        return this._delegate.getFirstDayOfWeek();
    };
    DatetimeAdapter.prototype.getNumDaysInMonth = function (date) {
        return this._delegate.getNumDaysInMonth(date);
    };
    DatetimeAdapter.prototype.createDate = function (year, month, date) {
        return this._delegate.createDate(year, month, date);
    };
    DatetimeAdapter.prototype.today = function () {
        return this._delegate.today();
    };
    DatetimeAdapter.prototype.parse = function (value, parseFormat) {
        return this._delegate.parse(value, parseFormat);
    };
    DatetimeAdapter.prototype.format = function (date, displayFormat) {
        return this._delegate.format(date, displayFormat);
    };
    DatetimeAdapter.prototype.toIso8601 = function (date) {
        return this._delegate.toIso8601(date);
    };
    DatetimeAdapter.prototype.isDateInstance = function (obj) {
        return this._delegate.isDateInstance(obj);
    };
    DatetimeAdapter.prototype.isValid = function (date) {
        return this._delegate.isValid(date);
    };
    DatetimeAdapter.prototype.invalid = function () {
        return this._delegate.invalid();
    };
    DatetimeAdapter.prototype.clampDate = function (date, min, max) {
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
export { DatetimeAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJhZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRDtJQUFpRCxtQ0FBYztJQUU3RCx5QkFBc0IsU0FBeUI7UUFBL0MsWUFDRSxpQkFBTyxTQUNSO1FBRnFCLGVBQVMsR0FBVCxTQUFTLENBQWdCOztJQUUvQyxDQUFDO0lBb0JELDRDQUFrQixHQUFsQixVQUFtQixHQUFRO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsS0FBUSxFQUFFLE1BQVM7UUFDakMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxLQUFlLEVBQUUsTUFBZ0I7UUFDNUMsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ25CLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6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RyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTdLRCxDQUFpRCxXQUFXLEdBNkszRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRldGltZUFkYXB0ZXI8RD4gZXh0ZW5kcyBEYXRlQWRhcHRlcjxEPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPEQ+KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ2V0SG91cihkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICBhYnN0cmFjdCBnZXRNaW51dGUoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBEKTogRDtcclxuXHJcbiAgYWJzdHJhY3QgaXNJbk5leHRNb250aChzdGFydERhdGU6IEQsIGVuZERhdGU6IEQpOiBib29sZWFuO1xyXG5cclxuICBhYnN0cmFjdCBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW107XHJcblxyXG4gIGFic3RyYWN0IGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdO1xyXG5cclxuICBhYnN0cmFjdCBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRDtcclxuXHJcbiAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJNaW51dGVzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRDtcclxuXHJcbiAgYWJzdHJhY3QgY3JlYXRlRGF0ZXRpbWUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBEO1xyXG5cclxuICBnZXRWYWxpZERhdGVPck51bGwob2JqOiBhbnkpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gKHRoaXMuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJiB0aGlzLmlzVmFsaWQob2JqKSkgPyBvYmogOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZURhdGV0aW1lKGZpcnN0OiBELCBzZWNvbmQ6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZURhdGUoZmlyc3QsIHNlY29uZCkgfHxcclxuICAgICAgdGhpcy5nZXRIb3VyKGZpcnN0KSAtIHRoaXMuZ2V0SG91cihzZWNvbmQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0TWludXRlKGZpcnN0KSAtIHRoaXMuZ2V0TWludXRlKHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lRGF0ZXRpbWUoZmlyc3Q6IEQgfCBudWxsLCBzZWNvbmQ6IEQgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0VmFsaWQgPSB0aGlzLmlzVmFsaWQoZmlyc3QpO1xyXG4gICAgICBjb25zdCBzZWNvbmRWYWxpZCA9IHRoaXMuaXNWYWxpZChzZWNvbmQpO1xyXG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5jb21wYXJlRGF0ZXRpbWUoZmlyc3QsIHNlY29uZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpcnN0VmFsaWQgPT09IHNlY29uZFZhbGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcbiAgfVxyXG5cclxuICBzYW1lWWVhcihmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0WWVhcihmaXJzdCkgPT09IHRoaXMuZ2V0WWVhcihzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZURheShmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0RGF0ZShmaXJzdCkgPT09IHRoaXMuZ2V0RGF0ZShzZWNvbmQpICYmIHRoaXMuc2FtZU1vbnRoQW5kWWVhcihmaXJzdCwgc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVIb3VyKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXRIb3VyKGZpcnN0KSA9PT0gdGhpcy5nZXRIb3VyKHNlY29uZCkgJiYgdGhpcy5zYW1lRGF5KGZpcnN0LCBzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZU1pbnV0ZShmaXJzdDogRCwgc2Vjb25kOiBEKSB7XHJcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0TWludXRlKGZpcnN0KSA9PT0gdGhpcy5nZXRNaW51dGUoc2Vjb25kKSAmJiB0aGlzLnNhbWVIb3VyKGZpcnN0LCBzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZU1vbnRoQW5kWWVhcihmaXJzdDogRCB8IG51bGwsIHNlY29uZDogRCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmIChmaXJzdCAmJiBzZWNvbmQpIHtcclxuICAgICAgY29uc3QgZmlyc3RWYWxpZCA9IHRoaXMuaXNWYWxpZChmaXJzdCk7XHJcbiAgICAgIGNvbnN0IHNlY29uZFZhbGlkID0gdGhpcy5pc1ZhbGlkKHNlY29uZCk7XHJcbiAgICAgIGlmIChmaXJzdFZhbGlkICYmIHNlY29uZFZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5nZXRZZWFyKGZpcnN0KSAtIHRoaXMuZ2V0WWVhcihzZWNvbmQpIHx8XHJcbiAgICAgICAgICB0aGlzLmdldE1vbnRoKGZpcnN0KSAtIHRoaXMuZ2V0TW9udGgoc2Vjb25kKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpcnN0VmFsaWQgPT09IHNlY29uZFZhbGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcbiAgfVxyXG5cclxuICAvLyBkZWxlZ2F0ZVxyXG4gIGNsb25lKGRhdGU6IEQpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jbG9uZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRCwgeWVhcnM6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyWWVhcnMoZGF0ZSwgeWVhcnMpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJNb250aHMoZGF0ZTogRCwgbW9udGhzOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhck1vbnRocyhkYXRlLCBtb250aHMpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJEYXlzKGRhdGU6IEQsIGRheXM6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyRGF5cyhkYXRlLCBkYXlzKTtcclxuICB9XHJcblxyXG4gIGdldFllYXIoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0WWVhcihkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldE1vbnRoKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZShkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5T2ZXZWVrKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERheU9mV2VlayhkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoTmFtZXMoc3R5bGUpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TW9udGhOYW1lcyhzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERhdGVOYW1lcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGUpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0WWVhck5hbWUoZGF0ZTogRCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0WWVhck5hbWUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldEZpcnN0RGF5T2ZXZWVrKCk7XHJcbiAgfVxyXG5cclxuICBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXROdW1EYXlzSW5Nb250aChkYXRlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jcmVhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZGF5KCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZSh2YWx1ZTogYW55LCBwYXJzZUZvcm1hdDogYW55KTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnBhcnNlKHZhbHVlLCBwYXJzZUZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoZGF0ZTogRCwgZGlzcGxheUZvcm1hdDogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5mb3JtYXQoZGF0ZSwgZGlzcGxheUZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICB0b0lzbzg2MDEoZGF0ZTogRCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUudG9Jc284NjAxKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgaXNEYXRlSW5zdGFuY2Uob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5pc0RhdGVJbnN0YW5jZShvYmopO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZChkYXRlOiBEKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaXNWYWxpZChkYXRlKTtcclxuICB9XHJcblxyXG4gIGludmFsaWQoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaW52YWxpZCgpO1xyXG4gIH1cclxuXHJcbiAgY2xhbXBEYXRlKGRhdGU6IEQsIG1pbj86IEQgfCBudWxsLCBtYXg/OiBEIHwgbnVsbCk6IEQge1xyXG4gICAgaWYgKG1pbiAmJiB0aGlzLmNvbXBhcmVEYXRldGltZShkYXRlLCBtaW4pIDwgMCkge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heCAmJiB0aGlzLmNvbXBhcmVEYXRldGltZShkYXRlLCBtYXgpID4gMCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==