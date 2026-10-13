import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import profileImage from "../assets/raj-prasad.jpeg";

/* =========================================
   ANIMATION SETTINGS
========================================= */

const titleContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleItem = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   HERO
========================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pt-24 sm:px-8 md:px-10 lg:px-14"
    >
      {/* =====================================
          BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 grid-background opacity-70" />

      <div className="pointer-events-none absolute -right-[15%] top-[15%] h-[650px] w-[650px] rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="pointer-events-none absolute left-[20%] top-[45%] h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[120px]" />

      {/* =====================================
          MAIN CONTAINER
      ====================================== */}

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1700px] flex-col">

        {/* ===================================
            TOP META
        ==================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-white/10 pb-4"
        >
          <p className="mono text-[8px] uppercase tracking-[0.35em] text-zinc-600 sm:text-[9px]">
            Portfolio / 2026
          </p>

          <p className="mono text-[8px] uppercase tracking-[0.35em] text-zinc-600 sm:text-[9px]">
            Jamshedpur / India
          </p>
        </motion.div>

        {/* ===================================
            HERO AREA
        ==================================== */}

        <div className="relative flex flex-1 items-center py-10 sm:py-12 lg:py-8">

          {/* =================================
              VERTICAL AVAILABILITY
          ================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
            className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 origin-left lg:block"
          >
            <div className="flex items-center gap-3 whitespace-nowrap">

              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.5)]" />

              <span className="mono text-[8px] uppercase tracking-[0.3em] text-zinc-500">
                Available for opportunities
              </span>

            </div>
          </motion.div>

          {/* =================================
              MAIN GRID
          ================================== */}

          <div className="grid w-full items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:gap-10">

            {/* =================================
                LEFT — TYPOGRAPHY
            ================================== */}

            <motion.div
              variants={titleContainer}
              initial="hidden"
              animate="show"
              className="relative z-10 lg:pl-10 xl:pl-14"
            >

              {/* Intro */}

              <motion.div
                variants={titleItem}
                className="mb-6 flex items-center gap-3 sm:mb-7"
              >
                <span className="h-px w-8 bg-white/40" />

                <p className="mono text-[9px] uppercase tracking-[0.3em] text-zinc-500 sm:text-[10px]">
                  Hi, I'm Raj Prasad
                </p>
              </motion.div>

              {/* =================================
                  BIG TITLE
              ================================== */}

              <h1 className="relative uppercase font-black leading-[0.78] tracking-[-0.075em] text-[clamp(4rem,8.7vw,9.2rem)]">

                <motion.span
                  variants={titleItem}
                  className="block whitespace-nowrap"
                >
                  FRONTEND
                </motion.span>

                <motion.span
                  variants={titleItem}
                  className="block whitespace-nowrap"
                >
                  WEB
                </motion.span>

                <motion.span
                  variants={titleItem}
                  className="block whitespace-nowrap outline-text"
                >
                  DEVELOPER
                </motion.span>

              </h1>

              {/* Small plus decoration */}

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.15,
                  duration: 0.5,
                }}
                className="absolute right-[5%] top-[7%] hidden lg:block"
              >
                <span className="relative block h-7 w-7">

                  <span className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-white/40" />

                  <span className="absolute left-0 top-1/2 h-px w-7 -translate-y-1/2 bg-white/40" />

                </span>
              </motion.div>

              {/* =================================
                  DESCRIPTION
              ================================== */}

              <motion.div
                variants={fadeUp}
                className="mt-7 max-w-[590px] sm:mt-8"
              >
                <p className="text-sm leading-6 text-zinc-500 sm:text-[15px] sm:leading-7">
                  I build responsive and modern web experiences
                  using React.js, JavaScript and the MERN stack.
                </p>
              </motion.div>

              {/* =================================
                  TECH FOCUS
              ================================== */}

              <motion.div
                variants={fadeUp}
                className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"
              >

                <span className="mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">
                  Focus
                </span>

                <span className="text-xs text-zinc-400">
                  React.js
                </span>

                <span className="text-zinc-700">
                  /
                </span>

                <span className="text-xs text-zinc-400">
                  JavaScript
                </span>

                <span className="text-zinc-700">
                  /
                </span>

                <span className="text-xs text-zinc-400">
                  MERN Stack
                </span>

              </motion.div>

              {/* =================================
                  BUTTONS
              ================================== */}

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-3 sm:mt-8"
              >

                {/* =================================
                    VIEW PROJECTS
                ================================== */}

                <a
                  href="#projects"
                  className="group inline-flex min-h-[48px] min-w-[160px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] !text-black transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200"
                >
                  <span className="!text-black">
                    View Projects
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="!text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12"
                  />
                </a>

                {/* =================================
                    DOWNLOAD RESUME
                ================================== */}

                <a
                  href="/Raj_Prasad_Web_Developer_Resume.pdf"
                  download
                  className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-300 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >

                  <Download
                    size={14}
                    className="text-zinc-300 transition-all duration-300 group-hover:text-black group-hover:translate-y-0.5"
                  />

                  <span className="text-zinc-300 transition-colors duration-300 group-hover:text-black">
                    Download Resume
                  </span>

                </a>

              </motion.div>

              {/* =================================
                  SOCIAL
              ================================== */}

              <motion.div
                variants={fadeUp}
                className="mt-7 flex items-center gap-3"
              >

                <a
                  href="https://github.com/rajprasad1001"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <FaGithub size={16} />
                </a>

                <a
                  href="https://linkedin.com/in/raj-prasad-48732718"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <FaLinkedin size={16} />
                </a>

                <div className="ml-2 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />

                  <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    Available
                  </span>

                </div>

              </motion.div>

            </motion.div>

            {/* =================================
                RIGHT — LARGE PORTRAIT
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.15,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto lg:max-w-[560px] xl:max-w-[620px]"
            >

              {/* =================================
                  PORTRAIT LABEL
              ================================== */}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                }}
                className="absolute -top-7 left-2 z-20"
              >
                <span className="mono text-[8px] uppercase tracking-[0.28em] text-zinc-600">
                  Portrait / 01
                </span>
              </motion.div>

              {/* =================================
                  DECORATIVE FRAME 1
              ================================== */}

              <motion.div
                animate={{
                  rotate: [-5, -4, -5],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[-10px] rounded-[40px] border border-white/15"
              />

              {/* =================================
                  DECORATIVE FRAME 2
              ================================== */}

              <motion.div
                animate={{
                  rotate: [5, 4, 5],
                  y: [0, 3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[-5px] rounded-[40px] border border-white/[0.07]"
              />

              {/* =================================
                  MAIN IMAGE CONTAINER
              ================================== */}

              <div className="relative aspect-[4/5] min-h-[430px] overflow-hidden rounded-[34px] border border-white/10 bg-zinc-950 p-2 sm:min-h-[520px] lg:min-h-[590px] xl:min-h-[650px]">

                <div className="hero-glow relative h-full w-full overflow-hidden rounded-[27px]">

                  {/* IMAGE */}

                  <img
                    src={profileImage}
                    alt="Raj Prasad"
                    className="hero-image h-full w-full object-cover object-[50%_12%] transition-transform duration-[1.2s] hover:scale-[1.035]"
                  />

                  {/* Dark overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />

                  {/* Soft side gradient */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15" />

                  {/* =================================
                      IMAGE TOP LABEL
                  ================================== */}

                  <div className="absolute left-5 top-5">
                    <span className="mono text-[8px] uppercase tracking-[0.3em] text-white/40">
                      RP / 26
                    </span>
                  </div>

                  {/* =================================
                      IMAGE BOTTOM INFO
                  ================================== */}

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                    <div>

                      <p className="text-xl font-medium tracking-tight text-white">
                        Raj Prasad
                      </p>

                      <p className="mono mt-1 text-[8px] uppercase tracking-[0.2em] text-white/40">
                        Frontend Developer
                      </p>

                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black">
                      <ArrowUpRight size={15} />
                    </div>

                  </div>

                </div>

              </div>

              {/* =================================
                  SIDE INFORMATION
              ================================== */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                }}
                className="absolute -bottom-12 right-0 hidden lg:block xl:-right-8"
              >
                <p className="mono text-right text-[8px] uppercase leading-5 tracking-[0.17em] text-zinc-600">
                  B.Tech CSE
                  <br />
                  Frontend / Web
                  <br />
                  Jamshedpur, India
                </p>
              </motion.div>

              {/* =================================
                  SIGNATURE-STYLE NAME
              ================================== */}

              <motion.div
                initial={{ opacity: 0, rotate: -15 }}
                animate={{ opacity: 1, rotate: -8 }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                }}
                className="absolute -right-5 top-1/2 hidden -translate-y-1/2 xl:block"
              >
                <span className="font-serif text-xl italic text-white/40">
                  Raj Prasad
                </span>
              </motion.div>

            </motion.div>

          </div>

        </div>

        {/* =====================================
            BOTTOM BAR
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="flex items-center justify-between border-t border-white/10 py-4 sm:py-5"
        >

          {/* Scroll */}

          <a
            href="#about"
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-zinc-600 transition-colors duration-300 hover:text-white sm:text-[9px]"
          >

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 group-hover:translate-y-1">
              <ArrowDown size={12} />
            </span>

            Scroll to explore

          </a>

          {/* Tech */}

          <div className="hidden items-center gap-4 sm:flex md:gap-5">

            <span className="mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
              React.js
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span className="mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
              JavaScript
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span className="mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
              MERN
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span className="mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
              2026
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}