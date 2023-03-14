"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow container ">
        <div className="absolute top-0 right-0 w-5/12 h-screen flex justify-center  items-center z-10">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <SidePanel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
