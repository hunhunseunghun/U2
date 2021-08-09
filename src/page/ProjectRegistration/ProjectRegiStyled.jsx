import styled from 'styled-components';
// import '!!raw-loader!https://cdn.rawgit.com/JacobLett/bootstrap4-latest/master/bootstrap-4-latest.min.css';
// import bootstrapcss from '../../style/bootstrapcss.css';

export const PrjRegiContainer = styled.div`
  padding: 20px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  font-weight: 500;

  .projectregi_section {
    width: 100%;
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
    grid-gap: 20px;
  }
  .projectregi_item {
    border: 1px solid #cacaca;
    background-color: #fff;
  }

  .projectregi_item_innerwrap {
    display: grid;
    grid-template-columns: 2.5fr 7.5fr;
    height: 100%;
    box-sizing: border-box;
  }

  .projectregi_checkbox_area {
    padding: 5%;
    display: grid;
    background-color: #fff;
    border-right: 1px solid #cacaca;
    text-align: center;

    .projectregi_checkbox_iconwrap {
      display: grid;
      place-items: center;
      img {
        width: 65%;
      }
    }

    .projectregi_checkbox_text {
      font-size: 18px;
      margin: 2% 0 0% 0;
    }
    .vidcreator_checbox_text {
      font-size: 15px;
    }

    .projectregi_checkbox {
      display: grid;
      place-items: end center;

      input {
        width: 30px;
        height: 30px;
      }
    }
  }

  .contentArea {
    display: grid;
    padding: 2%;
    box-sizing: border-box;
    .contentTop {
      font-size: 16px;
      box-sizing: border-box;
      .contentTitle {
        padding: 10px 0 5px 0;
      }
      p {
        all: unset;
        font-size: 14px;
        color: #898989;
        word-break: break-all;
        white-space: pre-line;
      }
    }

    .contentBot {
      width: 103%;
      display: block;
      align-items: center;
      margin-top: 10px;

      .projectregi_content_item {
        position: relative;
        display: inline-block;
        margin: 3px 0.5% 3px 0;
        width: 32%;

        cursor: pointer;

        .projectregi_content_img_wrap {
          overflow: hidden;
          padding-bottom: 56.25%; /*Using 20% for padding makes the height of the box equal to 20% of its width.*/
          position: relative;
          height: 0;

          img {
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
          }
        }

        /* div {
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
          background-color: #f8f8f8;
        } */
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

  /* @media only screen and (max-width: 1350px) and (min-width: 900px) {
    padding: 20px 10px 100px;
    .projectregi_checkbox_area {
      padding: 5% 5%;
      place-items: center;
      background-color: #fff;
      border-right: 1px solid #eee;
      text-align: center;
      .projectregi_checkbox {
        display: grid;
        place-items: center;
        padding: 20% 10% 5% 10%;

        input {
          width: 50px;
          height: 50px;
        }
      }
      .projectregi_checkbox_bottom {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        margin: 10% 5% 0 5%;

        .projectregi_checkbox_iconwrap {
          display: grid;
          place-items: center;
          img {
            max-width: 35px;
          }
        }
        .projectregi_checkbox_text {
          display: flex;
          align-items: center;
          font-size: 16px;
          padding-left: 5%;
        }
        .vidcreator_checbox_text {
          display: none;
        }
        .vidcreator_checbox_text_smallsize {
          font-size: 14px;
        }
      }
    }
  } */
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
    .projectregi_item_innerwrap {
      display: grid;
      grid-template-columns: 2.5fr 7.5fr;
      height: 100%;
      box-sizing: border-box;
    }
    .projectregi_checkbox_area {
      padding: 5%;
      display: grid;
      background-color: #fff;
      border-right: 1px solid #cacaca;
      text-align: center;

      .projectregi_checkbox_iconwrap {
        display: grid;
        place-items: center;
        img {
          width: 65%;
        }
      }

      .projectregi_checkbox_text {
        font-size: 13px;
        margin: 2% 0 0% 0;
      }
      .vidcreator_checbox_text {
        font-size: 11px;
      }

      .projectregi_checkbox {
        display: grid;
        place-items: end center;

        input {
          width: 25px;
          height: 25px;
        }
      }
    }

    .projectregi_items {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
    }

    .contentArea {
      padding: 5px;
      font-size: 12px;

      .contentTop {
        font-size: 14px;
        box-sizing: border-box;
        .contentTitle {
          padding: 5px 0 3px 0;
        }
        p {
          all: unset;
          width: 80%;
          font-size: 13px;
          line-height: 14px;
          color: #898989;
          word-break: break-all;
          white-space: normal;
        }
      }
      .contentBot {
        margin-top: 3px;
        .contentBot_irregi_text {
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
  }
`;
