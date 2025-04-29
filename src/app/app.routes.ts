import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { CustomFoodComponent } from './custom-food/custom-food.component';
import { ManageFoodComponent } from './manage-food/manage-food.component';
import { HealthReportComponent } from './health-report/health-report.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'add-food', component: SearchFoodComponent },
      { path: 'manage-food', component: ManageFoodComponent },
      { path: 'custom-food', component: CustomFoodComponent },
      { path: 'health-report', component: HealthReportComponent },
    ],
  },
];
