import styled from 'styled-components';

export const ParticipateTableContainer = styled.div`
  margin: 25px 15px;
  /* border: 1px solid; */

  .prjregi_btn_area {
    display: flex;
    justify-content: flex-end;
    margin: 30px 0 10px 0;

    .prjregi_btn {
      display: flex;
      padding: 5px 12px;
      border: 1px solid #d1d1d1;
      color: #898989;
      background-color: #fff;
      border-radius: 4px;
      transition: all 0.2s;
      &:hover {
        cursor: pointer;
        color: black;
        border-color: #898989;
        transition: all 0.2s;
        .prjregi_btn_plusicon,
        .prjregi_btn_text {
          cursor: pointer;
          color: black;
          border-color: #898989;
          transition: all 0.2s;
        }
      }
    }
    .prjregi_btn_plusicon {
      display: grid;
      place-items: center;
      font-weight: 800;
      font-size: 22px;
      color: #898989;
      transition: all 0.2s;
    }
    .prjregi_btn_text {
      position: relative;
      top: -1px;
      display: grid;
      place-items: center;
      font-size: 15px;
      color: #898989;
      margin-left: 5px;
      transition: all 0.2s;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
    margin-bottom: 20px;
  }

  th,
  td {
    a {
      position: relative;
      .table_newalert {
        position: absolute;
        top: -10px;
        left: 10px;
      }
    }
  }
  thead {
    background-color: #f8f8f8;
    border-top: 2px solid #ddd;
    border-bottom: 1px solid #eee;
    font-size: 15px;
    color: #181818;
    th {
      padding: 10px 0;
      section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          position: relative;
          top: 1px;
          margin-left: 5px;
          width: 18px;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  tbody {
    text-align: center;

    tr {
      border-bottom: 1px solid #eee;
    }

    td {
      padding: 10px;
      height: 100px;
    }
  }

  tbody:last-child {
    border: 0;
  }

  hr.row-line {
    /* width: 100px; */
  }
  button.feedback-button {
    cursor: pointer;
    padding: 2px 5px;
    background: linear-gradient(#fff, #f2f2f2);
    border: 1px solid #eee;
  }
  button.feedback-button:hover {
    background-color: #e3e3e3;
  }
  .presentation-td > button {
    background: linear-gradient(#fff, #f2f2f2);
    border: 1px solid #eee;
    padding: 2px 5px;

    :hover {
      background-color: #e3e3e3;
      cursor: pointer;
    }
  }
  button.resume {
  }
`;
