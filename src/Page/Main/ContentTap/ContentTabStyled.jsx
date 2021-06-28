import styled from "styled-components";

export const TabContainer = styled.div`
  margin-top: 76px;
  width: 1321px;
  height: 54px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  border: 1px solid #c5c5c5;
  border-right: none;
  background-color: #ececec;

  div {
    display: grid;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    border-right: 1px solid #c5c5c5;
  }


`;
