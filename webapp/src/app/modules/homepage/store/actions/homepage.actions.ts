import { Action } from '@ngrx/store';

import { User, Authenticate } from '@app/models/user';

export enum ActionTypes {
  SetFilters = '[Homepage] SetFilters',
  GetPosts = '[Homepage] GetPosts',
  SetPosts = '[Homepage] SetPosts',
}

export class SetFilters implements Action {
  readonly type = ActionTypes.SetFilters;

  constructor(public payload: any) {}
}

export class GetPosts implements Action {
  readonly type = ActionTypes.GetPosts;
}

export class SetPosts implements Action {
  readonly type = ActionTypes.SetPosts;

  constructor(public payload: any) {}
}

export type HomepageActions =
  | SetFilters
  | GetPosts
  | SetPosts;
