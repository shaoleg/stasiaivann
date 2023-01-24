import { Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimepickerActions {
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeHours(event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeMinutes(event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeSeconds(event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTime(value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateControls(value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    }
}
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
TimepickerActions.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ dex = 10;
const /** @type {?} */ hoursPerDay = 24;
const /** @type {?} */ hoursPerDayHalf = 12;
const /** @type {?} */ minutesPerHour = 60;
const /** @type {?} */ secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM = false) {
    const /** @type {?} */ hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    const /** @type {?} */ minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    const /** @type {?} */ seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    let /** @type {?} */ hour = value.getHours();
    let /** @type {?} */ minutes = value.getMinutes();
    let /** @type {?} */ seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    let /** @type {?} */ hour = parseHours(opts.hour);
    const /** @type {?} */ minute = parseMinutes(opts.minute);
    const /** @type {?} */ seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    const /** @type {?} */ _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    const /** @type {?} */ newDate = changeTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
function getControlsValue(state) {
    const { hourStep, minuteStep, secondsStep, readonlyInput, disabled, mousewheel, arrowkeys, showSpinners, showMeridian, showSeconds, meridians, min, max } = state;
    return {
        hourStep,
        minuteStep,
        secondsStep,
        readonlyInput,
        disabled,
        mousewheel,
        arrowkeys,
        showSpinners,
        showMeridian,
        showSeconds,
        meridians,
        min,
        max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
function timepickerControls(value, state) {
    const /** @type {?} */ hoursPerDayHalf = 12;
    const { min, max, hourStep, minuteStep, secondsStep, showSeconds } = state;
    const /** @type {?} */ res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        const /** @type {?} */ _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            const /** @type {?} */ _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            const /** @type {?} */ _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        const /** @type {?} */ _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            const /** @type {?} */ _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            const /** @type {?} */ _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
class TimepickerConfig {
    constructor() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
    }
}
TimepickerConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function timepickerReducer(state = initialState, action) {
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            const /** @type {?} */ _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            const /** @type {?} */ _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            const /** @type {?} */ _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            const /** @type {?} */ _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            const /** @type {?} */ _newControlsState = timepickerControls(state.value, action.payload);
            const /** @type {?} */ _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimepickerStore extends MiniStore {
    constructor() {
        const /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        const /** @type {?} */ state = new MiniState(initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TimepickerStore.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => TimepickerComponent),
    multi: true
};
class TimepickerComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
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

export { TimepickerComponent, TimepickerActions, TimepickerStore, TimepickerConfig, TimepickerModule, TIMEPICKER_CONTROL_VALUE_ACCESSOR as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10aW1lcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLnV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci1jb250cm9scy51dGlsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci9yZWR1Y2VyL3RpbWVwaWNrZXIucmVkdWNlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgVGltZUNoYW5nZUV2ZW50LFxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVcbn0gZnJvbSAnLi4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckFjdGlvbnMge1xuICBzdGF0aWMgcmVhZG9ubHkgV1JJVEVfVkFMVUUgPSAnW3RpbWVwaWNrZXJdIHdyaXRlIHZhbHVlIGZyb20gbmcgbW9kZWwnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0hPVVJTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2UgaG91cnMnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX01JTlVURVMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBtaW51dGVzJztcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9TRUNPTkRTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2Ugc2Vjb25kcyc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfVElNRV9VTklUID0gJ1t0aW1lcGlja2VyXSBzZXQgdGltZSB1bml0JztcbiAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9DT05UUk9MUyA9ICdbdGltZXBpY2tlcl0gdXBkYXRlIGNvbnRyb2xzJztcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLldSSVRFX1ZBTFVFLFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlSG91cnMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfSE9VUlMsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VNaW51dGVzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX01JTlVURVMsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VTZWNvbmRzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUyxcbiAgICAgIHBheWxvYWQ6IGV2ZW50XG4gICAgfTtcbiAgfVxuXG4gIHNldFRpbWUodmFsdWU6IFRpbWUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklULFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ29udHJvbHModmFsdWU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUyxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGltZSwgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlIH0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmNvbnN0IGRleCA9IDEwO1xuY29uc3QgaG91cnNQZXJEYXkgPSAyNDtcbmNvbnN0IGhvdXJzUGVyRGF5SGFsZiA9IDEyO1xuY29uc3QgbWludXRlc1BlckhvdXIgPSA2MDtcbmNvbnN0IHNlY29uZHNQZXJNaW51dGUgPSA2MDtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlPzogc3RyaW5nIHwgRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTih2YWx1ZS5nZXRIb3VycygpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGlzVmFsaWREYXRlKG5ldyBEYXRlKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRMaW1pdChjb250cm9sczogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLCBuZXdEYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gIGlmIChjb250cm9scy5taW4gJiYgbmV3RGF0ZSA8IGNvbnRyb2xzLm1pbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb250cm9scy5tYXggJiYgbmV3RGF0ZSA+IGNvbnRyb2xzLm1heCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCBkZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHZhbHVlIGlzIG51bWJlciB7XG4gIHJldHVybiAhaXNOYU4odG9OdW1iZXIodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSG91cnMoXG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXG4gIGlzUE0gPSBmYWxzZVxuKTogbnVtYmVyIHtcbiAgY29uc3QgaG91ciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKFxuICAgIGlzTmFOKGhvdXIpIHx8XG4gICAgaG91ciA8IDAgfHxcbiAgICBob3VyID4gKGlzUE0gPyBob3Vyc1BlckRheUhhbGYgOiBob3Vyc1BlckRheSlcbiAgKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNaW51dGVzKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBtaW51dGUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmIChpc05hTihtaW51dGUpIHx8IG1pbnV0ZSA8IDAgfHwgbWludXRlID4gbWludXRlc1BlckhvdXIpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIG1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2Vjb25kcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgc2Vjb25kcyA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKGlzTmFOKHNlY29uZHMpIHx8IHNlY29uZHMgPCAwIHx8IHNlY29uZHMgPiBzZWNvbmRzUGVyTWludXRlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogRGF0ZSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpbWUodmFsdWU6IERhdGUsIGRpZmY6IFRpbWUpOiBEYXRlIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBjaGFuZ2VUaW1lKGNyZWF0ZURhdGUobmV3IERhdGUoKSwgMCwgMCwgMCksIGRpZmYpO1xuICB9XG5cbiAgbGV0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xuICBsZXQgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgbGV0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYuaG91cikge1xuICAgIGhvdXIgPSAoaG91ciArIHRvTnVtYmVyKGRpZmYuaG91cikpICUgaG91cnNQZXJEYXk7XG4gICAgaWYgKGhvdXIgPCAwKSB7XG4gICAgICBob3VyICs9IGhvdXJzUGVyRGF5O1xuICAgIH1cbiAgfVxuXG4gIGlmIChkaWZmLm1pbnV0ZSkge1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzICsgdG9OdW1iZXIoZGlmZi5taW51dGUpO1xuICB9XG5cbiAgaWYgKGRpZmYuc2Vjb25kcykge1xuICAgIHNlY29uZHMgPSBzZWNvbmRzICsgdG9OdW1iZXIoZGlmZi5zZWNvbmRzKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVEYXRlKHZhbHVlLCBob3VyLCBtaW51dGVzLCBzZWNvbmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRpbWUodmFsdWU6IERhdGUsIG9wdHM6IFRpbWUpOiBEYXRlIHtcbiAgbGV0IGhvdXIgPSBwYXJzZUhvdXJzKG9wdHMuaG91cik7XG4gIGNvbnN0IG1pbnV0ZSA9IHBhcnNlTWludXRlcyhvcHRzLm1pbnV0ZSk7XG4gIGNvbnN0IHNlY29uZHMgPSBwYXJzZVNlY29uZHMob3B0cy5zZWNvbmRzKSB8fCAwO1xuXG4gIGlmIChvcHRzLmlzUE0pIHtcbiAgICBob3VyICs9IGhvdXJzUGVyRGF5SGFsZjtcbiAgfVxuXG4gIGlmICghdmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKGhvdXIpICYmICFpc05hTihtaW51dGUpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGF0ZShuZXcgRGF0ZSgpLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc05hTihob3VyKSB8fCBpc05hTihtaW51dGUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZURhdGUodmFsdWUsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRlKFxuICB2YWx1ZTogRGF0ZSxcbiAgaG91cnM6IG51bWJlcixcbiAgbWludXRlczogbnVtYmVyLFxuICBzZWNvbmRzOiBudW1iZXJcbik6IERhdGUge1xuICByZXR1cm4gbmV3IERhdGUoXG4gICAgdmFsdWUuZ2V0RnVsbFllYXIoKSxcbiAgICB2YWx1ZS5nZXRNb250aCgpLFxuICAgIHZhbHVlLmdldERhdGUoKSxcbiAgICBob3VycyxcbiAgICBtaW51dGVzLFxuICAgIHNlY29uZHMsXG4gICAgdmFsdWUuZ2V0TWlsbGlzZWNvbmRzKClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZE51bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgX3ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgaWYgKF92YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBgMCR7X3ZhbHVlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hvdXJJbnB1dFZhbGlkKGhvdXJzOiBzdHJpbmcsIGlzUE06IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUhvdXJzKGhvdXJzLCBpc1BNKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlczogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VNaW51dGVzKG1pbnV0ZXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2Vjb25kSW5wdXRWYWxpZChzZWNvbmRzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZVNlY29uZHMoc2Vjb25kcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dExpbWl0VmFsaWQoZGlmZjogVGltZSwgbWF4OiBEYXRlLCBtaW46IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbmV3RGF0ZSA9IGNoYW5nZVRpbWUobmV3IERhdGUoKSwgZGlmZik7XG5cbiAgaWYgKG1heCAmJiBuZXdEYXRlID4gbWF4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1pbiAmJiBuZXdEYXRlIDwgbWluKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lucHV0VmFsaWQoXG4gIGhvdXJzOiBzdHJpbmcsXG4gIG1pbnV0ZXMgPSAnMCcsXG4gIHNlY29uZHMgPSAnMCcsXG4gIGlzUE06IGJvb2xlYW5cbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNIb3VySW5wdXRWYWxpZChob3VycywgaXNQTSlcbiAgICAmJiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlcylcbiAgICAmJiBpc1NlY29uZElucHV0VmFsaWQoc2Vjb25kcyk7XG59XG4iLCJpbXBvcnQgeyBjaGFuZ2VUaW1lIH0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7XG4gIFRpbWVDaGFuZ2VFdmVudCxcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBUaW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VWYWx1ZShcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgZXZlbnQ/OiBUaW1lQ2hhbmdlRXZlbnRcbik6IGJvb2xlYW4ge1xuICBpZiAoc3RhdGUucmVhZG9ubHlJbnB1dCB8fCBzdGF0ZS5kaXNhYmxlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChldmVudCkge1xuICAgIGlmIChldmVudC5zb3VyY2UgPT09ICd3aGVlbCcgJiYgIXN0YXRlLm1vdXNld2hlZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuc291cmNlID09PSAna2V5JyAmJiAhc3RhdGUuYXJyb3drZXlzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VIb3VycyhcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xuKTogYm9vbGVhbiB7XG4gIGlmICghZXZlbnQuc3RlcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50SG91cnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudEhvdXJzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VNaW51dGVzKFxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXG4pOiBib29sZWFuIHtcbiAgaWYgKCFldmVudC5zdGVwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50TWludXRlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZVNlY29uZHMoXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcbik6IGJvb2xlYW4ge1xuICBpZiAoIWV2ZW50LnN0ZXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRTZWNvbmRzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50U2Vjb25kcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbHNWYWx1ZShcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZVxuKTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlIHtcbiAgY29uc3Qge1xuICAgIGhvdXJTdGVwLFxuICAgIG1pbnV0ZVN0ZXAsXG4gICAgc2Vjb25kc1N0ZXAsXG4gICAgcmVhZG9ubHlJbnB1dCxcbiAgICBkaXNhYmxlZCxcbiAgICBtb3VzZXdoZWVsLFxuICAgIGFycm93a2V5cyxcbiAgICBzaG93U3Bpbm5lcnMsXG4gICAgc2hvd01lcmlkaWFuLFxuICAgIHNob3dTZWNvbmRzLFxuICAgIG1lcmlkaWFucyxcbiAgICBtaW4sXG4gICAgbWF4XG4gIH0gPSBzdGF0ZTtcblxuICByZXR1cm4ge1xuICAgIGhvdXJTdGVwLFxuICAgIG1pbnV0ZVN0ZXAsXG4gICAgc2Vjb25kc1N0ZXAsXG4gICAgcmVhZG9ubHlJbnB1dCxcbiAgICBkaXNhYmxlZCxcbiAgICBtb3VzZXdoZWVsLFxuICAgIGFycm93a2V5cyxcbiAgICBzaG93U3Bpbm5lcnMsXG4gICAgc2hvd01lcmlkaWFuLFxuICAgIHNob3dTZWNvbmRzLFxuICAgIG1lcmlkaWFucyxcbiAgICBtaW4sXG4gICAgbWF4XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcGlja2VyQ29udHJvbHMoXG4gIHZhbHVlOiBEYXRlLFxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlXG4pOiBUaW1lcGlja2VyQ29udHJvbHMge1xuICBjb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgY29uc3QgeyBtaW4sIG1heCwgaG91clN0ZXAsIG1pbnV0ZVN0ZXAsIHNlY29uZHNTdGVwLCBzaG93U2Vjb25kcyB9ID0gc3RhdGU7XG4gIGNvbnN0IHJlczogVGltZXBpY2tlckNvbnRyb2xzID0ge1xuICAgIGNhbkluY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkluY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhbkRlY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkRlY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhblRvZ2dsZU1lcmlkaWFuOiB0cnVlXG4gIH07XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBjb21wYXJlIGRhdGVzXG4gIGlmIChtYXgpIHtcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91clN0ZXAgfSk7XG4gICAgcmVzLmNhbkluY3JlbWVudEhvdXJzID0gbWF4ID4gX25ld0hvdXI7XG5cbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRIb3Vycykge1xuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogbWludXRlU3RlcCB9KTtcbiAgICAgIHJlcy5jYW5JbmNyZW1lbnRNaW51dGVzID0gc2hvd1NlY29uZHNcbiAgICAgICAgPyBtYXggPiBfbmV3TWludXRlc1xuICAgICAgICA6IG1heCA+PSBfbmV3TWludXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRNaW51dGVzKSB7XG4gICAgICBjb25zdCBfbmV3U2Vjb25kcyA9IGNoYW5nZVRpbWUodmFsdWUsIHsgc2Vjb25kczogc2Vjb25kc1N0ZXAgfSk7XG4gICAgICByZXMuY2FuSW5jcmVtZW50U2Vjb25kcyA9IG1heCA+PSBfbmV3U2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA8IGhvdXJzUGVyRGF5SGFsZikge1xuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiBob3Vyc1BlckRheUhhbGYgfSkgPCBtYXg7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbikge1xuICAgIGNvbnN0IF9uZXdIb3VyID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91clN0ZXAgfSk7XG4gICAgcmVzLmNhbkRlY3JlbWVudEhvdXJzID0gbWluIDwgX25ld0hvdXI7XG5cbiAgICBpZiAoIXJlcy5jYW5EZWNyZW1lbnRIb3Vycykge1xuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogLW1pbnV0ZVN0ZXAgfSk7XG4gICAgICByZXMuY2FuRGVjcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXG4gICAgICAgID8gbWluIDwgX25ld01pbnV0ZXNcbiAgICAgICAgOiBtaW4gPD0gX25ld01pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50TWludXRlcykge1xuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IC1zZWNvbmRzU3RlcCB9KTtcbiAgICAgIHJlcy5jYW5EZWNyZW1lbnRTZWNvbmRzID0gbWluIDw9IF9uZXdTZWNvbmRzO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5nZXRIb3VycygpID49IGhvdXJzUGVyRGF5SGFsZikge1xuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91cnNQZXJEYXlIYWxmIH0pID4gbWluO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBQcm92aWRlcyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciB0aW1lcGlja2VyICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbmZpZyB7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBob3VyU3RlcCA9IDE7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBtaW51dGVTdGVwID0gNTtcbiAgLyoqIHNlY29uZHMgY2hhbmdlcyBzdGVwICovXG4gIHNlY29uZHNTdGVwID0gMTA7XG4gIC8qKiBpZiB0cnVlIHdvcmtzIGluIDEySCBtb2RlIGFuZCBkaXNwbGF5cyBBTS9QTS4gSWYgZmFsc2Ugd29ya3MgaW4gMjRIIG1vZGUgYW5kIGhpZGVzIEFNL1BNICovXG4gIHNob3dNZXJpZGlhbiA9IHRydWU7XG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXG4gIG1lcmlkaWFucyA9IFsnQU0nLCAnUE0nXTtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgcmVhZG9ubHkgKi9cbiAgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSBob3VycyBhbmQgbWludXRlcyBmaWVsZHMgd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXG4gIG1vdXNld2hlZWwgPSB0cnVlO1xuICAvKiogaWYgdHJ1ZSB0aGUgdmFsdWVzIG9mIGhvdXJzIGFuZCBtaW51dGVzIGNhbiBiZSBjaGFuZ2VkIHVzaW5nIHRoZSB1cC9kb3duIGFycm93IGtleXMgb24gdGhlIGtleWJvYXJkICovXG4gIGFycm93a2V5cyA9IHRydWU7XG4gIC8qKiBpZiB0cnVlIHNwaW5uZXIgYXJyb3dzIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5wdXRzIHdpbGwgYmUgc2hvd24gKi9cbiAgc2hvd1NwaW5uZXJzID0gdHJ1ZTtcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXG4gIHNob3dTZWNvbmRzID0gZmFsc2U7XG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xuICBzaG93TWludXRlcyA9IHRydWU7XG4gIC8qKiBtaW5pbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXG4gIG1pbjogRGF0ZTtcbiAgLyoqIG1heGltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cbiAgbWF4OiBEYXRlO1xufVxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgY2FuQ2hhbmdlSG91cnMsXG4gIGNhbkNoYW5nZU1pbnV0ZXMsXG4gIGNhbkNoYW5nZVNlY29uZHMsXG4gIGNhbkNoYW5nZVZhbHVlLFxuICB0aW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuLi90aW1lcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQge1xuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVwaWNrZXJDb250cm9sc1xufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVscyc7XG5pbXBvcnQgeyBjaGFuZ2VUaW1lLCBzZXRUaW1lLCBpc1ZhbGlkTGltaXQgfSBmcm9tICcuLi90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi90aW1lcGlja2VyLmFjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlclN0YXRlIHtcbiAgdmFsdWU6IERhdGU7XG4gIGNvbmZpZzogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlO1xuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBUaW1lcGlja2VyU3RhdGUgPSB7XG4gIHZhbHVlOiBudWxsLFxuICBjb25maWc6IG5ldyBUaW1lcGlja2VyQ29uZmlnKCksXG4gIGNvbnRyb2xzOiB7XG4gICAgY2FuSW5jcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5JbmNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuRGVjcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5EZWNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuVG9nZ2xlTWVyaWRpYW46IHRydWVcbiAgfVxufTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5XUklURV9WQUxVRToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBhY3Rpb24ucGF5bG9hZCB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9IT1VSUzoge1xuICAgICAgaWYgKFxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcbiAgICAgICAgIWNhbkNoYW5nZUhvdXJzKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5jb250cm9scylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gY2hhbmdlVGltZShzdGF0ZS52YWx1ZSwgeyBob3VyOiBhY3Rpb24ucGF5bG9hZC5zdGVwIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9NSU5VVEVTOiB7XG4gICAgICBpZiAoXG4gICAgICAgICFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcsIGFjdGlvbi5wYXlsb2FkKSB8fFxuICAgICAgICAhY2FuQ2hhbmdlTWludXRlcyhhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY29udHJvbHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IGNoYW5nZVRpbWUoc3RhdGUudmFsdWUsIHsgbWludXRlOiBhY3Rpb24ucGF5bG9hZC5zdGVwIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUzoge1xuICAgICAgaWYgKFxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcbiAgICAgICAgIWNhbkNoYW5nZVNlY29uZHMoYWN0aW9uLnBheWxvYWQsIHN0YXRlLmNvbnRyb2xzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX25ld1RpbWUgPSBjaGFuZ2VUaW1lKHN0YXRlLnZhbHVlLCB7XG4gICAgICAgIHNlY29uZHM6IGFjdGlvbi5wYXlsb2FkLnN0ZXBcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklUOiB7XG4gICAgICBpZiAoIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IHNldFRpbWUoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUzoge1xuICAgICAgY29uc3QgX25ld0NvbnRyb2xzU3RhdGUgPSB0aW1lcGlja2VyQ29udHJvbHMoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGNvbnN0IF9uZXdTdGF0ZTogVGltZXBpY2tlclN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXG4gICAgICAgIGNvbmZpZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGNvbnRyb2xzOiBfbmV3Q29udHJvbHNTdGF0ZVxuICAgICAgfTtcblxuICAgICAgaWYgKHN0YXRlLmNvbmZpZy5zaG93TWVyaWRpYW4gIT09IF9uZXdTdGF0ZS5jb25maWcuc2hvd01lcmlkaWFuKSB7XG4gICAgICAgIGlmIChzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgIF9uZXdTdGF0ZS52YWx1ZSA9IG5ldyBEYXRlKHN0YXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIF9uZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdGltZXBpY2tlclJlZHVjZXIsXG4gIFRpbWVwaWNrZXJTdGF0ZSxcbiAgaW5pdGlhbFN0YXRlXG59IGZyb20gJy4vdGltZXBpY2tlci5yZWR1Y2VyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBY3Rpb24sIE1pbmlTdG9yZSwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlclN0b3JlIGV4dGVuZHMgTWluaVN0b3JlPFRpbWVwaWNrZXJTdGF0ZT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBfZGlzcGF0Y2hlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWN0aW9uPih7XG4gICAgICB0eXBlOiAnW21pbmktbmdyeF0gZGlzcGF0Y2hlciBpbml0J1xuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxUaW1lcGlja2VyU3RhdGU+KFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgX2Rpc3BhdGNoZXIsXG4gICAgICB0aW1lcGlja2VyUmVkdWNlclxuICAgICk7XG4gICAgc3VwZXIoX2Rpc3BhdGNoZXIsIHRpbWVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOm5vLWZvcndhcmQtcmVmIG1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgZ2V0Q29udHJvbHNWYWx1ZSB9IGZyb20gJy4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29uZmlnJztcblxuaW1wb3J0IHtcbiAgVGltZUNoYW5nZVNvdXJjZSxcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBUaW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmltcG9ydCB7XG4gIGlzVmFsaWREYXRlLFxuICBwYWROdW1iZXIsXG4gIHBhcnNlVGltZSxcbiAgaXNJbnB1dFZhbGlkLFxuICBpc0hvdXJJbnB1dFZhbGlkLFxuICBpc01pbnV0ZUlucHV0VmFsaWQsXG4gIGlzU2Vjb25kSW5wdXRWYWxpZCxcbiAgaXNJbnB1dExpbWl0VmFsaWRcbn0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBUSU1FUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yTW9kZWwgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaW1lcGlja2VyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RpbWVwaWNrZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbVElNRVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLCBUaW1lcGlja2VyU3RvcmVdLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuYnMtY2hldnJvbiB7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogOXB4O1xuICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItd2lkdGg6IDNweCAwcHggMCAzcHg7XG4gICAgfVxuXG4gICAgLmJzLWNoZXZyb24tdXAge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0b3A6IDJweDtcbiAgICB9XG5cbiAgICAuYnMtY2hldnJvbi1kb3duIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAgIHRvcDogLTJweDtcbiAgICB9XG5cbiAgICAuYnMtdGltZXBpY2tlci1maWVsZCB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG4gIGBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gICAgVGltZXBpY2tlckNvbnRyb2xzLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3kge1xuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cbiAgQElucHV0KCkgaG91clN0ZXA6IG51bWJlcjtcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIG1pbnV0ZVN0ZXA6IG51bWJlcjtcbiAgLyoqIHNlY29uZHMgY2hhbmdlIHN0ZXAgKi9cbiAgQElucHV0KCkgc2Vjb25kc1N0ZXA6IG51bWJlcjtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgcmVhZG9ubHkgKi9cbiAgQElucHV0KCkgcmVhZG9ubHlJbnB1dDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHNjcm9sbCBpbnNpZGUgaG91cnMgYW5kIG1pbnV0ZXMgaW5wdXRzIHdpbGwgY2hhbmdlIHRpbWUgKi9cbiAgQElucHV0KCkgbW91c2V3aGVlbDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xuICBASW5wdXQoKSBhcnJvd2tleXM6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHNwaW5uZXIgYXJyb3dzIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5wdXRzIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgc2hvd1NwaW5uZXJzOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBtZXJpZGlhbiBidXR0b24gd2lsbCBiZSBzaG93biAqL1xuICBASW5wdXQoKSBzaG93TWVyaWRpYW46IGJvb2xlYW47XG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xuICBASW5wdXQoKSBzaG93TWludXRlczogYm9vbGVhbjtcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXG4gIEBJbnB1dCgpIHNob3dTZWNvbmRzOiBib29sZWFuO1xuICAvKiogbWVyaWRpYW4gbGFiZWxzIGJhc2VkIG9uIGxvY2FsZSAqL1xuICBASW5wdXQoKSBtZXJpZGlhbnM6IHN0cmluZ1tdO1xuICAvKiogbWluaW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBASW5wdXQoKSBtaW46IERhdGU7XG4gIC8qKiBtYXhpbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXG4gIEBJbnB1dCgpIG1heDogRGF0ZTtcblxuICAvKiogZW1pdHMgdHJ1ZSBpZiB2YWx1ZSBpcyBhIHZhbGlkIGRhdGUgKi9cbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gdWkgdmFyaWFibGVzXG4gIGhvdXJzOiBzdHJpbmc7XG4gIG1pbnV0ZXM6IHN0cmluZztcbiAgc2Vjb25kczogc3RyaW5nO1xuICBtZXJpZGlhbjogc3RyaW5nO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRWRpdGFibGVgIGluc3RlYWQgKi9cbiAgZ2V0IGlzU3Bpbm5lcnNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dTcGlubmVycyAmJiAhdGhpcy5yZWFkb25seUlucHV0O1xuICB9XG5cbiAgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5yZWFkb25seUlucHV0IHx8IHRoaXMuZGlzYWJsZWQpO1xuICB9XG5cbiAgLy8gbWluXFxtYXggdmFsaWRhdGlvbiBmb3IgaW5wdXQgZmllbGRzXG4gIGludmFsaWRIb3VycyA9IGZhbHNlO1xuICBpbnZhbGlkTWludXRlcyA9IGZhbHNlO1xuICBpbnZhbGlkU2Vjb25kcyA9IGZhbHNlO1xuXG4gIC8vIHRpbWUgcGlja2VyIGNvbnRyb2xzIHN0YXRlXG4gIGNhbkluY3JlbWVudEhvdXJzOiBib29sZWFuO1xuICBjYW5JbmNyZW1lbnRNaW51dGVzOiBib29sZWFuO1xuICBjYW5JbmNyZW1lbnRTZWNvbmRzOiBib29sZWFuO1xuXG4gIGNhbkRlY3JlbWVudEhvdXJzOiBib29sZWFuO1xuICBjYW5EZWNyZW1lbnRNaW51dGVzOiBib29sZWFuO1xuICBjYW5EZWNyZW1lbnRTZWNvbmRzOiBib29sZWFuO1xuXG4gIGNhblRvZ2dsZU1lcmlkaWFuOiBib29sZWFuO1xuXG4gIC8vIGNvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICB0aW1lcGlja2VyU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2NvbmZpZzogVGltZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFRpbWVwaWNrZXJTdG9yZSxcbiAgICBwcml2YXRlIF90aW1lcGlja2VyQWN0aW9uczogVGltZXBpY2tlckFjdGlvbnNcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcblxuICAgIHRoaXMudGltZXBpY2tlclN1YiA9IF9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBVSSB2YWx1ZXMgaWYgZGF0ZSBjaGFuZ2VkXG4gICAgICAgIHRoaXMuX3JlbmRlclRpbWUodmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy51cGRhdGVDb250cm9scyhnZXRDb250cm9sc1ZhbHVlKHRoaXMpKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBfc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuY29udHJvbHMpXG4gICAgICAuc3Vic2NyaWJlKChjb250cm9sc1N0YXRlOiBUaW1lcGlja2VyQ29udHJvbHMpID0+IHtcbiAgICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoaXNJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMubWludXRlcywgdGhpcy5zZWNvbmRzLCB0aGlzLmlzUE0oKSkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbnRyb2xzU3RhdGUpO1xuICAgICAgICBfY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmludmFsaWRIb3VycyA9IGZhbHNlO1xuICAgIHRoaXMuaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcbiAgICB0aGlzLmludmFsaWRTZWNvbmRzID0gZmFsc2U7XG4gIH1cblxuICBpc1BNKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dNZXJpZGlhbiAmJiB0aGlzLm1lcmlkaWFuID09PSB0aGlzLm1lcmlkaWFuc1sxXTtcbiAgfVxuXG4gIHByZXZEZWYoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgd2hlZWxTaWduKCRldmVudDogV2hlZWxFdmVudEluaXQpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNpZ24oJGV2ZW50LmRlbHRhWSkgKiAtMTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnVwZGF0ZUNvbnRyb2xzKGdldENvbnRyb2xzVmFsdWUodGhpcykpXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZUhvdXJzKHN0ZXA6IG51bWJlciwgc291cmNlOiBUaW1lQ2hhbmdlU291cmNlID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHsgc3RlcCwgc291cmNlIH0pKTtcbiAgfVxuXG4gIGNoYW5nZU1pbnV0ZXMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VNaW51dGVzKHsgc3RlcCwgc291cmNlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZVNlY29uZHMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VTZWNvbmRzKHsgc3RlcCwgc291cmNlIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUhvdXJzKGhvdXJzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcblxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc0hvdXJJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMuaXNQTSgpKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmludmFsaWRIb3VycyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgdXBkYXRlTWludXRlcyhtaW51dGVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gaXNNaW51dGVJbnB1dFZhbGlkKHRoaXMubWludXRlcykgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkTWludXRlcyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgdXBkYXRlU2Vjb25kcyhzZWNvbmRzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuc2Vjb25kcyA9IHNlY29uZHM7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gaXNTZWNvbmRJbnB1dFZhbGlkKHRoaXMuc2Vjb25kcykgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkU2Vjb25kcyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgaXNWYWxpZExpbWl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0lucHV0TGltaXRWYWxpZCh7XG4gICAgICBob3VyOiB0aGlzLmhvdXJzLFxuICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXG4gICAgICBzZWNvbmRzOiB0aGlzLnNlY29uZHMsXG4gICAgICBpc1BNOiB0aGlzLmlzUE0oKVxuICAgIH0sIHRoaXMubWF4LCB0aGlzLm1pbik7XG4gIH1cblxuICBfdXBkYXRlVGltZSgpIHtcbiAgICBjb25zdCBfc2Vjb25kcyA9IHRoaXMuc2hvd1NlY29uZHMgPyB0aGlzLnNlY29uZHMgOiB2b2lkIDA7XG4gICAgY29uc3QgX21pbnV0ZXMgPSB0aGlzLnNob3dNaW51dGVzID8gdGhpcy5taW51dGVzIDogdm9pZCAwO1xuICAgIGlmICghaXNJbnB1dFZhbGlkKHRoaXMuaG91cnMsIF9taW51dGVzLCBfc2Vjb25kcywgdGhpcy5pc1BNKCkpKSB7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5zZXRUaW1lKHtcbiAgICAgICAgaG91cjogdGhpcy5ob3VycyxcbiAgICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHM6IHRoaXMuc2Vjb25kcyxcbiAgICAgICAgaXNQTTogdGhpcy5pc1BNKClcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZU1lcmlkaWFuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zaG93TWVyaWRpYW4gfHwgIXRoaXMuaXNFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9ob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHtcbiAgICAgICAgc3RlcDogX2hvdXJzUGVyRGF5SGFsZixcbiAgICAgICAgc291cmNlOiAnJ1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IHZhbHVlIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgfCBEYXRlKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWREYXRlKG9iaikpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLndyaXRlVmFsdWUocGFyc2VUaW1lKG9iaikpKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl90aW1lcGlja2VyQWN0aW9ucy53cml0ZVZhbHVlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHN0YXR1cyBjaGFuZ2VzIHRvIG9yIGZyb20gXCJkaXNhYmxlZFwiLlxuICAgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlLCBpdCB3aWxsIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhcHByb3ByaWF0ZSBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50aW1lcGlja2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogdm9pZCB7XG4gICAgaWYgKCFpc1ZhbGlkRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaG91cnMgPSAnJztcbiAgICAgIHRoaXMubWludXRlcyA9ICcnO1xuICAgICAgdGhpcy5zZWNvbmRzID0gJyc7XG4gICAgICB0aGlzLm1lcmlkaWFuID0gdGhpcy5tZXJpZGlhbnNbMF07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBfdmFsdWUgPSBwYXJzZVRpbWUodmFsdWUpO1xuICAgIGNvbnN0IF9ob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgICBsZXQgX2hvdXJzID0gX3ZhbHVlLmdldEhvdXJzKCk7XG5cbiAgICBpZiAodGhpcy5zaG93TWVyaWRpYW4pIHtcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1tfaG91cnMgPj0gX2hvdXJzUGVyRGF5SGFsZiA/IDEgOiAwXTtcbiAgICAgIF9ob3VycyA9IF9ob3VycyAlIF9ob3Vyc1BlckRheUhhbGY7XG4gICAgICAvLyBzaG91bGQgYmUgMTIgUE0sIG5vdCAwMCBQTVxuICAgICAgaWYgKF9ob3VycyA9PT0gMCkge1xuICAgICAgICBfaG91cnMgPSBfaG91cnNQZXJEYXlIYWxmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG91cnMgPSBwYWROdW1iZXIoX2hvdXJzKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBwYWROdW1iZXIoX3ZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgdGhpcy5zZWNvbmRzID0gcGFkTnVtYmVyKF92YWx1ZS5nZXRVVENTZWNvbmRzKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvdGltZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IFRpbWVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLnN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RpbWVwaWNrZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGltZXBpY2tlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGltZXBpY2tlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RpbWVwaWNrZXJDb25maWcsIFRpbWVwaWNrZXJBY3Rpb25zLCBUaW1lcGlja2VyU3RvcmVdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7SUFpQkUsVUFBVSxDQUFDLEtBQW9CO1FBQzdCLE9BQU87WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMs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