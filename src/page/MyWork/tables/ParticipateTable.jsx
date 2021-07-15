import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ParticipateTableContainer } from './ParticipateTableStyled';
import FeedbackModal from '../../../component/Modals/FeedBack/feedbackModal';
import ResumeModal from '../../../component/Modals/Resume/resumeModal';
import SubmitModal from '../../../component/Modals/Submit/SubmitModal';
import SubmissionModal from '../../../component/Modals/Submission/SubmissionModal';
import sortarrowdown from '../../../Img/Icons/sortarrowdown.png';
function ParticipateTable() {
	const userInfo = useSelector((state) => state.userInfo);
	const history = useHistory();
	const [quests, setQuests] = useState({
		data: [],
		pageSize: 10,
		currentPage: 1,
		total: 0,
	});
	const [isLoading, setLoading] = useState(false);

	const [feedbackProps, setFeedbackProps] = useState({
		open: false,
		data: null,
	});
	const [resumeProps, setResumeProps] = useState({ open: false, data: null });
	const [submitProps, setSubmitProps] = useState({
		open: false,
		data: null,
	});
	const [submissionProps, setSubmissionProps] = useState({
		open: false,
		data: null,
	});
	const getData = (config) => {
		setLoading(true);
		axios(config)
			.then((response) => {
				console.log(response.data);
				var datas = response.data.entities;
				var formedData = [];
				if (datas)
					formedData = datas.map((el) => {
						var myApplication = el.applications.filter(
							(el) => el.memberIdx === userInfo.memberIdx,
						)[0];
						// var myHireApply = el.hireApply.filter(el=>el.memberIdx===userInfo.memberIdx)
						if (el.challengeTargetCode === 1 || el.challengeTargetCode === 3) {
							if (myApplication) {
								return {
									img: el.mainImage,
									category: (() => {
										switch (el.challengeTargetCode) {
											case 1: {
												return '공모전';
											}
											case 2: {
												return '전문영상 편집자';
											}
											case 3: {
												return '영상크리에이터 / 인플루언서';
											}
											case 4: {
												return '강사채용';
											}
											default: {
												return null;
											}
										}
									})(),
									title: el.title ? el.title : 'no data',
									status: (() => {
										switch (myApplication.checkStatusCode) {
											case 1: {
												return '승인';
											}
											case 2: {
												return '반려';
											}
											case 3: {
												return '피드백';
											}
											case 8: {
												return '진행중';
											}
											case 0: {
												return '챌린지';
											}
											default: {
												return null;
											}
										}
									})(),
									presentationType: (() => {
										if (
											el.challengeTargetCode === 1 ||
											el.challengeTargetCode === 3
										) {
											//공모전 or 영상크리에이터
											if (myApplication.statusCode === 0) {
												return '자료제출';
											} else {
												//statusCode === 1
												return '제출자료';
											}
										} else {
											//challengeTargetCode === 3 , 4
											if (myApplication.statusCode === 0) {
												return '지원하기';
											} else {
												//statusCode === 1
												return '지원서';
											}
										}
									})(),
									presentation: (() => {
										// var me = el.applications.filter(
										// 	(el) => el.memberIdx === userInfo.memberIdx,
										// )[0];
										console.log('me : ', myApplication);
										if (
											el.challengeTargetCode === 1 ||
											el.challengeTargetCode === 3
										) {
											//공모전 or 영상크리에이터
											if (myApplication.statusCode === 0) {
												return '자료제출';
											} else {
												//statusCode === 1
												return myApplication.name
													? myApplication.name
													: 'no data';
											}
										} else {
											//challengeTargetCode === 3 , 4
											// if (myHireApply.statusCode === 0) {
											// 	// return myApplication.name;
											// 	return '가짜데이터'
											// } else {
											// 	//statusCode === 1
											// 	return '가짜데이터';
											// }
											return '??';
										}
									})(),
									// feedback:

									requestDate: myApplication.dateApplied,
									dueDate: el.missions[0].dateFin,
									challengeIdx: el.challengeIdx,
									missions: el.missions,
									application: myApplication,
								};
							}
						} else {
							//영상크리에이터 / 인플루언서, 강사채용
							//if(myHireApply){
							// 	return {
							// 		...
							// 	}
							// }
						}
					});
				// setQuests({ ...quests, data: response.data.entities });
				setQuests({ ...quests, data: formedData, total: response.data.total });
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	const handlePageChange = (page) => {
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengeinvolved?p=${page}&size=${quests.pageSize}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		getData(config);
	};

	const handleOpenFeedback = (feedback) => {
		setFeedbackProps({ open: true, data: feedback });
	};
	const handleOpenResume = (resume) => {
		setResumeProps({ open: true, data: resume });
	};
	const handleOpenSubmit = (data) => {
		setSubmitProps({ open: true, data: data });
	};
	const handleOpenSubmission = (data) => {
		setSubmissionProps({ open: true, data: data });
	};

	const handleModalClose = (modalType) => {
		switch (modalType) {
			case 'feedback': {
				setFeedbackProps({ ...feedbackProps, open: false });
				break;
			}
			case 'resume': {
				setResumeProps({ ...resumeProps, open: false });
				break;
			}
			case 'submit': {
				setSubmitProps({ ...submitProps, open: false });
				break;
			}
			case 'submission': {
				setSubmissionProps({ ...submitProps, open: false });
				break;
			}
			default: {
				console.log('no such case');
				break;
			}
		}
	};

	useEffect(() => {
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengeinvolved?p=${quests.currentPage}&size=${quests.pageSize}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		getData(config);
	}, []);
	// useEffect(() => {
	// 	setQuests({ ...quests, data: datas });
	// }, [datas]);
	return (
		<ParticipateTableContainer>
			<FeedbackModal
				open={feedbackProps.open}
				challenge={feedbackProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<ResumeModal
				open={resumeProps.open}
				challenge={resumeProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<SubmitModal
				open={submitProps.open}
				challenge={submitProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<SubmissionModal
				open={submissionProps.open}
				data={submissionProps.data}
				handleModalClose={(modalType) => [handleModalClose(modalType)]}
				isAdmin={false}
			/>
			<section className="prjregi_btn_area">
				{' '}
				<div
					className="prjregi_btn"
					onClick={() => {
						history.push('/prjregi');
					}}
				>
					{' '}
					<div className="prjregi_btn_plusicon">+</div>
					<div className="prjregi_btn_text">프로젝트 등록</div>
				</div>
			</section>
			{isLoading ? (
				'loading...'
			) : (
				<div>
					<table>
						<thead>
							<tr>
								<th key={'image'}>
									<section>
										<span>이미지</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
								<th key={'category'}>
									<section>
										<span>카테고리</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
								<th key={'name'}>
									<section>
										<span>프로젝트명</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
								<th key={'status'}>
									<section>
										<span>상태</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
								<th key={'presentation'}>
									<section>
										<span>제출자료</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
								<th key={'feedback'}>
									<section>
										<span>피드백</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
								<th key={'requestDate'}>
									<section>
										<span>신청일</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
								<th key={'dueDate'}>
									<section>
										<span>마감일</span>
										<img src={sortarrowdown} alt=""></img>
									</section>
								</th>
							</tr>
						</thead>
						<tbody>
							{quests.data
								? quests.data.map((data) => {
										if (data)
											return (
												<tr>
													<td>
														{data.img !== '' ? (
															<img src={data.img}></img>
														) : (
															'no image'
														)}
													</td>
													<td>{data.category}</td>
													<td>{data.title}</td>
													<td>{data.status}</td>
													{/* <td>{data.presentation}</td> */}
													<td className="presentation-td">
														{(() => {
															switch (data.presentationType) {
																case '지원서': {
																	return (
																		<button
																			className="resume"
																			onClick={() => {
																				console.log('지원서 clicked');
																				handleOpenResume(data);
																			}}
																		>
																			지원하기
																		</button>
																	);
																}
																case '자료제출': {
																	return (
																		<button
																			className="presentation"
																			onClick={() => {
																				handleOpenSubmit(data); //should have challengeIdx,
																			}}
																		>
																			자료제출
																		</button>
																	);
																}
																case '제출자료': {
																	return (
																		<button
																			className="presentation"
																			onClick={() => {
																				handleOpenSubmission(data);
																			}}
																		>
																			{data.presentation}
																		</button>
																	);
																}
																case '지원서': {
																	return <button>지원서</button>;
																}
																case '지원하기': {
																	return <button>지원하기</button>;
																}
																default: {
																	return data.presentation
																		? data.presentation
																		: '-';
																}
															}
														})()}
													</td>
													<td>
														{data.feedback ? (
															<button
																className="feedback-button"
																onClick={() => {
																	handleOpenFeedback(data.feedback);
																}}
															>
																보기
															</button>
														) : (
															'-'
														)}
													</td>
													<td>{data.requestDate}</td>
													<td>{data.dueDate}</td>
												</tr>
											);
								  })
								: ''}
						</tbody>
					</table>
					<div className="pagination"></div>
				</div>
			)}
			<Pagination2
				itemsCount={quests.total}
				handlePageChange={handlePageChange}
				pageSize={quests.pageSize}
			></Pagination2>
		</ParticipateTableContainer>
	);
}
export default ParticipateTable;
