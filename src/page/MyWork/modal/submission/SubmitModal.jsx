import { useState } from 'react';
import { ModalContainer } from './SubmitModalStyled';
import { BsPlusSquareFill, BsDashSquareFill } from 'react-icons/bs';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import Banks from './banks';
import { validateEmail } from '../../../../library/validate';
import 'react-phone-number-input/style.css';
// import 'csshake.min.css';
function Modal({ open, data, handleModalClose }) {
	console.log(data);
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

	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
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
											<input></input>
										</div>
									</section>
									<section className="ele">
										<div className="menu">배송지 주소</div>
										<div className="inputInfo">
											<input></input>
										</div>
									</section>
								</div>
							</section>
							<section className="ele">
								<div className="menu">이미지</div>
								<div className="inputInfo">
									<input></input>
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
