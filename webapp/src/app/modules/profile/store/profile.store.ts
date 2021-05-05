import { User } from '@app/models/user';

export interface ProfileState {
  isLoading: boolean;
  user?: User;
}

export const initialState: ProfileState = {
  isLoading: false,
};
