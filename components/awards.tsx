import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

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
]

export function Awards() {
  return (
    <section id="awards" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Awards & Achievements</h2>
          <p className="text-lg text-gray-700">Recognition for excellence in AI competitions and technical challenges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {awards.map((award, idx) => (
            <div key={idx} className="relative bg-white rounded-xl border border-gray-300 shadow-sm p-6 w-full max-w-md flex flex-col justify-between">
              {/* Top badge and medal */}
              <div className="flex items-center gap-3 mb-2">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full font-semibold text-sm ${award.place === '1st Place' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 text-gray-700'}`}>
                  <span className="inline-block align-middle">
                    {award.place === '1st Place' ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#FDE68A" /><text x="10" y="15" textAnchor="middle" fontSize="12" fill="#F59E42">1</text></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#E5E7EB" /><text x="10" y="15" textAnchor="middle" fontSize="12" fill="#6B7280">2</text></svg>
                    )}
                  </span>
                  {award.place}
                </div>
                <div className="ml-auto">
                  <span className="inline-block bg-yellow-100 rounded-full p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FDE68A" /><text x="12" y="16" textAnchor="middle" fontSize="14" fill="#F59E42">🏅</text></svg>
                  </span>
                </div>
              </div>
              {/* Title */}
              <div className="mb-2">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{award.title}</h3>
              </div>
              {/* Organization and date */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <span className="font-medium">{award.organization}</span>
                {award.date && <span className="ml-2">{award.date}</span>}
              </div>
              {/* Button */}
              <div className="mt-4">
                <a
                  href={award.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center font-semibold rounded-md px-4 py-2 border ${idx === 0 ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'bg-white text-gray-900 border-gray-400 hover:bg-gray-100'}`}
                >
                  View Achievement Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
