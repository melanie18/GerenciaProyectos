import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromServicesShared from '@shared/services';
import * as fromServices from '../../services';
import * as fromActions from '../../store/actions/profile.actions';
import * as fromStoreShared from '@shared/store';

@Injectable()
export class ProfileEffects {
  userUpdating$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ProfileActionTypes.UserUpdating),
      map((action: fromActions.UserUpdating) => action.payload),
      exhaustMap((userToUpdate: any) =>
        this._service.updateUser(userToUpdate).pipe(
          map((response: any) => new fromActions.UserUpdated(response.data)),
          catchError(error => of(new fromStoreShared.ErrorAlert(`
            ${this._utils.renderErrors(error.errors)}
            <p class="mt-10">${error.message}</p>
          `)))
        )
      )
    )
  });

  userUpdated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ProfileActionTypes.UserUpdated),
      map((action: fromActions.UserUpdated) => action.payload),
      tap(() => {
        //this._utils.showDialog();
      })
    )
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private _service: fromServices.ProfileService,
    private _utils: fromServicesShared.UtilsService,
  ) { }
}
