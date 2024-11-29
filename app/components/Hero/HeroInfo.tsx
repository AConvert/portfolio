import React from "react";
// import Image from "next/image";

const HeroInfo = () => {
  return (
    <div className="flex flex-col items-center mx-3">
      <section className="flex mt-3 text-2xl font-extrabold tracking-wide pb-4">
        {/* <div>
          <Image
            src="/images/corner_top_right.svg"
            fill
            style={{ objectFit: "cover" }}
            alt="corner top right"
          />
        </div> */}
        <h1 className="">Portfolio</h1>
      </section>
      <section className="bg-violet w-full h-[460px] rounded-xl">
        <h1>
          I'am <br />
          Angelo <br /> Convertini
        </h1>
      </section>
    </div>
  );
};

export default HeroInfo;
