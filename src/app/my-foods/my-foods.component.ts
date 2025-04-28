import { Component } from '@angular/core';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { Food } from '../models';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-my-foods',
  imports: [SearchBarComponent, NgStyle],
  templateUrl: './my-foods.component.html',
  styleUrl: './my-foods.component.css',
})
export class MyFoodsComponent {
  selectedIndex = 0;
  favorites: Food[] = [
    {
      id: 1,
      name: 'Pechuga de pollo (100g)',
      protein: 31,
      carbs: 0,
      fats: 3.6,
      portion: 100,
      calories: 165,
      creation: new Date('2023-06-10T12:30:00'),
      icon: 'ep:food',
    },
    {
      id: 2,
      name: 'Salmón (100g)',
      protein: 25,
      carbs: 0,
      fats: 13,
      portion: 100,
      calories: 208,
      creation: new Date('2023-06-10T13:15:00'),
      icon: 'ep:food',
    },
  ];
  recent: Food[] = [
    {
      id: 3,
      name: 'Arroz blanco (1 taza)',
      protein: 4.2,
      carbs: 45,
      fats: 0.4,
      portion: 100,
      calories: 205,
      creation: new Date('2023-06-10T13:20:00'),
      icon: 'ep:food',
    },
    {
      id: 4,
      name: 'Aguacate (100g)',
      protein: 2,
      carbs: 9,
      fats: 15,
      portion: 100,
      calories: 160,
      creation: new Date('2023-06-11T08:45:00'),
      icon: 'ep:food',
    },
    {
      id: 5,
      name: 'Huevos revueltos (2 unidades)',
      protein: 12,
      carbs: 1,
      fats: 10,
      portion: 100,
      calories: 140,
      creation: new Date('2023-06-11T09:00:00'),
      icon: 'ep:food',
    },
  ];
  allMyFood: Food[] = [
    {
      id: 6,
      name: 'Avena (1 taza cocida)',
      protein: 6,
      carbs: 27,
      fats: 3,
      portion: 100,
      calories: 150,
      creation: new Date('2023-06-11T07:30:00'),
      icon: 'ep:food',
    },
    {
      id: 7,
      name: 'Manzana (1 unidad)',
      protein: 0.5,
      carbs: 25,
      fats: 0.3,
      portion: 100,
      calories: 95,
      creation: new Date('2023-06-11T11:00:00'),
      icon: 'ep:food',
    },
    {
      id: 8,
      name: 'Batido de proteína',
      protein: 24,
      carbs: 8,
      fats: 2,
      portion: 100,
      calories: 150,
      creation: new Date('2023-06-11T16:30:00'),
      icon: 'ep:food',
    },
    {
      id: 9,
      name: 'Almendras (30g)',
      protein: 6,
      carbs: 6,
      fats: 14,
      portion: 100,
      calories: 170,
      creation: new Date('2023-06-12T10:00:00'),
      icon: 'ep:food',
    },
    {
      id: 10,
      name: 'Brócoli (100g)',
      protein: 2.8,
      carbs: 6,
      fats: 0.4,
      portion: 100,
      calories: 35,
      creation: new Date('2023-06-12T12:45:00'),
      icon: 'ep:food',
    },
  ];

  selectTab(index: number) {
    this.selectedIndex = index;
  }
}
