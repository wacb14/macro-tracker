import { Component, Input } from '@angular/core';
import { Food } from '../../models';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css',
})
export class FoodCardComponent {
  @Input({ required: true }) food: Food = {
    id: 1,
    name: '',
    icon: '',
    protein: 0,
    carbs: 0,
    fats: 0,
    portion: 0,
  };
}
