/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
export class BsDatepickerDayDecoratorComponent {
    /**
     * @param {?} _config
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
    }
}
BsDatepickerDayDecoratorComponent.decorators = [
    { type: Component, args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected'
                },
                template: `{{ day.label }}`
            }] }
];
/** @nocollapse */
BsDatepickerDayDecoratorComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
];
BsDatepickerDayDecoratorComponent.propDecorators = {
    "day": [{ type: Input },],
};
function BsDatepickerDayDecoratorComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerDayDecoratorComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerDayDecoratorComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDatepickerDayDecoratorComponent.propDecorators;
    /** @type {?} */
    BsDatepickerDayDecoratorComponent.prototype.day;
    /** @type {?} */
    BsDatepickerDayDecoratorComponent.prototype._config;
    /** @type {?} */
    BsDatepickerDayDecoratorComponent.prototype._elRef;
    /** @type {?} */
    BsDatepickerDayDecoratorComponent.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWtCaEUsTUFBTTs7Ozs7O0lBR0osWUFDVSxTQUNBLFFBQ0E7UUFGQSxZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO1FBQ04sY0FBUyxHQUFULFNBQVM7S0FDZDs7OztJQUVMLFFBQVE7UUFDTixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNuRjtLQUNGOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsZ0JBQWdCO29CQUNwQyx3QkFBd0IsRUFBRSxlQUFlO29CQUN6Qyx3QkFBd0IsRUFBRSxrQkFBa0I7b0JBQzVDLCtCQUErQixFQUFFLHlCQUF5QjtvQkFDMUQsa0JBQWtCLEVBQUUsZUFBZTtvQkFDbkMsc0JBQXNCLEVBQUUsc0JBQXNCO29CQUM5QyxvQkFBb0IsRUFBRSxvQkFBb0I7b0JBQzFDLGtCQUFrQixFQUFFLGdCQUFnQjtpQkFDckM7Z0JBQ0QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQWpCUSxrQkFBa0I7WUFOekIsVUFBVTtZQUdWLFNBQVM7OztvQkFzQlIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlckRheURlY29yYXRvcl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2RheS5pc0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmlzLWhpZ2hsaWdodGVkXSc6ICdkYXkuaXNIb3ZlcmVkJyxcbiAgICAnW2NsYXNzLmlzLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoJyxcbiAgICAnW2NsYXNzLmlzLWFjdGl2ZS1vdGhlci1tb250aF0nOiAnZGF5LmlzT3RoZXJNb250aEhvdmVyZWQnLFxuICAgICdbY2xhc3MuaW4tcmFuZ2VdJzogJ2RheS5pc0luUmFuZ2UnLFxuICAgICdbY2xhc3Muc2VsZWN0LXN0YXJ0XSc6ICdkYXkuaXNTZWxlY3Rpb25TdGFydCcsXG4gICAgJ1tjbGFzcy5zZWxlY3QtZW5kXSc6ICdkYXkuaXNTZWxlY3Rpb25FbmQnLFxuICAgICdbY2xhc3Muc2VsZWN0ZWRdJzogJ2RheS5pc1NlbGVjdGVkJ1xuICB9LFxuICB0ZW1wbGF0ZTogYHt7IGRheS5sYWJlbCB9fWBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF5OiBEYXlWaWV3TW9kZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRheS5pc1RvZGF5ICYmIHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fY29uZmlnLmN1c3RvbVRvZGF5Q2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIl19