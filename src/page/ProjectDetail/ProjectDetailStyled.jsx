import styled from 'styled-components';

export const ProjectDetailContainer = styled.div`
  /* background-color: grey; */
  padding: 40px 45px 100px;
  font-weight: 500;

  .prj_title_area {
    display: flex;

    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #2d2123;
    color: #010101;
    font-size: 21px;
    padding: 10px 15px;

    .prj_term {
      font-size: 12px;
      color: #7f7f7f;
      font-weight: 400;
    }
  }

  .prj_topview_area {
    margin-top: 10px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .prj-detail {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    width: 100%;

    .prj_content_wrap {
      width: 100%;
      font-size: 12px;
    }
  }

  .prj_control {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .prj_control_left {
      .more_prj {
        display: inline-block;
        width: auto;
        background: linear-gradient(#fff, #f2f2f2);
        border: 1px solid #eee;
        padding: 10px 10px;
        color: #747474;
        font-size: 13px;
        font-weight: 400;
      }
    }

    .prj_control_middle {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      button {
        width: 100px;
        border: 1px solid #d1d1d1;
        padding: 5px 10px;
        margin: 0 5px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 600;
        color: #898989;
        transition-duration: 0.2s;
        &:hover {
          cursor: pointer;
          color: black;
          border-color: #898989;
          transition-duration: 0.2s;
        }
      }
    }
    .prj_control_middle button:last-child {
      border: 1px solid #d1d1d1;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      padding: 4px 10px;
      transition-duration: 0.2s;

      background-color: #f84135;
      border-color: #f84135;
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #ff2a1b;
        border-color: #ff2a1b;
        transition-duration: 0.2s;
      }
    }

    .prj_control_right {
      position: relative;
      display: flex;
      justify-content: flex-end;

      svg {
        position: relative;
        top: 2px;
        width: 20px;
        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }
      }
      span {
        margin-left: 5px;
        font-weight: 500;
        &:hover {
          cursor: pointer;
          font-weight: 700;
        }
      }
    }
  }

  .prj-control > button {
    border: solid 1px;
  }

  .pop_sub.sns_share_pop {
    display: grid;
    place-items: center;
    position: absolute;
    top: 25px;
    right: 0;
    width: 190px;
    padding: 10px 10px;
    z-index: 10;

    header {
      width: 90%;
      display: flex;
      justify-content: space-between;
      padding: 3px 0px;
      margin-bottom: 10px;

      div {
        color: #181818;
        font-size: 14px;
        font-weight: 500;
      }
      img {
        width: 13px;
        margin-right: 6px;
        &:hover {
          cursor: pointer;
          transform: scale(0.95);
        }
      }
    }
    ul {
      margin-bottom: 10px;
    }
    ul:last-child {
      width: 80%;
    }
    li {
      display: grid;
      place-items: center;
      margin: 0 5px;
    }
    .sns_img {
      width: 50px;
    }

    img {
      width: 36px;
      border-radius: 150px;
    }
  }
`;
