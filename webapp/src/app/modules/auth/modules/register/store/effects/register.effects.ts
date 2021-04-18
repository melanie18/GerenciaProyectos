import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {  of } from 'rxjs';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';

import * as fromServicesShared from '@shared/services';
import * as fromServices from '../../services';
import * as fromStoreCore from '@core/store/store';
import * as fromActions from '../actions/register.actions';
import * as fromActionsCore from '@core/store/actions/router.actions';
import * as fromStoreShared from '@shared/store';

@Injectable()
export class RegisterEffects {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.Register),
      map((action: fromActions.Register) => action.payload),
      exhaustMap((auth: any) => {
        return this._service.register(auth).pipe(
          map(response => new fromActions.RegisterSuccess(response)),
          catchError(error => of(new fromActions.RegisterFailure(error)))
        )
      })
    )
  });

  registerSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.RegisterSuccess),
      map((action: fromActions.RegisterSuccess) => action.payload),
      tap((response: any) => {
        const content = {
          width: '350px',
          data: {
            title: 'Success',
            message: response.message,
          },
          onClose: (result: any) => {
            this._storeCore.dispatch(new fromActionsCore.Go({
              path: ['login']
            }));
          }
        }
        this._utils.showDialog(content);
      })
    )
  }, { dispatch: false });

  registerFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.RegisterFailure),
      map((action: fromActions.RegisterFailure) => action.payload),
      tap((response: any) => {
        const content = {
          width: '350px',
          data: {
            title: 'Alert',
            message: response.message,
            alert: true
          }
        }
        this._utils.showDialog(content);
      })
    )
  }, { dispatch: false });
  
  constructor(
    private actions$: Actions,
    private _service: fromServices.RegisterService,
    private _utils: fromServicesShared.UtilsService,
    private _storeCore: Store<fromStoreCore.CoreState>,
  ) {}
}
