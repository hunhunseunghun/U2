import styled from "styled-components";

export const EleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: 504px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 19px;
  padding:2px 1px;
  border: 1px solid #ECECEC;

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
    font-weight: 600;
  }

  .eleDesc {
    width: 256px;
    font-size: 12px;
    line-height: 15px;
    color: #5a5a5a;
    font-weight:500;
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
      color: #f50057;

      div {
        margin-right: 22px;
      }
    }

    .progressBar {
      width: 100%;
      height: 21px;
      background-color: #faa49e;
      border-radius: 3px;
      margin-top: 5px;
    }
  }

  .infoTop{
    
    margin-top:22px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;

    div{
      display:grid;
      place-items: center;
    }
  }

  
  .infoBottom{
    margin-top:22px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  .cmntValArea {
    display: flex;

    .cmntIcon {
      width: 20px;
      margin-right:20px;
    }
  }

  .shareValArea {
    display: flex;

    .shareIcon {
      width: 20px;
      margin-right:20px;
    }
  }


  
`;
