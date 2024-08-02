import Image from "next/image"

interface ExperienceProps {
    company: string
    position: string
    logo: string
    date: string
}


const Experience: React.FC<ExperienceProps> = ({company, position, logo, date}) => {
  return (
    <div className="text-primary flex border border-secondary p-2 hover:bg-primary hover:bg-opacity-15">
        <div className="w-full">
            <div className="flex w-full text-2xl gap-1">
                <h3 className="font-semibold">{company}</h3>
                <h3> / </h3>
                <h3>{position}</h3>
            </div>
            <h3 className="text-xl text-secondary text-opacity-70">{date}</h3>
        </div>
        <Image
        src={logo}
        width={50}
        height={50}
        alt="Image of the company logo"
        />
    </div>

  )
}

export default Experience