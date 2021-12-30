import { ActionTypes } from "../action-types";
import {
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellAfterAction,
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

export const insertCellAfter = (
  cellId: string | null,
  type: CellTypes
): InsertCellAfterAction => ({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: { cellId, type },
});
