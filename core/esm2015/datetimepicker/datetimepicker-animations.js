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
export const fadeInContent = trigger("fadeInContent", [
    state("showing", style({ opacity: 1 })),
    transition("void => showing", [
        style({ opacity: 0 }),
        animate(`150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)`)
    ])
]);
/** @type {?} */
export const slideCalendar = trigger("slideCalendar", [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFFUCxTQUFTLEVBQ1QsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFPN0IsTUFBTSxPQUFPLGFBQWEsR0FBNkIsT0FBTyxDQUFDLGVBQWUsRUFBRTtJQUM5RSxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3JDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtRQUM1QixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLDhDQUE4QyxDQUFDO0tBQ3hELENBQUM7Q0FDSCxDQUFDOztBQUVGLE1BQU0sT0FBTyxhQUFhLEdBQTZCLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDOUUsVUFBVSxDQUFDLFdBQVcsRUFBRTtRQUN0QixPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztZQUNyQixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO1lBQ25ELEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7U0FDL0MsQ0FBQyxDQUFDO0tBQ0osQ0FBQztJQUNGLFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDckIsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO1lBQ3BELEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO1NBQy9DLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBrZXlmcmFtZXMsXHJcbiAgc3RhdGUsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGFuaW1hdGlvbiBmYWRlcyBpbiB0aGUgYmFja2dyb3VuZCBjb2xvciBhbmQgdGV4dCBjb250ZW50IG9mIHRoZVxyXG4gKiBzZWxlY3QncyBvcHRpb25zLiBJdCBpcyB0aW1lIGRlbGF5ZWQgdG8gb2NjdXIgMTAwbXMgYWZ0ZXIgdGhlIG92ZXJsYXlcclxuICogcGFuZWwgaGFzIHRyYW5zZm9ybWVkIGluLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkNvbnRlbnQ6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoXCJmYWRlSW5Db250ZW50XCIsIFtcclxuICBzdGF0ZShcInNob3dpbmdcIiwgc3R5bGUoe29wYWNpdHk6IDF9KSksXHJcbiAgdHJhbnNpdGlvbihcInZvaWQgPT4gc2hvd2luZ1wiLCBbXHJcbiAgICBzdHlsZSh7b3BhY2l0eTogMH0pLFxyXG4gICAgYW5pbWF0ZShgMTUwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMilgKVxyXG4gIF0pXHJcbl0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlQ2FsZW5kYXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoXCJzbGlkZUNhbGVuZGFyXCIsIFtcclxuICB0cmFuc2l0aW9uKFwiKiA9PiBsZWZ0XCIsIFtcclxuICAgIGFuaW1hdGUoMTgwLCBrZXlmcmFtZXMoW1xyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwJSlcIiwgb2Zmc2V0OiAwLjV9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLCBvZmZzZXQ6IDAuNTF9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsIG9mZnNldDogMX0pXHJcbiAgICBdKSlcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKFwiKiA9PiByaWdodFwiLCBbXHJcbiAgICBhbmltYXRlKDE4MCwga2V5ZnJhbWVzKFtcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLCBvZmZzZXQ6IDAuNX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwJSlcIiwgb2Zmc2V0OiAwLjUxfSksXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLCBvZmZzZXQ6IDF9KVxyXG4gICAgXSkpXHJcbiAgXSlcclxuXSk7XHJcbiJdfQ==