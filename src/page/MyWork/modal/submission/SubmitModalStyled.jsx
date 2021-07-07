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
		border: 1px solid;
		margin-left: 10px;
		font-weight: 400;
		font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans', sans-serif;
		:hover {
			background-color: grey;
		}
	}
	.modal > section {
		width: 100%;
		max-width: 750px;
		height: relative;
		max-height: 1000px;
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
		/* height: 500px; */
		width: 100%;
		border-bottom: 1px solid #dee2e6;
		border-top: 1px solid #dee2e6;
		section {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			/* align-items: center; */
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
	.ele {
		display: flex;
	}
	.menu {
		display: flex;
		min-width: 150px;
		align-items: center;
		border-right: 1px solid#bbbbbb;
		border-top: 1px solid #bbbbbb;
		background-color: #dddbdc;
		padding-left: 10px;
		min-height: 50px;
		font-size: 15px;
	}
	.inputInfo {
		display: flex;
		align-items: center;
		width: 70%;
		border-top: 1px solid #bbbbbb;

		/* padding: 0 10px; */
		padding: 15px;

		font-size: 12px;
		.phoneInput,
		.emailInput {
			width: 250px;
		}
		.banks-select {
			height: 10px;
		}
		.errorMessage {
			color: red;
		}
		.shake {
			animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
		}
		.auth-input {
			margin-top: 5px;
			& > input {
				/* width: auto; */
			}
		}

		.auth-btn {
			border: 1px solid grey;
			padding: 1px 3px 1px 3px;
			margin-left: 2px;
			height: 100%;
		}
		.authorized {
			color: green;
		}
		.EmailContainer {
			padding: 0px;
			margin: 0px;
		}
		.MobileContainer {
			display: flex;
		}
	}
	.URLs {
		max-height: 100px;
		overflow: scroll;
		overflow-x: hidden;
		overflow-y: auto;
		align-items: flex-start;
		.youtubeURL {
			margin-right: 10px;
			font-size: 15px;
			font-weight: bold;
		}
		.plusMinus {
			font-size: 17px;
			padding-bottom: 0;
		}
	}
	.Address {
		display: block;
	}
	.address {
		display: flex;
		flex-direction: column;
		input {
			width: 100%;
		}
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
	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
`;
