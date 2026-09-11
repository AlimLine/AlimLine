import iDirt from '@/assets/contructor/cells/dirt.jpg'
import iGrass from '@/assets/contructor/cells/grass.jpg'
import iWood from '@/assets/contructor/cells/wood.jpg'
import iWoodFloor from '@/assets/contructor/cells/wood_floor.jpg'
import iDoorWoodVertical from '@/assets/contructor/cell_items/door_wood_vertical.jpg'
import iNone from '@/assets/contructor/cell_items/none.jpg'
import type {CellItemType, CellType} from "@/views/Constructor/types.ts";

export const getCellImage = {
  empty: iDirt,
  grass: iGrass,
  wood: iWood,
  wood_floor: iWoodFloor
}

export const getCellItemImage = {
  none: iNone,
  door_wood_vertical: iDoorWoodVertical
}

export const cellTypesList: CellType[] = ["empty", 'grass', 'wood', 'wood_floor']
export const cellItemsTypesList: CellItemType[] = ["none", 'door_wood_vertical']

export const mapRowElCount = Math.floor(window.innerWidth / 24)
export const mapColumnElCount = Math.floor(window.innerHeight / 24)