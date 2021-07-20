import styled from 'styled-components';
export const InspectTableContainer = styled.div`
  min-height: 670px;
  padding: 20px;
  color: #747474;
  font-size: 12px;

  .inspect_table_header {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    margin-bottom: 5px;
    .inspect_table_header_left {
      button {
        width: 68px;
        height: 22px;
        margin-right: 2px;
        background-color: #a1a1a1;
        color: #fff;

        &:hover {
          cursor: pointer;
          background-color: #929292;
        }
      }
    }
    .inspect_table_header_right {
      display: flex;
      justify-content: flex-end;

      .inspect_download_btn {
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
  }

  .inspect_table {
    width: 800px;
    height: 100%;
    border-top: 2px solid #2d2123;
    border-spacing: 0;
    margin-bottom: 20px;

    input[type='checkbox'] {
      width: 20px;
    }

    thead {
      background-color: #e3e3e3;
      border-top: 2px solid #2d2123;
      border-bottom: 1px solid #eee;
      color: #747474;
      th {
        padding: 20px 0px;
      }
    }

    tbody {
      tr {
      }
      td {
        padding: 20px 5px;
        text-align: center;
        border-bottom: 1px solid #eee;
      }

      .inspect_project {
        display: flex;
        justify-content: center;
        select {
          padding: 0px 25px 0px 5px;
          height: 28px;
          font-size: 12px;
          color: #747474;
          margin-right: 2px;
        }
        button {
          all: unset;
          background-color: #f84135;
          border-color: #f84135;
          color: white;
          padding: 0 10px;
          border-radius: 5px;
          &:hover {
            cursor: pointer;
            color: #fff;
            background-color: #ff1100;
            border-color: #ff1100;
          }
        }
      }
    }

    button {
      cursor: pointer;
      background: linear-gradient(#fff, #f2f2f2);
      border: 1px solid #eee;
      padding: 2px 5px;
      color: #747474;
      font-size: 12px;

      &:hover {
        background: linear-gradient(#fff, #e0e0e0);
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
      font-size: 12px;
      &:hover {
        cursor: pointer;
        background: linear-gradient(#fff, #e0e0e0);
      }
    }
  }
`;
