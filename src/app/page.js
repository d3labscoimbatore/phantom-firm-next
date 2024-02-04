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
    "https://run.mocky.io/v3/5a20acd4-9be6-4377-b643-e722a7b7c7f1"
  );
  const HTMLData = await response.json();

  const {
    headerSection,
    heroSection,
    aboutSection,
    serviceSection,
    benefitsSection,
    statisticSection,
    faqSection,
    contactSection,
    footerSection,
  } = HTMLData;

  return (
    <main>
      <Header headerSection={headerSection} />
      <Hero heroSection={heroSection} />
      <About aboutSection={aboutSection} />
      <Service serviceSection={serviceSection} />
      <ChooseUs benefitsSection={benefitsSection} />
      <Stats statisticSection={statisticSection} />
      <Faq faqSection={faqSection} />
      <Contact contactSection={contactSection} />
      <Footer footerSection={footerSection} />
    </main>
  );
}
