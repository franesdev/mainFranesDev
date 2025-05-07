import { Suspense } from "react"
import Hero from "@/components/hero-option3"
import About from "@/components/about-fusion"
import Contact from "@/components/contact-fusion"
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
        <About />
        <SocialMedia />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}
