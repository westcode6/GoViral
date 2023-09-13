import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionWrapper from "./hoc/SectionWrapper";
import HomePage from "./Home/HomePage";
import Navbar  from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <div className="mt-0 glass-effect ">
          <Router className="relative">
          <Navbar />

            <div className="App">
              <div className="content ">

                <Routes>

                  <Route path="/" element={<HomePage />} />
                  {/* <Route path="/discover" element={<Discover />} />
                  <Route path="/album" element={<Albulms />} /> */}

                </Routes>

              </div>
            </div>


          </Router>

        </div>
      </div>
    </>
  );
}

export default SectionWrapper(App, "");
