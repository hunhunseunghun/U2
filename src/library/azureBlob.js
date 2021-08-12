import { BlobServiceClient } from '@azure/storage-blob';
import axios from 'axios';
const containerName = process.env.REACT_APP_CONTAINER_NAME;
// const storageAccountName = process.env.REACT_APP_STORAGE_NAME;
const storageURL = process.env.REACT_APP_STORAGE_URL;
console.log('container name : ', containerName);
console.log('storage URL: ', storageURL);
// const sasToken = process.env.REACT_APP_SAS;
// // Feature flag - disable storage feature to app if not configured
// export const isStorageConfigured = () => {
// 	return !(!storageAccountName || !sasToken);
// };

// // return list of blobs in container to display
// const getBlobsInContainer = async (containerClient) => {
// 	const returnedBlobUrls = [];

// 	// get list of blobs in container
// 	// eslint-disable-next-line
// 	for await (const blob of containerClient.listBlobsFlat()) {
// 		// if image is public, just construct URL
// 		returnedBlobUrls.push(
// 			`https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`,
// 		);
// 	}

// 	return returnedBlobUrls;
// };

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
		onprogress: (progress) => {
			console.log('progress: ', progress);
		},
	};

	// upload file
	const result = await blobClient.uploadBrowserData(file, options);
	console.log('result: ', result);

	return result;
	// await blobClient.setMetadata({ UserName: 'lhj' });
};

export const getSingleFileFromBlob = (name) => {
	return `${storageURL}${containerName}/${name}`;
	// return `https://${storageAccountName}.blob.core.windows.net/${containerName}/${name}`;
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
	// get Container - full public read access
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
	// get Container - full public read access
	const containerClient = blobService.getContainerClient(containerName);

	// upload file
	await createBlobInContainer(containerClient, file, folder);
	var returnObj = {
		url: `${storageURL}${containerName}/${folder}/${file.name}`,
		blobname: `${folder}/${file.name}`,
	};
	// get list of blobs in container
	return returnObj;
};
