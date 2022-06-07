import styled from "styled-components";
import Background from "../../assets/bg2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  height: 150vh;
`;
export const Img = styled.img``;
export const Img2 = styled.img`
  transform: rotate(-180deg);
`;

export const ContainerItem = styled.div`
  height: 150vh;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);

  border-radius: 61px 61px 0px 0px;

  width: 414px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;

  margin-bottom: 80px;
`;

export const Button = styled.button`
  background: transparent;
  width: 342px;
  height: 74px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 14px;

  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  margin-top: 80px;
`;

export const User = styled.li`
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;

  padding: 17px 23px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
