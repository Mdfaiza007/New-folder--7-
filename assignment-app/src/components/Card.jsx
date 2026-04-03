import styles from './Card.module.css'

export default function Card({ icon, title, description, className = '' }) {
  return (
    <article className={`${styles.card} ${className}`.trim()}>
      {icon ? <div className={styles.iconWrap}>{icon}</div> : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
    </article>
  )
}
