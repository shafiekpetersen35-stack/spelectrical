import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import WhyChooseUs from "@/components/why-choose-us"
import ServiceArea from "@/components/service-area"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  )
}