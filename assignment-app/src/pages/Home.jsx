import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogoStrip from '../components/LogoStrip'
import Features from '../components/Features'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <section id="product" className={styles.anchorSection} aria-label="Product highlights" />
        <Features />
        <section id="pricing" className={styles.anchorSection} aria-label="Pricing placeholder" />
        <CTASection />
        <section id="resources" className={styles.srOnly}>
          Resources anchor for navigation — link sections to your CMS or docs.
        </section>
      </main>
      <Footer />
    </div>
  )
}
