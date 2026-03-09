import "./index.css";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Awards } from "./sections/Awards";
import { Contact } from "./sections/Contact";
import { useActiveSection } from "./hooks/useActiveSection";
import { Hero } from "./sections/Hero";

const SECTION_IDS = [
  "hero",
  "about",
  "projects",
  "experience",
  "awards",
  "contact",
];

function App() {
  useActiveSection(SECTION_IDS);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
