import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import CodeOutput from "./components/CodeOutput.jsx";

function App() {
  const sample = "Hello world!\nThis is program output.\nLine 3.";
  return (
    <div className="h-screen flex flex-col">
      <div>
        {" "}
        <CodeEditor />
      </div>
      <CodeOutput output={sample} />
    </div>
  );
}

export default App;
