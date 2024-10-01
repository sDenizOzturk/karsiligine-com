import { create } from 'zustand';

export interface ErrorState {
  error: string | undefined;
  errors: string[];

  setError: (error: string) => void;
  setErrors: (errors: string[]) => void;
  clearErrors: () => void;
}

export const useError = create<ErrorState>((set) => ({
  error: undefined,
  errors: [],

  setError: (error: string) => {
    set({ error });
  },
  setErrors: (errors: string[]) => {
    set({ errors });
  },
  clearErrors: () => {
    set({ error: undefined, errors: [] });
  },
}));
