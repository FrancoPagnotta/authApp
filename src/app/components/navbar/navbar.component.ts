import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;

  constructor(public _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe(res => this.isAuth = res);
  }

}
