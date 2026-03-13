import panda from "../assets/about_page/panda.webp"
import about from "../assets/about_page/about.webp"
// import leaves from "../assets/about_page/leaves.webp"
import AboutDescription from "./animations/AboutDescription"

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="min-h-screen px-6 pt-20">
      <div className="flex flex-col items-center  text-center w-full gap-10">
        <img src={about} className="w-62 z-10" alt="About section title illustration" />

        <div className="max-w-2xl relative z-10">
          <h2 id="about-title" className="sr-only">
            About me
          </h2>

          <AboutDescription />
        </div>

        <img src={panda} className="min-w-82 max-w-120 -translate-x-20 z-10 " alt="Illustrated panda" />
        {/* <img src={leaves} className="absolute z-0 mt-6 rotate-20 bottom-20 " alt="" aria-hidden="true" /> */}
      </div>
    </section>
  )
}

export default About
