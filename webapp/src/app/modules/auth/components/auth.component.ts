import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as fromStoreCore from '@core/store'
import * as fromStoreLogin from '@login/store';
import * as fromStoreRegister from '@register/store';
import * as fromStoreRecoveryPassword from '@recovery-password/store';

@Component({
  selector: 'meet-app-auth',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public title: string = 'Welcome to <span>TITLE_PROJECT</span>';
  
  constructor(
    private _store: Store<fromStoreCore.CoreState>,
    public _router: Router,
  ) {
    this.isLoading$ = this._store.pipe(select(fromStoreLogin.getLoading));

    this._router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const path = event.urlAfterRedirects;
      switch (path) {
        case '/login':
          this.isLoading$ = this._store.pipe(select(fromStoreLogin.getLoading));
          break;

        case '/register':
          this.isLoading$ = this._store.pipe(select(fromStoreRegister.getLoading));
          break;

        case '/recovery-password':
          this.isLoading$ = this._store.pipe(select(fromStoreRecoveryPassword.getLoading));
          break;
      }
    });
  }

  ngOnInit() { }

  goTo(path: string) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }
}
