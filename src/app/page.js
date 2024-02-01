import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Service from "@/components/service/Service";
import Stats from "@/components/stats/Stats";
import ChooseUs from "@/components/chooseUs/ChooseUs";

export default function Home() {
  return (
    <main className="main">
      <Header/>
      <Hero />
      <About />
      <Service />
      <ChooseUs />
      <Stats />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
