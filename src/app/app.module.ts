import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, ExtraOptions, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ValueDriversComponent } from './main/value-drivers/value-drivers.component';
import { DifferentiatorsComponent } from './main/differentiators/differentiators.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top'
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    ValueDriversComponent,
    DifferentiatorsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
