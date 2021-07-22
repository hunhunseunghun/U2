import _ from 'lodash';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import FileDialogButtonView from '@ckeditor/ckeditor5-upload/src/ui/filedialogbuttonview';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';
import Notification from '@ckeditor/ckeditor5-ui/src/notification/notification';
import Command from '@ckeditor/ckeditor5-core/src/command';
import { findOptimalInsertionPosition } from '@ckeditor/ckeditor5-widget/src/utils';
import { singleUploadAndReturnObj } from '../../library/azureBlob';
const _UPLOAD_FILE_LIMIT = 50000000; //50mb

const createImageTypeRegExp = (types) => {
	// Sanitize the MIME type name which may include: "+", "-" or ".".
	const regExpSafeNames = types.map((type) => type.replace('+', '\\+'));

	return new RegExp(`^image\\/(${regExpSafeNames.join('|')})$`);
};

class FileUploadCommand extends Command {
	/**
	 * Executes the command.
	 *
	 * @fires execute
	 * @param {Object} options Options for the executed command.
	 * @param {File|Array.<File>} options.file The image file or an array of image files to upload.
	 */
	execute(options) {
		const editor = this.editor;
		const model = editor.model;

		const fileRepository = editor.plugins.get(FileRepository);
		const notification = editor.plugins.get(Notification);

		const imageTypes = editor.config.get('image.upload.types');
		const imageTypesRegExp = createImageTypeRegExp(imageTypes);
		const files = options.files;
		let [imagesToUpload, filesToUpload] = _.partition(files, (file) =>
			imageTypesRegExp.test(file.type),
		);
		if (imagesToUpload.length) {
			// editor.execute('fileUpload', { files: files });
			model.change((writer) => {
				const imagesToUpload2 = Array.isArray(imagesToUpload)
					? imagesToUpload
					: [imagesToUpload];

				// for (const file of imagesToUpload2) {
				// 	console.log(file);
				// 	if (file.size > _UPLOAD_FILE_LIMIT) {
				// 		notification.showWarning('Can not upload files larger than 50MB');
				// 		return;
				// 	}
				// }

				if (imagesToUpload2[0].size > _UPLOAD_FILE_LIMIT) {
					notification.showWarning('50MB 이상의 파일은 올릴 수 없습니다.');
					return;
				}
				uploadImg(writer, model, imagesToUpload2);
			});
		}

		if (filesToUpload.length) {
			// editor.execute('fileUpload', { file: filesToUpload });
			model.change((writer) => {
				const filesToUpload2 = Array.isArray(filesToUpload)
					? filesToUpload
					: [filesToUpload];

				if (filesToUpload2[0].size > _UPLOAD_FILE_LIMIT) {
					notification.showWarning('Can not upload files larger than 50MB');
					return;
				}
				uploadFile(writer, model, fileRepository, filesToUpload2);
			});
		}
		// model.change((writer) => {
		// 	const filesToUpload = Array.isArray(filesToUpload)
		// 		? filesToUpload
		// 		: [filesToUpload];

		// 	for (const file of filesToUpload) {
		// 		console.log(file);
		// 		if (file.size > _UPLOAD_FILE_LIMIT) {
		// 			notification.showWarning('Can not upload files larger than 50MB');
		// 			return;
		// 		}
		// 		uploadFile(writer, model, fileRepository, file);
		// 	}
		// });
	}
}
function uploadImg(writer, model, file) {
	const insertAtSelection = findOptimalInsertionPosition(
		model.document.selection,
		model,
	);
	// uploadFileToBlob(file).then((blobs) => {
	// 	getSingleFileFromBlob(file[0].name).then((url) => {
	// 		const image = writer.createElement('image', { src: url });

	// 		model.insertContent(image, insertAtSelection);
	// 	});
	// });
	singleUploadAndReturnObj(file, 'market-texteditor').then(
		({ url, blobname }) => {
			const image = writer.createElement('image', { src: url });
			model.insertContent(image, insertAtSelection);
		},
	);
	console.log(file.name);
}
// Handles uploading single file.
//
// @param {module:engine/model/writer~writer} writer
// @param {module:engine/model/model~Model} model
// @param {File} file
function uploadFile(writer, model, fileRepository, file) {
	// uploadFileToBlob(file).then((blobs) => {
	// 	getSingleFileFromBlob(file[0].name).then((url) => {
	// 		const attributes = {
	// 			linkHref: url,
	// 			titleTarget: file[0].name,
	// 		};
	// 		const fileElement = writer.createText(file[0].name, attributes);

	// 		const insertAtSelection = findOptimalInsertionPosition(
	// 			model.document.selection,
	// 			model,
	// 		);

	// 		model.insertContent(fileElement, insertAtSelection);
	// 	});
	// });
	singleUploadAndReturnObj(file, 'market-texteditor').then(
		({ url, blobname }) => {
			const attributes = {
				linkHref: url,
				titleTarget: file[0].name,
			};
			const fileElement = writer.createText(file[0].name, attributes);

			const insertAtSelection = findOptimalInsertionPosition(
				model.document.selection,
				model,
			);

			model.insertContent(fileElement, insertAtSelection);
		},
	);
	console.log(file.name);
}

class Uploader extends Plugin {
	init() {
		const editor = this.editor;
		editor.commands.add('fileUpload', new FileUploadCommand(editor));

		editor.ui.componentFactory.add('insertFileAndImage', (locale) => {
			const view = new FileDialogButtonView(locale);
			// const imageTypes = editor.config.get('image.upload.types');
			// const imageTypesRegExp = createImageTypeRegExp(imageTypes);

			view.buttonView.set({
				label: 'Insert image and file',
				icon: imageIcon,
				tooltip: true,
			});

			view.on('done', (evt, files) => {
				editor.execute('fileUpload', { files: files });
			});

			return view;
		});
	}
}

export default Uploader;
