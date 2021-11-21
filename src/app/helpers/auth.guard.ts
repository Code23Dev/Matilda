import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable,} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private router:Router ) {}
  isLogin=false
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
              Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {

    return  this.isLogin;

  }

}
