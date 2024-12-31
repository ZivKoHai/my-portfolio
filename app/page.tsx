import Hero from "@/components/hero";
import AboutMe from "@/components/about.me";
import Works from "@/components/works";
import TechnicalSkills from "@/components/technical-skills";
import ContactUs from "@/components/contact-us";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechnicalSkills />
      <Works />
      <ContactUs />
    </>
  );
}
