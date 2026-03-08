import React, { useState } from "react"
import { motion } from "motion/react"
import sideMenu from "../assets/navbar/side_menu.webp"
import redCross from "../assets/navbar/red_cross.webp"
import homeIcon from "../assets/navbar/home_icon.webp"
import aboutIcon from "../assets/navbar/about_icon.webp"
import projectsIcon from "../assets/navbar/projects_icon.webp"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="">
      <img src={sideMenu} className="absolute z-50 w-85 right-0" alt="" />
      <img src={redCross} className="absolute w-10 top-2 left-22 z-100" alt="" />
      <img src={homeIcon} className="absolute z-100 right-30 w-20 top-5 rotate-10" alt="" />
      <img src={aboutIcon} className="absolute z-100 right-10 w-20 top-5 -rotate-10" alt="" />
      <img src={projectsIcon} className="absolute z-100 right-10 w-20 top-15 rotate-10" alt="" />
      <img src={homeIcon} className="absolute z-100" alt="" />
    </nav>
  )
}

export default Navbar
