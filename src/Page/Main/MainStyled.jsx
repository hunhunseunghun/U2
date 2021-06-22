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

  .applyBanner {
    position: relative;
    margin-bottom: 5rem;
  }
  .applyBannerImg {
    width: 100%;
    height: 150px;
  }

  .applyBtnWrap {
    position: absolute;
    right: 20px;
    bottom: 30px;
  }

  .applyBtn {
    all: unset;
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: black;
    color: white;
  }
  .applyBtn:hover {
    cursor: pointer;
  }
`;
