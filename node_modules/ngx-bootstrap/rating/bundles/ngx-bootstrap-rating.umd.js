(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/rating', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].rating = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ RATING_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return RatingComponent; }),
        multi: true
    };
    var RatingComponent = (function () {
        function RatingComponent(changeDetection) {
            this.changeDetection = changeDetection;
            /**
             * number of icons
             */
            this.max = 5;
            /**
             * fired when icon selected, $event:number equals to selected rating
             */
            this.onHover = new core.EventEmitter();
            /**
             * fired when icon selected, $event:number equals to previous rating value
             */
            this.onLeave = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onChange = Function.prototype;
            // tslint:disable-next-line:no-any
            this.onTouched = Function.prototype;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        RatingComponent.prototype.onKeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /* tslint:disable-next-line: deprecation */
                if ([37, 38, 39, 40].indexOf(event.which) === -1) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                /* tslint:disable-next-line: deprecation */
                var /** @type {?} */ sign = event.which === 38 || event.which === 39 ? 1 : -1;
                this.rate(this.value + sign);
            };
        /**
         * @return {?}
         */
        RatingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.max = typeof this.max !== 'undefined' ? this.max : 5;
                this.titles =
                    typeof this.titles !== 'undefined' && this.titles.length > 0
                        ? this.titles
                        : [];
                this.range = this.buildTemplateObjects(this.max);
            };
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        RatingComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value % 1 !== value) {
                    this.value = Math.round(value);
                    this.preValue = value;
                    this.changeDetection.markForCheck();
                    return;
                }
                this.preValue = value;
                this.value = value;
                this.changeDetection.markForCheck();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        RatingComponent.prototype.enter = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.readonly) {
                    this.value = value;
                    this.changeDetection.markForCheck();
                    this.onHover.emit(value);
                }
            };
        /**
         * @return {?}
         */
        RatingComponent.prototype.reset = /**
         * @return {?}
         */
            function () {
                this.value = this.preValue;
                this.changeDetection.markForCheck();
                this.onLeave.emit(this.value);
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        RatingComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        RatingComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        RatingComponent.prototype.rate = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.readonly && value >= 0 && value <= this.range.length) {
                    this.writeValue(value);
                    this.onChange(value);
                }
            };
        /**
         * @param {?} max
         * @return {?}
         */
        RatingComponent.prototype.buildTemplateObjects = /**
         * @param {?} max
         * @return {?}
         */
            function (max) {
                var /** @type {?} */ result = [];
                for (var /** @type {?} */ i = 0; i < max; i++) {
                    result.push({
                        index: i,
                        title: this.titles[i] || i + 1
                    });
                }
                return result;
            };
        RatingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'rating',
                        template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                        providers: [RATING_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        RatingComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
            ];
        };
        RatingComponent.propDecorators = {
            "max": [{ type: core.Input },],
            "readonly": [{ type: core.Input },],
            "titles": [{ type: core.Input },],
            "customTemplate": [{ type: core.Input },],
            "onHover": [{ type: core.Output },],
            "onLeave": [{ type: core.Output },],
            "onKeydown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
        };
        return RatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RatingModule = (function () {
        function RatingModule() {
        }
        /**
         * @return {?}
         */
        RatingModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: RatingModule,
                    providers: []
                };
            };
        RatingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [RatingComponent],
                        exports: [RatingComponent]
                    },] }
        ];
        return RatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.RatingComponent = RatingComponent;
    exports.RatingModule = RatingModule;
    exports.ɵa = RATING_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1yYXRpbmcudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3JhdGluZy9yYXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgZm9yd2FyZFJlZiwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjY2Vzc29yQ29udGVudCwgUmF0aW5nUmVzdWx0cyB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFJBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBBY2Nlc3NvckNvbnRlbnQgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmdDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1JBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIC8qKiBudW1iZXIgb2YgaWNvbnMgKi9cbiAgQElucHV0KCkgbWF4ID0gNTtcbiAgLyoqIGlmIHRydWUgd2lsbCBub3QgcmVhY3Qgb24gYW55IHVzZXIgZXZlbnRzICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuICAvKiogYXJyYXkgb2YgaWNvbnMgdGl0bGVzLCBkZWZhdWx0OiAoW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiXSkgKi9cbiAgQElucHV0KCkgdGl0bGVzOiBzdHJpbmdbXTtcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgaWNvbnMgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gc2VsZWN0ZWQgcmF0aW5nICovXG4gIEBPdXRwdXQoKSBvbkhvdmVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gcHJldmlvdXMgcmF0aW5nIHZhbHVlICovXG4gIEBPdXRwdXQoKSBvbkxlYXZlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgcmFuZ2U6IFJhdGluZ1Jlc3VsdHNbXTtcbiAgdmFsdWU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHByZVZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgaWYgKFszNywgMzgsIDM5LCA0MF0uaW5kZXhPZihldmVudC53aGljaCkgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgY29uc3Qgc2lnbiA9IGV2ZW50LndoaWNoID09PSAzOCB8fCBldmVudC53aGljaCA9PT0gMzkgPyAxIDogLTE7XG4gICAgdGhpcy5yYXRlKHRoaXMudmFsdWUgKyBzaWduKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWF4ID0gdHlwZW9mIHRoaXMubWF4ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4IDogNTtcbiAgICB0aGlzLnRpdGxlcyA9XG4gICAgICB0eXBlb2YgdGhpcy50aXRsZXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMudGl0bGVzLmxlbmd0aCA+IDBcbiAgICAgICAgPyB0aGlzLnRpdGxlc1xuICAgICAgICA6IFtdO1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLmJ1aWxkVGVtcGxhdGVPYmplY3RzKHRoaXMubWF4KTtcbiAgfVxuXG4gIC8vIG1vZGVsIC0+IHZpZXdcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICUgMSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgIHRoaXMucHJlVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmVWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGVudGVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5vbkhvdmVyLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnByZVZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMub25MZWF2ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcmF0ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5ICYmIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gdGhpcy5yYW5nZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRUZW1wbGF0ZU9iamVjdHMobWF4OiBudW1iZXIpOiBSYXRpbmdSZXN1bHRzW10ge1xuICAgIGNvbnN0IHJlc3VsdDogUmF0aW5nUmVzdWx0c1tdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlc1tpXSB8fCBpICsgMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcmF0aW5nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtSYXRpbmdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmF0aW5nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJhdGluZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1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