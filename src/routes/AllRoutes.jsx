import { Routes, Route } from "react-router-dom"
import { Header, Footer } from "../Components"
import { Home, Projects, Contact, About } from "../pages"


export const AllRoutes = () => {
  return (
    <main className="dark:bg-slate-800">
        <Header />
        <Routes>
            <Route path="/" element={<Home title="Home"/>} />
            <Route path="/projects" element={<Projects title="Projects"/>} />
            <Route path="/About" element={<About title="About"/>} />
            <Route path="/contact" element={<Contact title="Contact"/>} />
        </Routes>
        <Footer />
    </main>
  )
}
