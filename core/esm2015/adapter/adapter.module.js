/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { MatNativeDateModule, NativeDateModule } from "@angular/material";
import { DatetimeAdapter } from "./datetime-adapter";
import { MAT_DATETIME_FORMATS } from "./datetime-formats";
import { NativeDatetimeAdapter } from "./native-datetime-adapter";
import { MAT_NATIVE_DATETIME_FORMATS } from "./native-datetime-formats";
// tslint:disable max-classes-per-file
export class NativeDatetimeModule {
}
NativeDatetimeModule.decorators = [
    { type: NgModule, args: [{
                imports: [NativeDateModule],
                providers: [
                    {
                        provide: DatetimeAdapter,
                        useClass: NativeDatetimeAdapter
                    }
                ]
            },] },
];
const ɵ0 = MAT_NATIVE_DATETIME_FORMATS;
export class MatNativeDatetimeModule {
}
MatNativeDatetimeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NativeDatetimeModule,
                    MatNativeDateModule
                ],
                providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0 }]
            },] },
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiYWRhcHRlci9hZGFwdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNqQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFZeEUsTUFBTTs7O1lBVEwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQ2hDO2lCQUNGO2FBQ0Y7O1dBU3VELDJCQUEyQjtBQUVuRixNQUFNOzs7WUFQTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLElBQTZCLEVBQUMsQ0FBQzthQUNwRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gIE5hdGl2ZURhdGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNQVRfREFURVRJTUVfRk9STUFUUyB9IGZyb20gXCIuL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuaW1wb3J0IHsgTmF0aXZlRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vbmF0aXZlLWRhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTUFUX05BVElWRV9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSBcIi4vbmF0aXZlLWRhdGV0aW1lLWZvcm1hdHNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZURhdGVNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBEYXRldGltZUFkYXB0ZXIsXHJcbiAgICAgIHVzZUNsYXNzOiBOYXRpdmVEYXRldGltZUFkYXB0ZXJcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRldGltZU1vZHVsZSB7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlRGF0ZXRpbWVNb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTUFUX0RBVEVUSU1FX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTkFUSVZFX0RBVEVUSU1FX0ZPUk1BVFN9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUge1xyXG59XHJcbiJdfQ==