/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 * @type {?}
 */
export var fadeInContent = trigger("fadeInContent", [
    state("showing", style({ opacity: 1 })),
    transition("void => showing", [
        style({ opacity: 0 }),
        animate("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
/** @type {?} */
export var slideCalendar = trigger("slideCalendar", [
    transition("* => left", [
        animate(180, keyframes([
            style({ transform: "translateX(100%)", offset: 0.5 }),
            style({ transform: "translateX(-100%)", offset: 0.51 }),
            style({ transform: "translateX(0)", offset: 1 })
        ]))
    ]),
    transition("* => right", [
        animate(180, keyframes([
            style({ transform: "translateX(-100%)", offset: 0.5 }),
            style({ transform: "translateX(100%)", offset: 0.51 }),
            style({ transform: "translateX(0)", offset: 1 })
        ]))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUVQLFNBQVMsRUFDVCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU83QixNQUFNLEtBQU8sYUFBYSxHQUE2QixPQUFPLENBQUMsZUFBZSxFQUFFO0lBQzlFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDckMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO1FBQzVCLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsOENBQThDLENBQUM7S0FDeEQsQ0FBQztDQUNILENBQUM7O0FBRUYsTUFBTSxLQUFPLGFBQWEsR0FBNkIsT0FBTyxDQUFDLGVBQWUsRUFBRTtJQUM5RSxVQUFVLENBQUMsV0FBVyxFQUFFO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7WUFDbkQsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztTQUMvQyxDQUFDLENBQUM7S0FDSixDQUFDO0lBQ0YsVUFBVSxDQUFDLFlBQVksRUFBRTtRQUN2QixPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztZQUNyQixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO1lBQ3BELEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7WUFDcEQsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7U0FDL0MsQ0FBQyxDQUFDO0tBQ0osQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgYW5pbWF0aW9uIGZhZGVzIGluIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCB0ZXh0IGNvbnRlbnQgb2YgdGhlXHJcbiAqIHNlbGVjdCdzIG9wdGlvbnMuIEl0IGlzIHRpbWUgZGVsYXllZCB0byBvY2N1ciAxMDBtcyBhZnRlciB0aGUgb3ZlcmxheVxyXG4gKiBwYW5lbCBoYXMgdHJhbnNmb3JtZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFkZUluQ29udGVudDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcImZhZGVJbkNvbnRlbnRcIiwgW1xyXG4gIHN0YXRlKFwic2hvd2luZ1wiLCBzdHlsZSh7b3BhY2l0eTogMX0pKSxcclxuICB0cmFuc2l0aW9uKFwidm9pZCA9PiBzaG93aW5nXCIsIFtcclxuICAgIHN0eWxlKHtvcGFjaXR5OiAwfSksXHJcbiAgICBhbmltYXRlKGAxNTBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKWApXHJcbiAgXSlcclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVDYWxlbmRhcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcInNsaWRlQ2FsZW5kYXJcIiwgW1xyXG4gIHRyYW5zaXRpb24oXCIqID0+IGxlZnRcIiwgW1xyXG4gICAgYW5pbWF0ZSgxODAsIGtleWZyYW1lcyhbXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiLCBvZmZzZXQ6IDAuNX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIsIG9mZnNldDogMC41MX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiwgb2Zmc2V0OiAxfSlcclxuICAgIF0pKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oXCIqID0+IHJpZ2h0XCIsIFtcclxuICAgIGFuaW1hdGUoMTgwLCBrZXlmcmFtZXMoW1xyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIsIG9mZnNldDogMC41fSksXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiLCBvZmZzZXQ6IDAuNTF9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsIG9mZnNldDogMX0pXHJcbiAgICBdKSlcclxuICBdKVxyXG5dKTtcclxuIl19