import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';

import * as fromServicesShared from '@shared/services';
import * as fromStoreCore from '@core/store';
import * as fromServices from '@recovery-password/services';
import * as fromActions from '../actions/recovery-password.actions';

@Injectable()
export class RecoveryPasswordEffects {
  recoveryPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.RecoveryPassword),
      map((action: fromActions.RecoveryPassword) => action.payload),
      exhaustMap((email: string) =>
        this._service.recoveryPassword(email).pipe(
          map(response => new fromActions.RecoveryPasswordSuccess(response)),
          catchError(error => of(new fromActions.RecoveryPasswordFailure(error)))
        )
      )
    )
  });

  recoveryPasswordSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.RecoveryPasswordSuccess),
      map((action: fromActions.RecoveryPasswordSuccess) => action.payload),
      tap((response) => {
        const content = {
          width: '350px',
          data: {
            title: 'Confirmation',
            message: response.message,
          },
          onClose: (result: any) => {
            this._storeCore.dispatch(new fromStoreCore.Go({
              path: ['login']
            }));
          }
        }
        this._utils.showDialog(content);
      })
    )
  }, { dispatch: false });

  recoveryPasswordFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.RecoveryPasswordFailure),
      map((action: fromActions.RecoveryPasswordFailure) => action.payload),
      tap((response: any) => {
        const content = {
          title: 'Alert',
          message: response.message,
          modal: {
            alert: true
          }
        }
        this._utils.showDialog(content);
      })
    )
  }, { dispatch: false });

  changePassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.ChangePassword),
      map((action: fromActions.ChangePassword) => action.payload),
      exhaustMap((data: any) =>
        this._service.changePassword(data).pipe(
          map(response => new fromActions.ChangePasswordSuccess(response)),
          catchError(error => of(new fromActions.ChangePasswordFailure(error)))
        )
      )
    )
  });

  changePasswordSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.ChangePasswordSuccess),
      map((action: fromActions.ChangePasswordSuccess) => action.payload),
      tap((response) => {
        const content = {
          width: '350px',
          data: {
            title: 'Confirmation',
            message: response.message,
          },
          onClose: (result: any) => {
            this._storeCore.dispatch(new fromStoreCore.Go({
              path: ['login']
            }));
          }
        }
        this._utils.showDialog(content);
      })
    )
  }, { dispatch: false });

  changePasswordFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.ChangePasswordFailure),
      map((action: fromActions.ChangePasswordFailure) => action.payload),
      tap((response: any) => {
        const content = {
          title: 'Alert',
          message: response.message,
          modal: {
            alert: true
          }
        }
        this._utils.showDialog(content);
      })
    )
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private _service: fromServices.RecoveryPasswordService,
    private _utils: fromServicesShared.UtilsService,
    private _storeCore: Store<fromStoreCore.CoreState>,
  ) {}
}
