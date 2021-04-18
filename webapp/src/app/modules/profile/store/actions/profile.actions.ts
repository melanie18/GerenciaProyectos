import { Action } from '@ngrx/store';

import { User} from '@app/models';

export enum ProfileActionTypes {
  UserLogged = '[Profile] UserLogged',
  UserUpdating = '[Profile] UserUpdating',
  UserUpdated = '[Profile] UserUpdated',
}

export class UserLogged implements Action {
  readonly type = ProfileActionTypes.UserLogged;

  constructor(public payload: any) {}
}

export class UserUpdating implements Action {
  readonly type = ProfileActionTypes.UserUpdating;

  constructor(public payload: any) {}
}

export class UserUpdated implements Action {
  readonly type = ProfileActionTypes.UserUpdated;

  constructor(public payload: User) {}
}

export type ActionsProfile =
  | UserLogged
  | UserUpdating
  | UserUpdated;
