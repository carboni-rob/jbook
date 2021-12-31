import "./cell-list-item.css";
import { Cell } from "../state";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import ActionBar from "./action-bar";

interface Props {
  cell: Cell;
}

const CellListItem: React.FC<Props> = ({ cell }): JSX.Element => {
  const isCodeCell = cell.type === "code";
  let child: JSX.Element;
  isCodeCell
    ? (child = <CodeCell cell={cell} />)
    : (child = <TextEditor cell={cell} />);

  return (
    <div className="cell-list-item">
      <ActionBar
        id={cell.cellId}
        className={!isCodeCell ? `text-cell-action-bar` : ""}
      />
      {child}
    </div>
  );
};

export default CellListItem;
