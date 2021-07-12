import styled from 'styled-components';
export const PrjInfoContainer = styled.div`
  width: 100%;

  table {
    width: 100%;
    text-align: center;
    border-top: 1px solid #afafaf;
    border-bottom: 1px solid #afafaf;
    padding: 0;
    border-collapse: collapse;

    th {
      background-color: #f0f0f0;
    }
    th,
    td {
      padding: 5px;
      border-bottom: 1px solid #dddddd;
      border-right: 1px solid #dddddd;
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
`;

// border-top: 1px solid #f0f0f0;
