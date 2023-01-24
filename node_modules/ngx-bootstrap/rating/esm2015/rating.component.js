/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output, forwardRef, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => RatingComponent),
    multi: true
};
export class RatingComponent {
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
function RatingComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RatingComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RatingComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    RatingComponent.propDecorators;
    /**
     * number of icons
     * @type {?}
     */
    RatingComponent.prototype.max;
    /**
     * if true will not react on any user events
     * @type {?}
     */
    RatingComponent.prototype.readonly;
    /**
     * array of icons titles, default: (["one", "two", "three", "four", "five"])
     * @type {?}
     */
    RatingComponent.prototype.titles;
    /**
     * custom template for icons
     * @type {?}
     */
    RatingComponent.prototype.customTemplate;
    /**
     * fired when icon selected, $event:number equals to selected rating
     * @type {?}
     */
    RatingComponent.prototype.onHover;
    /**
     * fired when icon selected, $event:number equals to previous rating value
     * @type {?}
     */
    RatingComponent.prototype.onLeave;
    /** @type {?} */
    RatingComponent.prototype.onChange;
    /** @type {?} */
    RatingComponent.prototype.onTouched;
    /** @type {?} */
    RatingComponent.prototype.range;
    /** @type {?} */
    RatingComponent.prototype.value;
    /** @type {?} */
    RatingComponent.prototype.preValue;
    /** @type {?} */
    RatingComponent.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcmF0aW5nLyIsInNvdXJjZXMiOlsicmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sVUFBVSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDcEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE1BQU0sQ0FBQyx1QkFBTSw2QkFBNkIsR0FBb0I7SUFDNUQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7SUFDOUMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBUUYsTUFBTTs7OztJQXdCSixZQUFvQixlQUFrQztRQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7Ozs7bUJBdEJ2QyxDQUFDOzs7O3VCQVMwQixJQUFJLFlBQVksRUFBRTs7Ozt1QkFFbEIsSUFBSSxZQUFZLEVBQUU7O3dCQUc1QyxRQUFRLENBQUMsU0FBUzs7eUJBRWpCLFFBQVEsQ0FBQyxTQUFTO0tBTXVCOzs7OztJQUcxRCxTQUFTLENBQUMsS0FBb0I7O1FBRTVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDO1NBQ1I7UUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUV4Qix1QkFBTSxJQUFJLEdBQUcsS0FB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QUFJLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1NBQ047UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLHk2QkFBc0M7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWpCbUQsaUJBQWlCOzs7b0JBb0JsRSxLQUFLO3lCQUVMLEtBQUs7dUJBRUwsS0FBSzsrQkFHTCxLQUFLO3dCQUVMLE1BQU07d0JBRU4sTUFBTTswQkFhTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBmb3J3YXJkUmVmLCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWNjZXNzb3JDb250ZW50LCBSYXRpbmdSZXN1bHRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUkFUSU5HX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IEFjY2Vzc29yQ29udGVudCA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGluZ0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUkFUSU5HX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgLyoqIG51bWJlciBvZiBpY29ucyAqL1xuICBASW5wdXQoKSBtYXggPSA1O1xuICAvKiogaWYgdHJ1ZSB3aWxsIG5vdCByZWFjdCBvbiBhbnkgdXNlciBldmVudHMgKi9cbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG4gIC8qKiBhcnJheSBvZiBpY29ucyB0aXRsZXMsIGRlZmF1bHQ6IChbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCJdKSAqL1xuICBASW5wdXQoKSB0aXRsZXM6IHN0cmluZ1tdO1xuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBpY29ucyAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBzZWxlY3RlZCByYXRpbmcgKi9cbiAgQE91dHB1dCgpIG9uSG92ZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBwcmV2aW91cyByYXRpbmcgdmFsdWUgKi9cbiAgQE91dHB1dCgpIG9uTGVhdmU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICByYW5nZTogUmF0aW5nUmVzdWx0c1tdO1xuICB2YWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgcHJlVmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBpZiAoWzM3LCAzOCwgMzksIDQwXS5pbmRleE9mKGV2ZW50LndoaWNoKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBjb25zdCBzaWduID0gZXZlbnQud2hpY2ggPT09IDM4IHx8IGV2ZW50LndoaWNoID09PSAzOSA/IDEgOiAtMTtcbiAgICB0aGlzLnJhdGUodGhpcy52YWx1ZSArIHNpZ24pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXggPSB0eXBlb2YgdGhpcy5tYXggIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXggOiA1O1xuICAgIHRoaXMudGl0bGVzID1cbiAgICAgIHR5cGVvZiB0aGlzLnRpdGxlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy50aXRsZXMubGVuZ3RoID4gMFxuICAgICAgICA/IHRoaXMudGl0bGVzXG4gICAgICAgIDogW107XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHModGhpcy5tYXgpO1xuICB9XG5cbiAgLy8gbW9kZWwgLT4gdmlld1xuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgJSAxICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGhpcy5wcmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZVZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZW50ZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm9uSG92ZXIuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucHJlVmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkxlYXZlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICByYXRlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSB0aGlzLnJhbmdlLmxlbmd0aCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFRlbXBsYXRlT2JqZWN0cyhtYXg6IG51bWJlcik6IFJhdGluZ1Jlc3VsdHNbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBSYXRpbmdSZXN1bHRzW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVzW2ldIHx8IGkgKyAxXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==