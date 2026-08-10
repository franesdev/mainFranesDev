import { Suspense } from "react"
import SiteHeader from "@/components/home/site-header"
import HeroHome from "@/components/home/hero-home"
import AboutPapaDev from "@/components/home/about-papa-dev"
import PillarsSection from "@/components/home/pillars-section"
import PomodoroTool from "@/components/pomodoro-tool"
import SocialSection from "@/components/home/social-section"
import CtaSection from "@/components/home/cta-section"
import ContactSection from "@/components/home/contact-section"
// TODO: Reactivar cuando haya fotos reales de productos (actualmente placeholders)
// import MerchSection from "@/components/home/merch-section"
import Footer from "@/components/footer-option3"
import Loading from "@/components/loading-option3"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <Suspense fallback={<Loading />}>
        <HeroHome />
        <AboutPapaDev />
        <PillarsSection />
        <SocialSection />
        <div id="pomodoro">
          <PomodoroTool />
        </div>
        <CtaSection />
        <ContactSection />
        {/* <MerchSection /> — oculto hasta tener fotos reales de productos */}
        <Footer />
      </Suspense>
    </main>
  )
}