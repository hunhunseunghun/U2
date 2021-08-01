import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MainContainer } from './CreatorMarketStyled.jsx';
import TopView from './TopView/TopView.jsx';
import TopAds from './TopAds/TopAds.jsx';
import Loader from 'react-loader-spinner';
import ContentElement from './ContentElement/ContentElement.jsx';
import bannerImg from '../../Img/cmBannerImg.png';
import { useSelector } from 'react-redux';
import { BiLoader } from 'react-icons/bi';

import Pagination2 from '../../component/Pagination/Pagination2.jsx';
import { paginate } from '../../component/Pagination/paginate.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Main = props => {
  const [tabActive, setTabActive] = useState(0); // 탭 선택 소팅
  //0: 전체, 1: 공모전, 2: 전문영상 편집자 , 3: 영상 크리에이터/언플루언서, 4: 강사채용
  const [challenges, setChallengs] = useState(null); // 챌린지 데이터
  // const [sortedChallenges, setSortedChallenges] = useState([]);
  const [isLoadingChallenges, setIsLoadingChallenges] = useState(null);
  const [moreActive, setMoreActive] = useState(false);
  // const [mobileSize, setMobileSize] = useState(window.innerWidth);
  const userInfo = useSelector(state => state.userInfo);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; //테스트를 위해 한페이지당 4개만 보여줌. 데이터가 많아지면 3단 * 2 = 6개씩 보여줘야함
  const [totalItems, setTotalItems] = useState(0);
  // const pagedChallenges = paginate(sortedChallenges, currentPage, pageSize);

  // 페이지네이션 -> filter_section 스크롤 이동
  useEffect(() => {
    var location =
      document.querySelector('#creatormarket_filter').offsetTop - 60;
    window.scrollTo({ top: location, behavior: 'smooth' });
  }, [currentPage]);

  // mobile size handling
  //모바일 creator_filter_section
  const [filterDropdown, setFilterDropdown] = useState(false);

  const [mobileSize, setMobileSize] = useState(window.innerWidth);

  const handleResize = () => {
    setMobileSize(window.innerWidth);
    mobileSize > 900 && setFilterDropdown(false);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //mobile touch slider func---

  //--------badge 관련
  const [applies, setApplies] = useState(null);
  const [submits, setSubmits] = useState(null);
  const [wishes, setWishes] = useState(null);

  // console.log(pagedChallenges);
  // console.log(mobileTypes);
  let walk;
  let startX;
  let scrollValue;

  //----------------------------------

  const handleRequestClick = data => {
    // console.log(props);
    if (!userInfo.email) {
      if (window.confirm('로그인이 필요한 서비스입니다. 로그인하시겠습니까?')) {
        props.history.push('/login');
      }
    } else {
      props.history.push('/prjregi');
    }
  };

  const handlePageChange = page => {
    setCurrentPage(page);
    axios
      .get(
        process.env.REACT_APP_U2_DB_HOST +
          `/Campaign/challenge?targetCode=${tabActive}&p=${page}&size=${pageSize}`
      )
      .then(res => {
        // console.log(res.data);
        console.log('paged Challenges: ', res.data);
        setChallengs(res.data.entities);
        setTotalItems(res.data.total);
        // setSortedChallenges(res.data);
        setIsLoadingChallenges(false);
      })
      .catch(err => {
        setIsLoadingChallenges(null);
        throw err;
      });
  };
  const handleTabChange = tab => {
    setTabActive(tab);
    axios
      .get(
        process.env.REACT_APP_U2_DB_HOST +
          `/Campaign/challenge?targetCode=${tab}&p=${currentPage}&size=${pageSize}`
      )
      .then(res => {
        // console.log(res.data);
        console.log('paged Challenges: ', res.data);
        setChallengs(res.data.entities);
        setTotalItems(res.data.total);
        // setSortedChallenges(res.data);
        setIsLoadingChallenges(false);
      })
      .catch(err => {
        setIsLoadingChallenges(null);
        throw err;
      });
    // if (tab === 0) {
    // 	setSortedChallenges(challenges);
    // 	return;
    // }
    // var newArr = challenges.filter((el) => el.challengeTargetCode === tab);
    // setSortedChallenges(newArr);
  };

  useEffect(() => {
    setIsLoadingChallenges(true);

    //------------------------badge
    var config = {
      method: 'get',
      url: process.env.REACT_APP_U2_DB_HOST + '/Campaign/challengebadge',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };
    axios(config)
      .then(response => {
        // console.log('response.data: ', response.data);
        setApplies(new Set(response.data.applies));
        setSubmits(new Set(response.data.submits));
        setWishes(new Set(response.data.wishes));

        console.log('setapplies', response.data.applies);
        console.log('setapplies', response.data.submits);
        console.log('setapplies', response.data.wishes);
      })
      .catch(err => console.log(err));
    //----------------------------badge end
    // console.log('server: ', server);
    axios
      .get(
        process.env.REACT_APP_U2_DB_HOST +
          `/Campaign/challenge?targetCode=${tabActive}&p=${currentPage}&size=${pageSize}`
      )
      .then(res => {
        // console.log(res.data);
        console.log('paged Challenges: ', res.data);
        setChallengs(res.data.entities);
        setTotalItems(res.data.total);
        // setSortedChallenges(res.data);
        setIsLoadingChallenges(false);
      })
      .catch(err => {
        setIsLoadingChallenges(null);
        throw err;
      });

    console.log('.env 설정: ');
    console.log(
      'process.env.REACT_APP_U2_DB_HOST: ',
      process.env.REACT_APP_U2_DB_HOST
    );
    console.log(
      'process.env.REACT_APP_HOST_URL: ',
      process.env.REACT_APP_HOST_URL
    );
    console.log(
      'process.env.REACT_APP_API_URL: ',
      process.env.REACT_APP_API_URL
    );

    console.log(
      'process.env.REACT_APP_GOOGLE_CLIENTID: ',
      process.env.REACT_APP_GOOGLE_CLIENTID
    );
  }, []);
  return (
    <MainContainer className="contents_wrap">
      <div className="creatormarket_section">
        <section className="topWrap">
          <TopView challenges={challenges} />
          <TopAds handleRequestClick={handleRequestClick} />
        </section>
        <div id="creatormarket_filter" className="creatormarket_filter_section">
          <div className="creatormarket_ft_deco">
            <div
              // className="ft_title mobile_view "
              className={
                filterDropdown
                  ? 'ft_title mobile_view filter_arrow_up'
                  : 'ft_title mobile_view filter_arrow_down'
              }
              onClick={() => {
                setFilterDropdown(!filterDropdown);
              }}
            >
              필터 <img src="/img/ic_arrow_down.svg" />
            </div>
            <div
              className={
                filterDropdown
                  ? 'sub_filter_section ft_price'
                  : 'sub_filter_section_inactive'
              }
            >
              <div
                className="ft_title"
                onClick={() => {
                  handleTabChange(0);
                  setFilterDropdown(!filterDropdown);
                }}
              >
                전체
                <div className={tabActive === 0 ? 'style_mm_t' : null}></div>
              </div>
              <div
                className="ft_title"
                onClick={() => {
                  handleTabChange(1);
                  setFilterDropdown(!filterDropdown);
                }}
              >
                공모전
                <div className={tabActive === 1 ? 'style_mm_t' : null}></div>
              </div>
              <div
                className="ft_title"
                onClick={() => {
                  handleTabChange(3);
                  setFilterDropdown(!filterDropdown);
                }}
              >
                영상크리에이터 / 인플루언서
                <div className={tabActive === 3 ? 'style_mm_t' : null}></div>
              </div>
              <div
                className="ft_title"
                onClick={() => {
                  handleTabChange(2);
                  setFilterDropdown(!filterDropdown);
                }}
              >
                전문영상 편집자
                <div className={tabActive === 2 ? 'style_mm_t' : null}></div>
              </div>
              <div
                className="ft_title"
                onClick={() => {
                  handleTabChange(4);
                  setFilterDropdown(!filterDropdown);
                }}
              >
                강사채용
                <div className={tabActive === 4 ? 'style_mm_t' : null}></div>
              </div>
            </div>
          </div>
          {mobileSize > 900 && (
            <div className="creatormarket_fr_left_section">
              <div
                className="creatormarket_ftr_select_item"
                onClick={() => {
                  handleTabChange(0);
                }}
              >
                <div
                  className={
                    tabActive === 0
                      ? 'creatormarket_ftr_selected creatormarket_ftr_selected_active'
                      : 'creatormarket_ftr_selected'
                  }
                >
                  전체
                  <div className="style_mm_t"></div>
                </div>
              </div>
              <div
                className="creatormarket_ftr_select_item"
                onClick={() => {
                  handleTabChange(1);
                }}
              >
                <div
                  className={
                    tabActive === 1
                      ? 'creatormarket_ftr_selected creatormarket_ftr_selected_active'
                      : 'creatormarket_ftr_selected'
                  }
                >
                  공모전
                  <div className="style_mm_t"></div>
                </div>
              </div>
              <div
                className="creatormarket_ftr_select_item"
                onClick={() => {
                  handleTabChange(3);
                }}
              >
                <div
                  className={
                    tabActive === 3
                      ? 'creatormarket_ftr_selected creatormarket_ftr_selected_active'
                      : 'creatormarket_ftr_selected'
                  }
                >
                  영상크리에이터 / 인플루언서
                  <div className="style_mm_t"></div>
                </div>
              </div>
              <div
                className="creatormarket_ftr_select_item"
                onClick={() => {
                  handleTabChange(2);
                }}
              >
                <div
                  className={
                    tabActive === 2
                      ? 'creatormarket_ftr_selected creatormarket_ftr_selected_active'
                      : 'creatormarket_ftr_selected'
                  }
                >
                  전문영상 편집자
                  <div className="style_mm_t"></div>
                </div>
              </div>
              <div
                className="creatormarket_ftr_select_item"
                onClick={() => {
                  handleTabChange(4);
                }}
              >
                <div
                  className={
                    tabActive === 4
                      ? 'creatormarket_ftr_selected creatormarket_ftr_selected_active'
                      : 'creatormarket_ftr_selected'
                  }
                >
                  강사채용
                  <div className="style_mm_t"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <section className="challenge_wrap">
          {mobileSize > 900 ? (
            <div className="challenge_ele">
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
              {(() => {
                switch (isLoadingChallenges) {
                  case true: {
                    // return <BiLoader className="BiLoader" />;
                    return (
                      <section className="creaotrmarekt_loading_area">
                        {' '}
                        <Loader
                          className="creatormarket_loader"
                          type="Oval"
                          color="#f84235"
                        />
                      </section>
                    );
                  }
                  case false: {
                    return moreActive
                      ? challenges.slice(0, 3).map((ele, idx) => {
                          // console.log('ele: ', ele);
                          if (tabActive === 0) {
                            return (
                              <ContentElement
                                challenge={ele}
                                key={`${ele.challengeIdx}`}
                                history={props.history}
                                badgeData={{
                                  applies: applies,
                                  submits: submits,
                                  wishes: wishes,
                                }}
                              />
                            );
                          }
                          if (ele.challengeTargetCode === tabActive) {
                            return (
                              <ContentElement
                                challenge={ele}
                                key={`${ele.challengeIdx}`}
                                history={props.history}
                                badgeData={{
                                  applies: applies,
                                  submits: submits,
                                  wishes: wishes,
                                }}
                              />
                            );
                          }
                        })
                      : challenges.map((ele, idx) => {
                          // console.log('ele: ', ele);
                          if (tabActive === 0) {
                            return (
                              <ContentElement
                                challenge={ele}
                                key={`${ele.challengeIdx}`}
                                history={props.history}
                                idx={idx}
                                badgeData={{
                                  applies: applies,
                                  submits: submits,
                                  wishes: wishes,
                                }}
                              />
                            );
                          }
                          if (ele.challengeTargetCode === tabActive) {
                            return (
                              <ContentElement
                                challenge={ele}
                                key={`${ele.challengeIdx}`}
                                history={props.history}
                                idx={idx}
                                badgeData={{
                                  applies: applies,
                                  submits: submits,
                                  wishes: wishes,
                                }}
                              />
                            );
                          }
                        });
                  }
                  case null: {
                    return 'no data';
                  }
                  default: {
                    break;
                  }
                }
              })()}
            </div>
          ) : (
            <Swiper
              slidesPerView={mobileSize < 430 ? 2 : 3}
              spaceBetween={10}
              freeMode={true}
              mousewheel={true}
              keyboard={true}
              // navigation={true}
              className="challange_mobile_ele mySwiper"
            >
              {/* {challenges.map((ele, idx) => (
                <ContentElement
                  challenge={ele}
                  key={`${ele.challengeIdx}`}
                  history={props.history}
                  badgeData={{
                    applies: applies,
                    submits: submits,
                    wishes: wishes,
                  }}
                />
              ))} */}

              {(() => {
                switch (isLoadingChallenges) {
                  case true: {
                    return (
                      <section className="creaotrmarekt_loading_area">
                        {' '}
                        <Loader
                          className="creatormarket_loader"
                          type="Oval"
                          color="#f84235"
                        />
                      </section>
                    );
                  }
                  case false: {
                    return challenges.map((ele, idx) => {
                      // console.log('ele: ', ele);
                      if (tabActive === 0) {
                        return (
                          <SwiperSlide data-hash={`slide${idx}`}>
                            <ContentElement
                              challenge={ele}
                              key={`${ele.challengeIdx}`}
                              history={props.history}
                              badgeData={{
                                applies: applies,
                                submits: submits,
                                wishes: wishes,
                              }}
                            />
                          </SwiperSlide>
                        );
                      }
                      if (ele.challengeTargetCode === tabActive) {
                        return (
                          <SwiperSlide data-hash={`slide${idx}`}>
                            <ContentElement
                              challenge={ele}
                              key={`${ele.challengeIdx}`}
                              history={props.history}
                              badgeData={{
                                applies: applies,
                                submits: submits,
                                wishes: wishes,
                              }}
                            />
                          </SwiperSlide>
                        );
                      }
                    });
                  }
                  case null: {
                    return 'no data';
                  }
                  default: {
                    break;
                  }
                }
              })()}
            </Swiper>
          )}
        </section>
        {!moreActive && isLoadingChallenges === false && (
          <Pagination2
            className="creatormarket_pagenation"
            itemsCount={
              // challenges.filter(
              // 	(challenge) =>
              // 		challenge.challengeTargetCode === tabActive ||
              // 		tabActive === 0,
              // ).length
              totalItems
            }
            pageSize={pageSize}
            handlePageChange={handlePageChange}
          ></Pagination2>
        )}

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
