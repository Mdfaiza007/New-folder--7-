import Container from './Container'
import PageSection from './PageSection'
import Button from './Button'
import Stack from './Stack'
import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <PageSection variant="spacious" id="get-started" aria-labelledby="cta-heading">
      <Container>
        <div className={styles.panel}>
          <div className={styles.content}>
            <h2 id="cta-heading" className={styles.title}>
              Ready to replace the patchwork?
            </h2>
            <p className={styles.subtitle}>
              Spin up a workspace in minutes, invite your team, and keep delivery decisions where the work
              happens.
            </p>
            <Stack direction="responsive" gap="md" fullWidthChildren className={styles.actionStack}>
              <Button variant="primary" size="lg" as="a" href="#contact" className={styles.onDarkPrimary}>
                Book a walkthrough
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#pricing" className={styles.onDarkSecondary}>
                View pricing
              </Button>
            </Stack>
          </div>
          <div className={styles.art} aria-hidden />
        </div>
      </Container>
    </PageSection>
  )
}
