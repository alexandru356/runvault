import { Editor } from '@monaco-editor/react';

const CodeEditor = () => {
    return(
        <Editor
            height="90vh"
            width="100vh"
            defaultLanguage="javascript"
            defaultValue="// some comment"
        />
    )
}

export default CodeEditor;