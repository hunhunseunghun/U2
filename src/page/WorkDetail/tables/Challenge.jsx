import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ChallengeTableContainer } from './ChallengeStyled';
import excelIcon from '../../../Img/Icons/excelIcon.png';
import moment from 'moment';
function ChallengeTable({ challengeIdx, setIsLoading }) {
	let [subjects, setSubjects] = useState({
		// data: datas.entities,
		data: [],
		pageSize: 10,
		currentPage: 1,
	});
	const { data, pageSize, currentPage } = subjects;
	let [pagedSubjects, setPagedSubjects] = useState(
		paginate(data, currentPage, pageSize),
	);
	let [count, setCount] = useState(0);
	// console.log('datas: ', datas);
	// const pagedQuests = paginate(data, currentPage, pageSize);
	// const { length: count } = subjects.data;

	let handlePageChange = (page) => {
		setSubjects({ ...subjects, currentPage: page });
		setPagedSubjects(paginate(data, page, pageSize));
	};
	let handleSelectChange = (pageSize) => {
		setSubjects({ ...subjects, pageSize: pageSize });
		setPagedSubjects(paginate(data, 1, pageSize));
	};
	// useEffect(() => {
	// 	setSubjects({ ...subjects, data: datas.entities });
	// 	setCount(datas.total);
	// }, [datas]);
	var challengesConfig = {
		method: 'get',
		url:
			process.env.REACT_APP_U2_DB_HOST +
			`/Campaign/challengesubmitting/${challengeIdx}?size=${pageSize}&p=${currentPage}`,
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	};

	useEffect(() => {
		axios(challengesConfig)
			.then((res) => {
				console.log('challengeidx response:');
				console.log(res);
				console.log(challengeIdx);
				// if(res.data.entities.contactCode === 0){
				//   setMeeting("비대면")
				// } else if(res.data.entities.contactCode ===1){
				//   setMeeting("대면")
				// }

				// setTerms([])
				// setCurrChallenges(res.data);
				setSubjects({ ...subjects, data: res.data.entities });
				setCount(res.data.total);
				setPagedSubjects(paginate(res.data.entities, res.data.page, pageSize));
				setIsLoading(true);
			})
			.catch((err) => {
				console.log('workdetail error');
				console.log(err);
			});
	}, []);
	return (
		<ChallengeTableContainer>
			{' '}
			<div className="challenge_table_header">
				<div className="challenge_download_btn">
					<img src={excelIcon} alt="" />
					<div>다운로드</div>
				</div>
				<select
					onChange={(e) => {
						handleSelectChange(e.target.value);
					}}
				>
					<option value={10}>10개씩</option>
					<option value={15}>15개씩</option>
					<option value={30}>30개씩</option>
					<option value={50}>50개씩</option>
					<option value={100}>100개씩</option>
				</select>
			</div>
			<table className={'challenge_table'}>
				<thead>
					<tr className="challenge_table_tab">
						<th key="challengeTime">챌린지 일시</th>
						<th key="ID">ID</th>
						<th key="name">성명</th>
						<th key="mobileNum">휴대폰 번호</th>
						<th key="email">이메일</th>
					</tr>
				</thead>
				<tbody>
					{pagedSubjects
						? pagedSubjects.map((data) => {
								return (
									<>
										<tr>
											<td>
												{' '}
												{`${moment(data.registDate).format(
													'YYYY-MM-DD',
												)} ${moment(data.registDate).format('hh:mm:ss')}`}
											</td>
											<td>{data.memberIdx}</td>
											<td>{data.name}</td>
											<td>{data.mobileNum}</td>
											<td>{data.email}</td>
										</tr>
									</>
								);
						  })
						: ''}
				</tbody>
			</table>
			<div className="pagination">
				<Pagination2
					itemsCount={count}
					handlePageChange={handlePageChange}
					pageSize={subjects.pageSize}
				></Pagination2>
			</div>{' '}
		</ChallengeTableContainer>
	);
}
export default ChallengeTable;
