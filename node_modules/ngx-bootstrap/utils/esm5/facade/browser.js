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
export { win as window };
export var /** @type {?} */ document = win.document;
export var /** @type {?} */ location = win.location;
export var /** @type {?} */ gc = win.gc ? function () { return win.gc(); } : function () { return null; };
export var /** @type {?} */ performance = win.performance ? win.performance : null;
export var /** @type {?} */ Event = win.Event;
export var /** @type {?} */ MouseEvent = win.MouseEvent;
export var /** @type {?} */ KeyboardEvent = win.KeyboardEvent;
export var /** @type {?} */ EventTarget = win.EventTarget;
export var /** @type {?} */ History = win.History;
export var /** @type {?} */ Location = win.Location;
export var /** @type {?} */ EventListener = win.EventListener;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJmYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVdBLHFCQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsc0JBQUksRUFBUyxDQUFBLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUN6QixNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQyxDQUFDLGNBQVcsT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO0FBQzVELE1BQU0sQ0FBQyxxQkFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxxQkFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUMvQixNQUFNLENBQUMscUJBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDekMsTUFBTSxDQUFDLHFCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxxQkFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztBQUMzQyxNQUFNLENBQUMscUJBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDbkMsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxxQkFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBKUyB2ZXJzaW9uIG9mIGJyb3dzZXIgQVBJcy4gVGhpcyBsaWJyYXJ5IGNhbiBvbmx5IHJ1biBpbiB0aGUgYnJvd3Nlci5cbiAqL1xuY29uc3Qgd2luID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykgfHwge30gYXMgYW55O1xuXG5leHBvcnQgeyB3aW4gYXMgd2luZG93IH07XG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSB3aW4uZG9jdW1lbnQ7XG5leHBvcnQgY29uc3QgbG9jYXRpb24gPSB3aW4ubG9jYXRpb247XG5leHBvcnQgY29uc3QgZ2MgPSB3aW4uZ2MgPyAoKSA9PiB3aW4uZ2MoKSA6ICgpOiBhbnkgPT4gbnVsbDtcbmV4cG9ydCBjb25zdCBwZXJmb3JtYW5jZSA9IHdpbi5wZXJmb3JtYW5jZSA/IHdpbi5wZXJmb3JtYW5jZSA6IG51bGw7XG5leHBvcnQgY29uc3QgRXZlbnQgPSB3aW4uRXZlbnQ7XG5leHBvcnQgY29uc3QgTW91c2VFdmVudCA9IHdpbi5Nb3VzZUV2ZW50O1xuZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW4uS2V5Ym9hcmRFdmVudDtcbmV4cG9ydCBjb25zdCBFdmVudFRhcmdldCA9IHdpbi5FdmVudFRhcmdldDtcbmV4cG9ydCBjb25zdCBIaXN0b3J5ID0gd2luLkhpc3Rvcnk7XG5leHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW4uTG9jYXRpb247XG5leHBvcnQgY29uc3QgRXZlbnRMaXN0ZW5lciA9IHdpbi5FdmVudExpc3RlbmVyO1xuIl19