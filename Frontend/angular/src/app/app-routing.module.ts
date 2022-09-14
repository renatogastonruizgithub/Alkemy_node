import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'}, 
   {path: 'login', component: LoginComponent},
   {path: 'registro', component: RegistroComponent},  
   {path: 'admin',
     loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
   
   },      
 {path: '**', component: Error404Component}, 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
