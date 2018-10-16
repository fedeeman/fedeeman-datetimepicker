/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { A11yModule } from "@angular/cdk/a11y";
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatDialogModule, MatIconModule } from "@angular/material";
import { MatDatetimepickerCalendar } from "./calendar";
import { MatDatetimepickerCalendarBody } from "./calendar-body";
import { MatDatetimepickerClock } from "./clock";
import { MatDatetimepicker, MatDatetimepickerContent } from "./datetimepicker";
import { MatDatetimepickerInput } from "./datetimepicker-input";
import { MatDatetimepickerToggle } from "./datetimepicker-toggle";
import { MatDatetimepickerMonthView } from "./month-view";
import { MatDatetimepickerYearView } from "./year-view";
var MatDatetimepickerModule = /** @class */ (function () {
    function MatDatetimepickerModule() {
    }
    MatDatetimepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatDialogModule,
                        MatIconModule,
                        OverlayModule,
                        A11yModule
                    ],
                    entryComponents: [
                        MatDatetimepickerContent
                    ],
                    declarations: [
                        MatDatetimepickerCalendar,
                        MatDatetimepickerCalendarBody,
                        MatDatetimepickerClock,
                        MatDatetimepicker,
                        MatDatetimepickerToggle,
                        MatDatetimepickerInput,
                        MatDatetimepickerContent,
                        MatDatetimepickerMonthView,
                        MatDatetimepickerYearView
                    ],
                    exports: [
                        MatDatetimepickerCalendar,
                        MatDatetimepickerCalendarBody,
                        MatDatetimepickerClock,
                        MatDatetimepicker,
                        MatDatetimepickerToggle,
                        MatDatetimepickerInput,
                        MatDatetimepickerContent,
                        MatDatetimepickerMonthView,
                        MatDatetimepickerYearView
                    ]
                },] },
    ];
    return MatDatetimepickerModule;
}());
export { MatDatetimepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN6QixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFeEQ7SUFBQTtJQW9DQSxDQUFDOztnQkFwQ0EsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsVUFBVTtxQkFDWDtvQkFDRCxlQUFlLEVBQUU7d0JBQ2Ysd0JBQXdCO3FCQUN6QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3dCQUN6Qiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QiwwQkFBMEI7d0JBQzFCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLGlCQUFpQjt3QkFDakIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsMEJBQTBCO3dCQUMxQix5QkFBeUI7cUJBQzFCO2lCQUNGOztJQUVELDhCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9hMTF5XCI7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gIE1hdERpYWxvZ01vZHVsZSxcclxuICBNYXRJY29uTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIgfSBmcm9tIFwiLi9jYWxlbmRhclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSB9IGZyb20gXCIuL2NhbGVuZGFyLWJvZHlcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jayB9IGZyb20gXCIuL2Nsb2NrXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0RGF0ZXRpbWVwaWNrZXIsXHJcbiAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50XHJcbn0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWlucHV0XCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3IH0gZnJvbSBcIi4vbW9udGgtdmlld1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlclllYXJWaWV3IH0gZnJvbSBcIi4veWVhci12aWV3XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgQTExeU1vZHVsZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jayxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUsXHJcbiAgICBNYXREYXRldGltZXBpY2tlcklucHV0LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclllYXJWaWV3XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHksXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNsb2NrLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclRvZ2dsZSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VySW5wdXQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXdcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlck1vZHVsZSB7XHJcbn1cclxuIl19