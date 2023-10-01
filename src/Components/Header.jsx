import { useEffect, useState } from "react";
import { Link, NavLink, json } from "react-router-dom";

export const Header = () => {

  const [ menu,setMenu ]=useState(false)
  const [ dark,setDark ]=useState(JSON.parse(localStorage.getItem("dark")))

  useEffect(()=>{
    if(dark){
      localStorage.setItem("dark",dark)
      document.documentElement.classList.add('dark')
    }else{
      localStorage.removeItem("dark")
      document.documentElement.classList.remove('dark')
    }
  },[dark])

  const isInActive = `not-italic text-xl mx-2 dark:text-white bg-gray-50 p-1 rounded dark:bg-slate-800 max-sm:w-full max-sm:text-c-light max-sm:text-center max-sm:mb-2 dark:p-1`;
  const isNotActive = 'mx-2 not-italic text-xl dark:text-white max-sm:text-c-light max-sm:w-full max-sm:text-center max-sm:mb-2'

  return (
    <header className="w-full py-2 dark:bg-slate-900">
      <nav className="w-[90%] m-auto flex justify-between relative items-center text-c-dark">
        <h1 className="font-semibold text-3xl text-slate-900 dark:text-yellow-400">Bakar</h1>
        <ul className={`${ menu ? 'flex flex-row items-center max-sm:flex-col max-sm:absolute max-sm:top-9 dark:bg-slate-900 max-sm:-right-8 max-sm:-left-8 max-sm:shadow-md z-50' : 'max-sm:hidden z-50' }`}>
          <NavLink to="/" className={({isActive})=> isActive ? isInActive : isNotActive}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? isInActive : isNotActive}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? isInActive : isNotActive}>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? isInActive : isNotActive}>
            contact
          </NavLink>
          
        </ul>
        <div className="flex justify-center items-center gap-2">
          <button>
            {
              dark ? (
                <i onClick={()=>setDark(!dark)} className="bi bi-brightness-high text-2xl dark:text-white" />
              ): (
                <i onClick={()=>setDark(!dark)} className="bi bi-moon text-2xl dark:text-white"></i>
              )
            }
          
          </button>
          {
            menu ? (
              <i onClick={()=>setMenu(!menu)} className="bi bi-x hidden cursor-pointer z-50 max-sm:block not-italic text-3xl dark:text-white font-normal"></i>
            ) : (
              <i onClick={()=>setMenu(!menu)} className="bi bi-list hidden cursor-pointer z-50 max-sm:block not-italic text-3xl dark:text-white font-normal"></i>
            )
          }
          
        </div>
      </nav>
    </header>
  );
};
