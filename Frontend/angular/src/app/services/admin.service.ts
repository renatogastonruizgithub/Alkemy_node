import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Operaciones } from '../models/ingresos';



@Injectable({
  providedIn: 'root'
})
export class AdminService{
  balanceUrl:string='http://localhost:3000/api/balance/total/'
  ingresoUrl:string='http://localhost:3000/api/movimientos/getIngresos/'
  egresoUrl:string='http://localhost:3000/api/movimientos/getEgresos/'
  create:string="http://localhost:3000/api/movimientos/create/"

  constructor(private http:HttpClient) { }

  getBalanceUser(id:number){
    return this.http.get<any>(this.balanceUrl+id);
  }

  getIngresos(id:number):Observable<Operaciones>{
    return this.http.get<Operaciones>(this.ingresoUrl+id);
  }

  getEgresos(id:number):Observable<Operaciones>{
    return this.http.get<Operaciones>(this.egresoUrl+id);
  }
 
  crear(Operaciones:Operaciones,id:number):Observable<Operaciones>
  {
    return this.http.post<Operaciones>(`${this.create}${id}`,Operaciones);
  }

}
