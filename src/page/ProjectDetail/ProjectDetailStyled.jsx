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
      font-size: 15px;
      padding: 0 20px 20px 20px;
      border-bottom: 1px solid #afafaf;
      min-height: 200px;
    }

    .image_resized {
      width: 100%;
      img {
        width: 100%;
      }
    }
    figure {
      width: 100%;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      max-width: 1300px;
      img {
        position: relative;
        width: 100%;
        box-sizing: border-box;
      }
      table {
        border: 1px solid grey;
        border-collapse: collapse;
      }
      td {
        border: 1px solid grey;
      }
    }
  }
  .prjdetail_redirect_area {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .prjdeatila_more_prj {
      display: inline-block;
      width: auto;
      background: linear-gradient(#fff, #f2f2f2);
      border: 1px solid #eee;
      padding: 5px 10px;
      color: #747474;
      font-size: 15px;
      font-weight: 400;
      border-radius: 4px;
      transition: border 0.2s;

      &:hover {
        cursor: pointer;
        border: 1px solid #bbbbbb;
        transition: border 0.2s;
      }
    }
    .prjdetail_snsshare_area {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      svg {
        position: relative;
        top: 2px;
        width: 17px;
        height: 17px;
        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }
      }
      span {
        position: relative;
        top: 2px;
        margin-left: 3px;
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;

        &:hover {
          cursor: pointer;
          font-weight: 700;
        }
      }
    }
  }

  .pop_sub.sns_share_pop {
    display: grid;
    place-items: center;
    position: absolute;
    top: 25px;
    right: 0;
    width: 240px;
    padding: 10px 5px;
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

  .prj_control {
    display: grid;
    place-items: center;

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

        &:hover {
          cursor: pointer;
        }
      }
    }

    .prj_control_middle {
      display: grid;
      place-items: center;
      .prj_contorl_middle_btnwrap {
        max-width: 330px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      button {
        width: 100px;
        border: 1px solid #d1d1d1;
        padding: 5px 10px;
        margin: 0 5px;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 500;
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
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      padding: 4px 10px;
      transition-duration: 0.2s;

      background-color: #ff4438;
      border-color: #f84135;
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #ff1100;
        border-color: #d10e00;
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

  .commentInput {
    display: grid;
    grid-template-columns: 8fr 1fr;
    grid-gap: 5px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    min-height: 100px;
    /* background-color: #eaeaea; */
    /* border: 1px solid #c5c5c5; */

    textarea {
      height: 100%;
      border: 1px solid #c5c5c5;
      outline: none;
      resize: none;
      font-size: 13px;
    }
    .commet_active_btn {
      background-color: #ff4438;
      color: white;
      font-size: 15px;
      border-radius: 5px;
      transition: background-color 0.2s;
      &:hover {
        cursor: pointer;
        background-color: #ff1100;
      }
    }
    .comment_inactive_btn {
      color: #898989;
      font-size: 15px;
      border-radius: 5px;
      border: 1px solid #d1d1d1;
      transition: background-color 0.2s;
      font-weight: 500;
      &:hover {
        cursor: default;
      }
    }
  }

  .comments {
    display: flex;
    flex-direction: column;
    border-top: 2px solid #c5c5c5;
    /* border-bottom: 2px solid #c5c5c5; */
    padding: 10px 5px;
    font-weight: 400;

    fieldset {
      all: unset;
      padding: 10px 0;
      border-bottom: 1px solid #c5c5c5;
      .comment_memberidx {
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #367b91;

        button {
          background: linear-gradient(#fff, #f2f2f2);
          border: 1px solid #eee;
          padding: 0 10px;
          color: #747474;
          font-size: 12px;
          font-weight: 400;
          margin-left: 10px;
          border-radius: 4px;

          &:hover {
            cursor: pointer;
          }
        }
      }
      .comment_content {
        font-size: 13px;
        color: #4e4e4e;
        font-weight: 400;
        padding-top: 10px;
        margin-bottom: 7px;
        word-break: break-all;
      }
    }

    .comment_reply {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #4e4e4e;
      font-weight: 400;
      padding: 2px 0;

      img {
        height: 12px;
      }

      .comment_reply_area {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 5px 5px;
        border: 1px solid #bebebe;
        background-color: #f7f7f7;
      }
      .comment_reply_name {
        background-color: #979797;
        padding: 2px 5px;
        padding-bottom: 3px;
        border-radius: 4px;
        font-size: 11px;
        color: #ffffff;
        margin-left: 5px;
        text-align: center;
        min-width: 33px;
      }
      .comment_reply_content {
        width: 100%;
        margin-left: 10px;
        font-size: 13px;
        color: #686868;
        font-weight: 400;
        word-break: break-all;
      }
    }
  }
  .comments fieldset:last-child {
    border-bottom: 0;
  }

  .comment_replyregi {
    display: grid;
    grid-template-columns: 9fr 1fr;
    grid-gap: 5px;
    padding: 10px 10px 10px 15px;
    min-height: 30px;

    input {
      width: 100%;
      border: 1px solid #c5c5c5;
      outline: none;
      resize: none;
    }
    button {
      background: linear-gradient(#fff, #f2f2f2);
      border: 1px solid #eee;
      padding: 0 10px;
      color: #747474;
      font-size: 12px;
      font-weight: 400;
      margin-left: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    /* background-color: grey; */
    padding: 40px 0px 100px;
    font-weight: 500;

    .prj_title_area {
      display: flex;

      justify-content: space-between;
      align-items: flex-end;
      border-top: 2px solid #2d2123;
      color: #010101;
      font-size: 18px;
      padding: 10px 10px;

      .prj_title {
        width: 50%;
        box-sizing: border-box;
      }
      .prj_term {
        width: 50%;
        font-size: 11px;
        color: #7f7f7f;
        font-weight: 400;
        box-sizing: border-box;
        text-align: right;
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
      margin: 10px 0;
      display: flex;
      justify-content: center;
      width: 100%;

      .prj_content_wrap {
        width: 100%;
        font-size: 13px;
        padding: 0 5px 0px 5px;
        border-bottom: 1px solid #afafaf;
      }

      .image_resized {
        width: 100%;
        img {
          width: 100%;
        }
      }
      figure {
        width: 100%;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        img {
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }
      }
    }

    .prj_control {
      display: grid;
      place-items: center;

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

          &:hover {
            cursor: pointer;
          }
        }
      }

      .prj_control_middle {
        display: grid;
        place-items: center;
        .prj_contorl_middle_btnwrap {
          max-width: 330px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        button {
          width: 70px;
          border: 1px solid #d1d1d1;
          padding: 5px 5px;
          margin: 0 5px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
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
        font-size: 13px;
        font-weight: 500;
        color: #fff;
        padding: 4px 5px;
        transition-duration: 0.2s;

        background-color: #ff4438;
        border-color: #f84135;
        &:hover {
          cursor: pointer;
          color: #fff;
          background-color: #ff1100;
          border-color: #d10e00;
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

    .prjdetail_redirect_area {
      padding: 5px;
      display: flex;
      justify-content: space-between;

      .prjdeatila_more_prj {
        display: inline-block;
        width: auto;
        background: linear-gradient(#fff, #f2f2f2);
        border: 1px solid #eee;
        padding: 5px 5px;
        color: #747474;
        font-size: 11px;
        font-weight: 400;
        border-radius: 4px;

        &:hover {
          cursor: pointer;
        }
      }
      .prjdetail_snsshare_area {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        svg {
          position: relative;
          top: 2px;
          width: 15px;
          height: 15px;
          &:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
        }
        span {
          position: relative;
          top: 2px;
          margin-left: 3px;
          font-weight: 500;
          font-size: 13px;
          line-height: 13px;

          &:hover {
            cursor: pointer;
            font-weight: 700;
          }
        }
      }
    }

    .pop_sub.sns_share_pop {
      display: grid;
      place-items: center;
      position: absolute;
      top: 25px;
      right: 0;
      width: 240px;
      padding: 10px 5px;
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
    .commentInput {
      display: grid;
      grid-template-columns: 8fr 2fr;
      grid-gap: 5px;
      padding: 10px;
      margin-top: 20px;
      margin-bottom: 10px;
      min-height: 100px;
      /* background-color: #eaeaea; */
      /* border: 1px solid #c5c5c5; */

      textarea {
        height: 100%;
        border: 1px solid #c5c5c5;
        outline: none;
        resize: none;
        font-size: 13px;
      }
      .commet_active_btn {
        background-color: #ff4438;
        color: white;
        font-size: 15px;
        border-radius: 5px;
        transition: background-color 0.2s;
        &:hover {
          cursor: pointer;
          background-color: #ff1100;
        }
      }
      .comment_inactive_btn {
        color: #898989;
        font-size: 15px;
        border-radius: 5px;
        border: 1px solid #d1d1d1;
        transition: background-color 0.2s;
        font-weight: 500;
        &:hover {
          cursor: default;
        }
      }
    }

    .comments {
      display: flex;
      flex-direction: column;
      border-top: 2px solid #c5c5c5;
      /* border-bottom: 2px solid #c5c5c5; */
      padding: 10px 5px;
      font-weight: 400;

      fieldset {
        all: unset;
        padding: 10px 5px;
        border-bottom: 1px solid #c5c5c5;
        .comment_memberidx {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: #367b91;

          button {
            background: linear-gradient(#fff, #f2f2f2);
            border: 1px solid #eee;
            padding: 0 10px;
            color: #747474;
            font-size: 12px;
            font-weight: 400;
            margin-left: 10px;

            &:hover {
              cursor: pointer;
            }
          }
        }
        .comment_content {
          font-size: 13px;
          color: #4e4e4e;
          font-weight: 400;
          padding-top: 10px;
          margin-bottom: 7px;
          word-break: break-all;
        }
      }

      .comment_reply {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #4e4e4e;
        font-weight: 400;
        padding: 2px 0;

        img {
          height: 12px;
        }

        .comment_reply_area {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 5px 5px;
          border: 1px solid #bebebe;
          background-color: #f7f7f7;
        }
        .comment_reply_name {
          background-color: #979797;
          padding: 2px 5px;
          padding-bottom: 3px;
          border-radius: 4px;
          font-size: 11px;
          color: #ffffff;
          margin-left: 5px;
          text-align: center;
          min-width: 33px;
        }
        .comment_reply_content {
          width: 100%;
          margin-left: 10px;
          font-size: 13px;
          color: #686868;
          font-weight: 400;
          word-break: break-all;
        }
      }
    }
    .comments fieldset:last-child {
      border-bottom: 0;
    }

    .comment_replyregi {
      display: grid;
      grid-template-columns: 9fr 1fr;
      grid-gap: 5px;
      padding: 10px 10px 10px 15px;
      min-height: 30px;

      input {
        width: 100%;
        border: 1px solid #c5c5c5;
        outline: none;
        resize: none;
      }
      button {
        background: linear-gradient(#fff, #f2f2f2);
        border: 1px solid #eee;
        padding: 0 10px;
        color: #747474;
        font-size: 12px;
        font-weight: 400;
        margin-left: 10px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
