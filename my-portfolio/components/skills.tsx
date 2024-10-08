import One_Skill from "./one_skill"

const Skills = () => {
  return (
    <div className="w-full flex flex-col justify-center items-stretch">
        <h3 className="text-sm sm:text-base md:text-lg mb-2 text-center underline">Languages:</h3>
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            <li><One_Skill skill="Python"/></li>
            <li><One_Skill skill="JavaScript"/></li>
            <li><One_Skill skill="TypeScript"/></li>
            <li><One_Skill skill="Kotlin"/></li>
            <li><One_Skill skill="Java"/></li>
        </ul>
        <h3 className="text-sm sm:text-base md:text-lg mt-4 mb-2 text-center underline">Tools:</h3>
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            <li><One_Skill skill="VS Code"/></li>
            <li><One_Skill skill="Github"/></li>
            <li><One_Skill skill="Git"/></li>
            <li><One_Skill skill="MacOs"/></li>
            <li><One_Skill skill="Node.js"/></li>
            <li><One_Skill skill="Express.js"/></li>
            <li><One_Skill skill="React"/></li>
            <li><One_Skill skill="Jira"/></li>
            <li><One_Skill skill="SQLite"/></li>
            <li><One_Skill skill="FastAPI"/></li>
            <li><One_Skill skill="Postman"/></li>
            <li><One_Skill skill="Next.js"/></li>
            <li><One_Skill skill="Firebase"/></li>
            <li><One_Skill skill="PostgreSQL"/></li>
            <li><One_Skill skill="Tailwind"/></li>
        </ul>

    </div>
  )
}

export default Skills