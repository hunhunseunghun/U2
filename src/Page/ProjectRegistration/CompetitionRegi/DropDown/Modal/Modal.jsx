import React from 'react';

const Modal = ({ modalOpen, handleOpenModal, handleCloseModal, header }) => {
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
              <div className="menu">* 공모전명</div>
              <div className="inputInfo">
                <div className="inputPrjName">
                  <input
                    type="text"
                    className="prjName"
                    placeholder="프로젝트명을 입력해 주십시오"
                  />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">* 공모전명</div>
              <div className="inputInfo">
                <div className="inputPrjName">
                  <input
                    type="text"
                    className="prjName"
                    placeholder="프로젝트명을 입력해 주십시오"
                  />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">* 공모전명</div>
              <div className="inputInfo">
                <div className="inputPrjName">
                  <input
                    type="text"
                    className="prjName"
                    placeholder="프로젝트명을 입력해 주십시오"
                  />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">* 공모전명</div>
              <div className="inputInfo">
                <div className="inputPrjName">
                  <input
                    type="text"
                    className="prjName"
                    placeholder="프로젝트명을 입력해 주십시오"
                  />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">* 공모전명</div>
              <div className="inputInfo">
                <div className="inputPrjName">
                  <input
                    type="text"
                    className="prjName"
                    placeholder="프로젝트명을 입력해 주십시오"
                  />
                </div>
              </div>
            </section>
            <section className="ele">
              <div className="menu">* 공모전명</div>
              <div className="inputInfo">
                <div className="inputPrjName">
                  <input
                    type="text"
                    className="prjName"
                    placeholder="프로젝트명을 입력해 주십시오"
                  />
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
