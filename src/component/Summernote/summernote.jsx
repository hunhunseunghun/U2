import React, { useState, useEffect, useRef } from 'react';
function Summernote({ viewRef, placeHolder }) {
	useEffect(() => {
		// const script3 = document.createElement('script');
		// script3.src =
		// 	'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
		// script3.async = true;

		// const script4 = document.createElement('script');
		// script4.src =
		// 	'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js';
		// script4.async = true;

		// const link1 = document.createElement('link');
		// link1.href =
		// 	'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
		// link1.rel = 'stylesheet';
		// link1.async = true;

		// const link2 = document.createElement('link');
		// link2.href =
		// 	'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css';
		// link2.rel = 'stylesheet';
		// link2.async = true;

		const script5 = document.createElement('script');
		script5.innerHTML = `$(document).ready(function () {
		$('#summernote').summernote()
		$('#summernote').on('summernote.change', function(we, contents, $editable) {
			const view = document.getElementById('view')
			view.setAttribute('content_data', contents)
		  });
		});`;
		script5.async = true;

		document.body.appendChild(script5);
	}, []);

	return (
		<div>
			<div id="summernote">{placeHolder}</div>
			<div id="view" ref={viewRef}></div>
		</div>
	);
}
export default Summernote;
