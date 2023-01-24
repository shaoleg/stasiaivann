/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getHours, getMonth } from '../utils/date-getters';
//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
let /** @type {?} */ monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_'), /** @type {?} */
monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
let /** @type {?} */ monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
let /** @type {?} */ monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
export const /** @type {?} */ caLocale = {
    abbr: 'ca',
    months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
    monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[avui a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[dema a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[ahir a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            return '[el] dddd [' + ('passada la ' + (getHours(date) !== 1) ? 'passades les' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        ss: '%d segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        const /** @type {?} */ output = (num > 4) ? 'é' :
            (num === 1 || num === 3) ? 'r' :
                (num === 2) ? 'n' :
                    (num === 4) ? 't' : 'é';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2NhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU0zRCxxQkFBSSxjQUFjLEdBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUMzRixXQUFXLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTdFLHFCQUFJLFdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gscUJBQUksV0FBVyxHQUFHLDJLQUEySyxDQUFDO0FBRTlMLE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7OztJQUN0RyxXQUFXLENBQUMsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDdkI7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFD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QUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNyQjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ2F0YWxhbiBbY2FdXG4vLyEgYXV0aG9yIDogWGF2aWVyIEFyYmF0IDogaHR0cHM6Ly9naXRodWIuY29tL1hhdmlzYXVydXNSZXhcblxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2dlbi5fZmViLl9tYXIuX2Fici5fbWFpLl9qdW4uX2p1bC5fYWdvLl9zZXQuX29jdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWFpX2p1bl9qdWxfYWdvX3NldF9vY3Rfbm92X2Rlcycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eZ2VuL2ksIC9eZmViL2ksIC9ebWFyL2ksIC9eYWJyL2ksIC9ebWFpL2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYWdvL2ksIC9ec2V0L2ksIC9eb2N0L2ksIC9ebm92L2ksIC9eZGVzL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oZ2VuZXJ8ZmVicmVyfG1hcsOnfGFicmlsfG1haWd8anVueXxqdWxpb2x8YWdvc3R8c2V0ZW1icmV8b2N0dWJyZXxub3ZlbWJyZXxkZXNlbWJyZXxnZW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2V0XFwuP3xvY3RcXC4/fG5vdlxcLj98ZGVzXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IGNhTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnY2EnLFxuICBtb250aHM6ICdnZW5lcl9mZWJyZXJfbWFyw6dfYWJyaWxfbWFpZ19qdW55X2p1bGlvbF9hZ29zdF9zZXRlbWJyZV9vY3R1YnJlX25vdmVtYnJlX2Rlc2VtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH1cblxuICAgIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gIH0sXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGdlbmVyfGZlYnJlcnxtYXLDp3xhYnJpbHxtYWlnfGp1bnl8anVsaW9sfGFnb3N0fHNldGVtYnJlfG9jdHVicmV8bm92ZW1icmV8ZGVzZW1icmUpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGdlblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG9jdFxcLj98bm92XFwuP3xkZXNcXC4/KS9pLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHdlZWtkYXlzOiAnZGl1bWVuZ2VfZGlsbHVuc19kaW1hcnRzX2RpbWVjcmVzX2Rpam91c19kaXZlbmRyZXNfZGlzc2FidGUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkaXUuX2RpbC5fZGltLl9kaXguX2Rpai5fZGl2Ll9kaXMuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RnX2RsX2R0X2RjX2RqX2R2X2RzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1thdnVpIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tkZW1hIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdkZGRkIFthICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbYWhpciBhICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFsnICsgKCdwYXNzYWRhIGxhICcgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3Bhc3NhZGVzIGxlcycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnZmEgJXMnLFxuICAgIHM6ICd1bnMgc2Vnb25zJyxcbiAgICBzczogJyVkIHNlZ29ucycsXG4gICAgbTogJ3VuIG1pbnV0JyxcbiAgICBtbTogJyVkIG1pbnV0cycsXG4gICAgaDogJ3VuYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmVzJyxcbiAgICBkOiAndW4gZGlhJyxcbiAgICBkZDogJyVkIGRpZXMnLFxuICAgIE06ICd1biBtZXMnLFxuICAgIE1NOiAnJWQgbWVzb3MnLFxuICAgIHk6ICd1biBhbnknLFxuICAgIHl5OiAnJWQgYW55cydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KGVyfG9ufGVyfHJ0fMOpKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgY29uc3Qgb3V0cHV0ID0gKG51bSA+IDQpID8gJ8OpJyA6XG4gICAgICAgIChudW0gPT09IDEgfHwgbnVtID09PSAzKSA/ICdyJyA6XG4gICAgICAgICAgKG51bSA9PT0gMikgPyAnbicgOlxuICAgICAgICAgICAgKG51bSA9PT0gNCkgPyAndCcgOiAnw6knO1xuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19