// 1. 가치를 정의하는 타입
type ValueDefinition = {
  name: string; // 가치의 이름
  englishName: string; // 영어 표현
  color: string; // 가치를 상징하는 색상 (CSS 컬러 값)
  imageUrl: string; // 가치를 상징하는 이미지 URL
};

// 2. 가치를 저장할 객체
export const values: Record<string, ValueDefinition> = {
  CO2_FOOTPRIN: {
    name: "탄소발자국",
    englishName: "CO2_FOOTPRIN",
    color: "#A27BFF", // 보라색 계열-
    imageUrl: "https://example.com/images/passion.png", // 예시 이미지 URL
  },
  EMPLOY_VULNERABLE_CLASS: {
    name: "취약계층 고용",
    englishName: "EMPLOY_VULNERABLE_CLASS",
    color: "#595959", // 회색 -
    imageUrl: "https://example.com/images/creativity.png",
  },
  LOCAL_PRODUCT: {
    name: "지역생산",
    englishName: "LOCAL_PRODUCT",
    color: "#18B6FF", // 하늘색 -
    imageUrl: "https://example.com/images/collaboration.png",
  },
  ORGANIC: {
    name: "유기농",
    englishName: "ORGANIC",
    color: "#00DF82", // 초록색
    imageUrl: "https://example.com/images/collaboration.png",
  },
  RECYCLE_ENERGY: {
    name: "재생애너지",
    englishName: "RECYCLE_ENERGY",
    color: "#FFC300", // 노란색 -
    imageUrl: "https://example.com/images/collaboration.png",
  },
  CULTURAL_PRESERVE: {
    name: "문화보존",
    englishName: "CULTURAL_PRESERVE",
    color: "#FF6A6C", // 핑크색 -
    imageUrl: "https://example.com/images/collaboration.png",
  },
  ANIMAL_FRIENDLY: {
    name: "동물복지",
    englishName: "ANIMAL_FRIENDLY",
    color: "#FF8426", // 주황색-
    imageUrl: "https://example.com/images/collaboration.png",
  },
};

// 3. 가치를 이름으로 검색하는 함수
export function getValue(name: string): ValueDefinition | undefined {
  return Object.values(values).find((value) => value.name === name);
}
