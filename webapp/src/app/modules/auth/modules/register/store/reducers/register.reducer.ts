import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromActions from '../actions/register.actions';

export function RegisterReducer(state = fromStore.initialState, action: fromActions.RegisterActions): fromStore.RegisterState {
    switch (action.type) {
    case fromActions.ActionTypes.Register: {
      return { ...state, ...{
        isLoading: true,
      }};
    }

    case fromActions.ActionTypes.RegisterSuccess: {
      return { ...state, ...{
        isLoading: false,
      }};
    }

    case fromActions.ActionTypes.RegisterFailure: {
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

const exportLoading = (state: fromStore.RegisterState) => state.isLoading;
const exportError = (state: fromStore.RegisterState) => state.error;
const selectRegisterState = createFeatureSelector<fromStore.RegisterState>('register');

export const getLoading = createSelector(selectRegisterState, exportLoading);
export const getError = createSelector(selectRegisterState, exportError);
