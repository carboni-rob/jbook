import "./code-cell.css";
import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useCumulativeCode } from "../hooks/use-cumulative-code";

interface Props {
  cell: Cell;
}

const CodeCell: React.FC<Props> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) =>
    state.bundle ? state.bundle[cell.cellId] : null
  );
  const cumulativeCode = useCumulativeCode(cell.cellId);

  const isLoading = !bundle || bundle.loading;

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.cellId, cumulativeCode);
    }

    const timer = setTimeout(async () => {
      createBundle(cell.cellId, cumulativeCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.content, cell.cellId, createBundle, cumulativeCode]);

  return (
    <Resizable direction="vertical">
      <div className="code-cell">
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value: string) => updateCell(cell.cellId, value)}
          />
        </Resizable>
        <div className="progress-wrapper">
          {isLoading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} status={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
