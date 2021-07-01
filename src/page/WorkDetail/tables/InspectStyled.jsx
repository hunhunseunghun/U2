import styled from 'styled-components';
export const InspectTableContainer = styled.div`
	width: 600px;
	.buttons3 {
		button {
			border: solid;
		}
	}
	.inspect-table {
		button {
			cursor: pointer;
			border: solid 1px;
		}
		button:hover {
			background-color: grey;
		}
	}

	td.inspect-project {
		display: flex;
		/* flex-direction: row; */
	}

	button.presentation-button {
		border: solid 1px;
	}
	button.bt-list {
		cursor: pointer;
		width: 100px;
		border: solid 1px;
		margin-left: 500px;
	}
	button.bt-list:hover {
		background-color: grey;
	}
`;
