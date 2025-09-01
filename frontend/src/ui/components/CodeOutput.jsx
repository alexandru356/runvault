const CodeOuput = ({ output = "" }) => {
  return (
    <div className="flex flex-col h-48 border-t border-gray-700 bg-gray-900 text-gray-100">
      <div className="px-3 py-1 text-sm font-semibold bg-gray-800 border-b border-gray-700">
        Output
      </div>
      <pre className="flex-1 overflow-auto p-3 text-sm whitespace-pre-wrap">
        {output || "No output yet..."}
      </pre>
    </div>
  );
};

export default CodeOuput;
