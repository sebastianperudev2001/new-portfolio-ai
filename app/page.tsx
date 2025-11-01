import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { HeroSection } from "@/components/sections/hero"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ScrollIndicator />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
