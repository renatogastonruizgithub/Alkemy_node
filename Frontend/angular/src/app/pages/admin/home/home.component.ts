import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  balance:any=[];
  constructor( private toast:ToastrService,private service:LoginService,private admiService:AdminService) { }
  
  ngOnInit(): void {
  this.user= this.service.getUserData()
  this.id=this.service.getUserId()
  this.admiService.getBalanceUser(this.id.id).subscribe((res:any[])=>{  
    this.balance=res    
  })
  
  }
 

}
