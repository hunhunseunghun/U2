import { BlobServiceClient } from '@azure/storage-blob';
import axios from 'axios';
const containerName = `dev-qa`;
let storageAccountName = process.env.REACT_APP_STORAGE_NAME;
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
	const options = { blobHTTPHeaders: { blobContentType: file.type } };

	// upload file
	return await blobClient.uploadBrowserData(file, options);
	// await blobClient.setMetadata({ UserName: 'lhj' });
};

export const getSingleFileFromBlob = (name) => {
	return `https://${storageAccountName}.blob.core.windows.net/${containerName}/${name}`;
};
export const delteFileFromBlob = async (name, sas) => {
	const config = {
		method: 'get',
		url: process.env.REACT_APP_U2_DB_HOST + '/azure/sas/market',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	};
	const response = await axios(config);
	const newSAS = response.data.sasUri;
	const blobService = new BlobServiceClient(newSAS);
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
export const singleUploadAndReturnObj = async (files, folder, sas) => {
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
	const newSAS = response.data.sasUri;
	const blobService = new BlobServiceClient(newSAS);
	// get Container - full public read access
	const containerClient = blobService.getContainerClient(containerName);

	// upload file
	await createBlobInContainer(containerClient, file, folder);
	var returnObj = {
		url: `https://${storageAccountName}.blob.core.windows.net/${containerName}/${folder}/${file.name}`,
		blobname: `${folder}/${file.name}`,
	};
	// get list of blobs in container
	return returnObj;
};
