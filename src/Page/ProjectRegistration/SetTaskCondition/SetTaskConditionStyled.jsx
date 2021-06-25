import styled from "styled-components";

export const TcContainer = styled.div`
  width: 100%;
  padding: 90px 20px 0 20px;

  .noDisplay {
    display: none;
  }
  .titleArea {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0;
    border-bottom: 2px solid grey;
    margin-top: 1rem;

    div {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 50px;
      border: 1px solid grey;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  .ele {
    display: flex;
  }
  .menu {
    display: flex;
    min-width: 150px;
    align-items: center;
    border-right: 1px solid #c2c2c28b;
    border-top: 1px solid #00000023;
    background-color: #80808054;
    padding-left: 10px;
    min-height: 50px;
  }
  .inputInfo {
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid #00000023;
    padding: 0 10px;
  }
  .radioWrap {
    display: flex;

    div {
      margin-left: 5px;
      margin-right: 10px;
    }
  }
  .setTcWrap {
    margin-top: 2rem;
  }

  .tc {
    width: 100%;
    .snsTc {
      width: 100%;
      border-collapse: collapse;
    }
    .snsTc th,
    .snsTc td {
      padding: 10px;
      border: 1px solid grey;
    }
    .snsTc th:first-child,
    .snsTc td:first-child {
      border-left: 0;
    }

    .snsTc th:last-child,
    .snsTc td:last-child {
      border-right: 0;
    }

    section {
      display: flex;
      align-items: center;

      div {
        display: flex;
        align-items: center;
      }
    }
  }

  .inputStart,
  .inputFinish {
    display: flex;
  }
  .MuiFormLabel-root,
  .MuiFormHelperText-root,
  .MuiInputBase-root {
    font-weight: 500;
    font-family: "Roboto", "Noto Sans KR", "Noto Sans", sans-serif;
  }
`;
