(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/utils', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].utils = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var Trigger = (function () {
        function Trigger(open, close) {
            this.open = open;
            this.close = close || open;
        }
        /**
         * @return {?}
         */
        Trigger.prototype.isManual = /**
         * @return {?}
         */
            function () {
                return this.open === 'manual' || this.close === 'manual';
            };
        return Trigger;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DEFAULT_ALIASES = {
        hover: ['mouseover', 'mouseout'],
        focus: ['focusin', 'focusout']
    };
    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */
    function parseTriggers(triggers, aliases) {
        if (aliases === void 0) {
            aliases = DEFAULT_ALIASES;
        }
        var /** @type {?} */ trimmedTriggers = (triggers || '').trim();
        if (trimmedTriggers.length === 0) {
            return [];
        }
        var /** @type {?} */ parsedTriggers = trimmedTriggers
            .split(/\s+/)
            .map(function (trigger) { return trigger.split(':'); })
            .map(function (triggerPair) {
            var /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
            return new Trigger(alias[0], alias[1]);
        });
        var /** @type {?} */ manualTriggers = parsedTriggers.filter(function (triggerPair) {
            return triggerPair.isManual();
        });
        if (manualTriggers.length > 1) {
            throw new Error('Triggers parse error: only one manual trigger is allowed');
        }
        if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
            throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
        }
        return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} target
     * @param {?} triggers
     * @param {?} showFn
     * @param {?} hideFn
     * @param {?} toggleFn
     * @return {?}
     */
    function listenToTriggers(renderer, /* tslint:disable-next-line: no-any */ 
    /* tslint:disable-next-line: no-any */
    target, triggers, showFn, hideFn, toggleFn) {
        var /** @type {?} */ parsedTriggers = parseTriggers(triggers);
        /* tslint:disable-next-line: no-any */
        var /** @type {?} */ listeners = [];
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return Function.prototype;
        }
        parsedTriggers.forEach(function (trigger) {
            if (trigger.open === trigger.close) {
                listeners.push(renderer.listen(target, trigger.open, toggleFn));
                return;
            }
            listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
        });
        return function () {
            listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
        };
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function listenToTriggersV2(renderer, options) {
        var /** @type {?} */ parsedTriggers = parseTriggers(options.triggers);
        var /** @type {?} */ target = options.target;
        // do nothing
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return Function.prototype;
        }
        // all listeners
        /* tslint:disable-next-line: no-any */
        var /** @type {?} */ listeners = [];
        // lazy listeners registration
        var /** @type {?} */ _registerHide = [];
        var /** @type {?} */ registerHide = function () {
            // add hide listeners to unregister array
            _registerHide.forEach(function (fn) { return listeners.push(fn()); });
            // register hide events only once
            _registerHide.length = 0;
        };
        // register open\close\toggle listeners
        parsedTriggers.forEach(function (trigger) {
            var /** @type {?} */ useToggle = trigger.open === trigger.close;
            var /** @type {?} */ showFn = useToggle ? options.toggle : options.show;
            if (!useToggle) {
                _registerHide.push(function () {
                    return renderer.listen(target, trigger.close, options.hide);
                });
            }
            listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
        });
        return function () {
            listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
        };
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function registerOutsideClick(renderer, options) {
        if (!options.outsideClick) {
            return Function.prototype;
        }
        /* tslint:disable-next-line: no-any */
        return renderer.listen('document', 'click', function (event) {
            if (options.target && options.target.contains(event.target)) {
                return undefined;
            }
            if (options.targets &&
                options.targets.some(function (target) { return target.contains(event.target); })) {
                return undefined;
            }
            options.hide();
        });
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function registerEscClick(renderer, options) {
        if (!options.outsideEsc) {
            return Function.prototype;
        }
        return renderer.listen('document', 'keyup.esc', function (event) {
            if (options.target && options.target.contains(event.target)) {
                return undefined;
            }
            if (options.targets &&
                options.targets.some(function (target) { return target.contains(event.target); })) {
                return undefined;
            }
            options.hide();
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * JS version of browser APIs. This library can only run in the browser.
     */
    var /** @type {?} */ win = (typeof window !== 'undefined' && window) || /** @type {?} */ ({});
    var /** @type {?} */ document$1 = win.document;
    var /** @type {?} */ location = win.location;
    var /** @type {?} */ gc = win.gc ? function () { return win.gc(); } : function () { return null; };
    var /** @type {?} */ performance = win.performance ? win.performance : null;
    var /** @type {?} */ Event = win.Event;
    var /** @type {?} */ MouseEvent = win.MouseEvent;
    var /** @type {?} */ KeyboardEvent = win.KeyboardEvent;
    var /** @type {?} */ EventTarget = win.EventTarget;
    var /** @type {?} */ History = win.History;
    var /** @type {?} */ Location = win.Location;
    var /** @type {?} */ EventListener = win.EventListener;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ guessedVersion;
    /**
     * @return {?}
     */
    function _guessBsVersion() {
        if (typeof document === 'undefined') {
            return null;
        }
        var /** @type {?} */ spanEl = document.createElement('span');
        spanEl.innerText = 'test bs version';
        document.body.appendChild(spanEl);
        spanEl.classList.add('d-none');
        var /** @type {?} */ rect = spanEl.getBoundingClientRect();
        document.body.removeChild(spanEl);
        if (!rect) {
            return 'bs3';
        }
        return rect.top === 0 ? 'bs4' : 'bs3';
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    function setTheme(theme) {
        guessedVersion = theme;
    }
    /**
     * @return {?}
     */
    function isBs3() {
        if (typeof win === 'undefined') {
            return true;
        }
        if (typeof win.__theme === 'undefined') {
            if (guessedVersion) {
                return guessedVersion === 'bs3';
            }
            guessedVersion = _guessBsVersion();
            return guessedVersion === 'bs3';
        }
        return win.__theme !== 'bs4';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ LinkedList = (function () {
        function LinkedList() {
            this.length = 0;
            this.asArray = [];
        }
        /**
         * @param {?} position
         * @return {?}
         */
        LinkedList.prototype.get = /**
         * @param {?} position
         * @return {?}
         */
            function (position) {
                if (this.length === 0 || position < 0 || position >= this.length) {
                    return void 0;
                }
                var /** @type {?} */ current = this.head;
                for (var /** @type {?} */ index = 0; index < position; index++) {
                    current = current.next;
                }
                return current.value;
            };
        /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */
        LinkedList.prototype.add = /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */
            function (value, position) {
                if (position === void 0) {
                    position = this.length;
                }
                if (position < 0 || position > this.length) {
                    throw new Error('Position is out of the list');
                }
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ node = {
                    value: value,
                    next: undefined,
                    previous: undefined
                };
                if (this.length === 0) {
                    this.head = node;
                    this.tail = node;
                    this.current = node;
                }
                else {
                    if (position === 0) {
                        // first node
                        node.next = this.head;
                        this.head.previous = node;
                        this.head = node;
                    }
                    else if (position === this.length) {
                        // last node
                        this.tail.next = node;
                        node.previous = this.tail;
                        this.tail = node;
                    }
                    else {
                        // node in middle
                        var /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                        var /** @type {?} */ currentNextNode = currentPreviousNode.next;
                        currentPreviousNode.next = node;
                        currentNextNode.previous = node;
                        node.previous = currentPreviousNode;
                        node.next = currentNextNode;
                    }
                }
                this.length++;
                this.createInternalArrayRepresentation();
            };
        /**
         * @param {?=} position
         * @return {?}
         */
        LinkedList.prototype.remove = /**
         * @param {?=} position
         * @return {?}
         */
            function (position) {
                if (position === void 0) {
                    position = 0;
                }
                if (this.length === 0 || position < 0 || position >= this.length) {
                    throw new Error('Position is out of the list');
                }
                if (position === 0) {
                    // first node
                    this.head = this.head.next;
                    if (this.head) {
                        // there is no second node
                        this.head.previous = undefined;
                    }
                    else {
                        // there is no second node
                        this.tail = undefined;
                    }
                }
                else if (position === this.length - 1) {
                    // last node
                    this.tail = this.tail.previous;
                    this.tail.next = undefined;
                }
                else {
                    // middle node
                    var /** @type {?} */ removedNode = this.getNode(position);
                    removedNode.next.previous = removedNode.previous;
                    removedNode.previous.next = removedNode.next;
                }
                this.length--;
                this.createInternalArrayRepresentation();
            };
        /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */
        LinkedList.prototype.set = /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */
            function (position, value) {
                if (this.length === 0 || position < 0 || position >= this.length) {
                    throw new Error('Position is out of the list');
                }
                var /** @type {?} */ node = this.getNode(position);
                node.value = value;
                this.createInternalArrayRepresentation();
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.toArray = /**
         * @return {?}
         */
            function () {
                return this.asArray;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.findAll = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ result = [];
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (fn(current.value, index)) {
                        result.push({ index: index, value: current.value });
                    }
                    current = current.next;
                }
                return result;
            };
        // Array methods overriding start
        /**
         * @param {...?} args
         * @return {?}
         */
        LinkedList.prototype.push = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                /* tslint:disable-next-line: no-any*/
                args.forEach(function (arg) {
                    _this.add(arg);
                });
                return this.length;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.pop = /**
         * @return {?}
         */
            function () {
                if (this.length === 0) {
                    return undefined;
                }
                var /** @type {?} */ last = this.tail;
                this.remove(this.length - 1);
                return last.value;
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        LinkedList.prototype.unshift = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args.reverse();
                /* tslint:disable-next-line: no-any*/
                args.forEach(function (arg) {
                    _this.add(arg, 0);
                });
                return this.length;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.shift = /**
         * @return {?}
         */
            function () {
                if (this.length === 0) {
                    return undefined;
                }
                var /** @type {?} */ lastItem = this.head.value;
                this.remove();
                return lastItem;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.forEach = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    fn(current.value, index);
                    current = current.next;
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        LinkedList.prototype.indexOf = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ position = 0;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (current.value === value) {
                        position = index;
                        break;
                    }
                    current = current.next;
                }
                return position;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.some = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result = false;
                while (current && !result) {
                    if (fn(current.value)) {
                        result = true;
                        break;
                    }
                    current = current.next;
                }
                return result;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.every = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result = true;
                while (current && result) {
                    if (!fn(current.value)) {
                        result = false;
                    }
                    current = current.next;
                }
                return result;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.toString = /**
         * @return {?}
         */
            function () {
                return '[Linked List]';
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.find = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (fn(current.value, index)) {
                        result = current.value;
                        break;
                    }
                    current = current.next;
                }
                return result;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        LinkedList.prototype.findIndex = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var /** @type {?} */ current = this.head;
                var /** @type {?} */ result;
                for (var /** @type {?} */ index = 0; index < this.length; index++) {
                    if (fn(current.value, index)) {
                        result = index;
                        break;
                    }
                    current = current.next;
                }
                return result;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} position
         * @return {?}
         */
        LinkedList.prototype.getNode = /**
         * @param {?} position
         * @return {?}
         */
            function (position) {
                if (this.length === 0 || position < 0 || position >= this.length) {
                    throw new Error('Position is out of the list');
                }
                var /** @type {?} */ current = this.head;
                for (var /** @type {?} */ index = 0; index < position; index++) {
                    current = current.next;
                }
                return current;
            };
        /**
         * @return {?}
         */
        LinkedList.prototype.createInternalArrayRepresentation = /**
         * @return {?}
         */
            function () {
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ outArray = [];
                var /** @type {?} */ current = this.head;
                while (current) {
                    outArray.push(current.value);
                    current = current.next;
                }
                this.asArray = outArray;
            };
        return LinkedList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} defaultValue
     * @return {?}
     */
    function OnChange(defaultValue) {
        var /** @type {?} */ sufix = 'Change';
        /* tslint:disable-next-line: no-any */
        return function OnChangeHandler(target, propertyKey) {
            var /** @type {?} */ _key = " __" + propertyKey + "Value";
            Object.defineProperty(target, propertyKey, {
                /* tslint:disable-next-line: no-any */
                get: /**
                 * @return {?}
                 */ function () {
                    return this[_key];
                },
                /* tslint:disable-next-line: no-any */
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    var /** @type {?} */ prevValue = this[_key];
                    this[_key] = value;
                    if (prevValue !== value && this[propertyKey + sufix]) {
                        this[propertyKey + sufix].emit(value);
                    }
                }
            });
        };
    }
    /* tslint:enable */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Utils = (function () {
        function Utils() {
        }
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} element
         * @return {?}
         */
        Utils.reflow = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /* tslint:disable-next-line: no-any */
                (function (bs) { return bs; })(element.offsetHeight);
            };
        // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} elem
         * @return {?}
         */
        Utils.getStyles = /**
         * @param {?} elem
         * @return {?}
         */
            function (elem) {
                // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
                // IE throws on elements created in popups
                // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
                var /** @type {?} */ view = elem.ownerDocument.defaultView;
                if (!view || !view.opener) {
                    view = win;
                }
                return view.getComputedStyle(elem);
            };
        return Utils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ _messagesHash = {};
    var /** @type {?} */ _hideMsg = typeof console === 'undefined' || !('warn' in console);
    /**
     * @param {?} msg
     * @return {?}
     */
    function warnOnce(msg) {
        if (!core.isDevMode() || _hideMsg || msg in _messagesHash) {
            return;
        }
        _messagesHash[msg] = true;
        /*tslint:disable-next-line*/
        console.warn(msg);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.isBs3 = isBs3;
    exports.LinkedList = LinkedList;
    exports.listenToTriggersV2 = listenToTriggersV2;
    exports.registerOutsideClick = registerOutsideClick;
    exports.registerEscClick = registerEscClick;
    exports.OnChange = OnChange;
    exports.setTheme = setTheme;
    exports.Trigger = Trigger;
    exports.Utils = Utils;
    exports.window = win;
    exports.document = document$1;
    exports.warnOnce = warnOnce;
    exports.parseTriggers = parseTriggers;
    exports.listenToTriggers = listenToTriggers;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC11dGlscy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvdXRpbHMvdHJpZ2dlci5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90cmlnZ2Vycy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9mYWNhZGUvYnJvd3Nlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90aGVtZS1wcm92aWRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9saW5rZWQtbGlzdC5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9kZWNvcmF0b3JzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3V0aWxzLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3dhcm4tb25jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5cbmV4cG9ydCBjbGFzcyBUcmlnZ2VyIHtcbiAgb3Blbjogc3RyaW5nO1xuICBjbG9zZT86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihvcGVuOiBzdHJpbmcsIGNsb3NlPzogc3RyaW5nKSB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLmNsb3NlID0gY2xvc2UgfHwgb3BlbjtcbiAgfVxuXG4gIGlzTWFudWFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4gPT09ICdtYW51YWwnIHx8IHRoaXMuY2xvc2UgPT09ICdtYW51YWwnO1xuICB9XG59XG4iLCIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyaWdnZXIgfSBmcm9tICcuL3RyaWdnZXIuY2xhc3MnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IHR5cGUgQnNFdmVudENhbGxiYWNrID0gKGV2ZW50PzogYW55KSA9PiBib29sZWFuIHwgdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5PcHRpb25zIHtcbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQ7XG4gIHRhcmdldHM/OiBIVE1MRWxlbWVudFtdO1xuICB0cmlnZ2Vycz86IHN0cmluZztcbiAgb3V0c2lkZUNsaWNrPzogYm9vbGVhbjtcbiAgb3V0c2lkZUVzYz86IGJvb2xlYW47XG4gIHNob3c/OiBCc0V2ZW50Q2FsbGJhY2s7XG4gIGhpZGU/OiBCc0V2ZW50Q2FsbGJhY2s7XG4gIHRvZ2dsZT86IEJzRXZlbnRDYWxsYmFjaztcbn1cblxuY29uc3QgREVGQVVMVF9BTElBU0VTID0ge1xuICBob3ZlcjogWydtb3VzZW92ZXInLCAnbW91c2VvdXQnXSxcbiAgZm9jdXM6IFsnZm9jdXNpbicsICdmb2N1c291dCddXG59O1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJpZ2dlcnModHJpZ2dlcnM6IHN0cmluZywgYWxpYXNlczogYW55ID0gREVGQVVMVF9BTElBU0VTKTogVHJpZ2dlcltdIHtcbiAgY29uc3QgdHJpbW1lZFRyaWdnZXJzID0gKHRyaWdnZXJzIHx8ICcnKS50cmltKCk7XG5cbiAgaWYgKHRyaW1tZWRUcmlnZ2Vycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHRyaW1tZWRUcmlnZ2Vyc1xuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgodHJpZ2dlcjogc3RyaW5nKSA9PiB0cmlnZ2VyLnNwbGl0KCc6JykpXG4gICAgLm1hcCgodHJpZ2dlclBhaXI6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCBhbGlhcyA9IGFsaWFzZXNbdHJpZ2dlclBhaXJbMF1dIHx8IHRyaWdnZXJQYWlyO1xuXG4gICAgICByZXR1cm4gbmV3IFRyaWdnZXIoYWxpYXNbMF0sIGFsaWFzWzFdKTtcbiAgICB9KTtcblxuICBjb25zdCBtYW51YWxUcmlnZ2VycyA9IHBhcnNlZFRyaWdnZXJzLmZpbHRlcigodHJpZ2dlclBhaXI6IFRyaWdnZXIpID0+XG4gICAgdHJpZ2dlclBhaXIuaXNNYW51YWwoKVxuICApO1xuXG4gIGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmlnZ2VycyBwYXJzZSBlcnJvcjogb25seSBvbmUgbWFudWFsIHRyaWdnZXIgaXMgYWxsb3dlZCcpO1xuICB9XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmlnZ2VycyBwYXJzZSBlcnJvcjogbWFudWFsIHRyaWdnZXIgY2FuXFwndCBiZSBtaXhlZCB3aXRoIG90aGVyIHRyaWdnZXJzJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkVHJpZ2dlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vyczogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZuOiBCc0V2ZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRm46IEJzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUZuOiBCc0V2ZW50Q2FsbGJhY2spOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vycyk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNvbnN0IGxpc3RlbmVyczogYW55W10gPSBbXTtcblxuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgIGlmICh0cmlnZ2VyLm9wZW4gPT09IHRyaWdnZXIuY2xvc2UpIHtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgdG9nZ2xlRm4pKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCBzaG93Rm4pLFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgaGlkZUZuKVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHVuc3Vic2NyaWJlRm46IEZ1bmN0aW9uKSA9PiB1bnN1YnNjcmliZUZuKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9UcmlnZ2Vyc1YyKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2VycyhvcHRpb25zLnRyaWdnZXJzKTtcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG4gIC8vIGRvIG5vdGhpbmdcbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIC8vIGFsbCBsaXN0ZW5lcnNcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIGxhenkgbGlzdGVuZXJzIHJlZ2lzdHJhdGlvblxuICBjb25zdCBfcmVnaXN0ZXJIaWRlOiBGdW5jdGlvbltdID0gW107XG4gIGNvbnN0IHJlZ2lzdGVySGlkZSA9ICgpID0+IHtcbiAgICAvLyBhZGQgaGlkZSBsaXN0ZW5lcnMgdG8gdW5yZWdpc3RlciBhcnJheVxuICAgIF9yZWdpc3RlckhpZGUuZm9yRWFjaCgoZm46IEZ1bmN0aW9uKSA9PiBsaXN0ZW5lcnMucHVzaChmbigpKSk7XG4gICAgLy8gcmVnaXN0ZXIgaGlkZSBldmVudHMgb25seSBvbmNlXG4gICAgX3JlZ2lzdGVySGlkZS5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8vIHJlZ2lzdGVyIG9wZW5cXGNsb3NlXFx0b2dnbGUgbGlzdGVuZXJzXG4gIHBhcnNlZFRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcbiAgICBjb25zdCB1c2VUb2dnbGUgPSB0cmlnZ2VyLm9wZW4gPT09IHRyaWdnZXIuY2xvc2U7XG4gICAgY29uc3Qgc2hvd0ZuID0gdXNlVG9nZ2xlID8gb3B0aW9ucy50b2dnbGUgOiBvcHRpb25zLnNob3c7XG5cbiAgICBpZiAoIXVzZVRvZ2dsZSkge1xuICAgICAgX3JlZ2lzdGVySGlkZS5wdXNoKCgpID0+XG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIuY2xvc2UsIG9wdGlvbnMuaGlkZSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sICgpID0+IHNob3dGbihyZWdpc3RlckhpZGUpKVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHVuc3Vic2NyaWJlRm46IEZ1bmN0aW9uKSA9PiB1bnN1YnNjcmliZUZuKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJPdXRzaWRlQ2xpY2socmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vdXRzaWRlQ2xpY2spIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgcmV0dXJuIHJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChvcHRpb25zLnRhcmdldCAmJiBvcHRpb25zLnRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnRhcmdldHMgJiZcbiAgICAgIG9wdGlvbnMudGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5oaWRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFc2NDbGljayhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub3V0c2lkZUVzYykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdrZXl1cC5lc2MnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChvcHRpb25zLnRhcmdldCAmJiBvcHRpb25zLnRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnRhcmdldHMgJiZcbiAgICAgIG9wdGlvbnMudGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5oaWRlKCk7XG4gIH0pO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxuICovXG5jb25zdCB3aW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCB7fSBhcyBhbnk7XG5cbmV4cG9ydCB7IHdpbiBhcyB3aW5kb3cgfTtcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IHdpbi5kb2N1bWVudDtcbmV4cG9ydCBjb25zdCBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbmV4cG9ydCBjb25zdCBnYyA9IHdpbi5nYyA/ICgpID0+IHdpbi5nYygpIDogKCk6IGFueSA9PiBudWxsO1xuZXhwb3J0IGNvbnN0IHBlcmZvcm1hbmNlID0gd2luLnBlcmZvcm1hbmNlID8gd2luLnBlcmZvcm1hbmNlIDogbnVsbDtcbmV4cG9ydCBjb25zdCBFdmVudCA9IHdpbi5FdmVudDtcbmV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luLk1vdXNlRXZlbnQ7XG5leHBvcnQgY29uc3QgS2V5Ym9hcmRFdmVudCA9IHdpbi5LZXlib2FyZEV2ZW50O1xuZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luLkV2ZW50VGFyZ2V0O1xuZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW4uSGlzdG9yeTtcbmV4cG9ydCBjb25zdCBMb2NhdGlvbiA9IHdpbi5Mb2NhdGlvbjtcbmV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luLkV2ZW50TGlzdGVuZXI7XG4iLCJpbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuL2ZhY2FkZS9icm93c2VyJztcblxubGV0IGd1ZXNzZWRWZXJzaW9uOiAnYnMzJyB8ICdiczQnO1xuXG5mdW5jdGlvbiBfZ3Vlc3NCc1ZlcnNpb24oKTogJ2JzMycgfCAnYnM0JyB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3Qgc3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuRWwuaW5uZXJUZXh0ID0gJ3Rlc3QgYnMgdmVyc2lvbic7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbkVsKTtcbiAgc3BhbkVsLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICBjb25zdCByZWN0ID0gc3BhbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNwYW5FbCk7XG4gIGlmICghcmVjdCkge1xuICAgIHJldHVybiAnYnMzJztcbiAgfVxuXG4gIHJldHVybiByZWN0LnRvcCA9PT0gMCA/ICdiczQnIDogJ2JzMyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZTogJ2JzMycgfCAnYnM0Jyk6IHZvaWQge1xuICBndWVzc2VkVmVyc2lvbiA9IHRoZW1lO1xufVxuXG4vLyB0b2RvOiBpbiBuZ3gtYm9vdHN0cmFwLCBiczQgd2lsbCBiZWNhbWUgYSBkZWZhdWx0IG9uZVxuZXhwb3J0IGZ1bmN0aW9uIGlzQnMzKCk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93Ll9fdGhlbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGd1ZXNzZWRWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NlZFZlcnNpb24gPT09ICdiczMnO1xuICAgIH1cbiAgICBndWVzc2VkVmVyc2lvbiA9IF9ndWVzc0JzVmVyc2lvbigpO1xuXG4gICAgcmV0dXJuIGd1ZXNzZWRWZXJzaW9uID09PSAnYnMzJztcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuX190aGVtZSAhPT0gJ2JzNCc7XG59XG4iLCJleHBvcnQgY2xhc3MgTGlua2VkTGlzdDxUPiB7XG4gIGxlbmd0aCA9IDA7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcHJvdGVjdGVkIGhlYWQ6IGFueTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcm90ZWN0ZWQgdGFpbDogYW55O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByb3RlY3RlZCBjdXJyZW50OiBhbnk7XG4gIHByb3RlY3RlZCBhc0FycmF5OiBUW10gPSBbXTtcblxuICBnZXQocG9zaXRpb246IG51bWJlcik6IFQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9zaXRpb247IGluZGV4KyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnQudmFsdWU7XG4gIH1cblxuICBhZGQodmFsdWU6IFQsIHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmxlbmd0aCk6IHZvaWQge1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPiB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3Qgbm9kZTogYW55ID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBuZXh0OiB1bmRlZmluZWQsXG4gICAgICBwcmV2aW91czogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IDApIHtcbiAgICAgICAgLy8gZmlyc3Qgbm9kZVxuICAgICAgICBub2RlLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IG5vZGU7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAvLyBsYXN0IG5vZGVcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9kZSBpbiBtaWRkbGVcbiAgICAgICAgY29uc3QgY3VycmVudFByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbiAtIDEpO1xuICAgICAgICBjb25zdCBjdXJyZW50TmV4dE5vZGUgPSBjdXJyZW50UHJldmlvdXNOb2RlLm5leHQ7XG5cbiAgICAgICAgY3VycmVudFByZXZpb3VzTm9kZS5uZXh0ID0gbm9kZTtcbiAgICAgICAgY3VycmVudE5leHROb2RlLnByZXZpb3VzID0gbm9kZTtcblxuICAgICAgICBub2RlLnByZXZpb3VzID0gY3VycmVudFByZXZpb3VzTm9kZTtcbiAgICAgICAgbm9kZS5uZXh0ID0gY3VycmVudE5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxlbmd0aCsrO1xuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XG4gIH1cblxuICByZW1vdmUocG9zaXRpb24gPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPT09IDApIHtcbiAgICAgIC8vIGZpcnN0IG5vZGVcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuXG4gICAgICBpZiAodGhpcy5oZWFkKSB7XG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIHNlY29uZCBub2RlXG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIHNlY29uZCBub2RlXG4gICAgICAgIHRoaXMudGFpbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSB0aGlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIC8vIGxhc3Qgbm9kZVxuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgICAgdGhpcy50YWlsLm5leHQgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1pZGRsZSBub2RlXG4gICAgICBjb25zdCByZW1vdmVkTm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbik7XG4gICAgICByZW1vdmVkTm9kZS5uZXh0LnByZXZpb3VzID0gcmVtb3ZlZE5vZGUucHJldmlvdXM7XG4gICAgICByZW1vdmVkTm9kZS5wcmV2aW91cy5uZXh0ID0gcmVtb3ZlZE5vZGUubmV4dDtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aC0tO1xuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XG4gIH1cblxuICBzZXQocG9zaXRpb246IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24pO1xuICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xuICB9XG5cbiAgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLmFzQXJyYXk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGZpbmRBbGwoZm46IGFueSk6IGFueVtdIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xuICAgICAgICByZXN1bHQucHVzaCh7aW5kZXgsIHZhbHVlOiBjdXJyZW50LnZhbHVlfSk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBBcnJheSBtZXRob2RzIG92ZXJyaWRpbmcgc3RhcnRcbiAgcHVzaCguLi5hcmdzOiBUW10pOiBudW1iZXIge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XG4gICAgICB0aGlzLmFkZChhcmcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgcG9wKCk6IFQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgbGFzdCA9IHRoaXMudGFpbDtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmxlbmd0aCAtIDEpO1xuXG4gICAgcmV0dXJuIGxhc3QudmFsdWU7XG4gIH1cblxuICB1bnNoaWZ0KC4uLmFyZ3M6IFRbXSk6IG51bWJlciB7XG4gICAgYXJncy5yZXZlcnNlKCk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJnOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuYWRkKGFyZywgMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBzaGlmdCgpOiBUIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGxhc3RJdGVtID0gdGhpcy5oZWFkLnZhbHVlO1xuICAgIHRoaXMucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gbGFzdEl0ZW07XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGZvckVhY2goZm46IGFueSk6IHZvaWQge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gIH1cblxuICBpbmRleE9mKHZhbHVlOiBUKTogbnVtYmVyIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpbmRleDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc29tZShmbjogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIHdoaWxlIChjdXJyZW50ICYmICFyZXN1bHQpIHtcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlKSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZXZlcnkoZm46IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIHJlc3VsdCkge1xuICAgICAgaWYgKCFmbihjdXJyZW50LnZhbHVlKSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdbTGlua2VkIExpc3RdJztcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZmluZChmbjogYW55KTogVCB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHJlc3VsdDogVDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgcmVzdWx0ID0gY3VycmVudC52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGZpbmRJbmRleChmbjogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcmVzdWx0OiBudW1iZXI7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgIHJlc3VsdCA9IGluZGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcHJvdGVjdGVkIGdldE5vZGUocG9zaXRpb246IG51bWJlcik6IGFueSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3NpdGlvbjsgaW5kZXgrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IG91dEFycmF5OiBhbnlbXSA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIG91dEFycmF5LnB1c2goY3VycmVudC52YWx1ZSk7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICB0aGlzLmFzQXJyYXkgPSBvdXRBcnJheTtcbiAgfVxuXG4gIC8vIEFycmF5IG1ldGhvZHMgb3ZlcnJpZGluZyBFTkRcbn1cbiIsIi8qdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzICovXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE9uQ2hhbmdlKGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XG4gIGNvbnN0IHN1Zml4ID0gJ0NoYW5nZSc7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIE9uQ2hhbmdlSGFuZGxlcih0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IF9rZXkgPSBgIF9fJHtwcm9wZXJ0eUtleX1WYWx1ZWA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICBnZXQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXNbX2tleV07XG4gICAgICB9LFxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXNbX2tleV07XG4gICAgICAgIHRoaXNbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSAhPT0gdmFsdWUgJiYgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XSkge1xuICAgICAgICAgIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0uZW1pdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cbiIsImltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBzdGF0aWMgcmVmbG93KGVsZW1lbnQ6IGFueSk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgKChiczogYW55KTogdm9pZCA9PiBicykoZWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuICB9XG5cbiAgLy8gc291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iL21hc3Rlci9zcmMvY3NzL3Zhci9nZXRTdHlsZXMuanNcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgc3RhdGljIGdldFN0eWxlcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICgjMTUwOTgsICMxNDE1MClcbiAgICAvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcbiAgICAvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcbiAgICBsZXQgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgIGlmICghdmlldyB8fCAhdmlldy5vcGVuZXIpIHtcbiAgICAgIHZpZXcgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBfbWVzc2FnZXNIYXNoOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuY29uc3QgX2hpZGVNc2cgPSB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnd2FybicgaW4gY29uc29sZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT25jZShtc2c6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzRGV2TW9kZSgpIHx8IF9oaWRlTXNnIHx8IG1zZyBpbiBfbWVzc2FnZXNIYXNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX21lc3NhZ2VzSGFzaFttc2ddID0gdHJ1ZTtcbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuICBjb25zb2xlLndhcm4obXNnKTtcbn1cbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsIndpbmRvdyIsImlzRGV2TW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFLQSxRQUFBO1FBSUUsaUJBQVksSUFBWSxFQUFFLEtBQWM7WUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO1NBQzVCOzs7O1FBRUQsMEJBQVE7OztZQUFSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7YUFDMUQ7c0JBaEJIO1FBaUJDOzs7Ozs7QUNaRCxJQWdCQSxxQkFBTSxlQUFlLEdBQUc7UUFDdEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUNoQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0tBQy9CLENBQUM7Ozs7OztBQUdGLDJCQUE4QixRQUFnQixFQUFFLE9BQThCO1FBQTlCLHdCQUFBO1lBQUEseUJBQThCOztRQUM1RSxxQkFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRWhELElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxF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