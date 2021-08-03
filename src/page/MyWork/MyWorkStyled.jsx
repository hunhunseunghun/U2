import styled from 'styled-components';
const unselectedTab = require('../../Img/MWunselectedTab.png').default;
const selectedTab = require('../../Img/MWselectedTab.png').default;
export const MyWorkContainer = styled.div`
  padding: 20px 45px 100px;
  display: grid;
  place-items: center;
  font-weight: 500;

  z-index: 1;

  .mywork_section {
    width: 100%;
    max-width: 1200px;
  }

  .mywork_title_area {
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
      font-weight: 600;
      font-size: 32px;
    }

    .mywork_title_style {
      margin-top: 3px;
      width: 20px;
      border: 1px solid #181818;
    }
  }
  .mywork_wrapper {
    display: flex;
  }

  span.tab {
    position: relative;
    width: 120px;
    padding: 10px 10px;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #eee;
    border-bottom: 0;
    text-align: center;
    align-items: center;
    z-index: 10;
    &:hover {
      cursor: pointer;
    }
  }

  .tab_newalert {
    position: absolute;
    top: 3px;
    right: 3px;
  }
  span.selected {
    color: #181818;
    background-color: #fff;
    border-bottom: 0;
  }
  span.unselected {
    color: #afafaf;
    background-color: #f3f3f3;
    border-bottom: 1px solid #eee;
  }
  span.newAlert {
    padding: 0 3px;
    color: #fafafa;
    background-color: #ff0000;
  }
  .regi-project {
    color: black;
    margin-left: calc(100% - 180px);
    margin-bottom: 50px;
    border: 1px solid black;
    text-decoration: unset;
  }
  .myproject_contents {
    position: relative;
    top: -1px;
    border: 1px solid #eee;
    background-color: #fff;
  }

  @media only screen and (max-width: 900px) {
    padding: 20px 0px 100px;
    display: grid;
    place-items: center;
    font-weight: 500;

    z-index: 1;

    .mywork_section {
      width: 100%;
      max-width: 1200px;
    }

    .mywork_title_area {
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
        font-weight: 600;
        font-size: 24px;
      }

      .mywork_title_style {
        margin-top: 3px;
        width: 20px;
        border: 1px solid #181818;
      }
    }
    .mywork_wrapper {
      display: flex;
    }

    span.tab {
      position: relative;
      width: 100px;
      padding: 5px 5px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid #eee;
      border-bottom: 0;
      text-align: center;
      align-items: center;
      z-index: 10;
      &:hover {
        cursor: pointer;
      }
    }

    .tab_newalert {
      position: absolute;
      top: 3px;
      right: 3px;
    }
    span.selected {
      color: #181818;
      background-color: #fff;
      border-bottom: 0;
    }
    span.unselected {
      color: #afafaf;
      background-color: #f3f3f3;
      border-bottom: 1px solid #eee;
    }
    span.newAlert {
      padding: 0 3px;
      color: #fafafa;
      background-color: #ff0000;
    }
    .regi-project {
      color: black;
      margin-left: calc(100% - 180px);
      margin-bottom: 50px;
      border: 1px solid black;
      text-decoration: unset;
    }
    .myproject_contents {
      position: relative;
      top: -1px;
      border: 1px solid #eee;
      background-color: #fff;
    }
  }
`;
