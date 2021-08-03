import styled from 'styled-components';
export const ModalContainer = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 90;
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
    width: 100%;
    min-width: 350px;
    max-width: 700px;
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
    height: 80%;
    border-top: 1px solid #dee2e6;
    .links {
      width: 100%;
      a:hover {
        color: blue;
      }
    }
  }

  .modal > section > footer {
    padding: 12px 16px 30px 16px;
    text-align: center;

    button {
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
      }
    }

    .return,
    .feedback {
      background-color: #f3f3f3;
      &:hover {
        background-color: #d4d4d4;
        border-color: #d4d4d4;
      }
    }

    .okay {
      border: 1px solid #d1d1d1;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
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

  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.3s;
  }
  /* .cate {
		background-color: grey;
	} */
  .submission_modal_ele {
    display: flex;
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
    img {
      width: 100%;
    }
    .authorized {
      align-items: center;
      font-size: 11px;
      kbd {
        all: unset;
        padding: 3px 4px;
        font-size: 11px;
        border: 1px solid #d1d1d1;
        margin: 0 5px;
        border-radius: 4px;
        color: #363636;
        background-color: #f3f3f3;
      }
    }
  }

  .submission_modal_ele_last {
    border-bottom: 1px solid #d8d8d8;
  }
  .submission_inputinfo_challengevid {
    width: 100%;
    display: flex;
    align-items: center;
    img {
      width: 50%;
      min-width: 100px;
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
`;
