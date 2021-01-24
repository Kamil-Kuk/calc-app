import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddingComponent } from './component/adding/adding.component';
import { SubtractionComponent } from './component/subtraction/subtraction.component';
import { MultiplicationComponent } from './component/multiplication/multiplication.component';
import { DivisionComponent } from './component/division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivisionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
