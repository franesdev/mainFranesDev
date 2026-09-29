import { Suspense } from "react"
import SiteHeader from "@/components/home/site-header"
import HeroHome from "@/components/home/hero-home"
import AboutPapaDev from "@/components/home/about-papa-dev"
import PillarsSection from "@/components/home/pillars-section"
import FocusCta from "@/components/home/focus-cta"
import SocialSection from "@/components/home/social-section"
import LatestVideos from "@/components/home/latest-videos"
import ServicesSection from "@/components/home/services-section"
import CtaSection from "@/components/home/cta-section"
import ContactSection from "@/components/home/contact-section"
import Footer from "@/components/footer"
import Loading from "@/components/loading"

// Regenera la página cada hora para traer los videos nuevos de YouTube.
export const revalidate = 3600

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <Suspense fallback={<Loading />}>
        <HeroHome />
        <AboutPapaDev />
        <PillarsSection />
        <LatestVideos />
        <SocialSection />
        <ServicesSection />
        <FocusCta />
        <CtaSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </main>
  )
}