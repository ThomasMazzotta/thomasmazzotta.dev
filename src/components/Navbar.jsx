import { useEffect, useState } from "react"
import { motion } from "motion/react"
import sideMenu from "../assets/navbar/side_menu.webp"
import redCross from "../assets/navbar/red_cross.webp"
import homeIcon from "../assets/navbar/home_icon.webp"
import aboutIcon from "../assets/navbar/about_icon.webp"
import projectsIcon from "../assets/navbar/projects_icon.webp"
import contactsIcon from "../assets/navbar/contacts_icon.webp"
import click from "../assets/navbar/click.webp"

const scaleOnHoverIcon = 1.1
const scaleOnTapIcon = 0.9

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav className="fixed top-0 right-0 z-50 overflow-hidden">
        <div
          className={`relative w-85 max-w-[90vw] transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-[72%]"
          }`}
        >
          <img src={sideMenu} className="block w-full h-auto select-none" alt="" />

          {isOpen ? (
            <motion.button
              type="button"
              whileTap={{ scale: scaleOnTapIcon }}
              whileHover={{ scale: scaleOnHoverIcon }}
              onClick={() => setIsOpen(false)}
              className="absolute left-[15.5%] top-[3%] z-60 w-[12%] -rotate-6 cursor-pointer border-0 bg-transparent p-0"
              aria-label="Chiudi menu"
            >
              <img src={redCross} className="block w-full h-auto select-none" alt="" />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              whileTap={{ scale: scaleOnTapIcon }}
              whileHover={{ scale: scaleOnHoverIcon }}
              onClick={() => setIsOpen(true)}
              className="absolute left-[10%] top-[6%] z-60 cursor-pointer border-0 bg-transparent p-0 text-[12px] leading-none"
              aria-label="Apri menu"
            >
              <span className="relative right-12 inline-block -rotate-12 ">
                <img src={click} alt="" className="w-27" />
              </span>
            </motion.button>
          )}

          <motion.a
            href="#home"
            whileTap={{ scale: scaleOnTapIcon }}
            whileHover={{ scale: scaleOnHoverIcon }}
            className="absolute right-[35%] top-[3%] z-60 w-[26%] rotate-[8deg] cursor-pointer"
            aria-label="Home"
          >
            <img src={homeIcon} className="block w-full h-auto select-none" alt="" />
          </motion.a>

          <motion.a
            href="#about"
            whileTap={{ scale: scaleOnTapIcon }}
            whileHover={{ scale: scaleOnHoverIcon }}
            className="absolute right-[2%] top-[0.2%] z-60 w-[26%] -rotate-[9deg] cursor-pointer"
            aria-label="About me"
          >
            <img src={aboutIcon} className="block w-full h-auto select-none" alt="" />
          </motion.a>

          <motion.a
            href="#projects"
            whileTap={{ scale: scaleOnTapIcon }}
            whileHover={{ scale: scaleOnHoverIcon }}
            className="absolute right-[15%] top-[31%] z-60 w-[22%] -rotate-[9deg] cursor-pointer"
            aria-label="Projects"
          >
            <img src={projectsIcon} className="block w-full h-auto select-none" alt="" />
          </motion.a>

          <motion.a
            href="#contacts"
            whileTap={{ scale: scaleOnTapIcon }}
            whileHover={{ scale: scaleOnHoverIcon }}
            className="absolute right-[1%] top-[56%] z-60 w-[23%] -rotate-[8deg] cursor-pointer"
            aria-label="Contacts"
          >
            <img src={contactsIcon} className="block w-full h-auto select-none" alt="" />
          </motion.a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
