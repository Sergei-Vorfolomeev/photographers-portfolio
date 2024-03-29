import React, { ReactNode } from "react";

type PropsType = {
  name: ReactNode;
};

export function WorkDescription({ name }: PropsType) {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-[45%]">
        <div className="uppercase tracking-[4px] max-sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] font-semibold">
          Hello! My name is
        </div>
        {name}
        <div className="uppercase tracking-[4px] max-sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] font-semibold">
          Photographer & Filmmaker
        </div>
      </div>
      <div className="text-center py-36">
        <p className="max-sm:text-sm px-12 md:text-md lg:text-lg">
          I am a professional photographer and videographer, specializing in
          creating visual content for advertising and other purposes. I offer
          you high-quality photo and video shooting that will help you promote
          your product, service or brand. I use professional equipment and
          software, and constantly improve my skills. I am focused on B2B video
          and photo production, for businesses that need quality and effective
          visual content for their purposes. I know the specifics and
          requirements of the market, can analyze the needs and expectations of
          customers, offer optimal solutions and strategies for achieving the
          best results. I guarantee a high level of professionalism and
          responsibility. On complex projects, I work with an assistant who
          helps me with organizing the shoot, preparing equipment, coordinating
          models, and other tasks.
        </p>
      </div>
    </>
  );
}
