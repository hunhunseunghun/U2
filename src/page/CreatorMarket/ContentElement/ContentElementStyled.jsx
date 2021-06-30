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
  }
  .challenge_img {
    width: 100%;
  }
  .challenge_contents {
    padding: 16px 25px;
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
    margin-top: 8px;
    font-size: 14px;
    color: #989898;
    font-weight: 500;
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
`;
