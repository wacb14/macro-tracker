import { Component } from '@angular/core';
import { InformationCardComponent } from '../components/information-card/information-card.component';

interface Field {
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
    {
      title: 'Gender',
      content: 'Male',
      placeholder: 'Chose your gender',
    },
    {
      title: 'Date of Birth',
      content: 'December 24th 2000',
      placeholder: 'Enter your date of birth',
    },
    {
      title: 'Weight',
      content: '90kg',
      placeholder: 'Enter your weight',
    },
    {
      title: 'Height',
      content: '180cm',
      placeholder: 'Enter your height',
    },
    {
      title: 'Activity Level',
      content: 'Sedentary',
      placeholder: 'Select your activity level',
    },
    {
      title: 'Fitness Goal',
      content: 'Lose weight',
      placeholder: 'Complete your fitness goal',
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
  ];
}
