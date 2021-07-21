import React, { useEffect, useState } from 'react';
import { Container } from './RecruitmentAreasModalStyled.jsx';
import RecruitmentsEle from './RecruitmentsEle/RecruitmentsEle.jsx';

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
  const [selectedList, setSelectedList] = useState(new Set());
  const [addInputValue, setAddInputValue] = useState(null);
  const handleRecruitmentInput = e => {
    let recruitmentListTemp = [...recruitmentList];
    if (e.key === 'Enter') {
      recruitmentListTemp.push(addInputValue);
      setRecruitmentList(recruitmentListTemp);
      console.log('recruitmentsInput Excuted');
      console.log(recruitmentListTemp);
      console.log(addInputValue);
    }
  };

  const handleSelectedList = (value, isChecked) => {
    if (isChecked) {
      selectedList.add(value);
      setSelectedList(selectedList);
    } else if (!isChecked && selectedList.has(value)) {
      selectedList.delete(value);
      setSelectedList(selectedList);
    }
    console.log(selectedList);
    console.log(isChecked);
  };

  useEffect(() => {
    console.log(selectedList);
  }, [selectedList]);

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
