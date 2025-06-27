import { NgClass } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  imports: [NgClass],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true,
    },
  ],
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  disabled = input(false);

  value = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).checked;
    this.value = newValue;
    this.onChange(newValue);
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
