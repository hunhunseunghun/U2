import styled from 'styled-components';

export const RegiContainer = styled.div`
  padding: 40px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  font-weight: 500;
  min-width: 780px;

  .competitionregi_section {
    width: 100%;
    max-width: 1100px;
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
  .competitionregi_items {
    background-color: #fff;
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
    border-right: 1px solid#d8d8d8;
    border-top: 1px solid #d8d8d8;
    background-color: #f3f3f3;
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

  .reception_info {
    font-size: 14px;
    padding: 0;
    width: 100%;
    border-top: 0;

    .reception_form {
      width: 100%;
      .reception_table {
        width: 100%;
        border-collapse: collapse;
      }

      .table_checkarea {
        display: grid;
        place-items: center;
      }
      .table_title {
        text-align: center;
        min-width: 90px;
      }
      tr {
        border-top: 1px solid #d8d8d8;
      }

      td {
        padding: 10px;
        border-left: 1px solid #d8d8d8;
      }

      td:first-child {
        border-left: 0;
        width: 40px;
      }

      td:nth-child(2) {
        width: 110px;
      }

      th:last-child,
      td:last-child {
        border-right: 0;
      }

      section {
        width: 100%;
        display: flex;
        align-items: center;

        div {
          width: 100%;
          display: flex;
          align-items: center;
          text-align: center;
        }
      }
      label {
        margin-left: 1px;
        min-width: 65px;
        text-align: left;
      }
      .reception_options {
        display: flex;
        justify-content: left;

        div {
          width: 90px;
        }
      }
    }
  }
`;
