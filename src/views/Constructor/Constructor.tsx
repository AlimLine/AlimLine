import {useState} from "react";
import styles from './constructor.module.scss'
import type {CellItemType, CellProps, CellType} from "@/views/Constructor/types.ts";
import {mapColumnElCount, mapRowElCount} from "@/views/Constructor/constants.ts";
import Tools from "@/views/Constructor/_components/Tools/Tools.tsx";
import Map from "@/views/Constructor/_components/Map/Map.tsx";

const Constructor = () => {
  const initialElementsArray: CellProps[] = Array.from({length: mapRowElCount * mapColumnElCount}, () => ({
    type: 'grass',
    item: 'none'
  }))
  const [elementsArray, setElementsArray] = useState<CellProps[]>(
    initialElementsArray
  );
  const [brushType, setBrushType] = useState<CellType>('empty');
  const [brushItemType, setBrushItemType] = useState<CellItemType>('none');

  return (
    <div className={styles.game_constructor}>
      <Map
        brushType={brushType}
        brushItemType={brushItemType}
        elementsArray={elementsArray}
        setElementsArray={setElementsArray}
      />

      <Tools
        brushType={brushType}
        setBrushType={setBrushType}
        brushItemType={brushItemType}
        setBrushItemType={setBrushItemType}
      />
    </div>
  );
};

export default Constructor;