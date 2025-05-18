import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import AchievementsSection from '@/components/AchievementsSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary text-text-primary">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  )
}
