"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features responsive design and modern animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "AI Chat Application",
    description:
      "Real-time chat application with AI integration. Built with React, Node.js, and OpenAI API. Socket.io for real-time updates.",
    technologies: ["React", "Node.js", "OpenAI API", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with payment processing and admin dashboard. Features product management and order tracking.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border rounded-lg p-6 hover:border-accent hover:bg-secondary/30 transition-all group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-xs font-mono bg-muted text-muted-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
