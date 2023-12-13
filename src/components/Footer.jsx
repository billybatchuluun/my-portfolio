import React from "react";

export const Footer = () => {
  return (
    <section className="flex w-screen bg-gray-50 justify-center items-center py-[96px] px-[80px] gap-2 m-auto">
      <div className="w-4 h-4">
        <img src="/IconC.svg" className=""></img>
      </div>

      <div>
        <p className="font-base decoration-[#4B5563]">
          2023 | <span className="md:underline">Designed</span> and{" "}
          <span className="md:underline">coded</span> with ❤️️ by Sagar Shah
        </p>
      </div>
    </section>
  );
};
