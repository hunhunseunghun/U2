import styled from "styled-components";

export const TopViewContainer = styled.div`
  @import "~slick-carousel/slick/slick.css";
  @import "~slick-carousel/slick/slick-theme.css";

  .slideWrap {
    position: relative;
    width: 1058px;
    height: 515px;
  }

  .slide {
    height: 515px;
    transform: scale(1);
    transition: transform 0.3s;
  }
  .slick-dots {
    position: absolute;
    bottom: 20px;
  }
  .slick-dots li button {
    color: white;
  }
  .slide img {
    width: 100%;
    height: 100%;
  }

  .slide img:hover {
    cursor: pointer;
  }

  .arrow {
    display: none;
  }
`;
