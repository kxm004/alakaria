import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Projects } from './Projects';
import { Contact } from './Contact';

interface CompanyProps {
  onContactClick: () => void;
}

export function Company({ onContactClick }: CompanyProps) {
  return (
    <main>
      <Hero onContactClick={onContactClick} />
      <About onContactClick={onContactClick} />
      <Services onContactClick={onContactClick} />
      <Projects onContactClick={onContactClick} />
      <Contact onContactClick={onContactClick} />
    </main>
  );
}

export default Company;


