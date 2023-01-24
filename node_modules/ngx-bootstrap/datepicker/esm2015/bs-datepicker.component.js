/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { BsDatepickerConfig } from './bs-datepicker.config';
export class BsDatepickerDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         * Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    /**
     * Returns whether or not the datepicker is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._datepicker.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["daysDisabled"]) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    show() {
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
            this.bsValue = value;
            this.hide();
        }));
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Set config for datepicker
     * @return {?}
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDatepicker]',
                exportAs: 'bsDatepicker'
            },] }
];
/** @nocollapse */
BsDatepickerDirective.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
];
BsDatepickerDirective.propDecorators = {
    "placement": [{ type: Input },],
    "triggers": [{ type: Input },],
    "outsideClick": [{ type: Input },],
    "container": [{ type: Input },],
    "outsideEsc": [{ type: Input },],
    "isOpen": [{ type: Input },],
    "onShown": [{ type: Output },],
    "onHidden": [{ type: Output },],
    "bsValue": [{ type: Input },],
    "bsConfig": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "minMode": [{ type: Input },],
    "daysDisabled": [{ type: Input },],
    "datesDisabled": [{ type: Input },],
    "bsValueChange": [{ type: Output },],
};
function BsDatepickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDatepickerDirective.propDecorators;
    /**
     * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDatepickerDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDatepickerDirective.prototype.triggers;
    /**
     * Close datepicker on outside click
     * @type {?}
     */
    BsDatepickerDirective.prototype.outsideClick;
    /**
     * A selector specifying the element the datepicker should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    BsDatepickerDirective.prototype.container;
    /** @type {?} */
    BsDatepickerDirective.prototype.outsideEsc;
    /**
     * Emits an event when the datepicker is shown
     * @type {?}
     */
    BsDatepickerDirective.prototype.onShown;
    /**
     * Emits an event when the datepicker is hidden
     * @type {?}
     */
    BsDatepickerDirective.prototype.onHidden;
    /** @type {?} */
    BsDatepickerDirective.prototype._bsValue;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDatepickerDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker's content is enabled or not
     * @type {?}
     */
    BsDatepickerDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDatepickerDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDatepickerDirective.prototype.maxDate;
    /**
     * Minimum view mode : day, month, or year
     * @type {?}
     */
    BsDatepickerDirective.prototype.minMode;
    /**
     * Disable Certain days in the week
     * @type {?}
     */
    BsDatepickerDirective.prototype.daysDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDatepickerDirective.prototype.datesDisabled;
    /**
     * Emits when datepicker value has been changed
     * @type {?}
     */
    BsDatepickerDirective.prototype.bsValueChange;
    /** @type {?} */
    BsDatepickerDirective.prototype._subs;
    /** @type {?} */
    BsDatepickerDirective.prototype._datepicker;
    /** @type {?} */
    BsDatepickerDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDatepickerDirective.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNTLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBaUIsZ0JBQWdCLEVBQ3RFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUUvRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNOzs7Ozs7OztJQXVHSixZQUFtQixPQUEyQixFQUNsQyxXQUF1QixFQUN2QixTQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsR0FBMkI7UUFKcEIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7Ozs7eUJBbkdZLFFBQVE7Ozs7O3dCQUs5QyxPQUFPOzs7OzRCQUlILElBQUk7Ozs7O3lCQUtQLE1BQU07MEJBRUwsSUFBSTs7Ozs2QkE0RW9CLElBQUksWUFBWSxFQUFFO3FCQUU5QixFQUFFOztRQVdsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUNqQyxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0tBQzNDOzs7OztRQTNGRyxN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SUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDL0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDL0QsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVk7WUFDOUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7WUFDakYsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87U0FDaEUsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM1Qjs7O1lBM09GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQU5RLGtCQUFrQjtZQU5BLFVBQVU7WUFDUixTQUFTO1lBQWlCLGdCQUFnQjtZQUU3QyxzQkFBc0I7OzswQkFjN0MsS0FBSzt5QkFLTCxLQUFLOzZCQUlMLEtBQUs7MEJBS0wsS0FBSzsyQkFFTCxLQUFLO3VCQUtMLEtBQUs7d0JBaUJMLE1BQU07eUJBS04sTUFBTTt3QkFNTixLQUFLO3lCQVlMLEtBQUs7MkJBSUwsS0FBSzt3QkFJTCxLQUFLO3dCQUlMLEtBQUs7d0JBS0wsS0FBSzs2QkFLTCxLQUFLOzhCQUtMLEtBQUs7OEJBSUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyXScsXG4gIGV4cG9ydEFzOiAnYnNEYXRlcGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIGRhdGVwaWNrZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzID0gJ2NsaWNrJztcbiAgLyoqXG4gICAqIENsb3NlIGRhdGVwaWNrZXIgb24gb3V0c2lkZSBjbGlja1xuICAgKi9cbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXBpY2tlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyID0gJ2JvZHknO1xuXG4gIEBJbnB1dCgpIG91dHNpZGVFc2MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBkYXRlcGlja2VyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIHNob3duXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgaGlkZGVuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgX2JzVmFsdWU6IERhdGU7XG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmJzVmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlnIG9iamVjdCBmb3IgZGF0ZXBpY2tlclxuICAgKi9cbiAgQElucHV0KCkgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcGlja2VyQ29uZmlnPjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIncyBjb250ZW50IGlzIGVuYWJsZWQgb3Igbm90XG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICAvKipcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBNaW5pbXVtIHZpZXcgbW9kZSA6IGRheSwgbW9udGgsIG9yIHllYXJcbiAgICovXG4gIEBJbnB1dCgpIG1pbk1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIENlcnRhaW4gZGF5cyBpbiB0aGUgd2Vla1xuICAgKi9cbiAgQElucHV0KCkgZGF5c0Rpc2FibGVkOiBudW1iZXJbXTtcblxuICAvKipcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgKi9cbiAgQElucHV0KCkgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xuICAvKipcbiAgICogRW1pdHMgd2hlbiBkYXRlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIF9kYXRlcGlja2VyUmVmOiBDb21wb25lbnRSZWY8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgICAgICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICAvLyB0b2RvOiBhc3NpZ24gb25seSBzdWJzZXQgb2YgZmllbGRzXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9jb25maWcpO1xuICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyXG4gICAgKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kYXRlcGlja2VyLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2RhdGVwaWNrZXIub25IaWRkZW47XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyLmxpc3Rlbih7XG4gICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMub3V0c2lkZUNsaWNrLFxuICAgICAgb3V0c2lkZUVzYzogdGhpcy5vdXRzaWRlRXNjLFxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuICAgIHRoaXMuc2V0Q29uZmlnKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kYXRlcGlja2VyUmVmIHx8ICF0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1heERhdGUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kYXlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF5c0Rpc2FibGVkID0gdGhpcy5kYXlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlc0Rpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxuICAgICAgLmF0dGFjaChCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgIC5zaG93KHtwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50fSk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZ1xuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcGlja2VyXG4gICAqL1xuICBzZXRDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB0aGlzLmJzQ29uZmlnLCB7XG4gICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcbiAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZSxcbiAgICAgIGRheXNEaXNhYmxlZDogdGhpcy5kYXlzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRheXNEaXNhYmxlZCxcbiAgICAgIGRhdGVzRGlzYWJsZWQ6IHRoaXMuZGF0ZXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNEaXNhYmxlZCxcbiAgICAgIG1pbk1vZGU6IHRoaXMubWluTW9kZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluTW9kZVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==