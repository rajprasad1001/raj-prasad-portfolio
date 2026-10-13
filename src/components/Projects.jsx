import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  {
    number: "01",
    title: "MegaBlog",
    description:
      "A modern blogging platform built using React.js, Appwrite, Redux Toolkit and Tailwind CSS.",
    technologies: ["React", "Appwrite", "Redux", "Tailwind"],
    liveLink: "https://mega-blog-o1be.vercel.app/",
    githubLink: "https://github.com/rajprasad1001",
  },

  {
    number: "02",
    title: "Shree Shyam Sweets",
    description:
      "Freelance Client Project — Designed and developed a professional business website for Shree Shyam Sweets, helping establish its online presence and showcase the business to customers near New Shiv Mandir, Sopodera, Parsudih, Jamshedpur.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Local SEO",
      "Responsive Design",
    ],
    liveLink: "https://shreeshyamsweets.in/",
    githubLink: "https://github.com/rajprasad1001",
  },

  {
    number: "03",
    title: "Amruta Packers & Movers",
    description:
     "Freelance Client Project — Built a modern, responsive business website for a Packers & Movers service, creating a professional digital presence and making essential business information accessible to potential customers.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    liveLink: "https://www.amrutapackersmovers.in/",
    githubLink: "https://github.com/rajprasad1001",
  },

  {
    number: "04",
    title: "Learning Management System",
    description:
      "A responsive learning platform designed to provide an organized digital learning experience.",
    technologies: ["React", "JavaScript", "CSS"],
    liveLink: null,
    githubLink: "https://github.com/rajprasad1001",
  },

  {
    number: "05",
    title: "Pokedex",
    description:
      "An interactive Pokémon application using React.js and external APIs to display dynamic data.",
    technologies: ["React", "API", "JavaScript"],
    liveLink: null,
    githubLink: "https://github.com/rajprasad1001",
  },
];


/* =========================================
   ANIMATION SETTINGS
========================================= */

const ease = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease,
    },
  },
};

/* =========================================
   PROJECTS
========================================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32"
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease,
        }}
        className="pointer-events-none absolute right-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mb-16 md:mb-20">

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="flex items-center gap-3"
          >

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 32,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="h-px bg-white/40"
            />

            <p className="mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
              SELECTED WORK — 04
            </p>

          </motion.div>


          {/* BIG HEADING */}

          <div className="mt-6">

            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className="text-5xl font-semibold leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-8xl"
            >

              Projects that
              <br />

              <span className="text-zinc-600">
                solve problems.
              </span>

            </motion.h2>

          </div>


          {/* DESCRIPTION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
            className="mt-8 flex items-center justify-between"
          >

            <p className="max-w-md text-sm leading-6 text-zinc-600">
              A selection of applications and digital experiences I've built
              while exploring modern web development.
            </p>

            <span className="mono hidden text-[8px] uppercase tracking-[0.25em] text-zinc-700 md:block">
              04 PROJECTS
            </span>

          </motion.div>

        </div>


        {/* =========================================
            PROJECT CARDS
        ========================================== */}

        <div className="space-y-5">

          {projects.map((project, index) => (

            <motion.div
              key={project.number}

              variants={cardVariants}

              initial="hidden"

              whileInView="visible"

              viewport={{
                once: true,
                amount: 0.12,
              }}

              transition={{
                delay: index * 0.12,
              }}

              whileHover={{
                y: -8,
                scale: 0.995,
              }}

              whileTap={{
                scale: 0.99,
              }}

              className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#070707] p-7 transition-all duration-500 hover:border-white/25 hover:bg-white/[0.035] md:p-10 lg:p-12"
            >

              {/* =================================
                  HOVER LIGHT SWEEP
              ================================== */}

              <motion.div
                initial={{
                  x: "-140%",
                }}

                whileHover={{
                  x: "160%",
                }}

                transition={{
                  duration: 0.9,
                  ease,
                }}

                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent blur-md"
              />


              {/* =================================
                  CARD GLOW
              ================================== */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />


              {/* =================================
                  CONTENT
              ================================== */}

              <div className="relative z-20 grid gap-8 md:grid-cols-[80px_1fr_60px] md:items-start">

                {/* =================================
                    NUMBER
                ================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.12,
                    ease,
                  }}
                >

                  <span className="mono inline-block text-xs font-medium text-zinc-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-zinc-200">
                    {project.number}
                  </span>

                  <motion.div
                    initial={{
                      height: 0,
                    }}

                    whileInView={{
                      height: 55,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 0.7,
                      delay: 0.3 + index * 0.12,
                      ease,
                    }}

                    className="mt-4 hidden w-px bg-gradient-to-b from-white/20 to-transparent md:block"
                  />

                </motion.div>


                {/* =================================
                    PROJECT INFORMATION
                ================================== */}

                <div>

                  {/* PROJECT TITLE */}


                   {(project.number === "02" || project.number === "03") && (
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Freelance Client Project
                  </span>
                  )}


                  <h3 className="text-3xl font-bold tracking-[-0.05em] text-white transition-all duration-500 group-hover:translate-x-2 md:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>


                  {/* TITLE UNDERLINE */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}

                    whileInView={{
                      width: "100%",
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 0.8,
                      delay: 0.25 + index * 0.12,
                      ease,
                    }}

                    className="mt-4 h-px max-w-[180px] bg-white/10"
                  />


                  {/* DESCRIPTION */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 0.7,
                      delay: 0.35 + index * 0.12,
                      ease,
                    }}

                    className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300 md:text-[15px]"
                  >
                    {project.description}
                  </motion.p>


                  {/* =================================
                      TECHNOLOGIES
                  ================================== */}

                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.technologies.map(
                      (technology, technologyIndex) => (

                        <motion.span
                          key={technology}

                          initial={{
                            opacity: 0,
                            scale: 0.85,
                          }}

                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}

                          viewport={{
                            once: true,
                          }}

                          transition={{
                            duration: 0.35,
                            delay:
                              0.45 +
                              index * 0.12 +
                              technologyIndex * 0.08,
                            ease,
                          }}

                          whileHover={{
                            y: -4,
                            scale: 1.05,
                          }}

                          className="mono rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-zinc-500 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                        >
                          {technology}
                        </motion.span>

                      )
                    )}

                  </div>


                  {/* =================================
                      PROJECT LINKS
                  ================================== */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {/* LIVE WEBSITE */}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"

                        onClick={(e) => {
                          e.stopPropagation();
                        }}

                        className="group/live inline-flex items-center gap-2 rounded-full bg-gray-500 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
                      >

                        <FaExternalLinkAlt
                          size={14}
                          className="transition-transform duration-300 group-hover/live:rotate-12"
                        />

                        <span>
                          View Live Website
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                        />

                      </a>
                    )}


                    {/* GITHUB */}

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"

                      onClick={(e) => {
                        e.stopPropagation();
                      }}

                      className="group/github inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                    >

                      <FaGithub
                        size={14}
                        className="transition-transform duration-300 group-hover/github:scale-110"
                      />

                      <span>
                        GitHub
                      </span>

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5"
                      />

                    </a>

                  </div>

                </div>


                {/* =================================
                    ARROW
                ================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    rotate: -20,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.12,
                    ease,
                  }}

                  whileHover={{
                    scale: 1.15,
                    rotate: 45,
                  }}

                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black md:flex"
                >

                  <ArrowUpRight size={19} />

                </motion.div>

              </div>


              {/* =================================
                  BOTTOM DIVIDER
              ================================== */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}

                whileInView={{
                  scaleX: 1,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 1,
                  delay: 0.5 + index * 0.12,
                  ease,
                }}

                className="relative z-20 mt-10 h-px origin-left bg-white/[0.06]"
              />


              {/* =================================
                  BOTTOM LABEL
              ================================== */}

              <div className="relative z-20 mt-4 flex items-center justify-between">

                <span className="mono text-[8px] uppercase tracking-[0.25em] text-zinc-700">
                  Selected project
                </span>

                <span className="mono text-[8px] uppercase tracking-[0.25em] text-zinc-700 transition-colors duration-300 group-hover:text-zinc-400">

                  {project.liveLink
                    ? "Live website + GitHub ↗"
                    : "View on GitHub ↗"}

                </span>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =========================================
            SECTION DIVIDER
        ========================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}

          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 1,
            ease,
          }}

          className="mt-16 h-px origin-left bg-gradient-to-r from-white/20 via-white/5 to-transparent"
        />

      </div>

    </section>
  );
}