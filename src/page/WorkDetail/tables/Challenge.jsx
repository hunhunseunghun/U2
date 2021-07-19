import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ChallengeTableContainer } from './ChallengeStyled';
import excelIcon from '../../../Img/Icons/excelIcon.png';
import moment from 'moment';
function ChallengeTable({ challengeIdx }) {
	const [isLoading, setIsLoading] = useState(false);
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(0);
	const [pagedSubjects, setPagedSubjects] = useState(null);

	let handlePageChange = (changedPage) => {
		setPage(changedPage);
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmitting/${challengeIdx}?size=${pageSize}&p=${changedPage}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((res) => {
				console.log('challengeidx response:');
				console.log(res);
				console.log(challengeIdx);

				setCount(res.data.total);
				setPagedSubjects(paginate(res.data.entities, res.data.page, pageSize));
				setIsLoading(true);
			})
			.catch((err) => {
				console.log('workdetail error');
				console.log(err);
			});
		// setPagedSubjects(paginate(data, page, pageSize));
	};
	let handleSelectChange = (changedSize) => {
		setPageSize(changedSize);
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmitting/${challengeIdx}?size=${changedSize}&p=${page}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((res) => {
				console.log('challengeidx response:');
				console.log(res);
				console.log(challengeIdx);

				setCount(res.data.total);
				setPagedSubjects(paginate(res.data.entities, res.data.page, pageSize));
				setIsLoading(true);
			})
			.catch((err) => {
				console.log('workdetail error');
				console.log(err);
			});
	};

	useEffect(() => {
		var challengesConfig = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmitting/${challengeIdx}?size=${pageSize}&p=${page}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(challengesConfig)
			.then((res) => {
				console.log('challengeidx response:');
				console.log(res);
				console.log(challengeIdx);

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
											<td>{data.contact}</td>
											<td>{data.email}</td>
										</tr>
									</>
								);
						  })
						: ''}
				</tbody>
			</table>
			<div className="pagination">
				{isLoading && (
					<Pagination2
						itemsCount={count}
						handlePageChange={handlePageChange}
						pageSize={pageSize}
					></Pagination2>
				)}
				{/* <Pagination2
					itemsCount={count}
					handlePageChange={handlePageChange}
					pageSize={subjects.pageSize}
				></Pagination2> */}
			</div>{' '}
		</ChallengeTableContainer>
	);
}
export default ChallengeTable;
