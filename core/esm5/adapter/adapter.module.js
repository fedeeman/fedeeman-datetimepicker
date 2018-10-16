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
var NativeDatetimeModule = /** @class */ (function () {
    // tslint:disable max-classes-per-file
    function NativeDatetimeModule() {
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
    return NativeDatetimeModule;
}());
export { NativeDatetimeModule };
var ɵ0 = MAT_NATIVE_DATETIME_FORMATS;
var MatNativeDatetimeModule = /** @class */ (function () {
    function MatNativeDatetimeModule() {
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
    return MatNativeDatetimeModule;
}());
export { MatNativeDatetimeModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImFkYXB0ZXIvYWRhcHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDakIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3hFO0lBREEsc0NBQXNDO0lBQ3RDO0lBVUEsQ0FBQzs7Z0JBVkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7eUJBQ2hDO3FCQUNGO2lCQUNGOztJQUVELDJCQUFDO0NBQUEsQUFWRCxJQVVDO1NBRFksb0JBQW9CO1NBUXVCLDJCQUEyQjtBQUxuRjtJQUFBO0lBUUEsQ0FBQzs7Z0JBUkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxJQUE2QixFQUFDLENBQUM7aUJBQ3BGOztJQUVELDhCQUFDO0NBQUEsQUFSRCxJQVFDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgTmF0aXZlRGF0ZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1BVF9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSBcIi4vZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi9uYXRpdmUtZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNQVRfTkFUSVZFX0RBVEVUSU1FX0ZPUk1BVFMgfSBmcm9tIFwiLi9uYXRpdmUtZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGVcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlRGF0ZU1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IERhdGV0aW1lQWRhcHRlcixcclxuICAgICAgdXNlQ2xhc3M6IE5hdGl2ZURhdGV0aW1lQWRhcHRlclxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdGl2ZURhdGV0aW1lTW9kdWxlIHtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVEYXRldGltZU1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRfREFURVRJTUVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9OQVRJVkVfREFURVRJTUVfRk9STUFUU31dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXROYXRpdmVEYXRldGltZU1vZHVsZSB7XHJcbn1cclxuIl19