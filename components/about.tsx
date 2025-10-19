import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image with decorative elements */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-72">
              {/* Decorative blue background */}
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-6"></div>
              
              {/* Image container */}
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt="Nour Maatouk"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blue circle accent - top right */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 rounded-full shadow-lg"></div>

              {/* Purple circle accent - bottom left */}
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-500 rounded-full shadow-lg"></div>

              {/* Pink accent line - right side */}
              <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2">
                <div className="w-1 h-16 bg-pink-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>
              <span className="font-semibold">Software Engineering student</span> at the{" "}
              <span className="font-semibold">Polytechnic School of Sousse, Tunisia</span>, passionate about{" "}
              <span className="font-semibold">AI and data science</span>. I've built hands-on experience in{" "}
              <span className="font-semibold">machine learning, computer vision, and full-stack development</span> through
              research and real-world projects — from{" "}
              <span className="font-semibold">GraphRAG-based multi-agent systems to human motion analysis</span> using
              AI.
            </p>

            <p>
              <span className="font-semibold">Winner of several AI and tech competitions</span>. I thrive on solving
              complex problems and driving innovation. I'm now seeking a <span className="font-semibold">final-year
              internship (PFE)</span> to contribute to advanced AI-driven projects.
              <span className="font-semibold"> Trilingual in English, French (DELF B2), and Arabic.</span> I collaborate
              effectively in international environments.
            </p>
          </div>
        </div>

        <hr className="my-12 border-border" />
      </div>
    </section>
  )
}
