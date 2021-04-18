import * as fromModels from '@app/models';

export interface HomepageState {
  isLoading: boolean;
  posts: Array<fromModels.Post>;
}

export const initialState: HomepageState = {
  isLoading: false,
  posts: [],
};
