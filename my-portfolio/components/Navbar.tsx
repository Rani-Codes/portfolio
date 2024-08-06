import Link from "next/link"

const Navbar = () => {
  return(
    <div className="w-full flex justify-center mt-4 fixed z-20">
        <ul className="flex justify-evenly w-2/5 p-2 text-lg text-primary backdrop-blur bg-opacity-70 bg-white border border-secondary rounded-xl">
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
    </div>
  )
}
export default Navbar