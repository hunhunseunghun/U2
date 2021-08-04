import styled from 'styled-components';

export const WorkDetailContainer = styled.div`
  padding: 60px 45px 100px;

  display: flex;
  justify-content: center;
  font-weight: 500;
  .workdetail-section {
    display: flex;
    grid-template-columns: 2fr 6.5fr;
    grid-gap: 3px;
  }
  .section1 {
    width: 224px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 1px #eee;

    .workdetail_img_wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px 20px 0 20px;
      img {
        width: 100%;
        min-width: 100px;
        min-height: 100px;
      }
      .project_name_wrap {
        margin: 25px 0;
        width: 100%;
      }
      .project_name_sub {
        font-size: 15px;
        line-height: 14px;
        color: #747474;
      }
      .porject_name {
        font-size: 18px;
        line-height: 24px;
      }
      .wordetail_noimage {
        width: 50%;
      }
    }

    .project_info {
      padding: 20px;
      .project_target_wrap {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        .project_target_sub {
          font-size: 15px;
          line-height: 14px;
          margin-bottom: 5px;
          color: #747474;
        }
        .project_target {
          font-size: 18px;
          line-height: 21px;
          color: #181818;
        }
      }
      .project_info_lastchild {
        border: 0;
      }
    }
  }

  .section2 {
    .tabs {
      display: flex;
    }
    .tab-contents {
      position: relative;
      width: 120px;
      padding: 10px 10px;
      font-size: 15px;
      font-weight: 500;
      border: 1px solid #eee;
      border-bottom: 0;
      text-align: center;
      align-items: center;
      color: #9c9c9c;
      background-color: #f8f8f8;
      border-bottom: 1px solid #eee;
      z-index: 2;
      &:hover {
        cursor: pointer;
      }
    }
    .tab-contents.selected {
      color: #181818;
      background-color: #fff;
      border-bottom: 0;
    }
    .project-name {
      border: solid;
      border-color: blue;
    }
    .project-info.spec {
      text-align: start;
      font-weight: bold;
    }

    .contents-table {
      position: relative;
      top: -1px;
      border: 1px solid #eee;
      box-shadow: 1px 2px 1px #eee;
    }
    hr {
      width: inherit;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 80px 5px 50px;
  }
`;
