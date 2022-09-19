import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { TabModule } from 'angular-tabs-component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TabModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
