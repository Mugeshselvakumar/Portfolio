import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { About } from '../sections/About'
import { Experience } from '../sections/Experience'
import { Research } from '../sections/Research'
import { Education } from '../sections/Education'
import { Contact } from '../sections/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Research />
      <Education />
      <Contact />
    </>
  )
}
