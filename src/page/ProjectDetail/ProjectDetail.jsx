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
// import SubmitModal from './Modal/SubmitModal';
import SubmitModal from '../../component/Modals/Submit/SubmitModal';
import ApplyModal from '../../component/Modals/Resume/ApplyModal';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { TextFile } from '../../library/getJson';
function ProjectDetail(props) {
	const history = useHistory();
	const userInfo = useSelector((state) => state.userInfo);
	const challengeIdx = props.match.params.challengeIdx;
	const [challenge, setChallenge] = useState({});
	const [isDataReady, setIsDataReady] = useState(false);
	const [isShareActive, setIsShareActive] = useState(false);

	//자료제출 모달
	const [isSubmitOpen, setSubmitOpen] = useState(false);
	const [isApplyOpen, setApplyOpen] = useState(false);
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
		if (userInfo.email) {
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
		} else {
			if (
				window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')
			) {
				history.push('/login');
			}
		}
	};

	const handleSubmit = () => {
		if (userInfo.email) {
			setSubmitOpen(true);
		} else {
			if (
				window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')
			) {
				history.push('/login');
			}
		}
	};
	const handleApply = () => {
		if (userInfo.email) {
			setApplyOpen(true);
		} else {
			if (
				window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')
			) {
				history.push('/login');
			}
		}
	};
	const handleModalClose = (modalType) => {
		switch (modalType) {
			case 'submit': {
				setSubmitOpen(false);
				break;
			}
			case 'resume': {
				setApplyOpen(false);
			}
			default: {
				console.log('no such case');
				break;
			}
		}
	};
	const handleCopyURL = () => {
		var dummy = document.createElement('input');
		var text = window.location.href;

		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
		alert('URL이 복사되었습니다.');
	};

	const handleComment = (reply) => {
		if (userInfo.email) {
			var body = {};
			// TextFile(body);

			if (reply) {
				if (!comments[reply.index].inputReply.length > 0)
					return alert('내용을 입력해주세요');
				body = {
					challengeIdx: Number(challengeIdx),
					seq: reply.seq,

					comment: comments[reply.index].inputReply,
				};
			} else {
				if (!inputComment.length > 0) return alert('내용을 입력해주세요');
				body = {
					challengeIdx: Number(challengeIdx),

					comment: inputComment,
				};
			}
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
					axios
						.get(
							process.env.REACT_APP_U2_DB_HOST +
								`/Campaign/challengecomments/${challengeIdx}`,
						)
						.then((response) => {
							console.log('comments: ', response.data);
							setInputComment('');
							setComments(response.data);
						});
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
				var comments = response.data;
				let newForm = comments.map((el) => {
					return { ...el, isReply: false };
				});
				setComments(newForm);
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
			<ApplyModal
				open={isApplyOpen}
				challenge={challenge}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<section className="prj_title_area">
				<div className="prj_title">{challenge.title}</div>
				<div className="prj_term">
					{`기간 : `}
					{(() => {
						if (challenge.challengeTargetCode === 4) {
							return `${moment(challenge.hire.dateBegin).format(
								'YYYY-MM-DD',
							)} ~ ${moment(challenge.hire.dateFin).format('YYYY-MM-DD')}`;
						} else {
							return `${moment(challenge.missions[0].dateBegin).format(
								'YYYY-MM-DD',
							)} ~ ${moment(challenge.missions[0].dateFin).format(
								'YYYY-MM-DD',
							)}`;
						}
					})()}
					{/* {moment(challenge.missions[0].dateBegin).format('YYYY-MM-DD')} ~{' '}
					{moment(challenge.missions[0].dateFin).format('YYYY-MM-DD')} */}
				</div>
			</section>
			<section className="prj-info">
				<ProjectInfo challenge={challenge}></ProjectInfo>
			</section>
			{/* <section className="prj_topview_area">
				<img src={topviewEx} alt="image" />
			</section> */}
			<section className="prj-detail">
				<div className="prj_content_wrap">
					{ReactHtmlParser(challenge.challengeDesc)}
				</div>
			</section>
			<section className="prj_control">
				<section className="prj_control_left">
					<div className="more_prj">
						{challenge.ownerName}의 프로젝트 더 보기
					</div>
				</section>
				<section className="prj_control_middle">
					<div className="prj_contorl_middle_btnwrap">
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
					</div>
				</section>

				<section className="prj_control_right">
					<div className="prjdetail_snsshare_area">
						<FaShareSquare
							id="prjdetail_sns_icon"
							onClick={() => {
								setIsShareActive(true);
							}}
						/>
						<span
							id="prjdetail_sns_text"
							onClick={() => {
								setIsShareActive(true);
								console.log(isShareActive);
							}}
						>
							공유
						</span>

						<div
							id="prjdetail_sns_share"
							className={
								isShareActive
									? 'pop_sub sns_share_pop active'
									: 'pop_sub sns_share_pop'
							}
						>
							<header>
								{' '}
								<div>프로젝트 공유</div>
								<img
									src="/img/closeBtn.svg"
									alt="X"
									onClick={() => {
										setIsShareActive(false);
									}}
								/>
							</header>

							<ul>
								<li>
									<div className="sns_img">
										{/* <img src="/img/ic_facebook.svg" /> */}
										<FacebookShareButton
											title={challenge.title}
											url={'https://u2-web-dev.azurewebsites.net'}
										>
											<img src="/img/ic_facebook.svg" />
										</FacebookShareButton>
									</div>
									<div className="sns_title">페이스북</div>
								</li>
								<li className="kakao_share">
									<div className="sns_img">
										<KakaoShareButton
											challengeTitle={challenge.title}
											imageUrl={'test'}
											// tags={['#test1', '#test2', '#test3']}
											// social={{
											// 	likeCount: 10,
											// 	commentCount: 23,
											// 	sharedCount: 333,
											// }}
											// buttons={[
											// 	{
											// 		title: 'button1',
											// 		link: {
											// 			mobileWebUrl: window.location.href,
											// 			webUrl: window.location.href,
											// 		},
											// 	},
											// 	{
											// 		title: 'button2',
											// 		link: {
											// 			mobileWebUrl: window.location.href,
											// 			webUrl: window.location.href,
											// 		},
											// 	},
											// ]}
										/>
									</div>
									<div className="sns_title">카카오톡</div>
								</li>
								<li>
									<div className="sns_img">
										<TwitterShareButton
											title={challenge.title}
											url={'https://u2-web-dev.azurewebsites.net'}
										>
											<img src="/img/twittericon.svg" />
										</TwitterShareButton>
									</div>
									<div className="sns_title">트위터</div>
								</li>
								<li
									onClick={() => {
										handleCopyURL();
									}}
								>
									<div class="sns_img">
										<img src="/img/ic_url_copy.svg" />
									</div>
									<div class="sns_title">URL복사</div>
								</li>
							</ul>
						</div>
					</div>

					{/* <SnsModal /> */}
				</section>
			</section>

			<section className="commentInput">
				<textarea
					type="text"
					placeholder="댓글을 남겨보세요"
					onChange={(e) => {
						setInputComment(e.target.value);
					}}
				></textarea>
				<button
					className={
						inputComment.length > 0
							? 'commet_active_btn'
							: 'comment_inactive_btn'
					}
					onClick={() => {
						handleComment();
					}}
				>
					등 록
				</button>
			</section>
			<section className="comments">
				{comments &&
					comments.map((comment, idx) => {
						var copyArr = comments.slice();
						copyArr.splice(idx, 1); //나를 제외한 배열에서 답글 탐색
						var replies = copyArr.filter(
							(reply) => reply.seq === comment.seq && reply.seqx !== 1,
						);

						if (comment.seqx !== 1) return; //답글인 경우 아래에서 이미 다 렌더링함.
						return (
							<fieldset>
								<div className="comment_memberidx">
									<div>{comment.name}</div>
									<button
										onClick={() => {
											let copyArr = comments.slice();
											copyArr[idx].isReply = !copyArr[idx].isReply;
											setComments(copyArr);
										}}
									>
										답글
									</button>
								</div>
								<div className="comment_content">{comment.comment}</div>

								{replies.length > 0 &&
									replies.map((el) => {
										return (
											<div className="comment_reply">
												<img src="/img/replycomment.png" alt="답글 : " />
												<div className="comment_reply_area">
													<span className="comment_reply_name">
														{el.name ? el.name : '닉네임'}
													</span>
													<span className="comment_reply_content">
														{el.comment}
													</span>
												</div>
											</div>
										);
									})}
								<div
									className="comment_replyregi"
									style={{
										display: comments[idx].isReply ? 'grid' : 'none',
									}}
								>
									<input
										onChange={(e) => {
											comments[idx].inputReply = e.target.value;
										}}
									></input>
									<button
										onClick={() => {
											handleComment({ seq: comment.seq, index: idx });
										}}
									>
										등록
									</button>
								</div>
							</fieldset>
						);
					})}
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
