import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavListComponent } from './nav/navList.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
