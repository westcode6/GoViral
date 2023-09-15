import About from "../components/About";
import Feedbacks from "../components/Feedbacks";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";


const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <About />
        <Process />
        <WhyUs />
        <Team />
        {/* <Feedbacks /> */}
      </div>
    </>
  );
};

export default HomePage;
