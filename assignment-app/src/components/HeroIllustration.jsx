import styles from './HeroIllustration.module.css'

const BAR_HEIGHTS = ['45%', '70%', '55%', '85%', '62%']

export default function HeroIllustration() {
  return (
    <div className={styles.root} role="img" aria-label="Product preview illustration">
      <div className={styles.mockHeader}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockTitle}>flowkit.app / roadmap</span>
      </div>
      <div className={styles.mockBody}>
        <div className={styles.mockSidebar}>
          <span className={styles.mockLine} />
          <span className={styles.mockLine} />
          <span className={`${styles.mockLine} ${styles.mockLineShort}`} />
          <span className={styles.mockLine} />
        </div>
        <div className={styles.mockMain}>
          <div className={styles.mockChart}>
            {BAR_HEIGHTS.map((height, index) => (
              <span key={index} className={styles.bar} style={{ height }} />
            ))}
          </div>
          <div className={styles.mockRows}>
            <span className={styles.rowLine} />
            <span className={styles.rowLine} />
            <span className={styles.rowLineMuted} />
          </div>
        </div>
      </div>
      <div className={styles.floatingTag}>Live sync · 12 editors</div>
    </div>
  )
}
