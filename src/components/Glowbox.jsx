import React from "react";

const GlowBox = ({ right, left, top, bottom, opacity }) => {
  return (
    <div
      className={`fixed w-[10rem] h-[10rem] top-[${top}] right-[${right}] left-[${left}] bottom-[${bottom}] opacity-[${opacity}] bg-window drop-shadow-lg`}
      style={{
        borderRadius: "54% 46% 60% 40% / 67% 30% 70% 33%",
        WebkitFilter: "blur(5px)",
        filter: "blur(5px)",
        backgroundColor: "skyblue",
        boxShadow: `0 0 60px 50px skyblue, 0 0 100px 125px skyblue,0 0 140px 200px skyblue`,
      }}
    ></div>
  );
};

export default GlowBox;
