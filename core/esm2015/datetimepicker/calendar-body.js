import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
export class MatDatetimepickerCalendarCell {
    constructor(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
}
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
let MatDatetimepickerCalendarBody = class MatDatetimepickerCalendarBody {
    constructor() {
        /** The number of columns in the table. */
        this.numCols = 7;
        /** Whether to allow selection of disabled cells. */
        this.allowDisabledSelection = false;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new EventEmitter();
    }
    _cellClicked(cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    }
    /** The number of blank cells to put at the beginning for the first row. */
    get _firstRowOffset() {
        return this.rows && this.rows.length && this.rows[0].length ?
            this.numCols - this.rows[0].length : 0;
    }
    _isActiveCell(rowIndex, colIndex) {
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber === this.activeCell;
    }
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
export { MatDatetimepickerCalendarBody };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9jYWxlbmRhci1ib2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxZQUFtQixLQUFhLEVBQ2IsWUFBb0IsRUFDcEIsU0FBaUIsRUFDakIsT0FBZ0I7UUFIaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUNuQyxDQUFDO0NBQ0Y7QUFFRDs7O0dBR0c7QUFXSCxJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtJQUExQztRQWdCRSwwQ0FBMEM7UUFDakMsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVyQixvREFBb0Q7UUFDM0MsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBRXhDLHVEQUF1RDtRQUM5QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLDBDQUEwQztRQUNoQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBeUI3RCxDQUFDO0lBdkJDLFlBQVksQ0FBQyxJQUFtQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkVBQTJFO0lBQzNFLElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQzlDLElBQUksVUFBVSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUVwRCxzRUFBc0U7UUFDdEUsSUFBSSxRQUFRLEVBQUU7WUFDWixVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNwQztRQUVELE9BQU8sVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7QUFqRFU7SUFBUixLQUFLLEVBQUU7OzREQUFlO0FBR2Q7SUFBUixLQUFLLEVBQUU7OzJEQUF5QztBQUd4QztJQUFSLEtBQUssRUFBRTs7aUVBQW9CO0FBR25CO0lBQVIsS0FBSyxFQUFFOztvRUFBdUI7QUFHdEI7SUFBUixLQUFLLEVBQUU7OzRFQUErQjtBQUc5QjtJQUFSLEtBQUssRUFBRTs7OERBQWE7QUFHWjtJQUFSLEtBQUssRUFBRTs7NkVBQWdDO0FBRy9CO0lBQVIsS0FBSyxFQUFFOztpRUFBZ0I7QUFHZDtJQUFULE1BQU0sRUFBRTs7MEVBQWtEO0FBMUJoRCw2QkFBNkI7SUFWekMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9DQUFvQztRQUM5QywrckRBQWlDO1FBRWpDLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxrQ0FBa0M7U0FDNUM7UUFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLDZCQUE2QixDQW1EekM7U0FuRFksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gYSBzaW5nbGUgY2FsZW5kYXIgY2VsbC5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgICBwdWJsaWMgZGlzcGxheVZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBjYWxlbmRhciBkYXRhIGluIGEgdGFibGUuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIlttYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keV1cIixcclxuICB0ZW1wbGF0ZVVybDogXCJjYWxlbmRhci1ib2R5Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImNhbGVuZGFyLWJvZHkuc2Nzc1wiXSxcclxuICBob3N0OiB7XHJcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHlcIlxyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHkge1xyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSB0YWJsZS4gKGUuZy4gXCJKYW4gMjAxN1wiKS4gKi9cclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIGNlbGxzIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIHJvd3M6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsW11bXTtcclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBjb3JyZXNwb25kcyB0byB0b2RheS4gKi9cclxuICBASW5wdXQoKSB0b2RheVZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBmcmVlIGNlbGxzIG5lZWRlZCB0byBmaXQgdGhlIGxhYmVsIGluIHRoZSBmaXJzdCByb3cuICovXHJcbiAgQElucHV0KCkgbGFiZWxNaW5SZXF1aXJlZENlbGxzOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIG51bUNvbHMgPSA3O1xyXG5cclxuICAvKiogV2hldGhlciB0byBhbGxvdyBzZWxlY3Rpb24gb2YgZGlzYWJsZWQgY2VsbHMuICovXHJcbiAgQElucHV0KCkgYWxsb3dEaXNhYmxlZFNlbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAvKiogVGhlIGNlbGwgbnVtYmVyIG9mIHRoZSBhY3RpdmUgY2VsbCBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgYWN0aXZlQ2VsbCA9IDA7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIF9jZWxsQ2xpY2tlZChjZWxsOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFsbG93RGlzYWJsZWRTZWxlY3Rpb24gJiYgIWNlbGwuZW5hYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdChjZWxsLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIHRvIHB1dCBhdCB0aGUgYmVnaW5uaW5nIGZvciB0aGUgZmlyc3Qgcm93LiAqL1xyXG4gIGdldCBfZmlyc3RSb3dPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnJvd3MgJiYgdGhpcy5yb3dzLmxlbmd0aCAmJiB0aGlzLnJvd3NbMF0ubGVuZ3RoID9cclxuICAgICAgdGhpcy5udW1Db2xzIC0gdGhpcy5yb3dzWzBdLmxlbmd0aCA6IDA7XHJcbiAgfVxyXG5cclxuICBfaXNBY3RpdmVDZWxsKHJvd0luZGV4OiBudW1iZXIsIGNvbEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGxldCBjZWxsTnVtYmVyID0gcm93SW5kZXggKiB0aGlzLm51bUNvbHMgKyBjb2xJbmRleDtcclxuXHJcbiAgICAvLyBBY2NvdW50IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBmaXJzdCByb3cgbWF5IG5vdCBoYXZlIGFzIG1hbnkgY2VsbHMuXHJcbiAgICBpZiAocm93SW5kZXgpIHtcclxuICAgICAgY2VsbE51bWJlciAtPSB0aGlzLl9maXJzdFJvd09mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbE51bWJlciA9PT0gdGhpcy5hY3RpdmVDZWxsO1xyXG4gIH1cclxufVxyXG4iXX0=