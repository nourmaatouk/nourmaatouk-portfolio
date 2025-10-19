import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "May 2024",
    category: "Cloud AI",
  },
  {
    title: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "Deep Learning",
  },
  {
    title: "Deep Learning Fundamentals",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "Deep Learning",
  },
  {
    title: "Applications of AI for Predictive Maintenance",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "AI Applications",
  },
  {
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "AI Applications",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "May 2024",
    category: "Machine Learning",
  },
  {
    title: "DevNet Associate",
    issuer: "Cisco Networking Academy",
    date: "Aug 2024",
    category: "Networking",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2024",
    category: "Networking",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Certifications</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Professional certifications demonstrating expertise in AI, machine learning, and cloud technologies.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-base leading-tight text-balance">{cert.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="text-xs">
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
