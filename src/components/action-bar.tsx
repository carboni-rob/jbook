import "./action-bar.css";
import { useActions } from "../hooks/use-actions";

interface Props {
  id: string;
}

const ActionBar = ({ id }: Props): JSX.Element => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <button
        className="button is-primary is-small"
        title="Move up"
        onClick={() => moveCell(id, "up")}
      >
        <span className="icon">
          <i className="fas fa-arrow-up" />
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, "down")}
      >
        <span className="icon" title="Move down">
          <i className="fas fa-arrow-down" />
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
        title="Delete"
      >
        <span className="icon">
          <i className="fas fa-trash" />
        </span>
      </button>
    </div>
  );
};

export default ActionBar;
