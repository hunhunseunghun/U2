import React, { useEffect, useState } from 'react';
import { ProjectDetailContainer } from './ProjectDetailStyled';
import ProjectInfo from './PrjInfo/ProjectInfo';
import { FaShareSquare } from 'react-icons/fa';
import KakaoShareButton from '../../library/KakaoShareButton';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import topviewEx from '../../Img/topviewEX.png';
import ReactHtmlParser from 'react-html-parser';
// import SubmitModal from './Modal/SubmitModal';
import SubmitModal from '../../component/Modals/Submit/SubmitModal';
import ApplyModal from '../../component/Modals/Resume/ApplyModal';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { createBrowserHistory } from 'history';
import { TextFile } from '../../library/getJson';
function ProjectDetail(props) {
	const history = useHistory();
	const history2 = createBrowserHistory({ forceRefresh: true });
	const userInfo = useSelector((state) => state.userInfo);
	const challengeIdx = props.match.params.challengeIdx;
	const [challenge, setChallenge] = useState({});
	const [isDataReady, setIsDataReady] = useState(false);
	const [isShareActive, setIsShareActive] = useState(false);

	//자료제출 모달
	const [isSubmitOpen, setSubmitOpen] = useState(false);
	const [isApplyOpen, setApplyOpen] = useState(false);
	const [comments, setComments] = useState([]);
	const [inputComment, setInputComment] = useState('');
	const handleChallenge = () => {
		if (userInfo.email) {
			var config = {
				method: 'post',
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
			case 'apply': {
				setApplyOpen(false);
				break;
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
	const handleMore = () => {
		console.log('challenge: ', challenge);
		if (challenge.challengeJustBefore !== 0) {
			history2.push(`/prjdetail/${challenge.challengeJustBefore}`);
		} else {
			alert('다음 페이지가 없습니다.');
		}
	};

	const handleComment = (reply) => {
		if (userInfo.email) {
			var body = {};
			// TextFile(body);
			// let copyComments = comments.slice();
			if (reply) {
				if (
					!(
						comments[reply.index].inputReply &&
						comments[reply.index].inputReply.length > 0
					)
				)
					return alert('내용을 입력해주세요');
				body = {
					challengeIdx: Number(challengeIdx),
					seq: reply.seq,

					comment: comments[reply.index].inputReply,
				};
				// comments[reply.index].inputReply = '';
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
							let data = response.data;
							setComments(data);
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
	const handleShare = () => {
		console.log('share clicked');
		var config = {
			method: 'put',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengeshare/${challengeIdx}`,
		};
		axios(config)
			.then((response) => {
				console.log('share response: ', response);
			})
			.catch((err) => {
				console.log(err.response);
			});
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
		return <div></div>;
	}
	return (
		<ProjectDetailContainer>
			<SubmitModal
				open={isSubmitOpen}
				challenge={challenge}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
				challengeTargetCode={challenge.challengeTargetCode}
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
					{/* {`기간 : `} */}
					{(() => {
						if (challenge.challengeTargetCode === 4) {
							return `기간: ${moment(challenge.hire.dateBegin).format(
								'YYYY-MM-DD',
							)} ~ ${moment(challenge.hire.dateFin).format('YYYY-MM-DD')}`;
						} else {
							if (challenge.missions && challenge.missions.length > 0)
								return `기간: ${moment(challenge.missions[0].dateBegin).format(
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

			<section className="prjdetail_redirect_area">
				<div
					className="prjdeatila_more_prj"
					onClick={() => {
						handleMore();
					}}
				>
					{challenge.ownerName}의 프로젝트 더 보기
				</div>

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
								<div
									className="sns_img"
									onClick={() => {
										handleShare();
									}}
								>
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
							<li
							// className="kakao_share"
							>
								<div className="sns_img kakao_share">
									<KakaoShareButton
										challengeTitle={challenge.title}
										imageUrl={'test'}
										onImgClick={handleShare}
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
								<div
									className="sns_img"
									onClick={() => {
										handleShare();
									}}
								>
									<TwitterShareButton
										title={challenge.title}
										url={'https://u2-web-dev.azurewebsites.net'}
									>
										<img src="/img/twittericon.svg" />
									</TwitterShareButton>
								</div>
								<div className="sns_title">트위터</div>
							</li>
							<li>
								<div
									class="sns_img"
									onClick={() => {
										handleShare();
										handleCopyURL();
									}}
								>
									<img src="/img/ic_url_copy.svg" />
								</div>
								<div class="sns_title">URL복사</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="prj_control">
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
						{challenge.challengeTargetCode === 4 ||
						challenge.challengeTargetCode === 2 ? (
							<button
								onClick={() => {
									if (challenge.challengeTargetCode === 4) {
										handleApply();
									} else {
										handleSubmit();
									}
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
			</section>

			<section className="commentInput">
				<textarea
					type="text"
					placeholder={
						!challenge.commentAllowed
							? '댓글을 달 수 없는 프로젝트입니다'
							: '댓글을 남겨보세요'
					}
					onChange={(e) => {
						setInputComment(e.target.value);
					}}
					value={inputComment}
					disabled={!challenge.commentAllowed}
				></textarea>
				<button
					className={
						inputComment.length > 0
							? 'commet_active_btn'
							: 'comment_inactive_btn'
					}
					onClick={() => {
						if (challenge.commentAllowed) {
							handleComment();
						}
					}}
					disabled={!challenge.commentAllowed}
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
										onBlur={(e) => {
											// comments[idx].inputReply = e.target.value;
											let copyComments = comments.slice();
											copyComments[idx].inputReply = e.target.value;
											setComments(copyComments);
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
