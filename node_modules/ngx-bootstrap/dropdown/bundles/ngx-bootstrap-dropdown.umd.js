(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('rxjs/operators'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/dropdown', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'rxjs/operators', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].dropdown = {}),global.ng.core,global.utils,global.rxjs.operators,global.componentLoader,global.positioning));
}(this, (function (exports,core,utils,operators,componentLoader,positioning) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Default dropdown configuration
     */
    var BsDropdownConfig = (function () {
        function BsDropdownConfig() {
            /**
             * default dropdown auto closing behavior
             */
            this.autoClose = true;
            /**
             * default dropdown auto closing behavior
             */
            this.insideClick = false;
        }
        BsDropdownConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDropdownConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownState = (function () {
        function BsDropdownState() {
            var _this = this;
            this.direction = 'down';
            this.isOpenChange = new core.EventEmitter();
            this.isDisabledChange = new core.EventEmitter();
            this.toggleClick = new core.EventEmitter();
            this.dropdownMenu = new Promise(function (resolve) {
                _this.resolveDropdownMenu = resolve;
            });
        }
        BsDropdownState.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDropdownState.ctorParameters = function () { return []; };
        return BsDropdownState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownContainerComponent = (function () {
        function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
            var _this = this;
            this._state = _state;
            this.cd = cd;
            this._renderer = _renderer;
            this._element = _element;
            this.isOpen = false;
            this._subscription = _state.isOpenChange.subscribe(function (value) {
                _this.isOpen = value;
                var /** @type {?} */ dropdown = _this._element.nativeElement.querySelector('.dropdown-menu');
                if (dropdown && !utils.isBs3()) {
                    _this._renderer.addClass(dropdown, 'show');
                    if (dropdown.classList.contains('dropdown-menu-right')) {
                        _this._renderer.setStyle(dropdown, 'left', 'auto');
                        _this._renderer.setStyle(dropdown, 'right', '0');
                    }
                    if (_this.direction === 'up') {
                        _this._renderer.setStyle(dropdown, 'top', 'auto');
                        _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                    }
                }
                _this.cd.markForCheck();
                _this.cd.detectChanges();
            });
        }
        Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.direction;
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        /**
         * \@internal
         * @param {?} el
         * @return {?}
         */
        BsDropdownContainerComponent.prototype._contains = /**
         * \@internal
         * @param {?} el
         * @return {?}
         */
            function (el) {
                return this._element.nativeElement.contains(el);
            };
        /**
         * @return {?}
         */
        BsDropdownContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._subscription.unsubscribe();
            };
        BsDropdownContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-dropdown-container',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            style: 'display:block;position: absolute;'
                        },
                        template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDropdownContainerComponent.ctorParameters = function () {
            return [
                { type: BsDropdownState, },
                { type: core.ChangeDetectorRef, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
            ];
        };
        return BsDropdownContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownDirective = (function () {
        function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._viewContainerRef = _viewContainerRef;
            this._cis = _cis;
            this._config = _config;
            this._state = _state;
            this._isInlineOpen = false;
            this._subscriptions = [];
            this._isInited = false;
            // set initial dropdown state from config
            this._state.autoClose = this._config.autoClose;
            this._state.insideClick = this._config.insideClick;
            // create dropdown component loader
            this._dropdown = this._cis
                .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
                .provide({ provide: BsDropdownState, useValue: this._state });
            this.onShown = this._dropdown.onShown;
            this.onHidden = this._dropdown.onHidden;
            this.isOpenChange = this._state.isOpenChange;
        }
        Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.autoClose;
            },
            set: /**
             * Indicates that dropdown will be closed on item or document click,
             * and after pressing ESC
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._state.autoClose = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.insideClick;
            },
            set: /**
             * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._state.insideClick = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._isDisabled;
            },
            set: /**
             * Disables dropdown toggle and hides dropdown menu if opened
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isDisabled = value;
                this._state.isDisabledChange.emit(value);
                if (value) {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the popover is currently being shown
             * @return {?}
             */ function () {
                if (this._showInline) {
                    return this._isInlineOpen;
                }
                return this._dropdown.isShown;
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
        Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
            get: /**
             * @return {?}
             */ function () {
                return !this.container;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // fix: seems there are an issue with `routerLinkActive`
                // which result in duplicated call ngOnInit without call to ngOnDestroy
                // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
                if (this._isInited) {
                    return;
                }
                this._isInited = true;
                // attach DOM listeners
                this._dropdown.listen({
                    // because of dropdown inline mode
                    outsideClick: false,
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                // toggle visibility on toggle element click
                this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
                // hide dropdown if set disabled while opened
                this._subscriptions.push(this._state.isDisabledChange
                    .pipe(operators.filter(function (value) { return value; }))
                    .subscribe(function (value) { return _this.hide(); }));
            };
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        BsDropdownDirective.prototype.show = /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isOpen || this.isDisabled) {
                    return;
                }
                if (this._showInline) {
                    if (!this._inlinedMenu) {
                        this._state.dropdownMenu.then(function (dropdownMenu) {
                            _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                            _this._inlinedMenu = _this._dropdown._inlineViewRef;
                            _this.addBs4Polyfills();
                        })
                            .catch();
                    }
                    this.addBs4Polyfills();
                    this._isInlineOpen = true;
                    this.onShown.emit(true);
                    this._state.isOpenChange.emit(true);
                    return;
                }
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    // check direction in which dropdown should be opened
                    var /** @type {?} */ _dropup = _this.dropup ||
                        (typeof _this.dropup !== 'undefined' && _this.dropup);
                    _this._state.direction = _dropup ? 'up' : 'down';
                    var /** @type {?} */ _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
                    // show dropdown
                    // show dropdown
                    _this._dropdown
                        .attach(BsDropdownContainerComponent)
                        .to(_this.container)
                        .position({ attachment: _placement })
                        .show({
                        content: dropdownMenu.templateRef,
                        placement: _placement
                    });
                    _this._state.isOpenChange.emit(true);
                })
                    .catch();
            };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        BsDropdownDirective.prototype.hide = /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (!this.isOpen) {
                    return;
                }
                if (this._showInline) {
                    this.removeShowClass();
                    this.removeDropupStyles();
                    this._isInlineOpen = false;
                    this.onHidden.emit(true);
                }
                else {
                    this._dropdown.hide();
                }
                this._state.isOpenChange.emit(false);
            };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         */
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         * @param {?=} value
         * @return {?}
         */
        BsDropdownDirective.prototype.toggle = /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (this.isOpen || !value) {
                    return this.hide();
                }
                return this.show();
            };
        /** @internal */
        /**
         * \@internal
         * @param {?} event
         * @return {?}
         */
        BsDropdownDirective.prototype._contains = /**
         * \@internal
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return this._elementRef.nativeElement.contains(event.target) ||
                    (this._dropdown.instance && this._dropdown.instance._contains(event.target));
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    // clean up subscriptions and destroy dropdown
                    for (var _a = __values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
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
                this._dropdown.dispose();
                var e_1, _c;
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.addBs4Polyfills = /**
         * @return {?}
         */
            function () {
                if (!utils.isBs3()) {
                    this.addShowClass();
                    this.checkRightAlignment();
                    this.addDropupStyles();
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.addShowClass = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.removeShowClass = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.checkRightAlignment = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    var /** @type {?} */ isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.addDropupStyles = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    // a little hack to not break support of bootstrap 4 beta
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.removeDropupStyles = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
                    this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
                    this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
                }
            };
        BsDropdownDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDropdown],[dropdown]',
                        exportAs: 'bs-dropdown',
                        providers: [BsDropdownState],
                        host: {
                            '[class.dropup]': 'dropup',
                            '[class.open]': 'isOpen',
                            '[class.show]': 'isOpen && isBs4'
                        }
                    },] }
        ];
        /** @nocollapse */
        BsDropdownDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: BsDropdownConfig, },
                { type: BsDropdownState, },
            ];
        };
        BsDropdownDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "dropup": [{ type: core.Input },],
            "autoClose": [{ type: core.Input },],
            "insideClick": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "isOpenChange": [{ type: core.Output },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
        };
        return BsDropdownDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownMenuDirective = (function () {
        // tslint:disable:no-any
        function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
            _state.resolveDropdownMenu({
                templateRef: _templateRef,
                viewContainer: _viewContainer
            });
        }
        BsDropdownMenuDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDropdownMenu],[dropdownMenu]',
                        exportAs: 'bs-dropdown-menu'
                    },] }
        ];
        /** @nocollapse */
        BsDropdownMenuDirective.ctorParameters = function () {
            return [
                { type: BsDropdownState, },
                { type: core.ViewContainerRef, },
                { type: core.TemplateRef, },
            ];
        };
        return BsDropdownMenuDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownToggleDirective = (function () {
        function BsDropdownToggleDirective(_state, _element, dropdown) {
            var _this = this;
            this._state = _state;
            this._element = _element;
            this.dropdown = dropdown;
            this.isDisabled = null;
            this._subscriptions = [];
            // sync is open value with state
            this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
            // populate disabled state
            this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
        }
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.isDisabled) {
                    return;
                }
                this._state.toggleClick.emit(true);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onDocumentClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._state.autoClose &&
                    event.button !== 2 &&
                    !this._element.nativeElement.contains(event.target) &&
                    !(this._state.insideClick && this.dropdown._contains(event))) {
                    this._state.toggleClick.emit(false);
                }
            };
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onEsc = /**
         * @return {?}
         */
            function () {
                if (this._state.autoClose) {
                    this._state.toggleClick.emit(false);
                }
            };
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
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
        BsDropdownToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDropdownToggle],[dropdownToggle]',
                        exportAs: 'bs-dropdown-toggle',
                        host: {
                            '[attr.aria-haspopup]': 'true'
                        }
                    },] }
        ];
        /** @nocollapse */
        BsDropdownToggleDirective.ctorParameters = function () {
            return [
                { type: BsDropdownState, },
                { type: core.ElementRef, },
                { type: BsDropdownDirective, },
            ];
        };
        BsDropdownToggleDirective.propDecorators = {
            "isDisabled": [{ type: core.HostBinding, args: ['attr.disabled',] },],
            "isOpen": [{ type: core.HostBinding, args: ['attr.aria-expanded',] },],
            "onClick": [{ type: core.HostListener, args: ['click', [],] },],
            "onDocumentClick": [{ type: core.HostListener, args: ['document:click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['keyup.esc',] },],
        };
        return BsDropdownToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownModule = (function () {
        function BsDropdownModule() {
        }
        // tslint:disable-next-line:no-any
        /**
         * @param {?=} config
         * @return {?}
         */
        BsDropdownModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: BsDropdownModule,
                    providers: [
                        componentLoader.ComponentLoaderFactory,
                        positioning.PositioningService,
                        BsDropdownState,
                        {
                            provide: BsDropdownConfig,
                            useValue: config ? config : { autoClose: true, insideClick: false }
                        }
                    ]
                };
            };
        BsDropdownModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BsDropdownMenuDirective,
                            BsDropdownToggleDirective,
                            BsDropdownContainerComponent,
                            BsDropdownDirective
                        ],
                        exports: [
                            BsDropdownMenuDirective,
                            BsDropdownToggleDirective,
                            BsDropdownDirective
                        ],
                        entryComponents: [BsDropdownContainerComponent]
                    },] }
        ];
        return BsDropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BsDropdownDirective = BsDropdownDirective;
    exports.BsDropdownMenuDirective = BsDropdownMenuDirective;
    exports.BsDropdownToggleDirective = BsDropdownToggleDirective;
    exports.BsDropdownContainerComponent = BsDropdownContainerComponent;
    exports.BsDropdownState = BsDropdownState;
    exports.BsDropdownConfig = BsDropdownConfig;
    exports.BsDropdownModule = BsDropdownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kcm9wZG93bi51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duL2JzLWRyb3Bkb3duLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5zdGF0ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duL2JzLWRyb3Bkb3duLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi1tZW51LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duL2JzLWRyb3Bkb3duLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgZHJvcGRvd24gY29uZmlndXJhdGlvbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Db25maWcge1xuICAvKiogZGVmYXVsdCBkcm9wZG93biBhdXRvIGNsb3NpbmcgYmVoYXZpb3IgKi9cbiAgYXV0b0Nsb3NlID0gdHJ1ZTtcbiAgLyoqIGRlZmF1bHQgZHJvcGRvd24gYXV0byBjbG9zaW5nIGJlaGF2aW9yICovXG4gIGluc2lkZUNsaWNrID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzQ29tcG9uZW50UmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25TdGF0ZSB7XG4gIGRpcmVjdGlvbjogJ2Rvd24nIHwgJ3VwJyA9ICdkb3duJztcbiAgYXV0b0Nsb3NlOiBib29sZWFuO1xuICBpbnNpZGVDbGljazogYm9vbGVhbjtcbiAgaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBpc0Rpc2FibGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICB0b2dnbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgcG9wb3Zlci5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuICBkcm9wZG93bk1lbnU6IFByb21pc2U8QnNDb21wb25lbnRSZWY8YW55Pj47XG4gIHJlc29sdmVEcm9wZG93bk1lbnU6IChjb21wb25lbnRSZWY6IEJzQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kcm9wZG93bk1lbnUgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZURyb3Bkb3duTWVudSA9IHJlc29sdmU7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZHJvcGRvd24tY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246IGFic29sdXRlOydcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzcy5kcm9wdXBdPVwiZGlyZWN0aW9uID09PSAndXAnXCJcbiAgICAgICAgIFtjbGFzcy5kcm9wZG93bl09XCJkaXJlY3Rpb24gPT09ICdkb3duJ1wiXG4gICAgICAgICBbY2xhc3Muc2hvd109XCJpc09wZW5cIlxuICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaXNPcGVuXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpc09wZW4gPSBmYWxzZTtcblxuICBnZXQgZGlyZWN0aW9uKCk6ICdkb3duJyB8ICd1cCcge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5kaXJlY3Rpb247XG4gIH1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudScpO1xuICAgICAgaWYgKGRyb3Bkb3duICYmICFpc0JzMygpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRyb3Bkb3duLCAnc2hvdycpO1xuICAgICAgICBpZiAoZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZW51LXJpZ2h0JykpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ2xlZnQnLCAnYXV0bycpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAncmlnaHQnLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAndG9wJywgJ2F1dG8nKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGRyb3Bkb3duLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgICAndHJhbnNsYXRlWSgtMTAxJSknXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY29udGFpbnMoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGVsKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnksIEJzQ29tcG9uZW50UmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vYnMtZHJvcGRvd24uY29uZmlnJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRyb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JzRHJvcGRvd25dLFtkcm9wZG93bl0nLFxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duJyxcbiAgcHJvdmlkZXJzOiBbQnNEcm9wZG93blN0YXRlXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZHJvcHVwXSc6ICdkcm9wdXAnLFxuICAgICdbY2xhc3Mub3Blbl0nOiAnaXNPcGVuJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJ2lzT3BlbiAmJiBpc0JzNCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2Vyczogc3RyaW5nO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcblxuICAvKipcbiAgICogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWQgdXB3YXJkc1xuICAgKi9cbiAgQElucHV0KCkgZHJvcHVwOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBkcm9wZG93biB3aWxsIGJlIGNsb3NlZCBvbiBpdGVtIG9yIGRvY3VtZW50IGNsaWNrLFxuICAgKiBhbmQgYWZ0ZXIgcHJlc3NpbmcgRVNDXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYXV0b0Nsb3NlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYXV0b0Nsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZG4ndCBjbG9zZSBvbiBpbnNpZGUgY2xpY2sgd2hlbiBhdXRvQ2xvc2UgaXMgc2V0IHRvIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBpbnNpZGVDbGljayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrID0gdmFsdWU7XG4gIH1cblxuICBnZXQgaW5zaWRlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGRyb3Bkb3duIHRvZ2dsZSBhbmQgaGlkZXMgZHJvcGRvd24gbWVudSBpZiBvcGVuZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzSW5saW5lT3BlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd24uaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBpc09wZW4gY2hhbmdlXG4gICAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cbiAgICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXG4gICAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZHJvcGRvd246IENvbXBvbmVudExvYWRlcjxCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBwcml2YXRlIGdldCBfc2hvd0lubGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgLy8gdG9kbzogbW92ZSB0byBjb21wb25lbnQgbG9hZGVyXG4gIHByaXZhdGUgX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2lubGluZWRNZW51OiBFbWJlZGRlZFZpZXdSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+O1xuICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9pc0luaXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29uZmlnOiBCc0Ryb3Bkb3duQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlKSB7XG4gICAgLy8gc2V0IGluaXRpYWwgZHJvcGRvd24gc3RhdGUgZnJvbSBjb25maWdcbiAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB0aGlzLl9jb25maWcuYXV0b0Nsb3NlO1xuICAgIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrID0gdGhpcy5fY29uZmlnLmluc2lkZUNsaWNrO1xuXG4gICAgLy8gY3JlYXRlIGRyb3Bkb3duIGNvbXBvbmVudCBsb2FkZXJcbiAgICB0aGlzLl9kcm9wZG93biA9IHRoaXMuX2Npc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZixcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcbiAgICAgIClcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0Ryb3Bkb3duU3RhdGUsIHVzZVZhbHVlOiB0aGlzLl9zdGF0ZX0pO1xuXG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZHJvcGRvd24ub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZHJvcGRvd24ub25IaWRkZW47XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UgPSB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2U7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGZpeDogc2VlbXMgdGhlcmUgYXJlIGFuIGlzc3VlIHdpdGggYHJvdXRlckxpbmtBY3RpdmVgXG4gICAgLy8gd2hpY2ggcmVzdWx0IGluIGR1cGxpY2F0ZWQgY2FsbCBuZ09uSW5pdCB3aXRob3V0IGNhbGwgdG8gbmdPbkRlc3Ryb3lcbiAgICAvLyByZWFkIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS92YWxvci1zb2Z0d2FyZS9uZ3gtYm9vdHN0cmFwL2lzc3Vlcy8xODg1XG4gICAgaWYgKHRoaXMuX2lzSW5pdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzSW5pdGVkID0gdHJ1ZTtcblxuICAgIC8vIGF0dGFjaCBET00gbGlzdGVuZXJzXG4gICAgdGhpcy5fZHJvcGRvd24ubGlzdGVuKHtcbiAgICAgIC8vIGJlY2F1c2Ugb2YgZHJvcGRvd24gaW5saW5lIG1vZGVcbiAgICAgIG91dHNpZGVDbGljazogZmFsc2UsXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgdmlzaWJpbGl0eSBvbiB0b2dnbGUgZWxlbWVudCBjbGlja1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHRoaXMudG9nZ2xlKHZhbHVlKSlcbiAgICApO1xuXG4gICAgLy8gaGlkZSBkcm9wZG93biBpZiBzZXQgZGlzYWJsZWQgd2hpbGUgb3BlbmVkXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKHZhbHVlOiBib29sZWFuKSA9PiB2YWx1ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy5oaWRlKCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICBpZiAoIXRoaXMuX2lubGluZWRNZW51KSB7XG4gICAgICAgIHRoaXMuX3N0YXRlLmRyb3Bkb3duTWVudS50aGVuKFxuICAgICAgICAgIChkcm9wZG93bk1lbnU6IEJzQ29tcG9uZW50UmVmPEJzRHJvcGRvd25NZW51RGlyZWN0aXZlPikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uYXR0YWNoSW5saW5lKFxuICAgICAgICAgICAgICBkcm9wZG93bk1lbnUudmlld0NvbnRhaW5lcixcbiAgICAgICAgICAgICAgZHJvcGRvd25NZW51LnRlbXBsYXRlUmVmXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5faW5saW5lZE1lbnUgPSB0aGlzLl9kcm9wZG93bi5faW5saW5lVmlld1JlZjtcbiAgICAgICAgICAgIHRoaXMuYWRkQnM0UG9seWZpbGxzKCk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC8vIHN3YWxsb3cgZXJyb3JzXG4gICAgICAgICAgLmNhdGNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZEJzNFBvbHlmaWxscygpO1xuICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51LnRoZW4oZHJvcGRvd25NZW51ID0+IHtcbiAgICAgIC8vIGNoZWNrIGRpcmVjdGlvbiBpbiB3aGljaCBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkXG4gICAgICBjb25zdCBfZHJvcHVwID1cbiAgICAgICAgdGhpcy5kcm9wdXAgfHxcbiAgICAgICAgKHR5cGVvZiB0aGlzLmRyb3B1cCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5kcm9wdXApO1xuICAgICAgdGhpcy5fc3RhdGUuZGlyZWN0aW9uID0gX2Ryb3B1cCA/ICd1cCcgOiAnZG93bic7XG4gICAgICBjb25zdCBfcGxhY2VtZW50ID1cbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgfHwgKF9kcm9wdXAgPyAndG9wIGxlZnQnIDogJ2JvdHRvbSBsZWZ0Jyk7XG5cbiAgICAgIC8vIHNob3cgZHJvcGRvd25cbiAgICAgIHRoaXMuX2Ryb3Bkb3duXG4gICAgICAgIC5hdHRhY2goQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IF9wbGFjZW1lbnR9KVxuICAgICAgICAuc2hvdyh7XG4gICAgICAgICAgY29udGVudDogZHJvcGRvd25NZW51LnRlbXBsYXRlUmVmLFxuICAgICAgICAgIHBsYWNlbWVudDogX3BsYWNlbWVudFxuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfSlcbiAgICAvLyBzd2FsbG93IGVycm9yXG4gICAgICAuY2F0Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgdGhpcy5yZW1vdmVTaG93Q2xhc3MoKTtcbiAgICAgIHRoaXMucmVtb3ZlRHJvcHVwU3R5bGVzKCk7XG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZHJvcGRvd24uaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLiBXaXRoIHBhcmFtZXRlciA8Y29kZT50cnVlPC9jb2RlPiBhbGxvd3MgdG9nZ2xpbmcsIHdpdGggcGFyYW1ldGVyIDxjb2RlPmZhbHNlPC9jb2RlPlxuICAgKiBvbmx5IGhpZGVzIG9wZW5lZCBkcm9wZG93bi4gUGFyYW1ldGVyIHVzYWdlIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZ3gtYm9vdHN0cmFwIHYzXG4gICAqL1xuICB0b2dnbGUodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NvbnRhaW5zKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHxcbiAgICAgICh0aGlzLl9kcm9wZG93bi5pbnN0YW5jZSAmJiB0aGlzLl9kcm9wZG93bi5pbnN0YW5jZS5fY29udGFpbnMoZXZlbnQudGFyZ2V0KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBkZXN0cm95IGRyb3Bkb3duXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX2Ryb3Bkb3duLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQnM0UG9seWZpbGxzKCk6IHZvaWQge1xuICAgIGlmICghaXNCczMoKSkge1xuICAgICAgdGhpcy5hZGRTaG93Q2xhc3MoKTtcbiAgICAgIHRoaXMuY2hlY2tSaWdodEFsaWdubWVudCgpO1xuICAgICAgdGhpcy5hZGREcm9wdXBTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNob3dDbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTaG93Q2xhc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tSaWdodEFsaWdubWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICBjb25zdCBpc1JpZ2h0QWxpZ25lZCA9IHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAgICdkcm9wZG93bi1tZW51LXJpZ2h0J1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgaXNSaWdodEFsaWduZWQgPyAnYXV0bycgOiAnMCdcbiAgICAgICk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLFxuICAgICAgICAncmlnaHQnLFxuICAgICAgICBpc1JpZ2h0QWxpZ25lZCA/ICcwJyA6ICdhdXRvJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZERyb3B1cFN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICAvLyBhIGxpdHRsZSBoYWNrIHRvIG5vdCBicmVhayBzdXBwb3J0IG9mIGJvb3RzdHJhcCA0IGJldGFcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLmRyb3B1cCA/ICdhdXRvJyA6ICcxMDAlJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICB0aGlzLmRyb3B1cCA/ICd0cmFuc2xhdGVZKC0xMDElKScgOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgICk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLFxuICAgICAgICAnYm90dG9tJyxcbiAgICAgICAgJ2F1dG8nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRHJvcHVwU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3RvcCcpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAndHJhbnNmb3JtJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdib3R0b20nKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93bk1lbnVdLFtkcm9wZG93bk1lbnVdJyxcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi1tZW51J1xufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB7XG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuICBjb25zdHJ1Y3RvcihcbiAgICBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSxcbiAgICBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT5cbiAgKSB7XG4gICAgX3N0YXRlLnJlc29sdmVEcm9wZG93bk1lbnUoe1xuICAgICAgdGVtcGxhdGVSZWY6IF90ZW1wbGF0ZVJlZixcbiAgICAgIHZpZXdDb250YWluZXI6IF92aWV3Q29udGFpbmVyXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JzRHJvcGRvd25Ub2dnbGVdLFtkcm9wZG93blRvZ2dsZV0nLFxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duLXRvZ2dsZScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuYXJpYS1oYXNwb3B1cF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJykgaXNEaXNhYmxlZDogYm9vbGVhbiA9IG51bGw7XG5cbiAgLy8gQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpIGlzT3BlbjogYm9vbGVhbjtcblxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJvcGRvd246IEJzRHJvcGRvd25EaXJlY3RpdmUpIHtcbiAgICAvLyBzeW5jIGlzIG9wZW4gdmFsdWUgd2l0aCBzdGF0ZVxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNPcGVuID0gdmFsdWUpXG4gICAgICApXG4gICAgKTtcbiAgICAvLyBwb3B1bGF0ZSBkaXNhYmxlZCBzdGF0ZVxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgICAodmFsdWU6IGJvb2xlYW4pID0+ICh0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZSB8fCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFtdKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdCh0cnVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlICYmXG4gICAgICBldmVudC5idXR0b24gIT09IDIgJiZcbiAgICAgICF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgISh0aGlzLl9zdGF0ZS5pbnNpZGVDbGljayAmJiB0aGlzLmRyb3Bkb3duLl9jb250YWlucyhldmVudCkpXG4gICAgKSB7XG4gICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cC5lc2MnKVxuICBvbkVzYygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3RhdGUuYXV0b0Nsb3NlKSB7XG4gICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcblxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9icy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmNvbmZpZyc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gICAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEJzRHJvcGRvd25EaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICAgIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duTW9kdWxlIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJzRHJvcGRvd25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgICBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBCc0Ryb3Bkb3duQ29uZmlnLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcgPyBjb25maWcgOiB7IGF1dG9DbG9zZTogdHJ1ZSwgaW5zaWRlQ2xpY2s6IGZhbHNlIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiaXNCczMiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsImZpbHRlciIsInRzbGliXzEuX192YWx1ZXMiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tcG9uZW50TG9hZGVyRmFjdG9yeSIsIklucHV0IiwiT3V0cHV0IiwiVGVtcGxhdGVSZWYiLCJIb3N0QmluZGluZyIsIkhvc3RMaXN0ZW5lciIsIlBvc2l0aW9uaW5nU2VydmljZSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxzQkE0RnlCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTztZQUNILElBQUksRUFB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