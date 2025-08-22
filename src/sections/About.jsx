import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { Particles } from "../components/Particles";

function About() {
  const grid2Container = useRef();
  const cardItems = [
    {
      text: "solid",
      style: {
        rotate: "-30deg",
        top: "60%",
        left: "45%",
      },
      image: "",
    },
    {
      text: "Design Patterns",
      style: {
        rotate: "90deg",
        bottom: "30%",
        left: "70%",
      },
      image: "",
    },
    {
      text: "Design Principles",
      style: {
        rotate: "-45deg",
        top: "55%",
        left: "0%",
      },
      image: "",
    },
    {
      text: "SRP",
      style: {
        rotate: "20deg",
        top: "10%",
        left: "38%",
      },
      image: "",
    },
  ];
  return (
    <section className="relative c-space section-spacing" id="about">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className=" flex justify-start items-center flex-col  md:w-[100%]">
        <h2 className="text-heading self-start">About me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 md:w-[90%] lg:w-[80%]">
          <div className="flex items-end grid-default-color grid-1">
            <img
              src="assets/coding-pov.png"
              alt="coding image"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            />
            <div className="z-10">
              <p className="headtext">Hi, I'm Abhishek Tripathi</p>
              <p className="subtext">
                Over the last 4 years, I developed my frontend and backend dev
                skills to deliver dynamic and software and web applications.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>
          <div className="grid-default-color grid-2">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end text-5xl text-gray-500">
                CODE IS CRAFT
              </p>

              {cardItems.map((item, index) => (
                <Card
                  key={index}
                  style={item.style}
                  image={item.image}
                  text={item.text}
                  containerRef={grid2Container}
                />
              ))}
              {/* <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            /> */}
            </div>
          </div>
          <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in Mars, and open to remote work worldwide
              </p>
            </div>
            <figure className="absolute left-[40%] top-[10%]">
              <Globe />
            </figure>
          </div>
          <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">
                Do you want to start a project together?
              </p>
              <CopyEmailButton />
            </div>
          </div>

          <div className="grid-default-color grid-6">
            <div className="z-10 w-[50%]">
              <p className="headText">Teck Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools
                taht allow me to build robust and scalable applications
              </p>
            </div>
            <div
              className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[60%] max-sm:start[60%] lg:start-[80%]
          md:start-[95%]
          md:scale-125"
            >
              <Frameworks />
            </div>
          </div>
          <div className="grid-black-color grid-5">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">Download my resume</p>
              <CopyEmailButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
