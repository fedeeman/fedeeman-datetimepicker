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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9jYWxlbmRhci1ib2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXZCLE1BQU07Ozs7Ozs7SUFDSixZQUFtQixLQUFhLEVBQ2IsWUFBb0IsRUFDcEIsU0FBaUIsRUFDakIsT0FBZ0I7UUFIaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUNuQyxDQUFDO0NBQ0Y7OztJQUxhLDhDQUFvQjs7SUFDcEIscURBQTJCOztJQUMzQixrREFBd0I7O0lBQ3hCLGdEQUF1Qjs7Ozs7O0FBb0RyQyxNQUFNO0lBaEROOzs7T0FHRztJQUNIO1FBNERFLDBDQUEwQztRQUNqQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLG9EQUFvRDtRQUMzQywyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFFeEMsdURBQXVEO1FBQzlDLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFeEIsMENBQTBDO1FBQ2hDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUF5QjdELENBQUM7Ozs7O0lBdkJDLFlBQVksQ0FBQyxJQUFtQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUdELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7O1lBQzFDLFVBQVUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRO1FBRW5ELHNFQUFzRTtRQUN0RSxJQUFJLFFBQVEsRUFBRTtZQUNaLFVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QyxDQUFDOzs7WUE5RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyx1aERBQXVoRCxDQUFDO2dCQUNqaUQsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxrQ0FBa0M7aUJBQzVDO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUdFLEtBQUs7bUJBR0wsS0FBSzt5QkFHTCxLQUFLOzRCQUdMLEtBQUs7b0NBR0wsS0FBSztzQkFHTCxLQUFLO3FDQUdMLEtBQUs7eUJBR0wsS0FBSztrQ0FHTCxNQUFNOzs7Ozs7O0lBeEJQLDhDQUF1Qjs7Ozs7SUFHdkIsNkNBQWlEOzs7OztJQUdqRCxtREFBNEI7Ozs7O0lBRzVCLHNEQUErQjs7Ozs7SUFHL0IsOERBQXVDOzs7OztJQUd2QyxnREFBcUI7Ozs7O0lBR3JCLCtEQUF3Qzs7Ozs7SUFHeEMsbURBQXdCOzs7OztJQUd4Qiw0REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byBhIHNpbmdsZSBjYWxlbmRhciBjZWxsLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGNhbGVuZGFyIGRhdGEgaW4gYSB0YWJsZS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiW21hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5XVwiLFxyXG4gIHRlbXBsYXRlOiBgPCEtLVxyXG4gIElmIHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBpbiB0aGUgZmlyc3Qgcm93LCBjcmVhdGUgYSBzZXBhcmF0ZSBsYWJlbCByb3cuIFdlIG1hcmsgdGhpcyByb3cgYXNcclxuICBhcmlhLWhpZGRlbiBiZWNhdXNlIHdlIGRvbid0IHdhbnQgaXQgdG8gYmUgcmVhZCBvdXQgYXMgb25lIG9mIHRoZSB3ZWVrcyBpbiB0aGUgbW9udGguXHJcbi0tPlxyXG48dHIgKm5nSWY9XCJfZmlyc3RSb3dPZmZzZXQgPCBsYWJlbE1pblJlcXVpcmVkQ2VsbHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICA8dGQgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbFwiIFthdHRyLmNvbHNwYW5dPVwibnVtQ29sc1wiID57eyBsYWJlbCB9fTwvdGQ+XHJcbjwvdHI+XHJcblxyXG48IS0tIENyZWF0ZSB0aGUgZmlyc3Qgcm93IHNlcGFyYXRlbHkgc28gd2UgY2FuIGluY2x1ZGUgYSBzcGVjaWFsIHNwYWNlciBjZWxsLiAtLT5cclxuPHRyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93czsgbGV0IHJvd0luZGV4ID0gaW5kZXhcIiByb2xlPVwicm93XCI+XHJcbiAgPCEtLVxyXG4gICAgV2UgbWFyayB0aGlzIGNlbGwgYXMgYXJpYS1oaWRkZW4gc28gaXQgZG9lc24ndCBnZXQgcmVhZCBvdXQgYXMgb25lIG9mIHRoZSBkYXlzIGluIHRoZSB3ZWVrLlxyXG4gIC0tPlxyXG4gIDx0ZCAqbmdJZj1cInJvd0luZGV4ID09PSAwICYmIF9maXJzdFJvd09mZnNldFwiXHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWxcIlxyXG4gICAgICBbYXR0ci5jb2xzcGFuXT1cIl9maXJzdFJvd09mZnNldFwiPlxyXG4gICAge3sgX2ZpcnN0Um93T2Zmc2V0ID49IGxhYmVsTWluUmVxdWlyZWRDZWxscyA/IGxhYmVsIDogJycgfX1cclxuICA8L3RkPlxyXG4gIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBjb2xJbmRleCA9IGluZGV4XCJcclxuICAgICAgcm9sZT1cImdyaWRjZWxsXCJcclxuICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsXCJcclxuICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxyXG4gICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktYWN0aXZlXT1cIl9pc0FjdGl2ZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaXRlbS5hcmlhTGFiZWxcIlxyXG4gICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWQgfHwgbnVsbFwiXHJcbiAgICAgIChjbGljayk9XCJfY2VsbENsaWNrZWQoaXRlbSlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnRcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWRdPVwic2VsZWN0ZWRWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS10b2RheV09XCJ0b2RheVZhbHVlID09PSBpdGVtLnZhbHVlXCI+XHJcbiAgICAgIHt7IGl0ZW0uZGlzcGxheVZhbHVlIH19XHJcbiAgICA8L2Rpdj5cclxuICA8L3RkPlxyXG48L3RyPlxyXG5gLFxyXG4gIHN0eWxlczogW2AubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHl7Zm9udC1zaXplOjEzcHg7bWluLXdpZHRoOjIyNHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbHtwYWRkaW5nOjcuMTQyODYlIDAgNy4xNDI4NiUgNy4xNDI4NiU7aGVpZ2h0OjA7bGluZS1oZWlnaHQ6MDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KTt0ZXh0LWFsaWduOmxlZnR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGx7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTQuMjg1NzElO2hlaWdodDowO2xpbmUtaGVpZ2h0OjA7cGFkZGluZzo3LjE0Mjg2JSAwO3RleHQtYWxpZ246Y2VudGVyO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1JTtsZWZ0OjUlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6OTAlO2hlaWdodDo5MCU7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCV9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXI6Zm9jdXMgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjE4KX1bZGlyPXJ0bF0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVse3BhZGRpbmc6MCA3LjE0Mjg2JSAwIDA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCg2cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDZweCk7dGV4dC1hbGlnbjpyaWdodH1gXSxcclxuICBob3N0OiB7XHJcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHlcIlxyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHkge1xyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSB0YWJsZS4gKGUuZy4gXCJKYW4gMjAxN1wiKS4gKi9cclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIGNlbGxzIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIHJvd3M6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsW11bXTtcclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBjb3JyZXNwb25kcyB0byB0b2RheS4gKi9cclxuICBASW5wdXQoKSB0b2RheVZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBmcmVlIGNlbGxzIG5lZWRlZCB0byBmaXQgdGhlIGxhYmVsIGluIHRoZSBmaXJzdCByb3cuICovXHJcbiAgQElucHV0KCkgbGFiZWxNaW5SZXF1aXJlZENlbGxzOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIG51bUNvbHMgPSA3O1xyXG5cclxuICAvKiogV2hldGhlciB0byBhbGxvdyBzZWxlY3Rpb24gb2YgZGlzYWJsZWQgY2VsbHMuICovXHJcbiAgQElucHV0KCkgYWxsb3dEaXNhYmxlZFNlbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAvKiogVGhlIGNlbGwgbnVtYmVyIG9mIHRoZSBhY3RpdmUgY2VsbCBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgYWN0aXZlQ2VsbCA9IDA7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIF9jZWxsQ2xpY2tlZChjZWxsOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFsbG93RGlzYWJsZWRTZWxlY3Rpb24gJiYgIWNlbGwuZW5hYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdChjZWxsLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIHRvIHB1dCBhdCB0aGUgYmVnaW5uaW5nIGZvciB0aGUgZmlyc3Qgcm93LiAqL1xyXG4gIGdldCBfZmlyc3RSb3dPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnJvd3MgJiYgdGhpcy5yb3dzLmxlbmd0aCAmJiB0aGlzLnJvd3NbMF0ubGVuZ3RoID9cclxuICAgICAgdGhpcy5udW1Db2xzIC0gdGhpcy5yb3dzWzBdLmxlbmd0aCA6IDA7XHJcbiAgfVxyXG5cclxuICBfaXNBY3RpdmVDZWxsKHJvd0luZGV4OiBudW1iZXIsIGNvbEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGxldCBjZWxsTnVtYmVyID0gcm93SW5kZXggKiB0aGlzLm51bUNvbHMgKyBjb2xJbmRleDtcclxuXHJcbiAgICAvLyBBY2NvdW50IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBmaXJzdCByb3cgbWF5IG5vdCBoYXZlIGFzIG1hbnkgY2VsbHMuXHJcbiAgICBpZiAocm93SW5kZXgpIHtcclxuICAgICAgY2VsbE51bWJlciAtPSB0aGlzLl9maXJzdFJvd09mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbE51bWJlciA9PT0gdGhpcy5hY3RpdmVDZWxsO1xyXG4gIH1cclxufVxyXG4iXX0=