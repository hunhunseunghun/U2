import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 40px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  min-width: 900px;

  .creatormarket_section {
    width: 100%;
    max-width: 1500px;
  }

  .topWrap {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 38.8%;
    display: flex;
  }

  .challange_wrap {
  }
  .challange_tab {
    margin-top: 76px;
    max-width: 465px;
    height: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    border: 1px solid #eee;
    /* border-right: none; */
    background-color: #f6f6f6;
    color: #aaa;

    div {
      display: grid;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100%;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      /* border-right: 1px solid #e2e2e2; */

      &:hover {
        cursor: pointer;
        background-color: #ebebeb;
        color: #0c0c0c;
      }
    }

    .tab_active {
      background-color: #ebebeb;
      color: #0c0c0c;
    }
  }

  .challange_ele {
    width: 100%;
  }

  .campArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 632px;
    margin-top: 200px;
    background-color: #e0e0e0;

    .campListWrap {
      text-align: center;

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

    .campSlideWrap {
      width: 698px;
    }
  }

  .challenge_more_btn_area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .challange_more_btn {
    border: 1px solid #ddd;
    width: 30%;
    padding: 0 30px;
    height: 52px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    color: #898989;
    transition-duration: 0.2s;
    &:hover {
      cursor: pointer;
      transition-duration: 0.2s;
      color: black;
      border-color: #898989;
    }
  }
  .challenge_banner_area {
    margin-top: 40px;
    position: relative;
    margin-bottom: 5rem;
  }
  .challenge_banner_img {
    width: 100%;
    height: 150px;
  }

  .challenge_banner_btn_wrap {
    position: absolute;
    right: 20px;
    bottom: 30px;
  }

  .challenge_banner_btn {
    border: 1px solid #ddd;
    width: 100%;
    padding: 10px 30px;
    height: 52px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    color: #ddd;
    transition-duration: 0.2s;

    &:hover {
      cursor: pointer;
    }
  }
  .challenge_banner_btn:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1500px) and (min-width: 1350px) {
    padding: 40px 20px 100px;
  }
  @media only screen and (max-width: 1350px) and (min-width: 500px) {
    padding: 40px 10px 100px;
  }
`;
