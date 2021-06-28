import React, { useState } from 'react';
import { MyWorkContainer } from './MyWorkStyled.jsx';
import Accepter from './tabs/accepter/Accepter.jsx';
import Quester from './tabs/quester/Quester.jsx';
const obj = {
	0: <Accepter></Accepter>, //add new props
	1: <Quester></Quester>, //add new props
};
const MyWork = (props) => {
	let [currentTab, setCurrentTab] = useState(0);
	let [newAccept, setNewAccept] = useState(false);
	let [newQuest, setNewQuest] = useState(true);

	let clickHandler = (id) => {
		setCurrentTab(id);
	};
	//axios.get --> setNewAccept / setNewQuest
	console.log(props.location.state);

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
						<fieldset>
							{newAccept ? <legend>new</legend> : undefined}
							Accepter
						</fieldset>
						{/* <span>{newAccept ? 'new' : ''}</span> */}
					</li>
					<li
						onClick={() => {
							clickHandler(1);
						}}
						style={{ cursor: 'pointer' }}
					>
						<fieldset>
							{newQuest ? <legend>new</legend> : undefined}
							Quester
						</fieldset>
					</li>
				</ul>
			</div>
			<div className="contentes">{obj[currentTab]}</div>
		</MyWorkContainer>
	);
};

export default MyWork;
