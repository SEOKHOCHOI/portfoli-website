import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_black"><BsLinkedin /></a>
      <a href="https://github.com" target="_black"><FaGithub /></a>
      <a href="https://dribble.com" target="_black"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials