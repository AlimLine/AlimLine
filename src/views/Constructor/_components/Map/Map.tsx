import type {CellProps, CellType} from "@/views/Constructor/types.ts";
import styles from "./map.module.scss";
import React, {type Dispatch, useState} from "react";
import {mapColumnElCount, getCellImage, mapRowElCount, getCellItemImage} from "@/views/Constructor/constants.ts";

interface MapProps {
  brushType: CellType,
  elementsArray: CellProps[]
  setElementsArray: Dispatch<CellProps[]>
}

const Map = (props: MapProps) => {
  const {
    brushType,
    elementsArray,
    setElementsArray
  } = props
  const [isClick, setIsClick] = useState(false);

  const mapSettings: React.CSSProperties = {
    width: `${mapRowElCount * 24}px`,
    height: `${mapColumnElCount * 24}px`
  }

  const onMouseClickCell = (cell: CellProps, index: number) => {
    cell.type = brushType
    const cacheElements = [...elementsArray]
    cacheElements[index] = cell
    setElementsArray(cacheElements)
  }

  const onMouseDown = (cell: CellProps, index: number) => {
    setIsClick(true)

    onMouseClickCell(cell, index)
  }

  const onMouseUp = () => {
    setIsClick(false)
  }

  return (
    <div className={styles.map} style={mapSettings}>
      {elementsArray?.map((cell, index) => (
        <div
          className={`${styles.cell} ${styles[cell?.type]}`}
          onMouseDown={() => onMouseDown(cell, index)}
          onMouseUp={onMouseUp}
          onMouseMove={() => isClick ? onMouseClickCell(cell, index) : undefined} key={index}
        >
          <img src={getCellImage[cell?.type]} alt="" className={styles.cell_icon} />

          <img src={getCellItemImage[cell?.item]} alt="" className={`${styles.cell_icon} ${styles.item}`} />
        </div>
      ))}
    </div>
  );
};

export default Map;