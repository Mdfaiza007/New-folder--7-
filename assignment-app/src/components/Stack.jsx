import styles from './Stack.module.css'

const directions = {
  row: styles.dirRow,
  column: styles.dirColumn,
  responsive: styles.dirResponsive,
}

const gaps = {
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
}

export default function Stack({
  as: Component = 'div',
  direction = 'responsive',
  gap = 'md',
  wrap = true,
  fullWidthChildren = false,
  className = '',
  children,
  ...rest
}) {
  const dirClass = directions[direction] ?? directions.responsive
  const gapClass = gaps[gap] ?? gaps.md
  const wrapClass = wrap && direction !== 'column' ? styles.wrap : ''
  const stretchClass = fullWidthChildren ? styles.fullWidthChildren : ''

  return (
    <Component
      className={`${styles.stack} ${dirClass} ${gapClass} ${wrapClass} ${stretchClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  )
}
