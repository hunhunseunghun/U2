import styled from "styled-components";

export const EleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: 504px;
  margin-right: 5px;
  margin-bottom: 5px;

  .eleImgArea {
    width: 319px;
    height: 179px;
  }
  .eleImg {
    width: 100%;
  }
  .eleDescArea {
    width: 271px;
  }
  .eleDesTitle {
    height: 48px;
    font-size: 21px;
    line-height: 24px;
    font-weight: 500;
  }

  .eleDesc {
    width: 256px;
    font-size: 12px;
    line-height: 15px;
    color: #080505;
  }

  .eleFunc {
    padding-top: 20px;
  }

  .progressArea {
    width: 282px;

    .progressText {
      display: flex;
      font-size: 12px;
      line-height: 18px;
      font-weight: 600;
      color: #ff1204;

      div {
        margin-right: 22px;
      }
    }

    .progressBar {
      width: 100%;
      height: 21px;
      background-color: #ff8f89;
      color: white;
      border-radius: 3px;
      margin-top: 5px;
    }
  }

  .cmntValArea {
    display: flex;

    .cmntIcon {
      width: 20px;
    }
  }

  .shareValArea {
    display: flex;

    .shareIcon {
      width: 20px;
    }
  }
`;
