import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService   } from 'ngx-toastr';
import { LoginService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
constructor(private toastr:ToastrService,private router:Router,private auth:LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      let user = this.auth.getToken();      
      if (user) {
        return true;
      }
      else{
        this.toastr.warning("no tiene permisos")
        this.router.navigate(["/login"]);
        return false;
      }
  }
  
}
