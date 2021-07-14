import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ParticipateTableContainer } from './ParticipateTableStyled';
import FeedbackModal from '../modal/feedback/feedbackModal';
import ResumeModal from '../modal/resume/resumeModal';
import SubmitModal from '../modal/submit/SubmitModal';
import sortarrowdown from '../../../Img/Icons/sortarrowdown.png';
import axios from 'axios';
function ParticipateTable({ datas }) {
	const userInfo = useSelector((state) => state.userInfo);
	const history = useHistory();
	const [quests, setQuests] = useState({
		data: datas,
		pageSize: 10,
		currentPage: 1,
	});
	const { data, pageSize, currentPage } = quests;
	const pagedQuests = paginate(data, currentPage, pageSize);
	const { length: count } = quests.data;

	const [feedbackProps, setFeedbackProps] = useState({
		open: false,
		data: null,
	});
	const [resumeProps, setResumeProps] = useState({ open: false, data: null });
	const [submitProps, setSubmitProps] = useState({
		open: false,
		data: null,
	});

	const handlePageChange = (page) => {
		setQuests({ ...quests, currentPage: page });
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
		axios(config)
			.then((response) => {
				console.log(response.data);
				var datas = response.data.entities;

				var formedData = datas.map((el) => {
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
						name: el.title,
						status: (() => {
							var me = el.applications.filter(
								(el) => el.memberIdx === userInfo.memberIdx,
							)[0];
							switch (me.checkStatusCode) {
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
						presentation: (() => {
							var me = el.applications.filter(
								(el) => el.memberIdx === userInfo.memberIdx,
							)[0];
							switch (me.checkStatusCode) {
								case 1: {
									//승인
									return '내자료';
								}
								case 2: {
									//반려
									return '반려';
								}
								case 3: {
									//피드백
									return '피드백';
								}
								case 8: {
									//진행중
									return '자료제출';
								}
								default: {
									return null;
								}
							}
						})(),
						// feedback:
					};
				});
				// setQuests({...quests, data : response.data.entities})
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		setQuests({ ...quests, data: datas });
	}, [datas]);
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
				data={submitProps.data}
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
					{pagedQuests
						? pagedQuests.map((data) => {
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
										<td>{data.name}</td>
										<td>{data.status}</td>
										{/* <td>{data.presentation}</td> */}
										<td className="presentation-td">
											{(() => {
												switch (data.presentation) {
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
													default: {
														return data.presentation ? data.presentation : '-';
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
			<div className="pagination">
				<Pagination2
					itemsCount={count}
					handlePageChange={handlePageChange}
					pageSize={quests.pageSize}
				></Pagination2>
			</div>
		</ParticipateTableContainer>
	);
}
export default ParticipateTable;
