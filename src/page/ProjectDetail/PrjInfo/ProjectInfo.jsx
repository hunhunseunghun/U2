import { PrjInfoContainer } from './ProjectInfoStyled';
function ProjectInfo({ challenge }) {
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
								<td>{challenge.url ? challenge.url : 'no data'}</td>
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
								<td>{}</td>
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
								<tr>
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
						<thead>
							<th>카테고리</th>
							<th>의뢰 주체</th>
							<th>미팅</th>
							<th>보상</th>
						</thead>
						<tbody>
							<tr>xxxx</tr>
							<tr>xxxx</tr>
							<tr>Xxxxx</tr>
							<tr>xxxxx</tr>
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
						<thead>
							<th>카테고리</th>
							<th>의뢰 주체</th>
							<th>강의 형태</th>
							<th>보상</th>
							<th>근무지역</th>
							<th>제출 서류</th>
						</thead>
						<tbody>
							<tr>강사 채용</tr>
							<tr>홍길동</tr>
							<tr>온라인</tr>
							<tr>200000 KRW</tr>
							<tr>서울 강동구</tr>
							<tr>이력서, 포트폴리오</tr>
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
