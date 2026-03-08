import './index.css'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Awards } from './sections/Awards'
import { Contact } from './sections/Contact'

function App() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Contact />
    </main>
  )
}

export default App
