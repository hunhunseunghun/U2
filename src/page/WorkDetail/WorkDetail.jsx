import { useState } from 'react';
import { WorkDetailContainer } from './WorkDetailStyled';
import ChallengeTable from './tables/Challenge';
import InspectTable from './tables/Inspect';
import challenges from './sampledatas/challenges';
import inspects from './sampledatas/inspects';
import SubmitModal from './modal/SubmitModal';
function WorkDetail(props) {
	let [subject, setSubject] = useState('광고/홍보');
	let [meeting, setMeeting] = useState('비대면');
	let [terms, setTerms] = useState(['YouTube', 'TIKTOK', '파일 업로드']);
	let [prise, setPrise] = useState('10000원');
	let [currentTab, setCurrentTab] = useState(0); //props에서 현재 탭 가져와 설정
	let [modalProps, setModalProps] = useState({ open: false });
	console.log(props);

	let handleTabClick = (tab) => {
		setCurrentTab(tab);
	};
	let handlePresentationClick = (data) => {
		console.log('data: ', data);
		setModalProps({ open: true, data: data });
	};
	let handleModalClose = () => {
		setModalProps({ ...modalProps, open: false });
	};
	const tables = {
		0: <ChallengeTable datas={challenges}></ChallengeTable>,
		1: (
			<InspectTable
				datas={inspects}
				handlePresentationClick={handlePresentationClick}
			></InspectTable>
		),
	};
	return (
		<WorkDetailContainer id="workdetail-root">
			<SubmitModal
				open={modalProps.open}
				data={modalProps.data}
				handleModalClose={handleModalClose}
			/>
			<section>
				<section className="section1">
					<img src="http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/Aatrox.png"></img>
					<div className="project-name">project name</div>
					<div className="project-info">
						<div className="project-info spec">대상</div>
						<div>{subject}</div>
						<div className="project-info spec">프로젝트 미팅</div>
						<div>{meeting}</div>
						<div className="project-info spec">과제 완료 조건</div>
						<div>
							{terms.map((term, idx) => {
								return <div key={idx}>{term}</div>;
							})}
						</div>
						<div className="project-info spec">보상</div>
						<div>{prise}</div>
					</div>
				</section>
				<div className="tabs">
					<span
						className={
							'tab-contents' + ' ' + (currentTab === 0 ? 'selected' : '')
						}
						onClick={() => {
							handleTabClick(0);
						}}
					>
						챌린지 대상자
					</span>
					<span
						className={
							'tab-contents' + ' ' + (currentTab === 1 ? 'selected' : '')
						}
						onClick={() => {
							handleTabClick(1);
						}}
					>
						검수 대상자
					</span>
					<div className="contents-table">{tables[currentTab]}</div>
				</div>
			</section>
		</WorkDetailContainer>
	);
}

export default WorkDetail;