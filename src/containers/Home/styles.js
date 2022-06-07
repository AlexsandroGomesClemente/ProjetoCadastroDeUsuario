import styled from "styled-components";
import Background from "../../assets/bg.svg";

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

export const ContainerItem = styled.div`
  height: 150vh;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 40px 36px;

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

export const Label = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  align-self: flex-start;

  margin-left: 25px;

  color: #eeeeee;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;

  padding-left: 25px;
  margin-bottom: 34px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: white;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  border: none;
  color: #ffffff;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  margin-bottom: 20px;
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
