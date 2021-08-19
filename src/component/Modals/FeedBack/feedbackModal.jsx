import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ModalContainer } from './fbModalStyled';
import axios from 'axios';
function FeedbackModal({
	open,
	data,
	handleModalClose,
	isAdmin,
	refresh,
	challengeIdx,
}) {
	const userInfo = useSelector((state) => state.userInfo);

	const [input, setInput] = useState(null);

	useEffect(() => {
		if (data) {
			setInput(data.feedback ? data.feedback.comment : '');
		}
	}, [data]);
	useEffect(() => {
		if (challengeIdx) {
			var config = {
				method: 'get',
				url: `https://u2-rest-dev.azurewebsites.net/api/Campaign/challengesubmitfeedback?challengeIdx=${challengeIdx}&seq=1&memberIdx=${userInfo.memberIdx}`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
			};
			axios(config)
				.then((response) => {
					setInput(response.data.comment);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [open]);

	const handleSubmit = () => {
		var body = {
			challengeIdx: data.challengeIdx,
			memberIdx: data.memberIdx,
			comment: input,
			statusCode: 1,
		};
		var config = {
			method: 'post',
			url:
				process.env.REACT_APP_U2_DB_HOST + `/Campaign/challengesubmitfeedback`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: body,
		};
		axios(config)
			.then((response) => {
				window.alert('저장되었습니다.');
				refresh();
				handleModalClose();
			})
			.catch((err) => {
				window.alert('이미 피드백이 등록되어있습니다.');
				console.log(err.response);
			});
	};
	return (
		<ModalContainer>
			<div className={open ? 'openModal modal' : 'modal'}>
				{open ? (
					<section>
						<header>피드백</header>
						<main>
							<textarea
								value={input}
								onChange={(e) => {
									setInput(e.target.value);
								}}
								readOnly={!isAdmin}
								style={{ resize: 'none' }}
							></textarea>
						</main>
						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose('feedback');
									setInput('');
								}}
							>
								{' '}
								닫기{' '}
							</button>
							{isAdmin && (
								<button
									className="okay"
									onClick={() => {
										handleSubmit();
									}}
								>
									저장
								</button>
							)}
						</footer>
					</section>
				) : null}
			</div>
		</ModalContainer>
	);
}
export default FeedbackModal;
