// import { useTranslation } from 'react-i18next';
import {useState} from "react";
import styles from './constructor.module.scss'
import type {CellProps, CellType} from "@/views/Constructor/types.ts";
import {cellTypesList, mapColumnElCount, mapRowElCount} from "@/views/Constructor/constants.ts";
import Tools from "@/views/Constructor/_components/Tools/Tools.tsx";
import Map from "@/views/Constructor/_components/Map/Map.tsx";

const Constructor = () => {
  // const { t } = useTranslation();
  const initialElementsArray: CellProps[] = Array.from({length: mapRowElCount * mapColumnElCount}, () => ({
    type: 'empty'
  }))
  const [elementsArray, setElementsArray] = useState<CellProps[]>(
    initialElementsArray
  );
  const [brushType, setBrushType] = useState<CellType>('empty');

  return (
    <div className={styles.game_constructor}>
      <Map
        brushType={brushType}
        elementsArray={elementsArray}
        setElementsArray={setElementsArray}
      />

      <Tools
        brushType={brushType}
        cellTypesList={cellTypesList}
        setBrushType={setBrushType}
      />
    </div>
  );
};

export default Constructor;