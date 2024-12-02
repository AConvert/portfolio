import React from "react";
import Image from "next/image";

const HeroInfo = () => {
  return (
    <div className="flex flex-col items-center mx-5">
      <section className="flex mt-3 text-3xl font-semibold tracking-wider pb-4">
        <h1 className="">Portfolio</h1>
      </section>
      <section className="relative bg-violet w-full h-[360px] rounded-2xl p-4 flex flex-col justify-end">
        <div className="h-9 w-48 bg-white absolute z-10 top-0 -left-6 -skew-x-[50deg]"></div>
        {/* circle 1 */}
        <div className="w-56 h-56 bg-violet border-4 border-white rounded-full absolute top-10 right-4"></div>
        {/* circle 2 */}
        <div className="w-52 h-52 bg-rose border-4 border-violet rounded-full absolute top-12 right-6"></div>
        {/* profile photo */}
        <div className="absolute w-60 h-64 z-10 top-4 right-2  rotate-[6deg]">
          <Image
            src="/images/profile.png"
            fill
            style={{ objectFit: "contain" }}
            alt="profile photo"
            className="rounded-b-full"
          />
        </div>
        <p className="text-sm md:text-base font-semibold absolute z-20 top-2 left-3">
          Software Engineer
        </p>
        <h1 className="text-3xl text-white animate-fade transition-all duration-700">
          <span className="font-thin opacity-90">
            I'm, <br />
          </span>
          <span className="font-bold">
            Angelo <br /> Convertini
          </span>
        </h1>
      </section>
    </div>
  );
};

export default HeroInfo;
