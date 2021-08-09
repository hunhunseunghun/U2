import styled from 'styled-components';
export const ModalContainer = styled.div`
	.modal {
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 99;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.modal button {
		outline: none;
		cursor: pointer;
		border: 0;
		margin-left: 10px;
		font-weight: 400;
		font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans', sans-serif;
	}
	.modal > section {
		width: 100%;
		max-width: 450px;
		margin: 0 auto;
		border-radius: 0.3rem;
		background-color: #fff;
		animation: modal-show 0.3s;
		overflow: hidden;
	}
	.modal > section > main {
		padding: 0px;
		border-bottom: 1px solid #dee2e6;
		border-top: 1px solid #dee2e6;
		height: relative;
		/* overflow: auto; */

		iframe {
			width: 100%;
			height: 250px;
		}
	}
	.modal > section > footer {
		padding: 12px 16px;
		text-align: right;
	}
	.modal > section > footer button {
		padding: 6px 12px;
		color: #fff;
		background-color: #6c757d;
		border-radius: 5px;
		font-size: 13px;

		&:hover {
			background-color: #4b5157;
		}
	}
	.modal.openModal {
		display: flex;
		align-items: center;
		animation: modal-bg-show 0.3s;
	}
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -50px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
	@keyframes modal-bg-show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
