import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService,private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRoles = this.tokenService.getAuthorities();
    const expectedRoles = route.data['expectedRol'] as Array<string>;
    const formattedExpectedRoles = expectedRoles.map(role => `ROLE_${role.toUpperCase()}`);
    const hasRole = userRoles.some(userRole => formattedExpectedRoles.includes(userRole));
    return hasRole ? true : (this.router.navigate(['/login']), false);
  }

}