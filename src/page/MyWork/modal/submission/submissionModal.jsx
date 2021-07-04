import { useState } from 'react';
import { ModalContainer } from './smModalStyled';
import { BsPlusSquareFill, BsDashSquare } from 'react-icons/bs';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
function Modal({ open, data, handleModalClose }) {
	console.log(data);
	const [title, setTitle] = useState('');
	const [URLs, setURLS] = useState([]);
	const [URLinput, setURLinput] = useState('');
	const [mobileNum, setMobileNum] = useState('');
	const [email, setEmail] = useState('');
	const [bankAccountNum, setBankAccountNum] = useState('');
	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<header>자료 제출</header>
						<main className={'sm-main'}>
							<section>
								<div>작품명</div>
								<div>
									<input
										type="text"
										value={title}
										onChange={(e) => {
											setTitle(e.target.value);
										}}
									></input>
								</div>
							</section>
							<section>
								<div>프로젝트 영상</div>
								<div className="video-url">
									<span>Youtube URL:</span>
									<ul>
										{/* show inputs */}
										{URLs.map((el, idx) => {
											return (
												<li key={idx}>
													<input value={el} readOnly></input>
													<BsDashSquare
														onClick={() => {
															let copyArr = URLs.slice();
															copyArr.splice(idx, 1);
															setURLS(copyArr);
														}}
													/>
												</li>
											);
										})}
									</ul>
									{/* default input box */}
									<input
										onChange={(e) => {
											setURLinput(e.target.value);
										}}
										value={URLinput}
									></input>
									<BsPlusSquareFill
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
								</div>
							</section>
							<section>
								<div>휴대전화</div>
								<div>
									<PhoneInput
										placeholder="휴대전화 번호를 입력해 주십시오"
										onChange={setMobileNum}
										value={mobileNum}
									/>
									<button className="auth-btn">인증하기</button>
									{mobileNum}
								</div>
							</section>
							<section>
								<div>이메일</div>
								<div>
									<input placeholder="이메일 주소를 입력해 주십시오"></input>
									<button>인증번호 받기</button>
								</div>
							</section>
							<section>
								<div>계좌번호</div>
								<div>
									<select name="account_bank_id">
										<option value="">은행 선택</option>
										<option value="35">경남은행</option>
										<option value="29">광주은행</option>
										<option value="7">국민은행</option>
										<option value="5">기업은행</option>
										<option value="15">농협중앙회</option>
										<option value="17">농협회원조합</option>
										<option value="25">대구은행</option>
										<option value="47">도이치은행</option>
										<option value="27">부산은행</option>
										<option value="3">산업은행</option>
										<option value="41">상호저축은행</option>
										<option value="37">새마을금고</option>
										<option value="11">수협중앙회</option>
										<option value="36">신한금융투자</option>
										<option value="60">신한은행</option>
										<option value="39">신협중앙회</option>
										<option value="9">외환은행</option>
										<option value="19">우리은행</option>
										<option value="56">우체국</option>
										<option value="33">전북은행</option>
										<option value="31">제주은행</option>
										<option value="68">카카오뱅크</option>
										<option value="67">케이뱅크</option>
										<option value="59">하나은행</option>
										<option value="23">한국씨티은행</option>
										<option value="45">HSBC은행</option>
										<option value="21">SC제일은행</option>
									</select>
									<input
										type="number"
										value={bankAccountNum}
										onChange={(e) => {
											setBankAccountNum(e.target.value);
										}}
									></input>
								</div>
							</section>
							<section>
								<div>주소</div>
								<div>받으시는 분 성함</div>
							</section>
							<section>
								<div>이미지</div>
								<div>
									<input></input>
								</div>
							</section>
							<section>
								<div>비고</div>
								<div>
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
