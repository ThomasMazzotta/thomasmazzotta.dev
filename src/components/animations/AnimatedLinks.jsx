import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

function MenuText() {
  const menuTextRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".menu-line", menuTextRef.current)

      const pastelColors = ["#ff6b9a", "#ff9f43", "#ffd43b", "#69db7c", "#4dabf7", "#9775fa", "#3bc9db", "#ff8787"]

      const splits = lines.map((line) =>
        SplitText.create(line, {
          type: "chars",
          charsClass: "char",
        }),
      )

      splits.forEach((split, lineIndex) => {
        gsap.set(split.chars, {
          color: () => gsap.utils.random(pastelColors),
          display: "inline-block",
        })

        gsap.from(split.chars, {
          y: 30,
          opacity: 0,
          rotate: () => gsap.utils.random(-12, 12),
          stagger: 0.03,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: lineIndex * 0.12,
        })
      })
    }, menuTextRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav aria-label="Primary Navigation" className="absolute right-5 top-20">
      <ul ref={menuTextRef} className="flex flex-col text-4xl gap-0">
        <li className="menu-line rotate-8 translate-x-4">
          <a href="#home" className="inline-block">
            Home
          </a>
        </li>
        <li className="menu-line -rotate-4 -translate-x-4">
          <a href="#about" className="inline-block">
            About me
          </a>
        </li>
        <li className="menu-line rotate-3 translate-x-4">
          <a href="#projects" className="inline-block">
            Projects
          </a>
        </li>
        <li className="menu-line -rotate-4 -translate-x-4">
          <a href="#contacts" className="inline-block">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuText
