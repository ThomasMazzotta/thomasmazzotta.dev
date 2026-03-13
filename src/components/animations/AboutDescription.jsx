import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(SplitText, ScrollTrigger)

function AboutDescription() {
  const textRef = useRef(null)

  useLayoutEffect(() => {
    const el = textRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const split = SplitText.create(el, {
        type: "chars,words",
        charsClass: "about-char",
        wordsClass: "about-word",
      })

      gsap.set(split.chars, {
        display: "inline-block",
        willChange: "transform, opacity",
      })

      gsap.from(split.chars, {
        yPercent: "random([-100, 100])",
        rotation: "random(-30, 30)",
        autoAlpha: 0,
        ease: "back.out(1.7)",
        duration: 0.8,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      })
    }, textRef)

    return () => ctx.revert()
  }, [])

  return (
    <p ref={textRef} className="max-w-4xl mx-auto text-center leading-none text-zinc-800">
      <span className="block text-2xl sm:text-3xl md:text-4xl -rotate-1">Hi, my name is</span>

      <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-pink-500 rotate-1 mt-2">Thomas</span>

      <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 rotate-[0.5deg]">I make</span>

      <span className="block text-4xl sm:text-5xl md:text-6xl text-sky-500 -rotate-1 mt-2">
        colorful little webistites
      </span>

      <span className="block text-2xl sm:text-3xl md:text-4xl mt-6 -rotate-[0.5deg]">mixing</span>

      <span className="block text-3xl sm:text-4xl md:text-5xl text-lime-500 rotate-1 mt-2">code, motion</span>

      <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 -rotate-1">&</span>

      <span className="block text-3xl sm:text-4xl md:text-5xl text-violet-500 rotate-1 mt-2">
        a playful design touch
      </span>
    </p>
  )
}

export default AboutDescription
