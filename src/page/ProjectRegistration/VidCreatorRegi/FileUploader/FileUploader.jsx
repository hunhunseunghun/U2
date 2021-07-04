import React, { useEffect } from 'react';
import { TiDeleteOutline } from 'react-icons/ti'; // 파일삭제 버튼 icon
import { Container } from './FileUploaderStyled.jsx';

const FileUploader = ({ file, setFile, filePath, setFilePath }) => {
  //file = files 배열 , setFile = useState func
  //filePath = 파일 경로, setFilePath = useState func

  // posterfile upload handle------------------------------

  const fileChangeFunc = e => {
    let files = [];
    for (let key in e.target.files) {
      files[key] = e.target.files[key];
    }
    // posterFileArr.push(e.target.files[0]);
    setFile(files);
    // posterFile path setting
    if (document.getElementById('FileUpLoader').value) {
      setFilePath(document.getElementById('FileUpLoader').value);
    } else {
      setFilePath('Choose file to upload');
    }
  };

  //posterfile preview handle
  const handlePreview = () => {
    if (file !== null) {
      return file.map((ele, idx) => {
        return (
          <div key={`${ele}${idx}`}>
            {ele.name}{' '}
            <TiDeleteOutline
              src={TiDeleteOutline}
              alt={TiDeleteOutline}
              className="removeFileBtn"
              onClick={() => {
                const edit = file.slice();
                edit.splice(idx, 1);
                setFile(edit);
              }}
            ></TiDeleteOutline>
          </div>
        );
      });
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (file !== null && file.length === 0) {
      setFilePath('Choose file to upload');
    }
  }, [file]);

  return (
    <Container className="uploadArea">
      <div className="uploadForm">
        <input
          type="text"
          className="filePath"
          placeholder={filePath}
          readOnly
        />
        <input
          type="file"
          id="FileUpLoader"
          className="upLoader"
          multiple
          onChange={fileChangeFunc}
        />
      </div>
      <div className="filePreview">{handlePreview()}</div>
    </Container>
  );
};

export default FileUploader;
