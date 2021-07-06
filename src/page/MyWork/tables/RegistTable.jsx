import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { RegistTableContainer } from './RegistTableStyled';
import sortarrowdown from '../../../Img/Icons/sortarrowdown.png';

function RegistTable({ datas }) {
  const history = useHistory();
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
                              projectId: data.id,
                              isContriClicked: false,
                              isInspectClicked: true,
                            },
                          }}
                        >
                          {data.inspect}
                          {data.isNewInspect ? (
                            <span className="newAlert table_newalert">new</span>
                          ) : (
                            ''
                          )}
                        </Link>
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
