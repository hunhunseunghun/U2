import styled from 'styled-components';

export const Pagination2Styled = styled.nav`
	/* position: absolute; */
	button {
		border: none;
		width: 30px;
		background-color: white;
	}
	button:hover {
		cursor: pointer;
	}
	button.selectedPage {
		font-weight: bolder;
		color: red;
	}
	button.page {
		width: 20px;
		height: 20px;
		border: 1px solid #cdcdcd;
		font-size: 13px;
		font-weight: 400;
		text-align: left;
	}
	ul {
		width: 200;
	}
`;
