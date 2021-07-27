import styled from 'styled-components';

export const EleContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(33.3% - 30px);
  margin: 25px 15px 25px 15px;
  position: relative;
  cursor: pointer;
  text-align: left;
  background-color: #fff;

  .challenge_img_area {
    position: relative;
    width: 100%;
    min-height: 100px;
    background-size: cover;
    overflow: hidden;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: #eee solid 1px;

    .challenge_badge_area {
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      top: 0;
      left: 0;

      .challenge_badge_left {
        display: flex;
        align-items: center;
        padding: 1px;

        div {
          border-radius: 2px;
          border-bottom-right-radius: 9px;
        }
        .challenge_badge_mysubmit {
          background-image: linear-gradient(#2e4063, #14263b);
          padding: 2px 6px 3px 6px;
          font-size: 12px;
          color: white;
          margin-right: 1px;
        }
        .challenge_badge_mysregi {
          background-image: linear-gradient(#ff5e52, #ff1100);
          padding: 2px 6px 3px 6px;
          font-size: 12px;
          color: white;
        }
      }
      .challenge_badge_right {
        .challenge_badge_challengeuser {
          svg {
            color: yellow;
            height: 1.2em;
            width: 1.2em;
          }
          padding-right: 1px;
          img {
            height: 1.2em;
            width: 1.2em;
          }
        }
      }
    }
  }

  .challenge_img {
    width: 100%;
    /* min-height: 230px;
		max-height: 250px; */
    /* height: 230px; */
  }
  .challenge_contents {
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-top: none;
    height: 200px;
  }
  .challenge_title {
    font-size: 18px;
    line-height: 26px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .challenge_sub {
    height: 70%;
    margin-top: 8px;
    font-size: 14px;
    color: #989898;
    font-weight: 500;
    overflow: hidden;
    word-break: break-all;
    white-space: pre-line;
    text-overflow: ellipsis;
  }

  .challenge_bottom {
    display: flex;
    flex-direction: column;
    bottom: 20px;
    left: 0px;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    border-top: 0;
  }

  .challenge_progress_area {
    width: 100%;
    .challenge_progress_text {
      display: flex;
      font-size: 15px;
      line-height: 18px;
      font-weight: 600;
      color: #ff1405;

      div {
        margin-top: 10px;
        margin-right: 22px;
      }
    }

    .challenge_progressBar {
      width: 100%;
      height: 18px;
      background-color: #ffafa9;
      border-radius: 3px;
      margin-top: 5px;
    }
  }

  .challenge_info_top {
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    /* grid-template-columns: 1fr 1fr 1fr; */
    place-items: center;
    font-weight: 600;
    font-size: 15px;

    div {
      /* position: relative;
      left: -3px;
      width: 100%;
      text-align: center; */
    }

    .meetArea,
    .budgetArea,
    .remainDateArea {
      display: inline-block;
      text-align: center;
    }

    input {
      width: 1.3em;
      height: 1.3em;
      background-color: white;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid #ddd;
      -webkit-appearance: none;
      outline: none;
    }
  }

  .challenge_info_bot {
    width: 100%;
    margin: 25px 0 10px 0;
    display: flex;
    font-weight: 500;

    font-size: 15px;
  }

  .challenge_cmtval_area {
    display: flex;
    align-items: center;
    img {
      width: 15px;
      height: 15px;
    }

    .cmntIcon {
      width: 20px;
      margin-right: 5px;
    }
  }

  .challenge_shareval_area {
    display: flex;
    align-items: center;
    margin-left: 10px;

    img {
      width: 15px;
      height: 15px;
    }

    .shareIcon {
      width: 20px;
      margin-right: 5px;
    }
  }
  .challenge_info_top_mobile {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: inline-block;
    vertical-align: top;
    /* width: 80%; */
    min-width: 170px;
    margin: 0;
    position: static;
    cursor: pointer;
    text-align: left;
    background-color: #fff;
    transform: scale(0.9);

    .challenge_img_area {
      background-size: cover;
      background-color: #eee;
      width: 100%;
      height: 120px;
      min-height: none;
      background-color: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: #eee solid 1px;
    }
    .challenge_img {
      object-fit: cover;
      background-color: #eee;
      height: 100%;

      /* min-height: 230px;
		max-height: 250px; */
    }
    .challenge_contents {
      padding: 5px 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      border-top: none;
      height: 140px;
    }
    .challenge_title {
      font-size: 13px;
      line-height: 14px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .challenge_sub {
      width: 95%;
      height: 80%;
      margin-top: 8px;
      font-size: 13px;
      color: #989898;
      font-weight: 500;
      overflow: hidden;
      word-break: break-all;
      white-space: pre-line;
      text-overflow: ellipsis;
    }

    .challenge_sub_test {
    }

    .challenge_bottom {
      display: flex;
      flex-direction: column;
      bottom: 20px;
      left: 0px;
      width: 100%;
      padding: 5px 5px;
      box-sizing: border-box;
      justify-items: center;
      justify-content: space-between;
      align-items: center;
    }

    .challenge_progress_area {
      margin-top: 10px;
      margin-left: 15px;
      width: 100%;

      .challenge_progress_text {
        display: flex;
        font-size: 12px;
        line-height: 13px;
        font-weight: 600;
        color: #ff1405;

        div {
          margin-right: 22px;
        }
      }

      .challenge_progressBar {
        width: 100%;
        height: 18px;
        background-color: #ffafa9;
        border-radius: 3px;
        margin-top: 5px;
      }
    }
    .challenge_info_top {
      display: none;
    }
    .challenge_info_top_mobile {
      width: 100%;
      margin-top: 10px;
      display: block;
      font-weight: 600;
      font-size: 13px;
      box-sizing: border-box;
      padding: 0 5px;

      .meetArea,
      .budgetArea,
      .remainDateArea {
        padding: 5px;
        display: flex;
        align-items: center;
        box-sizing: border-box;

        .meet_onoff,
        .budget,
        .remainDate {
          width: 60%;
          margin-left: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      input {
        width: 1.3em;
        height: 1.3em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #ddd;
        -webkit-appearance: none;
        outline: none;
      }
    }

    .challenge_info_bot {
      width: 100%;
      margin: 22px 0 10px 22px;
      display: flex;
      font-weight: 500;

      font-size: 14px;
    }

    .challenge_cmtval_area {
      display: flex;
      align-items: center;
      img {
        width: 15px;
        height: 15px;
      }

      .cmntIcon {
        width: 20px;
        margin-right: 5px;
      }
    }

    .challenge_shareval_area {
      display: flex;
      align-items: center;
      margin-left: 10px;

      img {
        width: 15px;
        height: 15px;
      }

      .shareIcon {
        width: 20px;
        margin-right: 5px;
      }
    }
  }
`;
