import styled from 'styled-components';

export const Container = styled.div`
  .uploadArea {
    display: flex;
    font-size: 14px;

    div {
      margin: 10px 0;
    }
  }

  .uploadForm {
    display: flex;
    align-items: center;
  }

  .filePath {
    width: 200px;
    height: 18px;
  }

  #submit_modal_upLoader {
    width: 72px;
    height: 24px;
    margin-left: 5px;
    border: unset;
  }
  .uploader_loading_Img {
    svg {
      width: 27px;
      height: 27px;
    }
  }

  .filePreview {
    position: relative;
    top: 5px;
    .file_name_wrap {
      display: grid;
      grid-template-columns: 8fr 2fr;
      place-items: center;
      .file_name_text {
        width: 100%;
        font-size: 11px;
        font-weight: 700;
        padding: 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }
      .removeFileBtn {
        width: 20px;
        height: 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    #submit_modal_upLoader {
      position: relative;
      top: 2px;
      margin-left: 2px;
      min-width: 59px;
      max-width: 59px;
      transform: scale(0.9);
      border: none;
    }
    .filePreview {
      position: relative;
      top: 5px;
      .file_name_wrap {
        max-width: 60px;
        display: grid;
        grid-template-columns: 8fr 2fr;
        place-items: center;
        .file_name_text {
          width: 100%;
          font-size: 10px;
          font-weight: 700;
          padding: 0 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          box-sizing: border-box;
        }
        .removeFileBtn {
          position: relative;
          top: -1px;
          width: 13px;
          height: 13px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
