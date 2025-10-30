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

        
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p className="text-sm">
          © Copyright <span className="font-medium">Nour Maatouk.</span> All Rights Reserved
        </p>
        <p className="text-sm mt-1">
          Designed by{' '}
          <a
            href="/"
            aria-label="Designed by Nour Maatouk"
            className="font-medium text-accent hover:underline"
          >
            Nour Maatouk
          </a>
        </p>
      </footer>
    </section>
  )
}
