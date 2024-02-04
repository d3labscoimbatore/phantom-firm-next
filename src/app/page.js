import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Service from "@/components/service/Service";
import Stats from "@/components/stats/Stats";
import ChooseUs from "@/components/chooseUs/ChooseUs";

export default async function Home() {
  // API data for the HTML element
  const response = await fetch(
    "https://run.mocky.io/v3/1ec8374b-0b1c-4809-b1da-266f0504934b"
  );
  const HTMLData = await response.json();

  const {
    HeroSection,
    AboutSection,
    ServiceSection,
    BenefitsSection,
    StatisticSection,
    FAQSection,
    ContactSection,
    FooterSection,
  } = HTMLData;

  return (
    <main>
      <Header />
      <Hero heroSection={HeroSection} />
      <About aboutSection={AboutSection} />
      <Service serviceSection={ServiceSection} />
      <ChooseUs benefitsSection={BenefitsSection} />
      <Stats statisticSection={StatisticSection} />
      <Faq fAQSection={FAQSection} />
      <Contact contactSection={ContactSection} />
      <Footer footerSection={FooterSection} />
    </main>
  );
}
