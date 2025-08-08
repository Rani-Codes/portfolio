import Experience from "@/components/Experience";
import { BentoGridProjects } from "@/components/projects";
import Navbar from "@/components/Navbar";
import RetroGrid from "@/components/RetroGrid";
import Link from "next/link";
import Skills from "@/components/skills";
import { DockContacts } from "@/components/dock_contacts";
import Contact_Me from "@/components/contact_me";

export default function page() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar/>
      <div id="home" className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <span className="pointer-events-none w-full z-10 whitespace-pre-wrap bg-primary bg-clip-text text-center text-5xl sm:text-8xl font-bold leading-none tracking-tighter text-transparent">
          Rani Saro
        </span>
        <div className="relative w-full flex justify-center z-10 gap-10 my-4">
          <a href="/Rani_Saro_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="text-base sm:text-xl text-plain bg-primary p-3 rounded-lg hover:bg-opacity-90">My resume</button>
          </a>
          <Contact_Me/>
        </div>

        <RetroGrid className=""/>
      </div>

      <div id="experience" className="justify-center mx-2 sm:mx-10 flex py-10">
        <div className="w-full sm:w-10/12 lg:w-3/5 sm:border-l-2 sm:border-my_blue sm:p-4">
          <Link href={'#experience'}>
            <h1 className="text-4xl sm:text-5xl text-primary font-bold mt-4 mb-8">Experience</h1>
          </Link>
          <div className="flex flex-col gap-8">
          <Link href={"https://asucd.ucdavis.edu/"} target="_blank">
              <Experience company={"ASUCD IRL"} position={"Lead Software Engineer"} date="Oct 2024 - Current" logo={"/irl_logo.jpeg"}/>
            </Link>

          <Link href={"https://aggieworks.org/"} target="_blank">
              <Experience company={"AggieWorks"} position={"Software Engineer Intern"} date="Oct 2024 - Current" logo={"/aggieworks_logo.jpg"}/>
            </Link>

          <Link href={"https://www.codelabdavis.com/"} target="_blank">
              <Experience company={"CodeLab"} position={"Software Engineer Intern"} date="Oct 2023 - Jun 2024" logo={"/codelabdavis_logo.jpeg"}/>
            </Link>

            <Link href={"https://www.grossmont.edu/"} target="_blank">
              <Experience company={"CS Club, Grossmont College"} position={"President"} date="Sep 2022 - Jun 2023" logo={"/GrossmontCollege_Logo.png"}/>
            </Link>
          </div>
        </div>
      </div>

      <div id="projects" className="flex justify-center text-center bg-plain pt-10 pb-20">
        <div>
          <Link href={'#projects'}>
              <h1 className="text-4xl sm:text-5xl text-primary font-bold my-6">Projects</h1>
            </Link>
            <BentoGridProjects />
        </div>
      </div>

      <div id="about" className="flex flex-col w-full items-center justify-center my-12">
      <Link href={'#about'}>
        <h2 className="text-4xl sm:text-5xl text-primary font-bold mt-6">About Me</h2>
        </Link>
        <span className="w-1/12 my-4 border-b-4 rounded border-my_blue" />
        <h4 className="text-sm sm:text-base md:text-lg text-secondary font-medium w-3/5 sm:w-4/5 md:w-3/5 text-center">Below you will find some more information about me as well as a highlight of some of my technical skills.</h4>
      </div>

      <div className="flex flex-col-reverse gap-14 lg:gap-0 lg:grid lg:grid-cols-2 lg:mx-12 xl:mx-28 2xl:mx-32 mb-28">
        <div>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-left text-primary font-semibold">A Bit About Me</h1>
          <p className="text-wrap w-full p-2 text-sm sm:text-lg lg:p-0 lg:w-4/5">
            Driven by a deep sense of curiosity about the endless applications of technology, 
            I'm a full-stack developer with a special focus on AI/ML. I'm currently a fourth-year 
            computer science student at the <strong>University of California, Davis</strong>, 
            where I've taken courses such as Data Structures and Algorithms, Machine Architecture, 
            Introduction to Artificial Intelligence, and Probability & Statistical Modeling.
            <br/><br/>
            Outside of tech, I enjoy beach volleyball, playing guitar, video games with friends, 
            and camping/hiking. These interests keep me balanced and grounded while I explore 
            the fast-paced world of technology.
          </p>
          <div id="contacts" className="flex flex-col justify-center md:flex-row md:my-2 md:gap-6 lg:justify-start items-center my-0 gap-0 w-full">
            <h3 className="pt-4 text-xl sm:text-2xl md:py-10 md:text-3xl font-semibold">Contact Me!</h3>
            <DockContacts/>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">Skills</h1>
          <Skills/>
        </div>


      </div>

    </div>

  )
}