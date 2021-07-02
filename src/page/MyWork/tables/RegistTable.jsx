import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { RegistTableContainer } from './RegistTableStyled';
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
  let handlePageChange = page => {
    setQuests({ ...quests, currentPage: page });
  };
  useEffect(() => {
    console.log('datas:');
    console.log(datas);
    setQuests({ ...quests, data: datas });
  }, [datas]);
  return (
    <RegistTableContainer>
      <table>
        <thead>
          {/* <tr> */}
          <th key={'image'}>이미지</th>
          <th key="category">카테고리</th>
          <th key={'name'}>과제명</th>
          <th key={'contriNum'}>참여자수</th>
          <th key={'inspection'}>검수대상</th>
          <th key={'dueDate'}>마감일</th>
          {/* </tr> */}
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
    </RegistTableContainer>
  );
}
export default RegistTable;
