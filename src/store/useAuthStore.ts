import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  signup: (name: string, email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      user: null,
      loading: false,
      error: null,

      // 🔵 SIGNUP
      signup: async (name, email, password) => {
        set({ loading: true, error: null });

        try {
          // Simulate API + save credentials to AsyncStorage
          const newUser = {
            id: Date.now().toString(),
            name,
            email,
          };

          await AsyncStorage.setItem('fakeUser', JSON.stringify({ email, password }));
          set({ user: newUser, loading: false });

          return true;
        } catch (err) {
          set({ loading: false, error: 'Signup failed' });
          return false;
        }
      },

      // 🟢 LOGIN
      login: async (email, password) => {
        set({ loading: true, error: null });

        try {
          const stored = await AsyncStorage.getItem('fakeUser');

          if (!stored) {
            set({ loading: false, error: 'User not found' });
            return false;
          }

          const parsed = JSON.parse(stored);

          if (parsed.email === email && parsed.password === password) {
            const loggedInUser = {
              id: Date.now().toString(),
              name: 'User',
              email,
            };

            set({ user: loggedInUser, loading: false });
            return true;
          }

          set({ loading: false, error: 'Invalid credentials' });
          return false;
        } catch (err) {
          set({ loading: false, error: 'Login failed' });
          return false;
        }
      },

      // 🔴 LOGOUT
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
