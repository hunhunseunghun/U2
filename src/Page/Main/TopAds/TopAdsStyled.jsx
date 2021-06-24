import styled from "styled-components";

export const AdsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 342px;
  height: 515px;
  background: linear-gradient(#ffffff, #c5c5c5);
  text-align: center;

  .title {
    margin-top: 50px;
    font-size: 30px;
    line-height: 72px;
    font-weight: 600;
  }
  p {
    all: unset;
    font-weight: 500;
    width: 180px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0px;
  }

  .adsImgWrap {
    height: 186px;
    width: 176px;
    margin-top: 49px;
    margin-bottom: 40px;
  }

  button {
    all: unset;
    width: 186px;
    height: 38px;
    font-weight: 600;
    background-color: #ff4438;
    color: #fff;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      background-color: #ff1405;
    }
  }
`;
