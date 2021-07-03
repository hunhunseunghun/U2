import styled from 'styled-components';

export const ParticipateTableContainer = styled.div`
	margin-top: 20px;
	/* border: 1px solid; */
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th,
	td {
		border-top: 1px solid;
	}
	thead {
		background-color: grey;
		height: 50px;
	}
	tbody {
		text-align: center;
	}
	tr {
		height: 100px;
	}
	.pagination {
		margin-left: 45%;
	}
	hr.row-line {
		/* width: 100px; */
	}
	button.feedback-button {
		cursor: pointer;
		width: 50px;
		border: solid 1px grey;
		border-radius: 10px;
	}
	button.feedback-button:hover {
		background-color: grey;
	}
	.presentation-td > button {
		border: solid 1px grey;
		border-radius: 10px;
		background-color: white;
		padding: 5px;
		:hover {
			background-color: grey;
			cursor: pointer;
		}
	}
	button.resume {
	}
`;
