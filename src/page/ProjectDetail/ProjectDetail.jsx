import React from 'react';
import { ProjectDetailContainer } from './ProjectDetailStyled';
import ProjectInfo from './PrjInfo/ProjectInfo';
import { FaShareSquare } from 'react-icons/fa';
function ProjectDetail(props) {
	console.log(props);
	const challenge = props.location.state.challenge;
	console.log('challenge: ', challenge);
	return (
		<ProjectDetailContainer>
			<section className="prj-title">{challenge.title}</section>
			<section className="prj-info">
				<ProjectInfo challenge={challenge}></ProjectInfo>
			</section>
			<section className="prj-detail">{challenge.challengeDesc}</section>
			<section className="prj-control">
				<div className="more-prj">{challenge.ownerName}의 프로젝트 더 보기</div>
				<button>목록</button>
				<button>챌린지</button>
				{challenge.challengeTargetCode === 4 ? (
					<button>지원하기</button>
				) : (
					<button>자료제출</button>
				)}
				<FaShareSquare />
			</section>
			<section className="comments"></section>
		</ProjectDetailContainer>
	);
}
export default ProjectDetail;
// applications: []
// challengeDesc: "NCT x 여친 생일축하 공모전"
// challengeIdx: 7
// challengeTargetCode: 1
// challengerCount: 0
// charge: null
// chargeContact: null
// chargeContactShown: 0
// chargeShown: 0
// chargeeMail: null
// chargeeMailShown: 0
// commentAllowed: 1
// commentCount: 1
// companyA: null
// companyB: null
// datePub: "2021-06-24T15:00:00+00:00"
// fileRef: null
// hire: {fields: null, docs: null, challengeIdx: 0, seq: 0, isOnline: 0, …}
// logo: null
// mainImage: null
// meetCode: 0
// memberIdx: 58
// missions: [{…}]
// modifyDate: "2021-07-08T14:55:31.5751142+00:00"
// modifyMemberIdx: 0
// ownerIdx: 0
// ownerName: "SM엔터테인먼트"
// promoting: 0
// registDate: "2021-07-08T14:55:31.5751141+00:00"
// registMemberIdx: 0
// rewards: []
// shareCount: 0
// subtitle: "생일을 맞이한 여자 친구를 위한"
// title: "NCT x 여친 생일축하 공모전"
// url: null
