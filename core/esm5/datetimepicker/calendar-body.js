import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
var MatDatetimepickerCalendarCell = /** @class */ (function () {
    function MatDatetimepickerCalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return MatDatetimepickerCalendarCell;
}());
export { MatDatetimepickerCalendarCell };
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
var MatDatetimepickerCalendarBody = /** @class */ (function () {
    function MatDatetimepickerCalendarBody() {
        /** The number of columns in the table. */
        this.numCols = 7;
        /** Whether to allow selection of disabled cells. */
        this.allowDisabledSelection = false;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new EventEmitter();
    }
    MatDatetimepickerCalendarBody.prototype._cellClicked = function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(MatDatetimepickerCalendarBody.prototype, "_firstRowOffset", {
        /** The number of blank cells to put at the beginning for the first row. */
        get: function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    MatDatetimepickerCalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber === this.activeCell;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatDatetimepickerCalendarBody.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MatDatetimepickerCalendarBody.prototype, "rows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatDatetimepickerCalendarBody.prototype, "todayValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatDatetimepickerCalendarBody.prototype, "selectedValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatDatetimepickerCalendarBody.prototype, "labelMinRequiredCells", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "numCols", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "allowDisabledSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "activeCell", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatDatetimepickerCalendarBody.prototype, "selectedValueChange", void 0);
    MatDatetimepickerCalendarBody = __decorate([
        Component({
            selector: "[mat-datetimepicker-calendar-body]",
            template: "<!--\r\n  If there's not enough space in the first row, create a separate label row. We mark this row as\r\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\r\n-->\r\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\r\n  <td class=\"mat-datetimepicker-calendar-body-label\" [attr.colspan]=\"numCols\" >{{ label }}</td>\r\n</tr>\r\n\r\n<!-- Create the first row separately so we can include a special spacer cell. -->\r\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\r\n  <!--\r\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\r\n  -->\r\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\r\n      aria-hidden=\"true\"\r\n      class=\"mat-datetimepicker-calendar-body-label\"\r\n      [attr.colspan]=\"_firstRowOffset\">\r\n    {{ _firstRowOffset >= labelMinRequiredCells ? label : '' }}\r\n  </td>\r\n  <td *ngFor=\"let item of row; let colIndex = index\"\r\n      role=\"gridcell\"\r\n      class=\"mat-datetimepicker-calendar-body-cell\"\r\n      [class.mat-datetimepicker-calendar-body-disabled]=\"!item.enabled\"\r\n      [class.mat-datetimepicker-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\r\n      [attr.aria-label]=\"item.ariaLabel\"\r\n      [attr.aria-disabled]=\"!item.enabled || null\"\r\n      (click)=\"_cellClicked(item)\">\r\n    <div class=\"mat-datetimepicker-calendar-body-cell-content\"\r\n         [class.mat-datetimepicker-calendar-body-selected]=\"selectedValue === item.value\"\r\n         [class.mat-datetimepicker-calendar-body-today]=\"todayValue === item.value\">\r\n      {{ item.displayValue }}\r\n    </div>\r\n  </td>\r\n</tr>\r\n",
            host: {
                "class": "mat-datetimepicker-calendar-body"
            },
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".mat-datetimepicker-calendar-body{font-size:13px;min-width:224px}.mat-datetimepicker-calendar-body-label{padding:7.1428571429% 0 7.1428571429% 7.1428571429%;height:0;line-height:0;color:rgba(0,0,0,.54);transform:translateX(-6px);text-align:left}.mat-datetimepicker-calendar-body-cell{position:relative;width:14.2857142857%;height:0;line-height:0;padding:7.1428571429% 0;text-align:center;outline:0;cursor:pointer}.mat-datetimepicker-calendar-body-disabled{cursor:default;pointer-events:none}.mat-datetimepicker-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border:1px solid transparent;border-radius:50%}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar:focus .mat-datetimepicker-calendar-body-active>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected),:not(.mat-datetimepicker-calendar-body-disabled):hover>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){background-color:rgba(0,0,0,.12)}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-today:not(.mat-datetimepicker-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .mat-datetimepicker-calendar-body-label{padding:0 7.1428571429% 0 0;transform:translateX(6px);text-align:right}"]
        })
    ], MatDatetimepickerCalendarBody);
    return MatDatetimepickerCalendarBody;
}());
export { MatDatetimepickerCalendarBody };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9jYWxlbmRhci1ib2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7OztHQUdHO0FBQ0g7SUFDRSx1Q0FBbUIsS0FBYSxFQUNiLFlBQW9CLEVBQ3BCLFNBQWlCLEVBQ2pCLE9BQWdCO1FBSGhCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFDbkMsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7O0FBRUQ7OztHQUdHO0FBV0g7SUFBQTtRQWdCRSwwQ0FBMEM7UUFDakMsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVyQixvREFBb0Q7UUFDM0MsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBRXhDLHVEQUF1RDtRQUM5QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLDBDQUEwQztRQUNoQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBeUI3RCxDQUFDO0lBdkJDLG9EQUFZLEdBQVosVUFBYSxJQUFtQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0Qsc0JBQUksMERBQWU7UUFEbkIsMkVBQTJFO2FBQzNFO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHFEQUFhLEdBQWIsVUFBYyxRQUFnQixFQUFFLFFBQWdCO1FBQzlDLElBQUksVUFBVSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUVwRCxzRUFBc0U7UUFDdEUsSUFBSSxRQUFRLEVBQUU7WUFDWixVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNwQztRQUVELE9BQU8sVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQztJQWhEUTtRQUFSLEtBQUssRUFBRTs7Z0VBQWU7SUFHZDtRQUFSLEtBQUssRUFBRTs7K0RBQXlDO0lBR3hDO1FBQVIsS0FBSyxFQUFFOztxRUFBb0I7SUFHbkI7UUFBUixLQUFLLEVBQUU7O3dFQUF1QjtJQUd0QjtRQUFSLEtBQUssRUFBRTs7Z0ZBQStCO0lBRzlCO1FBQVIsS0FBSyxFQUFFOztrRUFBYTtJQUdaO1FBQVIsS0FBSyxFQUFFOztpRkFBZ0M7SUFHL0I7UUFBUixLQUFLLEVBQUU7O3FFQUFnQjtJQUdkO1FBQVQsTUFBTSxFQUFFOzs4RUFBa0Q7SUExQmhELDZCQUE2QjtRQVZ6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0NBQW9DO1lBQzlDLCtyREFBaUM7WUFFakMsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxrQ0FBa0M7YUFDNUM7WUFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLDZCQUE2QixDQW1EekM7SUFBRCxvQ0FBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGEgc2luZ2xlIGNhbGVuZGFyIGNlbGwuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGRpc3BsYXlWYWx1ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbikge1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgY2FsZW5kYXIgZGF0YSBpbiBhIHRhYmxlLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJbbWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHldXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiY2FsZW5kYXItYm9keS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJjYWxlbmRhci1ib2R5LnNjc3NcIl0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5XCJcclxuICB9LFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5IHtcclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgdGFibGUuIChlLmcuIFwiSmFuIDIwMTdcIikuICovXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBjZWxscyB0byBkaXNwbGF5IGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSByb3dzOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbFtdW107XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgY29ycmVzcG9uZHMgdG8gdG9kYXkuICovXHJcbiAgQElucHV0KCkgdG9kYXlWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC4gKi9cclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBudW1iZXIgb2YgZnJlZSBjZWxscyBuZWVkZWQgdG8gZml0IHRoZSBsYWJlbCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsTWluUmVxdWlyZWRDZWxsczogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSBudW1Db2xzID0gNztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdG8gYWxsb3cgc2VsZWN0aW9uIG9mIGRpc2FibGVkIGNlbGxzLiAqL1xyXG4gIEBJbnB1dCgpIGFsbG93RGlzYWJsZWRTZWxlY3Rpb24gPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRoZSBjZWxsIG51bWJlciBvZiB0aGUgYWN0aXZlIGNlbGwgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUNlbGwgPSAwO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZC4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBfY2VsbENsaWNrZWQoY2VsbDogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbGxvd0Rpc2FibGVkU2VsZWN0aW9uICYmICFjZWxsLmVuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQoY2VsbC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIG51bWJlciBvZiBibGFuayBjZWxscyB0byBwdXQgYXQgdGhlIGJlZ2lubmluZyBmb3IgdGhlIGZpcnN0IHJvdy4gKi9cclxuICBnZXQgX2ZpcnN0Um93T2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzICYmIHRoaXMucm93cy5sZW5ndGggJiYgdGhpcy5yb3dzWzBdLmxlbmd0aCA/XHJcbiAgICAgIHRoaXMubnVtQ29scyAtIHRoaXMucm93c1swXS5sZW5ndGggOiAwO1xyXG4gIH1cclxuXHJcbiAgX2lzQWN0aXZlQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY2VsbE51bWJlciA9IHJvd0luZGV4ICogdGhpcy5udW1Db2xzICsgY29sSW5kZXg7XHJcblxyXG4gICAgLy8gQWNjb3VudCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgZmlyc3Qgcm93IG1heSBub3QgaGF2ZSBhcyBtYW55IGNlbGxzLlxyXG4gICAgaWYgKHJvd0luZGV4KSB7XHJcbiAgICAgIGNlbGxOdW1iZXIgLT0gdGhpcy5fZmlyc3RSb3dPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNlbGxOdW1iZXIgPT09IHRoaXMuYWN0aXZlQ2VsbDtcclxuICB9XHJcbn1cclxuIl19