import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulariod:FormGroup; 
  cargando:boolean=false;
  constructor(
    private router: Router,  
    private formBuilder:FormBuilder
   
  ) { 

    this.formulariod=this.formBuilder.group({     
      password:['',[Validators.required]],
      usernameOrEmail:['',[Validators.required]],
    });
  }
  ngOnInit(): void {
  }
  get usuario(){
    return this.formulariod.get('usernameOrEmail');
  }
  get passwords(){
    return this.formulariod.get('password');
  }

  login(){ 
  /*   this.formulario.markAllAsTouched(); 
    if(this.formulario.valid){
      this.cargando=true;
      this.authService.login(this.formulario.value).subscribe( {
        next:()=>{
         this.cargando=false;           
          this.tokenService.setToken(jwt.tokenDeAcceso);       
          this.toastr.success("Inicio de sesion con exito ")
          this.router.navigate(['/admin']);  
        },
        error:(error:HttpErrorResponse)=>{       
           this.toastr.warning("Usuario o contraseña no coinciden")
          this.cargando=false;  
        }
      })
    }*/
  } 
}//fin class
