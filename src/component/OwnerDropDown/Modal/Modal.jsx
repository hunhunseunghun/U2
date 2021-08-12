import React, { useState } from 'react';
import axios from 'axios';
import requestBodyGenerator from '../../../library/requestBodyGenerator';
import { useSelector } from 'react-redux';
import Uploader from '../../Uploader/Uploader';
const Modal = ({
	modalOpen,
	handleOpenModal,
	handleCloseModal,
	header,
	handleNewData,
}) => {
	const userInfo = useSelector((state) => state.userInfo);
	const [ownerCat, setOwnerCat] = useState(0); // 0: 개인 , 1: 비지니스
	const [company, setCompany] = useState('');
	const [logo, setLogo] = useState(null);
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [sns, setSns] = useState('');
	const [snsType, setSnsType] = useState('F');

	const [loading, setLoading] = useState(false);

	const handleOwnerCat = (e) => {
		switch (e.target.value) {
			case '개인': {
				setOwnerCat(0);
				break;
			}

			case '비지니스': {
				setOwnerCat(1);
				break;
			}

			default:
				break;
		}
		// setOwnerCat(e.target.value);
	};
	const checkSubmit = () => {
		if (loading) {
			return alert('업로드 중입니다.');
		}
		if (!company) return alert('이름을 입력해주세요');
		if (!email) return alert('이메일을 입력해주세요');
		if (!mobile) return alert('전화번호를 입력해주세요');
		return true;
	};
	const handleSubmit = () => {
		console.log(userInfo);
		if (checkSubmit() !== true) return;
		const data = requestBodyGenerator(
			{
				ownerLogo: logo,
				ownerIdx: userInfo.memberIdx,
				memberIdx: userInfo.memberIdx,
				ownerCat: ownerCat,
				company: company,
				email: email,
				contact: mobile,
				socialMediaCode: snsType,
				socialMediaId: sns,
			},
			'challengeowner',
		);
		var config = {
			method: 'post',
			url: process.env.REACT_APP_U2_DB_HOST + '/Campaign/challengeowner',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: data,
		};
		axios(config)
			.then((response) => {
				console.log(response.data);
				handleNewData(response.data);
				handleCloseModal();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className={modalOpen ? 'openModal modal' : 'modal'}>
			{modalOpen ? (
				<section>
					<header>
						{header}
						<button className="close" onClick={handleCloseModal}>
							{' '}
							&times;{' '}
						</button>
					</header>
					<main>
						<section className="modal_ele">
							<div className="modal_menu">형식</div>
							<div className="modal_inputInfo">
								<form className="selectForm">
									<div>
										<input
											type="radio"
											name="Form"
											value="개인"
											onClick={handleOwnerCat}
											checked={ownerCat === 0}
											readOnly
										/>
										<label htmlFor="From">개인</label>
									</div>
									<div>
										<input
											type="radio"
											name="Form"
											value="비지니스"
											onClick={handleOwnerCat}
											checked={ownerCat === 1}
											readOnly
										/>
										<label htmlFor="From">비지니스</label>
									</div>
								</form>
							</div>
						</section>
						<section className="modal_ele">
							<div className="modal_menu">
								{!ownerCat ? '* 개인' : '* 비지니스'}
							</div>
							<div className="modal_inputInfo">
								<div className="inputCompany">
									<input
										type="text"
										className="inputCompany"
										onChange={(e) => {
											setCompany(e.target.value);
										}}
									/>
								</div>
							</div>
						</section>
						<section className="modal_ele">
							<div className="modal_menu">대표 로고 이미지</div>
							<div className="modal_inputInfo">
								<div className="competitionName">
									{/* <input
										type="file"
										accept="image/*"
										className="competitionName"
										onChange={(e) => {
											// console.log(e.target.value);
											// console.log(e.target.files[0]);
											setLogo(e.target.files[0]);
										}}
									/> */}
									<Uploader
										setFilePath={setLogo}
										multiple={false}
										accept={'image/*'}
										memberIdx={userInfo.memberIdx}
										folder={'market-owner-logo'}
										placeholder="이미지 선택. (권장비율: 16:9)"
										setLoading={setLoading}
										loading={loading}
									/>
								</div>
							</div>
						</section>
						<section className="modal_ele">
							<div className="modal_menu">* 이메일</div>
							<div className="modal_inputInfo">
								<div className="inputEmail">
									<input
										type="text"
										className="prjName"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>
							</div>
						</section>
						<section className="modal_ele">
							<div className="modal_menu">* 전화번호</div>
							<div className="modal_inputInfo">
								<div className="inputPhoneNumber">
									<input
										type="text"
										className="prjName"
										onChange={(e) => {
											setMobile(e.target.value);
										}}
									/>
								</div>
							</div>
						</section>
						<section className="modal_ele">
							<div className="modal_menu">SNS ID</div>
							<div className="modal_inputInfo">
								<div className="inputSnsID">
									<input
										type="text"
										className="prjName"
										onChange={(e) => {
											setSns(e.target.value);
										}}
									/>
									<select
										onChange={(e) => {
											console.log('snsType: ', e.target.value);
											setSnsType(e.target.value);
										}}
									>
										<option value="F" defaultChecked>
											페이스북
										</option>
										<option value="K">카카오톡</option>
									</select>
								</div>
							</div>
						</section>
					</main>
					<footer>
						<button className="close" onClick={handleCloseModal}>
							{' '}
							취소{' '}
						</button>
						<button className="close" onClick={handleSubmit}>
							{' '}
							저장{' '}
						</button>
					</footer>
				</section>
			) : null}
		</div>
	);
};

export default Modal;
