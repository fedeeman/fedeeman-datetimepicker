import { __decorate } from "tslib";
import { A11yModule } from "@angular/cdk/a11y";
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
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
    MatDatetimepickerModule = __decorate([
        NgModule({
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
        })
    ], MatDatetimepickerModule);
    return MatDatetimepickerModule;
}());
export { MatDatetimepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3pCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQXFDeEQ7SUFBQTtJQUNBLENBQUM7SUFEWSx1QkFBdUI7UUFuQ25DLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsVUFBVTthQUNYO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLHdCQUF3QjthQUN6QjtZQUNELFlBQVksRUFBRTtnQkFDWix5QkFBeUI7Z0JBQ3pCLDZCQUE2QjtnQkFDN0Isc0JBQXNCO2dCQUN0QixpQkFBaUI7Z0JBQ2pCLHVCQUF1QjtnQkFDdkIsc0JBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLDBCQUEwQjtnQkFDMUIseUJBQXlCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjtnQkFDekIsNkJBQTZCO2dCQUM3QixzQkFBc0I7Z0JBQ3RCLGlCQUFpQjtnQkFDakIsdUJBQXVCO2dCQUN2QixzQkFBc0I7Z0JBQ3RCLHdCQUF3QjtnQkFDeEIsMEJBQTBCO2dCQUMxQix5QkFBeUI7YUFDMUI7U0FDRixDQUFDO09BQ1csdUJBQXVCLENBQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9hMTF5XCI7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5IH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNsb2NrIH0gZnJvbSBcIi4vY2xvY2tcIjtcclxuaW1wb3J0IHtcclxuICBNYXREYXRldGltZXBpY2tlcixcclxuICBNYXREYXRldGltZXBpY2tlckNvbnRlbnRcclxufSBmcm9tIFwiLi9kYXRldGltZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlcklucHV0IH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItaW5wdXRcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci10b2dnbGVcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcgfSBmcm9tIFwiLi9tb250aC12aWV3XCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXcgfSBmcm9tIFwiLi95ZWFyLXZpZXdcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBBMTF5TW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHksXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNsb2NrLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclRvZ2dsZSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VySW5wdXQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXdcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2xvY2ssXHJcbiAgICBNYXREYXRldGltZXBpY2tlcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlld1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyTW9kdWxlIHtcclxufVxyXG4iXX0=