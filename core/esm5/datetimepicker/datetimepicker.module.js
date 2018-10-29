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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGVBQWUsRUFDZixhQUFhLEVBQ2QsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3pCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4RDtJQUFBO0lBb0NBLENBQUM7O2dCQXBDQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixVQUFVO3FCQUNYO29CQUNELGVBQWUsRUFBRTt3QkFDZix3QkFBd0I7cUJBQ3pCO29CQUNELFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0Isc0JBQXNCO3dCQUN0QixpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLDBCQUEwQjt3QkFDMUIseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AseUJBQXlCO3dCQUN6Qiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QiwwQkFBMEI7d0JBQzFCLHlCQUF5QjtxQkFDMUI7aUJBQ0Y7O0lBRUQsOEJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQURZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2ExMXlcIjtcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gIE1hdEljb25Nb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5IH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNsb2NrIH0gZnJvbSBcIi4vY2xvY2tcIjtcclxuaW1wb3J0IHtcclxuICBNYXREYXRldGltZXBpY2tlcixcclxuICBNYXREYXRldGltZXBpY2tlckNvbnRlbnRcclxufSBmcm9tIFwiLi9kYXRldGltZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlcklucHV0IH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItaW5wdXRcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci10b2dnbGVcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcgfSBmcm9tIFwiLi9tb250aC12aWV3XCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXcgfSBmcm9tIFwiLi95ZWFyLXZpZXdcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBBMTF5TW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHksXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNsb2NrLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclRvZ2dsZSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VySW5wdXQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXdcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2xvY2ssXHJcbiAgICBNYXREYXRldGltZXBpY2tlcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlld1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyTW9kdWxlIHtcclxufVxyXG4iXX0=