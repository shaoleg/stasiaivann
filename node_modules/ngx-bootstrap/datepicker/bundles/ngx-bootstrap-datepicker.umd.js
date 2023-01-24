(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ngx-bootstrap/chronos'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/component-loader'), require('@angular/forms'), require('@angular/common'), require('ngx-bootstrap/positioning'), require('ngx-bootstrap/utils')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/datepicker', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ngx-bootstrap/chronos', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/component-loader', '@angular/forms', '@angular/common', 'ngx-bootstrap/positioning', 'ngx-bootstrap/utils'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].datepicker = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.chronos,global.miniNgrx,global.componentLoader,global.ng.forms,global.ng.common,global.positioning,global.utils));
}(this, (function (exports,core,rxjs,operators,chronos,miniNgrx,componentLoader,forms,common,positioning,utils) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
     * except `displayMonths`, for range picker it default to `2`
     */
    var BsDatepickerConfig = (function () {
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
            { type: core.Injectable }
        ];
        return BsDatepickerConfig;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ BsDatepickerAbstractComponent = (function () {
        function BsDatepickerAbstractComponent() {
            this._customRangesFish = [];
        }
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setMinDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setMaxDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setDaysDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setDatesDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
    var BsDatepickerActions = (function () {
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
            { type: core.Injectable }
        ];
        return BsDatepickerActions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsLocaleService = (function () {
        function BsLocaleService() {
            this._defaultLocale = 'en';
            this._locale = new rxjs.BehaviorSubject(this._defaultLocale);
            this._localeChange = this._locale.asObservable();
        }
        Object.defineProperty(BsLocaleService.prototype, "locale", {
            get: /**
             * @return {?}
             */ function () {
                return this._locale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "localeChange", {
            get: /**
             * @return {?}
             */ function () {
                return this._localeChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Injectable }
        ];
        return BsLocaleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerEffects = (function () {
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
                    .pipe(operators.filter(function (months) { return !!months; }));
                // month calendar
                container.monthsCalendar = this._store
                    .select(function (state) { return state.flaggedMonthsCalendar; })
                    .pipe(operators.filter(function (months) { return !!months; }));
                // year calendar
                container.yearsCalendar = this._store
                    .select(function (state) { return state.yearsCalendarFlagged; })
                    .pipe(operators.filter(function (years) { return !!years; }));
                container.viewMode = this._store.select(function (state) { return state.view.mode; });
                container.options = this._store
                    .select(function (state) { return state.showWeekNumbers; })
                    .pipe(operators.map(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); }));
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
                    var /** @type {?} */ _cell = (event.cell);
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
                            month: chronos.getMonth(event.date),
                            year: chronos.getFullYear(event.date)
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
                            year: chronos.getFullYear(event.date)
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
                    .pipe(operators.filter(function (monthModel) { return !!monthModel; }))
                    .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
                // flag day values
                this._subs.push(this._store
                    .select(function (state) { return state.formattedMonths; })
                    .pipe(operators.filter(function (month) { return !!month; }))
                    .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
                // flag day values
                this._subs.push(this._store
                    .select(function (state) { return state.selectedDate; })
                    .pipe(operators.filter(function (selectedDate) { return !!selectedDate; }))
                    .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
                // flag for date range picker
                this._subs.push(this._store
                    .select(function (state) { return state.selectedRange; })
                    .pipe(operators.filter(function (selectedRange) { return !!selectedRange; }))
                    .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
                // monthsCalendar
                this._subs.push(this._store
                    .select(function (state) { return state.monthsCalendar; })
                    .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
                // years calendar
                this._subs.push(this._store
                    .select(function (state) { return state.yearsCalendarModel; })
                    .pipe(operators.filter(function (state) { return !!state; }))
                    .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
                // on hover
                this._subs.push(this._store
                    .select(function (state) { return state.hoveredDate; })
                    .pipe(operators.filter(function (hoveredDate) { return !!hoveredDate; }))
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        BsDatepickerEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerEffects.ctorParameters = function () {
            return [
                { type: BsDatepickerActions, },
                { type: BsLocaleService, },
            ];
        };
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
        if (chronos.isFirstDayOfWeek(date, options.firstDayOfWeek)) {
            return date;
        }
        var /** @type {?} */ weekDay = chronos.getDay(date);
        var /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
        return chronos.shiftDate(date, { day: -offset });
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
        var /** @type {?} */ minBound = min && chronos.isBefore(chronos.endOf(date, 'month'), min, 'day');
        var /** @type {?} */ maxBound = max && chronos.isAfter(chronos.startOf(date, 'month'), max, 'day');
        return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function isYearDisabled(date, min, max) {
        var /** @type {?} */ minBound = min && chronos.isBefore(chronos.endOf(date, 'year'), min, 'day');
        var /** @type {?} */ maxBound = max && chronos.isAfter(chronos.startOf(date, 'year'), max, 'day');
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
        return datesDisabled.some(function (dateDisabled) { return chronos.isSame(date, dateDisabled, 'date'); });
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
                prevValue = chronos.shiftDate(prevValue, options.shift);
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
        var /** @type {?} */ firstDay = chronos.getFirstDayOfMonth(startingDate);
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
            monthTitle: chronos.formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
            yearTitle: chronos.formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
            weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
            weekdays: getShiftedWeekdays(formatOptions.locale),
            weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
                return ({
                    days: week.map(function (date, dayIndex) {
                        return ({
                            date: date,
                            label: chronos.formatDate(date, formatOptions.dayLabel, formatOptions.locale),
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
        return daysMatrix.map(function (days) { return (days[0] ? chronos.formatDate(days[0], format, locale) : ''); });
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    function getShiftedWeekdays(locale) {
        var /** @type {?} */ _locale = chronos.getLocale(locale);
        var /** @type {?} */ weekdays = (_locale.weekdaysShort());
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
                var /** @type {?} */ isOtherMonth = !chronos.isSameMonth(day.date, formattedMonth.month);
                var /** @type {?} */ isHovered = !isOtherMonth && chronos.isSameDay(day.date, options.hoveredDate);
                // date range picker
                var /** @type {?} */ isSelectionStart = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[0]);
                var /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[1]);
                var /** @type {?} */ isSelected = (!isOtherMonth && chronos.isSameDay(day.date, options.selectedDate)) ||
                    isSelectionStart ||
                    isSelectionEnd;
                var /** @type {?} */ isInRange = !isOtherMonth &&
                    options.selectedRange &&
                    isDateInRange(day.date, options.selectedRange, options.hoveredDate);
                var /** @type {?} */ isDisabled = options.isDisabled ||
                    chronos.isBefore(day.date, options.minDate, 'day') ||
                    chronos.isAfter(day.date, options.maxDate, 'day') ||
                    chronos.isDisabledDay(day.date, options.daysDisabled) ||
                    isDisabledDate(day.date, options.datesDisabled);
                var /** @type {?} */ currentDate = new Date();
                var /** @type {?} */ isToday = !isOtherMonth && chronos.isSameDay(day.date, currentDate);
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
        formattedMonth.disableLeftArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
        formattedMonth.disableRightArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
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
        var /** @type {?} */ initialDate = chronos.startOf(viewDate, 'year');
        var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
        var /** @type {?} */ monthMatrix = createMatrix(matrixOptions, function (date) {
            return ({
                date: date,
                label: chronos.formatDate(date, formatOptions.monthLabel, formatOptions.locale)
            });
        });
        return {
            months: monthMatrix,
            monthTitle: '',
            yearTitle: chronos.formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
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
                var /** @type {?} */ isHovered = chronos.isSameMonth(month.date, options.hoveredMonth);
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
        monthCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        monthCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
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
        var /** @type {?} */ initialDate = chronos.shiftDate(viewDate, { year: initialShift });
        var /** @type {?} */ matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
        var /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, function (date) {
            return ({
                date: date,
                label: chronos.formatDate(date, formatOptions.yearLabel, formatOptions.locale)
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
        var /** @type {?} */ from = chronos.formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
        var /** @type {?} */ to = chronos.formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
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
                var /** @type {?} */ isHovered = chronos.isSameYear(year.date, options.hoveredYear);
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
        yearsCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        var /** @type {?} */ i = yearsCalendar.years.length - 1;
        var /** @type {?} */ j = yearsCalendar.years[i].length - 1;
        yearsCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
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
        if (state === void 0) {
            state = initialDatepickerState;
        }
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
                var /** @type {?} */ date = chronos.shiftDate(chronos.startOf(state.view.date, 'month'), action.payload);
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
                var /** @type {?} */ date = chronos.setFullDate(state.view.date, payload.unit);
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
                var /** @type {?} */ _viewDate = chronos.isDateValid(newState.value) && newState.value
                    || chronos.isArray(newState.value) && chronos.isDateValid(newState.value[0]) && newState.value[0]
                    || state.view.date;
                var /** @type {?} */ date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
                newState.view = { mode: mode, date: date };
                // update selected value
                if (newState.value) {
                    // if new value is array we work with date range
                    if (chronos.isArray(newState.value)) {
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
            state.monthViewOptions.firstDayOfWeek = chronos.getLocale(state.locale).firstDayOfWeek();
            var /** @type {?} */ monthsModel = new Array(displayMonths);
            for (var /** @type {?} */ monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
                viewDate = chronos.shiftDate(viewDate, { month: 1 });
            }
            return Object.assign({}, state, { monthsModel: monthsModel });
        }
        if (state.view.mode === 'month') {
            var /** @type {?} */ monthsCalendar = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: yearsPerCalendar });
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
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 16 });
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
        if (minDate && chronos.isAfter(minDate, _date, 'day')) {
            return minDate;
        }
        if (maxDate && chronos.isBefore(maxDate, _date, 'day')) {
            return maxDate;
        }
        return _date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerStore = (function (_super) {
        __extends(BsDatepickerStore, _super);
        function BsDatepickerStore() {
            var _this = this;
            var /** @type {?} */ _dispatcher = new rxjs.BehaviorSubject({
                type: '[datepicker] dispatcher init'
            });
            var /** @type {?} */ state = new miniNgrx.MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
            _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
            return _this;
        }
        BsDatepickerStore.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerStore.ctorParameters = function () { return []; };
        return BsDatepickerStore;
    }(miniNgrx.MiniStore));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerContainerComponent = (function (_super) {
        __extends(BsDatepickerContainerComponent, _super);
        function BsDatepickerContainerComponent(_config, _store, _actions, _effects) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._actions = _actions;
            _this.valueChange = new core.EventEmitter();
            _this._subs = [];
            _this._effects = _effects;
            return _this;
        }
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._effects.destroy();
                var e_1, _c;
            };
        BsDatepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
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
        BsDatepickerContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerEffects, },
            ];
        };
        return BsDatepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerDirective = (function () {
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
            this.bsValueChange = new core.EventEmitter();
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
             */ function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function (value) {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
            { type: core.Directive, args: [{
                        selector: '[bsDatepicker]',
                        exportAs: 'bsDatepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDatepickerDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "outsideEsc": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "daysDisabled": [{ type: core.Input },],
            "datesDisabled": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDatepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerInlineConfig = (function (_super) {
        __extends(BsDatepickerInlineConfig, _super);
        function BsDatepickerInlineConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BsDatepickerInlineConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerInlineConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerInlineContainerComponent = (function (_super) {
        __extends(BsDatepickerInlineContainerComponent, _super);
        function BsDatepickerInlineContainerComponent(_config, _store, _actions, _effects) {
            return _super.call(this, _config, _store, _actions, _effects) || this;
        }
        BsDatepickerInlineContainerComponent.decorators = [
            { type: core.Component, args: [{
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
        BsDatepickerInlineContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerEffects, },
            ];
        };
        return BsDatepickerInlineContainerComponent;
    }(BsDatepickerContainerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerInlineDirective = (function () {
        function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
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
             */ function (value) {
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
            { type: core.Directive, args: [{
                        selector: 'bs-datepicker-inline',
                        exportAs: 'bsDatepickerInline'
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerInlineDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerInlineConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDatepickerInlineDirective.propDecorators = {
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "datesDisabled": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDatepickerInlineDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BS_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var /** @type {?} */ BS_DATEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var BsDatepickerInputDirective = (function () {
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
                    : chronos.formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
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
                this.writeValue(((event.target)).value);
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
                if (chronos.isDate(_value)) {
                    var /** @type {?} */ _isDateValid = chronos.isDateValid(_value);
                    if (!_isDateValid) {
                        return { bsDate: { invalid: _value } };
                    }
                    if (this._picker && this._picker.minDate && chronos.isBefore(_value, this._picker.minDate, 'date')) {
                        return { bsDate: { minDate: this._picker.minDate } };
                    }
                    if (this._picker && this._picker.maxDate && chronos.isAfter(_value, this._picker.maxDate, 'date')) {
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
                    var /** @type {?} */ _locale = chronos.getLocale(_localeKey);
                    if (!_locale) {
                        throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                    }
                    this._value = chronos.parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
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
            { type: core.Directive, args: [{
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
        BsDatepickerInputDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerDirective, decorators: [{ type: core.Host },] },
                { type: BsLocaleService, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return BsDatepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerConfig = (function (_super) {
        __extends(BsDaterangepickerConfig, _super);
        function BsDaterangepickerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            return _this;
        }
        BsDaterangepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDaterangepickerConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerContainerComponent = (function (_super) {
        __extends(BsDaterangepickerContainerComponent, _super);
        function BsDaterangepickerContainerComponent(_config, _store, _actions, _effects) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._actions = _actions;
            _this.valueChange = new core.EventEmitter();
            _this._rangeStack = [];
            _this._subs = [];
            _this._effects = _effects;
            return _this;
        }
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._effects.destroy();
                var e_1, _c;
            };
        BsDaterangepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
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
        BsDaterangepickerContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerEffects, },
            ];
        };
        return BsDaterangepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerDirective = (function () {
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
            this.bsValueChange = new core.EventEmitter();
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
             */ function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function (value) {
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
                    .pipe(operators.filter(function (range) { return range && range[0] && !!range[1]; }))
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
            { type: core.Directive, args: [{
                        selector: '[bsDaterangepicker]',
                        exportAs: 'bsDaterangepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerDirective.ctorParameters = function () {
            return [
                { type: BsDaterangepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDaterangepickerDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "outsideEsc": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "datesDisabled": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDaterangepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BS_DATERANGEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var /** @type {?} */ BS_DATERANGEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var BsDaterangepickerInputDirective = (function () {
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
                        : chronos.formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                    var /** @type {?} */ end = !date[1] ? ''
                        : chronos.formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
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
                this.writeValue(((event.target)).value);
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
                if (_value === null || _value === undefined || !chronos.isArray(_value)) {
                    return null;
                }
                var /** @type {?} */ _isFirstDateValid = chronos.isDateValid(_value[0]);
                var /** @type {?} */ _isSecondDateValid = chronos.isDateValid(_value[1]);
                if (!_isFirstDateValid) {
                    return { bsDate: { invalid: _value[0] } };
                }
                if (!_isSecondDateValid) {
                    return { bsDate: { invalid: _value[1] } };
                }
                if (this._picker && this._picker.minDate && chronos.isBefore(_value[0], this._picker.minDate, 'date')) {
                    return { bsDate: { minDate: this._picker.minDate } };
                }
                if (this._picker && this._picker.maxDate && chronos.isAfter(_value[1], this._picker.maxDate, 'date')) {
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
                    var /** @type {?} */ _locale = chronos.getLocale(_localeKey);
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
                    this._value = ((_input))
                        .map(function (_val) {
                        return chronos.parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
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
            { type: core.Directive, args: [{
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
        BsDaterangepickerInputDirective.ctorParameters = function () {
            return [
                { type: BsDaterangepickerDirective, decorators: [{ type: core.Host },] },
                { type: BsLocaleService, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return BsDaterangepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCalendarLayoutComponent = (function () {
        function BsCalendarLayoutComponent() {
        }
        BsCalendarLayoutComponent.decorators = [
            { type: core.Component, args: [{
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
    var BsCurrentDateViewComponent = (function () {
        function BsCurrentDateViewComponent() {
        }
        BsCurrentDateViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-current-date',
                        template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                    }] }
        ];
        /** @nocollapse */
        BsCurrentDateViewComponent.propDecorators = {
            "title": [{ type: core.Input },],
        };
        return BsCurrentDateViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCustomDatesViewComponent = (function () {
        function BsCustomDatesViewComponent() {
        }
        BsCustomDatesViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-custom-date-view',
                        template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        BsCustomDatesViewComponent.propDecorators = {
            "isCustomRangeShown": [{ type: core.Input },],
            "ranges": [{ type: core.Input },],
        };
        return BsCustomDatesViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerDayDecoratorComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: '[bsDatepickerDayDecorator]',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
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
        BsDatepickerDayDecoratorComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        BsDatepickerDayDecoratorComponent.propDecorators = {
            "day": [{ type: core.Input },],
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
    var BsDatepickerNavigationViewComponent = (function () {
        function BsDatepickerNavigationViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-navigation-view',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerNavigationViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
        };
        return BsDatepickerNavigationViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaysCalendarViewComponent = (function () {
        function BsDaysCalendarViewComponent(_config) {
            this._config = _config;
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
            this.onHoverWeek = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'bs-days-calendar-view',
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDaysCalendarViewComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
            ];
        };
        BsDaysCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
            "onHoverWeek": [{ type: core.Output },],
        };
        return BsDaysCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsMonthCalendarViewComponent = (function () {
        function BsMonthCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'bs-month-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsMonthCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
        };
        return BsMonthCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsTimepickerViewComponent = (function () {
        function BsTimepickerViewComponent() {
            this.ampm = 'ok';
            this.hours = 0;
            this.minutes = 0;
        }
        BsTimepickerViewComponent.decorators = [
            { type: core.Component, args: [{
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
    var BsYearsCalendarViewComponent = (function () {
        function BsYearsCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'bs-years-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsYearsCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
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
    var BsDatepickerModule = (function () {
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
                        componentLoader.ComponentLoaderFactory,
                        positioning.PositioningService,
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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
    var DateFormatter = (function () {
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
                return chronos.formatDate(date, format, locale);
            };
        return DateFormatter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatePickerInnerComponent = (function () {
        function DatePickerInnerComponent() {
            this.selectionDone = new core.EventEmitter(undefined);
            this.update = new core.EventEmitter(false);
            this.activeDateChange = new core.EventEmitter(undefined);
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
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                if (isManual === void 0) {
                    isManual = true;
                }
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
            { type: core.Component, args: [{
                        selector: 'datepicker-inner',
                        template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        DatePickerInnerComponent.propDecorators = {
            "locale": [{ type: core.Input },],
            "datepickerMode": [{ type: core.Input },],
            "startingDay": [{ type: core.Input },],
            "yearRange": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "maxMode": [{ type: core.Input },],
            "showWeeks": [{ type: core.Input },],
            "formatDay": [{ type: core.Input },],
            "formatMonth": [{ type: core.Input },],
            "formatYear": [{ type: core.Input },],
            "formatDayHeader": [{ type: core.Input },],
            "formatDayTitle": [{ type: core.Input },],
            "formatMonthTitle": [{ type: core.Input },],
            "onlyCurrentMonth": [{ type: core.Input },],
            "shortcutPropagation": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "monthColLimit": [{ type: core.Input },],
            "yearColLimit": [{ type: core.Input },],
            "dateDisabled": [{ type: core.Input },],
            "dayDisabled": [{ type: core.Input },],
            "initDate": [{ type: core.Input },],
            "selectionDone": [{ type: core.Output },],
            "update": [{ type: core.Output },],
            "activeDateChange": [{ type: core.Output },],
            "activeDate": [{ type: core.Input },],
        };
        return DatePickerInnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatepickerConfig = (function () {
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
            { type: core.Injectable }
        ];
        return DatepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return DatePickerComponent; }),
        multi: true
    };
    var DatePickerComponent = (function () {
        function DatePickerComponent(config) {
            /**
             * sets datepicker mode, supports: `day`, `month`, `year`
             */
            this.datepickerMode = 'day';
            /**
             * if false week numbers will be hidden
             */
            this.showWeeks = true;
            this.selectionDone = new core.EventEmitter(undefined);
            /**
             * callback to invoke when the activeDate is changed.
             */
            this.activeDateChange = new core.EventEmitter(undefined);
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
             */ function () {
                return this._activeDate || this._now;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'datepicker',
                        template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                        providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        DatePickerComponent.ctorParameters = function () {
            return [
                { type: DatepickerConfig, },
            ];
        };
        DatePickerComponent.propDecorators = {
            "datepickerMode": [{ type: core.Input },],
            "initDate": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "maxMode": [{ type: core.Input },],
            "showWeeks": [{ type: core.Input },],
            "formatDay": [{ type: core.Input },],
            "formatMonth": [{ type: core.Input },],
            "formatYear": [{ type: core.Input },],
            "formatDayHeader": [{ type: core.Input },],
            "formatDayTitle": [{ type: core.Input },],
            "formatMonthTitle": [{ type: core.Input },],
            "startingDay": [{ type: core.Input },],
            "yearRange": [{ type: core.Input },],
            "onlyCurrentMonth": [{ type: core.Input },],
            "shortcutPropagation": [{ type: core.Input },],
            "monthColLimit": [{ type: core.Input },],
            "yearColLimit": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "dateDisabled": [{ type: core.Input },],
            "dayDisabled": [{ type: core.Input },],
            "activeDate": [{ type: core.Input },],
            "selectionDone": [{ type: core.Output },],
            "activeDateChange": [{ type: core.Output },],
            "_datePicker": [{ type: core.ViewChild, args: [DatePickerInnerComponent,] },],
        };
        return DatePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DayPickerComponent = (function () {
        function DayPickerComponent(datePicker) {
            this.labels = [];
            this.rows = [];
            this.weekNumbers = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
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
            { type: core.Component, args: [{
                        selector: 'daypicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                    }] }
        ];
        // todo: key events implementation
        /** @nocollapse */
        DayPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return DayPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthPickerComponent = (function () {
        function MonthPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
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
            { type: core.Component, args: [{
                        selector: 'monthpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        // todo: key events implementation
        /** @nocollapse */
        MonthPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return MonthPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var YearPickerComponent = (function () {
        function YearPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
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
            { type: core.Component, args: [{
                        selector: 'yearpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        YearPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return YearPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatepickerModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
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

    exports.BsDatepickerConfig = BsDatepickerConfig;
    exports.BsDatepickerDirective = BsDatepickerDirective;
    exports.BsDatepickerInlineConfig = BsDatepickerInlineConfig;
    exports.BsDatepickerInlineDirective = BsDatepickerInlineDirective;
    exports.BsDatepickerModule = BsDatepickerModule;
    exports.BsDaterangepickerConfig = BsDaterangepickerConfig;
    exports.BsDaterangepickerDirective = BsDaterangepickerDirective;
    exports.BsLocaleService = BsLocaleService;
    exports.DateFormatter = DateFormatter;
    exports.DatePickerComponent = DatePickerComponent;
    exports.DatepickerConfig = DatepickerConfig;
    exports.DatepickerModule = DatepickerModule;
    exports.DayPickerComponent = DayPickerComponent;
    exports.MonthPickerComponent = MonthPickerComponent;
    exports.YearPickerComponent = YearPickerComponent;
    exports.ɵl = BsDatepickerAbstractComponent;
    exports.ɵr = BsDatepickerInputDirective;
    exports.ɵs = BsDaterangepickerInputDirective;
    exports.ɵt = DatePickerInnerComponent;
    exports.ɵa = DATEPICKER_CONTROL_VALUE_ACCESSOR;
    exports.ɵo = BsDatepickerActions;
    exports.ɵn = BsDatepickerEffects;
    exports.ɵm = BsDatepickerStore;
    exports.ɵf = BsCalendarLayoutComponent;
    exports.ɵc = BsCurrentDateViewComponent;
    exports.ɵj = BsCustomDatesViewComponent;
    exports.ɵk = BsDatepickerContainerComponent;
    exports.ɵb = BsDatepickerDayDecoratorComponent;
    exports.ɵq = BsDatepickerInlineContainerComponent;
    exports.ɵd = BsDatepickerNavigationViewComponent;
    exports.ɵp = BsDaterangepickerContainerComponent;
    exports.ɵg = BsDaysCalendarViewComponent;
    exports.ɵh = BsMonthCalendarViewComponent;
    exports.ɵe = BsTimepickerViewComponent;
    exports.ɵi = BsYearsCalendarViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kYXRlcGlja2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXIuY29uZmlnLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWxvY2FsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL19kZWZhdWx0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdGF0ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdXRpbHMvbWF0cml4LXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mb3JtYXQtZGF5cy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mbGFnLWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvdmlldy1tb2RlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2Zvcm1hdC1tb250aHMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZm9ybWF0LXllYXJzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2ZsYWcteWVhcnMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIucmVkdWNlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtY2FsZW5kYXItbGF5b3V0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1jdXJyZW50LWRhdGUtdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItZGF5LWRlY29yYXRvci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRheXMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtbW9udGhzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLXRpbWVwaWNrZXItdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLm1vZHVsZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGUtZm9ybWF0dGVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF5cGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL21vbnRocGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3llYXJwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlXG59IGZyb20gJy4vbW9kZWxzJztcblxuXG4vKipcbiAqIEZvciBkYXRlIHJhbmdlIHBpY2tlciB0aGVyZSBhcmUgYEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnYCB3aGljaCBpbmhlcml0cyBhbGwgcHJvcGVydGllcyxcbiAqIGV4Y2VwdCBgZGlzcGxheU1vbnRoc2AsIGZvciByYW5nZSBwaWNrZXIgaXQgZGVmYXVsdCB0byBgMmBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckNvbmZpZyBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcbiAgdmFsdWU/OiBEYXRlIHwgRGF0ZVtdO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWluIGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlO1xuICAvKipcbiAgICogRGVmYXVsdCBtYXggZGF0ZSBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGU7XG5cbiAgZGF5c0Rpc2FibGVkPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW107XG4gIC8qKlxuICAgKiBNYWtlcyBkYXRlcyBmcm9tIG90aGVyIG1vbnRocyBhY3RpdmVcbiAgICovXG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWFrZXMgZGF0ZXMgZnJvbSBvdGhlciBtb250aHMgYWN0aXZlXG4gICAqL1xuICBzZWxlY3RXZWVrPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIGN1cnJlbnQgZGF5XG4gICAqL1xuICBjdXN0b21Ub2RheUNsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1vZGUgZm9yIGFsbCBkYXRlIHBpY2tlcnNcbiAgICovXG4gIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcblxuICAvKiogQ1NTIGNsYXNzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byBkYXRlcGlja2VyIGNvbnRhaW5lcixcbiAgICogdXN1YWxseSB1c2VkIHRvIHNldCBjb2xvciB0aGVtZVxuICAgKi9cbiAgY29udGFpbmVyQ2xhc3MgPSAndGhlbWUtZ3JlZW4nO1xuXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIGRpc3BsYXlNb250aHMgPSAxO1xuICAvKipcbiAgICogQWxsb3dzIHRvIGhpZGUgd2VlayBudW1iZXJzIGluIGRhdGVwaWNrZXJcbiAgICovXG4gIHNob3dXZWVrTnVtYmVycyA9IHRydWU7XG5cbiAgZGF0ZUlucHV0Rm9ybWF0ID0gJ0wnO1xuICAvLyByYW5nZSBwaWNrZXJcbiAgcmFuZ2VTZXBhcmF0b3IgPSAnIC0gJztcbiAgLyoqXG4gICAqIERhdGUgZm9ybWF0IGZvciBkYXRlIHJhbmdlIGlucHV0IGZpZWxkXG4gICAqL1xuICByYW5nZUlucHV0Rm9ybWF0ID0gJ0wnO1xuXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4gIG1vbnRoVGl0bGUgPSAnTU1NTSc7XG4gIHllYXJUaXRsZSA9ICdZWVlZJztcbiAgZGF5TGFiZWwgPSAnRCc7XG4gIG1vbnRoTGFiZWwgPSAnTU1NTSc7XG4gIHllYXJMYWJlbCA9ICdZWVlZJztcbiAgd2Vla051bWJlcnMgPSAndyc7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8vIGRhdGVwaWNrZXIgY29udGFpbmVyIGNvbXBvbmVudFxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXMgfSBmcm9tICcuLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIFdlZWtWaWV3TW9kZWwsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IHtcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgaXNPdGhlck1vbnRoc0FjdGl2ZTogYm9vbGVhbjtcblxuICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cztcbiAgX2N1c3RvbVJhbmdlc0Zpc2g6IEJzQ3VzdG9tRGF0ZXNbXSA9IFtdO1xuXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRNaW5EYXRlKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRNYXhEYXRlKHZhbHVlKTtcbiAgfVxuICBzZXQgZGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF5c0Rpc2FibGVkKHZhbHVlKTtcbiAgfVxuICBzZXQgZGF0ZXNEaXNhYmxlZCh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXRlc0Rpc2FibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREaXNhYmxlZCh2YWx1ZSk7XG4gIH1cblxuICB2aWV3TW9kZTogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZT47XG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG1vbnRoc0NhbGVuZGFyOiBPYnNlcnZhYmxlPE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICB5ZWFyc0NhbGVuZGFyOiBPYnNlcnZhYmxlPFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xuXG4gIHNldFZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge31cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQge31cblxuICBkYXlIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxuXG4gIHdlZWtIb3ZlckhhbmRsZXIoZXZlbnQ6IFdlZWtWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgbW9udGhIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxuXG4gIHllYXJIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxuXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgbW9udGhTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgeWVhclNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBfc3RvcFByb3BhZ2F0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzVmlld05hdmlnYXRpb25FdmVudCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG59IGZyb20gJy4uL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJBY3Rpb25zIHtcbiAgc3RhdGljIHJlYWRvbmx5IENBTENVTEFURSA9ICdbZGF0ZXBpY2tlcl0gY2FsY3VsYXRlIGRhdGVzIG1hdHJpeCc7XG4gIHN0YXRpYyByZWFkb25seSBGT1JNQVQgPSAnW2RhdGVwaWNrZXJdIGZvcm1hdCBkYXRlcGlja2VyIHZhbHVlcyc7XG4gIHN0YXRpYyByZWFkb25seSBGTEFHID0gJ1tkYXRlcGlja2VyXSBzZXQgZmxhZ3MnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VMRUNUID0gJ1tkYXRlcGlja2VyXSBzZWxlY3QgZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBOQVZJR0FURV9PRkZTRVQgPSAnW2RhdGVwaWNrZXJdIHNoaWZ0IHZpZXcgZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBOQVZJR0FURV9UTyA9ICdbZGF0ZXBpY2tlcl0gY2hhbmdlIHZpZXcgZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfT1BUSU9OUyA9ICdbZGF0ZXBpY2tlcl0gdXBkYXRlIHJlbmRlciBvcHRpb25zJztcbiAgc3RhdGljIHJlYWRvbmx5IEhPVkVSID0gJ1tkYXRlcGlja2VyXSBob3ZlciBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9WSUVXTU9ERSA9ICdbZGF0ZXBpY2tlcl0gc3dpdGNoIHZpZXcgbW9kZSc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9NSU5fREFURSA9ICdbZGF0ZXBpY2tlcl0gc2V0IG1pbiBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9NQVhfREFURSA9ICdbZGF0ZXBpY2tlcl0gc2V0IG1heCBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9EQVlTRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXlzIGRpc2FibGVkJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9EQVRFU0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXMgZGlzYWJsZWQnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0lTX0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgaXMgZGlzYWJsZWQnO1xuXG4gIHN0YXRpYyByZWFkb25seSBTRVRfTE9DQUxFID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXBpY2tlciBsb2NhbGUnO1xuXG4gIHN0YXRpYyByZWFkb25seSBTRUxFQ1RfUkFOR0UgPSAnW2RhdGVyYW5nZXBpY2tlcl0gc2VsZWN0IGRhdGVzIHJhbmdlJztcblxuICBjYWxjdWxhdGUoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkNBTENVTEFURSB9O1xuICB9XG5cbiAgZm9ybWF0KCk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHsgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5GT1JNQVQgfTtcbiAgfVxuXG4gIGZsYWcoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZMQUcgfTtcbiAgfVxuXG4gIHNlbGVjdChkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1QsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1ZJRVdNT0RFLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNWaWV3TmF2aWdhdGlvbkV2ZW50KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9UTyxcbiAgICAgIHBheWxvYWQ6IGV2ZW50XG4gICAgfTtcbiAgfVxuXG4gIG5hdmlnYXRlU3RlcChzdGVwOiBUaW1lVW5pdCk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VULFxuICAgICAgcGF5bG9hZDogc3RlcFxuICAgIH07XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnM6IERhdGVwaWNrZXJSZW5kZXJPcHRpb25zKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfT1BUSU9OUyxcbiAgICAgIHBheWxvYWQ6IG9wdGlvbnNcbiAgICB9O1xuICB9XG5cbiAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcbiAgc2VsZWN0UmFuZ2UodmFsdWU6IERhdGVbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUX1JBTkdFLFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaG92ZXJEYXkoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5IT1ZFUixcbiAgICAgIHBheWxvYWQ6IGV2ZW50LmlzSG92ZXJlZCA/IGV2ZW50LmNlbGwuZGF0ZSA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgbWluRGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUlOX0RBVEUsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIG1heERhdGUoZGF0ZTogRGF0ZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01BWF9EQVRFLFxuICAgICAgcGF5bG9hZDogZGF0ZVxuICAgIH07XG4gIH1cblxuICBkYXlzRGlzYWJsZWQoZGF5czogbnVtYmVyW10pOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9EQVlTRElTQUJMRUQsXG4gICAgICBwYXlsb2FkOiBkYXlzXG4gICAgfTtcbiAgfVxuXG4gIGRhdGVzRGlzYWJsZWQoZGF0ZXM6IERhdGVbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBVEVTRElTQUJMRUQsXG4gICAgICBwYXlsb2FkOiBkYXRlc1xuICAgIH07XG4gIH1cblxuICBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfSVNfRElTQUJMRUQsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9MT0NBTEUsXG4gICAgICBwYXlsb2FkOiBsb2NhbGVcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzTG9jYWxlU2VydmljZSB7XG4gIHByaXZhdGUgX2RlZmF1bHRMb2NhbGUgPSAnZW4nO1xuICBwcml2YXRlIF9sb2NhbGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odGhpcy5fZGVmYXVsdExvY2FsZSk7XG4gIHByaXZhdGUgX2xvY2FsZUNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fbG9jYWxlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGdldCBsb2NhbGUoKTogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXQgbG9jYWxlQ2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZUNoYW5nZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgdXNlKGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGxvY2FsZSA9PT0gdGhpcy5jdXJyZW50TG9jYWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9jYWxlLm5leHQobG9jYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnN0b3JlJztcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4uL2JzLWxvY2FsZS5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICB2aWV3TW9kZTogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZT47XG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG1vbnRoc0NhbGVuZGFyOiBPYnNlcnZhYmxlPE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICB5ZWFyc0NhbGVuZGFyOiBPYnNlcnZhYmxlPFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xuXG4gIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZTtcbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UpIHt9XG5cbiAgaW5pdChfYnNEYXRlcGlja2VyU3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUgPSBfYnNEYXRlcGlja2VyU3RvcmU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBzZXR0ZXJzICovXG5cbiAgc2V0VmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdCh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0UmFuZ2VWYWx1ZSh2YWx1ZTogRGF0ZVtdKTogdm9pZCB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0TWluRGF0ZSh2YWx1ZTogRGF0ZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubWluRGF0ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNYXhEYXRlKHZhbHVlOiBEYXRlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5tYXhEYXRlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERheXNEaXNhYmxlZCh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmRheXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmRhdGVzRGlzYWJsZWQodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmlzRGlzYWJsZWQodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogU2V0IHJlbmRlcmluZyBvcHRpb25zICovXG4gIHNldE9wdGlvbnMoX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgY29uc3QgX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtsb2NhbGU6IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZX0sIF9jb25maWcpO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0T3B0aW9ucyhfb3B0aW9ucykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogdmlldyB0byBtb2RlIGJpbmRpbmdzICovXG4gIHNldEJpbmRpbmdzKGNvbnRhaW5lcjogQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb250YWluZXIuZGF5c0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZmxhZ2dlZE1vbnRocylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIobW9udGhzID0+ICEhbW9udGhzKVxuICAgICAgKTtcblxuICAgIC8vIG1vbnRoIGNhbGVuZGFyXG4gICAgY29udGFpbmVyLm1vbnRoc0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZmxhZ2dlZE1vbnRoc0NhbGVuZGFyKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihtb250aHMgPT4gISFtb250aHMpXG4gICAgICApO1xuXG4gICAgLy8geWVhciBjYWxlbmRhclxuICAgIGNvbnRhaW5lci55ZWFyc0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUueWVhcnNDYWxlbmRhckZsYWdnZWQpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKHllYXJzID0+ICEheWVhcnMpXG4gICAgICApO1xuXG4gICAgY29udGFpbmVyLnZpZXdNb2RlID0gdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZpZXcubW9kZSk7XG5cbiAgICBjb250YWluZXIub3B0aW9ucyA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNob3dXZWVrTnVtYmVycylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc2hvd1dlZWtOdW1iZXJzID0+ICh7c2hvd1dlZWtOdW1iZXJzfSkpXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogZXZlbnQgaGFuZGxlcnMgKi9cbiAgc2V0RXZlbnRIYW5kbGVycyhjb250YWluZXI6IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50KTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgY29udGFpbmVyLnNldFZpZXdNb2RlID0gKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jaGFuZ2VWaWV3TW9kZShldmVudCkpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIubmF2aWdhdGVUbyA9IChldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubmF2aWdhdGVTdGVwKGV2ZW50LnN0ZXApKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLmRheUhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IF9jZWxsID0gZXZlbnQuY2VsbCBhcyBEYXlWaWV3TW9kZWw7XG4gICAgICBpZiAoX2NlbGwuaXNPdGhlck1vbnRoIHx8IF9jZWxsLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmhvdmVyRGF5KGV2ZW50KSk7XG4gICAgICBfY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5tb250aEhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGV2ZW50LmNlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xuICAgIH07XG5cbiAgICBjb250YWluZXIueWVhckhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGV2ZW50LmNlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xuICAgIH07XG5cbiAgICBjb250YWluZXIubW9udGhTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgIG1vbnRoOiBnZXRNb250aChldmVudC5kYXRlKSxcbiAgICAgICAgICAgIHllYXI6IGdldEZ1bGxZZWFyKGV2ZW50LmRhdGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aWV3TW9kZTogJ2RheSdcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci55ZWFyU2VsZWN0SGFuZGxlciA9IChldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICB5ZWFyOiBnZXRGdWxsWWVhcihldmVudC5kYXRlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlld01vZGU6ICdtb250aCdcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZpZXcpLnN1YnNjcmliZSh2aWV3ID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jYWxjdWxhdGUoKSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBmb3JtYXQgY2FsZW5kYXIgdmFsdWVzIG9uIG1vbnRoIG1vZGVsIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzTW9kZWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihtb250aE1vZGVsID0+ICEhbW9udGhNb2RlbClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKG1vbnRoID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZm9ybWF0KCkpKVxuICAgICk7XG5cbiAgICAvLyBmbGFnIGRheSB2YWx1ZXNcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZvcm1hdHRlZE1vbnRocylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKG1vbnRoID0+ICEhbW9udGgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShtb250aCA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIGZsYWcgZGF5IHZhbHVlc1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWREYXRlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc2VsZWN0ZWREYXRlID0+ICEhc2VsZWN0ZWREYXRlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gZmxhZyBmb3IgZGF0ZSByYW5nZSBwaWNrZXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihzZWxlY3RlZFJhbmdlID0+ICEhc2VsZWN0ZWRSYW5nZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkUmFuZ2UgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBtb250aHNDYWxlbmRhclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzQ2FsZW5kYXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyB5ZWFycyBjYWxlbmRhclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc3RhdGUgPT4gISFzdGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gb24gaG92ZXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmhvdmVyZWREYXRlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoaG92ZXJlZERhdGUgPT4gISFob3ZlcmVkRGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGhvdmVyZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gb24gbG9jYWxlIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlXG4gICAgICAgIC5zdWJzY3JpYmUobG9jYWxlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0TG9jYWxlKGxvY2FsZSkpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBNb250aFZpZXdPcHRpb25zXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TW9udGhPcHRpb25zOiBNb250aFZpZXdPcHRpb25zID0ge1xuICB3aWR0aDogNyxcbiAgaGVpZ2h0OiA2XG59O1xuIiwiaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIE1vbnRoVmlld09wdGlvbnMsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb250aE9wdGlvbnMgfSBmcm9tICcuL19kZWZhdWx0cyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnNEYXRlcGlja2VyVmlld1N0YXRlIHtcbiAgZGF0ZTogRGF0ZTtcbiAgbW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XG59XG5cbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJTdGF0ZVxuICBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLCBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XG4gIC8vIGRhdGUgcGlja2VyXG4gIHNlbGVjdGVkRGF0ZT86IERhdGU7XG4gIC8vIGRhdGVyYW5nZSBwaWNrZXJcbiAgc2VsZWN0ZWRSYW5nZT86IERhdGVbXTtcblxuICAvLyBpbml0aWFsIGRhdGUgb2YgY2FsZW5kYXIsIHRvZGF5IGJ5IGRlZmF1bHRcbiAgdmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlO1xuXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xuICAvLyBib3VuZHNcbiAgbWluRGF0ZT86IERhdGU7XG4gIG1heERhdGU/OiBEYXRlO1xuICBkYXlzRGlzYWJsZWQ/OiBudW1iZXJbXTtcbiAgZGF0ZXNEaXNhYmxlZD86IERhdGVbXTtcbiAgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xuXG4gIGhvdmVyZWREYXRlPzogRGF0ZTtcbiAgaG92ZXJlZE1vbnRoPzogRGF0ZTtcbiAgaG92ZXJlZFllYXI/OiBEYXRlO1xuXG4gIC8vIGRheXMgY2FsZW5kYXJcbiAgbW9udGhzTW9kZWw/OiBEYXlzQ2FsZW5kYXJNb2RlbFtdO1xuICBmb3JtYXR0ZWRNb250aHM/OiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgZmxhZ2dlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XG5cbiAgLy8gbW9udGhzIGNhbGVuZGFyXG4gIG1vbnRoc0NhbGVuZGFyPzogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgZmxhZ2dlZE1vbnRoc0NhbGVuZGFyPzogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcblxuICAvLyB5ZWFycyBjYWxlbmRhclxuICB5ZWFyc0NhbGVuZGFyTW9kZWw/OiBZZWFyc0NhbGVuZGFyVmlld01vZGVsW107XG4gIHllYXJzQ2FsZW5kYXJGbGFnZ2VkPzogWWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdO1xuXG4gIC8vIG9wdGlvbnNcbiAgbW9udGhWaWV3T3B0aW9uczogTW9udGhWaWV3T3B0aW9ucztcblxuICAvLyBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xuICBzaG93V2Vla051bWJlcnM/OiBib29sZWFuO1xuICBkaXNwbGF5TW9udGhzPzogbnVtYmVyO1xuXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcbiAgeWVhclRpdGxlOiBzdHJpbmc7XG5cbiAgZGF5TGFiZWw6IHN0cmluZztcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuICB5ZWFyTGFiZWw6IHN0cmluZztcblxuICB3ZWVrTnVtYmVyczogc3RyaW5nO1xufVxuXG5jb25zdCBfaW5pdGlhbFZpZXc6IEJzRGF0ZXBpY2tlclZpZXdTdGF0ZSA9IHsgZGF0ZTogbmV3IERhdGUoKSwgbW9kZTogJ2RheScgfTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxEYXRlcGlja2VyU3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlID0gT2JqZWN0LmFzc2lnbihcbiAgbmV3IEJzRGF0ZXBpY2tlckNvbmZpZygpLFxuICB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIHZpZXc6IF9pbml0aWFsVmlldyxcbiAgICBzZWxlY3RlZFJhbmdlOiBbXSxcbiAgICBtb250aFZpZXdPcHRpb25zOiBkZWZhdWx0TW9udGhPcHRpb25zXG4gIH1cbik7XG4iLCJpbXBvcnQge1xuICBnZXREYXksXG4gIGlzRmlyc3REYXlPZldlZWssXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlLFxuICBzaGlmdERhdGUsXG4gIGVuZE9mLFxuICBzdGFydE9mLFxuICBpc1NhbWVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihkYXRlOiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIH0pOiBEYXRlIHtcbiAgaWYgKGlzRmlyc3REYXlPZldlZWsoZGF0ZSwgb3B0aW9ucy5maXJzdERheU9mV2VlaykpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHdlZWtEYXkgPSBnZXREYXkoZGF0ZSk7XG4gIGNvbnN0IG9mZnNldCA9IGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla0RheSwgb3B0aW9ucy5maXJzdERheU9mV2Vlayk7XG5cbiAgcmV0dXJuIHNoaWZ0RGF0ZShkYXRlLCB7ZGF5OiAtb2Zmc2V0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtkYXk6IG51bWJlciwgc3RhcnRpbmdEYXlPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChzdGFydGluZ0RheU9mZnNldCA9PT0gMCkge1xuICAgIHJldHVybiB3ZWVrZGF5O1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0ID0gd2Vla2RheSAtIHN0YXJ0aW5nRGF5T2Zmc2V0ICUgNztcblxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IG9mZnNldCArIDcgOiBvZmZzZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vbnRoRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ21vbnRoJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ21vbnRoJyksIG1heCwgJ2RheScpO1xuXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhckRpc2FibGVkKGRhdGU6IERhdGUsIG1pbjogRGF0ZSwgbWF4OiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICd5ZWFyJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ3llYXInKSwgbWF4LCAnZGF5Jyk7XG5cbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERhdGUoZGF0ZTogRGF0ZSwgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdKTogYm9vbGVhbiB7XG4gIGlmIChkYXRlc0Rpc2FibGVkID09PSB1bmRlZmluZWQgfHwgIWRhdGVzRGlzYWJsZWQgfHwgIWRhdGVzRGlzYWJsZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVzRGlzYWJsZWQuc29tZSgoZGF0ZURpc2FibGVkOiBEYXRlKSA9PiBpc1NhbWUoZGF0ZSwgZGF0ZURpc2FibGVkLCAnZGF0ZScpKTtcbn1cbiIsImltcG9ydCB7IFRpbWVVbml0LCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVNYXRyaXhDYjxUPiA9IChkYXRlOiBEYXRlKSA9PiBUO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdHJpeE9wdGlvbnMge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaW5pdGlhbERhdGU6IERhdGU7XG4gIHNoaWZ0OiBUaW1lVW5pdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hdHJpeDxUPihcbiAgb3B0aW9uczogTWF0cml4T3B0aW9ucyxcbiAgZm46IENyZWF0ZU1hdHJpeENiPFQ+XG4pOiBUW11bXSB7XG4gIGxldCBwcmV2VmFsdWUgPSBvcHRpb25zLmluaXRpYWxEYXRlO1xuICBjb25zdCBtYXRyaXg6IFRbXVtdID0gbmV3IEFycmF5KG9wdGlvbnMuaGVpZ2h0KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmhlaWdodDsgaSsrKSB7XG4gICAgbWF0cml4W2ldID0gbmV3IEFycmF5KG9wdGlvbnMud2lkdGgpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9ucy53aWR0aDsgaisrKSB7XG4gICAgICBtYXRyaXhbaV1bal0gPSBmbihwcmV2VmFsdWUpO1xuICAgICAgcHJldlZhbHVlID0gc2hpZnREYXRlKHByZXZWYWx1ZSwgb3B0aW9ucy5zaGlmdCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdHJpeDtcbn1cbiIsIi8vIHVzZXIgYW5kIG1vZGVsIGlucHV0IHNob3VsZCBoYW5kbGUgcGFyc2luZyBhbmQgdmFsaWRhdGluZyBpbnB1dCB2YWx1ZXNcbi8vIHNob3VsZCBhY2NlcHQgc29tZSBvcHRpb25zXG4vLyB0b2RvOiBzcGxpdCBvdXQgZm9ybWF0dGluZ1xuaW1wb3J0IHsgRGF5c0NhbGVuZGFyTW9kZWwsIE1vbnRoVmlld09wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Rmlyc3REYXlPZk1vbnRoIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhciB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRGF5c0NhbGVuZGFyKFxuICBzdGFydGluZ0RhdGU6IERhdGUsXG4gIG9wdGlvbnM6IE1vbnRoVmlld09wdGlvbnNcbik6IERheXNDYWxlbmRhck1vZGVsIHtcbiAgY29uc3QgZmlyc3REYXkgPSBnZXRGaXJzdERheU9mTW9udGgoc3RhcnRpbmdEYXRlKTtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZmlyc3REYXksIG9wdGlvbnMpO1xuXG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7XG4gICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXG4gICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcbiAgICBpbml0aWFsRGF0ZSxcbiAgICBzaGlmdDogeyBkYXk6IDEgfVxuICB9O1xuICBjb25zdCBkYXlzTWF0cml4ID0gY3JlYXRlTWF0cml4PERhdGU+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gZGF0ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXlzTWF0cml4LFxuICAgIG1vbnRoOiBmaXJzdERheVxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIERheXNDYWxlbmRhck1vZGVsLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIGdldExvY2FsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXlzQ2FsZW5kYXIoZGF5c0NhbGVuZGFyOiBEYXlzQ2FsZW5kYXJNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoSW5kZXg6IG51bWJlcik6IERheXNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIHJldHVybiB7XG4gICAgbW9udGg6IGRheXNDYWxlbmRhci5tb250aCxcbiAgICBtb250aFRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgICAgZm9ybWF0T3B0aW9ucy5tb250aFRpdGxlLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHllYXJUaXRsZTogZm9ybWF0RGF0ZShcbiAgICAgIGRheXNDYWxlbmRhci5tb250aCxcbiAgICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHdlZWtOdW1iZXJzOiBnZXRXZWVrTnVtYmVycyhcbiAgICAgIGRheXNDYWxlbmRhci5kYXlzTWF0cml4LFxuICAgICAgZm9ybWF0T3B0aW9ucy53ZWVrTnVtYmVycyxcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICAgKSxcbiAgICB3ZWVrZGF5czogZ2V0U2hpZnRlZFdlZWtkYXlzKGZvcm1hdE9wdGlvbnMubG9jYWxlKSxcbiAgICB3ZWVrczogZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgubWFwKCh3ZWVrOiBEYXRlW10sIHdlZWtJbmRleDogbnVtYmVyKSA9PiAoe1xuICAgICAgZGF5czogd2Vlay5tYXAoKGRhdGU6IERhdGUsIGRheUluZGV4OiBudW1iZXIpID0+ICh7XG4gICAgICAgIGRhdGUsXG4gICAgICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMuZGF5TGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKSxcbiAgICAgICAgbW9udGhJbmRleCxcbiAgICAgICAgd2Vla0luZGV4LFxuICAgICAgICBkYXlJbmRleFxuICAgICAgfSkpXG4gICAgfSkpXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrTnVtYmVycyhkYXlzTWF0cml4OiBEYXRlW11bXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGRheXNNYXRyaXgubWFwKFxuICAgIChkYXlzOiBEYXRlW10pID0+IChkYXlzWzBdID8gZm9ybWF0RGF0ZShkYXlzWzBdLCBmb3JtYXQsIGxvY2FsZSkgOiAnJylcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoaWZ0ZWRXZWVrZGF5cyhsb2NhbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGUpO1xuICBjb25zdCB3ZWVrZGF5cyA9IF9sb2NhbGUud2Vla2RheXNTaG9ydCgpIGFzIHN0cmluZ1tdO1xuICBjb25zdCBmaXJzdERheU9mV2VlayA9IF9sb2NhbGUuZmlyc3REYXlPZldlZWsoKTtcblxuICByZXR1cm4gWy4uLndlZWtkYXlzLnNsaWNlKGZpcnN0RGF5T2ZXZWVrKSwgLi4ud2Vla2RheXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspXTtcbn1cbiIsImltcG9ydCB7XG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBXZWVrVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmltcG9ydCB7XG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlLFxuICBpc0Rpc2FibGVkRGF5LFxuICBpc1NhbWVEYXksXG4gIGlzU2FtZU1vbnRoLFxuICBzaGlmdERhdGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuaW1wb3J0IHsgaXNNb250aERpc2FibGVkLCBpc0Rpc2FibGVkRGF0ZSB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGFnRGF5c0NhbGVuZGFyT3B0aW9ucyB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG4gIGRheXNEaXNhYmxlZDogbnVtYmVyW107XG4gIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcbiAgaG92ZXJlZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdO1xuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XG4gIG1vbnRoSW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdEYXlzQ2FsZW5kYXIoXG4gIGZvcm1hdHRlZE1vbnRoOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIG9wdGlvbnM6IEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zXG4pOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBmb3JtYXR0ZWRNb250aC53ZWVrcy5mb3JFYWNoKCh3ZWVrOiBXZWVrVmlld01vZGVsKSA9PiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cbiAgICB3ZWVrLmRheXMuZm9yRWFjaCgoZGF5OiBEYXlWaWV3TW9kZWwsIGRheUluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIC8vIGRhdGVwaWNrZXJcbiAgICAgIGNvbnN0IGlzT3RoZXJNb250aCA9ICFpc1NhbWVNb250aChkYXkuZGF0ZSwgZm9ybWF0dGVkTW9udGgubW9udGgpO1xuXG4gICAgICBjb25zdCBpc0hvdmVyZWQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkRGF0ZSk7XG4gICAgICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICAgICAgY29uc3QgaXNTZWxlY3Rpb25TdGFydCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiZcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXG4gICAgICAgIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlWzBdKTtcbiAgICAgIGNvbnN0IGlzU2VsZWN0aW9uRW5kID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMV0pO1xuXG4gICAgICBjb25zdCBpc1NlbGVjdGVkID1cbiAgICAgICAgKCFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkRGF0ZSkpIHx8XG4gICAgICAgIGlzU2VsZWN0aW9uU3RhcnQgfHxcbiAgICAgICAgaXNTZWxlY3Rpb25FbmQ7XG5cbiAgICAgIGNvbnN0IGlzSW5SYW5nZSA9XG4gICAgICAgICFpc090aGVyTW9udGggJiZcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXG4gICAgICAgIGlzRGF0ZUluUmFuZ2UoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSwgb3B0aW9ucy5ob3ZlcmVkRGF0ZSk7XG5cbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgaXNCZWZvcmUoZGF5LmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgJ2RheScpIHx8XG4gICAgICAgIGlzQWZ0ZXIoZGF5LmRhdGUsIG9wdGlvbnMubWF4RGF0ZSwgJ2RheScpIHx8XG4gICAgICAgIGlzRGlzYWJsZWREYXkoZGF5LmRhdGUsIG9wdGlvbnMuZGF5c0Rpc2FibGVkKSB8fFxuICAgICAgICBpc0Rpc2FibGVkRGF0ZShkYXkuZGF0ZSwgb3B0aW9ucy5kYXRlc0Rpc2FibGVkKTtcblxuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaXNUb2RheSA9ICFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBjdXJyZW50RGF0ZSk7XG5cbiAgICAgIC8vIGRlY2lkZSB1cGRhdGUgb3Igbm90XG4gICAgICBjb25zdCBuZXdEYXkgPSBPYmplY3QuYXNzaWduKHt9LCBkYXksIHtcbiAgICAgICAgaXNPdGhlck1vbnRoLFxuICAgICAgICBpc0hvdmVyZWQsXG4gICAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICAgIGlzU2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGlzU2VsZWN0aW9uRW5kLFxuICAgICAgICBpc0luUmFuZ2UsXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIGlzVG9kYXlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGRheS5pc090aGVyTW9udGggIT09IG5ld0RheS5pc090aGVyTW9udGggfHxcbiAgICAgICAgZGF5LmlzSG92ZXJlZCAhPT0gbmV3RGF5LmlzSG92ZXJlZCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3RlZCAhPT0gbmV3RGF5LmlzU2VsZWN0ZWQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0aW9uU3RhcnQgIT09IG5ld0RheS5pc1NlbGVjdGlvblN0YXJ0IHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGlvbkVuZCAhPT0gbmV3RGF5LmlzU2VsZWN0aW9uRW5kIHx8XG4gICAgICAgIGRheS5pc0Rpc2FibGVkICE9PSBuZXdEYXkuaXNEaXNhYmxlZCB8fFxuICAgICAgICBkYXkuaXNJblJhbmdlICE9PSBuZXdEYXkuaXNJblJhbmdlXG4gICAgICApIHtcbiAgICAgICAgd2Vlay5kYXlzW2RheUluZGV4XSA9IG5ld0RheTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXG4gIGZvcm1hdHRlZE1vbnRoLmhpZGVMZWZ0QXJyb3cgPVxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcbiAgZm9ybWF0dGVkTW9udGguaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICAgIG9wdGlvbnMubW9udGhJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocyk7XG5cbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZUxlZnRBcnJvdyA9IGlzTW9udGhEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoZm9ybWF0dGVkTW9udGgubW9udGgsIHsgbW9udGg6IC0xIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc01vbnRoRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKGZvcm1hdHRlZE1vbnRoLm1vbnRoLCB7IG1vbnRoOiAxIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcblxuICByZXR1cm4gZm9ybWF0dGVkTW9udGg7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoXG4gIGRhdGU6IERhdGUsXG4gIHNlbGVjdGVkUmFuZ2U6IERhdGVbXSxcbiAgaG92ZXJlZERhdGU6IERhdGVcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUgfHwgIXNlbGVjdGVkUmFuZ2VbMF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRSYW5nZVsxXSkge1xuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IHNlbGVjdGVkUmFuZ2VbMV07XG4gIH1cblxuICBpZiAoaG92ZXJlZERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSA+IHNlbGVjdGVkUmFuZ2VbMF0gJiYgZGF0ZSA8PSBob3ZlcmVkRGF0ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7IEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhblN3aXRjaE1vZGUobW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUsIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbWluTW9kZSA/IG1vZGUgPj0gbWluTW9kZSA6IHRydWU7XG59XG4iLCJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgc3RhcnRPZiwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xuXG5jb25zdCBoZWlnaHQgPSA0O1xuY29uc3Qgd2lkdGggPSAzO1xuY29uc3Qgc2hpZnQgPSB7IG1vbnRoOiAxIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb250aHNDYWxlbmRhcihcbiAgdmlld0RhdGU6IERhdGUsXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4pOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc3RhcnRPZih2aWV3RGF0ZSwgJ3llYXInKTtcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHsgd2lkdGgsIGhlaWdodCwgaW5pdGlhbERhdGUsIHNoaWZ0IH07XG4gIGNvbnN0IG1vbnRoTWF0cml4ID0gY3JlYXRlTWF0cml4PFxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxuICA+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gKHtcbiAgICBkYXRlLFxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMubW9udGhMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIG1vbnRoczogbW9udGhNYXRyaXgsXG4gICAgbW9udGhUaXRsZTogJycsXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgdmlld0RhdGUsXG4gICAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICAgKVxuICB9O1xufVxuIiwiaW1wb3J0IHsgaXNTYW1lTW9udGgsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQge1xuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdNb250aENhbGVuZGFyT3B0aW9ucyB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG4gIGhvdmVyZWRNb250aDogRGF0ZTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICBtb250aEluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnTW9udGhzQ2FsZW5kYXIoXG4gIG1vbnRoQ2FsZW5kYXI6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnTW9udGhDYWxlbmRhck9wdGlvbnNcbik6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgbW9udGhDYWxlbmRhci5tb250aHMuZm9yRWFjaChcbiAgICAobW9udGhzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIG1vbnRoSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVNb250aChtb250aC5kYXRlLCBvcHRpb25zLmhvdmVyZWRNb250aCk7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICAgIGlzTW9udGhEaXNhYmxlZChtb250aC5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIG1vbnRoLCB7XG4gICAgICAgICAgaXNIb3ZlcmVkLFxuICAgICAgICAgIGlzRGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb250aC5pc0hvdmVyZWQgIT09IG5ld01vbnRoLmlzSG92ZXJlZCB8fFxuICAgICAgICAgIG1vbnRoLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9udGhDYWxlbmRhci5tb250aHNbcm93SW5kZXhdW21vbnRoSW5kZXhdID0gbmV3TW9udGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgbW9udGhDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xuICBtb250aENhbGVuZGFyLmhpZGVSaWdodEFycm93ID1cbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICBvcHRpb25zLm1vbnRoSW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG5cbiAgbW9udGhDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogLTEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuICBtb250aENhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIG1vbnRoQ2FsZW5kYXI7XG59XG4iLCJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBzaGlmdERhdGUsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuY29uc3QgaGVpZ2h0ID0gNDtcbmNvbnN0IHdpZHRoID0gNDtcbmV4cG9ydCBjb25zdCB5ZWFyc1BlckNhbGVuZGFyID0gaGVpZ2h0ICogd2lkdGg7XG5jb25zdCBpbml0aWFsU2hpZnQgPSAoTWF0aC5mbG9vcih5ZWFyc1BlckNhbGVuZGFyIC8gMikgLSAxKSAqIC0xO1xuY29uc3Qgc2hpZnQgPSB7IHllYXI6IDEgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFllYXJzQ2FsZW5kYXIoXG4gIHZpZXdEYXRlOiBEYXRlLFxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuKTogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IGluaXRpYWxTaGlmdCB9KTtcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHsgd2lkdGgsIGhlaWdodCwgaW5pdGlhbERhdGUsIHNoaWZ0IH07XG4gIGNvbnN0IHllYXJzTWF0cml4ID0gY3JlYXRlTWF0cml4PFxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxuICA+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gKHtcbiAgICBkYXRlLFxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMueWVhckxhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcbiAgfSkpO1xuICBjb25zdCB5ZWFyVGl0bGUgPSBmb3JtYXRZZWFyUmFuZ2VUaXRsZSh5ZWFyc01hdHJpeCwgZm9ybWF0T3B0aW9ucyk7XG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyczogeWVhcnNNYXRyaXgsXG4gICAgbW9udGhUaXRsZTogJycsXG4gICAgeWVhclRpdGxlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXJSYW5nZVRpdGxlKFxuICB5ZWFyc01hdHJpeDogQ2FsZW5kYXJDZWxsVmlld01vZGVsW11bXSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGNvbnN0IGZyb20gPSBmb3JtYXREYXRlKFxuICAgIHllYXJzTWF0cml4WzBdWzBdLmRhdGUsXG4gICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgKTtcbiAgY29uc3QgdG8gPSBmb3JtYXREYXRlKFxuICAgIHllYXJzTWF0cml4W2hlaWdodCAtIDFdW3dpZHRoIC0gMV0uZGF0ZSxcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICApO1xuXG4gIHJldHVybiBgJHtmcm9tfSAtICR7dG99YDtcbn1cbiIsImltcG9ydCB7IGlzU2FtZVllYXIsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBZZWFyc0NhbGVuZGFyVmlld01vZGVsLCBDYWxlbmRhckNlbGxWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgaXNZZWFyRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgaG92ZXJlZFllYXI6IERhdGU7XG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcbiAgeWVhckluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnWWVhcnNDYWxlbmRhcihcbiAgeWVhcnNDYWxlbmRhcjogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCxcbiAgb3B0aW9uczogRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgeWVhcnNDYWxlbmRhci55ZWFycy5mb3JFYWNoKFxuICAgICh5ZWFyczogQ2FsZW5kYXJDZWxsVmlld01vZGVsW10sIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHllYXJzLmZvckVhY2goKHllYXI6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgeWVhckluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgaXNIb3ZlcmVkID0gaXNTYW1lWWVhcih5ZWFyLmRhdGUsIG9wdGlvbnMuaG92ZXJlZFllYXIpO1xuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID1cbiAgICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgICBpc1llYXJEaXNhYmxlZCh5ZWFyLmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlKTtcblxuICAgICAgICBjb25zdCBuZXdNb250aCA9IE9iamVjdC5hc3NpZ24oLyp7fSwqLyB5ZWFyLCB7IGlzSG92ZXJlZCwgaXNEaXNhYmxlZCB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHllYXIuaXNIb3ZlcmVkICE9PSBuZXdNb250aC5pc0hvdmVyZWQgfHxcbiAgICAgICAgICB5ZWFyLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWVhcnNDYWxlbmRhci55ZWFyc1tyb3dJbmRleF1beWVhckluZGV4XSA9IG5ld01vbnRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXG4gIHllYXJzQ2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA9XG4gICAgb3B0aW9ucy55ZWFySW5kZXggPiAwICYmIG9wdGlvbnMueWVhckluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG4gIHllYXJzQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMueWVhckluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXG4gICAgb3B0aW9ucy55ZWFySW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG5cbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKHllYXJzQ2FsZW5kYXIueWVhcnNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIGNvbnN0IGkgPSB5ZWFyc0NhbGVuZGFyLnllYXJzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGogPSB5ZWFyc0NhbGVuZGFyLnllYXJzW2ldLmxlbmd0aCAtIDE7XG4gIHllYXJzQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1tpXVtqXS5kYXRlLCB7IHllYXI6IDEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiB5ZWFyc0NhbGVuZGFyO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IGNhbGNEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvY2FsYy1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZvcm1hdERheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtZGF5cy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmbGFnRGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2ZsYWctZGF5cy1jYWxlbmRhcic7XG5pbXBvcnQge1xuICBzZXRGdWxsRGF0ZSxcbiAgc2hpZnREYXRlLFxuICBpc0FycmF5LFxuICBpc0RhdGVWYWxpZCxcbiAgc3RhcnRPZixcbiAgZ2V0TG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgY2FuU3dpdGNoTW9kZSB9IGZyb20gJy4uL2VuZ2luZS92aWV3LW1vZGUnO1xuaW1wb3J0IHsgZm9ybWF0TW9udGhzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZm9ybWF0LW1vbnRocy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmbGFnTW9udGhzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXInO1xuaW1wb3J0IHsgZm9ybWF0WWVhcnNDYWxlbmRhciwgeWVhcnNQZXJDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQteWVhcnMtY2FsZW5kYXInO1xuaW1wb3J0IHsgZmxhZ1llYXJzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy15ZWFycy1jYWxlbmRhcic7XG5pbXBvcnQgeyBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQsIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLCBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJy4uL21vZGVscyc7XG5cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBic0RhdGVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogQWN0aW9uKTogQnNEYXRlcGlja2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkNBTENVTEFURToge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVJlZHVjZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5GT1JNQVQ6IHtcbiAgICAgIHJldHVybiBmb3JtYXRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5GTEFHOiB7XG4gICAgICByZXR1cm4gZmxhZ1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX09GRlNFVDoge1xuICAgICAgY29uc3QgZGF0ZSA9IHNoaWZ0RGF0ZShzdGFydE9mKHN0YXRlLnZpZXcuZGF0ZSwgJ21vbnRoJyksIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgbW9kZTogc3RhdGUudmlldy5tb2RlLFxuICAgICAgICAgIGRhdGVcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPOiB7XG4gICAgICBjb25zdCBwYXlsb2FkOiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgY29uc3QgZGF0ZSA9IHNldEZ1bGxEYXRlKHN0YXRlLnZpZXcuZGF0ZSwgcGF5bG9hZC51bml0KTtcbiAgICAgIGxldCBuZXdTdGF0ZTtcbiAgICAgIGxldCBtb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcbiAgICAgIGlmIChjYW5Td2l0Y2hNb2RlKHBheWxvYWQudmlld01vZGUsIHN0YXRlLm1pbk1vZGUpKSB7XG4gICAgICAgIG1vZGUgPSBwYXlsb2FkLnZpZXdNb2RlO1xuICAgICAgICBuZXdTdGF0ZSA9IHsgdmlldzogeyBkYXRlLCBtb2RlIH0gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGUgPSBzdGF0ZS52aWV3Lm1vZGU7XG4gICAgICAgIG5ld1N0YXRlID0geyBzZWxlY3RlZERhdGU6IGRhdGUsIHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREU6IHtcbiAgICAgIGlmICghY2FuU3dpdGNoTW9kZShhY3Rpb24ucGF5bG9hZCwgc3RhdGUubWluTW9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IG1vZGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuSE9WRVI6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBob3ZlcmVkRGF0ZTogYWN0aW9uLnBheWxvYWQgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVDoge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHZpZXc6IHN0YXRlLnZpZXdcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS52aWV3Lm1vZGU7XG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkIHx8IHN0YXRlLnZpZXcuZGF0ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBnZXRWaWV3RGF0ZShfZGF0ZSwgc3RhdGUubWluRGF0ZSwgc3RhdGUubWF4RGF0ZSk7XG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfT1BUSU9OUzoge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIC8vIHByZXNlcnZlIHZpZXcgbW9kZVxuICAgICAgY29uc3QgbW9kZSA9IG5ld1N0YXRlLm1pbk1vZGUgPyBuZXdTdGF0ZS5taW5Nb2RlIDogc3RhdGUudmlldy5tb2RlO1xuICAgICAgY29uc3QgX3ZpZXdEYXRlID0gaXNEYXRlVmFsaWQobmV3U3RhdGUudmFsdWUpICYmIG5ld1N0YXRlLnZhbHVlXG4gICAgICAgIHx8IGlzQXJyYXkobmV3U3RhdGUudmFsdWUpICYmIGlzRGF0ZVZhbGlkKG5ld1N0YXRlLnZhbHVlWzBdKSAmJiBuZXdTdGF0ZS52YWx1ZVswXVxuICAgICAgICB8fCBzdGF0ZS52aWV3LmRhdGU7XG4gICAgICBjb25zdCBkYXRlID0gZ2V0Vmlld0RhdGUoX3ZpZXdEYXRlLCBuZXdTdGF0ZS5taW5EYXRlLCBuZXdTdGF0ZS5tYXhEYXRlKTtcbiAgICAgIG5ld1N0YXRlLnZpZXcgPSB7IG1vZGUsIGRhdGUgfTtcbiAgICAgIC8vIHVwZGF0ZSBzZWxlY3RlZCB2YWx1ZVxuICAgICAgaWYgKG5ld1N0YXRlLnZhbHVlKSB7XG4gICAgICAgIC8vIGlmIG5ldyB2YWx1ZSBpcyBhcnJheSB3ZSB3b3JrIHdpdGggZGF0ZSByYW5nZVxuICAgICAgICBpZiAoaXNBcnJheShuZXdTdGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zZWxlY3RlZFJhbmdlID0gbmV3U3RhdGUudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBuZXcgdmFsdWUgaXMgYSBkYXRlIC0+IGRhdGVwaWNrZXJcbiAgICAgICAgaWYgKG5ld1N0YXRlLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIG5ld1N0YXRlLnNlbGVjdGVkRGF0ZSA9IG5ld1N0YXRlLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvdmlkZWQgdmFsdWUgaXMgbm90IHN1cHBvcnRlZCA6KVxuICAgICAgICAvLyBuZWVkIHRvIHJlcG9ydCBpdCBzb21laG93XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIC8vIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVF9SQU5HRToge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIHNlbGVjdGVkUmFuZ2U6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB2aWV3OiBzdGF0ZS52aWV3XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xuICAgICAgY29uc3QgX2RhdGUgPSBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZFswXSB8fCBzdGF0ZS52aWV3LmRhdGU7XG4gICAgICBjb25zdCBkYXRlID0gZ2V0Vmlld0RhdGUoX2RhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01JTl9EQVRFOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbWluRGF0ZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01BWF9EQVRFOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbWF4RGF0ZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0lTX0RJU0FCTEVEOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNEaXNhYmxlZDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUpOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XG4gIC8vIGhvdyBtYW55IGNhbGVuZGFyc1xuICBjb25zdCBkaXNwbGF5TW9udGhzID0gc3RhdGUuZGlzcGxheU1vbnRocztcbiAgLy8gdXNlIHNlbGVjdGVkIGRhdGUgb24gaW5pdGlhbCByZW5kZXJpbmcgaWYgc2V0XG4gIGxldCB2aWV3RGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnZGF5Jykge1xuICAgIHN0YXRlLm1vbnRoVmlld09wdGlvbnMuZmlyc3REYXlPZldlZWsgPSBnZXRMb2NhbGUoc3RhdGUubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuICAgIGNvbnN0IG1vbnRoc01vZGVsID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xuICAgIGZvciAobGV0IG1vbnRoSW5kZXggPSAwOyBtb250aEluZGV4IDwgZGlzcGxheU1vbnRoczsgbW9udGhJbmRleCsrKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICBtb250aHNNb2RlbFttb250aEluZGV4XSA9IGNhbGNEYXlzQ2FsZW5kYXIoXG4gICAgICAgIHZpZXdEYXRlLFxuICAgICAgICBzdGF0ZS5tb250aFZpZXdPcHRpb25zXG4gICAgICApO1xuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgbW9udGg6IDEgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1vbnRoc01vZGVsIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xuICAgIGNvbnN0IG1vbnRoc0NhbGVuZGFyID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xuICAgIGZvciAoXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xuICAgICkge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgbW9udGhzQ2FsZW5kYXJbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRNb250aHNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXG4gICAgICApO1xuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogMSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzQ2FsZW5kYXIgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG5cbiAgICBmb3IgKFxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XG4gICAgICBjYWxlbmRhckluZGV4KytcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIHllYXJzQ2FsZW5kYXJNb2RlbFtjYWxlbmRhckluZGV4XSA9IGZvcm1hdFllYXJzQ2FsZW5kYXIoXG4gICAgICAgIHZpZXdEYXRlLFxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IHllYXJzUGVyQ2FsZW5kYXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJNb2RlbCB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogQWN0aW9uKTogQnNEYXRlcGlja2VyU3RhdGUge1xuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnZGF5Jykge1xuICAgIGNvbnN0IGZvcm1hdHRlZE1vbnRocyA9IHN0YXRlLm1vbnRoc01vZGVsLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+XG4gICAgICBmb3JtYXREYXlzQ2FsZW5kYXIobW9udGgsIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpLCBtb250aEluZGV4KVxuICAgICk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZm9ybWF0dGVkTW9udGhzIH0pO1xuICB9XG5cbiAgLy8gaG93IG1hbnkgY2FsZW5kYXJzXG4gIGNvbnN0IGRpc3BsYXlNb250aHMgPSBzdGF0ZS5kaXNwbGF5TW9udGhzO1xuICAvLyBjaGVjayBpbml0aWFsIHJlbmRlcmluZ1xuICAvLyB1c2Ugc2VsZWN0ZWQgZGF0ZSBvbiBpbml0aWFsIHJlbmRlcmluZyBpZiBzZXRcbiAgbGV0IHZpZXdEYXRlID0gc3RhdGUudmlldy5kYXRlO1xuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdtb250aCcpIHtcbiAgICBjb25zdCBtb250aHNDYWxlbmRhciA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XG4gICAgICBjYWxlbmRhckluZGV4KytcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIG1vbnRoc0NhbGVuZGFyW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXG4gICAgICAgIHZpZXdEYXRlLFxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDEgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1vbnRoc0NhbGVuZGFyIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XG4gICAgY29uc3QgeWVhcnNDYWxlbmRhck1vZGVsID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xuICAgIGZvciAoXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xuICAgICkge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgeWVhcnNDYWxlbmRhck1vZGVsW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0WWVhcnNDYWxlbmRhcihcbiAgICAgICAgdmlld0RhdGUsXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXG4gICAgICApO1xuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogMTYgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJNb2RlbCB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZmxhZ1JlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdkYXknKSB7XG4gICAgY29uc3QgZmxhZ2dlZE1vbnRocyA9IHN0YXRlLmZvcm1hdHRlZE1vbnRocy5tYXAoXG4gICAgICAoZm9ybWF0dGVkTW9udGgsIG1vbnRoSW5kZXgpID0+XG4gICAgICAgIGZsYWdEYXlzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcbiAgICAgICAgICBpc0Rpc2FibGVkOiBzdGF0ZS5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1pbkRhdGU6IHN0YXRlLm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcbiAgICAgICAgICBkYXlzRGlzYWJsZWQ6IHN0YXRlLmRheXNEaXNhYmxlZCxcbiAgICAgICAgICBkYXRlc0Rpc2FibGVkOiBzdGF0ZS5kYXRlc0Rpc2FibGVkLFxuICAgICAgICAgIGhvdmVyZWREYXRlOiBzdGF0ZS5ob3ZlcmVkRGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZERhdGU6IHN0YXRlLnNlbGVjdGVkRGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZFJhbmdlOiBzdGF0ZS5zZWxlY3RlZFJhbmdlLFxuICAgICAgICAgIGRpc3BsYXlNb250aHM6IHN0YXRlLmRpc3BsYXlNb250aHMsXG4gICAgICAgICAgbW9udGhJbmRleFxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZmxhZ2dlZE1vbnRocyB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdtb250aCcpIHtcbiAgICBjb25zdCBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgPSBzdGF0ZS5tb250aHNDYWxlbmRhci5tYXAoXG4gICAgICAoZm9ybWF0dGVkTW9udGgsIG1vbnRoSW5kZXgpID0+XG4gICAgICAgIGZsYWdNb250aHNDYWxlbmRhcihmb3JtYXR0ZWRNb250aCwge1xuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXG4gICAgICAgICAgbWluRGF0ZTogc3RhdGUubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlOiBzdGF0ZS5tYXhEYXRlLFxuICAgICAgICAgIGhvdmVyZWRNb250aDogc3RhdGUuaG92ZXJlZE1vbnRoLFxuICAgICAgICAgIGRpc3BsYXlNb250aHM6IHN0YXRlLmRpc3BsYXlNb250aHMsXG4gICAgICAgICAgbW9udGhJbmRleFxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZmxhZ2dlZE1vbnRoc0NhbGVuZGFyIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XG4gICAgY29uc3QgeWVhcnNDYWxlbmRhckZsYWdnZWQgPSBzdGF0ZS55ZWFyc0NhbGVuZGFyTW9kZWwubWFwKFxuICAgICAgKGZvcm1hdHRlZE1vbnRoLCB5ZWFySW5kZXgpID0+XG4gICAgICAgIGZsYWdZZWFyc0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXG4gICAgICAgICAgaG92ZXJlZFllYXI6IHN0YXRlLmhvdmVyZWRZZWFyLFxuICAgICAgICAgIGRpc3BsYXlNb250aHM6IHN0YXRlLmRpc3BsYXlNb250aHMsXG4gICAgICAgICAgeWVhckluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB5ZWFyc0NhbGVuZGFyRmxhZ2dlZCB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUpOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgbG9jYWxlOiBzdGF0ZS5sb2NhbGUsXG5cbiAgICBtb250aFRpdGxlOiBzdGF0ZS5tb250aFRpdGxlLFxuICAgIHllYXJUaXRsZTogc3RhdGUueWVhclRpdGxlLFxuXG4gICAgZGF5TGFiZWw6IHN0YXRlLmRheUxhYmVsLFxuICAgIG1vbnRoTGFiZWw6IHN0YXRlLm1vbnRoTGFiZWwsXG4gICAgeWVhckxhYmVsOiBzdGF0ZS55ZWFyTGFiZWwsXG5cbiAgICB3ZWVrTnVtYmVyczogc3RhdGUud2Vla051bWJlcnNcbiAgfTtcbn1cblxuLyoqXG4gKiBpZiB2aWV3IGRhdGUgaXMgcHJvdmlkZWQgKGJzVmFsdWV8bmdNb2RlbCkgaXQgc2hvdWxkIGJlIHNob3duXG4gKiBpZiB2aWV3IGRhdGUgaXMgbm90IHByb3ZpZGVyOlxuICogaWYgbWluRGF0ZT5jdXJyZW50RGF0ZSAoZGVmYXVsdCB2aWV3IHZhbHVlKSwgc2hvdyBtaW5EYXRlXG4gKiBpZiBtYXhEYXRlPGN1cnJlbnREYXRlKGRlZmF1bHQgdmlldyB2YWx1ZSkgc2hvdyBtYXhEYXRlXG4gKi9cbmZ1bmN0aW9uIGdldFZpZXdEYXRlKHZpZXdEYXRlOiBEYXRlIHwgRGF0ZVtdLCBtaW5EYXRlOiBEYXRlLCBtYXhEYXRlOiBEYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gQXJyYXkuaXNBcnJheSh2aWV3RGF0ZSkgPyB2aWV3RGF0ZVswXSA6IHZpZXdEYXRlO1xuXG4gIGlmIChtaW5EYXRlICYmIGlzQWZ0ZXIobWluRGF0ZSwgX2RhdGUsICdkYXknKSkge1xuICAgIHJldHVybiBtaW5EYXRlO1xuICB9XG5cbiAgaWYgKG1heERhdGUgJiYgaXNCZWZvcmUobWF4RGF0ZSwgX2RhdGUsICdkYXknKSkge1xuICAgIHJldHVybiBtYXhEYXRlO1xuICB9XG5cbiAgcmV0dXJuIF9kYXRlO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWluaVN0b3JlLCBBY3Rpb24sIE1pbmlTdGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0YXRlLCBpbml0aWFsRGF0ZXBpY2tlclN0YXRlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnN0YXRlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYnNEYXRlcGlja2VyUmVkdWNlciB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5yZWR1Y2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlclN0b3JlIGV4dGVuZHMgTWluaVN0b3JlPEJzRGF0ZXBpY2tlclN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IF9kaXNwYXRjaGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBY3Rpb24+KHtcbiAgICAgIHR5cGU6ICdbZGF0ZXBpY2tlcl0gZGlzcGF0Y2hlciBpbml0J1xuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxCc0RhdGVwaWNrZXJTdGF0ZT4oXG4gICAgICBpbml0aWFsRGF0ZXBpY2tlclN0YXRlLFxuICAgICAgX2Rpc3BhdGNoZXIsXG4gICAgICBic0RhdGVwaWNrZXJSZWR1Y2VyXG4gICAgKTtcbiAgICBzdXBlcihfZGlzcGF0Y2hlciwgYnNEYXRlcGlja2VyUmVkdWNlciwgc3RhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IERheVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7IGRpc3BsYXk6IGJsb2NrOycsXG4gICAgcm9sZTogJ2RpYWxvZycsXG4gICAgJ2FyaWEtbGFiZWwnOiAnY2FsZW5kYXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG4gIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSxcbiAgICBwcml2YXRlIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxuICAgIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fZWZmZWN0cyA9IF9lZmZlY3RzO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID0gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoO1xuICAgIHRoaXMuY29udGFpbmVyQ2xhc3MgPSB0aGlzLl9jb25maWcuY29udGFpbmVyQ2xhc3M7XG4gICAgdGhpcy5fZWZmZWN0c1xuICAgICAgLmluaXQodGhpcy5fc3RvcmUpXG4gICAgICAvLyBpbnRpYWwgc3RhdGUgb3B0aW9uc1xuICAgICAgLnNldE9wdGlvbnModGhpcy5fY29uZmlnKVxuICAgICAgLy8gZGF0YSBiaW5kaW5nIHZpZXcgLS0+IG1vZGVsXG4gICAgICAuc2V0QmluZGluZ3ModGhpcylcbiAgICAgIC8vIHNldCBldmVudCBoYW5kbGVyc1xuICAgICAgLnNldEV2ZW50SGFuZGxlcnModGhpcylcbiAgICAgIC5yZWdpc3RlckRhdGVwaWNrZXJTaWRlRWZmZWN0cygpO1xuXG4gICAgLy8gdG9kbzogbW92ZSBpdCBzb21ld2hlcmUgZWxzZVxuICAgIC8vIG9uIHNlbGVjdGVkIGRhdGUgY2hhbmdlXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgICAgLnNlbGVjdCgoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2VsZWN0ZWREYXRlKVxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgICAuc3Vic2NyaWJlKChkYXRlOiBhbnkpID0+IHRoaXMudmFsdWVDaGFuZ2UuZW1pdChkYXRlKSlcbiAgICApO1xuICB9XG5cbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPyBkYXkuaXNEaXNhYmxlZCA6IChkYXkuaXNPdGhlck1vbnRoIHx8IGRheS5pc0Rpc2FibGVkKTtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QoZGF5LmRhdGUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl9lZmZlY3RzLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICcuL21vZGVscyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0RhdGVwaWNrZXJdJyxcbiAgZXhwb3J0QXM6ICdic0RhdGVwaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgZGF0ZXBpY2tlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnMgPSAnY2xpY2snO1xuICAvKipcbiAgICogQ2xvc2UgZGF0ZXBpY2tlciBvbiBvdXRzaWRlIGNsaWNrXG4gICAqL1xuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBkYXRlcGlja2VyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XG5cbiAgQElucHV0KCkgb3V0c2lkZUVzYyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGRhdGVwaWNrZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VyLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgc2hvd25cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBfYnNWYWx1ZTogRGF0ZTtcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgZGF0ZXBpY2tlclxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGJzVmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJDb25maWc+O1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gdmlldyBtb2RlIDogZGF5LCBtb250aCwgb3IgeWVhclxuICAgKi9cbiAgQElucHV0KCkgbWluTW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgQ2VydGFpbiBkYXlzIGluIHRoZSB3ZWVrXG4gICAqL1xuICBASW5wdXQoKSBkYXlzRGlzYWJsZWQ6IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIC8vIHRvZG86IGFzc2lnbiBvbmx5IHN1YnNldCBvZiBmaWVsZHNcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvbmZpZyk7XG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXJcbiAgICApO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZGF0ZXBpY2tlci5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBvdXRzaWRlRXNjOiB0aGlzLm91dHNpZGVFc2MsXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRheXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXlzRGlzYWJsZWQgPSB0aGlzLmRheXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q29uZmlnKCk7XG5cbiAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRGF0ZXBpY2tlckNvbmZpZywgdXNlVmFsdWU6IHRoaXMuX2NvbmZpZ30pXG4gICAgICAuYXR0YWNoKEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgLnNob3coe3BsYWNlbWVudDogdGhpcy5wbGFjZW1lbnR9KTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLmJzVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBwaWNrZXIgKHZpZXcgLT4gbW9kZWwpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlci5oaWRlKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nXG4gICAqIG9mIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIHNldENvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHRoaXMuYnNDb25maWcsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxuICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxuICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxuICAgICAgZGF5c0Rpc2FibGVkOiB0aGlzLmRheXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF5c0Rpc2FibGVkLFxuICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkLFxuICAgICAgbWluTW9kZTogdGhpcy5taW5Nb2RlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5Nb2RlXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcgZXh0ZW5kcyBCc0RhdGVwaWNrZXJDb25maWcgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXInLFxuICBwcm92aWRlcnM6IFtCc0RhdGVwaWNrZXJTdG9yZSwgQnNEYXRlcGlja2VyRWZmZWN0c10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknLFxuICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxuICAgIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzXG4gICkge1xuICAgIHN1cGVyKF9jb25maWcsIF9zdG9yZSwgX2FjdGlvbnMsIF9lZmZlY3RzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1pbmxpbmUnLFxuICBleHBvcnRBczogJ2JzRGF0ZXBpY2tlcklubGluZSdcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIF9ic1ZhbHVlOiBEYXRlO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZz47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBkYXRlcGlja2VyIGlzIGVuYWJsZWQgb3Igbm90XG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICAvKipcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICAvKipcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgKi9cbiAgQElucHV0KCkgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xuICAvKipcbiAgICogRW1pdHMgd2hlbiBkYXRlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIF9kYXRlcGlja2VyUmVmOiBDb21wb25lbnRSZWY8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NvbmZpZzogQnNEYXRlcGlja2VySW5saW5lQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIC8vIHRvZG86IGFzc2lnbiBvbmx5IHN1YnNldCBvZiBmaWVsZHNcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvbmZpZyk7XG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXJcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcblxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgIC5hdHRhY2goQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuX2VsZW1lbnRSZWYpXG4gICAgICAuc2hvdygpO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgc291cmNlIChtb2RlbCAtPiB2aWV3KVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kYXRlcGlja2VyUmVmIHx8ICF0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1heERhdGUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcGlja2VyXG4gICAqL1xuICBzZXRDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB0aGlzLmJzQ29uZmlnLCB7XG4gICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcbiAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZSxcbiAgICAgIGRhdGVzRGlzYWJsZWQ6IHRoaXMuZGF0ZXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNEaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgUHJvdmlkZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG4gIHBhcnNlRGF0ZSxcbiAgZm9ybWF0RGF0ZSxcbiAgZ2V0TG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgaXNEYXRlLFxuICBpc0RhdGVWYWxpZFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5jb25zdCBCU19EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmNvbnN0IEJTX0RBVEVQSUNLRVJfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW5wdXRbYnNEYXRlcGlja2VyXWAsXG4gIGhvc3Q6IHtcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gICAgJyhrZXl1cC5lc2MpJzogJ2hpZGUoKScsXG4gICAgJyhibHVyKSc6ICdvbkJsdXIoKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbQlNfREFURVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiwgQlNfREFURVBJQ0tFUl9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIHByaXZhdGUgX29uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlICovXG4gIHByaXZhdGUgX3ZhbGlkYXRvckNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIF9waWNrZXI6IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgLy8gdXBkYXRlIGlucHV0IHZhbHVlIG9uIGRhdGVwaWNrZXIgdmFsdWUgdXBkYXRlXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldElucHV0VmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICBjb25zdCBpbml0aWFsRGF0ZSA9ICF2YWx1ZSA/ICcnXG4gICAgICA6IGZvcm1hdERhdGUodmFsdWUsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKTtcblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIGluaXRpYWxEYXRlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0aGlzLndyaXRlVmFsdWUoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgX3ZhbHVlOiBEYXRlIHwgc3RyaW5nID0gYy52YWx1ZTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLXN3aXRjaCAqL1xuICAgIGlmIChfdmFsdWUgPT09IG51bGwgfHwgX3ZhbHVlID09PSB1bmRlZmluZWQgfHwgX3ZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzRGF0ZShfdmFsdWUpKSB7XG4gICAgICBjb25zdCBfaXNEYXRlVmFsaWQgPSBpc0RhdGVWYWxpZChfdmFsdWUpO1xuICAgICAgaWYgKCFfaXNEYXRlVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IGludmFsaWQ6IF92YWx1ZSB9IH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1pbkRhdGUgJiYgaXNCZWZvcmUoX3ZhbHVlLCB0aGlzLl9waWNrZXIubWluRGF0ZSwgJ2RhdGUnKSkge1xuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgbWluRGF0ZTogdGhpcy5fcGlja2VyLm1pbkRhdGUgfSB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5tYXhEYXRlICYmIGlzQWZ0ZXIoX3ZhbHVlLCB0aGlzLl9waWNrZXIubWF4RGF0ZSwgJ2RhdGUnKSkge1xuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgbWF4RGF0ZTogdGhpcy5fcGlja2VyLm1heERhdGUgfSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl92YWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IF9sb2NhbGVLZXkgPSB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGU7XG4gICAgICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKF9sb2NhbGVLZXkpO1xuICAgICAgaWYgKCFfbG9jYWxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTG9jYWxlIFwiJHtfbG9jYWxlS2V5fVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5fdmFsdWUgPSBwYXJzZURhdGUodmFsdWUsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcGlja2VyLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLl9waWNrZXIuaGlkZSgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpLmJsdXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbmZpZyB7XG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIGRpc3BsYXlNb250aHMgPSAyO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXInLFxuICBwcm92aWRlcnM6IFtCc0RhdGVwaWNrZXJTdG9yZSwgQnNEYXRlcGlja2VyRWZmZWN0c10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknLFxuICAgIHN0eWxlOiAncG9zaXRpb246IGFic29sdXRlOyBkaXNwbGF5OiBibG9jazsnLFxuICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICdhcmlhLWxhYmVsJzogJ2NhbGVuZGFyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRSYW5nZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XG5cbiAgX3JhbmdlU3RhY2s6IERhdGVbXSA9IFtdO1xuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lckNsYXNzID0gdGhpcy5fY29uZmlnLmNvbnRhaW5lckNsYXNzO1xuICAgIHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA9IHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aDtcbiAgICB0aGlzLl9lZmZlY3RzXG4gICAgICAuaW5pdCh0aGlzLl9zdG9yZSlcbiAgICAgIC8vIGludGlhbCBzdGF0ZSBvcHRpb25zXG4gICAgICAvLyB0b2RvOiBmaXggdGhpcywgc3BsaXQgY29uZmlnc1xuICAgICAgLnNldE9wdGlvbnModGhpcy5fY29uZmlnKVxuICAgICAgLy8gZGF0YSBiaW5kaW5nIHZpZXcgLS0+IG1vZGVsXG4gICAgICAuc2V0QmluZGluZ3ModGhpcylcbiAgICAgIC8vIHNldCBldmVudCBoYW5kbGVyc1xuICAgICAgLnNldEV2ZW50SGFuZGxlcnModGhpcylcbiAgICAgIC5yZWdpc3RlckRhdGVwaWNrZXJTaWRlRWZmZWN0cygpO1xuXG4gICAgLy8gdG9kbzogbW92ZSBpdCBzb21ld2hlcmUgZWxzZVxuICAgIC8vIG9uIHNlbGVjdGVkIGRhdGUgY2hhbmdlXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3RlZFJhbmdlKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGUgPT4gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpKVxuICAgICk7XG4gIH1cblxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA/IGRheS5pc0Rpc2FibGVkIDogKGRheS5pc090aGVyTW9udGggfHwgZGF5LmlzRGlzYWJsZWQpO1xuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBvbmx5IG9uZSBkYXRlIGlzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAvLyBhbmQgdXNlciBjbGlja3Mgb24gcHJldmlvdXMgZGF0ZVxuICAgIC8vIHN0YXJ0IHNlbGVjdGlvbiBmcm9tIG5ldyBkYXRlXG4gICAgLy8gYnV0IGlmIG5ldyBkYXRlIGlzIGFmdGVyIGluaXRpYWwgb25lXG4gICAgLy8gdGhhbiBmaW5pc2ggc2VsZWN0aW9uXG4gICAgaWYgKHRoaXMuX3JhbmdlU3RhY2subGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLl9yYW5nZVN0YWNrID1cbiAgICAgICAgZGF5LmRhdGUgPj0gdGhpcy5fcmFuZ2VTdGFja1swXVxuICAgICAgICAgID8gW3RoaXMuX3JhbmdlU3RhY2tbMF0sIGRheS5kYXRlXVxuICAgICAgICAgIDogW2RheS5kYXRlXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBbZGF5LmRhdGVdO1xuICAgIH1cblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0UmFuZ2UodGhpcy5fcmFuZ2VTdGFjaykpO1xuXG4gICAgaWYgKHRoaXMuX3JhbmdlU3RhY2subGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLl9yYW5nZVN0YWNrID0gW107XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX2VmZmVjdHMuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcmFuZ2VwaWNrZXJdJyxcbiAgZXhwb3J0QXM6ICdic0RhdGVyYW5nZXBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIGRhdGVyYW5nZXBpY2tlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnMgPSAnY2xpY2snO1xuICAvKipcbiAgICogQ2xvc2UgZGF0ZXJhbmdlcGlja2VyIG9uIG91dHNpZGUgY2xpY2tcbiAgICovXG4gIEBJbnB1dCgpIG91dHNpZGVDbGljayA9IHRydWU7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRhdGVyYW5nZXBpY2tlciBzaG91bGQgYmUgYXBwZW5kZWRcbiAgICogdG8uIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyID0gJ2JvZHknO1xuXG4gIEBJbnB1dCgpIG91dHNpZGVFc2MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBkYXRlcmFuZ2VwaWNrZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VyLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcmFuZ2VwaWNrZXIgaXMgaGlkZGVuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgX2JzVmFsdWU6IERhdGVbXTtcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgZGF0ZXJhbmdlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmJzVmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlnIG9iamVjdCBmb3IgZGF0ZXJhbmdlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVyYW5nZXBpY2tlckNvbmZpZz47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBkYXRlcmFuZ2VwaWNrZXIncyBjb250ZW50IGlzIGVuYWJsZWQgb3Igbm90XG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICAvKipcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICAvKipcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgKi9cbiAgQElucHV0KCkgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xuICAvKipcbiAgICogRW1pdHMgd2hlbiBkYXRlcmFuZ2VwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIF9kYXRlcGlja2VyUmVmOiBDb21wb25lbnRSZWY8QnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgICAgICAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlclxuICAgICk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kYXRlcGlja2VyLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2RhdGVwaWNrZXIub25IaWRkZW47XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyLmxpc3Rlbih7XG4gICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMub3V0c2lkZUNsaWNrLFxuICAgICAgb3V0c2lkZUVzYzogdGhpcy5vdXRzaWRlRXNjLFxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuICAgIHRoaXMuc2V0Q29uZmlnKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kYXRlcGlja2VyUmVmIHx8ICF0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1heERhdGUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q29uZmlnKCk7XG5cbiAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRGF0ZXBpY2tlckNvbmZpZywgdXNlVmFsdWU6IHRoaXMuX2NvbmZpZ30pXG4gICAgICAuYXR0YWNoKEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7cGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudH0pO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgc291cmNlIChtb2RlbCAtPiB2aWV3KVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2VcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKChyYW5nZTogRGF0ZVtdKSA9PiByYW5nZSAmJiByYW5nZVswXSAmJiAhIXJhbmdlWzFdKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcbiAgICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVyYW5nZXBpY2tlclxuICAgKi9cbiAgc2V0Q29uZmlnKCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMuX2NvbmZpZyxcbiAgICAgIHRoaXMuYnNDb25maWcsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxuICAgICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcbiAgICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxuICAgICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyLmhpZGUoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmdcbiAgICogb2YgdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgUHJvdmlkZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIE5HX1ZBTElEQVRPUlMsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgcGFyc2VEYXRlLCBmb3JtYXREYXRlLCBnZXRMb2NhbGUsIGlzQWZ0ZXIsIGlzQmVmb3JlLCBpc0FycmF5LCBpc0RhdGVWYWxpZCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcblxuY29uc3QgQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgQlNfREFURVJBTkdFUElDS0VSX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpbnB1dFtic0RhdGVyYW5nZXBpY2tlcl1gLFxuICBob3N0OiB7XG4gICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudCknLFxuICAgICcoa2V5dXAuZXNjKSc6ICdoaWRlKCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyKCknXG4gIH0sXG4gIHByb3ZpZGVyczogW0JTX0RBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiwgQlNfREFURVJBTkdFUElDS0VSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICBwcml2YXRlIF9vbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC12YXJpYWJsZSAqL1xuICBwcml2YXRlIF92YWxpZGF0b3JDaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlW107XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIF9waWNrZXI6IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gbG9jYWxlIGNoYW5nZVxuICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRJbnB1dFZhbHVlKGRhdGU6IERhdGVbXSk6IHZvaWQge1xuICAgIGxldCByYW5nZSA9ICcnO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBzdGFydDogc3RyaW5nID0gIWRhdGVbMF0gPyAnJ1xuICAgICAgICA6IGZvcm1hdERhdGUoZGF0ZVswXSxcbiAgICAgICAgICB0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZUlucHV0Rm9ybWF0LFxuICAgICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZVxuICAgICAgICApO1xuICAgICAgY29uc3QgZW5kOiBzdHJpbmcgPSAhZGF0ZVsxXSA/ICcnXG4gICAgICAgIDogZm9ybWF0RGF0ZShcbiAgICAgICAgICBkYXRlWzFdLFxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgICByYW5nZSA9IChzdGFydCAmJiBlbmQpID8gc3RhcnQgKyB0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZVNlcGFyYXRvciArIGVuZCA6ICcnO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCByYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgdGhpcy53cml0ZVZhbHVlKChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IF92YWx1ZTogW0RhdGUsIERhdGVdID0gYy52YWx1ZTtcblxuICAgIGlmIChfdmFsdWUgPT09IG51bGwgfHwgX3ZhbHVlID09PSB1bmRlZmluZWQgfHwgIWlzQXJyYXkoX3ZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgX2lzRmlyc3REYXRlVmFsaWQgPSBpc0RhdGVWYWxpZChfdmFsdWVbMF0pO1xuICAgIGNvbnN0IF9pc1NlY29uZERhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVsxXSk7XG5cbiAgICBpZiAoIV9pc0ZpcnN0RGF0ZVZhbGlkKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzBdIH0gfTtcbiAgICB9XG5cbiAgICBpZiAoIV9pc1NlY29uZERhdGVWYWxpZCkge1xuICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IGludmFsaWQ6IF92YWx1ZVsxXSB9IH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWluRGF0ZSAmJiBpc0JlZm9yZShfdmFsdWVbMF0sIHRoaXMuX3BpY2tlci5taW5EYXRlLCAnZGF0ZScpKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgbWluRGF0ZTogdGhpcy5fcGlja2VyLm1pbkRhdGUgfSB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1heERhdGUgJiYgaXNBZnRlcihfdmFsdWVbMV0sIHRoaXMuX3BpY2tlci5tYXhEYXRlLCAnZGF0ZScpKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgbWF4RGF0ZTogdGhpcy5fcGlja2VyLm1heERhdGUgfSB9O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl92YWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGVbXSB8IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgX2xvY2FsZUtleSA9IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZTtcbiAgICAgIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUoX2xvY2FsZUtleSk7XG4gICAgICBpZiAoIV9sb2NhbGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBMb2NhbGUgXCIke19sb2NhbGVLZXl9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGxldCBfaW5wdXQ6IChzdHJpbmdbXSB8IERhdGVbXSkgPSBbXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIF9pbnB1dCA9IHZhbHVlLnNwbGl0KHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlU2VwYXJhdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIF9pbnB1dCA9IHZhbHVlO1xuICAgICAgfVxuXG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gKF9pbnB1dCBhcyBzdHJpbmdbXSlcbiAgICAgICAgLm1hcCgoX3ZhbDogc3RyaW5nKTogRGF0ZSA9PlxuICAgICAgICAgIHBhcnNlRGF0ZShfdmFsLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSkpXG4gICAgICAgIC5tYXAoKGRhdGU6IERhdGUpID0+IChpc05hTihkYXRlLnZhbHVlT2YoKSkgPyBudWxsIDogZGF0ZSkpO1xuICAgIH1cblxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9waWNrZXIuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLl9waWNrZXIuaGlkZSgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpLmJsdXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWNhbGVuZGFyLWxheW91dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBjdXJyZW50IGRhdGUsIHdpbGwgYmUgYWRkZWQgaW4gbmVhcmVzdCByZWxlYXNlcyAtLT5cbiAgICA8YnMtY3VycmVudC1kYXRlIHRpdGxlPVwiaGV5IHRoZXJlXCIgKm5nSWY9XCJmYWxzZVwiPjwvYnMtY3VycmVudC1kYXRlPlxuXG4gICAgPCEtLW5hdmlnYXRpb24tLT5cbiAgICA8ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlci1oZWFkXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1wiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWJvZHlcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS10aW1lcGlja2VyLS0+XG4gICAgPGJzLXRpbWVwaWNrZXIgKm5nSWY9XCJmYWxzZVwiPjwvYnMtdGltZXBpY2tlcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWN1cnJlbnQtZGF0ZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImN1cnJlbnQtdGltZWRhdGVcIj48c3Bhbj57eyB0aXRsZSB9fTwvc3Bhbj48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnNDdXN0b21EYXRlcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBEYXRlIHwgRGF0ZVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1jdXN0b20tZGF0ZS12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnNcIj5cbiAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IHJhbmdlIG9mIHJhbmdlc1wiPnt7IHJhbmdlLmxhYmVsIH19PC9idXR0b24+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiaXNDdXN0b21SYW5nZVNob3duXCI+Q3VzdG9tIFJhbmdlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNDdXN0b21SYW5nZVNob3duOiB0cnVlO1xuICBASW5wdXQoKSByYW5nZXM6IEJzQ3VzdG9tRGF0ZXNbXTtcbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlckRheURlY29yYXRvcl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2RheS5pc0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmlzLWhpZ2hsaWdodGVkXSc6ICdkYXkuaXNIb3ZlcmVkJyxcbiAgICAnW2NsYXNzLmlzLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoJyxcbiAgICAnW2NsYXNzLmlzLWFjdGl2ZS1vdGhlci1tb250aF0nOiAnZGF5LmlzT3RoZXJNb250aEhvdmVyZWQnLFxuICAgICdbY2xhc3MuaW4tcmFuZ2VdJzogJ2RheS5pc0luUmFuZ2UnLFxuICAgICdbY2xhc3Muc2VsZWN0LXN0YXJ0XSc6ICdkYXkuaXNTZWxlY3Rpb25TdGFydCcsXG4gICAgJ1tjbGFzcy5zZWxlY3QtZW5kXSc6ICdkYXkuaXNTZWxlY3Rpb25FbmQnLFxuICAgICdbY2xhc3Muc2VsZWN0ZWRdJzogJ2RheS5pc1NlbGVjdGVkJ1xuICB9LFxuICB0ZW1wbGF0ZTogYHt7IGRheS5sYWJlbCB9fWBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF5OiBEYXlWaWV3TW9kZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRheS5pc1RvZGF5ICYmIHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fY29uZmlnLmN1c3RvbVRvZGF5Q2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cInByZXZpb3VzXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlTGVmdEFycm93XCJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8odHJ1ZSlcIj48c3Bhbj4mbHNhcXVvOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIlxuICAgICAgICAgICAgKm5nSWY9XCJjYWxlbmRhci5tb250aFRpdGxlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ2aWV3KCdtb250aCcpXCJcbiAgICA+PHNwYW4+e3sgY2FsZW5kYXIubW9udGhUaXRsZSB9fTwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIiAoY2xpY2spPVwidmlldygneWVhcicpXCJcbiAgICA+PHNwYW4+e3sgY2FsZW5kYXIueWVhclRpdGxlIH19PC9zcGFuPjwvYnV0dG9uPlxuXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwibmV4dFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3dcIlxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8oZmFsc2UpXCI+PHNwYW4+JnJzYXF1bzs8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBjYWxlbmRhcjogRGF5c0NhbGVuZGFyVmlld01vZGVsO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25EaXJlY3Rpb24+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBuYXZUbyhkb3duOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoXG4gICAgICBkb3duID8gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gOiBCc05hdmlnYXRpb25EaXJlY3Rpb24uVVBcbiAgICApO1xuICB9XG5cbiAgdmlldyh2aWV3TW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdCh2aWV3TW9kZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsIFdlZWtWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF5cy1jYWxlbmRhci12aWV3JyxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJzLWNhbGVuZGFyLWxheW91dD5cbiAgICAgIDxicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1xuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxuICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxuICAgICAgICAob25WaWV3TW9kZSk9XCJjaGFuZ2VWaWV3TW9kZSgkZXZlbnQpXCJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxuXG4gICAgICA8IS0tZGF5cyBtYXRyaXgtLT5cbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwiZGF5cyB3ZWVrc1wiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8IS0taWYgc2hvdyB3ZWVrcy0tPlxuICAgICAgICAgIDx0aCAqbmdJZj1cIm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzXCI+PC90aD5cbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IHdlZWtkYXkgb2YgY2FsZW5kYXIud2Vla2RheXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwid2Vla2RheVwiPnt7IGNhbGVuZGFyLndlZWtkYXlzW2ldIH19XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgY2FsZW5kYXIud2Vla3M7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ3ZWVrXCIgW2NsYXNzLmFjdGl2ZS13ZWVrXT1cImlzV2Vla0hvdmVyZWRcIiAgKm5nSWY9XCJvcHRpb25zLnNob3dXZWVrTnVtYmVyc1wiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0V2Vlayh3ZWVrKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwid2Vla0hvdmVySGFuZGxlcih3ZWVrLCB0cnVlKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwid2Vla0hvdmVySGFuZGxlcih3ZWVrLCBmYWxzZSlcIj57eyBjYWxlbmRhci53ZWVrTnVtYmVyc1tpXSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWsuZGF5c1wiIHJvbGU9XCJncmlkY2VsbFwiPlxuICAgICAgICAgIDxzcGFuIGJzRGF0ZXBpY2tlckRheURlY29yYXRvclxuICAgICAgICAgICAgICAgIFtkYXldPVwiZGF5XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0RGF5KGRheSlcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyRGF5KGRheSwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyRGF5KGRheSwgZmFsc2UpXCI+e3sgZGF5LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9icy1jYWxlbmRhci1sYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50ICB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IERhdGVwaWNrZXJSZW5kZXJPcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5Vmlld01vZGVsPigpO1xuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEhvdmVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyV2VlayA9IG5ldyBFdmVudEVtaXR0ZXI8V2Vla1ZpZXdNb2RlbD4oKTtcblxuICBpc1dlZWtIb3ZlcmVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnKSB7IH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyBtb250aDogc3RlcCB9IH0pO1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2VsZWN0RGF5KGV2ZW50OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2VsZWN0V2Vlayh3ZWVrOiBXZWVrVmlld01vZGVsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2Vlaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3ZWVrLmRheXNcbiAgICAgICYmIHdlZWsuZGF5c1swXVxuICAgICAgJiYgIXdlZWsuZGF5c1swXS5pc0Rpc2FibGVkXG4gICAgICAmJiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGgpIHtcblxuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHdlZWsuZGF5c1swXSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2Vlay5kYXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gd2Vlay5kYXlzLmZpbmQoKGRheTogRGF5Vmlld01vZGVsKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXG4gICAgICAgIDogIWRheS5pc090aGVyTW9udGggJiYgIWRheS5pc0Rpc2FibGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHNlbGVjdGVkRGF5KTtcbiAgfVxuXG4gIHdlZWtIb3ZlckhhbmRsZXIoY2VsbDogV2Vla1ZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2Vlaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjdGl2ZURheXMgPSBjZWxsLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGhcbiAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzQWN0aXZlRGF5cykge1xuICAgICAgY2VsbC5pc0hvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgICB0aGlzLmlzV2Vla0hvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgICB0aGlzLm9uSG92ZXJXZWVrLmVtaXQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgaG92ZXJEYXkoY2VsbDogRGF5Vmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoICYmIGNlbGwuaXNPdGhlck1vbnRoKSB7XG4gICAgICBjZWxsLmlzT3RoZXJNb250aEhvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtbW9udGgtY2FsZW5kYXItdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJzLWNhbGVuZGFyLWxheW91dD5cbiAgICAgIDxicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1xuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxuICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxuICAgICAgICAob25WaWV3TW9kZSk9XCJjaGFuZ2VWaWV3TW9kZSgkZXZlbnQpXCJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxuXG4gICAgICA8dGFibGUgcm9sZT1cImdyaWRcIiBjbGFzcz1cIm1vbnRoc1wiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGNhbGVuZGFyLm1vbnRoc1wiPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2Ygcm93XCIgcm9sZT1cImdyaWRjZWxsXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInZpZXdNb250aChtb250aClcIlxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3Zlck1vbnRoKG1vbnRoLCB0cnVlKVwiXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyTW9udGgobW9udGgsIGZhbHNlKVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJtb250aC5pc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmlzLWhpZ2hsaWdodGVkXT1cIm1vbnRoLmlzSG92ZXJlZFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbW9udGgubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9icy1jYWxlbmRhci1sYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNNb250aENhbGVuZGFyVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbDtcblxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyQ2VsbFZpZXdNb2RlbD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IHllYXI6IHN0ZXAgfSB9KTtcbiAgfVxuXG4gIHZpZXdNb250aChtb250aDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KG1vbnRoKTtcbiAgfVxuXG4gIGhvdmVyTW9udGgoY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtdGltZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJzLXRpbWVwaWNrZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtZGVjcmVhc2VcIj4tPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJob3Vyc1wiIHBsYWNlaG9sZGVyPVwiMDBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJzLWluY3JlYXNlXCI+KzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtZGVjcmVhc2VcIj4tPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJtaW51dGVzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIj4rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzd2l0Y2gtdGltZS1mb3JtYXRcIj57eyBhbXBtIH19XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFzQUFBQUtDQVlBQUFCaThLU0RBQUFCU0VsRVFWUVlWM1hRUFV2RFVCUUc0SE51YWd0VnFjNktnb3VDdjZHSXVJbnRZQkxCOWhjSVFwTFN0Q0FJVjdEWW1wVGNSV2NYcVppbzNWd2MvVUNjL1FFcWZneUtHYnIwSTduUzFFaUhlcVl6UE8vaDVTRDBqYXhVWmptU0xDQitPRmIrVUZJTkZ3QVNBRUFkcHU5Z2FHWFZ5QUhIRlFCa0hwS0hjNmE5ZHpFQ3ZBRHlZOXNxbEFNc0s5VzBqenhEWHFleXRyM21oUWNreFNqaTI3VEpKNS9yUG1JcHdKSnEzSHJ0ZHVyaVlPdXJ2MWE0aTFwNUhuaGtHOU9GeW1pMFJlb08wNWNHd2IrYXl2NGR5c1Z5Z2plRm1zUDA1Zjh3cFpROGZzZHZmbXVZOXpqV1NOcVV0Z1lGVm5PVlJlSUxZb0JGemRRSTUvR0dGek5IaEdiZVpub3BER1UyOXNaYnNjZ2xkbUM5OXczNVZPQVRUeWNJTU1jQlhJZnBTVkd6WmhBNkM4aGgwMGNvbmxuNlZROVRHZ1YzMk9FQUtRQzREckJxN0NKd2QwZ2dSN1ZxL3JQcmZnQitDM3NHeXBZNURBQUFBQUJKUlU1RXJrSmdnZz09XCJcbiAgICAgICAgICBhbHQ9XCJcIj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQge1xuICBhbXBtID0gJ29rJztcbiAgaG91cnMgPSAwO1xuICBtaW51dGVzID0gMDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB5ZWFyc1BlckNhbGVuZGFyIH0gZnJvbSAnLi4vLi4vZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhcic7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy15ZWFycy1jYWxlbmRhci12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwieWVhcnNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBjYWxlbmRhci55ZWFyc1wiPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgeWVhciBvZiByb3dcIiByb2xlPVwiZ3JpZGNlbGxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidmlld1llYXIoeWVhcilcIlxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlclllYXIoeWVhciwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlclllYXIoeWVhciwgZmFsc2UpXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInllYXIuaXNEaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFtjbGFzcy5pcy1oaWdobGlnaHRlZF09XCJ5ZWFyLmlzSG92ZXJlZFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgeWVhci5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWw7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNlbGxWaWV3TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyB5ZWFyOiBzdGVwICogeWVhcnNQZXJDYWxlbmRhciB9IH0pO1xuICB9XG5cbiAgdmlld1llYXIoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHllYXIpO1xuICB9XG5cbiAgaG92ZXJZZWFyKGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XG4gIH1cblxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXItaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZURpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29uZmlnJztcblxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcbmltcG9ydCB7IEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jYWxlbmRhci1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VycmVudC1kYXRlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtbW9udGhzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy15ZWFycy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgX2V4cG9ydHMgPSBbXG4gIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQsXG4gIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCxcblxuICBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXG4gIEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlLFxuXG4gIEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUsXG4gIEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlLFxuXG4gIEJzRGF0ZXBpY2tlcklubGluZURpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCxcbiAgICBCc0N1cnJlbnREYXRlVmlld0NvbXBvbmVudCxcbiAgICBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCxcbiAgICBCc1RpbWVwaWNrZXJWaWV3Q29tcG9uZW50LFxuXG4gICAgQnNDYWxlbmRhckxheW91dENvbXBvbmVudCxcbiAgICBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQsXG4gICAgQnNNb250aENhbGVuZGFyVmlld0NvbXBvbmVudCxcbiAgICBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxuXG4gICAgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQsXG5cbiAgICAuLi5fZXhwb3J0c1xuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXG4gICAgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQsXG4gICAgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IF9leHBvcnRzXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQnNEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgICAgIFBvc2l0aW9uaW5nU2VydmljZSxcbiAgICAgICAgQnNEYXRlcGlja2VyU3RvcmUsXG4gICAgICAgIEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgICAgIEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICAgICAgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcsXG4gICAgICAgIEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyxcbiAgICAgICAgQnNEYXRlcGlja2VyRWZmZWN0cyxcbiAgICAgICAgQnNMb2NhbGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0dGVyIHtcbiAgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9kYXRlLWZvcm1hdHRlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1pbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSZsdDshJm5kYXNoO25nLWtleWRvd249XCJrZXlkb3duKCRldmVudClcIiZuZGFzaDsmZ3Q7LS0+XG4gICAgPGRpdiAqbmdJZj1cImRhdGVwaWNrZXJNb2RlXCIgY2xhc3M9XCJ3ZWxsIHdlbGwtc20gYmctZmFkZWQgcC1hIGNhcmRcIiByb2xlPVwiYXBwbGljYXRpb25cIiA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcbiAgQElucHV0KCkgZGF0ZXBpY2tlck1vZGU6IHN0cmluZztcbiAgQElucHV0KCkgc3RhcnRpbmdEYXk6IG51bWJlcjtcbiAgQElucHV0KCkgeWVhclJhbmdlOiBudW1iZXI7XG5cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgbWluTW9kZTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhNb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dXZWVrczogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9ybWF0RGF5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0RGF5SGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdERheVRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvcnRjdXRQcm9wYWdhdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nOyBjbGF6ejogc3RyaW5nIH1bXTtcbiAgQElucHV0KCkgbW9udGhDb2xMaW1pdDogbnVtYmVyO1xuICBASW5wdXQoKSB5ZWFyQ29sTGltaXQ6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9W107XG4gIEBJbnB1dCgpIGRheURpc2FibGVkOiBudW1iZXJbXTtcbiAgQElucHV0KCkgaW5pdERhdGU6IERhdGU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkRvbmU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcbiAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPihmYWxzZSk7XG4gIEBPdXRwdXQoKSBhY3RpdmVEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzdGVwRGF5OiBhbnkgPSB7fTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzdGVwTW9udGg6IGFueSA9IHt9O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHN0ZXBZZWFyOiBhbnkgPSB7fTtcblxuICB1bmlxdWVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBtb2Rlczogc3RyaW5nW10gPSBbJ2RheScsICdtb250aCcsICd5ZWFyJ107XG4gIHByb3RlY3RlZCBkYXRlRm9ybWF0dGVyOiBEYXRlRm9ybWF0dGVyID0gbmV3IERhdGVGb3JtYXR0ZXIoKTtcbiAgcHJvdGVjdGVkIF9hY3RpdmVEYXRlOiBEYXRlO1xuICBwcm90ZWN0ZWQgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBwcm90ZWN0ZWQgYWN0aXZlRGF0ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlckRheTogRnVuY3Rpb247XG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlckRheTogRnVuY3Rpb247XG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJNb250aDogRnVuY3Rpb247XG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlck1vbnRoOiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlclllYXI6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJZZWFyOiBGdW5jdGlvbjtcblxuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcbiAgfVxuXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGZvcm1hdHRlciB2YWx1ZSB0byBEYXRlIG9iamVjdFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0b2RvOiB1c2UgZGF0ZSBmb3IgdW5pcXVlIHZhbHVlXG4gICAgdGhpcy51bmlxdWVJZCA9ICBgZGF0ZXBpY2tlci0tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCl9YDtcblxuICAgIGlmICh0aGlzLmluaXREYXRlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmluaXREYXRlO1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpKTtcbiAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMucmVmcmVzaFZpZXcgc2hvdWxkIGJlIGNhbGxlZCBoZXJlIHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMgb24gdGhlIGZseVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLXZhcmlhYmxlXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gICAgdGhpcy5jaGVja0lmQWN0aXZlRGF0ZUdvdFVwZGF0ZWQoY2hhbmdlcy5hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFjdGl2ZURhdGUgaGFzIGJlZW4gdXBkYXRlIGFuZCB0aGVuIGVtaXQgdGhlIGFjdGl2ZURhdGVDaGFuZ2Ugd2l0aCB0aGUgbmV3IGRhdGVcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY2hlY2tJZkFjdGl2ZURhdGVHb3RVcGRhdGVkKGFjdGl2ZURhdGU6IGFueSk6IHZvaWQge1xuICAgIGlmIChhY3RpdmVEYXRlICYmICFhY3RpdmVEYXRlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlO1xuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c1ZhbHVlICYmXG4gICAgICAgIHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmXG4gICAgICAgIHByZXZpb3VzVmFsdWUuZ2V0VGltZSgpICE9PSBhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZS5nZXRUaW1lKClcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldENvbXBhcmVIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ2RheScpIHtcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyID0gaGFuZGxlcjtcbiAgICB9XG4gIH1cblxuICBjb21wYXJlKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGRhdGUxID09PSB1bmRlZmluZWQgfHwgZGF0ZTIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScgJiYgdGhpcy5jb21wYXJlSGFuZGxlckRheSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkoZGF0ZTEsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgoZGF0ZTEsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInICYmIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlclllYXIoZGF0ZTEsIGRhdGUyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG5cbiAgc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ2RheScpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5ID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyID0gaGFuZGxlcjtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIoKTtcbiAgICB9XG4gIH1cblxuICBkYXRlRmlsdGVyKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdChkYXRlLCBmb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgaXNBY3RpdmUoZGF0ZU9iamVjdDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY29tcGFyZShkYXRlT2JqZWN0LmRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgPT09IDApIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUlkID0gZGF0ZU9iamVjdC51aWQ7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgY3JlYXRlRGF0ZU9iamVjdChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IGFueSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IGRhdGVPYmplY3Q6IGFueSA9IHt9O1xuICAgIGRhdGVPYmplY3QuZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZS5nZXREYXRlKClcbiAgICApO1xuICAgIGRhdGVPYmplY3QuZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZU9iamVjdC5kYXRlKTtcbiAgICBkYXRlT2JqZWN0LmxhYmVsID0gdGhpcy5kYXRlRmlsdGVyKGRhdGUsIGZvcm1hdCk7XG4gICAgZGF0ZU9iamVjdC5zZWxlY3RlZCA9IHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZSkgPT09IDA7XG4gICAgZGF0ZU9iamVjdC5kaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZChkYXRlKTtcbiAgICBkYXRlT2JqZWN0LmN1cnJlbnQgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgbmV3IERhdGUoKSkgPT09IDA7XG4gICAgZGF0ZU9iamVjdC5jdXN0b21DbGFzcyA9IHRoaXMuZ2V0Q3VzdG9tQ2xhc3NGb3JEYXRlKGRhdGVPYmplY3QuZGF0ZSk7XG5cbiAgICByZXR1cm4gZGF0ZU9iamVjdDtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3BsaXQoYXJyOiBhbnlbXSwgc2l6ZTogbnVtYmVyKTogYW55W10ge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBhcnJheXM6IGFueVtdID0gW107XG4gICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgICBhcnJheXMucHVzaChhcnIuc3BsaWNlKDAsIHNpemUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlzO1xuICB9XG5cbiAgLy8gRml4IGEgaGFyZC1yZXByb2R1Y2libGUgYnVnIHdpdGggdGltZXpvbmVzXG4gIC8vIFRoZSBidWcgZGVwZW5kcyBvbiBPUywgYnJvd3NlciwgY3VycmVudCB0aW1lem9uZSBhbmQgY3VycmVudCBkYXRlXG4gIC8vIGkuZS5cbiAgLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgyMDE0LCAwLCAxKTtcbiAgLy8gY29uc29sZS5sb2coZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLFxuICAvLyBkYXRlLmdldEhvdXJzKCkpOyBjYW4gcmVzdWx0IGluIFwiMjAxMyAxMSAzMSAyM1wiIGJlY2F1c2Ugb2YgdGhlIGJ1Zy5cbiAgZml4VGltZVpvbmUoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZS5nZXREYXRlKCksXG4gICAgICBob3VycyA9PT0gMjMgPyBob3VycyArIDIgOiAwXG4gICAgKTtcbiAgfVxuXG4gIHNlbGVjdChkYXRlOiBEYXRlLCBpc01hbnVhbCA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5taW5Nb2RlKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZlRGF0ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBkYXRlLmdldERhdGUoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuZml4VGltZVpvbmUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIGlmIChpc01hbnVhbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkRvbmUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5maXhUaW1lWm9uZSh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgaWYgKGlzTWFudWFsKSB7XG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlck1vZGUgPSB0aGlzLm1vZGVzW1xuICAgICAgICAgIHRoaXMubW9kZXMuaW5kZXhPZih0aGlzLmRhdGVwaWNrZXJNb2RlKSAtIDFcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS52YWx1ZU9mKCkpO1xuICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBtb3ZlKGRpcmVjdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGxldCBleHBlY3RlZFN0ZXA6IGFueTtcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScpIHtcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcERheTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJykge1xuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwTW9udGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJykge1xuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwWWVhcjtcbiAgICB9XG5cbiAgICBpZiAoZXhwZWN0ZWRTdGVwKSB7XG4gICAgICBjb25zdCB5ZWFyID1cbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyBkaXJlY3Rpb24gKiAoZXhwZWN0ZWRTdGVwLnllYXJzIHx8IDApO1xuICAgICAgY29uc3QgbW9udGggPVxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIGRpcmVjdGlvbiAqIChleHBlY3RlZFN0ZXAubW9udGhzIHx8IDApO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU1vZGUoX2RpcmVjdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gX2RpcmVjdGlvbiB8fCAxO1xuXG4gICAgaWYgKFxuICAgICAgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWF4TW9kZSAmJiBkaXJlY3Rpb24gPT09IDEpIHx8XG4gICAgICAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5taW5Nb2RlICYmIGRpcmVjdGlvbiA9PT0gLTEpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbXG4gICAgICB0aGlzLm1vZGVzLmluZGV4T2YodGhpcy5kYXRlcGlja2VyTW9kZSkgKyBkaXJlY3Rpb25cbiAgICBdO1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDdXN0b21DbGFzc0ZvckRhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmN1c3RvbUNsYXNzKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIC8vIHRvZG86IGJ1aWxkIGEgaGFzaCBvZiBjdXN0b20gY2xhc3NlcywgaXQgd2lsbCB3b3JrIGZhc3RlclxuICAgIGNvbnN0IGN1c3RvbUNsYXNzT2JqZWN0OiB7XG4gICAgICBkYXRlOiBEYXRlO1xuICAgICAgbW9kZTogc3RyaW5nO1xuICAgICAgY2xheno6IHN0cmluZztcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIH0gPSB0aGlzLmN1c3RvbUNsYXNzLmZpbmQoKGN1c3RvbUNsYXNzOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGN1c3RvbUNsYXNzLmRhdGUudmFsdWVPZigpID09PSBkYXRlLnZhbHVlT2YoKSAmJlxuICAgICAgICBjdXN0b21DbGFzcy5tb2RlID09PSB0aGlzLmRhdGVwaWNrZXJNb2RlXG4gICAgICApO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUNsYXNzT2JqZWN0ID09PSB1bmRlZmluZWQgPyAnJyA6IGN1c3RvbUNsYXNzT2JqZWN0LmNsYXp6O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbXBhcmVEYXRlRGlzYWJsZWQoXG4gICAgZGF0ZTFEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfSxcbiAgICBkYXRlMjogRGF0ZVxuICApOiBudW1iZXIge1xuICAgIGlmIChkYXRlMURpc2FibGVkID09PSB1bmRlZmluZWQgfHwgZGF0ZTIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAnZGF5JyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlckRheShkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAnbW9udGgnICYmIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aChkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAneWVhcicgJiYgdGhpcy5jb21wYXJlSGFuZGxlclllYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcihkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0RhdGVEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmRhdGVEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kYXRlRGlzYWJsZWQuZm9yRWFjaChcbiAgICAgICAgKGRpc2FibGVkRGF0ZTogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmNvbXBhcmVEYXRlRGlzYWJsZWQoZGlzYWJsZWREYXRlLCBkYXRlKSA9PT0gMCkge1xuICAgICAgICAgICAgaXNEYXRlRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXlEaXNhYmxlZCkge1xuICAgICAgaXNEYXRlRGlzYWJsZWQgPVxuICAgICAgICBpc0RhdGVEaXNhYmxlZCB8fFxuICAgICAgICB0aGlzLmRheURpc2FibGVkLmluZGV4T2YoZGF0ZS5nZXREYXkoKSkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXNEYXRlRGlzYWJsZWQgfHxcbiAgICAgICh0aGlzLm1pbkRhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWluRGF0ZSkgPCAwKSB8fFxuICAgICAgKHRoaXMubWF4RGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA+IDApXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbmZpZyB7XG4gIGxvY2FsZSA9ICdlbic7XG4gIGRhdGVwaWNrZXJNb2RlID0gJ2RheSc7XG4gIHN0YXJ0aW5nRGF5ID0gMDtcbiAgeWVhclJhbmdlID0gMjA7XG4gIG1pbk1vZGUgPSAnZGF5JztcbiAgbWF4TW9kZSA9ICd5ZWFyJztcbiAgc2hvd1dlZWtzID0gdHJ1ZTtcbiAgZm9ybWF0RGF5ID0gJ0REJztcbiAgZm9ybWF0TW9udGggPSAnTU1NTSc7XG4gIGZvcm1hdFllYXIgPSAnWVlZWSc7XG4gIGZvcm1hdERheUhlYWRlciA9ICdkZCc7XG4gIGZvcm1hdERheVRpdGxlID0gJ01NTU0gWVlZWSc7XG4gIGZvcm1hdE1vbnRoVGl0bGUgPSAnWVlZWSc7XG4gIG9ubHlDdXJyZW50TW9udGggPSBmYWxzZTtcbiAgbW9udGhDb2xMaW1pdCA9IDM7XG4gIHllYXJDb2xMaW1pdCA9IDU7XG4gIHNob3J0Y3V0UHJvcGFnYXRpb24gPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBQcm92aWRlcixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBEQVRFUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3ItbmFtZSBjb21wb25lbnQtc2VsZWN0b3ItdHlwZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRhdGVwaWNrZXItaW5uZXIgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHVwZGF0ZSk9XCJvblVwZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbG9jYWxlXT1cImNvbmZpZy5sb2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlcGlja2VyTW9kZV09XCJkYXRlcGlja2VyTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2luaXREYXRlXT1cImluaXREYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWluTW9kZV09XCJtaW5Nb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF4TW9kZV09XCJtYXhNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvd1dlZWtzXT1cInNob3dXZWVrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheV09XCJmb3JtYXREYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRNb250aF09XCJmb3JtYXRNb250aFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdFllYXJdPVwiZm9ybWF0WWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheUhlYWRlcl09XCJmb3JtYXREYXlIZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXlUaXRsZV09XCJmb3JtYXREYXlUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoVGl0bGVdPVwiZm9ybWF0TW9udGhUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3N0YXJ0aW5nRGF5XT1cInN0YXJ0aW5nRGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICBbeWVhclJhbmdlXT1cInllYXJSYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2N1c3RvbUNsYXNzXT1cImN1c3RvbUNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF0ZURpc2FibGVkXT1cImRhdGVEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2RheURpc2FibGVkXT1cImRheURpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbb25seUN1cnJlbnRNb250aF09XCJvbmx5Q3VycmVudE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvcnRjdXRQcm9wYWdhdGlvbl09XCJzaG9ydGN1dFByb3BhZ2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbW9udGhDb2xMaW1pdF09XCJtb250aENvbExpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICBbeWVhckNvbExpbWl0XT1cInllYXJDb2xMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkRvbmUpPVwib25TZWxlY3Rpb25Eb25lKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVEYXRlQ2hhbmdlKT1cIm9uQWN0aXZlRGF0ZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8ZGF5cGlja2VyIHRhYmluZGV4PVwiMFwiPjwvZGF5cGlja2VyPlxuICAgICAgPG1vbnRocGlja2VyIHRhYmluZGV4PVwiMFwiPjwvbW9udGhwaWNrZXI+XG4gICAgICA8eWVhcnBpY2tlciB0YWJpbmRleD1cIjBcIj48L3llYXJwaWNrZXI+XG4gICAgPC9kYXRlcGlja2VyLWlubmVyPlxuICAgIGAsXG4gIHByb3ZpZGVyczogW0RBVEVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG4vKiB0c2xpbnQ6ZW5hYmxlOmNvbXBvbmVudC1zZWxlY3Rvci1uYW1lIGNvbXBvbmVudC1zZWxlY3Rvci10eXBlICovXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqIHNldHMgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xuICBASW5wdXQoKSBkYXRlcGlja2VyTW9kZSA9ICdkYXknO1xuICAvKiogZGVmYXVsdCBkYXRlIHRvIHNob3cgaWYgYG5nLW1vZGVsYCB2YWx1ZSBpcyBub3Qgc3BlY2lmaWVkICovXG4gIEBJbnB1dCgpIGluaXREYXRlOiBEYXRlO1xuICAvKiogIG9sZGVzdCBzZWxlY3RhYmxlIGRhdGUgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgLyoqIGxhdGVzdCBzZWxlY3RhYmxlIGRhdGUgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcbiAgLyoqIHNldCBsb3dlciBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIG1pbk1vZGU6IHN0cmluZztcbiAgLyoqIHNldHMgdXBwZXIgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xuICBASW5wdXQoKSBtYXhNb2RlOiBzdHJpbmc7XG4gIC8qKiBpZiBmYWxzZSB3ZWVrIG51bWJlcnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgc2hvd1dlZWtzID0gdHJ1ZTtcbiAgLyoqIGZvcm1hdCBvZiBkYXkgaW4gbW9udGggKi9cbiAgQElucHV0KCkgZm9ybWF0RGF5OiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgbW9udGggaW4geWVhciAqL1xuICBASW5wdXQoKSBmb3JtYXRNb250aDogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIHllYXIgaW4geWVhciByYW5nZSAqL1xuICBASW5wdXQoKSBmb3JtYXRZZWFyOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgZGF5IGluIHdlZWsgaGVhZGVyICovXG4gIEBJbnB1dCgpIGZvcm1hdERheUhlYWRlcjogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIHRpdGxlIHdoZW4gc2VsZWN0aW5nIGRheSAqL1xuICBASW5wdXQoKSBmb3JtYXREYXlUaXRsZTogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIHRpdGxlIHdoZW4gc2VsZWN0aW5nIG1vbnRoICovXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoVGl0bGU6IHN0cmluZztcbiAgLyoqIHN0YXJ0aW5nIGRheSBvZiB0aGUgd2VlayBmcm9tIDAtNiAoMD1TdW5kYXksIC4uLiwgNj1TYXR1cmRheSkgKi9cbiAgQElucHV0KCkgc3RhcnRpbmdEYXk6IG51bWJlcjtcbiAgLyoqIG51bWJlciBvZiB5ZWFycyBkaXNwbGF5ZWQgaW4geWVhciBzZWxlY3Rpb24gKi9cbiAgQElucHV0KCkgeWVhclJhbmdlOiBudW1iZXI7XG4gIC8qKiBpZiB0cnVlIG9ubHkgZGF0ZXMgZnJvbSB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBtb250aCB3aWxsIGJlIHNob3duICovXG4gIEBJbnB1dCgpIG9ubHlDdXJyZW50TW9udGg6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHNob3J0Y3V0YHMgZXZlbnQgcHJvcGFnYXRpb24gd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xuICAvKiogbnVtYmVyIG9mIG1vbnRocyBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgcm93IG9mIG1vbnRoIHBpY2tlciAqL1xuICBASW5wdXQoKSBtb250aENvbExpbWl0OiBudW1iZXI7XG4gIC8qKiBudW1iZXIgb2YgeWVhcnMgZGlzcGxheWVkIGluIGEgc2luZ2xlIHJvdyBvZiB5ZWFyIHBpY2tlciAqL1xuICBASW5wdXQoKSB5ZWFyQ29sTGltaXQ6IG51bWJlcjtcbiAgLyoqIGFycmF5IG9mIGN1c3RvbSBjc3MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIHRvIHRhcmdldGVkIGRhdGVzICovXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZzsgY2xheno6IHN0cmluZyB9W107XG4gIC8qKiBhcnJheSBvZiBkaXNhYmxlZCBkYXRlcyAqL1xuICBASW5wdXQoKSBkYXRlRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH1bXTtcbiAgLyoqIGRpc2FibGVkIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXG4gIEBJbnB1dCgpIGRheURpc2FibGVkOiBudW1iZXJbXTtcblxuICAvKiogY3VycmVudGx5IGFjdGl2ZSBkYXRlICovXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlIHx8IHRoaXMuX25vdztcbiAgfVxuXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdGlvbkRvbmU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcblxuICAvKiogY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIGFjdGl2ZURhdGUgaXMgY2hhbmdlZC4gKi9cbiAgQE91dHB1dCgpXG4gIGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbiAgQFZpZXdDaGlsZChEYXRlUGlja2VySW5uZXJDb21wb25lbnQpXG4gIF9kYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZztcblxuICBwcm90ZWN0ZWQgX25vdzogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByb3RlY3RlZCBfYWN0aXZlRGF0ZTogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IERhdGVwaWNrZXJDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBvblVwZGF0ZShldmVudDogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGV2ZW50O1xuICAgIHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuICB9XG5cbiAgb25TZWxlY3Rpb25Eb25lKGV2ZW50OiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25Eb25lLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25BY3RpdmVEYXRlQ2hhbmdlKGV2ZW50OiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG4gIC8vIHRvZG86IHN1cHBvcnQgbnVsbCB2YWx1ZVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlUGlja2VyLmNvbXBhcmUodmFsdWUsIHRoaXMuX2FjdGl2ZURhdGUpID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fZGF0ZVBpY2tlci5zZWxlY3QodmFsdWUsIGZhbHNlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogdm9pZCAwO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIiwiLy8gQGRlcHJlY2F0ZWRcbi8vIHRzbGludDpkaXNhYmxlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXlwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuPHRhYmxlICpuZ0lmPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheSdcIiByb2xlPVwiZ3JpZFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCJhY3RpdmVEYXRlSWRcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+w6LCgMK5PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+Jmx0OzwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIjUgKyAoZGF0ZVBpY2tlci5zaG93V2Vla3MgPyAxIDogMClcIj5cbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgICA8dGg+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaXNCczRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj7DosKAwro8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+Jmd0O1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGggKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiPjwvdGg+XG4gICAgICA8dGggKm5nRm9yPVwibGV0IGxhYmVseiBvZiBsYWJlbHNcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxzbWFsbCBhcmlhLWxhYmVsPVwibGFiZWx6LmZ1bGxcIj48Yj57eyBsYWJlbHouYWJiciB9fTwvYj48L3NtYWxsPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInJvd3NcIiBsZXQtcm93ej1cIiRpbXBsaWNpdFwiIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICA8dHIgKm5nSWY9XCIhKGRhdGVQaWNrZXIub25seUN1cnJlbnRNb250aCAmJiByb3d6WzBdLnNlY29uZGFyeSAmJiByb3d6WzZdLnNlY29uZGFyeSlcIj5cbiAgICAgICAgPHRkICpuZ0lmPVwiZGF0ZVBpY2tlci5zaG93V2Vla3NcIiBjbGFzcz1cImg2XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxlbT57eyB3ZWVrTnVtYmVyc1tpbmRleF0gfX08L2VtPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFtpZF09XCJkdHoudWlkXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tc20ge3tkdHouY3VzdG9tQ2xhc3N9fVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIiEoZGF0ZVBpY2tlci5vbmx5Q3VycmVudE1vbnRoICYmIGR0ei5zZWNvbmRhcnkpXCJcbiAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYnRuLXNlY29uZGFyeSc6IGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkLCBkaXNhYmxlZDogZHR6LmRpc2FibGVkLCBhY3RpdmU6ICFpc0JzNCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4tZGVmYXVsdCc6ICFpc0JzNH1cIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LW11dGVkJzogZHR6LnNlY29uZGFyeSB8fCBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JzNCAmJiBkdHouY3VycmVudH1cIj57eyBkdHoubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QgLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgY29sb3I6ICMyOTJiMmM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIH1cbiAgICA6aG9zdCAuYnRuLWluZm8gLnRleHQtbXV0ZWQge1xuICAgICAgY29sb3I6ICMyOTJiMmMgIWltcG9ydGFudDtcbiAgICB9XG4gIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXlQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsYWJlbHM6IGFueVtdID0gW107XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHJvd3M6IGFueVtdID0gW107XG4gIHdlZWtOdW1iZXJzOiBudW1iZXJbXSA9IFtdO1xuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyID0gZGF0ZVBpY2tlcjtcbiAgfVxuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICAvKnByb3RlY3RlZCBnZXREYXlzSW5Nb250aCh5ZWFyOm51bWJlciwgbW9udGg6bnVtYmVyKSB7XG4gICByZXR1cm4gKChtb250aCA9PT0gMSkgJiYgKHllYXIgJSA0ID09PSAwKSAmJlxuICAgKCh5ZWFyICUgMTAwICE9PSAwKSB8fCAoeWVhciAlIDQwMCA9PT0gMCkpKSA/IDI5IDogREFZU19JTl9NT05USFttb250aF07XG4gICB9Ki9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcERheSA9IHsgbW9udGhzOiAxIH07XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGZ1bmN0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgeWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0aGlzLnN0YXJ0aW5nRGF5IC0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpO1xuICAgICAgY29uc3QgbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPVxuICAgICAgICBkaWZmZXJlbmNlID4gMCA/IDcgLSBkaWZmZXJlbmNlIDogLWRpZmZlcmVuY2U7XG4gICAgICBjb25zdCBmaXJzdERhdGUgPSBuZXcgRGF0ZShmaXJzdERheU9mTW9udGguZ2V0VGltZSgpKTtcblxuICAgICAgaWYgKG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID4gMCkge1xuICAgICAgICBmaXJzdERhdGUuc2V0RGF0ZSgtbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggKyAxKTtcbiAgICAgIH1cblxuICAgICAgLy8gNDIgaXMgdGhlIG51bWJlciBvZiBkYXlzIG9uIGEgc2l4LXdlZWsgY2FsZW5kYXJcbiAgICAgIGNvbnN0IF9kYXlzOiBEYXRlW10gPSBzZWxmLmdldERhdGVzKGZpcnN0RGF0ZSwgNDIpO1xuICAgICAgY29uc3QgZGF5czogYW55W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDI7IGkrKykge1xuICAgICAgICBjb25zdCBfZGF0ZU9iamVjdCA9IHRoaXMuY3JlYXRlRGF0ZU9iamVjdChfZGF5c1tpXSwgdGhpcy5mb3JtYXREYXkpO1xuICAgICAgICBfZGF0ZU9iamVjdC5zZWNvbmRhcnkgPSBfZGF5c1tpXS5nZXRNb250aCgpICE9PSBtb250aDtcbiAgICAgICAgX2RhdGVPYmplY3QudWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XG4gICAgICAgIGRheXNbaV0gPSBfZGF0ZU9iamVjdDtcbiAgICAgIH1cblxuICAgICAgc2VsZi5sYWJlbHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgIHNlbGYubGFiZWxzW2pdID0ge307XG4gICAgICAgIHNlbGYubGFiZWxzW2pdLmFiYnIgPSB0aGlzLmRhdGVGaWx0ZXIoXG4gICAgICAgICAgZGF5c1tqXS5kYXRlLFxuICAgICAgICAgIHRoaXMuZm9ybWF0RGF5SGVhZGVyXG4gICAgICAgICk7XG4gICAgICAgIHNlbGYubGFiZWxzW2pdLmZ1bGwgPSB0aGlzLmRhdGVGaWx0ZXIoZGF5c1tqXS5kYXRlLCAnRUVFRScpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnRpdGxlID0gdGhpcy5kYXRlRmlsdGVyKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5mb3JtYXREYXlUaXRsZSk7XG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KGRheXMsIDcpO1xuXG4gICAgICBpZiAodGhpcy5zaG93V2Vla3MpIHtcbiAgICAgICAgc2VsZi53ZWVrTnVtYmVycyA9IFtdO1xuICAgICAgICBjb25zdCB0aHVyc2RheUluZGV4ID0gKDQgKyA3IC0gdGhpcy5zdGFydGluZ0RheSkgJSA3O1xuICAgICAgICBjb25zdCBudW1XZWVrcyA9IHNlbGYucm93cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGN1cldlZWsgPSAwOyBjdXJXZWVrIDwgbnVtV2Vla3M7IGN1cldlZWsrKykge1xuICAgICAgICAgIHNlbGYud2Vla051bWJlcnMucHVzaChcbiAgICAgICAgICAgIHNlbGYuZ2V0SVNPODYwMVdlZWtOdW1iZXIoc2VsZi5yb3dzW2N1cldlZWtdW3RodXJzZGF5SW5kZXhdLmRhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sICdkYXknKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbihcbiAgICAgIGRhdGUxOiBEYXRlLFxuICAgICAgZGF0ZTI6IERhdGVcbiAgICApOiBudW1iZXIge1xuICAgICAgY29uc3QgZDEgPSBuZXcgRGF0ZShkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpLCBkYXRlMS5nZXREYXRlKCkpO1xuICAgICAgY29uc3QgZDIgPSBuZXcgRGF0ZShkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpLCBkYXRlMi5nZXREYXRlKCkpO1xuICAgICAgcmV0dXJuIGQxLmdldFRpbWUoKSAtIGQyLmdldFRpbWUoKTtcbiAgICB9LCAnZGF5Jyk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREYXRlcyhzdGFydERhdGU6IERhdGUsIG46IG51bWJlcik6IERhdGVbXSB7XG4gICAgY29uc3QgZGF0ZXM6IERhdGVbXSA9IG5ldyBBcnJheShuKTtcbiAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZGF0ZTogRGF0ZTtcbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50LmdldFRpbWUoKSk7XG4gICAgICBkYXRlID0gdGhpcy5kYXRlUGlja2VyLmZpeFRpbWVab25lKGRhdGUpO1xuICAgICAgZGF0ZXNbaSsrXSA9IGRhdGU7XG4gICAgICBjdXJyZW50ID0gbmV3IERhdGUoXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBkYXRlLmdldERhdGUoKSArIDFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlcztcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJU084NjAxV2Vla051bWJlcihkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICBjb25zdCBjaGVja0RhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgLy8gVGh1cnNkYXlcbiAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpICsgNCAtIChjaGVja0RhdGUuZ2V0RGF5KCkgfHwgNykpO1xuICAgIGNvbnN0IHRpbWUgPSBjaGVja0RhdGUuZ2V0VGltZSgpO1xuICAgIC8vIENvbXBhcmUgd2l0aCBKYW4gMVxuICAgIGNoZWNrRGF0ZS5zZXRNb250aCgwKTtcbiAgICBjaGVja0RhdGUuc2V0RGF0ZSgxKTtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJvdW5kKCh0aW1lIC0gY2hlY2tEYXRlLmdldFRpbWUoKSkgLyA4NjQwMDAwMCkgLyA3KSArIDFcbiAgICApO1xuICB9XG5cbiAgLy8gdG9kbzoga2V5IGV2ZW50cyBpbXBsZW1lbnRhdGlvblxufVxuIiwiLy8gQGRlcHJlY2F0ZWRcbi8vIHRzbGludDpkaXNhYmxlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vbnRocGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGU9PT0nbW9udGgnXCIgcm9sZT1cImdyaWRcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKC0xKVwiIHRhYmluZGV4PVwiLTFcIj7DosKAwrk8L2J1dHRvbj48L3RoPlxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiKChkYXRlUGlja2VyLm1vbnRoQ29sTGltaXQgLSAyKSA8PSAwKSA/IDEgOiBkYXRlUGlja2VyLm1vbnRoQ29sTGltaXQgLSAyXCI+XG4gICAgICAgIDxidXR0b24gW2lkXT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IG1heE1vZGVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gbWF4TW9kZX1cIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgIDxzdHJvbmc+e3sgdGl0bGUgfX08L3N0cm9uZz4gXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIiB0YWJpbmRleD1cIi0xXCI+w6LCgMK6PC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvd3ogb2Ygcm93c1wiPlxuICAgICAgPHRkICpuZ0Zvcj1cImxldCBkdHogb2Ygcm93elwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBbYXR0ci5pZF09XCJkdHoudWlkXCIgW25nQ2xhc3NdPVwiZHR6LmN1c3RvbUNsYXNzXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWluLXdpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYnRuLWxpbmsnOiBpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCB8fCAoaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eikpLCBkaXNhYmxlZDogZHR6LmRpc2FibGVkLCBhY3RpdmU6ICFpc0JzNCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eil9XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZHR6LmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1zdWNjZXNzJzogaXNCczQgJiYgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCczQgJiYgZHR6LmN1cnJlbnR9XCI+e3sgZHR6LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdCAuYnRuLWluZm8gLnRleHQtc3VjY2VzcyB7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgcm93czogYW55W10gPSBbXTtcbiAgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xuICBtYXhNb2RlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XG4gICAgdGhpcy5kYXRlUGlja2VyID0gZGF0ZVBpY2tlcjtcbiAgfVxuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwTW9udGggPSB7IHllYXJzOiAxIH07XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGZ1bmN0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgbW9udGhzOiBhbnlbXSA9IG5ldyBBcnJheSgxMik7XG4gICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGxldCBkYXRlOiBEYXRlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIGksIDEpO1xuICAgICAgICBkYXRlID0gdGhpcy5maXhUaW1lWm9uZShkYXRlKTtcbiAgICAgICAgbW9udGhzW2ldID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0TW9udGgpO1xuICAgICAgICBtb250aHNbaV0udWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYudGl0bGUgPSB0aGlzLmRhdGVGaWx0ZXIodGhpcy5hY3RpdmVEYXRlLCB0aGlzLmZvcm1hdE1vbnRoVGl0bGUpO1xuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdChtb250aHMsIHNlbGYuZGF0ZVBpY2tlci5tb250aENvbExpbWl0KTtcbiAgICB9LCAnbW9udGgnKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbihcbiAgICAgIGRhdGUxOiBEYXRlLFxuICAgICAgZGF0ZTI6IERhdGVcbiAgICApOiBudW1iZXIge1xuICAgICAgY29uc3QgZDEgPSBuZXcgRGF0ZShkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpKTtcbiAgICAgIGNvbnN0IGQyID0gbmV3IERhdGUoZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSk7XG4gICAgICByZXR1cm4gZDEuZ2V0VGltZSgpIC0gZDIuZ2V0VGltZSgpO1xuICAgIH0sICdtb250aCcpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICAvLyB0b2RvOiBrZXkgZXZlbnRzIGltcGxlbWVudGF0aW9uXG59XG4iLCIvLyBAZGVwcmVjYXRlZFxuLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneWVhcnBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlPT09J3llYXInXCIgcm9sZT1cImdyaWRcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKC0xKVwiIHRhYmluZGV4PVwiLTFcIj7DosKAwrk8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgICA8dGggW2F0dHIuY29sc3Bhbl09XCIoKGRhdGVQaWNrZXIueWVhckNvbExpbWl0IC0gMikgPD0gMCkgPyAxIDogZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQgLSAyXCI+XG4gICAgICAgIDxidXR0b24gW2lkXT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiIHJvbGU9XCJoZWFkaW5nXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci50b2dnbGVNb2RlKDApXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZX1cIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgIDxzdHJvbmc+e3sgdGl0bGUgfX08L3N0cm9uZz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj7DosKAwro8L2J1dHRvbj5cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93eiBvZiByb3dzXCI+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFthdHRyLmlkXT1cImR0ei51aWRcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tbGluayc6IGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkIHx8IChpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSksIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KX1cIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LXN1Y2Nlc3MnOiBpc0JzNCAmJiBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JzNCAmJiBkdHouY3VycmVudH1cIj57eyBkdHoubGFiZWwgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgWWVhclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcbiAgdGl0bGU6IHN0cmluZztcbiAgcm93czogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xuICB9XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnN0ZXBZZWFyID0geyB5ZWFyczogdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSB9O1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFJlZnJlc2hWaWV3SGFuZGxlcihmdW5jdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHllYXJzOiBhbnlbXSA9IG5ldyBBcnJheSh0aGlzLnllYXJSYW5nZSk7XG4gICAgICBsZXQgZGF0ZTogRGF0ZTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gc2VsZi5nZXRTdGFydGluZ1llYXIodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWVhclJhbmdlOyBpKyspIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHN0YXJ0ICsgaSwgMCwgMSk7XG4gICAgICAgIGRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGUpO1xuICAgICAgICB5ZWFyc1tpXSA9IHRoaXMuY3JlYXRlRGF0ZU9iamVjdChkYXRlLCB0aGlzLmZvcm1hdFllYXIpO1xuICAgICAgICB5ZWFyc1tpXS51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcbiAgICAgIH1cblxuICAgICAgc2VsZi50aXRsZSA9IFt5ZWFyc1swXS5sYWJlbCwgeWVhcnNbdGhpcy55ZWFyUmFuZ2UgLSAxXS5sYWJlbF0uam9pbihcbiAgICAgICAgJyAtICdcbiAgICAgICk7XG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KHllYXJzLCBzZWxmLmRhdGVQaWNrZXIueWVhckNvbExpbWl0KTtcbiAgICB9LCAneWVhcicpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxuICAgICAgZGF0ZTE6IERhdGUsXG4gICAgICBkYXRlMjogRGF0ZVxuICAgICk6IG51bWJlciB7XG4gICAgICByZXR1cm4gZGF0ZTEuZ2V0RnVsbFllYXIoKSAtIGRhdGUyLmdldEZ1bGxZZWFyKCk7XG4gICAgfSwgJ3llYXInKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0YXJ0aW5nWWVhcih5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIHRvZG86IHBhcnNlSW50XG4gICAgcmV0dXJuIChcbiAgICAgICh5ZWFyIC0gMSkgLyB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlICogdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSArIDFcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IERheVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF5cGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGhwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFllYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3llYXJwaWNrZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCxcbiAgICBEYXlQaWNrZXJDb21wb25lbnQsXG4gICAgTW9udGhQaWNrZXJDb21wb25lbnQsXG4gICAgWWVhclBpY2tlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlUGlja2VySW5uZXJDb21wb25lbnQsXG4gICAgRGF5UGlja2VyQ29tcG9uZW50LFxuICAgIE1vbnRoUGlja2VyQ29tcG9uZW50LFxuICAgIFllYXJQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF0ZVBpY2tlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEYXRlcGlja2VyTW9kdWxlLCBwcm92aWRlcnM6IFtEYXRlcGlja2VyQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsImZpbHRlciIsIm1hcCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiaXNGaXJzdERheU9mV2VlayIsImdldERheSIsInNoaWZ0RGF0ZSIsImlzQmVmb3JlIiwiZW5kT2YiLCJpc0FmdGVyIiwic3RhcnRPZiIsImlzU2FtZSIsImdldEZpcnN0RGF5T2ZNb250aCIsImZvcm1hdERhdGUiLCJnZXRMb2NhbGUiLCJpc1NhbWVNb250aCIsImlzU2FtZURheSIsImlzRGlzYWJsZWREYXkiLCJoZWlnaHQiLCJ3aWR0aCIsInNoaWZ0IiwiaXNTYW1lWWVhciIsInNldEZ1bGxEYXRlIiwiaXNEYXRlVmFsaWQiLCJpc0FycmF5IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJNaW5pU3RhdGUiLCJNaW5pU3RvcmUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiVmlld0NvbnRhaW5lclJlZiIsIkNvbXBvbmVudExvYWRlckZhY3RvcnkiLCJJbnB1dCIsIk91dHB1dCIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIk5HX1ZBTElEQVRPUlMiLCJpc0RhdGUiLCJwYXJzZURhdGUiLCJIb3N0IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlBvc2l0aW9uaW5nU2VydmljZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiVmlld0NoaWxkIiwiaXNCczMiLCJGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O2tDQXFEbUIsYUFBYTs7aUNB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