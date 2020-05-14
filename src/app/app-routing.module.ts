import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ThreadComponent } from './thread/thread.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'success',
    component: TemplateContainerComponent,
    children: [
      {
        path: 'threads',
        component: ThreadComponent
      },
      {
        path: 'training',
        component: TrainingContainerComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
