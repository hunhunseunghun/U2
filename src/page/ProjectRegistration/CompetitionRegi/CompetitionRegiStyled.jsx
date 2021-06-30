import styled from 'styled-components';

export const RegiContainer = styled.div`
  padding-top: 90px;
  width: 100%;
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

  //공모전 명---

  .inActive {
    display: none;
  }
  .competitionName {
    position: relative;
  }

  .defaultCompetition {
    width: 300px;
    background-color: #dfdfdf;
    height: 30px;
    padding: 5px 0 0 20px;
    &:hover {
      cursor: pointer;
      background-color: #c7c7c7;
    }
  }

  //----------

  .noDisplay {
    display: none;
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

  // 파일 업로더 css ----------------------------
  .infoPoster,
  .infoFiles {
    font-size: 14px;
    display: block;

    div {
      margin: 10px 0;
    }
  }
  // --------------------------------------------
  .radioWrap {
    display: flex;

    div {
      margin-left: 5px;
      margin-right: 10px;
    }
  }
  // tabale css ------------------------------------

  .receptionInfo {
    width: 100%;
  }
  .topForm {
    display: flex;
    align-items: center;
    white-space: nowrap;
    border-top: 1px solid #c2c2c28b;

    .checkArea {
      width: 20px;
    }

    section {
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      border-right: 1px solid #c2c2c28b;
      height: 100%;
    }
  }

  /* .receptionInfo {
    white-space: nowrap;
    width: 100%;
    padding: 0;
  }
  .receptionForm {
    width: 100%;
    border-collapse: collapse;

    td {
      padding: 5px;
      border: 1px solid #c2c2c28b;
    }

    td:first-child {
      border-left: 0;
      width: 40px;
    }

    td:nth-child(2) {
      max-width: 100px;
    }
    td:nth-child(3) {
      width: 275px;
    }

    td:last-child {
      border-right: 0;
    }

    section {
      display: flex;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        margin-left: 10px;
      }
      input {
        margin-left: 2px;
      }
      label {
        margin-left: 2px;
      }
    }

    .checkArea,
    .receptionTitle {
    }
    .checkArea {
      display: flex;
      justify-content: center;
      width: 40px;
    }
    .receptionTitle {
      display: flex;
      justify-content: center;
      width: 100px;
    }
  } */

  //-----------------------------------------------
`;
