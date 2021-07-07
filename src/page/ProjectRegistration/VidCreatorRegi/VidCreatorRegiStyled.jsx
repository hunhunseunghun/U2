import styled from 'styled-components';

export const RegiConationer = styled.div`
  padding: 40px 45px 100px;
  /* background-color: #fafafa; */
  display: flex;
  justify-content: center;
  font-weight: 500;
  min-width: 780px;
  .vidcreatorregi_section {
    width: 100%;
    max-width: 1100px;
  }
  .vidcreatorregi_title_area {
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
      font-weight: 500;
      font-size: 32px;
    }
    .vidcreatorregi_title_style {
      margin-top: 3px;
      width: 20px;
      border: 1px solid #181818;
    }
  }
  .vidcreatorregi_title_sub {
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

  .vidcreatorregi_items {
    background-color: #fff;
  }

  //handle profiles---

  .company_profiles {
    position: relative;
  }

  .default_profile {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px soild #dddddd;
    padding: 5px 5px 5px 10px;

    img {
      position: relative;
      top: 2px;
      width: 16px;
      margin-left: 5px;

      &:hover {
        cursor: pointer;
      }
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
    color: #747474;
  }

  .vidcreator_files_uploader {
    font-size: 14px;
    display: block;

    div {
      margin: 10px 0;
    }
  }
  .vidcreator_project_name,
  .vidcreator_reference_url {
    input {
      width: 280px;
    }
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
      border: 1px solid #7a7a7a;
      cursor: pointer;
      transform: scale(1.01);
    }

    .offlineMeetText > div:first-child {
      font-size: 16px;
    }
  }

  //when click select meet tag isActive on-------------
  .onmeet_isactive {
    border: 1px solid #6d6d6d;
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

  // reward type table css ---------------------------------------
  .vidcreator_rewardtype {
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

        select {
          padding: 0px 25px 0px 3px;
          height: 22px;
          margin-left: 3px;
        }
      }
      label {
        margin-left: 1px;
        min-width: 70px;
        text-align: left;
      }
      .reception_options {
        display: block;
      }
    }
  }
  //editor css ----------------------------------
  .notice_editor_form {
    padding: 0 0 42px 0;
  }
  .notice_editor {
    width: 100%;
    height: 300px;
    border: 0;
  }

  //reply css -------------------------------------
  .replyfunc_items {
    display: inline-block;
  }

  .replyfunc_item_wrap {
    display: flex;
    margin-right: 5px;
    input {
      margin-right: 3px;
    }
  }
  //mananger css ------------------------------------

  .manager_items {
    display: inline-block;
    margin-right: 5px;

    section {
      display: flex;

      input {
        margin-right: 5px;
      }
    }
  }

  //phonenumber css---------------------------------

  .phonenumber_items {
    display: inline-block;
    margin: 0 5px;

    #areacode {
      padding: 0 5px;
      width: 60px;
      height: 21px;
      border: 1px solid #d8d8d8;
    }

    input {
      width: 34px;
    }

    section {
      display: flex;
    }
  }

  //email css---------------------------------

  .email_items {
    display: inline-block;
    margin-right: 5px;

    section {
      display: flex;

      input {
        margin-right: 5px;
      }
    }
  }

  .vidcreatorregi_bottom_style {
    background-color: #dddddd;
    height: 1px;
  }

  // prev next button css ---------------------
  .vidcreatorregi_btn_area {
    width: 100%;
    display: flex;
    padding: 40px 0;
    justify-content: center;
  }

  .vidcreatorregi_btn {
    width: 120px;
    border: 1px solid #d1d1d1;
    padding: 5px 20px;
    margin: 0 5px;
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

  .vidcreatorregi_btn_next {
    border: 1px solid #d1d1d1;
    font-size: 16px;
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
`;
