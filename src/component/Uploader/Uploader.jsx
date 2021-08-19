import React, { useState, useEffect } from 'react';
import { TiDeleteOutline } from 'react-icons/ti'; // 파일삭제 버튼 icon
import { Container } from './UploaderStyled.jsx';
import Loader from 'react-loader-spinner';
import {
	delteFileFromBlob,
	singleUploadAndReturnObj,
} from '../../library/azureBlob.js';
// Object.defineProperty(fileToAmend, 'name', { //파일 이름 바꾸기
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
	placeholder,
	loading,
	setLoading,
}) => {
	//file = files 배열 , setFile = useState func
	//filePath = 파일 경로, setFilePath = useState func

	//바뀐 파일이름을 임시 저장하기 위한 state
	const [blob, setBlob] = useState('');
	const [file, setFile] = useState(null);

	//로딩중 구현
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
		setLoading(true);
		if (blob) {
			await delteFileFromBlob(blob);
			document.getElementById('submit_modal_upLoader').value = '';
		}
		const { url, blobname } = await singleUploadAndReturnObj(realFiles, folder);
		setFile(files);
		setBlob(blobname);
		setFilePath(blobname);
		setLoading(false);
	};

	//posterfile preview handle
	const handlePreview = () => {
		if (file !== null) {
			return file.map((ele, idx) => {
				return (
					<div className="file_name_wrap" key={`${ele}${idx}`}>
						<div className="file_name_text">{ele.name} </div>
						<TiDeleteOutline
							src={TiDeleteOutline}
							alt={TiDeleteOutline}
							className="removeFileBtn"
							onClick={async () => {
								const edit = file.slice();
								edit.splice(idx, 1);
								setLoading(true);
								await delteFileFromBlob(blob);
								document.getElementById('submit_modal_upLoader').value = '';
								setBlob(null);
								setFile(edit);
								setFilePath(null);
								setLoading(false);
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
			setFilePath(null);
		}
	}, [file]);

	return (
		<Container className="uploadArea">
			<div className="uploadForm">
				<input
					type="text"
					className="filePath"
					placeholder={placeholder ? placeholder : '파일을 선택하세요'}
					readOnly
				/>
				<input
					type="file"
					id="submit_modal_upLoader"
					className="upLoader"
					accept={accept}
					onChange={fileChangeFunc}
					width="100"
				/>
			</div>
			<div className="filePreview">{handlePreview()}</div>
			{loading && (
				<Loader
					className="uploader_loading_Img"
					type="Oval"
					color="#f84235"
				></Loader>
			)}
		</Container>
	);
};

export default Uploader;
