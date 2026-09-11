import iDirt from '@/assets/contructor/cells/dirt.jpg'
import iGrass from '@/assets/contructor/cells/grass.jpg'
import iWood from '@/assets/contructor/cells/wood.jpg'
import iWoodFloor from '@/assets/contructor/cells/wood_floor.jpg'
import type {CellType} from "@/views/Constructor/types.ts";

export const getCellImage = {
  empty: iDirt,
  grass: iGrass,
  wood: iWood,
  wood_floor: iWoodFloor
}

export const cellTypesList: CellType[] = ["empty", 'grass']

export const mapRowElCount = Math.floor(window.innerWidth / 24)
export const mapColumnElCount = Math.floor(window.innerHeight / 24)