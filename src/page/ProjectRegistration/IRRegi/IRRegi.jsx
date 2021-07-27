import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import DropDown from './DropDown/DropDown.jsx';
import DropDown from '../../../component/OwnerDropDown/DropDown.jsx';
import RecruitmentAreasModal from './RecruitmentAreasModal/RecruitmentAreasModal.jsx';
import headerIcon from '../../../Img/Icons/headerIcon.png';
import downArrowIcon from '../../../Img/Icons/sortarrowdown.png';
import { RegiConationer } from './IRRegiStyled.jsx';
import { DateTimePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { validateEmail } from '../../../library/validate.js';
import Ckeditor from '../../../component/Ckeditor5/Ckeditor5.jsx';
import axios from 'axios';
import former from './RecruitmentAreasModal/recruitmentFormer.js';
import { TiDeleteOutline } from 'react-icons/ti';
import Uploader from '../../../component/Uploader/Uploader.jsx';
import { TextFile } from '../../../library/getJson.js';
const IRRegi = () => {
	const myStorage = window.localStorage;
	let history = useHistory();
	const userInfo = useSelector((state) => state.userInfo);
	console.log('userInfo; ', userInfo);
	if (!localStorage.getItem('token')) {
		if (window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')) {
			history.push('/login');
		} else {
			history.push('/creatormarket');
		}
	}
	// handle modal state---------------------------------------
	const [isActive, setIsActive] = useState(false);
	const [defaultIdx, setDefaultIdx] = useState(0);
	const [profiles, setProfiles] = useState([]);
	//모집분야 ----------------------------
	const [recruitmentModalOpen, setRecruitmentModalOpen] = useState(false);
	const [recruitmentFieldList, setRecruitmentFieldList] = useState([]);

	const handleRcruitmentList = (selectedList) => {
		let instance = [...recruitmentFieldList];
		for (let value of selectedList) {
			instance.push(value);
		}
		setRecruitmentFieldList(instance);
	};
	//포스터
	const [posterFilePath, setPosterFilePath] = useState('');
	//강의형태
	const [irOnline, setIrOnline] = useState(null);

	//근무지역
	const [irLocation, setIrLocation] = useState(null);
	//접수방법 u2life ---
	const [submitU2, setSubmitU2] = useState(false);
	//제출 서류 ---
	const [submitDocs, setSubmitDocs] = useState([]);
	const [korChekced, setKorChecked] = useState(false);
	const [portChecked, setPortChecked] = useState(false);
	const [engChecked, setEngChecked] = useState(false);

	//보상 조건
	const [isRewardCash, setIsRewardCash] = useState(false);
	const [isDirectReward, setIsDirectReward] = useState(false);
	const [rewardsCash, setRewardsCash] = useState(null);
	const [rewardDirect, setRewardDirect] = useState(null);
	const [rewardCurrency, setRewardCurrency] = useState('krw');
	//접수기간
	const [selectDeadline, setSelectDealine] = useState(false);
	//CKeditor 공모공지글
	const [ckText, setCkText] = useState('');
	const handleCkeditorValue = (event, editor) => {
		const data = editor.getData();
		setCkText(data);
	};
	//담당자
	const [admin, setAdmin] = useState('');
	const [adminExposure, setAdminExposure] = useState(true);
	//이메일
	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [emailExposure, setEmailExposure] = useState(true);
	//연락처
	const [mobile1, setMobile1] = useState('010');
	const [mobile2, setMobile2] = useState('');
	const [mobile3, setMobile3] = useState('');
	const [mobileExposure, setMobileExposure] = useState(true);
	//handle date ----------------------------------------------
	const [startDate, setStartDate] = useState(new Date());
	const [finishDate, setFinishDate] = useState(new Date());
	const [noticeDate, setNoticeDate] = useState(new Date());
	//온라인 오프라인 미팅 state 값
	const [onMeet, setOnMeet] = useState(null);
	//ownerIdx for API
	const [ownerIdx, setOwnerIdx] = useState(0);
	//강사채용 제목 ---------------------------------------------
	const [title, setTitle] = useState('');

	//-----------------------------------------------------
	const [submitClicked, setSubmitClicked] = useState(false);
	const handleSubmit = () => {
		if (submitClicked) return;
		if (checkRequiredField() !== true) return;
		setSubmitClicked(true);
		var fields = former(recruitmentFieldList);

		var doccode = submitDocs.map((el, idx) => {
			var seq = idx + 1;
			switch (el) {
				case '국문이력서': {
					return {
						seq: seq,
						docCode: '1',
					};
				}
				case '포트폴리오': {
					return {
						seq: seq,
						docCode: '2',
					};
				}
				case '영문이력서': {
					return {
						seq: seq,
						docCode: '3',
					};
				}
				default: {
					return;
				}
			}
		});
		var rewards = [];
		if (isRewardCash) {
			rewards.push({
				cat: 0,
				pts: rewardsCash,
				currency: rewardCurrency,
			});
		}
		if (isDirectReward) {
			rewards.push({
				cat: 99,
				rewarddesc: rewardDirect,
			});
		}
		var body = {
			hire: {
				fields: fields,
				docs: doccode,
				// challengeIdx: 0,
				seq: 1,
				isOnline: irOnline, //1: 온라인 비대면 , 2: 오프라인 , 3: 추후협의
				loc: irLocation,
				applyWay: submitU2 ? 1 : 0,
				dateBegin: startDate,
				dateFin: finishDate,
				deadline: selectDeadline ? 1 : 0,
				// registMemberIdx: 0,
				// registDate: '2021-07-26T07:31:59.884Z',
				// modifyMemberIdx: 0,
				// modifyDate: '2021-07-26T07:31:59.884Z',
			},
			ownerName: profiles[defaultIdx].companyName,
			memberIdx: userInfo.memberIdx,
			rewards: rewards.map((el, idx) => {
				return {
					seq: idx + 1,
					cat: el.cat,
					qty: el.qty ? el.qty : 0,
					pts: el.pts ? Number(el.pts) : 0,
					// pts: 2000,
					currency: el.currency ? el.currency : null,
					rewarddesc: el.rewarddesc ? el.rewarddesc : null,
					// datePayment: el.datePayment,
				};
			}),
			// challengerCount: 0,
			// challengerCompleteCount: 0,
			// commentCount: 0,
			// shareCount: 0,
			// challengeIdx: 0,
			title: title,
			// subtitle: 'string',
			ownerIdx: ownerIdx,
			// companyA: 'string',
			// companyB: 'string',
			// url: 'string',
			challengeDesc: ckText,
			// meetCode: 0,
			challengeTargetCode: 4,
			datePub: noticeDate,
			logo: posterFilePath,
			// mainImage: 'string',
			// fileRef: 'string',
			// promoting: 0,
			// commentAllowed: 0,
			charge: admin,
			chargeShown: adminExposure ? 1 : 0,
			chargeContact: `${mobile1}-${mobile2}-${mobile3}`,
			chargeContactShown: mobileExposure ? 1 : 0,
			chargeeMail: email,
			chargeeMailShown: emailExposure ? 1 : 0,
			// registMemberIdx: 0,
			// registDate: '2021-07-26T07:31:59.884Z',
			// modifyMemberIdx: 0,
			// modifyDate: '2021-07-26T07:31:59.884Z',
		};
		console.log('body: ', body);
		TextFile(body);
		var config = {
			method: 'post',
			url: process.env.REACT_APP_U2_DB_HOST + '/Campaign/challenge',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: body,
		};
		axios(config)
			.then((res) => {
				console.log('videditorregi response data', res);
				alert('등록이 완료되었습니다.');
				setSubmitClicked(false);
				history.push('/creatormarket');
			})
			.catch((err) => {
				console.log(err);
				setSubmitClicked(false);
				alert(err);
			});
	};

	const checkRequiredField = () => {
		// if(competition && title && (isOnline || isVideoProduction) && (isEmail || isMobile) && )
		if (!(profiles.length > 0)) return alert('의뢰주체를 선택해주십시오');
		if (!title) return alert('강사 채용 제목을 입력해주십시오');
		if (!(recruitmentFieldList.length > 0))
			return alert('모집분야를 선택해주십시오');
		if (irOnline === null) return alert('강의형태를 선택해주십시오');
		if (irOnline === 1) {
			if (!irLocation) return alert('근무지역을 입력해주십시오');
		}
		// if (!submitU2) return alert('접수방법을 선택해주십시오');
		if (!(submitDocs.length > 0)) return alert('제출서류를 선책해주십시오');
		if (!(isRewardCash || isDirectReward))
			return alert('보상 조건을 선택해주십시오');
		if (!selectDeadline) {
			if (!(startDate < finishDate))
				return alert('접수 종료 기간을 입력해주십시오');
		}

		// if (!noticeDate) return alert('공지 시작일을 선택해주십시오');
		if (!admin) return alert('담당자명을 입력해주십시오');
		if (!(mobile1 && mobile2 && mobile3))
			return alert('연락처를 입력해주십시오');
		if (!email) return alert('이메일을 입력해 주십시오');

		return true;
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

		setProfiles([...profiles, newForm]);
	};
	//window.localstorage에 state 저장 페이지 새로고침시 state값 유지 목적
	useEffect(() => {
		setOnMeet(JSON.parse(myStorage.getItem('onMeet')));
	}, []);

	useEffect(() => {
		myStorage.setItem('onMeet', onMeet);
		console.log('useEffect excuted');
	}, [onMeet]);

	// on offline meet state handle
	const handleOnline = () => {
		setOnMeet(true);
	};

	const handleOffline = () => {
		setOnMeet(false);
	};
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

	const handleEmailValidation = (email) => {
		const { isValid, error } = validateEmail(email);
		if (!isValid) {
			setEmailErr(error);
		} else {
			setEmail(email);
			setEmailErr(null);
		}
	};
	useEffect(() => {
		if (!userInfo.email) {
			history.push('/creatormarket');
		}
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
				var data = response.data;

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
				// setCompetition(newForm);
				setProfiles(newForm);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<RegiConationer className="contents_wrap">
			<div className="irregi_section">
				<div className="irregi_title_area">
					<div>프로젝트 등록</div>
					<div className="irregi_title_style"></div>
				</div>
				<section className="irregi_title_sub">
					<img src={headerIcon} alt="" />
					<div>강사 채용</div>
				</section>

				<section className="irregi_items">
					<section className="ele">
						<div className="menu">* 의뢰주체</div>
						<div className="inputInfo company_profiles">
							<div className="default_profile">
								<div>
									{profiles.length &&
										`${profiles[defaultIdx].form} : ${profiles[defaultIdx].companyName}`}
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
								profiles={profiles}
								setIsActive={setIsActive}
								isActive={isActive}
								handleNewData={handleNewData}
							/>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 강사 채용 제목</div>
						<div className="inputInfo irregi_name">
							<div>
								<input
									type="text"
									onChange={(e) => {
										setTitle(e.target.value);
									}}
									maxLength={20}
								/>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">포스터</div>
						<div className="inputInfo videditor_files_uploader">
							<Uploader
								setFilePath={setPosterFilePath}
								multiple={false}
								accept={'image/*'}
								memberIdx={userInfo.memberIdx}
								folder={'market-logo'}
								placeholder="이미지 선택. (권장비율: 16:9)"
							/>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 모집분야</div>
						<div className="inputInfo irregi_recruitment_field">
							{recruitmentFieldList.map((ele, idx) => {
								return (
									<div className="recruitment_field_ele" key={idx}>
										<span>{ele}</span>
										<TiDeleteOutline
											key={`${ele}remove_btn`}
											src={TiDeleteOutline}
											alt=""
											className="remove_field_btn"
											onClick={() => {
												let instance = [...recruitmentFieldList];
												instance.forEach((filed) => {
													if (filed === ele) {
														instance.splice(idx, 1);
													}
												});
												setRecruitmentFieldList(instance);
											}}
										/>
									</div>
								);
							})}

							<button
								className="recuritment_filed_addbtn"
								onClick={() => {
									setRecruitmentModalOpen(true);
								}}
							>
								+추가
							</button>
							<RecruitmentAreasModal
								modalOpen={recruitmentModalOpen}
								handleCloseModal={setRecruitmentModalOpen}
								handleRcruitmentList={handleRcruitmentList}
							/>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 강의형태</div>
						<div className="inputInfo irregi_irtype">
							<div>
								<input
									type="radio"
									name="irtype"
									value="온라인비대면강의"
									onChange={() => {
										setIrOnline(0);
									}}
								/>
								<label>온라인 비대면 강의</label>
							</div>
							<div>
								<input
									type="radio"
									name="irtype"
									value="오프라인강의"
									onChange={() => {
										setIrOnline(1);
									}}
								/>
								<label>오프라인 강의</label>
							</div>
							<div>
								<input
									type="radio"
									name="irtype"
									value="추후협의"
									onChange={() => {
										setIrOnline(2);
									}}
								/>
								<label>추후 협의</label>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 근무지역</div>
						<div className="inputInfo irregi_ir_location">
							<div>
								<input
									type="text"
									name="ir_location"
									placeholder={irOnline === 0 && '온라인 비대면 강의'}
									disabled={irOnline === 0 || irOnline === 2}
									onChange={(e) => {
										setIrLocation(e.target.value);
									}}
								/>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 접수방법</div>
						<div className="inputInfo irregi_submit_type">
							<div>
								<input
									type="checkbox"
									name="u2lifes_submit"
									checked={submitU2}
									onChange={() => {
										setSubmitU2(!submitU2);
									}}
								/>
								<div>U2.LIFE접수</div>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 제출서류</div>
						<div className="inputInfo irregi_submit_docs">
							<div>
								<input
									type="checkbox"
									name="submit_docs"
									value="국문이력서"
									checked={korChekced}
									onChange={(e) => {
										let instance = [...submitDocs];
										!korChekced
											? instance.push(e.target.value)
											: instance.forEach((ele, idx) => {
													if (ele === e.target.value) {
														instance.splice(idx, 1);
													}
											  });
										setSubmitDocs(instance);
										setKorChecked(!korChekced);
									}}
								/>
								<div>국문 이력서</div>
							</div>
							<div>
								<input
									type="checkbox"
									name="submit_docs"
									value="포트폴리오"
									onChange={(e) => {
										let instance = [...submitDocs];
										!portChecked
											? instance.push(e.target.value)
											: instance.forEach((ele, idx) => {
													if (ele === e.target.value) {
														instance.splice(idx, 1);
													}
											  });
										setSubmitDocs(instance);
										setPortChecked(!portChecked);
									}}
								/>
								<div>포트폴리오</div>
							</div>
							<div>
								<input
									type="checkbox"
									name="submit_docs"
									value="영문이력서"
									onChange={(e) => {
										let instance = [...submitDocs];
										!engChecked
											? instance.push(e.target.value)
											: instance.forEach((ele, idx) => {
													if (ele === e.target.value) {
														instance.splice(idx, 1);
													}
											  });
										setSubmitDocs(instance);
										setEngChecked(!engChecked);
									}}
								/>
								<div>영문 이력서</div>
							</div>
						</div>
					</section>

					<section className="ele">
						<div className="menu">* 보상</div>
						<div className="inputInfo ir_rewardtype">
							<div className="ir_reception_form">
								<table className="ir_reception_table">
									<tbody>
										<tr>
											<td>
												{' '}
												<div className="table_checkarea">
													<input
														type="checkbox"
														name="rewardcash"
														value="rewardcash"
														onClick={() => {
															setIsRewardCash(!isRewardCash);
														}}
													/>
												</div>{' '}
											</td>
											<td>
												<div className="table_title">현금 보상</div>
											</td>
											<td>
												{' '}
												<section className="reception_options">
													<div>
														<input
															type="number"
															name="rewardcash"
															placeholder="무료일 경우 0원 입력"
															onChange={(e) => {
																setRewardsCash(e.target.value);
															}}
															step={rewardCurrency === 'krw' ? '1000' : '1'}
															min="0"
															max={'99999999999'}
															defaultValue={rewardsCash ? rewardsCash : 0}
															disabled={!isRewardCash}
														/>

														<select
															name="currencyselect"
															disabled={!isRewardCash}
															onChange={(e) => {
																setRewardCurrency(e.target.value);
															}}
														>
															<option value="krw">KRW</option>
															<option value="usd">USD</option>
														</select>
													</div>
													<div>
														프로젝트 정상 완료시 현금 보상하실 경우 지급할
														금액을 입력해 주십시오
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
														name="rewardproduct"
														value="rewardproduct"
														onClick={() => {
															setIsDirectReward(!isDirectReward);
														}}
													/>
												</div>{' '}
											</td>
											<td>
												<div className="table_title">현물 보상</div>
											</td>
											<td>
												<section className="reception_options">
													<div>
														<input
															type="text"
															name="rewardproduct"
															onChange={(e) => {
																setRewardDirect(e.target.value);
															}}
															disabled={!isDirectReward}
															maxLength="50"
														/>
													</div>
													<div>
														상품, 사은품, 상품권 등 지급할 현물을 입력해
														주십시오
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
							<div className="choosedate_ircondition">
								<input
									type="checkbox"
									name="ircodition"
									checked={selectDeadline}
									onChange={() => {
										setSelectDealine(!selectDeadline);
									}}
								/>
								<div>채용 시 마감</div>
							</div>
							<div className="inputStart">
								<ThemeProvider theme={materialTheme}>
									<DateTimePicker
										className="dtPicker"
										label="접수시작"
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
									접수 시작일을 입력해주십시오
								</div>
							</div>
							<div className="inputFinish">
								<ThemeProvider theme={materialTheme}>
									<DateTimePicker
										className="dtPicker"
										label="접수종료"
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
									접수 종료일을 입력해주십시오
								</div>
							</div>
						</div>
					</section>
					<section className="ele">
						<div className="menu">* 공지시작일</div>
						<div className="inputInfo irregi_notice_startdate">
							<div className="irregi_notice_timepicker">
								<ThemeProvider theme={materialTheme}>
									<DateTimePicker
										className="dtPicker"
										label="시작 날짜 선택"
										inputVariant="outlined"
										value={noticeDate}
										onChange={(date) => {
											setNoticeDate(date);
										}}
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
						<div className="menu">강사채용 공지글</div>
						<div className="inputInfo notice_editor_form">
							{/* <Ckeditor5
								className="ckeditor_wrap"
								handleCkeditorValue={handleCkeditorValue}
							/> */}
							<Ckeditor
								className="ckeditor_wrap"
								onChange={handleCkeditorValue}
								data={ckText}
							/>
						</div>
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
									<option value="goldfish">010</option>
									<option value="02">02</option>
									<option value="">031</option>
									<option value="cat">032</option>
									<option value="hamster">033</option>
									<option value="parrot">041</option>
									<option value="spider">042</option>
									<option value="goldfish">043</option>
									<option value="">044</option>
									<option value="cat">051</option>
									<option value="hamster">052</option>
									<option value="parrot">053</option>
									<option value="spider">054</option>
									<option value="goldfish">055</option>
									<option value="">061</option>
									<option value="cat">062</option>
									<option value="hamster">063</option>
									<option value="parrot">064</option>
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
								{emailErr && emailErr}
							</div>
						</section>
					</section>
					<div className="irregi_bottom_style"></div>
					<section className="irregi_btn_area">
						{' '}
						<button
							className="irregi_btn"
							onClick={() => {
								history.push('/prjregi');
							}}
						>{`< 이전`}</button>
						<button
							className="irregi_btn irregi_btn_next"
							onClick={() => {
								handleSubmit();
							}}
						>{`등록하기`}</button>
					</section>
				</section>
			</div>
		</RegiConationer>
	);
};

export default IRRegi;
