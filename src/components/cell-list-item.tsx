import { Cell } from "../state";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import ActionBar from "./action-bar";

interface Props {
  cell: Cell;
}

const CellListItem: React.FC<Props> = ({ cell }): JSX.Element => {
  let child: JSX.Element;
  cell.type === "code"
    ? (child = <CodeCell cell={cell} />)
    : (child = <TextEditor cell={cell} />);

  return (
    <div>
      <ActionBar id={cell.cellId} />
      {child}
    </div>
  );
};

export default CellListItem;
