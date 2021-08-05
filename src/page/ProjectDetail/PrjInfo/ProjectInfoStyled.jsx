import styled from 'styled-components';
export const PrjInfoContainer = styled.div`
  width: 100%;

  .prj_info {
    width: 100%;
    table {
      width: 100%;
      border-top: 1px solid #afafaf;
      border-bottom: 1px solid #afafaf;
      padding: 0;
      border-collapse: collapse;

      th {
        background-color: #f0f0f0;
        font-size: 15px;
        text-align: left;
        box-sizing: border-box;
        border-collapse: collapse;
        max-width: 80px;
      }
      th,
      td {
        padding: 5px 10px 5px 10px;
        border-bottom: 1px solid #dddddd;
        border-right: 1px solid #dddddd;
        font-weight: 500;
      }

      td {
        font-size: 15px;
        word-break: break-all;
        font-weight: 400;
      }

      tr td:last-child {
        border-right: 0;
      }

      tbody tr:last-child {
        border-bottom: 1px solid #afafaf;
        th,
        td {
          border-bottom: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;

    .prj_info {
      width: 100%;

      table {
        width: 100%;

        border-top: 1px solid #afafaf;
        border-bottom: 1px solid #afafaf;
        padding: 0;
        border-collapse: collapse;

        th {
          background-color: #f0f0f0;
          font-size: 13px;
          min-width: 60px;
        }
        th,
        td {
          padding: 5px 5px 5px 5px;
          border-bottom: 1px solid #dddddd;
          border-right: 1px solid #dddddd;
          font-weight: 500;
        }

        td {
          font-size: 13px;
          word-break: break-all;
          font-weight: 400;
          min-width: 80px;
        }

        tr td:last-child {
          border-right: 0;
        }

        tbody tr:last-child {
          border-bottom: 1px solid #afafaf;
          th,
          td {
            border-bottom: 0;
          }
        }
      }
    }
  }
`;

// border-top: 1px solid #f0f0f0;
