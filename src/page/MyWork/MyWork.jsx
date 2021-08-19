import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MyWorkContainer } from './MyWorkStyled.jsx';
import ParticipateTable from './tables/ParticipateTable';
import RegistTable from './tables/RegistTable.jsx';
import { GrAdd } from 'react-icons/gr';

const MyWork = () => {
	let twoTabs = ['등록 프로젝트', '참여 프로젝트'];

	const [currentTab, setCurrentTab] = useState(twoTabs[0]);
	const [newRegistration, setNewAccept] = useState(false);
	const [newParticipant, setNewQuest] = useState(false);
	const table = {
		'등록 프로젝트': <RegistTable setNewAccept={setNewAccept}></RegistTable>,
		'참여 프로젝트': (
			<ParticipateTable setNewQuest={setNewQuest}></ParticipateTable>
		),
	};
	let clickHandler = (id) => {
		setCurrentTab(id);
	};

	return (
		<MyWorkContainer className="mywork_contents_wrap">
			<section className="mywork_section">
				<div className="mywork_title_area">
					<div>나의 프로젝트</div>
					<div className="mywork_title_style"></div>
				</div>
				<div className="mywork_wrapper">
					{twoTabs.map((tabname, index) => {
						return (
							<span
								onClick={() => {
									clickHandler(tabname);
								}}
								className={
									(() => {
										if (currentTab === tabname) {
											return 'selected';
										} else {
											return 'unselected';
										}
									})() +
									' ' +
									'tab'
								}
							>
								{tabname}
								{(() => {
									if (index === 0) {
										return newRegistration;
									} else if (index === 1) {
										return newParticipant;
									}
								})() ? (
									<span className={'newAlert tab_newalert'}>new</span>
								) : (
									''
								)}
							</span>
						);
					})}
				</div>
				{currentTab === 0 ? (
					<Link to={{ pathname: '/prjregi' }} className="regi-project">
						<GrAdd />
						신규 프로젝트 등록
					</Link>
				) : (
					''
				)}
				<div className="myproject_contents">{table[currentTab]}</div>
			</section>
		</MyWorkContainer>
	);
};

export default MyWork;
