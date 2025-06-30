import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-input-icon-picker',
  imports: [NgClass],
  templateUrl: './input-icon-picker.component.html',
  styleUrl: './input-icon-picker.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputIconPickerComponent),
      multi: true,
    },
  ],
})
export class InputIconPickerComponent {
  @ViewChild('selectContainer') selectContainer!: ElementRef;

  isDisabled: boolean = false;
  options = input.required<any[]>();
  optionLabel = input.required<string>();
  idLabel = input(uuidv4());
  placeholder = input('');
  showFirst = input(false);

  value: any = null;
  hidden = true;
  selectedIndex = 0;

  //-- Functions for ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value == null && this.showFirst() && this.options().length > 0) {
      this.value = this.options()[0];
      this.selectedIndex = 0;
      this.onChange(this.value);
    } else this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  toggleOptions() {
    if (!this.isDisabled) {
      this.hidden = !this.hidden;
      this.focusInput();
    }
  }
  focusInput() {
    const e: HTMLSpanElement | null = document.getElementById(this.idLabel());
    if (e) e.focus();
  }
  chooseOption(index: number) {
    this.value = this.options()[index];
    this.selectedIndex = index;
    this.onChange(this.value);
    this.hidden = true;
    this.focusInput();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      !this.hidden &&
      this.selectContainer &&
      !this.selectContainer.nativeElement.contains(event.target)
    ) {
      this.hidden = true;
    }
  }
}
