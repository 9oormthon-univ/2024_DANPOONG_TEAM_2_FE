import styled from "styled-components";

export const SearchBar = styled.div`
  width: 92%;
  height: 53px;

  display: flex;
  justify-content: space-between;

  padding: 16px 22px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  background: #fafafa;

  color: #353f3f;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    outline: none;
  }
`;
export const SubmitBtn = styled.button`
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
export const Icon = styled.img`
  width: 1.25rem;
`;
