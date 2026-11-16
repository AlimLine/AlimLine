import styles from './footer.module.scss'
import Logo from '@/assets/space-x.svg'
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper.tsx";

const Footer = () => {
  return (
    <PageWrapper className={styles.footer}>
      <img
        src={Logo}
        alt="icon"
        className='mb-40'
      />

      <div className={styles.links}>
        <a href="#">Twitter</a>
        <a href="#">Youtube</a>
        <a href="#">Instagram</a>
        <a href="#">Flickr</a>
        <a href="#">LinkedIn</a>
        <a href="#">Privacy</a>
        <a href="#">Policy</a>
      </div>

      <p>
        For additional questions, contact rideshare@spacex.com
      </p>

      <button className='primary'>
        Contact us
      </button>
    </PageWrapper>
  )
}

export default Footer;