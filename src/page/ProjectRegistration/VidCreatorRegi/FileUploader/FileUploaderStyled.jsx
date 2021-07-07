import styled from 'styled-components';

export const Container = styled.div`
  .uploadArea {
    font-size: 12px;
    display: flex;

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

  .upLoader {
    width: 75px;
    height: 24px;
    margin-left: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  .filePreview {
    div {
      font-size: 12px;
      font-weight: 500;
    }
    .filepreview_ele {
      position: relative;
      width: 80px;
      padding: 3px 15px 5px 10px;
      background: linear-gradient(#fff, #f2f2f2);
      box-shadow: 0 8px 8px #fff inset, 0 -8px 8px #f2f2f2 inset;
      border: 1px solid #eee;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: default;

      .removeFileBtn {
        position: absolute;
        width: 20px;
        top: 2px;
        right: 1px;
        color: #4d4d4d;

        &:hover {
          color: #272727;
        }
      }
    }
  }

  .removeFileBtn {
    position: relative;
    top: 7px;
    width: 20px;
    height: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;
