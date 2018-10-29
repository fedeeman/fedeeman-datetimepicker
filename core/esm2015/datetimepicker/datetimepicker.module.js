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
export class MatDatetimepickerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGVBQWUsRUFDZixhQUFhLEVBQ2QsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3pCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQXFDeEQsTUFBTTs7O1lBbkNMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixhQUFhO29CQUNiLFVBQVU7aUJBQ1g7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHdCQUF3QjtpQkFDekI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3QixzQkFBc0I7b0JBQ3RCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsMEJBQTBCO29CQUMxQix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5QkFBeUI7b0JBQ3pCLDZCQUE2QjtvQkFDN0Isc0JBQXNCO29CQUN0QixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLDBCQUEwQjtvQkFDMUIseUJBQXlCO2lCQUMxQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5XCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1hdEJ1dHRvbk1vZHVsZSxcclxuICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgTWF0SWNvbk1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHkgfSBmcm9tIFwiLi9jYWxlbmRhci1ib2R5XCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2xvY2sgfSBmcm9tIFwiLi9jbG9ja1wiO1xyXG5pbXBvcnQge1xyXG4gIE1hdERhdGV0aW1lcGlja2VyLFxyXG4gIE1hdERhdGV0aW1lcGlja2VyQ29udGVudFxyXG59IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VySW5wdXQgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1pbnB1dFwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlclRvZ2dsZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLXRvZ2dsZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyB9IGZyb20gXCIuL21vbnRoLXZpZXdcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlldyB9IGZyb20gXCIuL3llYXItdmlld1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIEExMXlNb2R1bGVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2xvY2ssXHJcbiAgICBNYXREYXRldGltZXBpY2tlcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlld1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jayxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUsXHJcbiAgICBNYXREYXRldGltZXBpY2tlcklucHV0LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclllYXJWaWV3XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJNb2R1bGUge1xyXG59XHJcbiJdfQ==