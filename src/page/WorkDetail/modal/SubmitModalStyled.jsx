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
		max-width: 700px;
		height: 500px;
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
		color: white;
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
		height: 65%;
		border-bottom: 1px solid #dee2e6;
		border-top: 1px solid #dee2e6;
	}
	.modal > section > footer {
		padding: 12px 16px;
		text-align: center;
	}
	.modal > section > footer button {
		width: 90px;
		padding: 6px 12px;
		color: #fff;
		background-color: #6c757d;
		border-radius: 5px;
		font-size: 13px;

		&:hover {
			background-color: #4b5157;
		}
		&.okay {
			background-color: #f84034;
		}
		&.close {
			background-color: white;
			color: #4b5157;
			border: solid 1px grey;
		}
	}
	.modal.openModal {
		display: flex;
		align-items: center;
		animation: modal-bg-show 0.3s;
	}
	.cate {
		background-color: grey;
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
