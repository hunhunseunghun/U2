import React, { useEffect, useState } from 'react';
import { ProjectDetailContainer } from './ProjectDetailStyled';
import ProjectInfo from './PrjInfo/ProjectInfo';
import {
	FaShareSquare,
	FaFacebookSquare,
	FaTwitter,
	FaLine,
} from 'react-icons/fa';
import KakaoShareButton from '../../library/KakaoShareButton';
import axios from 'axios';
import {
	FacebookShareButton,
	TwitterShareButton,
	LineShareButton,
} from 'react-share';
import topviewEx from '../../Img/topviewEX.png';
import ReactHtmlParser from 'react-html-parser';
import SubmitModal from './Modal/SubmitModal';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
function ProjectDetail(props) {
	const history = useHistory();
	const userInfo = useSelector((state) => state.userInfo);
	const challengeIdx = props.match.params.challengeIdx;
	const [challenge, setChallenge] = useState({});
	const [isDataReady, setIsDataReady] = useState(false);

	//자료제출 모달
	const [isSubmitOpen, setSubmitOpen] = useState(false);
	// console.log('challengeIdx: ', challengeIdx);
	// console.log('challenge: ', challenge);
	// console.log(props);
	const [comments, setComments] = useState([]);
	const [inputComment, setInputComment] = useState('');
	const handleChallenge = () => {
		//checkStatusCode
		// 1. 승인
		// 2. 반려
		// 3. 피드백
		//4. 챌린지
		// 8. 진행중
		//statusCode
		//1. 제출완료
		//2. 지원완료
		//3. 미제출
		//4. 미지원
		var config = {
			method: 'post',
			// https://u2-rest-dev.azurewebsites.net/api/Campaign/challengesubmit
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengewished/${challengeIdx}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};

		axios(config)
			.then((response) => {
				console.log('response: ');
				console.log(response.data);
				alert('챌린지 목록에 추가되었습니다.');
			})
			.catch((err) => {
				console.log('err: ', err);
				alert('이미 챌린지한 프로젝트입니다.');
			});
	};

	const handleSubmit = () => {
		setSubmitOpen(true);
	};
	const handleApply = () => {};
	const handleModalClose = (modalType) => {
		switch (modalType) {
			case 'submit': {
				setSubmitOpen(false);
				break;
			}
			default: {
				console.log('no such case');
				break;
			}
		}
	};

	const handleComment = () => {
		if (userInfo.email) {
			var body = {
				commentIdx: 0,
				challengeIdx: challengeIdx,
				seq: 1,
				seqx: 1,
				memberIdx: userInfo.memberIdx,
				comment: inputComment,
				statusCode: 1,
				// "registMemberIdx": 0,
				// "registDate": "2021-07-14T11:00:22.230Z",
				// "modifyMemberIdx": 0,
				// "modifyDate": "2021-07-14T11:00:22.230Z"
			};
			var config = {
				method: 'post',
				url: process.env.REACT_APP_U2_DB_HOST + `/Campaign/challengecomment`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
				data: body,
			};
			axios(config)
				.then((response) => {
					console.log('new comment: ', response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			if (
				window.confirm(`로그인이 필요합니다. 
			로그인 하시겠습니까?`)
			) {
				history.push('/login');
			}
		}
	};

	useEffect(() => {
		axios
			.get(
				process.env.REACT_APP_U2_DB_HOST +
					`/Campaign/challenge/${challengeIdx}`, //sample data, should be challengeIdx.
			)
			.then((response) => {
				console.log('response.data: ', response.data);
				setChallenge(response.data);
				setIsDataReady(true);
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.get(
				process.env.REACT_APP_U2_DB_HOST +
					`/Campaign/challengecomments/${challengeIdx}`,
			)
			.then((response) => {
				console.log('comments: ', response.data);
				setComments(response.data);
			});
	}, []);
	if (!isDataReady) {
		return <div>no data</div>;
	}
	return (
		<ProjectDetailContainer>
			<SubmitModal
				open={isSubmitOpen}
				challenge={challenge}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<section className="prj_title_area">
				<div className="prj_title">{challenge.title}</div>
				<div className="prj_term">
					{challenge.missions[0].dateBegin} ~ {challenge.missions[0].dateFin}
				</div>
			</section>
			<section className="prj-info">
				<ProjectInfo challenge={challenge}></ProjectInfo>
			</section>
			<section className="prj_topview_area">
				<img src={topviewEx} alt="image" />
			</section>
			<section className="prj-detail">
				{ReactHtmlParser(challenge.challengeDesc)}
			</section>
			<section className="prj_control">
				<section className="prj_control_left">
					<div className="more_prj">
						{challenge.ownerName}의 프로젝트 더 보기
					</div>
				</section>
				<section className="prj_control_middle">
					<button
						onClick={() => {
							history.push('/creatormarket');
						}}
					>
						돌아가기
					</button>
					<button
						onClick={() => {
							if (userInfo.memberIdx) {
								handleChallenge();
							} else {
								if (window.confirm('로그인이 필요합니다.')) {
									history.push('/login');
								}
							}
						}}
					>
						챌린지
					</button>
					{challenge.challengeTargetCode === 4 ? (
						<button
							onClick={() => {
								handleApply();
							}}
						>
							지원하기
						</button>
					) : (
						<button
							onClick={() => {
								handleSubmit();
							}}
						>
							자료제출
						</button>
					)}
				</section>

				<section className="prj_control_right">
					<FaShareSquare />
					<span>공 유</span>
				</section>
			</section>

			<section>
				{' '}
				<KakaoShareButton
					challengeTitle={challenge.title}
					imageUrl={'test'}
					tags={['#test1', '#test2', '#test3']}
					social={{
						likeCount: 10,
						commentCount: 23,
						sharedCount: 333,
					}}
					buttons={[
						{
							title: 'button1',
							link: {
								mobileWebUrl: window.location.href,
								webUrl: window.location.href,
							},
						},
						{
							title: 'button2',
							link: {
								mobileWebUrl: window.location.href,
								webUrl: window.location.href,
							},
						},
					]}
				/>
				<FacebookShareButton
					title={challenge.title}
					url={'https://u2-web-dev.azurewebsites.net'}
				>
					<FaFacebookSquare />
				</FacebookShareButton>
				<TwitterShareButton
					title={challenge.title}
					url={'https://u2-web-dev.azurewebsites.net'}
				>
					<FaTwitter />
				</TwitterShareButton>
				<LineShareButton
					title={challenge.title}
					url={'https://u2-web-dev.azurewebsites.net'}
				>
					<FaLine />
				</LineShareButton>
			</section>
			<section className="comments">
				{comments.map((el, idx) => {
					return (
						<div>
							<div>{el.memberIdx}</div>
							<div>{el.comment}</div>
							<button>답글 달기</button>
						</div>
					);
				})}
			</section>
			<section className="commentInput">
				<input
					type="text"
					onChange={(e) => {
						setInputComment(e.target.value);
					}}
				></input>
				<button
					onClick={() => {
						handleComment();
					}}
				>
					등록하기
				</button>
			</section>
		</ProjectDetailContainer>
	);
}
export default ProjectDetail;
// applications: []
// challengeDesc: "NCT x 여친 생일축하 공모전"
// challengeIdx: 7
// challengeTargetCode: 1
// challengerCount: 0
// charge: null
// chargeContact: null
// chargeContactShown: 0
// chargeShown: 0
// chargeeMail: null
// chargeeMailShown: 0
// commentAllowed: 1
// commentCount: 1
// companyA: null
// companyB: null
// datePub: "2021-06-24T15:00:00+00:00"
// fileRef: null
// hire: {fields: null, docs: null, challengeIdx: 0, seq: 0, isOnline: 0, …}
// logo: null
// mainImage: null
// meetCode: 0
// memberIdx: 58
// missions: [{…}]
// modifyDate: "2021-07-08T14:55:31.5751142+00:00"
// modifyMemberIdx: 0
// ownerIdx: 0
// ownerName: "SM엔터테인먼트"
// promoting: 0
// registDate: "2021-07-08T14:55:31.5751141+00:00"
// registMemberIdx: 0
// rewards: []
// shareCount: 0
// subtitle: "생일을 맞이한 여자 친구를 위한"
// title: "NCT x 여친 생일축하 공모전"
// url: null
