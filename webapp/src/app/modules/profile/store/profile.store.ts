import { User } from '@app/models/user';

export interface ProfileState {
  isLoading: boolean;
  user?: User;
  token?: string;
}

export const initialState: ProfileState = {
  isLoading: false,
  token: '',
};
