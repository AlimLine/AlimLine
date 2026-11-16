import styles from './card.module.scss'
import type {TabType} from "@/views/NavigatePage/NavigatePage.tsx";
import {useNavigate} from "react-router";
import {setTheme, type ThemeType} from "@/helpers/theme.ts";
import {useEffect, useRef, useState} from "react";
import {clsx} from "clsx";

interface CardProps {
  title: string
  mobileSupport?: boolean
  difficult: TabType
  href: string
  theme: ThemeType
  video?: string
}

type PositionRef = {
  left: number
  top: number
}

const initialPosition: PositionRef = {
  left: 0,
  top: 0
}

const Card = (props: CardProps) => {
  const {
    mobileSupport,
    title,
    difficult,
    theme,
    href,
    video
  } = props
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<PositionRef>(initialPosition);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const cardElement = cardRef?.current

    if (cardElement) {
      setPosition({
        top: cardElement?.offsetTop + cardElement?.clientHeight / 2,
        left: cardElement?.offsetLeft + cardElement?.clientWidth / 2
      })
    }
  }, [])

  const onMouseEnter = () => {
    setIsHover(true)
    setTheme(theme)
  }

  const onMouseLeave = () => {
    setIsHover(false)
    setTheme('default')
  }

  const openLink = () => {
    navigate(href)
    setTheme('default')
  }

  return (
    <>
      <div
        className={styles.card_wrapper}
        onClick={openLink}
        onMouseEnter={theme ? onMouseEnter : undefined}
        onMouseLeave={theme ? onMouseLeave : undefined}
      >
        <div
          className={styles.card}
          ref={cardRef}
        >
          {video ? (
            <video
              src={video}
              autoPlay
              className={styles.picture}
              muted
              loop
            ></video>
          ) : null}
          {/*<iframe src="/space-x" className={styles.picture} scrolling="no"></iframe>*/}

          <div className={styles.info}>
            <p className={styles.title}>{title}</p>
            <p>Адаптив: {mobileSupport ? 'Есть' : 'Нет'}</p>
            <p>Сложность: {difficult}</p>
          </div>
        </div>
      </div>

      <div
        className={clsx(styles.bg_hover_anim, isHover && styles.bg_active)}
        style={{
          left: position?.left,
          top: position?.top
        }}
      ></div>
    </>
  );
};

export default Card;