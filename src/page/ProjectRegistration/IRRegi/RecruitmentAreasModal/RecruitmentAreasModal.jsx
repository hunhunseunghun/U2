import React, { useEffect, useState } from 'react';
import { Container } from './RecruitmentAreasModalStyled.jsx';
import RecruitmentsEle from './RecruitmentsEle/RecruitmentsEle.jsx';

const RecruitmentAreasModal = ({
  modalOpen,
  handleCloseModal,
  handleRcruitmentList,
}) => {
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
      recruitmentListTemp.push(addInputValue);
      setRecruitmentList(recruitmentListTemp);
    }
  };

  const [selectedList, setSelectedList] = useState(new Set());
  const handleSelectedList = (value, isChecked) => {
    if (!isChecked) {
      selectedList.add(value);
      setSelectedList(selectedList);
    } else if (isChecked && selectedList.has(value)) {
      selectedList.delete(value);
      setSelectedList(selectedList);
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
              <section className="recruitment_select_area">
                {recruitmentList.map((ele, idx) => {
                  return (
                    // <div
                    //   className={`recuitment_modal_elements recuitment_modal_elements_${idx}`}
                    //   key={idx}
                    // >
                    //   <input
                    //     type="checkbox"
                    //     name={`${ele}`}
                    //     value={`${ele}`}
                    //     onChange={e => {
                    //       handleSelectedList(e, idx);
                    //     }}
                    //   />
                    //   <div>{ele}</div>

                    // </div>
                    <RecruitmentsEle
                      ele={ele}
                      idx={idx}
                      handleSelectedList={handleSelectedList}
                    />
                  );
                })}
              </section>

              <section className="recruitment_direct_area">
                <div className="recruitment_direct_title">직접입력</div>
                <div className="recruitment_direct_input">
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
                  <button
                    onClick={() => {
                      let recruitmentListTemp = [...recruitmentList];
                      recruitmentListTemp.push(addInputValue);
                      setRecruitmentList(recruitmentListTemp);
                    }}
                  >
                    추가
                  </button>
                </div>
              </section>
            </main>
            <footer>
              <button
                className="close"
                onClick={() => {
                  handleCloseModal(false);
                  setSelectedList(new Set());
                }}
              >
                {' '}
                취소{' '}
              </button>
              <button
                className="close"
                onClick={() => {
                  handleCloseModal(false);
                  handleRcruitmentList(selectedList);
                  setSelectedList(new Set());
                }}
              >
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
