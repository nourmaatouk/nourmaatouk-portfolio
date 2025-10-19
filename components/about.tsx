export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">About Me</h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="text-pretty">
            I'm a software engineering student at the{" "}
            <span className="text-foreground font-medium">Polytechnic School of Sousse, Tunisia</span>, with a deep
            passion for artificial intelligence and data science. My journey in tech has been marked by hands-on
            experience in machine learning, computer vision, and full-stack development.
          </p>

          <p className="text-pretty">
            Throughout my academic career, I've had the privilege of working on cutting-edge research projects, from
            developing <span className="text-accent font-medium">GraphRAG-based multi-agent systems</span> to analyzing{" "}
            <span className="text-accent font-medium">human motion using AI and computer vision</span>. My work has
            consistently focused on applying AI to solve real-world problems.
          </p>

          <p className="text-pretty">
            I'm particularly proud of my competitive achievements, having secured{" "}
            <span className="text-accent font-medium">first place in multiple AI challenges</span> and technical
            competitions. These experiences have sharpened my problem-solving abilities and reinforced my commitment to
            innovation in technology.
          </p>

          <p className="text-pretty">
            Currently, I'm seeking a{" "}
            <span className="text-foreground font-medium">final-year internship (PFE) opportunity</span> to conduct
            research and contribute to advanced AI-driven projects. I'm fluent in English, French (DELF B2), and Arabic,
            enabling me to collaborate effectively in diverse international environments.
          </p>
        </div>
      </div>
    </section>
  )
}
