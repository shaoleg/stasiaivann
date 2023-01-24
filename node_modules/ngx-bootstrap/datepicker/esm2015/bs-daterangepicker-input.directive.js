/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, forwardRef, Host, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { parseDate, formatDate, getLocale, isAfter, isBefore, isArray, isDateValid } from 'ngx-bootstrap/chronos';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsLocaleService } from './bs-locale.service';
const /** @type {?} */ BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDaterangepickerInputDirective),
    multi: true
};
const /** @type {?} */ BS_DATERANGEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDaterangepickerInputDirective),
    multi: true
};
export class BsDaterangepickerInputDirective {
    /**
     * @param {?} _picker
     * @param {?} _localeService
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} changeDetection
     */
    constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe((value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(() => {
            this._setInputValue(this._value);
        });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    _setInputValue(date) {
        let /** @type {?} */ range = '';
        if (date) {
            const /** @type {?} */ start = !date[0] ? ''
                : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            const /** @type {?} */ end = !date[1] ? ''
                : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue((/** @type {?} */ (event.target)).value);
        this._onChange(this._value);
        this._onTouched();
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        const /** @type {?} */ _value = c.value;
        if (_value === null || _value === undefined || !isArray(_value)) {
            return null;
        }
        const /** @type {?} */ _isFirstDateValid = isDateValid(_value[0]);
        const /** @type {?} */ _isSecondDateValid = isDateValid(_value[1]);
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            this._value = null;
        }
        else {
            const /** @type {?} */ _localeKey = this._localeService.currentLocale;
            const /** @type {?} */ _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
            }
            let /** @type {?} */ _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = (/** @type {?} */ (_input))
                .map((_val) => parseDate(_val, this._picker._config.dateInputFormat, this._localeService.currentLocale))
                .map((date) => (isNaN(date.valueOf()) ? null : date));
        }
        this._picker.bsValue = this._value;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this._onTouched();
    }
    /**
     * @return {?}
     */
    hide() {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    }
}
BsDaterangepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[bsDaterangepicker]`,
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
            },] }
];
/** @nocollapse */
BsDaterangepickerInputDirective.ctorParameters = () => [
    { type: BsDaterangepickerDirective, decorators: [{ type: Host },] },
    { type: BsLocaleService, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImJzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUVKLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsYUFBYSxFQUNiLGlCQUFpQixFQUdsQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsdUJBQU0saUNBQWlDLEdBQWE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztJQUM5RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRix1QkFBTSw0QkFBNEIsR0FBYTtJQUM3QyxPQUFPLEVBQUUsYUFBYTs7SUFFdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztJQUM5RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFZRixNQUFNOzs7Ozs7OztJQVFKLFlBQTRCLFNBQ1IsZ0JBQ0EsV0FDQSxRQUNBO1FBSlEsWUFBTyxHQUFQLE9BQU87UUFDZixtQkFBYyxHQUFkLGNBQWM7UUFDZCxjQUFTLEdBQVQsU0FBUztRQUNU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QixJQUFJO1lBbENWLGVBQWU7WUFadEIsU0FBUztZQUpULFVBQVU7WUFGVixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBwYXJzZURhdGUsIGZvcm1hdERhdGUsIGdldExvY2FsZSwgaXNBZnRlciwgaXNCZWZvcmUsIGlzQXJyYXksIGlzRGF0ZVZhbGlkIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W2JzRGF0ZXJhbmdlcGlja2VyXWAsXG4gIGhvc3Q6IHtcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gICAgJyhrZXl1cC5lc2MpJzogJ2hpZGUoKScsXG4gICAgJyhibHVyKSc6ICdvbkJsdXIoKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIHByaXZhdGUgX29uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlICovXG4gIHByaXZhdGUgX3ZhbGlkYXRvckNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGVbXTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZVxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldElucHV0VmFsdWUoZGF0ZTogRGF0ZVtdKTogdm9pZCB7XG4gICAgbGV0IHJhbmdlID0gJyc7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0OiBzdHJpbmcgPSAhZGF0ZVswXSA/ICcnXG4gICAgICAgIDogZm9ybWF0RGF0ZShkYXRlWzBdLFxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgICBjb25zdCBlbmQ6IHN0cmluZyA9ICFkYXRlWzFdID8gJydcbiAgICAgICAgOiBmb3JtYXREYXRlKFxuICAgICAgICAgIGRhdGVbMV0sXG4gICAgICAgICAgdGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VJbnB1dEZvcm1hdCxcbiAgICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICAgIHJhbmdlID0gKHN0YXJ0ICYmIGVuZCkgPyBzdGFydCArIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlU2VwYXJhdG9yICsgZW5kIDogJyc7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHJhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0aGlzLndyaXRlVmFsdWUoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgX3ZhbHVlOiBbRGF0ZSwgRGF0ZV0gPSBjLnZhbHVlO1xuXG4gICAgaWYgKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCB8fCAhaXNBcnJheShfdmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBfaXNGaXJzdERhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVswXSk7XG4gICAgY29uc3QgX2lzU2Vjb25kRGF0ZVZhbGlkID0gaXNEYXRlVmFsaWQoX3ZhbHVlWzFdKTtcblxuICAgIGlmICghX2lzRmlyc3REYXRlVmFsaWQpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBpbnZhbGlkOiBfdmFsdWVbMF0gfSB9O1xuICAgIH1cblxuICAgIGlmICghX2lzU2Vjb25kRGF0ZVZhbGlkKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzFdIH0gfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5taW5EYXRlICYmIGlzQmVmb3JlKF92YWx1ZVswXSwgdGhpcy5fcGlja2VyLm1pbkRhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtaW5EYXRlOiB0aGlzLl9waWNrZXIubWluRGF0ZSB9IH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWF4RGF0ZSAmJiBpc0FmdGVyKF92YWx1ZVsxXSwgdGhpcy5fcGlja2VyLm1heERhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtYXhEYXRlOiB0aGlzLl9waWNrZXIubWF4RGF0ZSB9IH07XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZVtdIHwgc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBfbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlO1xuICAgICAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShfbG9jYWxlS2V5KTtcbiAgICAgIGlmICghX2xvY2FsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYExvY2FsZSBcIiR7X2xvY2FsZUtleX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbGV0IF9pbnB1dDogKHN0cmluZ1tdIHwgRGF0ZVtdKSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWUuc3BsaXQodGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VTZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWU7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5fdmFsdWUgPSAoX2lucHV0IGFzIHN0cmluZ1tdKVxuICAgICAgICAubWFwKChfdmFsOiBzdHJpbmcpOiBEYXRlID0+XG4gICAgICAgICAgcGFyc2VEYXRlKF92YWwsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKSlcbiAgICAgICAgLm1hcCgoZGF0ZTogRGF0ZSkgPT4gKGlzTmFOKGRhdGUudmFsdWVPZigpKSA/IG51bGwgOiBkYXRlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xuICB9XG59XG4iXX0=