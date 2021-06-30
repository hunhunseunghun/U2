import React, { useState, useEffect } from 'react';
import Pagination2 from '../../../Component/Pagination/Pagination2';
import { paginate } from '../../../Component/Pagination/paginate';
import { InspectTableContainer } from './InspectStyled';
function InspectTable({ datas, handlePresentationClick }) {
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
	let handleSelectChange = (pageSize) => {
		setSubjects({ ...subjects, pageSize: pageSize });
		setPagedSubjects(paginate(data, 1, pageSize));
	};
	useEffect(() => {
		setSubjects({ ...subjects, data: datas });
	}, [datas]);
	return (
		<InspectTableContainer>
			<button>다운로드</button>
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
			<table className={'inspect-table'}>
				<tr>
					<th key="challengeTime">지원 일시</th>
					<th key="ID">ID</th>
					<th key="name">성명</th>
					<th key="category">카테고리</th>
					<th key="presentation">제출자료</th>
					<th key="status">검수 상태</th>
					<th>프로젝트 검수하기</th>
				</tr>

				<tbody>
					{pagedSubjects
						? pagedSubjects.map((data) => {
								return (
									<>
										<tr>
											<td>{data.supportDate}</td>
											<td>{data.ID}</td>
											<td>{data.name}</td>
											<td>{data.category}</td>
											<td>
												{data.presentation ? (
													<button
														className="presentation-button"
														onClick={() => {
															handlePresentationClick(data);
														}}
													>
														보기
													</button>
												) : (
													'-'
												)}
											</td>
											<td>{data.status}</td>
											<td className="inspect-project">
												<select>
													<option value="okay">승인</option>
													<option value="return">반려</option>
													<option value="feedback">피드백</option>
												</select>
												<button>확인</button>
											</td>
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
			<button className="bt-list">목록</button>
		</InspectTableContainer>
	);
}
export default InspectTable;
