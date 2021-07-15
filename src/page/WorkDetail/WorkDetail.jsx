import { useEffect, useState } from 'react';
import axios from 'axios';
import { WorkDetailContainer } from './WorkDetailStyled';
import ChallengeTable from './tables/Challenge';
import InspectTable from './tables/Inspect';
import challenges from './sampledatas/challenges';
import inspects from './sampledatas/inspects';
import SubmissionModal from './modal/SubmissionModal';
import { set } from 'lodash';
import moment from 'moment';
function WorkDetail(props) {
  let [subject, setSubject] = useState('광고/홍보');
  let [meeting, setMeeting] = useState('비대면');
  let [terms, setTerms] = useState(['YouTube', 'TIKTOK', '파일 업로드']);
  let [applyPeriod, setApplyPeriod] = useState(null);
  let [prise, setPrise] = useState('10000원');
  let [projectTitle, setProjectTitle] = useState('');
  let [mainImage, setMainImage] = useState(null);
  let [currChallenges, setCurrChallenges] = useState(null);
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
  const [isLoading, setIsLoading] = useState(false);

  //image section data
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_U2_DB_HOST +
          `/Campaign/challenge/${props.location.state.projectId}` //sample data, should be challengeIdx.
      )
      .then(response => {
        console.log('imagesection response.data: ', response.data);
        let data = response.data;
        let challengeTarget = '';
        let contactRequired = '비대면';
        let missionRequired = [];

        if (data.challengeTargetCode === 1) {
          challengeTarget = '공모전';
        } else if (data.challengeTargetCode === 2) {
          challengeTarget = '영상 크리에이터 인플루언서';
        } else if (data.challengeTargetCode === 3) {
          challengeTarget = '전문영상 편집자';
        } else if (data.challengeTargetCode === 4) {
          challengeTarget = '강사 채용';
        }

        if (data.missions[0].contactRequired === 1) {
          contactRequired = '비대면';
        } else if (data.missions[0].contactRequired === 2) {
          contactRequired = '오프라인';
        }

        setProjectTitle(data.title);
        setSubject(challengeTarget);
        setMeeting(contactRequired);
        setMainImage(data.mainImage);
        setApplyPeriod(
          moment(data.missions[0].dateBegin).format('YYYY-MM-DD') +
            moment(data.missions[0].dateFin).format('hh:mm:ss')
        );

        data.missions[0].videos.forEach(ele => {
          let result;
          if (ele.platform === 'YU') {
            result = 'YouTube';
          } else if (ele.platform === 'TT') {
            result = 'TIKTOK';
          } else if (ele.platfrom === 'VM') {
            result = 'Vimeo';
          }
          missionRequired.push(result);
        });

        setTerms(missionRequired);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  var challengesConfig = {
    method: 'get',
    url:
      process.env.REACT_APP_U2_DB_HOST +
      `/Campaign/challengesubmitting/${props.location.state.projectId}?size=10&p=1`,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    axios(challengesConfig)
      .then(res => {
        console.log('challengeidx response:');
        console.log(res);
        console.log(props.location.state.projectId);
        // if(res.data.entities.contactCode === 0){
        //   setMeeting("비대면")
        // } else if(res.data.entities.contactCode ===1){
        //   setMeeting("대면")
        // }

        // setTerms([])
        setCurrChallenges(res.data);
        setIsLoading(true);
      })
      .catch(err => {
        console.log('workdetail error');
        console.log(err);
      });

    axios();
  }, []);

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
    0: <ChallengeTable datas={currChallenges}></ChallengeTable>,
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
            {mainImage !== null ? (
              <img src={mainImage} alt="image"></img>
            ) : (
              'No Image'
            )}

            <div className="project_name_wrap">
              <div className="project_name_sub">프로젝트명</div>
              <div className="porject_name">{projectTitle}</div>
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
            <section className="project_target_wrap ">
              <div className="project_target_sub">접수기간</div>
              <div className="project_target">{applyPeriod}</div>
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
          {isLoading ? (
            <div className="contents-table">{tables[currentTab]}</div>
          ) : (
            ''
          )}
        </section>
      </section>
    </WorkDetailContainer>
  );
}

export default WorkDetail;
