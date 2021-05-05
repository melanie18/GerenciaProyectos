import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { environment } from '@environments/environment';
import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromStore from '../store/profile.store';
import * as fromReducer from '../store/reducers/profile.reducer';

@Injectable()
export class ProfileService {
  private _url: string;
  private user$: Observable<any>;
  private _user: fromModels.User;

  constructor(
    private _http: HttpClient,
    private _store: Store<fromStore.ProfileState>,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
    this._user = this.getUserEmpty();

    this.user$ = this._store.pipe(select(fromReducer.getUser));
    this.user$.subscribe((user) => {
      if (typeof user !== 'undefined') {
        this._user = user;
      }
    });
  }

  getUserEmpty() {
    return new fromModels.User('', '', '', '', '', '');
  }

  getUserLogged() {
    if (!this._user) {
      return this.getUserEmpty();
    }

    return this._user;
  }

  updateUser(user: any) {
    const params = JSON.stringify(user.data);
    return this._http.put(`${this._url}user/${user.id}`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
