import "./text-editor.css";
import React, { useEffect, useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";

interface Props {
  cell: Cell;
}

const TextEditor: React.FC<Props> = ({ cell }): JSX.Element => {
  const [editing, setEditing] = useState(false);
  const editorRef = useRef<HTMLDivElement | null>(null);

  const { updateCell } = useActions();

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
          value={cell.content}
          onChange={(newValue) => {
            updateCell(cell.cellId, newValue || "");
          }}
        />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || "Click to Edit Markdown"} />
      </div>
    </div>
  );
};

export default TextEditor;
