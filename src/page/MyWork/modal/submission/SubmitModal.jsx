import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalContainer } from './SubmitModalStyled';
import { BsPlusSquareFill, BsDashSquareFill } from 'react-icons/bs';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import Banks from './banks';
import { validateEmail } from '../../../../library/validate';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import AddressModal from '../address/AddressModal';

// import 'csshake.min.css';
const server = process.env.REACT_APP_TEST_API;
const key = process.env.REACT_APP_JUSO_KEY;
function Modal({ open, data, handleModalClose }) {
	console.log(data);
	const userInfo = useSelector((state) => state.userInfo);

	const [title, setTitle] = useState('');

	const [URLs, setURLS] = useState([]);
	const [URLinput, setURLinput] = useState('');

	const [mobileNum, setMobileNum] = useState('');
	const [mobileErr, setMobileErr] = useState('');
	const [toggleMobileAuthInput, setToggleMobileAuthInput] = useState(false);
	const [mobileAuthInput, setMobileAuthInput] = useState('');
	const [mobileAuthorized, setMobileAuthorized] = useState(null);

	const [email, setEmail] = useState(null);
	const [emailErr, setEmailErr] = useState('');
	const [emailErrShake, setEmailErrShake] = useState(false);
	const [toggleEmailAuthInput, setToggleEmailAuthInput] = useState(false);
	const [emailAuthInput, setEmailAuthInput] = useState('');
	const [emailAuthorized, setEmailAuthorized] = useState(null);

	const [bankAccountNum, setBankAccountNum] = useState('');

	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [address3, setAddress3] = useState('');
	const [openAddrModal, setOpenAddrModal] = useState(false);
	const [addrMobile, setAddrMobile] = useState('');
	//----------------------------handles

	const handleValidateMobile = () => {
		if (mobileNum) {
			if (isValidPhoneNumber(mobileNum)) {
				setMobileErr(null);
				setToggleMobileAuthInput(true);
			} else {
				setMobileErr('옳바른 전화번호 형식이 아닙니다.');
			}
		} else {
			setMobileErr('전화번호를 입력해주세요.');
		}
	};
	const handleAuthMobile = () => {
		setMobileAuthorized(mobileAuthInput === '0314');
	};

	const handleValidateEmail = () => {
		const { isValid, error } = validateEmail(email);
		if (!isValid) {
			setEmailErr(error);
			setToggleEmailAuthInput(false);
			setEmailAuthorized(null);
		} else {
			setEmailErr(null);
		}
	};

	const handleShake = (inputType) => {
		switch (inputType) {
			case 'email': {
				setEmailErrShake(true);
				setTimeout(() => {
					setEmailErrShake(false);
				}, 1000);
				break;
			}
			default: {
				break;
			}
		}
	};
	const handleSearchAddress = () => {
		setOpenAddrModal(true);
	};
	const setAddressData = (data) => {
		console.log('address data: ', data);
		setAddress1(data.zonecode);

		setAddress2(
			data.address +
				(data.bname && ' ' + data.bname) +
				(data.buildingName && ' ' + data.buildingName),
		);
	};

	const handleSubmit = () => {
		console.log(userInfo);
		var data = {
			videos: [
				{
					challengeIdx: 3,
					missonSeq: 1,
					memberIdx: userInfo.memberIdx, //50
					seq: 1,
					platform: 'YU',
					videoId: 'string',
					registMemberIdx: userInfo.memberIdx, //50
					registDate: '2021-07-07T06:27:06.067Z',
					modifyMemberIdx: 0,
					modifyDate: '2021-07-07T06:27:06.067Z',
				},
			],
			challengeIdx: 3,
			missonSeq: 1,
			memberIdx: userInfo.memberIdx,
			contactCode: 0,
			contact: mobileNum, //"+821033117871"
			email: email, //"dlghwns0314@naver.com"
			postCode: 'string',
			addr: 'string',
			photo: 'string',
			note: 'string',
			statusCode: 0,
			checkStatusCode: 0,
			dateApplied: '2021-07-07T06:27:06.067Z',
			registMemberIdx: userInfo.memberIdx,
			registDate: '2021-07-07T06:27:06.067Z',
			modifyMemberIdx: 0,
			modifyDate: '2021-07-07T06:27:06.067Z',
		};
		var config = {
			method: 'get',
			// https://u2-rest-dev.azurewebsites.net/api/Campaign/challengesubmit
			url: server + '/Campaign/challengesubmit',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: data,
		};
		console.log('server: ', server);
		console.log('token: ', localStorage.getItem('token'));
		axios(config)
			.then((response) => {
				console.log('response: ');
				console.log(response.data);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	};

	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				<AddressModal
					open={openAddrModal}
					handleModalClose={() => {
						setOpenAddrModal(false);
					}}
					setAddressData={setAddressData}
				/>
				{open ? (
					<section>
						<header>자료 제출</header>
						<main className={'sm-main'}>
							<section className="ele">
								<div className="menu">작품명</div>
								<div className="inputInfo">
									<input
										type="text"
										value={title}
										onChange={(e) => {
											setTitle(e.target.value);
										}}
									></input>
								</div>
							</section>
							<section className="ele">
								<div className="menu">프로젝트 영상</div>
								<div className="inputInfo URLs">
									<span className="youtubeURL">Youtube URL:</span>
									<ul className="ul-URLs">
										{/* show inputs */}
										{URLs.map((el, idx) => {
											return (
												<li key={idx} className="li-url">
													<input value={el} readOnly></input>
													<BsDashSquareFill
														className="plusMinus"
														onClick={() => {
															let copyArr = URLs.slice();
															copyArr.splice(idx, 1);
															setURLS(copyArr);
														}}
													/>
												</li>
											);
										})}
										<li>
											<input
												onChange={(e) => {
													setURLinput(e.target.value);
												}}
												value={URLinput}
											></input>
											<BsPlusSquareFill
												className="plusMinus"
												onClick={() => {
													if (URLinput) {
														//input이 있을때만
														let copyArr = URLs.slice();
														copyArr.push(URLinput);
														setURLS(copyArr);
														setURLinput('');
													}
												}}
											/>
										</li>
									</ul>
									{/* default input box */}
								</div>
							</section>
							<section className="ele">
								<div className="menu">휴대전화</div>
								<div className="inputInfo">
									<div className="MobileContainer">
										<PhoneInput
											placeholder="휴대전화 번호를 입력해 주십시오"
											onChange={setMobileNum}
											value={mobileNum}
											className="phoneInput"
										></PhoneInput>

										<button //휴대폰 validation check 버튼
											className="auth-btn"
											onClick={() => {
												handleValidateMobile();
											}}
										>
											인증하기
										</button>
										{mobileErr}
									</div>
									<div>
										{toggleMobileAuthInput && (
											<div className="auth-input">
												인증번호 입력:{' '}
												<input
													placeholder="인증번호를 입력해 주십시오"
													onChange={(e) => {
														setMobileAuthInput(e.target.value);
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
												setEmail(e.target.value);
												handleValidateEmail();
											}}
										></input>
										<button
											className="auth-btn"
											onClick={() => {
												if (emailErr === null) {
													setToggleEmailAuthInput(true);
												} else {
													handleShake('email');
												}
											}}
										>
											인증번호 받기
										</button>
										{toggleEmailAuthInput && ( //validation error 가 없고 버튼이 눌렸을 때
											<div className="auth-input">
												인증번호 입력:{' '}
												<input
													placeholder="인증번호를 입력해 주십시오"
													onChange={(e) => {
														setEmailAuthInput(e.target.value);
													}}
												></input>
												<button
													className="auth-btn"
													onClick={() => {
														setEmailAuthorized(emailAuthInput === 'hello');
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
								<div className="menu">계좌번호</div>
								<div className="inputInfo">
									<Banks className="banks-select" />
									<input
										type="number"
										value={bankAccountNum}
										onChange={(e) => {
											setBankAccountNum(e.target.value);
										}}
									></input>
									<button className="auth-btn">계좌 인증</button>
								</div>
							</section>
							<section className="ele">
								<div className="menu">주소</div>
								<div className="inputInfo Address">
									<section className="ele">
										<div className="menu">받으시는 분 성함</div>
										<div className="inputInfo">
											<input></input>
										</div>
									</section>
									<section className="ele">
										<div className="menu">받으시는 분 연락처</div>
										<div className="inputInfo">
											<PhoneInput
												onChange={setAddrMobile}
												value={addrMobile}
												placeholder="전화번호를 입력해주십시오"
											/>
										</div>
									</section>
									<section className="ele">
										<div className="menu">배송지 주소</div>
										<div className="inputInfo address">
											<div>
												<input value={address1} readOnly></input>
												<button
													onClick={() => {
														handleSearchAddress();
													}}
												>
													주소 찾기
												</button>
											</div>

											<input value={address2} readOnly></input>
											<div>
												상세주소:{' '}
												<input
													value={address3}
													onChange={(e) => {
														setAddress3(e.target.value);
													}}
												></input>
											</div>
										</div>
									</section>
								</div>
							</section>
							<section className="ele">
								<div className="menu">이미지</div>
								<div className="inputInfo">
									<input
										type="file"
										onChange={(e) => {
											console.log(e.target.files);
										}}
										multiple
									></input>
								</div>
							</section>
							<section className="ele">
								<div className="menu">비고</div>
								<div className="inputInfo">
									<input></input>
								</div>
							</section>
						</main>
						<footer>
							<button
								className="submit-btn"
								onClick={() => {
									handleSubmit();
								}}
							>
								제출
							</button>
							<button
								className="close"
								onClick={() => {
									handleModalClose('submission');
								}}
							>
								{' '}
								취소{' '}
							</button>
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default Modal;
