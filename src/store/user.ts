import { getBaseUrl } from '@/utils/getBaseUrl';
import { create } from 'zustand';

export const userStore = create((set) => ({
  user: {
    full_name: 'Livia',
  },
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),
  fetchUser: async () => {
    const base = getBaseUrl();
    const response = await fetch(`${base}/api/user`);
    const fetchUser = await response.json();
    set({ user: fetchUser });
  },
}));
