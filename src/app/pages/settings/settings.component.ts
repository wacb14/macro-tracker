import { Component } from '@angular/core';
import { Field } from '../user-profile/user-profile.component';
import { InformationCardComponent } from '../../components/information-card/information-card.component';

@Component({
  selector: 'app-settings',
  imports: [InformationCardComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  settings: Field[] = [
    {
      title: 'Notifications',
      content: '',
      placeholder: 'Set your preferred notification settings',
      href: '/notifications',
    },
    {
      title: 'Language and Region',
      content: 'English / US',
      placeholder: 'Set your preferred language and region',
      href: '/app-settings',
    },
    {
      title: 'Time zone',
      content: 'UTC-5',
      placeholder: 'Choose your preferred time zone',
      href: '/app-settings',
    },
    {
      title: 'Units',
      content: 'Kg / cm',
      placeholder: 'Set your preferred units',
      href: '/app-settings',
    },
    {
      title: 'Date Format',
      content: 'DD/MM/YYYY',
      placeholder: 'Set your preferred date format',
      href: '/app-settings',
    },
  ];
}
