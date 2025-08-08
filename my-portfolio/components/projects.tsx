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
import ReactNative from "@/assets/ReactNative.svg"
import Expo from "@/assets/Expo.png"
import Svelte from "@/assets/svelte.png"
import SpringBoot from "@/assets/springboot.png"
import Jupyter_Logo from "@/assets/JupyterLogo.png"
import FirebaseLogo from "@/assets/FirebaseLogo.png"
import Supabase from "@/assets/Supabase.jpg"
import Occurrence_App from '@/assets/Occurrence_App.png'
import ScavangerHunt from '@/assets/ScavangerHunt.png'
import Harbor from '@/assets/Harbor_App.png'
import Co_Draw from '@/assets/Co-Draw_App.png'
import Link from "next/link";

export function BentoGridProjects() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [

  {
    title: "Harbor",
    description: "A full stack web app created during HackDavis 2025 using React Native, Expo, and Supabase.",
    header: <Link href={"https://devpost.com/software/harbor-9kq0e6"} target="_blank" className="flex flex-1 w-full h-full min-h-[6rem]" >
                <Image
                    src={Harbor}
                    alt="Image of the harbor app submission"
                    className="flex flex-1 w-full h-full min-h-[6rem]"
                    />
            </Link>,
    className: "md:col-span-1 p-2 m-3 sm:m-0",
    icon: <div className="flex flex-wrap gap-2 items-center justify-center">
        <Image src={ReactNative} alt="React Native logo" className="w-auto h-8" />
        <Image src={Expo} alt="Figma logo" className="w-auto h-8" />
        <Image src={Supabase} alt="Supabase logo" className="w-auto h-8" />
    </div>
  },

  {
    title: "Co-Draw",
    description: "A real-time collaborative drawing app developed independently using Svelte, and Spring Boot.",
    header: <Link href={"https://github.com/Rani-Codes/Co-Draw"} target="_blank" className="flex flex-1 w-full h-full min-h-[6rem]" >
                <Image
                    src={Co_Draw}
                    alt="Image of the co-draw app"
                    className="flex flex-1 w-full h-full min-h-[6rem]"
                    />
            </Link>,
    className: "md:col-span-2 p-2 m-3 sm:m-0",
    icon: <div className="flex flex-wrap gap-2 items-center justify-center">
        <Image src={Svelte} alt="Svelte logo" className="w-auto h-8" />
        <Image src={Tailwind_Logo} alt="Tailwind logo" className="w-auto h-4" />
        <Image src={SpringBoot} alt="Spring Boot logo" className="w-auto h-8" />
    </div>
  },

  {
    title: "Todo List",
    description: "A full stack web app created independently to learn FastAPI and implement user authentication.",
    header: <Link href={"https://github.com/Rani-Codes/learningFastAPI"} target="_blank" className="flex flex-1 w-full h-full min-h-[6rem]" >
                <Image
                    src={todo}
                    alt="Image of the todo app homepage"
                    className="flex flex-1 w-full h-full min-h-[6rem]"
                    />
            </Link>,
    className: "md:col-span-2 p-2 m-3 sm:m-0",
    icon: <div className="flex flex-wrap gap-2 items-center justify-center">
        <Image src={Tailwind_Logo} alt="Tailwind CSS logo" className="w-auto h-3" />
        <Image src={NextJS_Logo} alt="Next.JS logo" className="w-auto h-3" />
        <Image src={SQLite_Logo} alt="SQLite logo" className="w-auto h-6" />
        <Image src={PostgreSQL_Logo} alt="PostgreSQL logo" className="w-auto h-6" />
        <Image src={FastAPI_Logo} alt="PostgreSQL logo" className="w-auto h-8" />
    </div>
  },
  {
    title: "Detecting Heart Disease With Supervised Learning",
    description: "Led the frontend development, overseeing two developers, and successfully trained an initial random forest model.",
    header: <Link href={"/ECS170ProjectReport.pdf"} target="_blank" className="flex flex-1 w-full h-full min-h-[6rem]">
                <Image
                    src={heartDiseaseProject}
                    alt="Image of the heart disease risk detector app homepage"
                    className="flex flex-1 w-full h-full min-h-[6rem]"
                    />
            </Link>,
    className: "md:col-span-1 p-2 m-3 sm:m-0",
    icon: <div className="flex flex-wrap gap-2 items-center justify-center">
        <Image src={Tailwind_Logo} alt="Tailwind CSS logo" className="w-auto h-3" />
        <Image src={React_Logo} alt="React logo" className="w-auto h-6" />
        <Image src={Jupyter_Logo} alt="Jupyter Notebook logo" className="w-auto h-8" />
    </div>
  },
  {
    title: "Scavenger Hunt AggieWorks",
    description: "Developed a full stack scavanger hunt project to join AggieWorks, a product development club at UC Davis",
    header: <Link href={"https://github.com/Rani-Codes/scavenger-hunt-aggieworks"} target="_blank" className="flex flex-1 w-full h-full min-h-[6rem]">
                <Image
                    src={ScavangerHunt}
                    alt="Image of the heart disease risk detector app homepage"
                    className="flex flex-1 w-full h-full min-h-[6rem]"
                    />
            </Link>,
    className: "md:col-span-1 p-2 m-3 sm:m-0",
    icon: <div className="flex flex-wrap gap-2 items-center justify-center">
        <Image src={NextJS_Logo} alt="Next.JS logo" className="w-auto h-3" />
        <Image src={SQLite_Logo} alt="SQLite logo" className="w-auto h-6" />
        <Image src={FastAPI_Logo} alt="PostgreSQL logo" className="w-auto h-8" />
    </div>
  },
  {
    title: "Occurrence Trivia",
    description: "A trivia app centered around guessing the correct month and year of images taken.",
    header: <Link href={"https://occurrence-ten.vercel.app/"} target="_blank" className="flex flex-1 w-full h-full min-h-[6rem]" >
                <Image
                    src={Occurrence_App}
                    alt="Image of the todo app homepage"
                    className="flex flex-1 w-full h-full min-h-[6rem]"
                    />
            </Link>,
    className: "md:col-span-2 p-2 m-3 sm:m-0",
    icon: <div className="flex flex-wrap gap-2 items-center justify-center">
        <Image src={Tailwind_Logo} alt="Tailwind CSS logo" className="w-auto h-3" />
        <Image src={NextJS_Logo} alt="Next.JS logo" className="w-auto h-3" />
        <Image src={FirebaseLogo} alt="SQLite logo" className="w-auto h-16" />
    </div>
  },
];
