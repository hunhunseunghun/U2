import { useState } from 'react';
import RegiQuests from '../Subtabs/RegiQuests';
import SubmitQuests from '../Subtabs/SubmitQuests';
import LikedQuests from '../Subtabs/LikedQuests';
import datas from './sampledata';
function Accepter() {
	let [currentTab, setCurrentTab] = useState(0);

	let handleClickSubtab = (id) => {
		setCurrentTab(id);
	};

	let tabs = {
		0: <RegiQuests datas={datas}></RegiQuests>,
		1: <SubmitQuests></SubmitQuests>,
		2: <LikedQuests datas={datas}></LikedQuests>,
	};
	return (
		<div>
			<ul>
				<li
					onClick={() => {
						handleClickSubtab(0);
					}}
					style={{ cursor: 'pointer' }}
				>
					등록과제
				</li>
				<li
					onClick={() => {
						handleClickSubtab(1);
					}}
					style={{ cursor: 'pointer' }}
				>
					제출과제
				</li>
				<li
					onClick={() => {
						handleClickSubtab(2);
					}}
					style={{ cursor: 'pointer' }}
				>
					찜한과제
				</li>
			</ul>
			<div>{tabs[currentTab]}</div>
		</div>
	);
}
export default Accepter;