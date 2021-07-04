import styled from 'styled-components';

export const RegiConationer = styled.div`
  padding: 40px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  font-weight: 500;
  min-width: 780px;
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

  .vidcreatorregi_items {
    background-color: #fff;
  }

  //handle profiles---

  .profiles_name {
    position: relative;
  }

  .default_profiles {
    background-color: #ebebeb;
    padding: 5px 10px;
    &:hover {
      cursor: pointer;
      background-color: #e2e2e2;
    }
  }

  //----------

  .noDisplay {
    display: none;
  }

  .ele {
    display: flex;
  }
  .menu {
    display: flex;
    min-width: 150px;
    align-items: center;
    border-right: 1px solid#d8d8d8;
    border-top: 1px solid #d8d8d8;
    background-color: #f3f3f3;
    padding-left: 10px;
    min-height: 50px;
    font-size: 15px;
  }
  .inputInfo {
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid #00000023;
    padding: 0 10px;
    font-size: 12px;
  }

  .vidcreator_reference_url {
    display: block;
    padding: 10px 10px;
  }

  .vidcreator_details {
    padding: 10px 10px;

    textarea {
    }
  }

  .vidcreator_onlinemeet {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #eee;
    font-size: 12px;

    img {
      margin-right: 20px;
    }

    &:hover {
      border: 1px solid #898989;
      cursor: pointer;
      transform: scale(1.01);
    }

    .onlineMeetText > div:first-child {
      font-size: 16px;
    }
  }

  .vidcreaotr_offlinemeet {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #eee;
    font-size: 12px;

    img {
      margin-right: 20px;
    }

    &:hover {
      border: 1px solid #898989;
      cursor: pointer;
      transform: scale(1.01);
    }

    .offlineMeetText > div:first-child {
      font-size: 16px;
    }
  }

  //when click select meet tag isActive on-------------
  .onmeet_isactive {
    border: 1px solid #898989;
    transform: scale(1.01);
  }

  // tabale css ------------------------------------

  .vidcreator_reception_info {
    font-size: 12px;
    padding: 0;
    width: 100%;
    border-top: 0;

    .vidcreator_reception_form {
      width: 100%;
      .vidcreator_reception_table {
        width: 100%;
        border-collapse: collapse;
      }

      .table_checkarea {
        width: 40.5px;
        display: grid;
        place-items: center;
      }
      .table_title {
        text-align: center;
        min-width: 90px;
      }
      tr {
        border-top: 1px solid #d8d8d8;
      }

      td {
        padding: 10px;
        border-left: 1px solid #d8d8d8;
      }

      td:first-child {
        border-left: 0;
        width: 40px;
      }

      td:nth-child(2) {
        width: 110px;
      }

      th:last-child,
      td:last-child {
        border-right: 0;
      }

      section {
        width: 100%;
        display: flex;
        align-items: center;

        div {
          width: 100%;
          display: flex;
          align-items: center;
          text-align: center;
        }
      }
      label {
        margin-left: 1px;
        min-width: 70px;
        text-align: left;
      }
      .reception_options {
        display: flex;
        justify-content: left;

        div {
          width: 80px;
        }
      }
    }
  }
  // datetime picker css ---------------

  .chooseDate {
    display: block;
    padding: 5px;
  }
  .inputStart,
  .inputFinish {
    display: flex;
    align-items: center;
    padding: 5px;
    .input_sub_text {
      margin-left: 5px;
    }
  }
  .MuiFormControl-root {
  }
  .MuiOutlinedInput-root {
  }
  .MuiOutlinedInput-input {
    padding: 10.5px 10px;
  }
  .MuiInputBase-input {
    padding: none;
  }
  .MuiFormLabel-root,
  .MuiFormHelperText-root,
  .MuiInputBase-root {
    font-size: 12px;
    font-weight: 500;
    font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans', sans-serif;
  }

  .vidcreator_rewarddate {
    display: block;
    padding: 10px 10px;

    .vidcreator_reward_date_select {
      display: flex;
      margin-bottom: 15px;

      .discussed_date,
      .fixed_date {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        input {
          margin-right: 3px;
        }
      }
      .fixed_date {
        margin-right: 10px;
      }
    }
  }
`;
