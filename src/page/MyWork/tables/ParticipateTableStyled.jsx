import styled from 'styled-components';

export const ParticipateTableContainer = styled.div`
  margin: 25px 15px;
  /* border: 1px solid; */

  .prjregi_btn_area {
    display: flex;
    justify-content: flex-end;
    margin: 30px 0 5px 0;

    .prjregi_btn {
      display: flex;
      padding: 5px 12px;
      background-color: #000000;
      &:hover {
        cursor: pointer;
        background-color: #353535;
      }
    }
    .prjregi_btn_plusicon {
      display: grid;
      place-items: center;
      font-weight: 800;
      font-size: 22px;
      color: #fff;
    }
    .prjregi_btn_text {
      position: relative;
      top: -1px;
      display: grid;
      place-items: center;
      font-size: 12px;
      color: #fff;
      margin-left: 5px;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
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
    background-color: #e3e3e3;
    border-top: 2px solid #2d2123;
    border-bottom: 1px solid #eee;
    font-size: 12px;
    color: #747474;
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
  }

  tbody:last-child {
    border-bottom: 1px solid #2d2123;
  }

  td {
    padding: 10px;
    height: 100px;
  }

  hr.row-line {
    /* width: 100px; */
  }
  button.feedback-button {
    cursor: pointer;
    width: 50px;
    border: solid 1px grey;
    border-radius: 10px;
  }
  button.feedback-button:hover {
    background-color: grey;
  }
  .presentation-td > button {
    border: solid 1px grey;
    border-radius: 10px;
    background-color: white;
    padding: 5px;
    :hover {
      background-color: grey;
      cursor: pointer;
    }
  }
  button.resume {
  }
`;
