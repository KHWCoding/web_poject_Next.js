import { create } from "zustand";
// 상태 관리(store) 라이브러리

interface ToggleState {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const useDarkStore = create<ToggleState>(set => ({
    darkMode: false,
    toggleDarkMode: () => set(state => ({
        darkMode: !state.darkMode
    })),
}));
// create는 set과 get으로 상태 변화를 조회하거나 변경함

export default useDarkStore;