import ReactQuill from 'react-quill';
import React, { useState } from 'react';

const QuillTextEditor = () => {
  const [editorText, setEditorText] = useState(
    '<ul><li>제목 :</li></ul><p><br></p><ul><li>응모 자격 :</li></ul><p><br></p><ul><li>응모 주제 :</li></ul><p><br></p><ul><li>시상 내역 :</li></ul><p><br></p><ul><li>응모 일정 : </li></ul><p><br></p><ul><li>제출 방법 :</li></ul><p><br></p><ul><li>접수 방법 :</li></ul><p><br></p><ul><li>심사 방법 :</li></ul><p><br></p><ul><li>유의 사항 :</li></ul><p><br></p><ul><li>문의 사항:</li></ul>'
  );

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
