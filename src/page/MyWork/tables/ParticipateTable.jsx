import React, { useState, useEffect } from 'react';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ParticipateTableContainer } from './ParticipateTableStyled';
import FeedbackModal from '../modal/feedback/feedbackModal';
import ResumeModal from '../modal/resume/resumeModal';
import SubmitModal from '../modal/submission/SubmitModal';
function ParticipateTable({ datas }) {
	const [quests, setQuests] = useState({
		data: datas,
		pageSize: 3,
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
	const [submissionProps, setSubmissionProps] = useState({
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
	const handleOpenSubmission = (submission) => {
		setSubmissionProps({ open: true, data: submission });
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
			case 'submission': {
				setSubmissionProps({ ...submissionProps, open: false });
				break;
			}
			default: {
				console.log('no such case');
				break;
			}
		}
	};

	useEffect(() => {
		setQuests({ ...quests, data: datas });
	}, [datas]);
	return (
		<ParticipateTableContainer>
			<FeedbackModal
				open={feedbackProps.open}
				data={feedbackProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<ResumeModal
				open={resumeProps.open}
				data={resumeProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<SubmitModal
				open={submissionProps.open}
				data={submissionProps.data}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
			/>
			<table>
				<thead>
					<tr>
						<th key={'image'}>이미지</th>
						<th key={'category'}>카테고리</th>
						<th key={'name'}>프로젝트명</th>
						<th key={'status'}>상태</th>
						<th key={'presentation'}>제출자료</th>
						<th key={'feedback'}>피드백</th>
						<th key={'requestDate'}>신청일</th>
						<th key={'dueDate'}>마감일</th>
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
																	handleOpenResume(data.presentation);
																}}
															>
																지원서
															</button>
														);
													}
													case '자료제출': {
														return (
															<button
																className="presentation"
																onClick={() => {
																	handleOpenSubmission(data.presentation);
																}}
															>
																자료제출
															</button>
														);
													}
													default: {
														return data.presentation;
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
