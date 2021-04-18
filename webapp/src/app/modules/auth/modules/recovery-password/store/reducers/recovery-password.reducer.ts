import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromActions from '../actions/recovery-password.actions';

export function RecoveryPasswordReducer(state = fromStore.initialState, action: fromActions.RecoveryPasswordActions): fromStore.RecoveryPasswordState {
    switch (action.type) {
    case fromActions.ActionTypes.RecoveryPassword: {
      return { ...state, ...{
        isLoading: true,
      }};
    }

    case fromActions.ActionTypes.RecoveryPasswordSuccess: {
      return { ...state, ...{
        loggedIn: true,
        isLoading: false,
        user: action.payload.user,
      }};
    }

    case fromActions.ActionTypes.RecoveryPasswordFailure: {
      return { ...state, ...{
        isLoading: false,
        error: action.payload,
      }};
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.RecoveryPasswordState) => state.isLoading;
const exportError = (state: fromStore.RecoveryPasswordState) => state.error;
const selectRecoveryPasswordState = createFeatureSelector<fromStore.RecoveryPasswordState>('recovery-password');

export const getLoading = createSelector(selectRecoveryPasswordState, exportLoading);
export const getError = createSelector(selectRecoveryPasswordState, exportError);
