/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownDirective } from './bs-dropdown.directive';
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element, dropdown) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.dropdown = dropdown;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target) &&
            !(this._state.insideClick && this.dropdown._contains(event))) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = tslib_1.__values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    BsDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ElementRef, },
        { type: BsDropdownDirective, },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        "isDisabled": [{ type: HostBinding, args: ['attr.disabled',] },],
        "isOpen": [{ type: HostBinding, args: ['attr.aria-expanded',] },],
        "onClick": [{ type: HostListener, args: ['click', [],] },],
        "onDocumentClick": [{ type: HostListener, args: ['document:click', ['$event'],] },],
        "onEsc": [{ type: HostListener, args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());
export { BsDropdownToggleDirective };
function BsDropdownToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDropdownToggleDirective.propDecorators;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isDisabled;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isOpen;
    /** @type {?} */
    BsDropdownToggleDirective.prototype._subscriptions;
    /** @type {?} */
    BsDropdownToggleDirective.prototype._state;
    /** @type {?} */
    BsDropdownToggleDirective.prototype._element;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.dropdown;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vIiwic291cmNlcyI6WyJicy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBaUI1RCxtQ0FBb0IsTUFBdUIsRUFBVSxRQUFvQixFQUFVLFFBQTZCO1FBQWhILGlCQWFDO1FBYm1CLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQXFCOzBCQVA1RCxJQUFJOzhCQUtmLEVBQUU7O1FBSXpDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ2hDLFVBQUMsS0FBYyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUMxQyxDQUNGLENBQUM7O1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUNwQyxVQUFDLEtBQWMsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQ3RELENBQ0YsQ0FBQztLQUNIOzs7O0lBR0QsMkNBQU87Ozs7UUFDTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBSXJDLG1EQUFlOzs7O2NBQUMsS0FBaUI7UUFDL0IsRUFBRSxDQUFDLENBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ3JCLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNsQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ25ELENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDN0QsQ0FBQyxDQUFDLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7Ozs7O0lBSUgseUNBQUs7Ozs7UUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OztJQUdILCtDQUFXOzs7SUFBWDs7WUFDRSxHQUFHLENBQUMsQ0FBYyxJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQSxnQkFBQTtnQkFBaEMsSUFBTSxHQUFHLFdBQUE7Z0JBQ1osR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25COzs7Ozs7Ozs7O0tBQ0Y7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsSUFBSSxFQUFFO3dCQUNKLHNCQUFzQixFQUFFLE1BQU07cUJBQy9CO2lCQUNGOzs7O2dCQVRRLGVBQWU7Z0JBUHRCLFVBQVU7Z0JBUUgsbUJBQW1COzs7K0JBVXpCLFdBQVcsU0FBQyxlQUFlOzJCQUczQixXQUFXLFNBQUMsb0JBQW9COzRCQW1CaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxFQUFFO29DQVF4QixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBWXpDLFlBQVksU0FBQyxXQUFXOztvQ0E5RDNCOztTQW1CYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcbmltcG9ydCB7IEJzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0Ryb3Bkb3duVG9nZ2xlXSxbZHJvcGRvd25Ub2dnbGVdJyxcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi10b2dnbGUnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtaGFzcG9wdXBdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBudWxsO1xuXG4gIC8vIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKSBpc09wZW46IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGRyb3Bkb3duOiBCc0Ryb3Bkb3duRGlyZWN0aXZlKSB7XG4gICAgLy8gc3luYyBpcyBvcGVuIHZhbHVlIHdpdGggc3RhdGVcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgICAodmFsdWU6IGJvb2xlYW4pID0+ICh0aGlzLmlzT3BlbiA9IHZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gICAgLy8gcG9wdWxhdGUgZGlzYWJsZWQgc3RhdGVcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlLnN1YnNjcmliZShcbiAgICAgICAgKHZhbHVlOiBib29sZWFuKSA9PiAodGhpcy5pc0Rpc2FibGVkID0gdmFsdWUgfHwgbnVsbClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbXSlcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSAmJlxuICAgICAgZXZlbnQuYnV0dG9uICE9PSAyICYmXG4gICAgICAhdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICEodGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgJiYgdGhpcy5kcm9wZG93bi5fY29udGFpbnMoZXZlbnQpKVxuICAgICkge1xuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjJylcbiAgb25Fc2MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXRlLmF1dG9DbG9zZSkge1xuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=