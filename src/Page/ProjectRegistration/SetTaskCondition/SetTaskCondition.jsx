import Reac, { useState } from 'react';
import { DateTimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { TcContainer } from './SetTaskConditionStyled.jsx';

const SetTaskCondition = ({ history }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [noticeStart, setNoticeStart] = useState(new Date());
  const [currency, setCurrency] = useState('KRW');

  console.log(currency);

  //datepicker customize #ff5d51
  const materialTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });

  const handleStartDate = date => {
    setStartDate(date);
    setFinishDate(date);
  };

  const handleCurrency = e => {
    setCurrency(e.target.value);
  };
  return (
    <TcContainer>
      <section className="titleArea">
        <div>과제 완료 조건</div>
      </section>
      <div className="setTcWrap">
        {' '}
        <section className="ele">
          <div className="menu">과제 완료 조건</div>
          <div className="tc">
            <table className="snsTc">
              <tbody>
                <tr>
                  <td>
                    {' '}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>{' '}
                  </td>
                  <td>
                    <div>SNS 게시하기</div>
                  </td>
                  <td>
                    {' '}
                    <section>
                      <div>
                        <input type="radio" />
                        <label>필수</label>
                      </div>
                      <div>
                        <input type="radio" />
                        <label>선택사항</label>
                      </div>
                    </section>
                    <section>
                      <div>
                        <input type="checkbox" />
                        <label>Youtube</label>
                      </div>
                      <div>
                        <input type="checkbox" />
                        <label>Tiktok</label>
                      </div>
                      <div>
                        <input type="checkbox" />
                        <label>Vimeo</label>
                      </div>
                    </section>
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>영상 제작 제출</div>
                  </td>
                  <td>
                    {' '}
                    <section>
                      <div>
                        <input type="radio" />
                        <label>필수</label>
                      </div>
                      <div>
                        <input type="radio" />
                        <label>선택사항</label>
                      </div>
                    </section>
                    <section>
                      <div>
                        <input type="radio" />
                        <label>파일 업로드</label>
                      </div>
                      <div>
                        <input type="radio" />
                        <label>URL 공유</label>
                      </div>
                    </section>
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>이메일(연락처)</div>
                  </td>
                  <td>
                    <input type="text" className="inputEmail" />
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>전화번호(연락처),집주소</div>
                  </td>
                  <td>
                    <input type="text" className="inputPhoneNum" />
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    <div className="checkArea">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div>화면캡쳐</div>
                  </td>
                  <td>
                    <input
                      type="file"
                      id="captureImg"
                      multiple
                      accept="image/*"
                      className="inputCapture"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="ele">
          <div className="menu">프로젝트 게시일</div>
          <div className="inputInfo chooseDate">
            <div className="inputStart">
              <ThemeProvider theme={materialTheme}>
                <DateTimePicker
                  className="dtPicker"
                  label="시작 날짜 선택"
                  inputVariant="outlined"
                  value={startDate}
                  onChange={date => handleStartDate(date)}
                  format="yyyy/MM/dd hh:mm a"
                  disablePast={true}
                  minDate={new Date()}
                  minDateMessage={false}
                  // minDateMessage="현 시각 이후부터 가능합니다"
                  strictCompareDates={true}
                />
              </ThemeProvider>
              <div>프로젝트 게시 시작일을 입력해주십시오</div>
            </div>
            <div className="inputFinish">
              <ThemeProvider theme={materialTheme}>
                <DateTimePicker
                  className="dtPicker"
                  label="종료 날짜 선택"
                  inputVariant="outlined"
                  value={finishDate}
                  onChange={date => setFinishDate(date)}
                  format="yyyy/MM/dd hh:mm a"
                  disablePast={true}
                  minDate={startDate}
                  minDateMessage={false}
                  strictCompareDates={true}
                />
              </ThemeProvider>
              <div>프로젝트 게시 종료일을 입력해주십시오</div>
            </div>
          </div>
        </section>
        <section className="ele">
          <div className="menu">프로젝트 보상 조건</div>
          <div className="inputInfo">
            <div className="inputPrjDesc">
              <div className="rewardDesc">
                <div>보상내용</div>
                <input type="text" />
              </div>
              <div className="rewardPay">
                <div>금액</div>
                <input type="text" />
                <form className="currencyArea">
                  <select
                    className="currencySelect"
                    id="currencySelect"
                    value={currency}
                    onChange={handleCurrency}
                  >
                    <option value="KRW" selected="selected">
                      KRW
                    </option>
                    <option value="USD" selected="selected">
                      USD
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="ele">
          <div className="menu">공지시작일</div>
          <div className="inputInfo noticeDate">
            <div className="noticeStart">
              <ThemeProvider theme={materialTheme}>
                <DateTimePicker
                  className="dtPicker"
                  label="시작 날짜 선택"
                  inputVariant="outlined"
                  value={noticeStart}
                  onChange={date => setNoticeStart(date)}
                  format="yyyy/MM/dd hh:mm a"
                  disablePast={true}
                  minDate={new Date()}
                  minDateMessage={false}
                  // minDateMessage="현 시각 이후부터 가능합니다"
                  strictCompareDates={true}
                />
              </ThemeProvider>
            </div>
          </div>
        </section>
        <section className="ele">
          <div className="menu">* 시상 종류</div>
          <div className="inputInfo chooseDate">
            <div className="inputStart">
              <div>프로젝트 게시 종료일을 입력해주십시오</div>
            </div>
          </div>
        </section>
        <section className="ele">
          <div className="menu">공모 공지글</div>
          <div className="inputInfo chooseDate">
            <div className="inputStart">
              <ThemeProvider theme={materialTheme}>
                <DateTimePicker
                  className="dtPicker"
                  label="시작 날짜 선택"
                  inputVariant="outlined"
                  value={startDate}
                  onChange={date => setStartDate(date)}
                  format="yyyy/MM/dd hh:mm a"
                  disablePast={true}
                  minDate={new Date()}
                  minDateMessage={false}
                  // minDateMessage="현 시각 이후부터 가능합니다"
                  strictCompareDates={true}
                />
              </ThemeProvider>
              <div>프로젝트 게시 시작일을 입력해주십시오</div>
            </div>
            <div className="inputFinish">
              <ThemeProvider theme={materialTheme}>
                <DateTimePicker
                  className="dtPicker"
                  label="종료 날짜 선택"
                  inputVariant="outlined"
                  value={finishDate}
                  onChange={date => setFinishDate(date)}
                  format="yyyy/MM/dd hh:mm a"
                  disablePast={true}
                  minDate={startDate}
                  minDateMessage={false}
                  strictCompareDates={true}
                />
              </ThemeProvider>
              <div>프로젝트 게시 종료일을 입력해주십시오</div>
            </div>
          </div>
        </section>
      </div>
      <section className="ele">
        <div className="menu">* 댓글 기능</div>
        <div className="inputInfo chooseDate">
          <div className="inputStart">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="시작 날짜 선택"
                inputVariant="outlined"
                value={startDate}
                onChange={date => setStartDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={new Date()}
                minDateMessage={false}
                // minDateMessage="현 시각 이후부터 가능합니다"
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 시작일을 입력해주십시오</div>
          </div>
          <div className="inputFinish">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="종료 날짜 선택"
                inputVariant="outlined"
                value={finishDate}
                onChange={date => setFinishDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={startDate}
                minDateMessage={false}
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 종료일을 입력해주십시오</div>
          </div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 담당자</div>
        <div className="inputInfo chooseDate">
          <div className="inputStart">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="시작 날짜 선택"
                inputVariant="outlined"
                value={startDate}
                onChange={date => setStartDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={new Date()}
                minDateMessage={false}
                // minDateMessage="현 시각 이후부터 가능합니다"
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 시작일을 입력해주십시오</div>
          </div>
          <div className="inputFinish">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="종료 날짜 선택"
                inputVariant="outlined"
                value={finishDate}
                onChange={date => setFinishDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={startDate}
                minDateMessage={false}
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 종료일을 입력해주십시오</div>
          </div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 연락처</div>
        <div className="inputInfo chooseDate">
          <div className="inputStart">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="시작 날짜 선택"
                inputVariant="outlined"
                value={startDate}
                onChange={date => setStartDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={new Date()}
                minDateMessage={false}
                // minDateMessage="현 시각 이후부터 가능합니다"
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 시작일을 입력해주십시오</div>
          </div>
          <div className="inputFinish">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="종료 날짜 선택"
                inputVariant="outlined"
                value={finishDate}
                onChange={date => setFinishDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={startDate}
                minDateMessage={false}
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 종료일을 입력해주십시오</div>
          </div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 이메일</div>
        <div className="inputInfo chooseDate">
          <div className="inputStart">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="시작 날짜 선택"
                inputVariant="outlined"
                value={startDate}
                onChange={date => setStartDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={new Date()}
                minDateMessage={false}
                // minDateMessage="현 시각 이후부터 가능합니다"
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 시작일을 입력해주십시오</div>
          </div>
          <div className="inputFinish">
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                className="dtPicker"
                label="종료 날짜 선택"
                inputVariant="outlined"
                value={finishDate}
                onChange={date => setFinishDate(date)}
                format="yyyy/MM/dd hh:mm a"
                disablePast={true}
                minDate={startDate}
                minDateMessage={false}
                strictCompareDates={true}
              />
            </ThemeProvider>
            <div>프로젝트 게시 종료일을 입력해주십시오</div>
          </div>
        </div>
      </section>
    </TcContainer>
  );
};

export default SetTaskCondition;
