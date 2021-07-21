import React, { useState } from 'react';
import { Container } from './RecruitmentAreasModalStyled.jsx';

const RecruitmentAreasModal = ({ modalOpen, handleCloseModal }) => {
  const [recruitmentList, setRecruitmentList] = useState([
    'Photoshop',
    'Blender',
    'Premiere Pro',
    'PowerDirector',
    'After Effects',
    'Davinch Resolve',
    'FilmoraX',
    'Cinema 4D',
    '유투브 크리에이터',
    '3D 모션그래픽',
    '3D 애니메이션',
    '게임 그래픽',
  ]);
  const [addInputValue, setAddInputValue] = useState(null);
  const handleRecruitmentInput = e => {
    let recruitmentListTemp = [...recruitmentList];
    if (e.key === 'Enter') {
      recruitmentListTemp.push('까꿍');
      setRecruitmentList(recruitmentListTemp);
      console.log('recruitmentsInput Excuted');
      console.log(recruitmentListTemp);
      console.log(addInputValue);
    }
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
                {'hello'}
                {recruitmentList.map((ele, idx) => {
                  return (
                    <div
                      className={`recuitment_modal_elements recuitment_modal_elements_${idx}`}
                      key={idx}
                    >
                      <input type="checkbox" name={`${ele}`} value={`${ele}`} />
                      <div>{ele}</div>
                    </div>
                  );
                })}
                <div>
                  <input type="checkbox" name="photoshop" value="photoshop" />
                  <div>photoshop</div>
                </div>
              </section>
              <section>
                <div>직접입력</div>
                <div>
                  <input
                    type="text"
                    naeme="addRecuritmentList"
                    maxLength={15}
                    onKeyDown={e => {
                      handleRecruitmentInput(e);
                    }}
                    onChange={e => {
                      setAddInputValue(e.target.value);
                    }}
                  />
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
