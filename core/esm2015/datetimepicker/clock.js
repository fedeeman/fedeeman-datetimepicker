import { __decorate, __metadata } from "tslib";
/* tslint:disable */
import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
export const CLOCK_RADIUS = 50;
export const CLOCK_INNER_RADIUS = 27.5;
export const CLOCK_OUTER_RADIUS = 41.25;
export const CLOCK_TICK_RADIUS = 7.0833;
/**
 * A clock that is used as part of the datepicker.
 * @docs-private
 */
let MatDatetimepickerClock = class MatDatetimepickerClock {
    constructor(_element, _adapter) {
        this._element = _element;
        this._adapter = _adapter;
        this._userSelection = new EventEmitter();
        this._timeChanged = false;
        this.interval = 1;
        this.twelvehour = false;
        /** Emits when the currently selected date changes. */
        this.selectedChange = new EventEmitter();
        this.activeDateChange = new EventEmitter();
        /** Hours and Minutes representing the clock view. */
        this._hours = [];
        this._minutes = [];
        /** Whether the clock is in hour view. */
        this._hourView = true;
        this.mouseMoveListener = (event) => {
            this._handleMousemove(event);
        };
        this.mouseUpListener = () => {
            this._handleMouseup();
        };
    }
    /**
     * The date to display in this clock view.
     */
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
        if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
        if (this._selected) {
            this.activeDate = this._selected;
        }
    }
    /** The minimum selectable date. */
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    }
    /** Whether the clock should be started in hour or minute view. */
    set startView(value) {
        this._hourView = value != "minute";
    }
    get _hand() {
        this._selectedHour = this._adapter.getHour(this.activeDate);
        this._selectedMinute = this._adapter.getMinute(this.activeDate);
        let deg = 0;
        let radius = CLOCK_OUTER_RADIUS;
        if (this._hourView) {
            let outer = this._selectedHour > 0 && this._selectedHour < 13;
            radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
            if (this.twelvehour) {
                radius = CLOCK_OUTER_RADIUS;
            }
            deg = Math.round(this._selectedHour * (360 / (24 / 2)));
        }
        else {
            deg = Math.round(this._selectedMinute * (360 / 60));
        }
        return {
            "transform": `rotate(${deg}deg)`,
            "height": `${radius}%`,
            "margin-top": `${50 - radius}%`
        };
    }
    ngAfterContentInit() {
        this.activeDate = this._activeDate || this._adapter.today();
        this._init();
    }
    /** Handles mousedown events on the clock body. */
    _handleMousedown(event) {
        this._timeChanged = false;
        this.setTime(event);
        document.addEventListener("mousemove", this.mouseMoveListener);
        document.addEventListener("touchmove", this.mouseMoveListener);
        document.addEventListener("mouseup", this.mouseUpListener);
        document.addEventListener("touchend", this.mouseUpListener);
    }
    _handleMousemove(event) {
        event.preventDefault();
        this.setTime(event);
    }
    _handleMouseup() {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        document.removeEventListener("touchmove", this.mouseMoveListener);
        document.removeEventListener("mouseup", this.mouseUpListener);
        document.removeEventListener("touchend", this.mouseUpListener);
        if (this._timeChanged) {
            this.selectedChange.emit(this.activeDate);
        }
    }
    /** Initializes this clock view. */
    _init() {
        this._hours.length = 0;
        this._minutes.length = 0;
        let hourNames = this._adapter.getHourNames();
        let minuteNames = this._adapter.getMinuteNames();
        if (this.twelvehour) {
            for (let i = 1; i < (hourNames.length / 2) + 1; i++) {
                let radian = i / 6 * Math.PI;
                let radius = CLOCK_OUTER_RADIUS;
                const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i + 1, 0);
                let enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0);
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS
                });
            }
        }
        else {
            for (let i = 0; i < hourNames.length; i++) {
                let radian = i / 6 * Math.PI;
                let outer = i > 0 && i < 13, radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i, 0);
                let enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                    (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.HOUR));
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
                    fontSize: i > 0 && i < 13 ? "" : "80%"
                });
            }
        }
        for (let i = 0; i < minuteNames.length; i += 5) {
            let radian = i / 30 * Math.PI;
            const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), i);
            let enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.MINUTE));
            this._minutes.push({
                value: i,
                displayValue: i === 0 ? "00" : minuteNames[i],
                enabled: enabled,
                top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
                left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS
            });
        }
    }
    /**
     * Set Time
     * @param event
     */
    setTime(event) {
        let trigger = this._element.nativeElement;
        let triggerRect = trigger.getBoundingClientRect();
        let width = trigger.offsetWidth;
        let height = trigger.offsetHeight;
        let pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
        let pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
        let x = (width / 2) - (pageX - triggerRect.left - window.pageXOffset);
        let y = (height / 2) - (pageY - triggerRect.top - window.pageYOffset);
        let radian = Math.atan2(-x, y);
        let unit = Math.PI / (this._hourView ? 6 : (this.interval ? (30 / this.interval) : 30));
        let z = Math.sqrt(x * x + y * y);
        let outer = this._hourView && z > ((width * (CLOCK_OUTER_RADIUS / 100)) +
            (width * (CLOCK_INNER_RADIUS / 100))) / 2;
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        let value = Math.round(radian / unit);
        let date;
        if (this._hourView) {
            if (this.twelvehour) {
                value = value === 0 ? 12 : value;
            }
            else {
                if (value === 12) {
                    value = 0;
                }
                value = outer ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), value, this._adapter.getMinute(this.activeDate));
        }
        else {
            if (this.interval) {
                value *= this.interval;
            }
            if (value === 60) {
                value = 0;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), value);
        }
        const clamped = this._adapter.clampDate(date, this.minDate, this.maxDate);
        if (date === clamped) {
            this._timeChanged = true;
            this.activeDate = clamped;
            this.activeDateChange.emit(this.activeDate);
        }
    }
};
MatDatetimepickerClock.ctorParameters = () => [
    { type: ElementRef },
    { type: DatetimeAdapter }
];
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerClock.prototype, "_userSelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerClock.prototype, "activeDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerClock.prototype, "selected", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerClock.prototype, "minDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerClock.prototype, "maxDate", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MatDatetimepickerClock.prototype, "startView", null);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MatDatetimepickerClock.prototype, "dateFilter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatDatetimepickerClock.prototype, "interval", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatDatetimepickerClock.prototype, "twelvehour", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerClock.prototype, "selectedChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerClock.prototype, "activeDateChange", void 0);
MatDatetimepickerClock = __decorate([
    Component({
        selector: "mat-datetimepicker-clock",
        template: "<div class=\"mat-datetimepicker-clock\">\r\n  <div class=\"mat-datetimepicker-clock-center\"></div>\r\n  <div class=\"mat-datetimepicker-clock-hand\" [ngStyle]=\"_hand\"></div>\r\n  <div class=\"mat-datetimepicker-clock-hours\" [class.active]=\"_hourView\">\r\n    <div *ngFor=\"let item of _hours\"\r\n         class=\"mat-datetimepicker-clock-cell\"\r\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedHour == item.value\"\r\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\r\n         [style.top]=\"item.top+'%'\"\r\n         [style.left]=\"item.left+'%'\"\r\n         [style.fontSize]=\"item.fontSize\">{{ item.displayValue }}</div>\r\n  </div>\r\n  <div class=\"mat-datetimepicker-clock-minutes\" [class.active]=\"!_hourView\">\r\n    <div *ngFor=\"let item of _minutes\"\r\n         class=\"mat-datetimepicker-clock-cell\"\r\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedMinute == item.value\"\r\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\r\n         [style.top]=\"item.top+'%'\"\r\n         [style.left]=\"item.left+'%'\">{{ item.displayValue }}</div>\r\n  </div>\r\n</div>\r\n",
        host: {
            "role": "clock",
            "(mousedown)": "_handleMousedown($event)"
        },
        styles: [":host{position:relative;display:block;min-width:224px;margin:8px;font-size:14px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mat-datetimepicker-clock{position:relative;width:100%;height:0;padding-top:100%;background-color:#e0e0e0;border-radius:50%}.mat-datetimepicker-clock-center{position:absolute;top:50%;left:50%;width:2%;height:2%;margin:-1%;border-radius:50%}.mat-datetimepicker-clock-hand{position:absolute;top:0;right:0;bottom:0;left:0;width:1px;margin:0 auto;transform-origin:bottom}.mat-datetimepicker-clock-hand::before{content:\"\";position:absolute;top:-4px;left:-4px;width:8px;height:8px;border-radius:50%}.mat-datetimepicker-clock-hours,.mat-datetimepicker-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:350ms;transform:scale(1.2)}.mat-datetimepicker-clock-hours.active,.mat-datetimepicker-clock-minutes.active{opacity:1;visibility:visible;transform:scale(1)}.mat-datetimepicker-clock-minutes{transform:scale(.8)}.mat-datetimepicker-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;color:rgba(0,0,0,.87);justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer}.mat-datetimepicker-clock-cell:not(.mat-datetimepicker-clock-cell-selected):not(.mat-datetimepicker-clock-cell-disabled):hover{background-color:rgba(0,0,0,.1)}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected{color:#fff}"]
    }),
    __metadata("design:paramtypes", [ElementRef,
        DatetimeAdapter])
], MatDatetimepickerClock);
export { MatDatetimepickerClock };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvY2xvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFFLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQztBQUN4QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUM7QUFJeEM7OztHQUdHO0FBVUgsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFvSGpDLFlBQW9CLFFBQW9CLEVBQ3BCLFFBQTRCO1FBRDVCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFuSHRDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQStDNUMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUF1QnBCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVyQyxzREFBc0Q7UUFDNUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBRXZDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFFbkQscURBQXFEO1FBQ3JELFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FB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QU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM3RSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFH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Ozs4REFBMkM7QUFNcEQ7SUFEQyxLQUFLLEVBQUU7Ozt3REFHUDtBQWNEO0lBREMsS0FBSyxFQUFFOzs7c0RBR1A7QUFhRDtJQURDLEtBQUssRUFBRTs7O3FEQUdQO0FBWUQ7SUFEQyxLQUFLLEVBQUU7OztxREFHUDtBQVVEO0lBREMsS0FBSyxFQUFFOzs7dURBR1A7QUFHUTtJQUFSLEtBQUssRUFBRTs7MERBQXFFO0FBRXBFO0lBQVIsS0FBSyxFQUFFOzt3REFBc0I7QUFFckI7SUFBUixLQUFLLEVBQUU7OzBEQUE2QjtBQUczQjtJQUFULE1BQU0sRUFBRTs7OERBQXdDO0FBRXZDO0lBQVQsTUFBTSxFQUFFOztnRUFBMEM7QUEvRXhDLHNCQUFzQjtJQVRsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLDBxQ0FBeUI7UUFFekIsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLE9BQU87WUFDZixhQUFhLEVBQUUsMEJBQTBCO1NBQzFDOztLQUNGLENBQUM7cUNBcUg4QixVQUFVO1FBQ1YsZUFBZTtHQXJIbEMsc0JBQXNCLENBNlJsQztTQTdSWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMT0NLX1JBRElVUyA9IDUwO1xyXG5leHBvcnQgY29uc3QgQ0xPQ0tfSU5ORVJfUkFESVVTID0gMjcuNTtcclxuZXhwb3J0IGNvbnN0IENMT0NLX09VVEVSX1JBRElVUyA9IDQxLjI1O1xyXG5leHBvcnQgY29uc3QgQ0xPQ0tfVElDS19SQURJVVMgPSA3LjA4MzM7XHJcblxyXG5leHBvcnQgdHlwZSBDbG9ja1ZpZXcgPSBcImhvdXJcIiB8IFwibWludXRlXCI7XHJcblxyXG4vKipcclxuICogQSBjbG9jayB0aGF0IGlzIHVzZWQgYXMgcGFydCBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiY2xvY2suaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiY2xvY2suc2Nzc1wiXSxcclxuICBob3N0OiB7XHJcbiAgICBcInJvbGVcIjogXCJjbG9ja1wiLFxyXG4gICAgXCIobW91c2Vkb3duKVwiOiBcIl9oYW5kbGVNb3VzZWRvd24oJGV2ZW50KVwiXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jazxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBAT3V0cHV0KCkgX3VzZXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRvIGRpc3BsYXkgaW4gdGhpcyBjbG9jayB2aWV3LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICBsZXQgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5jbGFtcERhdGUodmFsdWUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcclxuICAgIGlmICghdGhpcy5fYWRhcHRlci5zYW1lTWludXRlKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FjdGl2ZURhdGU6IEQ7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9hZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWluRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2FkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21pbkRhdGU6IEQgfCBudWxsO1xyXG5cclxuICBwcml2YXRlIF90aW1lQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1heERhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heERhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9hZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNsb2NrIHNob3VsZCBiZSBzdGFydGVkIGluIGhvdXIgb3IgbWludXRlIHZpZXcuICovXHJcbiAgQElucHV0KClcclxuICBzZXQgc3RhcnRWaWV3KHZhbHVlOiBDbG9ja1ZpZXcpIHtcclxuICAgIHRoaXMuX2hvdXJWaWV3ID0gdmFsdWUgIT0gXCJtaW51dGVcIjtcclxuICB9XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBELCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICBASW5wdXQoKSB0d2VsdmVob3VyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIGFjdGl2ZURhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBIb3VycyBhbmQgTWludXRlcyByZXByZXNlbnRpbmcgdGhlIGNsb2NrIHZpZXcuICovXHJcbiAgX2hvdXJzOiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgX21pbnV0ZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNsb2NrIGlzIGluIGhvdXIgdmlldy4gKi9cclxuICBfaG91clZpZXc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBfc2VsZWN0ZWRIb3VyOiBudW1iZXI7XHJcbiAgX3NlbGVjdGVkTWludXRlOiBudW1iZXI7XHJcblxyXG4gIGdldCBfaGFuZCgpOiBhbnkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRIb3VyID0gdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB0aGlzLl9zZWxlY3RlZE1pbnV0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBsZXQgZGVnID0gMDtcclxuICAgIGxldCByYWRpdXMgPSBDTE9DS19PVVRFUl9SQURJVVM7XHJcbiAgICBpZiAodGhpcy5faG91clZpZXcpIHtcclxuICAgICAgbGV0IG91dGVyID0gdGhpcy5fc2VsZWN0ZWRIb3VyID4gMCAmJiB0aGlzLl9zZWxlY3RlZEhvdXIgPCAxMztcclxuICAgICAgcmFkaXVzID0gb3V0ZXIgPyBDTE9DS19PVVRFUl9SQURJVVMgOiBDTE9DS19JTk5FUl9SQURJVVM7XHJcbiAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICByYWRpdXMgPSBDTE9DS19PVVRFUl9SQURJVVM7XHJcbiAgICAgIH1cclxuICAgICAgZGVnID0gTWF0aC5yb3VuZCh0aGlzLl9zZWxlY3RlZEhvdXIgKiAoMzYwIC8gKDI0IC8gMikpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlZyA9IE1hdGgucm91bmQodGhpcy5fc2VsZWN0ZWRNaW51dGUgKiAoMzYwIC8gNjApKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6IGByb3RhdGUoJHtkZWd9ZGVnKWAsXHJcbiAgICAgIFwiaGVpZ2h0XCI6IGAke3JhZGl1c30lYCxcclxuICAgICAgXCJtYXJnaW4tdG9wXCI6IGAkezUwIC0gcmFkaXVzfSVgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3VzZU1vdmVMaXN0ZW5lcjogYW55O1xyXG4gIHByaXZhdGUgbW91c2VVcExpc3RlbmVyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+KSB7XHJcbiAgICB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTW91c2Vtb3ZlKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTW91c2V1cCgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGUgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgbW91c2Vkb3duIGV2ZW50cyBvbiB0aGUgY2xvY2sgYm9keS4gKi9cclxuICBfaGFuZGxlTW91c2Vkb3duKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuX3RpbWVDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFRpbWUoZXZlbnQpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZU1vdXNlbW92ZShldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRUaW1lKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVNb3VzZXVwKCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgaWYgKHRoaXMuX3RpbWVDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEluaXRpYWxpemVzIHRoaXMgY2xvY2sgdmlldy4gKi9cclxuICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgdGhpcy5faG91cnMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX21pbnV0ZXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICBsZXQgaG91ck5hbWVzID0gdGhpcy5fYWRhcHRlci5nZXRIb3VyTmFtZXMoKTtcclxuICAgIGxldCBtaW51dGVOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlTmFtZXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGhvdXJOYW1lcy5sZW5ndGggLyAyKSArIDE7IGkrKykge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XHJcbiAgICAgICAgbGV0IHJhZGl1cyA9IENMT0NLX09VVEVSX1JBRElVUztcclxuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIGkgKyAxLCAwKTtcclxuICAgICAgICBsZXQgZW5hYmxlZCA9XHJcbiAgICAgICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApO1xyXG4gICAgICAgIHRoaXMuX2hvdXJzLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IGksXHJcbiAgICAgICAgICBkaXNwbGF5VmFsdWU6IGkgPT09IDAgPyBcIjAwXCIgOiBob3VyTmFtZXNbaV0sXHJcbiAgICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxyXG4gICAgICAgICAgdG9wOiBDTE9DS19SQURJVVMgLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzIC0gQ0xPQ0tfVElDS19SQURJVVMsXHJcbiAgICAgICAgICBsZWZ0OiBDTE9DS19SQURJVVMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gQ0xPQ0tfVElDS19SQURJVVNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VyTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gaSAvIDYgKiBNYXRoLlBJO1xyXG4gICAgICAgIGxldCBvdXRlciA9IGkgPiAwICYmIGkgPCAxMyxcclxuICAgICAgICAgIHJhZGl1cyA9IG91dGVyID8gQ0xPQ0tfT1VURVJfUkFESVVTIDogQ0xPQ0tfSU5ORVJfUkFESVVTO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgaSwgMCk7XHJcbiAgICAgICAgbGV0IGVuYWJsZWQgPVxyXG4gICAgICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxyXG4gICAgICAgICAgKCF0aGlzLm1heERhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKSAmJlxyXG4gICAgICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5IT1VSKSk7XHJcbiAgICAgICAgdGhpcy5faG91cnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogaSxcclxuICAgICAgICAgIGRpc3BsYXlWYWx1ZTogaSA9PT0gMCA/IFwiMDBcIiA6IGhvdXJOYW1lc1tpXSxcclxuICAgICAgICAgIGVuYWJsZWQ6IGVuYWJsZWQsXHJcbiAgICAgICAgICB0b3A6IENMT0NLX1JBRElVUyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICAgIGxlZnQ6IENMT0NLX1JBRElVUyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICAgIGZvbnRTaXplOiBpID4gMCAmJiBpIDwgMTMgPyBcIlwiIDogXCI4MCVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW51dGVOYW1lcy5sZW5ndGg7IGkgKz0gNSkge1xyXG4gICAgICBsZXQgcmFkaWFuID0gaSAvIDMwICogTWF0aC5QSTtcclxuICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSwgaSk7XHJcbiAgICAgIGxldCBlbmFibGVkID1cclxuICAgICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICAgKCF0aGlzLm1heERhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKSAmJlxyXG4gICAgICAgICghdGhpcy5kYXRlRmlsdGVyIHx8IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUuTUlOVVRFKSk7XHJcbiAgICAgIHRoaXMuX21pbnV0ZXMucHVzaCh7XHJcbiAgICAgICAgdmFsdWU6IGksXHJcbiAgICAgICAgZGlzcGxheVZhbHVlOiBpID09PSAwID8gXCIwMFwiIDogbWludXRlTmFtZXNbaV0sXHJcbiAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcclxuICAgICAgICB0b3A6IENMT0NLX1JBRElVUyAtIE1hdGguY29zKHJhZGlhbikgKiBDTE9DS19PVVRFUl9SQURJVVMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICBsZWZ0OiBDTE9DS19SQURJVVMgKyBNYXRoLnNpbihyYWRpYW4pICogQ0xPQ0tfT1VURVJfUkFESVVTIC0gQ0xPQ0tfVElDS19SQURJVVNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgVGltZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0VGltZShldmVudDogYW55KSB7XHJcbiAgICBsZXQgdHJpZ2dlciA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCB0cmlnZ2VyUmVjdCA9IHRyaWdnZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgd2lkdGggPSB0cmlnZ2VyLm9mZnNldFdpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IHRyaWdnZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IHBhZ2VYID0gZXZlbnQucGFnZVggIT09IHVuZGVmaW5lZCA/IGV2ZW50LnBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuICAgIGxldCBwYWdlWSA9IGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQgPyBldmVudC5wYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICBsZXQgeCA9ICh3aWR0aCAvIDIpIC0gKHBhZ2VYIC0gdHJpZ2dlclJlY3QubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldCk7XHJcbiAgICBsZXQgeSA9IChoZWlnaHQgLyAyKSAtIChwYWdlWSAtIHRyaWdnZXJSZWN0LnRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgICBsZXQgcmFkaWFuID0gTWF0aC5hdGFuMigteCwgeSk7XHJcbiAgICBsZXQgdW5pdCA9IE1hdGguUEkgLyAodGhpcy5faG91clZpZXcgPyA2IDogKHRoaXMuaW50ZXJ2YWwgPyAoMzAgLyB0aGlzLmludGVydmFsKSA6IDMwKSk7XHJcbiAgICBsZXQgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuICAgIGxldCBvdXRlciA9IHRoaXMuX2hvdXJWaWV3ICYmIHogPiAoKHdpZHRoICogKENMT0NLX09VVEVSX1JBRElVUyAvIDEwMCkpICtcclxuICAgICAgKHdpZHRoICogKENMT0NLX0lOTkVSX1JBRElVUyAvIDEwMCkpKSAvIDI7XHJcblxyXG4gICAgaWYgKHJhZGlhbiA8IDApIHtcclxuICAgICAgcmFkaWFuID0gTWF0aC5QSSAqIDIgKyByYWRpYW47XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKHJhZGlhbiAvIHVuaXQpO1xyXG5cclxuICAgIGxldCBkYXRlO1xyXG4gICAgaWYgKHRoaXMuX2hvdXJWaWV3KSB7XHJcbiAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSAwID8gMTIgOiB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDEyKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbHVlID0gb3V0ZXIgPyAodmFsdWUgPT09IDAgPyAxMiA6IHZhbHVlKSA6IHZhbHVlID09PSAwID8gMCA6IHZhbHVlICsgMTI7XHJcbiAgICAgIH1cclxuICAgICAgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCB2YWx1ZSwgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgIHZhbHVlICo9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlID09PSA2MCkge1xyXG4gICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgfVxyXG4gICAgICBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhbXBlZCA9IHRoaXMuX2FkYXB0ZXIuY2xhbXBEYXRlKGRhdGUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcclxuICAgIGlmIChkYXRlID09PSBjbGFtcGVkKSB7XHJcbiAgICAgIHRoaXMuX3RpbWVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gY2xhbXBlZDtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19