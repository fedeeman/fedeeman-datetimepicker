import { Directionality } from "@angular/cdk/bidi";
import { Overlay } from "@angular/cdk/overlay";
import { AfterContentInit, EventEmitter, NgZone, OnDestroy, ViewContainerRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subject } from "rxjs";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimepickerCalendar } from "./calendar";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
import { MatDatetimepickerInput } from "./datetimepicker-input";
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
export declare class MatDatetimepickerContent<D> implements AfterContentInit {
    datetimepicker: MatDatetimepicker<D>;
    _calendar: MatDatetimepickerCalendar<D>;
    ngAfterContentInit(): void;
    /**
     * Handles keydown event on datepicker content.
     * @param event The event.
     */
    _handleKeydown(event: KeyboardEvent): void;
}
export declare class MatDatetimepicker<D> implements OnDestroy {
    private _dialog;
    private _overlay;
    private _ngZone;
    private _viewContainerRef;
    private _scrollStrategy;
    private _dateAdapter;
    private _dir;
    private _document;
    /** The date to open the calendar to initially. */
    get startAt(): D | null;
    set startAt(date: D | null);
    private _startAt;
    /** The view that the calendar should start in. */
    startView: "clock" | "month" | "year";
    mode: "auto" | "portrait" | "landscape";
    timeInterval: number;
    get openOnFocus(): boolean;
    set openOnFocus(value: boolean);
    private _openOnFocus;
    _handleFocus(): void;
    get type(): "date" | "time" | "month" | "datetime";
    set type(value: "date" | "time" | "month" | "datetime");
    private _type;
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    get touchUi(): boolean;
    set touchUi(value: boolean);
    private _touchUi;
    /** Whether the datepicker pop-up should be disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /**
     * Emits new selected date when selected date changes.
     * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
     */
    selectedChanged: EventEmitter<D>;
    /** Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`. */
    panelClass: string | string[];
    confirmButtonLabel: string;
    cancelButtonLabel: string;
    /** Emits when the datepicker has been opened. */
    openedStream: EventEmitter<void>;
    /** Emits when the datepicker has been closed. */
    closedStream: EventEmitter<void>;
    /** Whether the calendar is open. */
    opened: boolean;
    /** The id for the datepicker calendar. */
    id: string;
    /** The currently selected date. */
    get _selected(): D | null;
    set _selected(value: D | null);
    private _validSelected;
    /** The minimum selectable date. */
    get _minDate(): D | null;
    /** The maximum selectable date. */
    get _maxDate(): D | null;
    get _dateFilter(): (date: D | null, type: MatDatetimepickerFilterType) => boolean;
    /** A reference to the overlay when the calendar is opened as a popup. */
    private _popupRef;
    /** A reference to the dialog when the calendar is opened as a dialog. */
    private _dialogRef;
    /** A portal containing the calendar for this datepicker. */
    private _calendarPortal;
    /** The element that was focused before the datepicker was opened. */
    private _focusedElementBeforeOpen;
    private _inputSubscription;
    /** The input element this datepicker is associated with. */
    _datepickerInput: MatDatetimepickerInput<D>;
    /** Emits when the datepicker is disabled. */
    _disabledChange: Subject<boolean>;
    constructor(_dialog: MatDialog, _overlay: Overlay, _ngZone: NgZone, _viewContainerRef: ViewContainerRef, _scrollStrategy: any, _dateAdapter: DatetimeAdapter<D>, _dir: Directionality, _document: any);
    ngOnDestroy(): void;
    /** Selects the given date */
    _select(date: D): void;
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    _registerInput(input: MatDatetimepickerInput<D>): void;
    /** Open the calendar. */
    open(): void;
    /** Close the calendar. */
    close(): void;
    /** Open the calendar as a dialog. */
    private _openAsDialog;
    /** Open the calendar as a popup. */
    private _openAsPopup;
    /** Create the popup. */
    private _createPopup;
    /** Create the popup PositionStrategy. */
    private _createPopupPositionStrategy;
}