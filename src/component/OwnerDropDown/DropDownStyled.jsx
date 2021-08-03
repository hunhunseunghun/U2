import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  padding: 5px 10px;
  top: 7px;
  left: -5px;
  z-index: 3;

  .modal_ele {
    display: flex;
  }
  .modal_menu {
    display: flex;
    min-width: 150px;
    align-items: center;
    border-right: 1px solid#d8d8d8;
    border-top: 1px solid #d8d8d8;
    background-color: #eee;
    padding-left: 10px;
    min-height: 50px;
    font-size: 15px;
  }
  .modal_inputInfo {
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid #00000023;
    padding: 0 10px;
    font-size: 12px;
    .inputSnsID {
      input {
        margin: 5px 0;
        margin-right: 5px;
      }
      select {
        font-size: 12px;
        padding: 5px 25px 5px 5px;
        height: 25px;
      }
    }
  }
  .inActive {
    display: none;
  }

  ul {
    list-style-type: none;
  }

  li {
    padding: 5px 10px;
    background-color: #ffffff;

    &:hover {
      cursor: pointer;
      background-color: #eee;
    }
  }
  // handle modal css ---------------------------
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
    margin-left: 10px;
    font-weight: 400;
    font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans', sans-serif;
  }
  .modal > section {
    width: 85%;
    max-width: 550px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }
  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  .modal > section > footer {
    padding: 12px 16px;
    text-align: right;
  }
  .modal > section > footer button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;

    &:hover {
      background-color: #4b5157;
    }
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .selectForm {
    display: flex;
  }
  .competitionName {
    width: 300px;
  }
  @media only screen and (max-width: 900px) {
    .modal_ele {
      display: flex;
    }
    .modal_menu {
      display: flex;
      min-width: 65px;
      width: 65px;
      align-items: center;
      border-right: 1px solid#d8d8d8;
      border-top: 1px solid #d8d8d8;
      background-color: #eee;
      padding: 0 5px 0 3px;
      min-height: 45px;
      font-size: 13px;
    }
    .modal_inputInfo {
      display: flex;
      align-items: center;
      width: 100%;
      border-top: 1px solid #00000023;
      padding: 0 5px;
      font-size: 12px;
      box-sizing: border-box;
      .uploadArea {
        box-sizing: border-box;
        width: 80%;
        .uploadForm {
          .filePath {
            position: relative;
            top: -1px;
            width: 50%;
            margin: 5px 5px 3px 0;
          }
          #upLoader {
            width: 73px;
            height: 25px;
            margin-left: 0;
            margin-bottom: 2px;
          }
          display: block;
        }
      }
      .inputCompany,
      .inputEmail,
      .inputPhoneNumber,
      .inputSnsID {
        input {
          width: 90%;
        }
      }
    }
    .inputSnsID {
      input {
        margin: 5px 0;
        max-width: 160px;
      }
      select {
        font-size: 12px;
        padding: 5px 25px 5px 5px;
        height: 25px;
        margin-left: 0px;
      }
    }
  }
`;
