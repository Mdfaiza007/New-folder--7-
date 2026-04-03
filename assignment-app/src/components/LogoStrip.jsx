import Container from './Container'
import PageSection from './PageSection'
import { logoStripBrands } from '../config/site'
import styles from './LogoStrip.module.css'

export default function LogoStrip() {
  return (
    <PageSection variant="logo" aria-label="Trusted by teams at">
      <Container>
        <p className={styles.label}>Trusted by modern product teams</p>
        <ul className={styles.row}>
          {logoStripBrands.map((name) => (
            <li key={name} className={styles.item}>
              <span className={styles.logo}>{name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </PageSection>
  )
}
