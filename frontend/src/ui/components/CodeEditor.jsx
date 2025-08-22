import { Editor } from '@monaco-editor/react';

const CodeEditor = () => {
    return(
        <div>
            <Editor className="editor_container"
                height="90vh"
                width="50%"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                theme='vs-dark'
            />
        </div>
    )
}

export default CodeEditor;
