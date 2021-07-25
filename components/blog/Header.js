import { motion } from "framer-motion"
export default function Header() {
  const header = {
    visible: {
      y: ["100%", "-100%"],
      transition: {
        repeat: Infinity,
        ease: "easeOut",
      }
    }
  }
  const variant = {
    visible: {
      scale: 1.01,
      rotate: [0, -1, -1, 0]
    }
  }

  return (
    <motion.div whileHover="visible" variants={variant}>
      <div className="rounded-md shadow hover:shadow-md p-8 bg-skin-inverted  cursor-auto">
        <h1 className="text-4xl font-extrabold capitalize bg-gradient-to-r text-transparent bg-clip-text from-white to-yellow-100">every thing is imposible unless you prove it</h1>
        <motion.div variants={header} animate="visible" transition="duration:'0.5'" className="bg-white w-5 h-5 rounded-full" />
      </div>
    </motion.div>
  )
}
