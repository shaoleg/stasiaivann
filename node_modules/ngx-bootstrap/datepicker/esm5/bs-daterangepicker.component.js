/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { BsDaterangepickerConfig } from './bs-daterangepicker.config';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { filter } from 'rxjs/operators';
var BsDaterangepickerDirective = /** @class */ (function () {
    function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended
         * to. Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the daterangepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
        set: /**
         * Initial value of daterangepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter(function (range) { return range && range[0] && !!range[1]; }))
            .subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Set config for daterangepicker
     */
    /**
     * Set config for daterangepicker
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.setConfig = /**
     * Set config for daterangepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _a = tslib_1.__values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
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
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
    ]; };
    BsDaterangepickerDirective.propDecorators = {
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
        "datesDisabled": [{ type: Input },],
        "bsValueChange": [{ type: Output },],
    };
    return BsDaterangepickerDirective;
}());
export { BsDaterangepickerDirective };
function BsDaterangepickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDaterangepickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDaterangepickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDaterangepickerDirective.propDecorators;
    /**
     * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.triggers;
    /**
     * Close daterangepicker on outside click
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.outsideClick;
    /**
     * A selector specifying the element the daterangepicker should be appended
     * to. Currently only supports "body".
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.container;
    /** @type {?} */
    BsDaterangepickerDirective.prototype.outsideEsc;
    /**
     * Emits an event when the daterangepicker is shown
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.onShown;
    /**
     * Emits an event when the daterangepicker is hidden
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.onHidden;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._bsValue;
    /**
     * Config object for daterangepicker
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.bsConfig;
    /**
     * Indicates whether daterangepicker's content is enabled or not
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.maxDate;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.datesDisabled;
    /**
     * Emits when daterangepicker value has been changed
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.bsValueChange;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._subs;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._datepicker;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImJzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxzQkFBc0IsRUFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBbUd0QyxvQ0FBbUIsT0FBZ0MsRUFDdkMsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQXlCOzs7O3lCQXhGTyxRQUFROzs7Ozt3QkFLOUMsT0FBTzs7Ozs0QkFJSCxJQUFJOzs7Ozt5QkFLUCxNQUFNOzBCQUVMLElBQUk7Ozs7NkJBaUVzQixJQUFJLFlBQVksRUFBRTtxQkFFaEMsRUFBRTtRQVVsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQ2pDLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxDQUNWLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FB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cG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnksIENvbXBvbmVudExvYWRlciB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXJhbmdlcGlja2VyXScsXG4gIGV4cG9ydEFzOiAnYnNEYXRlcmFuZ2VwaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBkYXRlcmFuZ2VwaWNrZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzID0gJ2NsaWNrJztcbiAgLyoqXG4gICAqIENsb3NlIGRhdGVyYW5nZXBpY2tlciBvbiBvdXRzaWRlIGNsaWNrXG4gICAqL1xuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBkYXRlcmFuZ2VwaWNrZXIgc2hvdWxkIGJlIGFwcGVuZGVkXG4gICAqIHRvLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lciA9ICdib2R5JztcblxuICBASW5wdXQoKSBvdXRzaWRlRXNjID0gdHJ1ZTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcmFuZ2VwaWNrZXIgaXMgc2hvd25cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIGhpZGRlblxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIF9ic1ZhbHVlOiBEYXRlW107XG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIGRhdGVyYW5nZXBpY2tlclxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGJzVmFsdWUodmFsdWU6IERhdGVbXSkge1xuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVyYW5nZXBpY2tlclxuICAgKi9cbiAgQElucHV0KCkgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcmFuZ2VwaWNrZXJDb25maWc+O1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXJhbmdlcGlja2VyJ3MgY29udGVudCBpcyBlbmFibGVkIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcbiAgLyoqXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gZGF0ZXJhbmdlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlclJlZjogQ29tcG9uZW50UmVmPEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NvbmZpZzogQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXJcbiAgICApO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgX2NvbmZpZyk7XG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZGF0ZXBpY2tlci5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kYXRlcGlja2VyLm9uSGlkZGVuO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlci5saXN0ZW4oe1xuICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLm91dHNpZGVDbGljayxcbiAgICAgIG91dHNpZGVFc2M6IHRoaXMub3V0c2lkZUVzYyxcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICB0aGlzLnNldENvbmZpZygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5tYXhEYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlc0Rpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxuICAgICAgLmF0dGFjaChCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgLnNob3coe3BsYWNlbWVudDogdGhpcy5wbGFjZW1lbnR9KTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLmJzVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigocmFuZ2U6IERhdGVbXSkgPT4gcmFuZ2UgJiYgcmFuZ2VbMF0gJiYgISFyYW5nZVsxXSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIHNldENvbmZpZygpIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0aGlzLl9jb25maWcsXG4gICAgICB0aGlzLmJzQ29uZmlnLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXG4gICAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZSxcbiAgICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlci5oaWRlKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nXG4gICAqIG9mIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==