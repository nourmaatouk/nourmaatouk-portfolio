import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const awards = [
  {
    place: "1st Place",
    title: "Challenge Revolutionizing Agriculture with AI",
    organization: "ARSII & Centre de Recherche en Microélectronique et Nanotechnologie (CRMN)",
  },
  {
    place: "1st Place",
    title: "Challenge on Structural Optimization of Composite Plates with AI",
    organization: "ARSII & EPT/Lasmap - University of Carthage",
  },
  {
    place: "1st Place",
    title: "IAS TAM 4.0 Technical Challenge",
    organization: "IEEE Industrial Applications Society & DATAVERSE",
  },
  {
    place: "1st Place",
    title: "AI Night Challenge",
    organization: "ARSII & Novation City",
  },
  {
    place: "2nd Place",
    title: "Mental Health Technical Challenge",
    organization: "Tunisian Students and Young Professionals Congress & IEEE EMBS",
  },
  {
    place: "2nd Place",
    title: "AI Impact Challenge",
    organization: "American Corner Sousse",
  },
  {
    place: "3rd Place",
    title: "SIGHT Day Congress Technical Challenge",
    organization: "IEEE Tunisia Section",
  },
]

export function Awards() {
  return (
    <section id="awards" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Awards & Achievements</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Recognition for excellence in AI competitions and technical challenges.
          </p>
        </div>

        <div className="grid gap-4">
          {awards.map((award, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-accent">{award.place}</span>
                      <span className="text-muted-foreground">•</span>
                      <CardTitle className="text-lg text-balance">{award.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{award.organization}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
