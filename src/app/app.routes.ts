import { Routes } from '@angular/router';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { CustomFoodComponent } from './pages/custom-food/custom-food.component';
import { ManageFoodComponent } from './pages/manage-food/manage-food.component';
import { HealthReportComponent } from './pages/health-report/health-report.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfilePictureComponent } from './pages/user-profile/personal-data/profile-picture/profile-picture.component';
import { NameComponent } from './pages/user-profile/personal-data/name/name.component';
import { EmailComponent } from './pages/user-profile/security/email/email.component';
import { PasswordComponent } from './pages/user-profile/security/password/password.component';
import { DeleteAccountComponent } from './pages/user-profile/security/delete-account/delete-account.component';
import { UserDataComponent } from './pages/preferences/user-data/user-data.component';
import { FitnessPreferencesComponent } from './pages/preferences/fitness-preferences/fitness-preferences.component';
import { NotificationsConfigComponent } from './pages/settings/notifications-config/notifications-config.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'add-food', component: AddFoodComponent },
      { path: 'manage-food', component: ManageFoodComponent },
      { path: 'custom-food', component: CustomFoodComponent },
      { path: 'health-report', component: HealthReportComponent },
      { path: 'profile', component: UserProfileComponent },
      {
        path: 'personal-data',
        component: undefined,
        children: [
          { path: 'profile-picture', component: ProfilePictureComponent },
          { path: 'name', component: NameComponent },
        ],
      },
      {
        path: 'security',
        component: undefined,
        children: [
          { path: 'email', component: EmailComponent },
          { path: 'password', component: PasswordComponent },
          { path: 'delete-account', component: DeleteAccountComponent },
        ],
      },
      { path: 'preferences', component: PreferencesComponent },
      { path: 'user-data', component: UserDataComponent },
      { path: 'fitness-preferences', component: FitnessPreferencesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'notifications', component: NotificationsConfigComponent },
    ],
  },
];
