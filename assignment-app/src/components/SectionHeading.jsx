import styles from './SectionHeading.module.css'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  id,
}) {
  const alignClass = align === 'left' ? styles.left : styles.center
  return (
    <header className={`${styles.wrap} ${alignClass} ${className}`.trim()}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  )
}
