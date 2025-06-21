import { Component } from '@angular/core';
import { Field } from '../user-profile/user-profile.component';
import { InformationCardComponent } from '../../components/information-card/information-card.component';

@Component({
  selector: 'app-preferences',
  imports: [InformationCardComponent],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.css',
})
export class PreferencesComponent {
  userData: Field[] = [
    {
      title: 'Gender',
      content: 'Male',
      placeholder: 'Chose your gender',
      href: '',
    },
    {
      title: 'Date of Birth',
      content: 'December 24th 2000',
      placeholder: 'Enter your date of birth',
      href: '',
    },
    {
      title: 'Weight',
      content: '90kg',
      placeholder: 'Enter your weight',
      href: '',
    },
    {
      title: 'Height',
      content: '180cm',
      placeholder: 'Enter your height',
      href: '',
    },
  ];
  userPreferences: Field[] = [
    {
      title: 'Activity Level',
      content: 'Sedentary',
      placeholder: 'Select your activity level',
      href: '',
    },
    {
      title: 'Fitness Goal',
      content: 'Lose weight',
      placeholder: 'Complete your fitness goal',
      href: '',
    },
  ];
}
