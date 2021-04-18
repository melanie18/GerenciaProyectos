import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromActions from '../actions/homepage.actions';

export function HomepageReducer(state = fromStore.initialState, action: fromActions.HomepageActions): fromStore.HomepageState {
    switch (action.type) {
    case fromActions.ActionTypes.GetPosts: {
      return { ...state, ...{
        isLoading: true,
      }};
    }

    case fromActions.ActionTypes.SetPosts: {
      return { ...state, ...{
        isLoading: false,
        posts: action.payload,
      }};
    }

    case fromActions.ActionTypes.SetFilters: {
      return { ...state, ...{
        filter: action.payload,
      }};
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.HomepageState) => state.isLoading;
const exportPosts = (state: fromStore.HomepageState) => state.posts;
const selectHomepageState = createFeatureSelector<fromStore.HomepageState>('homepage');

export const getLoading = createSelector(selectHomepageState, exportLoading);
export const getPosts = createSelector(selectHomepageState, exportPosts);
