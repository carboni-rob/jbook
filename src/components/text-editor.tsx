import "./text-editor.css";
import { useEffect, useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const TextEditor = (): JSX.Element => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("# Header");
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickListener = (event: MouseEvent) => {
      if (
        editorRef.current &&
        event.target &&
        !editorRef.current.contains(event.target as Node)
      ) {
        setEditing(false);
      }
    };

    window.addEventListener("click", clickListener, { capture: true });
    return () => {
      window.removeEventListener("click", clickListener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={editorRef}>
        <MDEditor
          value={value}
          onChange={(newValue) => {
            setValue(newValue || "");
          }}
        />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;
