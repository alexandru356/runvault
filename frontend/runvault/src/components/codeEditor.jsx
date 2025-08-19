import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";

const CodeEditor = ({ language, onChange }) => {
  const [code, setCode] = useState("");

  const handleChange = (value) => {
    setCode(value);
    if (onChange) onChange(value);
  };

  // Map language string → CodeMirror extension
  const getLanguageExtension = () => {
    switch (language) {
      case "python":
        return python();
      case "java":
        return java();
      case "cpp":
        return cpp();
      default:
        return [];
    }
  };

  return (
    <CodeMirror
      value={code}
      height="400px"
      theme={oneDark}
      extensions={[getLanguageExtension()]}
      onChange={handleChange}
    />
  );
};

export default CodeEditor;
