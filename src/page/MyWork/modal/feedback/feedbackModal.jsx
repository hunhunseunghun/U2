import { useState, useEffect } from 'react';
import { ModalContainer } from './fbModalStyled';
function FeedbackModal({ open, data, handleModalClose }) {
	// console.log(open);
	// console.log(data);

	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<header>피드백</header>
						<main>{data}</main>
						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose('feedback');
								}}
							>
								{' '}
								닫기{' '}
							</button>
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default FeedbackModal;
