import styles from './card.module.scss'
import type {TabType} from "@/views/NavigatePage/NavigatePage.tsx";
import {useNavigate} from "react-router";

interface CardProps {
  title: string
  mobileSupport?: boolean
  difficult: TabType,
  href: string
}

const Card = (props: CardProps) => {
  const {
    mobileSupport,
    title,
    difficult,
    href
  } = props
  const navigate = useNavigate()

  return (
    <div className={styles.card} onClick={() => navigate(href)}>
      <iframe src="/space-x" className={styles.iframe} scrolling="no"></iframe>

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p>Адаптив: {mobileSupport ? 'Есть' : 'Нет'}</p>
        <p>Сложность: {difficult}</p>
      </div>
    </div>
  );
};

export default Card;