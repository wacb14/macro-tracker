import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-input-select',
  imports: [NgClass],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true,
    },
  ],
})
export class InputSelectComponent implements ControlValueAccessor {
  @ViewChild('selectContainer') selectContainer!: ElementRef;

  formControlName = input.required<string>();
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
  toggleOptions() {
    this.hidden = !this.hidden;
    this.focusInput();
  }
  focusInput() {
    const e: HTMLSpanElement | null = document.getElementById(this.idLabel());
    if (e) e.focus();
  }
  chooseOption(index: number) {
    this.value = this.options()[index];
    this.selectedIndex = index;
    this.onChange(this.value); //-- Notifies the parent FormGroup
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
