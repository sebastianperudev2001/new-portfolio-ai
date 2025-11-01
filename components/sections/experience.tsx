"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Leading development of scalable cloud infrastructure and AI-powered features.",
    technologies: ["TypeScript", "React", "AWS", "LLMs", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Startup",
    period: "2021 - 2023",
    description: "Built and maintained production systems serving thousands of users daily.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    role: "Junior Developer",
    company: "Web Agency",
    period: "2020 - 2021",
    description: "Developed responsive web applications and collaborated with design teams.",
    technologies: ["React", "JavaScript", "CSS", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border rounded-lg p-6 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-accent font-mono text-sm">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-muted text-muted-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
