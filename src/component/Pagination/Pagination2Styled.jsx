import styled from 'styled-components';

export const Pagination2Styled = styled.nav`
  /* position: absolute; */
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  button {
    border: none;
    /* width: 30px; */
    margin: 0 1px;
    background-color: inherit;
    color: #747474;
  }
  button:hover {
    cursor: pointer;
    /* background-color: #454545; */
    /* color: #ffffff; */
  }
  button.selectedPage {
    font-weight: bolder;
    background-color: #454545;
    color: #ffffff;
    border-radius: 100px;
  }
  button.page {
    width: 20px;
    height: 20px;
    /* border: 1px solid #776666; */
    /* font-size: 13px; */
    font-weight: 400;
  }

  .first,
  .previous {
    margin-right: 5px;
  }
  .last,
  .next {
    margin-left: 5px;
  }
`;
