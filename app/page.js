import { NavBar } from './components/NavBar';
import { AboutMe } from './sections/AboutMe';
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

      {/*  <h1 className=" mt-3">Home</h1> */}
    </div>
  );
}
