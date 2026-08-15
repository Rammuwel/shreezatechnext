import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Discover from '../components/Discover';
import Insights from '../components/Insights';
import Ziva from '../components/Ziva';
import Contact from '../components/Contact';
import Clients from '../components/Clients';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Discover />
        <Ziva />
        <Insights />
        <Contact />
      </main>
    </>
  );
}
