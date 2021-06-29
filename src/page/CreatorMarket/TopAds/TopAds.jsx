import React, { useState } from 'react';
import { AdsContainer } from './TopAdsStyled.jsx';
import adsPr from '../../../Img/adsPr.png';
// const adsPr = require('../../../Img/adsPr.png').default;
const TopAds = () => {
	return (
		<AdsContainer>
			<div className="title">광고/마케팅</div>
			<p>다양한 분야의 인플루언서를 통해 고객님의 상품을 광고해 보세요</p>
			<div className="adsImgWrap">
				<img src={adsPr} alt={adsPr} className="adsImg" />
			</div>
			<div className="adsBtnArea">
				<button className="adsBtn">의뢰하기</button>
			</div>
		</AdsContainer>
	);
};

export default TopAds;
