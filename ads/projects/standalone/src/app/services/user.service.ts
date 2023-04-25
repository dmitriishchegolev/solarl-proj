import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router) {}

  public isLoggined() {
    return timer(2000).pipe(map(() => this.router.createUrlTree(['ads'])));
  }

  public isAdmin() {
    return this.router.createUrlTree(['ads', '123']);
  }
}
