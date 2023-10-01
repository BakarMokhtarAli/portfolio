import { Hero } from "../../Components";
import { Testimonials } from "./Components";
export const Home = ({title}) => {
  document.title = title;
  return (
    <main>
      <Hero />
      <Testimonials />
    </main>
  )
}
