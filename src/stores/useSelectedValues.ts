import { create } from "zustand";
import { values } from "../constants/Values";

// 필터 상태를 관리하는 Zustand 스토어
interface FilterState {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
  resetFilters: () => void;
}
const valuesName = Object.values(values).map((value) => value.englishName);

export const useFilterStore = create<FilterState>((set) => ({
  selectedFilters: valuesName, // 초기값은 모든 필터가 선택된 상태
  toggleFilter: (filter: string) =>
    set((state) => {
      // 만약 필터가 하나만 선택된 상태에서 다시 클릭하면 모든 필터를 선택
      if (
        state.selectedFilters.length === 1 &&
        state.selectedFilters[0] === filter
      ) {
        return {
          selectedFilters: valuesName,
        }; // 모든 필터 선택
      } else {
        return { selectedFilters: [filter] }; // 클릭된 필터만 선택
      }
    }),
  resetFilters: () => set({ selectedFilters: valuesName }), // 모든 필터 활성화
}));
