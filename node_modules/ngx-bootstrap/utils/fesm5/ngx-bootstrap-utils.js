import { isDevMode } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
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
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
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
var  /**
 * @template T
 */
LinkedList = /** @class */ (function () {
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
        if (position === void 0) { position = this.length; }
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
        if (position === void 0) { position = 0; }
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
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
var Utils = /** @class */ (function () {
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
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
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

export { isBs3, LinkedList, listenToTriggersV2, registerOutsideClick, registerEscClick, OnChange, setTheme, Trigger, Utils, win as window, document$1 as document, warnOnce, parseTriggers, listenToTriggers };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC11dGlscy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90cmlnZ2VyLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3RyaWdnZXJzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2ZhY2FkZS9icm93c2VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3RoZW1lLXByb3ZpZGVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2xpbmtlZC1saXN0LmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2RlY29yYXRvcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvdXRpbHMvdXRpbHMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvdXRpbHMvd2Fybi1vbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cblxuZXhwb3J0IGNsYXNzIFRyaWdnZXIge1xuICBvcGVuOiBzdHJpbmc7XG4gIGNsb3NlPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wZW46IHN0cmluZywgY2xvc2U/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMuY2xvc2UgPSBjbG9zZSB8fCBvcGVuO1xuICB9XG5cbiAgaXNNYW51YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbiA9PT0gJ21hbnVhbCcgfHwgdGhpcy5jbG9zZSA9PT0gJ21hbnVhbCc7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJpZ2dlciB9IGZyb20gJy4vdHJpZ2dlci5jbGFzcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgdHlwZSBCc0V2ZW50Q2FsbGJhY2sgPSAoZXZlbnQ/OiBhbnkpID0+IGJvb2xlYW4gfCB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3Rlbk9wdGlvbnMge1xuICB0YXJnZXQ/OiBIVE1MRWxlbWVudDtcbiAgdGFyZ2V0cz86IEhUTUxFbGVtZW50W107XG4gIHRyaWdnZXJzPzogc3RyaW5nO1xuICBvdXRzaWRlQ2xpY2s/OiBib29sZWFuO1xuICBvdXRzaWRlRXNjPzogYm9vbGVhbjtcbiAgc2hvdz86IEJzRXZlbnRDYWxsYmFjaztcbiAgaGlkZT86IEJzRXZlbnRDYWxsYmFjaztcbiAgdG9nZ2xlPzogQnNFdmVudENhbGxiYWNrO1xufVxuXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XG4gIGhvdmVyOiBbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLFxuICBmb2N1czogWydmb2N1c2luJywgJ2ZvY3Vzb3V0J11cbn07XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vyczogc3RyaW5nLCBhbGlhc2VzOiBhbnkgPSBERUZBVUxUX0FMSUFTRVMpOiBUcmlnZ2VyW10ge1xuICBjb25zdCB0cmltbWVkVHJpZ2dlcnMgPSAodHJpZ2dlcnMgfHwgJycpLnRyaW0oKTtcblxuICBpZiAodHJpbW1lZFRyaWdnZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gdHJpbW1lZFRyaWdnZXJzXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKCh0cmlnZ2VyOiBzdHJpbmcpID0+IHRyaWdnZXIuc3BsaXQoJzonKSlcbiAgICAubWFwKCh0cmlnZ2VyUGFpcjogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IGFsaWFzID0gYWxpYXNlc1t0cmlnZ2VyUGFpclswXV0gfHwgdHJpZ2dlclBhaXI7XG5cbiAgICAgIHJldHVybiBuZXcgVHJpZ2dlcihhbGlhc1swXSwgYWxpYXNbMV0pO1xuICAgIH0pO1xuXG4gIGNvbnN0IG1hbnVhbFRyaWdnZXJzID0gcGFyc2VkVHJpZ2dlcnMuZmlsdGVyKCh0cmlnZ2VyUGFpcjogVHJpZ2dlcikgPT5cbiAgICB0cmlnZ2VyUGFpci5pc01hbnVhbCgpXG4gICk7XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBvbmx5IG9uZSBtYW51YWwgdHJpZ2dlciBpcyBhbGxvd2VkJyk7XG4gIH1cblxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUcmlnZ2Vycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnMocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Rm46IEJzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGbjogQnNFdmVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRm46IEJzRXZlbnRDYWxsYmFjayk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XG4gICAgaWYgKHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZSkge1xuICAgICAgbGlzdGVuZXJzLnB1c2gocmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCB0b2dnbGVGbikpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHNob3dGbiksXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCBoaWRlRm4pXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzVjIocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucyk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKG9wdGlvbnMudHJpZ2dlcnMpO1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgLy8gYWxsIGxpc3RlbmVyc1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XG5cbiAgLy8gbGF6eSBsaXN0ZW5lcnMgcmVnaXN0cmF0aW9uXG4gIGNvbnN0IF9yZWdpc3RlckhpZGU6IEZ1bmN0aW9uW10gPSBbXTtcbiAgY29uc3QgcmVnaXN0ZXJIaWRlID0gKCkgPT4ge1xuICAgIC8vIGFkZCBoaWRlIGxpc3RlbmVycyB0byB1bnJlZ2lzdGVyIGFycmF5XG4gICAgX3JlZ2lzdGVySGlkZS5mb3JFYWNoKChmbjogRnVuY3Rpb24pID0+IGxpc3RlbmVycy5wdXNoKGZuKCkpKTtcbiAgICAvLyByZWdpc3RlciBoaWRlIGV2ZW50cyBvbmx5IG9uY2VcbiAgICBfcmVnaXN0ZXJIaWRlLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLy8gcmVnaXN0ZXIgb3BlblxcY2xvc2VcXHRvZ2dsZSBsaXN0ZW5lcnNcbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgIGNvbnN0IHVzZVRvZ2dsZSA9IHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZTtcbiAgICBjb25zdCBzaG93Rm4gPSB1c2VUb2dnbGUgPyBvcHRpb25zLnRvZ2dsZSA6IG9wdGlvbnMuc2hvdztcblxuICAgIGlmICghdXNlVG9nZ2xlKSB7XG4gICAgICBfcmVnaXN0ZXJIaWRlLnB1c2goKCkgPT5cbiAgICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgb3B0aW9ucy5oaWRlKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgKCkgPT4gc2hvd0ZuKHJlZ2lzdGVySGlkZSkpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck91dHNpZGVDbGljayhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm91dHNpZGVDbGljaykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMudGFyZ2V0cyAmJlxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvcHRpb25zLmhpZGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVzY0NsaWNrKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vdXRzaWRlRXNjKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2tleXVwLmVzYycsIChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMudGFyZ2V0cyAmJlxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvcHRpb25zLmhpZGUoKTtcbiAgfSk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXG4gKi9cbmNvbnN0IHdpbiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHx8IHt9IGFzIGFueTtcblxuZXhwb3J0IHsgd2luIGFzIHdpbmRvdyB9O1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuZXhwb3J0IGNvbnN0IGxvY2F0aW9uID0gd2luLmxvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IGdjID0gd2luLmdjID8gKCkgPT4gd2luLmdjKCkgOiAoKTogYW55ID0+IG51bGw7XG5leHBvcnQgY29uc3QgcGVyZm9ybWFuY2UgPSB3aW4ucGVyZm9ybWFuY2UgPyB3aW4ucGVyZm9ybWFuY2UgOiBudWxsO1xuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luLkV2ZW50O1xuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW4uTW91c2VFdmVudDtcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luLktleWJvYXJkRXZlbnQ7XG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW4uRXZlbnRUYXJnZXQ7XG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpbi5IaXN0b3J5O1xuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luLkxvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW4uRXZlbnRMaXN0ZW5lcjtcbiIsImltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xuXG5sZXQgZ3Vlc3NlZFZlcnNpb246ICdiczMnIHwgJ2JzNCc7XG5cbmZ1bmN0aW9uIF9ndWVzc0JzVmVyc2lvbigpOiAnYnMzJyB8ICdiczQnIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5FbC5pbm5lclRleHQgPSAndGVzdCBicyB2ZXJzaW9uJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuRWwpO1xuICBzcGFuRWwuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gIGNvbnN0IHJlY3QgPSBzcGFuRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3BhbkVsKTtcbiAgaWYgKCFyZWN0KSB7XG4gICAgcmV0dXJuICdiczMnO1xuICB9XG5cbiAgcmV0dXJuIHJlY3QudG9wID09PSAwID8gJ2JzNCcgOiAnYnMzJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lOiAnYnMzJyB8ICdiczQnKTogdm9pZCB7XG4gIGd1ZXNzZWRWZXJzaW9uID0gdGhlbWU7XG59XG5cbi8vIHRvZG86IGluIG5neC1ib290c3RyYXAsIGJzNCB3aWxsIGJlY2FtZSBhIGRlZmF1bHQgb25lXG5leHBvcnQgZnVuY3Rpb24gaXNCczMoKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuX190aGVtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZ3Vlc3NlZFZlcnNpb24pIHtcbiAgICAgIHJldHVybiBndWVzc2VkVmVyc2lvbiA9PT0gJ2JzMyc7XG4gICAgfVxuICAgIGd1ZXNzZWRWZXJzaW9uID0gX2d1ZXNzQnNWZXJzaW9uKCk7XG5cbiAgICByZXR1cm4gZ3Vlc3NlZFZlcnNpb24gPT09ICdiczMnO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5fX3RoZW1lICE9PSAnYnM0Jztcbn1cbiIsImV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0PFQ+IHtcbiAgbGVuZ3RoID0gMDtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcm90ZWN0ZWQgaGVhZDogYW55O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByb3RlY3RlZCB0YWlsOiBhbnk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcHJvdGVjdGVkIGN1cnJlbnQ6IGFueTtcbiAgcHJvdGVjdGVkIGFzQXJyYXk6IFRbXSA9IFtdO1xuXG4gIGdldChwb3NpdGlvbjogbnVtYmVyKTogVCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3NpdGlvbjsgaW5kZXgrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgfVxuXG4gIGFkZCh2YWx1ZTogVCwgcG9zaXRpb246IG51bWJlciA9IHRoaXMubGVuZ3RoKTogdm9pZCB7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBub2RlOiBhbnkgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG5leHQ6IHVuZGVmaW5lZCxcbiAgICAgIHByZXZpb3VzOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIHRoaXMuY3VycmVudCA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgICAvLyBmaXJzdCBub2RlXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIGxhc3Qgbm9kZVxuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XG4gICAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub2RlIGluIG1pZGRsZVxuICAgICAgICBjb25zdCBjdXJyZW50UHJldmlvdXNOb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXh0Tm9kZSA9IGN1cnJlbnRQcmV2aW91c05vZGUubmV4dDtcblxuICAgICAgICBjdXJyZW50UHJldmlvdXNOb2RlLm5leHQgPSBub2RlO1xuICAgICAgICBjdXJyZW50TmV4dE5vZGUucHJldmlvdXMgPSBub2RlO1xuXG4gICAgICAgIG5vZGUucHJldmlvdXMgPSBjdXJyZW50UHJldmlvdXNOb2RlO1xuICAgICAgICBub2RlLm5leHQgPSBjdXJyZW50TmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGVuZ3RoKys7XG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcbiAgfVxuXG4gIHJlbW92ZShwb3NpdGlvbiA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgLy8gZmlyc3Qgbm9kZVxuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG5cbiAgICAgIGlmICh0aGlzLmhlYWQpIHtcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcbiAgICAgICAgdGhpcy50YWlsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoIC0gMSkge1xuICAgICAgLy8gbGFzdCBub2RlXG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XG4gICAgICB0aGlzLnRhaWwubmV4dCA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbWlkZGxlIG5vZGVcbiAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcbiAgICAgIHJlbW92ZWROb2RlLm5leHQucHJldmlvdXMgPSByZW1vdmVkTm9kZS5wcmV2aW91cztcbiAgICAgIHJlbW92ZWROb2RlLnByZXZpb3VzLm5leHQgPSByZW1vdmVkTm9kZS5uZXh0O1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoLS07XG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcbiAgfVxuXG4gIHNldChwb3NpdGlvbjogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbik7XG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XG4gIH1cblxuICB0b0FycmF5KCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMuYXNBcnJheTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZmluZEFsbChmbjogYW55KTogYW55W10ge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtpbmRleCwgdmFsdWU6IGN1cnJlbnQudmFsdWV9KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIEFycmF5IG1ldGhvZHMgb3ZlcnJpZGluZyBzdGFydFxuICBwdXNoKC4uLmFyZ3M6IFRbXSk6IG51bWJlciB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJnOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuYWRkKGFyZyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBwb3AoKTogVCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBsYXN0ID0gdGhpcy50YWlsO1xuICAgIHRoaXMucmVtb3ZlKHRoaXMubGVuZ3RoIC0gMSk7XG5cbiAgICByZXR1cm4gbGFzdC52YWx1ZTtcbiAgfVxuXG4gIHVuc2hpZnQoLi4uYXJnczogVFtdKTogbnVtYmVyIHtcbiAgICBhcmdzLnJldmVyc2UoKTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgYXJncy5mb3JFYWNoKChhcmc6IGFueSkgPT4ge1xuICAgICAgdGhpcy5hZGQoYXJnLCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIHNoaWZ0KCk6IFQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLmhlYWQudmFsdWU7XG4gICAgdGhpcy5yZW1vdmUoKTtcblxuICAgIHJldHVybiBsYXN0SXRlbTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZm9yRWFjaChmbjogYW55KTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBmbihjdXJyZW50LnZhbHVlLCBpbmRleCk7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIGluZGV4T2YodmFsdWU6IFQpOiBudW1iZXIge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCBwb3NpdGlvbiA9IDA7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICBwb3NpdGlvbiA9IGluZGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzb21lKGZuOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgIXJlc3VsdCkge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBldmVyeShmbjogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgcmVzdWx0KSB7XG4gICAgICBpZiAoIWZuKGN1cnJlbnQudmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1tMaW5rZWQgTGlzdF0nO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmaW5kKGZuOiBhbnkpOiBUIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcmVzdWx0OiBUO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xuICAgICAgICByZXN1bHQgPSBjdXJyZW50LnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgZmluZEluZGV4KGZuOiBhbnkpOiBudW1iZXIge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQ6IG51bWJlcjtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgcmVzdWx0ID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcm90ZWN0ZWQgZ2V0Tm9kZShwb3NpdGlvbjogbnVtYmVyKTogYW55IHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvc2l0aW9uOyBpbmRleCsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29uc3Qgb3V0QXJyYXk6IGFueVtdID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgb3V0QXJyYXkucHVzaChjdXJyZW50LnZhbHVlKTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHRoaXMuYXNBcnJheSA9IG91dEFycmF5O1xuICB9XG5cbiAgLy8gQXJyYXkgbWV0aG9kcyBvdmVycmlkaW5nIEVORFxufVxuIiwiLyp0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXMgKi9cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgZnVuY3Rpb24gT25DaGFuZ2UoZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcbiAgY29uc3Qgc3VmaXggPSAnQ2hhbmdlJztcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICByZXR1cm4gZnVuY3Rpb24gT25DaGFuZ2VIYW5kbGVyKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgX2tleSA9IGAgX18ke3Byb3BlcnR5S2V5fVZhbHVlYDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIGdldCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpc1tfa2V5XTtcbiAgICAgIH0sXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgc2V0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gdGhpc1tfa2V5XTtcbiAgICAgICAgdGhpc1tfa2V5XSA9IHZhbHVlO1xuICAgICAgICBpZiAocHJldlZhbHVlICE9PSB2YWx1ZSAmJiB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdKSB7XG4gICAgICAgICAgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XS5lbWl0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuLyogdHNsaW50OmVuYWJsZSAqL1xuIiwiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIHN0YXRpYyByZWZsb3coZWxlbWVudDogYW55KTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAoKGJzOiBhbnkpOiB2b2lkID0+IGJzKShlbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIH1cblxuICAvLyBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvbWFzdGVyL3NyYy9jc3MvdmFyL2dldFN0eWxlcy5qc1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBzdGF0aWMgZ2V0U3R5bGVzKGVsZW06IGFueSk6IGFueSB7XG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuICAgIC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgIGxldCB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgICAgdmlldyA9IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IF9tZXNzYWdlc0hhc2g6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5jb25zdCBfaGlkZU1zZyA9IHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAhKCd3YXJuJyBpbiBjb25zb2xlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PbmNlKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghaXNEZXZNb2RlKCkgfHwgX2hpZGVNc2cgfHwgbXNnIGluIF9tZXNzYWdlc0hhc2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfbWVzc2FnZXNIYXNoW21zZ10gPSB0cnVlO1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSovXG4gIGNvbnNvbGUud2Fybihtc2cpO1xufVxuIl0sIm5hbWVzIjpbImRvY3VtZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsSUFBQTtJQUlFLGlCQUFZLElBQVksRUFBRSxLQUFjO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztLQUM1Qjs7OztJQUVELDBCQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7S0FDMUQ7a0JBaEJIO0lBaUJDOzs7Ozs7QUNaRCxBQWdCQSxxQkFBTSxlQUFlLEdBQUc7SUFDdEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztJQUNoQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0NBQy9CLENBQUM7Ozs7OztBQUdGLHVCQUE4QixRQUFnQixFQUFFLE9BQThCO0lBQTlCLHdCQUFBLEVBQUEseUJBQThCO0lBQzVFLHFCQUFNLGVBQWUsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFFaEQsSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQyxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQscUJB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