import { ModalContainer } from './VideoModalStyled';
import { useState, useEffect } from 'react';
import InnerHTML from 'dangerously-set-html-content';
import axios from 'axios';
function Modal({ open, handleModalClose, src }) {
	const [newSrc, setNewSrc] = useState('');
	const [srcType, setSrcType] = useState(null);
	const [tiktok, setTiktok] = useState(null);

	useEffect(() => {
		switch (src.split('/')[2]) {
			case 'youtu.be': {
				let youtubeid = src.split('/')[3];
				setNewSrc(`https://www.youtube.com/embed/${youtubeid}`);
				setSrcType('youtube');
				break;
			}
			case 'www.tiktok.com': {
				axios
					.get(`https://www.tiktok.com/oembed?url=${src}`)
					.then((response) => {
						setTiktok(response.data.html);
					});

				setNewSrc(src.split('/')[5]);

				setSrcType('tiktok');
				break;
			}
			case 'www.youtube.com': {
				setNewSrc(src);
			}
			default: {
				break;
			}
		}
	}, [src]);

	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<main>
							{(() => {
								switch (srcType) {
									case 'youtube': {
										return (
											<iframe
												src={
													newSrc &&
													newSrc +
														'?autoplay=1&amp;modestbranding=1&amp;showinfo=0'
												}
												allowscriptaccess="always"
												allow="autoplay"
												allowFullScreen
											></iframe>
										);
									}
									case 'tiktok': {
										return (
											<div>
												<InnerHTML html={tiktok} />
											</div>
										);
									}
									default: {
										return null;
									}
								}
							})()}
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
