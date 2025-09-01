import { Editor } from "@monaco-editor/react";
import LangSelector from "./LangSelector";
import { useRef, useState } from "react";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("// Start Coding . . .");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
  };

  return (
    <div>
      <LangSelector language={language} onSelect={onSelect} />
      <Editor
        className="editor_container"
        height="90vh"
        width="50%"
        language={language}
        theme="vs-dark"
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default CodeEditor;
