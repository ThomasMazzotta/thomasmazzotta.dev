import paperPencil from "/src/assets/home_page/paper_pencil.webp"
import welcome from "/src/assets/home_page/welcome.webp"
import bee from "/src/assets/home_page/bee.webp"
import flower from "/src/assets/home_page/flower.webp"
import AnimatedLinks from "./animations/AnimatedLinks"

function Home() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <img src={paperPencil} alt="Paper and pencil" className="absolute top-0 left-0 w-72 z-0" />

      <img
        src={welcome}
        alt="Welcome"
        className="absolute left-1/2 top-1/2 w-87 -translate-x-1/2 -translate-y-[170%] z-10"
      />
      <img src={bee} alt="Bee" className="absolute left-1/2 top-1/2 w-70 -translate-x-1/2 z-10" />
      <img
        src={flower}
        alt="Flower"
        className="absolute left-1/2 top-1/2 w-70 -translate-x-1/2 z-10 translate-y-[25%]"
      />
      <AnimatedLinks></AnimatedLinks>
    </section>
  )
}

export default Home
