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
						<header>this is header</header>
						<main>this is main</main>
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
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default SubmitModal;
