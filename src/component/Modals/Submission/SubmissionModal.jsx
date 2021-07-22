import { useState, useEffect } from 'react';
import axios from 'axios';
import { ModalContainer } from './SubmissionModalStyled';
// ReactModal.setAppElement('#root');
import FeedbackModal from '../FeedBack/feedbackModal';
function SubmissionModal({
	open,
	challengeIdx,
	handleModalClose,
	isAdmin,
	propsData,
}) {
	// console.log('challengeIdx in submission: ', challengeIdx);
	const [fbProps, setFbProps] = useState({ open: false, data: '' });
	const [data, setData] = useState({});
	const handleFeedback = () => [
		setFbProps({
			open: true,
			data: data,
		}),
	];
	const handleFBClose = () => {
		setFbProps({ open: false, data: null });
	};
	const handleRefresh = () => {
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmit/${Number(
					propsData.challengeIdx,
				)}?memberIdx=${propsData.memberIdx}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((response) => {
				console.log('data in submission: ', response.data);
				setData(response.data);
				setFbProps({
					open: false,
					data: response.data,
				});
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		if (challengeIdx && !propsData) {
			var config = {
				method: 'get',
				url:
					process.env.REACT_APP_U2_DB_HOST +
					`/Campaign/challengesubmit/${Number(challengeIdx)}`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
			};
			axios(config).then((response) => {
				console.log('data in submission: ', response.data);
				setData(response.data);
				setFbProps({ ...fbProps, data: response.data.feedback });
			});
		}
	}, [challengeIdx]);
	useEffect(() => {
		if (propsData) {
			console.log('propsData: ', propsData);
			var config = {
				method: 'get',
				url:
					process.env.REACT_APP_U2_DB_HOST +
					`/Campaign/challengesubmit/${Number(
						propsData.challengeIdx,
					)}?memberIdx=${propsData.memberIdx}`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
			};
			axios(config)
				.then((response) => {
					console.log('data in submission: ', response.data);
					setData(response.data);
					setFbProps({
						...fbProps,
						data: response.data,
					});
				})
				.catch((err) => console.log(err));

			// var config2 = {
			// 	method: 'get',
			// 	url:
			// 		process.env.REACT_APP_U2_DB_HOST +
			// 		`/Campaign/challengesubmitfeedback?challengeIdx=${
			// 			propsData.challengeIdx
			// 		}&seq=${1}&memberIdx=${propsData.memberIdx}`,
			// 	headers: {
			// 		Authorization: 'Bearer ' + localStorage.getItem('token'),
			// 		'Content-Type': 'application/json',
			// 	},
			// };
			// console.log(config2.url);
			// axios(config2).then((response) => {
			// 	console.log(response);
			// });
			// setData(propsData);
		}
	}, [propsData]);
	return (
		<ModalContainer className="workdetail_submission_modal">
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<FeedbackModal
							open={fbProps.open}
							data={fbProps.data}
							handleModalClose={handleFBClose}
							refresh={handleRefresh}
							isAdmin={isAdmin}
						/>
						<header>제출 자료</header>
						<main>
							<div className="submission_modal_ele">
								<div className="menu">과제영상</div>
								<div className="inputInfo submission_inputinfo_challengevid">
									{data.videos && data.videos.length > 0
										? data.videos.map((el) => {
												let src = '';
												switch (el.platform) {
													case 'YU': {
														src =
															'https://www.youtube.com/watch?v=' + el.videoId;
														break;
													}
													case 'TT': {
														src = `https://www.tiktok.com/${el.videoId}`;
														break;
													}
													case 'VM': {
														src = `https://vimeo.com/${el.videoId}`;
														break;
													}
													case 'DR': {
														src = el.videoId;
														break;
													}
													case 'FS': {
														src = el.videoId;
														break;
													}
													default: {
														break;
													}
												}
												return (
													<div className="links">
														<a href={src} target="_blank">
															링크
														</a>
														<br />
													</div>
												);
										  })
										: '-'}
								</div>
							</div>
							<section className="submission_modal_ele">
								<div className="menu">지원자</div>
								<div className="inputInfo">
									{data.name ? data.name : 'no data'}
								</div>
							</section>
							<section className="submission_modal_ele">
								<div className="menu">휴대전화</div>
								<div className="inputInfo">
									{data.contact ? data.contact : 'no data'}
									<div className="authorized">
										<kbd>인증완료</kbd>
									</div>
								</div>
							</section>
							<section className="submission_modal_ele">
								<div className="menu">이메일</div>
								<div className="inputInfo">
									{data.email ? data.email : 'no data'}
									<div className="authorized">
										<kbd>인증완료</kbd>
									</div>
								</div>
							</section>
							{challengeIdx === 1 && (
								<section className="submission_modal_ele">
									<div className="menu">계좌번호</div>
									<div className="inputInfo">
										{data.bankName} | {data.bankAccount}
										<div className="authorized">
											<kbd>인증완료</kbd>
										</div>
									</div>
								</section>
							)}

							<section className="submission_modal_ele">
								<div className="menu">지원자 코멘트</div>
								<div className="inputInfo">{data.note}</div>
							</section>
							<section className="submission_modal_ele">
								<div className="menu">이미지</div>
								<div className="inputInfo">
									{data.photo ? (
										<img src={data.photo} alt={data.photo}></img>
									) : (
										'-'
									)}
								</div>
							</section>
							<section className="submission_modal_ele submission_modal_ele_last">
								<div className="menu">검수자 피드백</div>
								<div className="inputInfo">
									{data.feedback && data.feedback.comment
										? data.feedback.comment
										: '내용없음'}
								</div>
							</section>
						</main>
						{isAdmin ? (
							<footer>
								<button
									className="close"
									onClick={() => {
										handleModalClose('submission');
									}}
								>
									{' '}
									닫기{' '}
								</button>
								<button className="return">반려</button>
								<button
									className="feedback"
									onClick={() => {
										handleFeedback();
									}}
								>
									피드백
								</button>
								<button className="okay">승인</button>
							</footer>
						) : (
							<footer>
								<button
									className="close"
									onClick={() => {
										handleModalClose('submission');
									}}
								>
									{' '}
									닫기{' '}
								</button>
							</footer>
						)}
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default SubmissionModal;
