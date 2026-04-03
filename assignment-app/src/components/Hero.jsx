import Container from './Container'
import Button from './Button'
import PageSection from './PageSection'
import Stack from './Stack'
import HeroIllustration from './HeroIllustration'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <PageSection variant="hero" aria-labelledby="hero-heading">
      <div className={styles.glow} aria-hidden />
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden />
              New: Collaborative workspaces
            </p>
            <h1 id="hero-heading" className={styles.title}>
              Ship products your team{' '}
              <span className={styles.titleAccent}>actually loves using</span>
            </h1>
            <p className={styles.lede}>
              Flowkit unifies roadmap, design, and delivery so you move from idea to launch with clarity —
              without the tool sprawl.
            </p>
            <Stack direction="responsive" gap="md" fullWidthChildren className={styles.ctaRow}>
              <Button variant="primary" size="lg" as="a" href="#get-started">
                Start free trial
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#demo">
                Watch demo
              </Button>
            </Stack>
            <ul className={styles.meta}>
              <li>No credit card</li>
              <li>14-day trial</li>
              <li>SOC2 in progress</li>
            </ul>
          </div>

          <div className={styles.visual}>
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </PageSection>
  )
}
