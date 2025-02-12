import { NavBar } from './components/NavBar';
import { AboutMe } from './sections/AboutMe';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { MyProject } from './sections/MyProject';
import { TechnicalProficiency } from './sections/TechnicalProficiency';

export default function Home() {
  return (
    <div className="mb-80">
      <NavBar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProject />
      <Contact />
      <Footer />

      {/*  <h1 className=" mt-3">Home</h1> */}
    </div>
  );
}
