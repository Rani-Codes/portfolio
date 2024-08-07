"use client"
import Link from "next/link"

const Navbar = () => {
  return(
    <nav className="w-full flex justify-center mt-2 sm:mt-4 fixed z-20">
        <ul className={`flex justify-evenly p-2 w-full border border-secondary text-xs sm:text-sm sm:w-4/5 lg:text-base lg:w-3/5 xl:text-lg text-primary backdrop-blur bg-opacity-70 bg-white rounded sm:rounded-xl`}>
            <li>
                <Link href="#home">Home</Link>
            </li>
            <li>
                <Link href="#experience">Experience</Link>
            </li>
            <li>
                <Link href="#projects">Projects</Link>
            </li>
            <li>
                <Link href="#about">About Me</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar