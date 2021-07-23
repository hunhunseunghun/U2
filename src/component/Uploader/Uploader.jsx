import { divide } from 'lodash';
import React, { useState, useEffect } from 'react';
import { TiDeleteOutline } from 'react-icons/ti'; // 파일삭제 버튼 icon
import { Container } from './UploaderStyled.jsx';
// import uploadFileToBlob, {
// 	isStorageConfigured,
// 	getFilesFromBlob,
// } from '../../../library/azureBlob';
import uploadFileToBlob, {
	isStorageConfigured,
	getFilesFromBlob,
	getSingleFileFromBlob,
	delteFileFromBlob,
	singleUploadAndReturnObj,
} from '../../library/azureBlob.js';
// Object.defineProperty(fileToAmend, 'name', {
//   writable: true,
//   value: updatedFileName
// });
const _UPLOAD_FILE_LIMIT = 300000000;
const Uploader = ({
	setFilePath,
	accept,
	multiple,
	folder,
	memberIdx,
	challengeIdx,
}) => {
	//file = files 배열 , setFile = useState func
	//filePath = 파일 경로, setFilePath = useState func

	//바뀐 파일이름을 임시 저장하기 위한 state
	const [blob, setBlob] = useState('');
	const [file, setFile] = useState(null);
	// posterfile upload handle------------------------------
	const fileChangeFunc = async (e) => {
		let files = [];
		let realFiles = e.target.files;
		if (!realFiles.length > 0) {
			setFilePath(null);
			return;
		}
		if (realFiles[0].size > _UPLOAD_FILE_LIMIT) {
			alert('300MB 이상의 파일은 올릴 수 없습니다.');
			return;
		}
		for (let key in realFiles) {
			if (!isNaN(Number(key))) {
				//파일 이름 바꾸기
				Object.defineProperty(realFiles[key], 'name', {
					writable: true,
					value: `${challengeIdx ? challengeIdx + '-' : ''}${memberIdx}-${
						realFiles[key].name
					}`,
				});
			}
			files[key] = realFiles[key];
		}
		if (blob) {
			await delteFileFromBlob(blob);
		}

		const { url, blobname } = await singleUploadAndReturnObj(realFiles, folder);
		setFile(files);
		setBlob(blobname);
		if (document.getElementById('upLoader').value) {
			setFilePath(blobname);
		} else {
			setFilePath(null);
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
								delteFileFromBlob(blob);
								// delete copyNamed[idx];
								setFile(edit);
								setFilePath('');
								// setNamedFiles(copyNamed);
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
					placeholder={'Choose file to upload'}
					// value={file}
					readOnly
				/>
				<input
					type="file"
					id="upLoader"
					className="upLoader"
					accept={accept}
					// multiple={multiple}
					onChange={fileChangeFunc}
				/>
			</div>
			<div className="filePreview">{handlePreview()}</div>
		</Container>
	);
};

export default Uploader;
