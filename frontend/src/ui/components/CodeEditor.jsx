import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div>
      <Editor
        className="editor_container"
        height="70vh"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </div>
  );
};

export default CodeEditor;
