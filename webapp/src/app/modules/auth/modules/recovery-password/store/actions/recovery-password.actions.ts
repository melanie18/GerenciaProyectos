import { Action } from '@ngrx/store';

export enum ActionTypes {
  RecoveryPassword = '[RecoveryPassword] RecoveryPassword',
  RecoveryPasswordSuccess = '[RecoveryPassword] RecoveryPassword Success',
  RecoveryPasswordFailure = '[RecoveryPassword] RecoveryPassword Failure',
  ChangePassword = '[RecoveryPassword] ChangePassword',
  ChangePasswordSuccess = '[RecoveryPassword] ChangePassword Success',
  ChangePasswordFailure = '[RecoveryPassword] ChangePassword Failure',
}

export class RecoveryPassword implements Action {
  readonly type = ActionTypes.RecoveryPassword;

  constructor(public payload: string) {}
}

export class RecoveryPasswordSuccess implements Action {
  readonly type = ActionTypes.RecoveryPasswordSuccess;

  constructor(public payload: any) {}
}

export class RecoveryPasswordFailure implements Action {
  readonly type = ActionTypes.RecoveryPasswordFailure;

  constructor(public payload: any) {}
}

export class ChangePassword implements Action {
  readonly type = ActionTypes.ChangePassword;

  constructor(public payload: string) {}
}

export class ChangePasswordSuccess implements Action {
  readonly type = ActionTypes.ChangePasswordSuccess;

  constructor(public payload: any) {}
}

export class ChangePasswordFailure implements Action {
  readonly type = ActionTypes.ChangePasswordFailure;

  constructor(public payload: any) {}
}

export type RecoveryPasswordActions =
  | RecoveryPassword
  | RecoveryPasswordSuccess
  | RecoveryPasswordFailure
  | ChangePassword
  | ChangePasswordSuccess
  | ChangePasswordFailure;
