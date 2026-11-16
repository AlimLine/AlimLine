import styles from './tools.module.scss'
import type {CellItemType, CellType} from "@/views/Constructor/types.ts";
import {cellItemsTypesList, cellTypesList, getCellImage, getCellItemImage} from "@/views/Constructor/constants.ts";
import type {Dispatch} from "react";

interface ToolsProps {
  brushType: CellType
  brushItemType: CellItemType
  setBrushType: Dispatch<CellType>
  setBrushItemType: Dispatch<CellItemType>
}

const Tools = (props: ToolsProps) => {
  const {
    brushType,
    setBrushType,
    brushItemType,
    setBrushItemType
  } = props

  const onSelectBrush = (value: CellType) => {
    setBrushType(value)
  }

  const onSelectItemBrush = (value: CellItemType) => {
    setBrushItemType(value)
  }

  return (
    <>
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

      <div className={`${styles.tools} ${styles.tools_items}`}>
        {cellItemsTypesList?.map((cellItem, index) => (
          <img
            src={getCellItemImage[cellItem]}
            alt=""
            className={`${styles.cell_icon} ${cellItem === brushItemType ? styles.active : ''}`}
            onClick={() => onSelectItemBrush(cellItem)}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Tools;