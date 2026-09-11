export type CellType =
  'empty' |
  'grass' |
  'wood' |
  'wood_floor';

export interface CellProps {
  type: CellType
}