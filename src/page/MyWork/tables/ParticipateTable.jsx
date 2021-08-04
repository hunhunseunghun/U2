import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ParticipateTableContainer } from './ParticipateTableStyled';
import FeedbackModal from '../../../component/Modals/FeedBack/feedbackModal';
import ApplyModal from '../../../component/Modals/Resume/ApplyModal';
import ApplymentModal from '../../../component/Modals/Apply/applymentModal';
import SubmitModal from '../../../component/Modals/Submit/SubmitModal';
import SubmissionModal from '../../../component/Modals/Submission/SubmissionModal';
import sortarrowdown from '../../../Img/Icons/sortarrowdown.png';
import { getSingleFileFromBlob } from '../../../library/azureBlob';
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
	const [applymentProps, setApplymentProps] = useState({
		open: false,
		data: null,
	});
	const [submitProps, setSubmitProps] = useState({
		open: false,
		data: null,
	});
	const [submissionProps, setSubmissionProps] = useState({
		open: false,
		challengeIdx: null,
	});
	const [applyProps, setApplyProps] = useState({ open: false });
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
	const getData = (config) => {
		setLoading(true);
		console.log('config: ', config);
		axios(config)
			.then((response) => {
				console.log('participateTable response: ', response.data);
				var datas = response.data.entities;
				var formedData = [];
				if (datas)
					formedData = datas.map((el) => {
						var myApplication = el.applications[0];

						var myHireApply = el.hireApply;
						// if (el.challengeTargetCode !== 4) {
						if (myApplication || myHireApply.challengeIdx !== 0) {
							return {
								img: el.logo,
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
									if (
										//공모전, 영상크리에이터
										el.challengeTargetCode === 1 ||
										el.challengeTargetCode === 3
									) {
										if (myApplication && myApplication.statusCode === 0)
											return '챌린지';
										switch (myApplication.checkStatusCode) {
											case 1: {
												return '승인';
											}
											case -1: {
												return '반려';
											}
											case 0: {
												return '검수중';
											}
											default: {
												return null;
											}
										}
									} else {
										if (myHireApply.challengeIdx === 0) {
											return '챌린지';
										} else {
											return '지원완료';
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
										//challengeTargetCode === 2, 4 편집자, 강사채용
										console.log('myHireApply: ', myHireApply);
										if (myHireApply.challengeIdx === 0) {
											return '지원하기';
										} else {
											//statusCode === 1
											return '지원서';
										}
									}
								})(),
								// feedback: myApplication.hasFeedback,
								feedback: myApplication && myApplication.hasFeedback,
								// requestDate: myApplication.registDate.split('T')[0],
								requestDate: (() => {
									if (
										el.challengeTargetCode === 1 ||
										el.challengeTargetCode === 3
									) {
										return myApplication.registDate.split('T')[0];
									} else {
										return myHireApply.registDate.split('T')[0];
									}
								})(),
								// dueDate: el.missions[0].dateFin.split('T')[0],
								dueDate: (() => {
									if (
										el.challengeTargetCode === 1 ||
										el.challengeTargetCode === 3
									) {
										return el.missions[0].dateFin.split('T')[0];
									} else {
										// return myHireApply.dateFin.split('T')[0];
										return '-';
									}
								})(),
								challengeIdx: el.challengeIdx,
								missions: el.missions,
								application: myApplication,
							};
						} else {
							//없을 경우
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

	const handleOpenFeedback = (challengeIdx) => {
		console.log('open feedback: ', challengeIdx);
		setFeedbackProps({ open: true, data: challengeIdx });
	};
	const handleOpenApplyment = (applyment) => {
		setApplymentProps({ open: true, data: applyment });
	};
	const handleOpenSubmit = (data) => {
		setSubmitProps({ open: true, data: data });
	};
	const handleOpenSubmission = (data) => {
		setSubmissionProps({ open: true, challengeIdx: data.challengeIdx });
	};
	const handleOpenApply = (data) => {
		setApplyProps({ open: true, data: data });
	};

	const handleModalClose = (modalType) => {
		switch (modalType) {
			case 'feedback': {
				setFeedbackProps({ ...feedbackProps, open: false });
				break;
			}
			case 'applyment': {
				setApplymentProps({ ...applymentProps, open: false });
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
			case 'apply': {
				setApplyProps({ ...applyProps, open: false });
			}
			default: {
				console.log('no such case');
				break;
			}
		}
	};

	// useEffect(() => {
	// 	setQuests({ ...quests, data: datas });
	// }, [datas]);
	return (
		<ParticipateTableContainer>
			<FeedbackModal
				open={feedbackProps.open}
				challengeIdx={feedbackProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
				isAdmin={false}
			/>
			<ApplyModal
				open={applyProps.open}
				challenge={applyProps.data}
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
				challengeIdx={submissionProps.challengeIdx}
				handleModalClose={(modalType) => handleModalClose(modalType)}
				isAdmin={false}
			/>
			<ApplymentModal
				open={applymentProps.open}
				challenge={applymentProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
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
										// console.log('data: ', data);
										if (data)
											return (
												<tr>
													<td>
														{data.img ? (
															<img
																src={getSingleFileFromBlob(data.img)}
																alt={data.img}
																style={{ width: '100px' }}
															></img>
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
																case '지원하기': {
																	return (
																		<button
																			className="resume"
																			onClick={() => {
																				handleOpenApplyment(data);
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
																			보기
																		</button>
																	);
																}
																case '지원서': {
																	return (
																		<button
																			onClick={() => {
																				handleOpenApplyment(data);
																			}}
																		>
																			보기
																		</button>
																	);
																}
																case '지원하기': {
																	return (
																		<button
																			onClick={() => {
																				// handleOpenApply(data)
																			}}
																		>
																			지원하기
																		</button>
																	);
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
																	handleOpenFeedback(data.challengeIdx);
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
