import styled from 'styled-components';

export const WorkDetailContainer = styled.div`
	padding-top: 90px;
	section {
		display: flex;
		text-align: center;
		justify-content: center;
	}
	.section1 {
		border: solid;
		border-color: black;
		display: flex;
		flex-direction: column;
	}
	.tabs {
		border: solid;
		border-color: black;
		/* display: flex;
		flex-direction: row; */
		width: 500px;
	}
	.tab-contents {
		cursor: pointer;
		margin: 10px;
		background-color: grey;
		border: solid black;
	}
	.tab-contents.selected {
		color: white;
		background-color: black;
	}
	.project-name {
		border: solid;
		border-color: blue;
	}
	.project-info.spec {
		text-align: start;
		font-weight: bold;
	}
	hr {
		width: inherit;
	}
`;
