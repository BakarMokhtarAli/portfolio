import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="w-full dark:bg-slate-900 dark:text-yellow-400 py-2 bg-c-dark text-c-light">
      <div className="w-[90%] flex justify-between items-center m-auto">
      <h1 className="font-semibold text-3xl">Bakar</h1>
      <ul className='flex justify-around items-center text-2xl'>
        <Link to={'https://github.com/BakarMokhtarAli'}>
        <i className="bi bi-github mx-2 not-italic font-normal"></i>
        </Link>
        <Link to={'https://www.facebook.com/profile.php?id=100052409813832'}>
        <i className="bi bi-facebook mx-2 not-italic font-normal"></i>
        </Link>
        <Link to={"https://twitter.com/Abukar_M_ali"}>
        <i className="bi bi-twitter mx-2 not-italic font-normal"></i>
        </Link>
      </ul>
      </div>
    </footer>
  )
}
