import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyWorkContainer } from './MyWorkStyled.jsx';
import ParticipateTable from './tables/ParticipateTable';
import RegistTable from './tables/RegistTable.jsx';
import participateDatas from './sampledatas/sampledataParticipate.js';
import registDatas from './sampledatas/sampledataRegist.js';
import { GrAdd } from 'react-icons/gr';
import axios from 'axios';
import { useSelector } from 'react-redux';
const server = process.env.REACT_APP_U2_DB_HOST;
const table = {
	'등록 프로젝트': <RegistTable datas={registDatas}></RegistTable>, //add new props
	'참여 프로젝트': (
		<ParticipateTable datas={participateDatas}></ParticipateTable>
	), //add new props
};

const MyWork = (props) => {
	let twoTabs;
	if (participateDatas.length < registDatas.length) {
		twoTabs = ['등록 프로젝트', '참여 프로젝트'];
	} else {
		twoTabs = ['참여 프로젝트', '등록 프로젝트'];
	}
	const [currentTab, setCurrentTab] = useState(twoTabs[0]);
	const [newRegistration, setNewAccept] = useState(true);
	const [newParticipant, setNewQuest] = useState(false);

	const userInfo = useSelector((state) => state.userInfo);
	console.log('userInfo: ', userInfo);

	let clickHandler = (id) => {
		setCurrentTab(id);
	};
	//axios.get --> setNewAccept / setNewQuest

	// useEffect(() => {
	// 	axios
	// 		.get('https://u2-rest-dev.azurewebsites.net/api/Campaign/challenge/3')
	// 		.then((response) => {
	// 			console.log('response:');
	// 			console.log(response.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log('response error:');
	// 			console.log(err);
	// 		});
	// });
	console.log(props.location.state);

	return (
		<MyWorkContainer>
			<div className="mywork header">
				<h4>나의 과제</h4>
			</div>
			<div className="mywork wrapper">
				{twoTabs.map((tabname, index) => {
					return (
						<span
							onClick={() => {
								console.log('index: ', index);
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
								<span className={'newAlert'}>new</span>
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
			<div className="contentes">{table[currentTab]}</div>
		</MyWorkContainer>
	);
};

export default MyWork;
