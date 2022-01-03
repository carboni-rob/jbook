import produce from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";
import { examples, examplesOrder } from "../../examples/examples";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: { [key: string]: Cell };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: examplesOrder,
  data: examples,
};

const cellsReducer = produce(
  (state: CellsState = initialState, action: Action): CellsState => {
    switch (action.type) {
      case ActionTypes.UPDATE_CELL:
        const { cellId, content } = action.payload;
        state.data[cellId].content = content;

        return state;
      case ActionTypes.DELETE_CELL:
        const confirm = window.confirm(
          "Are you sure you want to delete this cell? This action cannot be undone."
        );
        if (confirm) {
          delete state.data[action.payload];
          state.order = state.order.filter((id) => id !== action.payload);
        }

        return state;
      case ActionTypes.INSERT_CELL_AFTER:
        const cell: Cell = {
          cellId: randomId(),
          content: "",
          type: action.payload.type,
        };

        state.data[cell.cellId] = cell;
        const targetIndex = state.order.findIndex(
          (id) => id === action.payload.cellId
        );
        if (targetIndex === -1) {
          state.order.unshift(cell.cellId);
        } else {
          state.order.splice(targetIndex + 1, 0, cell.cellId);
        }

        return state;
      case ActionTypes.MOVE_CELL:
        const { direction } = action.payload;
        const cellIndex = state.order.indexOf(action.payload.cellId);
        const destinationIndex =
          direction === "up" ? cellIndex - 1 : cellIndex + 1;

        if (destinationIndex < 0 || destinationIndex > state.order.length - 1) {
          return state;
        }

        state.order[cellIndex] = state.order[destinationIndex];
        state.order[destinationIndex] = action.payload.cellId;

        return state;
      default:
        return state;
    }
  }
);

const randomId = (): string => Math.random().toString(36).substring(2, 5);

export default cellsReducer;
