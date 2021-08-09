import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { PrjRegiContainer } from './ProjectRegiStyled.jsx';
import logo from '../../Img/logo.svg';
import headerIcon from '../../Img/Icons/headerIcon.png';
import testVid from '../../Img/testVid.mp4';
import testTumb from '../../Img/no_image.png';
import VideoModal from '../../component/Modals/Video/VideoModal';
import { getSingleFileFromBlob } from '../../library/azureBlob.js';
const ProjectRegi = () => {
	let history = useHistory();
	const [pathRegi, setPathRegi] = useState(null); // 페이지네이션 관리
	const [competitionData, setCompetitionData] = useState({
		desc: '',
		videos: [],
	});
	const [vidEditorData, setVidEditorData] = useState({ desc: '', videos: [] });
	const [vidCreatorData, setVidCreatorData] = useState({
		desc: '',
		videos: [],
	});
	const [irData, setIrData] = useState({ desc: '', videos: [] });

	const [videoModalProps, setvideoModalProps] = useState({
		open: false,
		src: '',
	});
	const handleChekcboxChange = (e) => {
		const checkBoxes = document.getElementsByName('prjselect');
		checkBoxes.forEach((ele) => {
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
			.get(`${process.env.REACT_APP_U2_DB_HOST}/common/code/challengetarget`)
			.then((res) => {
				console.log(res.data);
				console.log('project regi useEffect response: ', res);

				if (Array.isArray(res.data)) {
					res.data.forEach((ele) => {
						if (ele.cd === '1') {
							setCompetitionData((prestate) => ({
								...prestate,
								desc: ele.codeDesc,
							}));
						}
						if (ele.cd === '2') {
							setVidEditorData((prestate) => ({
								...prestate,
								desc: ele.codeDesc,
							}));
						}
						if (ele.cd === '3') {
							setVidCreatorData((prestate) => ({
								...prestate,
								desc: ele.codeDesc,
							}));
						}
						if (ele.cd === '4') {
							setIrData((prestate) => ({ ...prestate, desc: ele.codeDesc }));
						}
					});
				}
			})
			.catch((err) => {
				throw err;
			});
		axios
			.get(process.env.REACT_APP_U2_DB_HOST + '/Campaign/challengetarget')
			.then((response) => {
				const datas = response.data;
				console.log('video data: ', datas);
				console.log(
					'competition videos: ',
					datas.filter((el) => el.challengeTargetCode === 1),
				);
				setCompetitionData((pre) => ({
					...pre,
					videos: datas.filter((el) => el.challengeTargetCode === 1),
				}));
				setVidEditorData((pre) => ({
					...pre,
					videos: datas.filter((el) => el.challengeTargetCode === 2),
				}));
				setVidCreatorData((pre) => ({
					...pre,
					videos: datas.filter((el) => el.challengeTargetCode === 3),
				}));
				setIrData((pre) => ({
					...pre,
					videos: datas.filter((el) => el.challengeTargetCode === 4),
				}));
			});
	}, []);

	return (
		<PrjRegiContainer className="projectregi_contents_wrap">
			<VideoModal
				src={videoModalProps.src}
				open={videoModalProps.open}
				handleModalClose={() => {
					setvideoModalProps({ open: false, src: '' });
				}}
			/>
			<section className="projectregi_section">
				{/*
        video modal
         */}
				<button
					onClick={() => {
						setvideoModalProps({
							open: true,
							src: 'https://www.youtube.com/embed/Jfrjeg26Cwk',
						});
					}}
				>
					show modal
				</button>
				<div className="projectregi_title_area">
					<div>프로젝트 등록</div>
					<div className="projectregi_title_style"></div>
				</div>
				<section className="projectregi_title_sub">
					<img src={headerIcon} alt="" />
					<div>대상선택</div>
				</section>
				{/* <ModalVideo isOpen={true} videoId={'KGqN8wLdHK4'}></ModalVideo> */}
				<section className="projectregi_items prjSelect">
					<section className="projectregi_item">
						<div className="projectregi_item_innerwrap">
							<section className="projectregi_checkbox_area">
								<div className="projectregi_checkbox_iconwrap">
									<img src="/img/trophy.png" alt="공모전" />
								</div>
								<div className="projectregi_checkbox_text">공모전</div>
								<div className="projectregi_checkbox">
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
							</section>
							<section className="contentArea">
								<div className="contentTop">
									<div className="contentTitle">
										<div>예제 영상</div>
									</div>
									<p>
										{competitionData.desc !== null
											? competitionData.desc
											: null}
									</p>
								</div>
								<div className="contentBot">
									{/* <div className="projectregi_content_item slide_inactive">
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
									</div> */}
									{competitionData.videos.map((videodata) => {
										return (
											<div className="projectregi_content_item slide_inactive">
												<div className="projectregi_content_img_wrap">
													<img
														src={getSingleFileFromBlob(videodata.img)}
														alt={videodata.img}
														onClick={() => {
															setvideoModalProps({
																open: true,
																src: videodata.url,
															});
														}}
													/>
												</div>
											</div>
										);
									})}
								</div>
							</section>
						</div>
					</section>

					<section className="projectregi_item">
						<div className="projectregi_item_innerwrap">
							<section className="projectregi_checkbox_area">
								<div className="projectregi_checkbox_iconwrap">
									<img src="/img/film-editing.png" alt="전문영상편집자" />
								</div>
								<div className="projectregi_checkbox_text">전문영상 편집자</div>
								<div className="projectregi_checkbox">
									<input
										type="checkbox"
										className="ckBox"
										name="prjselect"
										value="videditor"
										onChange={handleChekcboxChange}
									/>
								</div>
							</section>
							<section className="contentArea">
								<div className="contentTop">
									<div className="contentTitle">
										<div>예제 영상</div>
									</div>
									<p>
										{vidEditorData.desc !== null ? vidEditorData.desc : null}
									</p>
								</div>
								<div className="contentBot">
									{vidEditorData.videos.map((videodata) => {
										return (
											<div className="projectregi_content_item slide_inactive">
												<div className="projectregi_content_img_wrap">
													<img
														src={getSingleFileFromBlob(videodata.img)}
														alt={videodata.img}
														onClick={() => {
															setvideoModalProps({
																open: true,
																src: videodata.url,
															});
														}}
													/>
												</div>
											</div>
										);
									})}
								</div>
							</section>
						</div>
					</section>

					<section className="projectregi_item">
						<div className="projectregi_item_innerwrap">
							<section className="projectregi_checkbox_area">
								<div className="projectregi_checkbox_iconwrap">
									<img
										src="/img/video-editing-app.png"
										alt="영상크리에이터인플루언서"
									/>
								</div>
								<div className="projectregi_checkbox_text vidcreator_checbox_text">
									영상 크리에이터/인플루언서
								</div>
								<div className="projectregi_checkbox projectregi_vidcreator_checkbox">
									<input
										type="checkbox"
										className="ckBox"
										name="prjselect"
										value="vidcreator"
										onChange={handleChekcboxChange}
										chekced={false}
									/>
								</div>
							</section>
							<section className="contentArea">
								<div className="contentTop">
									<div className="contentTitle">
										<div>예제 영상</div>
									</div>
									<p>
										{vidCreatorData.desc !== null ? vidCreatorData.desc : null}
									</p>
								</div>
								<div className="contentBot">
									{vidCreatorData.videos.map((videodata) => {
										return (
											<div className="projectregi_content_item slide_inactive">
												<div className="projectregi_content_img_wrap">
													<img
														src={getSingleFileFromBlob(videodata.img)}
														alt={videodata.img}
														onClick={() => {
															setvideoModalProps({
																open: true,
																src: videodata.url,
															});
														}}
													/>
												</div>
											</div>
										);
									})}
								</div>
							</section>
						</div>
					</section>

					<section className="projectregi_item projectregi_item_ir">
						<div className="projectregi_item_innerwrap">
							<section className="projectregi_checkbox_area">
								<div className="projectregi_checkbox_iconwrap">
									<img src="/img/teacher.png" alt="강사채용" />
								</div>
								<div className="projectregi_checkbox_text">강사 채용</div>
								<div className="projectregi_checkbox ">
									<input
										type="checkbox"
										className="ckBox"
										name="prjselect"
										value="ir"
										onChange={handleChekcboxChange}
										chekced={false}
									/>
								</div>
							</section>
							<section className="contentArea">
								<div className="contentTop">
									<div className="contentTitle">
										<div>예제 영상</div>
									</div>
									<p>{irData.desc !== null ? irData.desc : null}</p>
								</div>
								<div className="contentBot">
									{irData.videos.map((videodata) => {
										return (
											<div className="projectregi_content_item slide_inactive">
												<div className="projectregi_content_img_wrap">
													<img
														src={
															videodata.img
																? getSingleFileFromBlob(videodata.img)
																: testTumb
														}
														alt={videodata.img}
														onClick={() => {
															setvideoModalProps({
																open: true,
																src: videodata.url,
															});
														}}
													/>
												</div>
											</div>
										);
									})}
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
						className="projectregi_btn projectregi_btn_next"
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
