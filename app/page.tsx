import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import ChatWidget from "@/components/chat-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SoftSell - Get the Best Value for Your Software Licenses",
  description:
    "SoftSell helps businesses sell unused software licenses quickly and at the best market rates. Upload, get valued, get paid.",
  keywords: "software resale, license reselling, software marketplace, sell software licenses",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  )
}
