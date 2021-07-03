import { useState } from 'react';
import { ModalContainer } from './SubmitModalStyled';
// ReactModal.setAppElement('#root');
function SubmitModal({ open, data, handleModalClose }) {
	console.log('data: ', data);
	console.log('open: ', open);
	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<header>제출 자료</header>
						<main>
							<section>
								<span className="cate">과제영상</span>
								<span className="submit-value">sample url</span>
							</section>
							<section>
								<span className="cate">지원자</span>
								<span className="submit-value">홍길동</span>
								<span className="authorized">인증완료</span>
							</section>
							<section>
								<span className="cate">휴대전화</span>
								<span className="submit-value">010-0000-0000</span>
								<span className="authorized">
									<kbd>인증완료</kbd>
								</span>
							</section>
							<section>
								<span className="cate">이메일</span>
								<span className="submit-value">xxxx@xxxx.com</span>
								<span className="authorized">
									<kbd>인증완료</kbd>
								</span>
							</section>
							<section>
								<span className="cate">계좌번호</span>
								<span className="submit-value">신한은행 | 000-000-0000</span>
								<span className="authorized">
									<kbd>인증완료</kbd>
								</span>
							</section>
							<section>
								<span className="cate">지원자 코멘트</span>
								<span className="submit-value">안녕하세요</span>
							</section>
							<section>
								<span className="cate">첨부파일</span>
								<span className="submit-value">test map.ppt</span>
							</section>
							<section>
								<span className="cate">검수자 피드백</span>
								<span className="submit-value">내용없음</span>
							</section>
						</main>
						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose();
								}}
							>
								{' '}
								취소{' '}
							</button>
							<button className="return">반려</button>
							<button className="feedback">피드백</button>
							<button className="okay">승인</button>
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default SubmitModal;
