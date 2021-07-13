import React, { useState } from 'react';
import { Container } from './DropDownStyled.jsx';
import Modal from './Modal/Modal.jsx';

const DropDown = ({
	setDefaultIdx,
	setOwnerIdx,
	competition,
	isActive,
	setIsActive,
	handleNewData,
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const handleOpenModal = () => {
		setModalOpen(true);
	};
	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<Container
			className={
				isActive ? `addCompetition isActive` : `addCompetition inActive`
			}
		>
			<ul>
				{competition &&
					competition.map((ele, idx) => {
						return (
							<li
								className={
									isActive
										? `${ele.form}${idx} isActive`
										: `${ele.form}${idx} inActive`
								}
								key={`${ele.form}${idx}`}
								value={idx}
								onClick={() => {
									console.log('ele.id: ', ele.id);
									setIsActive(false);
									setOwnerIdx(ele.id);
									setDefaultIdx(idx);
								}}
							>
								{`${ele.form} : ${ele.companyName}`}
							</li>
						);
					})}
				<li
					className={
						isActive ? `addCompetition isActive` : `addCompetition inActive`
					}
					onClick={handleOpenModal}
				>{` + 추가하기`}</li>
			</ul>
			<Modal
				handleOpenModal={handleOpenModal}
				handleCloseModal={handleCloseModal}
				modalOpen={modalOpen}
				header="신규 프로필"
				handleNewData={handleNewData}
			/>
		</Container>
	);
};

export default DropDown;
