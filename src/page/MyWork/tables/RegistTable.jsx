import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { RegistTableContainer } from './RegistTableStyled';
import sortarrowdown from '../../../Img/Icons/sortarrowdown.png';
import moment from 'moment';
function RegistTable() {
	const history = useHistory();
	// let [quests, setQuests] = useState({
	//   data: datas,
	//   pageSize: 3,
	//   currentPage: 1,
	// });
	let [quests, setQuests] = useState({
		data: null,
		pageSize: 3,
		currentPage: 1,
	});
	// console.log('datas: ', datas);
	const { data, pageSize, currentPage } = quests;
	const pagedQuests = paginate(data, currentPage, pageSize);
	// const { length: count } = quests.data;
	const [count, setCount] = useState(0);
	// console.log('datas: ', datas);

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
				console.log('레지스트 테이블 response:');
				console.log(response.data);
				setQuests({
					...quests,
					data: response.data.entities,
				});
				setCount(response.data.total);
			})
			.catch((err) => {
				console.log('response error:');
				console.log(err);
			});
		// axios(config)
		//   .then(response => {
		//     console.log('레지스트테이블 response:');
		//     console.log(response.data);
		//     setQuests({
		//       ...quests,
		//       data: response.data.entities,
		//     });
		//     setCount(response.data.total);
		//   })
		//   .catch(err => {
		//     console.log('response error:');
		//     console.log(err);
		//   });
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
				console.log('레지스트 테이블 response:');
				console.log(response.data);
				setQuests({
					...quests,
					data: response.data.entities,
				});
				setCount(response.data.total);
			})
			.catch((err) => {
				console.log('response error:');
				console.log(err);
			});

		console.log('퀘스트', quests);
		console.log('카운트', count);
	}, []);

	// useEffect(() => {
	//   console.log('datas:');
	//   console.log(datas);
	//   setQuests({ ...quests, data: datas });
	// }, [datas]);

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
												{data.mainImage ? (
													<img src={data.mainImage}></img>
												) : (
													'No Image'
												)}
											</td>
											<td>
												{data.challengeTargetCode === 1 && '공모전'}
												{data.challengeTargetCode === 2 &&
													'영상 크리에이터/인플루언서'}
												{data.challengeTargetCode === 3 && '전문영상 편집자'}
												{data.challengeTargetCode === 4 && '강사채용'}
											</td>
											<td>
												<Link
													to={{
														pathname: '/workdetail',
														state: {
															projectId: data.challengeIdx,
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
															isContriClicked: true,
															isInspectClicked: false,
														},
													}}
												>
													{/* {data.contriNum} */}
													{data.challengerCount}
													{data.isNewContri ? (
														<span className="newAlert table_newalert">new</span>
													) : (
														''
													)}
												</Link>
											</td>
											<td>
												<Link
													to={{
														pathname: '/workdetail',
														state: {
															projectId: data.challengeIdx,
															isContriClicked: false,
															isInspectClicked: true,
														},
													}}
												>
													{data.challengerCompleteCount}
													{data.isNewInspect ? (
														<span className="newAlert table_newalert">new</span>
													) : (
														''
													)}
												</Link>
											</td>
											<td>
												{`${moment(data.missions[0].dateFin).format(
													'YYYY-MM-DD',
												)} ${moment(data.missions[0].dateFin).format(
													'hh:mm:ss',
												)}`}
											</td>
											{/* <td>{data.missions[0].dateFin}</td> */}
										</tr>
										{/* <hr className="row-line"></hr> */}
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
				></Pagination2>
			</div>
		</RegistTableContainer>
	);
}
export default RegistTable;
