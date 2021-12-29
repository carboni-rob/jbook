import { useEffect, useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface Props {}

const TextEditor = (props: Props): JSX.Element => {
  const [editing, setEditing] = useState(false);
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
      <div ref={editorRef}>
        <MDEditor />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={"# Header"} />
    </div>
  );
};

export default TextEditor;
