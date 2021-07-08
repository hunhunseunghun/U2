import React, { useState } from 'react';
import ReactQuill from 'react-quill';
// import Quill from 'quill';
// import ImageResize from '@looop/quill-image-resize-module-react';
// Quill.register('modules/ImageResize', ImageResize);

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
      ['image'],
      [{ align: [] }, { color: [] }],
      ['clean'],
    ],
    // ImageResize: {
    //   modules: ['Resize'],
    // },
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

  // 이미지 데이터 html로 표현시 스트링 길이 부담, formdata 객체 담아 서버 전송; (DB부담시 필요)

  // const editorModule = {
  //   toolbar:{
  //     container: "#toolbar",
  //     handlers: {
  //       image: handleImageData,
  //     }
  //   }
  // }

  // const handleImageData = () =>{
  //   const input =document.createElemnet("input")

  //   input.setAttribute("type", "file")
  //   input.setAttribute("aceept", "image/*")
  //   input.click();

  //   input.onchange = async () => {
  //     if(input.files){
  //       let file: any = input.files[0]
  //       let formData = new FormData();

  //       fomrData.append("image", file)

  //       let fileName = file.name;

  //       console.log(fromData)
  //     }
  //   }
  // }

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
