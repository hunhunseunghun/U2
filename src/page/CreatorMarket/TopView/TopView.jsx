import React, { useEffect, useState, useRef } from 'react';
import { TopViewContainer } from './TopViewStyled.jsx';
import Slider from 'react-slick';
import dummyImg from '../../../Img/topviewEX.png';
import noImg from '../../../Img/no_image.png';
import axios from 'axios';
import { getSingleFileFromBlob } from '../../../library/azureBlob.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
const dummy = [dummyImg, dummyImg, dummyImg];
const TopView = () => {
  const paginationRef = useRef();
  const [carousells, setCarousells] = useState([]);
  useEffect(() => {
    //카로셀 이미지
    var challengepreviewConfig = {
      method: 'get',
      url: process.env.REACT_APP_U2_DB_HOST + `/Campaign/challengepreview`,
    };
    axios(challengepreviewConfig)
      .then(response => {
        console.log('preview response: ', response);
        setCarousells(response.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  const NextArrow = () => {
    return <div className="arrow next"></div>;
  };

  const PrevArrow = () => {
    return <div className="arrow prev"></div>;
  };
  const settings = {
    dots: true,
    infinite: true,
    lazyload: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <TopViewContainer>
      <div className="slideWrap">
        <Slider {...settings}>
          {carousells.map((ele, idx) => (
            <div
              className={'slide'}
              onClick={() => {
                window.location.href = `/prjdetail/${ele.challengeIdx}`;
              }}
              key={idx}
            >
              <img
                src={
                  ele.mainImage ? getSingleFileFromBlob(ele.mainImage) : noImg
                }
                alt={ele.mainImage}
                key={idx}
              />
            </div>
          ))}
        </Slider>
      </div>
    </TopViewContainer>
  );
};

export default TopView;
