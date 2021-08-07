import { ModalContainer } from './VideoModalStyled';
function Modal({ open, handleModalClose, src }) {
	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<main>
							<iframe
								src={src + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0'}
								allowscriptaccess="always"
								allow="autoplay"
								allowFullScreen
							></iframe>
						</main>
						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose();
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
export default Modal;
