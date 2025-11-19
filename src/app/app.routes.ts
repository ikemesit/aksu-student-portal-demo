import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { LoginComponent } from './auth/login/login';
import { authGuard } from './auth.guard';
import { TranscriptsComponent } from './dashboard/academics/transcripts/transcripts';
import { CourseRegistrationComponent } from './dashboard/academics/course-registration/course-registration';
import { FeesComponent } from './dashboard/finance/fees/fees';
import { HomeComponent } from './dashboard/home';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'academics', component: TranscriptsComponent },
      { path: 'courses', component: CourseRegistrationComponent },
      { path: 'fees', component: FeesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
