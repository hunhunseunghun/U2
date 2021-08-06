import styled from 'styled-components';
export const ModalContainer = styled.div`
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
    :hover {
      background-color: grey;
    }
  }
  .modal > section {
    width: 100%;
    max-width: 660px;
    min-width: 473px;
    height: relative;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #1b1718;
    font-weight: 700;
    color: white;
  }

  .modal > section > main {
    padding: 16px;
    /* height: 500px; */
    border-top: 1px solid #dee2e6;
    section {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      /* align-items: center; */
    }
  }

  .modal > section > footer {
    width: 100%;
    padding: 12px 16px 30px 16px;
    text-align: center;
    box-sizing: border-box;
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.3s;
  }
  .ele {
    display: flex;
  }
  .adress_ele {
    border-bottom: 1px solid #d1d1d1;
  }
  .menu {
    display: flex;
    min-width: 90px;
    align-items: center;
    border-right: 1px solid#d8d8d8;
    border-top: 1px solid #d8d8d8;
    background-color: #f3f3f3;
    padding-left: 10px;
    min-height: 50px;
    font-size: 13px;
  }
  .inputInfo {
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid #00000023;
    padding: 0 10px;
    font-size: 12px;
    color: #747474;
    /* overflow: auto; */

    input {
      padding: 5px;
      border: 1px solid #d8d8d8;
    }
    .input_work_title {
      width: 50%;
    }

    .phoneInput {
      width: 250px;
    }

    .banks_select {
      padding: 0 5px;
      height: 27px;
      margin-right: 2px;
      border: 1px solid #c7c7c7;
      font-size: 12px;
    }
    .banks_accout_input {
      width: 152px;
    }

    .errorMessage {
      color: red;
    }
    .shake {
      animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
    .auth-input {
      margin-top: 5px;
      & > input {
        /* width: auto; */
      }
    }

    .auth-btn {
      all: unset;
      padding: 0 5px;
      font-size: 11px;
      border: 1px solid #d1d1d1;
      margin: 0 5px;
      color: #808080;
      background: linear-gradient(#ffff, #e9e9e9);
      font-weight: 400;
      border-radius: 0;
      height: 25px;
      &:hover {
        cursor: pointer;
        background: linear-gradient(#ffff, #d3d3d3);
        border-color: #d4d4d4;
      }
    }
    .auth_btn_account {
      all: unset;
      padding: 0 5px;
      font-size: 11px;
      border: 1px solid #d1d1d1;
      margin: 0 5px;
      color: #363636;
      background-color: #f84135;
      border-color: #f84135;
      font-weight: 400;
      border-radius: 0;
      height: 25px;
      color: white;
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #ff2a1b;
        border-color: #ff2a1b;
      }
    }

    .authorized {
      color: green;
    }
    .EmailContainer {
      padding: 0px;
      margin: 0px;
      input {
        width: 216px;
      }
    }
    .MobileContainer {
      display: flex;
      .mobile_err_msg {
        position: relative;
        top: 2px;
        font-size: 10px;
        color: #ff2a1b;
        font-weight: 400;
      }
    }
  }

  .URLs {
    max-height: 300px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;

    padding: 0 0 0 10px;

    .youtubeURL {
      padding-top: 5px;
      margin-right: 10px;
      font-size: 13px;
      font-weight: bold;
      color: black;
      height: 20px;
    }
    .plusMinus {
      position: relative;
      top: 4px;
      font-size: 17px;
      margin-left: 5px;
      padding-bottom: 0;
      color: black;
      border-radius: 150px;

      &:hover {
        cursor: pointer;
        background-color: #dbdbdb;
      }
    }

    .ul-URLs {
      li-url {
      }
    }
  }
  .Address {
    padding: 10px;
    display: block;

    .address_ele {
      display: flex;
      margin-bottom: 2px;
    }

    .address_menu {
      display: flex;
      min-width: 100px;
      padding-left: 10px;
      min-height: 22px;
      font-size: 12px;
      font-weight: 400;
    }
    .address_inputInfo_reciever {
      input {
        width: 260px;
        font-size: 12px;
      }
    }
    .address_inputInfo_recievernumb {
      input {
        width: 230px;
        font-size: 12px;
      }
    }

    .address_inputinfo_last {
      input {
        margin-bottom: 2px;
        margin-right: 2px;
      }

      .address_zipcode_input {
        input {
          width: 50px;
          text-align: center;
          font-size: 12px;
        }
      }
      .adress_middle_input {
        width: 260px;
        font-size: 12px;
      }
      .adress_detail_input {
        width: 207px;
      }
    }
    .address_find_btn {
      all: unset;
      padding: 0 5px;
      font-size: 11px;
      border: 1px solid #d1d1d1;
      color: #808080;
      background: linear-gradient(#ffff, #e9e9e9);
      font-weight: 400;
      border-radius: 0;
      height: 23px;
      &:hover {
        cursor: pointer;
        background: linear-gradient(#ffff, #d3d3d3);
        border-color: #d4d4d4;
      }
    }
  }
  .address {
    display: flex;
    flex-direction: column;
  }

  .submit_modal_ele_last {
    border-bottom: 1px solid #d8d8d8;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .close_btn {
      all: unset;
      padding: 6px 15px;
      color: #fff;

      font-size: 12px;
      border: 1px solid #d1d1d1;
      margin: 0 5px;
      border-radius: 4px;
      color: #898989;
      &:hover {
        cursor: pointer;
        color: black;
        border-color: #898989;
        background-color: #fff;
      }
    }
    .submit_btn {
      border: 1px solid #d1d1d1;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
      padding: 6px 15px;

      border-radius: 4px;
      background-color: #f84135;
      border-color: #f84135;

      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #ff2a1b;
        border-color: #ff2a1b;
      }
    }
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
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  @media only screen and (max-width: 550px) {
    .modal {
      display: none;
      position: fixed;
      top: 45px;
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
      :hover {
        background-color: grey;
      }
    }
    .modal > section {
      width: 100%;
      max-width: 660px;
      min-width: unset;
      height: relative;
      margin: 0 auto;
      border-radius: 0.3rem;
      background-color: #fff;
      animation: modal-show 0.3s;
      overflow: hidden;
    }
    .modal > section > header {
      position: relative;
      padding: 5px 10px 5px 10px;
      background-color: #1b1718;
      font-weight: 700;
      color: white;
    }

    .modal > section > main {
      padding: 0px;
      /* height: 500px; */
      border-top: 1px solid #dee2e6;
      section {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        /* align-items: center; */
      }
    }
    .modal > section > footer {
      padding: 5px 5px 5px 5px;
      text-align: center;
    }

    .modal.openModal {
      display: flex;
      align-items: center;
      animation: modal-bg-show 0.3s;
    }
    .ele {
      display: flex;
    }
    .menu {
      display: flex;
      min-width: 60px;
      align-items: center;
      border-right: 1px solid#d8d8d8;
      border-top: 1px solid #d8d8d8;
      background-color: #f3f3f3;
      padding-left: 10px;
      min-height: 30px;
      font-size: 10px;
    }
    .inputInfo {
      display: flex;
      align-items: center;
      width: 100%;
      border-top: 1px solid #00000023;
      padding: 0 3px;
      font-size: 10px;
      color: #747474;
      /* overflow: auto; */
      #upLoader {
        width: 58px;
        height: 19px;
      }
      input {
        padding: 0px;
        border: 1px solid #d8d8d8;
        height: 15px;
        width: 50%;
        font-size: 10px;
      }
      .input_work_title {
        width: 50%;
      }

      .phoneInput {
        width: 50%;
      }

      .banks_select {
        padding: 0 5px;
        height: 21px;
        margin-right: 2px;
        border: 1px solid #c7c7c7;
        font-size: 10px;
      }
      .banks_accout_input {
        width: 50%;
      }

      .errorMessage {
        color: red;
      }
      .shake {
        animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      }
      .auth-input {
        margin: 5px;
        & > input {
          /* width: auto; */
        }
      }

      .auth-btn {
        all: unset;
        padding: 0 5px;
        font-size: 10px;
        border: 1px solid #d1d1d1;
        margin: 0 5px;
        color: #808080;
        background: linear-gradient(#ffff, #e9e9e9);
        font-weight: 400;
        border-radius: 0;
        height: 17px;
        &:hover {
          cursor: pointer;
          background: linear-gradient(#ffff, #d3d3d3);
          border-color: #d4d4d4;
        }
      }
      .auth_btn_account {
        all: unset;
        padding: 0 5px;
        font-size: 10px;
        border: 1px solid #d1d1d1;
        margin: 0 5px;
        color: #363636;
        background-color: #f84135;
        border-color: #f84135;
        font-weight: 400;
        border-radius: 0;
        height: 15px;
        color: white;
        &:hover {
          cursor: pointer;
          color: #fff;
          background-color: #ff2a1b;
          border-color: #ff2a1b;
        }
      }

      .authorized {
        color: green;
      }
      .EmailContainer {
        padding: 0px;
        margin: 5px 0px 0px 0px;
        input {
          width: 100%;
        }
        .auth-btn {
          margin: 5px 0;
        }
      }
      .MobileContainer {
        display: flex;
        .mobile_err_msg {
          position: relative;
          top: 2px;
          font-size: 10px;
          color: #ff2a1b;
          font-weight: 400;
        }
      }
    }
    .URLs {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      max-height: 150px;
      overflow: scroll;
      overflow-x: hidden;
      overflow-y: auto;

      padding: 5px 0 0 5px;

      div {
        display: flex;
        width: 100%;

        margin-bottom: 5px;
      }
      .uploadArea {
        display: block;
      }

      .youtubeURL {
        width: 65px;
        padding-top: 5px;
        margin-right: 2px;
        font-size: 10px;
        font-weight: bold;
        color: black;
        height: 13px;
      }
      .plusMinus {
        position: relative;
        top: 4px;
        font-size: 13px;
        margin-left: 5px;
        padding-bottom: 0;
        color: black;
        border-radius: 150px;

        &:hover {
          cursor: pointer;
          background-color: #dbdbdb;
        }
      }

      .ul-URLs {
        li-url {
        }
      }
    }
    .Address {
      padding: 5px;
      display: block;
      .address_ele {
        display: flex;
        margin-bottom: 2px;
      }

      .address_menu {
        display: flex;
        min-width: 80px;
        padding-left: 5px;
        min-height: 22px;
        font-size: 10px;
        font-weight: 400;
      }
      .address_inputInfo_reciever {
        input {
          width: 100%;
          font-size: 10px;
        }
      }
      .address_inputInfo_recievernumb {
        input {
          width: 100%;
          font-size: 10px;
        }
      }

      .address_inputinfo_last {
        input {
          margin-bottom: 2px;
          margin-right: 2px;
        }

        .address_zipcode_input {
          input {
            width: 50px;
            text-align: center;
            font-size: 10px;
          }
        }
        .adress_middle_input {
          width: 100%;
          font-size: 10px;
        }
        .adress_detail_input {
          width: 100%;
        }
      }
      .address_find_btn {
        all: unset;
        padding: 0 5px;
        font-size: 10px;
        border: 1px solid #d1d1d1;
        color: #808080;
        background: linear-gradient(#ffff, #e9e9e9);
        font-weight: 400;
        border-radius: 0;
        height: 21px;
        &:hover {
          cursor: pointer;
          background: linear-gradient(#ffff, #d3d3d3);
          border-color: #d4d4d4;
        }
      }
    }
    .address {
      display: flex;
      flex-direction: column;
    }

    .submit_modal_ele_last {
      border-bottom: 1px solid #d8d8d8;
    }

    footer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .close_btn {
        all: unset;
        padding: 6px 15px;
        color: #fff;

        font-size: 12px;
        border: 1px solid #d1d1d1;
        margin: 0 5px;
        border-radius: 4px;
        color: #898989;
        &:hover {
          cursor: pointer;
          color: black;
          border-color: #898989;
          background-color: #fff;
        }
      }
      .submit_btn {
        border: 1px solid #d1d1d1;
        font-size: 12px;
        font-weight: 500;
        color: #fff;
        padding: 6px 15px;

        border-radius: 4px;
        background-color: #f84135;
        border-color: #f84135;

        &:hover {
          cursor: pointer;
          color: #fff;
          background-color: #ff2a1b;
          border-color: #ff2a1b;
        }
      }
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
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  }
`;
