import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import { environment } from '@environments/environment';
import * as fromServicesShared from '@shared/services';

@Injectable()
export class HomepageService {
  private _url: String;

  constructor(
    private _http: HttpClient,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
  }

  addContact(data: any) {
    const params = JSON.stringify({ 
      userId: data.user,
      contactId: data.contact
    });
    return this._http.post(`${this._url}user/contact/add`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  getContacts(user: string) {
    return this._http.get(`${this._url}user/contact/all/${user}`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  getUsers() {
    return this._http.get(`${this._url}user/all`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
