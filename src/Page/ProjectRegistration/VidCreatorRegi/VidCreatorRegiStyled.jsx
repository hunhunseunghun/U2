import styled from 'styled-components';

export const RegiConationer = styled.div`
  width: 100%;
  .titleArea {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0;
    border-bottom: 2px solid grey;
    margin-top: 1rem;

    div {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 50px;
      border: 1px solid grey;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

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
    border-right: 1px solid #c2c2c28b;
    border-top: 1px solid #00000023;
    background-color: #80808054;
    padding-left: 10px;
    min-height: 50px;
  }
  .inputInfo {
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid #00000023;
    padding: 0 10px;
  }
  .radioWrap {
    display: flex;

    div {
      margin-left: 5px;
      margin-right: 10px;
    }
  }

  .onlineMeet {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 20px;
    padding: 20px;
    border: 1px solid grey;

    img {
      margin-right: 20px;
    }

    &:hover {
      border: 1px solid blue;
      cursor: pointer;
      transform: scale(1.01);
    }
  }

  .offlineMeet {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid grey;

    img {
      margin-right: 20px;
    }

    &:hover {
      border: 1px solid blue;
      cursor: pointer;
      transform: scale(1.01);
    }
  }

  .isActive {
    border: 1px solid blue;
    transform: scale(1.01);
  }
  //when click select meet tag isActive on

  .onlineMeetText > div:first-child {
    font-size: 1.5rem;
  }
  .offlineMeetText > div:first-child {
    font-size: 1.5rem;
  }
`;
