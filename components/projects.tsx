import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Movie Recommendation Microservices System",
    date: "April 2025",
    category: "Full Stack",
    description:
      "Built a scalable microservices system with REST/GraphQL APIs, Docker deployment, and MongoDB. Implemented service-to-service communication handling 1000+ concurrent requests.",
    metrics: [
      "Reduced API response time by 45% using GraphQL optimization",
      "Deployed across 3 microservices with zero downtime",
      "Achieved 99.9% uptime with Docker orchestration"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    tags: ["Microservices", "REST", "GraphQL", "Docker", "MongoDB", "Node.js"],
  },
  {
    title: "Predicting Arrest Outcomes in Los Angeles",
    date: "April 2025",
    category: "Data Science",
    description:
      "Analyzed 100K+ LA arrest records to identify key factors affecting outcomes. Built ensemble predictive models with interactive dashboards for policy insights.",
    metrics: [
      "Achieved 87% accuracy in outcome prediction",
      "Identified 12 key factors influencing arrest outcomes",
      "Reduced feature dimensionality by 65% through PCA"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    tags: ["Machine Learning", "Data Analysis", "Python", "Visualization", "Ensemble Methods"],
  },
  {
    title: "Burnout Shield - Mental Health AI",
    date: "March 2025",
    category: "AI / LLM",
    description:
      "Developed AI models analyzing wearable time-series data to evaluate mental health. Implemented personalized therapeutic support using LLMs, processing real-time sensor data.",
    metrics: [
      "Achieved 91% accuracy in burnout risk detection",
      "Processes 5+ wearable sensor streams in real-time",
      "Generated personalized intervention recommendations for 500+ users"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    tags: ["AI", "Time Series", "LLM", "Wearables", "Real-time Processing"],
  },
  {
    title: "FungiScan AI - Disease Detection",
    date: "Feb 2025",
    category: "Computer Vision",
    description:
      "Created a Streamlit web app for detecting fungal diseases in plant leaves. Fine-tuned MobileNetV2 CNN achieving real-time classification on mobile devices.",
    metrics: [
      "Achieved 94% precision in disease classification",
      "Model size optimized to 8MB for mobile deployment",
      "Processes images in <200ms on edge devices"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    tags: ["Computer Vision", "CNN", "TensorFlow", "Streamlit", "MobileNetV2"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A selection of projects showcasing expertise in AI, machine learning, computer vision, and full-stack development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl text-balance">{project.title}</CardTitle>
                  <Badge variant="outline" className="shrink-0">{project.category}</Badge>
                </div>
                <CardDescription className="text-sm">{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground leading-relaxed text-pretty">{project.description}</p>
                
                {/* Metrics */}
                <div className="space-y-2 bg-secondary/20 rounded-lg p-3">
                  <p className="text-xs font-semibold text-foreground">Key Metrics:</p>
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-xs text-foreground flex items-start gap-2">
                      <span className="text-accent font-bold">→</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  <Button asChild variant="outline" size="sm" className="text-xs">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="text-xs">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
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
