import styled from 'styled-components';

export const PrjRegiContainer = styled.div`
  padding: 90px 5% 0px;

  .contentArea {
    border: 1px solid grey;
  }

  .prjDesc {
    padding: 10px 1px;
  }
  .btnArea {
    display: flex;
    justify-content: center;
    padding: 20px 0;

    button {
      width: 100px;
      margin: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
