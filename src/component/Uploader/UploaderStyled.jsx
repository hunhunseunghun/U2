import styled from 'styled-components';

export const Container = styled.div`
	.uploadArea {
		font-size: 14px;
		display: flex;

		div {
			margin: 10px 0;
		}
	}

	.uploadForm {
		display: flex;
		align-items: center;
	}

	.filePath {
		width: 200px;
		height: 18px;
	}

	#upLoader {
		width: 74px;
		height: 24px;
		margin-left: 5px;
		border: unset;
	}
	.uploader_loading_Img {
		svg {
			width: 27px;
			height: 27px;
		}
	}

	.filePreview {
		div {
			font-size: 11px;
			font-weight: 700;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	.removeFileBtn {
		position: relative;
		top: 7px;
		width: 20px;
		height: 20px;
		&:hover {
			cursor: pointer;
		}
	}
	@media screen and (max-width: 900px) {
		#upLoader {
			width: 68px;
			height: 24px;
			margin-left: 5px;
		}
	}
`;
