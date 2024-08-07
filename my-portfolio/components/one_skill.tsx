
const One_Skill = ({ skill }: { skill: string })   => {
    return (
        <div className="text-sm sm:text-base border p-2 w-fit bg-secondary bg-opacity-10 text-secondary rounded-lg font-medium col-span-1">
            <h3>{skill}</h3>
        </div>
    )
}

export default One_Skill