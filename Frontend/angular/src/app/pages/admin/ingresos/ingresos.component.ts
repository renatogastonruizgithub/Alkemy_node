import { Component, OnInit } from '@angular/core';
import { Operaciones } from 'src/app/models/ingresos';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {
  resp:any=[];
  ingresos:Operaciones[];
  id:any=[];
 
  constructor(private admiService:AdminService,private service:LoginService) { }

  ngOnInit(): void {
    this.id=this.service.getUserId()
    this.admiService.getIngresos(this.id.id).subscribe({  
      next:(ing:Operaciones)=>{
        this.ingresos=ing.data
        console.log(this.ingresos)
      },
      error:()=>{
      }      
    })
  }

  
}
