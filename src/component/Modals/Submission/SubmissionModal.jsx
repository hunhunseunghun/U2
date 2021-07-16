import { useState } from 'react';
import { ModalContainer } from './SubmissionModalStyled';
// ReactModal.setAppElement('#root');
import FeedbackModal from '../FeedBack/feedbackModal';
function SubmissionModal({ open, data, handleModalClose, isAdmin }) {
	console.log('data in submission: ', data);
	console.log('open: ', open);
	const [fbProps, setFbProps] = useState({ open: false, data: null });
	const handleFeedback = () => [
		setFbProps({ open: true, data: 'sample data' }),
	];
	const handleFBClose = () => {
		setFbProps({ open: false, data: null });
	};
	return (
		<ModalContainer className="workdetail_submission_modal">
			<FeedbackModal
				open={fbProps.open}
				data={fbProps.data}
				handleModalClose={handleFBClose}
			/>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<header>제출 자료</header>
						<main>
							<div className="submission_modal_ele">
								<div className="menu">과제영상</div>
								<div className="inputInfo submission_inputinfo_challengevid">
									<img src="" alt="image" />
									<span>OR URL FILE DOWN</span>
								</div>
							</div>
							<section className="submission_modal_ele">
								<div className="menu">지원자</div>
								<div className="inputInfo">
									{data.application.name ? data.application.name : 'no data'}
								</div>
							</section>
							<section className="submission_modal_ele">
								<div className="menu">휴대전화</div>
								<div className="inputInfo">
									{data.application.contact
										? data.application.contact
										: 'no data'}
									<div className="authorized">
										<kbd>인증완료</kbd>
									</div>
								</div>
							</section>
							<section className="submission_modal_ele">
								<div className="menu">이메일</div>
								<div className="inputInfo">
									{data.application.email ? data.application.email : 'no data'}
									<div className="authorized">
										<kbd>인증완료</kbd>
									</div>
								</div>
							</section>
							{data.challengeIdx === 1 && (
								<section className="submission_modal_ele">
									<div className="menu">계좌번호</div>
									<div className="inputInfo">
										신한은행 | {data.application.bankAccount}
										<div className="authorized">
											<kbd>인증완료</kbd>
										</div>
									</div>
								</section>
							)}

							<section className="submission_modal_ele">
								<div className="menu">지원자 코멘트</div>
								<div className="inputInfo">{data.application.note}</div>
							</section>
							<section className="submission_modal_ele">
								<div className="menu">첨부파일</div>
								<div className="inputInfo">test map.ppt</div>
							</section>
							<section className="submission_modal_ele submission_modal_ele_last">
								<div className="menu">검수자 피드백</div>
								<div className="inputInfo">내용없음</div>
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

								<button
									className="feedback"
									onClick={() => {
										handleFeedback();
									}}
									isAdmin={isAdmin}
								>
									피드백
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
