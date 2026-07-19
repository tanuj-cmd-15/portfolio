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
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start p-4 rounded-xl bg-charcoal/30 border border-steel/10"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  decimals={item.decimals || 0}
                  suffix={item.suffix || ""}
                  className="text-4xl xl:text-6xl font-extrabold text-accent"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-tight sm:leading-tight md:leading-snug text-slate`}>
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
