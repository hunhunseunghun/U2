import styled from 'styled-components';
export const ChallengeTableContainer = styled.div`
  min-height: 670px;
  padding: 20px;
  color: #747474;
  font-size: 12px;

  .challenge_table_header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;

    .challenge_download_btn {
      display: flex;
      align-items: center;
      padding: 1px 10px;
      background: linear-gradient(#fff, #f2f2f2);
      border: 1px solid #eee;
      margin-right: 2px;
      img {
        width: 20px;
        margin-right: 1px;
      }
      div {
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #8c8c8c;
      }

      &:hover {
        cursor: pointer;
      }
    }

    select {
      width: 87.3px;
      height: 30px;
      padding: 0 0 0 5px;
      font-size: 12px;
      color: #747474;
    }
  }

  .challenge_table {
    width: 100%;
    height: 100%;
    border-top: 2px solid #ddd;
    border-spacing: 0;
    margin-bottom: 20px;

    thead {
      background-color: #f8f8f8;
      border-top: 2px solid #ddd;
      border-bottom: 1px solid #eee;

      color: #747474;
      th {
        padding: 20px 10px;
        font-size: 13px;
      }
    }

    tbody {
      tr {
      }
      td {
        padding: 20px 0;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .bt_list {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      position: relative;
      width: 112px;
      height: 39px;
      background: linear-gradient(#fff, #f2f2f2);
      border: 1px solid #eee;
      color: #747474;

      font-size: 15px;
      font-weight: 500;
      &:hover {
        cursor: pointer;
        background: linear-gradient(#fff, #e0e0e0);
        color: #181818;
      }
    }
  }
  @media screen and (max-width: 900px) {
    min-height: 300px;
    padding: 5px 0px;
    color: #747474;
    font-size: 10px;

    .challenge_table_header {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 5px;
      padding: 0 5px;
      box-sizing: border-box;

      .challenge_download_btn {
        display: flex;
        align-items: center;
        padding: 1px 5px;
        background: linear-gradient(#fff, #f2f2f2);
        border: 1px solid #eee;
        margin-right: 2px;
        img {
          width: 10px;
          margin-right: 1px;
        }
        div {
          width: 100%;
          text-align: center;
          font-size: 10px;
          color: #8c8c8c;
        }

        &:hover {
          cursor: pointer;
        }
      }

      select {
        width: 60px;
        height: 25px;
        padding: 0 0 0 5px;
        font-size: 10px;
        color: #747474;
      }
    }

    .challenge_table {
      width: 100%;
      height: 100%;
      border-top: 2px solid #ddd;
      border-spacing: 0;
      margin-bottom: 10px;

      thead {
        background-color: #f8f8f8;
        border-top: 2px solid #ddd;
        border-bottom: 1px solid #eee;

        color: #747474;
        th {
          padding: 10px 5px;
          font-size: 11px;
        }
      }

      tbody {
        tr {
        }
        td {
          padding: 20px 0;
          text-align: center;
          border-bottom: 1px solid #eee;
        }
      }
    }
    .bt_list {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: 0 5px;

      button {
        position: relative;
        width: 80px;
        height: 30px;
        background: linear-gradient(#fff, #f2f2f2);
        border: 1px solid #eee;
        color: #747474;

        font-size: 13px;
        font-weight: 500;
        &:hover {
          cursor: pointer;
          background: linear-gradient(#fff, #e0e0e0);
          color: #181818;
        }
      }
    }
  }
`;
