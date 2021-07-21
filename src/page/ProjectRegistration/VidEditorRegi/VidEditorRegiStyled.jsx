import styled from 'styled-components';

export const RegiConationer = styled.div`
	padding: 40px 45px 100px;
	/* background-color: #fafafa; */
	display: flex;
	justify-content: center;
	font-weight: 500;
	min-width: 780px;
	.reception_info {
		font-size: 12px;
		padding: 0;
		width: 100%;
		border-top: 0;

		.reception_form {
			width: 100%;
			.reception_table {
				width: 100%;
				border-collapse: collapse;
			}

			.table_checkarea {
				width: 40.5px;
				display: grid;
				place-items: center;
			}
			.table_title {
				text-align: center;
				min-width: 90px;
			}
			tr {
				border-top: 1px solid #d8d8d8;
			}

			td {
				padding: 10px;
				border-left: 1px solid #d8d8d8;
			}

			td:first-child {
				border-left: 0;
				width: 40px;
			}

			td:nth-child(2) {
				width: 110px;
			}

			th:last-child,
			td:last-child {
				border-right: 0;
			}

			section {
				width: 100%;
				display: flex;
				align-items: center;

				div {
					width: 100%;
					display: flex;
					align-items: center;
					text-align: center;
				}
			}
			label {
				margin-left: 1px;
				min-width: 70px;
				text-align: left;
			}
			.reception_options {
				display: flex;
				justify-content: left;

				div {
					width: 80px;
				}
			}
		}
	}
	.videditorregi_section {
		width: 100%;
		max-width: 1100px;
	}
	.videditorregi_title_area {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 80px;
		padding: 0;
		margin-top: 1rem;
		margin-bottom: 20px;

		div {
			display: flex;
			text-align: center;
			justify-content: center;
			align-items: center;
			font-weight: 500;
			font-size: 32px;
		}
		.videditorregi_title_style {
			margin-top: 3px;
			width: 20px;
			border: 1px solid #181818;
		}
	}
	.videditorregi_title_sub {
		display: flex;
		align-items: center;
		font-size: 22px;
		font-weight: 600;
		color: #3b3b3b;
		margin-bottom: 10px;
		img {
			margin-right: 10px;
		}
	}

	.videditorregi_items {
		background-color: #fff;
	}

	//handle profiles---

	.profiles_name {
		position: relative;
	}

	.default_profiles {
		background-color: #ebebeb;
		padding: 5px 10px;
		&:hover {
			cursor: pointer;
			background-color: #e2e2e2;
		}
	}

	//handle profiles---

	.company_profiles {
		position: relative;
	}

	.default_profile {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px soild #dddddd;
		padding: 5px 5px 5px 10px;

		img {
			position: relative;
			top: 2px;
			width: 16px;
			margin-left: 5px;

			&:hover {
				cursor: pointer;
			}
		}
	}

	//----------

	.noDisplay {
		display: none;
	}

	.ele {
		display: flex;
	}
	.menu {
		display: flex;
		min-width: 150px;
		align-items: center;
		border-right: 1px solid#d8d8d8;
		border-top: 1px solid #d8d8d8;
		background-color: #f3f3f3;
		padding-left: 10px;
		min-height: 50px;
		font-size: 15px;
	}
	.inputInfo {
		display: flex;
		align-items: center;
		width: 100%;
		border-top: 1px solid #00000023;
		padding: 0 10px;
		font-size: 12px;
		color: #747474;
	}

	.videditor_reference_url {
		display: block;
		padding: 10px 10px;
	}

	.videditor_details {
		padding: 10px 10px;

		textarea {
		}
	}

	.videditor_onlinemeet {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		margin: 10px;
		padding: 10px;
		border: 1px solid #eee;
		font-size: 12px;

		img {
			margin-right: 20px;
		}

		&:hover {
			border: 1px solid #898989;
			cursor: pointer;
			transform: scale(1.01);
		}

		.onlineMeetText > div:first-child {
			font-size: 16px;
		}
	}

	// editfile uploader css ----------------
	.videditor_files_uploader {
		display: block;
		div {
			margin: 10px 0;
		}
	}

	// onlinemeet section css ---------------

	.videditor_offlinemeet {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		margin: 10px;
		padding: 10px;
		border: 1px solid #eee;
		font-size: 12px;

		img {
			margin-right: 20px;
		}

		&:hover {
			border: 1px solid #898989;
			cursor: pointer;
			transform: scale(1.01);
		}

		.offlineMeetText > div:first-child {
			font-size: 16px;
		}
	}

	//when click select meet tag isActive on-------------
	.onmeet_isactive {
		border: 1px solid #898989;
		transform: scale(1.01);
	}

	// tabale css ------------------------------------

	.videditor_reception_info {
		display: block;
		font-size: 12px;
		padding: 0;
		width: 100%;
		border-top: 0;

		.videditor_reception_form {
			width: 100%;

			.videditor_reception_title {
				padding: 3px 0;
				text-align: center;
				background-color: #ebebeb;
			}
			.videditor_reception_table {
				width: 100%;
				border-collapse: collapse;
			}

			.table_checkarea {
				width: 40.5px;
				display: grid;
				place-items: center;
			}
			.table_title {
				text-align: center;
				min-width: 90px;
			}
			tr {
				border-top: 1px solid #d8d8d8;
			}

			td {
				padding: 10px;
				border-left: 1px solid #d8d8d8;
			}

			td:first-child {
				border-left: 0;
				width: 40px;
			}

			td:nth-child(2) {
				width: 110px;
			}

			th:last-child,
			td:last-child {
				border-right: 0;
			}

			section {
				width: 100%;
				display: flex;
				align-items: center;

				div {
					width: 100%;
					display: flex;
					align-items: center;
					text-align: center;
				}
			}
			label {
				margin-left: 1px;
				min-width: 70px;
				text-align: left;
			}
			.reception_options {
				display: flex;
				justify-content: left;

				div {
					width: 80px;
				}
			}
		}
	}
	// datetime picker css ---------------

	.chooseDate {
		display: block;
		padding: 5px;
	}
	.inputStart,
	.inputFinish {
		display: flex;
		align-items: center;
		padding: 5px;
		.input_sub_text {
			margin-left: 5px;
		}
	}
	.MuiFormControl-root {
	}
	.MuiOutlinedInput-root {
	}
	.MuiOutlinedInput-input {
		padding: 10.5px 10px;
	}
	.MuiInputBase-input {
		padding: none;
	}
	.MuiFormLabel-root,
	.MuiFormHelperText-root,
	.MuiInputBase-root {
		font-size: 12px;
		font-weight: 500;
		font-family: 'Roboto', 'Noto Sans KR', 'Noto Sans', sans-serif;
	}

	.videditor_rewarddate {
		display: block;
		padding: 10px 10px;

		.videditor_reward_date_select {
			display: flex;
			margin-bottom: 15px;

			.discussed_date,
			.fixed_date {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				input {
					margin-right: 3px;
				}
			}
			.fixed_date {
				margin-right: 10px;
			}
		}
	}

	// reward type table css ---------------------------------------
	.videditor_rewardtype {
		font-size: 12px;
		padding: 0;
		width: 100%;
		border-top: 0;

		.videditor_reception_form {
			width: 100%;
			.videditor_reception_table {
				width: 100%;
				border-collapse: collapse;
			}

			.table_checkarea {
				width: 40.5px;
				display: grid;
				place-items: center;
			}
			.table_title {
				text-align: center;
				min-width: 90px;
			}
			tr {
				border-top: 1px solid #d8d8d8;
			}

			td {
				padding: 10px;
				border-left: 1px solid #d8d8d8;
			}

			td:first-child {
				border-left: 0;
				width: 40px;
			}

			td:nth-child(2) {
				width: 110px;
			}

			th:last-child,
			td:last-child {
				border-right: 0;
			}

			section {
				width: 100%;
				display: flex;
				align-items: center;

				div {
					width: 100%;
					display: flex;
					align-items: center;
					text-align: center;
				}

				select {
					padding: 0px 25px 0px 3px;
					height: 22px;
					margin-left: 3px;
				}
			}
			label {
				margin-left: 1px;
				min-width: 70px;
				text-align: left;
			}
			.reception_options {
				display: block;
			}
		}
	}
	//editor css ----------------------------------
	.notice_editor_form {
		padding: 0px 0px;
		.ckeditor_wrap {
			width: 100%;
		}
	}

	//reply css -------------------------------------
	.replyfunc_items {
		display: inline-block;
	}

	.replyfunc_item_wrap {
		display: flex;
		margin-right: 5px;
		input {
			margin-right: 3px;
		}
	}
	//mananger css ------------------------------------

	.manager_items {
		display: inline-block;
		margin-right: 5px;

		section {
			display: flex;

			input {
				margin-right: 5px;
			}
		}
	}

	//phonenumber css---------------------------------

	.phonenumber_items {
		display: inline-block;
		margin: 0 5px;

		#areacode {
			padding: 0 5px;
			width: 60px;
			height: 21px;
			border: 1px solid #d8d8d8;
		}

		input {
			width: 34px;
		}

		section {
			display: flex;
		}
	}

	//email css---------------------------------

	.email_items {
		display: inline-block;
		margin-right: 5px;

		section {
			display: flex;

			input {
				margin-right: 5px;
			}
		}
	}

	.videditorregi_bottom_style {
		background-color: #dddddd;
		height: 1px;
	}

	// prev next button css ---------------------
	.videditorregi_btn_area {
		width: 100%;
		display: flex;
		padding: 40px 0;
		justify-content: center;
	}

	.videditorregi_btn {
		width: 120px;
		border: 1px solid #d1d1d1;
		padding: 5px 20px;
		margin: 0 5px;
		border-radius: 4px;
		font-size: 16px;
		font-weight: 600;
		color: #898989;
		&:hover {
			cursor: pointer;
			color: black;
			border-color: #898989;
		}
	}

	.videditorregi_btn_next {
		border: 1px solid #d1d1d1;
		font-size: 16px;
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
`;
