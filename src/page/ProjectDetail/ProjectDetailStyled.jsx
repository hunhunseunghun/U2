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
      font-size: 13px;
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

  .prj_control {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .prj_control_left {
      .more_prj {
        max-width: 218px;
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
        height: 100%;
        all: unset;
        padding: 4px 10px;
        background-color: #cccccc;
        color: #4e4e4e;
        font-size: 12px;
        border: 1px solid #d1d1d1;
        margin: 0 5px;
        color: #898989;
        text-align: center;
        font-size: 13px;

        &:hover {
          cursor: pointer;
          color: black;
          border-color: #898989;
          background-color: #cccccc;
        }
      }
    }
    .prj_control_middle button:last-child {
      border: 1px solid #d1d1d1;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
      padding: 4px 10px;

      background-color: #f84135;
      border-color: #f84135;
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #ff2a1b;
        border-color: #ff2a1b;
      }
    }

    .prj_control_right {
      display: flex;
      justify-content: flex-end;

      svg {
        position: relative;
        top: 5px;
        width: 20px;
      }
      span {
        margin-left: 5px;
        font-weight: 400;
      }
    }
  }

  .prj-control > button {
    border: solid 1px;
  }
`;
