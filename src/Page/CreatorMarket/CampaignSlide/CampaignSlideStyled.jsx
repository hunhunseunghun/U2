import styled from "styled-components";

export const CampSliContainer = styled.div`
   width: 100%;
   height: 393px;
  
  .campSlideWrap {
    position: relative;
    
  }

  .campSlide {
  width: 100%;
   height: 393px;
  }
  .campSlide img {
    width: 100%;
  }

  /* iframe {
    width: 600px;
    height: 350px;
  } */

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
  .slick-thumb {
   
   
    
    width:100%;
    bottom: -70px;
    padding:none;
  }
  .slick-thumb li {
    width: 77px;
    height: 50px;
  }
  .campThum{
    display:flex;
  }
  .slick-active .campThumImg {
    border: 1px solid red;
  }
  .campThumImg {
    width: 83px;
    height: 50px;
  }
`;
