import styles from './space-x.module.scss'
import Hero from "./views/Hero/Hero.tsx";
import Header from "./views/Header/Header.tsx";
import Footer from "./views/Footer/Footer.tsx";
import Rocket from "@/views/SpaceX/views/Rocket/Rocket.tsx";

function SpaceX() {
  return (
    <div className={styles.space_x}>
      <Header />
      <Hero />
      <Rocket />
      <Footer />
    </div>
  )
}

export default SpaceX
