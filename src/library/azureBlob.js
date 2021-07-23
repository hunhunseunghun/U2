// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient } from '@azure/storage-blob';

// const sasToken = process.env.storagesastoken || "sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-05-28T16:49:40Z&st=2021-05-24T08:49:40Z&spr=https&sig=Ce0EinaxClvGkB71InL%2B2IEjAfd0gMsiqnNfo9wCRr8%3D"; // Fill string with your SAS token
// const containerName = `importfiles`;
// const storageAccountName = process.env.storageresourcename || "storagename"; // Fill string with your Storage resource name

const sasToken = process.env.REACT_APP_SAS;
const containerName = `dev-qa`;
let storageAccountName = process.env.REACT_APP_STORAGE_NAME;
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
	return !(!storageAccountName || !sasToken);
	// storageAccountName = process.env.REACT_APP_STORAGE_NAME;
	// return { storageAccountName: storageAccountName, sasToken: sasToken };
};

// return list of blobs in container to display
const getBlobsInContainer = async (containerClient) => {
	const returnedBlobUrls = [];

	// get list of blobs in container
	// eslint-disable-next-line
	for await (const blob of containerClient.listBlobsFlat()) {
		// if image is public, just construct URL
		returnedBlobUrls.push(
			`https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`,
		);
	}

	return returnedBlobUrls;
};

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

// const uploadFileToBlob = async (file) => {
// 	if (!file) return [];

// 	// get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
// 	const blobService = new BlobServiceClient(
// 		`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`,
// 	);
// 	// get Container - full public read access
// 	const containerClient = blobService.getContainerClient(containerName);

// 	// upload file
// 	await createBlobInContainer(containerClient, file);

// 	// get list of blobs in container
// 	return getBlobsInContainer(containerClient);
// };
// </snippet_uploadFileToBlob>
const uploadFileToBlob = async (files) => {
	if (!files || !files.length > 0) return [];

	// get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
	const blobService = new BlobServiceClient(
		`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`,
	);
	// get Container - full public read access
	const containerClient = blobService.getContainerClient(containerName);

	// upload file
	for (let file of files) {
		let result = await createBlobInContainer(containerClient, file);
		console.log('file: ', file);
		console.log('result: ', result);
	}

	// get list of blobs in container
	return getBlobsInContainer(containerClient);
};

export default uploadFileToBlob;

export const getFilesFromBlob = async () => {
	const blobService = new BlobServiceClient(
		`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`,
	);
	// get Container - full public read access
	const containerClient = blobService.getContainerClient(containerName);

	return getBlobsInContainer(containerClient);
};
export const getSingleFileFromBlob = (name) => {
	// const blobService = new BlobServiceClient(
	// 	`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`,
	// );
	// get Container - full public read access
	// const containerClient = blobService.getContainerClient(containerName);
	// const blob = await containerClient.getBlobClient(name);
	// return endpoint + blob.name;
	return `https://${storageAccountName}.blob.core.windows.net/${containerName}/${name}`;
};
export const delteFileFromBlob = async (name) => {
	const blobService = new BlobServiceClient(
		`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`,
	);
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
	// get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
	const blobService = new BlobServiceClient(
		`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`,
	);
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
