export type CellType =
  'empty' |
  'grass' |
  'wood' |
  'wood_floor';

export type CellItemType = 'none' | 'door_wood_vertical'

export interface CellProps {
  type: CellType
  item: CellItemType
}