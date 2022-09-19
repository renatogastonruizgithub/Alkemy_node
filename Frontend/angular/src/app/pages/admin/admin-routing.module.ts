import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresosComponent } from './egresos/egresos.component';
import { HomeComponent } from './home/home.component';
import { IngresosComponent } from './ingresos/ingresos.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[ 
    {path:'ingresos',component:IngresosComponent},
    {path:'egresos',component:EgresosComponent},
       
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
