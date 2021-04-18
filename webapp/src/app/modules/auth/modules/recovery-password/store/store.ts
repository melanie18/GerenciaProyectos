import * as fromModels from '@app/models';

export interface RecoveryPasswordState {
  isLoading: boolean;
  error?: string;
}

export const initialState: RecoveryPasswordState = {
  isLoading: false,
};
