import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination2 from '../../../Component/Pagination/Pagination2';
import { paginate } from '../../../Component/Pagination/paginate';
import { InspectTableContainer } from './InspectStyled';
function InspectTable({ datas }) {
	let [subjects, setSubjects] = useState({
		data: datas,
		pageSize: 10,
		currentPage: 1,
	});
	const { data, pageSize, currentPage } = subjects;
	let [pagedSubjects, setPagedSubjects] = useState(
		paginate(data, currentPage, pageSize),
	);
	// console.log('datas: ', datas);
	// const pagedQuests = paginate(data, currentPage, pageSize);
	const { length: count } = subjects.data;
	let handlePageChange = (page) => {
		setSubjects({ ...subjects, currentPage: page });
		setPagedSubjects(paginate(data, page, pageSize));
	};
	useEffect(() => {
		console.log('datas:');
		console.log(datas);
		setSubjects({ ...subjects, data: datas });
	}, [datas]);
	return (
		<InspectTableContainer>
			<button>다운로드</button>
			<table className={'challenge-table'}>
				<tr>
					<th key="challengeTime">챌린지 일시</th>
					<th key="ID">ID</th>
					<th key="name">성명</th>
					<th key="mobileNum">휴대폰 번호</th>
					<th key="email">이메일</th>
				</tr>

				<tbody>
					{pagedSubjects
						? pagedSubjects.map((data) => {
								return (
									<>
										<tr>
											<td>{data.challengeDate}</td>
											<td>{data.ID}</td>
											<td>{data.name}</td>
											<td>{data.mobileNum}</td>
											<td>{data.email}</td>
										</tr>
										<hr />
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
			</div>
		</InspectTableContainer>
	);
}
export default InspectTable;
