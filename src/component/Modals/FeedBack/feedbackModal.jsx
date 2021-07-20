import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ModalContainer } from './fbModalStyled';
import axios from 'axios';
function FeedbackModal({ open, data, handleModalClose, isAdmin }) {
	// console.log(open);
	const userInfo = useSelector((state) => state.userInfo);

	const [input, setInput] = useState(null);

	useEffect(() => {
		if (data) {
			setInput(data.feedback.comment);
		}
	}, [data]);

	const handleSubmit = () => {
		console.log(input);
		var body = {
			challengeIdx: data.challengeIdx,
			// missionSeq: 0,
			memberIdx: userInfo.memberIdx,
			comment: input,
			statusCode: 1,
			// registMemberIdx: 0,
			// registDate: '2021-07-19T13:20:33.918Z',
			// modifyMemberIdx: 0,
			// modifyDate: '2021-07-19T13:20:33.918Z',
		};
		console.log('body: ', body);
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
				console.log(response.data);
				window.alert('저장되었습니다.');
				handleModalClose();
			})
			.catch((err, asdf) => {
				window.alert(err);
				console.log(asdf);
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
							></textarea>
						</main>
						<footer>
							<button
								className="close"
								onClick={() => {
									handleModalClose('feedback');
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
