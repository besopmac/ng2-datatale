import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatatableModule } from './datatable/datatable.module';

@NgModule({
  imports: [
    BrowserModule,
    DatatableModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
