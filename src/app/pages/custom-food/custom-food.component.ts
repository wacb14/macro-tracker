import { Component, inject } from '@angular/core';
import { InputIconPickerComponent } from '../../components/input-icon-picker/input-icon-picker.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-food',
  imports: [InputIconPickerComponent, ReactiveFormsModule],
  templateUrl: './custom-food.component.html',
  styleUrl: './custom-food.component.css',
})
export class CustomFoodComponent {
  fb = inject(FormBuilder);

  foodForm = this.fb.group({
    icon: [null, Validators.required],
  });

  icons = [
    { name: 'mdi:food-apple' },
    { name: 'material-symbols:no-food-outline-sharp' },
    { name: 'mdi:fruit-watermelon' },
    { name: 'mdi:fruit-cherries' },
    { name: 'mdi:fruit-pineapple' },
    { name: 'mdi:fruit-grapes' },
    { name: 'mdi:fruit-citrus' },
    { name: 'mdi:carrot' },
    { name: 'mdi:food-drumstick' },
    { name: 'mdi:egg' },
  ];
  sendForm() {
    console.log(this.foodForm.controls);
  }
}
