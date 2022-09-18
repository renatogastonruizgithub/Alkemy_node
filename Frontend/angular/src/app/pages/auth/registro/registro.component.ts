import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Registro } from 'src/app/models/registro';
import { LoginService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formularioR: FormGroup;
  cargando: boolean =false;

  constructor(private toastr: ToastrService,
    private formBuilder: FormBuilder, private loginService:LoginService,) {

    this.formularioR = this.formBuilder.group({
      name: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]

    });
  }

  ngOnInit(): void {
  }
  get nombre() {
    return this.formularioR.get('name');
  } 
  get email() {
    return this.formularioR.get('email');
  }
  get pass() {
    return this.formularioR.get('pass');
  }

  registro(){  
    this.formularioR.markAllAsTouched(); 
    if(this.formularioR.valid){
     this.cargando=true;
      this.loginService.nuevoUsuario(this.formularioR.value).subscribe({
        next:(nuevoUsuario:Registro)=>{          
          this.toastr.success("cuenta creada con exito")        
          this.cargando=false;       
          this.formularioR.reset();
        },
        error:(error:HttpErrorResponse)=>{
          this.toastr.warning(error.error.error)
          this.cargando=false;        
        }
      })      
    }   
  }

}
