import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import {CookieService} from 'ngx-cookie-service';
import { Registro } from '../models/registro';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
url:string = 'http://localhost:3000/api/login/session'
url2:string ='http://localhost:3000/api/register/user'
constructor(private router:Router, private http:HttpClient, private cookieService: CookieService) { }

login(loginUsuario: Login): Observable<Login> {
  return this.http.post<Login>(this.url, loginUsuario);
}
nuevoUsuario(nuevoUser:Registro):Observable<Registro>{

  return this.http.post<Registro>(this.url2, nuevoUser);
}




public setToken(login:Login):void{
  return this.cookieService.set('token',login.data)
 }
 
public getToken():string{
 return this.cookieService.get('token')
}

public isLogged():boolean{ 
 if(this.getToken()){
   return true
 } 
  return false
}

public getUserData():object {
  if (!this.isLogged()) {
    return null!;
  }
  const token = this.getToken();
  //saco .
  const payload = token!.split('.')[1];
  //decodifico base64
  const payloadDecoded = atob(payload);
  const values = JSON.parse(payloadDecoded);
  const username = [{
    id:Number=values.id,
    name:String =values.nombre
  }] 
  return username;
}
public getUserId():Number {
  if (!this.isLogged()) {
    return null!;
  }
  const token = this.getToken();
  //saco .
  const payload = token!.split('.')[1];
  //decodifico base64
  const payloadDecoded = atob(payload);
  const values = JSON.parse(payloadDecoded);
  const usernID =values
  
  return usernID;
}

public logout():void
{
   this.cookieService.delete('token')
  this.router.navigate(['/login']);
}

}
