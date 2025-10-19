import { Calendar, MapPin } from "lucide-react"

const education = [
  {
    school: "École Polytechnique de Sousse",
    location: "Sousse, Tunisia",
    startDate: "Sep 2021",
    endDate: "Jul 2026",
    degrees: [
      {
        title: "Computer Science Engineering Degree",
        specialization: "Specializing in AI & Data Science",
        period: "Sep 2023 - Jul 2026",
        courses: [
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "Natural Language Processing",
          "Data Mining",
          "Advanced Algorithms",
          "Distributed Systems",
          "Cloud Computing"
        ]
      },
      {
        title: "Preparatory Integrated Program",
        specialization: "Advanced Modeling & Information Technology Track",
        period: "Sep 2021 - May 2023",
        courses: [
          "Mathematics",
          "Physics",
          "Programming Fundamentals",
          "Data Structures",
          "Algorithms"
        ]
      }
    ]
  }
]

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{edu.school}</h3>
              
              <div className="flex flex-col gap-3 mb-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>

              {/* Degrees */}
              <div className="space-y-8">
                {edu.degrees.map((degree, degreeIndex) => (
                  <div key={degreeIndex} className="bg-secondary/30 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{degree.title}</h4>
                    <p className="text-accent font-medium mb-2">{degree.specialization}</p>
                    <p className="text-sm text-muted-foreground mb-4">{degree.period}</p>
                    
                    {/* Courses */}
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Key Courses:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {degree.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
