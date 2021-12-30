import "./add-cell.css";
import { useActions } from "../hooks/use-actions";

interface Props {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const Component = ({
  previousCellId: nextCellId,
  forceVisible,
}: Props): JSX.Element => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "force-visible"}`}>
      <button
        className="button is-rounded is-primary is-small"
        onClick={() => {
          insertCellAfter(nextCellId, "code");
        }}
      >
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Code</span>
      </button>
      <button
        className="button is-rounded is-primary is-small"
        onClick={() => {
          insertCellAfter(nextCellId, "text");
        }}
      >
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Text</span>
      </button>
      <div className="divider"></div>
    </div>
  );
};

export default Component;
