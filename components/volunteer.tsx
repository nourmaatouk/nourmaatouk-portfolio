import { Calendar, Building2, ExternalLink } from "lucide-react"
import { Separator } from "./ui/separator"

const volunteerExperiences = [
  {
    title: "Guests Chief",
    organization: "IEEE CS SYP Activities TechX Tunisia 2025",
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    description: "Responsible for contacting international speakers and startups. Coordinated directly with international speakers and contributed to making the event a success.",
    logo: "/logos/ieee-cs.png",
    link: "https://techx.tn"
  }
]

export function Volunteer() {
  return (
    <section id="volunteer" className="py-20 space-y-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <header className="space-y-4 text-center mb-12">
          <h2 className="text-2xl md:text-[2.5rem] font-bold tracking-tight">
            Volunteer Experience
          </h2>
          <p className="text-lg text-muted-foreground/80 font-light italic max-w-2xl mx-auto">
            Contributing to the tech community through leadership and volunteer work
          </p>
        </header>

        {/* Experience Cards */}
        <div className="space-y-6">
          {volunteerExperiences.map((exp, index) => (
            <div key={index}>
              <div className="group relative bg-card/30 rounded-lg p-6 transition-all duration-300 hover:bg-card/50">
                <div className="flex gap-6">
                  {/* Logo Section */}
                  <div className="hidden sm:flex shrink-0 items-center justify-center w-16 h-16 rounded-lg bg-background/50 p-3 ring-1 ring-border/50">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.organization} logo`}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <Building2 className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.organization}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground/80 bg-background/50 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <time>{exp.startDate} - {exp.endDate}</time>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Action Button */}
                    {exp.link && (
                      <div className="pt-2">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-4 py-1.5 rounded-full transition-colors"
                        >
                          Read More
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Separator */}
              {index < volunteerExperiences.length - 1 && (
                <Separator className="my-6 bg-border/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
