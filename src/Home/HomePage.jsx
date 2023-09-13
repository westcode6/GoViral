import About from "../components/About";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <About />
      </div>
    </>
  );
};

export default HomePage;
