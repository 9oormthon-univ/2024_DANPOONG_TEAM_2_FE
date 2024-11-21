import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Hr = styled.div`
  width: 96%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 24px;
`;
const Label = styled.label`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 8px;
`;
const Input = styled.input`
  width: 100%;
  height: 63px;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  padding: 0 1.12rem;
  &:focus {
    outline: none;
  }
  margin-bottom: 16px;
`;
const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 107px;
`;
const Chip = styled.div`
  border-radius: 20.5px;
  border: 1px solid #cdcfcf;
  padding: 0.66em 1.33em;
  color: #9f9f9f;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
const SubmitBtn = styled.button`
  width: 100%;
  padding: 1.37em 0;
  border-radius: 10px;
  background: #00df82;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:focus {
    outline: none;
  }
`;

export { Container, Hr, Label, Input, ChipContainer, Chip, SubmitBtn };
