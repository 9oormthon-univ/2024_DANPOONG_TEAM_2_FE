import React, { useState } from "react";
import styled from "styled-components";
import ValueList from "../component/home/value";

const categoryData: Record<string, string[][]> = {
  패션: [
    ["의류", "주얼리"],
    ["신발", "가방"],
    ["아이웨어", "언더웨어"],
    ["악세서리", ""],
  ],
  뷰티: [
    ["스킨케어", "메이크업"],
    ["향수", "헤어케어"],
  ],
  "홈, 리빙": [
    ["가구", "인테리어"],
    ["주방", "조명"],
  ],
  스포츠: [
    ["운동복", "스포츠 용품"],
    ["헬스 기구", "헬스장"],
  ],
  푸드: [
    ["유기농", "전통음식"],
    ["가공식품", "특산물"],
    ["건강식", "제과"],
    ["디저트", "주류"],
  ],
  클래스: [[]],
  반려동물: [[]],
  기술: [[]],
  게임: [[]],
  키즈: [[]],
};

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("패션");

  return (
    <CategoryContainer>
      <CategoryHeader>
        <SearchBarContainer>
          <SearchInput />
          <SearchIcon src="/assets/search_icon.png" alt="검색" />
        </SearchBarContainer>
      </CategoryHeader>
      <ValueList />

      <CategoryMain>
        <CategorySection>
          <LeftCategoryList>
            {Object.keys(categoryData).map((category) => (
              <CategoryItem
                key={category}
                selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CategoryItem>
            ))}
          </LeftCategoryList>

          <RightCategoryList>
            <CategoryGroupTitle>{selectedCategory}</CategoryGroupTitle>
            {categoryData[selectedCategory]?.map((item, index) => (
              <CategoryItems key={index}>
                <CategorySubItem>{item[0]}</CategorySubItem>
                <CategorySubItem>{item[1]}</CategorySubItem>
              </CategoryItems>
            ))}
          </RightCategoryList>
        </CategorySection>
      </CategoryMain>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;
  color: black;
`;

const CategoryHeader = styled.div`
  padding: 62px 16px;
  width: 100%;
  height: 10%;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 53px;
  border: 1px solid #e0e0e0;
  border-radius: 20px; /* 둥근 모서리 */
  padding: 0 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); /* 살짝 그림자 */
`;

const SearchInput = styled.input`
  flex: 1; /* 입력창이 남은 공간을 채우도록 설정 */
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
  background-color: transparent;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const CategoryMain = styled.div`
  width: 100%;
  height: 63%;
`;

const CategorySection = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const LeftCategoryList = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CategoryItem = styled.div<{ selected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  height: 100%;
  justify-content: center;
  color: ${(props) => (props.selected ? "#00df82" : "#333")};
  background-color: ${(props) => (props.selected ? "#f2f3f3" : "transparent")};
  cursor: pointer;
  &:hover {
    color: #00df82;
    font-weight: bold;
  }
`;

const RightCategoryList = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f3f3;
`;

const CategoryGroupTitle = styled.div`
  font-size: 14px;
  padding: 13px 16px;
  width: 100%;
  font-weight: bold;
  color: #00df82;
  margin-left: 5%;
`;

const CategoryItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #d9d9d9;
  width: 90%;
  margin: 0px 5%;
`;

const CategorySubItem = styled.div`
  padding: 15px;
  line-height: 16.94px;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  cursor: pointer;
  &:hover {
    color: #00df82;
  }
  text-align: left; /* 텍스트 왼쪽 정렬 */
`;
