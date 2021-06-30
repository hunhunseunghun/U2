import React from 'react';
import { TopViewContainer } from './TopViewStyled.jsx';
import Slider from 'react-slick';
import Slider1 from '../../../Img/slider1.jpeg';
import Slider2 from '../../../Img/slider2.jpeg';
import Slider3 from '../../../Img/slider3.jpeg';
import dummyImg from '../../../Img/topviewEX.png';

const dummy = [dummyImg, dummyImg, dummyImg];
const TopView = () => {
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
          {dummy.map((ele, idx) => (
            <div
              className={'slide'}
              onClick={() => {
                //   history.push({
                //     pathname: "/champions/detail",
                //     state: { id: ele.id },
                //   });
              }}
              key={idx}
            >
              <img src={ele} alt={ele} key={idx} />
            </div>
          ))}
        </Slider>
      </div>
    </TopViewContainer>
  );
};

export default TopView;
