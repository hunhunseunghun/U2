import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination2 from '../../../Component/Pagination/Pagination2';
import { paginate } from '../../../Component/Pagination/paginate';
function RegistTable({ datas }) {
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
		<div>
			<table border={1} width="100%">
				<thead height="50px">
					<tr>
						<th key={'image'}>이미지</th>
						<th key={'name'}>과제명</th>
						<th key={'contriNum'}>참여자수</th>
						<th key={'inspection'}>검수대상</th>
						<th key={'dueDate'}>마감일</th>
					</tr>
				</thead>
				<tbody align="center" style={{ borderColor: 'blue' }}>
					{pagedQuests
						? pagedQuests.map((data) => {
								return (
									<tr height="100px">
										<td>
											<img src={data.img}></img>
										</td>
										<td>
											<Link
												to={{
													pathname: '/workdetail',
													state: {
														projectId: data.id,
													},
												}}
											>
												{data.name}
											</Link>
										</td>
										<td>
											<Link
												to={{
													pathname: '/workdetail',
													state: {
														projectId: data.id,
													},
												}}
											>
												{data.contriNum}
											</Link>
											{data.isNewContri ? (
												<span className="newAlert">new</span>
											) : (
												''
											)}
										</td>
										<td>
											<Link
												to={{
													pathname: '/workdetail',
													state: {
														projectId: data.id,
													},
												}}
											>
												{data.inspect}
											</Link>
											{data.isNewInspect ? (
												<span className="newAlert">new</span>
											) : (
												''
											)}
										</td>
										<td>{data.dueDate}</td>{' '}
									</tr>
								);
						  })
						: ''}
				</tbody>
			</table>
			<Pagination2
				itemsCount={count}
				handlePageChange={handlePageChange}
			></Pagination2>
		</div>
	);
}
export default RegistTable;
