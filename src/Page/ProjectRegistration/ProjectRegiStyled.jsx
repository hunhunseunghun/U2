import styled from "styled-components";

export const PrjRegiContainer = styled.div`
  padding: 90px 5% 0px;

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
