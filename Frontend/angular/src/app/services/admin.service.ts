import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AdminService{
  balanceUrl:string='http://localhost:3000/api/balance/total/'
  constructor(private http:HttpClient) { }




  getBalanceUser(id:number){
    return this.http.get<any>(this.balanceUrl+id);
  }



}
