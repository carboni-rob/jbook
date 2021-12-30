import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: { [key: string]: Cell };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const cellsReducer = (
  state: CellsState = initialState,
  action: Action
): CellsState => {
  switch (action.type) {
    case ActionTypes.UPDATE_CELL:
      const { cellId, content } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [cellId]: {
            ...state.data[cellId],
            content: content,
          },
        },
      };
    case ActionTypes.DELETE_CELL:
      return state;
    case ActionTypes.INSERT_CELL_BEFORE:
      return state;
    case ActionTypes.MOVE_CELL:
      return state;
    default:
      return state;
  }
};

export default cellsReducer;
