import styled from 'styled-components';
export const ModalContainer = styled.div`
	.modal {
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 100;
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
		width: 80%;
		max-width: 450px;
		margin: 0 auto;
		border-radius: 0.3rem;
		background-color: #fff;
		animation: modal-show 0.3s;
		overflow: hidden;
	}
	.modal > section > header {
		position: relative;
		padding: 16px 64px 16px 16px;
		background-color: #1b1718;
		font-weight: 700;
	}
	.modal > section > header button {
		position: absolute;
		top: 15px;
		right: 15px;
		width: 30px;
		font-size: 21px;
		font-weight: 700;
		text-align: center;
		color: #999;
		background-color: transparent;
	}
	.modal > section > main {
		padding: 16px;
		border-bottom: 1px solid #dee2e6;
		border-top: 1px solid #dee2e6;
	}
	.modal > section > footer {
		padding: 12px 16px;
		text-align: right;
		button {
			padding: 6px 15px;
			color: #fff;
			font-size: 12px;
			border: 1px solid #d1d1d1;
			margin: 0 5px;
			border-radius: 4px;
			color: #898989;
			&:hover {
				cursor: pointer;
				color: black;
				border-color: #898989;
			}
		}
		.okay {
			border: 1px solid #d1d1d1;
			font-size: 12px;
			font-weight: 500;
			color: #fff;
			background-color: #f84135;
			border-color: #f84135;

			&:hover {
				cursor: pointer;
				color: #fff;
				background-color: #ff2a1b;
				border-color: #ff2a1b;
			}
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
