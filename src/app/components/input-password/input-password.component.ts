import { Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input-password',
  imports: [ReactiveFormsModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    },
  ],
})
export class InputPasswordComponent implements ControlValueAccessor {
  idLabel = input('');
  placeholder = input('');
  formControlName = input.required<string>();

  value: string = '';
  revealed = 'password';

  //-- Functions for ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue); //-- Notifies the parent FormGroup
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  reveal() {
    this.revealed = this.revealed == 'password' ? 'text' : 'password';
  }
}
