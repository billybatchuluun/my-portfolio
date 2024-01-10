import React from "react";
const Tag = ["React", "Next.js", "Typescript"];

export const Tags = (props) => {
  return (
    <container className="m-2 ">
      <div className="py-0 px-5 justify-center items-center  rounded-xl bg-[#E5E7EB] decoration-[#4b5563] dark:bg-[#374151] dark:text-[#D1D5DB] ">
        <p>{props.text}</p>
      </div>
    </container>
  );
};
