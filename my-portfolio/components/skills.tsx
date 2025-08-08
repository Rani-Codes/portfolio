import One_Skill from "./one_skill"

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center">
        <h3 className="text-sm sm:text-base md:text-lg mb-2 text-center underline">Languages:</h3>
        <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2 justify-items-center">
            <li><One_Skill skill="Python"/></li>
            <li><One_Skill skill="TypeScript"/></li>
            <li><One_Skill skill="Golang"/></li>
            <li><One_Skill skill="Java"/></li>
            <li><One_Skill skill="JavaScript"/></li>
            <li><One_Skill skill="SQL"/></li>
        </ul>
        <h3 className="text-sm sm:text-base md:text-lg mt-4 mb-2 text-center underline">Tools:</h3>
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-2 justify-items-center">
            <li><One_Skill skill="React" /></li>
            <li><One_Skill skill="Node.js" /></li>
            <li><One_Skill skill="Express.js" /></li>
            <li><One_Skill skill="Next.js" /></li>
            <li><One_Skill skill="Svelte" /></li>
            <li><One_Skill skill="Flask" /></li>
            <li><One_Skill skill="FastAPI" /></li>
            <li><One_Skill skill="Spring Boot" /></li>
            <li><One_Skill skill="Git" /></li>
            <li><One_Skill skill="Docker" /></li>
            <li><One_Skill skill="AWS" /></li>
            <li><One_Skill skill="Postman" /></li>
            <li><One_Skill skill="Prisma" /></li>
            <li><One_Skill skill="SQLAlchemy" /></li>
            <li><One_Skill skill="MongoDB" /></li>
            <li><One_Skill skill="PostgreSQL" /></li>
            <li><One_Skill skill="SQLite" /></li>
            <li><One_Skill skill="Jira" /></li>
            <li><One_Skill skill="MacOs" /></li>
            <li><One_Skill skill="Tailwind CSS" /></li>
            <li><One_Skill skill="Firebase" /></li>
            <li><One_Skill skill="Supabase" /></li>
            <li><One_Skill skill="Jupyter" /></li>
            <li><One_Skill skill="React Native" /></li>
            <li><One_Skill skill="Expo" /></li>
        </ul>
    </div>
  )
}

export default Skills