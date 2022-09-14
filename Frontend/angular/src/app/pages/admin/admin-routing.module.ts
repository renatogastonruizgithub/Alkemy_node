import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent} 
  /* canActivate:[GuardsDashboardGuard],
  children:[ 
    {path:'',component:InicioAdminComponent},
    {path:"usuarios",component:UsuariosComponent},   
    {path:"sobre",component:SobreComponent},    
       
    ]}
 */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
