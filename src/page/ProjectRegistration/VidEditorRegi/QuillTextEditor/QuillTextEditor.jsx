import ReactQuill from 'react-quill';
import React, { useState } from 'react';

const QuillTextEditor = () => {
  const [editorText, setEditorText] = useState('');

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
      ['image'],
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
    'image',
    'align',
    'color',
  ];

  return (
    <ReactQuill
      className="notice_editor"
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
