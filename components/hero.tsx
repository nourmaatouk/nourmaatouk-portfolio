import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Nour Maatouk</h1>
          <p className="text-xl md:text-2xl text-accent font-medium">
            Software Engineering Student | AI & Data Science Enthusiast
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Passionate about computer science and data science, I excel in software development and artificial
          intelligence. I have led and contributed to several tech projects and competitions, combining problem-solving
          skills and adaptability to deliver innovative solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button asChild variant="ghost" size="icon">
            <a href="https://www.linkedin.com/in/nour--maatouk" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/nour--maatouk" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="mailto:nourmaatouk88@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="tel:+21694281444">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
