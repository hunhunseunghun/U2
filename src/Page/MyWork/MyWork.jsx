import React, { useState } from 'react';
import { MyWorkContainer } from './MyWorkStyled.jsx';
import ParticipateTable from './tables/ParticipateTable';
import RegistTable from './tables/RegistTable.jsx';
import datas from './sampledatas/sampledataParticipate.js';
import datas2 from './sampledatas/sampledataRegist.js';
const obj = {
	0: <RegistTable datas={datas2}></RegistTable>, //add new props
	1: <ParticipateTable datas={datas}></ParticipateTable>, //add new props
};
const MyWork = (props) => {
	let [currentTab, setCurrentTab] = useState(0);
	let [newRegistration, setNewAccept] = useState(true);
	let [newParticipant, setNewQuest] = useState(false);

	let clickHandler = (id) => {
		setCurrentTab(id);
	};
	//axios.get --> setNewAccept / setNewQuest
	console.log(props.location.state);

	return (
		<MyWorkContainer>
			<div className="mywork header">
				<h1>나의 과제</h1>
			</div>
			<div className="mywork wrapper">
				<span
					onClick={() => {
						clickHandler(0);
					}}
					className={
						(() => {
							if (currentTab === 0) {
								return 'selected';
							} else {
								return 'unselected';
							}
						})() +
						' ' +
						'tab'
					}
				>
					등록 프로젝트
					{newRegistration ? <span className={'newAlert'}>new</span> : ''}
				</span>
				<span
					onClick={() => {
						clickHandler(1);
					}}
					className={
						(() => {
							if (currentTab === 1) {
								return 'selected';
							} else {
								return 'unselected';
							}
						})() +
						' ' +
						'tab'
					}
				>
					참여 프로젝트
					{newParticipant ? <span className={'newAlert'}>new</span> : ''}
				</span>
			</div>
			<div className="contentes">{obj[currentTab]}</div>
		</MyWorkContainer>
	);
};

export default MyWork;
