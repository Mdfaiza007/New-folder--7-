import styles from './ResponsiveGrid.module.css'

export default function ResponsiveGrid({ className = '', children, ...rest }) {
  return (
    <div className={`${styles.grid} ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}
