import styles from './LinkColumn.module.css'

export default function LinkColumn({ title, links }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <a className={styles.link} href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
