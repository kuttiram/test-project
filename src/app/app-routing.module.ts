import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeLandingComponent
  },
  {
    path: 'home',
    component: HomeLandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search/:game-search',
    component: HomeComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'detail',
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
