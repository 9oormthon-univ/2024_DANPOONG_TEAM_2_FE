// Enum 타입 정의
enum CertifiedType {
  CO2_FOOTPRINT = "탄소발자국",
  EMPLOY_VULNERABLE_CLASS = "취약계층 고용",
  LOCAL_PRODUCT = "지역생산",
  ORGANIC = "유기농",
  RECYCLE_ENERGY = "재생에너지",
  CULTURAL_PRESERVE = "문화보존",
  ANIMAL_FRIENDLY = "동물복지",
}

// 영어 → 한글 변환 함수
export const translateToKorean = (english: string): string => {
  const entries = Object.entries(CertifiedType);
  for (const [key, value] of entries) {
    if (key === english) {
      return value;
    }
  }
  throw new Error(`Translation not found for: ${english}`);
};

// 한글 → 영어 변환 함수
export const translateToEnglish = (korean: string): string => {
  const entries = Object.entries(CertifiedType);
  for (const [key, value] of entries) {
    if (value === korean) {
      return key;
    }
  }
  throw new Error(`Translation not found for: ${korean}`);
};
