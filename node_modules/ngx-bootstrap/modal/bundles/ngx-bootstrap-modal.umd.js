(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/modal', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].modal = {}),global.ng.core,global.utils,global.componentLoader,global.positioning));
}(this, (function (exports,core,utils,componentLoader,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsModalRef = (function () {
        function BsModalRef() {
            /**
             * Hides the modal
             */
            this.hide = Function;
            /**
             * Sets new class to modal window
             */
            this.setClass = Function;
        }
        BsModalRef.decorators = [
            { type: core.Injectable }
        ];
        return BsModalRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalBackdropOptions = (function () {
        function ModalBackdropOptions(options) {
            this.animate = true;
            Object.assign(this, options);
        }
        return ModalBackdropOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalOptions = (function () {
        function ModalOptions() {
        }
        ModalOptions.decorators = [
            { type: core.Injectable }
        ];
        return ModalOptions;
    }());
    var /** @type {?} */ modalConfigDefaults = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: '',
        animated: true,
        initialState: {}
    };
    var /** @type {?} */ CLASS_NAME = {
        SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
        BACKDROP: 'modal-backdrop',
        OPEN: 'modal-open',
        FADE: 'fade',
        IN: 'in',
        // bs3
        SHOW: 'show' // bs4
    };
    var /** @type {?} */ TRANSITION_DURATIONS = {
        MODAL: 300,
        BACKDROP: 150
    };
    var /** @type {?} */ DISMISS_REASONS = {
        BACKRDOP: 'backdrop-click',
        ESC: 'esc'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalContainerComponent = (function () {
        function ModalContainerComponent(options, _element, _renderer) {
            this._element = _element;
            this._renderer = _renderer;
            this.isShown = false;
            this.isModalHiding = false;
            this.config = Object.assign({}, options);
        }
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isAnimated) {
                    this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
                }
                this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
                setTimeout(function () {
                    _this.isShown = true;
                    _this._renderer.addClass(_this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
                }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
                if (document && document.body) {
                    if (this.bsModalService.getModalsCount() === 1) {
                        this.bsModalService.checkScrollbar();
                        this.bsModalService.setScrollbar();
                    }
                    this._renderer.addClass(document.body, CLASS_NAME.OPEN);
                }
                if (this._element.nativeElement) {
                    this._element.nativeElement.focus();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ModalContainerComponent.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.config.ignoreBackdropClick ||
                    this.config.backdrop === 'static' ||
                    event.target !== this._element.nativeElement) {
                    return;
                }
                this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
                this.hide();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ModalContainerComponent.prototype.onEsc = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.isShown) {
                    return;
                }
                // tslint:disable-next-line:deprecation
                if (event.keyCode === 27 || event.key === 'Escape') {
                    event.preventDefault();
                }
                if (this.config.keyboard &&
                    this.level === this.bsModalService.getModalsCount()) {
                    this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.hide = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isModalHiding || !this.isShown) {
                    return;
                }
                this.isModalHiding = true;
                this._renderer.removeClass(this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
                setTimeout(function () {
                    _this.isShown = false;
                    if (document &&
                        document.body &&
                        _this.bsModalService.getModalsCount() === 1) {
                        _this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
                    }
                    _this.bsModalService.hide(_this.level);
                    _this.isModalHiding = false;
                }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
            };
        ModalContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'modal-container',
                        template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                        host: {
                            class: 'modal',
                            role: 'dialog',
                            tabindex: '-1',
                            '[attr.aria-modal]': 'true'
                        }
                    }] }
        ];
        /** @nocollapse */
        ModalContainerComponent.ctorParameters = function () {
            return [
                { type: ModalOptions, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        ModalContainerComponent.propDecorators = {
            "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['window:keydown.esc', ['$event'],] },],
        };
        return ModalContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * This component will be added as background layout for modals if enabled
     */
    var ModalBackdropComponent = (function () {
        function ModalBackdropComponent(element, renderer) {
            this._isShown = false;
            this.element = element;
            this.renderer = renderer;
        }
        Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
            get: /**
             * @return {?}
             */ function () {
                return this._isAnimated;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isAnimated = value;
                // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isShown = value;
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                if (!utils.isBs3()) {
                    if (value) {
                        this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                    }
                    else {
                        this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ModalBackdropComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.isAnimated) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.FADE);
                    utils.Utils.reflow(this.element.nativeElement);
                }
                this.isShown = true;
            };
        ModalBackdropComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-modal-backdrop',
                        template: ' ',
                        host: { class: CLASS_NAME.BACKDROP }
                    }] }
        ];
        /** @nocollapse */
        ModalBackdropComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        return ModalBackdropComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ TRANSITION_DURATION = 300;
    var /** @type {?} */ BACKDROP_TRANSITION_DURATION = 150;
    /**
     * Mark any code with directive to show it's content in modal
     */
    var ModalDirective = (function () {
        function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
            this._element = _element;
            this._renderer = _renderer;
            /**
             * This event fires immediately when the `show` instance method is called.
             */
            this.onShow = new core.EventEmitter();
            /**
             * This event is fired when the modal has been made visible to the user
             * (will wait for CSS transitions to complete)
             */
            this.onShown = new core.EventEmitter();
            /**
             * This event is fired immediately when
             * the hide instance method has been called.
             */
            this.onHide = new core.EventEmitter();
            /**
             * This event is fired when the modal has finished being
             * hidden from the user (will wait for CSS transitions to complete).
             */
            this.onHidden = new core.EventEmitter();
            this._isShown = false;
            this.isBodyOverflowing = false;
            this.originalBodyPadding = 0;
            this.scrollbarWidth = 0;
            this.timerHideModal = 0;
            this.timerRmBackDrop = 0;
            this.isNested = false;
            this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
        }
        Object.defineProperty(ModalDirective.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            set: /**
             * allows to set modal configuration via element property
             * @param {?} conf
             * @return {?}
             */ function (conf) {
                this._config = this.getConfig(conf);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalDirective.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShown;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        ModalDirective.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.config.ignoreBackdropClick ||
                    this.config.backdrop === 'static' ||
                    event.target !== this._element.nativeElement) {
                    return;
                }
                this.dismissReason = DISMISS_REASONS.BACKRDOP;
                this.hide(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ModalDirective.prototype.onEsc = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this._isShown) {
                    return;
                }
                // tslint:disable-next-line:deprecation
                if (event.keyCode === 27 || event.key === 'Escape') {
                    event.preventDefault();
                }
                if (this.config.keyboard) {
                    this.dismissReason = DISMISS_REASONS.ESC;
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.config = void 0;
                if (this._isShown) {
                    this._isShown = false;
                    this.hideModal();
                    this._backdrop.dispose();
                }
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._config = this._config || this.getConfig();
                setTimeout(function () {
                    if (_this._config.show) {
                        _this.show();
                    }
                }, 0);
            };
        /* Public methods */
        /** Allows to manually toggle modal visibility */
        /**
         * Allows to manually toggle modal visibility
         * @return {?}
         */
        ModalDirective.prototype.toggle = /**
         * Allows to manually toggle modal visibility
         * @return {?}
         */
            function () {
                return this._isShown ? this.hide() : this.show();
            };
        /** Allows to manually open modal */
        /**
         * Allows to manually open modal
         * @return {?}
         */
        ModalDirective.prototype.show = /**
         * Allows to manually open modal
         * @return {?}
         */
            function () {
                var _this = this;
                this.dismissReason = null;
                this.onShow.emit(this);
                if (this._isShown) {
                    return;
                }
                clearTimeout(this.timerHideModal);
                clearTimeout(this.timerRmBackDrop);
                this._isShown = true;
                this.checkScrollbar();
                this.setScrollbar();
                if (utils.document && utils.document.body) {
                    if (utils.document.body.classList.contains(CLASS_NAME.OPEN)) {
                        this.isNested = true;
                    }
                    else {
                        this._renderer.addClass(utils.document.body, CLASS_NAME.OPEN);
                    }
                }
                this.showBackdrop(function () {
                    _this.showElement();
                });
            };
        /** Allows to manually close modal */
        /**
         * Allows to manually close modal
         * @param {?=} event
         * @return {?}
         */
        ModalDirective.prototype.hide = /**
         * Allows to manually close modal
         * @param {?=} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                if (event) {
                    event.preventDefault();
                }
                this.onHide.emit(this);
                // todo: add an option to prevent hiding
                if (!this._isShown) {
                    return;
                }
                utils.window.clearTimeout(this.timerHideModal);
                utils.window.clearTimeout(this.timerRmBackDrop);
                this._isShown = false;
                this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
                if (!utils.isBs3()) {
                    this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
                }
                // this._addClassIn = false;
                if (this._config.animated) {
                    this.timerHideModal = utils.window.setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
                }
                else {
                    this.hideModal();
                }
            };
        /** Private methods @internal */
        /**
         * Private methods \@internal
         * @param {?=} config
         * @return {?}
         */
        ModalDirective.prototype.getConfig = /**
         * Private methods \@internal
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return Object.assign({}, modalConfigDefaults, config);
            };
        /**
         *  Show dialog
         *  @internal
         */
        /**
         *  Show dialog
         *  \@internal
         * @return {?}
         */
        ModalDirective.prototype.showElement = /**
         *  Show dialog
         *  \@internal
         * @return {?}
         */
            function () {
                var _this = this;
                // todo: replace this with component loader usage
                if (!this._element.nativeElement.parentNode ||
                    this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    // don't move modals dom position
                    if (utils.document && utils.document.body) {
                        utils.document.body.appendChild(this._element.nativeElement);
                    }
                }
                this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
                this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
                this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
                this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
                if (this._config.animated) {
                    utils.Utils.reflow(this._element.nativeElement);
                }
                // this._addClassIn = true;
                this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
                if (!utils.isBs3()) {
                    this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
                }
                var /** @type {?} */ transitionComplete = function () {
                    if (_this._config.focus) {
                        _this._element.nativeElement.focus();
                    }
                    _this.onShown.emit(_this);
                };
                if (this._config.animated) {
                    setTimeout(transitionComplete, TRANSITION_DURATION);
                }
                else {
                    transitionComplete();
                }
            };
        /** @internal */
        /**
         * \@internal
         * @return {?}
         */
        ModalDirective.prototype.hideModal = /**
         * \@internal
         * @return {?}
         */
            function () {
                var _this = this;
                this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
                this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
                this.showBackdrop(function () {
                    if (!_this.isNested) {
                        if (utils.document && utils.document.body) {
                            _this._renderer.removeClass(utils.document.body, CLASS_NAME.OPEN);
                        }
                        _this.resetScrollbar();
                    }
                    _this.resetAdjustments();
                    _this.focusOtherModal();
                    _this.onHidden.emit(_this);
                });
            };
        // todo: original show was calling a callback when done, but we can use
        // promise
        /** @internal */
        /**
         * \@internal
         * @param {?=} callback
         * @return {?}
         */
        ModalDirective.prototype.showBackdrop = /**
         * \@internal
         * @param {?=} callback
         * @return {?}
         */
            function (callback) {
                var _this = this;
                if (this._isShown &&
                    this.config.backdrop &&
                    (!this.backdrop || !this.backdrop.instance.isShown)) {
                    this.removeBackdrop();
                    this._backdrop
                        .attach(ModalBackdropComponent)
                        .to('body')
                        .show({ isAnimated: this._config.animated });
                    this.backdrop = this._backdrop._componentRef;
                    if (!callback) {
                        return;
                    }
                    if (!this._config.animated) {
                        callback();
                        return;
                    }
                    setTimeout(callback, BACKDROP_TRANSITION_DURATION);
                }
                else if (!this._isShown && this.backdrop) {
                    this.backdrop.instance.isShown = false;
                    var /** @type {?} */ callbackRemove = function () {
                        _this.removeBackdrop();
                        if (callback) {
                            callback();
                        }
                    };
                    if (this.backdrop.instance.isAnimated) {
                        this.timerRmBackDrop = utils.window.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
                    }
                    else {
                        callbackRemove();
                    }
                }
                else if (callback) {
                    callback();
                }
            };
        /** @internal */
        /**
         * \@internal
         * @return {?}
         */
        ModalDirective.prototype.removeBackdrop = /**
         * \@internal
         * @return {?}
         */
            function () {
                this._backdrop.hide();
            };
        /** Events tricks */
        // no need for it
        // protected setEscapeEvent():void {
        //   if (this._isShown && this._config.keyboard) {
        //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
        //       if (event.which === 27) {
        //         this.hide()
        //       }
        //     })
        //
        //   } else if (!this._isShown) {
        //     $(this._element).off(Event.KEYDOWN_DISMISS)
        //   }
        // }
        // protected setResizeEvent():void {
        // console.log(this.renderer.listenGlobal('', Event.RESIZE));
        // if (this._isShown) {
        //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
        // } else {
        //   $(window).off(Event.RESIZE)
        // }
        // }
        /**
         * Events tricks
         * @return {?}
         */
        ModalDirective.prototype.focusOtherModal = /**
         * Events tricks
         * @return {?}
         */
            function () {
                if (this._element.nativeElement.parentElement == null) {
                    return;
                }
                var /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
                if (!otherOpenedModals.length) {
                    return;
                }
                otherOpenedModals[otherOpenedModals.length - 1].focus();
            };
        /** @internal */
        /**
         * \@internal
         * @return {?}
         */
        ModalDirective.prototype.resetAdjustments = /**
         * \@internal
         * @return {?}
         */
            function () {
                this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
                this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
            };
        /** Scroll bar tricks */
        /** @internal */
        /**
         * \@internal
         * @return {?}
         */
        ModalDirective.prototype.checkScrollbar = /**
         * \@internal
         * @return {?}
         */
            function () {
                this.isBodyOverflowing = utils.document.body.clientWidth < utils.window.innerWidth;
                this.scrollbarWidth = this.getScrollbarWidth();
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.setScrollbar = /**
         * @return {?}
         */
            function () {
                if (!utils.document) {
                    return;
                }
                this.originalBodyPadding = parseInt(utils.window
                    .getComputedStyle(utils.document.body)
                    .getPropertyValue('padding-right') || 0, 10);
                if (this.isBodyOverflowing) {
                    utils.document.body.style.paddingRight = this.originalBodyPadding +
                        this.scrollbarWidth + "px";
                }
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.resetScrollbar = /**
         * @return {?}
         */
            function () {
                utils.document.body.style.paddingRight = this.originalBodyPadding + "px";
            };
        // thx d.walsh
        /**
         * @return {?}
         */
        ModalDirective.prototype.getScrollbarWidth = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
                this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
                this._renderer.appendChild(utils.document.body, scrollDiv);
                var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                this._renderer.removeChild(utils.document.body, scrollDiv);
                return scrollbarWidth;
            };
        ModalDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsModal]',
                        exportAs: 'bs-modal'
                    },] }
        ];
        /** @nocollapse */
        ModalDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.ViewContainerRef, },
                { type: core.Renderer2, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        ModalDirective.propDecorators = {
            "config": [{ type: core.Input },],
            "onShow": [{ type: core.Output },],
            "onShown": [{ type: core.Output },],
            "onHide": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['keydown.esc', ['$event'],] },],
        };
        return ModalDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsModalService = (function () {
        function BsModalService(rendererFactory, clf) {
            this.clf = clf;
            // constructor props
            this.config = modalConfigDefaults;
            // tslint:disable-next-line:no-any
            this.onShow = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onShown = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onHide = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onHidden = new core.EventEmitter();
            this.isBodyOverflowing = false;
            this.originalBodyPadding = 0;
            this.scrollbarWidth = 0;
            this.modalsCount = 0;
            this.lastDismissReason = '';
            this.loaders = [];
            this._backdropLoader = this.clf.createLoader(null, null, null);
            this._renderer = rendererFactory.createRenderer(null, null);
        }
        /** Shows a modal */
        // tslint:disable-next-line:no-any
        /**
         * Shows a modal
         * @param {?} content
         * @param {?=} config
         * @return {?}
         */
        BsModalService.prototype.show = /**
         * Shows a modal
         * @param {?} content
         * @param {?=} config
         * @return {?}
         */
            function (content, config) {
                this.modalsCount++;
                this._createLoaders();
                this.config = Object.assign({}, modalConfigDefaults, config);
                this._showBackdrop();
                this.lastDismissReason = null;
                return this._showModal(content);
            };
        /**
         * @param {?} level
         * @return {?}
         */
        BsModalService.prototype.hide = /**
         * @param {?} level
         * @return {?}
         */
            function (level) {
                var _this = this;
                if (this.modalsCount === 1) {
                    this._hideBackdrop();
                    this.resetScrollbar();
                }
                this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
                setTimeout(function () {
                    _this._hideModal(level);
                    _this.removeLoaders(level);
                }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
            };
        /**
         * @return {?}
         */
        BsModalService.prototype._showBackdrop = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
                var /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
                if (this.modalsCount === 1) {
                    this.removeBackdrop();
                    if (isBackdropEnabled && isBackdropInDOM) {
                        this._backdropLoader
                            .attach(ModalBackdropComponent)
                            .to('body')
                            .show({ isAnimated: this.config.animated });
                        this.backdropRef = this._backdropLoader._componentRef;
                    }
                }
            };
        /**
         * @return {?}
         */
        BsModalService.prototype._hideBackdrop = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.backdropRef) {
                    return;
                }
                this.backdropRef.instance.isShown = false;
                var /** @type {?} */ duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
                setTimeout(function () { return _this.removeBackdrop(); }, duration);
            };
        // tslint:disable-next-line:no-any
        /**
         * @param {?} content
         * @return {?}
         */
        BsModalService.prototype._showModal = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                var /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
                var /** @type {?} */ bsModalRef = new BsModalRef();
                var /** @type {?} */ modalContainerRef = modalLoader
                    .provide({ provide: ModalOptions, useValue: this.config })
                    .provide({ provide: BsModalRef, useValue: bsModalRef })
                    .attach(ModalContainerComponent)
                    .to('body')
                    .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
                modalContainerRef.instance.level = this.getModalsCount();
                bsModalRef.hide = function () {
                    modalContainerRef.instance.hide();
                };
                bsModalRef.content = modalLoader.getInnerComponent() || null;
                bsModalRef.setClass = function (newClass) {
                    modalContainerRef.instance.config.class = newClass;
                };
                return bsModalRef;
            };
        /**
         * @param {?} level
         * @return {?}
         */
        BsModalService.prototype._hideModal = /**
         * @param {?} level
         * @return {?}
         */
            function (level) {
                var /** @type {?} */ modalLoader = this.loaders[level - 1];
                if (modalLoader) {
                    modalLoader.hide();
                }
            };
        /**
         * @return {?}
         */
        BsModalService.prototype.getModalsCount = /**
         * @return {?}
         */
            function () {
                return this.modalsCount;
            };
        /**
         * @param {?} reason
         * @return {?}
         */
        BsModalService.prototype.setDismissReason = /**
         * @param {?} reason
         * @return {?}
         */
            function (reason) {
                this.lastDismissReason = reason;
            };
        /**
         * @return {?}
         */
        BsModalService.prototype.removeBackdrop = /**
         * @return {?}
         */
            function () {
                this._backdropLoader.hide();
                this.backdropRef = null;
            };
        /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
        /** Scroll bar tricks */
        /** @internal */
        /**
         * \@internal
         * @return {?}
         */
        BsModalService.prototype.checkScrollbar = /**
         * \@internal
         * @return {?}
         */
            function () {
                this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                this.scrollbarWidth = this.getScrollbarWidth();
            };
        /**
         * @return {?}
         */
        BsModalService.prototype.setScrollbar = /**
         * @return {?}
         */
            function () {
                if (!document) {
                    return;
                }
                this.originalBodyPadding = parseInt(window
                    .getComputedStyle(document.body)
                    .getPropertyValue('padding-right') || '0', 10);
                if (this.isBodyOverflowing) {
                    document.body.style.paddingRight = this.originalBodyPadding +
                        this.scrollbarWidth + "px";
                }
            };
        /**
         * @return {?}
         */
        BsModalService.prototype.resetScrollbar = /**
         * @return {?}
         */
            function () {
                document.body.style.paddingRight = this.originalBodyPadding + "px";
            };
        /**
         * @return {?}
         */
        BsModalService.prototype.getScrollbarWidth = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
                this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
                this._renderer.appendChild(document.body, scrollDiv);
                var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                this._renderer.removeChild(document.body, scrollDiv);
                return scrollbarWidth;
            };
        /**
         * @return {?}
         */
        BsModalService.prototype._createLoaders = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ loader = this.clf.createLoader(null, null, null);
                this.copyEvent(loader.onBeforeShow, this.onShow);
                this.copyEvent(loader.onShown, this.onShown);
                this.copyEvent(loader.onBeforeHide, this.onHide);
                this.copyEvent(loader.onHidden, this.onHidden);
                this.loaders.push(loader);
            };
        /**
         * @param {?} level
         * @return {?}
         */
        BsModalService.prototype.removeLoaders = /**
         * @param {?} level
         * @return {?}
         */
            function (level) {
                this.loaders.splice(level - 1, 1);
                this.loaders.forEach(function (loader, i) {
                    loader.instance.level = i + 1;
                });
            };
        /**
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        BsModalService.prototype.copyEvent = /**
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
            function (from, to) {
                var _this = this;
                from.subscribe(function () {
                    to.emit(_this.lastDismissReason);
                });
            };
        BsModalService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsModalService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        return BsModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalModule = (function () {
        function ModalModule() {
        }
        /**
         * @return {?}
         */
        ModalModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ModalModule,
                    providers: [BsModalService, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        ModalModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ModalBackdropComponent,
                            ModalDirective,
                            ModalContainerComponent
                        ],
                        exports: [ModalBackdropComponent, ModalDirective],
                        entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                    },] }
        ];
        return ModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BsModalRef = BsModalRef;
    exports.ModalBackdropOptions = ModalBackdropOptions;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.ModalBackdropComponent = ModalBackdropComponent;
    exports.ModalOptions = ModalOptions;
    exports.ModalDirective = ModalDirective;
    exports.ModalModule = ModalModule;
    exports.BsModalService = BsModalService;
    exports.ɵa = CLASS_NAME;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1tb2RhbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvbW9kYWwvYnMtbW9kYWwtcmVmLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtYmFja2Ryb3Aub3B0aW9ucy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9icy1tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc01vZGFsUmVmIHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byBhIGNvbXBvbmVudCBpbnNpZGUgdGhlIG1vZGFsLiBOdWxsIGlmIG1vZGFsJ3MgYmVlbiBjcmVhdGVkIHdpdGggVGVtcGxhdGVSZWZcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29udGVudD86IGFueSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBtb2RhbFxuICAgKi9cbiAgaGlkZTogKCkgPT4gdm9pZCA9IEZ1bmN0aW9uO1xuICAvKipcbiAgICogU2V0cyBuZXcgY2xhc3MgdG8gbW9kYWwgd2luZG93XG4gICAqL1xuICBzZXRDbGFzczogKG5ld0NsYXNzOiBzdHJpbmcpID0+IHZvaWQgPSBGdW5jdGlvbjtcbn1cbiIsImV4cG9ydCBjbGFzcyBNb2RhbEJhY2tkcm9wT3B0aW9ucyB7XG4gIGFuaW1hdGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE1vZGFsQmFja2Ryb3BPcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lLCBEaXNtaXNzUmVhc29ucywgU2VsZWN0b3IsIFRyYW5zaXRpb25EdXJhdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbE9wdGlvbnMge1xuICAvKipcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSxcbiAgICogIHNwZWNpZnkgc3RhdGljIGZvciBhIGJhY2tkcm9wIHdoaWNoIGRvZXNuJ3QgY2xvc2UgdGhlIG1vZGFsIG9uIGNsaWNrLlxuICAgKi9cbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYyc7XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkLlxuICAgKi9cbiAga2V5Ym9hcmQ/OiBib29sZWFuO1xuXG4gIGZvY3VzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBtb2RhbCB3aGVuIGluaXRpYWxpemVkLlxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZ25vcmUgdGhlIGJhY2tkcm9wIGNsaWNrXG4gICAqL1xuICBpZ25vcmVCYWNrZHJvcENsaWNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3Igb3BlbmVkIG1vZGFsXG4gICAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRvZ2dsZSBhbmltYXRpb25cbiAgICovXG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE1vZGFsIGRhdGFcbiAgICovXG4gIGluaXRpYWxTdGF0ZT86IE9iamVjdDtcbn1cblxuXG5leHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBzaG93OiBmYWxzZSxcbiAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXG4gIGNsYXNzOiAnJyxcbiAgYW5pbWF0ZWQ6IHRydWUsXG4gIGluaXRpYWxTdGF0ZToge31cbn07XG5cbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FOiBDbGFzc05hbWUgPSB7XG4gIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIE9QRU46ICdtb2RhbC1vcGVuJyxcbiAgRkFERTogJ2ZhZGUnLFxuICBJTjogJ2luJywgLy8gYnMzXG4gIFNIT1c6ICdzaG93JyAvLyBiczRcbn07XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RPUjogU2VsZWN0b3IgPSB7XG4gIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xufTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT05TOiBUcmFuc2l0aW9uRHVyYXRpb25zID0ge1xuICBNT0RBTDogMzAwLFxuICBCQUNLRFJPUDogMTUwXG59O1xuXG5leHBvcnQgY29uc3QgRElTTUlTU19SRUFTT05TOiBEaXNtaXNzUmVhc29ucyA9IHtcbiAgQkFDS1JET1A6ICdiYWNrZHJvcC1jbGljaycsXG4gIEVTQzogJ2VzYydcbn07XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENMQVNTX05BTUUsXG4gIERJU01JU1NfUkVBU09OUyxcbiAgTW9kYWxPcHRpb25zLFxuICBUUkFOU0lUSU9OX0RVUkFUSU9OU1xufSBmcm9tICcuL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2JzLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzc109XCInbW9kYWwtZGlhbG9nJyArIChjb25maWcuY2xhc3MgPyAnICcgKyBjb25maWcuY2xhc3MgOiAnJylcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtb2RhbCcsXG4gICAgcm9sZTogJ2RpYWxvZycsXG4gICAgdGFiaW5kZXg6ICctMScsXG4gICAgJ1thdHRyLmFyaWEtbW9kYWxdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbmZpZzogTW9kYWxPcHRpb25zO1xuICBpc1Nob3duID0gZmFsc2U7XG4gIGxldmVsOiBudW1iZXI7XG4gIGlzQW5pbWF0ZWQ6IGJvb2xlYW47XG4gIGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZTtcbiAgcHJpdmF0ZSBpc01vZGFsSGlkaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTW9kYWxPcHRpb25zLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgQ0xBU1NfTkFNRS5GQURFXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdkaXNwbGF5JyxcbiAgICAgICdibG9jaydcbiAgICApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGlzQnMzKCkgPyBDTEFTU19OQU1FLklOIDogQ0xBU1NfTkFNRS5TSE9XXG4gICAgICApO1xuICAgIH0sIHRoaXMuaXNBbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT05TLkJBQ0tEUk9QIDogMCk7XG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGlmICh0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkgPT09IDEpIHtcbiAgICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5jaGVja1Njcm9sbGJhcigpO1xuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldFNjcm9sbGJhcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgQ0xBU1NfTkFNRS5PUEVOKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayB8fFxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnIHx8XG4gICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldERpc21pc3NSZWFzb24oRElTTUlTU19SRUFTT05TLkJBQ0tSRE9QKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gIG9uRXNjKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5rZXlib2FyZCAmJlxuICAgICAgdGhpcy5sZXZlbCA9PT0gdGhpcy5ic01vZGFsU2VydmljZS5nZXRNb2RhbHNDb3VudCgpXG4gICAgKSB7XG4gICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldERpc21pc3NSZWFzb24oRElTTUlTU19SRUFTT05TLkVTQyk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTW9kYWxIaWRpbmcgfHwgIXRoaXMuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzTW9kYWxIaWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgaXNCczMoKSA/IENMQVNTX05BTUUuSU4gOiBDTEFTU19OQU1FLlNIT1dcbiAgICApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XG4gICAgICBpZiAoXG4gICAgICAgIGRvY3VtZW50ICYmXG4gICAgICAgIGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5nZXRNb2RhbHNDb3VudCgpID09PSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgQ0xBU1NfTkFNRS5PUEVOKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuaGlkZSh0aGlzLmxldmVsKTtcbiAgICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IGZhbHNlO1xuICAgIH0sIHRoaXMuaXNBbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT05TLk1PREFMIDogMCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ0xBU1NfTkFNRSB9IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBpc0JzMywgVXRpbHMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuXG4vKiogVGhpcyBjb21wb25lbnQgd2lsbCBiZSBhZGRlZCBhcyBiYWNrZ3JvdW5kIGxheW91dCBmb3IgbW9kYWxzIGlmIGVuYWJsZWQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLW1vZGFsLWJhY2tkcm9wJyxcbiAgdGVtcGxhdGU6ICcgJyxcbiAgaG9zdDogeyBjbGFzczogQ0xBU1NfTkFNRS5CQUNLRFJPUCB9XG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQmFja2Ryb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBnZXQgaXNBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNBbmltYXRlZDtcbiAgfVxuXG4gIHNldCBpc0FuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBbmltYXRlZCA9IHZhbHVlO1xuICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtDbGFzc05hbWUuRkFERX1gLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc1Nob3duKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNTaG93biA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGAke0NMQVNTX05BTUUuSU59YFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGAke0NMQVNTX05BTUUuSU59YFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFpc0JzMygpKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICBgJHtDTEFTU19OQU1FLlNIT1d9YFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICBgJHtDTEFTU19OQU1FLlNIT1d9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgcHJvdGVjdGVkIF9pc0FuaW1hdGVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2lzU2hvd24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgYCR7Q0xBU1NfTkFNRS5GQURFfWBcbiAgICAgICk7XG4gICAgICBVdGlscy5yZWZsb3codGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50ICovXG4vLyB0b2RvOiBzaG91bGQgd2Ugc3VwcG9ydCBlbmZvcmNlIGZvY3VzIGluP1xuLy8gdG9kbzogaW4gb3JpZ2luYWwgYnMgdGhlcmUgYXJlIHdhcyBhIHdheSB0byBwcmV2ZW50IG1vZGFsIGZyb20gc2hvd2luZ1xuLy8gdG9kbzogb3JpZ2luYWwgbW9kYWwgaGFkIHJlc2l6ZSBldmVudHNcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCxcbiAgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkb2N1bWVudCwgd2luZG93LCBpc0JzMywgVXRpbHMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDTEFTU19OQU1FLCBESVNNSVNTX1JFQVNPTlMsIG1vZGFsQ29uZmlnRGVmYXVsdHMsIE1vZGFsT3B0aW9uc1xufSBmcm9tICcuL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcblxuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDMwMDtcbmNvbnN0IEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTA7XG5cbi8qKiBNYXJrIGFueSBjb2RlIHdpdGggZGlyZWN0aXZlIHRvIHNob3cgaXQncyBjb250ZW50IGluIG1vZGFsICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNNb2RhbF0nLFxuICBleHBvcnRBczogJ2JzLW1vZGFsJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgLyoqIGFsbG93cyB0byBzZXQgbW9kYWwgY29uZmlndXJhdGlvbiB2aWEgZWxlbWVudCBwcm9wZXJ0eSAqL1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGNvbmY6IE1vZGFsT3B0aW9ucykge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKGNvbmYpO1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpOiBNb2RhbE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cblxuICAvKiogVGhpcyBldmVudCBmaXJlcyBpbW1lZGlhdGVseSB3aGVuIHRoZSBgc2hvd2AgaW5zdGFuY2UgbWV0aG9kIGlzIGNhbGxlZC4gKi9cbiAgQE91dHB1dCgpXG4gIG9uU2hvdzogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vZGFsIGhhcyBiZWVuIG1hZGUgdmlzaWJsZSB0byB0aGUgdXNlclxuICAgKiAod2lsbCB3YWl0IGZvciBDU1MgdHJhbnNpdGlvbnMgdG8gY29tcGxldGUpXG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIGltbWVkaWF0ZWx5IHdoZW5cbiAgICogdGhlIGhpZGUgaW5zdGFuY2UgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkhpZGU6IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xuICAvKiogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtb2RhbCBoYXMgZmluaXNoZWQgYmVpbmdcbiAgICogaGlkZGVuIGZyb20gdGhlIHVzZXIgKHdpbGwgd2FpdCBmb3IgQ1NTIHRyYW5zaXRpb25zIHRvIGNvbXBsZXRlKS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XG5cbiAgLyoqIFRoaXMgZmllbGQgY29udGFpbnMgbGFzdCBkaXNtaXNzIHJlYXNvbi5cbiAgICogUG9zc2libGUgdmFsdWVzOiBgYmFja2Ryb3AtY2xpY2tgLCBgZXNjYCBhbmQgYG51bGxgXG4gICAqIChpZiBtb2RhbCB3YXMgY2xvc2VkIGJ5IGRpcmVjdCBjYWxsIG9mIGAuaGlkZSgpYCkuXG4gICAqL1xuICBkaXNtaXNzUmVhc29uOiBzdHJpbmc7XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd247XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbmZpZzogTW9kYWxPcHRpb25zO1xuICBwcm90ZWN0ZWQgX2lzU2hvd24gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xuICBwcm90ZWN0ZWQgc2Nyb2xsYmFyV2lkdGggPSAwO1xuXG4gIHByb3RlY3RlZCB0aW1lckhpZGVNb2RhbCA9IDA7XG4gIHByb3RlY3RlZCB0aW1lclJtQmFja0Ryb3AgPSAwO1xuXG4gIC8vIHJlZmVyZW5jZSB0byBiYWNrZHJvcCBjb21wb25lbnRcbiAgcHJvdGVjdGVkIGJhY2tkcm9wOiBDb21wb25lbnRSZWY8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByaXZhdGUgX2JhY2tkcm9wOiBDb21wb25lbnRMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSBpc05lc3RlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9iYWNrZHJvcCA9IGNsZi5jcmVhdGVMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD4oXG4gICAgICBfZWxlbWVudCxcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmlnbm9yZUJhY2tkcm9wQ2xpY2sgfHxcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJyB8fFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kaXNtaXNzUmVhc29uID0gRElTTUlTU19SRUFTT05TLkJBQ0tSRE9QO1xuICAgIHRoaXMuaGlkZShldmVudCk7XG4gIH1cblxuICAvLyB0b2RvOiBjb25zaWRlciBwcmV2ZW50aW5nIGRlZmF1bHQgYW5kIHN0b3BwaW5nIHByb3BhZ2F0aW9uXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjJywgWyckZXZlbnQnXSlcbiAgb25Fc2MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBESVNNSVNTX1JFQVNPTlMuRVNDO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb25maWcgPSB2b2lkIDA7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fY29uZmlnIHx8IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnNob3cpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4gIC8qKiBBbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIG1vZGFsIHZpc2liaWxpdHkgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKiBBbGxvd3MgdG8gbWFudWFsbHkgb3BlbiBtb2RhbCAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzbWlzc1JlYXNvbiA9IG51bGw7XG4gICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lckhpZGVNb2RhbCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJSbUJhY2tEcm9wKTtcblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5jaGVja1Njcm9sbGJhcigpO1xuICAgIHRoaXMuc2V0U2Nyb2xsYmFyKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUUuT1BFTikpIHtcbiAgICAgICAgdGhpcy5pc05lc3RlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0VsZW1lbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBbGxvd3MgdG8gbWFudWFsbHkgY2xvc2UgbW9kYWwgKi9cbiAgaGlkZShldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHRoaXMub25IaWRlLmVtaXQodGhpcyk7XG5cbiAgICAvLyB0b2RvOiBhZGQgYW4gb3B0aW9uIHRvIHByZXZlbnQgaGlkaW5nXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVySGlkZU1vZGFsKTtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJSbUJhY2tEcm9wKTtcblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuSU4pO1xuICAgIGlmICghaXNCczMoKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLlNIT1cpO1xuICAgIH1cbiAgICAvLyB0aGlzLl9hZGRDbGFzc0luID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XG4gICAgICB0aGlzLnRpbWVySGlkZU1vZGFsID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHRoaXMuaGlkZU1vZGFsKCksXG4gICAgICAgIFRSQU5TSVRJT05fRFVSQVRJT05cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByaXZhdGUgbWV0aG9kcyBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIGdldENvbmZpZyhjb25maWc/OiBNb2RhbE9wdGlvbnMpOiBNb2RhbE9wdGlvbnMge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqICBTaG93IGRpYWxvZ1xuICAgKiAgQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgc2hvd0VsZW1lbnQoKTogdm9pZCB7XG4gICAgLy8gdG9kbzogcmVwbGFjZSB0aGlzIHdpdGggY29tcG9uZW50IGxvYWRlciB1c2FnZVxuICAgIGlmIChcbiAgICAgICF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSB8fFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgKSB7XG4gICAgICAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYXJpYS1oaWRkZW4nLFxuICAgICAgJ2ZhbHNlJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2FyaWEtbW9kYWwnLFxuICAgICAgJ3RydWUnXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdkaXNwbGF5JyxcbiAgICAgICdibG9jaydcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAwXG4gICAgKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcbiAgICAgIFV0aWxzLnJlZmxvdyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuX2FkZENsYXNzSW4gPSB0cnVlO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5JTik7XG4gICAgaWYgKCFpc0JzMygpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuU0hPVyk7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRoaXMpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25Db21wbGV0ZSwgVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIGhpZGVNb2RhbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYXJpYS1oaWRkZW4nLFxuICAgICAgJ3RydWUnXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdkaXNwbGF5JyxcbiAgICAgICdub25lJ1xuICAgICk7XG4gICAgdGhpcy5zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgQ0xBU1NfTkFNRS5PUEVOKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2V0QWRqdXN0bWVudHMoKTtcbiAgICAgIHRoaXMuZm9jdXNPdGhlck1vZGFsKCk7XG4gICAgICB0aGlzLm9uSGlkZGVuLmVtaXQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyB0b2RvOiBvcmlnaW5hbCBzaG93IHdhcyBjYWxsaW5nIGEgY2FsbGJhY2sgd2hlbiBkb25lLCBidXQgd2UgY2FuIHVzZVxuICAvLyBwcm9taXNlXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHNob3dCYWNrZHJvcChjYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5faXNTaG93biAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgJiZcbiAgICAgICghdGhpcy5iYWNrZHJvcCB8fCAhdGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc1Nob3duKVxuICAgICkge1xuICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xuICAgICAgdGhpcy5fYmFja2Ryb3BcbiAgICAgICAgLmF0dGFjaChNb2RhbEJhY2tkcm9wQ29tcG9uZW50KVxuICAgICAgICAudG8oJ2JvZHknKVxuICAgICAgICAuc2hvdyh7aXNBbmltYXRlZDogdGhpcy5fY29uZmlnLmFuaW1hdGVkfSk7XG4gICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy5fYmFja2Ryb3AuX2NvbXBvbmVudFJlZjtcblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duICYmIHRoaXMuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc0FuaW1hdGVkKSB7XG4gICAgICAgIHRoaXMudGltZXJSbUJhY2tEcm9wID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgY2FsbGJhY2tSZW1vdmUsXG4gICAgICAgICAgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHJlbW92ZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKTtcbiAgfVxuXG4gIC8qKiBFdmVudHMgdHJpY2tzICovXG5cbiAgLy8gbm8gbmVlZCBmb3IgaXRcbiAgLy8gcHJvdGVjdGVkIHNldEVzY2FwZUV2ZW50KCk6dm9pZCB7XG4gIC8vICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gIC8vICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LktFWURPV05fRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gIC8vICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcpIHtcbiAgLy8gICAgICAgICB0aGlzLmhpZGUoKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvL1xuICAvLyAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgLy8gICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LktFWURPV05fRElTTUlTUylcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBwcm90ZWN0ZWQgc2V0UmVzaXplRXZlbnQoKTp2b2lkIHtcbiAgLy8gY29uc29sZS5sb2codGhpcy5yZW5kZXJlci5saXN0ZW5HbG9iYWwoJycsIEV2ZW50LlJFU0laRSkpO1xuICAvLyBpZiAodGhpcy5faXNTaG93bikge1xuICAvLyAgICQod2luZG93KS5vbihFdmVudC5SRVNJWkUsICQucHJveHkodGhpcy5faGFuZGxlVXBkYXRlLCB0aGlzKSlcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICAkKHdpbmRvdykub2ZmKEV2ZW50LlJFU0laRSlcbiAgLy8gfVxuICAvLyB9XG5cbiAgcHJvdGVjdGVkIGZvY3VzT3RoZXJNb2RhbCgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvdGhlck9wZW5lZE1vZGFscyA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbltic01vZGFsXScpO1xuICAgIGlmICghb3RoZXJPcGVuZWRNb2RhbHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG90aGVyT3BlbmVkTW9kYWxzW290aGVyT3BlbmVkTW9kYWxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCByZXNldEFkanVzdG1lbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ3BhZGRpbmdMZWZ0JyxcbiAgICAgICcnXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdwYWRkaW5nUmlnaHQnLFxuICAgICAgJydcbiAgICApO1xuICB9XG5cbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIGNoZWNrU2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkZGluZyA9IHBhcnNlSW50KFxuICAgICAgd2luZG93XG4gICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykgfHwgMCxcbiAgICAgIDEwXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArXG4gICAgICB0aGlzLnNjcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmd9cHhgO1xuICB9XG5cbiAgLy8gdGh4IGQud2Fsc2hcbiAgcHJvdGVjdGVkIGdldFNjcm9sbGJhcldpZHRoKCk6IG51bWJlciB7XG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc2Nyb2xsRGl2LCBDTEFTU19OQU1FLlNDUk9MTEJBUl9NRUFTVVJFUik7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5MlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDTEFTU19OQU1FLFxuICBtb2RhbENvbmZpZ0RlZmF1bHRzLFxuICBNb2RhbE9wdGlvbnMsXG4gIFRSQU5TSVRJT05fRFVSQVRJT05TXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnLi9icy1tb2RhbC1yZWYuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc01vZGFsU2VydmljZSB7XG4gIC8vIGNvbnN0cnVjdG9yIHByb3BzXG4gIGNvbmZpZzogTW9kYWxPcHRpb25zID0gbW9kYWxDb25maWdEZWZhdWx0cztcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gIHByb3RlY3RlZCBvcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcblxuICBwcm90ZWN0ZWQgc2Nyb2xsYmFyV2lkdGggPSAwO1xuXG4gIHByb3RlY3RlZCBiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcml2YXRlIF9iYWNrZHJvcExvYWRlcjogQ29tcG9uZW50TG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcml2YXRlIG1vZGFsc0NvdW50ID0gMDtcbiAgcHJpdmF0ZSBsYXN0RGlzbWlzc1JlYXNvbiA9ICcnO1xuXG4gIHByaXZhdGUgbG9hZGVyczogQ29tcG9uZW50TG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PltdID0gW107XG5cbiAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIHByaXZhdGUgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD4oXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGxcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgLyoqIFNob3dzIGEgbW9kYWwgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzaG93KGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBhbnksIGNvbmZpZz86IE1vZGFsT3B0aW9ucyk6IEJzTW9kYWxSZWYge1xuICAgIHRoaXMubW9kYWxzQ291bnQrKztcbiAgICB0aGlzLl9jcmVhdGVMb2FkZXJzKCk7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgpO1xuICAgIHRoaXMubGFzdERpc21pc3NSZWFzb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dNb2RhbChjb250ZW50KTtcbiAgfVxuXG4gIGhpZGUobGV2ZWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9oaWRlQmFja2Ryb3AoKTtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICB9XG4gICAgdGhpcy5tb2RhbHNDb3VudCA9IHRoaXMubW9kYWxzQ291bnQgPj0gMSA/IHRoaXMubW9kYWxzQ291bnQgLSAxIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbChsZXZlbCk7XG4gICAgICB0aGlzLnJlbW92ZUxvYWRlcnMobGV2ZWwpO1xuICAgIH0sIHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoKTogdm9pZCB7XG4gICAgY29uc3QgaXNCYWNrZHJvcEVuYWJsZWQgPVxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgfHwgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnO1xuICAgIGNvbnN0IGlzQmFja2Ryb3BJbkRPTSA9XG4gICAgICAhdGhpcy5iYWNrZHJvcFJlZiB8fCAhdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duO1xuXG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcblxuICAgICAgaWYgKGlzQmFja2Ryb3BFbmFibGVkICYmIGlzQmFja2Ryb3BJbkRPTSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcExvYWRlclxuICAgICAgICAgIC5hdHRhY2goTW9kYWxCYWNrZHJvcENvbXBvbmVudClcbiAgICAgICAgICAudG8oJ2JvZHknKVxuICAgICAgICAgIC5zaG93KHsgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQgfSk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BSZWYgPSB0aGlzLl9iYWNrZHJvcExvYWRlci5fY29tcG9uZW50UmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3BSZWYuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZUJhY2tkcm9wKCksIGR1cmF0aW9uKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIF9zaG93TW9kYWwoY29udGVudDogYW55KTogQnNNb2RhbFJlZiB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbdGhpcy5sb2FkZXJzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGJzTW9kYWxSZWYgPSBuZXcgQnNNb2RhbFJlZigpO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyUmVmID0gbW9kYWxMb2FkZXJcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogTW9kYWxPcHRpb25zLCB1c2VWYWx1ZTogdGhpcy5jb25maWcgfSlcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogQnNNb2RhbFJlZiwgdXNlVmFsdWU6IGJzTW9kYWxSZWYgfSlcbiAgICAgIC5hdHRhY2goTW9kYWxDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8oJ2JvZHknKVxuICAgICAgLnNob3coe2NvbnRlbnQsIGlzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkLCBpbml0aWFsU3RhdGU6IHRoaXMuY29uZmlnLmluaXRpYWxTdGF0ZSwgYnNNb2RhbFNlcnZpY2U6IHRoaXN9KTtcbiAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5sZXZlbCA9IHRoaXMuZ2V0TW9kYWxzQ291bnQoKTtcbiAgICBic01vZGFsUmVmLmhpZGUgPSAoKSA9PiB7XG4gICAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5oaWRlKCk7XG4gICAgfTtcbiAgICBic01vZGFsUmVmLmNvbnRlbnQgPSBtb2RhbExvYWRlci5nZXRJbm5lckNvbXBvbmVudCgpIHx8IG51bGw7XG4gICAgYnNNb2RhbFJlZi5zZXRDbGFzcyA9IChuZXdDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5jb25maWcuY2xhc3MgPSBuZXdDbGFzcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJzTW9kYWxSZWY7XG4gIH1cblxuICBfaGlkZU1vZGFsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1tsZXZlbCAtIDFdO1xuICAgIGlmIChtb2RhbExvYWRlcikge1xuICAgICAgbW9kYWxMb2FkZXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxzQ291bnQ7XG4gIH1cblxuICBzZXREaXNtaXNzUmVhc29uKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IHJlYXNvbjtcbiAgfVxuXG4gIHJlbW92ZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyLmhpZGUoKTtcbiAgICB0aGlzLmJhY2tkcm9wUmVmID0gbnVsbDtcbiAgfVxuXG4gIC8qKiBBRlRFUiBQUiBNRVJHRSBNT0RBTC5DT01QT05FTlQgV0lMTCBCRSBVU0lORyBUSElTIENPREUgKi9cbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICB9XG5cbiAgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8ICcwJyxcbiAgICAgIDEwXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmd9cHhgO1xuICB9XG5cbiAgLy8gdGh4IGQud2Fsc2hcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNjcm9sbERpdiwgQ0xBU1NfTkFNRS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcblxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUxvYWRlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlU2hvdywgdGhpcy5vblNob3cpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vblNob3duLCB0aGlzLm9uU2hvd24pO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZUhpZGUsIHRoaXMub25IaWRlKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25IaWRkZW4sIHRoaXMub25IaWRkZW4pO1xuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxvYWRlcnMobGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9hZGVycy5zcGxpY2UobGV2ZWwgLSAxLCAxKTtcbiAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaChcbiAgICAgIChsb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBsb2FkZXIuaW5zdGFuY2UubGV2ZWwgPSBpICsgMTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGNvcHlFdmVudChmcm9tOiBFdmVudEVtaXR0ZXI8YW55PiwgdG86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgZnJvbS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdG8uZW1pdCh0aGlzLmxhc3REaXNtaXNzUmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9icy1tb2RhbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcbiAgICBNb2RhbERpcmVjdGl2ZSxcbiAgICBNb2RhbENvbnRhaW5lckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbENvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1vZGFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbQnNNb2RhbFNlcnZpY2UsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsImlzQnMzIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIkhvc3RMaXN0ZW5lciIsIlV0aWxzIiwiRXZlbnRFbWl0dGVyIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tcG9uZW50TG9hZGVyRmFjdG9yeSIsIklucHV0IiwiT3V0cHV0IiwiUmVuZGVyZXJGYWN0b3J5MiIsIlBvc2l0aW9uaW5nU2VydmljZSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7O3dCQWFxQixRQUFROzs7OzRCQUlZLFFBQVE7OztvQkFmaERBLGVBQVU7O3lCQUZYOzs7Ozs7O0FDQUEsUUFBQTtRQUdFLDhCQUFZLE9BQTZCOzJCQUYvQixJQUFJO1lBR1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDOUI7bUNBTEg7UUFNQzs7Ozs7O0FDTkQ7Ozs7b0JBR0NBLGVBQVU7OzJCQUhYOztJQXVDTyxxQkFBTSxtQkFBbUIsR0FBaUI7UUFDL0MsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLEtBQUs7UUFDWCxtQkFBbUIsRUFBRSxLQUFLO1FBQzFCLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLElBQUk7UUFDZCxZQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDO0FBRUYseUJBQWEsVUFBVSxHQUFjO1FBQ25DLGtCQUFrQixFQUFFLHlCQUF5QjtRQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osRUFBRSxFQUFFLElBQUk7O1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0FBRUYsSUFPTyxxQkFBTSxvQkFBb0IsR0FBd0I7UUFDdkQsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztLQUNkLENBQUM7QUFFRixJQUFPLHFCQUFNLGVBQWUsR0FBbUI7UUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixHQUFHLEVBQUUsS0FBSztLQUNYLENBQUM7Ozs7OztBQzFFRjtRQXlDRSxpQ0FBWSxPQUFxQixFQUNYLFFBQW9CLEVBQ3RCO1lB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