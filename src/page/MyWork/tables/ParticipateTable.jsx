import React, { useState, useEffect } from 'react';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ParticipateTableContainer } from './ParticipateTableStyled';
function ParticipateTable({ datas }) {
	let [quests, setQuests] = useState({
		data: datas,
		pageSize: 3,
		currentPage: 1,
	});
	// console.log('datas: ', datas);
	const { data, pageSize, currentPage } = quests;
	const pagedQuests = paginate(data, currentPage, pageSize);
	const { length: count } = quests.data;
	console.log('datas: ', datas);
	let handlePageChange = (page) => {
		setQuests({ ...quests, currentPage: page });
	};
	useEffect(() => {
		console.log('datas:');
		console.log(datas);
		setQuests({ ...quests, data: datas });
	}, [datas]);
	return (
		<ParticipateTableContainer>
			<table>
				<thead>
					<tr>
						<th key={'image'}>이미지</th>
						<th key={'category'}>카테고리</th>
						<th key={'name'}>프로젝트명</th>
						<th key={'status'}>상태</th>
						<th key={'presentation'}>제출자료</th>
						<th key={'feedback'}>피드백</th>
						<th key={'requestDate'}>신청일</th>
						<th key={'dueDate'}>마감일</th>
					</tr>
				</thead>
				<tbody>
					{pagedQuests
						? pagedQuests.map((data) => {
								return (
									<tr>
										<td>
											{data.img !== '' ? (
												<img src={data.img}></img>
											) : (
												'no image'
											)}
										</td>
										<td>{data.category}</td>
										<td>{data.name}</td>
										<td>{data.status}</td>
										<td>{data.presentation}</td>
										<td>{data.feedback ? <button>피드백</button> : ''}</td>
										<td>{data.requestDate}</td>
										<td>{data.dueDate}</td>
									</tr>
								);
						  })
						: ''}
				</tbody>
			</table>
			<div className="pagination">
				<Pagination2
					itemsCount={count}
					handlePageChange={handlePageChange}
					pageSize={quests.pageSize}
				></Pagination2>
			</div>
		</ParticipateTableContainer>
	);
}
export default ParticipateTable;
