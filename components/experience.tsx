import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Research Intern",
    company: "Talan",
    location: "Onsite - Tunisia",
    period: "July 2025 – Aug 2025",
    description:
      "Gathered and integrated structured and unstructured data, designed a graph-based architecture with GraphRAG to connect and analyze relationships, applied multi-agent reasoning to detect patterns and support decisions, developed queries and visualizations to turn data into insights, and evaluated performance against traditional analytics methods.",
    keywords: ["Python", "GraphRAG", "Multi-agent", "Knowledge Graph", "Neo4j"],
  },
  {
    title: "Research Intern",
    company: "EPT/Lasmap - Université de Carthage",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    description:
      "Research on human motion analysis, focusing on automatic posture detection using AI and computer vision, evaluation of 2D/3D pose estimation algorithms (OpenPose, Mediapipe), and application to workplace ergonomics to predict postures and reduce musculoskeletal disorder risks.",
    keywords: ["Python", "Matplotlib", "OpenCV", "Mediapipe", "OpenPose", "BlazePose"],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Ozeol.com",
    location: "Onsite - Tunisia",
    period: "Jun 2024 – Aug 2024",
    description:
      "Developed an AI-based solution to identify potential suppliers by analyzing Ozeol's historical transactional data, leveraging machine learning techniques to improve supplier selection and optimize business decisions.",
    keywords: ["Python", "ML", "Scikit-learn", "TensorFlow", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <CardTitle className="text-xl text-balance">{exp.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <CardDescription className="flex items-center gap-4 text-base">
                  <span className="font-medium text-accent">{exp.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.keywords.map((keyword, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50">
                      {keyword}
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
