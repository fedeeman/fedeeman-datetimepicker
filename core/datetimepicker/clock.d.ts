import { AfterContentInit, ElementRef, EventEmitter } from "@angular/core";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
export declare const CLOCK_RADIUS = 50;
export declare const CLOCK_INNER_RADIUS = 27.5;
export declare const CLOCK_OUTER_RADIUS = 41.25;
export declare const CLOCK_TICK_RADIUS = 7.0833;
export declare type ClockView = "hour" | "minute";
/**
 * A clock that is used as part of the datepicker.
 * @docs-private
 */
export declare class MatDatetimepickerClock<D> implements AfterContentInit {
    private _element;
    private _adapter;
    _userSelection: EventEmitter<void>;
    /**
     * The date to display in this clock view.
     */
    activeDate: D;
    private _activeDate;
    /** The currently selected date. */
    selected: D | null;
    private _selected;
    /** The minimum selectable date. */
    minDate: D | null;
    private _minDate;
    private _timeChanged;
    /** The maximum selectable date. */
    maxDate: D | null;
    private _maxDate;
    /** Whether the clock should be started in hour or minute view. */
    startView: ClockView;
    /** A function used to filter which dates are selectable. */
    dateFilter: (date: D, type: MatDatetimepickerFilterType) => boolean;
    interval: number;
    twelvehour: boolean;
    /** Emits when the currently selected date changes. */
    selectedChange: EventEmitter<D>;
    activeDateChange: EventEmitter<D>;
    /** Hours and Minutes representing the clock view. */
    _hours: Array<Object>;
    _minutes: Array<Object>;
    /** Whether the clock is in hour view. */
    _hourView: boolean;
    _selectedHour: number;
    _selectedMinute: number;
    readonly _hand: any;
    private mouseMoveListener;
    private mouseUpListener;
    constructor(_element: ElementRef, _adapter: DatetimeAdapter<D>);
    ngAfterContentInit(): void;
    /** Handles mousedown events on the clock body. */
    _handleMousedown(event: any): void;
    _handleMousemove(event: any): void;
    _handleMouseup(): void;
    /** Initializes this clock view. */
    private _init;
    /**
     * Set Time
     * @param event
     */
    private setTime;
}
