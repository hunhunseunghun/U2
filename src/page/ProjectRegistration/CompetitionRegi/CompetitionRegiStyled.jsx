import styled from 'styled-components';

export const RegiContainer = styled.div`
  padding: 40px 45px 100px;
  /* background-color: #fafafa; */
  display: flex;
  justify-content: center;
  font-weight: 500;
  /* min-width: 780px; */

  .competitionregi_section {
    width: 100%;
    max-width: 1100px;
  }
  .competitionregi_title_area {
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
    .competitionregi_title_style {
      margin-top: 3px;
      width: 20px;
      border: 1px solid #181818;
    }
  }

  .competitionregi_title_sub {
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

  .competitionregi_items {
    background-color: #fff;
  }

  //공모전 명---

  .inActive {
    display: none;
  }
  .competitionName {
    position: relative;
  }

  .defaultCompetition {
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

  .competition_name,
  .competition_webpageURL,
  .competition_sponsor,
  .competition_organizer,
  .competition_name_input {
    display: flex;
    input {
      width: 280px;
      margin-right: 5px;
    }
  }

  // 파일 업로더 css ----------------------------
  .infoPoster,
  .infoFiles {
    font-size: 14px;
    display: block;

    div {
      margin: 10px 0;
    }
  }
  // --------------------------------------------
  .radioWrap {
    display: flex;

    div {
      margin-left: 5px;
      margin-right: 10px;
    }
  }
  // tabale css ------------------------------------

  .reception_info {
    font-size: 12px;
    padding: 0;
    width: 100%;
    border-top: 0;

    .reception_form {
      width: 100%;
      .reception_table {
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

  //reward type css --------------------------

  .reward_type {
  }
  .reward_type_items {
    display: inline-block;
    padding: 5px 0;
  }
  .reward_type_title {
    position: relative;
    display: inline-block;
    top: -2px;
    margin-left: 2px;
  }

  .reward_type_item_wrap {
    display: flex;
    input {
      margin-left: 10px;
    }
  }

  //editor css ----------------------------------
  .notice_editor_form {
    padding: 0 0 0 0;
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

  .competition_bottom_style {
    background-color: #dddddd;
    height: 1px;
  }

  // prev next button css ---------------------
  .compeitiionregi_btn_area {
    width: 100%;
    display: flex;
    padding: 40px 0;
    justify-content: center;
  }

  .compeitiionregi_btn {
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

  .compeitiionregi_btn_next {
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

  @media only screen and (max-width: 648px) {
    .notice_editor_form {
      padding: 0 0 65px 0;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 40px 0px 50px;

    .competitionregi_title_area {
      margin-top: 0.5rem;
      margin-bottom: 10px;

      div {
        font-size: 24px;
        font-weight: 600;
      }
    }

    .competitionregi_title_sub {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      color: #3b3b3b;
      margin-bottom: 10px;
      img {
        margin-right: 5px;
        width: 18px;
      }
    }

    .competitionregi_items {
      background-color: #fff;
    }

    //공모전 명---

    .inActive {
      display: none;
    }
    .competitionName {
      position: relative;
    }

    .defaultCompetition {
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

    .menu {
      max-width: 70px;
      width: 70px;
      min-width: 70px;
      min-height: 50px;
      font-size: 13px;
    }
    .inputInfo {
      display: flex;
      align-items: center;
      width: 100%;
      border-top: 1px solid #00000023;
      padding: 0 5px;
      font-size: 12px;
      color: #747474;
    }

    .competition_name,
    .competition_webpageURL,
    .competition_sponsor,
    .competition_organizer {
      display: block;
      width: 100%;
      padding: 5px 0;
      input {
        width: 50%;
      }
    }

    .competition_name_input {
      width: 50%;
    }

    // 파일 업로더 css ----------------------------
    .infoPoster,
    .infoFiles {
      font-size: 12px;
      display: block;

      div {
        margin: 5px 0;
      }
      .uploadArea {
        width: 100%;
        .filePath {
          width: 70%;
          font-size: 12px;
        }
        #upLoader {
          width: 72px;
          font-size: 12px;
        }
      }
    }
    // --------------------------------------------
    .radioWrap {
      display: flex;

      div {
        margin-left: 5px;
        margin-right: 10px;
      }
    }
    // tabale css ------------------------------------

    .reception_info {
      font-size: 12px;
      padding: 0;
      width: 100%;
      border-top: 0;

      .reception_form {
        width: 100%;
        .reception_table {
          width: 100%;
          border-collapse: collapse;
        }

        .table_checkarea {
          width: unset;
          display: grid;
          place-items: center;
        }
        .table_title {
          text-align: center;
          min-width: unset;
        }
        tr {
          border-top: 1px solid #d8d8d8;
        }

        td {
          padding: 3px;
          border-left: 1px solid #d8d8d8;
        }

        td:first-child {
          border-left: 0;
          width: 20px;
        }

        td:nth-child(2) {
          width: 40px;
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
          position: relative;
          top: -2px;
          margin-left: 1px;
          min-width: 70px;
          text-align: left;
        }
        .reception_options {
          display: block;
          justify-content: left;

          div {
            display: inline-block;
            width: unset;
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

    //reward type css --------------------------

    .reward_type_form {
      padding: 0;
    }
    .reward_type_items {
      display: inline-block;
      padding: 2px 0;
    }
    .reward_type_title {
      position: relative;
      display: inline-block;
      top: -2px;
      margin-left: 2px;
    }

    .reward_type_item_wrap {
      display: flex;
      div {
        width: 58px;
      }
    }
    .reward_type_inputdirect {
      width: 50%;
    }

    //editor css ----------------------------------
    .notice_editor_form {
      padding: 0 0 0 0;
    }
    .notice_editor {
      width: 100%;
      height: 300px;
      border: 0;
    }

    .ck-editor__editable_inline {
      width: 100%;
      padding: 5%;
      box-sizing: border-box;
    }
    .ck-button {
      width: 15px;
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
      display: block;
      margin-right: 5px;

      section {
        display: flex;

        input {
          margin-right: 5px;
        }
      }
    }
    .manager_items_fore {
      width: 50%;
      input {
        width: 100%;
        box-sizing: border-box;
      }
      margin-right: 5px;
    }

    //phonenumber css---------------------------------

    .phonenumber_items {
      display: inline-block;
      margin: 0 5px;

      #areacode {
        padding: 0 2px;
        width: 50px;
        height: 21px;
        font-size: 11px;
        border: 1px solid #d8d8d8;
      }

      input {
        width: 25px;
        font-size: 11px;
      }

      section {
        display: flex;
      }
    }
    .phonenumber_noexposure {
      display: inline-block;
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
    .email_items_fore {
      width: 50%;
      input {
        width: 100%;
        box-sizing: border-box;
      }
      margin-right: 5px;
    }

    .competition_bottom_style {
      background-color: #dddddd;
      height: 1px;
    }

    // prev next button css ---------------------
    .compeitiionregi_btn_area {
      width: 100%;
      display: flex;
      padding: 40px 0;
      justify-content: center;
    }

    .compeitiionregi_btn {
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

    .compeitiionregi_btn_next {
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
  }
`;
