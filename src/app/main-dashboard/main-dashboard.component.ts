import { Component } from '@angular/core';
import { RadialProgressBarComponent } from '../components/radial-progress-bar/radial-progress-bar.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { Food } from '../models';

@Component({
  selector: 'app-main-dashboard',
  imports: [RadialProgressBarComponent, SearchBarComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent {
  recentEntries: Food[] = [
    {
      id: 1,
      name: 'Pechuga de pollo',
      protein: 31,
      carbs: 0,
      fats: 3.6,
      dateTime: new Date('2023-05-15T12:30:00'),
      icon: 'ep:food',
    },
    {
      id: 2,
      name: 'Arroz blanco',
      protein: 2.7,
      carbs: 28,
      fats: 0.3,
      dateTime: new Date('2023-05-15T13:15:00'),
      icon: 'ep:food',
    },
    {
      id: 3,
      name: 'Aguacate',
      protein: 2,
      carbs: 9,
      fats: 15,
      dateTime: new Date('2023-05-16T08:45:00'),
      icon: 'ep:food',
    },
    {
      id: 4,
      name: 'Huevos revueltos',
      protein: 12,
      carbs: 1,
      fats: 10,
      dateTime: new Date('2023-05-16T09:00:00'),
      icon: 'ep:food',
    },
    {
      id: 5,
      name: 'Batido de proteína',
      protein: 24,
      carbs: 8,
      fats: 2,
      dateTime: new Date('2023-05-16T16:30:00'),
      icon: 'ep:food',
    },
    {
      id: 6,
      name: 'Huevos revueltos',
      protein: 12,
      carbs: 1,
      fats: 10,
      dateTime: new Date('2023-05-16T09:00:00'),
      icon: 'ep:food',
    },
    {
      id: 7,
      name: 'Batido de proteína',
      protein: 24,
      carbs: 8,
      fats: 2,
      dateTime: new Date('2023-05-16T16:30:00'),
      icon: 'ep:food',
    },
  ];
}
