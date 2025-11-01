"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Sebastián Chávary</h1>
              <p className="text-xl text-accent font-mono">Software Engineer</p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Building scalable systems. Solving complex problems.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              I specialize in AI, AWS, and web development. Currently working on systems that scale and ship production
              code that doesn't break.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                View projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:chavarry@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Terminal Block */}
          <div className="hidden md:block">
            <div className="terminal-block">
              <div className="text-accent mb-4">const developer = {"{"}</div>
              <div className="space-y-2 ml-4 text-muted-foreground">
                <div>
                  <span className="text-accent">name:</span>
                  <span className="text-foreground ml-2">"Sebastián Chávary"</span>,
                </div>
                <div>
                  <span className="text-accent">title:</span>
                  <span className="text-foreground ml-2">"Software Engineer"</span>,
                </div>
                <div>
                  <span className="text-accent">skills:</span>
                  <span className="text-foreground ml-2">[</span>
                </div>
                <div className="ml-4">
                  <span className="text-foreground">"TypeScript", "React", "Next.js",</span>
                </div>
                <div className="ml-4">
                  <span className="text-foreground">"Tailwind CSS", "AWS", "LLMs"</span>
                </div>
                <div>
                  <span className="text-foreground ml-2">],</span>
                </div>
                <div>
                  <span className="text-accent">location:</span>
                  <span className="text-foreground ml-2">"Lima, Peru"</span>,
                </div>
                <div>
                  <span className="text-accent">email:</span>
                  <span className="text-foreground ml-2">"chavarry@gmail.com"</span>
                </div>
              </div>
              <div className="text-accent mt-2">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
