import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { environment } from '@environments/environment';
import * as fromServicesShared from '@shared/services';
import * as fromStore from '../store/store';
import * as fromReducer from '../store/reducers/login.reducer';

@Injectable()
export class LoginService {
  private _url: String;
  private token$: Observable<any>;
  private _token: string = '';

  constructor(
    private _http: HttpClient,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.LoginState>,
  ) {
    this._url = environment.apiUrl;

    this.token$ = this._store.pipe(select(fromReducer.getToken));
    this.token$.subscribe((token) => {
      if (typeof token !== 'undefined') {
        this._token = token;
      }
    });
  }

  login(userToLogin: any, getToken = null) {
    if (getToken != null) {
      userToLogin = Object.assign({}, userToLogin);
      userToLogin.getToken = getToken;
    }

    const params = JSON.stringify(userToLogin);

    console.log(params);
    return this._http.post(`${this._url}user/login`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  getToken() {
    return this._token;
  }
}
