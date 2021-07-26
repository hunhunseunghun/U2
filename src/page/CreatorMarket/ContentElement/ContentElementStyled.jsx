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
    width: 100%;
    min-height: 100px;
    background-size: cover;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: #eee solid 1px;
  }
  .challenge_img {
    width: 100%;
    /* min-height: 230px;
		max-height: 250px; */
    height: 230px;
  }
  .challenge_contents {
    padding: 16px 25px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
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
    height: 60%;
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
    padding: 5px 5px;
    box-sizing: border-box;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
  }

  .challenge_progress_area {
    margin-top: 20px;
    width: 90%;

    .challenge_progress_text {
      display: flex;
      font-size: 12px;
      line-height: 18px;
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
    width: 100%;
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    font-weight: 600;
    font-size: 14px;

    div {
      display: grid;
      place-items: center;
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
      width: 100%;
      height: 90px;
      min-height: none;
      background-size: cover;
      background-color: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: #eee solid 1px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .challenge_img {
      width: 100%;
      /* min-height: 230px;
		max-height: 250px; */
      height: 100%;
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
      height: 60%;
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
      width: 90%;

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
