import { Navbar, Hero, About, Skills, Projects, Experience, Contact, StarsCanvas } from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-[#0b0721]'>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
