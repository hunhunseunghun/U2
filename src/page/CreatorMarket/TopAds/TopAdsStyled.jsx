import styled from 'styled-components';

export const AdsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#ffffff, #c5c5c5);
  text-align: center;
  .contents_wrap {
    position: relative;
    width: 90%;
    height: 100%;
  }

  .title {
    font-size: 30px;
    line-height: 72px;
    font-weight: 700;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  p {
    all: unset;
    font-weight: 500;
    width: 80%;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
  }

  .adsImgWrap {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 30%;
  }
  .adsBtnArea {
    width: 100%;
    height: 100%;
  }

  button {
    all: unset;
    position: absolute;
    bottom: 5%;
    left: 11%;
    width: 80%;
    height: 38px;
    font-weight: 600;
    /* background-color: #ff4438; */
    background: linear-gradient(#ff5e52, #ff1100);
    color: #fff;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      background: linear-gradient(#ff1100, #ff1100);
    }
  }
  @media only screen and (max-width: 1500px) and (min-width: 1350px) {
    .title {
      font-size: 20px;
      line-height: 72px;
      font-weight: 600;
    }

    .title {
      font-size: 25px;
    }
    p {
      all: unset;
      font-weight: 500;
      width: 80%;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0px;
      margin-top: 10%;
    }

    .adsBtnArea {
      width: 80%;
      height: 70%;
    }

    button {
      all: unset;
      position: absolute;
      bottom: 5%;
      left: 11%;
      width: 80%;
      height: 38px;
      font-weight: 600;
      background: linear-gradient(#ff5e52, #ff1100);
      color: #fff;
      border-radius: 4px;

      &:hover {
        cursor: pointer;
        background: linear-gradient(#ff1100, #ff1100);
      }
    }
  }
  @media only screen and (max-width: 1350px) and (min-width: 500px) {
    .title {
      font-size: 20px;
      font-weight: 600;
      margin-top: 3%;
      margin-bottom: 3%;
    }

    .title {
      font-size: 25px;
    }
    p {
      all: unset;
      font-weight: 500;
      width: 80%;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0px;
      margin-top: 10%;
    }

    .adsImgWrap {
      margin-top: 7%;
    }
    .adsBtnArea {
      width: 80%;
      height: 70%;
    }

    button {
      all: unset;
      position: absolute;
      bottom: 5%;
      left: 11%;
      width: 80%;
      height: 38px;
      font-weight: 600;
      background: linear-gradient(#ff5e52, #ff1100);
      color: #fff;
      border-radius: 4px;

      &:hover {
        cursor: pointer;
        background: linear-gradient(#ff1100, #ff1100);
      }
    }
  }
`;
