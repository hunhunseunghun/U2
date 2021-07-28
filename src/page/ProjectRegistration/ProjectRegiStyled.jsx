import styled from 'styled-components';

export const PrjRegiContainer = styled.div`
  padding: 20px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  font-weight: 500;

  .projectregi_section {
  }

  .projectregi_title_area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 20px;

    div {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 30px;
    }
    .projectregi_title_style {
      margin-top: 3px;
      width: 20px;
      border: 1px solid #181818;
    }
  }

  .projectregi_title_sub {
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    color: #3b3b3b;
    margin-bottom: 10px;
    img {
      margin-right: 10px;
    }
  }
  .projectregi_items {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    margin: 5px 0;
    box-sizing: border-box;
  }
  .projectregi_item {
    /* margin: 10px 10px 10px 0; */
    border: 1px solid #eee;
    background-color: #fff;

    box-sizing: border-box;
  }

  .projectregi_item_innerwrap {
    display: flex;
    height: 100%;
  }

  .projectregi_checkbox_area {
    padding: 10px;
    display: grid;
    place-items: center;

    /* background: linear-gradient(#fff, #f5f5f5);
    box-shadow: 0 8px 8px #fff inset, 0 -8px 8px #f5f5f5 inset; */
    background-color: #fff;
    border-right: 1px solid #eee;

    /* background-color: #f3f3f3; */

    .projectregi_checkbox {
      width: 100%;
      display: grid;
      place-items: center;
      /* line-height: 20px;
      font-size: 18px;
      font-weight: 600;
      width: 130px; */

      input {
        width: 40px;
        /* width: 18px;
        height: 18px;
        cursor: pointer;
        margin-right: 10px; */
      }
      div {
        font-size: 18px;
      }
      .prjregi_vidcreator_text {
        font-size: 18px;
      }
      .prjregi_vidcreator_text_mobile {
        display: none;
      }
    }
    .projectregi_checkbox_bottom {
      display: flex;
      box-sizing: border-box;

      .projectregi_checkbox_iconwrap {
        img {
          max-width: 50px;
        }
      }
    }

    .projectregi_vidcreator_checkbox {
      line-height: 16px;
      font-size: 14px;
    }
  }

  .contentArea {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .contentTop {
      font-size: 15px;
      box-sizing: border-box;
      .contentTitle {
        padding: 10px 0 5px 0;
      }
      p {
        all: unset;
        width: 80%;
        font-size: 14px;
        color: #898989;
        word-break: break-all;
        white-space: pre-line;
      }
    }

    .contentBot {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;

      box-sizing: border-box;

      .projectregi_content_item {
        width: 9vw;

        margin: 5px 5px 5px 0px;

        video {
          width: 100%;
        }
        div {
          position: relative;
          top: -4px;
          border: 1px solid #eee;
          font-size: 12px;
          padding: 3px 6px;
          line-height: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #898989;
          background-color: #fff;
        }
      }
    }
    .contentBot_irregi_text {
      all: unset;
      width: 100%;
      font-size: 14px;
    }
  }

  .prjDesc {
    padding: 10px 1px;
  }
  .projectregi_btn_area {
    width: 100%;
    display: flex;
    padding: 40px 0;
    justify-content: center;
  }

  .projectregi_btn {
    padding: 5px 40px;
    margin: 0 5px;
    border: 1px solid #d1d1d1;
    color: #898989;
    background-color: #fff;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      color: #181818;
      border-color: #898989;
      transition: all 0.2s;
    }
  }
  .projectregi_btn_next {
    border: 1px solid #d1d1d1;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: #f84135;
    border-color: #f84135;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #ff1100;
      border-color: #ff1100;
      transition: all 0.2s;
    }
  }

  .projectregi_item_ir {
    .contentBot {
      width: 100%;
      padding: 0;
      div {
        padding: 5px 20px 5px 10px;
      }
    }
    /* height: 160px; */
  }
  @media only screen and (max-width: 900px) {
    padding: 40px 10px 50px;

    .projectregi_title_area {
      margin-top: 0.5rem;
      margin-bottom: 10px;

      div {
        font-size: 24px;
      }
    }

    .projectregi_title_sub {
      font-size: 18px;
      margin-bottom: 10px;
      img {
        width: 18px;
        margin-right: 5px;
      }
    }
    .projectregi_checkbox_area {
      padding: 5px;

      .projectregi_checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 16px;
        font-size: 12px;
        font-weight: 600;
        width: 90px;

        input {
          width: 12px;
          height: 12px;
          cursor: pointer;
          margin-right: 5px;
        }
        .prjregi_vidcreator_text {
          display: none;
        }
        .prjregi_vidcreator_text_mobile {
          display: block;
          line-height: 15px;
        }
      }

      .projectregi_vidcreator_checkbox {
        line-height: 14px;
        font-size: 8px;
      }
    }

    .projectregi_items {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-gap: 15px;
    }

    .contentArea {
      padding-left: 7px;
      font-size: 12px;

      .contentTop {
        font-size: 14px;
        box-sizing: border-box;
        .contentTitle {
          padding: 10px 0 5px 0;
        }
        p {
          all: unset;
          width: 80%;
          font-size: 13px;
          color: #898989;
          word-break: break-all;
          white-space: pre-line;
        }
      }

      .contentBot {
        display: flex;
        justify-content: center;
        align-items: center;

        .projectregi_content_item {
          width: 20vw;

          video {
            width: 99%;
          }
        }
        .contentBot_irregi_text {
          font-size: 13px;
        }
      }
    }
  }
`;
