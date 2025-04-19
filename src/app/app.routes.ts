import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { CustomFoodComponent } from './custom-food/custom-food.component';
import { MyFoodsComponent } from './my-foods/my-foods.component';
import { HealthReportComponent } from './health-report/health-report.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'search-food', component: SearchFoodComponent },
      { path: 'custom-food', component: CustomFoodComponent },
      { path: 'my-foods', component: MyFoodsComponent },
      { path: 'health-report', component: HealthReportComponent },
    ],
  },
];
