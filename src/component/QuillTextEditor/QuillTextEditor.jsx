import ReactQuill from 'react-quill';
import React from 'react';

const QuillTextEditor = ({ editorText, setEditorText }) => {
  const editorModule = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      [{ align: [] }, { color: [] }],
      ['clean'],
    ],
  };
  const editorFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'indent',
    'align',
    'color',
  ];

  return (
    <ReactQuill
      modules={editorModule}
      formats={editorFormats}
      value={editorText}
      onChange={value => {
        setEditorText(value);
      }}
    />
  );
};

export default QuillTextEditor;
