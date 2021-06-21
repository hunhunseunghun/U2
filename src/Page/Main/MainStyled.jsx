import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 90px 2rem 0 2rem;

  .topWrap {
    display: flex;
  }

  .contentEle {
    display: flex;
    flex-wrap: wrap;
  }

  .campArea {
    display: flex;
    padding: 40px;
    background-color: grey;

    .campListWrap {
      width: 300px;
      height: 400px;
      background-color: white;

      .campTitle_top {
        font-size: 1rem;
      }
      .campTitle_bottom {
        font-size: 2.2rem;
      }
    }

    .campList {
      .campEle {
        display: flex;
      }

      .campEle:hover {
        cursor: pointer;
      }
    }
  }
`;
