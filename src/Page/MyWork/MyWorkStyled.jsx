import styled from 'styled-components';
const unselectedTab = require('../../Img/MWunselectedTab.png').default;
const selectedTab = require('../../Img/MWselectedTab.png').default;
export const MyWorkContainer = styled.div`
	padding-top: 90px;
	/* display: flex;
	flex-direction: row; */
	div.wrapper {
		display: flex;
		flex-direction: row;
	}
	div.header {
		text-align: center;
		font-size: 36px;
	}
	span.tab {
		cursor: pointer;
		text-align: center;
		align-items: center;
	}
	span.selected {
		color: white;
		width: 60%;
		height: 58px;
		background-image: url(${selectedTab});
	}
	span.unselected {
		color: black;
		/* Style for "레이어 131 사본" */
		width: 60%;
		height: 48px;
		background-color: #b9b9b9;
		background-image: url(${unselectedTab});
	}
	span.newAlert {
		background-size: 25 10;
		background-color: red;
	}
	.regi-project {
		color: black;
		padding: 10px;
		overflow: hidden;
		margin-left: calc(100% - 180px);
		margin-bottom: 50px;
		border: 1px solid black;
		text-decoration: unset;
	}
	.contents {
		margin-top: 20px;
	}
`;
