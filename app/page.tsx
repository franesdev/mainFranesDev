import { Suspense } from "react"
import Hero from "@/components/hero-option3"
import AboutBrand from "@/components/about-brand"
import WhatImBuilding from "@/components/what-im-building"
import ToolsSection from "@/components/tools-section"
import PomodoroTool from "@/components/pomodoro-tool"
import ContactCourses from "@/components/contact-courses"
import SocialMedia from "@/components/social-media-option3"
import LanguageToggle from "@/components/language-toggle-option3"
import Footer from "@/components/footer-option3"
import Loading from "@/components/loading-option3"


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      <Suspense fallback={<Loading />}>
        <Hero />
        <AboutBrand />
        <WhatImBuilding />
        <ToolsSection />
        <div id="pomodoro">
          <PomodoroTool />
        </div>
        <ContactCourses />
        <SocialMedia />
        <Footer />
      </Suspense>
    </main>
  )
}
