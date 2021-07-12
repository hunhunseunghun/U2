import styled from 'styled-components';

export const ProjectDetailContainer = styled.div`
  /* background-color: grey; */
  padding: 40px 45px 100px;
  font-weight: 500;

  .prj_title_area {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #2d2123;
    color: #010101;
    font-size: 21px;
    padding: 10px 15px;

    .prj_term {
      font-size: 13px;
      color: #7f7f7f;
      font-weight: 400;
    }
  }

  .prj-control > button {
    border: solid 1px;
  }
`;
