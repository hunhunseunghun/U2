import styled from 'styled-components';

export const TopViewContainer = styled.div`
	@import '~slick-carousel/slick/slick.css';
	@import '~slick-carousel/slick/slick-theme.css';

	position: absolute;
	top: 0;
	left: 0;
	width: 80%;
	height: 100%;

	.slick-slider {
		-webkit-tap-highlight-color: none;
	}

	.slideWrap {
		border: 0;
		position: relative;
		width: 100%;
		height: 100%;
	}

	.slide {
		width: 100%;
		height: 100%;

		transform: scale(1);
		transition: transform 0.3s;
	}
	.slick-dots {
		position: absolute;

		bottom: 20%;
	}
	.slick-dots li button {
		color: white;
	}
	.slide img {
		border: 0;
		width: 1014px;
		height: 492px;
	}

	.slide img:hover {
		cursor: pointer;
	}

	.arrow {
		display: none;
	}

	@media only screen and (max-width: 900px) {
		position: static;
		width: 100%;
	}
`;
