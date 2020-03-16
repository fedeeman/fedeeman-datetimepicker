var MatDatetimepickerInput_1;
import { __decorate, __metadata, __param } from "tslib";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { DOWN_ARROW } from "@angular/cdk/keycodes";
import { AfterContentInit, Directive, ElementRef, EventEmitter, forwardRef, Inject, Input, OnDestroy, Optional, Output } from "@angular/core";
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { MAT_INPUT_VALUE_ACCESSOR } from "@angular/material/input";
import { MatFormField } from "@angular/material/form-field";
import { Subscription } from "rxjs";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MAT_DATETIME_FORMATS } from "../adapter/datetime-formats";
import { MatDatetimepicker } from "./datetimepicker";
import { createMissingDateImplError } from "./datetimepicker-errors";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
// tslint:disable no-use-before-declare
export const MAT_DATETIMEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MatDatetimepickerInput),
    multi: true
};
export const MAT_DATETIMEPICKER_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MatDatetimepickerInput),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
export class MatDatetimepickerInputEvent {
    constructor(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
/** Directive used to connect an input to a MatDatepicker. */
let MatDatetimepickerInput = MatDatetimepickerInput_1 = class MatDatetimepickerInput {
    constructor(_elementRef, _dateAdapter, _dateFormats, _formField) {
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /** Emits when a `change` event is fired on this `<input>`. */
        this.dateChange = new EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.dateInput = new EventEmitter();
        /** Emits when the value changes (either due to user input or programmatic change). */
        this._valueChange = new EventEmitter();
        /** Emits when the disabled state has changed */
        this._disabledChange = new EventEmitter();
        this._onTouched = () => {
        };
        this._cvaOnChange = () => {
        };
        this._validatorOnChange = () => {
        };
        this._datepickerSubscription = Subscription.EMPTY;
        this._localeSubscription = Subscription.EMPTY;
        /** The form control validator for whether the input parses. */
        this._parseValidator = () => {
            return this._lastValueValid ?
                null : { "matDatepickerParse": { "text": this._elementRef.nativeElement.value } };
        };
        /** The form control validator for the min date. */
        this._minValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return (!this.min || !controlValue ||
                this._dateAdapter.compareDatetime(this.min, controlValue) <= 0) ?
                null : { "matDatepickerMin": { "min": this.min, "actual": controlValue } };
        };
        /** The form control validator for the max date. */
        this._maxValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return (!this.max || !controlValue ||
                this._dateAdapter.compareDatetime(this.max, controlValue) >= 0) ?
                null : { "matDatepickerMax": { "max": this.max, "actual": controlValue } };
        };
        /** The form control validator for the date filter. */
        this._filterValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return !this._dateFilter || !controlValue || this._dateFilter(controlValue, MatDatetimepickerFilterType.DATE) ?
                null : { "matDatepickerFilter": true };
        };
        /** The combined form control validator for this input. */
        this._validator = Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /** Whether the last value set on the input was valid. */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
            this.value = this.value;
        });
    }
    /** The datepicker that this input is associated with. */
    set matDatetimepicker(value) {
        this.registerDatepicker(value);
    }
    registerDatepicker(value) {
        if (value) {
            this._datepicker = value;
            this._datepicker._registerInput(this);
        }
    }
    set matDatepickerFilter(filter) {
        this._dateFilter = filter;
        this._validatorOnChange();
    }
    /** The value of the input. */
    get value() {
        return this._value;
    }
    set value(value) {
        value = this._dateAdapter.deserialize(value);
        this._lastValueValid = !value || this._dateAdapter.isValid(value);
        value = this._dateAdapter.getValidDateOrNull(value);
        const oldDate = this.value;
        this._value = value;
        this._formatValue(value);
        // use timeout to ensure the datetimepicker is instantiated and we get the correct format
        setTimeout(() => {
            if (!this._dateAdapter.sameDatetime(oldDate, value)) {
                this._valueChange.emit(value);
            }
        });
    }
    getDisplayFormat() {
        switch (this._datepicker.type) {
            case "date":
                return this._dateFormats.display.dateInput;
            case "datetime":
                return this._dateFormats.display.datetimeInput;
            case "time":
                return this._dateFormats.display.timeInput;
            case "month":
                return this._dateFormats.display.monthInput;
        }
    }
    getParseFormat() {
        let parseFormat;
        switch (this._datepicker.type) {
            case "date":
                parseFormat = this._dateFormats.parse.dateInput;
                break;
            case "datetime":
                parseFormat = this._dateFormats.parse.datetimeInput;
                break;
            case "time":
                parseFormat = this._dateFormats.parse.timeInput;
                break;
            case "month":
                parseFormat = this._dateFormats.parse.monthInput;
                break;
        }
        if (!parseFormat) {
            parseFormat = this._dateFormats.parse.dateInput;
        }
        return parseFormat;
    }
    /** The minimum valid date. */
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        this._validatorOnChange();
    }
    /** The maximum valid date. */
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        this._validatorOnChange();
    }
    /** Whether the datepicker-input is disabled. */
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._disabledChange.emit(newValue);
        }
    }
    ngAfterContentInit() {
        if (this._datepicker) {
            // tslint:disable-next-line deprecation
            this._datepickerSubscription = this._datepicker.selectedChanged.subscribe((selected) => {
                this.value = selected;
                this._cvaOnChange(selected);
                this._onTouched();
                this.dateInput.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
                this.dateChange.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
            });
        }
    }
    ngOnDestroy() {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    }
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getPopupConnectionElementRef() {
        return this._formField ? this._formField.underlineRef : this._elementRef;
    }
    // Implemented as part of ControlValueAccessor
    writeValue(value) {
        this.value = value;
    }
    // Implemented as part of ControlValueAccessor
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    _onKeydown(event) {
        if (event.altKey && event.keyCode === DOWN_ARROW) {
            this._datepicker.open();
            event.preventDefault();
        }
    }
    _onInput(value) {
        let date = this._dateAdapter.parse(value, this.getParseFormat());
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._dateAdapter.getValidDateOrNull(date);
        this._value = date;
        this._cvaOnChange(date);
        this._valueChange.emit(date);
        this.dateInput.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
    }
    _onChange() {
        this.dateChange.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
    }
    /** Handles blur events on the input. */
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    }
    /** Formats a value and sets it on the input element. */
    _formatValue(value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this.getDisplayFormat()) : "";
    }
};
MatDatetimepickerInput.ctorParameters = () => [
    { type: ElementRef },
    { type: DatetimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATETIME_FORMATS,] }] },
    { type: MatFormField, decorators: [{ type: Optional }] }
];
__decorate([
    Input(),
    __metadata("design:type", MatDatetimepicker),
    __metadata("design:paramtypes", [MatDatetimepicker])
], MatDatetimepickerInput.prototype, "matDatetimepicker", null);
__decorate([
    Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], MatDatetimepickerInput.prototype, "matDatepickerFilter", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerInput.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerInput.prototype, "min", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerInput.prototype, "max", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MatDatetimepickerInput.prototype, "disabled", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerInput.prototype, "dateChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatDatetimepickerInput.prototype, "dateInput", void 0);
MatDatetimepickerInput = MatDatetimepickerInput_1 = __decorate([
    Directive({
        selector: "input[matDatetimepicker]",
        providers: [
            MAT_DATETIMEPICKER_VALUE_ACCESSOR,
            MAT_DATETIMEPICKER_VALIDATORS,
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatetimepickerInput_1 },
        ],
        host: {
            "[attr.aria-haspopup]": "true",
            "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
            "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
            "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
            "[disabled]": "disabled",
            "(focus)": "_datepicker._handleFocus()",
            "(input)": "_onInput($event.target.value)",
            "(change)": "_onChange()",
            "(blur)": "_onBlur()",
            "(keydown)": "_onKeydown($event)"
        },
        exportAs: "matDatepickerInput"
    }),
    __param(1, Optional()),
    __param(2, Optional()), __param(2, Inject(MAT_DATETIME_FORMATS)),
    __param(3, Optional()),
    __metadata("design:paramtypes", [ElementRef,
        DatetimeAdapter, Object, MatFormField])
], MatDatetimepickerInput);
export { MatDatetimepickerInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXItaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsYUFBYSxFQUNiLGlCQUFpQixFQUlqQixVQUFVLEVBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG9CQUFvQixFQUVyQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFFLHVDQUF1QztBQUV2QyxNQUFNLENBQUMsTUFBTSxpQ0FBaUMsR0FBUTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxV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QixZQUFZO0dBak03QyxzQkFBc0IsQ0EyU2xDO1NBM1NZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gXCJAYW5ndWxhci9jZGsvY29lcmNpb25cIjtcclxuaW1wb3J0IHsgRE9XTl9BUlJPVyB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgTkdfVkFMSURBVE9SUyxcclxuICBOR19WQUxVRV9BQ0NFU1NPUixcclxuICBWYWxpZGF0aW9uRXJyb3JzLFxyXG4gIFZhbGlkYXRvcixcclxuICBWYWxpZGF0b3JGbixcclxuICBWYWxpZGF0b3JzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdERhdGV0aW1lcGlja2VySW5wdXQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTUFUX0RBVEVUSU1FUElDS0VSX1ZBTElEQVRPUlM6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdERhdGV0aW1lcGlja2VySW5wdXQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdXNlZCBmb3IgZGF0ZXBpY2tlciBpbnB1dCBhbmQgY2hhbmdlIGV2ZW50cy4gV2UgZG9uJ3QgYWx3YXlzIGhhdmUgYWNjZXNzIHRvIGEgbmF0aXZlXHJcbiAqIGlucHV0IG9yIGNoYW5nZSBldmVudCBiZWNhdXNlIHRoZSBldmVudCBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBieSB0aGUgdXNlciBjbGlja2luZyBvbiB0aGVcclxuICogY2FsZW5kYXIgcG9wdXAuIEZvciBjb25zaXN0ZW5jeSwgd2UgYWx3YXlzIHVzZSBNYXREYXRlcGlja2VySW5wdXRFdmVudCBpbnN0ZWFkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudDxEPiB7XHJcbiAgLyoqIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSB0YXJnZXQgZGF0ZXBpY2tlciBpbnB1dC4gKi9cclxuICB2YWx1ZTogRCB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0YXJnZXQ6IE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD4sIHB1YmxpYyB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudGFyZ2V0LnZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIERpcmVjdGl2ZSB1c2VkIHRvIGNvbm5lY3QgYW4gaW5wdXQgdG8gYSBNYXREYXRlcGlja2VyLiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJpbnB1dFttYXREYXRldGltZXBpY2tlcl1cIixcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUixcclxuICAgIE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxJREFUT1JTLFxyXG4gICAge3Byb3ZpZGU6IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE1hdERhdGV0aW1lcGlja2VySW5wdXR9LFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbYXR0ci5hcmlhLWhhc3BvcHVwXVwiOiBcInRydWVcIixcclxuICAgIFwiW2F0dHIuYXJpYS1vd25zXVwiOiBcIihfZGF0ZXBpY2tlcj8ub3BlbmVkICYmIF9kYXRlcGlja2VyLmlkKSB8fCBudWxsXCIsXHJcbiAgICBcIlthdHRyLm1pbl1cIjogXCJtaW4gPyBfZGF0ZUFkYXB0ZXIudG9Jc284NjAxKG1pbikgOiBudWxsXCIsXHJcbiAgICBcIlthdHRyLm1heF1cIjogXCJtYXggPyBfZGF0ZUFkYXB0ZXIudG9Jc284NjAxKG1heCkgOiBudWxsXCIsXHJcbiAgICBcIltkaXNhYmxlZF1cIjogXCJkaXNhYmxlZFwiLFxyXG4gICAgXCIoZm9jdXMpXCI6IFwiX2RhdGVwaWNrZXIuX2hhbmRsZUZvY3VzKClcIixcclxuICAgIFwiKGlucHV0KVwiOiBcIl9vbklucHV0KCRldmVudC50YXJnZXQudmFsdWUpXCIsXHJcbiAgICBcIihjaGFuZ2UpXCI6IFwiX29uQ2hhbmdlKClcIixcclxuICAgIFwiKGJsdXIpXCI6IFwiX29uQmx1cigpXCIsXHJcbiAgICBcIihrZXlkb3duKVwiOiBcIl9vbktleWRvd24oJGV2ZW50KVwiXHJcbiAgfSxcclxuICBleHBvcnRBczogXCJtYXREYXRlcGlja2VySW5wdXRcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksXHJcbiAgVmFsaWRhdG9yIHtcclxuICAvKiogVGhlIGRhdGVwaWNrZXIgdGhhdCB0aGlzIGlucHV0IGlzIGFzc29jaWF0ZWQgd2l0aC4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXREYXRldGltZXBpY2tlcih2YWx1ZTogTWF0RGF0ZXRpbWVwaWNrZXI8RD4pIHtcclxuICAgIHRoaXMucmVnaXN0ZXJEYXRlcGlja2VyKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIF9kYXRlcGlja2VyOiBNYXREYXRldGltZXBpY2tlcjxEPjtcclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckRhdGVwaWNrZXIodmFsdWU6IE1hdERhdGV0aW1lcGlja2VyPEQ+KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyLl9yZWdpc3RlcklucHV0KHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IG1hdERhdGVwaWNrZXJGaWx0ZXIoZmlsdGVyOiAoZGF0ZTogRCB8IG51bGwsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGF0ZUZpbHRlciA9IGZpbHRlcjtcclxuICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBfZGF0ZUZpbHRlcjogKGRhdGU6IEQgfCBudWxsLCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGlucHV0LiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgdGhpcy5fbGFzdFZhbHVlVmFsaWQgPSAhdmFsdWUgfHwgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZCh2YWx1ZSk7XHJcbiAgICB2YWx1ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh2YWx1ZSk7XHJcbiAgICBjb25zdCBvbGREYXRlID0gdGhpcy52YWx1ZTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLl9mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgLy8gdXNlIHRpbWVvdXQgdG8gZW5zdXJlIHRoZSBkYXRldGltZXBpY2tlciBpcyBpbnN0YW50aWF0ZWQgYW5kIHdlIGdldCB0aGUgY29ycmVjdCBmb3JtYXRcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRldGltZShvbGREYXRlLCB2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERpc3BsYXlGb3JtYXQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGVwaWNrZXIudHlwZSkge1xyXG4gICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVJbnB1dDtcclxuICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZXRpbWVJbnB1dDtcclxuICAgICAgY2FzZSBcInRpbWVcIjpcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS50aW1lSW5wdXQ7XHJcbiAgICAgIGNhc2UgXCJtb250aFwiOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoSW5wdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcnNlRm9ybWF0KCkge1xyXG4gICAgbGV0IHBhcnNlRm9ybWF0O1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5fZGF0ZXBpY2tlci50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5kYXRlSW5wdXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkYXRldGltZVwiOlxyXG4gICAgICAgIHBhcnNlRm9ybWF0ID0gdGhpcy5fZGF0ZUZvcm1hdHMucGFyc2UuZGF0ZXRpbWVJbnB1dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInRpbWVcIjpcclxuICAgICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLnRpbWVJbnB1dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1vbnRoXCI6XHJcbiAgICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5tb250aElucHV0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXJzZUZvcm1hdCkge1xyXG4gICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyc2VGb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF92YWx1ZTogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSB2YWxpZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1pbigpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1pbih2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21pbiA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21pbjogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWF4aW11bSB2YWxpZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1heCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xyXG4gIH1cclxuXHJcbiAgc2V0IG1heCh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21heCA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21heDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBkYXRlcGlja2VyLWlucHV0IGlzIGRpc2FibGVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG5cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYSBgY2hhbmdlYCBldmVudCBpcyBmaXJlZCBvbiB0aGlzIGA8aW5wdXQ+YC4gKi9cclxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50PEQ+PigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhbiBgaW5wdXRgIGV2ZW50IGlzIGZpcmVkIG9uIHRoaXMgYDxpbnB1dD5gLiAqL1xyXG4gIEBPdXRwdXQoKSBkYXRlSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudDxEPj4oKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKGVpdGhlciBkdWUgdG8gdXNlciBpbnB1dCBvciBwcm9ncmFtbWF0aWMgY2hhbmdlKS4gKi9cclxuICBfdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQgfCBudWxsPigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGlzYWJsZWQgc3RhdGUgaGFzIGNoYW5nZWQgKi9cclxuICBfZGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jdmFPbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF92YWxpZGF0b3JPbkNoYW5nZSA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIHByaXZhdGUgX2xvY2FsZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB3aGV0aGVyIHRoZSBpbnB1dCBwYXJzZXMuICovXHJcbiAgcHJpdmF0ZSBfcGFyc2VWYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiB0aGlzLl9sYXN0VmFsdWVWYWxpZCA/XHJcbiAgICAgIG51bGwgOiB7XCJtYXREYXRlcGlja2VyUGFyc2VcIjoge1widGV4dFwiOiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWV9fTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIG1pbiBkYXRlLiAqL1xyXG4gIHByaXZhdGUgX21pblZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcclxuICAgIHJldHVybiAoIXRoaXMubWluIHx8ICFjb250cm9sVmFsdWUgfHxcclxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGV0aW1lKHRoaXMubWluLCBjb250cm9sVmFsdWUpIDw9IDApID9cclxuICAgICAgbnVsbCA6IHtcIm1hdERhdGVwaWNrZXJNaW5cIjoge1wibWluXCI6IHRoaXMubWluLCBcImFjdHVhbFwiOiBjb250cm9sVmFsdWV9fTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIG1heCBkYXRlLiAqL1xyXG4gIHByaXZhdGUgX21heFZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcclxuICAgIHJldHVybiAoIXRoaXMubWF4IHx8ICFjb250cm9sVmFsdWUgfHxcclxuICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGV0aW1lKHRoaXMubWF4LCBjb250cm9sVmFsdWUpID49IDApID9cclxuICAgICAgbnVsbCA6IHtcIm1hdERhdGVwaWNrZXJNYXhcIjoge1wibWF4XCI6IHRoaXMubWF4LCBcImFjdHVhbFwiOiBjb250cm9sVmFsdWV9fTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIGRhdGUgZmlsdGVyLiAqL1xyXG4gIHByaXZhdGUgX2ZpbHRlclZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcclxuICAgIHJldHVybiAhdGhpcy5fZGF0ZUZpbHRlciB8fCAhY29udHJvbFZhbHVlIHx8IHRoaXMuX2RhdGVGaWx0ZXIoY29udHJvbFZhbHVlLCBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUuREFURSkgP1xyXG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlckZpbHRlclwiOiB0cnVlfTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgY29tYmluZWQgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhpcyBpbnB1dC4gKi9cclxuICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgbnVsbCA9XHJcbiAgICBWYWxpZGF0b3JzLmNvbXBvc2UoXHJcbiAgICAgIFt0aGlzLl9wYXJzZVZhbGlkYXRvciwgdGhpcy5fbWluVmFsaWRhdG9yLCB0aGlzLl9tYXhWYWxpZGF0b3IsIHRoaXMuX2ZpbHRlclZhbGlkYXRvcl0pO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgbGFzdCB2YWx1ZSBzZXQgb24gdGhlIGlucHV0IHdhcyB2YWxpZC4gKi9cclxuICBwcml2YXRlIF9sYXN0VmFsdWVWYWxpZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfZGF0ZUFkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFVElNRV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZXRpbWVGb3JtYXRzLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2Zvcm1GaWVsZDogTWF0Rm9ybUZpZWxkKSB7XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIk1BVF9EQVRFVElNRV9GT1JNQVRTXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGRhdGUgd2hlbiB0aGUgbG9jYWxlIGNoYW5nZXMuXHJcbiAgICB0aGlzLl9sb2NhbGVTdWJzY3JpcHRpb24gPSBfZGF0ZUFkYXB0ZXIubG9jYWxlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uXHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRlcGlja2VyLnNlbGVjdGVkQ2hhbmdlZC5zdWJzY3JpYmUoKHNlbGVjdGVkOiBEKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICB0aGlzLl9jdmFPbkNoYW5nZShzZWxlY3RlZCk7XHJcbiAgICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZUlucHV0LmVtaXQobmV3IE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2xvY2FsZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fdmFsdWVDaGFuZ2UuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvciA/IHRoaXMuX3ZhbGlkYXRvcihjKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGRhdGVwaWNrZXIgcG9wdXAgc2hvdWxkIGJlIGNvbm5lY3RlZCB0by5cclxuICAgKiBAcmV0dXJuIFRoZSBlbGVtZW50IHRvIGNvbm5lY3QgdGhlIHBvcHVwIHRvLlxyXG4gICAqL1xyXG4gIGdldFBvcHVwQ29ubmVjdGlvbkVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybUZpZWxkID8gdGhpcy5fZm9ybUZpZWxkLnVuZGVybGluZVJlZiA6IHRoaXMuX2VsZW1lbnRSZWY7XHJcbiAgfVxyXG5cclxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdmFPbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBfb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuYWx0S2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlci5vcGVuKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25JbnB1dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgZGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLnBhcnNlKHZhbHVlLCB0aGlzLmdldFBhcnNlRm9ybWF0KCkpO1xyXG4gICAgdGhpcy5fbGFzdFZhbHVlVmFsaWQgPSAhZGF0ZSB8fCB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKGRhdGUpO1xyXG4gICAgZGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbChkYXRlKTtcclxuICAgIHRoaXMuX3ZhbHVlID0gZGF0ZTtcclxuICAgIHRoaXMuX2N2YU9uQ2hhbmdlKGRhdGUpO1xyXG4gICAgdGhpcy5fdmFsdWVDaGFuZ2UuZW1pdChkYXRlKTtcclxuICAgIHRoaXMuZGF0ZUlucHV0LmVtaXQobmV3IE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZSgpIHtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBibHVyIGV2ZW50cyBvbiB0aGUgaW5wdXQuICovXHJcbiAgX29uQmx1cigpIHtcclxuICAgIC8vIFJlZm9ybWF0IHRoZSBpbnB1dCBvbmx5IGlmIHdlIGhhdmUgYSB2YWxpZCB2YWx1ZS5cclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Zvcm1hdFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgIC8qKiBGb3JtYXRzIGEgdmFsdWUgYW5kIHNldHMgaXQgb24gdGhlIGlucHV0IGVsZW1lbnQuICovXHJcbiAgIHByaXZhdGUgX2Zvcm1hdFZhbHVlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9XHJcbiAgICAgICB2YWx1ZSA/IHRoaXMuX2RhdGVBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5nZXREaXNwbGF5Rm9ybWF0KCkpIDogXCJcIjtcclxuICAgfVxyXG59XHJcbiJdfQ==