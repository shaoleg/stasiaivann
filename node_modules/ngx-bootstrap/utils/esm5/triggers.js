/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Trigger } from './trigger.class';
/**
 * @record
 */
export function ListenOptions() { }
function ListenOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ListenOptions.prototype.target;
    /** @type {?|undefined} */
    ListenOptions.prototype.targets;
    /** @type {?|undefined} */
    ListenOptions.prototype.triggers;
    /** @type {?|undefined} */
    ListenOptions.prototype.outsideClick;
    /** @type {?|undefined} */
    ListenOptions.prototype.outsideEsc;
    /** @type {?|undefined} */
    ListenOptions.prototype.show;
    /** @type {?|undefined} */
    ListenOptions.prototype.hide;
    /** @type {?|undefined} */
    ListenOptions.prototype.toggle;
}
var /** @type {?} */ DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases) {
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
export function listenToTriggers(renderer, /* tslint:disable-next-line: no-any */
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
export function listenToTriggersV2(renderer, options) {
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
export function registerOutsideClick(renderer, options) {
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
export function registerEscClick(renderer, options) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsidHJpZ2dlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjFDLHFCQUFNLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7Q0FDL0IsQ0FBQzs7Ozs7O0FBR0YsTUFBTSx3QkFBd0IsUUFBZ0IsRUFBRSxPQUE4QjtJQUE5Qix3QkFBQSxFQUFBLHlCQUE4QjtJQUM1RSxxQkFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFaEQsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDWDtJQUVELHFCQUFNLGNBQWMsR0FBRyxlQUFlO1NBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDWixHQUFHLENBQUMsVUFBQyxPQUFlLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDO1NBQzVDLEdBQUcsQ0FBQyxVQUFDLFdBQXFCO1FBQ3pCLHFCQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEMsQ0FBQyxDQUFDO0lBRUwscUJBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFN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LE9BQU8sQ0FBQyxPQUFPO1lBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBN0IsQ0FBNkIsQ0FDOUQsQ0FBQyxDQUFDLENBQUM7WUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2hCLENBQUMsQ0FBQztDQUNKOzs7Ozs7QUFFRCxNQUFNLDJCQUEyQixRQUFtQixFQUNuQixPQUFzQjtJQUNyRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0tBQzNCO0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFDLEtBQVU7UUFDekQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDbEI7UUFDRCxFQUFFLENBQUMsQ0FDRCxPQUFPLENBQUMsT0FBTztZQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQTdCLENBQTZCLENBQzlELENBQUMsQ0FBQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQixDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJpZ2dlciB9IGZyb20gJy4vdHJpZ2dlci5jbGFzcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgdHlwZSBCc0V2ZW50Q2FsbGJhY2sgPSAoZXZlbnQ/OiBhbnkpID0+IGJvb2xlYW4gfCB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3Rlbk9wdGlvbnMge1xuICB0YXJnZXQ/OiBIVE1MRWxlbWVudDtcbiAgdGFyZ2V0cz86IEhUTUxFbGVtZW50W107XG4gIHRyaWdnZXJzPzogc3RyaW5nO1xuICBvdXRzaWRlQ2xpY2s/OiBib29sZWFuO1xuICBvdXRzaWRlRXNjPzogYm9vbGVhbjtcbiAgc2hvdz86IEJzRXZlbnRDYWxsYmFjaztcbiAgaGlkZT86IEJzRXZlbnRDYWxsYmFjaztcbiAgdG9nZ2xlPzogQnNFdmVudENhbGxiYWNrO1xufVxuXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XG4gIGhvdmVyOiBbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLFxuICBmb2N1czogWydmb2N1c2luJywgJ2ZvY3Vzb3V0J11cbn07XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vyczogc3RyaW5nLCBhbGlhc2VzOiBhbnkgPSBERUZBVUxUX0FMSUFTRVMpOiBUcmlnZ2VyW10ge1xuICBjb25zdCB0cmltbWVkVHJpZ2dlcnMgPSAodHJpZ2dlcnMgfHwgJycpLnRyaW0oKTtcblxuICBpZiAodHJpbW1lZFRyaWdnZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gdHJpbW1lZFRyaWdnZXJzXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKCh0cmlnZ2VyOiBzdHJpbmcpID0+IHRyaWdnZXIuc3BsaXQoJzonKSlcbiAgICAubWFwKCh0cmlnZ2VyUGFpcjogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IGFsaWFzID0gYWxpYXNlc1t0cmlnZ2VyUGFpclswXV0gfHwgdHJpZ2dlclBhaXI7XG5cbiAgICAgIHJldHVybiBuZXcgVHJpZ2dlcihhbGlhc1swXSwgYWxpYXNbMV0pO1xuICAgIH0pO1xuXG4gIGNvbnN0IG1hbnVhbFRyaWdnZXJzID0gcGFyc2VkVHJpZ2dlcnMuZmlsdGVyKCh0cmlnZ2VyUGFpcjogVHJpZ2dlcikgPT5cbiAgICB0cmlnZ2VyUGFpci5pc01hbnVhbCgpXG4gICk7XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBvbmx5IG9uZSBtYW51YWwgdHJpZ2dlciBpcyBhbGxvd2VkJyk7XG4gIH1cblxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUcmlnZ2Vycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnMocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Rm46IEJzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGbjogQnNFdmVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRm46IEJzRXZlbnRDYWxsYmFjayk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XG4gICAgaWYgKHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZSkge1xuICAgICAgbGlzdGVuZXJzLnB1c2gocmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCB0b2dnbGVGbikpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHNob3dGbiksXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCBoaWRlRm4pXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzVjIocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucyk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKG9wdGlvbnMudHJpZ2dlcnMpO1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgLy8gYWxsIGxpc3RlbmVyc1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XG5cbiAgLy8gbGF6eSBsaXN0ZW5lcnMgcmVnaXN0cmF0aW9uXG4gIGNvbnN0IF9yZWdpc3RlckhpZGU6IEZ1bmN0aW9uW10gPSBbXTtcbiAgY29uc3QgcmVnaXN0ZXJIaWRlID0gKCkgPT4ge1xuICAgIC8vIGFkZCBoaWRlIGxpc3RlbmVycyB0byB1bnJlZ2lzdGVyIGFycmF5XG4gICAgX3JlZ2lzdGVySGlkZS5mb3JFYWNoKChmbjogRnVuY3Rpb24pID0+IGxpc3RlbmVycy5wdXNoKGZuKCkpKTtcbiAgICAvLyByZWdpc3RlciBoaWRlIGV2ZW50cyBvbmx5IG9uY2VcbiAgICBfcmVnaXN0ZXJIaWRlLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLy8gcmVnaXN0ZXIgb3BlblxcY2xvc2VcXHRvZ2dsZSBsaXN0ZW5lcnNcbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgIGNvbnN0IHVzZVRvZ2dsZSA9IHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZTtcbiAgICBjb25zdCBzaG93Rm4gPSB1c2VUb2dnbGUgPyBvcHRpb25zLnRvZ2dsZSA6IG9wdGlvbnMuc2hvdztcblxuICAgIGlmICghdXNlVG9nZ2xlKSB7XG4gICAgICBfcmVnaXN0ZXJIaWRlLnB1c2goKCkgPT5cbiAgICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgb3B0aW9ucy5oaWRlKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgKCkgPT4gc2hvd0ZuKHJlZ2lzdGVySGlkZSkpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck91dHNpZGVDbGljayhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm91dHNpZGVDbGljaykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMudGFyZ2V0cyAmJlxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvcHRpb25zLmhpZGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVzY0NsaWNrKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vdXRzaWRlRXNjKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2tleXVwLmVzYycsIChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMudGFyZ2V0cyAmJlxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvcHRpb25zLmhpZGUoKTtcbiAgfSk7XG59XG4iXX0=