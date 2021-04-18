import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { Observable,  of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromActionsShared from '@shared/store';
import * as fromServicesShared from '@shared/services';

import * as fromServices from '../../services';
import * as fromActions from '../actions/homepage.actions';

@Injectable()
export class HomepageEffects {
  getPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.GetPosts),
      map((action: fromActions.GetPosts) => action),
      exhaustMap(() =>
        this._service.getPosts().pipe(
          map((response: any) => new fromActions.SetPosts(response)),
          catchError(error => of(new fromActionsShared.ErrorAlert(error)))
        )
      )
    )
  });

  setEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.ActionTypes.SetPosts),
      map((action: fromActions.SetPosts) => action.payload),
      tap((response) => {
        // CODE
      })
    );
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private _service: fromServices.HomepageService,
    private _utils: fromServicesShared.UtilsService,
  ) {}
}
