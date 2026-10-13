import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32"
    >
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]"
      />

      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="glass relative overflow-hidden rounded-[30px] p-7 md:p-12 lg:p-14"
        >
          {/* Decorative corner */}
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 overflow-hidden">
            <motion.div
              initial={{ x: 80, y: -80, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-[-35px] top-[35px] h-px w-40 rotate-45 bg-white/10"
            />
          </div>

          {/* Section header */}
          <motion.div
            variants={fadeUp}
            className="mb-14 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />

              <span className="mono text-[10px] tracking-[0.3em] text-zinc-500">
                ABOUT — 01
              </span>
            </div>

            <span className="mono hidden text-[9px] tracking-[0.2em] text-zinc-700 sm:block">
              WEB DEVELOPER
            </span>
          </motion.div>

          {/* Main content */}
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Heading */}
            <motion.div variants={fadeUp}>
              <p className="mono mb-5 text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                A little about me
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-5xl lg:text-6xl xl:text-[68px]">
                I build modern digital experiences that are{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.45,
                  }}
                  className="text-zinc-600"
                >
                  clean, responsive and user-focused.
                </motion.span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeRight}
              className="flex flex-col justify-end"
            >
              <div className="mb-7 h-px w-12 bg-white/20" />

              <p className="text-sm leading-7 text-zinc-400 md:text-[15px]">
                I'm a B.Tech CSE graduate passionate about frontend
                development and building modern web applications with a
                strong focus on usability, responsiveness and clean
                interfaces.
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-500 md:text-[15px]">
                I have hands-on experience working with React.js,
                JavaScript, Tailwind CSS, APIs and the MERN ecosystem,
                turning ideas into functional and polished web
                experiences.
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.25 }}
                className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500"
              >
                <span className="h-px w-6 bg-zinc-700" />
                Building for the web
                <ArrowUpRight size={13} />
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ originX: 0 }}
            className="mt-16 h-px w-full bg-white/10"
          />

          {/* Information cards */}
          <motion.div
            variants={containerVariants}
            className="grid gap-0 md:grid-cols-3"
          >
            {/* Education */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="group relative border-b border-white/10 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0"
            >
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <GraduationCap size={18} strokeWidth={1.5} />
                </div>

                <span className="mono text-[9px] text-zinc-700">
                  01
                </span>
              </div>

              <p className="mono text-[9px] tracking-[0.25em] text-zinc-600">
                EDUCATION
              </p>

              <p className="mt-3 text-sm font-medium text-white">
                B.Tech CSE
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                2025
              </p>
            </motion.div>

            {/* Specialization */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="group relative border-b border-white/10 py-9 md:border-b-0 md:border-r md:px-8"
            >
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <Code2 size={18} strokeWidth={1.5} />
                </div>

                <span className="mono text-[9px] text-zinc-700">
                  02
                </span>
              </div>

              <p className="mono text-[9px] tracking-[0.25em] text-zinc-600">
                SPECIALIZATION
              </p>

              <p className="mt-3 text-sm font-medium text-white">
                Frontend Development
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                React / JavaScript / MERN
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="group relative py-9 md:px-8 md:pr-0"
            >
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>

                <span className="mono text-[9px] text-zinc-700">
                  03
                </span>
              </div>

              <p className="mono text-[9px] tracking-[0.25em] text-zinc-600">
                LOCATION
              </p>

              <p className="mt-3 text-sm font-medium text-white">
                Jamshedpur
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Jharkhand, India
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-px bg-white/[0.04]"
          />
        </motion.div>
      </div>
    </section>
  );
}