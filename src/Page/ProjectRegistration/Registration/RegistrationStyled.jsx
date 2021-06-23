import styled from "styled-components";

export const RegiContainer = styled.div`
  width: 100%;
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
    border-right: 1px solid #c2c2c28b;
    border-top: 1px solid #00000023;
    background-color: #80808054;
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
  .radioWrap {
    display: flex;

    div {
      margin-left: 5px;
      margin-right: 10px;
    }
  }
`;
