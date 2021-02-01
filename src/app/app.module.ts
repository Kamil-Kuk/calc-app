import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { BasicComponent } from './component/basic/basic.component';
import { AdvancedComponent } from './component/advanced/advanced.component';
import { ConverterComponent } from './component/converter/converter.component';
import { LogComponent } from './component/log/log.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputComponent } from './component/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BasicComponent,
    AdvancedComponent,
    ConverterComponent,
    LogComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
