import { Action } from '@ngrx/store';

import * as fromModels from '@app/models';

export enum ActionTypes {
  GetContacts = '[Homepage] GetContacts',
  SetContacts = '[Homepage] SetContacts',
  GetUsers = '[Homepage] GetUsers',
  SetUsers = '[Homepage] SetUsers',
  AddContact = '[Homepage] AddContact',
  AddContactSuccess = '[Homepage] AddContactSuccess',
  AddContactFailure = '[Homepage] AddContactFailure',
}

export class GetContacts implements Action {
  readonly type = ActionTypes.GetContacts;

  constructor(public payload: string) {}
}

export class SetContacts implements Action {
  readonly type = ActionTypes.SetContacts;

  constructor(public payload: Array<any>) {}
}

export class GetUsers implements Action {
  readonly type = ActionTypes.GetUsers;
}

export class SetUsers implements Action {
  readonly type = ActionTypes.SetUsers;

  constructor(public payload: Array<any>) {}
}

export class AddContact implements Action {
  readonly type = ActionTypes.AddContact;

  constructor(public payload: any) {}
}

export class AddContactSuccess implements Action {
  readonly type = ActionTypes.AddContactSuccess;

  constructor(public payload: string) {}
}

export class AddContactFailure implements Action {
  readonly type = ActionTypes.AddContactFailure;

  constructor(public payload: string) {}
}

export type HomepageActions =
  | GetContacts
  | SetContacts
  | GetUsers
  | SetUsers
  | AddContact
  | AddContactSuccess
  | AddContactFailure;
