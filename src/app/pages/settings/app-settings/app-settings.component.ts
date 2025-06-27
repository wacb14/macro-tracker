import { Component, inject } from '@angular/core';
import { EditFieldComponent } from '../../../components/edit-field/edit-field.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { BtnCancelBackComponent } from '../../../components/btn-cancel-back/btn-cancel-back.component';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-app-settings',
  imports: [
    EditFieldComponent,
    InputSelectComponent,
    BtnCancelBackComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app-settings.component.html',
  styleUrl: './app-settings.component.css',
})
export class AppSettingsComponent {
  fb = inject(FormBuilder);
  languages = [
    { name: 'English', code: 'en', nativeName: 'English' },
    { name: 'Spanish', code: 'es', nativeName: 'Español' },
    { name: 'French', code: 'fr', nativeName: 'Français' },
    { name: 'German', code: 'de', nativeName: 'Deutsch' },
    { name: 'Chinese', code: 'zh', nativeName: '中文' },
    { name: 'Japanese', code: 'ja', nativeName: '日本語' },
    { name: 'Portuguese', code: 'pt', nativeName: 'Português' },
    { name: 'Russian', code: 'ru', nativeName: 'Русский' },
    { name: 'Arabic', code: 'ar', nativeName: 'العربية' },
  ];
  regions = [
    { name: 'Spain', code: 'ES', currency: 'EUR', language: 'es' },
    { name: 'Mexico', code: 'MX', currency: 'MXN', language: 'es' },
    { name: 'United States', code: 'US', currency: 'USD', language: 'en' },
    { name: 'United Kingdom', code: 'GB', currency: 'GBP', language: 'en' },
    { name: 'France', code: 'FR', currency: 'EUR', language: 'fr' },
    { name: 'Germany', code: 'DE', currency: 'EUR', language: 'de' },
    { name: 'Japan', code: 'JP', currency: 'JPY', language: 'ja' },
    { name: 'Brazil', code: 'BR', currency: 'BRL', language: 'pt' },
  ];
  timeZones = [
    {
      name: 'Pacific Time (PT)',
      code: 'UTC-8',
      cities: ['Los Angeles', 'San Francisco', 'Vancouver'],
    },
    {
      name: 'Eastern Time (ET)',
      code: 'UTC-5',
      cities: ['New York', 'Toronto', 'Miami'],
    },
    {
      name: 'Central European Time (CET)',
      code: 'UTC+1',
      cities: ['Madrid', 'Paris', 'Berlin', 'Rome'],
    },
    {
      name: 'Japan Standard Time (JST)',
      code: 'UTC+9',
      cities: ['Tokyo', 'Osaka', 'Seoul'],
    },
    {
      name: 'Australian Eastern Time (AET)',
      code: 'UTC+10',
      cities: ['Sydney', 'Melbourne', 'Brisbane'],
    },
  ];
  weights = [
    { name: 'Kilograms (kg)', code: 'kg' },
    { name: 'Grams (g)', code: 'g' },
    { name: 'Pounds (lbs)', code: 'lbs' },
  ];
  heights = [
    { name: 'Centimeters (cm)', code: 'cm' },
    { name: 'Meters (m)', code: 'm' },
    { name: 'Inches (in)', code: 'in' },
    { name: 'Feet (ft)', code: 'ft' },
  ];
  dateFormats = [
    {
      name: 'Day-Month-Year (DD-MM-YYYY)',
      code: 'dd-MM-yyyy',
      example: '28-06-2023',
    },
    {
      name: 'Month-Day-Year (MM-DD-YYYY)',
      code: 'MM-dd-yyyy',
      example: '06-28-2023',
    },
    {
      name: 'Year-Month-Day (YYYY-MM-DD)',
      code: 'yyyy-MM-dd',
      example: '2023-06-28',
    },
  ];

  appSettingsForm = this.fb.group({
    language: [{ value: '', disabled: false }, Validators.required],
    region: [{ value: '', disabled: true }, Validators.required],
    timeZone: [{ value: '', disabled: false }, Validators.required],
    weight: [{ value: '', disabled: false }, Validators.required],
    height: [{ value: '', disabled: false }, Validators.required],
    dateFormat: [{ value: '', disabled: false }, Validators.required],
  });

  constructor() {
    this.appSettingsForm
      .get('language')
      ?.valueChanges.subscribe((languageValue: any) => {
        if (languageValue)
          this.getFormControl('region')?.enable({ emitEvent: false });
        else this.getFormControl('region')?.disable({ emitEvent: false });
      });
  }

  getFormControl(name: string): AbstractControl | null {
    if (name) return this.appSettingsForm.get(name);
    return null;
  }

  sendForm() {}
}
