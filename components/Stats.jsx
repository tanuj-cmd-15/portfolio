"use client";

import CountUp from "react-countup";

const stats = [
    {
      num: 9.15,
      decimals: 2,
      text: "M.Tech CGPA"
    },
    {
      num: 3,
      text: "Major Projects"
    },
    {
      num: 98.77,
      decimals: 2,
      suffix: "%",
      text: "Model Accuracy"
    },
    {
      num: 34700,
      suffix: "+",
      text: "Audio Samples"
    },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:pt-12 xl:pb-16 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start p-6 border border-white/10 hover:border-white/30 transition-colors"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  decimals={item.decimals || 0}
                  suffix={item.suffix || ""}
                  className="text-4xl xl:text-5xl font-light text-white"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-tight sm:leading-tight md:leading-snug text-white/60 font-light text-sm`}>
                  {item.text.trim()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats
