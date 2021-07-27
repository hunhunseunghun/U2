import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0px 45px 100px;
  /* background-color: #fafafa; */
  background-color: #ffffff;
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
    margin-bottom: 10px;

    background-color: #fafafa;
  }
  .creatormarket_filter_section {
    background-color: #fff;
    border-top: 1px solid #eee;
    /* border-bottom: 1px solid #eee; */
    padding: 0px 60px;
    height: 67px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    /* margin-top: 10px; */
    padding: 0 20px;
    border-top: 0;
    .creatormarket_ft_deco {
      margin-top: 2px;
      .ft_title {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .creatormarket_fr_left_section {
      flex: 1 1;
      display: flex;

      .creatormarket_ftr_select_item {
        margin-right: 30px;
        position: relative;
        &:hover {
          cursor: pointer;
        }
        .creatormarket_ftr_selected {
          padding-bottom: 2px;
        }
        .creatormarket_ftr_selected_active {
          position: relative;
          .style_mm_t {
            position: absolute;
            width: 4px;
            height: 4px;
            right: -6px;
            top: 5px;
            border-radius: 2px;
            background-color: black;
          }
        }
      }
    }
  }
  .challenge_tab {
    margin-top: 40px;
    max-width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    border-right: none;
    border-left: none;
    /* background-color: #f6f6f6; */
    font-weight: 600;
    font-size: 18px;

    border-bottom: 1px solid #eee;
    font-size: 15px;

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
      span {
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

  .challenge_ele {
    width: 100%;
    min-height: 300px;
  }
  .makeStyles-ul-1 {
  }

  .challenge_more_btn_area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .challange_more_btn {
    border: 1px solid #ddd;
    width: 100%;
    max-width: 110px;
    padding: 0 15px;
    height: 40px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    color: #898989;
    transition-duration: 0.2s;
    margin-top: 10px;

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
    padding: 0px 45px 100px;
  }
  @media only screen and (max-width: 900px) {
    padding: 40px 0px 50px;
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
      font-size: 13px;

      div {
        display: grid;
        align-items: center;
        text-align: center;
        line-height: 16px;
        width: 100%;
        border: 1px solid #eee;
        border-left: 0;

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
      margin-top: 25px;
    }

    .challenge_more_btn_area {
      display: none;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
      display: none;
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
    .challange_mobile_ele {
      margin: 0 0 15px 0;
      position: relative;
      width: 100%;
      overflow-x: hidden;
      overflow-y: hidden;
      white-space: nowrap;
    }
  }
  .creatormarket_filter_section {
    position: relative;
    .sub_filter_section {
      position: absolute;
      top: 45px;
      left: 0;
      right: 0;
      padding: 10px 20px;
      background-color: #fffffff2;
      /* border-bottom: 1px solid #eee; */
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .ft_title {
        position: relative;
        display: block;
        font-size: 15px;
        font-weight: 600;
        margin: 10px 0 0;
        &.filter_arrow_up {
          img {
            transform: rotateZ(180deg);
          }
        }
        .style_mm_t {
          position: absolute;
          width: 4px;
          height: 4px;
          right: -6px;
          top: 5px;
          border-radius: 2px;
          background-color: black;
        }
      }
    }
    .creatormarket_ft_deco {
      .ft_title {
        &.filter_arrow_up {
          img {
            transform: rotateZ(180deg);
            transition: transform 0.2s;
          }
        }
        &.filter_arrow_down {
          img {
            transform: rotateZ(0deg);
            transition: transform 0.2s;
          }
        }
      }
    }
  }
  .sub_filter_section_inactive {
    display: none;
  }
`;
