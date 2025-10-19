import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Awards } from "@/components/awards"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Awards />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
