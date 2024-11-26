import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 360px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 72px;
`;

export const TabContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Tab = styled.div<{ active: boolean }>`
  font-size: 16px;
  color: ${({ active }) => (active ? "#004d40" : "#aaa")};
  border-bottom: ${({ active }) => (active ? "2px solid #004d40" : "none")};
  padding-bottom: 5px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 90%;
  padding: 15px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 14px;
  color: black;
  background-color: #fafafa;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 10px 0;
  font-size: 14px;
  color: #818787;
  line-height: 16.8px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none; /* 기본 체크박스를 숨김 */

  &:checked + label {
    background-color: #00df82; /* 체크된 상태에서 배경색 변경 */
    border: 2px solid #00df82;
  }
`;

export const CustomCheckbox = styled.label`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  background-color: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: "✔"; /* 항상 ✔ 표시 */
    color: #ffffff; /* 체크 여부에 따라 색상 변경 */
    font-size: 10px;
    font-weight: lighter;
  }
`;

export const LoginButton = styled.button`
  width: 90%;
  height: 55px;
  padding: 10px;
  background-color: red;
  color: #353f3f;
  font-size: 14px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: #43a047;
  }
`;

export const LinkContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #818787;
  margin: 10px 0;
  cursor: pointer;

`;

export const SocialLoginContainer = styled.div`
  width: 40%;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;

export const SocialButton = styled.div<{ bgColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Tag = styled.div`
  margin-top: 15px;
  color: #818787;
  font-size: 12px;
`;
