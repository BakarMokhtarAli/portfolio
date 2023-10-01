import "./hero.css"
import Bakar from "../assets/hero.png"
import { Link } from "react-router-dom"
import { BsTwitter, BsFacebook, BsGithub} from "react-icons/bs"
export const Hero = () => {
  return (
      <div
    className=" w-[90%] m-auto sm:pt-6 flex flex-col-reverse sm:flex-row items-center justify-between"  >
    {/* left */}
    <div className="space-y-4 text-center sm:text-left dark:text-white">
      <h1 className="font-bold text-slate-900 dark:text-white text-7xl "><span className="text-yellow-400">Bakar</span> Mokhtar</h1>
      <p className="text-slate-900 dark:text-white text-lg ">
      I'm a creative and experienced web designer with a passion <br /> for creating beautiful and functional websites. <br />
      </p>
      {/* social links */}
      <div className="flex space-x-4 text-center justify-center sm:justify-start">
        <h1 className="cursor-pointer text-2xl transition-all hover:text-yellow-400">
          <Link to="https://github.com/BakarMokhtarAli">
            <BsGithub />
          </Link>
        </h1>
        <h1 className="cursor-pointer text-2xl transition-all hover:text-yellow-400">
          <Link to="https://www.facebook.com/profile.php?id=100052409813832">
            <BsFacebook />
          </Link>
        </h1>
        <h1 className="cursor-pointer text-2xl transition-all hover:text-yellow-400">
          <Link to="https://twitter.com/Abukar_M_ali">
            <BsTwitter />
          </Link>
        </h1>
      </div>
      {/* download button */}
      <button className="bg-yellow-400 text-white p-2 hover:-translate-y-1 duration-100 rounded-lg ">
        <a href="resume.pdf" download={true}>
          Download Resume
        </a>
      </button>
    </div>
    {/* right */}
    <div className="w-96 mb-2 -mt-2 sm:m-0">
      <img src={Bakar} alt="" className="rounded-full object-cover " />
    </div>
  </div>
 
  )
}
