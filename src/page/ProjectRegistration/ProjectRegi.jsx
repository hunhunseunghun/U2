import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { PrjRegiContainer } from './ProjectRegiStyled.jsx';
import logo from '../../Img/logo.svg';
import competitionLogo from '../../Img/Icons/trophy-solid.svg';
import vidEditorLogo from '../../Img/Icons/cut-solid.svg';
import vidCreatorLogo from '../../Img/Icons/video-solid.svg';
import irLogo from '../../Img/Icons/chalkboard-teacher-solid.svg';
import testVid from '../../Img/testVid.mp4';
import testTumb from '../../Img/slider1.jpeg';

const ProjectRegi = () => {
  let history = useHistory();
  const [pathRegi, setPathRegi] = useState(null); // 페이지네이션 관리
  const [competitionData, setCompetitionData] = useState(null);
  const [vidEditorData, setVidEditorData] = useState(null);
  const [vidCreatorData, setVidCreatorData] = useState(null);
  const [irData, setIrData] = useState(null);

  const handleChekcboxChange = e => {
    const checkBoxes = document.getElementsByName('prjselect');
    checkBoxes.forEach(ele => {
      if (ele === e.target) {
        e.checked = true;
      } else {
        ele.checked = false;
      }
    });

    const confirmCheck = () => {
      let result = false;
      for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
          result = true;
          break;
        }
      }
      return result;
    };

    if (confirmCheck()) {
      setPathRegi(e.target.value);
    } else {
      setPathRegi(null);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://u2-rest-dev.azurewebsites.net/api/common/code/challengetarget`
      )
      .then(res => {
        console.log(res.data);

        if (Array.isArray(res.data)) {
          res.data.forEach(ele => {
            if (ele.cd === '1') {
              setCompetitionData(ele);
            }
            if (ele.cd === '2') {
              setVidEditorData(ele);
            }
            if (ele.cd === '3') {
              setVidCreatorData(ele);
            }
            if (ele.cd === '4') {
              setIrData(ele);
            }
          });
        }
      })
      .catch(err => {
        throw err;
      });
  }, []);

  return (
    <PrjRegiContainer className="contents_wrap">
      <section className="projectregi_section">
        <section className="titleArea">
          <div>대상 선택</div>
        </section>

        <section className="projectregi_items prjSelect">
          <section className="projectregi_item">
            <div className="projectregi_item_innerwrap">
              <section className="projectregi_checkbox_area">
                <div className="projectregi_checkbox_top">
                  <input
                    id="competition"
                    type="checkbox"
                    className="ckBox"
                    name="prjselect"
                    value="competiton"
                    onChange={handleChekcboxChange}
                    chekced={false}
                  />
                </div>
                <div className="projectregi_checkbox_bot">
                  <img src={competitionLogo} alt={logo} className="ckIcon" />
                  <div className="projectregi_checkbox_competitionText">
                    <div>공모전</div>
                  </div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contentTop">
                  <div className="contentTitle">
                    <div>예제 영상</div>
                  </div>
                  <p>
                    {competitionData !== null ? competitionData.codeDesc : null}
                  </p>
                </div>
                <div className="contentBot">
                  <div className="projectregi_content_item slide_inactive">
                    <video src={testVid} controls poster={testTumb} />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                  <div className="projectregi_content_item slide_inactive">
                    <video src={testVid} autoplay loop muted playsinline />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                  <div className="projectregi_content_item slide_inactive">
                    <video src={testVid} controls />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="projectregi_item">
            <div className="projectregi_item_innerwrap">
              <section className="projectregi_checkbox_area">
                <div className="projectregi_checkbox_top">
                  <input
                    type="checkbox"
                    className="ckBox"
                    name="prjselect"
                    value="videditor"
                    onChange={handleChekcboxChange}
                  />
                </div>
                <div className="projectregi_checkbox_bot">
                  <img src={vidEditorLogo} alt={logo} className="ckIcon" />
                  <div className="projectregi_checkbox_videditorText">
                    <div>전문영상{<br />}편집자</div>
                  </div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contentTop">
                  <div className="contentTitle">
                    <div>예제 영상</div>
                  </div>
                  <p>
                    {vidEditorData !== null ? vidEditorData.codeDesc : null}
                  </p>
                </div>
                <div className="contentBot">
                  <div className="projectregi_content_item ">
                    <video src={testVid} controls />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                  <div className="projectregi_content_item ">
                    {' '}
                    <video src={testVid} autoplay loop muted playsinline />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                  <div className="projectregi_content_item ">
                    {' '}
                    <video src={testVid} controls />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="projectregi_item">
            <div className="projectregi_item_innerwrap">
              <section className="projectregi_checkbox_area">
                <div className="projectregi_checkbox_top">
                  <input
                    type="checkbox"
                    className="ckBox"
                    name="prjselect"
                    value="vidcreator"
                    onChange={handleChekcboxChange}
                    chekced={false}
                  />
                </div>
                <div className="projectregi_checkbox_bot ">
                  <img src={vidCreatorLogo} alt={logo} className="ckIcon" />
                  <div className="projectregi_checkbox_creatorText">
                    <div>영상 크리에이터{<br />} 인플루언서</div>
                  </div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contentTop">
                  <div className="contentTitle">
                    <div>예제 영상</div>
                  </div>
                  <p>
                    {vidCreatorData !== null ? vidCreatorData.codeDesc : null}
                  </p>
                </div>
                <div className="contentBot">
                  <div className="projectregi_content_item slide_inactive">
                    <video src={testVid} controls />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                  <div className="projectregi_content_item slide_inactive">
                    {' '}
                    <video src={testVid} autoplay loop muted playsinline />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                  <div className="projectregi_content_item slide_inactive">
                    {' '}
                    <video src={testVid} controls />
                    <div>10만 구독자 유튜버 XX  ⁠PPL 광고 영상.</div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="projectregi_item projectregi_item_ir">
            <div className="projectregi_item_innerwrap">
              <section className="projectregi_checkbox_area">
                <div className="projectregi_checkbox_top">
                  <input
                    type="checkbox"
                    className="ckBox"
                    name="prjselect"
                    value="ir"
                    onChange={handleChekcboxChange}
                    chekced={false}
                  />
                </div>
                <div className="projectregi_checkbox_bot">
                  <img src={irLogo} alt={logo} className="ckIcon" />
                  <div className="projectregi_checkbox_irText">강사 채용</div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contentTop">
                  <div className="contentTitle">
                    <div>예제 영상</div>
                  </div>
                  <p>{irData !== null ? irData.codeDesc : null}</p>
                </div>
                <div className="contentBot">
                  <div>
                    영상 촬영에서 편집까지 온/오프라인 강의를 위한 전문 강사를
                    U2에서 찾아보세요
                  </div>
                </div>
              </section>
            </div>
          </section>
        </section>

        <section className="projectregi_btn_area">
          <button
            className="projectregi_btn"
            onClick={() => {
              history.push('/creatormarket');
            }}
          >
            취소
          </button>
          <button
            className="projectregi_btn"
            onClick={() => {
              if (pathRegi === null) {
                alert('대상을 선택해주세요');
              } else {
                history.push(`${pathRegi}`);
              }
            }}
          >
            다음
          </button>
        </section>
      </section>
    </PrjRegiContainer>
  );
};

export default ProjectRegi;
