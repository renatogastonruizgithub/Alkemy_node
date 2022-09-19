import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Operaciones } from 'src/app/models/ingresos';

import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   user:any=[];
   id:any=[];
  balance:any[]; 
  modal:boolean=false  
  formulario:FormGroup
  categoria: Array<string> = ['impuestos', 'trabajo','entretenimiento','comida','shoping'];
  tipo: Array<string> = ['ingreso', 'egreso'];
  
  constructor(private auht:LoginService, private formBuilder:FormBuilder,  private toast:ToastrService,private service:LoginService,private admiService:AdminService) 
  
  {
    this.formulario=this.formBuilder.group({     
      concepto:['',[Validators.required]],
      monto:['',[Validators.required]],
      fecha:['',[Validators.required]],
      categoria:['',[Validators.required]],
      tipo:['',[Validators.required]],
    });
   }
  
  ngOnInit(): void {
  this.user= this.service.getUserData()
  this.id=this.service.getUserId()
  this.refresh()
  }

  refresh(){
    this.admiService.getBalanceUser(this.id.id).subscribe((res:any[])=>{  
      this.balance=res    
    })  
  }
  logout(){
    this.auht.logout()
  }

  Openmodal(){
    this.modal=!this.modal
  }
  registro(){
    this.formulario.markAllAsTouched();
    console.log(this.formulario.value,this.id.id) 
    if(this.formulario.valid){     
      this.admiService.crear(this.formulario.value,this.id.id).subscribe({
        next:(o:Operaciones)=>{          
          this.toast.success("creado con exito")        
         /*  this.cargando=false;  */      
          this.formulario.reset(); 
          this.refresh()
        },
        error:(error:HttpErrorResponse)=>{
          this.toast.warning(error.error.mensaje)
         /*  this.cargando=false;   */      
        }
      })      
    }   
  }
  
}
