import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import cursor from "../../assets/pointer/pointer_normal.webp"
import cursorActive from "../../assets/pointer/pointer_active.webp"

const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, label, summary, [role='button'], .active-pointer"

const CURSOR_SIZE = 80
const HOTSPOT_X = 32
const HOTSPOT_Y = 30

function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const smoothX = useSpring(mouseX, { stiffness: 260, damping: 24, mass: 0.8 })
  const smoothY = useSpring(mouseY, { stiffness: 260, damping: 24, mass: 0.8 })

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")

    const updateEnabled = () => {
      setEnabled(mq.matches)
    }

    updateEnabled()
    mq.addEventListener("change", updateEnabled)

    return () => {
      mq.removeEventListener("change", updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor")
      return
    }

    document.documentElement.classList.add("has-custom-cursor")

    const handlePointerMove = (e) => {
      mouseX.set(e.clientX - HOTSPOT_X)
      mouseY.set(e.clientY - HOTSPOT_Y)
      setVisible(true)
      setActive(Boolean(e.target.closest(INTERACTIVE_SELECTOR)))
    }

    const handlePointerOver = (e) => {
      setActive(Boolean(e.target.closest(INTERACTIVE_SELECTOR)))
    }

    const handlePointerDown = () => {
      setPressed(true)
    }

    const handlePointerUp = () => {
      setPressed(false)
    }

    const handlePointerLeaveDocument = () => {
      setVisible(false)
      setPressed(false)
      setActive(false)
    }

    document.addEventListener("pointermove", handlePointerMove)
    document.addEventListener("pointerover", handlePointerOver)
    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("pointerup", handlePointerUp)
    document.addEventListener("pointerleave", handlePointerLeaveDocument)

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      document.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("pointerover", handlePointerOver)
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("pointerup", handlePointerUp)
      document.removeEventListener("pointerleave", handlePointerLeaveDocument)
    }
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: smoothX,
        y: smoothY,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: pressed ? 0.92 : active ? 1.12 : 1,
      }}
      transition={{
        opacity: { duration: 0.12 },
        scale: { type: "spring", stiffness: 320, damping: 22 },
      }}
    >
      <img
        src={active ? cursorActive : cursor}
        alt=""
        draggable="false"
        style={{
          width: `${CURSOR_SIZE}px`,
          height: "auto",
          display: "block",
          userSelect: "none",
          WebkitUserDrag: "none",
        }}
      />
    </motion.div>
  )
}

export default CustomCursor
