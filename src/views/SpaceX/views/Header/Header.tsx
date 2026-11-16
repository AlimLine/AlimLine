import styles from './header.module.scss'
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper.tsx";
import Logo from '@/assets/space-x.svg'

const Header = () => {
  return (
    <PageWrapper className={styles.header}>
      <img
        src={Logo}
        alt="icon"
      />

      <div className={styles.links}>
        <div className={styles.main_links}>
          <a href="#">Falcon 9</a>
          <a href="#">Falcon Heavy</a>
          <a href="#">Dragon</a>
          <a href="#">Updates</a>
        </div>

        <div className={styles.under_links}>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Shop</a>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Header;