import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const experiences = [
  {
    title: "Research Intern",
    company: "Talan",
    logo: "/logos/talan.png",
    location: "Onsite - Tunisia",
    period: "July 2025 – Aug 2025",
    description:
      "Gathered and integrated structured and unstructured data, designed a graph-based architecture with GraphRAG to connect and analyze relationships, applied multi-agent reasoning to detect patterns and support decisions, developed queries and visualizations to turn data into insights, and evaluated performance against traditional analytics methods.",
    highlights: [
      "Integrated 50K+ records of structured and unstructured business data",
      "Designed GraphRAG architecture improving query latency by 40%",
      "Implemented multi-agent reasoning system detecting 15+ new business insights",
      "Created interactive dashboards reducing decision-making time by 35%"
    ],
    keywords: ["Python", "GraphRAG", "Multi-agent", "Knowledge Graph", "Neo4j"],
  },
  {
    title: "Research Intern",
    company: "EPT/Lasmap - Université de Carthage",
    logo: "/logos/lasmap.png",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    description:
      "Research on human motion analysis, focusing on automatic posture detection using AI and computer vision, evaluation of 2D/3D pose estimation algorithms (OpenPose, Mediapipe), and application to workplace ergonomics to predict postures and reduce musculoskeletal disorder risks.",
    highlights: [
      "Evaluated 5+ pose estimation algorithms achieving 92% accuracy on custom dataset",
      "Developed posture classification model reducing false positives by 28%",
      "Created real-time ergonomic monitoring system processing 30 FPS video streams",
      "Published findings improving workplace safety protocols"
    ],
    keywords: ["Python", "Matplotlib", "OpenCV", "Mediapipe", "OpenPose", "BlazePose"],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Ozeol.com",
    logo: "/logos/ozeol.png",
    location: "Onsite - Tunisia",
    period: "Jun 2024 – Aug 2024",
    description:
      "Developed an AI-based solution to identify potential suppliers by analyzing Ozeol's historical transactional data, leveraging machine learning techniques to improve supplier selection and optimize business decisions.",
    highlights: [
      "Processed and cleaned 100K+ transactional records improving data quality by 45%",
      "Built ensemble model (XGBoost + Random Forest) achieving 87% F1-score",
      "Reduced false positives in supplier identification by 32%",
      "Delivered predictive insights enabling $200K+ in potential business value"
    ],
    keywords: ["Python", "ML", "Scikit-learn", "TensorFlow", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-2 border-border rounded-2xl p-6 hover:border-accent/50 transition-colors bg-white hover:shadow-lg">
              {/* Logo */}
              <div className="mb-4">
                <div className="h-12 w-12 relative">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title and Company */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{exp.title}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="font-medium text-accent">{exp.company}</span>
              </div>

              {/* Date and Location */}
              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground leading-relaxed mb-4">{exp.description}</p>

              {/* Highlights with metrics */}
              <div className="mb-4 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="text-xs text-foreground flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {exp.keywords.map((keyword, i) => (
                  <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
