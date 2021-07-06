import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MainContainer } from './CreatorMarketStyled.jsx';
import TopView from './TopView/TopView.jsx';
import TopAds from './TopAds/TopAds.jsx';
import ContentElement from './ContentElement/ContentElement.jsx';
import bannerImg from '../../Img/cmBannerImg.png';
import { useSelector } from 'react-redux';
import { BiLoader } from 'react-icons/bi';
const server = process.env.REACT_APP_U2_DB_HOST;

const Main = props => {
  const [tabActive, setTabActive] = useState('entire'); // 탭 선택 소팅
  const [challenges, setChallengs] = useState(null); // 챌린지 데이터
  const [isLoadingChallenges, setIsLoadingChallenges] = useState(null);
  const [moreActive, setMoreActive] = useState(false);
  const userInfo = useSelector(state => state.userInfo);
  // useEffect(()=>{
  //   axios.get(`${server}/api/Campaign/challengemaster`).then(res=>{
  //     setData(res.data)
  //   }
  //   )
  // }, [])
  const handleRequestClick = data => {
    console.log(props);
    if (!userInfo.email) {
      props.history.push('/login');
    } else {
      props.history.push('/prjregi');
    }
  };

  useEffect(() => {
    setIsLoadingChallenges(true);
    axios
      .get(`https://u2-rest-dev.azurewebsites.net/api/Campaign/challenge`)
      .then(res => {
        console.log(res.data);
        setChallengs(res.data);
        setIsLoadingChallenges(false);
      })
      .catch(err => {
        setIsLoadingChallenges(null);
        throw err;
      });
  }, []);
  return (
    <MainContainer className="contents_wrap">
      <div className="creatormarket_section">
        <section className="topWrap">
          <TopView challenges={challenges} />
          <TopAds handleRequestClick={handleRequestClick} />
        </section>
        <section className="challange_wrap">
          <section className="challange_tab">
            <div
              className={
                tabActive === 'entire' ? 'tab_entire tab_active' : 'tab_entire'
              }
              onClick={() => {
                setTabActive('entire');
              }}
            >
              <span>전체</span>
            </div>
            <div
              className={
                tabActive === 'compte' ? 'tab_compte tab_active' : 'tab_compte'
              }
              onClick={() => {
                setTabActive('compte');
              }}
            >
              <span>공모전</span>
            </div>
            <div
              className={
                tabActive === 'promo' ? 'tab_promo tab_active' : 'tab_promo'
              }
              onClick={() => {
                setTabActive('promo');
              }}
            >
              <span>영상 크리에이터/인플루언서</span>
            </div>
            <div
              className={tabActive === 'cv' ? 'tab_cv tab_active' : 'tab_cv'}
              onClick={() => {
                setTabActive('cv');
              }}
            >
              <span>전문영상 편집자</span>
            </div>
            <div
              className={tabActive === 've' ? 'tab_ve tab_active' : 'tab_ve'}
              onClick={() => {
                setTabActive('ve');
              }}
            >
              <span>강사채용</span>
            </div>
            <div
              className={tabActive === 'ir' ? 'tab_ir tab_active' : 'tab_ir'}
              onClick={() => {
                setTabActive('ir');
              }}
            >
              <span>강사모집</span>
            </div>
          </section>

          <div className="challange_ele">
            {/* {isLoadingChallenges === null && <div>"no data"</div>}
						{isLoadingChallenges === false
							? moreActive
								? challenges.slice(0, 3).map((ele, idx) => {
										return (
											<ContentElement
												challenge={ele}
												key={`${ele.challengeIdx}`}
											/>
										);
								  })
								: challenges.map((ele, idx) => {
										return (
											<ContentElement
												challenge={ele}
												key={`${ele.challengeIdx}`}
											/>
										);
								  })
							: 'loading'} */}
            {/* {(() => {
							switch (isLoadingChallenges) {
								case true: {
									return <BiLoader className="BiLoader" />;
								}
								case false: {
									return moreActive
										? challenges.slice(0, 3).map((ele, idx) => {
												return (
													<ContentElement
														challenge={ele}
														key={`${ele.challengeIdx}`}
													/>
												);
										  })
										: challenges.map((ele, idx) => {
												return (
													<ContentElement
														challenge={ele}
														key={`${ele.challengeIdx}`}
													/>
												);
										  });
								}
								case null: {
									return 'no data';
								}
								default: {
									break;
								}
							}
						})()} */}
          </div>
        </section>
        <section className="challenge_more_btn_area">
          {' '}
          <button
            className="challange_more_btn"
            onClick={() => {
              setMoreActive(!moreActive);
            }}
          >
            {moreActive ? '+ 더보기' : '- 더보기'}
          </button>
        </section>
        <div className="challenge_banner_area">
          <img
            src={bannerImg}
            alt={bannerImg}
            className="challenge_banner_img"
          />

          <div className="challenge_banner_btn_wrap">
            <button className="challenge_banner_btn">
              <Link to="/prjregi">프로젝트 등록</Link>
            </button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;

// <section className="campArea">
//           <div className="campListWrap">
//             <div className="campTitle">
//               <div className="campTitle_top">U2 와 함께한</div>
//               <div className="campTitle_bottom">스마트한 영상 제작</div>
//             </div>

//             <div className="campList"></div>
//           </div>

//           <div className="campSlideWrap">{ <CampaignSlide />}</div>
//         </section>
