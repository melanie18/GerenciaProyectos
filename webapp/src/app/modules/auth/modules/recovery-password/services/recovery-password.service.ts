import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import { environment } from '@environments/environment';

import * as fromServicesShared from '@shared/services';

@Injectable()
export class RecoveryPasswordService {
  private _url: String;

  constructor(
    private _http: HttpClient,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
  }

  recoveryPassword(email: string) {
    return this._http.get(`${this._url}user/recovery-password/${email}`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  changePassword(data: any) {
    const params = JSON.stringify(data);
    return this._http.post(`${this._url}user/change-password`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
