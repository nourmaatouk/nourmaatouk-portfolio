import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image with decorative elements */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-80 h-96">
              {/* Pink/Purple gradient background - tilted */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl transform rotate-6 shadow-xl"></div>
              
              {/* Image container - tilted slightly */}
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
                <Image
                  src="/profile.jpg"
                  alt="Nour Maatouk"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blue circle accent - top right */}
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl">
                💻
              </div>

              {/* Purple circle accent - bottom left */}
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-purple-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl">
                🎓
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-900">
            <p>
              <span className="font-semibold">Software Engineering student</span> at the Polytechnic School of Sousse, Tunisia, passionate about{" "}
              <span className="font-semibold">AI and data science</span>. I've built hands-on experience in{" "}
              <span className="font-semibold">machine learning, computer vision, and full-stack development</span> through research and real-world projects — from{" "}
              <span className="font-semibold">GraphRAG-based multi-agent systems</span> to{" "}
              <span className="font-semibold">human motion analysis using AI</span>.
            </p>

            <p>
              <span className="font-semibold">Winner of several AI and tech competitions</span>, I thrive on solving complex problems and driving innovation. I'm now seeking a{" "}
              <span className="font-semibold">final-year internship (PFE)</span> to contribute to advanced AI-driven projects.{" "}
              <span className="font-semibold">Trilingual in English, French (DELF B2), and Arabic</span>, I collaborate effectively in international environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
