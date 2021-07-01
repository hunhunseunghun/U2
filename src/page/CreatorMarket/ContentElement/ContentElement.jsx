import React, { useState, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { EleContainer } from './ContentElementStyled.jsx';
import { LinearProgress } from '@material-ui/core';
import ceImg from '../../../Img/ceImg.png';
import { calcRemainDays } from '../../../library/timeSetting.js';

const ContentElement = ({ challenge }) => {
	return (
		<EleContainer>
			<div className="challenge_img_area">
				<img src={ceImg} alt={ceImg} className="challenge_img" />
				{/* {tItem.bannerImage === null && (
          <div className={'no_img'}>
            <img src={'/img/no_image.png'} />
            <span className={'not_contents'}>Image not found</span>
          </div>
        )} */}
			</div>
			<div className="challenge_contents">
				<h1 className="challenge_title">{challenge.title}</h1>
				<div className="challenge_sub">{challenge.subtitle}</div>
			</div>
			<div className="challenge_bottom">
				<div className="challenge_progress_area">
					<div className="challenge_progress_text">
						{/* <button className="paticipantBtn">+</button> */}
						<div>참가자</div> <div>{`${challenge.challengerCount}`}</div>
					</div>
					<LinearProgress
						className="challenge_progressBar"
						variant="determinate"
						color="secondary"
						value={challenge.challengerCount}
					/>
				</div>
				<section className="challenge_info_top">
					<div className="meetArea">
						{/* <input type="checkbox" name="chk_info" value="HTML" /> */}
						{challenge.meetCode === 0 ? <FiX /> : <FiCheck />}
						<div className="meetText">OFF 미팅</div>
					</div>
					<div className="budgetArea">
						<div className="budget">
							{challenge.reward !== null ? challenge.reward : '--'}
						</div>
						<div className="bugetText">예산금액</div>
					</div>
					<div className="remainDateArea">
						<div className="remainDate">
							{calcRemainDays(challenge.missions[0].dateFin)}일
						</div>
						<div className="remainText">남은 일자</div>
					</div>
				</section>

				<section className="challenge_info_bot">
					<div className="challenge_cmtval_area">
						<img
							src={require('../../../Img/comment.svg').default}
							className="cmntIcon"
						/>
						<div className="cmntVal">{challenge.commentCount}</div>
					</div>

					<div className="challenge_shareval_area">
						<img
							src={require('../../../Img/share.svg').default}
							className="shareIcon"
						/>
						<div className="shareVal">{challenge.shareCount}</div>
					</div>
				</section>
			</div>
		</EleContainer>
	);
};

export default ContentElement;
