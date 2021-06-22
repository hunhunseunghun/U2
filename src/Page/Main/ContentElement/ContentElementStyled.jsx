import styled from "styled-components";

export const EleContainer = styled.div`
  width: 300px;
  margin: 10px;

  .eleImg {
    width: 100%;
  }

  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
  .eleDescArea {
    padding: 5px;

    .eleDesc {
      padding: 5px;
      font-size: 0.8rem;
    }
  }

  .progressArea {
    display: flex;

    .progressBar {
      width: 80%;
      height: 1rem;
    }
  }

  .cmntValArea {
    display: flex;

    .cmntIcon {
      width: 20px;
    }
  }

  .shareValArea {
    display: flex;

    .shareIcon {
      width: 20px;
    }
  }
`;
