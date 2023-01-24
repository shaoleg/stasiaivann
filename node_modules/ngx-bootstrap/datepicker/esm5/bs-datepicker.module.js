/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDatepickerInputDirective } from './bs-datepicker-input.directive';
import { BsDatepickerDirective } from './bs-datepicker.component';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInputDirective } from './bs-daterangepicker-input.directive';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsDaterangepickerConfig } from './bs-daterangepicker.config';
import { BsDatepickerInlineDirective } from './bs-datepicker-inline.component';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { BsLocaleService } from './bs-locale.service';
import { BsDatepickerActions } from './reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from './reducer/bs-datepicker.effects';
import { BsDatepickerStore } from './reducer/bs-datepicker.store';
import { BsCalendarLayoutComponent } from './themes/bs/bs-calendar-layout.component';
import { BsCurrentDateViewComponent } from './themes/bs/bs-current-date-view.component';
import { BsCustomDatesViewComponent } from './themes/bs/bs-custom-dates-view.component';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { BsDatepickerDayDecoratorComponent } from './themes/bs/bs-datepicker-day-decorator.directive';
import { BsDatepickerNavigationViewComponent } from './themes/bs/bs-datepicker-navigation-view.component';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { BsDaysCalendarViewComponent } from './themes/bs/bs-days-calendar-view.component';
import { BsMonthCalendarViewComponent } from './themes/bs/bs-months-calendar-view.component';
import { BsTimepickerViewComponent } from './themes/bs/bs-timepicker-view.component';
import { BsYearsCalendarViewComponent } from './themes/bs/bs-years-calendar-view.component';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
var /** @type {?} */ _exports = [
    BsDatepickerContainerComponent,
    BsDaterangepickerContainerComponent,
    BsDatepickerInlineContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerInputDirective,
    BsDaterangepickerDirective,
    BsDatepickerInlineDirective
];
var BsDatepickerModule = /** @class */ (function () {
    function BsDatepickerModule() {
    }
    /**
     * @return {?}
     */
    BsDatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDaterangepickerConfig,
                BsDatepickerInlineConfig,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: tslib_1.__spread([
                        BsDatepickerDayDecoratorComponent,
                        BsCurrentDateViewComponent,
                        BsDatepickerNavigationViewComponent,
                        BsTimepickerViewComponent,
                        BsCalendarLayoutComponent,
                        BsDaysCalendarViewComponent,
                        BsMonthCalendarViewComponent,
                        BsYearsCalendarViewComponent,
                        BsCustomDatesViewComponent
                    ], _exports),
                    entryComponents: [
                        BsDatepickerContainerComponent,
                        BsDaterangepickerContainerComponent,
                        BsDatepickerInlineContainerComponent
                    ],
                    exports: _exports
                },] }
    ];
    return BsDatepickerModule;
}());
export { BsDatepickerModule };
function BsDatepickerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0YsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDekcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDNUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFNUcscUJBQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFFcEMscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUUxQiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBRTFCLDJCQUEyQjtDQUM1QixDQUFDOzs7Ozs7O0lBMkJPLDBCQUFPOzs7SUFBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLG1CQUFtQjtnQkFDbkIsa0JBQWtCO2dCQUNsQix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsbUJBQW1CO2dCQUNuQixlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztLQUNIOztnQkF4Q0YsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWTt3QkFDVixpQ0FBaUM7d0JBQ2pDLDBCQUEwQjt3QkFDMUIsbUNBQW1DO3dCQUNuQyx5QkFBeUI7d0JBRXpCLHlCQUF5Qjt3QkFDekIsMkJBQTJCO3dCQUMzQiw0QkFBNEI7d0JBQzVCLDRCQUE0Qjt3QkFFNUIsMEJBQTBCO3VCQUV2QixRQUFRLENBQ1o7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLDhCQUE4Qjt3QkFDOUIsbUNBQW1DO3dCQUNuQyxvQ0FBb0M7cUJBQ3JDO29CQUNELE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7NkJBcEVEOztTQXFFYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbmZpZyc7XG5cbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5pbXBvcnQgeyBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY2FsZW5kYXItbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0N1cnJlbnREYXRlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1cnJlbnQtZGF0ZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRheXMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb250aENhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLW1vbnRocy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc1RpbWVwaWNrZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtdGltZXBpY2tlci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IF9leHBvcnRzID0gW1xuICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXG4gIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQsXG5cbiAgQnNEYXRlcGlja2VyRGlyZWN0aXZlLFxuICBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcblxuICBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlLFxuICBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSxcblxuICBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQsXG4gICAgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQsXG4gICAgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQsXG4gICAgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCxcblxuICAgIEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQsXG4gICAgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxuICAgIEJzTW9udGhDYWxlbmRhclZpZXdDb21wb25lbnQsXG4gICAgQnNZZWFyc0NhbGVuZGFyVmlld0NvbXBvbmVudCxcblxuICAgIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50LFxuXG4gICAgLi4uX2V4cG9ydHNcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBfZXhwb3J0c1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJzRGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gICAgICAgIEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgICAgICBCc0RhdGVwaWNrZXJBY3Rpb25zLFxuICAgICAgICBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgICAgIEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxuICAgICAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcsXG4gICAgICAgIEJzRGF0ZXBpY2tlckVmZmVjdHMsXG4gICAgICAgIEJzTG9jYWxlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==