import { useState } from 'react';
import RegiQuests from '../Subtabs/RegiQuests';
import datas from './sampledata';
function Quester() {
	let [currentTab, setCurrentTab] = useState(0);

	let handleClickSubtab = (id) => {
		setCurrentTab(id);
	};

	let tabs = {
		0: <RegiQuests datas={datas}></RegiQuests>,
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
			</ul>
			<div>{tabs[currentTab]}</div>
		</div>
	);
}
export default Quester;
