import styles from './Container.module.css'

const sizes = {
  default: styles.sizeDefault,
  narrow: styles.sizeNarrow,
  wide: styles.sizeWide,
}

export default function Container({
  as: Component = 'div',
  size = 'default',
  className = '',
  children,
  ...rest
}) {
  const sizeClass = sizes[size] ?? sizes.default
  return (
    <Component className={`${styles.container} ${sizeClass} ${className}`.trim()} {...rest}>
      {children}
    </Component>
  )
}
