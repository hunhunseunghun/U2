import { useHistory } from 'react-router-dom';
import { PrjInfoContainer } from './ProjectInfoStyled';
function ProjectInfo({ challenge }) {
	const history = useHistory();
	console.log('projectInfo challenge: ', challenge);
	switch (
		challenge.challengeTargetCode //1: 공모전, 2: 전문영상 편집자 , 3: 영상 크리에이터/언플루언서, 4: 강사채용
	) {
		case 1: {
			//공모전
			return (
				<PrjInfoContainer c>
					<section className="prj_info">
						<table>
							<tbody>
								<tr>
									<th className="prjinfo_header">주최사</th>
									<td>{challenge.ownerName ? challenge.ownerName : 'n'}</td>
									<th>주관사</th>
									<td>{challenge.companyA ? challenge.companyA : ''}</td>
								</tr>
								<tr>
									{' '}
									<th>후원 / 협찬사</th>
									<td>{challenge.companyB ? challenge.companyB : ''}</td>
									<th>홈페이지</th>
									<td>
										{challenge.url ? (
											<div
												onClick={() => {
													let newurl = challenge.url;

													if (
														challenge.url.substring(0, 7) != 'http://' &&
														challenge.url.substring(0, 8) != 'https://'
													) {
														newurl = 'http://' + challenge.url;
													}
													window.open(newurl, '_blank');
												}}
												style={{ cursor: 'pointer' }}
											>
												{challenge.url}
											</div>
										) : (
											''
										)}
									</td>
								</tr>
								<tr>
									<th>시상 종류</th>
									<td>
										{(() => {
											let arr = challenge.rewards.map((el) => {
												switch (el.cat) {
													case 0: {
														return '현금보상 : ' + el.pts;
													}
													case 1: {
														return '현상공모';
													}
													case 2: {
														return '해외탐방';
													}
													case 3: {
														return '국내캠프';
													}
													case 4: {
														return '입사시 가산점';
													}
													case 5: {
														return '인턴채용';
													}
													case 6: {
														return '정직원 채용';
													}
													case 7: {
														return '경품';
													}
													case 99: {
														return el.rewarddesc;
													}
													default: {
														return;
													}
												}
											});
											return arr.join(', ');
										})()}
									</td>
									<th>연락처</th>
									<td>
										{challenge.chargeContactShown
											? challenge.chargeContact
											: '비공개'}
									</td>
								</tr>
								<tr>
									<th>담당자</th>
									<td>{challenge.chargeShown ? challenge.charge : '비공개'}</td>
									<th>이메일</th>
									<td>
										{challenge.chargeeMailShown
											? challenge.chargeeMail
											: '비공개'}
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</PrjInfoContainer>
			);
		}
		case 2: {
			//전문영상 편집자
			return (
				<PrjInfoContainer>
					<section className="prj_info">
						<table>
							<tbody>
								<tr>
									<th className="prjinfo_header">카테고리</th>
									<td>전문 영상 편집자</td>
									<th>의뢰 주체</th>
									<td>{challenge.ownerName ? challenge.ownerName : ''}</td>
								</tr>
								<tr>
									<th>미팅</th>
									<td>
										{(() => {
											switch (challenge.meetCode) {
												case 1: {
													return '비대면 미팅';
												}
												case 2: {
													return '오프라인 미팅';
												}
											}
										})()}
									</td>
									<th>보상</th>
									<td>
										{(() => {
											let arr = challenge.rewards.map((el) => {
												if (el.cat === 0) {
													return `${el.pts} ${el.currency.toUpperCase()}`;
												} else if (el.cat === 99) {
													return el.rewardDesc;
												}
											});
											return arr.join(', ');
										})()}
									</td>
								</tr>
								<tr>
									<th>담당자</th>
									<td>{challenge.chargeShown ? challenge.charge : '비공개'}</td>

									<th>연락처</th>
									<td>
										{challenge.chargeContactShown
											? challenge.chargeContact
											: '비공개'}
									</td>
								</tr>
								<tr>
									<th>이메일</th>
									<td>
										{challenge.chargeeMailShown
											? challenge.chargeeMail
											: '비공개'}
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</PrjInfoContainer>
			);
		}
		case 3: {
			//영상 크리에이터 / 인플루언서
			return (
				<PrjInfoContainer>
					<section className="prj_info">
						<table>
							<tbody>
								<tr>
									<th className="prjinfo_header">카테고리</th>
									<td>'영상 크리에이터/ 인플루언서</td>
									<th>의뢰 주체</th>
									<td>{challenge.ownerName ? challenge.ownerName : ''}</td>
								</tr>
								<tr>
									<th>미팅</th>
									<td>
										{(() => {
											switch (challenge.meetCode) {
												case 1: {
													return '비대면 미팅';
												}
												case 2: {
													return '오프라인 미팅';
												}
											}
										})()}
									</td>
									<th>보상</th>
									<td>
										{(() => {
											let arr = challenge.rewards.map((el) => {
												if (el.cat === 0) {
													return `${el.pts} ${el.currency.toUpperCase()}`;
												} else if (el.cat === 99) {
													return el.rewardDesc;
												}
											});
											return arr.join(', ');
										})()}
									</td>
								</tr>
								<tr>
									<th>담당자</th>
									<td>{challenge.chargeShown ? challenge.charge : '비공개'}</td>

									<th>연락처</th>
									<td>
										{challenge.chargeContactShown
											? challenge.chargeContact
											: '비공개'}
									</td>
								</tr>
								<tr>
									<th>이메일</th>
									<td>
										{challenge.chargeeMailShown
											? challenge.chargeeMail
											: '비공개'}
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</PrjInfoContainer>
			);
		}
		case 4: {
			//강사채용
			return (
				<PrjInfoContainer>
					<section className="prj_info">
						<table>
							<tbody>
								<tr>
									<th className="prjinfo_header">카테고리</th>
									<td>강사 채용</td>
									<th>의뢰 주체</th>
									<td>{challenge.ownerName ? challenge.ownerName : ''}</td>
								</tr>
								<tr>
									<th>강의형태</th>
									<td>
										{(() => {
											switch (challenge.hire.isOnline) {
												case 0: {
													return '온라인 비대면';
												}
												case 1: {
													return '오프라인 대면';
												}
												case 2: {
													return '추후 협의';
												}
											}
										})()}
									</td>
									<th>보상</th>
									<td>
										{(() => {
											let arr = challenge.rewards.map((el) => {
												if (el.cat === 0) {
													return `${el.pts} ${el.currency.toUpperCase()}`;
												} else if (el.cat === 99) {
													return el.rewardDesc;
												}
											});
											return arr.join(', ');
										})()}
									</td>
								</tr>
								<tr>
									<th>근무지역</th>
									<td>
										{challenge.hire.isOnline === 1 && challenge.hire.loc
											? challenge.hire.loc
											: '-'}
									</td>
									<th>제출서류</th>
									<td>
										{(() => {
											let docs = [];
											let docsSet = new Set(
												challenge.hire.docs.map((el) => el.docCode),
											);
											if (docsSet.has('1')) {
												docs.push('국문 이력서');
											}
											if (docsSet.has('2')) {
												docs.push('포트폴리오');
											}
											if (docsSet.has('3')) {
												docs.push('영문 이력서');
											}
											return docs.join(',');
										})()}
									</td>
								</tr>
								<tr>
									<th>모집분야</th>
									<td>
										{(() => {
											let arr = challenge.hire.fields.map((el) => {
												return el.fieldName;
											});
											return arr.join(', ');
										})()}
									</td>
									<th>담당자</th>
									<td>{challenge.chargeShown ? challenge.charge : '비공개'}</td>
								</tr>
								<tr>
									<th>이메일</th>
									<td>
										{challenge.chargeeMailShown
											? challenge.chargeeMail
											: '비공개'}
									</td>
									<th>연락처</th>
									<td>
										{challenge.chargeContactShown
											? challenge.chargeContact
											: '비공개'}
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</PrjInfoContainer>
			);
		}
		default: {
			return <div></div>;
		}
	}
}
export default ProjectInfo;
