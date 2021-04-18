import { Action } from '@ngrx/store';

export enum ActionTypes {
  Register = '[Register] Register',
  RegisterSuccess = '[Register] Register Success',
  RegisterFailure = '[Register] Register Failure'
}

export class Register implements Action {
  readonly type = ActionTypes.Register;

  constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = ActionTypes.RegisterSuccess;

  constructor(public payload: any) {}
}

export class RegisterFailure implements Action {
  readonly type = ActionTypes.RegisterFailure;

  constructor(public payload: string) {}
}

export type RegisterActions =
  | Register
  | RegisterSuccess
  | RegisterFailure;
