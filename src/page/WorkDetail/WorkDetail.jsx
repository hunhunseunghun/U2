import { useState } from 'react';
import { WorkDetailContainer } from './WorkDetailStyled';
import ChallengeTable from './tables/Challenge';
import InspectTable from './tables/Inspect';
import challenges from './sampledatas/challenges';
import inspects from './sampledatas/inspects';
import SubmissionModal from './modal/SubmissionModal';
function WorkDetail(props) {
  let [subject, setSubject] = useState('광고/홍보');
  let [meeting, setMeeting] = useState('비대면');
  let [terms, setTerms] = useState(['YouTube', 'TIKTOK', '파일 업로드']);
  let [prise, setPrise] = useState('10000원');
  let setTab;
  if (props.location.state.isContriClicked) {
    setTab = 0;
  } else if (props.location.state.isInspectClicked) {
    setTab = 1;
  } else {
    setTab = 0;
  }
  let [currentTab, setCurrentTab] = useState(setTab); //props에서 현재 탭 가져와 설정
  let [modalProps, setModalProps] = useState({ open: false });
  console.log(props);

  let handleTabClick = tab => {
    setCurrentTab(tab);
  };
  let handlePresentationClick = data => {
    console.log('data: ', data);
    setModalProps({ open: true, data: data });
  };
  let handleModalClose = () => {
    setModalProps({ ...modalProps, open: false });
  };
  const tables = {
    0: <ChallengeTable datas={challenges}></ChallengeTable>,
    1: (
      <InspectTable
        datas={inspects}
        handlePresentationClick={handlePresentationClick}
      ></InspectTable>
    ),
  };
  return (
    <WorkDetailContainer id="workdetail-root">
      <SubmissionModal
        open={modalProps.open}
        data={modalProps.data}
        handleModalClose={handleModalClose}
      />
      <section className="workdetail-section">
        <section className="section1">
          <div className="workdetail_img_wrap">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/Aatrox.png"
              alt="image"
            ></img>

            <div className="project_name_wrap">
              <div className="project_name_sub">프로젝트명</div>
              <div className="porject_name">홍보PPL 영상</div>
            </div>
          </div>

          <div className="project_info">
            <section className="project_target_wrap">
              <div className="project_target_sub">대상</div>
              <div className="project_target">{subject}</div>
            </section>
            <section className="project_target_wrap">
              <div className="project_target_sub">프로젝트 미팅</div>
              <div className="project_target">{meeting}</div>
            </section>
            <section className="project_target_wrap">
              <div className="project_target_sub">과제완료 조건</div>
              {terms.map((term, idx) => {
                return (
                  <div className="project_target" key={idx}>
                    {term}
                  </div>
                );
              })}
            </section>
            <section className="project_target_wrap project_info_lastchild">
              <div className="project_target_sub">보상</div>
              <div className="project_target">{prise}</div>
            </section>
          </div>
        </section>
        <section className="section2">
          <div className="tabs">
            <div
              className={
                'tab-contents' + ' ' + (currentTab === 0 ? 'selected' : '')
              }
              onClick={() => {
                handleTabClick(0);
              }}
            >
              챌린지 대상자
            </div>
            <div
              className={
                'tab-contents' + ' ' + (currentTab === 1 ? 'selected' : '')
              }
              onClick={() => {
                handleTabClick(1);
              }}
            >
              검수 대상자
            </div>
          </div>
          <div className="contents-table">{tables[currentTab]}</div>
        </section>
      </section>
    </WorkDetailContainer>
  );
}

export default WorkDetail;
