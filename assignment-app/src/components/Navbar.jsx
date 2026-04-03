import { useEffect, useState } from 'react'
import Container from './Container'
import Button from './Button'
import BrandLogo from './BrandLogo'
import { primaryNav } from '../config/site'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <BrandLogo className={styles.brand} />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.links}>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" size="md" as="a" href="#signin" className={styles.hideMobile}>
            Sign in
          </Button>
          <Button variant="primary" size="md" as="a" href="#get-started">
            Get started
          </Button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} data-open={open} />
          </button>
        </div>
      </Container>

      <div id="mobile-nav" className={styles.mobilePanel} data-open={open === true} hidden={!open}>
        <Container>
          <ul className={styles.mobileLinks}>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <a className={styles.mobileLink} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className={styles.mobileLink} href="#signin" onClick={() => setOpen(false)}>
                Sign in
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  )
}
