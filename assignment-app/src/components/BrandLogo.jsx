import { site } from '../config/site'
import styles from './BrandLogo.module.css'

const variants = {
  default: styles.variantDefault,
  inverted: styles.variantInverted,
}

export default function BrandLogo({ variant = 'default', className = '' }) {
  const v = variants[variant] ?? variants.default
  return (
    <a
      href={site.homeHref}
      className={`${styles.root} ${v} ${className}`.trim()}
      aria-label={`${site.name} home`}
    >
      <span className={styles.mark} aria-hidden />
      <span className={styles.wordmark}>{site.name}</span>
    </a>
  )
}
