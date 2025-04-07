import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SearchFoodComponent } from './search-food/search-food.component';

export const routes: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'search-food', component: SearchFoodComponent },
];
