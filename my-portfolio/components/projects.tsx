import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import todo from "@/assets/todo_home.jpeg"
import heartDiseaseProject from "@/assets/HeartDiseaseProject.jpeg"
import Image from "next/image";
import Tailwind_Logo from "@/assets/Tailwind_CSS_logo.png"
import NextJS_Logo from "@/assets/next.svg"
import SQLite_Logo from "@/assets/SQLiteLogo.png"
import PostgreSQL_Logo from "@/assets/PostgreSQL.png"
import FastAPI_Logo from "@/assets/FastAPI.png"
import React_Logo from "@/assets/ReactLogo.png"
import Jupyter_Logo from "@/assets/JupyterLogo.png"
import Link from "next/link";

export function BentoGridProjects() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <Link href={item.link} key={i} passHref target="_blank">
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        </Link>
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Todo List",
    description: "A full stack web app created independently to learn FastAPI and implement user authentication.",
    header: <Image
                src={todo}
                alt="Image of the todo app homepage"
                className="flex flex-1 w-full h-full min-h-[6rem]"
                />,
    className: "md:col-span-2",
    icon: <div className="flex gap-4 items-center">
        <Image src={Tailwind_Logo} alt="Tailwind CSS logo" className="w-auto h-3" />
        <Image src={NextJS_Logo} alt="Next.JS logo" className="w-auto h-3" />
        <Image src={SQLite_Logo} alt="SQLite logo" className="w-auto h-6" />
        <Image src={PostgreSQL_Logo} alt="PostgreSQL logo" className="w-auto h-6" />
        <Image src={FastAPI_Logo} alt="PostgreSQL logo" className="w-auto h-8" />
    </div>,
    link: "https://github.com/Rani-Codes/learningFastAPI"
  },
  {
    title: "Detecting Heart Disease/Attack With Supervised Learning",
    description: "Led the frontend development, overseeing two developers, and successfully trained an initial random forest model.",
    header: <Image
                src={heartDiseaseProject}
                alt="Image of the heart disease risk detector app homepage"
                className="flex flex-1 w-full h-full min-h-[6rem]"
                />,
    className: "md:col-span-1",
    icon: <div className="flex gap-4 items-center">
        <Image src={Tailwind_Logo} alt="Tailwind CSS logo" className="w-auto h-3" />
        <Image src={React_Logo} alt="React logo" className="w-auto h-6" />
        <Image src={Jupyter_Logo} alt="Jupyter Notebook logo" className="w-auto h-8" />
    </div>,
    link: "/ECS170ProjectReport.pdf"
  },
];