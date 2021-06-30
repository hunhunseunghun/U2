import { useState } from 'react';
import { ModalContainer } from './SubmitModalStyled';
const ReactModal = require('react-modal');
// ReactModal.setAppElement('#root');
function SubmitModal({ open, data, handleModalClose }) {
	console.log('data: ', data);
	console.log('open: ', open);
	return (
		// <ModalContainer>
		// 	<div className="test">test for styled</div>
		// 	<ReactModal className="pd-modal" isOpen={open}>
		// 		<button
		// 			onClick={() => {
		// 				handleModalClose();
		// 			}}
		// 		>
		// 			close
		// 		</button>
		// 	</ReactModal>
		// </ModalContainer>
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<header>
							modal heading
							<button
								className="close"
								onClick={() => {
									handleModalClose();
								}}
							>
								{' '}
								&times;{' '}
							</button>
						</header>
						<main>함수형 모달입니다.</main>
						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose();
								}}
							>
								{' '}
								close{' '}
							</button>
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default SubmitModal;
