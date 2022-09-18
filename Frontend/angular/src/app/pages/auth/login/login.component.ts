import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/auth.service';
import { Login } from 'src/app/models/login';
import { ToastrService   } from 'ngx-toastr';
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
    private formBuilder:FormBuilder,
   private loginService:LoginService,
   private toast:ToastrService,
   private cookieService: CookieService
  ) { 

    this.formulariod=this.formBuilder.group({     
      pass:['',[Validators.required]],
      email:['',[Validators.required]],
    });
  }
  ngOnInit(): void {
  }
  get usuario(){
    return this.formulariod.get('email');
  }
  get passwords(){
    return this.formulariod.get('pass');
  }

  login(){ 
  this.formulariod.markAllAsTouched(); 
    if(this.formulariod.valid){
      console.log(this.formulariod.value)
      this.cargando=true;
      this.loginService.login(this.formulariod.value).subscribe({
        next:(l:Login)=>{
         this.cargando=false;
        this.cookieService.set('token',l.data)
          this.toast.success("Inicio de sesion con exito ") 
          this.router.navigate(['/admin']);  
        },
        error:(error:HttpErrorResponse)=>{       
            this.toast.warning("Usuario o contraseña no coinciden") 
          this.cargando=false;  
        }
      })
    }
  } 
}//fin class
