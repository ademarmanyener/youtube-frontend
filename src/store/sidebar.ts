import { create } from "zustand";

const useSidebarStore = create((set) => ({
  isSidebarClickable: true,
  isSidebarVisible: true,
  enableSidebarClickability: () => set((state: any) => ({ isSidebarClickable: true })),
  disableSidebarClickability: () => set((state: any) => ({ isSidebarClickable: false })),
  toggleSidebarVisibility: () => set((state: any) => ({ isSidebarVisible: !state.isSidebarVisible })),
}));

export default useSidebarStore;