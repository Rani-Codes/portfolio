import Experience from "@/components/Experience";
import { BentoGridProjects } from "@/components/projects";
import Navbar from "@/components/Navbar";
import RetroGrid from "@/components/RetroGrid";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar/>
      <div id="home" className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <span className="pointer-events-none w-full z-10 whitespace-pre-wrap bg-primary bg-clip-text text-center text-5xl sm:text-8xl font-bold leading-none tracking-tighter text-transparent">
          Rani Saro
        </span>
        <div className="relative w-full flex justify-center z-10 gap-10">
          <button className="text-xl text-plain my-4 bg-primary p-2 rounded-lg">My resume</button>
          <button className="text-xl text-primary my-4 bg-primary p-2 rounded-lg bg-opacity-20">Contact me</button>
        </div>

        <RetroGrid className=""/>
      </div>

      <div id="experience" className="justify-center mx-10 flex my-10">
        <div className="w-3/5 border-l-2 border-my_blue p-4">
          <Link href={'#experience'}>
            <h1 className="text-6xl text-primary font-bold mt-4 mb-8">Experience</h1>
          </Link>
          <div className="flex flex-col gap-8">
            <Link href={"https://www.codelabdavis.com/"} target="_blank">
              <Experience company={"CodeLab"} position={"Full Stack Software Developer"} date="Oct 2023 - Jun 2024" logo={"/codelabdavis_logo.jpeg"}/>
            </Link>
            <Link href={"https://www.grossmont.edu/"} target="_blank">
              <Experience company={"Computer Science Club at Grossmont College"} position={"President"} date="Sep 2022 - Jun 2023" logo={"/GrossmontCollege_Logo.png"}/>
            </Link>
          </div>
        </div>
      </div>

      <div id="projects" className="flex justify-center text-center bg-plain py-10">
        <div>
          <Link href={'#projects'}>
              <h1 className="text-6xl text-primary font-bold my-6">Projects</h1>
            </Link>
            <BentoGridProjects />
        </div>
      </div>

      <div id="skills">
        <Link href={'#skills'}>
            <h1 className="text-6xl text-primary font-bold my-4">Skills</h1>
          </Link>
        <p>List of skills</p>
      </div>

      <div id="about">
        <Link href={'#about'}>
            <h1 className="text-6xl text-primary font-bold my-4">About me</h1>
          </Link>
        <p>About me section content</p>
      </div>

    </div>

  )
}