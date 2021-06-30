import styled from 'styled-components';

export const Container = styled.div`
  .uploadArea {
    font-size: 14px;
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
  }

  .filePreview {
    div {
      font-size: 11px;
      font-weight: 700;
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