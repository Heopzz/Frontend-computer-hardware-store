import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}



canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {


this.authService.checkLogin().subscribe(k => {
  console.log(k);
});
if(!localStorage.getItem('isLoggedIn')) {
  this.router.navigate(['login']);
  return false;
}
const expectedRoles = route.data['roles']
const Role = localStorage.getItem('Role');
if (Role){
  if (expectedRoles && expectedRoles.indexOf(Role) === -1) {
    this.router.navigate(['goods'])
    return false;
  }
}
return true
}


}

