import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../profile.store';
import * as fromActions from '../actions/profile.actions';

export function ProfileReducer(state = fromStore.initialState, action: fromActions.ActionsProfile): fromStore.ProfileState {
  switch (action.type) {
    case fromActions.ProfileActionTypes.UserLogged: {
      return { ...state, ...{
        user: action.payload,
      }};
    }
    case fromActions.ProfileActionTypes.UserUpdating: {
      return { ...state, ...{
          isLoading: true,
        }};
    }

    case fromActions.ProfileActionTypes.UserUpdated: {
      return { ...state, ...{
        user: action.payload,
        isLoading: false,
      }};
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.ProfileState) => state.isLoading;
const exportUser = (state: fromStore.ProfileState) => state.user;

export const selectProfileState = createFeatureSelector<fromStore.ProfileState>('profile');

export const getLoading = createSelector(selectProfileState, exportLoading);
export const getUser = createSelector(selectProfileState, exportUser);
