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
let /** @type {?} */ id = 0;
export class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     */
    constructor(_viewContainerRef, _renderer, _elementRef, cis, config) {
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
        this.ariaDescribedby = `tooltip-${this.tooltipId}`;
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
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._tooltip.isShown;
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
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set htmlContent(value) {
        warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */
    set _placement(value) {
        warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */
    set _isOpen(value) {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    /**
     * @return {?}
     */
    get _isOpen() {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */
    set _enable(value) {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    /**
     * @return {?}
     */
    get _enable() {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */
    set _appendToBody(value) {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    /**
     * @return {?}
     */
    get _appendToBody() {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */
    set _popupClass(value) {
        warnOnce('tooltipClass deprecated');
    }
    /**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set _tooltipContext(value) {
        warnOnce('tooltipContext deprecated');
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set _tooltipPopupDelay(value) {
        warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */
    get _tooltipTrigger() {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _tooltipTrigger(value) {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    show() {
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        const /** @type {?} */ showTooltip = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: this.ariaDescribedby
            });
        };
        const /** @type {?} */ cancelDelayedTooltipShowing = () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            const /** @type {?} */ _timer = timer(this.delay).subscribe(() => {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                const /** @type {?} */ triggers = parseTriggers(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, () => {
                    _timer.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap["in"] = false;
        setTimeout(() => {
            this._tooltip.hide();
        }, this.tooltipFadeDuration);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ComponentLoaderFactory, },
    { type: TooltipConfig, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvIiwic291cmNlcyI6WyJ0b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QixxQkFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBTVgsTUFBTTs7Ozs7Ozs7SUFnTEosWUFDRSxpQkFBbUMsRUFDM0IsV0FDQSxhQUNSLEdBQTJCLEVBQzNCLE1BQXFCO1FBSGIsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7eUJBbExULEVBQUUsRUFBRTs7Ozs7NkJBV3lDLElBQUksWUFBWSxFQUFFOzs7OzhCQW1CakQsRUFBRTs7OztnQ0FpR0EsSUFBSTs7OzttQ0F1QkQsR0FBRzsrQkFlc0IsV0FBVyxJQUFJLENBQUMsU0FBUyxFQUFFOzs7O21DQUl0QyxJQUFJLFlBQVksRUFBVztRQWN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUc7YUFDaEIsWUFBWSxDQUNYLElBQUksQ0FBQyxXQUFXLEVBQ2hCLGlCQUFpQixFQUNqQixJQUFJLENBQUMsU0FBUyxDQUNmO2FBQ0EsT0FBTyxD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c2FibGU6IG1heC1maWxlLWxpbmUtY291bnQgZGVwcmVjYXRpb24gKi9cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE9uQ2hhbmdlLCB3YXJuT25jZSwgcGFyc2VUcmlnZ2VycyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxubGV0IGlkID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLCBbdG9vbHRpcEh0bWxdJyxcbiAgZXhwb3J0QXM6ICdicy10b29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0b29sdGlwSWQgPSBpZCsrO1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cbiAgICovXG4gIEBPbkNoYW5nZSgpXG4gIEBJbnB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIEZpcmVkIHdoZW4gdG9vbHRpcCBjb250ZW50IGNoYW5nZXMgKi9cbiAgQE91dHB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSB0b29sdGlwLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciB0b29sdGlwIGNvbnRhaW5lclxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRvb2x0aXAgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlbGF5IGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIHNob3duXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBIdG1sJylcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgaHRtbENvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEh0bWwgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQnKTtcbiAgICB0aGlzLnRvb2x0aXAgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHBsYWNlbWVudGAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKVxuICBzZXQgX3BsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBQbGFjZW1lbnQgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHBsYWNlbWVudGAgaW5zdGVhZCcpO1xuICAgIHRoaXMucGxhY2VtZW50ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwSXNPcGVuJylcbiAgc2V0IF9pc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBfaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwSXNPcGVuIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQnKTtcblxuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwRW5hYmxlJylcbiAgc2V0IF9lbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBfZW5hYmxlKCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEFwcGVuZFRvQm9keScpXG4gIHNldCBfYXBwZW5kVG9Cb2R5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xuICAgICk7XG4gICAgdGhpcy5jb250YWluZXIgPSB2YWx1ZSA/ICdib2R5JyA6IHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IF9hcHBlbmRUb0JvZHkoKTogYm9vbGVhbiB7XG4gICAgd2Fybk9uY2UoXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgPT09ICdib2R5JztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQsIHdpbGwgYmUgYWRkZWQgdG8gY29uZmlndXJhdGlvbiAqL1xuICBASW5wdXQoKSB0b29sdGlwQW5pbWF0aW9uID0gdHJ1ZTtcblxuICAvKiogQGRlcHJlY2F0ZWQgLSB3aWxsIHJlcGxhY2VkIHdpdGggY3VzdG9tQ2xhc3MgKi9cbiAgQElucHV0KCd0b29sdGlwQ2xhc3MnKVxuICBzZXQgX3BvcHVwQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwQ2xhc3MgZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBDb250ZXh0JylcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgX3Rvb2x0aXBDb250ZXh0KHZhbHVlOiBhbnkpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcENvbnRleHQgZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgndG9vbHRpcFBvcHVwRGVsYXknKVxuICBzZXQgX3Rvb2x0aXBQb3B1cERlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFBvcHVwRGVsYXkgaXMgZGVwcmVjYXRlZCwgdXNlIGBkZWxheWAgaW5zdGVhZCcpO1xuICAgIHRoaXMuZGVsYXkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoKSB0b29sdGlwRmFkZUR1cmF0aW9uID0gMTUwO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtICBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBUcmlnZ2VyJylcbiAgZ2V0IF90b29sdGlwVHJpZ2dlcigpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlcnM7XG4gIH1cblxuICBzZXQgX3Rvb2x0aXBUcmlnZ2VyKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcbiAgICB0aGlzLnRyaWdnZXJzID0gKHZhbHVlIHx8ICcnKS50b1N0cmluZygpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnkgPSBgdG9vbHRpcC0ke3RoaXMudG9vbHRpcElkfWA7XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBPdXRwdXQoKVxuICB0b29sdGlwU3RhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogbnVtYmVyIHwgYW55O1xuICBwcm90ZWN0ZWQgX3Rvb2x0aXBDYW5jZWxTaG93Rm46IEZ1bmN0aW9uO1xuXG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgY29uc3RydWN0b3IoXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBjb25maWc6IFRvb2x0aXBDb25maWdcbiAgKSB7XG5cbiAgICB0aGlzLl90b29sdGlwID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcbiAgICAgIClcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBUb29sdGlwQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fdG9vbHRpcC5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdG9vbHRpcC5saXN0ZW4oe1xuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNPcGVuIHx8XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgfHxcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkIHx8XG4gICAgICAhdGhpcy50b29sdGlwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1Rvb2x0aXAgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Rvb2x0aXBcbiAgICAgICAgLmF0dGFjaChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgICAuc2hvdyh7XG4gICAgICAgICAgY29udGVudDogdGhpcy50b29sdGlwLFxuICAgICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M6IHRoaXMuY29udGFpbmVyQ2xhc3MsXG4gICAgICAgICAgaWQ6IHRoaXMuYXJpYURlc2NyaWJlZGJ5XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4pIHtcbiAgICAgICAgdGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5kZWxheSkge1xuICAgICAgY29uc3QgX3RpbWVyID0gdGltZXIodGhpcy5kZWxheSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMudHJpZ2dlcnMpIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRoaXMudHJpZ2dlcnMpO1xuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJpZ2dlcnNbMF0uY2xvc2UsICgpID0+IHtcbiAgICAgICAgICBfdGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXlUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90b29sdGlwLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwLmluID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICB9LCB0aGlzLnRvb2x0aXBGYWRlRHVyYXRpb24pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fdG9vbHRpcC5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==