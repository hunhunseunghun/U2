import { useEffect, useState } from 'react';
import axios from 'axios';
import { WorkDetailContainer } from './WorkDetailStyled';
import ChallengeTable from './tables/Challenge';
import InspectTable from './tables/Inspect';
import SubmissionModal from '../../component/Modals/Submission/SubmissionModal';
import ApplymentModal from '../../component/Modals/Apply/applymentModal';
import { getSingleFileFromBlob } from '../../library/azureBlob';
import moment from 'moment';
function WorkDetail(props) {
	let [subject, setSubject] = useState('');
	let [meeting, setMeeting] = useState();
	let [terms, setTerms] = useState([]);
	let [fields, setFields] = useState([]);
	let [applyPeriod, setApplyPeriod] = useState(null);
	let [prise, setPrise] = useState([]);
	let [projectTitle, setProjectTitle] = useState('');
	let [mainImage, setMainImage] = useState(null);
	let [rewardDate, setRewardDate] = useState('');
	let setTab;
	if (props.location.state.isContriClicked) {
		setTab = 0;
	} else if (props.location.state.isInspectClicked) {
		setTab = 1;
	} else {
		setTab = 0;
	}
	let [currentTab, setCurrentTab] = useState(setTab); //props에서 현재 탭 가져와 설정
	let [submission, setSubmission] = useState({ open: false });
	let [applyment, setApplyment] = useState({ open: false });
	//image section data
	useEffect(() => {
		axios
			.get(
				process.env.REACT_APP_U2_DB_HOST +
					`/Campaign/challenge/${props.location.state.projectId}`, //sample data, should be challengeIdx.
			)
			.then((response) => {
				let data = response.data;
				let challengeTarget = '';
				let contactRequired = '';
				let missionRequired = [];
				let priceContent = [];

				if (
					data.rewards &&
					data.rewards.length > 0 &&
					data.rewards[0].datePayment
				) {
					if (data.rewards[0].datePayment.split('-')[0] === '0001') {
						setRewardDate('추후 협의');
					} else {
						setRewardDate(data.rewards[0].datePayment.split('T')[0]); //보상일
					}
				}
				//대상 text
				if (data.challengeTargetCode === 1) {
					challengeTarget = '공모전';
				} else if (data.challengeTargetCode === 2) {
					challengeTarget = '전문영상 편집자';
				} else if (data.challengeTargetCode === 3) {
					challengeTarget = '영상 크리에이터 인플루언서';
				} else if (data.challengeTargetCode === 4) {
					challengeTarget = '강사 채용';
				}

				//프로젝트 미팅 text

				//보상 text
				data.rewards.forEach((ele) => {
					if (ele.cat === 1) {
						priceContent.push('현상공모');
					} else if (ele.cat === 2) {
						priceContent.push('해외탐방');
					} else if (ele.cat === 3) {
						priceContent.push('국내캠프');
					} else if (ele.cat === 4) {
						priceContent.push('입사시 가산점');
					} else if (ele.cat === 5) {
						priceContent.push('인턴채용');
					} else if (ele.cat === 6) {
						priceContent.push('정직원채용');
					} else if (ele.cat === 7) {
						priceContent.push('경품');
					} else if (ele.cat === 0) {
						priceContent.push(
							`현금 : ${ele.pts} ${ele.currency.toUpperCase()}`,
						);
					}
				});

				setProjectTitle(data.title);
				setSubject(challengeTarget);
				setMainImage(data.logo);
				setPrise(priceContent);
				if (data.challengeTargetCode !== 4) {
					setApplyPeriod(
						moment(data.missions[0].dateBegin).format('YYYY-MM-DD') +
							' ' +
							moment(data.missions[0].dateBegin).format('hh:mm') +
							' ~ ' +
							moment(data.missions[0].dateFin).format('YYYY-MM-DD') +
							' ' +
							moment(data.missions[0].dateFin).format('hh:mm'),
					);
					data.missions[0].videos.forEach((ele) => {
						let result;
						if (ele.platform === 'YU') {
							result = 'YouTube';
						} else if (ele.platform === 'TT') {
							result = 'TIKTOK';
						} else if (ele.platform === 'VM') {
							result = 'Vimeo';
						} else if (ele.platform === 'DR') {
							result = '직접 입력';
						} else if (ele.platform === 'FS') {
							result = '파일 전송';
						}
						missionRequired.push(result);
					});
					setTerms(missionRequired);
					if (data.meetCode === 1) {
						contactRequired = '비대면';
					} else if (data.meetCode === 2) {
						contactRequired = '오프라인';
					}
					setMeeting(contactRequired);
				} else {
					setFields(data.hire.fields);
					setApplyPeriod(
						moment(data.hire.dateBegin).format('YYYY-MM-DD') +
							' ' +
							moment(data.hire.dateBegin).format('hh:mm') +
							' ~ ' +
							moment(data.hire.dateFin).format('YYYY-MM-DD') +
							' ' +
							moment(data.hire.dateFin).format('hh:mm'),
					);
					if (data.hire.isOnline === 0) {
						contactRequired = '온라인 비대면';
					} else if (data.hire.isOnline === 1) {
						contactRequired = '오프라인 대면';
					} else if (data.hire.isOnline === 2) {
						contactRequired = '추후협의';
					}
					setMeeting(contactRequired);
				}

				//과제완료조건 text
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	let handleTabClick = (tab) => {
		setCurrentTab(tab);
	};
	let handlePresentationClick = (data) => {
		if (
			props.location.state.challengeTargetCode === 4 ||
			props.location.state.challengeTargetCode === 2
		) {
			setApplyment({
				open: true,
				challengeIdx: data.challengeIdx,
				challengeTargetCode: props.location.state.challengeTargetCode,
			});
		} else {
			setSubmission({ open: true, data: data });
		}
	};
	let handleModalClose = (modalType) => {
		switch (modalType) {
			case 'submission': {
				setSubmission({ ...submission, open: false });
				break;
			}
			case 'applyment': {
				setApplyment({ ...applyment, open: false });
				break;
			}
			default: {
				break;
			}
		}
	};
	const tables = {
		0: (
			<ChallengeTable
				// datas={currChallenges}
				// setIsLoading={setIsLoading}
				challengeIdx={props.location.state.projectId}
			></ChallengeTable>
		),
		1: (
			<InspectTable
				challengeIdx={props.location.state.projectId}
				challengeTargetCode={props.location.state.challengeTargetCode}
				handlePresentationClick={handlePresentationClick}
			></InspectTable>
		),
	};
	return (
		<WorkDetailContainer id="workdetail-root">
			<SubmissionModal
				open={submission.open}
				// challengeIdx={props.location.state.projectId}
				handleModalClose={(modalType) => handleModalClose(modalType)}
				isAdmin={true}
				propsData={submission.data}
			/>
			<ApplymentModal
				open={applyment.open}
				handleModalClose={(modalType) => {
					handleModalClose(modalType);
				}}
				challengeIdx={applyment.challengeIdx}
				challengeTargetCode={applyment.challengeTargetCode}
			/>

			<section className="workdetail-section">
				<section className="section1">
					<div className="workdetail_img_wrap">
						{mainImage ? (
							<img src={getSingleFileFromBlob(mainImage)} alt={mainImage}></img>
						) : (
							<img
								className="wordetail_noimage"
								src="/img/logo.svg"
								alt="U2"
							></img>
						)}

						<div className="project_name_wrap">
							<div className="project_name_sub">프로젝트명</div>
							<div className="porject_name">{projectTitle}</div>
						</div>
					</div>

					<div className="project_info">
						<section className="project_target_wrap">
							<div className="project_target_sub">대상</div>
							<div className="project_target">{subject}</div>
						</section>
						{props.location.state.challengeTargetCode !== 1 && (
							<section className="project_target_wrap">
								<div className="project_target_sub">프로젝트 미팅</div>
								<div className="project_target">{meeting}</div>
							</section>
						)}

						{props.location.state.challengeTargetCode !== 4 ? (
							<section className="project_target_wrap">
								<div className="project_target_sub">과제완료 조건</div>
								{terms.map((term, idx) => {
									return (
										<div className="project_target" key={idx}>
											{term}
										</div>
									);
								})}
							</section>
						) : (
							<section className="project_target_wrap">
								<div className="project_target_sub">모집 분야</div>
								{fields.map((field, idx) => {
									return (
										<div className="project_target" key={idx}>
											{field.fieldName}
										</div>
									);
								})}
							</section>
						)}

						<section className="project_target_wrap ">
							<div className="project_target_sub">접수기간</div>
							<div className="project_target">{applyPeriod}</div>
						</section>
						{rewardDate && (
							<section className="project_target_wrap ">
								<div className="project_target_sub">보상일</div>
								<div className="project_target">
									{/* {prise.length > 0 ? prise : '-'} */}
									{rewardDate}
								</div>
							</section>
						)}
						<section className="project_target_wrap project_info_lastchild">
							<div className="project_target_sub">보상</div>
							<div className="project_target">
								{/* {prise.length > 0 ? prise : '-'} */}
								{prise.length > 0
									? prise.map((ele, idx) => {
											return ele + ', ';
									  })
									: '-'}
							</div>
						</section>
					</div>
				</section>
				<section className="section2">
					<div className="tabs">
						<div
							className={
								'tab-contents' + ' ' + (currentTab === 0 ? 'selected' : '')
							}
							onClick={() => {
								handleTabClick(0);
							}}
						>
							챌린지 대상자
						</div>
						<div
							className={
								'tab-contents' + ' ' + (currentTab === 1 ? 'selected' : '')
							}
							onClick={() => {
								handleTabClick(1);
							}}
						>
							{props.location.state.challengeTargetCode === 1 ||
							props.location.state.challengeTargetCode === 3
								? '검수 대상자'
								: '지원자'}
						</div>
					</div>
					{/* {isLoading ? (
						<div className="contents-table">{tables[currentTab]}</div>
					) : (
						''
					)} */}
					<div className="contents-table">{tables[currentTab]}</div>
				</section>
			</section>
		</WorkDetailContainer>
	);
}

export default WorkDetail;
