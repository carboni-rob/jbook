import { ActionTypes } from "../action-types";
import { CellTypes } from "../Cell";

interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: { cellId: string; direction: "up" | "down" };
}

interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}

interface InsertCellBeforeAction {
  type: ActionTypes.INSERT_CELL_BEFORE;
  payload: { cellId: string; type: CellTypes };
}

interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: { cellId: string; content: string };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
