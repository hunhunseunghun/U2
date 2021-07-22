import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import PosterUploader from './PosterUploader/PosterUploader.jsx';
// import FileUploader from './FileUploader/FileUploader.jsx';
import Uploader from '../../../component/Uploader/Uploader';
import { RegiContainer } from './CompetitionRegiStyled.jsx';
import DropDown from './DropDown/DropDown.jsx';
import headerIcon from '../../../Img/Icons/headerIcon.png';
import downArrowIcon from '../../../Img/Icons/sortarrowdown.png';
// import QuillTextEditor from './QuillTextEditor/QuillTextEditor.jsx';
// import Summernote from '../../../component/Summernote/summernote.jsx';
// import { TiDeleteOutline } from 'react-icons/ti'; // 파일삭제 버튼 icon
import { DateTimePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { validateEmail } from '../../../library/validate.js';
import axios from 'axios';
import requestBodyGenerator from '../../../library/requestBodyGenerator.js';
import Ckeditor from '../../../component/Ckeditor5/Ckeditor5.jsx';
// import writeJsonFile from 'write-json-file';

const CompetitionRegi = () => {
	let history = useHistory();
	const userInfo = useSelector((state) => state.userInfo);
	if (!userInfo.email) {
		if (window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')) {
			history.push('/login');
		} else {
			history.push('/creatormarket');
		}
	}
	// posterfile upload handle---------------------------------
	// const [posterFile, setPosterFile] = useState([]); //포스터 파일, fileList 객체 -> 배열로 변환 후 -> posterfile에 할당
	const [posterFilePath, setPosterFilePath] = useState('Choose file to upload'); //포스터 파일 업로드 파일패스 , placholder 값
	// const [etcFile, setEtcFile] = useState(null);
	const [etcFilePath, setEtcFilePath] = useState('Choose file to upload');
	//handle date ----------------------------------------------
	//handle editor ---------------------------------------------
	const [title, setTitle] = useState('');
	const [organizer, setOrganizer] = useState('');
	const [sponsor, setSponsor] = useState('');
	const [webpageURL, setWebpageURL] = useState('');

	//접수방법
	const [isOnline, setIsOnline] = useState(false);
	const [isSnsRequired, setIsSnsRequired] = useState(true);
	const [isVideoProduction, setIsVideoProduction] = useState(false);
	const [isVidRequired, setIsVidRequired] = useState(true);
	const [isYoutube, setIsYoutube] = useState(false);
	const [isTiktok, setIsTiktok] = useState(false);
	const [isVimeo, setIsVimeo] = useState(false);
	const [isFileOrUrl, setFileOrUrl] = useState(false);

	//제출자 개인정보 수집
	const [isEmail, setIsEmail] = useState(false);
	const [emailRequired, setEmailRequired] = useState(true);

	const [isMobile, setIsMobile] = useState(false);
	const [mobileRequired, setMobileRequired] = useState(true);

	//접수기간
	const [startDate, setStartDate] = useState(new Date());
	const [finishDate, setFinishDate] = useState(new Date());
	//공지 시작일
	const [noticeStart, setNoticeStart] = useState(new Date());
	//시상종류
	const [contest, setContest] = useState(false);
	const [overseas, setOverseas] = useState(false);
	const [camp, setCamp] = useState(false);
	const [scatterPoint, setScatterPoint] = useState(false);
	const [intern, setIntern] = useState(false);
	const [full_time, setFull_time] = useState(false);
	const [prize, setPrize] = useState(false);
	const [toggleDirect, setToggleDirect] = useState(false);
	const [directInput, setDirectInput] = useState('');
	//공모 공지글
	const [CkText, setCkText] = useState('');
	//summernote
	// const viewRef = useRef(null);
	//댓글 기능
	const [isComment, setIsComment] = useState(true);

	//담당자
	const [admin, setAdmin] = useState('');
	const [adminExposure, setAdminExposure] = useState(false);
	//연락처
	const [mobile1, setMobile1] = useState('010');
	const [mobile2, setMobile2] = useState('');
	const [mobile3, setMobile3] = useState('');
	const [mobileExposure, setMobileExposure] = useState(false);
	//이메일
	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [emailExposure, setEmailExposure] = useState(false);

	//ownerIdx for API
	const [ownerIdx, setOwnerIdx] = useState(0);

	// handle modal state---------------------------------------
	const [isActive, setIsActive] = useState(false);
	const [defaultIdx, setDefaultIdx] = useState(0);
	const [competition, setCompetition] = useState([]);

	// handle datetime picker theme------------------------------
	const materialTheme = createMuiTheme({
		palette: {
			primary: {
				main: '#000000',
			},
		},
	});

	const handleStartDate = (date) => {
		setStartDate(date);
		setFinishDate(date);
	};

	const handleCkeditorValue = (event, editor) => {
		// console.log(text);
		const data = editor.getData();
		console.log(data);
		setCkText(data);
	};
	const handleEmailValidation = (email) => {
		const { isValid, error } = validateEmail(email);
		if (!isValid) {
			setEmailErr(error);
		} else {
			setEmail(email);
			setEmailErr(null);
		}
	};

	const handleNewData = (data) => {
		var newForm = {
			form: data.ownerCat ? '비즈프로필' : '개인',
			cat: data.ownerCat,
			companyName: data.company,
			email: data.email,
			phoneNumber: data.contact,
			snsId: data.socialMediaId,
			snsType: data.socialMediaCode,
			id: data.ownerIdx,
		};

		setCompetition([...competition, newForm]);
	};
	const checkRequiredField = () => {
		// if(competition && title && (isOnline || isVideoProduction) && (isEmail || isMobile) && )
		if (!(competition.length > 0)) return alert('주최사를 선택해주십시오');
		if (!title) return alert('공모전명을 입력해주십시오');
		if (!(isOnline || isVideoProduction))
			return alert('접수방법을 선택해주십시오');
		if (!(isEmail || isMobile))
			return alert('제출자 개인정보 수집을 선택해주십시오');
		// if (!(startDate > new Date()))
		// 	return alert('정확한 접수기간을 입력해주십시오');
		if (!(startDate < finishDate))
			return alert('접수 종료 기간을 입력해주십시오');
		if (!(noticeStart > new Date()))
			return alert('공지 시작일을 선택해주십시오');
		if (
			!(
				contest ||
				overseas ||
				camp ||
				scatterPoint ||
				intern ||
				full_time ||
				prize ||
				(toggleDirect && directInput)
			)
		)
			return alert('시상 종류를 선택해주십시오');
		if (!admin) return alert('담당자명을 입력해주십시오');
		if (!(mobile1 && mobile2 && mobile3))
			return alert('연락처를 입력해주십시오');
		if (!email) return alert('이메일을 입력해 주십시오');
		return true;
	};

	const handleSubmit = () => {
		if (checkRequiredField() !== true) return;
		console.log('userInfo: ', userInfo);
		var rewards = [];
		contest && rewards.push({ cat: 1 });
		overseas && rewards.push({ cat: 2 });
		camp && rewards.push({ cat: 3 });
		scatterPoint && rewards.push({ cat: 4 });
		intern && rewards.push({ cat: 5 });
		full_time && rewards.push({ cat: 6 });
		prize && rewards.push({ cat: 7 });
		toggleDirect && rewards.push({ cat: 99, rewarddesc: directInput });

		var videos = [];
		isYoutube && videos.push({ platform: 'YU' });
		isTiktok && videos.push({ platform: 'TT' });
		isVimeo && videos.push({ platform: 'VM' });

		const body = requestBodyGenerator(
			{
				memberIdx: userInfo.memberIdx,
				title: title,
				ownerIdx: ownerIdx,
				ownerName: competition[defaultIdx].companyName,
				ownerCat: competition[defaultIdx].cat,
				company: competition[defaultIdx].companyName,
				companyA: organizer,
				companyB: sponsor,
				url: webpageURL,
				// mainImage: posterFilePath ? posterFilePath : null,
				logo: posterFilePath ? posterFilePath : null,
				fileRef: etcFilePath ? etcFilePath : null,
				shareRequired: isOnline ? (isSnsRequired ? 2 : 1) : 0,
				filmRequired: isVideoProduction ? (isVidRequired ? 2 : 1) : 0,
				fileOrUrl: isFileOrUrl ? 1 : 0,
				emailRequired: isEmail ? (emailRequired ? 2 : 1) : 0,
				contactRequired: isMobile ? (mobileRequired ? 2 : 1) : 0,
				dateBegin: startDate,
				dateFin: finishDate,
				datePub: noticeStart,
				rewards: rewards,
				videos: videos,
				// challengeDesc: viewRef.current.getAttribute('content_data'),
				challengeDesc: CkText,
				commentAllowed: isComment,
				charge: admin,
				chargeShown: adminExposure,
				chargeContact: `${mobile1}-${mobile2}-${mobile3}`,
				chargeContactShown: mobileExposure,
				chargeeMail: email,
				chargeeMailShown: emailExposure,
			},
			'공모전',
		);
		var config = {
			method: 'post',
			url: process.env.REACT_APP_U2_DB_HOST + '/Campaign/challenge',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: body,
		};

		// TextFile();
		console.log('body: ', body);
		console.log(etcFilePath);
		console.log(posterFilePath);
		let isConfirmed = window.confirm('등록하시겠습니까?');
		if (isConfirmed) {
			axios(config)
				.then(async (response) => {
					console.log(response.data);
					// if(isStorageConfigured()){
					// 	// await uploadFileToBlob(etcFile)
					// }
					alert('등록이 완료되었습니다.');
					history.push('/creatormarket');
				})
				.catch((err) => {
					console.log(err);
					alert('공모전 등록에 실패했습니다.' + err);
				});
		}
	};
	useEffect(() => {
		//summernote config---------------------------
		// const script5 = document.createElement('script');
		// script5.innerHTML = `$(document).ready(function () {
		// $('#summernote').summernote()
		// $('#summernote').on('summernote.change', function(we, contents, $editable) {
		// 	const view = document.getElementById('view')
		// 	view.setAttribute('content_data', contents)
		//   });
		// });`;
		// script5.async = true;
		// document.body.appendChild(script5);
		//summernote config--------------------------- end

		//competition data -----------------------------
		console.log(userInfo);
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengeowners/${userInfo.memberIdx}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((response) => {
				// console.log('challenge owner');

				var data = response.data;
				console.log('profile data: ', data);
				var newForm = data.map((el) => {
					return {
						form: el.ownerCat ? '비즈프로필' : '개인',
						cat: el.ownerCat,
						companyName: el.company,
						email: el.email,
						phoneNumber: el.contact,
						snsId: el.socialMediaId,
						snsType: el.socialMediaCode,
						id: el.ownerIdx,
					};
				});
				setOwnerIdx(data[0].ownerIdx);
				setCompetition(newForm);
			})
			.catch((err) => console.log(err));
		//competition data ----------------------------- end
	}, []);
	return (
		<RegiContainer className="competitionregi_contents_wrap">
			<div className="competitionregi_section">
				<div className="competitionregi_title_area">
					<div>프로젝트 등록</div>
					<div className="competitionregi_title_style"></div>
				</div>
				<section className="competitionregi_title_sub">
					<img src={headerIcon} alt="" />
					<div>공모전 등록</div>
				</section>

				<section className="competitionregi_items">
					<section className="ele">
						<div className="menu">* 주최사</div>
						<div className="inputInfo competitionName">
							<div className="defaultCompetition">
								<div>
									{competition.length > 0 &&
										`${competition[defaultIdx].form} : ${competition[defaultIdx].companyName}`}
								</div>
								<img
									src={downArrowIcon}
									alt=""
									onClick={() => {
										setIsActive(true);
									}}
								/>
							</div>

							<DropDown
								setDefaultIdx={setDefaultIdx}
								setOwnerIdx={setOwnerIdx}
								competition={competition}
								setIsActive={setIsActive}
								isActive={isActive}
								handleNewData={handleNewData}
							/>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 공모전명</div>
						<div className="inputInfo">
							<div className="competition_name">
								<input
									type="text"
									className="competition_name_input"
									style={{ width: '280px' }}
									onChange={(e) => {
										setTitle(e.target.value);
									}}
									maxLength={20}
								/>
								공모전 명은 20자 이내로 작성해 주십시오.
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">주관사</div>
						<div className="inputInfo">
							<div className="competition_organizer">
								<input
									type="text"
									className="organizer"
									onChange={(e) => {
										setOrganizer(e.target.value);
									}}
									maxLength={20}
								/>
								주관사 명은 20자 이내로 작성해 주십시오
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">후원/협찬사</div>
						<div className="inputInfo">
							<div className="competition_sponsor">
								<input
									type="text"
									className="sponsor"
									onChange={(e) => {
										setSponsor(e.target.value);
									}}
									maxLength={20}
								/>
								후원사 명은 20자 이내로 작성해 주십시오
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">홈페이지 URL</div>
						<div className="inputInfo">
							<div className="competition_webpageURL">
								<input
									type="text"
									className="webpageURL"
									onChange={(e) => {
										setWebpageURL(e.target.value);
									}}
								/>
								홈페이지 주소가 정확하게 입력되었는지 확인해 주세요
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">포스터</div>
						<div className="inputInfo infoPoster">
							<div>공모전의 포스터가 있다면 업로드 해주세요</div>
							<Uploader
								setFilePath={setPosterFilePath}
								multiple={false}
								accept={'image/*'}
								memberIdx={userInfo.memberIdx}
								folder={'market-logo'}
							/>
						</div>
					</section>
					<section className="ele">
						<div className="menu">파일</div>
						<div className="inputInfo infoFiles">
							<div>공모전에 관련한 자료가 있다면 업로드 해주세요</div>

							<Uploader
								setFilePath={setEtcFilePath}
								multiple={false}
								accept={'*'}
								memberIdx={userInfo.memberIdx}
								folder={'market-fileref'}
							/>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 접수방법</div>
						<div className="inputInfo reception_info">
							<div className="reception_form">
								<table className="reception_table">
									<tbody>
										<tr>
											<td>
												{' '}
												<div className="table_checkarea">
													<input
														type="checkbox"
														onClick={() => {
															setIsOnline(!isOnline);
														}}
														checked={isOnline}
													/>
												</div>{' '}
											</td>
											<td>
												<div className="table_title">온라인 게시</div>
											</td>
											<td>
												{' '}
												<section className="reception_options">
													<div>
														<input
															type="checkbox"
															value="youtube"
															onClick={() => {
																setIsYoutube(!isYoutube);
															}}
															disabled={!isOnline}
														/>
														<label>Youtube</label>
													</div>
													<div>
														<input
															type="checkbox"
															value="Tiktok"
															onClick={() => {
																setIsTiktok(!isTiktok);
															}}
															disabled={!isOnline}
														/>
														<label>Tiktok</label>
													</div>
													<div>
														<input
															type="checkbox"
															value="Vimeo"
															onClick={() => {
																setIsVimeo(!isVimeo);
															}}
															disabled={!isOnline}
														/>
														<label>Vimeo</label>
													</div>
												</section>
											</td>
											<td>
												<section className="reception_options">
													<div>
														<input
															type="radio"
															name="snsRequired"
															value="필수"
															onClick={() => {
																setIsSnsRequired(true);
															}}
															disabled={!isOnline}
															defaultChecked
														/>
														<label>필수</label>
													</div>
													<div>
														<input
															type="radio"
															name="snsRequired"
															value="선택"
															onClick={() => {
																setIsSnsRequired(false);
															}}
															disabled={!isOnline}
														/>
														<label>선택사항</label>
													</div>
												</section>
											</td>
										</tr>
										<tr>
											<td>
												{' '}
												<div className="table_checkarea">
													<input
														type="checkbox"
														onClick={() => {
															setIsVideoProduction(!isVideoProduction);
														}}
													/>
												</div>{' '}
											</td>
											<td>
												<div className="table_title">영상 제작 제출</div>
											</td>
											<td>
												{' '}
												<section className="reception_options">
													<div>
														<input
															type="radio"
															name="vidReception"
															value="파일업로드"
															onClick={() => {
																setFileOrUrl(true);
															}}
															disabled={!isVideoProduction}
															defaultChecked
														/>
														<label>파일 업로드</label>
													</div>
													<div>
														<input
															type="radio"
															name="vidReception"
															value="URL공유"
															onClick={() => {
																setFileOrUrl(false);
															}}
															disabled={!isVideoProduction}
														/>

														<label>URL 공유</label>
													</div>
												</section>
											</td>
											<td>
												<section className="reception_options">
													<div>
														<input
															type="radio"
															name="vidRequired"
															value="필수"
															onClick={() => {
																setIsVidRequired(true);
															}}
															disabled={!isVideoProduction}
															defaultChecked
														/>
														<label>필수</label>
													</div>
													<div>
														<input
															type="radio"
															name="vidRequired"
															value="선택"
															onClick={() => {
																setIsVidRequired(false);
															}}
															disabled={!isVideoProduction}
														/>
														<label>선택사항</label>
													</div>
												</section>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 제출자 개인정보 수집</div>
						<div className="inputInfo reception_info">
							<div className="reception_form">
								<table className="reception_table">
									<tbody>
										<tr>
											<td>
												{' '}
												<div className="table_checkarea">
													<input
														type="checkbox"
														value="emailselected"
														onClick={() => {
															setIsEmail(!isEmail);
														}}
													/>
												</div>{' '}
											</td>
											<td>
												<div className="table_title">이메일</div>
											</td>
											<td>
												{' '}
												<section className="reception_options">
													<div>
														<input
															type="radio"
															name="emailRequired"
															value="필수"
															onClick={() => {
																setEmailRequired(true);
															}}
															disabled={!isEmail}
															defaultChecked
														/>
														<label>필수입력</label>
													</div>
													<div>
														<input
															type="radio"
															name="emailRequired"
															value="선택"
															onClick={() => {
																setEmailRequired(false);
															}}
															disabled={!isEmail}
														/>
														<label>선택입력</label>
													</div>
												</section>
											</td>
										</tr>
										<tr>
											<td>
												{' '}
												<div className="table_checkarea">
													<input
														type="checkbox"
														value="phoneselected"
														onClick={() => {
															setIsMobile(!isMobile);
														}}
													/>
												</div>{' '}
											</td>
											<td>
												<div className="table_title">전화번호</div>
											</td>
											<td>
												<section className="reception_options">
													<div>
														<input
															type="radio"
															name="phoneRquired"
															value="필수"
															onClick={() => {
																setMobileRequired(true);
															}}
															defaultChecked
															disabled={!isMobile}
														/>
														<label>필수입력</label>
													</div>
													<div>
														<input
															type="radio"
															name="phoneRquired"
															value="선택"
															onClick={() => {
																setMobileRequired(false);
															}}
															disabled={!isMobile}
														/>
														<label>선택사항</label>
													</div>
												</section>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 접수기간</div>
						<div className="inputInfo chooseDate">
							<div className="inputStart">
								<ThemeProvider theme={materialTheme}>
									<DateTimePicker
										className="dtPicker"
										label="시작 날짜 선택"
										inputVariant="outlined"
										value={startDate}
										onChange={(date) => handleStartDate(date)}
										format="yyyy/MM/dd hh:mm a"
										disablePast={true}
										minDate={new Date()}
										minDateMessage={false}
										// minDateMessage="현 시각 이후부터 가능합니다"
										strictCompareDates={true}
									/>
								</ThemeProvider>
								<div className="input_sub_text">
									프로젝트 게시 시작일을 입력해주십시오
								</div>
							</div>
							<div className="inputFinish">
								<ThemeProvider theme={materialTheme}>
									<DateTimePicker
										className="dtPicker"
										label="종료 날짜 선택"
										inputVariant="outlined"
										value={finishDate}
										onChange={(date) => setFinishDate(date)}
										format="yyyy/MM/dd hh:mm a"
										disablePast={true}
										minDate={startDate}
										minDateMessage={false}
										strictCompareDates={true}
									/>
								</ThemeProvider>
								<div className="input_sub_text">
									프로젝트 게시 종료일을 입력해주십시오
								</div>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 공지시작일</div>
						<div className="inputInfo noticeDate">
							<div className="noticeStart">
								<ThemeProvider theme={materialTheme}>
									<DateTimePicker
										className="dtPicker"
										label="시작 날짜 선택"
										inputVariant="outlined"
										value={noticeStart}
										onChange={(date) => setNoticeStart(date)}
										format="yyyy/MM/dd hh:mm a"
										disablePast={true}
										minDate={new Date()}
										minDateMessage={false}
										// minDateMessage="현 시각 이후부터 가능합니다"
										strictCompareDates={true}
									/>
								</ThemeProvider>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 시상종류</div>
						<div className="inputInfo reward_type_from">
							<div className="reward_type_section">
								<div className="reward_type">
									{/* <div className="reward_type_title">현상공모:</div> */}
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="현상공모"
												onClick={() => {
													setContest(!contest);
												}}
											/>
											<div>현상공모</div>
										</div>
									</div>
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="해외탐방"
												onClick={() => {
													setOverseas(!overseas);
												}}
											/>
											<div>해외탐방</div>
										</div>
									</div>
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="국내캠프"
												onClick={() => {
													setCamp(!camp);
												}}
											/>
											<div>국내캠프</div>
										</div>
									</div>
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="입사시 가산점"
												onClick={() => {
													setScatterPoint(!scatterPoint);
												}}
											/>
											<div>입사시 가산점</div>
										</div>
									</div>
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="인턴채용"
												onClick={() => {
													setIntern(!intern);
												}}
											/>
											<div>인턴채용</div>
										</div>
									</div>
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="정직원채용"
												onClick={() => {
													setFull_time(!full_time);
												}}
											/>
											<div>정직원채용</div>
										</div>
									</div>
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="경품"
												onClick={() => {
													setPrize(!prize);
												}}
											/>
											<div>경품</div>
										</div>
									</div>
									<div className="reward_type_items">
										<div className="reward_type_item_wrap">
											<input
												type="checkbox"
												value="직접입력"
												onClick={() => {
													setToggleDirect(!toggleDirect);
												}}
											/>
											<div>직접입력 :</div>
											<input
												type="text"
												onChange={(e) => {
													setDirectInput(e.target.value);
												}}
												disabled={!toggleDirect}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">공모 공지글</div>
						<div className="inputInfo notice_editor_form">
							<Ckeditor
								className="ckeditor_wrap"
								onChange={handleCkeditorValue}
								data={`<p>제목</p><ol><li>응모 자격</li><li>-</li><li>응모 주제</li><li>-</li><li>시상 내역</li><li>-</li><li>응모 일정</li><li>-</li><li>제출 방법</li><li>-</li><li>접수 방법</li><li>-</li><li>심사 방법</li><li>-</li><li>유의 사항</li><li>-&nbsp;</li><li>문의 사항</li><li>-</li></ol>`}
							/>

							{/* <QuillTextEditor
								className="notice_editor"
								handleText={handleQuillText}
							/> */}
							{/* <Summernote viewRef={viewRef} placeHolder={placeHolder} /> */}
							{/* <div id="summernote">
								제목: <br />
								응모 자격: <br />
								응모 주제: <br />
								시상 내역: <br />
								응모 일정: <br />
								제출 방법: <br />
								접수 방법: <br />
								심사 방법: <br />
								유의 사항: <br />
								문의 사항: <br />
							</div>
							<div id="view" ref={viewRef}></div> */}
						</div>
					</section>
					<section className="ele">
						<div className="menu">댓글 기능</div>
						<section className="inputInfo replyfunc_form">
							<div className="replyfunc_items">
								<div className="replyfunc_item_wrap">
									<input
										type="radio"
										name="replyrequired"
										value="댓글사용"
										onClick={() => {
											setIsComment(true);
										}}
										defaultChecked
									/>
									<div>댓글 사용</div>
								</div>
							</div>
							<div className="replyfunc_items">
								<div className="replyfunc_item_wrap">
									{' '}
									<input
										type="radio"
										name="replyrequired"
										value="댓글사용안함"
										onClick={() => {
											setIsComment(false);
										}}
									/>
									<div>댓글 사용 안함</div>
								</div>
							</div>
						</section>
					</section>
					<section className="ele">
						<div className="menu">* 담당자</div>
						<section className="inputInfo manager_form">
							<div className="manager_items">
								<input
									type="text"
									onChange={(e) => {
										setAdmin(e.target.value);
									}}
								/>
							</div>
							<div className="manager_items manager_noexposure">
								<section>
									<input
										type="checkbox"
										name="noexposure"
										onClick={() => {
											setAdminExposure(!adminExposure);
										}}
									/>
									<div className="manager_noexposure_text">비노출</div>
								</section>
							</div>
						</section>
					</section>
					<section className="ele">
						<div className="menu">* 연락처</div>
						<section className="inputInfo phonenumber_form">
							<div className="phonenumber_items">
								<select
									name="areacode"
									id="areacode"
									onChange={(e) => {
										setMobile1(e.target.value);
									}}
								>
									<option value="010">010</option>
									<option value="02">02</option>
									<option value="031">031</option>
									<option value="032">032</option>
									<option value="033">033</option>
									<option value="041">041</option>
									<option value="042">042</option>
									<option value="043">043</option>
									<option value="044">044</option>
									<option value="051">051</option>
									<option value="052">052</option>
									<option value="053">053</option>
									<option value="054">054</option>
									<option value="055">055</option>
									<option value="061">061</option>
									<option value="062">062</option>
									<option value="063">063</option>
									<option value="064">064</option>
								</select>
							</div>
							-
							<div className="phonenumber_items">
								<input
									type="tel"
									name="phonenumber"
									placeholder="0000"
									maxlength="4"
									onChange={(e) => {
										setMobile2(e.target.value);
									}}
								/>
							</div>
							-
							<div className="phonenumber_items">
								<input
									type="tel"
									name="phonenumber"
									placeholder="0000"
									maxlength="4"
									onChange={(e) => {
										setMobile3(e.target.value);
									}}
								/>
							</div>
							<div className="manager_items phonenumber_noexposure">
								<section>
									<input
										type="checkbox"
										name="noexposure"
										onClick={() => {
											setMobileExposure(!mobileExposure);
										}}
									/>
									<div className="manager_noexposure_text">비노출</div>
								</section>
							</div>
						</section>
					</section>
					<section className="ele">
						<div className="menu">* 이메일</div>
						<section className="inputInfo email_form">
							<div className="email_items">
								<input
									type="text"
									onChange={(e) => {
										handleEmailValidation(e.target.value);
									}}
								/>
							</div>
							<div className="manager_items email_noexposure">
								<section>
									<input
										type="checkbox"
										name="email"
										onClick={() => {
											setEmailExposure(!emailExposure);
										}}
									/>
									<div className="email_noexposure_text">비노출</div>
								</section>
							</div>
							{emailErr && emailErr}
						</section>
					</section>
					<div className="competition_bottom_style"></div>
				</section>
				<section className="compeitiionregi_btn_area">
					{' '}
					<button
						className="compeitiionregi_btn"
						onClick={() => {
							history.push('/prjregi');
						}}
					>{`< 이전`}</button>
					<button
						className="compeitiionregi_btn compeitiionregi_btn_next"
						onClick={() => {
							handleSubmit();
						}}
					>{`등록하기`}</button>
				</section>
			</div>

			{/* <SetTaskCondition /> */}
		</RegiContainer>
	);
};

export default CompetitionRegi;
