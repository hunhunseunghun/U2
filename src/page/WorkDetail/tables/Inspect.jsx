import React, { useState, useEffect } from 'react';
import Pagination2 from '../../../component/Pagination/Pagination2';
import { paginate } from '../../../component/Pagination/paginate';
import { InspectTableContainer } from './InspectStyled';
import excelIcon from '../../../Img/Icons/excelIcon.png';
function InspectTable({ datas, handlePresentationClick }) {
  let [subjects, setSubjects] = useState({
    data: datas,
    pageSize: 10,
    currentPage: 1,
  });
  let [allCheckBoxes, setAllCheckBoxes] = useState(
    new Array(datas.length).fill(false)
  );
  const { data, pageSize, currentPage } = subjects;
  const pagedDatas = paginate(data, currentPage, pageSize);
  const pagedArr = paginate(allCheckBoxes, currentPage, pageSize);
  const { length: count } = subjects.data;
  let [pagedSubjects, setPagedSubjects] = useState(pagedDatas);
  let [pagedCheckboxes, setPagedCheckBoxes] = useState(pagedArr);
  let [plusIndex, setPlusIndex] = useState(0);
  console.log('checkboxes: ', allCheckBoxes);
  console.log('pagedCheckBoxes: ', pagedCheckboxes);
  console.log('current page: ', currentPage);
  let handlePageChange = page => {
    setSubjects({ ...subjects, currentPage: page });
    setPagedSubjects(paginate(data, page, pageSize));
    setPlusIndex((page - 1) * pageSize);
    setPagedCheckBoxes(paginate(allCheckBoxes, page, pageSize));
  };
  let handleSelectChange = pageSize => {
    setSubjects({ ...subjects, pageSize: pageSize });
    setPagedSubjects(paginate(data, 1, pageSize));
  };

  useEffect(() => {
    setSubjects({ ...subjects, data: datas });
  }, [datas]);
  return (
    <InspectTableContainer>
      <section className="inspect_table_header">
        <section className="inspect_table_header_left">
          <button>승인</button>
          <button>반려</button>
          <button>피드백</button>
        </section>
        <section className="inspect_table_header_right">
          <div className="inspect_download_btn">
            <img src={excelIcon} alt="" />
            <div>다운로드</div>
          </div>

          <select
            onChange={e => {
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
                onChange={e => {
                  console.log(e.target.checked);
                  let newarr = allCheckBoxes.map((el, idx) => {
                    if (idx >= plusIndex && idx < plusIndex + pageSize) {
                      return e.target.checked;
                    } else {
                      return el;
                    }
                  });
                  setAllCheckBoxes(newarr);
                  let newarr2 = pagedCheckboxes.map(el => e.target.checked);
                  setPagedCheckBoxes(newarr2);
                }}
                name="isSelectAll"
                value="selectAll"
                checked={
                  pagedCheckboxes.filter(el => el).length ===
                  pagedCheckboxes.length
                    ? true
                    : false
                }
              ></input>
            </th>
            <th key="challengeTime">지원 일시</th>
            <th key="ID">ID</th>
            <th key="name">성명</th>
            <th key="category">카테고리</th>
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
                          onClick={e => {
                            allCheckBoxes[index + plusIndex] = e.target.checked;
                            setAllCheckBoxes(allCheckBoxes.slice());
                            pagedCheckboxes[index] = e.target.checked;
                            setPagedCheckBoxes(pagedCheckboxes.slice());
                          }}
                          checked={allCheckBoxes[index + plusIndex]}
                        ></input>
                      </td>
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
                      <td className="inspect_project">
                        <select>
                          <option value="okay">승인</option>
                          <option value="return">반려</option>
                          <option value="feedback">피드백</option>
                        </select>
                        <button>확인</button>
                      </td>
                    </tr>
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
      <div className="bt_list">
        <button>목록</button>
      </div>
    </InspectTableContainer>
  );
}
export default InspectTable;
