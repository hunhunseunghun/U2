import { useState } from 'react';
import RegiQuests from '../Subtabs/RegiQuests';
import SubmitQuests from '../Subtabs/SubmitQuests';
import LikedQuests from '../Subtabs/LikedQuests';
import datas from './sampledata';
function Accepter({ paginate, Pagination }) {
	let [currentTab, setCurrentTab] = useState(0);
	let [quests, setQuests] = useState({
		data: datas,
		pageSize: 3,
		currentPage: 1,
	});
	const { data, pageSize, currentPage } = quests;
	const pagedQuests = paginate(data, currentPage, pageSize);
	const { length: count } = quests.data;

	let handleClickSubtab = (id) => {
		setCurrentTab(id);
	};
	let handlePageChange = (page) => {
		setQuests({ ...quests, currentPage: page });
	};
	let tabs = {
		0: (
			<RegiQuests
				datas={pagedQuests}
				pageSize={pageSize}
				itemsCount={count}
				currentPage={currentPage}
				onPageChange={handlePageChange}
				Pagination={Pagination}
			></RegiQuests>
		),
		1: <SubmitQuests></SubmitQuests>,
		2: <LikedQuests></LikedQuests>,
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
