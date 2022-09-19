import { Component, OnInit } from '@angular/core';
import { Operaciones } from 'src/app/models/ingresos';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent implements OnInit {
  resp:any=[];
  egresos:Operaciones[];
  id:any=[];
 
  constructor(private admiService:AdminService,private service:LoginService) { }

  ngOnInit(): void {
    this.id=this.service.getUserId()
    this.admiService.getEgresos(this.id.id).subscribe({  
      next:(ing:Operaciones)=>{
        this.egresos=ing.data
        console.log(this.egresos)
      },
      error:()=>{
      }      
    })
  }
}
