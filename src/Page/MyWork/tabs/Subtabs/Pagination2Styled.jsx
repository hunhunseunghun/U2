import styled from 'styled-components';

export const Pagination2Styled = styled.nav`
	/* position: absolute; */
	button {
		border: none;
		width: 30px;
	}
	button:hover {
		cursor: pointer;
	}
	button.selectedPage {
		font-weight: bolder;
		color: red;
	}
	ul {
		width: 200;
	}
`;
