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
    "https://run.mocky.io/v3/74534d3a-0df3-4089-9838-892c0294ff45"
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
      {/* <Hero heroSection={heroSection} />
      <About aboutSection={aboutSection} />
      <Service serviceSection={serviceSection} />
      <ChooseUs benefitsSection={benefitsSection} />
      <Stats statisticSection={statisticSection} />
      <Faq faqSection={faqSection} />
      <Contact contactSection={contactSection} />
      <Footer footerSection={footerSection} /> */}
    </main>
  );
}
