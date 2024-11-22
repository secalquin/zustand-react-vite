import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (user: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateProfile: (user) => set({ user }),
}));

export default useUserStore;
