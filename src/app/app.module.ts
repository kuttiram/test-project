import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule }  from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    LoginComponent,
    DetailPageComponent,
    NavBarComponent,
    HeroCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [authInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
