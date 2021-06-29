import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  padding: 10px 10px;
  border: 1px dashed black;
  margin: 10px;
  width: 900px;
  .ckBoxArea {
    width: 200px;
    padding: 10px;
    border: 1px solid red;
  }
  .ckBoxTop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ckBox {
    margin: 3px 3px 3px 3px;
    zoom: 9;
  }
  .ckIcon {
    width: 30px;
    margin-right: 10px;
  }
  .ckBoxBot {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    .chkTextEdit {
      font-size: 1.3rem;
    }
  }
  .ckBoxTop {
    border: 1px solid red;
  }

  .contentTitle {
    display: flex;
    align-items: center;
    div {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
  p {
    all: unset;
    padding: 0 35px;
  }
  .textIcon {
    zoom: 2;
  }
`;
