import styles from './PageSection.module.css'

const variants = {
  default: styles.variantDefault,
  featureBand: styles.variantFeatureBand,
  logo: styles.variantLogo,
  spacious: styles.variantSpacious,
  hero: styles.variantHero,
}

export default function PageSection({
  as: Component = 'section',
  variant = 'default',
  className = '',
  children,
  ...rest
}) {
  const tone = variants[variant] ?? variants.default
  return (
    <Component className={`${styles.section} ${tone} ${className}`.trim()} {...rest}>
      {children}
    </Component>
  )
}
