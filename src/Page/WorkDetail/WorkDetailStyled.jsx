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
	article {
		width: 500px;
	}
	.project-name {
		border: solid;
		border-color: blue;
	}
	.project-info.spec {
		text-align: start;
		font-weight: bold;
	}
`;
