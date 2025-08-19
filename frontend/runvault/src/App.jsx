import React, { useState } from "react";
import CodeEditor from "./components/codeEditor.jsx";

function App() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");

  const handleRun = () => {
    console.log("Running code:", code);
    // TODO: send code + language to backend (Spring Boot API)
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>RunVault</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
      </select>

      <CodeEditor language={language} onChange={setCode} />

      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default App;
