import React, { useState } from 'react';
import { MyWorkContainer } from './MyWorkStyled.jsx';
import Accepter from './tabs/accepter/Accepter.jsx';
import Quester from './tabs/quester/Quester.jsx';
import { paginate } from './tabs/Subtabs/paginate.js';
import Pagination from './tabs/Subtabs/Pagination';
const obj = {
	0: <Accepter paginate={paginate} Pagination={Pagination}></Accepter>,
	1: <Quester paginate={paginate} Pagination={Pagination}></Quester>,
};
const MyWork = () => {
	let [currentTab, setCurrentTab] = useState(0);

	let clickHandler = (id) => {
		setCurrentTab(id);
	};

	return (
		<MyWorkContainer>
			<div className="mywork wrapper">
				<ul className="tabs">
					<li
						onClick={() => {
							clickHandler(0);
						}}
						style={{ cursor: 'pointer' }}
					>
						Accepter
					</li>
					<li
						onClick={() => {
							clickHandler(1);
						}}
						style={{ cursor: 'pointer' }}
					>
						Quester
					</li>
				</ul>
			</div>
			<div className="contentes">{obj[currentTab]}</div>
		</MyWorkContainer>
	);
};

export default MyWork;
