import React from "react";

const Hero = () => {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full my-16 py-10">
          <h1 className="title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Rida Rafi Syed
          </h1>
          <div className="justify-center">
            <p>
              Hello! I am Software Developer from Pakistan, Lahore. I have rich
              experience in web site design and development, also I am good at
              graphic designing and illustration.
            </p>
            <button className="inline-flex items-center mx-auto mt-16 text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-yellow-600 hover:border border-yellow-600 rounded text-lg ">
              Contact Me
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
