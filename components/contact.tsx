import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, Languages } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            I'm currently seeking a final-year internship (PFE) opportunity to conduct research and contribute to
            advanced AI-driven projects. Let's connect!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="mailto:nourmaatouk88@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>nourmaatouk88@gmail.com</span>
              </a>

              <a
                href="tel:+21694281444"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>(+216) 94 281 444</span>
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Tunis, Tunisia</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-secondary">
                  <Languages className="h-5 w-5" />
                </div>
                <span>English, French (DELF B2), Arabic</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">Connect Online</CardTitle>
              <CardDescription>Find me on these platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-3 hover:border-accent hover:text-accent bg-transparent"
              >
                <a href="https://www.linkedin.com/in/nour--maatouk" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full justify-start gap-3 hover:border-accent hover:text-accent bg-transparent"
              >
                <a href="https://github.com/nour--maatouk" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span>GitHub Profile</span>
                </a>
              </Button>

              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                <a href="mailto:nourmaatouk88@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-accent/50 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl">Volunteer Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Founder and Chair • IEEE EPS SIGHT</p>
              <p>Jun 2024 - Feb 2025 • Led the chapter, organized events, and coordinated regular meetings.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Founder and General Secretary • IEEE EPS CS SBC</p>
              <p>Jan 2024 - Jan 2025 • Managed chapter operations, documented meetings, and wrote detailed reports.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Technical Team Volunteer • ACM EPS</p>
              <p>Oct 2022 - Jul 2023 • Participated in TCPC 2023 and TCPC 2025, supporting technical events.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2025 Nour Maatouk. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </section>
  )
}
