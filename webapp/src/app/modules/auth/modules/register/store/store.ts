export interface RegisterState {
  isLoading: boolean;
  error?: string;
}

export const initialState: RegisterState = {
  isLoading: false,
};
