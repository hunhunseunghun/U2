import { useState } from 'react';
import QuestTable from '../Subtabs/QuestTable';
import datas from './sampledata';
function Quester() {
	let [currentTab, setCurrentTab] = useState(0);

	let handleClickSubtab = (id) => {
		setCurrentTab(id);
	};

	let tabs = {
		0: <QuestTable datas={datas}></QuestTable>,
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
