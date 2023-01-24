import { ElementRef, OnDestroy } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownDirective } from './bs-dropdown.directive';
export declare class BsDropdownToggleDirective implements OnDestroy {
    private _state;
    private _element;
    private dropdown;
    isDisabled: boolean;
    isOpen: boolean;
    private _subscriptions;
    constructor(_state: BsDropdownState, _element: ElementRef, dropdown: BsDropdownDirective);
    onClick(): void;
    onDocumentClick(event: MouseEvent): void;
    onEsc(): void;
    ngOnDestroy(): void;
}
