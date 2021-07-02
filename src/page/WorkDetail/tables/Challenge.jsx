import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { ChallengeTableContainer } from './ChallengeStyled';
function ChallengeTable({ datas }) {
  let [subjects, setSubjects] = useState({
    data: datas,
    pageSize: 3,
    currentPage: 1,
  });
  // console.log('datas: ', datas);
  const { data, pageSize, currentPage } = subjects;
  const pagedQuests = paginate(data, currentPage, pageSize);
  const { length: count } = subjects.data;
  console.log('datas: ', datas);
  let handlePageChange = page => {
    setSubjects({ ...subjects, currentPage: page });
  };
  useEffect(() => {
    console.log('datas:');
    console.log(datas);
    setSubjects({ ...subjects, data: datas });
  }, [datas]);
  return (
    <ChallengeTableContainer>
      <table>
        <thead>
          <th key="challengeTime">챌린지 일시</th>
          <th key="ID">ID</th>
          <th key="name">성명</th>
          <th key="mobileNum">휴대폰 번호</th>
          <th key="email">이메일</th>
        </thead>
        <tbody>
          {pagedQuests
            ? pagedQuests.map(data => {
                return (
                  <>
                    <tr>
                      <td>
                        <img src={data.img}></img>
                      </td>
                      <td>{data.category}</td>
                      <td>
                        <Link
                          to={{
                            pathname: '/workdetail',
                            state: {
                              projectId: data.id,
                              isContriClicked: false,
                              isInspectClicked: false,
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
                              isContriClicked: true,
                              isInspectClicked: false,
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
                              isContriClicked: true,
                              isInspectClicked: false,
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
                      <td>{data.dueDate}</td>
                    </tr>
                    {/* <hr className="row-line"></hr> */}
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
        ></Pagination2>
      </div>
    </ChallengeTableContainer>
  );
}
export default ChallengeTable;
