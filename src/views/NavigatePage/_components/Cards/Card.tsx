import styles from './card.module.scss'
import {clsx} from "clsx";
import type {TabType} from "@/views/NavigatePage/NavigatePage.tsx";
import {useState} from "react";

interface CardProps {
  title: string
  mobileSupport?: boolean
  className?: string
  difficult: TabType
}

const Card = (props: CardProps) => {
  const {
    className,
    mobileSupport,
    title,
    difficult
  } = props
  const [openAnim, setOpenAnim] = useState(false)

  const startOpenAnim = () => {
    setOpenAnim(true)
  }

  return (
    <div className={clsx(styles.card, className, openAnim && styles.openAnim)} onClick={startOpenAnim}>
      <iframe src="http://localhost:5173/space-x" className={styles.iframe} scrolling="no"></iframe>
      
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p>Адаптив: {mobileSupport ? 'Есть' : 'Нет'}</p>
        <p>Сложность: {difficult}</p>
      </div>
    </div>
  );
};

export default Card;