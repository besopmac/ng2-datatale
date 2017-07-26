import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';

import { DatatableComponent } from './datatable.component';
import { DataFilterPipe } from './data-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ DatatableComponent, DataFilterPipe ],
  exports: [ DatatableComponent ]
} )

export class DatatableModule { }
