import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 40px 45px 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  min-width: 900px;

  .creatormarket_section {
    width: 100%;
    max-width: 1500px;
  }

  .topWrap {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 38.8%;
    display: flex;
  }

  .contentWrap {
  }

  .contentEle {
    max-width: 1100px;
    height: 504px;
    display: flex;
  }

  .campArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 632px;
    margin-top: 200px;
    background-color: #e0e0e0;

    .campListWrap {
      text-align: center;

      .campTitle_top {
        font-size: 1rem;
      }
      .campTitle_bottom {
        font-size: 2.2rem;
      }
    }

    .campList {
      .campEle {
        display: flex;
      }

      .campEle:hover {
        cursor: pointer;
      }
    }

    .campSlideWrap {
      width: 698px;
    }
  }

  .applyBanner {
    position: relative;
    margin-bottom: 5rem;
  }
  .applyBannerImg {
    width: 100%;
    height: 150px;
  }

  .applyBtnWrap {
    position: absolute;
    right: 20px;
    bottom: 30px;
  }

  .applyBtn {
    all: unset;
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: black;
    color: white;
  }
  .applyBtn:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1500px) and (min-width: 1350px) {
    padding: 40px 0px 100px;
    /* .contents_wrap {
      .filter_section {
        align-items: flex-start;
        padding: 15px 60px;
        height: inherit;
        .sub_filter_section {
          flex-wrap: wrap;
          .ft_tags {
            margin-top: 10px;
            margin-left: 0px;
            width: 100%;
            .tag_item {
              padding: 0px;
              margin-right: 15px;
            }
          }
        }
      }
    } */
  }
  @media only screen and (max-width: 1350px) and (min-width: 500px) {
    padding: 40px 0px 100px;
    .header {
      .search_section {
        input {
          width: 240px;
        }
      }
      .main_menu {
        & > ul > li {
          margin-left: 20px;
        }
      }
    }
    .contents_wrap {
      .filter_section {
        .ft_process {
          .ftp_item {
            .ftp_num {
              border: 1px solid #ddd;
              border-radius: 50%;
              width: 24px;
              height: 24px;
              display: inline-block;
              text-align: center;
              line-height: 24px;
            }
            img {
              opacity: 0.5;
            }
            .ftp_t {
              display: none;
            }
          }
        }
      }
      .intro {
        &.intro3 {
          .deco_img {
            img {
              width: 350px;
            }
          }
        }
        &.intro5 {
          padding: 160px 30px;
          .price_items {
            .pr_item {
              .pr_tags {
                flex-direction: column;
                .pr_tag {
                  margin-bottom: 10px;
                  text-align: center;
                }
              }
              .pr_contents {
                .pr_desc {
                  margin-top: 20px;
                }
              }
            }
          }
        }
      }
      .tutorial_items {
        .tt_item {
          width: calc(33.3% - 30px);
          .tt_contents {
            padding: 12px 15px;
            .tt_bottom {
              padding: 0px 15px;
              bottom: 10px;
            }
          }
        }
      }
      .price_section {
        .price_items {
          .price_item {
            padding: 20px 30px;
          }
        }
      }
      .price_detail_section {
        .pr_container {
          min-width: 1100px;
        }
      }
      .default_bt {
        &.price_sub_bt {
          padding: 0px 15px;
        }
      }
    }
  }
`;
