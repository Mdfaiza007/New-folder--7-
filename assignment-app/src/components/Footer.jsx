import Container from './Container'
import BrandLogo from './BrandLogo'
import LinkColumn from './LinkColumn'
import { site, footerColumns } from '../config/site'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <BrandLogo variant="inverted" className={styles.logoWrap} />
            <p className={styles.tagline}>{site.tagline}</p>
          </div>
          <div className={styles.grid}>
            {footerColumns.map((col) => (
              <LinkColumn key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className={styles.legal}>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
