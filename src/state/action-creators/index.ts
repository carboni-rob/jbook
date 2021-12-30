import { ActionTypes } from "../action-types";
import {
  Action,
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellBeforeAction,
  Direction,
} from "../actions";
import { CellTypes } from "../cell";

export const updateCell = (
  cellId: string,
  content: string
): UpdateCellAction => ({
  type: ActionTypes.UPDATE_CELL,
  payload: { cellId, content },
});

export const deleteCell = (cellId: string): DeleteCellAction => ({
  type: ActionTypes.DELETE_CELL,
  payload: cellId,
});

export const moveCell = (
  cellId: string,
  direction: Direction
): MoveCellAction => ({
  type: ActionTypes.MOVE_CELL,
  payload: { cellId, direction },
});

export const insertCellBefore = (
  cellId: string,
  type: CellTypes
): InsertCellBeforeAction => ({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: { cellId, type },
});
