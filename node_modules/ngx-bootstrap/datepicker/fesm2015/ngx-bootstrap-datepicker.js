import { Injectable, Component, EventEmitter, Directive, ElementRef, Input, Output, Renderer2, ViewContainerRef, ChangeDetectorRef, forwardRef, Host, ChangeDetectionStrategy, NgModule, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
class BsDatepickerConfig {
    constructor() {
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
}
BsDatepickerConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class BsDatepickerAbstractComponent {
    constructor() {
        this._customRangesFish = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._effects.setMinDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._effects.setMaxDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set daysDisabled(value) {
        this._effects.setDaysDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set datesDisabled(value) {
        this._effects.setDatesDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._effects.setDisabled(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setViewMode(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dayHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    weekHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearHoverHandler(event) { }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthSelectHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearSelectHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _stopPropagation(event) {
        event.stopPropagation();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerActions {
    /**
     * @return {?}
     */
    calculate() {
        return { type: BsDatepickerActions.CALCULATE };
    }
    /**
     * @return {?}
     */
    format() {
        return { type: BsDatepickerActions.FORMAT };
    }
    /**
     * @return {?}
     */
    flag() {
        return { type: BsDatepickerActions.FLAG };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    select(date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    }
    /**
     * @param {?} step
     * @return {?}
     */
    navigateStep(step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectRange(value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hoverDay(event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    minDate(date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    maxDate(date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    }
    /**
     * @param {?} days
     * @return {?}
     */
    daysDisabled(days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    datesDisabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isDisabled(value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsLocaleService {
    constructor() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    /**
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._localeChange;
    }
    /**
     * @return {?}
     */
    get currentLocale() {
        return this._locale.getValue();
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    use(locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    }
}
BsLocaleService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerEffects {
    /**
     * @param {?} _actions
     * @param {?} _localeService
     */
    constructor(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    init(_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    }
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this._store.dispatch(this._actions.select(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRangeValue(value) {
        this._store.dispatch(this._actions.selectRange(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMinDate(value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMaxDate(value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDaysDisabled(value) {
        this._store.dispatch(this._actions.daysDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDatesDisabled(value) {
        this._store.dispatch(this._actions.datesDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisabled(value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    }
    /**
     * @param {?} _config
     * @return {?}
     */
    setOptions(_config) {
        const /** @type {?} */ _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    }
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    setBindings(container) {
        container.daysCalendar = this._store
            .select(state => state.flaggedMonths)
            .pipe(filter(months => !!months));
        // month calendar
        container.monthsCalendar = this._store
            .select(state => state.flaggedMonthsCalendar)
            .pipe(filter(months => !!months));
        // year calendar
        container.yearsCalendar = this._store
            .select(state => state.yearsCalendarFlagged)
            .pipe(filter(years => !!years));
        container.viewMode = this._store.select(state => state.view.mode);
        container.options = this._store
            .select(state => state.showWeekNumbers)
            .pipe(map(showWeekNumbers => ({ showWeekNumbers })));
        return this;
    }
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    setEventHandlers(container) {
        container.setViewMode = (event) => {
            this._store.dispatch(this._actions.changeViewMode(event));
        };
        container.navigateTo = (event) => {
            this._store.dispatch(this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = (event) => {
            const /** @type {?} */ _cell = /** @type {?} */ (event.cell);
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.monthSelectHandler = (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    month: getMonth(event.date),
                    year: getFullYear(event.date)
                },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    year: getFullYear(event.date)
                },
                viewMode: 'month'
            }));
        };
        return this;
    }
    /**
     * @return {?}
     */
    registerDatepickerSideEffects() {
        this._subs.push(this._store.select(state => state.view).subscribe(view => {
            this._store.dispatch(this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(state => state.monthsModel)
            .pipe(filter(monthModel => !!monthModel))
            .subscribe(month => this._store.dispatch(this._actions.format())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.formattedMonths)
            .pipe(filter(month => !!month))
            .subscribe(month => this._store.dispatch(this._actions.flag())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.selectedDate)
            .pipe(filter(selectedDate => !!selectedDate))
            .subscribe(selectedDate => this._store.dispatch(this._actions.flag())));
        // flag for date range picker
        this._subs.push(this._store
            .select(state => state.selectedRange)
            .pipe(filter(selectedRange => !!selectedRange))
            .subscribe(selectedRange => this._store.dispatch(this._actions.flag())));
        // monthsCalendar
        this._subs.push(this._store
            .select(state => state.monthsCalendar)
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // years calendar
        this._subs.push(this._store
            .select(state => state.yearsCalendarModel)
            .pipe(filter(state => !!state))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // on hover
        this._subs.push(this._store
            .select(state => state.hoveredDate)
            .pipe(filter(hoveredDate => !!hoveredDate))
            .subscribe(hoveredDate => this._store.dispatch(this._actions.flag())));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(locale => this._store.dispatch(this._actions.setLocale(locale))));
        return this;
    }
    /**
     * @return {?}
     */
    destroy() {
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
}
BsDatepickerEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerEffects.ctorParameters = () => [
    { type: BsDatepickerActions, },
    { type: BsLocaleService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ defaultMonthOptions = {
    width: 7,
    height: 6
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _initialView = { date: new Date(), mode: 'day' };
const /** @type {?} */ initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
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
    const /** @type {?} */ weekDay = getDay(date);
    const /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
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
    const /** @type {?} */ offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isMonthDisabled(date, min, max) {
    const /** @type {?} */ minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    const /** @type {?} */ maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isYearDisabled(date, min, max) {
    const /** @type {?} */ minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    const /** @type {?} */ maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
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
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'date'));
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
    let /** @type {?} */ prevValue = options.initialDate;
    const /** @type {?} */ matrix = new Array(options.height);
    for (let /** @type {?} */ i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (let /** @type {?} */ j = 0; j < options.width; j++) {
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
    const /** @type {?} */ firstDay = getFirstDayOfMonth(startingDate);
    const /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
    const /** @type {?} */ matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate,
        shift: { day: 1 }
    };
    const /** @type {?} */ daysMatrix = createMatrix(matrixOptions, date => date);
    return {
        daysMatrix,
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
        weeks: daysCalendar.daysMatrix.map((week, weekIndex) => ({
            days: week.map((date, dayIndex) => ({
                date,
                label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex,
                weekIndex,
                dayIndex
            }))
        }))
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map((days) => (days[0] ? formatDate(days[0], format, locale) : ''));
}
/**
 * @param {?} locale
 * @return {?}
 */
function getShiftedWeekdays(locale) {
    const /** @type {?} */ _locale = getLocale(locale);
    const /** @type {?} */ weekdays = /** @type {?} */ (_locale.weekdaysShort());
    const /** @type {?} */ firstDayOfWeek = _locale.firstDayOfWeek();
    return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
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
    formattedMonth.weeks.forEach((week) => {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach((day, dayIndex) => {
            // datepicker
            const /** @type {?} */ isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            const /** @type {?} */ isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            const /** @type {?} */ isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            const /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            const /** @type {?} */ isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            const /** @type {?} */ isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day') ||
                isDisabledDay(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled);
            const /** @type {?} */ currentDate = new Date();
            const /** @type {?} */ isToday = !isOtherMonth && isSameDay(day.date, currentDate);
            // decide update or not
            const /** @type {?} */ newDay = Object.assign({}, day, {
                isOtherMonth,
                isHovered,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isInRange,
                isDisabled,
                isToday
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
const /** @type {?} */ height = 4;
const /** @type {?} */ width = 3;
const /** @type {?} */ shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatMonthsCalendar(viewDate, formatOptions) {
    const /** @type {?} */ initialDate = startOf(viewDate, 'year');
    const /** @type {?} */ matrixOptions = { width, height, initialDate, shift };
    const /** @type {?} */ monthMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
    }));
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
    monthCalendar.months.forEach((months, rowIndex) => {
        months.forEach((month, monthIndex) => {
            const /** @type {?} */ isHovered = isSameMonth(month.date, options.hoveredMonth);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            const /** @type {?} */ newMonth = Object.assign(/*{},*/ month, {
                isHovered,
                isDisabled
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
const /** @type {?} */ height$1 = 4;
const /** @type {?} */ width$1 = 4;
const /** @type {?} */ yearsPerCalendar = height$1 * width$1;
const /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
const /** @type {?} */ shift$1 = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearsCalendar(viewDate, formatOptions) {
    const /** @type {?} */ initialDate = shiftDate(viewDate, { year: initialShift });
    const /** @type {?} */ matrixOptions = { width: width$1, height: height$1, initialDate, shift: shift$1 };
    const /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
    }));
    const /** @type {?} */ yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle
    };
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    const /** @type {?} */ from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    const /** @type {?} */ to = formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return `${from} - ${to}`;
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
    yearsCalendar.years.forEach((years, rowIndex) => {
        years.forEach((year, yearIndex) => {
            const /** @type {?} */ isHovered = isSameYear(year.date, options.hoveredYear);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            const /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered, isDisabled });
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
    const /** @type {?} */ i = yearsCalendar.years.length - 1;
    const /** @type {?} */ j = yearsCalendar.years[i].length - 1;
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
function bsDatepickerReducer(state = initialDatepickerState, action) {
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
            const /** @type {?} */ date = shiftDate(startOf(state.view.date, 'month'), action.payload);
            const /** @type {?} */ newState = {
                view: {
                    mode: state.view.mode,
                    date
                }
            };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            const /** @type {?} */ payload = action.payload;
            const /** @type {?} */ date = setFullDate(state.view.date, payload.unit);
            let /** @type {?} */ newState;
            let /** @type {?} */ mode;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date, mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date, mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode)) {
                return state;
            }
            const /** @type {?} */ date = state.view.date;
            const /** @type {?} */ mode = action.payload;
            const /** @type {?} */ newState = { view: { date, mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            const /** @type {?} */ newState = {
                selectedDate: action.payload,
                view: state.view
            };
            const /** @type {?} */ mode = state.view.mode;
            const /** @type {?} */ _date = action.payload || state.view.date;
            const /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            const /** @type {?} */ newState = action.payload;
            // preserve view mode
            const /** @type {?} */ mode = newState.minMode ? newState.minMode : state.view.mode;
            const /** @type {?} */ _viewDate = isDateValid(newState.value) && newState.value
                || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0]
                || state.view.date;
            const /** @type {?} */ date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode, date };
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
            const /** @type {?} */ newState = {
                selectedRange: action.payload,
                view: state.view
            };
            const /** @type {?} */ mode = state.view.mode;
            const /** @type {?} */ _date = action.payload && action.payload[0] || state.view.date;
            const /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
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
    const /** @type {?} */ displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    let /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
        const /** @type {?} */ monthsModel = new Array(displayMonths);
        for (let /** @type {?} */ monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = shiftDate(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel });
    }
    if (state.view.mode === 'month') {
        const /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        const /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel });
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
        const /** @type {?} */ formattedMonths = state.monthsModel.map((month, monthIndex) => formatDaysCalendar(month, getFormatOptions(state), monthIndex));
        return Object.assign({}, state, { formattedMonths });
    }
    // how many calendars
    const /** @type {?} */ displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    let /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'month') {
        const /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        const /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel });
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
        const /** @type {?} */ flaggedMonths = state.formattedMonths.map((formattedMonth, monthIndex) => flagDaysCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            daysDisabled: state.daysDisabled,
            datesDisabled: state.datesDisabled,
            hoveredDate: state.hoveredDate,
            selectedDate: state.selectedDate,
            selectedRange: state.selectedRange,
            displayMonths: state.displayMonths,
            monthIndex
        }));
        return Object.assign({}, state, { flaggedMonths });
    }
    if (state.view.mode === 'month') {
        const /** @type {?} */ flaggedMonthsCalendar = state.monthsCalendar.map((formattedMonth, monthIndex) => flagMonthsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredMonth: state.hoveredMonth,
            displayMonths: state.displayMonths,
            monthIndex
        }));
        return Object.assign({}, state, { flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        const /** @type {?} */ yearsCalendarFlagged = state.yearsCalendarModel.map((formattedMonth, yearIndex) => flagYearsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredYear: state.hoveredYear,
            displayMonths: state.displayMonths,
            yearIndex
        }));
        return Object.assign({}, state, { yearsCalendarFlagged });
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
    const /** @type {?} */ _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
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
class BsDatepickerStore extends MiniStore {
    constructor() {
        const /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        const /** @type {?} */ state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
}
BsDatepickerStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerStore.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
    /**
     * @param {?} _config
     * @param {?} _store
     * @param {?} _actions
     * @param {?} _effects
     */
    constructor(_config, _store, _actions, _effects) {
        super();
        this._config = _config;
        this._store = _store;
        this._actions = _actions;
        this.valueChange = new EventEmitter();
        this._subs = [];
        this._effects = _effects;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._effects.setValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            .select((state) => state.selectedDate)
            .subscribe((date) => this.valueChange.emit(date)));
    }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) {
        const /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
        this._effects.destroy();
    }
}
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
BsDatepickerContainerComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: BsDatepickerStore, },
    { type: BsDatepickerActions, },
    { type: BsDatepickerEffects, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
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
    /**
     * Returns whether or not the datepicker is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._datepicker.isShown;
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
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    show() {
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
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
            this.bsValue = value;
            this.hide();
        }));
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Set config for datepicker
     * @return {?}
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDatepicker]',
                exportAs: 'bsDatepicker'
            },] }
];
/** @nocollapse */
BsDatepickerDirective.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerInlineConfig extends BsDatepickerConfig {
}
BsDatepickerInlineConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
    /**
     * @param {?} _config
     * @param {?} _store
     * @param {?} _actions
     * @param {?} _effects
     */
    constructor(_config, _store, _actions, _effects) {
        super(_config, _store, _actions, _effects);
    }
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
BsDatepickerInlineContainerComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: BsDatepickerStore, },
    { type: BsDatepickerActions, },
    { type: BsDatepickerEffects, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerInlineDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
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
    /**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
            this.bsValue = value;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * Set config for datepicker
     * @return {?}
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDatepickerInlineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'bs-datepicker-inline',
                exportAs: 'bsDatepickerInline'
            },] }
];
/** @nocollapse */
BsDatepickerInlineDirective.ctorParameters = () => [
    { type: BsDatepickerInlineConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
];
BsDatepickerInlineDirective.propDecorators = {
    "bsValue": [{ type: Input },],
    "bsConfig": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "datesDisabled": [{ type: Input },],
    "bsValueChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
const /** @type {?} */ BS_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
class BsDatepickerInputDirective {
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
     * @param {?} value
     * @return {?}
     */
    _setInputValue(value) {
        const /** @type {?} */ initialDate = !value ? ''
            : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
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
        /* tslint:disable-next-line: prefer-switch */
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (isDate(_value)) {
            const /** @type {?} */ _isDateValid = isDateValid(_value);
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
            this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
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
BsDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[bsDatepicker]`,
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
            },] }
];
/** @nocollapse */
BsDatepickerInputDirective.ctorParameters = () => [
    { type: BsDatepickerDirective, decorators: [{ type: Host },] },
    { type: BsLocaleService, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaterangepickerConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
    }
}
BsDaterangepickerConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
    /**
     * @param {?} _config
     * @param {?} _store
     * @param {?} _actions
     * @param {?} _effects
     */
    constructor(_config, _store, _actions, _effects) {
        super();
        this._config = _config;
        this._store = _store;
        this._actions = _actions;
        this.valueChange = new EventEmitter();
        this._rangeStack = [];
        this._subs = [];
        this._effects = _effects;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._effects.setRangeValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            .select(state => state.selectedRange)
            .subscribe(date => this.valueChange.emit(date)));
    }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) {
        const /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
        this._effects.destroy();
    }
}
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
BsDaterangepickerContainerComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: BsDatepickerStore, },
    { type: BsDatepickerActions, },
    { type: BsDatepickerEffects, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaterangepickerDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
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
    /**
     * Returns whether or not the daterangepicker is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._datepicker.isShown;
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
     * Initial value of daterangepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    show() {
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
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter((range) => range && range[0] && !!range[1]))
            .subscribe((value) => {
            this.bsValue = value;
            this.hide();
        }));
    }
    /**
     * Set config for daterangepicker
     * @return {?}
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDaterangepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDaterangepicker]',
                exportAs: 'bsDaterangepicker'
            },] }
];
/** @nocollapse */
BsDaterangepickerDirective.ctorParameters = () => [
    { type: BsDaterangepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
class BsDaterangepickerInputDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsCalendarLayoutComponent {
}
BsCalendarLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-calendar-layout',
                template: `
    <!-- current date, will be added in nearest releases -->
    <bs-current-date title="hey there" *ngIf="false"></bs-current-date>

    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>

    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>

    <!--timepicker-->
    <bs-timepicker *ngIf="false"></bs-timepicker>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsCurrentDateViewComponent {
}
BsCurrentDateViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-current-date',
                template: `<div class="current-timedate"><span>{{ title }}</span></div>`
            }] }
];
/** @nocollapse */
BsCurrentDateViewComponent.propDecorators = {
    "title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsCustomDatesViewComponent {
}
BsCustomDatesViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-custom-date-view',
                template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges">{{ range.label }}</button>
      <button *ngIf="isCustomRangeShown">Custom Range</button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BsCustomDatesViewComponent.propDecorators = {
    "isCustomRangeShown": [{ type: Input },],
    "ranges": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerDayDecoratorComponent {
    /**
     * @param {?} _config
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
    }
}
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
                template: `{{ day.label }}`
            }] }
];
/** @nocollapse */
BsDatepickerDayDecoratorComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
];
BsDatepickerDayDecoratorComponent.propDecorators = {
    "day": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
BsNavigationDirection[BsNavigationDirection.UP] = "UP";
BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerNavigationViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    navTo(down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    }
    /**
     * @param {?} viewMode
     * @return {?}
     */
    view(viewMode) {
        this.onViewMode.emit(viewMode);
    }
}
BsDatepickerNavigationViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-datepicker-navigation-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button class="previous"
            [disabled]="calendar.disableLeftArrow"
            [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
            (click)="navTo(true)"><span>&lsaquo;</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

    <button class="current"
            *ngIf="calendar.monthTitle"
            (click)="view('month')"
    ><span>{{ calendar.monthTitle }}</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

    <button class="current" (click)="view('year')"
    ><span>{{ calendar.yearTitle }}</span></button>

    &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

    <button class="next"
            [disabled]="calendar.disableRightArrow"
            [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
            (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
  `
            }] }
];
/** @nocollapse */
BsDatepickerNavigationViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaysCalendarViewComponent {
    /**
     * @param {?} _config
     */
    constructor(_config) {
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
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectDay(event) {
        this.onSelect.emit(event);
    }
    /**
     * @param {?} week
     * @return {?}
     */
    selectWeek(week) {
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
        const /** @type {?} */ selectedDay = week.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        this.onSelect.emit(selectedDay);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    weekHoverHandler(cell, isHovered) {
        if (!this._config.selectWeek) {
            return;
        }
        const /** @type {?} */ hasActiveDays = cell.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverDay(cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell, isHovered });
    }
}
BsDaysCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-days-calendar-view',
                // changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
        <tr>
          <!--if show weeks-->
          <th *ngIf="options.showWeekNumbers"></th>
          <th *ngFor="let weekday of calendar.weekdays; let i = index"
              aria-label="weekday">{{ calendar.weekdays[i] }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let week of calendar.weeks; let i = index">
          <td class="week" [class.active-week]="isWeekHovered"  *ngIf="options.showWeekNumbers">
            <span
                (click)="selectWeek(week)"
                (mouseenter)="weekHoverHandler(week, true)"
                (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
          </td>
          <td *ngFor="let day of week.days" role="gridcell">
          <span bsDatepickerDayDecorator
                [day]="day"
                (click)="selectDay(day)"
                (mouseenter)="hoverDay(day, true)"
                (mouseleave)="hoverDay(day, false)">{{ day.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>

    </bs-calendar-layout>
  `
            }] }
];
/** @nocollapse */
BsDaysCalendarViewComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
];
BsDaysCalendarViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "options": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
    "onSelect": [{ type: Output },],
    "onHover": [{ type: Output },],
    "onHoverWeek": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsMonthCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    }
    /**
     * @param {?} month
     * @return {?}
     */
    viewMonth(month) {
        this.onSelect.emit(month);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverMonth(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsMonthCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-month-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="months">
        <tbody>
        <tr *ngFor="let row of calendar.months">
          <td *ngFor="let month of row" role="gridcell"
              (click)="viewMonth(month)"
              (mouseenter)="hoverMonth(month, true)"
              (mouseleave)="hoverMonth(month, false)"
              [class.disabled]="month.isDisabled"
              [class.is-highlighted]="month.isHovered">
            <span>{{ month.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsTimepickerViewComponent {
    constructor() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
}
BsTimepickerViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-timepicker',
                template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase">+</button>
      </div>
      <button class="switch-time-format">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsYearsCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    }
    /**
     * @param {?} year
     * @return {?}
     */
    viewYear(year) {
        this.onSelect.emit(year);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverYear(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsYearsCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-years-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="years">
        <tbody>
        <tr *ngFor="let row of calendar.years">
          <td *ngFor="let year of row" role="gridcell"
              (click)="viewYear(year)"
              (mouseenter)="hoverYear(year, true)"
              (mouseleave)="hoverYear(year, false)"
              [class.disabled]="year.isDisabled"
              [class.is-highlighted]="year.isHovered">
            <span>{{ year.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _exports = [
    BsDatepickerContainerComponent,
    BsDaterangepickerContainerComponent,
    BsDatepickerInlineContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerInputDirective,
    BsDaterangepickerDirective,
    BsDatepickerInlineDirective
];
class BsDatepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
BsDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    BsDatepickerDayDecoratorComponent,
                    BsCurrentDateViewComponent,
                    BsDatepickerNavigationViewComponent,
                    BsTimepickerViewComponent,
                    BsCalendarLayoutComponent,
                    BsDaysCalendarViewComponent,
                    BsMonthCalendarViewComponent,
                    BsYearsCalendarViewComponent,
                    BsCustomDatesViewComponent,
                    ..._exports
                ],
                entryComponents: [
                    BsDatepickerContainerComponent,
                    BsDaterangepickerContainerComponent,
                    BsDatepickerInlineContainerComponent
                ],
                exports: _exports
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DateFormatter {
    /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    format(date, format, locale) {
        return formatDate(date, format, locale);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatePickerInnerComponent {
    constructor() {
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
    /**
     * @return {?}
     */
    get activeDate() {
        return this._activeDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // todo: use date for unique value
        this.uniqueId = `datepicker--${Math.floor(Math.random() * 10000)}`;
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes["activeDate"]);
    }
    /**
     * @param {?} activeDate
     * @return {?}
     */
    checkIfActiveDateGotUpdated(activeDate) {
        if (activeDate && !activeDate.firstChange) {
            const /** @type {?} */ previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setCompareHandler(handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    compare(date1, date2) {
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
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setRefreshViewHandler(handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    }
    /**
     * @return {?}
     */
    refreshView() {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    dateFilter(date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    }
    /**
     * @param {?} dateObject
     * @return {?}
     */
    isActive(dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    createDateObject(date, format) {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    }
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    split(arr, size) {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    fixTimeZone(date) {
        const /** @type {?} */ hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    }
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    select(date, isManual = true) {
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
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    move(direction) {
        /* tslint:disable-next-line: no-any*/
        let /** @type {?} */ expectedStep;
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
            const /** @type {?} */ year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            const /** @type {?} */ month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    }
    /**
     * @param {?} _direction
     * @return {?}
     */
    toggleMode(_direction) {
        const /** @type {?} */ direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getCustomClassForDate(date) {
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        const /** @type {?} */ customClassObject = this.customClass.find((customClass) => {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    }
    /**
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    compareDateDisabled(date1Disabled, date2) {
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        let /** @type {?} */ isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach((disabledDate) => {
                if (this.compareDateDisabled(disabledDate, date) === 0) {
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
    }
}
DatePickerInnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-inner',
                template: `
    <!--&lt;!&ndash;ng-keydown="keydown($event)"&ndash;&gt;-->
    <div *ngIf="datepickerMode" class="well well-sm bg-faded p-a card" role="application" >
      <ng-content></ng-content>
    </div>
  `
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatepickerConfig {
    constructor() {
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
}
DatepickerConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};
/* tslint:enable:component-selector-name component-selector-type */
class DatePickerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
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
    /**
     * currently active date
     * @return {?}
     */
    get activeDate() {
        return this._activeDate || this._now;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
    }
    /**
     * @return {?}
     */
    configureOptions() {
        Object.assign(this, this.config);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onUpdate(event) {
        this.activeDate = event;
        this.onChange(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectionDone(event) {
        this.selectionDone.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onActiveDateChange(event) {
        this.activeDateChange.emit(event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
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
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker',
                template: `
    <datepicker-inner [activeDate]="activeDate"
                      (update)="onUpdate($event)"
                      [locale]="config.locale"
                      [datepickerMode]="datepickerMode"
                      [initDate]="initDate"
                      [minDate]="minDate"
                      [maxDate]="maxDate"
                      [minMode]="minMode"
                      [maxMode]="maxMode"
                      [showWeeks]="showWeeks"
                      [formatDay]="formatDay"
                      [formatMonth]="formatMonth"
                      [formatYear]="formatYear"
                      [formatDayHeader]="formatDayHeader"
                      [formatDayTitle]="formatDayTitle"
                      [formatMonthTitle]="formatMonthTitle"
                      [startingDay]="startingDay"
                      [yearRange]="yearRange"
                      [customClass]="customClass"
                      [dateDisabled]="dateDisabled"
                      [dayDisabled]="dayDisabled"
                      [onlyCurrentMonth]="onlyCurrentMonth"
                      [shortcutPropagation]="shortcutPropagation"
                      [monthColLimit]="monthColLimit"
                      [yearColLimit]="yearColLimit"
                      (selectionDone)="onSelectionDone($event)"
                      (activeDateChange)="onActiveDateChange($event)">
      <daypicker tabindex="0"></daypicker>
      <monthpicker tabindex="0"></monthpicker>
      <yearpicker tabindex="0"></yearpicker>
    </datepicker-inner>
    `,
                providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
DatePickerComponent.ctorParameters = () => [
    { type: DatepickerConfig, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DayPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ year = this.activeDate.getFullYear();
            const /** @type {?} */ month = this.activeDate.getMonth();
            const /** @type {?} */ firstDayOfMonth = new Date(year, month, 1);
            const /** @type {?} */ difference = this.startingDay - firstDayOfMonth.getDay();
            const /** @type {?} */ numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            const /** @type {?} */ firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            const /** @type {?} */ _days = self.getDates(firstDate, 42);
            const /** @type {?} */ days = [];
            for (let /** @type {?} */ i = 0; i < 42; i++) {
                const /** @type {?} */ _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (let /** @type {?} */ j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                const /** @type {?} */ thursdayIndex = (4 + 7 - this.startingDay) % 7;
                const /** @type {?} */ numWeeks = self.rows.length;
                for (let /** @type {?} */ curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            const /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            const /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    }
    /**
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    getDates(startDate, n) {
        const /** @type {?} */ dates = new Array(n);
        let /** @type {?} */ current = new Date(startDate.getTime());
        let /** @type {?} */ i = 0;
        let /** @type {?} */ date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getISO8601WeekNumber(date) {
        const /** @type {?} */ checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        const /** @type {?} */ time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    }
}
DayPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'daypicker',
                template: `
<table *ngIf="datePicker.datepickerMode === 'day'" role="grid" [attr.aria-labelledby]="datePicker.uniqueId + '-title'" aria-activedescendant="activeDateId">
  <thead>
    <tr>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">‹</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">&lt;</button>
      </th>
      <th [attr.colspan]="5 + (datePicker.showWeeks ? 1 : 0)">
        <button [id]="datePicker.uniqueId + '-title'"
                type="button" class="btn btn-default btn-secondary btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === datePicker.maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong>
        </button>
      </th>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">›</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">&gt;
        </button>
      </th>
    </tr>
    <tr>
      <th *ngIf="datePicker.showWeeks"></th>
      <th *ngFor="let labelz of labels" class="text-center">
        <small aria-label="labelz.full"><b>{{ labelz.abbr }}</b></small>
      </th>
    </tr>
  </thead>
  <tbody>
    <ng-template ngFor [ngForOf]="rows" let-rowz="$implicit" let-index="index">
      <tr *ngIf="!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)">
        <td *ngIf="datePicker.showWeeks" class="h6" class="text-center">
          <em>{{ weekNumbers[index] }}</em>
        </td>
        <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [id]="dtz.uid">
          <button type="button" style="min-width:100%;" class="btn btn-sm {{dtz.customClass}}"
                  *ngIf="!(datePicker.onlyCurrentMonth && dtz.secondary)"
                  [ngClass]="{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}"
                  [disabled]="dtz.disabled"
                  (click)="datePicker.select(dtz.date)" tabindex="-1">
            <span [ngClass]="{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
          </button>
        </td>
      </tr>
    </ng-template>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-secondary {
      color: #292b2c;
      background-color: #fff;
      border-color: #ccc;
    }
    :host .btn-info .text-muted {
      color: #292b2c !important;
    }
  `]
            }] }
];
// todo: key events implementation
/** @nocollapse */
DayPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ months = new Array(12);
            const /** @type {?} */ year = this.activeDate.getFullYear();
            let /** @type {?} */ date;
            for (let /** @type {?} */ i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            const /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth());
            const /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    }
}
MonthPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'monthpicker',
                template: `
<table *ngIf="datePicker.datepickerMode==='month'" role="grid">
  <thead>
    <tr>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-left float-left"
                (click)="datePicker.move(-1)" tabindex="-1">‹</button></th>
      <th [attr.colspan]="((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2">
        <button [id]="datePicker.uniqueId + '-title'"
                type="button" class="btn btn-default btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong> 
        </button>
      </th>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-right float-right"
                (click)="datePicker.move(1)" tabindex="-1">›</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let rowz of rows">
      <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [attr.id]="dtz.uid" [ngClass]="dtz.customClass">
        <button type="button" style="min-width:100%;" class="btn btn-default"
                [ngClass]="{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}"
                [disabled]="dtz.disabled"
                (click)="datePicker.select(dtz.date)" tabindex="-1">
          <span [ngClass]="{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-info .text-success {
      color: #fff !important;
    }
  `]
            }] }
];
// todo: key events implementation
/** @nocollapse */
MonthPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class YearPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ years = new Array(this.yearRange);
            let /** @type {?} */ date;
            const /** @type {?} */ start = self.getStartingYear(this.activeDate.getFullYear());
            for (let /** @type {?} */ i = 0; i < this.yearRange; i++) {
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
    }
    /**
     * @param {?} year
     * @return {?}
     */
    getStartingYear(year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    }
}
YearPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'yearpicker',
                template: `
<table *ngIf="datePicker.datepickerMode==='year'" role="grid">
  <thead>
    <tr>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-left float-left"
                (click)="datePicker.move(-1)" tabindex="-1">‹</button>
      </th>
      <th [attr.colspan]="((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2">
        <button [id]="datePicker.uniqueId + '-title'" role="heading"
                type="button" class="btn btn-default btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === datePicker.maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong>
        </button>
      </th>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-right float-right"
                (click)="datePicker.move(1)" tabindex="-1">›</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let rowz of rows">
      <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [attr.id]="dtz.uid">
        <button type="button" style="min-width:100%;" class="btn btn-default"
                [ngClass]="{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}"
                [disabled]="dtz.disabled"
                (click)="datePicker.select(dtz.date)" tabindex="-1">
          <span [ngClass]="{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-info .text-success {
      color: #fff !important;
    }
  `]
            }] }
];
/** @nocollapse */
YearPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BsDatepickerConfig, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, BsDatepickerAbstractComponent as ɵl, BsDatepickerInputDirective as ɵr, BsDaterangepickerInputDirective as ɵs, DatePickerInnerComponent as ɵt, DATEPICKER_CONTROL_VALUE_ACCESSOR as ɵa, BsDatepickerActions as ɵo, BsDatepickerEffects as ɵn, BsDatepickerStore as ɵm, BsCalendarLayoutComponent as ɵf, BsCurrentDateViewComponent as ɵc, BsCustomDatesViewComponent as ɵj, BsDatepickerContainerComponent as ɵk, BsDatepickerDayDecoratorComponent as ɵb, BsDatepickerInlineContainerComponent as ɵq, BsDatepickerNavigationViewComponent as ɵd, BsDaterangepickerContainerComponent as ɵp, BsDaysCalendarViewComponent as ɵg, BsMonthCalendarViewComponent as ɵh, BsTimepickerViewComponent as ɵe, BsYearsCalendarViewComponent as ɵi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kYXRlcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1sb2NhbGUuc2VydmljZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9fZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci91dGlscy9icy1jYWxlbmRhci11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3V0aWxzL21hdHJpeC11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9jYWxjLWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL3ZpZXctbW9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2ZsYWctbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLnJlZHVjZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcmFuZ2VwaWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWNhbGVuZGFyLWxheW91dC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtY3VycmVudC1kYXRlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLW1vbnRocy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLXllYXJzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5tb2R1bGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlLWZvcm1hdHRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RheXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9tb250aHBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci95ZWFycGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZVxufSBmcm9tICcuL21vZGVscyc7XG5cblxuLyoqXG4gKiBGb3IgZGF0ZSByYW5nZSBwaWNrZXIgdGhlcmUgYXJlIGBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZ2Agd2hpY2ggaW5oZXJpdHMgYWxsIHByb3BlcnRpZXMsXG4gKiBleGNlcHQgYGRpc3BsYXlNb250aHNgLCBmb3IgcmFuZ2UgcGlja2VyIGl0IGRlZmF1bHQgdG8gYDJgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb25maWcgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XG4gIHZhbHVlPzogRGF0ZSB8IERhdGVbXTtcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZhdWx0IG1pbiBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWF4IGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1heERhdGU/OiBEYXRlO1xuXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xuICAvKipcbiAgICogTWFrZXMgZGF0ZXMgZnJvbSBvdGhlciBtb250aHMgYWN0aXZlXG4gICAqL1xuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1ha2VzIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzIGFjdGl2ZVxuICAgKi9cbiAgc2VsZWN0V2Vlaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFkZCBjbGFzcyB0byBjdXJyZW50IGRheVxuICAgKi9cbiAgY3VzdG9tVG9kYXlDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogRGVmYXVsdCBtb2RlIGZvciBhbGwgZGF0ZSBwaWNrZXJzXG4gICAqL1xuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XG5cbiAgLyoqIENTUyBjbGFzcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gZGF0ZXBpY2tlciBjb250YWluZXIsXG4gICAqIHVzdWFsbHkgdXNlZCB0byBzZXQgY29sb3IgdGhlbWVcbiAgICovXG4gIGNvbnRhaW5lckNsYXNzID0gJ3RoZW1lLWdyZWVuJztcblxuICAvLyBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xuICBkaXNwbGF5TW9udGhzID0gMTtcbiAgLyoqXG4gICAqIEFsbG93cyB0byBoaWRlIHdlZWsgbnVtYmVycyBpbiBkYXRlcGlja2VyXG4gICAqL1xuICBzaG93V2Vla051bWJlcnMgPSB0cnVlO1xuXG4gIGRhdGVJbnB1dEZvcm1hdCA9ICdMJztcbiAgLy8gcmFuZ2UgcGlja2VyXG4gIHJhbmdlU2VwYXJhdG9yID0gJyAtICc7XG4gIC8qKlxuICAgKiBEYXRlIGZvcm1hdCBmb3IgZGF0ZSByYW5nZSBpbnB1dCBmaWVsZFxuICAgKi9cbiAgcmFuZ2VJbnB1dEZvcm1hdCA9ICdMJztcblxuICAvLyBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuICBtb250aFRpdGxlID0gJ01NTU0nO1xuICB5ZWFyVGl0bGUgPSAnWVlZWSc7XG4gIGRheUxhYmVsID0gJ0QnO1xuICBtb250aExhYmVsID0gJ01NTU0nO1xuICB5ZWFyTGFiZWwgPSAnWVlZWSc7XG4gIHdlZWtOdW1iZXJzID0gJ3cnO1xufVxuIiwiLy8gZGF0ZXBpY2tlciBjb250YWluZXIgY29tcG9uZW50XG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlcyB9IGZyb20gJy4uL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgV2Vla1ZpZXdNb2RlbCxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQge1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBpc090aGVyTW9udGhzQWN0aXZlOiBib29sZWFuO1xuXG4gIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzO1xuICBfY3VzdG9tUmFuZ2VzRmlzaDogQnNDdXN0b21EYXRlc1tdID0gW107XG5cbiAgc2V0IG1pbkRhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1pbkRhdGUodmFsdWUpO1xuICB9XG5cbiAgc2V0IG1heERhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1heERhdGUodmFsdWUpO1xuICB9XG4gIHNldCBkYXlzRGlzYWJsZWQodmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXlzRGlzYWJsZWQodmFsdWUpO1xuICB9XG4gIHNldCBkYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVzRGlzYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERpc2FibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHZpZXdNb2RlOiBPYnNlcnZhYmxlPEJzRGF0ZXBpY2tlclZpZXdNb2RlPjtcbiAgZGF5c0NhbGVuZGFyOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIHllYXJzQ2FsZW5kYXI6IE9ic2VydmFibGU8WWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgb3B0aW9uczogT2JzZXJ2YWJsZTxEYXRlcGlja2VyUmVuZGVyT3B0aW9ucz47XG5cbiAgc2V0Vmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7fVxuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCB7fVxuXG4gIGRheUhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgd2Vla0hvdmVySGFuZGxlcihldmVudDogV2Vla1ZpZXdNb2RlbCk6IHZvaWQge31cblxuICBtb250aEhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgeWVhckhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge31cblxuICBtb250aFNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cblxuICB5ZWFyU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIF9zdG9wUHJvcGFnYXRpb24oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNWaWV3TmF2aWdhdGlvbkV2ZW50LFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckFjdGlvbnMge1xuICBzdGF0aWMgcmVhZG9ubHkgQ0FMQ1VMQVRFID0gJ1tkYXRlcGlja2VyXSBjYWxjdWxhdGUgZGF0ZXMgbWF0cml4JztcbiAgc3RhdGljIHJlYWRvbmx5IEZPUk1BVCA9ICdbZGF0ZXBpY2tlcl0gZm9ybWF0IGRhdGVwaWNrZXIgdmFsdWVzJztcbiAgc3RhdGljIHJlYWRvbmx5IEZMQUcgPSAnW2RhdGVwaWNrZXJdIHNldCBmbGFncyc7XG4gIHN0YXRpYyByZWFkb25seSBTRUxFQ1QgPSAnW2RhdGVwaWNrZXJdIHNlbGVjdCBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX09GRlNFVCA9ICdbZGF0ZXBpY2tlcl0gc2hpZnQgdmlldyBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX1RPID0gJ1tkYXRlcGlja2VyXSBjaGFuZ2UgdmlldyBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9PUFRJT05TID0gJ1tkYXRlcGlja2VyXSB1cGRhdGUgcmVuZGVyIG9wdGlvbnMnO1xuICBzdGF0aWMgcmVhZG9ubHkgSE9WRVIgPSAnW2RhdGVwaWNrZXJdIGhvdmVyIGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1ZJRVdNT0RFID0gJ1tkYXRlcGlja2VyXSBzd2l0Y2ggdmlldyBtb2RlJztcblxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01JTl9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWluIGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01BWF9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWF4IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBWVNESVNBQkxFRCA9ICdbZGF0ZXBpY2tlcl0gc2V0IGRheXMgZGlzYWJsZWQnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBVEVTRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcyBkaXNhYmxlZCc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfSVNfRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBpcyBkaXNhYmxlZCc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9MT0NBTEUgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcGlja2VyIGxvY2FsZSc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVF9SQU5HRSA9ICdbZGF0ZXJhbmdlcGlja2VyXSBzZWxlY3QgZGF0ZXMgcmFuZ2UnO1xuXG4gIGNhbGN1bGF0ZSgpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFIH07XG4gIH1cblxuICBmb3JtYXQoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVCB9O1xuICB9XG5cbiAgZmxhZygpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRyB9O1xuICB9XG5cbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVCxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREUsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgbmF2aWdhdGVTdGVwKHN0ZXA6IFRpbWVVbml0KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9PRkZTRVQsXG4gICAgICBwYXlsb2FkOiBzdGVwXG4gICAgfTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TLFxuICAgICAgcGF5bG9hZDogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0UsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBob3ZlckRheShldmVudDogQ2VsbEhvdmVyRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSLFxuICAgICAgcGF5bG9hZDogZXZlbnQuaXNIb3ZlcmVkID8gZXZlbnQuY2VsbC5kYXRlIDogbnVsbFxuICAgIH07XG4gIH1cblxuICBtaW5EYXRlKGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURSxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgbWF4RGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEUsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIGRheXNEaXNhYmxlZChkYXlzOiBudW1iZXJbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBWVNESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRheXNcbiAgICB9O1xuICB9XG5cbiAgZGF0ZXNEaXNhYmxlZChkYXRlczogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfREFURVNESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRhdGVzXG4gICAgfTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9JU19ESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0xPQ0FMRSxcbiAgICAgIHBheWxvYWQ6IGxvY2FsZVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNMb2NhbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGVmYXVsdExvY2FsZSA9ICdlbic7XG4gIHByaXZhdGUgX2xvY2FsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aGlzLl9kZWZhdWx0TG9jYWxlKTtcbiAgcHJpdmF0ZSBfbG9jYWxlQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9sb2NhbGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZ2V0IGxvY2FsZSgpOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlLmdldFZhbHVlKCk7XG4gIH1cblxuICB1c2UobG9jYWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobG9jYWxlID09PSB0aGlzLmN1cnJlbnRMb2NhbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGUubmV4dChsb2NhbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gIHZpZXdNb2RlOiBPYnNlcnZhYmxlPEJzRGF0ZXBpY2tlclZpZXdNb2RlPjtcbiAgZGF5c0NhbGVuZGFyOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIHllYXJzQ2FsZW5kYXI6IE9ic2VydmFibGU8WWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgb3B0aW9uczogT2JzZXJ2YWJsZTxEYXRlcGlja2VyUmVuZGVyT3B0aW9ucz47XG5cbiAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlO1xuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSkge31cblxuICBpbml0KF9ic0RhdGVwaWNrZXJTdG9yZTogQnNEYXRlcGlja2VyU3RvcmUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZSA9IF9ic0RhdGVwaWNrZXJTdG9yZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIHNldHRlcnMgKi9cblxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0KHZhbHVlKSk7XG4gIH1cblxuICBzZXRSYW5nZVZhbHVlKHZhbHVlOiBEYXRlW10pOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHZhbHVlKSk7XG4gIH1cblxuICBzZXRNaW5EYXRlKHZhbHVlOiBEYXRlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5taW5EYXRlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE1heERhdGUodmFsdWU6IERhdGUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm1heERhdGUodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0RGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF5c0Rpc2FibGVkKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERhdGVzRGlzYWJsZWQodmFsdWU6IERhdGVbXSkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF0ZXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiBTZXQgcmVuZGVyaW5nIG9wdGlvbnMgKi9cbiAgc2V0T3B0aW9ucyhfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb25zdCBfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe2xvY2FsZTogdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlfSwgX2NvbmZpZyk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRPcHRpb25zKF9vcHRpb25zKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiB2aWV3IHRvIG1vZGUgYmluZGluZ3MgKi9cbiAgc2V0QmluZGluZ3MoY29udGFpbmVyOiBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIGNvbnRhaW5lci5kYXlzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihtb250aHMgPT4gISFtb250aHMpXG4gICAgICApO1xuXG4gICAgLy8gbW9udGggY2FsZW5kYXJcbiAgICBjb250YWluZXIubW9udGhzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzQ2FsZW5kYXIpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKG1vbnRocyA9PiAhIW1vbnRocylcbiAgICAgICk7XG5cbiAgICAvLyB5ZWFyIGNhbGVuZGFyXG4gICAgY29udGFpbmVyLnllYXJzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS55ZWFyc0NhbGVuZGFyRmxhZ2dlZClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoeWVhcnMgPT4gISF5ZWFycylcbiAgICAgICk7XG5cbiAgICBjb250YWluZXIudmlld01vZGUgPSB0aGlzLl9zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmlldy5tb2RlKTtcblxuICAgIGNvbnRhaW5lci5vcHRpb25zID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2hvd1dlZWtOdW1iZXJzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChzaG93V2Vla051bWJlcnMgPT4gKHtzaG93V2Vla051bWJlcnN9KSlcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBldmVudCBoYW5kbGVycyAqL1xuICBzZXRFdmVudEhhbmRsZXJzKGNvbnRhaW5lcjogQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb250YWluZXIuc2V0Vmlld01vZGUgPSAoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmNoYW5nZVZpZXdNb2RlKGV2ZW50KSk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5uYXZpZ2F0ZVRvID0gKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVN0ZXAoZXZlbnQuc3RlcCkpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIuZGF5SG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgX2NlbGwgPSBldmVudC5jZWxsIGFzIERheVZpZXdNb2RlbDtcbiAgICAgIGlmIChfY2VsbC5pc090aGVyTW9udGggfHwgX2NlbGwuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaG92ZXJEYXkoZXZlbnQpKTtcbiAgICAgIF9jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLm1vbnRoSG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci55ZWFySG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5tb250aFNlbGVjdEhhbmRsZXIgPSAoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmlzRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgbW9udGg6IGdldE1vbnRoKGV2ZW50LmRhdGUpLFxuICAgICAgICAgICAgeWVhcjogZ2V0RnVsbFllYXIoZXZlbnQuZGF0ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpZXdNb2RlOiAnZGF5J1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnllYXJTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgIHllYXI6IGdldEZ1bGxZZWFyKGV2ZW50LmRhdGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aWV3TW9kZTogJ21vbnRoJ1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWdpc3RlckRhdGVwaWNrZXJTaWRlRWZmZWN0cygpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmlldykuc3Vic2NyaWJlKHZpZXcgPT4ge1xuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmNhbGN1bGF0ZSgpKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGZvcm1hdCBjYWxlbmRhciB2YWx1ZXMgb24gbW9udGggbW9kZWwgY2hhbmdlXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5tb250aHNNb2RlbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKG1vbnRoTW9kZWwgPT4gISFtb250aE1vZGVsKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobW9udGggPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mb3JtYXQoKSkpXG4gICAgKTtcblxuICAgIC8vIGZsYWcgZGF5IHZhbHVlc1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZm9ybWF0dGVkTW9udGhzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIobW9udGggPT4gISFtb250aClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKG1vbnRoID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gZmxhZyBkYXkgdmFsdWVzXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3RlZERhdGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihzZWxlY3RlZERhdGUgPT4gISFzZWxlY3RlZERhdGUpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZERhdGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBmbGFnIGZvciBkYXRlIHJhbmdlIHBpY2tlclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWRSYW5nZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHNlbGVjdGVkUmFuZ2UgPT4gISFzZWxlY3RlZFJhbmdlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWRSYW5nZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIG1vbnRoc0NhbGVuZGFyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5tb250aHNDYWxlbmRhcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIHllYXJzIGNhbGVuZGFyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS55ZWFyc0NhbGVuZGFyTW9kZWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihzdGF0ZSA9PiAhIXN0YXRlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBvbiBob3ZlclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuaG92ZXJlZERhdGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihob3ZlcmVkRGF0ZSA9PiAhIWhvdmVyZWREYXRlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoaG92ZXJlZERhdGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2VcbiAgICAgICAgLnN1YnNjcmliZShsb2NhbGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRMb2NhbGUobG9jYWxlKSkpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIE1vbnRoVmlld09wdGlvbnNcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNb250aE9wdGlvbnM6IE1vbnRoVmlld09wdGlvbnMgPSB7XG4gIHdpZHRoOiA3LFxuICBoZWlnaHQ6IDZcbn07XG4iLCJpbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJNb2RlbCxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgTW9udGhWaWV3T3B0aW9ucyxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vbnRoT3B0aW9ucyB9IGZyb20gJy4vX2RlZmF1bHRzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBCc0RhdGVwaWNrZXJWaWV3U3RhdGUge1xuICBkYXRlOiBEYXRlO1xuICBtb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcbn1cblxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlclN0YXRlXG4gIGltcGxlbWVudHMgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcbiAgLy8gZGF0ZSBwaWNrZXJcbiAgc2VsZWN0ZWREYXRlPzogRGF0ZTtcbiAgLy8gZGF0ZXJhbmdlIHBpY2tlclxuICBzZWxlY3RlZFJhbmdlPzogRGF0ZVtdO1xuXG4gIC8vIGluaXRpYWwgZGF0ZSBvZiBjYWxlbmRhciwgdG9kYXkgYnkgZGVmYXVsdFxuICB2aWV3OiBCc0RhdGVwaWNrZXJWaWV3U3RhdGU7XG5cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIC8vIGJvdW5kc1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgbWF4RGF0ZT86IERhdGU7XG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XG5cbiAgaG92ZXJlZERhdGU/OiBEYXRlO1xuICBob3ZlcmVkTW9udGg/OiBEYXRlO1xuICBob3ZlcmVkWWVhcj86IERhdGU7XG5cbiAgLy8gZGF5cyBjYWxlbmRhclxuICBtb250aHNNb2RlbD86IERheXNDYWxlbmRhck1vZGVsW107XG4gIGZvcm1hdHRlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBmbGFnZ2VkTW9udGhzPzogRGF5c0NhbGVuZGFyVmlld01vZGVsW107XG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcblxuICAvLyBtb250aHMgY2FsZW5kYXJcbiAgbW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBmbGFnZ2VkTW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuXG4gIC8vIHllYXJzIGNhbGVuZGFyXG4gIHllYXJzQ2FsZW5kYXJNb2RlbD86IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgeWVhcnNDYWxlbmRhckZsYWdnZWQ/OiBZZWFyc0NhbGVuZGFyVmlld01vZGVsW107XG5cbiAgLy8gb3B0aW9uc1xuICBtb250aFZpZXdPcHRpb25zOiBNb250aFZpZXdPcHRpb25zO1xuXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIHNob3dXZWVrTnVtYmVycz86IGJvb2xlYW47XG4gIGRpc3BsYXlNb250aHM/OiBudW1iZXI7XG5cbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgbW9udGhUaXRsZTogc3RyaW5nO1xuICB5ZWFyVGl0bGU6IHN0cmluZztcblxuICBkYXlMYWJlbDogc3RyaW5nO1xuICBtb250aExhYmVsOiBzdHJpbmc7XG4gIHllYXJMYWJlbDogc3RyaW5nO1xuXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XG59XG5cbmNvbnN0IF9pbml0aWFsVmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlID0geyBkYXRlOiBuZXcgRGF0ZSgpLCBtb2RlOiAnZGF5JyB9O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICBuZXcgQnNEYXRlcGlja2VyQ29uZmlnKCksXG4gIHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgdmlldzogX2luaXRpYWxWaWV3LFxuICAgIHNlbGVjdGVkUmFuZ2U6IFtdLFxuICAgIG1vbnRoVmlld09wdGlvbnM6IGRlZmF1bHRNb250aE9wdGlvbnNcbiAgfVxuKTtcbiIsImltcG9ydCB7XG4gIGdldERheSxcbiAgaXNGaXJzdERheU9mV2VlayxcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIHNoaWZ0RGF0ZSxcbiAgZW5kT2YsXG4gIHN0YXJ0T2YsXG4gIGlzU2FtZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyKGRhdGU6IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgZmlyc3REYXlPZldlZWs/OiBudW1iZXIgfSk6IERhdGUge1xuICBpZiAoaXNGaXJzdERheU9mV2VlayhkYXRlLCBvcHRpb25zLmZpcnN0RGF5T2ZXZWVrKSkge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgY29uc3Qgd2Vla0RheSA9IGdldERheShkYXRlKTtcbiAgY29uc3Qgb2Zmc2V0ID0gY2FsY3VsYXRlRGF0ZU9mZnNldCh3ZWVrRGF5LCBvcHRpb25zLmZpcnN0RGF5T2ZXZWVrKTtcblxuICByZXR1cm4gc2hpZnREYXRlKGRhdGUsIHtkYXk6IC1vZmZzZXR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla2RheTogbnVtYmVyLCBzdGFydGluZ0RheU9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHN0YXJ0aW5nRGF5T2Zmc2V0ID09PSAwKSB7XG4gICAgcmV0dXJuIHdlZWtkYXk7XG4gIH1cblxuICBjb25zdCBvZmZzZXQgPSB3ZWVrZGF5IC0gc3RhcnRpbmdEYXlPZmZzZXQgJSA3O1xuXG4gIHJldHVybiBvZmZzZXQgPCAwID8gb2Zmc2V0ICsgNyA6IG9mZnNldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9udGhEaXNhYmxlZChkYXRlOiBEYXRlLCBtaW46IERhdGUsIG1heDogRGF0ZSk6IGJvb2xlYW4ge1xuICBjb25zdCBtaW5Cb3VuZCA9IG1pbiAmJiBpc0JlZm9yZShlbmRPZihkYXRlLCAnbW9udGgnKSwgbWluLCAnZGF5Jyk7XG4gIGNvbnN0IG1heEJvdW5kID0gbWF4ICYmIGlzQWZ0ZXIoc3RhcnRPZihkYXRlLCAnbW9udGgnKSwgbWF4LCAnZGF5Jyk7XG5cbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ3llYXInKSwgbWluLCAnZGF5Jyk7XG4gIGNvbnN0IG1heEJvdW5kID0gbWF4ICYmIGlzQWZ0ZXIoc3RhcnRPZihkYXRlLCAneWVhcicpLCBtYXgsICdkYXknKTtcblxuICByZXR1cm4gbWluQm91bmQgfHwgbWF4Qm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Rpc2FibGVkRGF0ZShkYXRlOiBEYXRlLCBkYXRlc0Rpc2FibGVkOiBEYXRlW10pOiBib29sZWFuIHtcbiAgaWYgKGRhdGVzRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCAhZGF0ZXNEaXNhYmxlZCB8fCAhZGF0ZXNEaXNhYmxlZC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZXNEaXNhYmxlZC5zb21lKChkYXRlRGlzYWJsZWQ6IERhdGUpID0+IGlzU2FtZShkYXRlLCBkYXRlRGlzYWJsZWQsICdkYXRlJykpO1xufVxuIiwiaW1wb3J0IHsgVGltZVVuaXQsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZU1hdHJpeENiPFQ+ID0gKGRhdGU6IERhdGUpID0+IFQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0cml4T3B0aW9ucyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBpbml0aWFsRGF0ZTogRGF0ZTtcbiAgc2hpZnQ6IFRpbWVVbml0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWF0cml4PFQ+KFxuICBvcHRpb25zOiBNYXRyaXhPcHRpb25zLFxuICBmbjogQ3JlYXRlTWF0cml4Q2I8VD5cbik6IFRbXVtdIHtcbiAgbGV0IHByZXZWYWx1ZSA9IG9wdGlvbnMuaW5pdGlhbERhdGU7XG4gIGNvbnN0IG1hdHJpeDogVFtdW10gPSBuZXcgQXJyYXkob3B0aW9ucy5oZWlnaHQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuaGVpZ2h0OyBpKyspIHtcbiAgICBtYXRyaXhbaV0gPSBuZXcgQXJyYXkob3B0aW9ucy53aWR0aCk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zLndpZHRoOyBqKyspIHtcbiAgICAgIG1hdHJpeFtpXVtqXSA9IGZuKHByZXZWYWx1ZSk7XG4gICAgICBwcmV2VmFsdWUgPSBzaGlmdERhdGUocHJldlZhbHVlLCBvcHRpb25zLnNoaWZ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0cml4O1xufVxuIiwiLy8gdXNlciBhbmQgbW9kZWwgaW5wdXQgc2hvdWxkIGhhbmRsZSBwYXJzaW5nIGFuZCB2YWxpZGF0aW5nIGlucHV0IHZhbHVlc1xuLy8gc2hvdWxkIGFjY2VwdCBzb21lIG9wdGlvbnNcbi8vIHRvZG86IHNwbGl0IG91dCBmb3JtYXR0aW5nXG5pbXBvcnQgeyBEYXlzQ2FsZW5kYXJNb2RlbCwgTW9udGhWaWV3T3B0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBnZXRGaXJzdERheU9mTW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEYXlzQ2FsZW5kYXIoXG4gIHN0YXJ0aW5nRGF0ZTogRGF0ZSxcbiAgb3B0aW9uczogTW9udGhWaWV3T3B0aW9uc1xuKTogRGF5c0NhbGVuZGFyTW9kZWwge1xuICBjb25zdCBmaXJzdERheSA9IGdldEZpcnN0RGF5T2ZNb250aChzdGFydGluZ0RhdGUpO1xuICBjb25zdCBpbml0aWFsRGF0ZSA9IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihmaXJzdERheSwgb3B0aW9ucyk7XG5cbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHtcbiAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcbiAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxuICAgIGluaXRpYWxEYXRlLFxuICAgIHNoaWZ0OiB7IGRheTogMSB9XG4gIH07XG4gIGNvbnN0IGRheXNNYXRyaXggPSBjcmVhdGVNYXRyaXg8RGF0ZT4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiBkYXRlKTtcblxuICByZXR1cm4ge1xuICAgIGRheXNNYXRyaXgsXG4gICAgbW9udGg6IGZpcnN0RGF5XG4gIH07XG59XG4iLCJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0TG9jYWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERheXNDYWxlbmRhcihkYXlzQ2FsZW5kYXI6IERheXNDYWxlbmRhck1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhJbmRleDogbnVtYmVyKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgIG1vbnRoVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICBkYXlzQ2FsZW5kYXIubW9udGgsXG4gICAgICBmb3JtYXRPcHRpb25zLm1vbnRoVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgd2Vla051bWJlcnM6IGdldFdlZWtOdW1iZXJzKFxuICAgICAgZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgsXG4gICAgICBmb3JtYXRPcHRpb25zLndlZWtOdW1iZXJzLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHdlZWtkYXlzOiBnZXRTaGlmdGVkV2Vla2RheXMoZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgIHdlZWtzOiBkYXlzQ2FsZW5kYXIuZGF5c01hdHJpeC5tYXAoKHdlZWs6IERhdGVbXSwgd2Vla0luZGV4OiBudW1iZXIpID0+ICh7XG4gICAgICBkYXlzOiB3ZWVrLm1hcCgoZGF0ZTogRGF0ZSwgZGF5SW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5kYXlMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgICAgICBtb250aEluZGV4LFxuICAgICAgICB3ZWVrSW5kZXgsXG4gICAgICAgIGRheUluZGV4XG4gICAgICB9KSlcbiAgICB9KSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtOdW1iZXJzKGRheXNNYXRyaXg6IERhdGVbXVtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gZGF5c01hdHJpeC5tYXAoXG4gICAgKGRheXM6IERhdGVbXSkgPT4gKGRheXNbMF0gPyBmb3JtYXREYXRlKGRheXNbMF0sIGZvcm1hdCwgbG9jYWxlKSA6ICcnKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hpZnRlZFdlZWtkYXlzKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSk7XG4gIGNvbnN0IHdlZWtkYXlzID0gX2xvY2FsZS53ZWVrZGF5c1Nob3J0KCkgYXMgc3RyaW5nW107XG4gIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gX2xvY2FsZS5maXJzdERheU9mV2VlaygpO1xuXG4gIHJldHVybiBbLi4ud2Vla2RheXMuc2xpY2UoZmlyc3REYXlPZldlZWspLCAuLi53ZWVrZGF5cy5zbGljZSgwLCBmaXJzdERheU9mV2VlayldO1xufVxuIiwiaW1wb3J0IHtcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIFdlZWtWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuaW1wb3J0IHtcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIGlzRGlzYWJsZWREYXksXG4gIGlzU2FtZURheSxcbiAgaXNTYW1lTW9udGgsXG4gIHNoaWZ0RGF0ZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzRGlzYWJsZWREYXRlIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgZGF5c0Rpc2FibGVkOiBudW1iZXJbXTtcbiAgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xuICBob3ZlcmVkRGF0ZTogRGF0ZTtcbiAgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBzZWxlY3RlZFJhbmdlOiBEYXRlW107XG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcbiAgbW9udGhJbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhZ0RheXNDYWxlbmRhcihcbiAgZm9ybWF0dGVkTW9udGg6IERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgb3B0aW9uczogRmxhZ0RheXNDYWxlbmRhck9wdGlvbnNcbik6IERheXNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGZvcm1hdHRlZE1vbnRoLndlZWtzLmZvckVhY2goKHdlZWs6IFdlZWtWaWV3TW9kZWwpID0+IHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuICAgIHdlZWsuZGF5cy5mb3JFYWNoKChkYXk6IERheVZpZXdNb2RlbCwgZGF5SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gZGF0ZXBpY2tlclxuICAgICAgY29uc3QgaXNPdGhlck1vbnRoID0gIWlzU2FtZU1vbnRoKGRheS5kYXRlLCBmb3JtYXR0ZWRNb250aC5tb250aCk7XG5cbiAgICAgIGNvbnN0IGlzSG92ZXJlZCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcbiAgICAgIC8vIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAgICBjb25zdCBpc1NlbGVjdGlvblN0YXJ0ID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMF0pO1xuICAgICAgY29uc3QgaXNTZWxlY3Rpb25FbmQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSAmJlxuICAgICAgICBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZVsxXSk7XG5cbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgICAoIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWREYXRlKSkgfHxcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCB8fFxuICAgICAgICBpc1NlbGVjdGlvbkVuZDtcblxuICAgICAgY29uc3QgaXNJblJhbmdlID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNEYXRlSW5SYW5nZShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcblxuICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICBpc0JlZm9yZShkYXkuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCAnZGF5JykgfHxcbiAgICAgICAgaXNBZnRlcihkYXkuZGF0ZSwgb3B0aW9ucy5tYXhEYXRlLCAnZGF5JykgfHxcbiAgICAgICAgaXNEaXNhYmxlZERheShkYXkuZGF0ZSwgb3B0aW9ucy5kYXlzRGlzYWJsZWQpIHx8XG4gICAgICAgIGlzRGlzYWJsZWREYXRlKGRheS5kYXRlLCBvcHRpb25zLmRhdGVzRGlzYWJsZWQpO1xuXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBpc1RvZGF5ID0gIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIGN1cnJlbnREYXRlKTtcblxuICAgICAgLy8gZGVjaWRlIHVwZGF0ZSBvciBub3RcbiAgICAgIGNvbnN0IG5ld0RheSA9IE9iamVjdC5hc3NpZ24oe30sIGRheSwge1xuICAgICAgICBpc090aGVyTW9udGgsXG4gICAgICAgIGlzSG92ZXJlZCxcbiAgICAgICAgaXNTZWxlY3RlZCxcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCxcbiAgICAgICAgaXNTZWxlY3Rpb25FbmQsXG4gICAgICAgIGlzSW5SYW5nZSxcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgaXNUb2RheVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZGF5LmlzT3RoZXJNb250aCAhPT0gbmV3RGF5LmlzT3RoZXJNb250aCB8fFxuICAgICAgICBkYXkuaXNIb3ZlcmVkICE9PSBuZXdEYXkuaXNIb3ZlcmVkIHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGVkICE9PSBuZXdEYXkuaXNTZWxlY3RlZCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3Rpb25TdGFydCAhPT0gbmV3RGF5LmlzU2VsZWN0aW9uU3RhcnQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0aW9uRW5kICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25FbmQgfHxcbiAgICAgICAgZGF5LmlzRGlzYWJsZWQgIT09IG5ld0RheS5pc0Rpc2FibGVkIHx8XG4gICAgICAgIGRheS5pc0luUmFuZ2UgIT09IG5ld0RheS5pc0luUmFuZ2VcbiAgICAgICkge1xuICAgICAgICB3ZWVrLmRheXNbZGF5SW5kZXhdID0gbmV3RGF5O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgZm9ybWF0dGVkTW9udGguaGlkZUxlZnRBcnJvdyA9XG4gICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA+IDAgJiYgb3B0aW9ucy5tb250aEluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHMpO1xuICBmb3JtYXR0ZWRNb250aC5oaWRlUmlnaHRBcnJvdyA9XG4gICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxuICAgICAgb3B0aW9ucy5tb250aEluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcblxuICBmb3JtYXR0ZWRNb250aC5kaXNhYmxlTGVmdEFycm93ID0gaXNNb250aERpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZShmb3JtYXR0ZWRNb250aC5tb250aCwgeyBtb250aDogLTEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuICBmb3JtYXR0ZWRNb250aC5kaXNhYmxlUmlnaHRBcnJvdyA9IGlzTW9udGhEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoZm9ybWF0dGVkTW9udGgubW9udGgsIHsgbW9udGg6IDEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiBmb3JtYXR0ZWRNb250aDtcbn1cblxuZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShcbiAgZGF0ZTogRGF0ZSxcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdLFxuICBob3ZlcmVkRGF0ZTogRGF0ZVxuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZSB8fCAhc2VsZWN0ZWRSYW5nZVswXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZFJhbmdlWzFdKSB7XG4gICAgcmV0dXJuIGRhdGUgPiBzZWxlY3RlZFJhbmdlWzBdICYmIGRhdGUgPD0gc2VsZWN0ZWRSYW5nZVsxXTtcbiAgfVxuXG4gIGlmIChob3ZlcmVkRGF0ZSkge1xuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IGhvdmVyZWREYXRlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuU3dpdGNoTW9kZShtb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSwgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiBtaW5Nb2RlID8gbW9kZSA+PSBtaW5Nb2RlIDogdHJ1ZTtcbn1cbiIsImltcG9ydCB7XG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBzdGFydE9mLCBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XG5cbmNvbnN0IGhlaWdodCA9IDQ7XG5jb25zdCB3aWR0aCA9IDM7XG5jb25zdCBzaGlmdCA9IHsgbW9udGg6IDEgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxuICB2aWV3RGF0ZTogRGF0ZSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbik6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzdGFydE9mKHZpZXdEYXRlLCAneWVhcicpO1xuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcbiAgY29uc3QgbW9udGhNYXRyaXggPSBjcmVhdGVNYXRyaXg8XG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xuICAgIGRhdGUsXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5tb250aExhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgbW9udGhzOiBtb250aE1hdHJpeCxcbiAgICBtb250aFRpdGxlOiAnJyxcbiAgICB5ZWFyVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICB2aWV3RGF0ZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApXG4gIH07XG59XG4iLCJpbXBvcnQgeyBpc1NhbWVNb250aCwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7XG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGlzTW9udGhEaXNhYmxlZCwgaXNZZWFyRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ01vbnRoQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgaG92ZXJlZE1vbnRoOiBEYXRlO1xuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XG4gIG1vbnRoSW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdNb250aHNDYWxlbmRhcihcbiAgbW9udGhDYWxlbmRhcjogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIG9wdGlvbnM6IEZsYWdNb250aENhbGVuZGFyT3B0aW9uc1xuKTogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBtb250aENhbGVuZGFyLm1vbnRocy5mb3JFYWNoKFxuICAgIChtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdLCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBtb250aHMuZm9yRWFjaCgobW9udGg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgbW9udGhJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IGlzU2FtZU1vbnRoKG1vbnRoLmRhdGUsIG9wdGlvbnMuaG92ZXJlZE1vbnRoKTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgICAgICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgICAgICAgaXNNb250aERpc2FibGVkKG1vbnRoLmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlKTtcbiAgICAgICAgY29uc3QgbmV3TW9udGggPSBPYmplY3QuYXNzaWduKC8qe30sKi8gbW9udGgsIHtcbiAgICAgICAgICBpc0hvdmVyZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vbnRoLmlzSG92ZXJlZCAhPT0gbmV3TW9udGguaXNIb3ZlcmVkIHx8XG4gICAgICAgICAgbW9udGguaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxuICAgICAgICApIHtcbiAgICAgICAgICBtb250aENhbGVuZGFyLm1vbnRoc1tyb3dJbmRleF1bbW9udGhJbmRleF0gPSBuZXdNb250aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICApO1xuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgbGlua2VkIGNhbGVuZGFyc1xuICBtb250aENhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPVxuICAgIG9wdGlvbnMubW9udGhJbmRleCA+IDAgJiYgb3B0aW9ucy5tb250aEluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG4gIG1vbnRoQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxuICAgIG9wdGlvbnMubW9udGhJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcblxuICBtb250aENhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUobW9udGhDYWxlbmRhci5tb250aHNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIG1vbnRoQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUobW9udGhDYWxlbmRhci5tb250aHNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAxIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcblxuICByZXR1cm4gbW9udGhDYWxlbmRhcjtcbn1cbiIsImltcG9ydCB7XG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IHNoaWZ0RGF0ZSwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xuXG5jb25zdCBoZWlnaHQgPSA0O1xuY29uc3Qgd2lkdGggPSA0O1xuZXhwb3J0IGNvbnN0IHllYXJzUGVyQ2FsZW5kYXIgPSBoZWlnaHQgKiB3aWR0aDtcbmNvbnN0IGluaXRpYWxTaGlmdCA9IChNYXRoLmZsb29yKHllYXJzUGVyQ2FsZW5kYXIgLyAyKSAtIDEpICogLTE7XG5jb25zdCBzaGlmdCA9IHsgeWVhcjogMSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNDYWxlbmRhcihcbiAgdmlld0RhdGU6IERhdGUsXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogaW5pdGlhbFNoaWZ0IH0pO1xuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcbiAgY29uc3QgeWVhcnNNYXRyaXggPSBjcmVhdGVNYXRyaXg8XG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xuICAgIGRhdGUsXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy55ZWFyTGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKVxuICB9KSk7XG4gIGNvbnN0IHllYXJUaXRsZSA9IGZvcm1hdFllYXJSYW5nZVRpdGxlKHllYXJzTWF0cml4LCBmb3JtYXRPcHRpb25zKTtcblxuICByZXR1cm4ge1xuICAgIHllYXJzOiB5ZWFyc01hdHJpeCxcbiAgICBtb250aFRpdGxlOiAnJyxcbiAgICB5ZWFyVGl0bGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0WWVhclJhbmdlVGl0bGUoXG4gIHllYXJzTWF0cml4OiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXVtdLFxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgY29uc3QgZnJvbSA9IGZvcm1hdERhdGUoXG4gICAgeWVhcnNNYXRyaXhbMF1bMF0uZGF0ZSxcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICApO1xuICBjb25zdCB0byA9IGZvcm1hdERhdGUoXG4gICAgeWVhcnNNYXRyaXhbaGVpZ2h0IC0gMV1bd2lkdGggLSAxXS5kYXRlLFxuICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICk7XG5cbiAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xufVxuIiwiaW1wb3J0IHsgaXNTYW1lWWVhciwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBpc1llYXJEaXNhYmxlZCB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnMge1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBtaW5EYXRlOiBEYXRlO1xuICBtYXhEYXRlOiBEYXRlO1xuICBob3ZlcmVkWWVhcjogRGF0ZTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICB5ZWFySW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdZZWFyc0NhbGVuZGFyKFxuICB5ZWFyc0NhbGVuZGFyOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnNcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICB5ZWFyc0NhbGVuZGFyLnllYXJzLmZvckVhY2goXG4gICAgKHllYXJzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgeWVhcnMuZm9yRWFjaCgoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCB5ZWFySW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVZZWFyKHllYXIuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkWWVhcik7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICAgIGlzWWVhckRpc2FibGVkKHllYXIuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUpO1xuXG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIHllYXIsIHsgaXNIb3ZlcmVkLCBpc0Rpc2FibGVkIH0pO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeWVhci5pc0hvdmVyZWQgIT09IG5ld01vbnRoLmlzSG92ZXJlZCB8fFxuICAgICAgICAgIHllYXIuaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxuICAgICAgICApIHtcbiAgICAgICAgICB5ZWFyc0NhbGVuZGFyLnllYXJzW3Jvd0luZGV4XVt5ZWFySW5kZXhdID0gbmV3TW9udGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgeWVhcnNDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cbiAgICBvcHRpb25zLnllYXJJbmRleCA+IDAgJiYgb3B0aW9ucy55ZWFySW5kZXggIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcbiAgeWVhcnNDYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA9XG4gICAgb3B0aW9ucy55ZWFySW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICBvcHRpb25zLnllYXJJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcblxuICB5ZWFyc0NhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1swXVswXS5kYXRlLCB7IHllYXI6IC0xIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcbiAgY29uc3QgaSA9IHllYXJzQ2FsZW5kYXIueWVhcnMubGVuZ3RoIC0gMTtcbiAgY29uc3QgaiA9IHllYXJzQ2FsZW5kYXIueWVhcnNbaV0ubGVuZ3RoIC0gMTtcbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvdyA9IGlzWWVhckRpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZSh5ZWFyc0NhbGVuZGFyLnllYXJzW2ldW2pdLmRhdGUsIHsgeWVhcjogMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIHllYXJzQ2FsZW5kYXI7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdGF0ZSwgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgY2FsY0RheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9jYWxjLWRheXMtY2FsZW5kYXInO1xuaW1wb3J0IHsgZm9ybWF0RGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZsYWdEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7XG4gIHNldEZ1bGxEYXRlLFxuICBzaGlmdERhdGUsXG4gIGlzQXJyYXksXG4gIGlzRGF0ZVZhbGlkLFxuICBzdGFydE9mLFxuICBnZXRMb2NhbGUsXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjYW5Td2l0Y2hNb2RlIH0gZnJvbSAnLi4vZW5naW5lL3ZpZXctbW9kZSc7XG5pbXBvcnQgeyBmb3JtYXRNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZsYWdNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLW1vbnRocy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmb3JtYXRZZWFyc0NhbGVuZGFyLCB5ZWFyc1BlckNhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmbGFnWWVhcnNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyJztcbmltcG9ydCB7IEJzVmlld05hdmlnYXRpb25FdmVudCwgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsIEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJzRGF0ZXBpY2tlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsRGF0ZXBpY2tlclN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFOiB7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUmVkdWNlcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVDoge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZMQUc6IHtcbiAgICAgIHJldHVybiBmbGFnUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VUOiB7XG4gICAgICBjb25zdCBkYXRlID0gc2hpZnREYXRlKHN0YXJ0T2Yoc3RhdGUudmlldy5kYXRlLCAnbW9udGgnKSwgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICBtb2RlOiBzdGF0ZS52aWV3Lm1vZGUsXG4gICAgICAgICAgZGF0ZVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfVE86IHtcbiAgICAgIGNvbnN0IHBheWxvYWQ6IEJzVmlld05hdmlnYXRpb25FdmVudCA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBjb25zdCBkYXRlID0gc2V0RnVsbERhdGUoc3RhdGUudmlldy5kYXRlLCBwYXlsb2FkLnVuaXQpO1xuICAgICAgbGV0IG5ld1N0YXRlO1xuICAgICAgbGV0IG1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xuICAgICAgaWYgKGNhblN3aXRjaE1vZGUocGF5bG9hZC52aWV3TW9kZSwgc3RhdGUubWluTW9kZSkpIHtcbiAgICAgICAgbW9kZSA9IHBheWxvYWQudmlld01vZGU7XG4gICAgICAgIG5ld1N0YXRlID0geyB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgICAgbmV3U3RhdGUgPSB7IHNlbGVjdGVkRGF0ZTogZGF0ZSwgdmlldzogeyBkYXRlLCBtb2RlIH0gfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkNIQU5HRV9WSUVXTU9ERToge1xuICAgICAgaWYgKCFjYW5Td2l0Y2hNb2RlKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5taW5Nb2RlKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgbW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5IT1ZFUjoge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGhvdmVyZWREYXRlOiBhY3Rpb24ucGF5bG9hZCB9KTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0ZWREYXRlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgdmlldzogc3RhdGUudmlld1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgIGNvbnN0IF9kYXRlID0gYWN0aW9uLnBheWxvYWQgfHwgc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcbiAgICAgIG5ld1N0YXRlLnZpZXcgPSB7IG1vZGUsIGRhdGUgfTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgLy8gcHJlc2VydmUgdmlldyBtb2RlXG4gICAgICBjb25zdCBtb2RlID0gbmV3U3RhdGUubWluTW9kZSA/IG5ld1N0YXRlLm1pbk1vZGUgOiBzdGF0ZS52aWV3Lm1vZGU7XG4gICAgICBjb25zdCBfdmlld0RhdGUgPSBpc0RhdGVWYWxpZChuZXdTdGF0ZS52YWx1ZSkgJiYgbmV3U3RhdGUudmFsdWVcbiAgICAgICAgfHwgaXNBcnJheShuZXdTdGF0ZS52YWx1ZSkgJiYgaXNEYXRlVmFsaWQobmV3U3RhdGUudmFsdWVbMF0pICYmIG5ld1N0YXRlLnZhbHVlWzBdXG4gICAgICAgIHx8IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBnZXRWaWV3RGF0ZShfdmlld0RhdGUsIG5ld1N0YXRlLm1pbkRhdGUsIG5ld1N0YXRlLm1heERhdGUpO1xuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xuICAgICAgLy8gdXBkYXRlIHNlbGVjdGVkIHZhbHVlXG4gICAgICBpZiAobmV3U3RhdGUudmFsdWUpIHtcbiAgICAgICAgLy8gaWYgbmV3IHZhbHVlIGlzIGFycmF5IHdlIHdvcmsgd2l0aCBkYXRlIHJhbmdlXG4gICAgICAgIGlmIChpc0FycmF5KG5ld1N0YXRlLnZhbHVlKSkge1xuICAgICAgICAgIG5ld1N0YXRlLnNlbGVjdGVkUmFuZ2UgPSBuZXdTdGF0ZS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5ldyB2YWx1ZSBpcyBhIGRhdGUgLT4gZGF0ZXBpY2tlclxuICAgICAgICBpZiAobmV3U3RhdGUudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWREYXRlID0gbmV3U3RhdGUudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm92aWRlZCB2YWx1ZSBpcyBub3Qgc3VwcG9ydGVkIDopXG4gICAgICAgIC8vIG5lZWQgdG8gcmVwb3J0IGl0IHNvbWVob3dcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUX1JBTkdFOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0ZWRSYW5nZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHZpZXc6IHN0YXRlLnZpZXdcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS52aWV3Lm1vZGU7XG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkWzBdIHx8IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBnZXRWaWV3RGF0ZShfZGF0ZSwgc3RhdGUubWluRGF0ZSwgc3RhdGUubWF4RGF0ZSk7XG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUlOX0RBVEU6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtaW5EYXRlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEU6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtYXhEYXRlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfSVNfRElTQUJMRUQ6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0Rpc2FibGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSk6IEJzRGF0ZXBpY2tlclN0YXRlIHtcbiAgLy8gaG93IG1hbnkgY2FsZW5kYXJzXG4gIGNvbnN0IGRpc3BsYXlNb250aHMgPSBzdGF0ZS5kaXNwbGF5TW9udGhzO1xuICAvLyB1c2Ugc2VsZWN0ZWQgZGF0ZSBvbiBpbml0aWFsIHJlbmRlcmluZyBpZiBzZXRcbiAgbGV0IHZpZXdEYXRlID0gc3RhdGUudmlldy5kYXRlO1xuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdkYXknKSB7XG4gICAgc3RhdGUubW9udGhWaWV3T3B0aW9ucy5maXJzdERheU9mV2VlayA9IGdldExvY2FsZShzdGF0ZS5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgY29uc3QgbW9udGhzTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChsZXQgbW9udGhJbmRleCA9IDA7IG1vbnRoSW5kZXggPCBkaXNwbGF5TW9udGhzOyBtb250aEluZGV4KyspIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIG1vbnRoc01vZGVsW21vbnRoSW5kZXhdID0gY2FsY0RheXNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIHN0YXRlLm1vbnRoVmlld09wdGlvbnNcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyBtb250aDogMSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzTW9kZWwgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnbW9udGgnKSB7XG4gICAgY29uc3QgbW9udGhzQ2FsZW5kYXIgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICBtb250aHNDYWxlbmRhcltjYWxlbmRhckluZGV4XSA9IGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNDYWxlbmRhciB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICd5ZWFyJykge1xuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcblxuICAgIGZvciAoXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xuICAgICkge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgeWVhcnNDYWxlbmRhck1vZGVsW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0WWVhcnNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXG4gICAgICApO1xuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogeWVhcnNQZXJDYWxlbmRhciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhck1vZGVsIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdkYXknKSB7XG4gICAgY29uc3QgZm9ybWF0dGVkTW9udGhzID0gc3RhdGUubW9udGhzTW9kZWwubWFwKChtb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgIGZvcm1hdERheXNDYWxlbmRhcihtb250aCwgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSksIG1vbnRoSW5kZXgpXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmb3JtYXR0ZWRNb250aHMgfSk7XG4gIH1cblxuICAvLyBob3cgbWFueSBjYWxlbmRhcnNcbiAgY29uc3QgZGlzcGxheU1vbnRocyA9IHN0YXRlLmRpc3BsYXlNb250aHM7XG4gIC8vIGNoZWNrIGluaXRpYWwgcmVuZGVyaW5nXG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxuICBsZXQgdmlld0RhdGUgPSBzdGF0ZS52aWV3LmRhdGU7XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xuICAgIGNvbnN0IG1vbnRoc0NhbGVuZGFyID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xuICAgIGZvciAoXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xuICAgICkge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgbW9udGhzQ2FsZW5kYXJbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRNb250aHNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXG4gICAgICApO1xuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogMSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzQ2FsZW5kYXIgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICB5ZWFyc0NhbGVuZGFyTW9kZWxbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRZZWFyc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxNiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhck1vZGVsIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBmbGFnUmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICBhY3Rpb246IEFjdGlvbik6IEJzRGF0ZXBpY2tlclN0YXRlIHtcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcbiAgICBjb25zdCBmbGFnZ2VkTW9udGhzID0gc3RhdGUuZm9ybWF0dGVkTW9udGhzLm1hcChcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgICAgZmxhZ0RheXNDYWxlbmRhcihmb3JtYXR0ZWRNb250aCwge1xuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXG4gICAgICAgICAgbWluRGF0ZTogc3RhdGUubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlOiBzdGF0ZS5tYXhEYXRlLFxuICAgICAgICAgIGRheXNEaXNhYmxlZDogc3RhdGUuZGF5c0Rpc2FibGVkLFxuICAgICAgICAgIGRhdGVzRGlzYWJsZWQ6IHN0YXRlLmRhdGVzRGlzYWJsZWQsXG4gICAgICAgICAgaG92ZXJlZERhdGU6IHN0YXRlLmhvdmVyZWREYXRlLFxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogc3RhdGUuc2VsZWN0ZWREYXRlLFxuICAgICAgICAgIHNlbGVjdGVkUmFuZ2U6IHN0YXRlLnNlbGVjdGVkUmFuZ2UsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xuICAgIGNvbnN0IGZsYWdnZWRNb250aHNDYWxlbmRhciA9IHN0YXRlLm1vbnRoc0NhbGVuZGFyLm1hcChcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgICAgZmxhZ01vbnRoc0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXG4gICAgICAgICAgaG92ZXJlZE1vbnRoOiBzdGF0ZS5ob3ZlcmVkTW9udGgsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyRmxhZ2dlZCA9IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbC5tYXAoXG4gICAgICAoZm9ybWF0dGVkTW9udGgsIHllYXJJbmRleCkgPT5cbiAgICAgICAgZmxhZ1llYXJzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcbiAgICAgICAgICBpc0Rpc2FibGVkOiBzdGF0ZS5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1pbkRhdGU6IHN0YXRlLm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcbiAgICAgICAgICBob3ZlcmVkWWVhcjogc3RhdGUuaG92ZXJlZFllYXIsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICB5ZWFySW5kZXhcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJGbGFnZ2VkIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXRPcHRpb25zKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSk6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICBsb2NhbGU6IHN0YXRlLmxvY2FsZSxcblxuICAgIG1vbnRoVGl0bGU6IHN0YXRlLm1vbnRoVGl0bGUsXG4gICAgeWVhclRpdGxlOiBzdGF0ZS55ZWFyVGl0bGUsXG5cbiAgICBkYXlMYWJlbDogc3RhdGUuZGF5TGFiZWwsXG4gICAgbW9udGhMYWJlbDogc3RhdGUubW9udGhMYWJlbCxcbiAgICB5ZWFyTGFiZWw6IHN0YXRlLnllYXJMYWJlbCxcblxuICAgIHdlZWtOdW1iZXJzOiBzdGF0ZS53ZWVrTnVtYmVyc1xuICB9O1xufVxuXG4vKipcbiAqIGlmIHZpZXcgZGF0ZSBpcyBwcm92aWRlZCAoYnNWYWx1ZXxuZ01vZGVsKSBpdCBzaG91bGQgYmUgc2hvd25cbiAqIGlmIHZpZXcgZGF0ZSBpcyBub3QgcHJvdmlkZXI6XG4gKiBpZiBtaW5EYXRlPmN1cnJlbnREYXRlIChkZWZhdWx0IHZpZXcgdmFsdWUpLCBzaG93IG1pbkRhdGVcbiAqIGlmIG1heERhdGU8Y3VycmVudERhdGUoZGVmYXVsdCB2aWV3IHZhbHVlKSBzaG93IG1heERhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0Vmlld0RhdGUodmlld0RhdGU6IERhdGUgfCBEYXRlW10sIG1pbkRhdGU6IERhdGUsIG1heERhdGU6IERhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSBBcnJheS5pc0FycmF5KHZpZXdEYXRlKSA/IHZpZXdEYXRlWzBdIDogdmlld0RhdGU7XG5cbiAgaWYgKG1pbkRhdGUgJiYgaXNBZnRlcihtaW5EYXRlLCBfZGF0ZSwgJ2RheScpKSB7XG4gICAgcmV0dXJuIG1pbkRhdGU7XG4gIH1cblxuICBpZiAobWF4RGF0ZSAmJiBpc0JlZm9yZShtYXhEYXRlLCBfZGF0ZSwgJ2RheScpKSB7XG4gICAgcmV0dXJuIG1heERhdGU7XG4gIH1cblxuICByZXR1cm4gX2RhdGU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNaW5pU3RvcmUsIEFjdGlvbiwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBic0RhdGVwaWNrZXJSZWR1Y2VyIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnJlZHVjZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8QnNEYXRlcGlja2VyU3RhdGU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgX2Rpc3BhdGNoZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFjdGlvbj4oe1xuICAgICAgdHlwZTogJ1tkYXRlcGlja2VyXSBkaXNwYXRjaGVyIGluaXQnXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPEJzRGF0ZXBpY2tlclN0YXRlPihcbiAgICAgIGluaXRpYWxEYXRlcGlja2VyU3RhdGUsXG4gICAgICBfZGlzcGF0Y2hlcixcbiAgICAgIGJzRGF0ZXBpY2tlclJlZHVjZXJcbiAgICApO1xuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCBic0RhdGVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItY29udGFpbmVyJyxcbiAgcHJvdmlkZXJzOiBbQnNEYXRlcGlja2VyU3RvcmUsIEJzRGF0ZXBpY2tlckVmZmVjdHNdLFxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgZGlzcGxheTogYmxvY2s7JyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdjYWxlbmRhcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPSB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGg7XG4gICAgdGhpcy5jb250YWluZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jb250YWluZXJDbGFzcztcbiAgICB0aGlzLl9lZmZlY3RzXG4gICAgICAuaW5pdCh0aGlzLl9zdG9yZSlcbiAgICAgIC8vIGludGlhbCBzdGF0ZSBvcHRpb25zXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XG5cbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgICAuc2VsZWN0KChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zZWxlY3RlZERhdGUpXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IGFueSkgPT4gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpKVxuICAgICk7XG4gIH1cblxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA/IGRheS5pc0Rpc2FibGVkIDogKGRheS5pc090aGVyTW9udGggfHwgZGF5LmlzRGlzYWJsZWQpO1xuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdChkYXkuZGF0ZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX2VmZmVjdHMuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJy4vbW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2JzRGF0ZXBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBkYXRlcGlja2VyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XG4gIC8qKlxuICAgKiBDbG9zZSBkYXRlcGlja2VyIG9uIG91dHNpZGUgY2xpY2tcbiAgICovXG4gIEBJbnB1dCgpIG91dHNpZGVDbGljayA9IHRydWU7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRhdGVwaWNrZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lciA9ICdib2R5JztcblxuICBASW5wdXQoKSBvdXRzaWRlRXNjID0gdHJ1ZTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZGF0ZXBpY2tlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGhpZGRlblxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIF9ic1ZhbHVlOiBEYXRlO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlckNvbmZpZz47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBkYXRlcGlja2VyJ3MgY29udGVudCBpcyBlbmFibGVkIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogTWluaW11bSB2aWV3IG1vZGUgOiBkYXksIG1vbnRoLCBvciB5ZWFyXG4gICAqL1xuICBASW5wdXQoKSBtaW5Nb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcblxuICAvKipcbiAgICogRGlzYWJsZSBDZXJ0YWluIGRheXMgaW4gdGhlIHdlZWtcbiAgICovXG4gIEBJbnB1dCgpIGRheXNEaXNhYmxlZDogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gZGF0ZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlclJlZjogQ29tcG9uZW50UmVmPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICAgICAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgLy8gdG9kbzogYXNzaWduIG9ubHkgc3Vic2V0IG9mIGZpZWxkc1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlclxuICAgICk7XG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZGF0ZXBpY2tlci5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kYXRlcGlja2VyLm9uSGlkZGVuO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlci5saXN0ZW4oe1xuICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLm91dHNpZGVDbGljayxcbiAgICAgIG91dHNpZGVFc2M6IHRoaXMub3V0c2lkZUVzYyxcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICB0aGlzLnNldENvbmZpZygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5tYXhEYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGF5c0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRheXNEaXNhYmxlZCA9IHRoaXMuZGF5c0Rpc2FibGVkO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDb25maWcoKTtcblxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgIC5hdHRhY2goQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7cGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudH0pO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgc291cmNlIChtb2RlbCAtPiB2aWV3KVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyLmhpZGUoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmdcbiAgICogb2YgdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXBpY2tlclxuICAgKi9cbiAgc2V0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdGhpcy5ic0NvbmZpZywge1xuICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXG4gICAgICBkYXlzRGlzYWJsZWQ6IHRoaXMuZGF5c0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXlzRGlzYWJsZWQsXG4gICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWQsXG4gICAgICBtaW5Nb2RlOiB0aGlzLm1pbk1vZGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbk1vZGVcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbmZpZyB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXG4gICAgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHNcbiAgKSB7XG4gICAgc3VwZXIoX2NvbmZpZywgX3N0b3JlLCBfYWN0aW9ucywgX2VmZmVjdHMpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWlubGluZScsXG4gIGV4cG9ydEFzOiAnYnNEYXRlcGlja2VySW5saW5lJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgX2JzVmFsdWU6IERhdGU7XG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmJzVmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlnIG9iamVjdCBmb3IgZGF0ZXBpY2tlclxuICAgKi9cbiAgQElucHV0KCkgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcGlja2VySW5saW5lQ29uZmlnPjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgLy8gdG9kbzogYXNzaWduIG9ubHkgc3Vic2V0IG9mIGZpZWxkc1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlclxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxuICAgICAgLmF0dGFjaChCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5fZWxlbWVudFJlZilcbiAgICAgIC5zaG93KCk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIHNldENvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHRoaXMuYnNDb25maWcsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxuICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxuICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxuICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiBhbnkge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgcGFyc2VEYXRlLFxuICBmb3JtYXREYXRlLFxuICBnZXRMb2NhbGUsXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlLFxuICBpc0RhdGUsXG4gIGlzRGF0ZVZhbGlkXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XG5cbmNvbnN0IEJTX0RBVEVQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgQlNfREFURVBJQ0tFUl9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpbnB1dFtic0RhdGVwaWNrZXJdYCxcbiAgaG9zdDoge1xuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQpJyxcbiAgICAnKGtleXVwLmVzYyknOiAnaGlkZSgpJyxcbiAgICAnKGJsdXIpJzogJ29uQmx1cigpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtCU19EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUElDS0VSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtdmFyaWFibGUgKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdG9yQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGlucHV0IHZhbHVlIG9uIGxvY2FsZSBjaGFuZ2VcbiAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0SW5wdXRWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IGluaXRpYWxEYXRlID0gIXZhbHVlID8gJydcbiAgICAgIDogZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgaW5pdGlhbERhdGUpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIHRoaXMud3JpdGVWYWx1ZSgoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBfdmFsdWU6IERhdGUgfCBzdHJpbmcgPSBjLnZhbHVlO1xuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItc3dpdGNoICovXG4gICAgaWYgKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBfdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaXNEYXRlKF92YWx1ZSkpIHtcbiAgICAgIGNvbnN0IF9pc0RhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZSk7XG4gICAgICBpZiAoIV9pc0RhdGVWYWxpZCkge1xuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlIH0gfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWluRGF0ZSAmJiBpc0JlZm9yZShfdmFsdWUsIHRoaXMuX3BpY2tlci5taW5EYXRlLCAnZGF0ZScpKSB7XG4gICAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtaW5EYXRlOiB0aGlzLl9waWNrZXIubWluRGF0ZSB9IH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1heERhdGUgJiYgaXNBZnRlcihfdmFsdWUsIHRoaXMuX3BpY2tlci5tYXhEYXRlLCAnZGF0ZScpKSB7XG4gICAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtYXhEYXRlOiB0aGlzLl9waWNrZXIubWF4RGF0ZSB9IH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgX2xvY2FsZUtleSA9IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZTtcbiAgICAgIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUoX2xvY2FsZUtleSk7XG4gICAgICBpZiAoIV9sb2NhbGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBMb2NhbGUgXCIke19sb2NhbGVLZXl9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLl92YWx1ZSA9IHBhcnNlRGF0ZSh2YWx1ZSwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpO1xuICAgIH1cblxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9waWNrZXIuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIGV4dGVuZHMgQnNEYXRlcGlja2VyQ29uZmlnIHtcbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcbiAgZGlzcGxheU1vbnRocyA9IDI7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7IGRpc3BsYXk6IGJsb2NrOycsXG4gICAgcm9sZTogJ2RpYWxvZycsXG4gICAgJ2FyaWEtbGFiZWwnOiAnY2FsZW5kYXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldFJhbmdlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcblxuICBfcmFuZ2VTdGFjazogRGF0ZVtdID0gW107XG4gIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0c1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2VmZmVjdHMgPSBfZWZmZWN0cztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyQ2xhc3MgPSB0aGlzLl9jb25maWcuY29udGFpbmVyQ2xhc3M7XG4gICAgdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID0gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoO1xuICAgIHRoaXMuX2VmZmVjdHNcbiAgICAgIC5pbml0KHRoaXMuX3N0b3JlKVxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcbiAgICAgIC8vIHRvZG86IGZpeCB0aGlzLCBzcGxpdCBjb25maWdzXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XG5cbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0ZSA9PiB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSkpXG4gICAgKTtcbiAgfVxuXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID8gZGF5LmlzRGlzYWJsZWQgOiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCk7XG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIG9ubHkgb25lIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZFxuICAgIC8vIGFuZCB1c2VyIGNsaWNrcyBvbiBwcmV2aW91cyBkYXRlXG4gICAgLy8gc3RhcnQgc2VsZWN0aW9uIGZyb20gbmV3IGRhdGVcbiAgICAvLyBidXQgaWYgbmV3IGRhdGUgaXMgYWZ0ZXIgaW5pdGlhbCBvbmVcbiAgICAvLyB0aGFuIGZpbmlzaCBzZWxlY3Rpb25cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPVxuICAgICAgICBkYXkuZGF0ZSA+PSB0aGlzLl9yYW5nZVN0YWNrWzBdXG4gICAgICAgICAgPyBbdGhpcy5fcmFuZ2VTdGFja1swXSwgZGF5LmRhdGVdXG4gICAgICAgICAgOiBbZGF5LmRhdGVdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtkYXkuZGF0ZV07XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh0aGlzLl9yYW5nZVN0YWNrKSk7XG5cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZWZmZWN0cy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBDb21wb25lbnRMb2FkZXIgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0RhdGVyYW5nZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2JzRGF0ZXJhbmdlcGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgZGF0ZXJhbmdlcGlja2VyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XG4gIC8qKlxuICAgKiBDbG9zZSBkYXRlcmFuZ2VwaWNrZXIgb24gb3V0c2lkZSBjbGlja1xuICAgKi9cbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXJhbmdlcGlja2VyIHNob3VsZCBiZSBhcHBlbmRlZFxuICAgKiB0by4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XG5cbiAgQElucHV0KCkgb3V0c2lkZUVzYyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIHNob3duXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBfYnNWYWx1ZTogRGF0ZVtdO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlW10pIHtcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcmFuZ2VwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnPjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVyYW5nZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVyYW5nZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9jb25maWc6IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxuICAgICAgICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyXG4gICAgKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZGF0ZXBpY2tlci5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBvdXRzaWRlRXNjOiB0aGlzLm91dHNpZGVFc2MsXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDb25maWcoKTtcblxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgIC5hdHRhY2goQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgIC5zaG93KHtwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50fSk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBwaWNrZXIgKHZpZXcgLT4gbW9kZWwpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZUNoYW5nZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKHJhbmdlOiBEYXRlW10pID0+IHJhbmdlICYmIHJhbmdlWzBdICYmICEhcmFuZ2VbMV0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXJhbmdlcGlja2VyXG4gICAqL1xuICBzZXRDb25maWcoKSB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5fY29uZmlnLFxuICAgICAgdGhpcy5ic0NvbmZpZyxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxuICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXG4gICAgICAgIGRhdGVzRGlzYWJsZWQ6IHRoaXMuZGF0ZXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNEaXNhYmxlZFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZ1xuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBwYXJzZURhdGUsIGZvcm1hdERhdGUsIGdldExvY2FsZSwgaXNBZnRlciwgaXNCZWZvcmUsIGlzQXJyYXksIGlzRGF0ZVZhbGlkIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W2JzRGF0ZXJhbmdlcGlja2VyXWAsXG4gIGhvc3Q6IHtcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gICAgJyhrZXl1cC5lc2MpJzogJ2hpZGUoKScsXG4gICAgJyhibHVyKSc6ICdvbkJsdXIoKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIHByaXZhdGUgX29uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlICovXG4gIHByaXZhdGUgX3ZhbGlkYXRvckNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGVbXTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZVxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldElucHV0VmFsdWUoZGF0ZTogRGF0ZVtdKTogdm9pZCB7XG4gICAgbGV0IHJhbmdlID0gJyc7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0OiBzdHJpbmcgPSAhZGF0ZVswXSA/ICcnXG4gICAgICAgIDogZm9ybWF0RGF0ZShkYXRlWzBdLFxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgICBjb25zdCBlbmQ6IHN0cmluZyA9ICFkYXRlWzFdID8gJydcbiAgICAgICAgOiBmb3JtYXREYXRlKFxuICAgICAgICAgIGRhdGVbMV0sXG4gICAgICAgICAgdGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VJbnB1dEZvcm1hdCxcbiAgICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICAgIHJhbmdlID0gKHN0YXJ0ICYmIGVuZCkgPyBzdGFydCArIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlU2VwYXJhdG9yICsgZW5kIDogJyc7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHJhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0aGlzLndyaXRlVmFsdWUoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgX3ZhbHVlOiBbRGF0ZSwgRGF0ZV0gPSBjLnZhbHVlO1xuXG4gICAgaWYgKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCB8fCAhaXNBcnJheShfdmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBfaXNGaXJzdERhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVswXSk7XG4gICAgY29uc3QgX2lzU2Vjb25kRGF0ZVZhbGlkID0gaXNEYXRlVmFsaWQoX3ZhbHVlWzFdKTtcblxuICAgIGlmICghX2lzRmlyc3REYXRlVmFsaWQpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBpbnZhbGlkOiBfdmFsdWVbMF0gfSB9O1xuICAgIH1cblxuICAgIGlmICghX2lzU2Vjb25kRGF0ZVZhbGlkKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzFdIH0gfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5taW5EYXRlICYmIGlzQmVmb3JlKF92YWx1ZVswXSwgdGhpcy5fcGlja2VyLm1pbkRhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtaW5EYXRlOiB0aGlzLl9waWNrZXIubWluRGF0ZSB9IH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWF4RGF0ZSAmJiBpc0FmdGVyKF92YWx1ZVsxXSwgdGhpcy5fcGlja2VyLm1heERhdGUsICdkYXRlJykpIHtcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtYXhEYXRlOiB0aGlzLl9waWNrZXIubWF4RGF0ZSB9IH07XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZVtdIHwgc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBfbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlO1xuICAgICAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShfbG9jYWxlS2V5KTtcbiAgICAgIGlmICghX2xvY2FsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYExvY2FsZSBcIiR7X2xvY2FsZUtleX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbGV0IF9pbnB1dDogKHN0cmluZ1tdIHwgRGF0ZVtdKSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWUuc3BsaXQodGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VTZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgX2lucHV0ID0gdmFsdWU7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5fdmFsdWUgPSAoX2lucHV0IGFzIHN0cmluZ1tdKVxuICAgICAgICAubWFwKChfdmFsOiBzdHJpbmcpOiBEYXRlID0+XG4gICAgICAgICAgcGFyc2VEYXRlKF92YWwsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKSlcbiAgICAgICAgLm1hcCgoZGF0ZTogRGF0ZSkgPT4gKGlzTmFOKGRhdGUudmFsdWVPZigpKSA/IG51bGwgOiBkYXRlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtY2FsZW5kYXItbGF5b3V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIGN1cnJlbnQgZGF0ZSwgd2lsbCBiZSBhZGRlZCBpbiBuZWFyZXN0IHJlbGVhc2VzIC0tPlxuICAgIDxicy1jdXJyZW50LWRhdGUgdGl0bGU9XCJoZXkgdGhlcmVcIiAqbmdJZj1cImZhbHNlXCI+PC9icy1jdXJyZW50LWRhdGU+XG5cbiAgICA8IS0tbmF2aWdhdGlvbi0tPlxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWhlYWRcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYm9keVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLXRpbWVwaWNrZXItLT5cbiAgICA8YnMtdGltZXBpY2tlciAqbmdJZj1cImZhbHNlXCI+PC9icy10aW1lcGlja2VyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtY3VycmVudC1kYXRlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY3VycmVudC10aW1lZGF0ZVwiPjxzcGFuPnt7IHRpdGxlIH19PC9zcGFuPjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCc0N1c3RvbURhdGVzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IERhdGUgfCBEYXRlW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWN1c3RvbS1kYXRlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRuc1wiPlxuICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgcmFuZ2Ugb2YgcmFuZ2VzXCI+e3sgcmFuZ2UubGFiZWwgfX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJpc0N1c3RvbVJhbmdlU2hvd25cIj5DdXN0b20gUmFuZ2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBpc0N1c3RvbVJhbmdlU2hvd246IHRydWU7XG4gIEBJbnB1dCgpIHJhbmdlczogQnNDdXN0b21EYXRlc1tdO1xufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGF5LmlzRGlzYWJsZWQnLFxuICAgICdbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdJzogJ2RheS5pc0hvdmVyZWQnLFxuICAgICdbY2xhc3MuaXMtb3RoZXItbW9udGhdJzogJ2RheS5pc090aGVyTW9udGgnLFxuICAgICdbY2xhc3MuaXMtYWN0aXZlLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoSG92ZXJlZCcsXG4gICAgJ1tjbGFzcy5pbi1yYW5nZV0nOiAnZGF5LmlzSW5SYW5nZScsXG4gICAgJ1tjbGFzcy5zZWxlY3Qtc3RhcnRdJzogJ2RheS5pc1NlbGVjdGlvblN0YXJ0JyxcbiAgICAnW2NsYXNzLnNlbGVjdC1lbmRdJzogJ2RheS5pc1NlbGVjdGlvbkVuZCcsXG4gICAgJ1tjbGFzcy5zZWxlY3RlZF0nOiAnZGF5LmlzU2VsZWN0ZWQnXG4gIH0sXG4gIHRlbXBsYXRlOiBge3sgZGF5LmxhYmVsIH19YFxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXk6IERheVZpZXdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF5LmlzVG9kYXkgJiYgdGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5jdXN0b21Ub2RheUNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3dcIlxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJuYXZUbyh0cnVlKVwiPjxzcGFuPiZsc2FxdW87PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiXG4gICAgICAgICAgICAqbmdJZj1cImNhbGVuZGFyLm1vbnRoVGl0bGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInZpZXcoJ21vbnRoJylcIlxuICAgID48c3Bhbj57eyBjYWxlbmRhci5tb250aFRpdGxlIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiIChjbGljayk9XCJ2aWV3KCd5ZWFyJylcIlxuICAgID48c3Bhbj57eyBjYWxlbmRhci55ZWFyVGl0bGUgfX08L3NwYW4+PC9idXR0b24+XG5cbiAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgIDxidXR0b24gY2xhc3M9XCJuZXh0XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvd1wiXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJuYXZUbyhmYWxzZSlcIj48c3Bhbj4mcnNhcXVvOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkRpcmVjdGlvbj4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIG5hdlRvKGRvd246IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdChcbiAgICAgIGRvd24gPyBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5VUFxuICAgICk7XG4gIH1cblxuICB2aWV3KHZpZXdNb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KHZpZXdNb2RlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCwgV2Vla1ZpZXdNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXlzLWNhbGVuZGFyLXZpZXcnLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDwhLS1kYXlzIG1hdHJpeC0tPlxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJkYXlzIHdlZWtzXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDwhLS1pZiBzaG93IHdlZWtzLS0+XG4gICAgICAgICAgPHRoICpuZ0lmPVwib3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj48L3RoPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiBjYWxlbmRhci53ZWVrZGF5czsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ3ZWVrZGF5XCI+e3sgY2FsZW5kYXIud2Vla2RheXNbaV0gfX1cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgd2VlayBvZiBjYWxlbmRhci53ZWVrczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cIndlZWtcIiBbY2xhc3MuYWN0aXZlLXdlZWtdPVwiaXNXZWVrSG92ZXJlZFwiICAqbmdJZj1cIm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RXZWVrKHdlZWspXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIHRydWUpXCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIGZhbHNlKVwiPnt7IGNhbGVuZGFyLndlZWtOdW1iZXJzW2ldIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vlay5kYXlzXCIgcm9sZT1cImdyaWRjZWxsXCI+XG4gICAgICAgICAgPHNwYW4gYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXG4gICAgICAgICAgICAgICAgW2RheV09XCJkYXlcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3REYXkoZGF5KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJEYXkoZGF5LCB0cnVlKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJEYXkoZGF5LCBmYWxzZSlcIj57eyBkYXkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQgIHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcbiAgQElucHV0KCkgb3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlWaWV3TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXJXZWVrID0gbmV3IEV2ZW50RW1pdHRlcjxXZWVrVmlld01vZGVsPigpO1xuXG4gIGlzV2Vla0hvdmVyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpIHsgfVxuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IG1vbnRoOiBzdGVwIH0gfSk7XG4gIH1cblxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCk7XG4gIH1cblxuICBzZWxlY3REYXkoZXZlbnQ6IERheVZpZXdNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdChldmVudCk7XG4gIH1cblxuICBzZWxlY3RXZWVrKHdlZWs6IFdlZWtWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdlZWsuZGF5c1xuICAgICAgJiYgd2Vlay5kYXlzWzBdXG4gICAgICAmJiAhd2Vlay5kYXlzWzBdLmlzRGlzYWJsZWRcbiAgICAgICYmIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aCkge1xuXG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQod2Vlay5kYXlzWzBdKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3ZWVrLmRheXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSB3ZWVrLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGhcbiAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoc2VsZWN0ZWREYXkpO1xuICB9XG5cbiAgd2Vla0hvdmVySGFuZGxlcihjZWxsOiBXZWVrVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWN0aXZlRGF5cyA9IGNlbGwuZGF5cy5maW5kKChkYXk6IERheVZpZXdNb2RlbCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxuICAgICAgICA/ICFkYXkuaXNEaXNhYmxlZFxuICAgICAgICA6ICFkYXkuaXNPdGhlck1vbnRoICYmICFkYXkuaXNEaXNhYmxlZDtcbiAgICB9KTtcblxuICAgIGlmIChoYXNBY3RpdmVEYXlzKSB7XG4gICAgICBjZWxsLmlzSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICAgIHRoaXMuaXNXZWVrSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICAgIHRoaXMub25Ib3ZlcldlZWsuZW1pdChjZWxsKTtcbiAgICB9XG4gIH1cblxuICBob3ZlckRheShjZWxsOiBEYXlWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGggJiYgY2VsbC5pc090aGVyTW9udGgpIHtcbiAgICAgIGNlbGwuaXNPdGhlck1vbnRoSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICB9XG5cbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDZWxsSG92ZXJFdmVudCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1tb250aC1jYWxlbmRhci12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwibW9udGhzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgY2FsZW5kYXIubW9udGhzXCI+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBtb250aCBvZiByb3dcIiByb2xlPVwiZ3JpZGNlbGxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidmlld01vbnRoKG1vbnRoKVwiXG4gICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyTW9udGgobW9udGgsIHRydWUpXCJcbiAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJNb250aChtb250aCwgZmFsc2UpXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIm1vbnRoLmlzRGlzYWJsZWRcIlxuICAgICAgICAgICAgICBbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdPVwibW9udGguaXNIb3ZlcmVkXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBtb250aC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJDZWxsVmlld01vZGVsPigpO1xuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEhvdmVyRXZlbnQ+KCk7XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcCA9IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOID09PSBldmVudCA/IC0xIDogMTtcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgeWVhcjogc3RlcCB9IH0pO1xuICB9XG5cbiAgdmlld01vbnRoKG1vbnRoOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQobW9udGgpO1xuICB9XG5cbiAgaG92ZXJNb250aChjZWxsOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMub25Ib3Zlci5lbWl0KHsgY2VsbCwgaXNIb3ZlcmVkIH0pO1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy10aW1lcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiPi08L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImhvdXJzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIj4rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiPi08L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cIm1pbnV0ZXNcIiBwbGFjZWhvbGRlcj1cIjAwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1pbmNyZWFzZVwiPis8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN3aXRjaC10aW1lLWZvcm1hdFwiPnt7IGFtcG0gfX1cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBS0NBWUFBQUJpOEtTREFBQUJTRWxFUVZRWVYzWFFQVXZEVUJRRzRITnVhZ3RWcWM2S2dvdUN2NkdJdUludFlCTEI5aGNJUXBMU3RDQUlWN0RZbXBUY1JXY1hxWmlvM1Z3Yy9VQ2MvUUVxZmd5S0dicjBJN25TMUVpSGVxWXpQTy9oNVNEMGpheFVaam1TTENCK09GYitVRklORndBU0FFQWRwdTlnYUdYVnlBSEhGUUJrSHBLSGM2YTlkekVDdkFEeVk5c3FsQU1zSzlXMGp6eERYcWV5dHIzbWhRY2t4U2ppMjdUSko1L3JQbUlwd0pKcTNIcnRkdXJpWU91cnYxYTRpMXA1SG5oa0c5T0Z5bWkwUmVvTzA1Y0d3YitheXY0ZHlzVnlnamVGbXNQMDVmOHdwWlE4ZnNkdmZtdVk5empXU05xVXRnWUZWbk9WUmVJTFlvQkZ6ZFFJNS9HR0Z6TkhoR2JlWm5vcERHVTI5c1pic2NnbGRtQzk5dzM1Vk9BVFR5Y0lNTWNCWElmcFNWR3paaEE2QzhoaDAwY29ubG42VlE5VEdnVjMyT0VBS1FDNERyQnE3Q0p3ZDBnZ1I3VnEvclByZmdCK0Mzc0d5cFk1REFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuICAgICAgICAgIGFsdD1cIlwiPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB7XG4gIGFtcG0gPSAnb2snO1xuICBob3VycyA9IDA7XG4gIG1pbnV0ZXMgPSAwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHllYXJzUGVyQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9lbmdpbmUvZm9ybWF0LXllYXJzLWNhbGVuZGFyJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLXllYXJzLWNhbGVuZGFyLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxicy1jYWxlbmRhci1sYXlvdXQ+XG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcbiAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcbiAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXG4gICAgICA+PC9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldz5cblxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJ5ZWFyc1wiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGNhbGVuZGFyLnllYXJzXCI+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHJvd1wiIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ2aWV3WWVhcih5ZWFyKVwiXG4gICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyWWVhcih5ZWFyLCB0cnVlKVwiXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyWWVhcih5ZWFyLCBmYWxzZSlcIlxuICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwieWVhci5pc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmlzLWhpZ2hsaWdodGVkXT1cInllYXIuaXNIb3ZlcmVkXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyB5ZWFyLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBjYWxlbmRhcjogWWVhcnNDYWxlbmRhclZpZXdNb2RlbDtcblxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyQ2VsbFZpZXdNb2RlbD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IHllYXI6IHN0ZXAgKiB5ZWFyc1BlckNhbGVuZGFyIH0gfSk7XG4gIH1cblxuICB2aWV3WWVhcih5ZWFyOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeWVhcik7XG4gIH1cblxuICBob3ZlclllYXIoY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcnO1xuXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgQnNDYWxlbmRhckxheW91dENvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWNhbGVuZGFyLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jdXJyZW50LWRhdGUtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItZGF5LWRlY29yYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTW9udGhDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1tb250aHMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLXRpbWVwaWNrZXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNZZWFyc0NhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLXllYXJzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBfZXhwb3J0cyA9IFtcbiAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50LFxuXG4gIEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUsXG5cbiAgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG5cbiAgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50LFxuICAgIEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50LFxuICAgIEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50LFxuICAgIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQsXG5cbiAgICBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50LFxuICAgIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCxcbiAgICBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxuICAgIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQsXG5cbiAgICBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCxcblxuICAgIC4uLl9leHBvcnRzXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogX2V4cG9ydHNcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCc0RhdGVwaWNrZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgICBCc0RhdGVwaWNrZXJTdG9yZSxcbiAgICAgICAgQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICAgICAgQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgICAgICBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgICAgICAgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnLFxuICAgICAgICBCc0RhdGVwaWNrZXJFZmZlY3RzLFxuICAgICAgICBCc0xvY2FsZVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXR0ZXIge1xuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIGxvY2FsZSk7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGVGb3JtYXR0ZXIgfSBmcm9tICcuL2RhdGUtZm9ybWF0dGVyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWlubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tJmx0OyEmbmRhc2g7bmcta2V5ZG93bj1cImtleWRvd24oJGV2ZW50KVwiJm5kYXNoOyZndDstLT5cbiAgICA8ZGl2ICpuZ0lmPVwiZGF0ZXBpY2tlck1vZGVcIiBjbGFzcz1cIndlbGwgd2VsbC1zbSBiZy1mYWRlZCBwLWEgY2FyZFwiIHJvbGU9XCJhcHBsaWNhdGlvblwiID5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRlcGlja2VyTW9kZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdGFydGluZ0RheTogbnVtYmVyO1xuICBASW5wdXQoKSB5ZWFyUmFuZ2U6IG51bWJlcjtcblxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICBASW5wdXQoKSBtaW5Nb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heE1vZGU6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1dlZWtzOiBib29sZWFuO1xuICBASW5wdXQoKSBmb3JtYXREYXk6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0TW9udGg6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0WWVhcjogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXREYXlIZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBvbmx5Q3VycmVudE1vbnRoOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmc7IGNsYXp6OiBzdHJpbmcgfVtdO1xuICBASW5wdXQoKSBtb250aENvbExpbWl0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRlRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH1bXTtcbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xuICBASW5wdXQoKSBpbml0RGF0ZTogRGF0ZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xuICBAT3V0cHV0KCkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KGZhbHNlKTtcbiAgQE91dHB1dCgpIGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHN0ZXBEYXk6IGFueSA9IHt9O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHN0ZXBNb250aDogYW55ID0ge307XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3RlcFllYXI6IGFueSA9IHt9O1xuXG4gIHVuaXF1ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIG1vZGVzOiBzdHJpbmdbXSA9IFsnZGF5JywgJ21vbnRoJywgJ3llYXInXTtcbiAgcHJvdGVjdGVkIGRhdGVGb3JtYXR0ZXI6IERhdGVGb3JtYXR0ZXIgPSBuZXcgRGF0ZUZvcm1hdHRlcigpO1xuICBwcm90ZWN0ZWQgX2FjdGl2ZURhdGU6IERhdGU7XG4gIHByb3RlY3RlZCBzZWxlY3RlZERhdGU6IERhdGU7XG4gIHByb3RlY3RlZCBhY3RpdmVEYXRlSWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyRGF5OiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyRGF5OiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlck1vbnRoOiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyTW9udGg6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyWWVhcjogRnVuY3Rpb247XG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlclllYXI6IEZ1bmN0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xuICB9XG5cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XG4gIH1cblxuICAvLyB0b2RvOiBhZGQgZm9ybWF0dGVyIHZhbHVlIHRvIERhdGUgb2JqZWN0XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHRvZG86IHVzZSBkYXRlIGZvciB1bmlxdWUgdmFsdWVcbiAgICB0aGlzLnVuaXF1ZUlkID0gIGBkYXRlcGlja2VyLS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKX1gO1xuXG4gICAgaWYgKHRoaXMuaW5pdERhdGUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuaW5pdERhdGU7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS52YWx1ZU9mKCkpO1xuICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gdGhpcy5yZWZyZXNoVmlldyBzaG91bGQgYmUgY2FsbGVkIGhlcmUgdG8gcmVmbGVjdCB0aGUgY2hhbmdlcyBvbiB0aGUgZmx5XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtdmFyaWFibGVcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICB0aGlzLmNoZWNrSWZBY3RpdmVEYXRlR290VXBkYXRlZChjaGFuZ2VzLmFjdGl2ZURhdGUpO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWN0aXZlRGF0ZSBoYXMgYmVlbiB1cGRhdGUgYW5kIHRoZW4gZW1pdCB0aGUgYWN0aXZlRGF0ZUNoYW5nZSB3aXRoIHRoZSBuZXcgZGF0ZVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjaGVja0lmQWN0aXZlRGF0ZUdvdFVwZGF0ZWQoYWN0aXZlRGF0ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKGFjdGl2ZURhdGUgJiYgIWFjdGl2ZURhdGUuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBhY3RpdmVEYXRlLnByZXZpb3VzVmFsdWU7XG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzVmFsdWUgJiZcbiAgICAgICAgcHJldmlvdXNWYWx1ZSBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICAgICAgcHJldmlvdXNWYWx1ZS5nZXRUaW1lKCkgIT09IGFjdGl2ZURhdGUuY3VycmVudFZhbHVlLmdldFRpbWUoKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q29tcGFyZUhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24sIHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAnZGF5Jykge1xuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlckRheSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdtb250aCcpIHtcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlclllYXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoZGF0ZTEgPT09IHVuZGVmaW5lZCB8fCBkYXRlMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5JyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlckRheShkYXRlMSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aChkYXRlMSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicgJiYgdGhpcy5jb21wYXJlSGFuZGxlclllYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcihkYXRlMSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cblxuICBzZXRSZWZyZXNoVmlld0hhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24sIHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAnZGF5Jykge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5JyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGVGaWx0ZXIoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0KGRhdGUsIGZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBpc0FjdGl2ZShkYXRlT2JqZWN0OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb21wYXJlKGRhdGVPYmplY3QuZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSA9PT0gMCkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlSWQgPSBkYXRlT2JqZWN0LnVpZDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBjcmVhdGVEYXRlT2JqZWN0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogYW55IHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3QgZGF0ZU9iamVjdDogYW55ID0ge307XG4gICAgZGF0ZU9iamVjdC5kYXRlID0gbmV3IERhdGUoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKVxuICAgICk7XG4gICAgZGF0ZU9iamVjdC5kYXRlID0gdGhpcy5maXhUaW1lWm9uZShkYXRlT2JqZWN0LmRhdGUpO1xuICAgIGRhdGVPYmplY3QubGFiZWwgPSB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgZm9ybWF0KTtcbiAgICBkYXRlT2JqZWN0LnNlbGVjdGVkID0gdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMuc2VsZWN0ZWREYXRlKSA9PT0gMDtcbiAgICBkYXRlT2JqZWN0LmRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKGRhdGUpO1xuICAgIGRhdGVPYmplY3QuY3VycmVudCA9IHRoaXMuY29tcGFyZShkYXRlLCBuZXcgRGF0ZSgpKSA9PT0gMDtcbiAgICBkYXRlT2JqZWN0LmN1c3RvbUNsYXNzID0gdGhpcy5nZXRDdXN0b21DbGFzc0ZvckRhdGUoZGF0ZU9iamVjdC5kYXRlKTtcblxuICAgIHJldHVybiBkYXRlT2JqZWN0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzcGxpdChhcnI6IGFueVtdLCBzaXplOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IGFycmF5czogYW55W10gPSBbXTtcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIGFycmF5cy5wdXNoKGFyci5zcGxpY2UoMCwgc2l6ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheXM7XG4gIH1cblxuICAvLyBGaXggYSBoYXJkLXJlcHJvZHVjaWJsZSBidWcgd2l0aCB0aW1lem9uZXNcbiAgLy8gVGhlIGJ1ZyBkZXBlbmRzIG9uIE9TLCBicm93c2VyLCBjdXJyZW50IHRpbWV6b25lIGFuZCBjdXJyZW50IGRhdGVcbiAgLy8gaS5lLlxuICAvLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTQsIDAsIDEpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksXG4gIC8vIGRhdGUuZ2V0SG91cnMoKSk7IGNhbiByZXN1bHQgaW4gXCIyMDEzIDExIDMxIDIzXCIgYmVjYXVzZSBvZiB0aGUgYnVnLlxuICBmaXhUaW1lWm9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKSxcbiAgICAgIGhvdXJzID09PSAyMyA/IGhvdXJzICsgMiA6IDBcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0KGRhdGU6IERhdGUsIGlzTWFudWFsID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1pbk1vZGUpIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmVEYXRlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5maXhUaW1lWm9uZSh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgaWYgKGlzTWFudWFsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZS5nZXREYXRlKClcbiAgICAgICk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmZpeFRpbWVab25lKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICBpZiAoaXNNYW51YWwpIHtcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbXG4gICAgICAgICAgdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpIC0gMVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlLnZhbHVlT2YoKSk7XG4gICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIG1vdmUoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgbGV0IGV4cGVjdGVkU3RlcDogYW55O1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5Jykge1xuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwRGF5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnKSB7XG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBNb250aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInKSB7XG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBZZWFyO1xuICAgIH1cblxuICAgIGlmIChleHBlY3RlZFN0ZXApIHtcbiAgICAgIGNvbnN0IHllYXIgPVxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIGRpcmVjdGlvbiAqIChleHBlY3RlZFN0ZXAueWVhcnMgfHwgMCk7XG4gICAgICBjb25zdCBtb250aCA9XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgZGlyZWN0aW9uICogKGV4cGVjdGVkU3RlcC5tb250aHMgfHwgMCk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XG5cbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTW9kZShfZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBfZGlyZWN0aW9uIHx8IDE7XG5cbiAgICBpZiAoXG4gICAgICAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5tYXhNb2RlICYmIGRpcmVjdGlvbiA9PT0gMSkgfHxcbiAgICAgICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1pbk1vZGUgJiYgZGlyZWN0aW9uID09PSAtMSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGVwaWNrZXJNb2RlID0gdGhpcy5tb2Rlc1tcbiAgICAgIHRoaXMubW9kZXMuaW5kZXhPZih0aGlzLmRhdGVwaWNrZXJNb2RlKSArIGRpcmVjdGlvblxuICAgIF07XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEN1c3RvbUNsYXNzRm9yRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLy8gdG9kbzogYnVpbGQgYSBoYXNoIG9mIGN1c3RvbSBjbGFzc2VzLCBpdCB3aWxsIHdvcmsgZmFzdGVyXG4gICAgY29uc3QgY3VzdG9tQ2xhc3NPYmplY3Q6IHtcbiAgICAgIGRhdGU6IERhdGU7XG4gICAgICBtb2RlOiBzdHJpbmc7XG4gICAgICBjbGF6ejogc3RyaW5nO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgfSA9IHRoaXMuY3VzdG9tQ2xhc3MuZmluZCgoY3VzdG9tQ2xhc3M6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgY3VzdG9tQ2xhc3MuZGF0ZS52YWx1ZU9mKCkgPT09IGRhdGUudmFsdWVPZigpICYmXG4gICAgICAgIGN1c3RvbUNsYXNzLm1vZGUgPT09IHRoaXMuZGF0ZXBpY2tlck1vZGVcbiAgICAgICk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tQ2xhc3NPYmplY3QgPT09IHVuZGVmaW5lZCA/ICcnIDogY3VzdG9tQ2xhc3NPYmplY3QuY2xheno7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcGFyZURhdGVEaXNhYmxlZChcbiAgICBkYXRlMURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9LFxuICAgIGRhdGUyOiBEYXRlXG4gICk6IG51bWJlciB7XG4gICAgaWYgKGRhdGUxRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRlMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICdkYXknICYmIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgbGV0IGlzRGF0ZURpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZGF0ZURpc2FibGVkKSB7XG4gICAgICB0aGlzLmRhdGVEaXNhYmxlZC5mb3JFYWNoKFxuICAgICAgICAoZGlzYWJsZWREYXRlOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY29tcGFyZURhdGVEaXNhYmxlZChkaXNhYmxlZERhdGUsIGRhdGUpID09PSAwKSB7XG4gICAgICAgICAgICBpc0RhdGVEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRheURpc2FibGVkKSB7XG4gICAgICBpc0RhdGVEaXNhYmxlZCA9XG4gICAgICAgIGlzRGF0ZURpc2FibGVkIHx8XG4gICAgICAgIHRoaXMuZGF5RGlzYWJsZWQuaW5kZXhPZihkYXRlLmdldERheSgpKSA+IC0xO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBpc0RhdGVEaXNhYmxlZCB8fFxuICAgICAgKHRoaXMubWluRGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA8IDApIHx8XG4gICAgICAodGhpcy5tYXhEYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1heERhdGUpID4gMClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29uZmlnIHtcbiAgbG9jYWxlID0gJ2VuJztcbiAgZGF0ZXBpY2tlck1vZGUgPSAnZGF5JztcbiAgc3RhcnRpbmdEYXkgPSAwO1xuICB5ZWFyUmFuZ2UgPSAyMDtcbiAgbWluTW9kZSA9ICdkYXknO1xuICBtYXhNb2RlID0gJ3llYXInO1xuICBzaG93V2Vla3MgPSB0cnVlO1xuICBmb3JtYXREYXkgPSAnREQnO1xuICBmb3JtYXRNb250aCA9ICdNTU1NJztcbiAgZm9ybWF0WWVhciA9ICdZWVlZJztcbiAgZm9ybWF0RGF5SGVhZGVyID0gJ2RkJztcbiAgZm9ybWF0RGF5VGl0bGUgPSAnTU1NTSBZWVlZJztcbiAgZm9ybWF0TW9udGhUaXRsZSA9ICdZWVlZJztcbiAgb25seUN1cnJlbnRNb250aCA9IGZhbHNlO1xuICBtb250aENvbExpbWl0ID0gMztcbiAgeWVhckNvbExpbWl0ID0gNTtcbiAgc2hvcnRjdXRQcm9wYWdhdGlvbiA9IGZhbHNlO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3Rvci1uYW1lIGNvbXBvbmVudC1zZWxlY3Rvci10eXBlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGF0ZXBpY2tlci1pbm5lciBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAodXBkYXRlKT1cIm9uVXBkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwiY29uZmlnLmxvY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGVwaWNrZXJNb2RlXT1cImRhdGVwaWNrZXJNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5pdERhdGVdPVwiaW5pdERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttaW5Nb2RlXT1cIm1pbk1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFttYXhNb2RlXT1cIm1heE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzaG93V2Vla3NdPVwic2hvd1dlZWtzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5XT1cImZvcm1hdERheVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoXT1cImZvcm1hdE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0WWVhcl09XCJmb3JtYXRZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5SGVhZGVyXT1cImZvcm1hdERheUhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheVRpdGxlXT1cImZvcm1hdERheVRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhUaXRsZV09XCJmb3JtYXRNb250aFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRpbmdEYXldPVwic3RhcnRpbmdEYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIFt5ZWFyUmFuZ2VdPVwieWVhclJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY3VzdG9tQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlRGlzYWJsZWRdPVwiZGF0ZURpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF5RGlzYWJsZWRdPVwiZGF5RGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtvbmx5Q3VycmVudE1vbnRoXT1cIm9ubHlDdXJyZW50TW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzaG9ydGN1dFByb3BhZ2F0aW9uXT1cInNob3J0Y3V0UHJvcGFnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIFttb250aENvbExpbWl0XT1cIm1vbnRoQ29sTGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIFt5ZWFyQ29sTGltaXRdPVwieWVhckNvbExpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uRG9uZSk9XCJvblNlbGVjdGlvbkRvbmUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZURhdGVDaGFuZ2UpPVwib25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxkYXlwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9kYXlwaWNrZXI+XG4gICAgICA8bW9udGhwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9tb250aHBpY2tlcj5cbiAgICAgIDx5ZWFycGlja2VyIHRhYmluZGV4PVwiMFwiPjwveWVhcnBpY2tlcj5cbiAgICA8L2RhdGVwaWNrZXItaW5uZXI+XG4gICAgYCxcbiAgcHJvdmlkZXJzOiBbREFURVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbi8qIHRzbGludDplbmFibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKiogc2V0cyBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlID0gJ2RheSc7XG4gIC8qKiBkZWZhdWx0IGRhdGUgdG8gc2hvdyBpZiBgbmctbW9kZWxgIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQgKi9cbiAgQElucHV0KCkgaW5pdERhdGU6IERhdGU7XG4gIC8qKiAgb2xkZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICAvKiogbGF0ZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICAvKiogc2V0IGxvd2VyIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cbiAgQElucHV0KCkgbWluTW9kZTogc3RyaW5nO1xuICAvKiogc2V0cyB1cHBlciBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIG1heE1vZGU6IHN0cmluZztcbiAgLyoqIGlmIGZhbHNlIHdlZWsgbnVtYmVycyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBzaG93V2Vla3MgPSB0cnVlO1xuICAvKiogZm9ybWF0IG9mIGRheSBpbiBtb250aCAqL1xuICBASW5wdXQoKSBmb3JtYXREYXk6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiBtb250aCBpbiB5ZWFyICovXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgeWVhciBpbiB5ZWFyIHJhbmdlICovXG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiBkYXkgaW4gd2VlayBoZWFkZXIgKi9cbiAgQElucHV0KCkgZm9ybWF0RGF5SGVhZGVyOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgZGF5ICovXG4gIEBJbnB1dCgpIGZvcm1hdERheVRpdGxlOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgbW9udGggKi9cbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xuICAvKiogc3RhcnRpbmcgZGF5IG9mIHRoZSB3ZWVrIGZyb20gMC02ICgwPVN1bmRheSwgLi4uLCA2PVNhdHVyZGF5KSAqL1xuICBASW5wdXQoKSBzdGFydGluZ0RheTogbnVtYmVyO1xuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiB5ZWFyIHNlbGVjdGlvbiAqL1xuICBASW5wdXQoKSB5ZWFyUmFuZ2U6IG51bWJlcjtcbiAgLyoqIGlmIHRydWUgb25seSBkYXRlcyBmcm9tIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG1vbnRoIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgc2hvcnRjdXRgcyBldmVudCBwcm9wYWdhdGlvbiB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIHNob3J0Y3V0UHJvcGFnYXRpb246IGJvb2xlYW47XG4gIC8qKiBudW1iZXIgb2YgbW9udGhzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgbW9udGggcGlja2VyICovXG4gIEBJbnB1dCgpIG1vbnRoQ29sTGltaXQ6IG51bWJlcjtcbiAgLyoqIG51bWJlciBvZiB5ZWFycyBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgcm93IG9mIHllYXIgcGlja2VyICovXG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xuICAvKiogYXJyYXkgb2YgY3VzdG9tIGNzcyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgdG8gdGFyZ2V0ZWQgZGF0ZXMgKi9cbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nOyBjbGF6ejogc3RyaW5nIH1bXTtcbiAgLyoqIGFycmF5IG9mIGRpc2FibGVkIGRhdGVzICovXG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfVtdO1xuICAvKiogZGlzYWJsZWQgZGF5cyBvZiB0aGUgd2VlayBmcm9tIDAtNiAoMD1TdW5kYXksIC4uLiwgNj1TYXR1cmRheSkgKi9cbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xuXG4gIC8qKiBjdXJyZW50bHkgYWN0aXZlIGRhdGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGUgfHwgdGhpcy5fbm93O1xuICB9XG5cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xuXG4gIC8qKiBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgYWN0aXZlRGF0ZSBpcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KClcbiAgYWN0aXZlRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPihcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICBAVmlld0NoaWxkKERhdGVQaWNrZXJJbm5lckNvbXBvbmVudClcbiAgX2RhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgY29uZmlnOiBEYXRlcGlja2VyQ29uZmlnO1xuXG4gIHByb3RlY3RlZCBfbm93OiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJvdGVjdGVkIF9hY3RpdmVEYXRlOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucygpO1xuICB9XG5cbiAgY29uZmlndXJlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGV2ZW50OiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZXZlbnQ7XG4gICAgdGhpcy5vbkNoYW5nZShldmVudCk7XG4gIH1cblxuICBvblNlbGVjdGlvbkRvbmUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbkRvbmUuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkFjdGl2ZURhdGVDaGFuZ2UoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbiAgLy8gdG9kbzogc3VwcG9ydCBudWxsIHZhbHVlXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGVQaWNrZXIuY29tcGFyZSh2YWx1ZSwgdGhpcy5fYWN0aXZlRGF0ZSkgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdmFsdWU7XG4gICAgICB0aGlzLl9kYXRlUGlja2VyLnNlbGVjdCh2YWx1ZSwgZmFsc2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iLCIvLyBAZGVwcmVjYXRlZFxuLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RheXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5J1wiIHJvbGU9XCJncmlkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cImFjdGl2ZURhdGVJZFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj7DosKAwrk8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj4mbHQ7PC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiNSArIChkYXRlUGlja2VyLnNob3dXZWVrcyA/IDEgOiAwKVwiPlxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPsOiwoDCujwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNCczRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj4mZ3Q7XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0aCAqbmdJZj1cImRhdGVQaWNrZXIuc2hvd1dlZWtzXCI+PC90aD5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgbGFiZWx6IG9mIGxhYmVsc1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHNtYWxsIGFyaWEtbGFiZWw9XCJsYWJlbHouZnVsbFwiPjxiPnt7IGxhYmVsei5hYmJyIH19PC9iPjwvc21hbGw+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwicm93c1wiIGxldC1yb3d6PVwiJGltcGxpY2l0XCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgIDx0ciAqbmdJZj1cIiEoZGF0ZVBpY2tlci5vbmx5Q3VycmVudE1vbnRoICYmIHJvd3pbMF0uc2Vjb25kYXJ5ICYmIHJvd3pbNl0uc2Vjb25kYXJ5KVwiPlxuICAgICAgICA8dGQgKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiIGNsYXNzPVwiaDZcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGVtPnt7IHdlZWtOdW1iZXJzW2luZGV4XSB9fTwvZW0+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2lkXT1cImR0ei51aWRcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSB7e2R0ei5jdXN0b21DbGFzc319XCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIShkYXRlUGlja2VyLm9ubHlDdXJyZW50TW9udGggJiYgZHR6LnNlY29uZGFyeSlcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tc2Vjb25kYXJ5JzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQsIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1kZWZhdWx0JzogIWlzQnM0fVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZHR6LmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtbXV0ZWQnOiBkdHouc2Vjb25kYXJ5IHx8IGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdCAuYnRuLXNlY29uZGFyeSB7XG4gICAgICBjb2xvcjogIzI5MmIyYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgfVxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1tdXRlZCB7XG4gICAgICBjb2xvcjogIzI5MmIyYyAhaW1wb3J0YW50O1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERheVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxhYmVsczogYW55W10gPSBbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgcm93czogYW55W10gPSBbXTtcbiAgd2Vla051bWJlcnM6IG51bWJlcltdID0gW107XG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xuICB9XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIC8qcHJvdGVjdGVkIGdldERheXNJbk1vbnRoKHllYXI6bnVtYmVyLCBtb250aDpudW1iZXIpIHtcbiAgIHJldHVybiAoKG1vbnRoID09PSAxKSAmJiAoeWVhciAlIDQgPT09IDApICYmXG4gICAoKHllYXIgJSAxMDAgIT09IDApIHx8ICh5ZWFyICUgNDAwID09PSAwKSkpID8gMjkgOiBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgIH0qL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwRGF5ID0geyBtb250aHM6IDEgfTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCB5ZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRoaXMuc3RhcnRpbmdEYXkgLSBmaXJzdERheU9mTW9udGguZ2V0RGF5KCk7XG4gICAgICBjb25zdCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA9XG4gICAgICAgIGRpZmZlcmVuY2UgPiAwID8gNyAtIGRpZmZlcmVuY2UgOiAtZGlmZmVyZW5jZTtcbiAgICAgIGNvbnN0IGZpcnN0RGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aC5nZXRUaW1lKCkpO1xuXG4gICAgICBpZiAobnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPiAwKSB7XG4gICAgICAgIGZpcnN0RGF0ZS5zZXREYXRlKC1udW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCArIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyA0MiBpcyB0aGUgbnVtYmVyIG9mIGRheXMgb24gYSBzaXgtd2VlayBjYWxlbmRhclxuICAgICAgY29uc3QgX2RheXM6IERhdGVbXSA9IHNlbGYuZ2V0RGF0ZXMoZmlyc3REYXRlLCA0Mik7XG4gICAgICBjb25zdCBkYXlzOiBhbnlbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IF9kYXRlT2JqZWN0ID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KF9kYXlzW2ldLCB0aGlzLmZvcm1hdERheSk7XG4gICAgICAgIF9kYXRlT2JqZWN0LnNlY29uZGFyeSA9IF9kYXlzW2ldLmdldE1vbnRoKCkgIT09IG1vbnRoO1xuICAgICAgICBfZGF0ZU9iamVjdC51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcbiAgICAgICAgZGF5c1tpXSA9IF9kYXRlT2JqZWN0O1xuICAgICAgfVxuXG4gICAgICBzZWxmLmxhYmVscyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0gPSB7fTtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uYWJiciA9IHRoaXMuZGF0ZUZpbHRlcihcbiAgICAgICAgICBkYXlzW2pdLmRhdGUsXG4gICAgICAgICAgdGhpcy5mb3JtYXREYXlIZWFkZXJcbiAgICAgICAgKTtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uZnVsbCA9IHRoaXMuZGF0ZUZpbHRlcihkYXlzW2pdLmRhdGUsICdFRUVFJyk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYudGl0bGUgPSB0aGlzLmRhdGVGaWx0ZXIodGhpcy5hY3RpdmVEYXRlLCB0aGlzLmZvcm1hdERheVRpdGxlKTtcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQoZGF5cywgNyk7XG5cbiAgICAgIGlmICh0aGlzLnNob3dXZWVrcykge1xuICAgICAgICBzZWxmLndlZWtOdW1iZXJzID0gW107XG4gICAgICAgIGNvbnN0IHRodXJzZGF5SW5kZXggPSAoNCArIDcgLSB0aGlzLnN0YXJ0aW5nRGF5KSAlIDc7XG4gICAgICAgIGNvbnN0IG51bVdlZWtzID0gc2VsZi5yb3dzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgY3VyV2VlayA9IDA7IGN1cldlZWsgPCBudW1XZWVrczsgY3VyV2VlaysrKSB7XG4gICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy5wdXNoKFxuICAgICAgICAgICAgc2VsZi5nZXRJU084NjAxV2Vla051bWJlcihzZWxmLnJvd3NbY3VyV2Vla11bdGh1cnNkYXlJbmRleF0uZGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgJ2RheScpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxuICAgICAgZGF0ZTE6IERhdGUsXG4gICAgICBkYXRlMjogRGF0ZVxuICAgICk6IG51bWJlciB7XG4gICAgICBjb25zdCBkMSA9IG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCksIGRhdGUxLmdldERhdGUoKSk7XG4gICAgICBjb25zdCBkMiA9IG5ldyBEYXRlKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCksIGRhdGUyLmdldERhdGUoKSk7XG4gICAgICByZXR1cm4gZDEuZ2V0VGltZSgpIC0gZDIuZ2V0VGltZSgpO1xuICAgIH0sICdkYXknKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERhdGVzKHN0YXJ0RGF0ZTogRGF0ZSwgbjogbnVtYmVyKTogRGF0ZVtdIHtcbiAgICBjb25zdCBkYXRlczogRGF0ZVtdID0gbmV3IEFycmF5KG4pO1xuICAgIGxldCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBkYXRlOiBEYXRlO1xuICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQuZ2V0VGltZSgpKTtcbiAgICAgIGRhdGUgPSB0aGlzLmRhdGVQaWNrZXIuZml4VGltZVpvbmUoZGF0ZSk7XG4gICAgICBkYXRlc1tpKytdID0gZGF0ZTtcbiAgICAgIGN1cnJlbnQgPSBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpICsgMVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldElTTzg2MDFXZWVrTnVtYmVyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIGNvbnN0IGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAvLyBUaHVyc2RheVxuICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgKyA0IC0gKGNoZWNrRGF0ZS5nZXREYXkoKSB8fCA3KSk7XG4gICAgY29uc3QgdGltZSA9IGNoZWNrRGF0ZS5nZXRUaW1lKCk7XG4gICAgLy8gQ29tcGFyZSB3aXRoIEphbiAxXG4gICAgY2hlY2tEYXRlLnNldE1vbnRoKDApO1xuICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmZsb29yKE1hdGgucm91bmQoKHRpbWUgLSBjaGVja0RhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSAvIDcpICsgMVxuICAgICk7XG4gIH1cblxuICAvLyB0b2RvOiBrZXkgZXZlbnRzIGltcGxlbWVudGF0aW9uXG59XG4iLCIvLyBAZGVwcmVjYXRlZFxuLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9udGhwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuPHRhYmxlICpuZ0lmPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZT09PSdtb250aCdcIiByb2xlPVwiZ3JpZFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCuTwvYnV0dG9uPjwvdGg+XG4gICAgICA8dGggW2F0dHIuY29sc3Bhbl09XCIoKGRhdGVQaWNrZXIubW9udGhDb2xMaW1pdCAtIDIpIDw9IDApID8gMSA6IGRhdGVQaWNrZXIubW9udGhDb2xMaW1pdCAtIDJcIj5cbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci50b2dnbGVNb2RlKDApXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gbWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBtYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPiBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj7DosKAwro8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93eiBvZiByb3dzXCI+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFthdHRyLmlkXT1cImR0ei51aWRcIiBbbmdDbGFzc109XCJkdHouY3VzdG9tQ2xhc3NcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tbGluayc6IGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkIHx8IChpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSksIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KX1cIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LXN1Y2Nlc3MnOiBpc0JzNCAmJiBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JzNCAmJiBkdHouY3VycmVudH1cIj57eyBkdHoubGFiZWwgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZTogc3RyaW5nO1xuICByb3dzOiBhbnlbXSA9IFtdO1xuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XG4gIG1heE1vZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xuICB9XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnN0ZXBNb250aCA9IHsgeWVhcnM6IDEgfTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCBtb250aHM6IGFueVtdID0gbmV3IEFycmF5KDEyKTtcbiAgICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgbGV0IGRhdGU6IERhdGU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgaSwgMSk7XG4gICAgICAgIGRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGUpO1xuICAgICAgICBtb250aHNbaV0gPSB0aGlzLmNyZWF0ZURhdGVPYmplY3QoZGF0ZSwgdGhpcy5mb3JtYXRNb250aCk7XG4gICAgICAgIG1vbnRoc1tpXS51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcbiAgICAgIH1cblxuICAgICAgc2VsZi50aXRsZSA9IHRoaXMuZGF0ZUZpbHRlcih0aGlzLmFjdGl2ZURhdGUsIHRoaXMuZm9ybWF0TW9udGhUaXRsZSk7XG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KG1vbnRocywgc2VsZi5kYXRlUGlja2VyLm1vbnRoQ29sTGltaXQpO1xuICAgIH0sICdtb250aCcpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxuICAgICAgZGF0ZTE6IERhdGUsXG4gICAgICBkYXRlMjogRGF0ZVxuICAgICk6IG51bWJlciB7XG4gICAgICBjb25zdCBkMSA9IG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCkpO1xuICAgICAgY29uc3QgZDIgPSBuZXcgRGF0ZShkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpKTtcbiAgICAgIHJldHVybiBkMS5nZXRUaW1lKCkgLSBkMi5nZXRUaW1lKCk7XG4gICAgfSwgJ21vbnRoJyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIC8vIHRvZG86IGtleSBldmVudHMgaW1wbGVtZW50YXRpb25cbn1cbiIsIi8vIEBkZXByZWNhdGVkXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd5ZWFycGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGU9PT0neWVhcidcIiByb2xlPVwiZ3JpZFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCuTwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIigoZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQgLSAyKSA8PSAwKSA/IDEgOiBkYXRlUGlja2VyLnllYXJDb2xMaW1pdCAtIDJcIj5cbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCIgcm9sZT1cImhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCujwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3d6IG9mIHJvd3NcIj5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2F0dHIuaWRdPVwiZHR6LnVpZFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1saW5rJzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQgfHwgKGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopKSwgZGlzYWJsZWQ6IGR0ei5kaXNhYmxlZCwgYWN0aXZlOiAhaXNCczQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopfVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIuc2VsZWN0KGR0ei5kYXRlKVwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtc3VjY2Vzcyc6IGlzQnM0ICYmIGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QgLmJ0bi1pbmZvIC50ZXh0LXN1Y2Nlc3Mge1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBZZWFyUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xuICB0aXRsZTogc3RyaW5nO1xuICByb3dzOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlciA9IGRhdGVQaWNrZXI7XG4gIH1cblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcFllYXIgPSB7IHllYXJzOiB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlIH07XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGZ1bmN0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgeWVhcnM6IGFueVtdID0gbmV3IEFycmF5KHRoaXMueWVhclJhbmdlKTtcbiAgICAgIGxldCBkYXRlOiBEYXRlO1xuICAgICAgY29uc3Qgc3RhcnQgPSBzZWxmLmdldFN0YXJ0aW5nWWVhcih0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZWFyUmFuZ2U7IGkrKykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoc3RhcnQgKyBpLCAwLCAxKTtcbiAgICAgICAgZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZSk7XG4gICAgICAgIHllYXJzW2ldID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0WWVhcik7XG4gICAgICAgIHllYXJzW2ldLnVpZCA9IHRoaXMudW5pcXVlSWQgKyAnLScgKyBpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRpdGxlID0gW3llYXJzWzBdLmxhYmVsLCB5ZWFyc1t0aGlzLnllYXJSYW5nZSAtIDFdLmxhYmVsXS5qb2luKFxuICAgICAgICAnIC0gJ1xuICAgICAgKTtcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQoeWVhcnMsIHNlbGYuZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQpO1xuICAgIH0sICd5ZWFyJyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Q29tcGFyZUhhbmRsZXIoZnVuY3Rpb24oXG4gICAgICBkYXRlMTogRGF0ZSxcbiAgICAgIGRhdGUyOiBEYXRlXG4gICAgKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiBkYXRlMS5nZXRGdWxsWWVhcigpIC0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcbiAgICB9LCAneWVhcicpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U3RhcnRpbmdZZWFyKHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gdG9kbzogcGFyc2VJbnRcbiAgICByZXR1cm4gKFxuICAgICAgKHllYXIgLSAxKSAvIHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UgKiB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlICsgMVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXlwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aHBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgWWVhclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4veWVhcnBpY2tlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50LFxuICAgIERheVBpY2tlckNvbXBvbmVudCxcbiAgICBNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBZZWFyUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCxcbiAgICBEYXlQaWNrZXJDb21wb25lbnQsXG4gICAgTW9udGhQaWNrZXJDb21wb25lbnQsXG4gICAgWWVhclBpY2tlckNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXRlUGlja2VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERhdGVwaWNrZXJNb2R1bGUsIHByb3ZpZGVyczogW0RhdGVwaWNrZXJDb25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJoZWlnaHQiLCJ3aWR0aCIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQVlBOzs7Ozs7OEJBeUNtQixhQUFhOzs2QkFHZCxDQUFDOzs7OytCQUlDLElBQUk7K0JBRUosR0FBRzs7OEJBRUosS0FBSzs7OztnQ0FJSCxHQUFHOzswQkFHVCxNQUFNO3lCQUNQLE1BQU07d0JBQ1AsR0FBRzswQkFDRCxNQUFNO3lCQUNQLE1BQU07MkJBQ0osR0FBRzs7OztZQWpFbEIsVUFBVTs7Ozs7Ozs7OztBQ09YOztpQ0FLdUMsRUFBRTs7Ozs7O0lBRXZDLElBQUksT0FBTyxDQUFDLEtBQVc7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBVztRQUNyQixJQUFJLENBQUMsUUFBUSxD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