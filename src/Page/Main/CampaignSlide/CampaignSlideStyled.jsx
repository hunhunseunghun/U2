import styled from "styled-components";

export const CampSliContainer = styled.div`
  width: 600px;
  height: 350px;

  .campSlideWrap {
    position: relative;
    width: 100%;
    height: 350px;
  }

  .campSlide {
    height: 350px;
  }
  .campSlide img {
  }

  iframe {
    width: 600px;
    height: 350px;
  }

  .arrow {
    position: absolute;
    cursor: pointer;
    z-index: 3;
  }

  .arrow svg {
    transition: color 0.5s;
  }
  .arrow svg:hover {
    color: rgba(255, 255, 255, 0.707);
    transition: color 0.5s;
  }

  .next {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.151);
    right: 2%;
    top: 38%;
  }

  .prev {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.151);
    left: 2%;
    top: 38%;
  }
  .dotsImg {
    width: 40px;
    height: 40px;
  }

  .slideImg {
    width: 40px;
    height: 40px;
  }
`;
