import { useState } from 'react';
import { ModalContainer } from './AddressStyled';
import '../../../../style/addrlink.css';
import DaumPostcode from 'react-daum-postcode';
const postCodeStyle = {
	display: 'block',
	position: 'absolute',
	top: '15%',
	width: '600px',
	height: '500px',
	padding: '7px',
	right: '35%',
};
function Modal({ open, handleModalClose, setAddressData }) {
	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<DaumPostcode
						style={postCodeStyle}
						onComplete={(data) => {
							setAddressData(data);
							handleModalClose();
						}}
					></DaumPostcode>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default Modal;
