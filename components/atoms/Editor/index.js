import React, { useState } from 'react'
import { EditorWrapper } from './styles'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'

const CommentCreate = React.memo(() => {
  const [code, setCode] = useState(`console.log('hello')`)
  const [height, setHeight] = useState(100)
  const editorDidMount = (editor, monaco) => {
    editor.onDidContentSizeChange(() => {
      setHeight(Math.min(1000, editor.getContentHeight()))
      editor.layout()
    })
  }

  var onWillMount = monaco => {
    console.log(monaco)
  }

  const onChange = (newValue, e) => {
    setCode(newValue)
  }
  return (
    <EditorWrapper style={{ height, minHeight: 300 }}>
      <Editor
        width='900'
        language='javascript'
        theme='vs-dark'
        value={code}
        options={{ scrollBeyondLastLine: false, selectOnLineNumbers: true, minimap: false }}
        onChange={onChange}
        onMount={editorDidMount}
        beforeMount={onWillMount}
      />
    </EditorWrapper>
  )
})

export default CommentCreate
