import React from "react";

export const About = () => {
  return (
    <section className="flex flex-col box-border m-auto  items-center gap-12 w-screen bg-[#F9FAFB] py-[96px] px-[80px]">
      <div className="flex flex-col w-screen items-center py-0 px-9 gap-12">
        <div className="flex flex-col justify-center items-center">
          <div className="flex py-1 px-5 justify-center items-center rounded-xl bg-[#E5E7EB] text-[#4b5563] w-[105px] h-[28px]">
            <p className="text-sm">About me</p>
          </div>
        </div>
        <div className="flex flex-wrap box-borderitems-start gap-12">
          <div className="w-[584px] h-[694px]">
            <img
              src="/Pic3.png"
              className="w-[400px] h-[480px] shadow-3xl"
            ></img>
          </div>
          <div>
            <div className="w-[584px]">
              <h2 className="text-[#111827] text-3xl font-semibold leading-9 tracking-tight">
                Curious about me? Here you have it:
              </h2>
              <p className="text-normal mt-6">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="text-normal mt-4">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="text-normal mt-4">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="text-normal mt-4">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex mt-4">
                <div className="w-1/2">
                  <ul>
                    <li className="list-disc">B.E. in Computer Engineering</li>
                    <li className="list-disc">Full time freelancer</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <ul>
                    <li className="list-disc">Avid learner</li>
                    <li className="list-disc">Aspiring indie hacker</li>
                  </ul>
                </div>
              </div>
              <p className="text-normal mt-4">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
