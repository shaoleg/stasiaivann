/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownConfig } from './bs-dropdown.config';
import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';
export class BsDropdownModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    }
}
BsDropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            },] }
];
function BsDropdownModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbImJzLWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0J0RCxNQUFNOzs7OztJQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBWTtRQUN6QixNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxzQkFBc0I7Z0JBQ3RCLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO2lCQUNwRTthQUNGO1NBQ0YsQ0FBQztLQUNIOzs7WUE3QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1QixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsbUJBQW1CO2lCQUNwQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcblxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9icy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmNvbmZpZyc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gICAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEJzRHJvcGRvd25EaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICAgIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duTW9kdWxlIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJzRHJvcGRvd25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgICBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBCc0Ryb3Bkb3duQ29uZmlnLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcgPyBjb25maWcgOiB7IGF1dG9DbG9zZTogdHJ1ZSwgaW5zaWRlQ2xpY2s6IGZhbHNlIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==