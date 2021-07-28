import styled from 'styled-components';

export const AdsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 19.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: linear-gradient(#ffffff, #ffffff); */
  background-color: #fafafa;
  text-align: center;

  .contents_wrap {
    position: relative;
    width: 90%;
    height: 100%;
  }

  .title {
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
    padding-top: 10%;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  p {
    all: unset;
    font-weight: 500;
    width: 80%;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
  }

  .adsImgWrap {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 30%;
    img {
      width: 80%;
    }
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
      line-height: 72px;
      font-weight: 600;
    }

    p {
      all: unset;
      font-weight: 500;
      width: 80%;
      font-size: 14px;
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
  @media only screen and (max-width: 1350px) and (min-width: 900px) {
    .title {
      font-weight: 600;
      margin-top: 3%;
      margin-bottom: 3%;
    }

    p {
      all: unset;
      font-weight: 500;
      width: 80%;
      font-size: 14px;
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
  @media only screen and (max-width: 900px) {
    position: static;
    width: 100%;
    display: grid;
    background: linear-gradient(#ffffff, #c5c5c5);
    text-align: center;
    box-sizing: border-box;

    .contents_wrap {
      position: static;
      display: grid;
      place-items: center;
      grid-template-columns: 2fr 6fr 2fr;
      grid-gap: 7px;
      width: 100%;
      height: 100%;
      padding: 10px 0;
    }

    .title {
      padding: 5px;
      font-size: 13px;
      line-height: 15px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;
      word-break: break-all;
    }
    p {
      all: unset;
      display: block;
      font-weight: 500;

      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0px;
      padding: 0 10px;
    }

    .adsImgWrap {
      display: none;
      justify-content: center;
      width: 100%;
      margin-top: 0;
    }
    .adsBtnArea {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    button {
      all: unset;
      font-size: 13px;
      width: 100%;
      height: 28px;
      min-width: 65px;
      max-width: 100px;
      font-weight: 500;
      margin: 5px 7px;

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
