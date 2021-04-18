import { LoggedInGuard, LoggedOutGuard } from './user-authenticated.guard';

export const guards: any[] = [
  LoggedInGuard, 
  LoggedOutGuard
];

export * from './user-authenticated.guard';
