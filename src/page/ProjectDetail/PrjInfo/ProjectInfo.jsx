import { useHistory } from 'react-router-dom';
import { PrjInfoContainer } from './ProjectInfoStyled';
function ProjectInfo({ challenge }) {
	const history = useHistory();
	switch (
		challenge.challengeTargetCode //1: 공모전, 2: 전문영상 편집자 , 3: 영상 크리에이터/언플루언서, 4: 강사채용
	) {
		case 1: {
			//공모전
			return (
				<PrjInfoContainer>
					<table>
						<tbody>
							<tr>
								<th className="prjinfo_header">주최사</th>
								<td>{challenge.ownerName ? challenge.ownerName : 'no data'}</td>
								<th>주관사</th>
								<td>{challenge.companyA ? challenge.companyA : 'no data'}</td>
							</tr>
							<tr>
								{' '}
								<th>후원 / 협찬사</th>
								<td>{challenge.companyB ? challenge.companyB : 'no data'}</td>
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
										'no data'
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
				</PrjInfoContainer>
			);
		}
		case 2: {
			//전문영상 편집자
			return (
				<PrjInfoContainer>
					<table>
						<tbody>
							<tr>
								<th className="prjinfo_header">카테고리</th>
								<td>전문 영상 편집자</td>
								<th>의뢰 주체</th>
								<td>{challenge.companyA ? challenge.companyA : 'no data'}</td>
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
				</PrjInfoContainer>
			);
		}
		case 3: {
			//영상 크리에이터 / 인플루언서
			return (
				<PrjInfoContainer>
					<table>
						<tbody>
							<tr>
								<th className="prjinfo_header">카테고리</th>
								<td>'영상 크리에이터/ 인플루언서</td>
								<th>의뢰 주체</th>
								<td>{challenge.companyA ? challenge.companyA : 'no data'}</td>
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
				</PrjInfoContainer>
			);
		}
		case 4: {
			//강사채용
			return (
				<PrjInfoContainer>
					<table>
						<tbody>
							<tr>
								<th className="prjinfo_header">카테고리</th>
								<td>강사 채용</td>
								<th>의뢰 주체</th>
								<td>{challenge.companyA ? challenge.companyA : 'no data'}</td>
							</tr>
							<tr>
								<th>강의형태</th>
								<td>
									{(() => {
										switch (challenge.hire.isOnline) {
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
								<th>근무지역</th>
								<td>{challenge.hire.loc ? challenge.hire.loc : 'no data'}</td>
								<th>제출서류</th>
								<td>이력서, 포트폴리오</td>
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
				</PrjInfoContainer>
			);
		}
		default: {
			return <div>no data</div>;
		}
	}
}
export default ProjectInfo;
