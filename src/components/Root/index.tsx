import React from "react";

import Header from "../Header";
import Home from "../Home";
import Services from "../Services";
import Work from "../Work";
import Footer from "../Footer";
import Skills from "../Skills";

const Root: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default Root;
