import React, { useState } from "react";
import { CommentCreateWrapper } from "./styles";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

const CommentCreate = React.memo(() => {
  const [code, setCode] = useState(`console.log('hello')`);
  const [height, setHeight] = useState(100);
  const editorDidMount = (editor, monaco) => {
    editor.onDidContentSizeChange(() => {
      setHeight(Math.min(1000, editor.getContentHeight()));
      editor.layout();
    });
  };
  const onChange = (newValue, e) => {
    setCode(newValue);
  };
  return (
    <CommentCreateWrapper style={{ height }}>
      <MonacoEditor
        width="100%"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{ scrollBeyondLastLine: false, selectOnLineNumbers: true }}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </CommentCreateWrapper>
  );
});

export default CommentCreate;
