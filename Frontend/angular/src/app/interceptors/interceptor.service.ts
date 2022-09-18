import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../services/auth.service';

const headerCookie='x-access-token'
@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{

  constructor(private authService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
{
  let intReq = req;
  const token = this.authService.getToken();
  if (token != null) {
    intReq = req.clone({withCredentials:true});
  }
  return next.handle(intReq);
}
}


export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}]; {


}
