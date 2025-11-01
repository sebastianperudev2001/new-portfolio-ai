"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Languages",
    skills: ["TypeScript", "Python", "JavaScript", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "AWS Lambda"],
  },
  {
    name: "AI/ML",
    skills: ["OpenAI API", "LLMs", "Prompt Engineering", "RAG"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel"],
  },
  {
    name: "Cloud",
    skills: ["AWS EC2", "S3", "Lambda", "RDS"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full text-sm font-mono bg-muted text-foreground border border-border hover:border-accent cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
