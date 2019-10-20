import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.auth.user$.pipe(
      take(1),
      map(user => user && user.roles.admin ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          console.log('Access denied - Admins only');
          alert('Access denied - Admins only')
        }
      }
      )
    )
  }
}
