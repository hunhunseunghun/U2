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
    overflow: hidden;
    padding-bottom: 38.8%;
    display: flex;
  }

  .challenge_wrap {
  }
  .challenge_tab {
    margin-top: 76px;
    max-width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    border-right: none;
    border-left: none;
    /* background-color: #f6f6f6; */
    color: #aaa;
    font-weight: 600;
    font-size: 18px;

    div {
      display: grid;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100%;
      line-height: 24px;
      border: 1px solid #eee;
      border-left: 0;
      /* border-right: 1px solid #e2e2e2; */

      &:hover {
        cursor: pointer;
        background-color: #ebebeb;
        color: #0c0c0c;
      }
    }
    .tab_ir {
      border-right: 0;
    }

    .tab_active {
      background-color: #ebebeb;
      color: #0c0c0c;
    }
  }

  .challange_ele {
    width: 100%;
  }
  .makeStyles-ul-1 {
    margin-bottom: 30px;
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
    margin-top: 30px;
    &:hover {
      cursor: pointer;
      transition-duration: 0.2s;
      color: black;
      border-color: #898989;
    }
  }
  .challenge_banner_area {
    margin-top: 60px;
    position: relative;
    margin-bottom: 5rem;
  }
  .challenge_banner_img {
    width: 100%;
  }
  .challenge_banner_Icon {
    position: absolute;
    height: 80%;
    left: 15%;
    bottom: 10%;
  }

  .challenge_banner_btn_wrap {
    position: absolute;
    right: 10%;
    bottom: 33%;
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
      background-color: #ffffff34;
    }
  }
  .challenge_banner_btn:hover {
    cursor: pointer;
  }
  .BiLoader {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 1500px) and (min-width: 1350px) {
    padding: 40px 45px 100px;
  }
  @media only screen and (max-width: 900px) {
    padding: 40px 10px 50px;
    min-width: 0;

    .topWrap {
      position: static;
      width: 100%;
      padding-bottom: 0;
      display: block;
    }

    .challenge_wrap {
    }
    .challenge_tab {
      margin-top: 30px;
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      place-items: center;
      border-right: none;
      border-left: none;
      /* background-color: #f6f6f6; */
      color: #aaa;
      font-weight: 600;
      font-size: 14px;

      div {
        display: grid;
        align-items: center;
        text-align: center;
        line-height: 16px;
        width: 95%;
        border: 1px solid #eee;
        border-left: 0;
        padding: 2px;
        /* border-right: 1px solid #e2e2e2; */

        &:hover {
          cursor: pointer;
          background-color: #ebebeb;
          color: #0c0c0c;
        }

        span {
          display: block;
          padding: 5px;
        }
      }

      .tab_ir {
        border-right: 0;
      }

      .tab_active {
        background-color: #ebebeb;
        color: #0c0c0c;
      }
    }

    .challange_ele {
      width: 100%;
      margin-top: 30px;
    }
    .makeStyles-ul-1 {
      margin-bottom: 30px;
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
      margin-top: 30px;
      &:hover {
        cursor: pointer;
        transition-duration: 0.2s;
        color: black;
        border-color: #898989;
      }
    }
    .challenge_banner_area {
      margin-top: 60px;
      position: relative;
      margin-bottom: 5rem;
    }
    .challenge_banner_img {
      width: 100%;
    }
    .challenge_banner_Icon {
      position: absolute;
      height: 80%;
      left: 15%;
      bottom: 10%;
    }

    .challenge_banner_btn_wrap {
      position: absolute;
      right: 10%;
      bottom: 33%;
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
        background-color: #ffffff34;
      }
    }
    .challenge_banner_btn:hover {
      cursor: pointer;
    }
    .BiLoader {
      width: 100px;
      height: 100px;
    }
  }
`;
