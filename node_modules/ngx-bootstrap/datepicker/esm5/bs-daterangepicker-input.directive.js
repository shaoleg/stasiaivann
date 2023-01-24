/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, forwardRef, Host, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { parseDate, formatDate, getLocale, isAfter, isBefore, isArray, isDateValid } from 'ngx-bootstrap/chronos';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsLocaleService } from './bs-locale.service';
var /** @type {?} */ BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var /** @type {?} */ BS_DATERANGEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var BsDaterangepickerInputDirective = /** @class */ (function () {
    function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe(function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(function () {
            _this._setInputValue(_this._value);
        });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype._setInputValue = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ range = '';
        if (date) {
            var /** @type {?} */ start = !date[0] ? ''
                : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            var /** @type {?} */ end = !date[1] ? ''
                : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue((/** @type {?} */ (event.target)).value);
        this._onChange(this._value);
        this._onTouched();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        var /** @type {?} */ _value = c.value;
        if (_value === null || _value === undefined || !isArray(_value)) {
            return null;
        }
        var /** @type {?} */ _isFirstDateValid = isDateValid(_value[0]);
        var /** @type {?} */ _isSecondDateValid = isDateValid(_value[1]);
        if (!_isFirstDateValid) {
            return { bsDate: { invalid: _value[0] } };
        }
        if (!_isSecondDateValid) {
            return { bsDate: { invalid: _value[1] } };
        }
        if (this._picker && this._picker.minDate && isBefore(_value[0], this._picker.minDate, 'date')) {
            return { bsDate: { minDate: this._picker.minDate } };
        }
        if (this._picker && this._picker.maxDate && isAfter(_value[1], this._picker.maxDate, 'date')) {
            return { bsDate: { maxDate: this._picker.maxDate } };
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!value) {
            this._value = null;
        }
        else {
            var /** @type {?} */ _localeKey = this._localeService.currentLocale;
            var /** @type {?} */ _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            var /** @type {?} */ _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = (/** @type {?} */ (_input))
                .map(function (_val) {
                return parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
            })
                .map(function (date) { return (isNaN(date.valueOf()) ? null : date); });
        }
        this._picker.bsValue = this._value;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    };
    BsDaterangepickerInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[bsDaterangepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInputDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerDirective, decorators: [{ type: Host },] },
        { type: BsLocaleService, },
        { type: Renderer2, },
        { type: ElementRef, },
        { type: ChangeDetectorRef, },
    ]; };
    return BsDaterangepickerInputDirective;
}());
export { BsDaterangepickerInputDirective };
function BsDaterangepickerInputDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDaterangepickerInputDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDaterangepickerInputDirective.ctorParameters;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._onChange;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._onTouched;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._validatorChange;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._value;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._picker;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._localeService;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._renderer;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype._elRef;
    /** @type {?} */
    BsDaterangepickerInputDirective.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImJzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUVKLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsYUFBYSxFQUNiLGlCQUFpQixFQUdsQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQscUJBQU0saUNBQWlDLEdBQWE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsK0JBQStCLEVBQS9CLENBQStCLENBQUM7SUFDOUQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUYscUJBQU0sNEJBQTRCLEdBQWE7SUFDN0MsT0FBTyxFQUFFLGFBQWE7O0lBRXRCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLCtCQUErQixFQUEvQixDQUErQixDQUFDO0lBQzlELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7SUFvQkEseUNBQTRCLFNBQ1IsZ0JBQ0EsV0FDQSxRQUNBO1FBSnBCLGlCQW9CQztRQXBCMkIsWUFBTyxHQUFQLE9BQU87UUFDZixtQkFBYyxHQUFkLGNBQWM7UUFDZCxjQUFT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VUFBVSxFQUFFLGtCQUFrQjt3QkFDOUIsYUFBYSxFQUFFLFFBQVE7d0JBQ3ZCLFFBQVEsRUFBRSxVQUFVO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSw0QkFBNEIsQ0FBQztpQkFDN0U7Ozs7Z0JBMUJRLDBCQUEwQix1QkFtQ3BCLElBQUk7Z0JBbENWLGVBQWU7Z0JBWnRCLFNBQVM7Z0JBSlQsVUFBVTtnQkFGVixpQkFBaUI7OzBDQURuQjs7U0E2Q2EsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgUHJvdmlkZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIE5HX1ZBTElEQVRPUlMsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgcGFyc2VEYXRlLCBmb3JtYXREYXRlLCBnZXRMb2NhbGUsIGlzQWZ0ZXIsIGlzQmVmb3JlLCBpc0FycmF5LCBpc0RhdGVWYWxpZCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcblxuY29uc3QgQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgQlNfREFURVJBTkdFUElDS0VSX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpbnB1dFtic0RhdGVyYW5nZXBpY2tlcl1gLFxuICBob3N0OiB7XG4gICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudCknLFxuICAgICcoa2V5dXAuZXNjKSc6ICdoaWRlKCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyKCknXG4gIH0sXG4gIHByb3ZpZGVyczogW0JTX0RBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiwgQlNfREFURVJBTkdFUElDS0VSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICBwcml2YXRlIF9vbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC12YXJpYWJsZSAqL1xuICBwcml2YXRlIF92YWxpZGF0b3JDaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlW107XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIF9waWNrZXI6IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gbG9jYWxlIGNoYW5nZVxuICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRJbnB1dFZhbHVlKGRhdGU6IERhdGVbXSk6IHZvaWQge1xuICAgIGxldCByYW5nZSA9ICcnO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBzdGFydDogc3RyaW5nID0gIWRhdGVbMF0gPyAnJ1xuICAgICAgICA6IGZvcm1hdERhdGUoZGF0ZVswXSxcbiAgICAgICAgICB0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZUlucHV0Rm9ybWF0LFxuICAgICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZVxuICAgICAgICApO1xuICAgICAgY29uc3QgZW5kOiBzdHJpbmcgPSAhZGF0ZVsxXSA/ICcnXG4gICAgICAgIDogZm9ybWF0RGF0ZShcbiAgICAgICAgICBkYXRlWzFdLFxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgICByYW5nZSA9IChzdGFydCAmJiBlbmQpID8gc3RhcnQgKyB0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZVNlcGFyYXRvciArIGVuZCA6ICcnO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCByYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgdGhpcy53cml0ZVZhbHVlKChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IF92YWx1ZTogW0RhdGUsIERhdGVdID0gYy52YWx1ZTtcblxuICAgIGlmIChfdmFsdWUgPT09IG51bGwgfHwgX3ZhbHVlID09PSB1bmRlZmluZWQgfHwgIWlzQXJyYXkoX3ZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgX2lzRmlyc3REYXRlVmFsaWQgPSBpc0RhdGVWYWxpZChfdmFsdWVbMF0pO1xuICAgIGNvbnN0IF9pc1NlY29uZERhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVsxXSk7XG5cbiAgICBpZiAoIV9pc0ZpcnN0RGF0ZVZhbGlkKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzBdIH0gfTtcbiAgICB9XG5cbiAgICBpZiAoIV9pc1NlY29uZERhdGVWYWxpZCkge1xuICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IGludmFsaWQ6IF92YWx1ZVsxXSB9IH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWluRGF0ZSAmJiBpc0JlZm9yZShfdmFsdWVbMF0sIHRoaXMuX3BpY2tlci5taW5EYXRlLCAnZGF0ZScpKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgbWluRGF0ZTogdGhpcy5fcGlja2VyLm1pbkRhdGUgfSB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1heERhdGUgJiYgaXNBZnRlcihfdmFsdWVbMV0sIHRoaXMuX3BpY2tlci5tYXhEYXRlLCAnZGF0ZScpKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgbWF4RGF0ZTogdGhpcy5fcGlja2VyLm1heERhdGUgfSB9O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl92YWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGVbXSB8IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgX2xvY2FsZUtleSA9IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZTtcbiAgICAgIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUoX2xvY2FsZUtleSk7XG4gICAgICBpZiAoIV9sb2NhbGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBMb2NhbGUgXCIke19sb2NhbGVLZXl9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGxldCBfaW5wdXQ6IChzdHJpbmdbXSB8IERhdGVbXSkgPSBbXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIF9pbnB1dCA9IHZhbHVlLnNwbGl0KHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlU2VwYXJhdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIF9pbnB1dCA9IHZhbHVlO1xuICAgICAgfVxuXG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gKF9pbnB1dCBhcyBzdHJpbmdbXSlcbiAgICAgICAgLm1hcCgoX3ZhbDogc3RyaW5nKTogRGF0ZSA9PlxuICAgICAgICAgIHBhcnNlRGF0ZShfdmFsLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSkpXG4gICAgICAgIC5tYXAoKGRhdGU6IERhdGUpID0+IChpc05hTihkYXRlLnZhbHVlT2YoKSkgPyBudWxsIDogZGF0ZSkpO1xuICAgIH1cblxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9waWNrZXIuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLl9waWNrZXIuaGlkZSgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpLmJsdXIoKTtcbiAgfVxufVxuIl19