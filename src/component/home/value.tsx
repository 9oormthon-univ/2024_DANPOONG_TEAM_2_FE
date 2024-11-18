import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ValueList: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <ScrollContainer ref={scrollContainerRef}>
        <Content>
          {items.map((item, index) => (
            <Circle key={`original-${index}`}>
              <Image src={item.src} alt={item.label} />
              <Label>{item.label}</Label>
            </Circle>
          ))}
          {items.map((item, index) => (
            <Circle key={`duplicate-${index}`}>
              <Image src={item.src} alt={item.label} />
              <Label>{item.label}</Label>
            </Circle>
          ))}
        </Content>
      </ScrollContainer>
    </Container>
  );
};

export default ValueList;

const items = [
  { src: "/assets/animal_circle.png", label: "동물 복지" },
  { src: "/assets/region_circle.png", label: "지역 생산" },
  { src: "/assets/energy_circle.png", label: "재생 에너지" },
  { src: "/assets/cultural_circle.png", label: "문화 보존" },
  { src: "/assets/hire_circle.png", label: "취약계층 고용" },
  { src: "/assets/footprint_circle.png", label: "탄소발자국 절감" },
];

const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const ScrollContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
`;

const Circle = styled.div`
  flex-shrink: 0;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

const Label = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  text-transform: capitalize;
`;
