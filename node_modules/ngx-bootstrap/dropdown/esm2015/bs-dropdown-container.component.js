/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { isBs3 } from 'ngx-bootstrap/utils';
export class BsDropdownContainerComponent {
    /**
     * @param {?} _state
     * @param {?} cd
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_state, cd, _renderer, _element) {
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
            const /** @type {?} */ dropdown = this._element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !isBs3()) {
                this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    this._renderer.setStyle(dropdown, 'left', 'auto');
                    this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (this.direction === 'up') {
                    this._renderer.setStyle(dropdown, 'top', 'auto');
                    this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            this.cd.markForCheck();
            this.cd.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._state.direction;
    }
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    _contains(el) {
        return this._element.nativeElement.contains(el);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    style: 'display:block;position: absolute;'
                },
                template: `
    <div [class.dropup]="direction === 'up'"
         [class.dropdown]="direction === 'down'"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content></div>
  `
            }] }
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState, },
    { type: ChangeDetectorRef, },
    { type: Renderer2, },
    { type: ElementRef, },
];
function BsDropdownContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownContainerComponent.ctorParameters;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.isOpen;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._subscription;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._state;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.cd;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._renderer;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vIiwic291cmNlcyI6WyJicy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZTVDLE1BQU07Ozs7Ozs7SUFVSixZQUNVLFFBQ0EsSUFDQSxXQUNBO1FBSEEsV0FBTSxHQUFOLE1BQU07UUFDTixPQUFFLEdBQUYsRUFBRTtRQUNGLGNBQVMsR0FBVCxTQUFTO1FBQ1QsYUFBUSxHQUFSLFFBQVE7c0JBYlQsS0FBSztRQWVaLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0UsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixRQUFRLEVBQ1IsV0FBVyxFQUNYLG1CQUFtQixDQUNwQixDQUFDO2lCQUNIO2FBQ0Y7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFsQ0QsSUFBSSxTQUFTO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0tBQzlCOzs7Ozs7SUFtQ0QsU0FBUyxDQUFDLEVBQVc7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqRDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2xDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLG1DQUFtQztpQkFDM0M7Z0JBQ0QsUUFBUSxFQUFFOzs7OztHQUtUO2FBQ0Y7Ozs7WUFmUSxlQUFlO1lBTnRCLGlCQUFpQjtZQUlqQixTQUFTO1lBRlQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZHJvcGRvd24tY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246IGFic29sdXRlOydcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzcy5kcm9wdXBdPVwiZGlyZWN0aW9uID09PSAndXAnXCJcbiAgICAgICAgIFtjbGFzcy5kcm9wZG93bl09XCJkaXJlY3Rpb24gPT09ICdkb3duJ1wiXG4gICAgICAgICBbY2xhc3Muc2hvd109XCJpc09wZW5cIlxuICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaXNPcGVuXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpc09wZW4gPSBmYWxzZTtcblxuICBnZXQgZGlyZWN0aW9uKCk6ICdkb3duJyB8ICd1cCcge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5kaXJlY3Rpb247XG4gIH1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudScpO1xuICAgICAgaWYgKGRyb3Bkb3duICYmICFpc0JzMygpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRyb3Bkb3duLCAnc2hvdycpO1xuICAgICAgICBpZiAoZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZW51LXJpZ2h0JykpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ2xlZnQnLCAnYXV0bycpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAncmlnaHQnLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAndG9wJywgJ2F1dG8nKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGRyb3Bkb3duLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgICAndHJhbnNsYXRlWSgtMTAxJSknXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY29udGFpbnMoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGVsKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=