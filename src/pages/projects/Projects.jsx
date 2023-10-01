import React from 'react'
import { Hero, ProjectLists } from './Components';

export const Projects = (props) => {
  document.title = props.title;
  return (
    <main>
      <Hero />
      <ProjectLists />
    </main>
  )
}
