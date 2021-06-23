import { useState } from 'react';
import { paginate } from './paginate';
import Pagination from './Pagination';
function RegiQuests({ datas }) {
	let [quests, setQuests] = useState({
		data: datas,
		pageSize: 3,
		currentPage: 1,
	});

	const { data, pageSize, currentPage } = quests;
	const pagedQuests = paginate(data, currentPage, pageSize);
	const { length: count } = quests.data;
	let handlePageChange = (page) => {
		setQuests({ ...quests, currentPage: page });
	};
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
										<td>{data.name}</td>
										<td>{data.contriNum}</td>
										<td>{data.inspect}</td>
										<td>{data.dueDate}</td>{' '}
									</tr>
								);
						  })
						: ''}
				</tbody>
			</table>
			<Pagination
				pageSize={pageSize}
				itemsCount={count}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			></Pagination>
		</div>
	);
}
export default RegiQuests;
