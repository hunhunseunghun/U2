import styled from "styled-components";

export const TabContainer = styled.div`
  width: 1321px;
  height: 54px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  place-items: center;

  div {
    display: grid;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`;
