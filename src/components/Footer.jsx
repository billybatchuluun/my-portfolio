import React from "react";

export const Footer = () => {
  return (
    <section className="flex w-3/4 bg-gray-50 justify-center items-center py-[96px] px-[80px] gap-2 m-auto dark:bg-black">
      <div className="w-4 h-4">
        <img src="/IconC.svg" className=""></img>
      </div>

      <div>
        <p className="font-base decoration-[#4B5563] dark:text-[#F9FAFB]">
          2023 |{" "}
          <span className="md:underline dark:text-[#F9FAFB]">Designed</span> and{" "}
          <span className="md:underline dark:text-[#F9FAFB]">coded</span> with
          ❤️️ by Sagar Shah
        </p>
      </div>
    </section>
  );
};
