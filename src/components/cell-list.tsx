import "./cell-list.css";
import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = (): JSX.Element => {
  const cells = useTypedSelector(({ cells }) =>
    cells?.order.map((id: string) => cells.data[id])
  );

  const renderedCells = cells?.map((cell) => (
    <Fragment key={cell.cellId}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.cellId} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell previousCellId={null} forceVisible={cells?.length === 0} />
      {renderedCells}
    </div>
  );
};

export default CellList;
