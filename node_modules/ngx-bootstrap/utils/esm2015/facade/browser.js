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
const /** @type {?} */ win = (typeof window !== 'undefined' && window) || /** @type {?} */ ({});
export { win as window };
export const /** @type {?} */ document = win.document;
export const /** @type {?} */ location = win.location;
export const /** @type {?} */ gc = win.gc ? () => win.gc() : () => null;
export const /** @type {?} */ performance = win.performance ? win.performance : null;
export const /** @type {?} */ Event = win.Event;
export const /** @type {?} */ MouseEvent = win.MouseEvent;
export const /** @type {?} */ KeyboardEvent = win.KeyboardEvent;
export const /** @type {?} */ EventTarget = win.EventTarget;
export const /** @type {?} */ History = win.History;
export const /** @type {?} */ Location = win.Location;
export const /** @type {?} */ EventListener = win.EventListener;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJmYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVdBLHVCQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsc0JBQUksRUFBUyxDQUFBLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUN6QixNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyx1QkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDNUQsTUFBTSxDQUFDLHVCQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDcEUsTUFBTSxDQUFDLHVCQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQy9CLE1BQU0sQ0FBQyx1QkFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUN6QyxNQUFNLENBQUMsdUJBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDL0MsTUFBTSxDQUFDLHVCQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyx1QkFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLHVCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxuICovXG5jb25zdCB3aW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCB7fSBhcyBhbnk7XG5cbmV4cG9ydCB7IHdpbiBhcyB3aW5kb3cgfTtcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IHdpbi5kb2N1bWVudDtcbmV4cG9ydCBjb25zdCBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbmV4cG9ydCBjb25zdCBnYyA9IHdpbi5nYyA/ICgpID0+IHdpbi5nYygpIDogKCk6IGFueSA9PiBudWxsO1xuZXhwb3J0IGNvbnN0IHBlcmZvcm1hbmNlID0gd2luLnBlcmZvcm1hbmNlID8gd2luLnBlcmZvcm1hbmNlIDogbnVsbDtcbmV4cG9ydCBjb25zdCBFdmVudCA9IHdpbi5FdmVudDtcbmV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luLk1vdXNlRXZlbnQ7XG5leHBvcnQgY29uc3QgS2V5Ym9hcmRFdmVudCA9IHdpbi5LZXlib2FyZEV2ZW50O1xuZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luLkV2ZW50VGFyZ2V0O1xuZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW4uSGlzdG9yeTtcbmV4cG9ydCBjb25zdCBMb2NhdGlvbiA9IHdpbi5Mb2NhdGlvbjtcbmV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luLkV2ZW50TGlzdGVuZXI7XG4iXX0=