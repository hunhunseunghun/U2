import { useState } from 'react';
import { ModalContainer } from './smModalStyled';
function Modal({ open, data, handleModalClose }) {
	console.log(data);
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
									handleModalClose('submission');
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
export default Modal;
