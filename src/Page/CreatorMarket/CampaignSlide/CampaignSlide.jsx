import React, { useState,useEffect } from "react";
import axios from "axios";
import { CampSliContainer } from "./CampaignSlideStyled.jsx";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider1 from "../../../Img/slider1.jpeg";
import Slider2 from "../../../Img/slider2.jpeg";
import Slider3 from "../../../Img/slider3.jpeg";
import campSlidImg from "../../../Img/campSlidImg.png"

const dummy = [campSlidImg,campSlidImg,campSlidImg,campSlidImg,campSlidImg,campSlidImg,campSlidImg,campSlidImg
  
];
const dummyThum = [campSlidImg,campSlidImg, campSlidImg, campSlidImg,campSlidImg, campSlidImg,campSlidImg,campSlidImg];



const CampaignSlide = () => {


 



  const [imageIndex, setImageIndex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    lazyload: true,
    speed: 800,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => {
      return (
        <div className={`campThum${i} campThum`}>
          <img
            src={dummyThum[i]}
            className={`campThumImg${i} campThumImg`}
            key={i}
          />
        </div>
      );
    },
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
  };

  return (
    <CampSliContainer>
      <div className="campSlideWrap">
        <Slider {...settings}>
          {dummy.map((ele, idx) => (
            <div
              className={`campSlide campSlide${idx}`}
              key={ele}
              onClick={() => {
                // history.push({
                //   pathname: "/champions/detail",
                //   state: { id: ele.id },
                // });
              }}
              key={idx}
            >
              {/* <iframe
                src="https://www.youtube.com/embed/n9A1W52uJIA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe> */}
              <img src={ele} key={idx}/>
            </div>
          ))}
        </Slider>
      </div>
    </CampSliContainer>
  );
};

export default CampaignSlide;
