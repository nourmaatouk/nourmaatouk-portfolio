import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, Building, ExternalLink } from "lucide-react"

const awards = [
  {
    place: "1st Place",
    title: "ClimAdapt Hackathon Challenge: OpenGeoAI for Climate Action",
    organization: "AGEOS Tunisie",
    date: "October 2025",
    details: "https://example.com/climadapt"
  },
  {
    place: "1st Place",
    title: "Challenge Revolutionizing Agriculture with AI",
    organization: "ARSII & Centre de Recherche en Microélectronique et Nanotechnologie (CRMN)",
    date: "June 2024",
    details: "https://example.com/agriculture"
  },
  {
    place: "1st Place",
    title: "Challenge on Structural Optimization of Composite Plates with AI",
    organization: "ARSII & EPT/Lamap - University of Carthage",
    date: "May 2024",
    details: "https://example.com/structural"
  },
  {
    place: "1st Place",
    title: "IAS TAM 4.0 Technical Challenge",
    organization: "IEEE Industrial Applications Society & DATAVERSE",
    date: "April 2024",
    details: "https://example.com/ias-tam"
  },
  {
    place: "1st Place",
    title: "AI Night Challenge",
    organization: "ARSII & Novation City",
    date: "March 2024",
    details: "https://example.com/ai-night"
  },
  {
    place: "2nd Place",
    title: "Mental Health Technical Challenge",
    organization: "Tunisian Students and Young Professionals Congress & IEEE EMBS",
    date: "February 2024",
    details: "https://example.com/mental-health"
  },
  {
    place: "2nd Place",
    title: "AI Impact Challenge",
    organization: "American Corner Sousse",
    date: "January 2024",
    details: "#"
  },
  {
    place: "3rd Place",
    title: "SIGHT Day Congress Technical Challenge",
    organization: "IEEE Tunisia Section",
    date: "December 2023",
    details: "#"
  },
  {
    place: "2nd Place",
    title: "IEEEXtreme 17.0 Programming Competition",
    organization: "Ecole Polytechnique de Sousse",
    date: "October 2023",
    details: "#"
  },
]

export function Awards() {
  return (
    <section id="awards" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Awards & Achievements</h2>
          <p className="text-lg text-gray-700">Recognition for excellence in AI competitions and technical challenges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, idx) => {
            const isFirst = award.place === '1st Place'
            const isSecond = award.place === '2nd Place'
            const isThird = award.place === '3rd Place'
            const semiclass = isFirst ? 'from-yellow-50 to-yellow-100' : isSecond ? 'from-slate-50 to-slate-100' : 'from-amber-50 to-amber-100'
            const badgeBg = isFirst ? 'bg-yellow-50 text-yellow-700' : isSecond ? 'bg-slate-100 text-slate-700' : 'bg-amber-100 text-amber-700'
            const medalEmoji = isFirst ? '🥇' : isSecond ? '🥈' : isThird ? '🥉' : '🏅'

            return (
              <div key={idx} className="relative w-full max-w-xl mx-auto group">
                {/* decorative top-right semicircle with gradient */}
                <div className={`absolute -top-4 -right-4 w-28 h-28 rounded-full opacity-90 pointer-events-none bg-gradient-to-br ${semiclass}`} />

                <div className="relative bg-white rounded-lg border border-gray-300 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition overflow-hidden">
                  {/* subtle shine overlay on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-transparent via-white/40 to-transparent rounded-lg" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${badgeBg}`}> 
                        <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${isFirst ? 'bg-yellow-100 text-yellow-700' : isSecond ? 'bg-slate-200 text-slate-700' : 'bg-amber-100 text-amber-700'}`}>
                          <Trophy className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold">{award.place}</span>
                      </div>
                    </div>
                    <div className="">
                      <span className={`inline-block rounded-full p-2 shadow-sm transform transition group-hover:scale-105 ${isFirst ? 'bg-yellow-100 text-yellow-700' : isSecond ? 'bg-slate-100 text-slate-700' : isThird ? 'bg-amber-100 text-amber-700' : ''}`} aria-hidden>
                        {medalEmoji}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">{award.title}</h3>

                  <div className="mt-3 text-sm text-gray-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{award.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{award.date}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={award.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Achievement Details
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
