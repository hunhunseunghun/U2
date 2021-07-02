import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { PrjRegiContainer } from './ProjectRegiStyled.jsx';
import logo from '../../Img/logo.svg';
import competitionLogo from '../../Img/Icons/trophy-solid.svg';
import vidEditorLogo from '../../Img/Icons/cut-solid.svg';
import vidCreatorLogo from '../../Img/Icons/video-solid.svg';
import irLogo from '../../Img/Icons/chalkboard-teacher-solid.svg';
import { IoMdArrowDropright } from 'react-icons/io';

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
                  <div className="ckText">공모전</div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contnetTop">
                  <div className="contentTitle">
                    <IoMdArrowDropright className="textIcon" />
                    <div>예제 영상</div>
                  </div>
                  <p>
                    {competitionData !== null ? competitionData.codeDesc : null}
                  </p>
                </div>
                <div className="contnetBot">
                  <div>광고영상</div>
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
                  <div className="ckText">전문영상 편집자</div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contnetTop">
                  <div className="contentTitle">
                    <IoMdArrowDropright className="textIcon" />
                    <div>예제 영상</div>
                  </div>
                  <p>
                    {vidEditorData !== null ? vidEditorData.codeDesc : null}
                  </p>
                </div>
                <div className="contnetBot">
                  <div>광고영상</div>
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
                <div className="projectregi_checkbox_bot">
                  <img src={vidCreatorLogo} alt={logo} className="ckIcon" />
                  <div className="projectregi_checkbox_creatorText">
                    영상 크리에이터 인플루언서
                  </div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contnetTop">
                  <div className="contentTitle">
                    <IoMdArrowDropright className="textIcon" />
                    <div>예제 영상</div>
                  </div>
                  <p>
                    {vidCreatorData !== null ? vidCreatorData.codeDesc : null}
                  </p>
                </div>
                <div className="contnetBot">
                  <div>광고영상</div>
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
                    value="ir"
                    onChange={handleChekcboxChange}
                    chekced={false}
                  />
                </div>
                <div className="projectregi_checkbox_bot">
                  <img src={irLogo} alt={logo} className="ckIcon" />
                  <div className="ckText">강사 채용</div>
                </div>
              </section>
              <section className="contentArea">
                <div className="contnetTop">
                  <div className="contentTitle">
                    <IoMdArrowDropright className="textIcon" />
                    <div>예제 영상</div>
                  </div>
                  <p>{irData !== null ? irData.codeDesc : null}</p>
                </div>
                <div className="contnetBot">
                  <div>광고영상</div>
                </div>
              </section>
            </div>
          </section>
        </section>

        <section className="btnArea">
          <button className="cancleBtn">취소</button>
          <button
            className="nextBtn"
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
