/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { timer } from 'rxjs';
var /** @type {?} */ id = 0;
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new EventEmitter();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */
        this.tooltipAnimation = true;
        /**
         * @deprecated
         */
        this.tooltipFadeDuration = 150;
        this.ariaDescribedby = "tooltip-" + this.tooltipId;
        /**
         * @deprecated
         */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
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
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        set: /**
         * @deprecated - please use `tooltip` instead
         * @param {?} value
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (value) {
            warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        set: /**
         * @deprecated - please use `placement` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        set: /**
         * @deprecated - please use `isOpen` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        set: /**
         * @deprecated - please use `isDisabled` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        set: /**
         * @deprecated - please use `container="body"` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        set: /**
         * @deprecated - will replaced with customClass
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        set: /**
         * @deprecated - removed
         * @param {?} value
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (value) {
            warnOnce('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        get: /**
         * @deprecated -  please use `triggers` instead
         * @return {?}
         */
        function () {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var /** @type {?} */ showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(TooltipContainerComponent)
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass,
                id: _this.ariaDescribedby
            });
        };
        var /** @type {?} */ cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            var /** @type {?} */ _timer_1 = timer(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var /** @type {?} */ triggers = parseTriggers(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    _timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap["in"] = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.tooltipFadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
        { type: Renderer2, },
        { type: ElementRef, },
        { type: ComponentLoaderFactory, },
        { type: TooltipConfig, },
    ]; };
    TooltipDirective.propDecorators = {
        "tooltip": [{ type: Input },],
        "tooltipChange": [{ type: Output },],
        "placement": [{ type: Input },],
        "triggers": [{ type: Input },],
        "container": [{ type: Input },],
        "containerClass": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "delay": [{ type: Input },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "htmlContent": [{ type: Input, args: ['tooltipHtml',] },],
        "_placement": [{ type: Input, args: ['tooltipPlacement',] },],
        "_isOpen": [{ type: Input, args: ['tooltipIsOpen',] },],
        "_enable": [{ type: Input, args: ['tooltipEnable',] },],
        "_appendToBody": [{ type: Input, args: ['tooltipAppendToBody',] },],
        "tooltipAnimation": [{ type: Input },],
        "_popupClass": [{ type: Input, args: ['tooltipClass',] },],
        "_tooltipContext": [{ type: Input, args: ['tooltipContext',] },],
        "_tooltipPopupDelay": [{ type: Input, args: ['tooltipPopupDelay',] },],
        "tooltipFadeDuration": [{ type: Input },],
        "_tooltipTrigger": [{ type: Input, args: ['tooltipTrigger',] },],
        "ariaDescribedby": [{ type: HostBinding, args: ['attr.aria-describedby',] },],
        "tooltipStateChanged": [{ type: Output },],
    };
    tslib_1.__decorate([
        OnChange(),
        tslib_1.__metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());
export { TooltipDirective };
function TooltipDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TooltipDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TooltipDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TooltipDirective.propDecorators;
    /** @type {?} */
    TooltipDirective.prototype.tooltipId;
    /**
     * Content to be displayed as tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.tooltip;
    /**
     * Fired when tooltip content changes
     * @type {?}
     */
    TooltipDirective.prototype.tooltipChange;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    TooltipDirective.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    TooltipDirective.prototype.container;
    /**
     * Css class for tooltip container
     * @type {?}
     */
    TooltipDirective.prototype.containerClass;
    /**
     * Allows to disable tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isDisabled;
    /**
     * Delay before showing the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.delay;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.onShown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.onHidden;
    /**
     * @deprecated - removed, will be added to configuration
     * @type {?}
     */
    TooltipDirective.prototype.tooltipAnimation;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipFadeDuration;
    /** @type {?} */
    TooltipDirective.prototype.ariaDescribedby;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipStateChanged;
    /** @type {?} */
    TooltipDirective.prototype._delayTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype._tooltipCancelShowFn;
    /** @type {?} */
    TooltipDirective.prototype._tooltip;
    /** @type {?} */
    TooltipDirective.prototype._renderer;
    /** @type {?} */
    TooltipDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvIiwic291cmNlcyI6WyJ0b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QixxQkFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQXNMVCwwQkFDRSxpQkFBbUMsRUFDM0IsV0FDQSxhQUNSLEdBQTJCLEVBQzNCLE1BQXFCO1FBSGIsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7eUJBbExULEVBQUUsRUFBRTs7Ozs7NkJBV3lDLElBQUksWUFBWSxFQUFFOzs7OzhCQW1CakQsRUFBRTs7OztnQ0FpR0EsSUFBSTs7OzttQ0F1QkQsR0FBRzsrQkFlc0IsYUFBVyxJQUFJLENBQUMsU0FBVzs7OzttQ0FJdEMsSUFBSSxZQUFZLEVBQVc7UUFjdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHO2FBQ2hCLFlBQVksQ0FDWCxJQUFJLENBQUMsV0FBVyxFQUNoQixpQkFBaUIsRUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDZjthQUNBLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxh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O3dDQUduQyxNQUFNOzs7UUFwS04sUUFBUSxFQUFFOzs7MkJBL0JiOztTQTBCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCBkZXByZWNhdGlvbiAqL1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgT25DaGFuZ2UsIHdhcm5PbmNlLCBwYXJzZVRyaWdnZXJzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5sZXQgaWQgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG9vbHRpcF0sIFt0b29sdGlwSHRtbF0nLFxuICBleHBvcnRBczogJ2JzLXRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHRvb2x0aXBJZCA9IGlkKys7XG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyB0b29sdGlwLlxuICAgKi9cbiAgQE9uQ2hhbmdlKClcbiAgQElucHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0b29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogRmlyZWQgd2hlbiB0b29sdGlwIGNvbnRlbnQgY2hhbmdlcyAqL1xuICBAT3V0cHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0b29sdGlwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHRvb2x0aXAuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdG9vbHRpcCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIHRvb2x0aXAgY29udGFpbmVyXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXJDbGFzcyA9ICcnO1xuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9vbHRpcCBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXAuaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRvIGRpc2FibGUgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGVsYXkgYmVmb3JlIHNob3dpbmcgdGhlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGRlbGF5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgc2hvd25cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGB0b29sdGlwYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEh0bWwnKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCBodG1sQ29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwSHRtbCB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCcpO1xuICAgIHRoaXMudG9vbHRpcCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgcGxhY2VtZW50YCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcFBsYWNlbWVudCcpXG4gIHNldCBfcGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFBsYWNlbWVudCB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgcGxhY2VtZW50YCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBJc09wZW4nKVxuICBzZXQgX2lzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwSXNPcGVuIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQnKTtcbiAgICB0aGlzLmlzT3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IF9pc09wZW4oKTogYm9vbGVhbiB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBFbmFibGUnKVxuICBzZXQgX2VuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gIXZhbHVlO1xuICB9XG5cbiAgZ2V0IF9lbmFibGUoKTogYm9vbGVhbiB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBFbmFibGUgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQnKTtcblxuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwQXBwZW5kVG9Cb2R5JylcbiAgc2V0IF9hcHBlbmRUb0JvZHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZShcbiAgICAgICd0b29sdGlwQXBwZW5kVG9Cb2R5IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQnXG4gICAgKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHZhbHVlID8gJ2JvZHknIDogdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBnZXQgX2FwcGVuZFRvQm9keSgpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZShcbiAgICAgICd0b29sdGlwQXBwZW5kVG9Cb2R5IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQnXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCwgd2lsbCBiZSBhZGRlZCB0byBjb25maWd1cmF0aW9uICovXG4gIEBJbnB1dCgpIHRvb2x0aXBBbmltYXRpb24gPSB0cnVlO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHdpbGwgcmVwbGFjZWQgd2l0aCBjdXN0b21DbGFzcyAqL1xuICBASW5wdXQoJ3Rvb2x0aXBDbGFzcycpXG4gIHNldCBfcG9wdXBDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDbGFzcyBkZXByZWNhdGVkJyk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSByZW1vdmVkICovXG4gIEBJbnB1dCgndG9vbHRpcENvbnRleHQnKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCBfdG9vbHRpcENvbnRleHQodmFsdWU6IGFueSkge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwQ29udGV4dCBkZXByZWNhdGVkJyk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQElucHV0KCd0b29sdGlwUG9wdXBEZWxheScpXG4gIHNldCBfdG9vbHRpcFBvcHVwRGVsYXkodmFsdWU6IG51bWJlcikge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwUG9wdXBEZWxheSBpcyBkZXByZWNhdGVkLCB1c2UgYGRlbGF5YCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5kZWxheSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIHRvb2x0aXBGYWRlRHVyYXRpb24gPSAxNTA7XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcFRyaWdnZXInKVxuICBnZXQgX3Rvb2x0aXBUcmlnZ2VyKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFRyaWdnZXIgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy50cmlnZ2VycztcbiAgfVxuXG4gIHNldCBfdG9vbHRpcFRyaWdnZXIodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xuICAgIHRoaXMudHJpZ2dlcnMgPSAodmFsdWUgfHwgJycpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRieSA9IGB0b29sdGlwLSR7dGhpcy50b29sdGlwSWR9YDtcblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQE91dHB1dCgpXG4gIHRvb2x0aXBTdGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkOiBudW1iZXIgfCBhbnk7XG4gIHByb3RlY3RlZCBfdG9vbHRpcENhbmNlbFNob3dGbjogRnVuY3Rpb247XG5cbiAgcHJpdmF0ZSBfdG9vbHRpcDogQ29tcG9uZW50TG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgIGNvbmZpZzogVG9vbHRpcENvbmZpZ1xuICApIHtcblxuICAgIHRoaXMuX3Rvb2x0aXAgPSBjaXNcbiAgICAgIC5jcmVhdGVMb2FkZXI8VG9vbHRpcENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFRvb2x0aXBDb25maWcsIHVzZVZhbHVlOiBjb25maWd9KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl90b29sdGlwLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX3Rvb2x0aXAub25IaWRkZW47XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICAgIHRoaXMudG9vbHRpcENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdG9vbHRpcC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5pc09wZW4gfHxcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCB8fFxuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgfHxcbiAgICAgICF0aGlzLnRvb2x0aXBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdG9vbHRpcFxuICAgICAgICAuYXR0YWNoKFRvb2x0aXBDb250YWluZXJDb21wb25lbnQpXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAgIC5zaG93KHtcbiAgICAgICAgICBjb250ZW50OiB0aGlzLnRvb2x0aXAsXG4gICAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzcyxcbiAgICAgICAgICBpZDogdGhpcy5hcmlhRGVzY3JpYmVkYnlcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbikge1xuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmRlbGF5KSB7XG4gICAgICBjb25zdCBfdGltZXIgPSB0aW1lcih0aGlzLmRlbGF5KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzaG93VG9vbHRpcCgpO1xuICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy50cmlnZ2Vycykge1xuICAgICAgICBjb25zdCB0cmlnZ2VycyA9IHBhcnNlVHJpZ2dlcnModGhpcy50cmlnZ2Vycyk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cmlnZ2Vyc1swXS5jbG9zZSwgKCkgPT4ge1xuICAgICAgICAgIF90aW1lci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXAuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2UuY2xhc3NNYXAuaW4gPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgIH0sIHRoaXMudG9vbHRpcEZhZGVEdXJhdGlvbik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19