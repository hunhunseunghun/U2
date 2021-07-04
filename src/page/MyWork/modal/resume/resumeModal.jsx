import { useState } from 'react';
import { ModalContainer } from './rsModalStyled';
function Modal({ open, data, handleModalClose }) {
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
									handleModalClose('resume');
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
