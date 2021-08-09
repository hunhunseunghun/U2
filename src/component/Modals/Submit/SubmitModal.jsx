import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BsPlusSquareFill, BsDashSquareFill } from 'react-icons/bs';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import Banks from '../../banks';
import { ModalContainer } from './SubmitModalStyled';
import AddressModal from '../../address/AddressModal';
import { validateEmail } from '../../../library/validate';
import { TextFile } from '../../../library/getJson';
import Uploader from '../../Uploader/Uploader';
// import 'csshake.min.css'
const server = process.env.REACT_APP_U2_DB_HOST;
const initialState = {
	title: '',
	videos: [],
	fileOrUrl: 0,
	YUinput: '',
	YUarr: [],
	TTinput: '',
	TTarr: [],
	VMinput: '',
	VMarr: [],
	DRinput: '',
	DRarr: [],
	videoFile: {},
	mobileNum: '',
	mobileErr: '',
	mobileErrShake: false,
	toggleMobileAuthInput: false,
	mobileAuthInput: '',
	mobileAuthorized: null,
	email: null,
	emailErr: '',
	emailErrShake: false,
	toggleEmailAuthInput: false,
	emailAuthInput: '',
	emailAuthorized: null,
	bankAccountNum: '',
	bankCode: 0,
	bankName: '',
	bankAccountErr: '',
	BaErrShake: false,
	bankAuthorized: false,
	address1: '',
	address2: '',
	address3: '',
	openAddrModal: false,
	addrMobile: '',
	image: '',
	note: '',
	shareRequired: 0,
	filmRequired: 0,
	contactRequired: 0,
	emailRequired: 0,
	submitClicked: false,
	loading1: false,
	loading2: false,
};
function Modal({ open, challenge, challengeTargetCode, handleModalClose }) {
	// console.log(data);
	const userInfo = useSelector((state) => state.userInfo);
	const [
		{
			title,
			videos,
			fileOrUrl,
			YUinput,
			YUarr,
			TTinput,
			TTarr,
			VMinput,
			VMarr,
			DRinput,
			DRarr,
			videoFile,
			mobileNum,
			mobileErr,
			mobileErrShake,
			toggleMobileAuthInput,
			mobileAuthInput,
			mobileAuthorized,
			email,
			emailErr,
			emailErrShake,
			toggleEmailAuthInput,
			emailAuthInput,
			emailAuthorized,
			bankAccountNum,
			bankCode,
			bankName,
			bankAccountErr,
			BaErrShake,
			bankAuthorized,
			address1,
			address2,
			address3,
			openAddrModal,
			addrMobile,
			image,
			note,
			shareRequired,
			filmRequired,
			contactRequired,
			emailRequired,
			submitClicked,
			loading1,
			loading2,
		},
		setState,
	] = useState({ ...initialState });
	const clearState = () => {
		setState({ ...initialState });
	};

	useEffect(() => {
		if (challenge) {
			console.log('challengeTargetCode: ', challengeTargetCode);
			console.log('challenge in submit modal: ', challenge);
			var config = {
				method: 'get',
				// https://u2-rest-dev.azurewebsites.net/api/Campaign/challengesubmit
				url: server + `/Campaign/challenge/${challenge.challengeIdx}`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
				// data: data,
			};
			axios(config)
				.then((response) => {
					console.log('submit modal useEffect data: ', response.data);
					if (response.data.missions && response.data.missions.length > 0)
						setState((state) => ({
							...state,
							videos: response.data.missions[0].videos,
							fileOrUrl: response.data.missions[0].fileOrUrl,
							shareRequired: response.data.missions[0].shareRequired,
							filmRequired: response.data.missions[0].filmRequired,
							contactRequired: response.data.missions[0].contactRequired,
							emailRequired: response.data.missions[0].emailRequired,
						}));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [open]);
	const handleValidateMobile = () => {
		if (mobileNum) {
			if (isValidPhoneNumber(mobileNum)) {
				// setMobileErr(null);
				setState((preState) => ({ ...preState, mobileErr: null }));
				//인증 구현 ----------------------
				// setToggleMobileAuthInput(true);

				//인증 미구현----------------
				// setMobileAuthorized(true);
				setState((preState) => ({ ...preState, mobileAuthorized: true }));
			} else {
				handleShake('mobile');
				// setMobileErr('옳바른 전화번호 형식이 아닙니다.');
				setState((preState) => ({
					...preState,
					mobileErr: '옳바른 전화번호 형식이 아닙니다.',
				}));
			}
		} else {
			handleShake('mobile');
			// setMobileErr('전화번호를 입력해주세요.');
			setState((preState) => ({
				...preState,
				mobileErr: '전화번호를 입력해주세요',
			}));
		}
	};

	const handleAuthMobile = () => {
		// setMobileAuthorized(mobileAuthInput === '0314');
		setState((preState) => ({
			...preState,
			mobileAuthorized: mobileAuthInput === '0314',
		}));
	};
	const handleMobileChange = (e) => {
		// setMobileNum(e);
		// setMobileAuthorized(false);
		setState((preState) => ({
			...preState,
			mobileNum: e,
			mobileAuthorized: false,
		}));
	};

	const handleValidateEmail = () => {
		const { isValid, error } = validateEmail(email);
		if (!isValid) {
			// setEmailErr(error);
			// setToggleEmailAuthInput(false);
			// setEmailAuthorized(null);
			setState((preState) => ({
				...preState,
				emailErr: error,
				toggleEmailAuthInput: false,
				emailAuthorized: null,
			}));
		} else {
			// setEmailErr(null);
			setState((preState) => ({ ...preState, emailErr: null }));
		}
	};

	const handleValidateBank = () => {
		if (bankAccountNum) {
			const replaced = bankAccountNum.replace(/[^0-9]/gi, '');
			// setBankAccountNum(replaced);
			// setBankAuthorized(true);
			// setBankAccountErr(null);
			setState((preState) => ({
				...preState,
				bankAccountNum: replaced,
				bankAuthorized: true,
				bankAccountErr: null,
			}));
		} else {
			if (bankCode) {
				// setBankAccountErr('계좌번호를 입력해주세요.');
				setState((preState) => ({
					...preState,
					bankAccountErr: '계좌번호를 입력해주세요.',
				}));
				handleShake('bank');
			} else {
				// setBankAccountErr('은행을 선택해주세요.');
				setState((preState) => ({
					...preState,
					bankAccountErr: '은행을 선택해주세요.',
				}));
				handleShake('bank');
			}
		}
	};

	const handleBankCode = (bank) => {
		const bankArr = bank.split(',');
		const bankCode = bankArr[0];
		const bankName = bankArr[1];
		setState((preState) => ({
			...preState,
			bankCode: bankCode,
			bankName: bankName,
		}));
	};
	const handleNote = (note) => {
		// setNote(note);
		setState((preState) => ({ ...preState, note: note }));
	};
	const handleShake = (inputType) => {
		switch (inputType) {
			case 'email': {
				// setEmailErrShake(true);
				setState((preState) => ({ ...preState, emailErrShake: true }));
				setTimeout(() => {
					// setEmailErrShake(false);
					setState((preState) => ({ ...preState, emailErrShake: false }));
				}, 1000);
				break;
			}
			case 'mobile': {
				// setMobileErrShake(true);
				setState((preState) => ({ ...preState, mobileErrShake: true }));
				setTimeout(() => {
					// setMobileErrShake(false);
					setState((preState) => ({ ...preState, mobileErrShake: false }));
				}, 1000);
			}
			case 'bank': {
				// setBaErrShake(true);
				setState((preState) => ({ ...preState, BaErrShake: true }));
				setTimeout(() => {
					// setBaErrShake(false);
					setState((preState) => ({ ...preState, BaErrShake: false }));
				}, 1000);
			}
			default: {
				break;
			}
		}
	};
	const handleSearchAddress = () => {
		// setOpenAddrModal(true);
		setState((preState) => ({ ...preState, openAddrModal: true }));
	};
	const setAddressData = (data) => {
		console.log('address data: ', data);
		// setAddress1(data.zonecode);
		setState((preState) => ({ ...preState, address1: data.zonecode }));

		// setAddress2(
		// 	data.address +
		// 		(data.bname && ' ' + data.bname) +
		// 		(data.buildingName && ' ' + data.buildingName),
		// );
		setState((preState) => ({
			...preState,
			address2:
				data.address +
				(data.bname && ' ' + data.bname) +
				(data.buildingName && ' ' + data.buildingName),
		}));
	};
	const checkSubmit = () => {
		if (submitClicked) {
			alert('제출 중입니다.');
			return true;
		}
		if (loading1 || loading2) {
			alert('업로드 중입니다');
			return true;
		}
		if (
			!title ||
			bankAccountErr ||
			!address1 ||
			!address2 ||
			!address3 ||
			(contactRequired === 2 && !mobileNum) ||
			(emailRequired === 2 && !email)
		) {
			alert('모든 필수 항목을 입력해야 합니다.');
			return true;
		}
		if (contactRequired === 2 && !mobileAuthorized) {
			alert('휴대 전화 인증을 해주세요');
			return true;
		}
		if (emailRequired === 2 && !emailAuthorized) {
			alert('이메일 인증을 해주세요');
			return true;
		}
		if (filmRequired === 2) {
			if (fileOrUrl) {
				if (!videoFile) {
					alert('제출할 영상을 입력해주세요');
					return true;
				}
			} else {
				if (!DRarr.length > 0) {
					alert('제출할 영상을 입력해주세요');
					return true;
				}
			}
		}
		console.log(shareRequired);
		if (shareRequired === 2 && videos.length > 0) {
			let totalArr = new Array().concat(YUarr, TTarr, VMarr);
			if (!totalArr.length > 0) {
				alert('영상 URL을 입력해주세요');
				return true;
			}
		}
		// contactRequired,
		// 	emailRequired,
		if (mobileErr) {
			alert('정확한 휴대전화 번호를 입력해주세요');
			return true;
		}
		if (emailErr) {
			alert('정확한 이메일을 입력해주세요');
			return true;
		}
	};
	const handleSubmit = () => {
		if (checkSubmit()) return;
		setState((preState) => ({ ...preState, submitClicked: true }));
		let totalURLs = [];
		if (videoFile && videoFile.platform) {
			totalURLs = new Array().concat(
				YUarr,
				TTarr,
				VMarr,
				DRarr,
				videoFile && videoFile.platform && videoFile,
			);
		} else {
			totalURLs = new Array().concat(YUarr, TTarr, VMarr, DRarr);
		}

		var data = {
			videos: totalURLs.map((el, idx) => {
				return {
					challengeIdx: challenge.challengeIdx,
					missonSeq: idx + 1,
					memberIdx: userInfo.memberIdx,
					seq: idx + 1,
					platform: el.platform,
					videoId: el.url,
				};
			}),
			name: userInfo.fullName,
			postCodeAddr: address2,
			challengeIdx: challenge.challengeIdx,
			missonSeq: 1,
			memberIdx: userInfo.memberIdx,
			contactCode: 1,
			contact: mobileNum,
			email: email,
			postCode: address1,
			addr: address3,
			bankCode: bankCode,
			bankName: bankName,
			bankAccount: bankAccountNum,
			photo: image,
			note: note,
			statusCode: 1,
			checkStatusCode: 0,
			dateApplied: new Date(),
		};
		console.log('body: ', data);
		// TextFile(data);
		var config = {
			method: 'post',
			url: server + '/Campaign/challengesubmit',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: data,
		};

		axios(config)
			.then((response) => {
				console.log('response: ');
				console.log(response.data);
				if (!alert('제출 완료되었습니다.')) {
					handleModalClose('submit');
					clearState();
				}
			})
			.catch((err) => {
				console.log('err: ', err.response);
				if (err.response.data.error === 'Already submitted') {
					alert('이미 제출한 프로젝트 입니다.');
					clearState();
					handleModalClose('submit');
				} else {
					alert(err.response.data);
				}
			});
	};
	const handleSubmitEditor = () => {
		if (checkSubmit()) return;
		setState((preState) => ({ ...preState, submitClicked: true }));
		let totalURLs = [];
		totalURLs = new Array().concat(YUarr, TTarr, VMarr, DRarr);

		var data = {
			challengeIdx: challenge.challengeIdx,
			seq: 1,
			memberIdx: userInfo.memberIdx,
			mobile: mobileNum,
			email: email,
			// cv: 'string',
			// cvEng: 'string',
			fileRef: videoFile ? videoFile.url : null,
			bankCode: bankCode,
			bankAccount: bankAccountNum,
			postCode: address1,
			addr: address3,
			bankName: bankName,
			postCodeAddr: address2,
			urls: totalURLs.map((el, idx) => {
				return {
					challengeIdx: challenge.challengeIdx,
					seq: 1,
					memberIdx: userInfo.memberIdx,
					url: el.url,
				};
			}),
		};
		console.log('body: ', data);
		// TextFile(data);
		var config = {
			method: 'post',
			url: server + '/Campaign/challengehireapply',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: data,
		};

		axios(config)
			.then((response) => {
				console.log('response: ');
				console.log(response.data);
				if (!alert('제출 완료되었습니다.')) {
					handleModalClose('submit');
					clearState();
				}
			})
			.catch((err) => {
				console.log('err: ', err.response);
				if (
					err.response.data.error === 'Already submitted' ||
					err.response.data.error === 'already applied'
				) {
					alert('이미 제출한 프로젝트 입니다.');
					clearState();
					handleModalClose('submit');
				} else {
					alert(err.response.data);
				}
			});
	};

	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				<AddressModal
					open={openAddrModal}
					handleModalClose={() => {
						// setOpenAddrModal(false);
						setState((preState) => ({ ...preState, openAddrModal: false }));
					}}
					setAddressData={setAddressData}
				/>
				{open ? (
					<section>
						<header>
							{challengeTargetCode === 2 ? '지원하기' : '자료 제출'}
						</header>
						<main className={'sm-main'}>
							<section className="ele">
								<div className="menu">* 작품명</div>
								<div className="inputInfo">
									<input
										className="input_work_title"
										type="text"
										value={title}
										onChange={(e) => {
											// setTitle(e.target.value);
											setState((preState) => ({
												...preState,
												title: e.target.value,
											}));
										}}
									></input>
								</div>
							</section>
							<section className="ele">
								<div className="menu">
									{(filmRequired === 2 || shareRequired === 2) && '* '}
									{challengeTargetCode === 2 ? '포트폴리오' : '프로젝트 영상'}
								</div>
								<div className="inputInfo URLs">
									{(() => {
										if (filmRequired !== 0) {
											if (fileOrUrl === 1) {
												//파일
												return (
													<div>
														<span className="youtubeURL">파일 선택:</span>
														<Uploader
															setFilePath={(path) => {
																if (path) {
																	let obj = {
																		platform: 'FS',
																		url: path,
																	};
																	setState((preState) => ({
																		...preState,
																		videoFile: obj,
																	}));
																} else {
																	//삭제 됐을 때
																	setState((preState) => ({
																		...preState,
																		videoFile: null,
																	}));
																}
															}}
															multiple={false}
															accept={'*'}
															folder={'market-submit-media'}
															memberIdx={userInfo.memberIdx}
															challengeIdx={challenge.challengeIdx}
															loading={loading1}
															setLoading={(state) => {
																setState((preState) => ({
																	...preState,
																	loading1: state,
																}));
															}}
														/>
													</div>
												);
											} else {
												//url
												return (
													<div>
														<span className="youtubeURL">직접 입력: </span>
														<ul className="ul-URLs">
															{DRarr.map((el, idx) => {
																return (
																	<li key={idx} className="li-url">
																		<input value={el.url} readOnly></input>
																		<BsDashSquareFill
																			className="plusMinus"
																			onClick={() => {
																				let copyArr = DRarr.slice();
																				copyArr.splice(idx, 1);
																				// setURLS(copyArr);
																				setState((preState) => ({
																					...preState,
																					DRarr: copyArr,
																				}));
																			}}
																		/>
																	</li>
																);
															})}
															<li>
																<input
																	value={DRinput}
																	onChange={(e) => {
																		setState((preState) => ({
																			...preState,
																			DRinput: e.target.value,
																		}));
																	}}
																></input>
																<BsPlusSquareFill
																	className="plusMinus"
																	onClick={() => {
																		if (DRinput) {
																			let copyArr = DRarr.slice();
																			copyArr.push({
																				platform: 'DR',
																				url: DRinput,
																			});
																			setState((preState) => ({
																				...preState,
																				DRarr: copyArr,
																				DRinput: '',
																			}));
																		}
																	}}
																/>
															</li>
														</ul>
													</div>
												);
											}
										}
									})()}
									{videos.length > 0
										? videos.map((video) => {
												return (
													<div>
														<span className="youtubeURL">
															{(() => {
																switch (video.platform) {
																	case 'YU': {
																		return 'Youtube';
																	}
																	case 'TT': {
																		return 'TikTok';
																	}
																	case 'VM': {
																		return 'Vimeo';
																	}
																	default: {
																		return;
																	}
																}
															})()}{' '}
															URL :
														</span>
														<ul className="ul-URLs">
															{/* show inputs */}
															{(() => {
																let urls = [];
																switch (video.platform) {
																	case 'YU': {
																		urls = YUarr;
																		break;
																	}
																	case 'TT': {
																		urls = TTarr;
																		break;
																	}
																	case 'VM': {
																		urls = VMarr;
																		break;
																	}
																	default: {
																		break;
																	}
																}
																return urls.map((el, idx) => {
																	return (
																		<li key={idx} className="li-url">
																			<input value={el.url} readOnly></input>
																			<BsDashSquareFill
																				className="plusMinus"
																				onClick={() => {
																					let copyArr = urls.slice();
																					copyArr.splice(idx, 1);
																					// setURLS(copyArr);
																					switch (video.platform) {
																						case 'YU': {
																							setState((preState) => ({
																								...preState,
																								YUarr: copyArr,
																							}));
																							break;
																						}
																						case 'TT': {
																							setState((preState) => ({
																								...preState,
																								TTarr: copyArr,
																							}));
																							break;
																						}
																						case 'VM': {
																							setState((preState) => ({
																								...preState,
																								VMarr: copyArr,
																							}));
																							break;
																						}
																						default: {
																							break;
																						}
																					}
																				}}
																			/>
																		</li>
																	);
																});
															})()}
															<li>
																<input
																	onChange={(e) => {
																		switch (video.platform) {
																			case 'YU': {
																				setState((preState) => ({
																					...preState,
																					YUinput: e.target.value,
																				}));
																				break;
																			}
																			case 'TT': {
																				setState((preState) => ({
																					...preState,
																					TTinput: e.target.value,
																				}));
																				break;
																			}
																			case 'VM': {
																				setState((preState) => ({
																					...preState,
																					VMinput: e.target.value,
																				}));
																				break;
																			}
																			default: {
																				break;
																			}
																		}
																	}}
																	value={(() => {
																		switch (video.platform) {
																			case 'YU': {
																				return YUinput;
																			}
																			case 'TT': {
																				return TTinput;
																			}
																			case 'VM': {
																				return VMinput;
																			}
																			default: {
																				return;
																			}
																		}
																	})()}
																></input>
																<BsPlusSquareFill
																	className="plusMinus"
																	onClick={() => {
																		let input = '';
																		let obj = {};
																		switch (video.platform) {
																			case 'YU': {
																				obj = {
																					platform: video.platform,
																					url: YUinput,
																				};
																				input = YUinput;
																				break;
																			}
																			case 'TT': {
																				obj = {
																					platform: video.platform,
																					url: TTinput,
																				};
																				input = TTinput;
																				break;
																			}
																			case 'VM': {
																				obj = {
																					platform: video.platform,
																					url: VMinput,
																				};
																				input = VMinput;
																				break;
																			}
																			default: {
																				break;
																			}
																		}
																		if (input) {
																			//input이 있을때만
																			switch (video.platform) {
																				case 'YU': {
																					let copyYU = YUarr.slice();
																					copyYU.push(obj);
																					setState((preState) => ({
																						...preState,
																						YUinput: '',
																						YUarr: copyYU,
																					}));
																					break;
																				}
																				case 'TT': {
																					let copyTT = TTarr.slice();
																					copyTT.push(obj);
																					setState((preState) => ({
																						...preState,
																						TTinput: '',
																						TTarr: copyTT,
																					}));
																					break;
																				}
																				case 'VM': {
																					let copyVM = VMarr.slice();
																					copyVM.push(obj);
																					setState((preState) => ({
																						...preState,
																						VMinput: '',
																						VMarr: copyVM,
																					}));
																					break;
																				}
																				default: {
																					break;
																				}
																			}
																		}
																	}}
																/>
															</li>
														</ul>
													</div>
												);
										  })
										: 'No video required'}
								</div>
							</section>
							<section className="ele">
								<div className="menu">
									{contactRequired === 2 && '*'} 휴대전화
								</div>
								<div className="inputInfo">
									<div className="MobileContainer">
										<PhoneInput
											className="input_mobile_number"
											placeholder="휴대전화 번호를 입력해 주십시오"
											onChange={(value) => {
												setState((preState) => ({
													...preState,
													mobileNum: value,
													mobileAuthorized: false,
												}));
											}}
											value={mobileNum}
											className="phoneInput"
										></PhoneInput>
										{mobileAuthorized ? (
											<button className="auth-btn complete">인증완료</button>
										) : (
											<button //휴대폰 validation check 버튼
												className="auth-btn"
												onClick={() => {
													handleValidateMobile();
												}}
											>
												인증하기
											</button>
										)}

										<div
											className={
												'errorMessage' + (mobileErrShake ? ' shake' : '')
											}
										>
											{mobileErr}
										</div>
									</div>
									<div>
										{toggleMobileAuthInput && (
											<div className="auth-input">
												인증번호 입력:{' '}
												<input
													placeholder="인증번호를 입력해 주십시오"
													onChange={(e) => {
														// setMobileAuthInput(e.target.value);
														setState((preState) => ({
															...preState,
															mobileAuthInput: e.target.value,
														}));
													}}
												></input>
												<button //휴대폰 인증번호 확인 버튼
													className="auth-btn"
													onClick={() => {
														handleAuthMobile();
													}}
												>
													확인
												</button>
												{(() => {
													switch (mobileAuthorized) {
														case true: {
															return (
																<div className="authorized">
																	인증되었습니다.
																</div>
															);
														}
														case false: {
															return (
																<div className="errorMessage">
																	인증번호가 옳바르지 않습니다.
																</div>
															);
														}
														case null: {
															return '';
														}
														default: {
															return '';
														}
													}
												})()}
											</div>
										)}
									</div>
								</div>
							</section>
							<section className="ele">
								<div className="menu">{emailRequired === 2 && '*'} 이메일</div>
								<div className="inputInfo">
									<div className="EmailContainer">
										<input
											placeholder="이메일 주소를 입력해 주십시오"
											className="emailInput"
											onChange={(e) => {
												//email validation check per change
												// setEmail(e.target.value);
												setState((preState) => ({
													...preState,
													email: e.target.value,
												}));
												handleValidateEmail();
											}}
										></input>
										{emailAuthorized ? (
											<button className="auth-btn complete email_auth_btn">
												인증완료
											</button>
										) : (
											<button
												className="auth-btn"
												onClick={() => {
													if (emailErr === null) {
														//인증 구현
														//setToggleEmailAuthInput(true);

														//인증 미구현
														// setEmailAuthorized(true);
														setState((preState) => ({
															...preState,
															emailAuthorized: true,
														}));
													} else {
														handleShake('email');
													}
												}}
											>
												인증번호 받기
											</button>
										)}

										{toggleEmailAuthInput && ( //validation error 가 없고 버튼이 눌렸을 때
											<div className="auth-input">
												인증번호 입력:{' '}
												<input
													placeholder="인증번호를 입력해 주십시오"
													onChange={(e) => {
														// setEmailAuthInput(e.target.value);
														setState((preState) => ({
															...preState,
															emailAuthInput: e.target.value,
														}));
													}}
												></input>
												<button
													className="auth-btn"
													onClick={() => {
														// setEmailAuthorized(emailAuthInput === 'hello');
														setState((preState) => ({
															...preState,
															emailAuthorized: emailAuthInput === 'hello',
														}));
													}}
												>
													확인
												</button>
											</div>
										)}
										{emailErr !== null && ( //validation error 가 있을 때
											<div
												className={
													'errorMessage' + (emailErrShake ? ' shake' : '')
												}
												// className="shake"
											>
												{emailErr}
											</div>
										)}
										{(() => {
											//이메일 인증확인
											switch (emailAuthorized) {
												case null: {
													//초기값
													return '';
												}
												case true: {
													return (
														<div className={'authorized'}>인증되었습니다.</div>
													);
												}
												case false: {
													return (
														<div className={'errorMessage'}>
															인증번호가 옳바르지 않습니다.
														</div>
													);
												}
											}
										})()}
									</div>
								</div>
							</section>
							<section className="ele">
								<div className="menu">* 계좌번호</div>
								<div className="inputInfo banks_accout">
									<Banks handleBankCode={handleBankCode} />
									<input
										className="banks_accout_input"
										type="number"
										value={bankAccountNum}
										onChange={(e) => {
											// setBankAccountNum(e.target.value);
											// setBankAuthorized(false);
											setState((preState) => ({
												...preState,
												bankAccountNum: e.target.value,
												bankAuthorized: false,
											}));
										}}
									></input>
									{bankAuthorized ? (
										<button className="auth-btn complete">인증완료</button>
									) : (
										<button
											className="auth_btn_account"
											onClick={() => {
												handleValidateBank();
											}}
										>
											계좌인증
										</button>
									)}
									{bankAccountErr && (
										<div
											className={'errorMessage' + (BaErrShake ? ' shake' : '')}
										>
											{bankAccountErr}
										</div>
									)}
								</div>
							</section>
							<section
								className={
									'ele' +
									(challengeTargetCode === 2 && ' submit_modal_ele_last')
								}
							>
								<div className="menu">* 주소</div>
								<div className="inputInfo Address">
									<section className="address_ele">
										<div className="address_menu">받으시는 분 성함</div>
										<div className="address_inputInfo_reciever">
											<input></input>
										</div>
									</section>
									<section className="address_ele">
										<div className="address_menu">받으시는 분 연락처</div>
										<div className="address_inputInfo_recievernumb">
											<PhoneInput
												onChange={(value) => {
													setState((preState) => ({
														...preState,
														addrMobile: value,
													}));
												}}
												value={addrMobile}
												placeholder="전화번호를 입력해주십시오"
											/>
										</div>
									</section>
									<section className="address_ele">
										<div className="address_menu">배송지 주소</div>
										<div className="address_inputInfo address_inputinfo_last">
											<div className="address_zipcode_input">
												<input value={address1} readOnly></input>
												<button
													className="address_find_btn"
													onClick={() => {
														handleSearchAddress();
													}}
												>
													주소 찾기
												</button>
											</div>

											<input
												className="adress_middle_input"
												value={address2}
												readOnly
											></input>
											<div>
												상세주소 :{' '}
												<input
													className="adress_detail_input"
													value={address3}
													onChange={(e) => {
														// setAddress3(e.target.value);
														setState((preState) => ({
															...preState,
															address3: e.target.value,
														}));
													}}
												></input>
											</div>
										</div>
									</section>
								</div>
							</section>
							{challengeTargetCode !== 2 && (
								<div>
									<section className="ele">
										<div className="menu">이미지</div>
										<div className="inputInfo">
											<Uploader
												setFilePath={(path) => {
													setState((preState) => ({
														...preState,
														image: path,
													}));
												}}
												multiple={false}
												accept={'image/*'}
												folder={'market-submit-media'}
												memberIdx={userInfo.memberIdx}
												challengeIdx={challenge.challengeIdx}
												loading={loading2}
												setLoading={(state) => {
													setState((preState) => ({
														...preState,
														loading2: state,
													}));
												}}
											/>
										</div>
									</section>
									<section className="ele submit_modal_ele_last">
										<div className="menu">비고</div>
										<div className="inputInfo inputinfo_etc">
											<textarea
												className="note-textarea"
												maxLength={800}
												placeholder="800자 내 프로젝트에 대한 코멘트를 남겨 주세요"
												aria-setsize="false"
												onChange={(e) => {
													handleNote(e.target.value);
												}}
											></textarea>
										</div>
									</section>
								</div>
							)}
						</main>
						<footer>
							<button
								className="close_btn"
								onClick={() => {
									clearState();
									handleModalClose('submit');
								}}
							>
								{' '}
								취소{' '}
							</button>
							<button
								className="submit_btn"
								onClick={() => {
									if (challengeTargetCode === 2) {
										handleSubmitEditor();
									} else {
										handleSubmit();
									}
								}}
							>
								제출
							</button>
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default Modal;
