import { OnDestroy, OnInit } from '@angular/core';
import { BsDatepickerContainerComponent } from './bs-datepicker-container.component';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
export declare class BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent implements OnInit, OnDestroy {
    constructor(_config: BsDatepickerConfig, _store: BsDatepickerStore, _actions: BsDatepickerActions, _effects: BsDatepickerEffects);
}
