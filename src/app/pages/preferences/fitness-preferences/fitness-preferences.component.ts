import { Component } from '@angular/core';
import { EditFieldComponent } from '../../../components/edit-field/edit-field.component';
import { BtnCancelBackComponent } from '../../../components/btn-cancel-back/btn-cancel-back.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';

@Component({
  selector: 'app-fitness-preferences',
  imports: [EditFieldComponent, BtnCancelBackComponent, InputSelectComponent],
  templateUrl: './fitness-preferences.component.html',
  styleUrl: './fitness-preferences.component.css',
})
export class FitnessPreferencesComponent {
  activityLevels = [
    {
      name: 'Sedentary',
      comment: 'Little or no exercise',
      value: 'sedentary',
    },
    {
      name: 'Lightly Active',
      comment: 'Light exercise 1-3 days/week',
      value: 'light',
    },
    {
      name: 'Moderately Active',
      comment: 'Moderate exercise 3-5 days/week',
      value: 'moderate',
    },
    {
      name: 'Very Active',
      comment: 'Hard exercise 6-7 days/week',
      value: 'active',
    },
    {
      name: 'Extremely Active',
      comment: 'Very hard exercise or physical job',
      value: 'extreme',
    },
  ];

  fitnessGoals = [
    {
      name: 'Lose Weight',
      value: 'lose_w',
    },
    {
      name: 'Maintenance',
      value: 'maintenance',
    },
    {
      name: 'Increase Muscle Mass',
      value: 'increase_m',
    },
  ];
}
