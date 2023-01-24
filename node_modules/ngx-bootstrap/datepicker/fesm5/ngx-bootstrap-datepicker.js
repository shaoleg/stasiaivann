import { Injectable, Component, EventEmitter, Directive, ElementRef, Input, Output, Renderer2, ViewContainerRef, ChangeDetectorRef, forwardRef, Host, ChangeDetectionStrategy, NgModule, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __extends, __values, __spread } from 'tslib';
import { filter, map } from 'rxjs/operators';
import { getFullYear, getMonth, getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isSame, getFirstDayOfMonth, formatDate, getLocale, isDisabledDay, isSameDay, isSameMonth, isSameYear, setFullDate, isArray, isDateValid, parseDate, isDate } from 'ngx-bootstrap/chronos';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { isBs3 } from 'ngx-bootstrap/utils';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = /** @class */ (function () {
    function BsDatepickerConfig() {
        /**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
    BsDatepickerConfig.decorators = [
        { type: Injectable }
    ];
    return BsDatepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDaysDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype._stopPropagation = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerActions = /** @class */ (function () {
    function BsDatepickerActions() {
    }
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.calculate = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.CALCULATE };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.format = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FORMAT };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.flag = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FLAG };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.select = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    };
    /**
     * @param {?} step
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    };
    /**
     * @param {?} options
     * @return {?}
     */
    BsDatepickerActions.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    };
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.selectRange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.hoverDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.minDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.maxDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    };
    /**
     * @param {?} days
     * @return {?}
     */
    BsDatepickerActions.prototype.daysDisabled = /**
     * @param {?} days
     * @return {?}
     */
    function (days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    };
    /**
     * @param {?} dates
     * @return {?}
     */
    BsDatepickerActions.prototype.datesDisabled = /**
     * @param {?} dates
     * @return {?}
     */
    function (dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.isDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    BsDatepickerActions.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    };
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
    BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: Injectable }
    ];
    return BsDatepickerActions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsLocaleService = /** @class */ (function () {
    function BsLocaleService() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    Object.defineProperty(BsLocaleService.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} locale
     * @return {?}
     */
    BsLocaleService.prototype.use = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    };
    BsLocaleService.decorators = [
        { type: Injectable }
    ];
    return BsLocaleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerEffects = /** @class */ (function () {
    function BsDatepickerEffects(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    BsDatepickerEffects.prototype.init = /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    function (_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    };
    /** setters */
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setValue = /**
     * setters
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.select(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setRangeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.selectRange(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMinDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMaxDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDaysDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.daysDisabled(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDatesDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.datesDisabled(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    };
    /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    BsDatepickerEffects.prototype.setOptions = /**
     * @param {?} _config
     * @return {?}
     */
    function (_config) {
        var /** @type {?} */ _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    };
    /** view to mode bindings */
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setBindings = /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    function (container) {
        container.daysCalendar = this._store
            .select(function (state) { return state.flaggedMonths; })
            .pipe(filter(function (months) { return !!months; }));
        // month calendar
        container.monthsCalendar = this._store
            .select(function (state) { return state.flaggedMonthsCalendar; })
            .pipe(filter(function (months) { return !!months; }));
        // year calendar
        container.yearsCalendar = this._store
            .select(function (state) { return state.yearsCalendarFlagged; })
            .pipe(filter(function (years) { return !!years; }));
        container.viewMode = this._store.select(function (state) { return state.view.mode; });
        container.options = this._store
            .select(function (state) { return state.showWeekNumbers; })
            .pipe(map(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); }));
        return this;
    };
    /** event handlers */
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setEventHandlers = /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    function (container) {
        var _this = this;
        container.setViewMode = function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
        };
        container.navigateTo = function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = function (event) {
            var /** @type {?} */ _cell = /** @type {?} */ (event.cell);
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        container.monthSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: {
                    month: getMonth(event.date),
                    year: getFullYear(event.date)
                },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: {
                    year: getFullYear(event.date)
                },
                viewMode: 'month'
            }));
        };
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.registerDatepickerSideEffects = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function (view) {
            _this._store.dispatch(_this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(function (state) { return state.monthsModel; })
            .pipe(filter(function (monthModel) { return !!monthModel; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.formattedMonths; })
            .pipe(filter(function (month) { return !!month; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .pipe(filter(function (selectedDate) { return !!selectedDate; }))
            .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag for date range picker
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .pipe(filter(function (selectedRange) { return !!selectedRange; }))
            .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
        // monthsCalendar
        this._subs.push(this._store
            .select(function (state) { return state.monthsCalendar; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // years calendar
        this._subs.push(this._store
            .select(function (state) { return state.yearsCalendarModel; })
            .pipe(filter(function (state) { return !!state; }))
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // on hover
        this._subs.push(this._store
            .select(function (state) { return state.hoveredDate; })
            .pipe(filter(function (hoveredDate) { return !!hoveredDate; }))
            .subscribe(function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); }));
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.destroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
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
    BsDatepickerEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: BsDatepickerActions, },
        { type: BsLocaleService, },
    ]; };
    return BsDatepickerEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ defaultMonthOptions = {
    width: 7,
    height: 6
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _initialView = { date: new Date(), mode: 'day' };
var /** @type {?} */ initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */
function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    var /** @type {?} */ weekDay = getDay(date);
    var /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */
function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    var /** @type {?} */ offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isMonthDisabled(date, min, max) {
    var /** @type {?} */ minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    var /** @type {?} */ maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isYearDisabled(date, min, max) {
    var /** @type {?} */ minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    var /** @type {?} */ maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */
function isDisabledDate(date, datesDisabled) {
    if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some(function (dateDisabled) { return isSame(date, dateDisabled, 'date'); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 * @param {?} options
 * @param {?} fn
 * @return {?}
 */
function createMatrix(options, fn) {
    var /** @type {?} */ prevValue = options.initialDate;
    var /** @type {?} */ matrix = new Array(options.height);
    for (var /** @type {?} */ i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (var /** @type {?} */ j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = shiftDate(prevValue, options.shift);
        }
    }
    return matrix;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */
function calcDaysCalendar(startingDate, options) {
    var /** @type {?} */ firstDay = getFirstDayOfMonth(startingDate);
    var /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
    var /** @type {?} */ matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    var /** @type {?} */ daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
            return ({
                days: week.map(function (date, dayIndex) {
                    return ({
                        date: date,
                        label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                        monthIndex: monthIndex,
                        weekIndex: weekIndex,
                        dayIndex: dayIndex
                    });
                })
            });
        })
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map(function (days) { return (days[0] ? formatDate(days[0], format, locale) : ''); });
}
/**
 * @param {?} locale
 * @return {?}
 */
function getShiftedWeekdays(locale) {
    var /** @type {?} */ _locale = getLocale(locale);
    var /** @type {?} */ weekdays = /** @type {?} */ (_locale.weekdaysShort());
    var /** @type {?} */ firstDayOfWeek = _locale.firstDayOfWeek();
    return __spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach(function (week) {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach(function (day, dayIndex) {
            // datepicker
            var /** @type {?} */ isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            var /** @type {?} */ isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            var /** @type {?} */ isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            var /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            var /** @type {?} */ isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            var /** @type {?} */ isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            var /** @type {?} */ isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day') ||
                isDisabledDay(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled);
            var /** @type {?} */ currentDate = new Date();
            var /** @type {?} */ isToday = !isOtherMonth && isSameDay(day.date, currentDate);
            // decide update or not
            var /** @type {?} */ newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled,
                isToday: isToday
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} mode
 * @param {?=} minMode
 * @return {?}
 */
function canSwitchMode(mode, minMode) {
    return minMode ? mode >= minMode : true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ height = 4;
var /** @type {?} */ width = 3;
var /** @type {?} */ shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatMonthsCalendar(viewDate, formatOptions) {
    var /** @type {?} */ initialDate = startOf(viewDate, 'year');
    var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var /** @type {?} */ monthMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
        });
    });
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} monthCalendar
 * @param {?} options
 * @return {?}
 */
function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach(function (months, rowIndex) {
        months.forEach(function (month, monthIndex) {
            var /** @type {?} */ isHovered = isSameMonth(month.date, options.hoveredMonth);
            var /** @type {?} */ isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            var /** @type {?} */ newMonth = Object.assign(/*{},*/ month, {
                isHovered: isHovered,
                isDisabled: isDisabled
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ height$1 = 4;
var /** @type {?} */ width$1 = 4;
var /** @type {?} */ yearsPerCalendar = height$1 * width$1;
var /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var /** @type {?} */ shift$1 = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearsCalendar(viewDate, formatOptions) {
    var /** @type {?} */ initialDate = shiftDate(viewDate, { year: initialShift });
    var /** @type {?} */ matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
    var /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
        });
    });
    var /** @type {?} */ yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    var /** @type {?} */ from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    var /** @type {?} */ to = formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach(function (years, rowIndex) {
        years.forEach(function (year, yearIndex) {
            var /** @type {?} */ isHovered = isSameYear(year.date, options.hoveredYear);
            var /** @type {?} */ isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            var /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    var /** @type {?} */ i = yearsCalendar.years.length - 1;
    var /** @type {?} */ j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function bsDatepickerReducer(state, action) {
    if (state === void 0) { state = initialDatepickerState; }
    switch (action.type) {
        case BsDatepickerActions.CALCULATE: {
            return calculateReducer(state);
        }
        case BsDatepickerActions.FORMAT: {
            return formatReducer(state, action);
        }
        case BsDatepickerActions.FLAG: {
            return flagReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_OFFSET: {
            var /** @type {?} */ date = shiftDate(startOf(state.view.date, 'month'), action.payload);
            var /** @type {?} */ newState = {
                view: {
                    mode: state.view.mode,
                    date: date
                }
            };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            var /** @type {?} */ payload = action.payload;
            var /** @type {?} */ date = setFullDate(state.view.date, payload.unit);
            var /** @type {?} */ newState = void 0;
            var /** @type {?} */ mode = void 0;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date: date, mode: mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date: date, mode: mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode)) {
                return state;
            }
            var /** @type {?} */ date = state.view.date;
            var /** @type {?} */ mode = action.payload;
            var /** @type {?} */ newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            var /** @type {?} */ newState = {
                selectedDate: action.payload,
                view: state.view
            };
            var /** @type {?} */ mode = state.view.mode;
            var /** @type {?} */ _date = action.payload || state.view.date;
            var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            var /** @type {?} */ newState = action.payload;
            // preserve view mode
            var /** @type {?} */ mode = newState.minMode ? newState.minMode : state.view.mode;
            var /** @type {?} */ _viewDate = isDateValid(newState.value) && newState.value
                || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0]
                || state.view.date;
            var /** @type {?} */ date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode: mode, date: date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (isArray(newState.value)) {
                    newState.selectedRange = newState.value;
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case BsDatepickerActions.SELECT_RANGE: {
            var /** @type {?} */ newState = {
                selectedRange: action.payload,
                view: state.view
            };
            var /** @type {?} */ mode = state.view.mode;
            var /** @type {?} */ _date = action.payload && action.payload[0] || state.view.date;
            var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case BsDatepickerActions.SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case BsDatepickerActions.SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        default:
            return state;
    }
}
/**
 * @param {?} state
 * @return {?}
 */
function calculateReducer(state) {
    // how many calendars
    var /** @type {?} */ displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    var /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
        var /** @type {?} */ monthsModel = new Array(displayMonths);
        for (var /** @type {?} */ monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = shiftDate(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel: monthsModel });
    }
    if (state.view.mode === 'month') {
        var /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        var /** @type {?} */ formattedMonths = state.monthsModel.map(function (month, monthIndex) {
            return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
        });
        return Object.assign({}, state, { formattedMonths: formattedMonths });
    }
    // how many calendars
    var /** @type {?} */ displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    var /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'month') {
        var /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        var /** @type {?} */ flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
            return flagDaysCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                daysDisabled: state.daysDisabled,
                datesDisabled: state.datesDisabled,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonths: flaggedMonths });
    }
    if (state.view.mode === 'month') {
        var /** @type {?} */ flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
            return flagMonthsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        var /** @type {?} */ yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
            return flagYearsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                displayMonths: state.displayMonths,
                yearIndex: yearIndex
            });
        });
        return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
    }
    return state;
}
/**
 * @param {?} state
 * @return {?}
 */
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 * @param {?} viewDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getViewDate(viewDate, minDate, maxDate) {
    var /** @type {?} */ _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && isAfter(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && isBefore(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerStore = /** @class */ (function (_super) {
    __extends(BsDatepickerStore, _super);
    function BsDatepickerStore() {
        var _this = this;
        var /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        var /** @type {?} */ state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
        return _this;
    }
    BsDatepickerStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDatepickerStore.ctorParameters = function () { return []; };
    return BsDatepickerStore;
}(MiniStore));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerContainerComponent = /** @class */ (function (_super) {
    __extends(BsDatepickerContainerComponent, _super);
    function BsDatepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new EventEmitter();
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        var /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    };
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
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
        this._effects.destroy();
        var e_1, _c;
    };
    BsDatepickerContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-datepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    }
                }] }
    ];
    /** @nocollapse */
    BsDatepickerContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
        { type: BsDatepickerStore, },
        { type: BsDatepickerActions, },
        { type: BsDatepickerEffects, },
    ]; };
    return BsDatepickerContainerComponent;
}(BsDatepickerAbstractComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerDirective = /** @class */ (function () {
    function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         * Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the datepicker is currently being shown
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
    Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
        set: /**
         * Initial value of datepicker
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
    BsDatepickerDirective.prototype.ngOnInit = /**
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
    BsDatepickerDirective.prototype.ngOnChanges = /**
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
        if (changes["daysDisabled"]) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
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
    BsDatepickerDirective.prototype.show = /**
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
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
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
    BsDatepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
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
    BsDatepickerDirective.prototype.toggle = /**
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
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
    ]; };
    BsDatepickerDirective.propDecorators = {
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
        "minMode": [{ type: Input },],
        "daysDisabled": [{ type: Input },],
        "datesDisabled": [{ type: Input },],
        "bsValueChange": [{ type: Output },],
    };
    return BsDatepickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerInlineConfig = /** @class */ (function (_super) {
    __extends(BsDatepickerInlineConfig, _super);
    function BsDatepickerInlineConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BsDatepickerInlineConfig.decorators = [
        { type: Injectable }
    ];
    return BsDatepickerInlineConfig;
}(BsDatepickerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerInlineContainerComponent = /** @class */ (function (_super) {
    __extends(BsDatepickerInlineContainerComponent, _super);
    function BsDatepickerInlineContainerComponent(_config, _store, _actions, _effects) {
        return _super.call(this, _config, _store, _actions, _effects) || this;
    }
    BsDatepickerInlineContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-datepicker-inline-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'display: inline-block;'
                    }
                }] }
    ];
    /** @nocollapse */
    BsDatepickerInlineContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
        { type: BsDatepickerStore, },
        { type: BsDatepickerActions, },
        { type: BsDatepickerEffects, },
    ]; };
    return BsDatepickerInlineContainerComponent;
}(BsDatepickerContainerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerInlineDirective = /** @class */ (function () {
    function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
        set: /**
         * Initial value of datepicker
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
    BsDatepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnChanges = /**
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
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
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
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerInlineDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'bs-datepicker-inline',
                    exportAs: 'bsDatepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDatepickerInlineConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
    ]; };
    BsDatepickerInlineDirective.propDecorators = {
        "bsValue": [{ type: Input },],
        "bsConfig": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "datesDisabled": [{ type: Input },],
        "bsValueChange": [{ type: Output },],
    };
    return BsDatepickerInlineDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var /** @type {?} */ BS_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var BsDatepickerInputDirective = /** @class */ (function () {
    function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
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
     * @param {?} value
     * @return {?}
     */
    BsDatepickerInputDirective.prototype._setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ initialDate = !value ? ''
            : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.onChange = /**
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
    BsDatepickerInputDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        var /** @type {?} */ _value = c.value;
        /* tslint:disable-next-line: prefer-switch */
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (isDate(_value)) {
            var /** @type {?} */ _isDateValid = isDateValid(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnValidatorChange = /**
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
    BsDatepickerInputDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            this._value = null;
        }
        else {
            var /** @type {?} */ _localeKey = this._localeService.currentLocale;
            var /** @type {?} */ _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        }
        this._picker.bsValue = this._value;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.setDisabledState = /**
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
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    };
    BsDatepickerInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[bsDatepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    BsDatepickerInputDirective.ctorParameters = function () { return [
        { type: BsDatepickerDirective, decorators: [{ type: Host },] },
        { type: BsLocaleService, },
        { type: Renderer2, },
        { type: ElementRef, },
        { type: ChangeDetectorRef, },
    ]; };
    return BsDatepickerInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDaterangepickerConfig = /** @class */ (function (_super) {
    __extends(BsDaterangepickerConfig, _super);
    function BsDaterangepickerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // DatepickerRenderOptions
        _this.displayMonths = 2;
        return _this;
    }
    BsDaterangepickerConfig.decorators = [
        { type: Injectable }
    ];
    return BsDaterangepickerConfig;
}(BsDatepickerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
    __extends(BsDaterangepickerContainerComponent, _super);
    function BsDaterangepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new EventEmitter();
        _this._rangeStack = [];
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setRangeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.containerClass = this._config.containerClass;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        var /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    };
    /**
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
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
        this._effects.destroy();
        var e_1, _c;
    };
    BsDaterangepickerContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-daterangepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    }
                }] }
    ];
    /** @nocollapse */
    BsDaterangepickerContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
        { type: BsDatepickerStore, },
        { type: BsDatepickerActions, },
        { type: BsDatepickerEffects, },
    ]; };
    return BsDaterangepickerContainerComponent;
}(BsDatepickerAbstractComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
            for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsCalendarLayoutComponent = /** @class */ (function () {
    function BsCalendarLayoutComponent() {
    }
    BsCalendarLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-calendar-layout',
                    template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                }] }
    ];
    return BsCalendarLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsCurrentDateViewComponent = /** @class */ (function () {
    function BsCurrentDateViewComponent() {
    }
    BsCurrentDateViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-current-date',
                    template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                }] }
    ];
    /** @nocollapse */
    BsCurrentDateViewComponent.propDecorators = {
        "title": [{ type: Input },],
    };
    return BsCurrentDateViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsCustomDatesViewComponent = /** @class */ (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BsCustomDatesViewComponent.propDecorators = {
        "isCustomRangeShown": [{ type: Input },],
        "ranges": [{ type: Input },],
    };
    return BsCustomDatesViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
    function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    BsDatepickerDayDecoratorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
    };
    BsDatepickerDayDecoratorComponent.decorators = [
        { type: Component, args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.disabled]': 'day.isDisabled',
                        '[class.is-highlighted]': 'day.isHovered',
                        '[class.is-other-month]': 'day.isOtherMonth',
                        '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                        '[class.in-range]': 'day.isInRange',
                        '[class.select-start]': 'day.isSelectionStart',
                        '[class.select-end]': 'day.isSelectionEnd',
                        '[class.selected]': 'day.isSelected'
                    },
                    template: "{{ day.label }}"
                }] }
    ];
    /** @nocollapse */
    BsDatepickerDayDecoratorComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    BsDatepickerDayDecoratorComponent.propDecorators = {
        "day": [{ type: Input },],
    };
    return BsDatepickerDayDecoratorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
BsNavigationDirection[BsNavigationDirection.UP] = "UP";
BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDatepickerNavigationViewComponent = /** @class */ (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.navTo = /**
     * @param {?} down
     * @return {?}
     */
    function (down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    };
    /**
     * @param {?} viewMode
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.view = /**
     * @param {?} viewMode
     * @return {?}
     */
    function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDatepickerNavigationViewComponent.propDecorators = {
        "calendar": [{ type: Input },],
        "onNavigate": [{ type: Output },],
        "onViewMode": [{ type: Output },],
    };
    return BsDatepickerNavigationViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDaysCalendarViewComponent = /** @class */ (function () {
    function BsDaysCalendarViewComponent(_config) {
        this._config = _config;
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onHoverWeek = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSelect.emit(event);
    };
    /**
     * @param {?} week
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectWeek = /**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        if (week.days
            && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        var /** @type {?} */ selectedDay = week.days.find(function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        this.onSelect.emit(selectedDay);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.weekHoverHandler = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        var /** @type {?} */ hasActiveDays = cell.days.find(function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.hoverDay = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
    ]; };
    BsDaysCalendarViewComponent.propDecorators = {
        "calendar": [{ type: Input },],
        "options": [{ type: Input },],
        "onNavigate": [{ type: Output },],
        "onViewMode": [{ type: Output },],
        "onSelect": [{ type: Output },],
        "onHover": [{ type: Output },],
        "onHoverWeek": [{ type: Output },],
    };
    return BsDaysCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsMonthCalendarViewComponent = /** @class */ (function () {
    function BsMonthCalendarViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    };
    /**
     * @param {?} month
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.viewMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.onSelect.emit(month);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.hoverMonth = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    BsMonthCalendarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-month-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                }] }
    ];
    /** @nocollapse */
    BsMonthCalendarViewComponent.propDecorators = {
        "calendar": [{ type: Input },],
        "onNavigate": [{ type: Output },],
        "onViewMode": [{ type: Output },],
        "onSelect": [{ type: Output },],
        "onHover": [{ type: Output },],
    };
    return BsMonthCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsTimepickerViewComponent = /** @class */ (function () {
    function BsTimepickerViewComponent() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
    BsTimepickerViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <button class=\"switch-time-format\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                }] }
    ];
    return BsTimepickerViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsYearsCalendarViewComponent = /** @class */ (function () {
    function BsYearsCalendarViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.viewYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.onSelect.emit(year);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.hoverYear = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    BsYearsCalendarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                }] }
    ];
    /** @nocollapse */
    BsYearsCalendarViewComponent.propDecorators = {
        "calendar": [{ type: Input },],
        "onNavigate": [{ type: Output },],
        "onViewMode": [{ type: Output },],
        "onSelect": [{ type: Output },],
        "onHover": [{ type: Output },],
    };
    return BsYearsCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _exports = [
    BsDatepickerContainerComponent,
    BsDaterangepickerContainerComponent,
    BsDatepickerInlineContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerInputDirective,
    BsDaterangepickerDirective,
    BsDatepickerInlineDirective
];
var BsDatepickerModule = /** @class */ (function () {
    function BsDatepickerModule() {
    }
    /**
     * @return {?}
     */
    BsDatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDaterangepickerConfig,
                BsDatepickerInlineConfig,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: __spread([
                        BsDatepickerDayDecoratorComponent,
                        BsCurrentDateViewComponent,
                        BsDatepickerNavigationViewComponent,
                        BsTimepickerViewComponent,
                        BsCalendarLayoutComponent,
                        BsDaysCalendarViewComponent,
                        BsMonthCalendarViewComponent,
                        BsYearsCalendarViewComponent,
                        BsCustomDatesViewComponent
                    ], _exports),
                    entryComponents: [
                        BsDatepickerContainerComponent,
                        BsDaterangepickerContainerComponent,
                        BsDatepickerInlineContainerComponent
                    ],
                    exports: _exports
                },] }
    ];
    return BsDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    DateFormatter.prototype.format = /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    function (date, format, locale) {
        return formatDate(date, format, locale);
    };
    return DateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DatePickerInnerComponent = /** @class */ (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new EventEmitter(undefined);
        this.update = new EventEmitter(false);
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/
        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // todo: use date for unique value
        this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    /**
     * @param {?} changes
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes["activeDate"]);
    };
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} activeDate
     * @return {?}
     */
    DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = /**
     * @param {?} activeDate
     * @return {?}
     */
    function (activeDate) {
        if (activeDate && !activeDate.firstChange) {
            var /** @type {?} */ previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setCompareHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compare = /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setRefreshViewHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.dateFilter = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} dateObject
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isActive = /**
     * @param {?} dateObject
     * @return {?}
     */
    function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.createDateObject = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    DatePickerInnerComponent.prototype.split = /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    function (arr, size) {
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.fixTimeZone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    DatePickerInnerComponent.prototype.select = /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.move = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            var /** @type {?} */ year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            var /** @type {?} */ month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    };
    /**
     * @param {?} _direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.toggleMode = /**
     * @param {?} _direction
     * @return {?}
     */
    function (_direction) {
        var /** @type {?} */ direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.getCustomClassForDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        var /** @type {?} */ customClassObject = this.customClass.find(function (customClass) {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    /**
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compareDateDisabled = /**
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isDisabled = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        var /** @type {?} */ isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach(function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DatePickerInnerComponent.propDecorators = {
        "locale": [{ type: Input },],
        "datepickerMode": [{ type: Input },],
        "startingDay": [{ type: Input },],
        "yearRange": [{ type: Input },],
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "minMode": [{ type: Input },],
        "maxMode": [{ type: Input },],
        "showWeeks": [{ type: Input },],
        "formatDay": [{ type: Input },],
        "formatMonth": [{ type: Input },],
        "formatYear": [{ type: Input },],
        "formatDayHeader": [{ type: Input },],
        "formatDayTitle": [{ type: Input },],
        "formatMonthTitle": [{ type: Input },],
        "onlyCurrentMonth": [{ type: Input },],
        "shortcutPropagation": [{ type: Input },],
        "customClass": [{ type: Input },],
        "monthColLimit": [{ type: Input },],
        "yearColLimit": [{ type: Input },],
        "dateDisabled": [{ type: Input },],
        "dayDisabled": [{ type: Input },],
        "initDate": [{ type: Input },],
        "selectionDone": [{ type: Output },],
        "update": [{ type: Output },],
        "activeDateChange": [{ type: Output },],
        "activeDate": [{ type: Input },],
    };
    return DatePickerInnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DatepickerConfig = /** @class */ (function () {
    function DatepickerConfig() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    DatepickerConfig.decorators = [
        { type: Injectable }
    ];
    return DatepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(config) {
        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */
        this.showWeeks = true;
        this.selectionDone = new EventEmitter(undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        get: /**
         * currently active date
         * @return {?}
         */
        function () {
            return this._activeDate || this._now;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.configureOptions = /**
     * @return {?}
     */
    function () {
        Object.assign(this, this.config);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onUpdate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onSelectionDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectionDone.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onActiveDateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnChange = /**
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
    DatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatepickerConfig, },
    ]; };
    DatePickerComponent.propDecorators = {
        "datepickerMode": [{ type: Input },],
        "initDate": [{ type: Input },],
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "minMode": [{ type: Input },],
        "maxMode": [{ type: Input },],
        "showWeeks": [{ type: Input },],
        "formatDay": [{ type: Input },],
        "formatMonth": [{ type: Input },],
        "formatYear": [{ type: Input },],
        "formatDayHeader": [{ type: Input },],
        "formatDayTitle": [{ type: Input },],
        "formatMonthTitle": [{ type: Input },],
        "startingDay": [{ type: Input },],
        "yearRange": [{ type: Input },],
        "onlyCurrentMonth": [{ type: Input },],
        "shortcutPropagation": [{ type: Input },],
        "monthColLimit": [{ type: Input },],
        "yearColLimit": [{ type: Input },],
        "customClass": [{ type: Input },],
        "dateDisabled": [{ type: Input },],
        "dayDisabled": [{ type: Input },],
        "activeDate": [{ type: Input },],
        "selectionDone": [{ type: Output },],
        "activeDateChange": [{ type: Output },],
        "_datePicker": [{ type: ViewChild, args: [DatePickerInnerComponent,] },],
    };
    return DatePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DayPickerComponent = /** @class */ (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    /**
     * @return {?}
     */
    DayPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var /** @type {?} */ year = this.activeDate.getFullYear();
            var /** @type {?} */ month = this.activeDate.getMonth();
            var /** @type {?} */ firstDayOfMonth = new Date(year, month, 1);
            var /** @type {?} */ difference = this.startingDay - firstDayOfMonth.getDay();
            var /** @type {?} */ numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            var /** @type {?} */ firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            var /** @type {?} */ _days = self.getDates(firstDate, 42);
            var /** @type {?} */ days = [];
            for (var /** @type {?} */ i = 0; i < 42; i++) {
                var /** @type {?} */ _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var /** @type {?} */ j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                var /** @type {?} */ thursdayIndex = (4 + 7 - this.startingDay) % 7;
                var /** @type {?} */ numWeeks = self.rows.length;
                for (var /** @type {?} */ curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            var /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    };
    /**
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    DayPickerComponent.prototype.getDates = /**
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    function (startDate, n) {
        var /** @type {?} */ dates = new Array(n);
        var /** @type {?} */ current = new Date(startDate.getTime());
        var /** @type {?} */ i = 0;
        var /** @type {?} */ date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DayPickerComponent.prototype.getISO8601WeekNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var /** @type {?} */ time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    };
    DayPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                }] }
    ];
    // todo: key events implementation
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent, },
    ]; };
    return DayPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MonthPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var /** @type {?} */ months = new Array(12);
            var /** @type {?} */ year = this.activeDate.getFullYear();
            var /** @type {?} */ date;
            for (var /** @type {?} */ i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth());
            var /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    };
    MonthPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                }] }
    ];
    // todo: key events implementation
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent, },
    ]; };
    return MonthPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var YearPickerComponent = /** @class */ (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    YearPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            var /** @type {?} */ years = new Array(this.yearRange);
            var /** @type {?} */ date;
            var /** @type {?} */ start = self.getStartingYear(this.activeDate.getFullYear());
            for (var /** @type {?} */ i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    YearPickerComponent.prototype.getStartingYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    };
    YearPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent, },
    ]; };
    return YearPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    /**
     * @return {?}
     */
    DatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    };
    DatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    exports: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    entryComponents: [DatePickerComponent]
                },] }
    ];
    return DatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BsDatepickerConfig, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, BsDatepickerAbstractComponent as ɵl, BsDatepickerInputDirective as ɵr, BsDaterangepickerInputDirective as ɵs, DatePickerInnerComponent as ɵt, DATEPICKER_CONTROL_VALUE_ACCESSOR as ɵa, BsDatepickerActions as ɵo, BsDatepickerEffects as ɵn, BsDatepickerStore as ɵm, BsCalendarLayoutComponent as ɵf, BsCurrentDateViewComponent as ɵc, BsCustomDatesViewComponent as ɵj, BsDatepickerContainerComponent as ɵk, BsDatepickerDayDecoratorComponent as ɵb, BsDatepickerInlineContainerComponent as ɵq, BsDatepickerNavigationViewComponent as ɵd, BsDaterangepickerContainerComponent as ɵp, BsDaysCalendarViewComponent as ɵg, BsMonthCalendarViewComponent as ɵh, BsTimepickerViewComponent as ɵe, BsYearsCalendarViewComponent as ɵi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kYXRlcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1sb2NhbGUuc2VydmljZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9fZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci91dGlscy9icy1jYWxlbmRhci11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3V0aWxzL21hdHJpeC11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9jYWxjLWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL3ZpZXctbW9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2ZsYWctbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLnJlZHVjZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcmFuZ2VwaWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWNhbGVuZGFyLWxheW91dC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtY3VycmVudC1kYXRlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLW1vbnRocy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLXllYXJzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5tb2R1bGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlLWZvcm1hdHRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RheXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9tb250aHBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci95ZWFycGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZVxufSBmcm9tICcuL21vZGVscyc7XG5cblxuLyoqXG4gKiBGb3IgZGF0ZSByYW5nZSBwaWNrZXIgdGhlcmUgYXJlIGBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZ2Agd2hpY2ggaW5oZXJpdHMgYWxsIHByb3BlcnRpZXMsXG4gKiBleGNlcHQgYGRpc3BsYXlNb250aHNgLCBmb3IgcmFuZ2UgcGlja2VyIGl0IGRlZmF1bHQgdG8gYDJgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb25maWcgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XG4gIHZhbHVlPzogRGF0ZSB8IERhdGVbXTtcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZhdWx0IG1pbiBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWF4IGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1heERhdGU/OiBEYXRlO1xuXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xuICAvKipcbiAgICogTWFrZXMgZGF0ZXMgZnJvbSBvdGhlciBtb250aHMgYWN0aXZlXG4gICAqL1xuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1ha2VzIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzIGFjdGl2ZVxuICAgKi9cbiAgc2VsZWN0V2Vlaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFkZCBjbGFzcyB0byBjdXJyZW50IGRheVxuICAgKi9cbiAgY3VzdG9tVG9kYXlDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogRGVmYXVsdCBtb2RlIGZvciBhbGwgZGF0ZSBwaWNrZXJzXG4gICAqL1xuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XG5cbiAgLyoqIENTUyBjbGFzcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gZGF0ZXBpY2tlciBjb250YWluZXIsXG4gICAqIHVzdWFsbHkgdXNlZCB0byBzZXQgY29sb3IgdGhlbWVcbiAgICovXG4gIGNvbnRhaW5lckNsYXNzID0gJ3RoZW1lLWdyZWVuJztcblxuICAvLyBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xuICBkaXNwbGF5TW9udGhzID0gMTtcbiAgLyoqXG4gICAqIEFsbG93cyB0byBoaWRlIHdlZWsgbnVtYmVycyBpbiBkYXRlcGlja2VyXG4gICAqL1xuICBzaG93V2Vla051bWJlcnMgPSB0cnVlO1xuXG4gIGRhdGVJbnB1dEZvcm1hdCA9ICdMJztcbiAgLy8gcmFuZ2UgcGlja2VyXG4gIHJhbmdlU2VwYXJhdG9yID0gJyAtICc7XG4gIC8qKlxuICAgKiBEYXRlIGZvcm1hdCBmb3IgZGF0ZSByYW5nZSBpbnB1dCBmaWVsZFxuICAgKi9cbiAgcmFuZ2VJbnB1dEZvcm1hdCA9ICdMJztcblxuICAvLyBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuICBtb250aFRpdGxlID0gJ01NTU0nO1xuICB5ZWFyVGl0bGUgPSAnWVlZWSc7XG4gIGRheUxhYmVsID0gJ0QnO1xuICBtb250aExhYmVsID0gJ01NTU0nO1xuICB5ZWFyTGFiZWwgPSAnWVlZWSc7XG4gIHdlZWtOdW1iZXJzID0gJ3cnO1xufVxuIiwiLy8gZGF0ZXBpY2tlciBjb250YWluZXIgY29tcG9uZW50XG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlcyB9IGZyb20gJy4uL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgV2Vla1ZpZXdNb2RlbCxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQge1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBpc090aGVyTW9udGhzQWN0aXZlOiBib29sZWFuO1xuXG4gIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzO1xuICBfY3VzdG9tUmFuZ2VzRmlzaDogQnNDdXN0b21EYXRlc1tdID0gW107XG5cbiAgc2V0IG1pbkRhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1pbkRhdGUodmFsdWUpO1xuICB9XG5cbiAgc2V0IG1heERhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1heERhdGUodmFsdWUpO1xuICB9XG4gIHNldCBkYXlzRGlzYWJsZWQodmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXlzRGlzYWJsZWQodmFsdWUpO1xuICB9XG4gIHNldCBkYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVzRGlzYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERpc2FibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHZpZXdNb2RlOiBPYnNlcnZhYmxlPEJzRGF0ZXBpY2tlclZpZXdNb2RlPjtcbiAgZGF5c0NhbGVuZGFyOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIHllYXJzQ2FsZW5kYXI6IE9ic2VydmFibGU8WWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgb3B0aW9uczogT2JzZXJ2YWJsZTxEYXRlcGlja2VyUmVuZGVyT3B0aW9ucz47XG5cbiAgc2V0Vmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7fVxuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCB7fVxuXG4gIGRheUhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgd2Vla0hvdmVySGFuZGxlcihldmVudDogV2Vla1ZpZXdNb2RlbCk6IHZvaWQge31cblxuICBtb250aEhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgeWVhckhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge31cblxuICBtb250aFNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cblxuICB5ZWFyU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIF9zdG9wUHJvcGFnYXRpb24oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNWaWV3TmF2aWdhdGlvbkV2ZW50LFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckFjdGlvbnMge1xuICBzdGF0aWMgcmVhZG9ubHkgQ0FMQ1VMQVRFID0gJ1tkYXRlcGlja2VyXSBjYWxjdWxhdGUgZGF0ZXMgbWF0cml4JztcbiAgc3RhdGljIHJlYWRvbmx5IEZPUk1BVCA9ICdbZGF0ZXBpY2tlcl0gZm9ybWF0IGRhdGVwaWNrZXIgdmFsdWVzJztcbiAgc3RhdGljIHJlYWRvbmx5IEZMQUcgPSAnW2RhdGVwaWNrZXJdIHNldCBmbGFncyc7XG4gIHN0YXRpYyByZWFkb25seSBTRUxFQ1QgPSAnW2RhdGVwaWNrZXJdIHNlbGVjdCBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX09GRlNFVCA9ICdbZGF0ZXBpY2tlcl0gc2hpZnQgdmlldyBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX1RPID0gJ1tkYXRlcGlja2VyXSBjaGFuZ2UgdmlldyBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9PUFRJT05TID0gJ1tkYXRlcGlja2VyXSB1cGRhdGUgcmVuZGVyIG9wdGlvbnMnO1xuICBzdGF0aWMgcmVhZG9ubHkgSE9WRVIgPSAnW2RhdGVwaWNrZXJdIGhvdmVyIGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1ZJRVdNT0RFID0gJ1tkYXRlcGlja2VyXSBzd2l0Y2ggdmlldyBtb2RlJztcblxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01JTl9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWluIGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01BWF9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWF4IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBWVNESVNBQkxFRCA9ICdbZGF0ZXBpY2tlcl0gc2V0IGRheXMgZGlzYWJsZWQnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBVEVTRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcyBkaXNhYmxlZCc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfSVNfRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBpcyBkaXNhYmxlZCc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9MT0NBTEUgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcGlja2VyIGxvY2FsZSc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVF9SQU5HRSA9ICdbZGF0ZXJhbmdlcGlja2VyXSBzZWxlY3QgZGF0ZXMgcmFuZ2UnO1xuXG4gIGNhbGN1bGF0ZSgpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFIH07XG4gIH1cblxuICBmb3JtYXQoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVCB9O1xuICB9XG5cbiAgZmxhZygpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRyB9O1xuICB9XG5cbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVCxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREUsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgbmF2aWdhdGVTdGVwKHN0ZXA6IFRpbWVVbml0KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9PRkZTRVQsXG4gICAgICBwYXlsb2FkOiBzdGVwXG4gICAgfTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TLFxuICAgICAgcGF5bG9hZDogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0UsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBob3ZlckRheShldmVudDogQ2VsbEhvdmVyRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSLFxuICAgICAgcGF5bG9hZDogZXZlbnQuaXNIb3ZlcmVkID8gZXZlbnQuY2VsbC5kYXRlIDogbnVsbFxuICAgIH07XG4gIH1cblxuICBtaW5EYXRlKGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURSxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgbWF4RGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEUsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIGRheXNEaXNhYmxlZChkYXlzOiBudW1iZXJbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBWVNESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRheXNcbiAgICB9O1xuICB9XG5cbiAgZGF0ZXNEaXNhYmxlZChkYXRlczogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfREFURVNESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRhdGVzXG4gICAgfTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9JU19ESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0xPQ0FMRSxcbiAgICAgIHBheWxvYWQ6IGxvY2FsZVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNMb2NhbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGVmYXVsdExvY2FsZSA9ICdlbic7XG4gIHByaXZhdGUgX2xvY2FsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aGlzLl9kZWZhdWx0TG9jYWxlKTtcbiAgcHJpdmF0ZSBfbG9jYWxlQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9sb2NhbGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZ2V0IGxvY2FsZSgpOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlLmdldFZhbHVlKCk7XG4gIH1cblxuICB1c2UobG9jYWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobG9jYWxlID09PSB0aGlzLmN1cnJlbnRMb2NhbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGUubmV4dChsb2NhbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gIHZpZXdNb2RlOiBPYnNlcnZhYmxlPEJzRGF0ZXBpY2tlclZpZXdNb2RlPjtcbiAgZGF5c0NhbGVuZGFyOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIHllYXJzQ2FsZW5kYXI6IE9ic2VydmFibGU8WWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgb3B0aW9uczogT2JzZXJ2YWJsZTxEYXRlcGlja2VyUmVuZGVyT3B0aW9ucz47XG5cbiAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlO1xuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSkge31cblxuICBpbml0KF9ic0RhdGVwaWNrZXJTdG9yZTogQnNEYXRlcGlja2VyU3RvcmUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZSA9IF9ic0RhdGVwaWNrZXJTdG9yZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIHNldHRlcnMgKi9cblxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0KHZhbHVlKSk7XG4gIH1cblxuICBzZXRSYW5nZVZhbHVlKHZhbHVlOiBEYXRlW10pOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHZhbHVlKSk7XG4gIH1cblxuICBzZXRNaW5EYXRlKHZhbHVlOiBEYXRlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5taW5EYXRlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE1heERhdGUodmFsdWU6IERhdGUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm1heERhdGUodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0RGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF5c0Rpc2FibGVkKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERhdGVzRGlzYWJsZWQodmFsdWU6IERhdGVbXSkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF0ZXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiBTZXQgcmVuZGVyaW5nIG9wdGlvbnMgKi9cbiAgc2V0T3B0aW9ucyhfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb25zdCBfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe2xvY2FsZTogdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlfSwgX2NvbmZpZyk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRPcHRpb25zKF9vcHRpb25zKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiB2aWV3IHRvIG1vZGUgYmluZGluZ3MgKi9cbiAgc2V0QmluZGluZ3MoY29udGFpbmVyOiBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIGNvbnRhaW5lci5kYXlzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihtb250aHMgPT4gISFtb250aHMpXG4gICAgICApO1xuXG4gICAgLy8gbW9udGggY2FsZW5kYXJcbiAgICBjb250YWluZXIubW9udGhzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzQ2FsZW5kYXIpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKG1vbnRocyA9PiAhIW1vbnRocylcbiAgICAgICk7XG5cbiAgICAvLyB5ZWFyIGNhbGVuZGFyXG4gICAgY29udGFpbmVyLnllYXJzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS55ZWFyc0NhbGVuZGFyRmxhZ2dlZClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoeWVhcnMgPT4gISF5ZWFycylcbiAgICAgICk7XG5cbiAgICBjb250YWluZXIudmlld01vZGUgPSB0aGlzLl9zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmlldy5tb2RlKTtcblxuICAgIGNvbnRhaW5lci5vcHRpb25zID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2hvd1dlZWtOdW1iZXJzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChzaG93V2Vla051bWJlcnMgPT4gKHtzaG93V2Vla051bWJlcnN9KSlcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBldmVudCBoYW5kbGVycyAqL1xuICBzZXRFdmVudEhhbmRsZXJzKGNvbnRhaW5lcjogQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb250YWluZXIuc2V0Vmlld01vZGUgPSAoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmNoYW5nZVZpZXdNb2RlKGV2ZW50KSk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5uYXZpZ2F0ZVRvID0gKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVN0ZXAoZXZlbnQuc3RlcCkpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIuZGF5SG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgX2NlbGwgPSBldmVudC5jZWxsIGFzIERheVZpZXdNb2RlbDtcbiAgICAgIGlmIChfY2VsbC5pc090aGVyTW9udGggfHwgX2NlbGwuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaG92ZXJEYXkoZXZlbnQpKTtcbiAgICAgIF9jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLm1vbnRoSG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci55ZWFySG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5tb250aFNlbGVjdEhhbmRsZXIgPSAoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmlzRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgbW9udGg6IGdldE1vbnRoKGV2ZW50LmRhdGUpLFxuICAgICAgICAgICAgeWVhcjogZ2V0RnVsbFllYXIoZXZlbnQuZGF0ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpZXdNb2RlOiAnZGF5J1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnllYXJTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgIHllYXI6IGdldEZ1bGxZZWFyKGV2ZW50LmRhdGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aWV3TW9kZTogJ21vbnRoJ1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWdpc3RlckRhdGVwaWNrZXJTaWRlRWZmZWN0cygpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmlldykuc3Vic2NyaWJlKHZpZXcgPT4ge1xuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmNhbGN1bGF0ZSgpKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGZvcm1hdCBjYWxlbmRhciB2YWx1ZXMgb24gbW9udGggbW9kZWwgY2hhbmdlXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5tb250aHNNb2RlbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKG1vbnRoTW9kZWwgPT4gISFtb250aE1vZGVsKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobW9udGggPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mb3JtYXQoKSkpXG4gICAgKTtcblxuICAgIC8vIGZsYWcgZGF5IHZhbHVlc1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZm9ybWF0dGVkTW9udGhzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIobW9udGggPT4gISFtb250aClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKG1vbnRoID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gZmxhZyBkYXkgdmFsdWVzXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3RlZERhdGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihzZWxlY3RlZERhdGUgPT4gISFzZWxlY3RlZERhdGUpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZERhdGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBmbGFnIGZvciBkYXRlIHJhbmdlIHBpY2tlclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWRSYW5nZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHNlbGVjdGVkUmFuZ2UgPT4gISFzZWxlY3RlZFJhbmdlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWRSYW5nZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIG1vbnRoc0NhbGVuZGFyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5tb250aHNDYWxlbmRhcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIHllYXJzIGNhbGVuZGFyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS55ZWFyc0NhbGVuZGFyTW9kZWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihzdGF0ZSA9PiAhIXN0YXRlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBvbiBob3ZlclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuaG92ZXJlZERhdGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihob3ZlcmVkRGF0ZSA9PiAhIWhvdmVyZWREYXRlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoaG92ZXJlZERhdGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2VcbiAgICAgICAgLnN1YnNjcmliZShsb2NhbGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRMb2NhbGUobG9jYWxlKSkpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIE1vbnRoVmlld09wdGlvbnNcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNb250aE9wdGlvbnM6IE1vbnRoVmlld09wdGlvbnMgPSB7XG4gIHdpZHRoOiA3LFxuICBoZWlnaHQ6IDZcbn07XG4iLCJpbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJNb2RlbCxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgTW9udGhWaWV3T3B0aW9ucyxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vbnRoT3B0aW9ucyB9IGZyb20gJy4vX2RlZmF1bHRzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBCc0RhdGVwaWNrZXJWaWV3U3RhdGUge1xuICBkYXRlOiBEYXRlO1xuICBtb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcbn1cblxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlclN0YXRlXG4gIGltcGxlbWVudHMgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcbiAgLy8gZGF0ZSBwaWNrZXJcbiAgc2VsZWN0ZWREYXRlPzogRGF0ZTtcbiAgLy8gZGF0ZXJhbmdlIHBpY2tlclxuICBzZWxlY3RlZFJhbmdlPzogRGF0ZVtdO1xuXG4gIC8vIGluaXRpYWwgZGF0ZSBvZiBjYWxlbmRhciwgdG9kYXkgYnkgZGVmYXVsdFxuICB2aWV3OiBCc0RhdGVwaWNrZXJWaWV3U3RhdGU7XG5cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIC8vIGJvdW5kc1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgbWF4RGF0ZT86IERhdGU7XG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XG5cbiAgaG92ZXJlZERhdGU/OiBEYXRlO1xuICBob3ZlcmVkTW9udGg/OiBEYXRlO1xuICBob3ZlcmVkWWVhcj86IERhdGU7XG5cbiAgLy8gZGF5cyBjYWxlbmRhclxuICBtb250aHNNb2RlbD86IERheXNDYWxlbmRhck1vZGVsW107XG4gIGZvcm1hdHRlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBmbGFnZ2VkTW9udGhzPzogRGF5c0NhbGVuZGFyVmlld01vZGVsW107XG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcblxuICAvLyBtb250aHMgY2FsZW5kYXJcbiAgbW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBmbGFnZ2VkTW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuXG4gIC8vIHllYXJzIGNhbGVuZGFyXG4gIHllYXJzQ2FsZW5kYXJNb2RlbD86IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgeWVhcnNDYWxlbmRhckZsYWdnZWQ/OiBZZWFyc0NhbGVuZGFyVmlld01vZGVsW107XG5cbiAgLy8gb3B0aW9uc1xuICBtb250aFZpZXdPcHRpb25zOiBNb250aFZpZXdPcHRpb25zO1xuXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIHNob3dXZWVrTnVtYmVycz86IGJvb2xlYW47XG4gIGRpc3BsYXlNb250aHM/OiBudW1iZXI7XG5cbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgbW9udGhUaXRsZTogc3RyaW5nO1xuICB5ZWFyVGl0bGU6IHN0cmluZztcblxuICBkYXlMYWJlbDogc3RyaW5nO1xuICBtb250aExhYmVsOiBzdHJpbmc7XG4gIHllYXJMYWJlbDogc3RyaW5nO1xuXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XG59XG5cbmNvbnN0IF9pbml0aWFsVmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlID0geyBkYXRlOiBuZXcgRGF0ZSgpLCBtb2RlOiAnZGF5JyB9O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICBuZXcgQnNEYXRlcGlja2VyQ29uZmlnKCksXG4gIHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgdmlldzogX2luaXRpYWxWaWV3LFxuICAgIHNlbGVjdGVkUmFuZ2U6IFtdLFxuICAgIG1vbnRoVmlld09wdGlvbnM6IGRlZmF1bHRNb250aE9wdGlvbnNcbiAgfVxuKTtcbiIsImltcG9ydCB7XG4gIGdldERheSxcbiAgaXNGaXJzdERheU9mV2VlayxcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIHNoaWZ0RGF0ZSxcbiAgZW5kT2YsXG4gIHN0YXJ0T2YsXG4gIGlzU2FtZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyKGRhdGU6IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgZmlyc3REYXlPZldlZWs/OiBudW1iZXIgfSk6IERhdGUge1xuICBpZiAoaXNGaXJzdERheU9mV2VlayhkYXRlLCBvcHRpb25zLmZpcnN0RGF5T2ZXZWVrKSkge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgY29uc3Qgd2Vla0RheSA9IGdldERheShkYXRlKTtcbiAgY29uc3Qgb2Zmc2V0ID0gY2FsY3VsYXRlRGF0ZU9mZnNldCh3ZWVrRGF5LCBvcHRpb25zLmZpcnN0RGF5T2ZXZWVrKTtcblxuICByZXR1cm4gc2hpZnREYXRlKGRhdGUsIHtkYXk6IC1vZmZzZXR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla2RheTogbnVtYmVyLCBzdGFydGluZ0RheU9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHN0YXJ0aW5nRGF5T2Zmc2V0ID09PSAwKSB7XG4gICAgcmV0dXJuIHdlZWtkYXk7XG4gIH1cblxuICBjb25zdCBvZmZzZXQgPSB3ZWVrZGF5IC0gc3RhcnRpbmdEYXlPZmZzZXQgJSA3O1xuXG4gIHJldHVybiBvZmZzZXQgPCAwID8gb2Zmc2V0ICsgNyA6IG9mZnNldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9udGhEaXNhYmxlZChkYXRlOiBEYXRlLCBtaW46IERhdGUsIG1heDogRGF0ZSk6IGJvb2xlYW4ge1xuICBjb25zdCBtaW5Cb3VuZCA9IG1pbiAmJiBpc0JlZm9yZShlbmRPZihkYXRlLCAnbW9udGgnKSwgbWluLCAnZGF5Jyk7XG4gIGNvbnN0IG1heEJvdW5kID0gbWF4ICYmIGlzQWZ0ZXIoc3RhcnRPZihkYXRlLCAnbW9udGgnKSwgbWF4LCAnZGF5Jyk7XG5cbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ3llYXInKSwgbWluLCAnZGF5Jyk7XG4gIGNvbnN0IG1heEJvdW5kID0gbWF4ICYmIGlzQWZ0ZXIoc3RhcnRPZihkYXRlLCAneWVhcicpLCBtYXgsICdkYXknKTtcblxuICByZXR1cm4gbWluQm91bmQgfHwgbWF4Qm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Rpc2FibGVkRGF0ZShkYXRlOiBEYXRlLCBkYXRlc0Rpc2FibGVkOiBEYXRlW10pOiBib29sZWFuIHtcbiAgaWYgKGRhdGVzRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCAhZGF0ZXNEaXNhYmxlZCB8fCAhZGF0ZXNEaXNhYmxlZC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZXNEaXNhYmxlZC5zb21lKChkYXRlRGlzYWJsZWQ6IERhdGUpID0+IGlzU2FtZShkYXRlLCBkYXRlRGlzYWJsZWQsICdkYXRlJykpO1xufVxuIiwiaW1wb3J0IHsgVGltZVVuaXQsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZU1hdHJpeENiPFQ+ID0gKGRhdGU6IERhdGUpID0+IFQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0cml4T3B0aW9ucyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBpbml0aWFsRGF0ZTogRGF0ZTtcbiAgc2hpZnQ6IFRpbWVVbml0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWF0cml4PFQ+KFxuICBvcHRpb25zOiBNYXRyaXhPcHRpb25zLFxuICBmbjogQ3JlYXRlTWF0cml4Q2I8VD5cbik6IFRbXVtdIHtcbiAgbGV0IHByZXZWYWx1ZSA9IG9wdGlvbnMuaW5pdGlhbERhdGU7XG4gIGNvbnN0IG1hdHJpeDogVFtdW10gPSBuZXcgQXJyYXkob3B0aW9ucy5oZWlnaHQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuaGVpZ2h0OyBpKyspIHtcbiAgICBtYXRyaXhbaV0gPSBuZXcgQXJyYXkob3B0aW9ucy53aWR0aCk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zLndpZHRoOyBqKyspIHtcbiAgICAgIG1hdHJpeFtpXVtqXSA9IGZuKHByZXZWYWx1ZSk7XG4gICAgICBwcmV2VmFsdWUgPSBzaGlmdERhdGUocHJldlZhbHVlLCBvcHRpb25zLnNoaWZ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0cml4O1xufVxuIiwiLy8gdXNlciBhbmQgbW9kZWwgaW5wdXQgc2hvdWxkIGhhbmRsZSBwYXJzaW5nIGFuZCB2YWxpZGF0aW5nIGlucHV0IHZhbHVlc1xuLy8gc2hvdWxkIGFjY2VwdCBzb21lIG9wdGlvbnNcbi8vIHRvZG86IHNwbGl0IG91dCBmb3JtYXR0aW5nXG5pbXBvcnQgeyBEYXlzQ2FsZW5kYXJNb2RlbCwgTW9udGhWaWV3T3B0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBnZXRGaXJzdERheU9mTW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEYXlzQ2FsZW5kYXIoXG4gIHN0YXJ0aW5nRGF0ZTogRGF0ZSxcbiAgb3B0aW9uczogTW9udGhWaWV3T3B0aW9uc1xuKTogRGF5c0NhbGVuZGFyTW9kZWwge1xuICBjb25zdCBmaXJzdERheSA9IGdldEZpcnN0RGF5T2ZNb250aChzdGFydGluZ0RhdGUpO1xuICBjb25zdCBpbml0aWFsRGF0ZSA9IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihmaXJzdERheSwgb3B0aW9ucyk7XG5cbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHtcbiAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcbiAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxuICAgIGluaXRpYWxEYXRlLFxuICAgIHNoaWZ0OiB7IGRheTogMSB9XG4gIH07XG4gIGNvbnN0IGRheXNNYXRyaXggPSBjcmVhdGVNYXRyaXg8RGF0ZT4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiBkYXRlKTtcblxuICByZXR1cm4ge1xuICAgIGRheXNNYXRyaXgsXG4gICAgbW9udGg6IGZpcnN0RGF5XG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0TG9jYWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERheXNDYWxlbmRhcihkYXlzQ2FsZW5kYXI6IERheXNDYWxlbmRhck1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhJbmRleDogbnVtYmVyKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgIG1vbnRoVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICBkYXlzQ2FsZW5kYXIubW9udGgsXG4gICAgICBmb3JtYXRPcHRpb25zLm1vbnRoVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgd2Vla051bWJlcnM6IGdldFdlZWtOdW1iZXJzKFxuICAgICAgZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgsXG4gICAgICBmb3JtYXRPcHRpb25zLndlZWtOdW1iZXJzLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHdlZWtkYXlzOiBnZXRTaGlmdGVkV2Vla2RheXMoZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgIHdlZWtzOiBkYXlzQ2FsZW5kYXIuZGF5c01hdHJpeC5tYXAoKHdlZWs6IERhdGVbXSwgd2Vla0luZGV4OiBudW1iZXIpID0+ICh7XG4gICAgICBkYXlzOiB3ZWVrLm1hcCgoZGF0ZTogRGF0ZSwgZGF5SW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5kYXlMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgICAgICBtb250aEluZGV4LFxuICAgICAgICB3ZWVrSW5kZXgsXG4gICAgICAgIGRheUluZGV4XG4gICAgICB9KSlcbiAgICB9KSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtOdW1iZXJzKGRheXNNYXRyaXg6IERhdGVbXVtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gZGF5c01hdHJpeC5tYXAoXG4gICAgKGRheXM6IERhdGVbXSkgPT4gKGRheXNbMF0gPyBmb3JtYXREYXRlKGRheXNbMF0sIGZvcm1hdCwgbG9jYWxlKSA6ICcnKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hpZnRlZFdlZWtkYXlzKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSk7XG4gIGNvbnN0IHdlZWtkYXlzID0gX2xvY2FsZS53ZWVrZGF5c1Nob3J0KCkgYXMgc3RyaW5nW107XG4gIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gX2xvY2FsZS5maXJzdERheU9mV2VlaygpO1xuXG4gIHJldHVybiBbLi4ud2Vla2RheXMuc2xpY2UoZmlyc3REYXlPZldlZWspLCAuLi53ZWVrZGF5cy5zbGljZSgwLCBmaXJzdERheU9mV2VlayldO1xufVxuIiwiaW1wb3J0IHtcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIFdlZWtWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuaW1wb3J0IHtcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIGlzRGlzYWJsZWREYXksXG4gIGlzU2FtZURheSxcbiAgaXNTYW1lTW9udGgsXG4gIHNoaWZ0RGF0ZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzRGlzYWJsZWREYXRlIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgZGF5c0Rpc2FibGVkOiBudW1iZXJbXTtcbiAgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xuICBob3ZlcmVkRGF0ZTogRGF0ZTtcbiAgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBzZWxlY3RlZFJhbmdlOiBEYXRlW107XG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcbiAgbW9udGhJbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhZ0RheXNDYWxlbmRhcihcbiAgZm9ybWF0dGVkTW9udGg6IERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgb3B0aW9uczogRmxhZ0RheXNDYWxlbmRhck9wdGlvbnNcbik6IERheXNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGZvcm1hdHRlZE1vbnRoLndlZWtzLmZvckVhY2goKHdlZWs6IFdlZWtWaWV3TW9kZWwpID0+IHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuICAgIHdlZWsuZGF5cy5mb3JFYWNoKChkYXk6IERheVZpZXdNb2RlbCwgZGF5SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gZGF0ZXBpY2tlclxuICAgICAgY29uc3QgaXNPdGhlck1vbnRoID0gIWlzU2FtZU1vbnRoKGRheS5kYXRlLCBmb3JtYXR0ZWRNb250aC5tb250aCk7XG5cbiAgICAgIGNvbnN0IGlzSG92ZXJlZCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcbiAgICAgIC8vIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAgICBjb25zdCBpc1NlbGVjdGlvblN0YXJ0ID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMF0pO1xuICAgICAgY29uc3QgaXNTZWxlY3Rpb25FbmQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSAmJlxuICAgICAgICBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZVsxXSk7XG5cbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgICAoIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWREYXRlKSkgfHxcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCB8fFxuICAgICAgICBpc1NlbGVjdGlvbkVuZDtcblxuICAgICAgY29uc3QgaXNJblJhbmdlID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNEYXRlSW5SYW5nZShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcblxuICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICBpc0JlZm9yZShkYXkuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCAnZGF5JykgfHxcbiAgICAgICAgaXNBZnRlcihkYXkuZGF0ZSwgb3B0aW9ucy5tYXhEYXRlLCAnZGF5JykgfHxcbiAgICAgICAgaXNEaXNhYmxlZERheShkYXkuZGF0ZSwgb3B0aW9ucy5kYXlzRGlzYWJsZWQpIHx8XG4gICAgICAgIGlzRGlzYWJsZWREYXRlKGRheS5kYXRlLCBvcHRpb25zLmRhdGVzRGlzYWJsZWQpO1xuXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBpc1RvZGF5ID0gIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIGN1cnJlbnREYXRlKTtcblxuICAgICAgLy8gZGVjaWRlIHVwZGF0ZSBvciBub3RcbiAgICAgIGNvbnN0IG5ld0RheSA9IE9iamVjdC5hc3NpZ24oe30sIGRheSwge1xuICAgICAgICBpc090aGVyTW9udGgsXG4gICAgICAgIGlzSG92ZXJlZCxcbiAgICAgICAgaXNTZWxlY3RlZCxcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCxcbiAgICAgICAgaXNTZWxlY3Rpb25FbmQsXG4gICAgICAgIGlzSW5SYW5nZSxcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgaXNUb2RheVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZGF5LmlzT3RoZXJNb250aCAhPT0gbmV3RGF5LmlzT3RoZXJNb250aCB8fFxuICAgICAgICBkYXkuaXNIb3ZlcmVkICE9PSBuZXdEYXkuaXNIb3ZlcmVkIHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGVkICE9PSBuZXdEYXkuaXNTZWxlY3RlZCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3Rpb25TdGFydCAhPT0gbmV3RGF5LmlzU2VsZWN0aW9uU3RhcnQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0aW9uRW5kICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25FbmQgfHxcbiAgICAgICAgZGF5LmlzRGlzYWJsZWQgIT09IG5ld0RheS5pc0Rpc2FibGVkIHx8XG4gICAgICAgIGRheS5pc0luUmFuZ2UgIT09IG5ld0RheS5pc0luUmFuZ2VcbiAgICAgICkge1xuICAgICAgICB3ZWVrLmRheXNbZGF5SW5kZXhdID0gbmV3RGF5O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgZm9ybWF0dGVkTW9udGguaGlkZUxlZnRBcnJvdyA9XG4gICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA+IDAgJiYgb3B0aW9ucy5tb250aEluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHMpO1xuICBmb3JtYXR0ZWRNb250aC5oaWRlUmlnaHRBcnJvdyA9XG4gICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxuICAgICAgb3B0aW9ucy5tb250aEluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcblxuICBmb3JtYXR0ZWRNb250aC5kaXNhYmxlTGVmdEFycm93ID0gaXNNb250aERpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZShmb3JtYXR0ZWRNb250aC5tb250aCwgeyBtb250aDogLTEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuICBmb3JtYXR0ZWRNb250aC5kaXNhYmxlUmlnaHRBcnJvdyA9IGlzTW9udGhEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoZm9ybWF0dGVkTW9udGgubW9udGgsIHsgbW9udGg6IDEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiBmb3JtYXR0ZWRNb250aDtcbn1cblxuZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShcbiAgZGF0ZTogRGF0ZSxcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdLFxuICBob3ZlcmVkRGF0ZTogRGF0ZVxuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZSB8fCAhc2VsZWN0ZWRSYW5nZVswXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZFJhbmdlWzFdKSB7XG4gICAgcmV0dXJuIGRhdGUgPiBzZWxlY3RlZFJhbmdlWzBdICYmIGRhdGUgPD0gc2VsZWN0ZWRSYW5nZVsxXTtcbiAgfVxuXG4gIGlmIChob3ZlcmVkRGF0ZSkge1xuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IGhvdmVyZWREYXRlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuU3dpdGNoTW9kZShtb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSwgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiBtaW5Nb2RlID8gbW9kZSA+PSBtaW5Nb2RlIDogdHJ1ZTtcbn1cbiIsImltcG9ydCB7XG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBzdGFydE9mLCBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XG5cbmNvbnN0IGhlaWdodCA9IDQ7XG5jb25zdCB3aWR0aCA9IDM7XG5jb25zdCBzaGlmdCA9IHsgbW9udGg6IDEgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxuICB2aWV3RGF0ZTogRGF0ZSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbik6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzdGFydE9mKHZpZXdEYXRlLCAneWVhcicpO1xuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcbiAgY29uc3QgbW9udGhNYXRyaXggPSBjcmVhdGVNYXRyaXg8XG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xuICAgIGRhdGUsXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5tb250aExhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgbW9udGhzOiBtb250aE1hdHJpeCxcbiAgICBtb250aFRpdGxlOiAnJyxcbiAgICB5ZWFyVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICB2aWV3RGF0ZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApXG4gIH07XG59XG4iLCJpbXBvcnQgeyBpc1NhbWVNb250aCwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7XG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGlzTW9udGhEaXNhYmxlZCwgaXNZZWFyRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ01vbnRoQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgaG92ZXJlZE1vbnRoOiBEYXRlO1xuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XG4gIG1vbnRoSW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdNb250aHNDYWxlbmRhcihcbiAgbW9udGhDYWxlbmRhcjogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIG9wdGlvbnM6IEZsYWdNb250aENhbGVuZGFyT3B0aW9uc1xuKTogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBtb250aENhbGVuZGFyLm1vbnRocy5mb3JFYWNoKFxuICAgIChtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdLCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBtb250aHMuZm9yRWFjaCgobW9udGg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgbW9udGhJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IGlzU2FtZU1vbnRoKG1vbnRoLmRhdGUsIG9wdGlvbnMuaG92ZXJlZE1vbnRoKTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgICAgICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgICAgICAgaXNNb250aERpc2FibGVkKG1vbnRoLmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlKTtcbiAgICAgICAgY29uc3QgbmV3TW9udGggPSBPYmplY3QuYXNzaWduKC8qe30sKi8gbW9udGgsIHtcbiAgICAgICAgICBpc0hvdmVyZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vbnRoLmlzSG92ZXJlZCAhPT0gbmV3TW9udGguaXNIb3ZlcmVkIHx8XG4gICAgICAgICAgbW9udGguaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxuICAgICAgICApIHtcbiAgICAgICAgICBtb250aENhbGVuZGFyLm1vbnRoc1tyb3dJbmRleF1bbW9udGhJbmRleF0gPSBuZXdNb250aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICApO1xuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgbGlua2VkIGNhbGVuZGFyc1xuICBtb250aENhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPVxuICAgIG9wdGlvbnMubW9udGhJbmRleCA+IDAgJiYgb3B0aW9ucy5tb250aEluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG4gIG1vbnRoQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxuICAgIG9wdGlvbnMubW9udGhJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcblxuICBtb250aENhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUobW9udGhDYWxlbmRhci5tb250aHNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIG1vbnRoQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUobW9udGhDYWxlbmRhci5tb250aHNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAxIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcblxuICByZXR1cm4gbW9udGhDYWxlbmRhcjtcbn1cbiIsImltcG9ydCB7XG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IHNoaWZ0RGF0ZSwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xuXG5jb25zdCBoZWlnaHQgPSA0O1xuY29uc3Qgd2lkdGggPSA0O1xuZXhwb3J0IGNvbnN0IHllYXJzUGVyQ2FsZW5kYXIgPSBoZWlnaHQgKiB3aWR0aDtcbmNvbnN0IGluaXRpYWxTaGlmdCA9IChNYXRoLmZsb29yKHllYXJzUGVyQ2FsZW5kYXIgLyAyKSAtIDEpICogLTE7XG5jb25zdCBzaGlmdCA9IHsgeWVhcjogMSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNDYWxlbmRhcihcbiAgdmlld0RhdGU6IERhdGUsXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogaW5pdGlhbFNoaWZ0IH0pO1xuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcbiAgY29uc3QgeWVhcnNNYXRyaXggPSBjcmVhdGVNYXRyaXg8XG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xuICAgIGRhdGUsXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy55ZWFyTGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKVxuICB9KSk7XG4gIGNvbnN0IHllYXJUaXRsZSA9IGZvcm1hdFllYXJSYW5nZVRpdGxlKHllYXJzTWF0cml4LCBmb3JtYXRPcHRpb25zKTtcblxuICByZXR1cm4ge1xuICAgIHllYXJzOiB5ZWFyc01hdHJpeCxcbiAgICBtb250aFRpdGxlOiAnJyxcbiAgICB5ZWFyVGl0bGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0WWVhclJhbmdlVGl0bGUoXG4gIHllYXJzTWF0cml4OiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXVtdLFxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgY29uc3QgZnJvbSA9IGZvcm1hdERhdGUoXG4gICAgeWVhcnNNYXRyaXhbMF1bMF0uZGF0ZSxcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICApO1xuICBjb25zdCB0byA9IGZvcm1hdERhdGUoXG4gICAgeWVhcnNNYXRyaXhbaGVpZ2h0IC0gMV1bd2lkdGggLSAxXS5kYXRlLFxuICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICk7XG5cbiAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xufVxuIiwiaW1wb3J0IHsgaXNTYW1lWWVhciwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBpc1llYXJEaXNhYmxlZCB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnMge1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBtaW5EYXRlOiBEYXRlO1xuICBtYXhEYXRlOiBEYXRlO1xuICBob3ZlcmVkWWVhcjogRGF0ZTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICB5ZWFySW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdZZWFyc0NhbGVuZGFyKFxuICB5ZWFyc0NhbGVuZGFyOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnNcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICB5ZWFyc0NhbGVuZGFyLnllYXJzLmZvckVhY2goXG4gICAgKHllYXJzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgeWVhcnMuZm9yRWFjaCgoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCB5ZWFySW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVZZWFyKHllYXIuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkWWVhcik7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICAgIGlzWWVhckRpc2FibGVkKHllYXIuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUpO1xuXG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIHllYXIsIHsgaXNIb3ZlcmVkLCBpc0Rpc2FibGVkIH0pO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeWVhci5pc0hvdmVyZWQgIT09IG5ld01vbnRoLmlzSG92ZXJlZCB8fFxuICAgICAgICAgIHllYXIuaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxuICAgICAgICApIHtcbiAgICAgICAgICB5ZWFyc0NhbGVuZGFyLnllYXJzW3Jvd0luZGV4XVt5ZWFySW5kZXhdID0gbmV3TW9udGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgeWVhcnNDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cbiAgICBvcHRpb25zLnllYXJJbmRleCA+IDAgJiYgb3B0aW9ucy55ZWFySW5kZXggIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcbiAgeWVhcnNDYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA9XG4gICAgb3B0aW9ucy55ZWFySW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICBvcHRpb25zLnllYXJJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcblxuICB5ZWFyc0NhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1swXVswXS5kYXRlLCB7IHllYXI6IC0xIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcbiAgY29uc3QgaSA9IHllYXJzQ2FsZW5kYXIueWVhcnMubGVuZ3RoIC0gMTtcbiAgY29uc3QgaiA9IHllYXJzQ2FsZW5kYXIueWVhcnNbaV0ubGVuZ3RoIC0gMTtcbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvdyA9IGlzWWVhckRpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZSh5ZWFyc0NhbGVuZGFyLnllYXJzW2ldW2pdLmRhdGUsIHsgeWVhcjogMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIHllYXJzQ2FsZW5kYXI7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdGF0ZSwgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgY2FsY0RheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9jYWxjLWRheXMtY2FsZW5kYXInO1xuaW1wb3J0IHsgZm9ybWF0RGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZsYWdEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7XG4gIHNldEZ1bGxEYXRlLFxuICBzaGlmdERhdGUsXG4gIGlzQXJyYXksXG4gIGlzRGF0ZVZhbGlkLFxuICBzdGFydE9mLFxuICBnZXRMb2NhbGUsXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjYW5Td2l0Y2hNb2RlIH0gZnJvbSAnLi4vZW5naW5lL3ZpZXctbW9kZSc7XG5pbXBvcnQgeyBmb3JtYXRNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZsYWdNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLW1vbnRocy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmb3JtYXRZZWFyc0NhbGVuZGFyLCB5ZWFyc1BlckNhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmbGFnWWVhcnNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyJztcbmltcG9ydCB7IEJzVmlld05hdmlnYXRpb25FdmVudCwgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsIEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJzRGF0ZXBpY2tlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsRGF0ZXBpY2tlclN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFOiB7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUmVkdWNlcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVDoge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZMQUc6IHtcbiAgICAgIHJldHVybiBmbGFnUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VUOiB7XG4gICAgICBjb25zdCBkYXRlID0gc2hpZnREYXRlKHN0YXJ0T2Yoc3RhdGUudmlldy5kYXRlLCAnbW9udGgnKSwgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICBtb2RlOiBzdGF0ZS52aWV3Lm1vZGUsXG4gICAgICAgICAgZGF0ZVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfVE86IHtcbiAgICAgIGNvbnN0IHBheWxvYWQ6IEJzVmlld05hdmlnYXRpb25FdmVudCA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBjb25zdCBkYXRlID0gc2V0RnVsbERhdGUoc3RhdGUudmlldy5kYXRlLCBwYXlsb2FkLnVuaXQpO1xuICAgICAgbGV0IG5ld1N0YXRlO1xuICAgICAgbGV0IG1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xuICAgICAgaWYgKGNhblN3aXRjaE1vZGUocGF5bG9hZC52aWV3TW9kZSwgc3RhdGUubWluTW9kZSkpIHtcbiAgICAgICAgbW9kZSA9IHBheWxvYWQudmlld01vZGU7XG4gICAgICAgIG5ld1N0YXRlID0geyB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgICAgbmV3U3RhdGUgPSB7IHNlbGVjdGVkRGF0ZTogZGF0ZSwgdmlldzogeyBkYXRlLCBtb2RlIH0gfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkNIQU5HRV9WSUVXTU9ERToge1xuICAgICAgaWYgKCFjYW5Td2l0Y2hNb2RlKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5taW5Nb2RlKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgbW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5IT1ZFUjoge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGhvdmVyZWREYXRlOiBhY3Rpb24ucGF5bG9hZCB9KTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0ZWREYXRlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgdmlldzogc3RhdGUudmlld1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgIGNvbnN0IF9kYXRlID0gYWN0aW9uLnBheWxvYWQgfHwgc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcbiAgICAgIG5ld1N0YXRlLnZpZXcgPSB7IG1vZGUsIGRhdGUgfTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgLy8gcHJlc2VydmUgdmlldyBtb2RlXG4gICAgICBjb25zdCBtb2RlID0gbmV3U3RhdGUubWluTW9kZSA/IG5ld1N0YXRlLm1pbk1vZGUgOiBzdGF0ZS52aWV3Lm1vZGU7XG4gICAgICBjb25zdCBfdmlld0RhdGUgPSBpc0RhdGVWYWxpZChuZXdTdGF0ZS52YWx1ZSkgJiYgbmV3U3RhdGUudmFsdWVcbiAgICAgICAgfHwgaXNBcnJheShuZXdTdGF0ZS52YWx1ZSkgJiYgaXNEYXRlVmFsaWQobmV3U3RhdGUudmFsdWVbMF0pICYmIG5ld1N0YXRlLnZhbHVlWzBdXG4gICAgICAgIHx8IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBnZXRWaWV3RGF0ZShfdmlld0RhdGUsIG5ld1N0YXRlLm1pbkRhdGUsIG5ld1N0YXRlLm1heERhdGUpO1xuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xuICAgICAgLy8gdXBkYXRlIHNlbGVjdGVkIHZhbHVlXG4gICAgICBpZiAobmV3U3RhdGUudmFsdWUpIHtcbiAgICAgICAgLy8gaWYgbmV3IHZhbHVlIGlzIGFycmF5IHdlIHdvcmsgd2l0aCBkYXRlIHJhbmdlXG4gICAgICAgIGlmIChpc0FycmF5KG5ld1N0YXRlLnZhbHVlKSkge1xuICAgICAgICAgIG5ld1N0YXRlLnNlbGVjdGVkUmFuZ2UgPSBuZXdTdGF0ZS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5ldyB2YWx1ZSBpcyBhIGRhdGUgLT4gZGF0ZXBpY2tlclxuICAgICAgICBpZiAobmV3U3RhdGUudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWREYXRlID0gbmV3U3RhdGUudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm92aWRlZCB2YWx1ZSBpcyBub3Qgc3VwcG9ydGVkIDopXG4gICAgICAgIC8vIG5lZWQgdG8gcmVwb3J0IGl0IHNvbWVob3dcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUX1JBTkdFOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0ZWRSYW5nZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHZpZXc6IHN0YXRlLnZpZXdcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS52aWV3Lm1vZGU7XG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkWzBdIHx8IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBnZXRWaWV3RGF0ZShfZGF0ZSwgc3RhdGUubWluRGF0ZSwgc3RhdGUubWF4RGF0ZSk7XG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUlOX0RBVEU6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtaW5EYXRlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEU6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtYXhEYXRlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfSVNfRElTQUJMRUQ6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0Rpc2FibGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSk6IEJzRGF0ZXBpY2tlclN0YXRlIHtcbiAgLy8gaG93IG1hbnkgY2FsZW5kYXJzXG4gIGNvbnN0IGRpc3BsYXlNb250aHMgPSBzdGF0ZS5kaXNwbGF5TW9udGhzO1xuICAvLyB1c2Ugc2VsZWN0ZWQgZGF0ZSBvbiBpbml0aWFsIHJlbmRlcmluZyBpZiBzZXRcbiAgbGV0IHZpZXdEYXRlID0gc3RhdGUudmlldy5kYXRlO1xuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdkYXknKSB7XG4gICAgc3RhdGUubW9udGhWaWV3T3B0aW9ucy5maXJzdERheU9mV2VlayA9IGdldExvY2FsZShzdGF0ZS5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgY29uc3QgbW9udGhzTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChsZXQgbW9udGhJbmRleCA9IDA7IG1vbnRoSW5kZXggPCBkaXNwbGF5TW9udGhzOyBtb250aEluZGV4KyspIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIG1vbnRoc01vZGVsW21vbnRoSW5kZXhdID0gY2FsY0RheXNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIHN0YXRlLm1vbnRoVmlld09wdGlvbnNcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyBtb250aDogMSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzTW9kZWwgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnbW9udGgnKSB7XG4gICAgY29uc3QgbW9udGhzQ2FsZW5kYXIgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICBtb250aHNDYWxlbmRhcltjYWxlbmRhckluZGV4XSA9IGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNDYWxlbmRhciB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICd5ZWFyJykge1xuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcblxuICAgIGZvciAoXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xuICAgICkge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgeWVhcnNDYWxlbmRhck1vZGVsW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0WWVhcnNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXG4gICAgICApO1xuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogeWVhcnNQZXJDYWxlbmRhciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhck1vZGVsIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdkYXknKSB7XG4gICAgY29uc3QgZm9ybWF0dGVkTW9udGhzID0gc3RhdGUubW9udGhzTW9kZWwubWFwKChtb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgIGZvcm1hdERheXNDYWxlbmRhcihtb250aCwgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSksIG1vbnRoSW5kZXgpXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmb3JtYXR0ZWRNb250aHMgfSk7XG4gIH1cblxuICAvLyBob3cgbWFueSBjYWxlbmRhcnNcbiAgY29uc3QgZGlzcGxheU1vbnRocyA9IHN0YXRlLmRpc3BsYXlNb250aHM7XG4gIC8vIGNoZWNrIGluaXRpYWwgcmVuZGVyaW5nXG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxuICBsZXQgdmlld0RhdGUgPSBzdGF0ZS52aWV3LmRhdGU7XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xuICAgIGNvbnN0IG1vbnRoc0NhbGVuZGFyID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xuICAgIGZvciAoXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xuICAgICkge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgbW9udGhzQ2FsZW5kYXJbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRNb250aHNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXG4gICAgICApO1xuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogMSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzQ2FsZW5kYXIgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICB5ZWFyc0NhbGVuZGFyTW9kZWxbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRZZWFyc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxNiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhck1vZGVsIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBmbGFnUmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICBhY3Rpb246IEFjdGlvbik6IEJzRGF0ZXBpY2tlclN0YXRlIHtcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcbiAgICBjb25zdCBmbGFnZ2VkTW9udGhzID0gc3RhdGUuZm9ybWF0dGVkTW9udGhzLm1hcChcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgICAgZmxhZ0RheXNDYWxlbmRhcihmb3JtYXR0ZWRNb250aCwge1xuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXG4gICAgICAgICAgbWluRGF0ZTogc3RhdGUubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlOiBzdGF0ZS5tYXhEYXRlLFxuICAgICAgICAgIGRheXNEaXNhYmxlZDogc3RhdGUuZGF5c0Rpc2FibGVkLFxuICAgICAgICAgIGRhdGVzRGlzYWJsZWQ6IHN0YXRlLmRhdGVzRGlzYWJsZWQsXG4gICAgICAgICAgaG92ZXJlZERhdGU6IHN0YXRlLmhvdmVyZWREYXRlLFxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogc3RhdGUuc2VsZWN0ZWREYXRlLFxuICAgICAgICAgIHNlbGVjdGVkUmFuZ2U6IHN0YXRlLnNlbGVjdGVkUmFuZ2UsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xuICAgIGNvbnN0IGZsYWdnZWRNb250aHNDYWxlbmRhciA9IHN0YXRlLm1vbnRoc0NhbGVuZGFyLm1hcChcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgICAgZmxhZ01vbnRoc0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXG4gICAgICAgICAgaG92ZXJlZE1vbnRoOiBzdGF0ZS5ob3ZlcmVkTW9udGgsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyRmxhZ2dlZCA9IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbC5tYXAoXG4gICAgICAoZm9ybWF0dGVkTW9udGgsIHllYXJJbmRleCkgPT5cbiAgICAgICAgZmxhZ1llYXJzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcbiAgICAgICAgICBpc0Rpc2FibGVkOiBzdGF0ZS5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1pbkRhdGU6IHN0YXRlLm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcbiAgICAgICAgICBob3ZlcmVkWWVhcjogc3RhdGUuaG92ZXJlZFllYXIsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICB5ZWFySW5kZXhcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJGbGFnZ2VkIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXRPcHRpb25zKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSk6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICBsb2NhbGU6IHN0YXRlLmxvY2FsZSxcblxuICAgIG1vbnRoVGl0bGU6IHN0YXRlLm1vbnRoVGl0bGUsXG4gICAgeWVhclRpdGxlOiBzdGF0ZS55ZWFyVGl0bGUsXG5cbiAgICBkYXlMYWJlbDogc3RhdGUuZGF5TGFiZWwsXG4gICAgbW9udGhMYWJlbDogc3RhdGUubW9udGhMYWJlbCxcbiAgICB5ZWFyTGFiZWw6IHN0YXRlLnllYXJMYWJlbCxcblxuICAgIHdlZWtOdW1iZXJzOiBzdGF0ZS53ZWVrTnVtYmVyc1xuICB9O1xufVxuXG4vKipcbiAqIGlmIHZpZXcgZGF0ZSBpcyBwcm92aWRlZCAoYnNWYWx1ZXxuZ01vZGVsKSBpdCBzaG91bGQgYmUgc2hvd25cbiAqIGlmIHZpZXcgZGF0ZSBpcyBub3QgcHJvdmlkZXI6XG4gKiBpZiBtaW5EYXRlPmN1cnJlbnREYXRlIChkZWZhdWx0IHZpZXcgdmFsdWUpLCBzaG93IG1pbkRhdGVcbiAqIGlmIG1heERhdGU8Y3VycmVudERhdGUoZGVmYXVsdCB2aWV3IHZhbHVlKSBzaG93IG1heERhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0Vmlld0RhdGUodmlld0RhdGU6IERhdGUgfCBEYXRlW10sIG1pbkRhdGU6IERhdGUsIG1heERhdGU6IERhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSBBcnJheS5pc0FycmF5KHZpZXdEYXRlKSA/IHZpZXdEYXRlWzBdIDogdmlld0RhdGU7XG5cbiAgaWYgKG1pbkRhdGUgJiYgaXNBZnRlcihtaW5EYXRlLCBfZGF0ZSwgJ2RheScpKSB7XG4gICAgcmV0dXJuIG1pbkRhdGU7XG4gIH1cblxuICBpZiAobWF4RGF0ZSAmJiBpc0JlZm9yZShtYXhEYXRlLCBfZGF0ZSwgJ2RheScpKSB7XG4gICAgcmV0dXJuIG1heERhdGU7XG4gIH1cblxuICByZXR1cm4gX2RhdGU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNaW5pU3RvcmUsIEFjdGlvbiwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBic0RhdGVwaWNrZXJSZWR1Y2VyIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnJlZHVjZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8QnNEYXRlcGlja2VyU3RhdGU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgX2Rpc3BhdGNoZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFjdGlvbj4oe1xuICAgICAgdHlwZTogJ1tkYXRlcGlja2VyXSBkaXNwYXRjaGVyIGluaXQnXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPEJzRGF0ZXBpY2tlclN0YXRlPihcbiAgICAgIGluaXRpYWxEYXRlcGlja2VyU3RhdGUsXG4gICAgICBfZGlzcGF0Y2hlcixcbiAgICAgIGJzRGF0ZXBpY2tlclJlZHVjZXJcbiAgICApO1xuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCBic0RhdGVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItY29udGFpbmVyJyxcbiAgcHJvdmlkZXJzOiBbQnNEYXRlcGlja2VyU3RvcmUsIEJzRGF0ZXBpY2tlckVmZmVjdHNdLFxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgZGlzcGxheTogYmxvY2s7JyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdjYWxlbmRhcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPSB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGg7XG4gICAgdGhpcy5jb250YWluZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jb250YWluZXJDbGFzcztcbiAgICB0aGlzLl9lZmZlY3RzXG4gICAgICAuaW5pdCh0aGlzLl9zdG9yZSlcbiAgICAgIC8vIGludGlhbCBzdGF0ZSBvcHRpb25zXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XG5cbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgICAuc2VsZWN0KChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zZWxlY3RlZERhdGUpXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IGFueSkgPT4gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpKVxuICAgICk7XG4gIH1cblxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA/IGRheS5pc0Rpc2FibGVkIDogKGRheS5pc090aGVyTW9udGggfHwgZGF5LmlzRGlzYWJsZWQpO1xuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdChkYXkuZGF0ZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX2VmZmVjdHMuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJy4vbW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2JzRGF0ZXBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBkYXRlcGlja2VyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XG4gIC8qKlxuICAgKiBDbG9zZSBkYXRlcGlja2VyIG9uIG91dHNpZGUgY2xpY2tcbiAgICovXG4gIEBJbnB1dCgpIG91dHNpZGVDbGljayA9IHRydWU7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRhdGVwaWNrZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lciA9ICdib2R5JztcblxuICBASW5wdXQoKSBvdXRzaWRlRXNjID0gdHJ1ZTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZGF0ZXBpY2tlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGhpZGRlblxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIF9ic1ZhbHVlOiBEYXRlO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlckNvbmZpZz47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBkYXRlcGlja2VyJ3MgY29udGVudCBpcyBlbmFibGVkIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogTWluaW11bSB2aWV3IG1vZGUgOiBkYXksIG1vbnRoLCBvciB5ZWFyXG4gICAqL1xuICBASW5wdXQoKSBtaW5Nb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcblxuICAvKipcbiAgICogRGlzYWJsZSBDZXJ0YWluIGRheXMgaW4gdGhlIHdlZWtcbiAgICovXG4gIEBJbnB1dCgpIGRheXNEaXNhYmxlZDogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gZGF0ZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlclJlZjogQ29tcG9uZW50UmVmPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICAgICAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgLy8gdG9kbzogYXNzaWduIG9ubHkgc3Vic2V0IG9mIGZpZWxkc1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlclxuICAgICk7XG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZGF0ZXBpY2tlci5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kYXRlcGlja2VyLm9uSGlkZGVuO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlci5saXN0ZW4oe1xuICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLm91dHNpZGVDbGljayxcbiAgICAgIG91dHNpZGVFc2M6IHRoaXMub3V0c2lkZUVzYyxcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICB0aGlzLnNldENvbmZpZygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5tYXhEYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGF5c0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRheXNEaXNhYmxlZCA9IHRoaXMuZGF5c0Rpc2FibGVkO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDb25maWcoKTtcblxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgIC5hdHRhY2goQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7cGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudH0pO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgc291cmNlIChtb2RlbCAtPiB2aWV3KVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyLmhpZGUoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmdcbiAgICogb2YgdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXBpY2tlclxuICAgKi9cbiAgc2V0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdGhpcy5ic0NvbmZpZywge1xuICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXG4gICAgICBkYXlzRGlzYWJsZWQ6IHRoaXMuZGF5c0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXlzRGlzYWJsZWQsXG4gICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWQsXG4gICAgICBtaW5Nb2RlOiB0aGlzLm1pbk1vZGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbk1vZGVcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbmZpZyB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXG4gICAgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHNcbiAgKSB7XG4gICAgc3VwZXIoX2NvbmZpZywgX3N0b3JlLCBfYWN0aW9ucywgX2VmZmVjdHMpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWlubGluZScsXG4gIGV4cG9ydEFzOiAnYnNEYXRlcGlja2VySW5saW5lJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgX2JzVmFsdWU6IERhdGU7XG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmJzVmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlnIG9iamVjdCBmb3IgZGF0ZXBpY2tlclxuICAgKi9cbiAgQElucHV0KCkgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcGlja2VySW5saW5lQ29uZmlnPjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgLy8gdG9kbzogYXNzaWduIG9ubHkgc3Vic2V0IG9mIGZpZWxkc1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlclxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxuICAgICAgLmF0dGFjaChCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5fZWxlbWVudFJlZilcbiAgICAgIC5zaG93KCk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIHNldENvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHRoaXMuYnNDb25maWcsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxuICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxuICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxuICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiBhbnkge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgcGFyc2VEYXRlLFxuICBmb3JtYXREYXRlLFxuICBnZXRMb2NhbGUsXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlLFxuICBpc0RhdGUsXG4gIGlzRGF0ZVZhbGlkXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XG5cbmNvbnN0IEJTX0RBVEVQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgQlNfREFURVBJQ0tFUl9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpbnB1dFtic0RhdGVwaWNrZXJdYCxcbiAgaG9zdDoge1xuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQpJyxcbiAgICAnKGtleXVwLmVzYyknOiAnaGlkZSgpJyxcbiAgICAnKGJsdXIpJzogJ29uQmx1cigpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtCU19EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUElDS0VSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtdmFyaWFibGUgKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdG9yQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGlucHV0IHZhbHVlIG9uIGxvY2FsZSBjaGFuZ2VcbiAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0SW5wdXRWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IGluaXRpYWxEYXRlID0gIXZhbHVlID8gJydcbiAgICAgIDogZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgaW5pdGlhbERhdGUpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIHRoaXMud3JpdGVWYWx1ZSgoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBfdmFsdWU6IERhdGUgfCBzdHJpbmcgPSBjLnZhbHVlO1xuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItc3dpdGNoICovXG4gICAgaWYgKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBfdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaXNEYXRlKF92YWx1ZSkpIHtcbiAgICAgIGNvbnN0IF9pc0RhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZSk7XG4gICAgICBpZiAoIV9pc0RhdGVWYWxpZCkge1xuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlIH0gfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWluRGF0ZSAmJiBpc0JlZm9yZShfdmFsdWUsIHRoaXMuX3BpY2tlci5taW5EYXRlLCAnZGF0ZScpKSB7XG4gICAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtaW5EYXRlOiB0aGlzLl9waWNrZXIubWluRGF0ZSB9IH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1heERhdGUgJiYgaXNBZnRlcihfdmFsdWUsIHRoaXMuX3BpY2tlci5tYXhEYXRlLCAnZGF0ZScpKSB7XG4gICAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtYXhEYXRlOiB0aGlzLl9waWNrZXIubWF4RGF0ZSB9IH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgX2xvY2FsZUtleSA9IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZTtcbiAgICAgIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUoX2xvY2FsZUtleSk7XG4gICAgICBpZiAoIV9sb2NhbGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBMb2NhbGUgXCIke19sb2NhbGVLZXl9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLl92YWx1ZSA9IHBhcnNlRGF0ZSh2YWx1ZSwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpO1xuICAgIH1cblxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9waWNrZXIuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIGV4dGVuZHMgQnNEYXRlcGlja2VyQ29uZmlnIHtcbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcbiAgZGlzcGxheU1vbnRocyA9IDI7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7IGRpc3BsYXk6IGJsb2NrOycsXG4gICAgcm9sZTogJ2RpYWxvZycsXG4gICAgJ2FyaWEtbGFiZWwnOiAnY2FsZW5kYXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldFJhbmdlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcblxuICBfcmFuZ2VTdGFjazogRGF0ZVtdID0gW107XG4gIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0c1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2VmZmVjdHMgPSBfZWZmZWN0cztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyQ2xhc3MgPSB0aGlzLl9jb25maWcuY29udGFpbmVyQ2xhc3M7XG4gICAgdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID0gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoO1xuICAgIHRoaXMuX2VmZmVjdHNcbiAgICAgIC5pbml0KHRoaXMuX3N0b3JlKVxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcbiAgICAgIC8vIHRvZG86IGZpeCB0aGlzLCBzcGxpdCBjb25maWdzXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XG5cbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0ZSA9PiB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSkpXG4gICAgKTtcbiAgfVxuXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID8gZGF5LmlzRGlzYWJsZWQgOiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCk7XG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIG9ubHkgb25lIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZFxuICAgIC8vIGFuZCB1c2VyIGNsaWNrcyBvbiBwcmV2aW91cyBkYXRlXG4gICAgLy8gc3RhcnQgc2VsZWN0aW9uIGZyb20gbmV3IGRhdGVcbiAgICAvLyBidXQgaWYgbmV3IGRhdGUgaXMgYWZ0ZXIgaW5pdGlhbCBvbmVcbiAgICAvLyB0aGFuIGZpbmlzaCBzZWxlY3Rpb25cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPVxuICAgICAgICBkYXkuZGF0ZSA+PSB0aGlzLl9yYW5nZVN0YWNrWzBdXG4gICAgICAgICAgPyBbdGhpcy5fcmFuZ2VTdGFja1swXSwgZGF5LmRhdGVdXG4gICAgICAgICAgOiBbZGF5LmRhdGVdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtkYXkuZGF0ZV07XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh0aGlzLl9yYW5nZVN0YWNrKSk7XG5cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZWZmZWN0cy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBDb21wb25lbnRMb2FkZXIgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0RhdGVyYW5nZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2JzRGF0ZXJhbmdlcGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgZGF0ZXJhbmdlcGlja2VyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XG4gIC8qKlxuICAgKiBDbG9zZSBkYXRlcmFuZ2VwaWNrZXIgb24gb3V0c2lkZSBjbGlja1xuICAgKi9cbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXJhbmdlcGlja2VyIHNob3VsZCBiZSBhcHBlbmRlZFxuICAgKiB0by4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XG5cbiAgQElucHV0KCkgb3V0c2lkZUVzYyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIHNob3duXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBfYnNWYWx1ZTogRGF0ZVtdO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlW10pIHtcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnPjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVyYW5nZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVyYW5nZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9jb25maWc6IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxuICAgICAgICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyXG4gICAgKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZGF0ZXBpY2tlci5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBvdXRzaWRlRXNjOiB0aGlzLm91dHNpZGVFc2MsXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDb25maWcoKTtcblxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgIC5hdHRhY2goQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgIC5zaG93KHtwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50fSk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBwaWNrZXIgKHZpZXcgLT4gbW9kZWwpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZUNoYW5nZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKHJhbmdlOiBEYXRlW10pID0+IHJhbmdlICYmIHJhbmdlWzBdICYmICEhcmFuZ2VbMV0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXJhbmdlcGlja2VyXG4gICAqL1xuICBzZXRDb25maWcoKSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5fY29uZmlnLFxuICAgICAgdGhpcy5ic0NvbmZpZyxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxuICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXG4gICAgICAgIGRhdGVzRGlzYWJsZWQ6IHRoaXMuZGF0ZXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNEaXNhYmxlZFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZ1xuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBwYXJzZURhdGUsIGZvcm1hdERhdGUsIGdldExvY2FsZSwgaXNBZnRlciwgaXNCZWZvcmUsIGlzQXJyYXksIGlzRGF0ZVZhbGlkIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W2JzRGF0ZXJhbmdlcGlja2VyXWAsXG4gIGhvc3Q6IHtcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gICAgJyhrZXl1cC5lc2MpJzogJ2hpZGUoKScsXG4gICAgJyhibHVyKSc6ICdvbkJsdXIoKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIHByaXZhdGUgX29uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlICovXG4gIHByaXZhdGUgX3ZhbGlkYXRvckNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGVbXTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZVxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldElucHV0VmFsdWUoZGF0ZTogRGF0ZVtdKTogdm9pZCB7XG4gICAgbGV0IHJhbmdlID0gJyc7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0OiBzdHJpbmcgPSAhZGF0ZVswXSA/ICcnXG4gICAgICAgIDogZm9ybWF0RGF0ZShkYXRlWzBdLFxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgICBjb25zdCBlbmQ6IHN0cmluZyA9ICFkYXRlWzFdID8gJydcbiAgICAgICAgOiBmb3JtYXREYXRlKFxuICAgICAgICAgIGRhdGVbMV0sXG4gICAgICAgICAgdGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VJbnB1dEZvcm1hdCxcbiAgICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICAgIHJhbmdlID0gKHN0YXJ0ICYmIGVuZCkgPyBzdGFydCArIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlU2VwYXJhdG9yICsgZW5kIDogJyc7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHJhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0aGlzLndyaXRlVmFsdWUoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgX3ZhbHVlOiBbRGF0ZSwgRGF0ZV0gPSBjLnZhbHVlO1xuXG4gICAgaWYgKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCB8fCAhaXNBcnJheShfdmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBfaXNGaXJzdERhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVswXSk7XG4gICAgY29uc3QgX2lzU2Vjb25kRGF0ZVZhbGlkID0gaXNEYXRlVmFsaWQoX3ZhbHVlWzFdKTtcblxuICAgIGlmICghX2lzRmlyc3REYXRlVmFsaWQpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBpbnZhbGlkOiBfdmFsdWVbMF0gfSB9O1xuICAgIH1cblxuICAgIGlmICghX2lzU2Vjb25kRGF0ZVZhbGlkKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzFdIH0gfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5taW5EYXRlICYmIGlzQmVmb3JlKF92YWx1ZVswXSwgdGhpcy5fcGlja2VyLm1pbkRhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtaW5EYXRlOiB0aGlzLl9waWNrZXIubWluRGF0ZSB9IH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWF4RGF0ZSAmJiBpc0FmdGVyKF92YWx1ZVsxXSwgdGhpcy5fcGlja2VyLm1heERhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtYXhEYXRlOiB0aGlzLl9waWNrZXIubWF4RGF0ZSB9IH07XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZVtdIHwgc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBfbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlO1xuICAgICAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShfbG9jYWxlS2V5KTtcbiAgICAgIGlmICghX2xvY2FsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYExvY2FsZSBcIiR7X2xvY2FsZUtleX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbGV0IF9pbnB1dDogKHN0cmluZ1tdIHwgRGF0ZVtdKSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWUuc3BsaXQodGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VTZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWU7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5fdmFsdWUgPSAoX2lucHV0IGFzIHN0cmluZ1tdKVxuICAgICAgICAubWFwKChfdmFsOiBzdHJpbmcpOiBEYXRlID0+XG4gICAgICAgICAgcGFyc2VEYXRlKF92YWwsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKSlcbiAgICAgICAgLm1hcCgoZGF0ZTogRGF0ZSkgPT4gKGlzTmFOKGRhdGUudmFsdWVPZigpKSA/IG51bGwgOiBkYXRlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtY2FsZW5kYXItbGF5b3V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIGN1cnJlbnQgZGF0ZSwgd2lsbCBiZSBhZGRlZCBpbiBuZWFyZXN0IHJlbGVhc2VzIC0tPlxuICAgIDxicy1jdXJyZW50LWRhdGUgdGl0bGU9XCJoZXkgdGhlcmVcIiAqbmdJZj1cImZhbHNlXCI+PC9icy1jdXJyZW50LWRhdGU+XG5cbiAgICA8IS0tbmF2aWdhdGlvbi0tPlxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWhlYWRcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYm9keVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLXRpbWVwaWNrZXItLT5cbiAgICA8YnMtdGltZXBpY2tlciAqbmdJZj1cImZhbHNlXCI+PC9icy10aW1lcGlja2VyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtY3VycmVudC1kYXRlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY3VycmVudC10aW1lZGF0ZVwiPjxzcGFuPnt7IHRpdGxlIH19PC9zcGFuPjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCc0N1c3RvbURhdGVzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IERhdGUgfCBEYXRlW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWN1c3RvbS1kYXRlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRuc1wiPlxuICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgcmFuZ2Ugb2YgcmFuZ2VzXCI+e3sgcmFuZ2UubGFiZWwgfX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJpc0N1c3RvbVJhbmdlU2hvd25cIj5DdXN0b20gUmFuZ2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBpc0N1c3RvbVJhbmdlU2hvd246IHRydWU7XG4gIEBJbnB1dCgpIHJhbmdlczogQnNDdXN0b21EYXRlc1tdO1xufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGF5LmlzRGlzYWJsZWQnLFxuICAgICdbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdJzogJ2RheS5pc0hvdmVyZWQnLFxuICAgICdbY2xhc3MuaXMtb3RoZXItbW9udGhdJzogJ2RheS5pc090aGVyTW9udGgnLFxuICAgICdbY2xhc3MuaXMtYWN0aXZlLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoSG92ZXJlZCcsXG4gICAgJ1tjbGFzcy5pbi1yYW5nZV0nOiAnZGF5LmlzSW5SYW5nZScsXG4gICAgJ1tjbGFzcy5zZWxlY3Qtc3RhcnRdJzogJ2RheS5pc1NlbGVjdGlvblN0YXJ0JyxcbiAgICAnW2NsYXNzLnNlbGVjdC1lbmRdJzogJ2RheS5pc1NlbGVjdGlvbkVuZCcsXG4gICAgJ1tjbGFzcy5zZWxlY3RlZF0nOiAnZGF5LmlzU2VsZWN0ZWQnXG4gIH0sXG4gIHRlbXBsYXRlOiBge3sgZGF5LmxhYmVsIH19YFxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXk6IERheVZpZXdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF5LmlzVG9kYXkgJiYgdGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5jdXN0b21Ub2RheUNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3dcIlxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJuYXZUbyh0cnVlKVwiPjxzcGFuPiZsc2FxdW87PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiXG4gICAgICAgICAgICAqbmdJZj1cImNhbGVuZGFyLm1vbnRoVGl0bGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInZpZXcoJ21vbnRoJylcIlxuICAgID48c3Bhbj57eyBjYWxlbmRhci5tb250aFRpdGxlIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiIChjbGljayk9XCJ2aWV3KCd5ZWFyJylcIlxuICAgID48c3Bhbj57eyBjYWxlbmRhci55ZWFyVGl0bGUgfX08L3NwYW4+PC9idXR0b24+XG5cbiAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgIDxidXR0b24gY2xhc3M9XCJuZXh0XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvd1wiXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJuYXZUbyhmYWxzZSlcIj48c3Bhbj4mcnNhcXVvOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkRpcmVjdGlvbj4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIG5hdlRvKGRvd246IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdChcbiAgICAgIGRvd24gPyBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5VUFxuICAgICk7XG4gIH1cblxuICB2aWV3KHZpZXdNb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KHZpZXdNb2RlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCwgV2Vla1ZpZXdNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXlzLWNhbGVuZGFyLXZpZXcnLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDwhLS1kYXlzIG1hdHJpeC0tPlxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJkYXlzIHdlZWtzXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDwhLS1pZiBzaG93IHdlZWtzLS0+XG4gICAgICAgICAgPHRoICpuZ0lmPVwib3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj48L3RoPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiBjYWxlbmRhci53ZWVrZGF5czsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ3ZWVrZGF5XCI+e3sgY2FsZW5kYXIud2Vla2RheXNbaV0gfX1cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgd2VlayBvZiBjYWxlbmRhci53ZWVrczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cIndlZWtcIiBbY2xhc3MuYWN0aXZlLXdlZWtdPVwiaXNXZWVrSG92ZXJlZFwiICAqbmdJZj1cIm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RXZWVrKHdlZWspXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIHRydWUpXCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIGZhbHNlKVwiPnt7IGNhbGVuZGFyLndlZWtOdW1iZXJzW2ldIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vlay5kYXlzXCIgcm9sZT1cImdyaWRjZWxsXCI+XG4gICAgICAgICAgPHNwYW4gYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXG4gICAgICAgICAgICAgICAgW2RheV09XCJkYXlcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3REYXkoZGF5KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJEYXkoZGF5LCB0cnVlKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJEYXkoZGF5LCBmYWxzZSlcIj57eyBkYXkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQgIHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcbiAgQElucHV0KCkgb3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlWaWV3TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXJXZWVrID0gbmV3IEV2ZW50RW1pdHRlcjxXZWVrVmlld01vZGVsPigpO1xuXG4gIGlzV2Vla0hvdmVyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpIHsgfVxuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IG1vbnRoOiBzdGVwIH0gfSk7XG4gIH1cblxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCk7XG4gIH1cblxuICBzZWxlY3REYXkoZXZlbnQ6IERheVZpZXdNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdChldmVudCk7XG4gIH1cblxuICBzZWxlY3RXZWVrKHdlZWs6IFdlZWtWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdlZWsuZGF5c1xuICAgICAgJiYgd2Vlay5kYXlzWzBdXG4gICAgICAmJiAhd2Vlay5kYXlzWzBdLmlzRGlzYWJsZWRcbiAgICAgICYmIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aCkge1xuXG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQod2Vlay5kYXlzWzBdKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3ZWVrLmRheXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSB3ZWVrLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGhcbiAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoc2VsZWN0ZWREYXkpO1xuICB9XG5cbiAgd2Vla0hvdmVySGFuZGxlcihjZWxsOiBXZWVrVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWN0aXZlRGF5cyA9IGNlbGwuZGF5cy5maW5kKChkYXk6IERheVZpZXdNb2RlbCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxuICAgICAgICA/ICFkYXkuaXNEaXNhYmxlZFxuICAgICAgICA6ICFkYXkuaXNPdGhlck1vbnRoICYmICFkYXkuaXNEaXNhYmxlZDtcbiAgICB9KTtcblxuICAgIGlmIChoYXNBY3RpdmVEYXlzKSB7XG4gICAgICBjZWxsLmlzSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICAgIHRoaXMuaXNXZWVrSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICAgIHRoaXMub25Ib3ZlcldlZWsuZW1pdChjZWxsKTtcbiAgICB9XG4gIH1cblxuICBob3ZlckRheShjZWxsOiBEYXlWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGggJiYgY2VsbC5pc090aGVyTW9udGgpIHtcbiAgICAgIGNlbGwuaXNPdGhlck1vbnRoSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICB9XG5cbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDZWxsSG92ZXJFdmVudCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1tb250aC1jYWxlbmRhci12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwibW9udGhzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgY2FsZW5kYXIubW9udGhzXCI+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBtb250aCBvZiByb3dcIiByb2xlPVwiZ3JpZGNlbGxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidmlld01vbnRoKG1vbnRoKVwiXG4gICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyTW9udGgobW9udGgsIHRydWUpXCJcbiAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJNb250aChtb250aCwgZmFsc2UpXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIm1vbnRoLmlzRGlzYWJsZWRcIlxuICAgICAgICAgICAgICBbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdPVwibW9udGguaXNIb3ZlcmVkXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBtb250aC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJDZWxsVmlld01vZGVsPigpO1xuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEhvdmVyRXZlbnQ+KCk7XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcCA9IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOID09PSBldmVudCA/IC0xIDogMTtcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgeWVhcjogc3RlcCB9IH0pO1xuICB9XG5cbiAgdmlld01vbnRoKG1vbnRoOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQobW9udGgpO1xuICB9XG5cbiAgaG92ZXJNb250aChjZWxsOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMub25Ib3Zlci5lbWl0KHsgY2VsbCwgaXNIb3ZlcmVkIH0pO1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy10aW1lcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiPi08L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImhvdXJzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIj4rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiPi08L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cIm1pbnV0ZXNcIiBwbGFjZWhvbGRlcj1cIjAwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1pbmNyZWFzZVwiPis8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN3aXRjaC10aW1lLWZvcm1hdFwiPnt7IGFtcG0gfX1cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBS0NBWUFBQUJpOEtTREFBQUJTRWxFUVZRWVYzWFFQVXZEVUJRRzRITnVhZ3RWcWM2S2dvdUN2NkdJdUludFlCTEI5aGNJUXBMU3RDQUlWN0RZbXBUY1JXY1hxWmlvM1Z3Yy9VQ2MvUUVxZmd5S0dicjBJN25TMUVpSGVxWXpQTy9oNVNEMGpheFVaam1TTENCK09GYitVRklORndBU0FFQWRwdTlnYUdYVnlBSEhGUUJrSHBLSGM2YTlkekVDdkFEeVk5c3FsQU1zSzlXMGp6eERYcWV5dHIzbWhRY2t4U2ppMjdUSko1L3JQbUlwd0pKcTNIcnRkdXJpWU91cnYxYTRpMXA1SG5oa0c5T0Z5bWkwUmVvTzA1Y0d3YitheXY0ZHlzVnlnamVGbXNQMDVmOHdwWlE4ZnNkdmZtdVk5empXU05xVXRnWUZWbk9WUmVJTFlvQkZ6ZFFJNS9HR0Z6TkhoR2JlWm5vcERHVTI5c1pic2NnbGRtQzk5dzM1Vk9BVFR5Y0lNTWNCWElmcFNWR3paaEE2QzhoaDAwY29ubG42VlE5VEdnVjMyT0VBS1FDNERyQnE3Q0p3ZDBnZ1I3VnEvclByZmdCK0Mzc0d5cFk1REFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuICAgICAgICAgIGFsdD1cIlwiPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB7XG4gIGFtcG0gPSAnb2snO1xuICBob3VycyA9IDA7XG4gIG1pbnV0ZXMgPSAwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHllYXJzUGVyQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9lbmdpbmUvZm9ybWF0LXllYXJzLWNhbGVuZGFyJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLXllYXJzLWNhbGVuZGFyLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxicy1jYWxlbmRhci1sYXlvdXQ+XG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcbiAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcbiAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXG4gICAgICA+PC9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldz5cblxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJ5ZWFyc1wiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGNhbGVuZGFyLnllYXJzXCI+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHJvd1wiIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ2aWV3WWVhcih5ZWFyKVwiXG4gICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyWWVhcih5ZWFyLCB0cnVlKVwiXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyWWVhcih5ZWFyLCBmYWxzZSlcIlxuICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwieWVhci5pc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmlzLWhpZ2hsaWdodGVkXT1cInllYXIuaXNIb3ZlcmVkXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyB5ZWFyLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBjYWxlbmRhcjogWWVhcnNDYWxlbmRhclZpZXdNb2RlbDtcblxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyQ2VsbFZpZXdNb2RlbD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IHllYXI6IHN0ZXAgKiB5ZWFyc1BlckNhbGVuZGFyIH0gfSk7XG4gIH1cblxuICB2aWV3WWVhcih5ZWFyOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeWVhcik7XG4gIH1cblxuICBob3ZlclllYXIoY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcnO1xuXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgQnNDYWxlbmRhckxheW91dENvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWNhbGVuZGFyLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jdXJyZW50LWRhdGUtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItZGF5LWRlY29yYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTW9udGhDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1tb250aHMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLXRpbWVwaWNrZXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNZZWFyc0NhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLXllYXJzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBfZXhwb3J0cyA9IFtcbiAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50LFxuXG4gIEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUsXG5cbiAgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG5cbiAgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50LFxuICAgIEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50LFxuICAgIEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50LFxuICAgIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQsXG5cbiAgICBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50LFxuICAgIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCxcbiAgICBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxuICAgIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQsXG5cbiAgICBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCxcblxuICAgIC4uLl9leHBvcnRzXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogX2V4cG9ydHNcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCc0RhdGVwaWNrZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgICBCc0RhdGVwaWNrZXJTdG9yZSxcbiAgICAgICAgQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICAgICAgQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgICAgICBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgICAgICAgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnLFxuICAgICAgICBCc0RhdGVwaWNrZXJFZmZlY3RzLFxuICAgICAgICBCc0xvY2FsZVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXR0ZXIge1xuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIGxvY2FsZSk7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGVGb3JtYXR0ZXIgfSBmcm9tICcuL2RhdGUtZm9ybWF0dGVyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWlubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tJmx0OyEmbmRhc2g7bmcta2V5ZG93bj1cImtleWRvd24oJGV2ZW50KVwiJm5kYXNoOyZndDstLT5cbiAgICA8ZGl2ICpuZ0lmPVwiZGF0ZXBpY2tlck1vZGVcIiBjbGFzcz1cIndlbGwgd2VsbC1zbSBiZy1mYWRlZCBwLWEgY2FyZFwiIHJvbGU9XCJhcHBsaWNhdGlvblwiID5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRlcGlja2VyTW9kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdGFydGluZ0RheTogbnVtYmVyO1xuICBASW5wdXQoKSB5ZWFyUmFuZ2U6IG51bWJlcjtcblxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICBASW5wdXQoKSBtaW5Nb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heE1vZGU6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1dlZWtzOiBib29sZWFuO1xuICBASW5wdXQoKSBmb3JtYXREYXk6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0TW9udGg6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0WWVhcjogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXREYXlIZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBvbmx5Q3VycmVudE1vbnRoOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmc7IGNsYXp6OiBzdHJpbmcgfVtdO1xuICBASW5wdXQoKSBtb250aENvbExpbWl0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRlRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH1bXTtcbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xuICBASW5wdXQoKSBpbml0RGF0ZTogRGF0ZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xuICBAT3V0cHV0KCkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KGZhbHNlKTtcbiAgQE91dHB1dCgpIGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHN0ZXBEYXk6IGFueSA9IHt9O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHN0ZXBNb250aDogYW55ID0ge307XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3RlcFllYXI6IGFueSA9IHt9O1xuXG4gIHVuaXF1ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIG1vZGVzOiBzdHJpbmdbXSA9IFsnZGF5JywgJ21vbnRoJywgJ3llYXInXTtcbiAgcHJvdGVjdGVkIGRhdGVGb3JtYXR0ZXI6IERhdGVGb3JtYXR0ZXIgPSBuZXcgRGF0ZUZvcm1hdHRlcigpO1xuICBwcm90ZWN0ZWQgX2FjdGl2ZURhdGU6IERhdGU7XG4gIHByb3RlY3RlZCBzZWxlY3RlZERhdGU6IERhdGU7XG4gIHByb3RlY3RlZCBhY3RpdmVEYXRlSWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyRGF5OiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyRGF5OiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlck1vbnRoOiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyTW9udGg6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyWWVhcjogRnVuY3Rpb247XG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlclllYXI6IEZ1bmN0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xuICB9XG5cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XG4gIH1cblxuICAvLyB0b2RvOiBhZGQgZm9ybWF0dGVyIHZhbHVlIHRvIERhdGUgb2JqZWN0XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHRvZG86IHVzZSBkYXRlIGZvciB1bmlxdWUgdmFsdWVcbiAgICB0aGlzLnVuaXF1ZUlkID0gIGBkYXRlcGlja2VyLS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKX1gO1xuXG4gICAgaWYgKHRoaXMuaW5pdERhdGUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuaW5pdERhdGU7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS52YWx1ZU9mKCkpO1xuICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gdGhpcy5yZWZyZXNoVmlldyBzaG91bGQgYmUgY2FsbGVkIGhlcmUgdG8gcmVmbGVjdCB0aGUgY2hhbmdlcyBvbiB0aGUgZmx5XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtdmFyaWFibGVcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICB0aGlzLmNoZWNrSWZBY3RpdmVEYXRlR290VXBkYXRlZChjaGFuZ2VzLmFjdGl2ZURhdGUpO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWN0aXZlRGF0ZSBoYXMgYmVlbiB1cGRhdGUgYW5kIHRoZW4gZW1pdCB0aGUgYWN0aXZlRGF0ZUNoYW5nZSB3aXRoIHRoZSBuZXcgZGF0ZVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjaGVja0lmQWN0aXZlRGF0ZUdvdFVwZGF0ZWQoYWN0aXZlRGF0ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKGFjdGl2ZURhdGUgJiYgIWFjdGl2ZURhdGUuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBhY3RpdmVEYXRlLnByZXZpb3VzVmFsdWU7XG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzVmFsdWUgJiZcbiAgICAgICAgcHJldmlvdXNWYWx1ZSBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICAgICAgcHJldmlvdXNWYWx1ZS5nZXRUaW1lKCkgIT09IGFjdGl2ZURhdGUuY3VycmVudFZhbHVlLmdldFRpbWUoKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q29tcGFyZUhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24sIHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAnZGF5Jykge1xuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlckRheSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdtb250aCcpIHtcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlclllYXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoZGF0ZTEgPT09IHVuZGVmaW5lZCB8fCBkYXRlMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5JyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlckRheShkYXRlMSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aChkYXRlMSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicgJiYgdGhpcy5jb21wYXJlSGFuZGxlclllYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcihkYXRlMSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cblxuICBzZXRSZWZyZXNoVmlld0hhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24sIHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAnZGF5Jykge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5JyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGVGaWx0ZXIoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0KGRhdGUsIGZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBpc0FjdGl2ZShkYXRlT2JqZWN0OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb21wYXJlKGRhdGVPYmplY3QuZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSA9PT0gMCkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlSWQgPSBkYXRlT2JqZWN0LnVpZDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBjcmVhdGVEYXRlT2JqZWN0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogYW55IHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3QgZGF0ZU9iamVjdDogYW55ID0ge307XG4gICAgZGF0ZU9iamVjdC5kYXRlID0gbmV3IERhdGUoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKVxuICAgICk7XG4gICAgZGF0ZU9iamVjdC5kYXRlID0gdGhpcy5maXhUaW1lWm9uZShkYXRlT2JqZWN0LmRhdGUpO1xuICAgIGRhdGVPYmplY3QubGFiZWwgPSB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgZm9ybWF0KTtcbiAgICBkYXRlT2JqZWN0LnNlbGVjdGVkID0gdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMuc2VsZWN0ZWREYXRlKSA9PT0gMDtcbiAgICBkYXRlT2JqZWN0LmRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKGRhdGUpO1xuICAgIGRhdGVPYmplY3QuY3VycmVudCA9IHRoaXMuY29tcGFyZShkYXRlLCBuZXcgRGF0ZSgpKSA9PT0gMDtcbiAgICBkYXRlT2JqZWN0LmN1c3RvbUNsYXNzID0gdGhpcy5nZXRDdXN0b21DbGFzc0ZvckRhdGUoZGF0ZU9iamVjdC5kYXRlKTtcblxuICAgIHJldHVybiBkYXRlT2JqZWN0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzcGxpdChhcnI6IGFueVtdLCBzaXplOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IGFycmF5czogYW55W10gPSBbXTtcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIGFycmF5cy5wdXNoKGFyci5zcGxpY2UoMCwgc2l6ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheXM7XG4gIH1cblxuICAvLyBGaXggYSBoYXJkLXJlcHJvZHVjaWJsZSBidWcgd2l0aCB0aW1lem9uZXNcbiAgLy8gVGhlIGJ1ZyBkZXBlbmRzIG9uIE9TLCBicm93c2VyLCBjdXJyZW50IHRpbWV6b25lIGFuZCBjdXJyZW50IGRhdGVcbiAgLy8gaS5lLlxuICAvLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTQsIDAsIDEpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksXG4gIC8vIGRhdGUuZ2V0SG91cnMoKSk7IGNhbiByZXN1bHQgaW4gXCIyMDEzIDExIDMxIDIzXCIgYmVjYXVzZSBvZiB0aGUgYnVnLlxuICBmaXhUaW1lWm9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKSxcbiAgICAgIGhvdXJzID09PSAyMyA/IGhvdXJzICsgMiA6IDBcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0KGRhdGU6IERhdGUsIGlzTWFudWFsID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1pbk1vZGUpIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmVEYXRlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5maXhUaW1lWm9uZSh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgaWYgKGlzTWFudWFsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZS5nZXREYXRlKClcbiAgICAgICk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmZpeFRpbWVab25lKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICBpZiAoaXNNYW51YWwpIHtcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbXG4gICAgICAgICAgdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpIC0gMVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlLnZhbHVlT2YoKSk7XG4gICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIG1vdmUoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgbGV0IGV4cGVjdGVkU3RlcDogYW55O1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5Jykge1xuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwRGF5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnKSB7XG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBNb250aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInKSB7XG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBZZWFyO1xuICAgIH1cblxuICAgIGlmIChleHBlY3RlZFN0ZXApIHtcbiAgICAgIGNvbnN0IHllYXIgPVxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIGRpcmVjdGlvbiAqIChleHBlY3RlZFN0ZXAueWVhcnMgfHwgMCk7XG4gICAgICBjb25zdCBtb250aCA9XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgZGlyZWN0aW9uICogKGV4cGVjdGVkU3RlcC5tb250aHMgfHwgMCk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XG5cbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTW9kZShfZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBfZGlyZWN0aW9uIHx8IDE7XG5cbiAgICBpZiAoXG4gICAgICAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5tYXhNb2RlICYmIGRpcmVjdGlvbiA9PT0gMSkgfHxcbiAgICAgICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1pbk1vZGUgJiYgZGlyZWN0aW9uID09PSAtMSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGVwaWNrZXJNb2RlID0gdGhpcy5tb2Rlc1tcbiAgICAgIHRoaXMubW9kZXMuaW5kZXhPZih0aGlzLmRhdGVwaWNrZXJNb2RlKSArIGRpcmVjdGlvblxuICAgIF07XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEN1c3RvbUNsYXNzRm9yRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLy8gdG9kbzogYnVpbGQgYSBoYXNoIG9mIGN1c3RvbSBjbGFzc2VzLCBpdCB3aWxsIHdvcmsgZmFzdGVyXG4gICAgY29uc3QgY3VzdG9tQ2xhc3NPYmplY3Q6IHtcbiAgICAgIGRhdGU6IERhdGU7XG4gICAgICBtb2RlOiBzdHJpbmc7XG4gICAgICBjbGF6ejogc3RyaW5nO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgfSA9IHRoaXMuY3VzdG9tQ2xhc3MuZmluZCgoY3VzdG9tQ2xhc3M6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgY3VzdG9tQ2xhc3MuZGF0ZS52YWx1ZU9mKCkgPT09IGRhdGUudmFsdWVPZigpICYmXG4gICAgICAgIGN1c3RvbUNsYXNzLm1vZGUgPT09IHRoaXMuZGF0ZXBpY2tlck1vZGVcbiAgICAgICk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tQ2xhc3NPYmplY3QgPT09IHVuZGVmaW5lZCA/ICcnIDogY3VzdG9tQ2xhc3NPYmplY3QuY2xheno7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcGFyZURhdGVEaXNhYmxlZChcbiAgICBkYXRlMURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9LFxuICAgIGRhdGUyOiBEYXRlXG4gICk6IG51bWJlciB7XG4gICAgaWYgKGRhdGUxRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRlMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICdkYXknICYmIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgbGV0IGlzRGF0ZURpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZGF0ZURpc2FibGVkKSB7XG4gICAgICB0aGlzLmRhdGVEaXNhYmxlZC5mb3JFYWNoKFxuICAgICAgICAoZGlzYWJsZWREYXRlOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY29tcGFyZURhdGVEaXNhYmxlZChkaXNhYmxlZERhdGUsIGRhdGUpID09PSAwKSB7XG4gICAgICAgICAgICBpc0RhdGVEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRheURpc2FibGVkKSB7XG4gICAgICBpc0RhdGVEaXNhYmxlZCA9XG4gICAgICAgIGlzRGF0ZURpc2FibGVkIHx8XG4gICAgICAgIHRoaXMuZGF5RGlzYWJsZWQuaW5kZXhPZihkYXRlLmdldERheSgpKSA+IC0xO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBpc0RhdGVEaXNhYmxlZCB8fFxuICAgICAgKHRoaXMubWluRGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA8IDApIHx8XG4gICAgICAodGhpcy5tYXhEYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1heERhdGUpID4gMClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29uZmlnIHtcbiAgbG9jYWxlID0gJ2VuJztcbiAgZGF0ZXBpY2tlck1vZGUgPSAnZGF5JztcbiAgc3RhcnRpbmdEYXkgPSAwO1xuICB5ZWFyUmFuZ2UgPSAyMDtcbiAgbWluTW9kZSA9ICdkYXknO1xuICBtYXhNb2RlID0gJ3llYXInO1xuICBzaG93V2Vla3MgPSB0cnVlO1xuICBmb3JtYXREYXkgPSAnREQnO1xuICBmb3JtYXRNb250aCA9ICdNTU1NJztcbiAgZm9ybWF0WWVhciA9ICdZWVlZJztcbiAgZm9ybWF0RGF5SGVhZGVyID0gJ2RkJztcbiAgZm9ybWF0RGF5VGl0bGUgPSAnTU1NTSBZWVlZJztcbiAgZm9ybWF0TW9udGhUaXRsZSA9ICdZWVlZJztcbiAgb25seUN1cnJlbnRNb250aCA9IGZhbHNlO1xuICBtb250aENvbExpbWl0ID0gMztcbiAgeWVhckNvbExpbWl0ID0gNTtcbiAgc2hvcnRjdXRQcm9wYWdhdGlvbiA9IGZhbHNlO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3Rvci1uYW1lIGNvbXBvbmVudC1zZWxlY3Rvci10eXBlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGF0ZXBpY2tlci1pbm5lciBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAodXBkYXRlKT1cIm9uVXBkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwiY29uZmlnLmxvY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGVwaWNrZXJNb2RlXT1cImRhdGVwaWNrZXJNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5pdERhdGVdPVwiaW5pdERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttaW5Nb2RlXT1cIm1pbk1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttYXhNb2RlXT1cIm1heE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzaG93V2Vla3NdPVwic2hvd1dlZWtzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5XT1cImZvcm1hdERheVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoXT1cImZvcm1hdE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0WWVhcl09XCJmb3JtYXRZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5SGVhZGVyXT1cImZvcm1hdERheUhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheVRpdGxlXT1cImZvcm1hdERheVRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhUaXRsZV09XCJmb3JtYXRNb250aFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRpbmdEYXldPVwic3RhcnRpbmdEYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIFt5ZWFyUmFuZ2VdPVwieWVhclJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY3VzdG9tQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlRGlzYWJsZWRdPVwiZGF0ZURpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF5RGlzYWJsZWRdPVwiZGF5RGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtvbmx5Q3VycmVudE1vbnRoXT1cIm9ubHlDdXJyZW50TW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzaG9ydGN1dFByb3BhZ2F0aW9uXT1cInNob3J0Y3V0UHJvcGFnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIFttb250aENvbExpbWl0XT1cIm1vbnRoQ29sTGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIFt5ZWFyQ29sTGltaXRdPVwieWVhckNvbExpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uRG9uZSk9XCJvblNlbGVjdGlvbkRvbmUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZURhdGVDaGFuZ2UpPVwib25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxkYXlwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9kYXlwaWNrZXI+XG4gICAgICA8bW9udGhwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9tb250aHBpY2tlcj5cbiAgICAgIDx5ZWFycGlja2VyIHRhYmluZGV4PVwiMFwiPjwveWVhcnBpY2tlcj5cbiAgICA8L2RhdGVwaWNrZXItaW5uZXI+XG4gICAgYCxcbiAgcHJvdmlkZXJzOiBbREFURVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbi8qIHRzbGludDplbmFibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKiogc2V0cyBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlID0gJ2RheSc7XG4gIC8qKiBkZWZhdWx0IGRhdGUgdG8gc2hvdyBpZiBgbmctbW9kZWxgIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQgKi9cbiAgQElucHV0KCkgaW5pdERhdGU6IERhdGU7XG4gIC8qKiAgb2xkZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICAvKiogbGF0ZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICAvKiogc2V0IGxvd2VyIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cbiAgQElucHV0KCkgbWluTW9kZTogc3RyaW5nO1xuICAvKiogc2V0cyB1cHBlciBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIG1heE1vZGU6IHN0cmluZztcbiAgLyoqIGlmIGZhbHNlIHdlZWsgbnVtYmVycyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBzaG93V2Vla3MgPSB0cnVlO1xuICAvKiogZm9ybWF0IG9mIGRheSBpbiBtb250aCAqL1xuICBASW5wdXQoKSBmb3JtYXREYXk6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiBtb250aCBpbiB5ZWFyICovXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgeWVhciBpbiB5ZWFyIHJhbmdlICovXG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiBkYXkgaW4gd2VlayBoZWFkZXIgKi9cbiAgQElucHV0KCkgZm9ybWF0RGF5SGVhZGVyOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgZGF5ICovXG4gIEBJbnB1dCgpIGZvcm1hdERheVRpdGxlOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgbW9udGggKi9cbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xuICAvKiogc3RhcnRpbmcgZGF5IG9mIHRoZSB3ZWVrIGZyb20gMC02ICgwPVN1bmRheSwgLi4uLCA2PVNhdHVyZGF5KSAqL1xuICBASW5wdXQoKSBzdGFydGluZ0RheTogbnVtYmVyO1xuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiB5ZWFyIHNlbGVjdGlvbiAqL1xuICBASW5wdXQoKSB5ZWFyUmFuZ2U6IG51bWJlcjtcbiAgLyoqIGlmIHRydWUgb25seSBkYXRlcyBmcm9tIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG1vbnRoIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgc2hvcnRjdXRgcyBldmVudCBwcm9wYWdhdGlvbiB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIHNob3J0Y3V0UHJvcGFnYXRpb246IGJvb2xlYW47XG4gIC8qKiBudW1iZXIgb2YgbW9udGhzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgbW9udGggcGlja2VyICovXG4gIEBJbnB1dCgpIG1vbnRoQ29sTGltaXQ6IG51bWJlcjtcbiAgLyoqIG51bWJlciBvZiB5ZWFycyBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgcm93IG9mIHllYXIgcGlja2VyICovXG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xuICAvKiogYXJyYXkgb2YgY3VzdG9tIGNzcyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgdG8gdGFyZ2V0ZWQgZGF0ZXMgKi9cbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nOyBjbGF6ejogc3RyaW5nIH1bXTtcbiAgLyoqIGFycmF5IG9mIGRpc2FibGVkIGRhdGVzICovXG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfVtdO1xuICAvKiogZGlzYWJsZWQgZGF5cyBvZiB0aGUgd2VlayBmcm9tIDAtNiAoMD1TdW5kYXksIC4uLiwgNj1TYXR1cmRheSkgKi9cbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xuXG4gIC8qKiBjdXJyZW50bHkgYWN0aXZlIGRhdGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGUgfHwgdGhpcy5fbm93O1xuICB9XG5cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xuXG4gIC8qKiBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgYWN0aXZlRGF0ZSBpcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KClcbiAgYWN0aXZlRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPihcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICBAVmlld0NoaWxkKERhdGVQaWNrZXJJbm5lckNvbXBvbmVudClcbiAgX2RhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgY29uZmlnOiBEYXRlcGlja2VyQ29uZmlnO1xuXG4gIHByb3RlY3RlZCBfbm93OiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJvdGVjdGVkIF9hY3RpdmVEYXRlOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucygpO1xuICB9XG5cbiAgY29uZmlndXJlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGV2ZW50OiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZXZlbnQ7XG4gICAgdGhpcy5vbkNoYW5nZShldmVudCk7XG4gIH1cblxuICBvblNlbGVjdGlvbkRvbmUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbkRvbmUuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkFjdGl2ZURhdGVDaGFuZ2UoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbiAgLy8gdG9kbzogc3VwcG9ydCBudWxsIHZhbHVlXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGVQaWNrZXIuY29tcGFyZSh2YWx1ZSwgdGhpcy5fYWN0aXZlRGF0ZSkgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdmFsdWU7XG4gICAgICB0aGlzLl9kYXRlUGlja2VyLnNlbGVjdCh2YWx1ZSwgZmFsc2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iLCIvLyBAZGVwcmVjYXRlZFxuLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RheXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5J1wiIHJvbGU9XCJncmlkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cImFjdGl2ZURhdGVJZFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj7DosKAwrk8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj4mbHQ7PC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiNSArIChkYXRlUGlja2VyLnNob3dXZWVrcyA/IDEgOiAwKVwiPlxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPsOiwoDCujwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNCczRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj4mZ3Q7XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0aCAqbmdJZj1cImRhdGVQaWNrZXIuc2hvd1dlZWtzXCI+PC90aD5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgbGFiZWx6IG9mIGxhYmVsc1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHNtYWxsIGFyaWEtbGFiZWw9XCJsYWJlbHouZnVsbFwiPjxiPnt7IGxhYmVsei5hYmJyIH19PC9iPjwvc21hbGw+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwicm93c1wiIGxldC1yb3d6PVwiJGltcGxpY2l0XCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgIDx0ciAqbmdJZj1cIiEoZGF0ZVBpY2tlci5vbmx5Q3VycmVudE1vbnRoICYmIHJvd3pbMF0uc2Vjb25kYXJ5ICYmIHJvd3pbNl0uc2Vjb25kYXJ5KVwiPlxuICAgICAgICA8dGQgKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiIGNsYXNzPVwiaDZcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGVtPnt7IHdlZWtOdW1iZXJzW2luZGV4XSB9fTwvZW0+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2lkXT1cImR0ei51aWRcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSB7e2R0ei5jdXN0b21DbGFzc319XCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIShkYXRlUGlja2VyLm9ubHlDdXJyZW50TW9udGggJiYgZHR6LnNlY29uZGFyeSlcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tc2Vjb25kYXJ5JzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQsIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1kZWZhdWx0JzogIWlzQnM0fVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZHR6LmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtbXV0ZWQnOiBkdHouc2Vjb25kYXJ5IHx8IGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdCAuYnRuLXNlY29uZGFyeSB7XG4gICAgICBjb2xvcjogIzI5MmIyYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgfVxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1tdXRlZCB7XG4gICAgICBjb2xvcjogIzI5MmIyYyAhaW1wb3J0YW50O1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERheVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxhYmVsczogYW55W10gPSBbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgcm93czogYW55W10gPSBbXTtcbiAgd2Vla051bWJlcnM6IG51bWJlcltdID0gW107XG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xuICB9XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIC8qcHJvdGVjdGVkIGdldERheXNJbk1vbnRoKHllYXI6bnVtYmVyLCBtb250aDpudW1iZXIpIHtcbiAgIHJldHVybiAoKG1vbnRoID09PSAxKSAmJiAoeWVhciAlIDQgPT09IDApICYmXG4gICAoKHllYXIgJSAxMDAgIT09IDApIHx8ICh5ZWFyICUgNDAwID09PSAwKSkpID8gMjkgOiBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgIH0qL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwRGF5ID0geyBtb250aHM6IDEgfTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCB5ZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRoaXMuc3RhcnRpbmdEYXkgLSBmaXJzdERheU9mTW9udGguZ2V0RGF5KCk7XG4gICAgICBjb25zdCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA9XG4gICAgICAgIGRpZmZlcmVuY2UgPiAwID8gNyAtIGRpZmZlcmVuY2UgOiAtZGlmZmVyZW5jZTtcbiAgICAgIGNvbnN0IGZpcnN0RGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aC5nZXRUaW1lKCkpO1xuXG4gICAgICBpZiAobnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPiAwKSB7XG4gICAgICAgIGZpcnN0RGF0ZS5zZXREYXRlKC1udW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCArIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyA0MiBpcyB0aGUgbnVtYmVyIG9mIGRheXMgb24gYSBzaXgtd2VlayBjYWxlbmRhclxuICAgICAgY29uc3QgX2RheXM6IERhdGVbXSA9IHNlbGYuZ2V0RGF0ZXMoZmlyc3REYXRlLCA0Mik7XG4gICAgICBjb25zdCBkYXlzOiBhbnlbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IF9kYXRlT2JqZWN0ID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KF9kYXlzW2ldLCB0aGlzLmZvcm1hdERheSk7XG4gICAgICAgIF9kYXRlT2JqZWN0LnNlY29uZGFyeSA9IF9kYXlzW2ldLmdldE1vbnRoKCkgIT09IG1vbnRoO1xuICAgICAgICBfZGF0ZU9iamVjdC51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcbiAgICAgICAgZGF5c1tpXSA9IF9kYXRlT2JqZWN0O1xuICAgICAgfVxuXG4gICAgICBzZWxmLmxhYmVscyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0gPSB7fTtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uYWJiciA9IHRoaXMuZGF0ZUZpbHRlcihcbiAgICAgICAgICBkYXlzW2pdLmRhdGUsXG4gICAgICAgICAgdGhpcy5mb3JtYXREYXlIZWFkZXJcbiAgICAgICAgKTtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uZnVsbCA9IHRoaXMuZGF0ZUZpbHRlcihkYXlzW2pdLmRhdGUsICdFRUVFJyk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYudGl0bGUgPSB0aGlzLmRhdGVGaWx0ZXIodGhpcy5hY3RpdmVEYXRlLCB0aGlzLmZvcm1hdERheVRpdGxlKTtcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQoZGF5cywgNyk7XG5cbiAgICAgIGlmICh0aGlzLnNob3dXZWVrcykge1xuICAgICAgICBzZWxmLndlZWtOdW1iZXJzID0gW107XG4gICAgICAgIGNvbnN0IHRodXJzZGF5SW5kZXggPSAoNCArIDcgLSB0aGlzLnN0YXJ0aW5nRGF5KSAlIDc7XG4gICAgICAgIGNvbnN0IG51bVdlZWtzID0gc2VsZi5yb3dzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgY3VyV2VlayA9IDA7IGN1cldlZWsgPCBudW1XZWVrczsgY3VyV2VlaysrKSB7XG4gICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy5wdXNoKFxuICAgICAgICAgICAgc2VsZi5nZXRJU084NjAxV2Vla051bWJlcihzZWxmLnJvd3NbY3VyV2Vla11bdGh1cnNkYXlJbmRleF0uZGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgJ2RheScpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxuICAgICAgZGF0ZTE6IERhdGUsXG4gICAgICBkYXRlMjogRGF0ZVxuICAgICk6IG51bWJlciB7XG4gICAgICBjb25zdCBkMSA9IG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCksIGRhdGUxLmdldERhdGUoKSk7XG4gICAgICBjb25zdCBkMiA9IG5ldyBEYXRlKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCksIGRhdGUyLmdldERhdGUoKSk7XG4gICAgICByZXR1cm4gZDEuZ2V0VGltZSgpIC0gZDIuZ2V0VGltZSgpO1xuICAgIH0sICdkYXknKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERhdGVzKHN0YXJ0RGF0ZTogRGF0ZSwgbjogbnVtYmVyKTogRGF0ZVtdIHtcbiAgICBjb25zdCBkYXRlczogRGF0ZVtdID0gbmV3IEFycmF5KG4pO1xuICAgIGxldCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBkYXRlOiBEYXRlO1xuICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQuZ2V0VGltZSgpKTtcbiAgICAgIGRhdGUgPSB0aGlzLmRhdGVQaWNrZXIuZml4VGltZVpvbmUoZGF0ZSk7XG4gICAgICBkYXRlc1tpKytdID0gZGF0ZTtcbiAgICAgIGN1cnJlbnQgPSBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpICsgMVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldElTTzg2MDFXZWVrTnVtYmVyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIGNvbnN0IGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAvLyBUaHVyc2RheVxuICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgKyA0IC0gKGNoZWNrRGF0ZS5nZXREYXkoKSB8fCA3KSk7XG4gICAgY29uc3QgdGltZSA9IGNoZWNrRGF0ZS5nZXRUaW1lKCk7XG4gICAgLy8gQ29tcGFyZSB3aXRoIEphbiAxXG4gICAgY2hlY2tEYXRlLnNldE1vbnRoKDApO1xuICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmZsb29yKE1hdGgucm91bmQoKHRpbWUgLSBjaGVja0RhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSAvIDcpICsgMVxuICAgICk7XG4gIH1cblxuICAvLyB0b2RvOiBrZXkgZXZlbnRzIGltcGxlbWVudGF0aW9uXG59XG4iLCIvLyBAZGVwcmVjYXRlZFxuLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9udGhwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuPHRhYmxlICpuZ0lmPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZT09PSdtb250aCdcIiByb2xlPVwiZ3JpZFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCuTwvYnV0dG9uPjwvdGg+XG4gICAgICA8dGggW2F0dHIuY29sc3Bhbl09XCIoKGRhdGVQaWNrZXIubW9udGhDb2xMaW1pdCAtIDIpIDw9IDApID8gMSA6IGRhdGVQaWNrZXIubW9udGhDb2xMaW1pdCAtIDJcIj5cbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci50b2dnbGVNb2RlKDApXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gbWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBtYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPiBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj7DosKAwro8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93eiBvZiByb3dzXCI+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFthdHRyLmlkXT1cImR0ei51aWRcIiBbbmdDbGFzc109XCJkdHouY3VzdG9tQ2xhc3NcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tbGluayc6IGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkIHx8IChpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSksIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KX1cIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LXN1Y2Nlc3MnOiBpc0JzNCAmJiBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JzNCAmJiBkdHouY3VycmVudH1cIj57eyBkdHoubGFiZWwgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZTogc3RyaW5nO1xuICByb3dzOiBhbnlbXSA9IFtdO1xuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XG4gIG1heE1vZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xuICB9XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnN0ZXBNb250aCA9IHsgeWVhcnM6IDEgfTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCBtb250aHM6IGFueVtdID0gbmV3IEFycmF5KDEyKTtcbiAgICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgbGV0IGRhdGU6IERhdGU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgaSwgMSk7XG4gICAgICAgIGRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGUpO1xuICAgICAgICBtb250aHNbaV0gPSB0aGlzLmNyZWF0ZURhdGVPYmplY3QoZGF0ZSwgdGhpcy5mb3JtYXRNb250aCk7XG4gICAgICAgIG1vbnRoc1tpXS51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcbiAgICAgIH1cblxuICAgICAgc2VsZi50aXRsZSA9IHRoaXMuZGF0ZUZpbHRlcih0aGlzLmFjdGl2ZURhdGUsIHRoaXMuZm9ybWF0TW9udGhUaXRsZSk7XG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KG1vbnRocywgc2VsZi5kYXRlUGlja2VyLm1vbnRoQ29sTGltaXQpO1xuICAgIH0sICdtb250aCcpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxuICAgICAgZGF0ZTE6IERhdGUsXG4gICAgICBkYXRlMjogRGF0ZVxuICAgICk6IG51bWJlciB7XG4gICAgICBjb25zdCBkMSA9IG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCkpO1xuICAgICAgY29uc3QgZDIgPSBuZXcgRGF0ZShkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpKTtcbiAgICAgIHJldHVybiBkMS5nZXRUaW1lKCkgLSBkMi5nZXRUaW1lKCk7XG4gICAgfSwgJ21vbnRoJyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIC8vIHRvZG86IGtleSBldmVudHMgaW1wbGVtZW50YXRpb25cbn1cbiIsIi8vIEBkZXByZWNhdGVkXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd5ZWFycGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGU9PT0neWVhcidcIiByb2xlPVwiZ3JpZFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCuTwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIigoZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQgLSAyKSA8PSAwKSA/IDEgOiBkYXRlUGlja2VyLnllYXJDb2xMaW1pdCAtIDJcIj5cbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCIgcm9sZT1cImhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCujwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3d6IG9mIHJvd3NcIj5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2F0dHIuaWRdPVwiZHR6LnVpZFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1saW5rJzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQgfHwgKGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopKSwgZGlzYWJsZWQ6IGR0ei5kaXNhYmxlZCwgYWN0aXZlOiAhaXNCczQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopfVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIuc2VsZWN0KGR0ei5kYXRlKVwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtc3VjY2Vzcyc6IGlzQnM0ICYmIGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QgLmJ0bi1pbmZvIC50ZXh0LXN1Y2Nlc3Mge1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBZZWFyUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xuICB0aXRsZTogc3RyaW5nO1xuICByb3dzOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlciA9IGRhdGVQaWNrZXI7XG4gIH1cblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcFllYXIgPSB7IHllYXJzOiB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlIH07XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGZ1bmN0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgeWVhcnM6IGFueVtdID0gbmV3IEFycmF5KHRoaXMueWVhclJhbmdlKTtcbiAgICAgIGxldCBkYXRlOiBEYXRlO1xuICAgICAgY29uc3Qgc3RhcnQgPSBzZWxmLmdldFN0YXJ0aW5nWWVhcih0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZWFyUmFuZ2U7IGkrKykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoc3RhcnQgKyBpLCAwLCAxKTtcbiAgICAgICAgZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZSk7XG4gICAgICAgIHllYXJzW2ldID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0WWVhcik7XG4gICAgICAgIHllYXJzW2ldLnVpZCA9IHRoaXMudW5pcXVlSWQgKyAnLScgKyBpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRpdGxlID0gW3llYXJzWzBdLmxhYmVsLCB5ZWFyc1t0aGlzLnllYXJSYW5nZSAtIDFdLmxhYmVsXS5qb2luKFxuICAgICAgICAnIC0gJ1xuICAgICAgKTtcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQoeWVhcnMsIHNlbGYuZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQpO1xuICAgIH0sICd5ZWFyJyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Q29tcGFyZUhhbmRsZXIoZnVuY3Rpb24oXG4gICAgICBkYXRlMTogRGF0ZSxcbiAgICAgIGRhdGUyOiBEYXRlXG4gICAgKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiBkYXRlMS5nZXRGdWxsWWVhcigpIC0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcbiAgICB9LCAneWVhcicpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U3RhcnRpbmdZZWFyKHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gdG9kbzogcGFyc2VJbnRcbiAgICByZXR1cm4gKFxuICAgICAgKHllYXIgLSAxKSAvIHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UgKiB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlICsgMVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXlwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aHBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgWWVhclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4veWVhcnBpY2tlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50LFxuICAgIERheVBpY2tlckNvbXBvbmVudCxcbiAgICBNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBZZWFyUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCxcbiAgICBEYXlQaWNrZXJDb21wb25lbnQsXG4gICAgTW9udGhQaWNrZXJDb21wb25lbnQsXG4gICAgWWVhclBpY2tlckNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXRlUGlja2VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERhdGVwaWNrZXJNb2R1bGUsIHByb3ZpZGVyczogW0RhdGVwaWNrZXJDb25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJzaGlmdCIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OEJBcURtQixhQUFhOzs2QkFHZCxDQUFDOzs7OytCQUlDLElBQUk7K0JBRUosR0FBRzs7OEJBRUosS0FBSzs7OztnQ0FJSCxHQUFHOzswQkFHVCxNQUFNO3lCQUNQLE1BQU07d0JBQ1AsR0FBRzswQkFDRCxNQUFNO3lCQUNQLE1BQU07MkJBQ0osR0FBRzs7O2dCQWpFbEIsVUFBVTs7NkJBWFg7Ozs7Ozs7Ozs7QUNrQkE7OztBQUFBOztpQ0FLdUMsRUFBRTs7SUFFdkMsc0JBQUksa0RBQU87Ozs7O1FBQVgsVUFBWSxLQUFXO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFD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