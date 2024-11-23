import { create } from "zustand";

const useScrapStore = create((set: Function) => ({
  scraps: [] as number[], // 스크랩된 가게 목록: 배열로 타입 지정
  shouldRefetch: false, // 데이터 갱신 플래그

  setScraps: (scraps: number[]) => set({ scraps }), // scraps 상태 업데이트
  addScrap: (storeId: number) =>
    set((state: { scraps: number[] }) => ({
      scraps: [...state.scraps, storeId], // 배열에 새로운 가게 ID 추가
      shouldRefetch: true,
    })),
  removeScrap: (storeId: number) =>
    set((state: { scraps: number[] }) => ({
      scraps: state.scraps.filter((id: number) => id !== storeId), // 배열에서 해당 가게 ID 제거
      shouldRefetch: true,
    })),
  invalidateScraps: () => set({ shouldRefetch: false }), // 갱신 완료 처리
}));

export default useScrapStore;
