import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services';
import * as fromServices from '../../services';
import * as fromStoreShared from '@shared/store';
import * as fromStore from '@homepage/store';
import * as fromActions from '../actions/homepage.actions';

@Injectable()
export class HomepageEffects {
  getContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.GetContacts),
      map((action: fromActions.GetContacts) => action.payload),
      exhaustMap((user: string) =>
        this._service.getContacts(user).pipe(
          map((response: any) => new fromActions.SetContacts(response.contacts)),
          catchError(error => of(new fromStoreShared.ErrorAlert(error)))
        )
      )
    )
  });

  setContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.SetContacts),
      map((action: fromActions.SetContacts) => action.payload),
      tap((response) => {
        // CODE
      })
    );
  }, { dispatch: false });

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.GetUsers),
      map((action: fromActions.GetUsers) => action),
      exhaustMap(() =>
        this._service.getUsers().pipe(
          map((response: any) => new fromActions.SetUsers(response.users)),
          catchError(error => of(new fromStoreShared.ErrorAlert(error)))
        )
      )
    )
  });

  setUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.SetUsers),
      map((action: fromActions.SetUsers) => action.payload),
      tap((response) => {
        // CODE
      })
    );
  }, { dispatch: false });

  addContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.AddContact),
      map((action: fromActions.AddContact) => action.payload),
      exhaustMap((data: any) =>
        this._service.addContact(data).pipe(
          map((response: any) => new fromActions.AddContactSuccess(response.message)),
          catchError(error => of(new fromActions.AddContactFailure(error)))
        )
      )
    )
  });

  addContactSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.AddContactSuccess),
      map((action: fromActions.AddContactSuccess) => action.payload),
      tap((response) => {
        this._store.dispatch(new fromStore.GetContacts(this._serviceProfile.getUserLogged()._id));
      })
    );
  }, { dispatch: false });

  addContactFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.AddContactFailure),
      map((action: fromActions.AddContactFailure) => action.payload),
      tap((response: any) => {
        const content = {
          width: '350px',
          data: {
            title: 'Alert',
            message: response
          }
        }
        this._utils.showDialog(content);
      })
    )
  }, { dispatch: false });


  constructor(
    private actions$: Actions,
    private _service: fromServices.HomepageService,
    private _serviceProfile: fromServicesProfile.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.HomepageState>,
  ) {

  }
}
