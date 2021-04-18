import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromActions from '../actions/homepage.actions';

export function HomepageReducer(state = fromStore.initialState, action: fromActions.HomepageActions): fromStore.HomepageState {
  switch (action.type) {
    case fromActions.ActionTypes.GetContacts: {
      return { ...state, ...{
        isLoading: true,
      }};
    }

    case fromActions.ActionTypes.SetContacts: {
      return { ...state, ...{
        isLoading: false,
        contacts: action.payload,
      }};
    }

    case fromActions.ActionTypes.GetUsers: {
      return { ...state, ...{
        isLoading: true,
      }};
    }

    case fromActions.ActionTypes.SetUsers: {
      return { ...state, ...{
        isLoading: false,
        users: action.payload,
      }};
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.HomepageState) => state.isLoading;
const exportContacts = (state: fromStore.HomepageState) => state.contacts;
const exportUsers = (state: fromStore.HomepageState) => state.users;
const selectHomepageState = createFeatureSelector<fromStore.HomepageState>('homepage');

export const getLoading = createSelector(selectHomepageState, exportLoading);
export const getContacts = createSelector(selectHomepageState, exportContacts);
export const getUsers = createSelector(selectHomepageState, exportUsers);
