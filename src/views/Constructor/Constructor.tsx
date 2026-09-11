// import { useTranslation } from 'react-i18next';
import React, {useState} from "react";
import styles from './constructor.module.scss'
import type {CellProps, CellType} from "@/views/Constructor/types.ts";
import {cellTypesList, getCellImage} from "@/views/Constructor/constants.ts";
import Tools from "@/views/Constructor/_components/Tools/Tools.tsx";

const Constructor = () => {
  // const { t } = useTranslation();
  const rowElCount = Math.floor(window.innerWidth / 24)
  const columnElCount = Math.floor(window.innerHeight / 24)
  const initialElementsArray: CellProps[] = Array.from({length: rowElCount * columnElCount}, () => ({
    type: 'empty'
  }))
  const [elementsArray, setElementsArray] = useState<CellProps[]>(
    initialElementsArray
  );
  const [isClick, setIsClick] = useState(false);
  const [brushType, setBrushType] = useState<CellType>('empty');

  const mapSettings: React.CSSProperties = {
    width: `${rowElCount * 24}px`,
    height: `${columnElCount * 24}px`
  }

  const onMouseDown = (cell: CellProps, index: number) => {
    setIsClick(true)

    onMouseClickCell(cell, index)
  }

  const onMouseUp = () => {
    setIsClick(false)
  }

  const onMouseClickCell = (cell: CellProps, index: number) => {
    cell.type = brushType
    const cacheElements = [...elementsArray]
    cacheElements[index] = cell
    setElementsArray(cacheElements)
  }



  return (
    <div className={styles.game_constructor}>
      <div className={styles.map} style={mapSettings}>
        {elementsArray?.map((cell, index) => (
          <div
            className={`${styles.cell} ${styles[cell?.type]}`}
            onMouseDown={() => onMouseDown(cell, index)}
            onMouseUp={onMouseUp}
            onMouseMove={() => isClick ? onMouseClickCell(cell, index) : undefined} key={index}
          >
            <img src={getCellImage[cell?.type]} alt="" className={styles.cell_icon} />
          </div>
        ))}
      </div>

      <Tools
        brushType={brushType}
        cellTypesList={cellTypesList}
        setBrushType={setBrushType}
      />
    </div>
  );
};

export default Constructor;