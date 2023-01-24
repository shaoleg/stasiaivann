import { Component, EventEmitter, HostListener, Input, Output, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => RatingComponent),
    multi: true
};
class RatingComponent {
    /**
     * @param {?} changeDetection
     */
    constructor(changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new EventEmitter();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        const /** @type {?} */ sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    enter(value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    rate(value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    }
    /**
     * @param {?} max
     * @return {?}
     */
    buildTemplateObjects(max) {
        const /** @type {?} */ result = [];
        for (let /** @type {?} */ i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    }
}
RatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'rating',
                template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                providers: [RATING_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
RatingComponent.propDecorators = {
    "max": [{ type: Input },],
    "readonly": [{ type: Input },],
    "titles": [{ type: Input },],
    "customTemplate": [{ type: Input },],
    "onHover": [{ type: Output },],
    "onLeave": [{ type: Output },],
    "onKeydown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RatingModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: RatingModule,
            providers: []
        };
    }
}
RatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [RatingComponent],
                exports: [RatingComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { RatingComponent, RatingModule, RATING_CONTROL_VALUE_ACCESSOR as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1yYXRpbmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcmF0aW5nL3JhdGluZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBmb3J3YXJkUmVmLCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWNjZXNzb3JDb250ZW50LCBSYXRpbmdSZXN1bHRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUkFUSU5HX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IEFjY2Vzc29yQ29udGVudCA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGluZ0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUkFUSU5HX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgLyoqIG51bWJlciBvZiBpY29ucyAqL1xuICBASW5wdXQoKSBtYXggPSA1O1xuICAvKiogaWYgdHJ1ZSB3aWxsIG5vdCByZWFjdCBvbiBhbnkgdXNlciBldmVudHMgKi9cbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG4gIC8qKiBhcnJheSBvZiBpY29ucyB0aXRsZXMsIGRlZmF1bHQ6IChbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdKSAqL1xuICBASW5wdXQoKSB0aXRsZXM6IHN0cmluZ1tdO1xuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBpY29ucyAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBzZWxlY3RlZCByYXRpbmcgKi9cbiAgQE91dHB1dCgpIG9uSG92ZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBwcmV2aW91cyByYXRpbmcgdmFsdWUgKi9cbiAgQE91dHB1dCgpIG9uTGVhdmU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICByYW5nZTogUmF0aW5nUmVzdWx0c1tdO1xuICB2YWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgcHJlVmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBpZiAoWzM3LCAzOCwgMzksIDQwXS5pbmRleE9mKGV2ZW50LndoaWNoKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBjb25zdCBzaWduID0gZXZlbnQud2hpY2ggPT09IDM4IHx8IGV2ZW50LndoaWNoID09PSAzOSA/IDEgOiAtMTtcbiAgICB0aGlzLnJhdGUodGhpcy52YWx1ZSArIHNpZ24pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXggPSB0eXBlb2YgdGhpcy5tYXggIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXggOiA1O1xuICAgIHRoaXMudGl0bGVzID1cbiAgICAgIHR5cGVvZiB0aGlzLnRpdGxlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy50aXRsZXMubGVuZ3RoID4gMFxuICAgICAgICA/IHRoaXMudGl0bGVzXG4gICAgICAgIDogW107XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHModGhpcy5tYXgpO1xuICB9XG5cbiAgLy8gbW9kZWwgLT4gdmlld1xuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgJSAxICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGhpcy5wcmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZVZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZW50ZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm9uSG92ZXIuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucHJlVmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkxlYXZlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICByYXRlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSB0aGlzLnJhbmdlLmxlbmd0aCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFRlbXBsYXRlT2JqZWN0cyhtYXg6IG51bWJlcik6IFJhdGluZ1Jlc3VsdHNbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBSYXRpbmdSZXN1bHRzW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVzW2ldIHx8IGkgKyAxXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9yYXRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1JhdGluZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSYXRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmF0aW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQVlhLDZCQUE2QixHQUFvQjtJQUM1RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sZUFBZSxDQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVFGOzs7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