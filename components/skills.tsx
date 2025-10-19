import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JEE", "C/C++", "JavaScript", "SQL", "PHP"],
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "XGBoost",
      "Keras",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "OpenPose",
      "MediaPipe",
    ],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Angular", "Flask", "FastAPI", "Node.js", "MySQL", "MongoDB"],
  },
  {
    title: "Tools, Frameworks & Platforms",
    skills: [
      "Git",
      "Docker",
      "Kafka",
      "Postman",
      "Trello",
      "Figma",
      "Eclipse",
      "Android Studio",
      "Linux",
      "Microservices",
      "Neo4j",
      "Knowledge Graph",
      "GraphRAG",
      "MCP tools",
      "Multi-agent systems",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Technical Skills</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A comprehensive toolkit for building innovative AI and software solutions.
          </p>
        </div>

        <div className="grid gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-balance">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-accent/20 transition-colors">
                      {skill}
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
