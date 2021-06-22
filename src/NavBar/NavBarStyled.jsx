import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  padding: 10px 60px 0;
  height: 90px;
  display: flex;
  align-items: center;
  transition-duration: 0.2s;
  box-sizing: border-box;
  background-color: white;

  textarea {
    box-sizing: border-box;
  }
  .header_tl {
    display: flex;
    align-items: center;
  }
  a:hover,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .main_menu {
    flex: 1 1;
    display: flex;
    justify-content: flex-end;

    /* li,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    } */

    ul {
      display: flex;
      align-items: center;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
      margin: 0;
      padding: 0;
    }

    li {
      display: inline-block;
      cursor: pointer;
      margin-left: 40px;
      font-weight: 700;
      font-size: 16px;
      position: relative;
      line-height: 1;
      text-align: -webkit-match-parent;

      @media only screen and (max-width: 1350px) and (min-width: 900px) {
        margin-left: 20px;
      }
    }

    li.active span:after {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      right: -6px;
      top: 0;
      border-radius: 2px;
      background-color: #181818;
    }
  }
  .profileImg {
    width: 30px;
  }

  // 영상마켓 드롭 다운 메뉴

  .tab_vidmarket {
    position: relative;
  }
  .tab_vidmarket {
    &:hover .vidmarket_dorpdown {
      position: absolute;
      display: block;
      justify-content: center;
      top: 16px;
      left: -40%;
      width: 200%;
      padding-top: 10px;
      text-align: left;
      box-shadow: 16px 16px 16px 0px rgb(0, 0, 0, 0.2);
      background-color: white;
      font-size: 12px;
      font-weight: normal;
      border-radius: 5px;

      .dropdown_prjapply {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      div {
        padding: 15px 10px;

        &:hover {
          font-weight: bold;
          background-color: #00000026;
        }
      }
    }
  }
  .vidmarket_dorpdown {
    display: none;
  }
`;
