import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="_authService.isAuthenticated$ | async; else loggedOut">
      <button (click)="_authService.logout({ returnTo: document.location.origin })" class="btn btn-outline-dark">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="_authService.loginWithRedirect()" class="btn btn-outline-dark">Log in</button>
    </ng-template>
  `,
  styles: [
  ]
})
export class AuthButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
