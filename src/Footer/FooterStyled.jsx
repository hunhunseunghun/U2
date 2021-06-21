import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 30px 60px;
  height: 250px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  position: relative;

  @media only screen and (max-width: 900px) {
    padding: 20px;
    height: 300px;
  }

  .ft_menu {
    display: flex;
  }
  .ftm_item {
    margin-right: 35px;
    font-size: 15px;
    font-weight: 700;

    @media only screen and (max-width: 900px) {
      font-size: 13px;
      margin-right: 15px;
    }
  }

  .ft_company {
    margin-top: 30px;
    font-size: 14px;
    line-height: 30px;
    color: #898989;
  }

  .ft_copyright {
    position: absolute;
    right: 60px;
    bottom: 35px;
    font-size: 16px;
    font-weight: 500;
  }
`;
