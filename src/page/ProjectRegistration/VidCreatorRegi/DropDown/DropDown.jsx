import React, { useState } from 'react';
import { Container } from './DropDownStyled.jsx';
import Modal from './Modal/Modal.jsx';

const DropDown = ({ setDefaultIdx, profiles, isActive, setIsActive }) => {
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
        {profiles.map((ele, idx) => {
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
                setIsActive(false);
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
      />
    </Container>
  );
};

export default DropDown;