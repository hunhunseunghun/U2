import React, { useState } from 'react';

const Modal = ({ modalOpen, handleOpenModal, handleCloseModal, header }) => {
  const [columnText, setColumnText] = useState('개인');

  const handleColumnText = e => {
    setColumnText(e.target.value);
  };

  return (
    <div className={modalOpen ? 'openModal modal' : 'modal'}>
      {modalOpen ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={handleCloseModal}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>
            <section className="ele">
              <div className="menu">형식</div>
              <div className="inputInfo">
                <form className="selectForm">
                  <div>
                    <input
                      type="radio"
                      name="Form"
                      value="개인"
                      onClick={handleColumnText}
                      checked={columnText === '개인' ? true : false}
                      readOnly
                    />
                    <label htmlFor="From">개인</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="Form"
                      value="비지니스"
                      onClick={handleColumnText}
                      checked={columnText === '비지니스' ? true : false}
                      readOnly
                    />
                    <label htmlFor="From">비지니스</label>
                  </div>
                </form>
              </div>
            </section>
            <section className="ele">
              <div className="menu">{columnText}</div>
              <div className="inputInfo">
                <div className="inputCompany">
                  <input type="text" className="inputCompany" />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">대표 로고 이미지</div>
              <div className="inputInfo">
                <div className="competitionName">
                  <input
                    type="file"
                    accept="image/*"
                    className="competitionName"
                    multiple
                  />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">* 이메일</div>
              <div className="inputInfo">
                <div className="inputEmail">
                  <input type="text" className="prjName" />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">* 전화번호</div>
              <div className="inputInfo">
                <div className="inputPhoneNumber">
                  <input type="text" className="prjName" />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">SNS ID</div>
              <div className="inputInfo">
                <div className="inputSnsID">
                  <input type="text" className="prjName" />
                </div>
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
  );
};

export default Modal;
