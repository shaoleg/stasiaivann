/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isSame } from 'ngx-bootstrap/chronos';
/**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */
export function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    var /** @type {?} */ weekDay = getDay(date);
    var /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */
export function calculateDateOffset(weekday, startingDayOffset) {
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
export function isMonthDisabled(date, min, max) {
    var /** @type {?} */ minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    var /** @type {?} */ maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function isYearDisabled(date, min, max) {
    var /** @type {?} */ minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    var /** @type {?} */ maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */
export function isDisabledDate(date, datesDisabled) {
    if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some(function (dateDisabled) { return isSame(date, dateDisabled, 'date'); });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY2FsZW5kYXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ1dGlscy9icy1jYWxlbmRhci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBRS9CLE1BQU0sbUNBQW1DLElBQVUsRUFDVixPQUFvQztJQUMzRSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCxxQkFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLHFCQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztDQUN4Qzs7Ozs7O0FBRUQsTUFBTSw4QkFBOEIsT0FBZSxFQUFFLGlCQUF5QjtJQUM1RSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDaEI7SUFFRCxxQkFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUUvQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0NBQ3pDOzs7Ozs7O0FBRUQsTUFBTSwwQkFBMEIsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQzlELHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO0NBQzdCOzs7Ozs7O0FBRUQsTUFBTSx5QkFBeUIsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQzdELHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5FLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO0NBQzdCOzs7Ozs7QUFFRCxNQUFNLHlCQUF5QixJQUFVLEVBQUUsYUFBcUI7SUFDOUQsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBa0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7Q0FDdkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXREYXksXG4gIGlzRmlyc3REYXlPZldlZWssXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlLFxuICBzaGlmdERhdGUsXG4gIGVuZE9mLFxuICBzdGFydE9mLFxuICBpc1NhbWVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihkYXRlOiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIH0pOiBEYXRlIHtcbiAgaWYgKGlzRmlyc3REYXlPZldlZWsoZGF0ZSwgb3B0aW9ucy5maXJzdERheU9mV2VlaykpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHdlZWtEYXkgPSBnZXREYXkoZGF0ZSk7XG4gIGNvbnN0IG9mZnNldCA9IGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla0RheSwgb3B0aW9ucy5maXJzdERheU9mV2Vlayk7XG5cbiAgcmV0dXJuIHNoaWZ0RGF0ZShkYXRlLCB7ZGF5OiAtb2Zmc2V0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtkYXk6IG51bWJlciwgc3RhcnRpbmdEYXlPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChzdGFydGluZ0RheU9mZnNldCA9PT0gMCkge1xuICAgIHJldHVybiB3ZWVrZGF5O1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0ID0gd2Vla2RheSAtIHN0YXJ0aW5nRGF5T2Zmc2V0ICUgNztcblxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IG9mZnNldCArIDcgOiBvZmZzZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vbnRoRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ21vbnRoJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ21vbnRoJyksIG1heCwgJ2RheScpO1xuXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhckRpc2FibGVkKGRhdGU6IERhdGUsIG1pbjogRGF0ZSwgbWF4OiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICd5ZWFyJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ3llYXInKSwgbWF4LCAnZGF5Jyk7XG5cbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERhdGUoZGF0ZTogRGF0ZSwgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdKTogYm9vbGVhbiB7XG4gIGlmIChkYXRlc0Rpc2FibGVkID09PSB1bmRlZmluZWQgfHwgIWRhdGVzRGlzYWJsZWQgfHwgIWRhdGVzRGlzYWJsZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVzRGlzYWJsZWQuc29tZSgoZGF0ZURpc2FibGVkOiBEYXRlKSA9PiBpc1NhbWUoZGF0ZSwgZGF0ZURpc2FibGVkLCAnZGF0ZScpKTtcbn1cbiJdfQ==