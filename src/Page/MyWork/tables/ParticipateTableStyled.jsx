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
`;
