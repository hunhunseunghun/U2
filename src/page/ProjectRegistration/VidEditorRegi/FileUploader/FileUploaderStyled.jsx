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
