import { motion } from "framer-motion";
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleReveal,
  blurReveal,
} from "./variants";

const animations = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleReveal,
  blur: blurReveal,
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  amount = 0.2,
}) {
  const animation = animations[direction] || fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount,
      }}
      variants={animation}
      transition={{
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}