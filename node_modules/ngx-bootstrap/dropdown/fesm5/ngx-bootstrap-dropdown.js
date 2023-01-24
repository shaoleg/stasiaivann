import { Injectable, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, Directive, Input, Output, ViewContainerRef, TemplateRef, HostBinding, HostListener, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { __values } from 'tslib';
import { filter } from 'rxjs/operators';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
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
        { type: Injectable }
    ];
    return BsDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
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
            if (dropdown && !isBs3()) {
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
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ChangeDetectorRef, },
        { type: Renderer2, },
        { type: ElementRef, },
    ]; };
    return BsDropdownContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
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
         */
        function () {
            return this._state.autoClose;
        },
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.insideClick;
        },
        set: /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.insideClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
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
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: /**
         * @return {?}
         */
        function () {
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
            .pipe(filter(function (value) { return value; }))
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
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
        if (!isBs3()) {
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
        { type: Directive, args: [{
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
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
        { type: BsDropdownConfig, },
        { type: BsDropdownState, },
    ]; };
    BsDropdownDirective.propDecorators = {
        "placement": [{ type: Input },],
        "triggers": [{ type: Input },],
        "container": [{ type: Input },],
        "dropup": [{ type: Input },],
        "autoClose": [{ type: Input },],
        "insideClick": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "isOpenChange": [{ type: Output },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
    };
    return BsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    // tslint:disable:no-any
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] }
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ViewContainerRef, },
        { type: TemplateRef, },
    ]; };
    return BsDropdownMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    BsDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ElementRef, },
        { type: BsDropdownDirective, },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        "isDisabled": [{ type: HostBinding, args: ['attr.disabled',] },],
        "isOpen": [{ type: HostBinding, args: ['attr.aria-expanded',] },],
        "onClick": [{ type: HostListener, args: ['click', [],] },],
        "onDocumentClick": [{ type: HostListener, args: ['document:click', ['$event'],] },],
        "onEsc": [{ type: HostListener, args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownModule = /** @class */ (function () {
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
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: NgModule, args: [{
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

export { BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, BsDropdownModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kcm9wZG93bi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24uc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogRGVmYXVsdCBkcm9wZG93biBjb25maWd1cmF0aW9uICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbmZpZyB7XG4gIC8qKiBkZWZhdWx0IGRyb3Bkb3duIGF1dG8gY2xvc2luZyBiZWhhdmlvciAqL1xuICBhdXRvQ2xvc2UgPSB0cnVlO1xuICAvKiogZGVmYXVsdCBkcm9wZG93biBhdXRvIGNsb3NpbmcgYmVoYXZpb3IgKi9cbiAgaW5zaWRlQ2xpY2sgPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93blN0YXRlIHtcbiAgZGlyZWN0aW9uOiAnZG93bicgfCAndXAnID0gJ2Rvd24nO1xuICBhdXRvQ2xvc2U6IGJvb2xlYW47XG4gIGluc2lkZUNsaWNrOiBib29sZWFuO1xuICBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGlzRGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHRvZ2dsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGRyb3Bkb3duTWVudTogUHJvbWlzZTxCc0NvbXBvbmVudFJlZjxhbnk+PjtcbiAgcmVzb2x2ZURyb3Bkb3duTWVudTogKGNvbXBvbmVudFJlZjogQnNDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRyb3Bkb3duTWVudSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlRHJvcGRvd25NZW51ID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kcm9wZG93bi1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjogYWJzb2x1dGU7J1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmRyb3B1cF09XCJkaXJlY3Rpb24gPT09ICd1cCdcIlxuICAgICAgICAgW2NsYXNzLmRyb3Bkb3duXT1cImRpcmVjdGlvbiA9PT0gJ2Rvd24nXCJcbiAgICAgICAgIFtjbGFzcy5zaG93XT1cImlzT3BlblwiXG4gICAgICAgICBbY2xhc3Mub3Blbl09XCJpc09wZW5cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIGdldCBkaXJlY3Rpb24oKTogJ2Rvd24nIHwgJ3VwJyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRpcmVjdGlvbjtcbiAgfVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51Jyk7XG4gICAgICBpZiAoZHJvcGRvd24gJiYgIWlzQnMzKCkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZHJvcGRvd24sICdzaG93Jyk7XG4gICAgICAgIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnKSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAnbGVmdCcsICdhdXRvJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICdyaWdodCcsICcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICd0b3AnLCAnYXV0bycpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgZHJvcGRvd24sXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgICd0cmFuc2xhdGVZKC0xMDElKSdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jb250YWlucyhlbDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZWwpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi9icy1kcm9wZG93bi5jb25maWcnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93bl0sW2Ryb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24nLFxuICBwcm92aWRlcnM6IFtCc0Ryb3Bkb3duU3RhdGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kcm9wdXBdJzogJ2Ryb3B1cCcsXG4gICAgJ1tjbGFzcy5vcGVuXSc6ICdpc09wZW4nLFxuICAgICdbY2xhc3Muc2hvd10nOiAnaXNPcGVuICYmIGlzQnM0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzXG4gICAqL1xuICBASW5wdXQoKSBkcm9wdXA6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGRyb3Bkb3duIHdpbGwgYmUgY2xvc2VkIG9uIGl0ZW0gb3IgZG9jdW1lbnQgY2xpY2ssXG4gICAqIGFuZCBhZnRlciBwcmVzc2luZyBFU0NcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhdXRvQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhdXRvQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmF1dG9DbG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkbid0IGNsb3NlIG9uIGluc2lkZSBjbGljayB3aGVuIGF1dG9DbG9zZSBpcyBzZXQgdG8gdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGluc2lkZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBpbnNpZGVDbGljaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2s7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgZHJvcGRvd24gdG9nZ2xlIGFuZCBoaWRlcyBkcm9wZG93biBtZW51IGlmIG9wZW5lZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNJbmxpbmVPcGVuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bi5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGlzT3BlbiBjaGFuZ2VcbiAgICovXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cbiAgICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBwcml2YXRlIF9kcm9wZG93bjogQ29tcG9uZW50TG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgZ2V0IF9zaG93SW5saW5lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5jb250YWluZXI7XG4gIH1cblxuICAvLyB0b2RvOiBtb3ZlIHRvIGNvbXBvbmVudCBsb2FkZXJcbiAgcHJpdmF0ZSBfaXNJbmxpbmVPcGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaW5saW5lZE1lbnU6IEVtYmVkZGVkVmlld1JlZjxCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZT47XG4gIHByaXZhdGUgX2lzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2lzSW5pdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb25maWc6IEJzRHJvcGRvd25Db25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUpIHtcbiAgICAvLyBzZXQgaW5pdGlhbCBkcm9wZG93biBzdGF0ZSBmcm9tIGNvbmZpZ1xuICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHRoaXMuX2NvbmZpZy5hdXRvQ2xvc2U7XG4gICAgdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgPSB0aGlzLl9jb25maWcuaW5zaWRlQ2xpY2s7XG5cbiAgICAvLyBjcmVhdGUgZHJvcGRvd24gY29tcG9uZW50IGxvYWRlclxuICAgIHRoaXMuX2Ryb3Bkb3duID0gdGhpcy5fY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRHJvcGRvd25TdGF0ZSwgdXNlVmFsdWU6IHRoaXMuX3N0YXRlfSk7XG5cbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kcm9wZG93bi5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kcm9wZG93bi5vbkhpZGRlbjtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZTtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gZml4OiBzZWVtcyB0aGVyZSBhcmUgYW4gaXNzdWUgd2l0aCBgcm91dGVyTGlua0FjdGl2ZWBcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcbiAgICBpZiAodGhpcy5faXNJbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgLy8gYXR0YWNoIERPTSBsaXN0ZW5lcnNcbiAgICB0aGlzLl9kcm9wZG93bi5saXN0ZW4oe1xuICAgICAgLy8gYmVjYXVzZSBvZiBkcm9wZG93biBpbmxpbmUgbW9kZVxuICAgICAgb3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IG9uIHRvZ2dsZSBlbGVtZW50IGNsaWNrXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy50b2dnbGUodmFsdWUpKVxuICAgICk7XG5cbiAgICAvLyBoaWRlIGRyb3Bkb3duIGlmIHNldCBkaXNhYmxlZCB3aGlsZSBvcGVuZWRcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigodmFsdWU6IGJvb2xlYW4pID0+IHZhbHVlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB0aGlzLmhpZGUoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgIGlmICghdGhpcy5faW5saW5lZE1lbnUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51LnRoZW4oXG4gICAgICAgICAgKGRyb3Bkb3duTWVudTogQnNDb21wb25lbnRSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9kcm9wZG93bi5hdHRhY2hJbmxpbmUoXG4gICAgICAgICAgICAgIGRyb3Bkb3duTWVudS52aWV3Q29udGFpbmVyLFxuICAgICAgICAgICAgICBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9pbmxpbmVkTWVudSA9IHRoaXMuX2Ryb3Bkb3duLl9pbmxpbmVWaWV3UmVmO1xuICAgICAgICAgICAgdGhpcy5hZGRCczRQb2x5ZmlsbHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnNcbiAgICAgICAgICAuY2F0Y2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkQnM0UG9seWZpbGxzKCk7XG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5vblNob3duLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS5kcm9wZG93bk1lbnUudGhlbihkcm9wZG93bk1lbnUgPT4ge1xuICAgICAgLy8gY2hlY2sgZGlyZWN0aW9uIGluIHdoaWNoIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWRcbiAgICAgIGNvbnN0IF9kcm9wdXAgPVxuICAgICAgICB0aGlzLmRyb3B1cCB8fFxuICAgICAgICAodHlwZW9mIHRoaXMuZHJvcHVwICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmRyb3B1cCk7XG4gICAgICB0aGlzLl9zdGF0ZS5kaXJlY3Rpb24gPSBfZHJvcHVwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgIGNvbnN0IF9wbGFjZW1lbnQgPVxuICAgICAgICB0aGlzLnBsYWNlbWVudCB8fCAoX2Ryb3B1cCA/ICd0b3AgbGVmdCcgOiAnYm90dG9tIGxlZnQnKTtcblxuICAgICAgLy8gc2hvdyBkcm9wZG93blxuICAgICAgdGhpcy5fZHJvcGRvd25cbiAgICAgICAgLmF0dGFjaChCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogX3BsYWNlbWVudH0pXG4gICAgICAgIC5zaG93KHtcbiAgICAgICAgICBjb250ZW50OiBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWYsXG4gICAgICAgICAgcGxhY2VtZW50OiBfcGxhY2VtZW50XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9KVxuICAgIC8vIHN3YWxsb3cgZXJyb3JcbiAgICAgIC5jYXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICB0aGlzLnJlbW92ZVNob3dDbGFzcygpO1xuICAgICAgdGhpcy5yZW1vdmVEcm9wdXBTdHlsZXMoKTtcbiAgICAgIHRoaXMuX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuIFdpdGggcGFyYW1ldGVyIDxjb2RlPnRydWU8L2NvZGU+IGFsbG93cyB0b2dnbGluZywgd2l0aCBwYXJhbWV0ZXIgPGNvZGU+ZmFsc2U8L2NvZGU+XG4gICAqIG9ubHkgaGlkZXMgb3BlbmVkIGRyb3Bkb3duLiBQYXJhbWV0ZXIgdXNhZ2Ugd2lsbCBiZSByZW1vdmVkIGluIG5neC1ib290c3RyYXAgdjNcbiAgICovXG4gIHRvZ2dsZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY29udGFpbnMoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fFxuICAgICAgKHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlICYmIHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlLl9jb250YWlucyhldmVudC50YXJnZXQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIGRlc3Ryb3kgZHJvcGRvd25cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZHJvcGRvd24uZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRCczRQb2x5ZmlsbHMoKTogdm9pZCB7XG4gICAgaWYgKCFpc0JzMygpKSB7XG4gICAgICB0aGlzLmFkZFNob3dDbGFzcygpO1xuICAgICAgdGhpcy5jaGVja1JpZ2h0QWxpZ25tZW50KCk7XG4gICAgICB0aGlzLmFkZERyb3B1cFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU2hvd0NsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVNob3dDbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0QWxpZ25tZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIGNvbnN0IGlzUmlnaHRBbGlnbmVkID0gdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICBpc1JpZ2h0QWxpZ25lZCA/ICdhdXRvJyA6ICcwJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgIGlzUmlnaHRBbGlnbmVkID8gJzAnIDogJ2F1dG8nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRHJvcHVwU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIC8vIGEgbGl0dGxlIGhhY2sgdG8gbm90IGJyZWFrIHN1cHBvcnQgb2YgYm9vdHN0cmFwIDQgYmV0YVxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ2F1dG8nIDogJzEwMCUnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ3RyYW5zbGF0ZVkoLTEwMSUpJyA6ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdib3R0b20nLFxuICAgICAgICAnYXV0bydcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEcm9wdXBTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAndG9wJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICd0cmFuc2Zvcm0nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ2JvdHRvbScpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic0Ryb3Bkb3duTWVudV0sW2Ryb3Bkb3duTWVudV0nLFxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duLW1lbnUnXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIHtcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxuICAgIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxuICApIHtcbiAgICBfc3RhdGUucmVzb2x2ZURyb3Bkb3duTWVudSh7XG4gICAgICB0ZW1wbGF0ZVJlZjogX3RlbXBsYXRlUmVmLFxuICAgICAgdmlld0NvbnRhaW5lcjogX3ZpZXdDb250YWluZXJcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93blRvZ2dsZV0sW2Ryb3Bkb3duVG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tdG9nZ2xlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWhhc3BvcHVwXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBpc0Rpc2FibGVkOiBib29sZWFuID0gbnVsbDtcblxuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNPcGVuOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcm9wZG93bjogQnNEcm9wZG93bkRpcmVjdGl2ZSkge1xuICAgIC8vIHN5bmMgaXMgb3BlbiB2YWx1ZSB3aXRoIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZShcbiAgICAgICAgKHZhbHVlOiBib29sZWFuKSA9PiAodGhpcy5pc09wZW4gPSB2YWx1ZSlcbiAgICAgIClcbiAgICApO1xuICAgIC8vIHBvcHVsYXRlIGRpc2FibGVkIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlIHx8IG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgW10pXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgJiZcbiAgICAgIGV2ZW50LmJ1dHRvbiAhPT0gMiAmJlxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAhKHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrICYmIHRoaXMuZHJvcGRvd24uX2NvbnRhaW5zKGV2ZW50KSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzYycpXG4gIG9uRXNjKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UpIHtcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRyb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLXRvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vYnMtZHJvcGRvd24uY29uZmlnJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gICAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCc0Ryb3Bkb3duRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0JzRHJvcGRvd25Db250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Nb2R1bGUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQnNEcm9wZG93bk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gICAgICAgIEJzRHJvcGRvd25TdGF0ZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEJzRHJvcGRvd25Db25maWcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyA/IGNvbmZpZyA6IHsgYXV0b0Nsb3NlOiB0cnVlLCBpbnNpZGVDbGljazogZmFsc2UgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O3lCQU1jLElBQUk7Ozs7MkJBRUYsS0FBSzs7O2dCQUxwQixVQUFVOzsyQkFIWDs7Ozs7OztBQ0FBO0lBbUJFO1FBQUEsaUJBSUM7eUJBbEIwQixNQUFNOzRCQUdsQixJQUFJLFlBQVksRUFB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