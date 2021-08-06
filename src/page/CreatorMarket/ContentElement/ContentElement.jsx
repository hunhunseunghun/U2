import React, { useState, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { EleContainer } from './ContentElementStyled.jsx';
import blankImg from '../../../Img/no_image.png';
import { calcRemainDays } from '../../../library/timeSetting.js';
import { getSingleFileFromBlob } from '../../../library/azureBlob.js';
import { useSelector } from 'react-redux';
import { isFunction } from 'lodash';
const ContentElement = (props) => {
	const userInfo = useSelector((state) => state.userInfo);
	const [myRegistration, setMyRegistration] = useState(false);
	const [mySubmit, setMySubmit] = useState(false);
	const challenge = props.challenge;
	const [src, setSrc] = useState('');
	// console.log('challenge inside contentelement: ', challenge);
	// console.log('props: ', props);
	useEffect(() => {
		if (challenge.logo) {
			setSrc(getSingleFileFromBlob(challenge.logo));
		} else {
			if (challenge.ownerLogo) {
				setSrc(getSingleFileFromBlob(challenge.ownerLogo));
			} else {
				// setSrc('./img/logo.svg');
			}
		}
	});
	return (
		<EleContainer
			onClick={() => {
				props.history.push({
					pathname: `/prjdetail/${challenge.challengeIdx}`,
				});
			}}
		>
			<div
				className="challenge_img_area"
				style={{ backgroundImage: `url(src)` }}
			>
				{!challenge.logo && !challenge.ownerLogo ? (
					<img
						src="./img/logo.svg"
						alt="./img/logo.svg"
						className="challenge_default_img"
					/>
				) : (
					<img src={src} alt={src} className="challenge_img" />
				)}

				{/* {tItem.bannerImage === null && (
          <div className={'no_img'}>
            <img src={'/img/no_image.png'} />
            <span className={'not_contents'}>Image not found</span>
          </div>
        )} */}
				<div className="challenge_badge_area">
					<section className="challenge_badge_left">
						{props.badgeData.applies &&
							props.badgeData.applies.has(challenge.challengeIdx) && ( // should be challenge.challengeIdx
								<div className="challenge_badge_mysubmit">내가 지원</div>
							)}

						{props.badgeData.submits &&
							props.badgeData.submits.has(challenge.challengeIdx) && (
								<div className="challenge_badge_mysubmit">내가 제출</div>
							)}

						{challenge.memberIdx === userInfo.memberIdx && (
							<div className="challenge_badge_mysregi">내가 등록</div>
						)}
					</section>
					<section className="challenge_badge_right">
						{props.badgeData.wishes &&
							props.badgeData.wishes.has(challenge.challengeIdx) && (
								<div className="challenge_badge_challengeuser">
									{' '}
									<BsStarFill />
								</div>
							)}

						{/* <img src="/img/goldstaricon.png" alt="challengeuser" /> */}
					</section>{' '}
				</div>
			</div>

			<div className="challenge_contents">
				<h1 className="challenge_title">{challenge.title}</h1>
				<div className="challenge_sub">{challenge.subtitle}</div>
			</div>

			<div className="challenge_bottom">
				<div className="challenge_progress_area">
					<div className="challenge_progress_text">
						{/* <button className="paticipantBtn">+</button> */}
						<div>챌린지 참여자</div> <div>{`${challenge.challengerCount}`}</div>
					</div>
					{/* 
					<LinearProgress
						className="challenge_progressBar"
						variant="determinate"
						color="secondary"
						value={challenge.challengerCount}
					/> */}
				</div>
				<section className="challenge_info_top">
					<div className="meetArea">
						{/* <input type="checkbox" name="chk_info" value="HTML" /> */}
						<div className="meet_onoff">
							{challenge.meetCode === 0 ? <FiX /> : <FiCheck />}
						</div>
						<div className="meetText">OFF 미팅</div>
					</div>
					<div className="budgetArea">
						<div className="budget">
							{/* {challenge.rewards && challenge.rewards.length > 0
								? challenge.rewards[0].cat
								: '--'} */}
							{(() => {
								if (challenge.rewards && challenge.rewards.length > 0) {
									if (challenge.rewards[0].cat === 0) {
										return `현금 ${
											challenge.rewards[0].pts
										} ${challenge.rewards[0].currency.toUpperCase()}`;
									} else {
										return challenge.rewards[0].rewardDesc || '-';
									}
								} else {
									return '-';
								}
							})()}
						</div>
						<div className="bugetText">보상</div>
					</div>
					<div className="remainDateArea">
						<div className="remainDate">
							{(() => {
								if (challenge.challengeTargetCode === 4) {
									return (
										challenge.hire && calcRemainDays(challenge.hire.dateFin)
									);
								} else {
									return (
										challenge.missions.length > 0 &&
										calcRemainDays(challenge.missions[0].dateFin)
									);
								}
							})()}
							일
						</div>
						<div className="remainText">남은 일자</div>
					</div>
				</section>
				<section className="challenge_info_top_mobile">
					<div className="meetArea">
						{/* <input type="checkbox" name="chk_info" value="HTML" /> */}

						<div className="meetText">OFF 미팅</div>
						<div className="meet_onoff">
							{challenge.meetCode === 0 ? <FiX /> : <FiCheck />}
						</div>
					</div>
					<div className="budgetArea">
						<div className="bugetText">보상</div>
						<div className="budget">
							{(() => {
								if (challenge.rewards && challenge.rewards.length > 0) {
									if (challenge.rewards[0].cat === 0) {
										return `현금 ${
											challenge.rewards[0].pts
										} ${challenge.rewards[0].currency.toUpperCase()}`;
									} else {
										return challenge.rewards[0].rewardDesc || '-';
									}
								} else {
									return '-';
								}
							})()}
						</div>
					</div>
					<div className="remainDateArea">
						<div className="remainText">남은 일자</div>
						<div className="remainDate">
							{challenge.missions.length > 0 &&
								calcRemainDays(challenge.missions[0].dateFin)}
							일
						</div>
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
