import styled from 'styled-components';

export const PrjRegiContainer = styled.div`
  padding: 40px 45px 100px;
  background-color: #fff;
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
      font-weight: 500;
      font-size: 32px;
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
    grid-gap: 8px;
    margin: 5px 0;
  }
  .projectregi_item {
    /* margin: 10px 10px 10px 0; */
    border: 1px solid #eee;
    background-color: #fff;
  }

  .projectregi_item_innerwrap {
    display: flex;
    height: 100%;
    background: linear-gradient(#fff, #f2f2f2);
    box-shadow: 0 8px 8px #fff inset, 0 -8px 8px #f2f2f2 inset;
    padding: 2px;
  }

  .projectregi_checkbox_area {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #eee;

    /* background-color: #f3f3f3; */

    .projectregi_checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 20px;
      font-size: 18px;
      font-weight: 600;
      width: 130px;

      input {
        width: 18px;
        height: 18px;
        cursor: pointer;
        margin-right: 10px;
      }
    }

    .projectregi_vidcreator_checkbox {
      line-height: 16px;
      font-size: 14px;
    }
  }

  .contentArea {
    width: 100%;
    padding-left: 15px;

    .contentTitle {
      padding-top: 10px;
    }
    .contentTop {
      font-size: 16px;
    }
    p {
      all: unset;
      margin-left: 5px;
      font-size: 14px;
      color: #898989;
    }

    .contentBot {
      width: 100%;
      padding: 5px 0px 5px 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      .projectregi_content_item {
        width: 9vw;
        margin: 5px 5px 0px 5px;

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
    border: 1px solid #d1d1d1;
    padding: 5px 40px;
    margin: 0 5px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    color: #898989;
    &:hover {
      cursor: pointer;
      color: black;
      border-color: #898989;
    }
  }
  .projectregi_btn_next {
    border: 1px solid #d1d1d1;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: #f84135;
    border-color: #f84135;
    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #ff1100;
      border-color: #ff1100;
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
      }

      .projectregi_vidcreator_checkbox {
        line-height: 10px;
        font-size: 8px;
      }
    }

    .projectregi_items {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-gap: 5px;
    }

    .contentArea {
      padding-left: 7px;
      font-size: 12px;

      .contentTop {
        font-size: 12px;
      }
      p {
        all: unset;
        margin-left: 5px;
        font-size: 12px;
        color: #898989;
      }

      .contentBot {
        padding: 5px 0px 5px 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        .projectregi_content_item {
          width: 20vw;
          video {
            width: 99%;
          }
        }
      }
    }
  }
`;
