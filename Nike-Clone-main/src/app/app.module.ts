import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { NikeComponent } from './components/home/nike/nike.component';
import { FirstNavComponent } from './components/navbar/first-nav/first-nav.component';
import { BnrNavComponent } from './components/navbar/bnr-nav/bnr-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NikeComponent,
    FirstNavComponent,
    BnrNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
