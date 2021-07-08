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
    width: 800px;
    height: 100%;
    border-top: 2px solid #2d2123;
    border-spacing: 0;
    margin-bottom: 20px;

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
        padding: 20px 0;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
