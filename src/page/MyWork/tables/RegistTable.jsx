import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { RegistTableContainer } from './RegistTableStyled';
import sortarrowdown from '../../../Img/Icons/sortarrowdown.png';
import moment from 'moment';
import { getSingleFileFromBlob } from '../../../library/azureBlob';
import { isToday } from '../../../library/timeSetting';
function RegistTable({ setNewAccept }) {
	const history = useHistory();
	const paginationRef = useRef();
	let [quests, setQuests] = useState({
		data: null,
		pageSize: 6,
		currentPage: 1,
	});
	const { data, pageSize, currentPage } = quests;
	const pagedQuests = paginate(data, currentPage, pageSize);
	const [count, setCount] = useState(0);

	let handlePageChange = (page) => {
		setQuests({ ...quests, currentPage: page });
		var config = {
			method: 'get',
			url:
				process.env.REACT_APP_U2_DB_HOST +
				`/Campaign/challengeowned?p=${page}&size=${quests.pageSize}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((response) => {
				setQuests({
					...quests,
					data: response.data.entities,
				});
				setCount(response.data.total);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	var config = {
		method: 'get',
		url:
			process.env.REACT_APP_U2_DB_HOST +
			`/Campaign/challengeowned?p=${quests.currentPage}&size=${quests.pageSize}`,
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	};

	useEffect(() => {
		axios(config)
			.then((response) => {
				setQuests({
					...quests,
					data: response.data.entities,
				});
				setCount(response.data.total);
				paginationRef.current.refreshFirstPage();
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<RegistTableContainer>
			<section className="prjregi_btn_area">
				{' '}
				<div
					className="prjregi_btn"
					onClick={() => {
						history.push('/prjregi');
					}}
				>
					{' '}
					<div className="prjregi_btn_plusicon">+</div>
					<div className="prjregi_btn_text">프로젝트 등록</div>
				</div>
			</section>

			<table>
				<thead>
					<tr>
						<th key={'image'}>
							<section>
								<span>이미지</span>
								<img src={sortarrowdown} alt=""></img>
							</section>
						</th>
						<th key="category">
							{' '}
							<section>
								<span>카테고리</span>
								<img src={sortarrowdown} alt=""></img>
							</section>
						</th>
						<th key={'name'}>
							<section>
								<span>과제명</span>
								<img src={sortarrowdown} alt=""></img>
							</section>
						</th>
						<th key={'contriNum'}>
							<section>
								<span>참여자수</span>
								<img src={sortarrowdown} alt=""></img>
							</section>
						</th>
						<th key={'inspection'}>
							<section>
								<span>검수대상</span>
								<img src={sortarrowdown} alt=""></img>
							</section>
						</th>
						<th key={'dueDate'}>
							<section>
								<span>마감일</span>
								<img src={sortarrowdown} alt=""></img>
							</section>
						</th>
					</tr>
				</thead>
				<tbody>
					{pagedQuests
						? pagedQuests.map((data) => {
								return (
									<>
										<tr>
											<td>
												{data.logo ? (
													<img
														src={getSingleFileFromBlob(data.logo)}
														alt={data.img}
														style={{ width: '100px' }}
													></img>
												) : (
													'No Image'
												)}
											</td>
											<td>
												{data.challengeTargetCode === 1 && '공모전'}
												{data.challengeTargetCode === 2 && '전문영상 편집자'}
												{data.challengeTargetCode === 3 &&
													'영상 크리에이터/인플루언서'}
												{data.challengeTargetCode === 4 && '강사채용'}
											</td>
											<td>
												<Link
													to={{
														pathname: '/workdetail',
														state: {
															projectId: data.challengeIdx,
															challengeTargetCode: data.challengeTargetCode,
															isContriClicked: false,
															isInspectClicked: false,
														},
													}}
												>
													{data.title}
												</Link>
											</td>
											<td>
												<Link
													to={{
														pathname: '/workdetail',
														state: {
															projectId: data.challengeIdx,
															challengeTargetCode: data.challengeTargetCode,
															isContriClicked: true,
															isInspectClicked: false,
														},
													}}
												>
													{data.challengerCount}
													{(() => {
														if (
															data.challengerLast.split('-')[0] !== '0001' &&
															isToday(data.challengerLast.split('T')[0])
														) {
															setNewAccept(true);
															return (
																<span className="newAlert table_newalert">
																	new
																</span>
															);
														}
													})()}
												</Link>
											</td>
											<td>
												<Link
													to={{
														pathname: '/workdetail',
														state: {
															projectId: data.challengeIdx,
															challengeTargetCode: data.challengeTargetCode,
															isContriClicked: false,
															isInspectClicked: true,
														},
													}}
												>
													{(() => {
														if (
															data.challengeTargetCode === 4 ||
															data.challengeTargetCode === 2
														) {
															return '-';
														} else {
															return data.challengerCompleteCount;
														}
													})()}

													{(() => {
														if (
															data.challengerCompleteLast.split('-')[0] !==
																'0001' &&
															isToday(data.challengerCompleteLast.split('T')[0])
														) {
															setNewAccept(true);
															return (
																<span className="newAlert table_newalert">
																	new
																</span>
															);
														}
													})()}
												</Link>
											</td>
											<td>
												{`${moment(data.missions[0].dateFin).format(
													'YYYY-MM-DD',
												)} ${moment(data.missions[0].dateFin).format('hh:mm')}`}
											</td>
										</tr>
									</>
								);
						  })
						: ''}
				</tbody>
			</table>
			<div className="registtable_pagination_area">
				<Pagination2
					className="registtable_pagination"
					itemsCount={count}
					handlePageChange={handlePageChange}
					pageSize={quests.pageSize}
					ref={paginationRef}
				></Pagination2>
			</div>
		</RegistTableContainer>
	);
}
export default RegistTable;
