import styles from './tools.module.scss'
import type {CellType} from "@/views/Constructor/types.ts";
import {getCellImage} from "@/views/Constructor/constants.ts";
import type {Dispatch} from "react";

interface ToolsProps {
  cellTypesList: CellType[]
  brushType: CellType
  setBrushType: Dispatch<CellType>
}

const Tools = (props: ToolsProps) => {
  const {
    cellTypesList,
    brushType,
    setBrushType
  } = props

  const onSelectBrush = (value: CellType) => {
    setBrushType(value)
  }

  return (
    <div className={styles.tools}>
      {cellTypesList?.map((cellType, index) => (
        <img
          src={getCellImage[cellType]}
          alt=""
          className={`${styles.cell_icon} ${cellType === brushType ? styles.active : ''}`}
          onClick={() => onSelectBrush(cellType)}
          key={index}
        />
      ))}
    </div>
  );
};

export default Tools;