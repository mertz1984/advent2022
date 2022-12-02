import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Puzzle1Component } from './puzzle1/puzzle1.component';

@NgModule({
  declarations: [
    AppComponent,
    Puzzle1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
