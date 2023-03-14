import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";

const Sections = () => {
  return (
    <div className="bg-zinc-800 text-white">
      <section id="hero">
        <Hero />
      </section>
      <hr />
      <section id="about">
        <About />
      </section>
      <hr />
      <section id="hero">
        <Services />
      </section>
      <hr />
      <section id="hero">
        <Hero />
      </section>
    </div>
  );
};

export default Sections;
