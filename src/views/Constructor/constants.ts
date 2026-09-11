import iDirt from '@/assets/contructor/cells/dirt.jpg'
import iGrass from '@/assets/contructor/cells/grass.jpg'
import type {CellType} from "@/views/Constructor/types.ts";

export const getCellImage = {
  empty: iDirt,
  grass: iGrass
}

export const cellTypesList: CellType[] = ["empty", 'grass']