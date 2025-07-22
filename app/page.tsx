import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="how-hilink-work">
        <Camp />
      </section>

      <section id="services">
        <Guide />
      </section>

      <section id="pricing">
        <Features />
      </section>

      <section id="contact-us">
        <GetApp />
      </section>
    </>
  );
}
