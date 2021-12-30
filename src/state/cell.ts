export type CellTypes = "code" | "text";

export interface Cell {
  cellId: string;
  type: CellTypes;
  content: string;
}
