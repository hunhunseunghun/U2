import React, { useState } from 'react';
import { Container } from './RecruitmentAreasModalStyled.jsx';

const RecruitmentAreasModal = ({ modalOpen, handleCloseModal, header }) => {
  const [columnText, setColumnText] = useState('개인');

  const handleColumnText = e => {
    setColumnText(e.target.value);
  };
  return (
    <Container>
      <div className={modalOpen ? 'openModal modal' : 'modal'}>
        {modalOpen ? (
          <section>
            <header>
              모집분야
              <button
                className="close"
                onClick={() => {
                  handleCloseModal(false);
                }}
              >
                {' '}
                &times;{' '}
              </button>
            </header>
            <main>
              <section>
                <div>
                  <input type="checkbox" name="photoshop" value="photoshop" />
                  <div>photoshop</div>
                </div>
              </section>
            </main>
            <footer>
              <button className="close" onClick={handleCloseModal}>
                {' '}
                취소{' '}
              </button>
              <button className="close" onClick={handleCloseModal}>
                {' '}
                저장{' '}
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Container>
  );
};

export default RecruitmentAreasModal;
