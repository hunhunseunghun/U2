export const TextFile = (data) => {
	const element = document.createElement('a');
	const textFile = new Blob([JSON.stringify(data)], { type: 'text/plain' }); //pass data from localStorage API to blob
	element.href = URL.createObjectURL(textFile);
	element.download = 'jsonFile.txt';
	document.body.appendChild(element);
	element.click();
};
// TextFile();
