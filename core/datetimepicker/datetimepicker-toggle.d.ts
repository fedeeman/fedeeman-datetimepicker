import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material";
import { MatDatetimepicker } from "./datetimepicker";
export declare class MatDatetimepickerToggle<D> implements AfterContentInit, OnChanges, OnDestroy {
    _intl: MatDatepickerIntl;
    private _changeDetectorRef;
    private _stateChanges;
    /** Datepicker instance that the button will toggle. */
    datetimepicker: MatDatetimepicker<D>;
    /** Whether the toggle button is disabled. */
    disabled: boolean;
    private _disabled;
    constructor(_intl: MatDatepickerIntl, _changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    _open(event: Event): void;
    private _watchStateChanges;
}
