import styled from 'styled-components';

export const PrjRegiContainer = styled.div`
  padding: 40px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  font-weight: 500;

  .projectregi_section {
    width: 100%;
    max-width: 1800px;
  }

  .titleArea {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0;
    border-bottom: 1.5px solid grey;
    margin-top: 1rem;

    div {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 50px;
      border: 1px solid #eee;
      font-weight: bold;
      font-size: 1.2rem;
      background-color: #fff;
    }
  }

  .projectregi_items {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 0.3fr;
    width: 100%;
  }
  .projectregi_item {
    width: 100%;
    display: inline-block;
    margin: 10px 10px 10px 0;
    border: 1px solid #eee;
    background-color: #fff;
  }

  .projectregi_item_innerwrap {
    display: flex;
    height: 100%;
  }

  .projectregi_checkbox_area {
    padding: 0px 10px;
    min-width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #eee;

    /* background-color: #f3f3f3; */
  }

  .projectregi_checkbox_top {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50%;

    input {
      width: 60px;
      height: 60px;
      cursor: pointer;
    }
  }
  .projectregi_checkbox_bot {
    display: flex;
    text-align: center;
    font-size: 16px;
    font-weight: 600;

    height: 20%;

    .ckIcon {
      width: 30px;
      padding: 5px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
    }

    .projectregi_checkbox_videditorText {
      div {
        font-size: 20px;
      }
    }

    .projectregi_checkbox_creatorText {
      div {
        font-size: 18px;
      }
    }
  }

  .contentArea {
    padding-left: 20px;

    .contentTitle {
      padding-top: 10px;
    }
    .contentTop {
      font-size: 20px;
    }
    p {
      all: unset;
      margin-left: 5px;
      font-size: 16px;
      color: #898989;
    }

    .contentBot {
      width: 98%;
      padding: 10px 0px 10px 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      .projectregi_content_item {
        width: 40%;
        margin: 10px 5px 0px 5px;

        video {
          width: 100%;
          min-width: 168px;
        }
        div {
          position: relative;
          top: -4px;
          border: 1px solid #eee;
          font-size: 12px;
          padding: 6px 8px;
          line-height: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #898989;
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
    padding: 0 40px;
    margin: 0 15px;
    height: 52px;
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

  .projectregi_item_ir {
    .contentBot {
      width: 100%;
      padding: 0;
      div {
        padding: 5px;
      }
    }
    height: 160px;
  }
  @media only screen and (max-width: 1180px) {
    padding: 40px 0px 50px;
  }

  @media only screen and (max-width: 1080px) {
    .projectregi_items {
      width: 99.6%;
    }
    .projectregi_item {
      margin: 5px 5px 5px 0;
    }

    .projectregi_checkbox_area {
      padding: 0px 5px;
      min-width: 90px;

      /* background-color: #f3f3f3; */
    }

    .projectregi_checkbox_top {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 20%;

      input {
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
    }
    .projectregi_checkbox_bot {
      flex-direction: column;
      align-items: center;
      text-align: center;

      height: 5%;

      .ckIcon {
        width: 30px;
        padding: 5px;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }

      .projectregi_checkbox_videditorText {
        div {
          font-size: 16px;
        }
      }

      .projectregi_checkbox_creatorText {
        div {
          font-size: 12px;
        }
      }
    }

    .projectregi_content_item {
      display: inline-block;
      min-width: 220px;
    }

    .contentArea {
      padding-left: 5px;
      padding-right: 5px;

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
        padding: 5px 0px 5px 5px;
        display: block;
        overflow: hidden;
        text-align: center;
      }
    }

    .projectregi_item_ir {
      .projectregi_checkbox_top,
      .projectregi_checkbox_bot {
        position: relative;
        top: -15px;
        left: 0;
      }
      .projectregi_checkbox_bot {
        margin-top: 12px;
      }
    }
  }
`;
