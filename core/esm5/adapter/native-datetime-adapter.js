import { __decorate, __extends, __metadata, __param } from "tslib";
import { Inject, Injectable, Optional } from "@angular/core";
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material/core";
import { DatetimeAdapter } from "./datetime-adapter";
var ɵ0 = function (i) { return String(i); };
/** The default hour names to use if Intl API is not available. */
var DEFAULT_HOUR_NAMES = range(24, ɵ0);
var ɵ1 = function (i) { return String(i); };
/** The default minute names to use if Intl API is not available. */
var DEFAULT_MINUTE_NAMES = range(60, ɵ1);
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var NativeDatetimeAdapter = /** @class */ (function (_super) {
    __extends(NativeDatetimeAdapter, _super);
    function NativeDatetimeAdapter(matDateLocale, _delegate) {
        var _this = _super.call(this, _delegate) || this;
        _this.setLocale(matDateLocale);
        return _this;
    }
    NativeDatetimeAdapter.prototype.clone = function (date) {
        return this.createDatetime(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date));
    };
    NativeDatetimeAdapter.prototype.getHour = function (date) {
        return date.getHours();
    };
    NativeDatetimeAdapter.prototype.getMinute = function (date) {
        return date.getMinutes();
    };
    NativeDatetimeAdapter.prototype.isInNextMonth = function (startDate, endDate) {
        var nextMonth = this.getDateInNextMonth(startDate);
        return this.sameMonthAndYear(nextMonth, endDate);
    };
    NativeDatetimeAdapter.prototype.createDatetime = function (year, month, date, hour, minute) {
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
        var result = this._createDateWithOverflow(year, month, date, hour, minute);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() !== month) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    NativeDatetimeAdapter.prototype.getDateInNextMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
    };
    NativeDatetimeAdapter.prototype.getFirstDateOfMonth = function (date) {
        var result = new Date();
        result.setFullYear(date.getFullYear(), date.getMonth(), 1);
        return result;
    };
    NativeDatetimeAdapter.prototype.getHourNames = function () {
        return DEFAULT_HOUR_NAMES;
    };
    NativeDatetimeAdapter.prototype.getMinuteNames = function () {
        return DEFAULT_MINUTE_NAMES;
    };
    NativeDatetimeAdapter.prototype.addCalendarYears = function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    NativeDatetimeAdapter.prototype.addCalendarMonths = function (date, months) {
        var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date), this.getHour(date), this.getMinute(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) !== ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0, this.getHour(date), this.getMinute(date));
        }
        return newDate;
    };
    NativeDatetimeAdapter.prototype.addCalendarDays = function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days, this.getHour(date), this.getMinute(date));
    };
    NativeDatetimeAdapter.prototype.addCalendarHours = function (date, hours) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date) + hours, this.getMinute(date));
    };
    NativeDatetimeAdapter.prototype.addCalendarMinutes = function (date, minutes) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date) + minutes);
    };
    NativeDatetimeAdapter.prototype.toIso8601 = function (date) {
        return _super.prototype.toIso8601.call(this, date) + "T" + [
            this._2digit(date.getUTCHours()),
            this._2digit(date.getUTCMinutes())
        ].join(":");
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param str The string to strip direction characters from.
     * @returns The stripped string.
     */
    NativeDatetimeAdapter.prototype._stripDirectionalityCharacters = function (str) {
        return str.replace(/[\u200e\u200f]/g, "");
    };
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    NativeDatetimeAdapter.prototype._2digit = function (n) {
        return ("00" + n).slice(-2);
    };
    /** Creates a date but allows the month and date to overflow. */
    NativeDatetimeAdapter.prototype._createDateWithOverflow = function (year, month, date, hours, minutes) {
        var result = new Date(year, month, date, hours, minutes);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    NativeDatetimeAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
        { type: DateAdapter }
    ]; };
    NativeDatetimeAdapter = __decorate([
        Injectable(),
        __param(0, Optional()), __param(0, Inject(MAT_DATE_LOCALE)),
        __metadata("design:paramtypes", [String, DateAdapter])
    ], NativeDatetimeAdapter);
    return NativeDatetimeAdapter;
}(DatetimeAdapter));
export { NativeDatetimeAdapter };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGV0aW1lLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiYWRhcHRlci9uYXRpdmUtZGF0ZXRpbWUtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNoQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztTQUdoQixVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTO0FBRG5ELGtFQUFrRTtBQUNsRSxJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxFQUFFLEtBQWlCLENBQUM7U0FHZCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTO0FBRHJELG9FQUFvRTtBQUNwRSxJQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxFQUFFLEtBQWlCLENBQUM7QUFFdkQsU0FBUyxLQUFLLENBQUksTUFBYyxFQUFFLGFBQW1DO0lBQ25FLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkM7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBR0Q7SUFBMkMseUNBQXFCO0lBRTlELCtCQUFpRCxhQUFxQixFQUFFLFNBQTRCO1FBQXBHLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBRWpCO1FBREMsS0FB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U0FuSlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBPcHRpb25hbFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZUFkYXB0ZXIsXHJcbiAgTUFUX0RBVEVfTE9DQUxFXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5cclxuLyoqIFRoZSBkZWZhdWx0IGhvdXIgbmFtZXMgdG8gdXNlIGlmIEludGwgQVBJIGlzIG5vdCBhdmFpbGFibGUuICovXHJcbmNvbnN0IERFRkFVTFRfSE9VUl9OQU1FUyA9IHJhbmdlKDI0LCBpID0+IFN0cmluZyhpKSk7XHJcblxyXG4vKiogVGhlIGRlZmF1bHQgbWludXRlIG5hbWVzIHRvIHVzZSBpZiBJbnRsIEFQSSBpcyBub3QgYXZhaWxhYmxlLiAqL1xyXG5jb25zdCBERUZBVUxUX01JTlVURV9OQU1FUyA9IHJhbmdlKDYwLCBpID0+IFN0cmluZyhpKSk7XHJcblxyXG5mdW5jdGlvbiByYW5nZTxUPihsZW5ndGg6IG51bWJlciwgdmFsdWVGdW5jdGlvbjogKGluZGV4OiBudW1iZXIpID0+IFQpOiBUW10ge1xyXG4gIGNvbnN0IHZhbHVlc0FycmF5ID0gQXJyYXkobGVuZ3RoKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YWx1ZXNBcnJheVtpXSA9IHZhbHVlRnVuY3Rpb24oaSk7XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZXNBcnJheTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlRGF0ZXRpbWVBZGFwdGVyIGV4dGVuZHMgRGF0ZXRpbWVBZGFwdGVyPERhdGU+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURV9MT0NBTEUpIG1hdERhdGVMb2NhbGU6IHN0cmluZywgX2RlbGVnYXRlOiBEYXRlQWRhcHRlcjxEYXRlPikge1xyXG4gICAgc3VwZXIoX2RlbGVnYXRlKTtcclxuICAgIHRoaXMuc2V0TG9jYWxlKG1hdERhdGVMb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRGF0ZXRpbWUodGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cihkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgfVxyXG5cclxuICBpc0luTmV4dE1vbnRoKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgbmV4dE1vbnRoID0gdGhpcy5nZXREYXRlSW5OZXh0TW9udGgoc3RhcnREYXRlKTtcclxuICAgIHJldHVybiB0aGlzLnNhbWVNb250aEFuZFllYXIobmV4dE1vbnRoLCBlbmREYXRlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURhdGV0aW1lKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAvLyBDaGVjayBmb3IgaW52YWxpZCBtb250aCBhbmQgZGF0ZSAoZXhjZXB0IHVwcGVyIGJvdW5kIG9uIGRhdGUgd2hpY2ggd2UgaGF2ZSB0byBjaGVjayBhZnRlclxyXG4gICAgLy8gY3JlYXRpbmcgdGhlIERhdGUpLlxyXG4gICAgaWYgKG1vbnRoIDwgMCB8fCBtb250aCA+IDExKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1vbnRoIGluZGV4IFwiJHttb250aH1cIi4gTW9udGggaW5kZXggaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMTEuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGUgPCAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChob3VyIDwgMCB8fCBob3VyID4gMjMpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgaG91ciBcIiR7aG91cn1cIi4gSG91ciBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyMy5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWludXRlIDwgMCB8fCBtaW51dGUgPiA1OSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBtaW51dGUgXCIke21pbnV0ZX1cIi4gTWludXRlIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDU5LmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coeWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgZGF0ZSB3YXNuJ3QgYWJvdmUgdGhlIHVwcGVyIGJvdW5kIGZvciB0aGUgbW9udGgsIGNhdXNpbmcgdGhlIG1vbnRoIHRvIG92ZXJmbG93XHJcbiAgICBpZiAocmVzdWx0LmdldE1vbnRoKCkgIT09IG1vbnRoKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGVJbk5leHRNb250aChkYXRlOiBEYXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAxLFxyXG4gICAgICBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpKTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RGF0ZU9mTW9udGgoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoKTtcclxuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91ck5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBERUZBVUxUX0hPVVJfTkFNRVM7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gREVGQVVMVF9NSU5VVEVfTkFNRVM7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhclllYXJzKGRhdGU6IERhdGUsIHllYXJzOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIHllYXJzICogMTIpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJNb250aHMoZGF0ZTogRGF0ZSwgbW9udGhzOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIGxldCBuZXdEYXRlID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSkgKyBtb250aHMsIHRoaXMuZ2V0RGF0ZShkYXRlKSwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcblxyXG4gICAgLy8gSXQncyBwb3NzaWJsZSB0byB3aW5kIHVwIGluIHRoZSB3cm9uZyBtb250aCBpZiB0aGUgb3JpZ2luYWwgbW9udGggaGFzIG1vcmUgZGF5cyB0aGFuIHRoZSBuZXdcclxuICAgIC8vIG1vbnRoLiBJbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBnbyB0byB0aGUgbGFzdCBkYXkgb2YgdGhlIGRlc2lyZWQgbW9udGguXHJcbiAgICAvLyBOb3RlOiB0aGUgYWRkaXRpb25hbCArIDEyICUgMTIgZW5zdXJlcyB3ZSBlbmQgdXAgd2l0aCBhIHBvc2l0aXZlIG51bWJlciwgc2luY2UgSlMgJSBkb2Vzbid0XHJcbiAgICAvLyBndWFyYW50ZWUgdGhpcy5cclxuICAgIGlmICh0aGlzLmdldE1vbnRoKG5ld0RhdGUpICE9PSAoKHRoaXMuZ2V0TW9udGgoZGF0ZSkgKyBtb250aHMpICUgMTIgKyAxMikgJSAxMikge1xyXG4gICAgICBuZXdEYXRlID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyh0aGlzLmdldFllYXIobmV3RGF0ZSksIHRoaXMuZ2V0TW9udGgobmV3RGF0ZSksIDAsIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdEYXRlO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJEYXlzKGRhdGU6IERhdGUsIGRheXM6IG51bWJlcik6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXHJcbiAgICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSkgKyBkYXlzLCB0aGlzLmdldEhvdXIoZGF0ZSksIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFySG91cnMoZGF0ZTogRGF0ZSwgaG91cnM6IG51bWJlcik6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXHJcbiAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSwgdGhpcy5nZXREYXRlKGRhdGUpLFxyXG4gICAgICB0aGlzLmdldEhvdXIoZGF0ZSkgKyBob3VycywgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJNaW51dGVzKGRhdGU6IERhdGUsIG1pbnV0ZXM6IG51bWJlcik6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXHJcbiAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSwgdGhpcy5nZXREYXRlKGRhdGUpLFxyXG4gICAgICB0aGlzLmdldEhvdXIoZGF0ZSksIHRoaXMuZ2V0TWludXRlKGRhdGUpICsgbWludXRlcyk7XHJcbiAgfVxyXG5cclxuICB0b0lzbzg2MDEoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3VwZXIudG9Jc284NjAxKGRhdGUpICsgXCJUXCIgKyBbXHJcbiAgICAgIHRoaXMuXzJkaWdpdChkYXRlLmdldFVUQ0hvdXJzKCkpLFxyXG4gICAgICB0aGlzLl8yZGlnaXQoZGF0ZS5nZXRVVENNaW51dGVzKCkpXHJcbiAgICBdLmpvaW4oXCI6XCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RyaXAgb3V0IHVuaWNvZGUgTFRSIGFuZCBSVEwgY2hhcmFjdGVycy4gRWRnZSBhbmQgSUUgaW5zZXJ0IHRoZXNlIGludG8gZm9ybWF0dGVkIGRhdGVzIHdoaWxlXHJcbiAgICogb3RoZXIgYnJvd3NlcnMgZG8gbm90LiBXZSByZW1vdmUgdGhlbSB0byBtYWtlIG91dHB1dCBjb25zaXN0ZW50IGFuZCBiZWNhdXNlIHRoZXkgaW50ZXJmZXJlIHdpdGhcclxuICAgKiBkYXRlIHBhcnNpbmcuXHJcbiAgICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHRvIHN0cmlwIGRpcmVjdGlvbiBjaGFyYWN0ZXJzIGZyb20uXHJcbiAgICogQHJldHVybnMgVGhlIHN0cmlwcGVkIHN0cmluZy5cclxuICAgKi9cclxuICBwcml2YXRlIF9zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyhzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFx1MjAwZVxcdTIwMGZdL2csIFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFkcyBhIG51bWJlciB0byBtYWtlIGl0IHR3byBkaWdpdHMuXHJcbiAgICogQHBhcmFtIG4gVGhlIG51bWJlciB0byBwYWQuXHJcbiAgICogQHJldHVybnMgVGhlIHBhZGRlZCBudW1iZXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfMmRpZ2l0KG46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjAwXCIgKyBuKS5zbGljZSgtMik7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlcyBhIGRhdGUgYnV0IGFsbG93cyB0aGUgbW9udGggYW5kIGRhdGUgdG8gb3ZlcmZsb3cuICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRhdGUsIGhvdXJzLCBtaW51dGVzKTtcclxuXHJcbiAgICAvLyBXZSBuZWVkIHRvIGNvcnJlY3QgZm9yIHRoZSBmYWN0IHRoYXQgSlMgbmF0aXZlIERhdGUgdHJlYXRzIHllYXJzIGluIHJhbmdlIFswLCA5OV0gYXNcclxuICAgIC8vIGFiYnJldmlhdGlvbnMgZm9yIDE5eHguXHJcbiAgICBpZiAoeWVhciA+PSAwICYmIHllYXIgPCAxMDApIHtcclxuICAgICAgcmVzdWx0LnNldEZ1bGxZZWFyKHRoaXMuZ2V0WWVhcihyZXN1bHQpIC0gMTkwMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=