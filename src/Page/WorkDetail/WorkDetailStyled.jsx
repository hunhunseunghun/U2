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
		border: solid;
		border-color: grey;
	}
	.project-name {
		border: solid;
		border-color: blue;
	}
	.project-info.spec {
		text-align: start;
		font-weight: bold;
	}

	/* .tabs{
		display: flex;
		flex-direction: row;
	} */
`;
