import { Action, Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import {
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  Direction,
} from "../actions";
import { CellTypes } from "../cell";
import bundle from "../../bundler";

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

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BUNDLE_START,
      payload: { cellId },
    });

    const result = await bundle(input);

    dispatch({
      type: ActionTypes.BUNDLE_COMPLETE,
      payload: { cellId, bundle: result },
    });
  };
};
