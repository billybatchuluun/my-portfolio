import React from "react";

export const Experience = () => {
  return (
    <section className="flex flex-col flex-wrap w-screen bg-gray-50 justify-center  py-[96px] px-[80px]  m-auto ">
      <div className="flex  flex-wrap py-0 px-8  flex-col gap-12  items-center self-stretch rounded-xl">
        <container className="flex flex-col flex-wrap gap-4 py-o px-8 ">
          <div>
            <p className="text-sm text-center text-[#4b5563] rounded-xl justify-center items-center m-auto w-[115px] h-7  bg-[#E5E7EB] py-1 px-5">
              Experience
            </p>
          </div>
          <div>
            <p className="text-center items-center">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
        </container>
        <container className="flex flex-col gap-12">
          <div className="flex p-8 rounded-xl  bg-white justify-between gap-12">
            <div className="flex w-[102px] h-7">
              <img src="/logo-upwork.png"></img>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-lg font-semibold">Sr. Frontend Developer</p>
              </div>
              <div className="">
                <ul className="text-base list-disc">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p>Nov 2021 - Present</p>
            </div>
          </div>
          <div className="flex p-8 rounded-xl  bg-white gap-12 justify-between">
            <div>
              <img src="/logo-upwork.png" className="w-[102px] h-7"></img>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-lg font-semibold">Team Lead</p>
              </div>
              <div className="">
                <ul className="text-base list-disc">
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-end font-normal text-normal">
              <p>Jul 2017 - Oct 2021</p>
            </div>
          </div>

          <div className="flex p-8  bg-white  gap-12 justify-between rounded-xl">
            <div>
              <img src="/logo-upwork.png" className="w-[102px] h-7"></img>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-lg font-semibold">Full Stack Developer</p>
              </div>
              <div className="">
                <ul className="text-base list-disc w-[400px]">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-end font-normal text-normal">
              <p>Dec 2015 - May 2017</p>
            </div>
          </div>
        </container>
      </div>
    </section>
  );
};
