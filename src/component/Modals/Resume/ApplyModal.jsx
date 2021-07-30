import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ModalContainer } from './ApplyModalStyled';
import { BsPlusSquareFill, BsDashSquareFill } from 'react-icons/bs';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import AddressModal from '../../address/AddressModal';
import Banks from '../../banks';
import { validateEmail } from '../../../library/validate';
import Uploader from '../../Uploader/Uploader';
import { TextFile } from '../../../library/getJson';
const initialState = {
	title: '',
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
	resumeFiles: [],
	pfURLs: [],
	pfURLinput: '',
	pfFile: null,
	cv: null,
	cvEng: null,
	bankAccountNum: '',
	banks: [],
	bankCode: 0,
	bankAccountErr: '',
	BaErrShake: false,
	bankAuthorized: false,
	address1: '',
	address2: '',
	address3: '',
	openAddrModal: false,
	addrMobile: '',
};
const server = process.env.REACT_APP_U2_DB_HOST;
function Modal({ open, challenge, handleModalClose }) {
	const userInfo = useSelector((state) => state.userInfo);
	// console.log('challenge in resumemodal : ', challenge);
	const [
		{
			title,
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
			resumeFiles,
			pfURLinput,
			pfURLs,
			pfFile,
			cv,
			cvEng,
			bankAccountNum,
			banks,
			bankCode,
			bankAccountErr,
			BaErrShake,
			bankAuthorized,
			address1,
			address2,
			address3,
			openAddrModal,
			addrMobile,
		},
		setState,
	] = useState({ ...initialState });

	const clearState = () => {
		setState({ ...initialState });
	};

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
	const handleBankCode = (code) => {
		// console.log('code: ', code);
		// setBankCode(code);
		setState((preState) => ({ ...preState, bankCode: code }));
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
	const checkSubmit = () => {
		if (
			!title ||
			mobileErr ||
			emailErr ||
			bankAccountErr ||
			!address1 ||
			!address2 ||
			!address3
		) {
			alert('모든 필수 항목을 입력해야 합니다.');
			return true;
		}
	};
	const [submitClicked, setSubmitClicked] = useState(false);
	const handleSubmit = () => {
		if (submitClicked) return;
		if (checkSubmit() === true) {
			return;
		}
		setSubmitClicked(true);
		// var data = {
		// 	videos: pfURLs.map((el, idx) => {
		// 		return {
		// 			challengeIdx: challenge.challengeIdx, //challenge.challengeIdx
		// 			missonSeq: idx + 1,
		// 			memberIdx: userInfo.memberIdx,
		// 			seq: idx + 1,
		// 			// platform: el.platform,
		// 			videoId: el,
		// 			// registMemberIdx: userInfo.memberIdx,
		// 			// registDate: '2021-07-08T12:43:08.139Z',
		// 			// modifyMemberIdx: userInfo.memberIdx,
		// 			// modifyDate: '2021-07-08T12:43:08.139Z',
		// 		};
		// 	}),
		// 	postCodeAddr: address2,
		// 	challengeIdx: challenge.challengeIdx, //challenge.challengeIdx
		// 	missonSeq: 1,
		// 	memberIdx: userInfo.memberIdx,
		// 	contactCode: 1,
		// 	contact: mobileNum,
		// 	email: email,
		// 	postCode: address1,
		// 	addr: address3,
		// 	bankCode: bankCode,
		// 	bankAccount: bankAccountNum,
		// 	// photo: 'string',
		// 	// note: 'string',
		// 	statusCode: 1,
		// 	checkStatusCode: 0,
		// 	dateApplied: new Date(),
		// 	name: userInfo.fullName,
		// 	// registMemberIdx: 0,
		// 	// registDate: '2021-07-14T17:37:33.365Z',
		// 	// modifyMemberIdx: 0,
		// 	// modifyDate: '2021-07-14T17:37:33.365Z',
		// };
		var data = {
			challengeIdx: challenge.challengeIdx,
			seq: 1,
			memberIdx: userInfo.memberIdx,
			mobile: mobileNum,
			email: email,
			cv: cv,
			cvEng: cvEng,
			fileRef: pfFile,
			bankCode: bankCode,
			bankAccount: bankAccountNum,
			postCode: address1,
			addr: address3,
			// bankName: "string",
			postCodeAddr: address2,
			// "urls": [
			//   {
			// 	"challengeIdx": 0,
			// 	"seq": 0,
			// 	"memberIdx": 0,
			// 	"url": "string"
			//   }
			// ],
			urls: pfURLs.map((el, idx) => {
				return {
					challengeIdx: challenge.challengeIdx, //challenge.challengeIdx
					memberIdx: userInfo.memberIdx,
					seq: idx + 1,
					url: el,
				};
			}),
			// "registMemberIdx": 0,
			// "registDate": "2021-07-30T01:31:20.094Z",
			// "modifyMemberIdx": 0,
			// "modifyDate": "2021-07-30T01:31:20.094Z"
		};
		// TextFile(data);
		var config = {
			method: 'post',
			// https://u2-rest-dev.azurewebsites.net/api/Campaign/challengehireapply
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
					clearState();
					handleModalClose('apply');
					setSubmitClicked(false);
				}
			})
			.catch((err) => {
				console.log('err: ', err.response);
				if (err.response.data.error === 'Already submitted') {
					alert('이미 제출한 프로젝트 입니다.');
					setSubmitClicked(false);
					handleModalClose('apply');
					clearState();
				} else {
					alert(err.response.data);
					clearState();
					handleModalClose('apply');
					setSubmitClicked(false);
				}
			});
	};

	useEffect(() => {
		var config = {
			method: 'get',
			// https://u2-rest-dev.azurewebsites.net/api/Campaign/challengesubmit
			url: server + '/common/bankcode',
			headers: {
				// Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			// data: data,
		};
		axios(config).then((response) => {
			const banks = response.data;
			setState((preState) => ({ ...preState, banks: banks }));
		});
	}, []);
	useEffect(() => {
		if (challenge) {
			var config = {
				method: 'get',
				url:
					process.env.REACT_APP_U2_DB_HOST +
					`/Campaign/challenge/${challenge.challengeIdx}`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
			};
			if (challenge.challengeTargetCode === 4) {
				axios(config)
					.then((response) => {
						console.log('apply modal useEffect Data: ', response.data);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
	}, [challenge]);

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
						<header>지원하기</header>
						<main className="sm-main">
							<section className="ele">
								<div className="menu">프로젝트명</div>
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
								<div className="menu">휴대전화</div>
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
								<div className="menu">이메일</div>
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
											<button className="auth-btn complete">인증완료</button>
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
								<div className="menu">국문 이력서</div>
								<div className="inputInfo">
									<Uploader
										setFilePath={(path) => {
											setState((preState) => ({
												...preState,
												cv: path,
											}));
										}}
										multiple={false}
										accept={'.pdf,.doc,.ppt'}
										memberIdx={userInfo.memberIdx}
										folder={'market-apply-cveng'}
										placeholder="이력서 선택"
									/>
								</div>
							</section>
							<section className="ele">
								<div className="menu">영문 이력서</div>
								<div className="inputInfo">
									<Uploader
										setFilePath={(path) => {
											setState((preState) => ({
												...preState,
												cvEng: path,
											}));
										}}
										multiple={false}
										accept={'.pdf,.doc,.ppt'}
										memberIdx={userInfo.memberIdx}
										folder={'market-apply-cveng'}
										placeholder="Choose your curriculum vitae"
									/>
								</div>
							</section>
							<section className="ele">
								<div className="menu">포트폴리오</div>
								<div className="inputInfo URLs">
									<table>
										<tr>
											<span className="youtubeURL">URL:</span>
											<ul className="ul_URLs">
												{pfURLs.map((el, idx) => {
													return (
														<li key={idx} className="li-url">
															<input value={el} readOnly></input>
															<BsDashSquareFill
																className="plusMinus"
																onClick={() => {
																	let copyArr = pfURLs.slice();
																	copyArr.splice(idx, 1);
																	// setURLS(copyArr);
																	setState((preState) => ({
																		...preState,
																		pfURLs: copyArr,
																	}));
																}}
															/>
														</li>
													);
												})}
												<li>
													<input
														onChange={(e) => {
															setState((preState) => ({
																...preState,
																pfURLinput: e.target.value,
															}));
														}}
														value={pfURLinput}
													></input>
													<BsPlusSquareFill
														className="plusMinus"
														onClick={() => {
															if (pfURLinput) {
																let copyArr = pfURLs.slice();
																copyArr.push(pfURLinput);
																setState((preState) => ({
																	...preState,
																	pfURLs: copyArr,
																	pfURLinput: '',
																}));
															}
														}}
													></BsPlusSquareFill>
												</li>
											</ul>
										</tr>
										<tr>
											<div>
												<Uploader
													setFilePath={(path) => {
														setState((preState) => ({
															...preState,
															pfFile: path,
														}));
													}}
													multiple={false}
													accept={'.pdf,.doc,.ppt'}
													memberIdx={userInfo.memberIdx}
													folder={'market-apply-potfolio '}
													placeholder="포트폴리오 선택"
												/>
											</div>
										</tr>
									</table>
									{/* <span className="youtubeURL">URL:</span>
									<ul className="ul_URLs">
										{pfURLs.map((el, idx) => {
											return (
												<li key={idx} className="li-url">
													<input value={el} readOnly></input>
													<BsDashSquareFill
														className="plusMinus"
														onClick={() => {
															let copyArr = pfURLs.slice();
															copyArr.splice(idx, 1);
															// setURLS(copyArr);
															setState((preState) => ({
																...preState,
																pfURLs: copyArr,
															}));
														}}
													/>
												</li>
											);
										})}
										<li>
											<input
												onChange={(e) => {
													setState((preState) => ({
														...preState,
														pfURLinput: e.target.value,
													}));
												}}
												value={pfURLinput}
											></input>
											<BsPlusSquareFill
												className="plusMinus"
												onClick={() => {
													if (pfURLinput) {
														let copyArr = pfURLs.slice();
														copyArr.push(pfURLinput);
														setState((preState) => ({
															...preState,
															pfURLs: copyArr,
															pfURLinput: '',
														}));
													}
												}}
											></BsPlusSquareFill>
										</li>
									</ul> */}
									{/* <div>
										<Uploader
											setFilePath={(path) => {
												setState((preState) => ({
													...preState,
													pfFile: path,
												}));
											}}
											multiple={false}
											accept={'.pdf,.doc,.ppt'}
											memberIdx={userInfo.memberIdx}
											folder={'market-apply-potfolio '}
											placeholder="포트폴리오 선택"
										/>
									</div> */}
								</div>
							</section>
							<section className="ele">
								<div className="menu">계좌번호</div>
								<div className="inputInfo banks_accout">
									<Banks handleBankCode={handleBankCode} datas={banks} />
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
							<section className="ele">
								<div className="menu">주소</div>
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
						</main>
						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose('apply');
								}}
							>
								{' '}
								취소{' '}
							</button>
							<button
								className="submit_btn"
								onClick={() => {
									handleSubmit();
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
