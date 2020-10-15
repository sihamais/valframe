import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, ExtraOptions, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { DataService } from './services/data/data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { SafeHtmlPipe } from './home/SafeHtml.pipe';
import { DocFormComponent } from './doc-form/doc-form.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: AuthComponent },
  { path: 'newDoc', component: DocFormComponent },
  { path: '**', redirectTo: ''}
];  

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    AuthComponent,
    HomeComponent,
    DocFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
  ],
  providers: [
    SafeHtmlPipe,
    AuthService,
    AuthGuardService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
