import { Hero } from "./Components"

export const About = ({title}) => {
  document.title = title;
  return (
    <main>
      <Hero />
    </main>
  )
}
