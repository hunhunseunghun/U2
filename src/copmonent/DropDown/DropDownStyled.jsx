import styled from "styled-components";

export const DdContainer = styled.div`
  position: relative;

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    left: -50%;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    font-size: 13px;
    font-weight: normal;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .ddProfile ul {
    all: unset;
    width: 100px;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    .mypage {
      font-weight: bold;
    }
  }

  .menu li {
    all: unset;
  }

  .menu li a {
    text-decoration: none;
    color: #333333;
    padding: 10px;
    display: block;

    &:hover {
      background-color: #cccccc;
    }
  }
`;
