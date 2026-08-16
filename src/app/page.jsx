import Hero from '../components/Hero';
import About from '../components/About';
import OurServices from '../components/OurServices';
import Services from '../components/Services';
import OurSolutions from '../components/OurSolutions';
import Discover from '../components/Discover';
import Insights from '../components/Insights';

import Contact from '../components/Contact';
import Clients from '../components/Clients';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <OurServices />
        <Services />
        <OurSolutions />
        <Discover />

        <Insights />
        <Contact />
      </main>
    </>
  );
}
