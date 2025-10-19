import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Movie Recommendation Microservices System",
    date: "April 2025",
    description:
      "Built a microservices system with REST/GraphQL APIs, Docker deployment, and MongoDB for data management.",
    link: "#",
    tags: ["Microservices", "REST", "GraphQL", "Docker", "MongoDB"],
  },
  {
    title: "Predicting Arrest Outcomes in Los Angeles",
    date: "April 2025",
    description:
      "Analyzed LA arrest records to identify key factors affecting outcomes. Built predictive models (Logistic Regression, Random Forest, SVM, Neural Networks) and visualized results with interactive dashboards.",
    link: "#",
    tags: ["Machine Learning", "Data Analysis", "Python", "Visualization"],
  },
  {
    title: "Burnout Shield",
    date: "March 2025",
    description:
      "Mental Health Monitoring Application. Developed AI models analyzing wearable time series data to evaluate mental health. Implemented a personalized therapeutic support system based on a language model.",
    link: "#",
    tags: ["AI", "Time Series", "Mental Health", "LLM", "Wearables"],
  },
  {
    title: "FungiScan AI",
    date: "Feb 2025",
    description:
      "Created a Streamlit web app to detect fungal diseases in plant leaves from uploaded images. Used a fine-tuned MobileNetV2 CNN model with TensorFlow/Keras for real-time classification.",
    link: "#",
    tags: ["Computer Vision", "CNN", "TensorFlow", "Streamlit", "MobileNetV2"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A selection of projects showcasing my expertise in AI, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg text-balance">{project.title}</CardTitle>
                  {project.link && (
                    <Button asChild variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">View project</span>
                      </a>
                    </Button>
                  )}
                </div>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
