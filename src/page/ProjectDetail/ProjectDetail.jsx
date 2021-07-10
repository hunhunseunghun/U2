import React, { useEffect, useState } from 'react';
import { ProjectDetailContainer } from './ProjectDetailStyled';
import ProjectInfo from './PrjInfo/ProjectInfo';
import {
	FaShareSquare,
	FaFacebookSquare,
	FaTwitter,
	FaLine,
} from 'react-icons/fa';
import KakaoShareButton from '../../library/KakaoShareButton';
import axios from 'axios';
import {
	FacebookShareButton,
	TwitterShareButton,
	LineShareButton,
} from 'react-share';
function ProjectDetail(props) {
	console.log(props);
	const challengeIdx = props.match.params.challengeIdx;
	console.log('challengeIdx: ', challengeIdx);
	const [challenge, setChallenge] = useState({});
	console.log('challenge: ', challenge);
	const [isDataReady, setIsDataReady] = useState(false);
	useEffect(() => {
		axios
			.get(
				process.env.REACT_APP_U2_DB_HOST + `/Campaign/challenge?keyword=${2}`, //sample data, should be challengeIdx.
			)
			.then((response) => {
				console.log('response.data: ', response.data[0]);
				setChallenge(response.data[0]);
				setIsDataReady(true);
			})
			.catch((err) => {
				console.log(err);
			});
		// axios
		// 	.get('https://u2-rest-dev.azurewebsites.net/api/Campaign/challengemaster')
		// 	.then((response) => {
		// 		setChallenge(response.data[0]); //for sample
		// 		setIsDataReady(true);
		// 	})
		// 	.catch((err) => {
		// 		console.log('catch: ', err);
		// 	});
	}, []);
	if (!isDataReady) {
		return <div>no data</div>;
	}
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
				<KakaoShareButton
					challengeTitle={challenge.title}
					imageUrl={'test'}
					tags={['#test1', '#test2', '#test3']}
					social={{
						likeCount: 10,
						commentCount: 23,
						sharedCount: 333,
					}}
					buttons={[
						{
							title: 'button1',
							link: {
								mobileWebUrl: window.location.href,
								webUrl: window.location.href,
							},
						},
						{
							title: 'button2',
							link: {
								mobileWebUrl: window.location.href,
								webUrl: window.location.href,
							},
						},
					]}
				/>
				<FacebookShareButton
					title={challenge.title}
					url={'https://u2-web-dev.azurewebsites.net'}
				>
					<FaFacebookSquare />
				</FacebookShareButton>
				<TwitterShareButton
					title={challenge.title}
					url={'https://u2-web-dev.azurewebsites.net'}
				>
					<FaTwitter />
				</TwitterShareButton>
				<LineShareButton
					title={challenge.title}
					url={'https://u2-web-dev.azurewebsites.net'}
				>
					<FaLine />
				</LineShareButton>
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