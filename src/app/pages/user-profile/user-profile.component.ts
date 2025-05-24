import { Component } from '@angular/core';
import { InformationCardComponent } from '../../components/information-card/information-card.component';

export interface Field {
  title: string;
  content: string;
  placeholder: string;
}

@Component({
  selector: 'app-user-profile',
  imports: [InformationCardComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  personalInformation: Field[] = [
    {
      title: 'Profile Picture',
      content: '',
      placeholder: 'Choose a picture for your profile',
    },
    {
      title: 'Name',
      content: 'User Full Name',
      placeholder: 'Enter your full name',
    },
  ];
  security: Field[] = [
    {
      title: 'Email',
      content: 'user.email@email.com',
      placeholder: 'Enter your email',
    },
    {
      title: 'Password',
      content: '',
      placeholder: 'Last modification: November 23th 2023',
    },
    {
      title: 'Delete Account',
      content: '',
      placeholder: 'Remove all your data',
    },
  ];
}
