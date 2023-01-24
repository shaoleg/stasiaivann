/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import { getControlsValue } from './timepicker-controls.util';
import { TimepickerConfig } from './timepicker.config';
import { isValidDate, padNumber, parseTime, isInputValid, isHourInputValid, isMinuteInputValid, isSecondInputValid, isInputLimitValid } from './timepicker.utils';
export const /** @type {?} */ TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => TimepickerComponent),
    multi: true
};
export class TimepickerComponent {
    /**
     * @param {?} _config
     * @param {?} _cd
     * @param {?} _store
     * @param {?} _timepickerActions
     */
    constructor(_config, _cd, _store, _timepickerActions) {
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new EventEmitter();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select(state => state.value)
            .subscribe((value) => {
            // update UI values if date changed
            this._renderTime(value);
            this.onChange(value);
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        });
        _store
            .select(state => state.controls)
            .subscribe((controlsState) => {
            this.isValid.emit(isInputValid(this.hours, this.minutes, this.seconds, this.isPM()));
            Object.assign(this, controlsState);
            _cd.markForCheck();
        });
    }
    /**
     * @deprecated - please use `isEditable` instead
     * @return {?}
     */
    get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
    }
    /**
     * @return {?}
     */
    get isEditable() {
        return !(this.readonlyInput || this.disabled);
    }
    /**
     * @return {?}
     */
    resetValidation() {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    }
    /**
     * @return {?}
     */
    isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    prevDef($event) {
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    wheelSign($event) {
        return Math.sign($event.deltaY) * -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeHours(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeMinutes(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeSeconds(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step, source }));
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    updateHours(hours) {
        this.resetValidation();
        this.hours = hours;
        const /** @type {?} */ isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    updateMinutes(minutes) {
        this.resetValidation();
        this.minutes = minutes;
        const /** @type {?} */ isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    updateSeconds(seconds) {
        this.resetValidation();
        this.seconds = seconds;
        const /** @type {?} */ isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @return {?}
     */
    isValidLimit() {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    }
    /**
     * @return {?}
     */
    _updateTime() {
        const /** @type {?} */ _seconds = this.showSeconds ? this.seconds : void 0;
        const /** @type {?} */ _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    }
    /**
     * @return {?}
     */
    toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        const /** @type {?} */ _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    }
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.timepickerSub.unsubscribe();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _renderTime(value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        const /** @type {?} */ _value = parseTime(value);
        const /** @type {?} */ _hoursPerDayHalf = 12;
        let /** @type {?} */ _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    }
}
TimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'timepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"HH\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"MM\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"SS\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [`
    .bs-chevron {
      border-style: solid;
      display: block;
      width: 9px;
      height: 9px;
      position: relative;
      border-width: 3px 0px 0 3px;
    }

    .bs-chevron-up {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 2px;
    }

    .bs-chevron-down {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: -2px;
    }

    .bs-timepicker-field {
      width: 50px;
    }
  `]
            }] }
];
/** @nocollapse */
TimepickerComponent.ctorParameters = () => [
    { type: TimepickerConfig, },
    { type: ChangeDetectorRef, },
    { type: TimepickerStore, },
    { type: TimepickerActions, },
];
TimepickerComponent.propDecorators = {
    "hourStep": [{ type: Input },],
    "minuteStep": [{ type: Input },],
    "secondsStep": [{ type: Input },],
    "readonlyInput": [{ type: Input },],
    "disabled": [{ type: Input },],
    "mousewheel": [{ type: Input },],
    "arrowkeys": [{ type: Input },],
    "showSpinners": [{ type: Input },],
    "showMeridian": [{ type: Input },],
    "showMinutes": [{ type: Input },],
    "showSeconds": [{ type: Input },],
    "meridians": [{ type: Input },],
    "min": [{ type: Input },],
    "max": [{ type: Input },],
    "isValid": [{ type: Output },],
};
function TimepickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimepickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimepickerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TimepickerComponent.propDecorators;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerComponent.prototype.hourStep;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerComponent.prototype.minuteStep;
    /**
     * seconds change step
     * @type {?}
     */
    TimepickerComponent.prototype.secondsStep;
    /**
     * if true hours and minutes fields will be readonly
     * @type {?}
     */
    TimepickerComponent.prototype.readonlyInput;
    /**
     * if true hours and minutes fields will be disabled
     * @type {?}
     */
    TimepickerComponent.prototype.disabled;
    /**
     * if true scroll inside hours and minutes inputs will change time
     * @type {?}
     */
    TimepickerComponent.prototype.mousewheel;
    /**
     * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
     * @type {?}
     */
    TimepickerComponent.prototype.arrowkeys;
    /**
     * if true spinner arrows above and below the inputs will be shown
     * @type {?}
     */
    TimepickerComponent.prototype.showSpinners;
    /**
     * if true meridian button will be shown
     * @type {?}
     */
    TimepickerComponent.prototype.showMeridian;
    /**
     * show minutes in timepicker
     * @type {?}
     */
    TimepickerComponent.prototype.showMinutes;
    /**
     * show seconds in timepicker
     * @type {?}
     */
    TimepickerComponent.prototype.showSeconds;
    /**
     * meridian labels based on locale
     * @type {?}
     */
    TimepickerComponent.prototype.meridians;
    /**
     * minimum time user can select
     * @type {?}
     */
    TimepickerComponent.prototype.min;
    /**
     * maximum time user can select
     * @type {?}
     */
    TimepickerComponent.prototype.max;
    /**
     * emits true if value is a valid date
     * @type {?}
     */
    TimepickerComponent.prototype.isValid;
    /** @type {?} */
    TimepickerComponent.prototype.hours;
    /** @type {?} */
    TimepickerComponent.prototype.minutes;
    /** @type {?} */
    TimepickerComponent.prototype.seconds;
    /** @type {?} */
    TimepickerComponent.prototype.meridian;
    /** @type {?} */
    TimepickerComponent.prototype.invalidHours;
    /** @type {?} */
    TimepickerComponent.prototype.invalidMinutes;
    /** @type {?} */
    TimepickerComponent.prototype.invalidSeconds;
    /** @type {?} */
    TimepickerComponent.prototype.canIncrementHours;
    /** @type {?} */
    TimepickerComponent.prototype.canIncrementMinutes;
    /** @type {?} */
    TimepickerComponent.prototype.canIncrementSeconds;
    /** @type {?} */
    TimepickerComponent.prototype.canDecrementHours;
    /** @type {?} */
    TimepickerComponent.prototype.canDecrementMinutes;
    /** @type {?} */
    TimepickerComponent.prototype.canDecrementSeconds;
    /** @type {?} */
    TimepickerComponent.prototype.canToggleMeridian;
    /** @type {?} */
    TimepickerComponent.prototype.onChange;
    /** @type {?} */
    TimepickerComponent.prototype.onTouched;
    /** @type {?} */
    TimepickerComponent.prototype.timepickerSub;
    /** @type {?} */
    TimepickerComponent.prototype._cd;
    /** @type {?} */
    TimepickerComponent.prototype._store;
    /** @type {?} */
    TimepickerComponent.prototype._timepickerActions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFDUyxpQkFBaUIsRUFDakMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVF2RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNsQixNQUFNLG9CQUFvQixDQUFDO0FBTTVCLE1BQU0sQ0FBQyx1QkFBTSxpQ0FBaUMsR0FBOEI7SUFDMUUsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFtQ0YsTUFBTTs7Ozs7OztJQTZFSixZQUNFLE9BQXlCLEVBQ2pCLEtBQ0EsUUFDQTtRQUZBLFFBQUcsR0FBSCxHQUFHO1FBQ0gsV0FBTSxHQUFOLE1BQU07UUFDTix1QkFBa0IsR0FBbEIsa0JBQWtCOzs7O3VCQTdDUixJQUFJLFlB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ZUFBZTtZQURmLGlCQUFpQjs7O3lCQXlFdkIsS0FBSzsyQkFFTCxLQUFLOzRCQUVMLEtBQUs7OEJBRUwsS0FBSzt5QkFFTCxLQUFLOzJCQUVMLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxLQUFLOzZCQUVMLEtBQUs7NEJBRUwsS0FBSzs0QkFFTCxLQUFLOzBCQUVMLEtBQUs7b0JBRUwsS0FBSztvQkFFTCxLQUFLO3dCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1mb3J3YXJkLXJlZiBtYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVGltZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvdGltZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IFRpbWVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLnN0b3JlJztcbmltcG9ydCB7IGdldENvbnRyb2xzVmFsdWUgfSBmcm9tICcuL3RpbWVwaWNrZXItY29udHJvbHMudXRpbCc7XG5pbXBvcnQgeyBUaW1lcGlja2VyQ29uZmlnIH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbmZpZyc7XG5cbmltcG9ydCB7XG4gIFRpbWVDaGFuZ2VTb3VyY2UsXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgVGltZXBpY2tlckNvbnRyb2xzXG59IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5pbXBvcnQge1xuICBpc1ZhbGlkRGF0ZSxcbiAgcGFkTnVtYmVyLFxuICBwYXJzZVRpbWUsXG4gIGlzSW5wdXRWYWxpZCxcbiAgaXNIb3VySW5wdXRWYWxpZCxcbiAgaXNNaW51dGVJbnB1dFZhbGlkLFxuICBpc1NlY29uZElucHV0VmFsaWQsXG4gIGlzSW5wdXRMaW1pdFZhbGlkXG59IGZyb20gJy4vdGltZXBpY2tlci51dGlscyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3Nvck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgVElNRVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBDb250cm9sVmFsdWVBY2Nlc3Nvck1vZGVsID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGltZXBpY2tlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aW1lcGlja2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1RJTUVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiwgVGltZXBpY2tlclN0b3JlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmJzLWNoZXZyb24ge1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDlweDtcbiAgICAgIGhlaWdodDogOXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXdpZHRoOiAzcHggMHB4IDAgM3B4O1xuICAgIH1cblxuICAgIC5icy1jaGV2cm9uLXVwIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLmJzLWNoZXZyb24tZG93biB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICB0b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLmJzLXRpbWVwaWNrZXItZmllbGQge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuICBgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICAgIFRpbWVwaWNrZXJDb250cm9scyxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95IHtcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIGhvdXJTdGVwOiBudW1iZXI7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBASW5wdXQoKSBtaW51dGVTdGVwOiBudW1iZXI7XG4gIC8qKiBzZWNvbmRzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIHNlY29uZHNTdGVwOiBudW1iZXI7XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5SW5wdXQ6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXG4gIEBJbnB1dCgpIG1vdXNld2hlZWw6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHRoZSB2YWx1ZXMgb2YgaG91cnMgYW5kIG1pbnV0ZXMgY2FuIGJlIGNoYW5nZWQgdXNpbmcgdGhlIHVwL2Rvd24gYXJyb3cga2V5cyBvbiB0aGUga2V5Ym9hcmQgKi9cbiAgQElucHV0KCkgYXJyb3drZXlzOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzcGlubmVyIGFycm93cyBhYm92ZSBhbmQgYmVsb3cgdGhlIGlucHV0cyB3aWxsIGJlIHNob3duICovXG4gIEBJbnB1dCgpIHNob3dTcGlubmVyczogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgbWVyaWRpYW4gYnV0dG9uIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgc2hvd01lcmlkaWFuOiBib29sZWFuO1xuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cbiAgQElucHV0KCkgc2hvd01pbnV0ZXM6IGJvb2xlYW47XG4gIC8qKiBzaG93IHNlY29uZHMgaW4gdGltZXBpY2tlciAqL1xuICBASW5wdXQoKSBzaG93U2Vjb25kczogYm9vbGVhbjtcbiAgLyoqIG1lcmlkaWFuIGxhYmVscyBiYXNlZCBvbiBsb2NhbGUgKi9cbiAgQElucHV0KCkgbWVyaWRpYW5zOiBzdHJpbmdbXTtcbiAgLyoqIG1pbmltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cbiAgQElucHV0KCkgbWluOiBEYXRlO1xuICAvKiogbWF4aW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBASW5wdXQoKSBtYXg6IERhdGU7XG5cbiAgLyoqIGVtaXRzIHRydWUgaWYgdmFsdWUgaXMgYSB2YWxpZCBkYXRlICovXG4gIEBPdXRwdXQoKSBpc1ZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHVpIHZhcmlhYmxlc1xuICBob3Vyczogc3RyaW5nO1xuICBtaW51dGVzOiBzdHJpbmc7XG4gIHNlY29uZHM6IHN0cmluZztcbiAgbWVyaWRpYW46IHN0cmluZztcblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0VkaXRhYmxlYCBpbnN0ZWFkICovXG4gIGdldCBpc1NwaW5uZXJzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93U3Bpbm5lcnMgJiYgIXRoaXMucmVhZG9ubHlJbnB1dDtcbiAgfVxuXG4gIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKHRoaXMucmVhZG9ubHlJbnB1dCB8fCB0aGlzLmRpc2FibGVkKTtcbiAgfVxuXG4gIC8vIG1pblxcbWF4IHZhbGlkYXRpb24gZm9yIGlucHV0IGZpZWxkc1xuICBpbnZhbGlkSG91cnMgPSBmYWxzZTtcbiAgaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcbiAgaW52YWxpZFNlY29uZHMgPSBmYWxzZTtcblxuICAvLyB0aW1lIHBpY2tlciBjb250cm9scyBzdGF0ZVxuICBjYW5JbmNyZW1lbnRIb3VyczogYm9vbGVhbjtcbiAgY2FuSW5jcmVtZW50TWludXRlczogYm9vbGVhbjtcbiAgY2FuSW5jcmVtZW50U2Vjb25kczogYm9vbGVhbjtcblxuICBjYW5EZWNyZW1lbnRIb3VyczogYm9vbGVhbjtcbiAgY2FuRGVjcmVtZW50TWludXRlczogYm9vbGVhbjtcbiAgY2FuRGVjcmVtZW50U2Vjb25kczogYm9vbGVhbjtcblxuICBjYW5Ub2dnbGVNZXJpZGlhbjogYm9vbGVhbjtcblxuICAvLyBjb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgdGltZXBpY2tlclN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9jb25maWc6IFRpbWVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3N0b3JlOiBUaW1lcGlja2VyU3RvcmUsXG4gICAgcHJpdmF0ZSBfdGltZXBpY2tlckFjdGlvbnM6IFRpbWVwaWNrZXJBY3Rpb25zXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgX2NvbmZpZyk7XG5cbiAgICB0aGlzLnRpbWVwaWNrZXJTdWIgPSBfc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmFsdWUpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgVUkgdmFsdWVzIGlmIGRhdGUgY2hhbmdlZFxuICAgICAgICB0aGlzLl9yZW5kZXJUaW1lKHZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMudXBkYXRlQ29udHJvbHMoZ2V0Q29udHJvbHNWYWx1ZSh0aGlzKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmNvbnRyb2xzKVxuICAgICAgLnN1YnNjcmliZSgoY29udHJvbHNTdGF0ZTogVGltZXBpY2tlckNvbnRyb2xzKSA9PiB7XG4gICAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGlzSW5wdXRWYWxpZCh0aGlzLmhvdXJzLCB0aGlzLm1pbnV0ZXMsIHRoaXMuc2Vjb25kcywgdGhpcy5pc1BNKCkpKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb250cm9sc1N0YXRlKTtcbiAgICAgICAgX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICByZXNldFZhbGlkYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5pbnZhbGlkSG91cnMgPSBmYWxzZTtcbiAgICB0aGlzLmludmFsaWRNaW51dGVzID0gZmFsc2U7XG4gICAgdGhpcy5pbnZhbGlkU2Vjb25kcyA9IGZhbHNlO1xuICB9XG5cbiAgaXNQTSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93TWVyaWRpYW4gJiYgdGhpcy5tZXJpZGlhbiA9PT0gdGhpcy5tZXJpZGlhbnNbMV07XG4gIH1cblxuICBwcmV2RGVmKCRldmVudDogRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHdoZWVsU2lnbigkZXZlbnQ6IFdoZWVsRXZlbnRJbml0KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5zaWduKCRldmVudC5kZWx0YVkpICogLTE7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy51cGRhdGVDb250cm9scyhnZXRDb250cm9sc1ZhbHVlKHRoaXMpKVxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VIb3VycyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VIb3Vycyh7IHN0ZXAsIHNvdXJjZSB9KSk7XG4gIH1cblxuICBjaGFuZ2VNaW51dGVzKHN0ZXA6IG51bWJlciwgc291cmNlOiBUaW1lQ2hhbmdlU291cmNlID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlTWludXRlcyh7IHN0ZXAsIHNvdXJjZSB9KVxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VTZWNvbmRzKHN0ZXA6IG51bWJlciwgc291cmNlOiBUaW1lQ2hhbmdlU291cmNlID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlU2Vjb25kcyh7IHN0ZXAsIHNvdXJjZSB9KVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVIb3Vycyhob3Vyczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gaXNIb3VySW5wdXRWYWxpZCh0aGlzLmhvdXJzLCB0aGlzLmlzUE0oKSkgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkSG91cnMgPSB0cnVlO1xuICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVRpbWUoKTtcbiAgfVxuXG4gIHVwZGF0ZU1pbnV0ZXMobWludXRlczogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzTWludXRlSW5wdXRWYWxpZCh0aGlzLm1pbnV0ZXMpICYmIHRoaXMuaXNWYWxpZExpbWl0KCk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRoaXMuaW52YWxpZE1pbnV0ZXMgPSB0cnVlO1xuICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVRpbWUoKTtcbiAgfVxuXG4gIHVwZGF0ZVNlY29uZHMoc2Vjb25kczogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcbiAgICB0aGlzLnNlY29uZHMgPSBzZWNvbmRzO1xuXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzU2Vjb25kSW5wdXRWYWxpZCh0aGlzLnNlY29uZHMpICYmIHRoaXMuaXNWYWxpZExpbWl0KCk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRoaXMuaW52YWxpZFNlY29uZHMgPSB0cnVlO1xuICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVRpbWUoKTtcbiAgfVxuXG4gIGlzVmFsaWRMaW1pdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNJbnB1dExpbWl0VmFsaWQoe1xuICAgICAgaG91cjogdGhpcy5ob3VycyxcbiAgICAgIG1pbnV0ZTogdGhpcy5taW51dGVzLFxuICAgICAgc2Vjb25kczogdGhpcy5zZWNvbmRzLFxuICAgICAgaXNQTTogdGhpcy5pc1BNKClcbiAgICB9LCB0aGlzLm1heCwgdGhpcy5taW4pO1xuICB9XG5cbiAgX3VwZGF0ZVRpbWUoKSB7XG4gICAgY29uc3QgX3NlY29uZHMgPSB0aGlzLnNob3dTZWNvbmRzID8gdGhpcy5zZWNvbmRzIDogdm9pZCAwO1xuICAgIGNvbnN0IF9taW51dGVzID0gdGhpcy5zaG93TWludXRlcyA/IHRoaXMubWludXRlcyA6IHZvaWQgMDtcbiAgICBpZiAoIWlzSW5wdXRWYWxpZCh0aGlzLmhvdXJzLCBfbWludXRlcywgX3NlY29uZHMsIHRoaXMuaXNQTSgpKSkge1xuICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuc2V0VGltZSh7XG4gICAgICAgIGhvdXI6IHRoaXMuaG91cnMsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5taW51dGVzLFxuICAgICAgICBzZWNvbmRzOiB0aGlzLnNlY29uZHMsXG4gICAgICAgIGlzUE06IHRoaXMuaXNQTSgpXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVNZXJpZGlhbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2hvd01lcmlkaWFuIHx8ICF0aGlzLmlzRWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBfaG91cnNQZXJEYXlIYWxmID0gMTI7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VIb3Vycyh7XG4gICAgICAgIHN0ZXA6IF9ob3Vyc1BlckRheUhhbGYsXG4gICAgICAgIHNvdXJjZTogJydcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cbiAgICovXG4gIHdyaXRlVmFsdWUob2JqOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHwgRGF0ZSk6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkRGF0ZShvYmopKSB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl90aW1lcGlja2VyQWN0aW9ucy53cml0ZVZhbHVlKHBhcnNlVGltZShvYmopKSk7XG4gICAgfSBlbHNlIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fdGltZXBpY2tlckFjdGlvbnMud3JpdGVWYWx1ZShudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSBjaGFuZ2UgZXZlbnQuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSB0b3VjaCBldmVudC5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCBzdGF0dXMgY2hhbmdlcyB0byBvciBmcm9tIFwiZGlzYWJsZWRcIi5cbiAgICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSwgaXQgd2lsbCBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYXBwcm9wcmlhdGUgRE9NIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGltZXBpY2tlclN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyVGltZSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSk6IHZvaWQge1xuICAgIGlmICghaXNWYWxpZERhdGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmhvdXJzID0gJyc7XG4gICAgICB0aGlzLm1pbnV0ZXMgPSAnJztcbiAgICAgIHRoaXMuc2Vjb25kcyA9ICcnO1xuICAgICAgdGhpcy5tZXJpZGlhbiA9IHRoaXMubWVyaWRpYW5zWzBdO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgX3ZhbHVlID0gcGFyc2VUaW1lKHZhbHVlKTtcbiAgICBjb25zdCBfaG91cnNQZXJEYXlIYWxmID0gMTI7XG4gICAgbGV0IF9ob3VycyA9IF92YWx1ZS5nZXRIb3VycygpO1xuXG4gICAgaWYgKHRoaXMuc2hvd01lcmlkaWFuKSB7XG4gICAgICB0aGlzLm1lcmlkaWFuID0gdGhpcy5tZXJpZGlhbnNbX2hvdXJzID49IF9ob3Vyc1BlckRheUhhbGYgPyAxIDogMF07XG4gICAgICBfaG91cnMgPSBfaG91cnMgJSBfaG91cnNQZXJEYXlIYWxmO1xuICAgICAgLy8gc2hvdWxkIGJlIDEyIFBNLCBub3QgMDAgUE1cbiAgICAgIGlmIChfaG91cnMgPT09IDApIHtcbiAgICAgICAgX2hvdXJzID0gX2hvdXJzUGVyRGF5SGFsZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhvdXJzID0gcGFkTnVtYmVyKF9ob3Vycyk7XG4gICAgdGhpcy5taW51dGVzID0gcGFkTnVtYmVyKF92YWx1ZS5nZXRNaW51dGVzKCkpO1xuICAgIHRoaXMuc2Vjb25kcyA9IHBhZE51bWJlcihfdmFsdWUuZ2V0VVRDU2Vjb25kcygpKTtcbiAgfVxufVxuIl19