import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-expgn6mt.us.auth0.com',
      clientId: '4EjOtLRD9dRY693r2SsHiXP4Z5aaaM80'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
