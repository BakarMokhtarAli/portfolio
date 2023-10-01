
import { Link } from 'react-router-dom';
import projects from "../../../../Data/Projects"
export const ProjectLists = () => {

  return (
    <div className="w-full m-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
     {
      projects.map(project =>(
        <div key={project.id} className="w-3/4 md:w-80 m-auto bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-500 shadow-sm rounded h-fit">
        <div className="flex flex-col justify-center items-center">
          <img className="w-full rounded-t h-40 aspect-square" src={project.image} alt={project.title} />
        </div>
        <div className="flex flex-col justify-center items-start p-2">
          <h1 className="text-slate-900 font-semibold dark:text-yellow-400 text-xl mb-1">{project.title}</h1>
          <p className="dark:text-white text-slate-900 text-xs">{project.description}</p>
          <span className='flex flex-row justify-center items-center gap-2 mt-1'>
           {
            project.language.map((lang) =>(
              <span className='bg-slate-900 dark:bg-white text-white text-xs px-1 rounded-sm dark:text-slate-900'>{lang}</span>
            ))
           }
            {/* <span className="bg-[#FF4004] px-1 rounded-sm text-white text-[8px]">Html</span>
            <span className="bg-[hsl(227,100%,62%)] px-1 rounded-sm text-[8px] text-white">Css</span>
            <span className='bg-[#FAFF02] text-[8px] px-1 rounded-sm text-slate-900'>Js</span> */}
          </span>
          <span className='w-full flex flex-row justify-between items-center mt-1'>
            <Link to={project.github_link} target='_blank' className="bg-yellow-400 text-xs py-1 px-2 rounded-sm">Github</Link>
            <Link to={project.live_link} target='_blank' className="bg-yellow-400 text-xs py-1 px-2 rounded-sm">Live</Link>
          </span>
        </div>
    </div>
      ))
     }
     
    </div>
  )
}
