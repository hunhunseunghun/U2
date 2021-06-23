import React, { useState, useEffect, useRef } from "react";
import { RegiContainer } from "./RegistrationStyled.jsx";

const Registration = () => {
  const selectDom = useRef(0);
  const [upLoadFile, setUpLoadFile] = useState(null); //업로드 파일 객체
  const [uploadFilePath, setUploadFilePath] = useState("Choose file to upload"); //업로드 파일패스 , placholder 값
  const [editFilePath, setEditFilePath] = useState("Choose file to upload"); //편집 대상 파일 패스, placeholder 값
  const [editFile, setEditFile] = useState(null);
  // const [upLoadFileArr, setUploadFileArr] = useState([]); //업로드 파일 배열
  const fileChangeHandler = (e) => {
    let fileNames = [];
    for (let key in e.target.files) {
      fileNames[key] = e.target.files[key];
    }
    // upLoadFileArr.push(e.target.files[0]);
    setUpLoadFile(e.target.files);
    console.log("fileList", e.target.files);
    console.log(upLoadFile);

    //input placeholder handler
    if (document.getElementById("fileUpLoader").value) {
      setUploadFilePath(document.getElementById("fileUpLoader").value);
    } else {
      setUploadFilePath("Choose file to upload");
    }
    // handleFileNames();
  };

  const editFileChangeHandler = (e) => {
    setEditFile(e.target.files);
    console.log(editFile);
    //input placeholder handler
    if (document.getElementById("editFileUpLoader").value) {
      setEditFilePath(document.getElementById("editFileUpLoader").value);
    } else {
      setEditFilePath("Choose file to upload");
    }
    // handleFileNames();
  };

  // const handleDeleteFile = (thisIdx) => {
  //   upLoadFileArr.splice(thisIdx, 1);
  //   selectDom.current.classList.value = "noDisplay";
  //   console.log("currDom", selectDom.current);
  //   console.log(selectDom);
  //   console.log("delete excute : ", thisIdx);
  //   console.log(upLoadFileArr);
  // };

  // const handleFileNames = () => {
  //   console.log("excute handlefileNames");
  //   if (upLoadFileArr.length !== 0) {
  //     return upLoadFileArr.map((ele, idx) => {
  //       console.log(idx);
  //       let thisIdx = idx;
  //       return (
  //         <div
  //           className={`inputFileNames${thisIdx} file${thisIdx}`}
  //           ref={selectDom}
  //         >
  //           {ele.name}
  //           <button onClick={() => handleDeleteFile(thisIdx)} key={thisIdx}>
  //             x
  //           </button>
  //         </div>
  //       );
  //     });
  //   } else {
  //     return null;
  //   }
  // };

  // 첨부 파일 업로드 로직
  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", uploadFile);
  //   formData.append("fileName", upLoadFileName);
  //   try {
  //     const res = await axios.post(
  //       "http://locathisIdxlhost:3000/upload",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

  return (
    <RegiContainer>
      <section className="ele request">
        <div className="menu">의뢰 주체</div>
        <div className="inputInfo">
          <div className="radioWrap">
            <input type="radio" name="chk_info" value="indivisual" />
            <div>개인 : 홍길동 님</div>
            <input type="radio" name="chk_info" value="business" />
            <div>비즈니스</div>
          </div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 프로젝트 명</div>
        <div className="inputInfo">
          <div className="inputPrjName">
            <input
              type="text"
              className="prjName"
              placeholder="프로젝트명을 입력해 주십시오"
            />
          </div>
          <div>프로젝트명을 입력해 주십시오</div>
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 프로젝트 설명</div>
        <div className="inputInfo">
          <div className="inputPrjDesc">
            <input
              type="text"
              className="prjName"
              placeholder="U2 서비스 매니저에게 프로젝트에 대하여 좀 더 자세한 내용을 알려주세요"
            />
          </div>
          <div>프로젝트 설명을 입력해 주십시오</div>
        </div>
      </section>
      <section className="ele">
        <div className="menu"> 파일 업로드</div>
        <div className="inputPrjUpload">
          <div>프로젝트 관련한 자료를 업로드 해주세요</div>
          <div className="uploadTextArea"></div>
          <input
            type="text"
            className="fileRoute"
            placeholder={uploadFilePath}
            readOnly
          />
          <input
            type="file"
            id="fileUpLoader"
            onChange={fileChangeHandler}
            multiple
            className="prjUpload"
          />
          {/* <div className="uploadFileArea">
            {upLoadFileArr !== 0 ? handleFileNames() : null}
          </div> */}
        </div>
      </section>
      <section className="ele">
        <div className="menu">* 프로젝트 미팅 여부</div>
      </section>
      <section className="ele">
        <div className="menu">편집 대상 파일</div>
        <div className="inputPrjUpload">
          <div>프로젝트 관련한 자료를 업로드 해주세요</div>
          <div className="uploadTextArea">
            <input type="checkbox" />
            추후 별도 제출 하겠습니다.{" "}
          </div>
          <input
            type="text"
            className="fileRoute"
            placeholder={editFilePath}
            readOnly
          />
          <input
            type="file"
            id="editFileUpLoader"
            onChange={editFileChangeHandler}
            multiple
            className="editFileUpLoader"
          />
        </div>
      </section>
    </RegiContainer>
  );
};

export default Registration;
