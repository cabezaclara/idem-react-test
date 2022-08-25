import React, {useState} from "react";
import { forwardRef } from "react";
import {VisuallyHiddenInput} from "../../styled";
import {Label, Span, P, Close} from "./styles";

const FileInput = forwardRef(({children}, ref) => {
  const [drag, setDrag] = useState(false);
  const dragStartHandler = (evt) => {
    evt.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (evt) => {
    evt.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (evt) => {
    evt.preventDefault();
    let files = [...evt.dataTransfer.files];
    setFile(files[0]);
    const formData = new FormData();
    files.forEach((elem) => formData.append('file', elem));
    setDrag(false);
  };

  const [file, setFile] = useState(null);

  const fileHandler = (evt) => {
    setFile(evt.target.files[0]);
  };

  return (
    <Label>
      <VisuallyHiddenInput 
        type="file"
        onChange={fileHandler}
        ref={ref}
        >
      </VisuallyHiddenInput>
      { drag 
      ? <Span
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onDrop={e => onDropHandler(e)}
        >
        отпустите файл, чтобы загрузить</Span>
      : <Span
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
        >
          выберите или перетащите файл</Span>
      }
      <P>{file? file.name : null}
        {file 
        ? <Close onClick={
          (e) => {
            e.preventDefault();
            setFile(null);
          }}> </Close> 
          : null}
      </P>
    </Label>
  );
});

export default FileInput;