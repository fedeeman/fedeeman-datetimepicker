/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
export class MatDatetimepickerCalendarCell {
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?} ariaLabel
     * @param {?} enabled
     */
    constructor(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
}
if (false) {
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.value;
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.displayValue;
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.ariaLabel;
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.enabled;
}
/**
 * An internal component used to display calendar data in a table.
 * \@docs-private
 */
export class MatDatetimepickerCalendarBody {
    /**
     * An internal component used to display calendar data in a table.
     * @docs-private
     */
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
    /**
     * @param {?} cell
     * @return {?}
     */
    _cellClicked(cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    }
    /**
     * The number of blank cells to put at the beginning for the first row.
     * @return {?}
     */
    get _firstRowOffset() {
        return this.rows && this.rows.length && this.rows[0].length ?
            this.numCols - this.rows[0].length : 0;
    }
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    _isActiveCell(rowIndex, colIndex) {
        /** @type {?} */
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber === this.activeCell;
    }
}
MatDatetimepickerCalendarBody.decorators = [
    { type: Component, args: [{
                selector: "[mat-datetimepicker-calendar-body]",
                template: `<!--
  If there's not enough space in the first row, create a separate label row. We mark this row as
  aria-hidden because we don't want it to be read out as one of the weeks in the month.
-->
<tr *ngIf="_firstRowOffset < labelMinRequiredCells" aria-hidden="true">
  <td class="mat-datetimepicker-calendar-body-label" [attr.colspan]="numCols" >{{ label }}</td>
</tr>

<!-- Create the first row separately so we can include a special spacer cell. -->
<tr *ngFor="let row of rows; let rowIndex = index" role="row">
  <!--
    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.
  -->
  <td *ngIf="rowIndex === 0 && _firstRowOffset"
      aria-hidden="true"
      class="mat-datetimepicker-calendar-body-label"
      [attr.colspan]="_firstRowOffset">
    {{ _firstRowOffset >= labelMinRequiredCells ? label : '' }}
  </td>
  <td *ngFor="let item of row; let colIndex = index"
      role="gridcell"
      class="mat-datetimepicker-calendar-body-cell"
      [class.mat-datetimepicker-calendar-body-disabled]="!item.enabled"
      [class.mat-datetimepicker-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"
      [attr.aria-label]="item.ariaLabel"
      [attr.aria-disabled]="!item.enabled || null"
      (click)="_cellClicked(item)">
    <div class="mat-datetimepicker-calendar-body-cell-content"
         [class.mat-datetimepicker-calendar-body-selected]="selectedValue === item.value"
         [class.mat-datetimepicker-calendar-body-today]="todayValue === item.value">
      {{ item.displayValue }}
    </div>
  </td>
</tr>
`,
                styles: [`.mat-datetimepicker-calendar-body{font-size:13px;min-width:224px}.mat-datetimepicker-calendar-body-label{padding:7.14286% 0 7.14286% 7.14286%;height:0;line-height:0;color:rgba(0,0,0,.54);-webkit-transform:translateX(-6px);transform:translateX(-6px);text-align:left}.mat-datetimepicker-calendar-body-cell{position:relative;width:14.28571%;height:0;line-height:0;padding:7.14286% 0;text-align:center;outline:0;cursor:pointer}.mat-datetimepicker-calendar-body-disabled{cursor:default;pointer-events:none}.mat-datetimepicker-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border:1px solid transparent;border-radius:50%}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar:focus .mat-datetimepicker-calendar-body-active>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected),:not(.mat-datetimepicker-calendar-body-disabled):hover>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){background-color:rgba(0,0,0,.12)}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-today:not(.mat-datetimepicker-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .mat-datetimepicker-calendar-body-label{padding:0 7.14286% 0 0;-webkit-transform:translateX(6px);transform:translateX(6px);text-align:right}`],
                host: {
                    "class": "mat-datetimepicker-calendar-body"
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
MatDatetimepickerCalendarBody.propDecorators = {
    label: [{ type: Input }],
    rows: [{ type: Input }],
    todayValue: [{ type: Input }],
    selectedValue: [{ type: Input }],
    labelMinRequiredCells: [{ type: Input }],
    numCols: [{ type: Input }],
    allowDisabledSelection: [{ type: Input }],
    activeCell: [{ type: Input }],
    selectedValueChange: [{ type: Output }]
};
if (false) {
    /**
     * The label for the table. (e.g. "Jan 2017").
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.label;
    /**
     * The cells to display in the table.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.rows;
    /**
     * The value in the table that corresponds to today.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.todayValue;
    /**
     * The value in the table that is currently selected.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.selectedValue;
    /**
     * The minimum number of free cells needed to fit the label in the first row.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.labelMinRequiredCells;
    /**
     * The number of columns in the table.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.numCols;
    /**
     * Whether to allow selection of disabled cells.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.allowDisabledSelection;
    /**
     * The cell number of the active cell in the table.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.activeCell;
    /**
     * Emits when a new value is selected.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.selectedValueChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXItYm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7OztBQU12QixNQUFNOzs7Ozs7O0lBQ0osWUFBbUIsS0FBYSxFQUNiLFlBQW9CLEVBQ3BCLFNBQWlCLEVBQ2pCLE9BQWdCO1FBSGhCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFDbkMsQ0FBQztDQUNGOzs7SUFMYSw4Q0FBb0I7O0lBQ3BCLHFEQUEyQjs7SUFDM0Isa0RBQXdCOztJQUN4QixnREFBdUI7Ozs7OztBQW9EckMsTUFBTTtJQWhETjs7O09BR0c7SUFDSDtRQTRERSwwQ0FBMEM7UUFDakMsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVyQixvREFBb0Q7UUFDM0MsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBRXhDLHVEQUF1RDtRQUM5QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLDBDQUEwQztRQUNoQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBeUI3RCxDQUFDOzs7OztJQXZCQyxZQUFZLENBQUMsSUFBbUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFHRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxRQUFnQixFQUFFLFFBQWdCOztZQUMxQyxVQUFVLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUTtRQUVuRCxzRUFBc0U7UUFDdEUsSUFBSSxRQUFRLEVBQUU7WUFDWixVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNwQztRQUVELE9BQU8sVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQ1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsdWhEQUF1aEQsQ0FBQztnQkFDamlELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsa0NBQWtDO2lCQUM1QztnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztvQkFHRSxLQUFLO21CQUdMLEtBQUs7eUJBR0wsS0FBSzs0QkFHTCxLQUFLO29DQUdMLEtBQUs7c0JBR0wsS0FBSztxQ0FHTCxLQUFLO3lCQUdMLEtBQUs7a0NBR0wsTUFBTTs7Ozs7OztJQXhCUCw4Q0FBdUI7Ozs7O0lBR3ZCLDZDQUFpRDs7Ozs7SUFHakQsbURBQTRCOzs7OztJQUc1QixzREFBK0I7Ozs7O0lBRy9CLDhEQUF1Qzs7Ozs7SUFHdkMsZ0RBQXFCOzs7OztJQUdyQiwrREFBd0M7Ozs7O0lBR3hDLG1EQUF3Qjs7Ozs7SUFHeEIsNERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gYSBzaW5nbGUgY2FsZW5kYXIgY2VsbC5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgICBwdWJsaWMgZGlzcGxheVZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBjYWxlbmRhciBkYXRhIGluIGEgdGFibGUuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIlttYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keV1cIixcclxuICB0ZW1wbGF0ZTogYDwhLS1cclxuICBJZiB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2UgaW4gdGhlIGZpcnN0IHJvdywgY3JlYXRlIGEgc2VwYXJhdGUgbGFiZWwgcm93LiBXZSBtYXJrIHRoaXMgcm93IGFzXHJcbiAgYXJpYS1oaWRkZW4gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGl0IHRvIGJlIHJlYWQgb3V0IGFzIG9uZSBvZiB0aGUgd2Vla3MgaW4gdGhlIG1vbnRoLlxyXG4tLT5cclxuPHRyICpuZ0lmPVwiX2ZpcnN0Um93T2Zmc2V0IDwgbGFiZWxNaW5SZXF1aXJlZENlbGxzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgPHRkIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWxcIiBbYXR0ci5jb2xzcGFuXT1cIm51bUNvbHNcIiA+e3sgbGFiZWwgfX08L3RkPlxyXG48L3RyPlxyXG5cclxuPCEtLSBDcmVhdGUgdGhlIGZpcnN0IHJvdyBzZXBhcmF0ZWx5IHNvIHdlIGNhbiBpbmNsdWRlIGEgc3BlY2lhbCBzcGFjZXIgY2VsbC4gLS0+XHJcbjx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3M7IGxldCByb3dJbmRleCA9IGluZGV4XCIgcm9sZT1cInJvd1wiPlxyXG4gIDwhLS1cclxuICAgIFdlIG1hcmsgdGhpcyBjZWxsIGFzIGFyaWEtaGlkZGVuIHNvIGl0IGRvZXNuJ3QgZ2V0IHJlYWQgb3V0IGFzIG9uZSBvZiB0aGUgZGF5cyBpbiB0aGUgd2Vlay5cclxuICAtLT5cclxuICA8dGQgKm5nSWY9XCJyb3dJbmRleCA9PT0gMCAmJiBfZmlyc3RSb3dPZmZzZXRcIlxyXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVsXCJcclxuICAgICAgW2F0dHIuY29sc3Bhbl09XCJfZmlyc3RSb3dPZmZzZXRcIj5cclxuICAgIHt7IF9maXJzdFJvd09mZnNldCA+PSBsYWJlbE1pblJlcXVpcmVkQ2VsbHMgPyBsYWJlbCA6ICcnIH19XHJcbiAgPC90ZD5cclxuICA8dGQgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93OyBsZXQgY29sSW5kZXggPSBpbmRleFwiXHJcbiAgICAgIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbFwiXHJcbiAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkXCJcclxuICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWFjdGl2ZV09XCJfaXNBY3RpdmVDZWxsKHJvd0luZGV4LCBjb2xJbmRleClcIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIml0ZW0uYXJpYUxhYmVsXCJcclxuICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkIHx8IG51bGxcIlxyXG4gICAgICAoY2xpY2spPVwiX2NlbGxDbGlja2VkKGl0ZW0pXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50XCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkXT1cInNlbGVjdGVkVmFsdWUgPT09IGl0ZW0udmFsdWVcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktdG9kYXldPVwidG9kYXlWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiPlxyXG4gICAgICB7eyBpdGVtLmRpc3BsYXlWYWx1ZSB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC90ZD5cclxuPC90cj5cclxuYCxcclxuICBzdHlsZXM6IFtgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4O21pbi13aWR0aDoyMjRweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWx7cGFkZGluZzo3LjE0Mjg2JSAwIDcuMTQyODYlIDcuMTQyODYlO2hlaWdodDowO2xpbmUtaGVpZ2h0OjA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCk7dGV4dC1hbGlnbjpsZWZ0fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxse3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE0LjI4NTcxJTtoZWlnaHQ6MDtsaW5lLWhlaWdodDowO3BhZGRpbmc6Ny4xNDI4NiUgMDt0ZXh0LWFsaWduOmNlbnRlcjtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVke2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NSU7bGVmdDo1JTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjkwJTtoZWlnaHQ6OTAlO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyOmZvY3VzIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSw6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xOCl9W2Rpcj1ydGxdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbHtwYWRkaW5nOjAgNy4xNDI4NiUgMCAwOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg2cHgpO3RleHQtYWxpZ246cmlnaHR9YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5XCJcclxuICB9LFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5IHtcclxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgdGFibGUuIChlLmcuIFwiSmFuIDIwMTdcIikuICovXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBjZWxscyB0byBkaXNwbGF5IGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSByb3dzOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbFtdW107XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgY29ycmVzcG9uZHMgdG8gdG9kYXkuICovXHJcbiAgQElucHV0KCkgdG9kYXlWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC4gKi9cclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBudW1iZXIgb2YgZnJlZSBjZWxscyBuZWVkZWQgdG8gZml0IHRoZSBsYWJlbCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsTWluUmVxdWlyZWRDZWxsczogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSBudW1Db2xzID0gNztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdG8gYWxsb3cgc2VsZWN0aW9uIG9mIGRpc2FibGVkIGNlbGxzLiAqL1xyXG4gIEBJbnB1dCgpIGFsbG93RGlzYWJsZWRTZWxlY3Rpb24gPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRoZSBjZWxsIG51bWJlciBvZiB0aGUgYWN0aXZlIGNlbGwgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUNlbGwgPSAwO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZC4gKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBfY2VsbENsaWNrZWQoY2VsbDogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbGxvd0Rpc2FibGVkU2VsZWN0aW9uICYmICFjZWxsLmVuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQoY2VsbC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIG51bWJlciBvZiBibGFuayBjZWxscyB0byBwdXQgYXQgdGhlIGJlZ2lubmluZyBmb3IgdGhlIGZpcnN0IHJvdy4gKi9cclxuICBnZXQgX2ZpcnN0Um93T2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzICYmIHRoaXMucm93cy5sZW5ndGggJiYgdGhpcy5yb3dzWzBdLmxlbmd0aCA/XHJcbiAgICAgIHRoaXMubnVtQ29scyAtIHRoaXMucm93c1swXS5sZW5ndGggOiAwO1xyXG4gIH1cclxuXHJcbiAgX2lzQWN0aXZlQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY2VsbE51bWJlciA9IHJvd0luZGV4ICogdGhpcy5udW1Db2xzICsgY29sSW5kZXg7XHJcblxyXG4gICAgLy8gQWNjb3VudCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgZmlyc3Qgcm93IG1heSBub3QgaGF2ZSBhcyBtYW55IGNlbGxzLlxyXG4gICAgaWYgKHJvd0luZGV4KSB7XHJcbiAgICAgIGNlbGxOdW1iZXIgLT0gdGhpcy5fZmlyc3RSb3dPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNlbGxOdW1iZXIgPT09IHRoaXMuYWN0aXZlQ2VsbDtcclxuICB9XHJcbn1cclxuIl19