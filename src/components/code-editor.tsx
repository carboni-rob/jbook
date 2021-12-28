import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import { useRef } from "react";

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();

  const onEditorDidMount: EditorDidMount = (getEditorValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => onChange(getEditorValue()));
    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const onFormatClick = () => {
    const unformattedCode = editorRef.current.getModel().getValue();
    const formattedCode = prettier.format(unformattedCode, {
      parser: "babel",
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
    });

    editorRef.current.setValue(formattedCode);
  };

  return (
    <div>
      <button onClick={onFormatClick}>Format Code</button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
        height="500px"
        theme="dark"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
