import * as fromModels from '@app/models';

export interface HomepageState {
  isLoading: boolean;
  contacts: Array<fromModels.User>;
  users: Array<fromModels.User>;
}

export const initialState: HomepageState = {
  isLoading: false,
  contacts: [],
  users: []
};
