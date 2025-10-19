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
    link: "https://techx.tn",
    color: "bg-gradient-to-r from-blue-100 to-blue-50 border-blue-300",
    button: "bg-blue-600 text-white hover:bg-blue-700"
  },
  {
    title: "Founder and Chair",
    organization: "IEEE EPS SIGHT",
    startDate: "Jun 2024",
    endDate: "Feb 2025",
    description: "Led the chapter, organized events, and coordinated regular meetings.",
    logo: "/logos/ieee-eps-sight.png",
    link: "https://ieee.org/sight",
    color: "bg-gradient-to-r from-orange-100 to-orange-50 border-orange-300",
    button: "bg-orange-500 text-white hover:bg-orange-600"
  },
  {
    title: "Founder and General Secretary",
    organization: "IEEE EPS CS SBC",
    startDate: "Jan 2024",
    endDate: "Jan 2025",
    description: "Managed chapter operations, documented meetings, and wrote detailed reports.",
    logo: "/logos/ieee-eps-cs.png",
    link: "https://ieee.org/eps",
    color: "bg-gradient-to-r from-yellow-100 to-yellow-50 border-yellow-300",
    button: "bg-yellow-400 text-black hover:bg-yellow-500"
  },
  {
    title: "Technical Team Volunteer",
    organization: "ACM EPS",
    startDate: "Oct 2022",
    endDate: "Jul 2023",
    description: "Participated in TCPC 2023 and TCPC 2025, supporting technical events.",
    logo: "/logos/acm-eps.png",
    link: "https://acm.org",
    color: "bg-gradient-to-r from-purple-100 to-purple-50 border-purple-300",
    button: "bg-purple-600 text-white hover:bg-purple-700"
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
        <div className="space-y-8">
          {volunteerExperiences.map((exp, index) => (
            <div key={index}>
              <div className={`group relative rounded-xl p-6 border shadow-md ${exp.color}`}>
                <div className="flex gap-6 items-center">
                  {/* Logo Section */}
                  <div className="flex shrink-0 items-center justify-center w-16 h-16 rounded-lg bg-white/80 p-2 ring-1 ring-gray-200">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.organization} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Building2 className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  {/* Content Section */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="font-medium">{exp.organization}</span>
                      <span className="mx-2">|</span>
                      <Calendar className="w-4 h-4 inline" />
                      <time>{exp.startDate} - {exp.endDate}</time>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                    {exp.link && (
                      <div className="pt-2">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full font-semibold transition-colors ${exp.button}`}
                        >
                          Read More
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
