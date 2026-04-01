import { About } from "@/components/About";
import { Chatbot } from "@/components/Chatbot";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MteNrSection } from "@/components/MteNrSection";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MteNrSection />
        <Services />
        <Process />
        <Clients />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
