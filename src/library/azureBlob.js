import { BlobServiceClient } from '@azure/storage-blob';
import axios from 'axios';
const containerName = process.env.REACT_APP_CONTAINER_NAME;
const storageURL = process.env.REACT_APP_STORAGE_URL;
const createBlobInContainer = async (containerClient, file, folder) => {
	// create blobClient for container
	const blobClient = containerClient.getBlockBlobClient(
		`${folder ? folder + '/' : ''}${file.name}`,
	);

	// set mimetype as determined from browser with file upload control
	const options = {
		blobHTTPHeaders: {
			blobContentType: file.type,
		},
	};

	// upload file
	const result = await blobClient.uploadBrowserData(file, options);

	return result;
};

export const getSingleFileFromBlob = (name) => {
	return `${storageURL}${containerName}/${name}`;
};
export const delteFileFromBlob = async (name) => {
	const config = {
		method: 'get',
		url: process.env.REACT_APP_U2_DB_HOST + '/azure/sas/market',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	};
	const response = await axios(config);
	const newSAS = response.data.sasUri.split('?')[1];
	const blobService = new BlobServiceClient(`${storageURL}?${newSAS}`);
	const containerClient = blobService.getContainerClient(containerName);
	try {
		await containerClient.deleteBlob(name);
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};
export const singleUploadAndReturnObj = async (files, folder) => {
	var file = files[0];

	Object.defineProperty(file, 'name', {
		//이름 바꾸기
		writable: true,
		value: `${new Date().getTime()}_${file.name}`,
	});

	const config = {
		method: 'get',
		url: process.env.REACT_APP_U2_DB_HOST + '/azure/sas/market',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	};
	const response = await axios(config);
	const newSAS = response.data.sasUri.split('?')[1];
	const blobService = new BlobServiceClient(`${storageURL}?${newSAS}`);
	const containerClient = blobService.getContainerClient(containerName);

	// upload file
	await createBlobInContainer(containerClient, file, folder);
	var returnObj = {
		url: `${storageURL}${containerName}/${folder}/${file.name}`,
		blobname: `${folder}/${file.name}`,
	};
	return returnObj;
};
