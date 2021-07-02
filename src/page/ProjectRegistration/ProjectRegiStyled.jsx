import styled from 'styled-components';

export const PrjRegiContainer = styled.div`
  padding: 40px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  font-weight: 500;

  .projectregi_section {
    width: 100%;
    max-width: 1500px;
  }

  .titleArea {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0;
    border-bottom: 1.5px solid grey;
    margin-top: 1rem;

    div {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 50px;
      border: 1px solid #eee;
      font-weight: bold;
      font-size: 1.2rem;
      background-color: #fff;
    }
  }

  .projectregi_items {
    width: 100%;
  }
  .projectregi_item {
    display: inline-block;
    margin: 10px 10px 10px 0;
    border: 1px solid black;
    background-color: #fff;
    padding: 5px;
  }
  .projectregi_item_innerwrap {
    display: flex;
  }

  .projectregi_checkbox_area {
    height: 200px;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .projectregi_checkbox_top {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70%;

    input {
      width: 60px;
      height: 60px;
      cursor: pointer;
    }
  }
  .projectregi_checkbox_bot {
    display: flex;

    text-align: center;
    font-size: 16px;
    font-weight: 600;

    height: 30%;

    .ckIcon {
      width: 20%;
      padding: 10px;
    }

    div {
      width: 80%;
      padding: 15px 0 0 0;
      font-size: 20px;
    }

    .projectregi_checkbox_creatorText {
      font-size: 12px;
    }
  }

  .contentArea {
    border: 1px solid grey;
  }

  .prjDesc {
    padding: 10px 1px;
  }
  .btnArea {
    display: flex;
    justify-content: center;
    padding: 20px 0;

    button {
      width: 100px;
      margin: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
