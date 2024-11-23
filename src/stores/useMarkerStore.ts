import { create } from "zustand";

interface Marker {
  storeId: number;
  name: string;
  position: { lat: number; lng: number };
  certifiedType: string[];
  [key: string]: any; // 추가 데이터 속성
}

interface MarkerStore {
  globalMarkers: Marker[]; // 화면에 표시되는 마커들
  setGlobalMarkers: (newMarkers: Marker[]) => void; // 마커 리스트 설정
  clearMarkers: () => void; // 마커 초기화
}

export const useMarkerStore = create<MarkerStore>((set) => ({
  globalMarkers: [],
  setGlobalMarkers: (newMarkers) => set({ globalMarkers: newMarkers }),
  clearMarkers: () => set({ globalMarkers: [] }),
}));
