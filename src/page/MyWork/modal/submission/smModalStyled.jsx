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
		width: 80%;
		max-width: 850px;
		margin: 0 auto;
		border-radius: 0.3rem;
		background-color: #fff;
		animation: modal-show 0.3s;
		overflow: hidden;
	}
	.modal > section > header {
		position: relative;
		padding: 5px 54px 5px 16px;
		background-color: #f1f1f1;
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
		height: 500px;
		width: 100%;
		border-bottom: 1px solid #dee2e6;
		border-top: 1px solid #dee2e6;
		section {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			/* align-items: center; */
		}

		/* div:nth-child(1) {
			//첫번째 div (category 란)
			background-color: grey;
			width: 100px;
			height: 100%;
			border-bottom: 1px solid black;
		} */
		/* div:nth-child(2) {
			//두번째 div (input 란)
			background-color: ivory;
			width: 00px;
			max-width: 350px;
			border-bottom: solid 1px black;
		} */
		.auth-btn {
			border: 1px solid grey;
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
