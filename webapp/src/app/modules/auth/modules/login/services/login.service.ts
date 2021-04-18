import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import { environment } from '@environments/environment';
import * as fromServicesShared from '@shared/services';

@Injectable()
export class LoginService {
  private _url: String;

  constructor(
    private _http: HttpClient,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
  }

  login(userToLogin: any, getToken = null) {
    if (getToken != null) {
      userToLogin = Object.assign({}, userToLogin);
      userToLogin.getToken = getToken;
    }

    const params = JSON.stringify(userToLogin);

    return this._http.post(`${this._url}user/login`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
