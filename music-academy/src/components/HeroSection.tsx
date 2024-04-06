"use-client";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <div className="bg-gray-900 h-auto md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto rounded-md py-10 md:py-0">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="violet"
        />
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-8">
          <Link href={"/Courses"}>
            <Button
              borderRadius="1rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-500"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default HeroSection;

// import React from "react";
// import { cn } from "@/utils/cn";
// import { Spotlight } from "./ui/Spotlight";

// export default function HeroSection() {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
//         <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//           Spotlight <br /> is the new trend.
//         </h1>
//         <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
//           Spotlight effect is a great way to draw attention to a specific part
//           of the page. Here, we are drawing the attention towards the text
//           section of the page. I don&apos;t know why but I&apos;m running out of
//           copy.
//         </p>
//       </div>
//     </div>
//   );
// }
