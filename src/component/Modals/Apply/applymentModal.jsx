import { useState, useEffect } from 'react';
import axios from 'axios';
import { ModalContainer } from './applymentModalStyled';
import { getSingleFileFromBlob } from '../../../library/azureBlob';

function ApplymentModal({
	open,
	challengeIdx,
	challengeTargetCode,
	handleModalClose,
}) {
	const [data, setData] = useState({});
	useEffect(() => {
		if (challengeIdx) {
			var config = {
				method: 'get',
				url:
					process.env.REACT_APP_U2_DB_HOST +
					`/Campaign/challengehireapply/${Number(challengeIdx)}?seq=1`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
			};
			axios(config).then((response) => {
				console.log('data in applyment: ', response);
				setData(response.data);
			});
		}
	}, [open]);

	return (
		<ModalContainer className="workdetail_submission_modal">
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<header>지원서</header>
						<main>
							<div className="submission_modal_ele">
								<div className="menu">지원자</div>
								<div className="inputInfo">{data.name || 'no data'}</div>
							</div>
							<section className="submission_modal_ele">
								<div className="menu">휴대전화</div>
								<div className="inputInfo">
									{data.mobile ? data.mobile : 'no data'}
									<div className="authorized">
										<kbd>인증완료</kbd>
									</div>
								</div>
							</section>
							<section className="submission_modal_ele">
								<div className="menu">이메일</div>
								<div className="inputInfo">
									{data.email ? data.email : 'no data'}
									<div className="authorized">
										<kbd>인증완료</kbd>
									</div>
								</div>
							</section>

							<section className="submission_modal_ele">
								<div className="menu">계좌번호</div>
								<div className="inputInfo">
									{data.bankName ? (
										<>
											{data.bankName} | {data.bankAccount}
											<div className="authorized">
												<kbd>인증완료</kbd>
											</div>
										</>
									) : (
										'-'
									)}
								</div>
							</section>
							{challengeTargetCode === 4 && (
								<div>
									<section className="submission_modal_ele">
										<div className="menu">국문 이력서</div>
										<div className="inputInfo">
											{data.cv ? (
												<a
													href={getSingleFileFromBlob(data.cv)}
													target="_blank"
												>
													{data.cv.split('/')[1]}
												</a>
											) : (
												'-'
											)}
										</div>
									</section>
									<section className="submission_modal_ele">
										<div className="menu">영문 이력서</div>
										<div className="inputInfo">
											{data.cvEng ? (
												<a
													href={getSingleFileFromBlob(data.cvEng)}
													target="_blank"
												>
													{data.cv.split('/')[1]}
												</a>
											) : (
												'-'
											)}
										</div>
									</section>
								</div>
							)}
							<section className="submission_modal_ele">
								<div className="menu">포트폴리오</div>
								<div className="inputInfo_potfolio">
									{data.fileRef ? (
										<a
											href={getSingleFileFromBlob(data.fileRef)}
											target="_blank"
										>
											{data.fileRef.split('/')[1]}
										</a>
									) : (
										'-'
									)}

									{data.urls && data.urls.length > 0
										? data.urls.map((el) => {
												let newurl = el.url;

												if (
													el.url.substring(0, 7) != 'http://' &&
													el.url.substring(0, 8) != 'https://'
												) {
													newurl = 'http://' + el.url;
												}
												return (
													<a href={newurl} target="_blank">
														{el.url}
													</a>
												);
										  })
										: '-'}
								</div>
							</section>
						</main>

						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose('applyment');
								}}
							>
								{' '}
								닫기{' '}
							</button>
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default ApplymentModal;
