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
import Pagination2 from '../../component/Pagination/Pagination2.jsx';
import { paginate } from '../../component/Pagination/paginate.js';

const Main = (props) => {
	const [tabActive, setTabActive] = useState(0); // 탭 선택 소팅
	//0: 전체, 1: 공모전, 2: 전문영상 편집자 , 3: 영상 크리에이터/언플루언서, 4: 강사채용
	const [challenges, setChallengs] = useState(null); // 챌린지 데이터
	const [isLoadingChallenges, setIsLoadingChallenges] = useState(null);
	const [moreActive, setMoreActive] = useState(false);
	const userInfo = useSelector((state) => state.userInfo);

	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 6; //테스트를 위해 한페이지당 4개만 보여줌. 데이터가 많아지면 3단 * 2 = 6개씩 보여줘야함
	const pagedChallenges = paginate(challenges, currentPage, pageSize);
	// useEffect(()=>{
	//   axios.get(`${server}/api/Campaign/challengemaster`).then(res=>{
	//     setData(res.data)
	//   }
	//   )
	// }, [])
	const handleRequestClick = (data) => {
		// console.log(props);
		if (!userInfo.email) {
			if (window.confirm('로그인이 필요한 서비스입니다. 로그인하시겠습니까?')) {
				props.history.push('/login');
			}
		} else {
			props.history.push('/prjregi');
		}
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		setIsLoadingChallenges(true);
		// console.log('server: ', server);
		axios
			.get(process.env.REACT_APP_U2_DB_HOST + `/Campaign/challenge`)
			.then((res) => {
				console.log(res.data);
				setChallengs(res.data);
				setIsLoadingChallenges(false);
			})
			.catch((err) => {
				setIsLoadingChallenges(null);
				throw err;
			});

		console.log('.env 설정: ');
		console.log(
			'process.env.REACT_APP_U2_DB_HOST: ',
			process.env.REACT_APP_U2_DB_HOST,
		);
		console.log(
			'process.env.REACT_APP_HOST_URL: ',
			process.env.REACT_APP_HOST_URL,
		);
		console.log(
			'process.env.REACT_APP_API_URL: ',
			process.env.REACT_APP_API_URL,
		);

		console.log(
			'process.env.REACT_APP_GOOGLE_CLIENTID: ',
			process.env.REACT_APP_GOOGLE_CLIENTID,
		);
	}, []);
	return (
		<MainContainer className="contents_wrap">
			<div className="creatormarket_section">
				<section className="topWrap">
					<TopView challenges={challenges} />
					<TopAds handleRequestClick={handleRequestClick} />
				</section>
				<section className="challenge_wrap">
					<section className="challenge_tab">
						<div
							className={
								tabActive === 0 ? 'tab_entire tab_active' : 'tab_entire'
							}
							onClick={() => {
								setTabActive(0);
							}}
						>
							<span>전체</span>
						</div>
						<div
							className={
								tabActive === 1 ? 'tab_compte tab_active' : 'tab_compte'
							}
							onClick={() => {
								setTabActive(1);
							}}
						>
							<span>공모전</span>
						</div>
						<div
							className={tabActive === 3 ? 'tab_cv tab_active' : 'tab_cv'}
							onClick={() => {
								setTabActive(3);
							}}
						>
							<span>영상크리에이터 / 인플루언서</span>
						</div>
						<div
							className={tabActive === 2 ? 'tab_ve tab_active' : 'tab_ve'}
							onClick={() => {
								setTabActive(2);
							}}
						>
							<span>전문영상 편집자</span>
						</div>
						<div
							className={tabActive === 4 ? 'tab_ir tab_active' : 'tab_ir'}
							onClick={() => {
								setTabActive(4);
							}}
						>
							<span>강사채용</span>
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
						{(() => {
							switch (isLoadingChallenges) {
								case true: {
									return <BiLoader className="BiLoader" />;
								}
								case false: {
									return moreActive
										? challenges.slice(0, 3).map((ele, idx) => {
												console.log('ele: ', ele);
												if (tabActive === 0) {
													return (
														<ContentElement
															challenge={ele}
															key={`${ele.challengeIdx}`}
															history={props.history}
														/>
													);
												}
												if (ele.challengeTargetCode === tabActive) {
													return (
														<ContentElement
															challenge={ele}
															key={`${ele.challengeIdx}`}
															history={props.history}
														/>
													);
												}
										  })
										: pagedChallenges.map((ele, idx) => {
												console.log('ele: ', ele);
												if (tabActive === 0) {
													return (
														<ContentElement
															challenge={ele}
															key={`${ele.challengeIdx}`}
															history={props.history}
														/>
													);
												}
												if (ele.challengeTargetCode === tabActive) {
													return (
														<ContentElement
															challenge={ele}
															key={`${ele.challengeIdx}`}
															history={props.history}
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
						{!moreActive && isLoadingChallenges === false && (
							<Pagination2
								className="creatormarket_pagenation"
								itemsCount={
									challenges.filter(
										(challenge) =>
											challenge.challengeTargetCode === tabActive ||
											tabActive === 0,
									).length
								}
								pageSize={pageSize}
								handlePageChange={handlePageChange}
							></Pagination2>
						)}
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
