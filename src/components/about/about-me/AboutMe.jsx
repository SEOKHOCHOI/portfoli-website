import React from 'react'
import './aboutme.css'

const AboutMe = ({
  me,
  info,
  icon
}) => {
  return (
    <article className="about__card">
      {icon}
      <h5>{me}</h5>
      <small>{info}</small>
    </article>
  )
}

export default AboutMe