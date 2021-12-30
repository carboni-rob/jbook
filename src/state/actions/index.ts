import { ActionTypes } from "../action-types";
import { CellTypes } from "../cell";

export type Direction = "up" | "down";
export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: { cellId: string; direction: Direction };
}

export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}

export interface InsertCellBeforeAction {
  type: ActionTypes.INSERT_CELL_BEFORE;
  payload: { cellId: string | null; type: CellTypes };
}

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: { cellId: string; content: string };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
