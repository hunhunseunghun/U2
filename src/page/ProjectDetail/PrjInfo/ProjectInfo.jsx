import { PrjInfoContainer } from './ProjectInfoStyled';
function ProjectInfo({ challenge }) {
	console.log('challenge: ', challenge);
	switch (
		challenge.challengeTargetCode //1: 공모전, 2: 전문영상 편집자 , 3: 영상 크리에이터/언플루언서, 4: 강사채용
	) {
		case 1: {
			//공모전
			return (
				<PrjInfoContainer>
					<table>
						<thead>
							<th>주최사</th>
							<th>주관사</th>
							<th>후원 / 협찬사</th>
							<th>홈페이지</th>
						</thead>
						<tbody>
							<tr>{challenge.ownerName}</tr>
							<tr>{challenge.companyA}</tr>
							<tr>{challenge.companyB}</tr>
							<tr>{challenge.url ? challenge.url : 'no data'}</tr>
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
			return;
		}
	}
}
export default ProjectInfo;
