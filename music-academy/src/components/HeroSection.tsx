import React from "react";

function HeroSection() {
  return (
    // <div style={{ border: "1px solid red" }}>
    <div className="bg-gray-900 h-auto md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto rounded-md py-10 md:py-0">
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Master the art of Music
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Dive into our comprehensive music courses and transform your musical
        journey today. Whether you're a beginner or looking to refine your
        skills, join us to unlock your true potential.
      </p>
      <div>Explore Courses</div>
    </div>
  );
}

export default HeroSection;
// mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
