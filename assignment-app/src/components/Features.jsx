import Container from './Container'
import PageSection from './PageSection'
import SectionHeading from './SectionHeading'
import Card from './Card'
import ResponsiveGrid from './ResponsiveGrid'
import { featureItems } from '../content/features'

export default function Features() {
  return (
    <PageSection
      variant="featureBand"
      id="features"
      aria-labelledby="features-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Why teams switch"
          title="Everything you need to orchestrate delivery"
          subtitle="Purpose-built surfaces for product, design, and engineering — connected in one calm workspace."
          id="features-heading"
        />
        <ResponsiveGrid>
          {featureItems.map(({ icon: Icon, title, description }) => (
            <Card key={title} icon={<Icon />} title={title} description={description} />
          ))}
        </ResponsiveGrid>
      </Container>
    </PageSection>
  )
}
