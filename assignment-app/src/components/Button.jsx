import styles from './Button.module.css'

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
}

const sizes = {
  md: styles.sizeMd,
  lg: styles.sizeLg,
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  ...props
}) {
  const variantClass = variants[variant] ?? variants.primary
  const sizeClass = sizes[size] ?? sizes.md
  return (
    <Component
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
