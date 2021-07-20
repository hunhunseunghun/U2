import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { InspectTableContainer } from './InspectStyled';
import excelIcon from '../../../Img/Icons/excelIcon.png';
function InspectTable({ challengeIdx, handlePresentationClick }) {
	// let [subjects, setSubjects] = useState({
	// 	data: [],
	// 	pageSize: 10,
	// 	currentPage: 1,
	// });
	let [allCheckBoxes, setAllCheckBoxes] = useState(
		// new Array(datas.length).fill(false),
		[],
	);
	// const { data, pageSize, currentPage } = subjects;
	// const pagedDatas = paginate(data, currentPage, pageSize);
	// const pagedArr = paginate(allCheckBoxes, currentPage, pageSize);
	// const { length: count } = subjects.data;
	const [isLoading, setIsLoading] = useState(false);
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(0);
	const [pagedSubjects, setPagedSubjects] = useState(null);
	const [pagedCheckboxes, setPagedCheckBoxes] = useState(null);
	const [pagedSelects, setPagedSelects] = useState([]);
	// let [pagedSubjects, setPagedSubjects] = useState(pagedDatas);
	// let [pagedCheckboxes, setPagedCheckBoxes] = useState(pagedArr);
	let [plusIndex, setPlusIndex] = useState(0);

	let handlePageChange = (changedPage) => {
		// setSubjects({ ...subjects, currentPage: page });
		setPage(changedPage);
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmitted/${challengeIdx}?size=${pageSize}&p=${changedPage}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((res) => {
				// console.log('handle page change res:');
				// console.log(res.data);
				// console.log(challengeIdx);

				setCount(res.data.total);
				setPlusIndex((changedPage - 1) * pageSize);
				setPagedSubjects(res.data.entities);
				setPagedCheckBoxes(paginate(allCheckBoxes, changedPage, pageSize));
				setPagedSelects(new Array(res.data.entities.length).fill(1));
				setIsLoading(true);
			})
			.catch((err) => {
				console.log('workdetail error');
				console.log(err);
			});
		// setPagedSubjects(paginate(data, page, pageSize));
		// setPlusIndex((page - 1) * pageSize);
		// setPagedCheckBoxes(paginate(allCheckBoxes, page, pageSize));
	};
	let handleSelectChange = (changedSize) => {
		setPageSize(changedSize);
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmitted/${challengeIdx}?size=${changedSize}&p=${page}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((res) => {
				// console.log('handle page change res:');
				// console.log(res.data);
				// console.log(challengeIdx);

				setCount(res.data.total);
				setPagedSubjects(res.data.entities);
				setPlusIndex((page - 1) * changedSize);
				setPagedCheckBoxes(paginate(allCheckBoxes, page, changedSize));
				setPagedSelects(new Array(res.data.entities.length).fill(1));
				setIsLoading(true);
			})
			.catch((err) => {
				console.log('workdetail error');
				console.log(err);
			});
		// setSubjects({ ...subjects, pageSize: pageSize });
		// setPagedSubjects(paginate(data, 1, pageSize));
	};
	//0. 검수되지않은 경우
	//1. 검수완료
	//-1. 반려
	const handleSingleStatus = (memberIdx, checkStatusCode) => {
		var body = {
			challengeIdx: challengeIdx,
			memberIdx: memberIdx,
			checkStatusCode: checkStatusCode,
		};
		console.log('body: ', body);
		console.log('pagedSelected: ', pagedSelects);
		var config = {
			method: 'post',
			url: process.env.REACT_APP_U2_DB_HOST + `/Campaign/challengesubmitcheck`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: body,
		};
		axios(config)
			.then((response) => {
				var config = {
					method: 'get',
					url:
						process.env.REACT_APP_U2_DB_HOST +
						`/Campaign/challengesubmitted/${challengeIdx}?size=${pageSize}&p=${page}`,
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
						'Content-Type': 'application/json',
					},
				};
				axios(config)
					.then((res) => {
						// console.log('challengeidx response:');
						// console.log(res);
						// console.log(challengeIdx);

						setCount(res.data.total);
						setPagedSubjects(res.data.entities);
						setAllCheckBoxes(new Array(res.data.total).fill(false));
						setPlusIndex((page - 1) * pageSize);
						setPagedCheckBoxes(
							paginate(new Array(res.data.total).fill(false), page, pageSize),
						);

						setIsLoading(true);
					})
					.catch((err) => {
						console.log('workdetail error');
						console.log(err);
					});
			})
			.catch((err) => console.log(err));
	};

	const handleBulkOkay = (checkStatus) => {
		var body = [];
		var indexs = [];
		for (let i = 0; i < pagedCheckboxes.length; i++) {
			if (pagedCheckboxes[i]) {
				indexs.push(i);
			}
		}
		for (let i = 0; i < indexs.length; i++) {
			body.push({
				memberIdx: pagedSubjects[indexs[i]].memberIdx,
			});
		}
		console.log('body: ', body);
		var config = {
			method: 'post',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmitcheckbulk/${challengeIdx}?checkStatus=${checkStatus}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
			data: body,
		};
		axios(config)
			.then((response) => {
				var config = {
					method: 'get',
					url:
						process.env.REACT_APP_U2_DB_HOST +
						`/Campaign/challengesubmitted/${challengeIdx}?size=${pageSize}&p=${page}`,
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
						'Content-Type': 'application/json',
					},
				};
				axios(config)
					.then((res) => {
						// console.log('challengeidx response:');
						// console.log(res);
						// console.log(challengeIdx);

						setCount(res.data.total);
						setPagedSubjects(res.data.entities);
						setAllCheckBoxes(new Array(res.data.total).fill(false));
						setPlusIndex((page - 1) * pageSize);
						setPagedCheckBoxes(
							paginate(new Array(res.data.total).fill(false), page, pageSize),
						);
						setIsLoading(true);
					})
					.catch((err) => {
						console.log('workdetail error');
						console.log(err);
					});
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengesubmitted/${challengeIdx}?size=${pageSize}&p=${page}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((res) => {
				// console.log('challengeidx response:');
				// console.log(res);
				// console.log(challengeIdx);

				setCount(res.data.total);
				setPagedSubjects(res.data.entities);
				setAllCheckBoxes(new Array(res.data.total).fill(false));
				setPlusIndex((page - 1) * pageSize);
				setPagedCheckBoxes(
					paginate(
						new Array(res.data.entities.length).fill(false),
						page,
						pageSize,
					),
				);
				setPagedSelects(new Array(res.data.entities.length).fill(1));
				setIsLoading(true);
			})
			.catch((err) => {
				console.log('workdetail error');
				console.log(err);
			});
	}, []);
	return (
		<InspectTableContainer>
			<section className="inspect_table_header">
				<section className="inspect_table_header_left">
					<button onClick={() => handleBulkOkay(1)}>승인</button>
					<button onClick={() => handleBulkOkay(-1)}>반려</button>
					<button onClick={() => handleBulkOkay(0)}>피드백</button>
				</section>
				<section className="inspect_table_header_right">
					<div className="inspect_download_btn">
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
				</section>
			</section>

			<table className={'inspect_table'}>
				<thead>
					<tr>
						<th>
							<input
								type={'checkbox'}
								onChange={(e) => {
									let newarr = allCheckBoxes.map((el, idx) => {
										if (idx >= plusIndex && idx < plusIndex + pageSize) {
											return e.target.checked;
										} else {
											return el;
										}
									});
									setAllCheckBoxes(newarr);
									if (pagedCheckboxes) {
										let newarr2 = pagedCheckboxes.map((el) => e.target.checked);
										setPagedCheckBoxes(newarr2);
									}
								}}
								name="isSelectAll"
								value="selectAll"
								checked={
									pagedCheckboxes &&
									pagedCheckboxes.filter((el) => el).length ===
										pagedCheckboxes.length
										? true
										: false
								}
							></input>
						</th>
						<th key="challengeTime">지원 일시</th>
						<th key="ID">ID</th>
						<th key="name">성명</th>
						{/* <th key="category">카테고리</th> */}
						<th key="presentation">제출자료</th>
						<th key="status">검수 상태</th>
						<th>프로젝트 검수하기</th>
					</tr>
				</thead>

				<tbody>
					{pagedSubjects
						? pagedSubjects.map((data, index) => {
								return (
									<>
										<tr>
											<td>
												<input
													type="checkbox"
													onClick={(e) => {
														allCheckBoxes[index + plusIndex] = e.target.checked;
														setAllCheckBoxes(allCheckBoxes.slice());
														pagedCheckboxes[index] = e.target.checked;
														setPagedCheckBoxes(pagedCheckboxes.slice());
													}}
													checked={allCheckBoxes[index + plusIndex]}
												></input>
											</td>
											<td>{data.registDate.split('T')[0]}</td>
											<td>{data.memberIdx}</td>
											<td>{data.name ? data.name : 'no data'}</td>
											{/* <td>{data.category}</td> */}
											<td>
												<button
													className="presentation-button"
													onClick={() => {
														handlePresentationClick(data);
													}}
												>
													보기
												</button>
											</td>
											<td>
												{(() => {
													switch (data.checkStatusCode) {
														case 8: {
															return '진행중';
														}
														case 0: {
															return '진행중';
														}
														case 1: {
															return '승인';
														}
														case -1: {
															return '반려';
														}
														default: {
															return '-';
														}
													}
												})()}
											</td>
											<td className="inspect_project">
												<select
													onChange={(e) => {
														console.log(e.target.value);
														let copyArr = pagedSelects.slice();
														copyArr[index] = Number(e.target.value);
														setPagedSelects(copyArr);
													}}
												>
													<option value={1}>승인</option>
													<option value={-1}>반려</option>
													<option value={0}>피드백</option>
												</select>
												<button
													onClick={() => {
														handleSingleStatus(
															data.memberIdx,
															pagedSelects[index],
														);
													}}
												>
													확인
												</button>
											</td>
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
			</div>
			<div className="bt_list">
				<button>목록</button>
			</div>
		</InspectTableContainer>
	);
}
export default InspectTable;
