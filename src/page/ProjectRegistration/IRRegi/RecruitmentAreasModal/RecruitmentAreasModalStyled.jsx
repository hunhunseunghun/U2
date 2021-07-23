import styled from 'styled-components';

export const Container = styled.div`
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
    width: 80%;
    max-width: 450px;
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

    .recruitment_select_area {
      display: flex;
      flex-wrap: wrap;

      .recruitment_modal_elements {
        display: flex;
        width: 49%;
        margin: 1px;
        border: 1px solid #dee2e6;

        .recruitment_modal_checkboxarea {
          border-right: 1px solid #dee2e6;

          padding: 10px;
        }
        .recruitment_modal_content {
          display: grid;
          place-items: center;
          margin-left: 7px;
          word-break: break-all;
        }
      }
    }
    .recruitment_direct_area {
      display: flex;

      margin-top: 20px;

      border: 1px solid #dee2e6;

      .recruitment_direct_title {
        padding: 5px;
        padding-top: 7px;
        border-right: 1px solid #dee2e6;
      }
      .recruitment_direct_input {
        width: 80%;
        display: flex;
        padding: 5px;

        input {
          width: 70%;
          margin-left: 10px;
        }
        button {
          all: unset;
          outline: none;
          width: 40px;
          padding: 4px 8px;
          color: #fff;
          background-color: #6c757d;
          border-radius: 5px;
          font-size: 11px;
          margin-left: 5px;
          text-align: center;

          &:hover {
            cursor: pointer;
            background-color: #565d63;
          }
        }
      }
    }
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
    width: 200px;
  }
`;
